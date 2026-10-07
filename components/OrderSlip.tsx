'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Eye, Minus, Plus, Share2, Trash2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Locale } from '@/lib/translations';
import { OrderLine, ORDER_UPDATED_EVENT, readOrder, writeOrder } from '@/lib/order';
import { PRODUCTS } from '@/data/products';

interface OrderSlipProps {
  locale: Locale;
}

interface CustomerDetails {
  name: string;
  organization: string;
  phone: string;
  address: string;
  notes: string;
}

interface PdfItem {
  name: string;
  quantity: number;
  specification: string;
}

interface PdfData {
  locale: Locale;
  reference: string;
  customer: CustomerDetails;
  items: PdfItem[];
}

const emptyCustomer: CustomerDetails = {
  name: '',
  organization: '',
  phone: '',
  address: '',
  notes: '',
};

function wrapCanvasText(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const paragraphs = text.split(/\r?\n/);
  const lines: string[] = [];
  for (const paragraph of paragraphs) {
    if (!paragraph) {
      lines.push('');
      continue;
    }
    const words = paragraph.split(/\s+/);
    let current = '';
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (current && context.measureText(next).width > maxWidth) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

function joinBytes(parts: Uint8Array[]): Uint8Array {
  const result = new Uint8Array(parts.reduce((total, part) => total + part.length, 0));
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }
  return result;
}

function formatNepalTime(date: Date, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === 'ne' ? 'ne-NP-u-ca-gregory' : 'en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kathmandu',
    }).format(date);
  } catch {
    return date.toLocaleString();
  }
}

function makeReference(date: Date): string {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kathmandu',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(date);
    const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '00';
    const suffix = globalThis.crypto?.randomUUID
      ? globalThis.crypto.randomUUID().slice(0, 8).toUpperCase()
      : Math.random().toString(36).slice(2, 10).toUpperCase();
    return `SS-${get('year')}${get('month')}${get('day')}-${get('hour')}${get('minute')}${get('second')}-${suffix}`;
  } catch {
    return `SS-${Date.now()}`;
  }
}

function loadLogo(): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('The official logo could not be loaded for the order PDF.'));
    image.src = '/logo.svg';
  });
}

async function createOrderPdf(data: PdfData): Promise<Blob> {
  await document.fonts.ready;
  await document.fonts.load('22px "Noto Sans Devanagari"');
  const logo = await loadLogo();
  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 82;
  const contentWidth = pageWidth - margin * 2;
  const lineHeight = 36;
  const encoder = new TextEncoder();
  const pageImages: Uint8Array[] = [];
  let pageNumber = 0;
  let context: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;
  let cursorY = 0;

  const isNe = data.locale === 'ne';
  const generatedAt = new Date();
  const texts = isNe
    ? {
      title: 'अर्डर सूची',
      ref: 'स्लिप सन्दर्भ',
      date: 'मिति तथा समय (नेपाल)',
      customer: 'ग्राहक विवरण',
      name: 'नाम',
      organization: 'संस्था',
      phone: 'फोन',
      address: 'ठेगाना',
      items: 'सामग्री विवरण',
      quantity: 'परिमाण',
      specification: 'आवश्यक साइज / मोडेल / विवरण',
      notes: 'कैफियत',
      availability: 'अर्डर सोधपुछ — उपलब्धता र अन्तिम मूल्य पुष्टि गर्नुपर्नेछ।',
    }
    : {
      title: 'Order slip',
      ref: 'Slip reference',
      date: 'Date and time (Nepal)',
      customer: 'Customer details',
      name: 'Name',
      organization: 'Hospital / clinic / shop',
      phone: 'Phone',
      address: 'Delivery address',
      items: 'Requested items',
      quantity: 'Quantity',
      specification: 'Requested size / model / specification',
      notes: 'Notes',
      availability: 'Order enquiry — availability and final price require confirmation.',
    };
  const pageLabel = isNe ? 'पृष्ठ' : 'Page';

  const startPage = () => {
    canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    const pageContext = canvas.getContext('2d');
    if (!pageContext) throw new Error('Your browser could not create the PDF page.');
    context = pageContext;
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, pageWidth, pageHeight);
    context.fillStyle = '#f0fdf4';
    context.fillRect(0, 0, pageWidth, 20);
    context.drawImage(logo, margin, 42, 106, 106);
    context.fillStyle = '#14532d';
    context.font = 'bold 38px Manrope, "Noto Sans Devanagari", Mangal, sans-serif';
    context.fillText('Saphal Surgical House', margin + 126, 84);
    context.fillStyle = '#17251c';
    context.font = 'bold 30px "Noto Sans Devanagari", Mangal, sans-serif';
    context.fillText(texts.title, margin + 126, 129);
    context.fillStyle = '#475569';
    context.font = '20px "Noto Sans Devanagari", Mangal, sans-serif';
    context.fillText(`${texts.ref}: ${data.reference}`, margin, 185, contentWidth);
    context.fillText(`${texts.date}: ${formatNepalTime(generatedAt, data.locale)}`, margin, 220, contentWidth);
    context.fillText(`${siteConfig.phone.primary.display}  |  ${siteConfig.phone.secondary.display}  |  WhatsApp ${siteConfig.whatsapp.display}`, margin, 255, contentWidth);
    context.fillText(siteConfig.address.fullAddress[data.locale], margin, 287, contentWidth);
    context.strokeStyle = '#b8d8bf';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, 310);
    context.lineTo(pageWidth - margin, 310);
    context.stroke();
    cursorY = 350;
    pageNumber += 1;
  };

  const finalizePage = () => {
    context.fillStyle = '#64756a';
    context.font = '18px Manrope, "Noto Sans Devanagari", Mangal, sans-serif';
    context.fillText(`${pageLabel} ${pageNumber}`, pageWidth - margin - 110, pageHeight - 40);
    pageImages.push(encodePage());
  };

  const ensureRoom = (height: number) => {
    if (cursorY + height > pageHeight - 108) {
      finalizePage();
      startPage();
      context.fillStyle = '#14532d';
      context.font = 'bold 24px "Noto Sans Devanagari", Mangal, sans-serif';
      context.fillText(`${texts.title} — ${data.reference}`, margin, cursorY);
      cursorY += 42;
    }
  };

  const encodePage = () => {
    const encoded = canvas.toDataURL('image/jpeg', 0.92).split(',')[1];
    if (!encoded) throw new Error('Your browser could not encode an order PDF page.');
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  };

  const drawParagraph = (
    text: string,
    options: { font: string; color: string; x?: number; width?: number; gap?: number },
  ) => {
    context.font = options.font;
    context.fillStyle = options.color;
    const x = options.x ?? margin;
    const width = options.width ?? contentWidth;
    const gap = options.gap ?? lineHeight;
    for (const line of wrapCanvasText(context, text, width)) {
      ensureRoom(gap);
      context.font = options.font;
      context.fillStyle = options.color;
      if (line) context.fillText(line, x, cursorY, width);
      cursorY += gap;
    }
  };

  startPage();
  drawParagraph(texts.customer, { font: 'bold 25px "Noto Sans Devanagari", Mangal, sans-serif', color: '#14532d', gap: 42 });
  drawParagraph(`${texts.name}: ${data.customer.name || '-'}`, { font: '22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#17251c' });
  drawParagraph(`${texts.organization}: ${data.customer.organization || '-'}`, { font: '22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#17251c' });
  drawParagraph(`${texts.phone}: ${data.customer.phone || '-'}`, { font: '22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#17251c' });
  drawParagraph(`${texts.address}: ${data.customer.address || '-'}`, { font: '22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#17251c' });
  cursorY += 12;
  drawParagraph(texts.items, { font: 'bold 25px "Noto Sans Devanagari", Mangal, sans-serif', color: '#14532d', gap: 42 });

  data.items.forEach((item, index) => {
    ensureRoom(88);
    context.fillStyle = '#f0fdf4';
    context.fillRect(margin, cursorY - 26, contentWidth, 76);
    drawParagraph(`${index + 1}. ${item.name}`, {
      font: 'bold 22px "Noto Sans Devanagari", Mangal, sans-serif',
      color: '#17251c',
      width: contentWidth - 170,
      gap: 34,
    });
    context.fillStyle = '#14532d';
    context.font = 'bold 21px "Noto Sans Devanagari", Mangal, sans-serif';
    context.fillText(`${texts.quantity}: ${item.quantity}`, pageWidth - margin - 160, cursorY - 34, 160);
    if (item.specification.trim()) {
      drawParagraph(`${texts.specification}: ${item.specification.trim()}`, {
        font: '20px "Noto Sans Devanagari", Mangal, sans-serif',
        color: '#475569',
        x: margin + 18,
        width: contentWidth - 36,
        gap: 32,
      });
    }
    cursorY += 12;
  });

  if (data.customer.notes.trim()) {
    drawParagraph(texts.notes, { font: 'bold 24px "Noto Sans Devanagari", Mangal, sans-serif', color: '#14532d', gap: 40 });
    drawParagraph(data.customer.notes.trim(), { font: '22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#17251c' });
  }
  cursorY += 18;
  drawParagraph(texts.availability, { font: 'bold 22px "Noto Sans Devanagari", Mangal, sans-serif', color: '#14532d', gap: 38 });
  drawParagraph(`WhatsApp: ${siteConfig.whatsapp.display}`, { font: '20px Manrope, "Noto Sans Devanagari", Mangal, sans-serif', color: '#475569', gap: 30 });

  finalizePage();

  const objects: Uint8Array[] = new Array(3 + pageImages.length * 3);
  objects[1] = encoder.encode('<< /Type /Catalog /Pages 2 0 R >>');
  const pageObjectNumbers = pageImages.map((_, index) => 3 + index * 3);
  objects[2] = encoder.encode(`<< /Type /Pages /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(' ')}] /Count ${pageImages.length} >>`);
  pageImages.forEach((image, index) => {
    const pageObject = 3 + index * 3;
    const imageObject = pageObject + 1;
    const contentObject = pageObject + 2;
    const content = encoder.encode('q 595 0 0 842 0 0 cm /Im0 Do Q');
    objects[pageObject] = encoder.encode(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im0 ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>`,
    );
    objects[imageObject] = joinBytes([
      encoder.encode(`<< /Type /XObject /Subtype /Image /Width ${pageWidth} /Height ${pageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>\nstream\n`),
      image,
      encoder.encode('\nendstream'),
    ]);
    objects[contentObject] = joinBytes([
      encoder.encode(`<< /Length ${content.length} >>\nstream\n`),
      content,
      encoder.encode('\nendstream'),
    ]);
  });

  const parts: Uint8Array[] = [encoder.encode('%PDF-1.4\n')];
  const offsets = new Array(objects.length).fill(0) as number[];
  let totalLength = parts[0].length;
  for (let number = 1; number < objects.length; number += 1) {
    const object = objects[number];
    if (!object) throw new Error('The PDF page data is incomplete.');
    const header = encoder.encode(`${number} 0 obj\n`);
    const footer = encoder.encode('\nendobj\n');
    offsets[number] = totalLength;
    parts.push(header, object, footer);
    totalLength += header.length + object.length + footer.length;
  }
  const xrefOffset = totalLength;
  let xref = `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let number = 1; number < objects.length; number += 1) {
    xref += `${String(offsets[number]).padStart(10, '0')} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  parts.push(encoder.encode(xref));
  const pdf = new Uint8Array(parts.reduce((length, part) => length + part.length, 0));
  let offset = 0;
  for (const part of parts) {
    pdf.set(part, offset);
    offset += part.length;
  }
  return new Blob([pdf.buffer], { type: 'application/pdf' });
}

export function OrderSlip({ locale }: OrderSlipProps) {
  const isNe = locale === 'ne';
  const [order, setOrder] = useState<OrderLine[]>([]);
  const [customer, setCustomer] = useState<CustomerDetails>(emptyCustomer);
  const [specifications, setSpecifications] = useState<Record<string, string>>({});
  const [quantityDrafts, setQuantityDrafts] = useState<Record<string, string>>({});
  const [quantityError, setQuantityError] = useState('');
  const [ready, setReady] = useState(false);
  const [reference, setReference] = useState('');
  const [timeString, setTimeString] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [notice, setNotice] = useState('');
  const generatedPdf = useRef<{ key: string; file: File } | null>(null);

  useEffect(() => {
    const syncOrder = () => {
      setPdfUrl('');
      setOrder(readOrder());
    };
    syncOrder();
    setReference(makeReference(new Date()));
    setTimeString(formatNepalTime(new Date(), locale));
    setReady(true);
    window.addEventListener(ORDER_UPDATED_EVENT, syncOrder);
    window.addEventListener('storage', syncOrder);
    return () => {
      window.removeEventListener(ORDER_UPDATED_EVENT, syncOrder);
      window.removeEventListener('storage', syncOrder);
    };
  }, [locale]);

  useEffect(() => () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
  }, [pdfUrl]);

  const products = useMemo(
    () => order.flatMap((line) => {
      const product = PRODUCTS.find((item) => item.slug === line.slug);
      return product ? [{ product, quantity: line.quantity }] : [];
    }),
    [order],
  );

  const labels = isNe
    ? {
      title: 'अर्डर सूची',
      subtitle: 'आवश्यक सामग्री छानेर विवरण भर्नुहोस्। मूल्य र मौज्दात सम्पर्क गरेर पुष्टि गर्नुहोस्।',
      customer: 'ग्राहक विवरण',
      name: 'नाम',
      organization: 'अस्पताल / क्लिनिक / पसल',
      phone: 'फोन',
      address: 'डेलिभरी ठेगाना',
      notes: 'कैफियत',
      items: 'सामग्री सूची',
      quantity: 'परिमाण',
      specification: 'आवश्यक साइज / मोडेल / विवरण',
      remove: 'हटाउनुहोस्',
      empty: 'अर्डर सूची खाली छ।',
      browse: 'सामग्री हेर्नुहोस्',
      download: 'अर्डर PDF डाउनलोड गर्नुहोस्',
      whatsapp: 'WhatsApp बाट पठाउनुहोस्',
      shareFile: 'PDF फाइल सेयर गर्नुहोस्',
      preview: 'PDF हेर्नुहोस्',
      closePreview: 'PDF पूर्वावलोकन बन्द गर्नुहोस्',
      previewTitle: 'अर्डर PDF पूर्वावलोकन',
      pdfNotice: 'PDF पृष्ठहरू छविका रूपमा तयार हुन्छन्; PDF मा पाठ चयन वा खोज गर्न मिल्दैन। WhatsApp मा PDF स्वतः संलग्न हुँदैन। पहिले डाउनलोड गर्नुहोस् र फाइल आफैं संलग्न गर्नुहोस्।',
      noShare: 'यो ब्राउजरले PDF फाइल सेयर गर्न समर्थन गर्दैन। PDF डाउनलोड गरेर WhatsApp मा आफैं संलग्न गर्नुहोस्।',
      cancelled: 'सेयर रद्द भयो। तपाईंको अर्डर सुरक्षित छ।',
      shareError: 'PDF सेयर गर्न सकिएन। डाउनलोड र WhatsApp विकल्प प्रयोग गर्नुहोस्।',
      validation: 'कृपया नाम र फोन भर्नुहोस् अनि प्रत्येक परिमाण १ वा सोभन्दा ठूलो पूर्ण सङ्ख्या राख्नुहोस्।',
      saveFailed: 'परिवर्तन सुरक्षित गर्न सकिएन। ब्राउजर भण्डारण उपलब्ध छ कि जाँच गर्नुहोस्।',
      copied: 'अर्डर विवरण कपी भयो।',
      copy: 'अर्डर विवरण कपी गर्नुहोस्',
      copyFailed: 'कपी गर्न सकिएन। कृपया अर्डर विवरण चयन गरेर कपी गर्नुहोस्।',
      manualAttach: 'PDF डाउनलोड गर्नुहोस् र WhatsApp मा आफैं संलग्न गर्नुहोस्।',
      orderEnquiry: 'अर्डर सोधपुछ — उपलब्धता र अन्तिम मूल्य पुष्टि गर्नुपर्नेछ।',
      slipReference: 'स्लिप सन्दर्भ',
      date: 'नेपाल समय',
      contact: 'फोन गर्नुहोस्',
    }
    : {
      title: 'Order slip',
      subtitle: 'Choose the supplies you need and enter your details. Confirm availability and pricing directly.',
      customer: 'Customer details',
      name: 'Name',
      organization: 'Hospital / clinic / shop',
      phone: 'Phone',
      address: 'Delivery address',
      notes: 'Notes',
      items: 'Items',
      quantity: 'Quantity',
      specification: 'Requested size / model / specification',
      remove: 'Remove',
      empty: 'Your order slip is empty.',
      browse: 'Browse supplies',
      download: 'Download order PDF',
      whatsapp: 'Send via WhatsApp',
      shareFile: 'Share PDF file',
      preview: 'Review PDF',
      closePreview: 'Close PDF preview',
      previewTitle: 'Order PDF preview',
      pdfNotice: 'PDF pages are rendered as images; text is not selectable or searchable. WhatsApp will not attach the PDF automatically. Download it first and attach the file manually.',
      noShare: 'This browser does not support sharing PDF files. Download the PDF and attach it manually in WhatsApp.',
      cancelled: 'Sharing cancelled. Your order is unchanged.',
      shareError: 'Could not share the PDF. Use the download and WhatsApp options.',
      validation: 'Enter your name and phone, and use a whole-number quantity of 1 or more for each item.',
      saveFailed: 'Could not save your changes. Check that browser storage is available.',
      copied: 'Order details copied.',
      copy: 'Copy order details',
      copyFailed: 'Could not copy the order. Please select and copy the order details manually.',
      manualAttach: 'Download the PDF and attach it manually in WhatsApp.',
      orderEnquiry: 'Order enquiry — availability and final price require confirmation.',
      slipReference: 'Slip reference',
      date: 'Nepal time',
      contact: 'Call',
    };

  const persistOrder = (next: OrderLine[]) => {
    try {
      writeOrder(next);
      setOrder(next);
      setNotice('');
    } catch (error) {
      console.error('Unable to save order selections and quantities.', error);
      setNotice(labels.saveFailed);
    }
  };

  const updateQuantity = (slug: string, value: string) => {
    setPdfUrl('');
    setQuantityDrafts((current) => ({ ...current, [slug]: value }));
    const quantity = Number(value);
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
      setQuantityError(labels.validation);
      return;
    }
    setQuantityError('');
    persistOrder(order.map((line) => line.slug === slug ? { slug, quantity } : line));
    setQuantityDrafts((current) => {
      const next = { ...current };
      delete next[slug];
      return next;
    });
  };

  const changeQuantity = (slug: string, amount: number) => {
    const line = order.find((item) => item.slug === slug);
    if (!line) return;
    const quantity = line.quantity + amount;
    if (!Number.isSafeInteger(quantity) || quantity < 1) return;
    setPdfUrl('');
    setQuantityError('');
    setQuantityDrafts((current) => {
      const next = { ...current };
      delete next[slug];
      return next;
    });
    persistOrder(order.map((item) => item.slug === slug ? { slug, quantity } : item));
  };

  const removeLine = (slug: string) => {
    setPdfUrl('');
    setQuantityError('');
    setQuantityDrafts((current) => {
      const next = { ...current };
      delete next[slug];
      return next;
    });
    persistOrder(order.filter((line) => line.slug !== slug));
  };

  const updateCustomer = (field: keyof CustomerDetails, value: string) => {
    setPdfUrl('');
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const buildPdfData = (): PdfData => ({
    locale,
    reference,
    customer,
    items: products.map(({ product, quantity }) => ({
      name: product.name[locale],
      quantity,
      specification: specifications[product.slug] ?? '',
    })),
  });

  const customerIsValid = () => {
    if (!customer.name.trim() || !customer.phone.trim()) {
      setNotice(labels.validation);
      return false;
    }
    if (order.some((line) => !Number.isSafeInteger(line.quantity) || line.quantity < 1)
      || Object.values(quantityDrafts).some((value) => !Number.isSafeInteger(Number(value)) || Number(value) < 1)) {
      setNotice(labels.validation);
      return false;
    }
    return true;
  };

  const createPdfFile = async () => {
    const data = buildPdfData();
    const key = JSON.stringify(data);
    if (generatedPdf.current?.key === key) return generatedPdf.current.file;
    const blob = await createOrderPdf(data);
    const file = new File([blob], `saphal-order-${reference}.pdf`, { type: 'application/pdf' });
    generatedPdf.current = { key, file };
    return file;
  };

  const downloadPdf = async () => {
    if (!customerIsValid()) return;
    try {
      const file = await createPdfFile();
      const url = URL.createObjectURL(file);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = file.name;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setNotice('');
    } catch (error) {
      console.error('Unable to generate or download the order PDF.', error);
      setNotice(labels.shareError);
    }
  };

  const previewPdf = async () => {
    if (!customerIsValid()) return;
    try {
      const file = await createPdfFile();
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setNotice('');
    } catch (error) {
      console.error('Unable to generate the order PDF preview.', error);
      setNotice(labels.shareError);
    }
  };

  const sharePdfFile = async () => {
    if (!customerIsValid()) return;
    try {
      const file = await createPdfFile();
      const shareData: ShareData = { files: [file], title: labels.title };
      if (!navigator.canShare || !navigator.canShare({ files: [file] }) || !navigator.share) {
        setNotice(labels.noShare);
        return;
      }
      await navigator.share(shareData);
      setNotice('');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setNotice(labels.cancelled);
        return;
      }
      console.error('Unable to share the order PDF file.', error);
      setNotice(labels.shareError);
    }
  };

  const orderSummary = [
    `${labels.title} — ${labels.slipReference}: ${reference}`,
    ...products.map(({ product, quantity }) => [
      `- ${product.name[locale]} — ${labels.quantity}: ${quantity}`,
      specifications[product.slug]?.trim() ? `  ${labels.specification}: ${specifications[product.slug].trim()}` : '',
    ].filter(Boolean).join('\n')),
    labels.orderEnquiry,
    labels.manualAttach,
  ].join('\n');

  const whatsappUrl = siteConfig.whatsapp.enabled
    ? `https://wa.me/${siteConfig.whatsapp.confirmedInternationalDigits}?text=${encodeURIComponent(orderSummary)}`
    : null;

  const copyOrder = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(orderSummary);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = orderSummary;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        if (!copied) throw new Error('The browser did not allow copying the order text.');
      }
      setNotice(labels.copied);
    } catch (error) {
      console.error('Unable to copy the order summary.', error);
      setNotice(labels.copyFailed);
    }
  };

  const inputClass = 'min-h-[46px] w-full rounded-xl border border-[#DCE9DE] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#15803D]';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8">
      <Link href={`/${locale}/products`} className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#15803D]">
        <ArrowLeft className="w-4 h-4" />
        {labels.browse}
      </Link>

      <header className="space-y-2">
        <p className="text-xs font-bold text-[#15803D]">{labels.slipReference}: {reference || '—'}</p>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C]">{labels.title}</h1>
        <p className="text-sm sm:text-base text-[#475569]">{labels.date}: {timeString || formatNepalTime(new Date(), locale)}</p>
        <p className="text-sm sm:text-base text-[#475569]">{labels.subtitle}</p>
      </header>

      {products.length > 0 ? (
        <>
          <section className="rounded-2xl border border-[#E3EDE5] bg-[#F8FCF8] p-4 sm:p-6 space-y-4">
            <h2 className="font-heading font-bold text-lg text-[#17251C]">{labels.customer}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {([
                ['name', labels.name, 'text', true],
                ['organization', labels.organization, 'text', false],
                ['phone', labels.phone, 'tel', true],
                ['address', labels.address, 'text', false],
              ] as const).map(([field, label, type, required]) => (
                <label key={field} className="space-y-1.5 text-sm font-semibold text-[#17251C]">
                  <span>{label}{required ? ' *' : ''}</span>
                  <input
                    type={type}
                    required={required}
                    value={customer[field]}
                    onChange={(event) => updateCustomer(field, event.target.value)}
                    className={inputClass}
                    autoComplete={field === 'name' ? 'name' : field === 'organization' ? 'organization' : field === 'phone' ? 'tel' : 'street-address'}
                    aria-invalid={required && !customer[field].trim()}
                  />
                </label>
              ))}
            </div>
            <label className="block space-y-1.5 text-sm font-semibold text-[#17251C]">
              <span>{labels.notes}</span>
              <textarea value={customer.notes} onChange={(event) => updateCustomer('notes', event.target.value)} rows={3} className={`${inputClass} min-h-24`} />
            </label>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg text-[#17251C]">{labels.items}</h2>
            <ul className="divide-y divide-[#E3EDE5] rounded-2xl border border-[#E3EDE5] bg-white">
              {products.map(({ product, quantity }) => (
                <li key={product.slug} className="flex flex-col gap-3 p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link href={`/${locale}/products/${product.slug}`} className="font-semibold text-[#17251C] hover:text-[#15803D]">
                      {product.name[locale]}
                    </Link>
                    <div className="flex items-center gap-2">
                      <span className="sr-only">{labels.quantity}</span>
                      <button type="button" onClick={() => changeQuantity(product.slug, -1)} aria-label={`${labels.quantity} -: ${product.name[locale]}`} className="min-h-[44px] min-w-[44px] rounded-lg border border-[#DCE9DE] flex items-center justify-center">
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        aria-label={`${labels.quantity}: ${product.name[locale]}`}
                        type="number"
                        min={1}
                        max={Number.MAX_SAFE_INTEGER}
                        step={1}
                        required
                        value={quantityDrafts[product.slug] ?? String(quantity)}
                        onChange={(event) => updateQuantity(product.slug, event.target.value)}
                        aria-invalid={Boolean(quantityDrafts[product.slug] !== undefined)}
                        className="h-11 w-24 rounded-lg border border-[#DCE9DE] text-center"
                      />
                      <button type="button" onClick={() => changeQuantity(product.slug, 1)} aria-label={`${labels.quantity} +: ${product.name[locale]}`} className="min-h-[44px] min-w-[44px] rounded-lg border border-[#DCE9DE] flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={() => removeLine(product.slug)} aria-label={`${labels.remove}: ${product.name[locale]}`} className="min-h-[44px] min-w-[44px] rounded-lg text-red-700 hover:bg-red-50 flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <label className="block space-y-1 text-xs font-semibold text-[#475569]">
                    <span>
                      {labels.specification}
                    </span>
                    <textarea
                      rows={2}
                      value={specifications[product.slug] ?? ''}
                      onChange={(event) => {
                        setPdfUrl('');
                        setSpecifications((current) => ({ ...current, [product.slug]: event.target.value }));
                      }}
                      placeholder={locale === 'ne' ? 'आकार, मोडेल वा अन्य विवरण' : 'Size, model, or other details'}
                      className={`${inputClass} min-h-16 text-sm font-normal`}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </section>

          {quantityError && <p role="alert" className="text-sm font-semibold text-red-700">{quantityError}</p>}

          <section className="rounded-2xl border border-[#D8EBDD] bg-[#F0FDF4] p-4 sm:p-6 space-y-4">
            <p className="text-sm leading-relaxed text-[#475569]">{labels.pdfNotice}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => void previewPdf()} className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D8BF] bg-white px-5 py-3 text-sm font-bold text-[#166534]">
                <Eye className="w-4 h-4" />
                {labels.preview}
              </button>
              <button type="button" onClick={() => void downloadPdf()} className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-5 py-3 text-sm font-bold text-white hover:bg-[#166534]">
                <Download className="w-4 h-4" />
                {labels.download}
              </button>
              <button type="button" onClick={() => void sharePdfFile()} className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D8BF] bg-white px-5 py-3 text-sm font-bold text-[#166534]">
                <Share2 className="w-4 h-4" />
                {labels.shareFile}
              </button>
              {whatsappUrl && (
                <a href={whatsappUrl} onClick={(event) => { if (!customerIsValid()) event.preventDefault(); }} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8D8BF] bg-white px-5 py-3 text-sm font-bold text-[#166534]">
                  <Share2 className="w-4 h-4" />
                  {labels.whatsapp}
                </a>
              )}
              <button type="button" onClick={() => void copyOrder()} className="min-h-[48px] inline-flex items-center justify-center rounded-xl border border-[#B8D8BF] bg-white px-5 py-3 text-sm font-bold text-[#166534]">
                {labels.copy}
              </button>
              <a href={`tel:${siteConfig.phone.primary.raw}`} className="min-h-[48px] inline-flex items-center justify-center rounded-xl border border-[#B8D8BF] bg-white px-5 py-3 text-sm font-bold text-[#166534]">
                {labels.contact}: {siteConfig.phone.primary.display}
              </a>
            </div>
            {pdfUrl && (
              <section className="space-y-3" aria-label={labels.previewTitle}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-[#17251C]">{labels.previewTitle}</h3>
                  <button type="button" onClick={() => setPdfUrl('')} className="min-h-[44px] rounded-lg px-3 text-sm font-semibold text-[#166534]">
                    {labels.closePreview}
                  </button>
                </div>
                <iframe title={labels.previewTitle} src={pdfUrl} className="h-[70vh] min-h-96 w-full rounded-xl border border-[#DCE9DE] bg-white" />
              </section>
            )}
            {notice && <p role="status" aria-live="polite" className="text-sm font-semibold text-[#166534]">{notice}</p>}
          </section>
        </>
      ) : (
        <section className="rounded-2xl border border-dashed border-[#B8D8BF] bg-[#F8FCF8] p-8 sm:p-12 text-center space-y-4">
          <p className="text-base font-semibold text-[#17251C]">{labels.empty}</p>
          <p className="text-sm text-[#475569] max-w-md mx-auto">
            {isNe 
              ? 'तपाईंले कुनै सामग्री थप्नुभएको छैन। क्याटलगबाट आवश्यक अस्पताल, क्लिनिक वा ल्याबका सामानहरू छानेर यहाँ अर्डर स्लिप तयार गर्न सक्नुहुन्छ।' 
              : 'Your order slip is empty. Choose required hospital, clinic, or laboratory supplies from our catalogue to prepare an enquiry slip.'}
          </p>
          <div>
            <Link href={`/${locale}/products`} className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#15803D] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#166534]">
              {labels.browse}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

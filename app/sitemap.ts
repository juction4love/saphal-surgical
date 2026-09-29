import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { PRODUCTS } from '@/data/products';
import { ARTICLES } from '@/data/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const currentDate = new Date().toISOString();

  const routes = ['', '/about', '/products', '/articles', '/contact'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static routes for both languages
  routes.forEach((route) => {
    ['ne', 'en'].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            ne: `${baseUrl}/ne${route}`,
            en: `${baseUrl}/en${route}`,
            'x-default': `${baseUrl}/ne${route}`,
          },
        },
      });
    });
  });

  // Product detail pages for both languages
  PRODUCTS.forEach((product) => {
    ['ne', 'en'].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/products/${product.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: {
            ne: `${baseUrl}/ne/products/${product.slug}`,
            en: `${baseUrl}/en/products/${product.slug}`,
            'x-default': `${baseUrl}/ne/products/${product.slug}`,
          },
        },
      });
    });
  });

  // Article detail pages for both languages
  ARTICLES.forEach((article) => {
    ['ne', 'en'].forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/articles/${article.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            ne: `${baseUrl}/ne/articles/${article.slug}`,
            en: `${baseUrl}/en/articles/${article.slug}`,
            'x-default': `${baseUrl}/ne/articles/${article.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

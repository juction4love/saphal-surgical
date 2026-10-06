import React from 'react';
import type { ProductIllustrationKind } from '@/data/products';
import type { Locale } from '@/lib/translations';

interface ProductIllustrationProps {
  kind: ProductIllustrationKind;
  productName: string;
  locale: Locale;
}

const green = '#166534';
const dark = '#14532d';
const pale = '#e7f4e9';
const line = '#598268';

function catalogueProductArt(slug: string): React.ReactNode {
  if (/glucose-test-strips/.test(slug)) {
    return <><path d="M221 144h158v192H221z" fill="white" stroke={green} strokeWidth="8" /><path d="M241 166h118v26H241z" fill={pale} stroke={line} strokeWidth="5" /><path d="M249 226h102v81H249z" fill={pale} stroke={green} strokeWidth="6" /><path d="m267 213 15-25 15 25m18 0 15-25 15 25M274 249v39m31-39v39m31-39v39" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" /><path d="M187 319h24m168 0h34" stroke={line} strokeWidth="7" strokeLinecap="round" /></>;
  }
  if (/cotton-rolls/.test(slug)) {
    return <><ellipse cx="248" cy="240" rx="81" ry="98" fill={pale} stroke={green} strokeWidth="8" /><ellipse cx="248" cy="240" rx="29" ry="40" fill="white" stroke={line} strokeWidth="6" /><path d="M329 180q101-28 104 50v94q-4 43-62 53l-55-30m18-151q58 1 59 38v70q-2 20-34 28" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M193 190q33-28 71 0m-71 25q33-28 71 0m-71 25q33-28 71 0m-71 25q33-28 71 0m-71 25q33-28 71 0" fill="none" stroke={line} strokeWidth="5" /></>;
  }
  if (/baby-cotton-wool/.test(slug)) {
    return <><rect x="183" y="165" width="234" height="177" rx="20" fill="white" stroke={green} strokeWidth="8" /><path d="M183 211h234" stroke={green} strokeWidth="8" /><circle cx="231" cy="263" r="26" fill={pale} stroke={line} strokeWidth="5" /><circle cx="300" cy="248" r="29" fill={pale} stroke={line} strokeWidth="5" /><circle cx="365" cy="269" r="24" fill={pale} stroke={line} strokeWidth="5" /><circle cx="269" cy="309" r="21" fill={pale} stroke={line} strokeWidth="5" /><circle cx="340" cy="314" r="20" fill={pale} stroke={line} strokeWidth="5" /></>;
  }
  if (/bottle-cleaning-brush/.test(slug)) {
    return <><path d="M296 151v174" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M258 163h76l-11 71h-54z" fill={pale} stroke={green} strokeWidth="7" /><path d="m258 163-28-22m104 22 28-22m-124 24 30 50m124-50-30 50m-128-30 43 40m113-40-43 40" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M273 324h46" stroke={dark} strokeWidth="13" strokeLinecap="round" /></>;
  }
  if (/baby-(shampoos|cleansers|moisturizers)|diaper-barrier-creams/.test(slug)) {
    return <><path d="M182 199h107v143H182z" fill={pale} stroke={green} strokeWidth="8" /><path d="M205 199v-31h61v31m-50-31v-17h39v17" fill="white" stroke={green} strokeWidth="7" /><path d="M324 180h88v162h-88z" fill="white" stroke={green} strokeWidth="8" /><path d="M342 180v-27h51v27m-50 46h49m-49 22h49" stroke={line} strokeWidth="6" strokeLinecap="round" /><path d="M202 251h67m-67 22h67" stroke={line} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/feeding-spoons/.test(slug)) {
    return <><path d="M224 145q-31 0-31 31t31 31q31 0 31-31t-31-31zm13 62 94 135q11 16 27 5t5-27l-94-136" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="m253 230 30-21m-9 53 29-20m-8 53 30-21" stroke={line} strokeWidth="5" strokeLinecap="round" /></>;
  }
  if (/nursing-pillows/.test(slug)) {
    return <><path d="M198 183q0-39 40-39h124q40 0 40 39v118q0 38-40 38h-44v-73h-36v73h-44q-40 0-40-38z" fill={pale} stroke={green} strokeWidth="9" /><path d="M213 202v85m174-85v85m-122 7h68" stroke={line} strokeWidth="7" strokeLinecap="round" /></>;
  }
  if (/nursing-bras/.test(slug)) {
    return <><path d="M300 208q-44-66-90-34l-53 86q37 43 84 7l59-30m0-29q44-66 90-34l53 86q-37 43-84 7l-59-30" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M214 175q-12-47-50-50m222 50q12-47 50-50m-147 79v58m22-58v58" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M205 268q40 19 76-5m38 0q36 24 76 5" fill="none" stroke={dark} strokeWidth="6" /></>;
  }
  if (/breast-milk-storage/.test(slug)) {
    return <><path d="M179 178h113v157H179z" fill={pale} stroke={green} strokeWidth="8" /><path d="M192 178v-21h87v21m-78 49h69m-69 23h69" stroke={line} strokeWidth="6" /><path d="M324 175h100v166H324z" fill="white" stroke={green} strokeWidth="8" /><path d="M338 175v-22h72v22m-66 50h60m-60 24h60m-60 24h60" stroke={line} strokeWidth="6" strokeLinecap="round" /><path d="M363 319h22" stroke={dark} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/resistance-exercise-bands/.test(slug)) {
    return <><path d="M199 174q-53 66 0 132t0 65m-9-199q-54 66 0 132t0 65m200-195q53 66 0 132t0 65m9-199q54 66 0 132t0 65" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M235 205h130m-130 132h130" stroke={line} strokeWidth="8" strokeLinecap="round" /></>;
  }
  if (/hand-exercise-balls/.test(slug)) {
    return <><circle cx="300" cy="244" r="97" fill={pale} stroke={green} strokeWidth="8" /><path d="M236 191q-28 51 0 105m42-143q-20 76 0 182m43-182q20 76 0 182m42-144q28 51 0 105" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M230 314q70 45 140 0" fill="none" stroke={dark} strokeWidth="6" /></>;
  }
  if (/therapy-putty/.test(slug)) {
    return <><path d="M184 249q24-73 89-33 40-83 92-19 73-23 60 50 61 49-3 88-59 50-101 4-62 38-93-18-74 5-44-72z" fill={pale} stroke={green} strokeWidth="8" /><path d="M230 238q27 18 54 0m17 45q31 20 62 0m-130 33q29 18 58 0" fill="none" stroke={line} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/finger-exercisers/.test(slug)) {
    return <><path d="M197 307q-29-4-27-36l9-83q3-21 20-17 18 3 15 24l-4 37 13-105q3-21 20-18 18 3 14 23l-9 97 23-117q4-20 21-15 18 4 13 24l-17 112 28-94q6-20 23-13 16 7 9 26l-33 103q-18 56-78 49z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M222 270h130m-117 22h99" stroke={line} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/pedal-exercisers/.test(slug)) {
    return <><circle cx="300" cy="244" r="91" fill="none" stroke={green} strokeWidth="11" /><circle cx="300" cy="244" r="20" fill={pale} stroke={green} strokeWidth="7" /><path d="M300 224v-79m0 199v-80m-20-20h-86m192 0h-86" stroke={dark} strokeWidth="8" strokeLinecap="round" /><path d="M262 145h76v25h-76zm-126 87h74v25h-74zm248 0h74v25h-74z" fill={pale} stroke={green} strokeWidth="7" /><path d="M245 344h110" stroke={line} strokeWidth="9" strokeLinecap="round" /></>;
  }
  if (/balance-boards/.test(slug)) {
    return <><path d="M177 221q0-31 31-31h184q31 0 31 31v37q0 31-31 31H208q-31 0-31-31z" fill={pale} stroke={green} strokeWidth="8" /><path d="M246 290q54 71 108 0" fill="none" stroke={dark} strokeWidth="11" strokeLinecap="round" /><circle cx="235" cy="239" r="9" fill={line} /><circle cx="300" cy="239" r="9" fill={line} /><circle cx="365" cy="239" r="9" fill={line} /></>;
  }
  if (/foam-exercise-rollers/.test(slug)) {
    return <><path d="M183 201h229v95H183z" fill={pale} stroke={green} strokeWidth="8" /><ellipse cx="183" cy="248" rx="23" ry="47" fill="white" stroke={green} strokeWidth="8" /><ellipse cx="412" cy="248" rx="23" ry="47" fill="white" stroke={green} strokeWidth="8" /><path d="M223 213v70m38-70v70m38-70v70m38-70v70m38-70v70" stroke={line} strokeWidth="5" /></>;
  }
  if (/tens-devices|electrical-muscle-stimulators/.test(slug)) {
    return <><rect x="190" y="143" width="170" height="147" rx="18" fill={pale} stroke={green} strokeWidth="8" /><rect x="215" y="166" width="120" height="64" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="M231 198h23l12-18 17 36 15-24h22" fill="none" stroke={green} strokeWidth="5" /><circle cx="240" cy="257" r="9" fill={green} /><circle cx="284" cy="257" r="9" fill={green} /><path d="M300 291v43q0 26 34 26h47m-81-69v42q0 27-34 27h-52" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" /><rect x="365" y="330" width="45" height="42" rx="10" fill={pale} stroke={green} strokeWidth="6" /><rect x="200" y="330" width="45" height="42" rx="10" fill={pale} stroke={green} strokeWidth="6" /></>;
  }
  if (/therapeutic-ultrasound/.test(slug)) {
    return <><rect x="168" y="151" width="182" height="169" rx="18" fill={pale} stroke={green} strokeWidth="8" /><rect x="190" y="174" width="124" height="60" rx="8" fill="white" stroke={line} strokeWidth="5" /><circle cx="218" cy="271" r="12" fill="white" stroke={green} strokeWidth="5" /><circle cx="264" cy="271" r="12" fill="white" stroke={green} strokeWidth="5" /><path d="M350 213q39 0 39 39v39m0 0q0 28 28 28h20" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M405 342h55v25h-55z" fill={pale} stroke={dark} strokeWidth="6" /></>;
  }
  if (/tablet-cutter/.test(slug)) {
    return <><path d="M195 184q0-31 31-31h148q31 0 31 31v125q0 31-31 31H226q-31 0-31-31z" fill={pale} stroke={green} strokeWidth="8" /><path d="M211 218h178m-89-41v116" stroke={green} strokeWidth="7" /><path d="M269 249a31 31 0 0 1 62 0v14h-62z" fill="white" stroke={line} strokeWidth="6" /><path d="M300 218v31m-44 14 44 0 44 0" stroke={dark} strokeWidth="5" /></>;
  }
  if (/tablet-crusher/.test(slug)) {
    return <><path d="M225 178h150v157H225z" fill={pale} stroke={green} strokeWidth="8" /><path d="M210 178h180v-34H210z" fill="white" stroke={green} strokeWidth="8" /><path d="M251 146v-36h98v36m-86 90h74m-62 26h50" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M266 200h68l-10 26h-48z" fill="white" stroke={dark} strokeWidth="5" /></>;
  }
  if (/blood-glucose-lancets|finger-prick-devices|lancets/.test(slug)) {
    return <><path d="M190 232q0-31 31-31h133q31 0 31 31v42q0 31-31 31H221q-31 0-31-31z" fill={pale} stroke={green} strokeWidth="8" /><path d="M246 201v-42q0-18 19-18h70q19 0 19 18v42m-92 103v24q0 15 15 15h47q15 0 15-15v-24" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M278 224h43m-43 19h43m-43 19h29" stroke={line} strokeWidth="6" strokeLinecap="round" /><path d="M396 214v98m-12-82h24m-24 55h24" stroke={dark} strokeWidth="5" strokeLinecap="round" /></>;
  }
  if (/insulin-pen-needles/.test(slug)) {
    return <><path d="M179 164h242v170H179z" fill="white" stroke={green} strokeWidth="8" /><path d="M202 192h196v114H202z" fill={pale} stroke={line} strokeWidth="6" /><path d="M239 224v51m63-51v51m63-51v51" stroke={green} strokeWidth="9" strokeLinecap="round" /><path d="m224 224 15-21 15 21m48 0 15-21 15 21m48 0 15-21 15 21" fill="none" stroke={dark} strokeWidth="5" strokeLinejoin="round" /></>;
  }
  if (/dropper/.test(slug)) {
    return <><path d="M256 221h88v115h-88z" fill={pale} stroke={green} strokeWidth="8" /><path d="M271 221v-28h58v28m-45-28v-25q0-17 17-17h28q17 0 17 17v25" fill="white" stroke={green} strokeWidth="7" /><path d="M288 263h24m-24 22h24" stroke={line} strokeWidth="5" /><path d="M380 157v96q0 19-18 19t-18-19v-36h36m-18 151v22" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M362 344q18-27 36 0-18 24-36 0z" fill={pale} stroke={line} strokeWidth="5" /></>;
  }
  if (/digital-blood-pressure|blood-pressure-monitors/.test(slug)) {
    return <><rect x="245" y="132" width="166" height="164" rx="22" fill={pale} stroke={green} strokeWidth="8" /><rect x="267" y="156" width="122" height="70" rx="10" fill="white" stroke={line} strokeWidth="6" /><path d="M285 193h80" stroke={dark} strokeWidth="7" strokeLinecap="round" /><circle cx="328" cy="259" r="16" fill="white" stroke={green} strokeWidth="6" /><path d="M245 242h-55q-25 0-25 25v38q0 24 25 24h69m152-62h37" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M180 271h39v48h-39z" fill="white" stroke={line} strokeWidth="5" /></>;
  }
  if (/manual-blood-pressure/.test(slug)) {
    return <><circle cx="320" cy="185" r="72" fill="white" stroke={green} strokeWidth="9" /><circle cx="320" cy="185" r="49" fill={pale} stroke={line} strokeWidth="5" /><path d="M320 185l31-29m-57 61h52" stroke={dark} strokeWidth="6" strokeLinecap="round" /><path d="M247 198h-69q-28 0-28 28v34q0 27 28 27h69m145-83h33q24 0 24 25v47" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><rect x="174" y="205" width="48" height="42" rx="7" fill={pale} stroke={line} strokeWidth="5" /></>;
  }
  if (/stethoscopes?/.test(slug)) {
    return <><path d="M205 139v122q0 58 54 58 53 0 53-58V139m82 0v122q0 58-53 58h-29" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M187 139h36m153 0h36m-36 0v50" stroke={dark} strokeWidth="8" strokeLinecap="round" /><circle cx="365" cy="219" r="34" fill={pale} stroke={green} strokeWidth="8" /><circle cx="365" cy="219" r="15" fill="white" stroke={line} strokeWidth="5" /></>;
  }
  if (/infrared-thermometers/.test(slug)) {
    return <><path d="M202 215q0-33 33-33h115q33 0 33 33v61q0 33-33 33h-24l-35 45-15-45h-41q-33 0-33-33z" fill={pale} stroke={green} strokeWidth="8" /><rect x="230" y="205" width="84" height="39" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="M251 224h41m82-12 43-32m-34 53 48-8m-58 35 41 16" stroke={dark} strokeWidth="6" strokeLinecap="round" /><circle cx="337" cy="269" r="9" fill={green} /></>;
  }
  if (/digital-thermometers/.test(slug)) {
    return <><path d="M193 237h202v47H193z" rx="20" fill={pale} stroke={green} strokeWidth="8" /><rect x="225" y="246" width="83" height="28" rx="6" fill="white" stroke={line} strokeWidth="4" /><path d="M209 260h-38m224 0h43" stroke={dark} strokeWidth="6" strokeLinecap="round" /><circle cx="347" cy="260" r="7" fill={green} /></>;
  }
  if (/ecg-machines/.test(slug)) {
    return <><rect x="174" y="142" width="252" height="183" rx="18" fill={pale} stroke={green} strokeWidth="8" /><rect x="199" y="164" width="160" height="95" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="M211 212h31l16-25 19 51 20-35h48" fill="none" stroke={green} strokeWidth="7" /><path d="M204 292h184m-145 33v23m109-23v23m-139 0h170" stroke={dark} strokeWidth="8" strokeLinecap="round" /><circle cx="389" cy="184" r="12" fill="white" stroke={green} strokeWidth="5" /></>;
  }
  if (/defibrillator/.test(slug)) {
    return <><rect x="189" y="145" width="222" height="190" rx="22" fill={pale} stroke={green} strokeWidth="8" /><rect x="211" y="166" width="112" height="82" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="m270 177-18 31h20l-11 27 36-39h-20l13-19z" fill={green} /><path d="M352 180q49 24 0 50m15-58q68 34 0 68m-153 95h170" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" /><path d="M226 259q35-27 65 0m-65 22q35-27 65 0" fill="none" stroke={green} strokeWidth="6" /></>;
  }
  if (/forceps/.test(slug) && /right-angle/.test(slug)) {
    return <><circle cx="210" cy="295" r="31" fill="white" stroke={green} strokeWidth="8" /><circle cx="286" cy="295" r="31" fill="white" stroke={green} strokeWidth="8" /><path d="M233 275 354 154q21-18 40-2l-25 27-19 53m-65 43 126-122" fill="none" stroke={green} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" /><path d="m350 154 34 23m-23-34 25-24" stroke={dark} strokeWidth="7" strokeLinecap="round" /></>;
  }
  if (/kocher-forceps/.test(slug)) {
    return <><circle cx="203" cy="292" r="31" fill="white" stroke={green} strokeWidth="8" /><circle cx="279" cy="292" r="31" fill="white" stroke={green} strokeWidth="8" /><path d="M226 270 375 118m-71 152 105-111" fill="none" stroke={green} strokeWidth="11" strokeLinecap="round" /><path d="m372 118 34 35m-40-29 35 36m-43-31 34 36" stroke={dark} strokeWidth="6" /></>;
  }
  if (/mosquito-forceps/.test(slug)) {
    return <><circle cx="221" cy="299" r="26" fill="white" stroke={green} strokeWidth="8" /><circle cx="287" cy="299" r="26" fill="white" stroke={green} strokeWidth="8" /><path d="M242 280 359 159q17-16 32-3l-24 37-76 84m-4 5 125-126" fill="none" stroke={green} strokeWidth="9" strokeLinecap="round" /><path d="m300 246 76 10m-69-1 72 10m-64-2 65 9" stroke={line} strokeWidth="5" /></>;
  }
  if (/bulldog-vascular-clamps|vascular-clamps/.test(slug)) {
    return <><path d="M191 181q0-32 32-32h64v178h-64q-32 0-32-32z" fill="white" stroke={green} strokeWidth="8" /><path d="M289 149h63q33 0 33 32v114q0 32-33 32h-63z" fill={pale} stroke={green} strokeWidth="8" /><path d="M224 185h65m-65 99h65m63-99h-63m63 99h-63" stroke={dark} strokeWidth="8" strokeLinecap="round" /><circle cx="256" cy="240" r="11" fill={line} /><circle cx="321" cy="240" r="11" fill={line} /></>;
  }
  if (/towel-clips/.test(slug)) {
    return <><path d="m205 160 190 190m-190 0 190-190" stroke={green} strokeWidth="17" strokeLinecap="round" /><circle cx="207" cy="161" r="34" fill="white" stroke={green} strokeWidth="8" /><circle cx="395" cy="161" r="34" fill="white" stroke={green} strokeWidth="8" /><circle cx="207" cy="350" r="34" fill="white" stroke={green} strokeWidth="8" /><circle cx="395" cy="350" r="34" fill="white" stroke={green} strokeWidth="8" /><path d="m275 225 50 50m-50 0 50-50" stroke={dark} strokeWidth="7" /></>;
  }
  if (/curette/.test(slug)) {
    return <><path d="M252 299 342 161q17-24 38-9 21 15 4 37l-92 136" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M292 325q-56-10-43-54 48-9 72 29z" fill={pale} stroke={green} strokeWidth="8" /><path d="m276 294 27 6" stroke={line} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/skin-hooks/.test(slug)) {
    return <><path d="M239 324V184q0-43 44-43h79" fill="none" stroke={green} strokeWidth="13" strokeLinecap="round" /><path d="M362 141q46 0 46 43v32q0 28-28 28h-22" fill="none" stroke={green} strokeWidth="11" strokeLinecap="round" /><path d="M199 324h82" stroke={dark} strokeWidth="10" strokeLinecap="round" /></>;
  }
  if (/probe|grooved-director|sinus-forceps|ligature-carriers/.test(slug)) {
    return <><path d="M204 316 354 153" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M351 156q15-31 37-19 22 11 5 34l-29 37m-70 86 48-52" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" /><path d="m201 309 25 23m-43-7 25 23" stroke={line} strokeWidth="6" strokeLinecap="round" /></>;
  }
  if (/scissor|shear/.test(slug)) {
    return <><circle cx="215" cy="275" r="29" fill="white" stroke={green} strokeWidth="8" /><circle cx="289" cy="275" r="29" fill="white" stroke={green} strokeWidth="8" /><path d="M236 254 390 120q18-14 29 2-2 17-20 31L256 280m28-26L177 138q-15-17 0-28 17 2 31 19l126 132" fill="none" stroke={green} strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" /></>;
  }
  if (/bone-cutter|rongeur/.test(slug)) {
    return <><circle cx="206" cy="280" r="28" fill="white" stroke={green} strokeWidth="8" /><circle cx="276" cy="280" r="28" fill="white" stroke={green} strokeWidth="8" /><path d="m228 259 122-127q19-18 37-2l-54 154m-45-25L186 143q-17-20 2-34l148 169" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" /><path d="m356 130 39-29m-66 80 33 26" stroke={dark} strokeWidth="8" strokeLinecap="round" /></>;
  }
  if (/mallet/.test(slug)) {
    return <><path d="M291 175h22v173h-22z" fill={pale} stroke={green} strokeWidth="8" /><path d="M185 150h230v82H185z" fill="white" stroke={green} strokeWidth="8" /><path d="M205 164h190m-190 54h190" stroke={line} strokeWidth="6" /><path d="M291 348h22" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
  }
  if (/osteotome|chisel|cast-spreader|blade|scalpel|knife/.test(slug)) {
    return <><path d="M184 265 343 106l44 44-160 159z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="m343 106 64 34-20 30-44-20m-160 159-16 36 36-16" fill="white" stroke={green} strokeWidth="7" strokeLinejoin="round" /><path d="m215 268 101-101" stroke={line} strokeWidth="6" /></>;
  }
  if (/dilator|sounds|curette|elevator|hooks|probe|director|carriers/.test(slug)) {
    return <><path d="m223 318 131-186q12-18 28-7t3 29L255 341z" fill={pale} stroke={green} strokeWidth="8" /><path d="m224 318-27 42 58-19m63-175 30 23m-56 10 30 21m-54 13 28 20" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /><circle cx="213" cy="333" r="18" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/forceps|clamp|holder|clips/.test(slug)) {
    return <><path d="M211 136 374 303m-37-181L212 304" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" /><circle cx="196" cy="124" r="27" fill="white" stroke={green} strokeWidth="8" /><circle cx="389" cy="316" r="27" fill="white" stroke={green} strokeWidth="8" /><circle cx="379" cy="122" r="27" fill="white" stroke={green} strokeWidth="8" /><circle cx="201" cy="316" r="27" fill="white" stroke={green} strokeWidth="8" /><path d="m235 181 105 105m-101 5 107-109" stroke={dark} strokeWidth="6" /></>;
  }
  if (/specul/.test(slug)) {
    return <><path d="M230 149v151m140-151v151M230 178q-46 54 0 91m140-91q46 54 0 91M230 193h140" fill="none" stroke={green} strokeWidth="12" strokeLinecap="round" /><path d="M259 300h82m-41 0v37" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
  }
  if (/tray|kidney|drum|container|specimen-cups/.test(slug)) {
    return <><path d="M151 181h298l-27 135q-4 20-24 20H202q-20 0-24-20z" fill={pale} stroke={green} strokeWidth="9" /><path d="M176 207h248m-232 98h217" stroke={line} strokeWidth="6" /><ellipse cx="300" cy="181" rx="149" ry="27" fill="white" stroke={green} strokeWidth="8" /></>;
  }
  if (/saw|drill|cast-removal/.test(slug)) {
    return <><path d="M177 190q0-52 54-52h118q52 0 52 52v33h-38v-27H228v93h-51z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M229 253h188v25H229z" fill="white" stroke={green} strokeWidth="7" /><path d="m397 279 10 13-10 13 10 13-10 13" fill="none" stroke={dark} strokeWidth="6" /><circle cx="262" cy="190" r="16" fill="white" stroke={line} strokeWidth="6" /></>;
  }
  if (/instrument-sets|procedure-kits|delivery-sets|set-trays|laryngoscope|pack|pouch|rolls|test-strips|wrapping-sheets|sterilization-indicator/.test(slug)) {
    return <><rect x="153" y="167" width="294" height="164" rx="18" fill={pale} stroke={green} strokeWidth="8" /><path d="M153 205h294m-250 54 100-55m-42 55 100-55m-70 83h117" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M173 167v-20h254v20" fill="white" stroke={green} strokeWidth="7" /></>;
  }
  if (/syringe|dosing|dropper|insulin-pen|tablet-cutter|tablet-crusher|finger-prick|lancet/.test(slug)) {
    return <><path d="M211 144h178v32H211zM238 176v107q0 23 23 23h78q23 0 23-23V176z" fill={pale} stroke={green} strokeWidth="8" /><path d="M263 192v82m25-82v82m25-82v82m-119 34h177m-134 0v36m90-36v36m-112 0h134m-180-197h-25m224 0h25" stroke={dark} strokeWidth="7" strokeLinecap="round" /><path d="M282 306v27l-17 35h36l-18-35" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/needle|cannula|catheter|tracheostomy|endotracheal|nasogastric|nasal-oxygen|oropharyngeal-airway|nasopharyngeal-airway|cpap-tubing/.test(slug)) {
    return <><path d="M174 267q47-77 104 0t104 0 55 0" fill="none" stroke={green} strokeWidth="15" strokeLinecap="round" /><path d="M178 267q45-77 100 0" fill="none" stroke="#a8d3af" strokeWidth="5" /><rect x="174" y="240" width="56" height="54" rx="11" fill="white" stroke={green} strokeWidth="7" /><path d="M392 267h51m-10-15 10 15-10 15" stroke={dark} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></>;
  }
  if (/infusion|blood-administration|extension-line|stopcock|breathing-circuit|feeding-set|drainage|drain|irrigation|collection-bag|ostomy|breast-milk-storage|filter|resuscitator/.test(slug)) {
    return <><path d="M226 141h148v173q0 16-16 16h-116q-16 0-16-16z" fill="white" stroke={green} strokeWidth="8" /><path d="M247 180h106v105H247z" fill={pale} stroke={line} strokeWidth="6" /><path d="M300 330v30q0 28-38 28h-70m108-48v48m0-48q0 35 46 35h77" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" /><path d="M280 205h40m-40 25h40" stroke={line} strokeWidth="5" /></>;
  }
  if (/suture/.test(slug)) {
    return <><circle cx="270" cy="235" r="83" fill="white" stroke={green} strokeWidth="9" /><circle cx="270" cy="235" r="56" fill={pale} stroke={line} strokeWidth="6" /><path d="M323 291q76 59 128-23m-18-8 19-16 7 23" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" /><path d="m196 155 35 21-27 43-36-20z" fill="white" stroke={line} strokeWidth="6" /></>;
  }
  if (/hot-water-bag|cold-pack|gel-pack|heating-pad/.test(slug)) {
    return <><path d="M219 173q0-24 24-24h114q24 0 24 24v143q0 26-26 26H245q-26 0-26-26z" fill={pale} stroke={green} strokeWidth="8" /><path d="M263 149v-28h74v28m-68 75h62m-62 30h62m-62 30h43" stroke={line} strokeWidth="7" strokeLinecap="round" /><path d="M337 342v24q0 26 32 26h49" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" /></>;
  }
  if (/compression-stockings?|anti-embolism/.test(slug)) {
    return <><path d="M229 144h75v157q0 28-28 28h-54v-58h34V144zm98 0h75v157q0 28-28 28h-54v-58h34V144z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M230 205h73m24 0h73m-170 41h73m24 0h73" stroke={line} strokeWidth="6" /></>;
  }
  if (/glove/.test(slug)) {
    return <><path d="M239 334q-27-4-33-35l-26-126q-5-22 13-26 19-3 25 20l17 59-13-122q-2-22 17-24 18-1 20 22l9 111 2-135q1-21 19-20 18 1 17 23l-1 130 16-113q3-20 20-16 18 4 14 26l-18 126q-9 68-68 77z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M228 276h145" stroke={line} strokeWidth="5" /></>;
  }
  if (/mask|respirator|spacer/.test(slug)) {
    return <><path d="M188 190q112-82 224 0v112q-112 81-224 0z" fill={pale} stroke={green} strokeWidth="8" /><path d="M188 217q-58-30-57 9v36q0 34 58 17m223-62q58-30 57 9v36q0 34-58 17m-220-30h219m-198 31h177" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" /></>;
  }
  if (/gown|drape|apron|shoe-cover|stockinette|nursing-bra/.test(slug)) {
    return <><path d="m238 143-42 25-42 57 43 28 22-26v112h164V227l22 26 43-28-42-57-42-25-31 31h-64z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M269 146q31 46 62 0m-114 93h166m-137 38h107" fill="none" stroke={line} strokeWidth="6" /></>;
  }
  if (/bandage|dressing|gauze|swab|cotton|tape|padding|underpad|protective-pad|film|wound-closure|skin-stapler|staple-remover/.test(slug)) {
    return <><rect x="167" y="170" width="120" height="150" rx="12" fill="white" stroke={green} strokeWidth="7" /><path d="M186 198h82m-82 20h82m-82 20h62" stroke={line} strokeWidth="4" /><path d="M329 196q0-30 31-30t31 30v112q0 23-23 23h-16q-23 0-23-23z" fill={pale} stroke={green} strokeWidth="8" /><circle cx="360" cy="198" r="17" fill="white" stroke={line} strokeWidth="5" /><path d="M328 251h64" stroke={line} strokeWidth="5" /></>;
  }
  if (/pill-organizer|tablet|medicine-cup|measuring-cup/.test(slug)) {
    return <><path d="M176 177h248v148H176z" fill={pale} stroke={green} strokeWidth="8" /><path d="M176 227h248m-165-50v148m82-148v148" stroke={green} strokeWidth="6" /><path d="M199 198h31m-31 49h31m-31 49h31m54-98h31m-31 49h31m-31 49h31m54-98h31m-31 49h31m-31 49h31" stroke={line} strokeWidth="5" strokeLinecap="round" /><circle cx="214" cy="198" r="5" fill={dark} /><circle cx="297" cy="247" r="5" fill={dark} /><circle cx="380" cy="296" r="5" fill={dark} /></>;
  }
  if (/feeding-bottle-sterilizer|bottle-warmer/.test(slug)) {
    return <><rect x="185" y="144" width="230" height="194" rx="22" fill={pale} stroke={green} strokeWidth="8" /><path d="M250 185h100v118H250z" fill="white" stroke={line} strokeWidth="6" /><path d="M271 185v-24h58v24m-62 155h66" stroke={green} strokeWidth="7" strokeLinecap="round" /><circle cx="378" cy="184" r="12" fill="white" stroke={green} strokeWidth="6" /><circle cx="378" cy="225" r="12" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/teething-ring/.test(slug)) {
    return <><circle cx="300" cy="238" r="85" fill="none" stroke={green} strokeWidth="24" /><circle cx="300" cy="238" r="46" fill="none" stroke={line} strokeWidth="8" /><circle cx="236" cy="160" r="16" fill={pale} stroke={green} strokeWidth="6" /><circle cx="365" cy="288" r="16" fill={pale} stroke={green} strokeWidth="6" /></>;
  }
  if (/pacifier/.test(slug)) {
    return <><path d="M276 147h48v42q56 11 56 56 0 49-80 49t-80-49q0-45 56-56z" fill={pale} stroke={green} strokeWidth="8" /><path d="M243 293v40q0 18 18 18h78q18 0 18-18v-40" fill="white" stroke={green} strokeWidth="8" /><circle cx="264" cy="260" r="7" fill={line} /><circle cx="336" cy="260" r="7" fill={line} /></>;
  }
  if (/milk-pump|breast-pump/.test(slug)) {
    return <><path d="M206 174h143v154H206z" fill={pale} stroke={green} strokeWidth="8" /><path d="M246 174v-26h64v26m-26 0v-52h89q20 0 20 20v58h-37" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M232 219h91m-91 27h91m-91 27h62" stroke={line} strokeWidth="6" /><circle cx="382" cy="225" r="23" fill="white" stroke={green} strokeWidth="7" /></>;
  }
  if (/bottle-drying-rack/.test(slug)) {
    return <><path d="M180 321h240m-210 0V175m60 146V148m60 173V175m60 146V148" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="m236 185 34-30 34 30m-94 34 26-26 26 26m42 0 26-26 26 26m-110 76h52m40 0h52" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></>;
  }
  if (/bottle-cleaning-brush|baby-grooming|nail-clipper|hairbrush|baby-comb/.test(slug)) {
    return <><path d="M222 143h156v76H222z" fill={pale} stroke={green} strokeWidth="8" /><path d="M243 219v109m114-109v109m-102-83h90m-90 28h90m-90 28h90" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="300" cy="179" r="25" fill="white" stroke={green} strokeWidth="7" /></>;
  }
  if (/bottle|teat|feeding-cup/.test(slug)) {
    return <><path d="M250 144h100v39h-100z" fill="white" stroke={green} strokeWidth="7" /><path d="M263 144v-24h74v24m-63 39h52v151q0 25-26 25t-26-25z" fill={pale} stroke={green} strokeWidth="8" /><path d="M264 231h50m-50 23h50m-50 23h50" stroke={line} strokeWidth="5" /><path d="M272 120v-25h56v25" stroke={green} strokeWidth="7" /></>;
  }
  if (/diaper|brief|incontinence/.test(slug)) {
    return <><path d="M177 164h246l-22 154q-5 31-38 31h-126q-33 0-38-31z" fill={pale} stroke={green} strokeWidth="8" /><path d="M177 164q59 48 123 0 64 48 123 0m-204 29 34 130m150-130-34 130m-103-16h68" fill="none" stroke={line} strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" /></>;
  }
  if (/nappy|baby-wipe|washcloth|towel|changing-mat|bib|nursing-pad|maternity-pad|pillow|mattress|cushion/.test(slug)) {
    return <><path d="M171 206q0-28 28-28h202q28 0 28 28v100q0 28-28 28H199q-28 0-28-28z" fill={pale} stroke={green} strokeWidth="8" /><path d="M197 222q20-26 40 0t40 0 40 0 40 0 40 0 40 0m-191 54h190" fill="none" stroke={line} strokeWidth="6" strokeLinecap="round" /><path d="M250 176v-26h100v26" stroke={green} strokeWidth="6" /></>;
  }
  if (/bathtub|bath-support|bath-chair|bath-transfer|shower-chair/.test(slug)) {
    return <><path d="M154 227h292l-22 83q-7 23-31 23H207q-24 0-31-23z" fill={pale} stroke={green} strokeWidth="8" /><path d="M178 227q35-53 73 0m-55 106v24m183-24v24m-216 0h245" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" /><path d="M240 223v-47q0-25 26-25h79" fill="none" stroke={green} strokeWidth="7" /></>;
  }
  if (/scale|weighing|length-measuring|stadiometer/.test(slug)) {
    return <><rect x="172" y="201" width="256" height="117" rx="24" fill={pale} stroke={green} strokeWidth="8" /><rect x="238" y="224" width="124" height="50" rx="10" fill="white" stroke={line} strokeWidth="6" /><path d="M267 249h67m-145 70v22m210-22v22m-233 0h255" stroke={dark} strokeWidth="8" strokeLinecap="round" /><circle cx="199" cy="273" r="8" fill={green} /><circle cx="402" cy="273" r="8" fill={green} /></>;
  }
  if (/finger-exerciser|hand-exercise|resistance-exercise|therapy-putty|pedal-exerciser|balance-board|exercise-roller|tens-device|muscle-stimulator/.test(slug)) {
    return <><path d="M180 207q0-47 47-47h146q47 0 47 47v84q0 47-47 47H227q-47 0-47-47z" fill={pale} stroke={green} strokeWidth="8" /><path d="M208 249h184m-146-52v104m108-104v104" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="300" cy="249" r="32" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/brace|support|splint|collar|belt|sling|orthopedic|traction|heel|arch-support|toe-separator|clavicle|rib|abdominal|knee|ankle|wrist|elbow|shoulder|thumb|finger|lumbar|cervical|metatarsal|walking-boot|cast-shoe/.test(slug)) {
    return <><path d="M208 139q36 15 56 0v70q0 28 36 39 36-11 36-39v-70q20 15 56 0v176q0 27-27 27H235q-27 0-27-27z" fill={pale} stroke={green} strokeWidth="8" /><path d="M220 189h160m-160 75h160m-146 69v-55m132 55v-55" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="300" cy="246" r="20" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/walker|rollator|crutch|walking-stick|cane|stretcher|spine-board|wheelchair|ramp|transfer-board|grab-rail|safety-frame|slide-sheet/.test(slug)) {
    return <><path d="M216 144v188m112-188v188m-112-143h112m-112 89h112m-90-134v-25m68 25v-25" fill="none" stroke={green} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M198 332h34m78 0h35m-104-16v22m73-22v22" stroke={dark} strokeWidth="9" strokeLinecap="round" /><circle cx="215" cy="361" r="13" fill="white" stroke={green} strokeWidth="6" /><circle cx="329" cy="361" r="13" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/bed|couch|mattress|locker|overbed-table|privacy-screen|operating-table/.test(slug)) {
    return <><path d="M159 206h283v88H159z" fill={pale} stroke={green} strokeWidth="8" /><path d="M159 205v-49q0-17 17-17h59q17 0 17 17v49m-93 89v34m252-34v34m-276 0h300" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" /><path d="M252 183h172m-172 28h172" stroke={line} strokeWidth="5" /></>;
  }
  if (/chair|commode|toilet-seat|bedpan|urinal|toilet-safety-frame/.test(slug)) {
    return <><path d="M207 159h186v82q0 43-42 43h-98q-46 0-46-43z" fill={pale} stroke={green} strokeWidth="8" /><path d="M231 282v51m139-51v51m-161 0h184m-177-136h154" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" /><circle cx="263" cy="211" r="26" fill="white" stroke={line} strokeWidth="6" /><circle cx="336" cy="211" r="26" fill="white" stroke={line} strokeWidth="6" /></>;
  }
  if (/trolley|cart|rack|stadiometer|transfer-hoist|hoist|scale|table|light|iv-stand/.test(slug)) {
    return <><path d="M180 163h240v142H180z" fill={pale} stroke={green} strokeWidth="8" /><path d="M193 197h214m-214 70h214m-189 39v32m164-32v32m-188 0h215" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="207" cy="348" r="13" fill="white" stroke={dark} strokeWidth="6" /><circle cx="393" cy="348" r="13" fill="white" stroke={dark} strokeWidth="6" /></>;
  }
  if (/monitor|analyzer|machine|defibrillator|ventilator|ultrasound|electrosurgical|incubator|oven|centrifuge|microscope|autoclave|sterilizer|washer|warmer|warming-system|pump|capnography|meter|device|concentrator|nebulizer|aspirator|oxygen|regulator|cylinder|spirometer|blood-pressure|stethoscope|thermometer|oximeter|glucometer/.test(slug)) {
    return <><rect x="171" y="137" width="258" height="190" rx="20" fill={pale} stroke={green} strokeWidth="8" /><rect x="197" y="161" width="146" height="103" rx="10" fill="white" stroke={line} strokeWidth="6" /><path d="M214 232h25l15-38 20 53 18-30h39" fill="none" stroke={green} strokeWidth="6" /><circle cx="379" cy="193" r="13" fill="white" stroke={green} strokeWidth="6" /><circle cx="379" cy="237" r="13" fill="white" stroke={green} strokeWidth="6" /><path d="M200 327v28m201-28v28m-229 0h257" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
  }
  if (/reagent|test-tube|vacutainer|micropipette|pipette-tip|specimen/.test(slug)) {
    return <><path d="M187 144h54v175h-54zm95 18h54v157h-54zm95 32h54v125h-54z" fill="white" stroke={green} strokeWidth="7" /><path d="M196 241h36v62h-36zm95-24h36v86h-36zm95-16h36v102h-36z" fill={pale} stroke={line} strokeWidth="5" /><path d="M180 321h276" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
  }
  if (/clean|disinfect|hand-hygiene|sanitizer|detergent|mop|brush|wiper/.test(slug)) {
    return <><path d="M177 177h108v151H177z" fill={pale} stroke={green} strokeWidth="7" /><path d="M202 177v-28h58v28m-44-28v-17h31v17m-52 87h51" fill="white" stroke={green} strokeWidth="6" /><path d="M351 151v177m-29 0h58m-29-177-40 34m40-34 41 34" stroke={dark} strokeWidth="8" strokeLinecap="round" /><path d="M320 327q31 30 62 0" fill="none" stroke={green} strokeWidth="8" /></>;
  }
  if (/waste|sharps|bins|bags/.test(slug)) {
    return <><path d="M194 174h212l-16 157H210z" fill="#fff4e5" stroke="#a66a16" strokeWidth="8" /><path d="M177 161h246v-26H177z" fill="#f5ce79" stroke="#a66a16" strokeWidth="7" /><path d="M248 203l52 60m0-60-52 60m36-11 45-45" stroke="#9d4141" strokeWidth="8" strokeLinecap="round" /><path d="M231 290h137" stroke="#a66a16" strokeWidth="6" /></>;
  }
  if (/exercise|therapy|resistance|balance-board|roller|putty|exerciser|stimulator|tens/.test(slug)) {
    return <><path d="M180 207q0-47 47-47h146q47 0 47 47v84q0 47-47 47H227q-47 0-47-47z" fill={pale} stroke={green} strokeWidth="8" /><path d="M208 249h184m-146-52v104m108-104v104" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="300" cy="249" r="32" fill="white" stroke={green} strokeWidth="6" /></>;
  }
  if (/bowl|cup|spoon|bibs|bathing|cleanser|shampoo|moisturizer|cream|grooming|comb|brush|nail-clipper|bottle-warm/.test(slug)) {
    return <><path d="M189 197h222l-22 112q-5 26-31 26h-116q-26 0-31-26z" fill={pale} stroke={green} strokeWidth="8" /><path d="M211 198q10-54 89-54t89 54m-127 72h80" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" /><circle cx="300" cy="225" r="16" fill="white" stroke={green} strokeWidth="5" /></>;
  }
  throw new Error(`No product-specific illustration template is defined for "${slug}".`);
}

export function ProductIllustration({ kind, productName, locale }: ProductIllustrationProps) {
  const art = (() => {
    switch (kind) {
      case 'lab-hematology':
        return <><rect x="170" y="150" width="260" height="145" rx="18" fill={pale} stroke={green} strokeWidth="8" /><rect x="193" y="174" width="124" height="75" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="M208 220h24l12-24 15 37 15-19h30" fill="none" stroke={green} strokeWidth="5" /><rect x="339" y="174" width="68" height="92" rx="7" fill="white" stroke={line} strokeWidth="5" /><path d="M351 189h42M351 206h42M351 223h42" stroke={line} strokeWidth="5" /><path d="M203 295v25m194-25v25M160 320h280" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'lab-biochemistry':
        return <><rect x="157" y="157" width="287" height="142" rx="18" fill={pale} stroke={green} strokeWidth="8" /><path d="M177 157v-26h104v26" fill="white" stroke={green} strokeWidth="7" /><rect x="186" y="184" width="104" height="74" rx="7" fill="white" stroke={line} strokeWidth="5" /><path d="M201 241h72m-72-17h49" stroke={green} strokeWidth="5" /><circle cx="348" cy="216" r="38" fill="white" stroke={line} strokeWidth="6" /><circle cx="348" cy="216" r="18" fill={pale} stroke={green} strokeWidth="5" /><path d="M181 299v24m237-24v24M150 323h302" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'lab-electrolyte':
        return <><path d="M184 177q0-23 23-23h184q23 0 23 23v116H184z" fill={pale} stroke={green} strokeWidth="8" /><rect x="211" y="183" width="108" height="75" rx="7" fill="white" stroke={line} strokeWidth="5" /><text x="265" y="229" textAnchor="middle" fill={dark} fontSize="22" fontWeight="700">Na K Cl</text><path d="M340 195h45m-45 19h45m-45 19h45" stroke={line} strokeWidth="6" strokeLinecap="round" /><path d="M211 293v29m175-29v29M198 322h201" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'lab-immunoassay':
        return <><rect x="157" y="169" width="286" height="128" rx="18" fill={pale} stroke={green} strokeWidth="8" /><rect x="180" y="190" width="104" height="73" rx="8" fill="white" stroke={line} strokeWidth="5" /><circle cx="357" cy="227" r="45" fill="white" stroke={line} strokeWidth="6" /><circle cx="357" cy="227" r="26" fill={pale} stroke={green} strokeWidth="5" /><path d="M357 191v18m36 18h-18m-18 36v-18m-36-18h18M180 297v25m238-25v25M150 322h300" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'lab-urine':
        return <><path d="M186 174h227v126H186z" rx="16" fill={pale} stroke={green} strokeWidth="8" /><rect x="209" y="192" width="118" height="71" rx="7" fill="white" stroke={line} strokeWidth="5" /><path d="M226 210h32v33h-32zm50 0h32v33h-32z" fill="#c7e5cd" stroke={green} strokeWidth="4" /><path d="M350 193v48m-16-16h32M210 300v24m176-24v24M198 324h200" stroke={dark} strokeWidth="9" strokeLinecap="round" /><path d="M219 146v-25m35 25v-25m35 25v-25" stroke={green} strokeWidth="6" strokeLinecap="round" /></>;
      case 'microscope':
        return <><path d="M249 134l41-20 62 101-42 23z" fill={pale} stroke={green} strokeWidth="8" /><path d="M345 216q45 39 21 85-17 33-61 26" fill="none" stroke={green} strokeWidth="13" strokeLinecap="round" /><path d="M222 306h190M270 327h104" stroke={dark} strokeWidth="11" strokeLinecap="round" /><path d="M236 178l-22 14m102 35-23 15" stroke={green} strokeWidth="7" strokeLinecap="round" /><rect x="231" y="245" width="95" height="16" rx="8" fill="white" stroke={line} strokeWidth="5" /><path d="M285 261v35" stroke={green} strokeWidth="7" /></>;
      case 'centrifuge':
        return <><path d="M176 207q0-42 42-42h164q42 0 42 42v91H176z" fill={pale} stroke={green} strokeWidth="8" /><path d="M208 206q0-50 92-50t92 50" fill="white" stroke={green} strokeWidth="7" /><circle cx="300" cy="214" r="44" fill={pale} stroke={line} strokeWidth="6" /><circle cx="300" cy="214" r="13" fill={green} /><path d="M300 201l-23-20m36 45 24 18m-49-7-18 26" stroke={green} strokeWidth="8" strokeLinecap="round" /><rect x="204" y="263" width="63" height="19" rx="7" fill="white" stroke={line} strokeWidth="4" /><circle cx="383" cy="272" r="8" fill={green} /></>;
      case 'incubator-oven':
        return <><rect x="161" y="116" width="132" height="202" rx="12" fill={pale} stroke={green} strokeWidth="7" /><rect x="178" y="141" width="97" height="139" rx="7" fill="white" stroke={line} strokeWidth="5" /><path d="M187 183h79m-79 40h79m-79 40h79" stroke={line} strokeWidth="5" /><rect x="319" y="142" width="121" height="176" rx="12" fill="#f4f8f4" stroke={green} strokeWidth="7" /><rect x="334" y="160" width="91" height="128" rx="7" fill="white" stroke={line} strokeWidth="5" /><path d="M344 193h71m-71 40h71m-71 40h71" stroke={line} strokeWidth="5" /><path d="M174 319h260" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'water-bath-pipette':
        return <><rect x="142" y="208" width="187" height="98" rx="13" fill={pale} stroke={green} strokeWidth="7" /><path d="M159 221h153v39H159z" fill="white" stroke={line} strokeWidth="5" /><path d="M171 241h128" stroke={green} strokeWidth="5" /><rect x="195" y="306" width="13" height="28" rx="5" fill={green} /><rect x="265" y="306" width="13" height="28" rx="5" fill={green} /><path d="M369 128l20 12-49 130-21-8z" fill="white" stroke={green} strokeWidth="7" /><path d="M357 163l18 7m-28 19 18 7m-29 20 18 7m-29 18 18 7" stroke={line} strokeWidth="4" /><path d="M317 269l-5 20 23-19" fill={green} /></>;
      case 'lab-fridge-specimen':
        return <><rect x="174" y="105" width="172" height="222" rx="14" fill={pale} stroke={green} strokeWidth="8" /><path d="M174 211h172" stroke={green} strokeWidth="6" /><path d="M320 141v45m0 48v45" stroke={line} strokeWidth="7" strokeLinecap="round" /><rect x="365" y="164" width="60" height="113" rx="9" fill="white" stroke={line} strokeWidth="5" /><path d="M376 179h38v22h-38zm0 32h38v22h-38zm0 32h38v22h-38z" fill="#dff0e2" stroke={green} strokeWidth="3" /><path d="M198 327h125" stroke={dark} strokeWidth="9" strokeLinecap="round" /></>;
      case 'scissors-forceps':
        return <><circle cx="214" cy="266" r="31" fill="white" stroke={green} strokeWidth="8" /><circle cx="291" cy="266" r="31" fill="white" stroke={green} strokeWidth="8" /><path d="M236 245l135-117q18-15 29-2-2 17-21 32L255 269m27-24L177 132q-16-17-1-28 17 2 31 19l125 131" fill="none" stroke={green} strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" /><path d="M248 248l27 24" stroke={dark} strokeWidth="10" /></>;
      case 'clamps-needleholder':
        return <><path d="M193 132l181 172m-36-183L210 302" stroke={green} strokeWidth="12" strokeLinecap="round" /><circle cx="190" cy="125" r="25" fill="white" stroke={green} strokeWidth="8" /><circle cx="382" cy="315" r="25" fill="white" stroke={green} strokeWidth="8" /><circle cx="376" cy="119" r="25" fill="white" stroke={green} strokeWidth="8" /><circle cx="202" cy="315" r="25" fill="white" stroke={green} strokeWidth="8" /><path d="M238 177l100 99m-95 7 101-102" stroke={dark} strokeWidth="6" /></>;
      case 'surgical-retractors':
        return <><path d="M199 132l38 26-35 135-42-28zM401 132l-38 26 35 135 42-28z" fill={pale} stroke={green} strokeWidth="8" /><path d="M198 133l-27-14m228 14 27-14M231 186h34m70 0h34M219 228h45m72 0h45" stroke={green} strokeWidth="7" strokeLinecap="round" /><rect x="269" y="154" width="62" height="167" rx="16" fill="white" stroke={line} strokeWidth="6" /><path d="M300 166v142" stroke={green} strokeWidth="7" /></>;
      case 'autoclave':
        return <><rect x="167" y="130" width="266" height="177" rx="20" fill={pale} stroke={green} strokeWidth="8" /><circle cx="276" cy="218" r="69" fill="white" stroke={green} strokeWidth="8" /><circle cx="276" cy="218" r="49" fill="#f4faf5" stroke={line} strokeWidth="5" /><path d="M276 177v42l27 20" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" /><rect x="360" y="163" width="50" height="29" rx="7" fill="white" stroke={line} strokeWidth="4" /><circle cx="378" cy="236" r="9" fill={green} /><path d="M197 308v24m205-24v24M180 332h242" stroke={dark} strokeWidth="8" strokeLinecap="round" /></>;
      case 'sterilization-pouches':
        return <><path d="M153 145h102v168H153z" fill="#eff7f0" stroke={green} strokeWidth="7" /><path d="M171 172h66m-66 21h66m-66 22h66" stroke={line} strokeWidth="5" /><path d="M273 127h117v186H273z" fill="white" stroke={green} strokeWidth="7" /><path d="M291 155h81v130h-81z" fill="#dceddf" stroke={line} strokeWidth="5" /><path d="M304 169h55m-55 20h55m-55 20h55m-55 20h55" stroke={line} strokeWidth="4" /><path d="M410 157v134m-16-118h32" stroke={green} strokeWidth="8" strokeLinecap="round" /></>;
      case 'patient-monitor-ecg':
        return <><rect x="159" y="115" width="282" height="174" rx="17" fill={dark} stroke={green} strokeWidth="8" /><rect x="181" y="137" width="238" height="124" rx="8" fill="#effaf1" /><path d="M194 201h39l18-36 25 72 20-46 19 10h50" fill="none" stroke="#25934f" strokeWidth="7" strokeLinejoin="round" /><path d="M300 290v40m-75 2h150" stroke={green} strokeWidth="10" strokeLinecap="round" /><rect x="185" y="333" width="230" height="13" rx="6" fill={line} /></>;
      case 'vitals-devices':
        return <><rect x="164" y="158" width="112" height="155" rx="20" fill={pale} stroke={green} strokeWidth="7" /><rect x="183" y="178" width="74" height="50" rx="8" fill="white" stroke={line} strokeWidth="4" /><path d="M198 210l10-17 12 24 9-13 13 5" fill="none" stroke={green} strokeWidth="4" /><rect x="309" y="141" width="116" height="112" rx="20" fill="white" stroke={green} strokeWidth="7" /><circle cx="367" cy="196" r="34" fill={pale} stroke={line} strokeWidth="5" /><path d="M367 196l20-14" stroke={green} strokeWidth="5" strokeLinecap="round" /><path d="M200 314v17m38-17v17m-52 2h68M345 254v58m-17 0h79" stroke={dark} strokeWidth="8" strokeLinecap="round" /></>;
      case 'oxygen-concentrator':
        return <><rect x="189" y="111" width="190" height="215" rx="24" fill={pale} stroke={green} strokeWidth="8" /><rect x="220" y="141" width="128" height="63" rx="11" fill="white" stroke={line} strokeWidth="5" /><circle cx="249" cy="174" r="12" fill="#8cc99a" /><circle cx="284" cy="174" r="12" fill="#8cc99a" /><path d="M222 226h124v70H222z" fill="white" stroke={line} strokeWidth="5" /><path d="M249 242v35m48-35v35m-72 20h120m-106 30v15m93-15v15" stroke={green} strokeWidth="7" strokeLinecap="round" /><circle cx="221" cy="333" r="10" fill={dark} /><circle cx="346" cy="333" r="10" fill={dark} /><path d="M379 167q48 2 38 44" fill="none" stroke={green} strokeWidth="6" /></>;
      case 'nebulizer-suction':
        return <><rect x="152" y="177" width="137" height="126" rx="17" fill={pale} stroke={green} strokeWidth="7" /><rect x="174" y="198" width="89" height="44" rx="7" fill="white" stroke={line} strokeWidth="4" /><circle cx="264" cy="270" r="10" fill={green} /><path d="M212 177v-31q0-20 20-20h20" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" /><path d="M252 126h24v20h-24z" fill="white" stroke={line} strokeWidth="4" /><rect x="332" y="179" width="72" height="124" rx="17" fill="white" stroke={green} strokeWidth="7" /><path d="M348 195h40v14h-40zM348 220h40v54h-40z" fill={pale} stroke={line} strokeWidth="4" /><path d="M369 179v-30m-20 154v17m39-17v17" stroke={dark} strokeWidth="7" strokeLinecap="round" /></>;
      case 'hospital-bed-couch':
        return <><path d="M154 233h287v66H154z" fill={pale} stroke={green} strokeWidth="8" /><path d="M175 211q41-53 87 0v22h-87z" fill="white" stroke={line} strokeWidth="6" /><path d="M154 207v119m287-119v119M184 298v32m227-32v32M154 330h287" stroke={dark} strokeWidth="9" strokeLinecap="round" /><path d="M264 234h155" stroke={line} strokeWidth="5" /><circle cx="184" cy="345" r="10" fill={green} /><circle cx="412" cy="345" r="10" fill={green} /></>;
      case 'ward-transport':
        return <><circle cx="225" cy="269" r="48" fill="white" stroke={green} strokeWidth="9" /><circle cx="225" cy="269" r="11" fill={line} /><path d="M225 221v-70h113l35 119H273M338 151v-39m-18 0h36" fill="none" stroke={green} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" /><path d="M283 231h88" stroke={line} strokeWidth="5" /><rect x="344" y="265" width="73" height="43" rx="10" fill={pale} stroke={green} strokeWidth="6" /><circle cx="357" cy="321" r="10" fill={dark} /><circle cx="403" cy="321" r="10" fill={dark} /></>;
      case 'ppe':
        return <><path d="M179 178q28-45 56 0l-11 81h-34z" fill={pale} stroke={green} strokeWidth="7" /><path d="M166 190q-27 5-21 32m102-32q27 5 21 32m-96 1h67" fill="none" stroke={line} strokeWidth="5" /><path d="M299 220q36-47 74 0l-14 68h-46z" fill="white" stroke={green} strokeWidth="7" /><path d="M310 234h51m-47 16h43" stroke={line} strokeWidth="5" /><path d="M388 149l28 10-16 108q-9 26-26 13l-3-22z" fill={pale} stroke={green} strokeWidth="7" /><path d="M395 165l-18 100" stroke={line} strokeWidth="5" /></>;
      case 'medical-consumables':
        return <><rect x="146" y="177" width="102" height="135" rx="10" fill="white" stroke={green} strokeWidth="7" /><path d="M163 197h68v74h-68z" fill={pale} stroke={line} strokeWidth="5" /><path d="M175 216h44m-44 18h44m-44 18h44" stroke={line} strokeWidth="4" /><path d="M291 180h43v132h-43z" fill="white" stroke={green} strokeWidth="7" /><path d="M300 205h25v65h-25z" fill={pale} stroke={line} strokeWidth="4" /><path d="M376 173h57v139h-57z" fill="#f5faf6" stroke={green} strokeWidth="7" /><path d="M384 195h41m-41 17h41m-41 17h41m-41 17h41" stroke={line} strokeWidth="4" /><path d="M178 160v17m134-17v17m93-17v13" stroke={green} strokeWidth="6" strokeLinecap="round" /></>;
      case 'insulin-syringe':
        return <><path d="M207 194l26-26 119 119-26 26z" fill={pale} stroke={green} strokeWidth="7" /><path d="M226 196l16-16m6 36 17-17m6 36 16-17m6 36 17-17m6 36 16-17" stroke={green} strokeWidth="4" /><path d="M205 193l-24-24m157 157 25 25m-179-182-17 17m216 145 17-17" stroke={dark} strokeWidth="6" strokeLinecap="round" /><path d="M174 327h74m-30-23v46" stroke={line} strokeWidth="6" strokeLinecap="round" /><rect x="383" y="173" width="17" height="119" rx="8" fill="white" stroke={line} strokeWidth="4" /></>;
      case 'tuberculin-syringe':
        return <><path d="M192 226h183v39H192z" fill="white" stroke={green} strokeWidth="7" /><path d="M375 236h59v19h-59m-183-9h-31" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" /><path d="M217 226v19m23-19v12m24-12v19m24-19v12m24-12v19m24-19v12m24-12v19" stroke={line} strokeWidth="4" /><path d="M206 205v82m-15-66h29m-29 50h29" stroke={dark} strokeWidth="6" strokeLinecap="round" /><path d="M434 245h33" stroke={line} strokeWidth="4" /></>;
      case 'syringe-range':
        return <><path d="M155 239h128v31H155z" fill="white" stroke={green} strokeWidth="6" /><path d="M283 246h48v17h-48m-128-9h-23m54-15v12m20-12v12m20-12v12" stroke={line} strokeWidth="4" /><path d="M204 172h161v36H204z" fill={pale} stroke={green} strokeWidth="6" /><path d="M365 180h53v20h-53m-161-10h-28m50-18v13m26-13v13m26-13v13m26-13v13m26-13v13" stroke={line} strokeWidth="4" /><path d="M193 304h207v35H193z" fill="white" stroke={green} strokeWidth="6" /><path d="M400 313h50v17h-50m-207-9h-29m51-17v13m29-13v13m29-13v13m29-13v13m29-13v13" stroke={line} strokeWidth="4" /></>;
      case 'walkers-supports':
        return <><path d="M194 143v181m112-181v181m-112-142h112m-112 99h112m-94-138v-26m76 26v-26" fill="none" stroke={green} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M182 324h24m89 0h24m-99-17v20m76-20v20" stroke={dark} strokeWidth="9" strokeLinecap="round" /><path d="M346 147v170m-26-145h52m-37-25h22m-11 0v-18" stroke={line} strokeWidth="8" strokeLinecap="round" /></>;
      case 'air-mattress-commode':
        return <><rect x="151" y="193" width="227" height="93" rx="22" fill={pale} stroke={green} strokeWidth="8" /><path d="M172 219q16-22 32 0t32 0 32 0 32 0 32 0 32 0" fill="none" stroke={line} strokeWidth="5" /><path d="M173 287v31m185-31v31" stroke={dark} strokeWidth="8" /><path d="M408 188v125m-47-89h91m-82 0 12 84h48l12-84" fill="none" stroke={green} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /><path d="M372 313h65m-49-21h32" stroke={line} strokeWidth="6" /></>;
      case 'sterile-gown-drape':
        return <><path d="M244 134l-44 25-39 53 40 28 18-24v112h164V216l18 24 40-28-39-53-44-25-29 31h-46z" fill={pale} stroke={green} strokeWidth="8" strokeLinejoin="round" /><path d="M271 138q29 43 58 0m-104 87h150m-126 36h103" fill="none" stroke={line} strokeWidth="6" /><path d="M267 167h67" stroke={green} strokeWidth="5" /></>;
      case 'sutures-blades':
      case 'suture-pack':
        return <><circle cx="245" cy="224" r="62" fill="white" stroke={green} strokeWidth="8" /><circle cx="245" cy="224" r="39" fill={pale} stroke={line} strokeWidth="5" /><path d="M278 267q79 68 131-10" fill="none" stroke={green} strokeWidth="6" /><path d="M360 146l69 28-47 33-43-23z" fill="#f4f7f4" stroke={line} strokeWidth="5" /><path d="M385 174l-39 79m-5-106 55 22" stroke={green} strokeWidth="6" strokeLinecap="round" /></>;
      case 'disinfectants':
      case 'hand-rub':
        return <><path d="M188 174h119v146q0 13-14 13h-91q-14 0-14-13z" fill={pale} stroke={green} strokeWidth="7" /><path d="M214 174v-31h66v31m-50-31v-18h36v18" fill="white" stroke={green} strokeWidth="6" /><rect x="205" y="219" width="85" height="49" rx="8" fill="white" stroke={line} strokeWidth="4" /><path d="M222 239h52m-42 16h32" stroke={line} strokeWidth="4" /><path d="M350 183h52v139h-52z" fill="white" stroke={green} strokeWidth="6" /><path d="M360 183v-25h33v25m-14-25v-16h48" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" /><path d="M362 221h28m-28 18h28" stroke={line} strokeWidth="4" /></>;
      case 'mop-trolley':
        return <><path d="M174 174h109v124H174z" fill={pale} stroke={green} strokeWidth="7" /><path d="M284 192h109v106H284z" fill="#f8fbf8" stroke={green} strokeWidth="7" /><path d="M184 212h89m-89 53h89m11-38h89m-89 53h89" stroke={line} strokeWidth="5" /><path d="M198 299v28m158-28v28m-181 0h206" stroke={dark} strokeWidth="8" strokeLinecap="round" /><path d="M330 192v-54m-16 9 16-22 16 22m-16-9v151" stroke={green} strokeWidth="7" strokeLinecap="round" /></>;
      case 'waste-bins-bags':
        return <><path d="M156 167h103l-10 156h-83z" fill="#fff6df" stroke="#a66a16" strokeWidth="7" /><path d="M145 154h125m-104 13v-18h83v18" stroke="#a66a16" strokeWidth="7" strokeLinecap="round" /><path d="M170 197h75m-72 25h68m-66 25h64" stroke="#c28a35" strokeWidth="5" /><path d="M301 173h102l-10 150h-82z" fill="#fbe9e9" stroke="#9d4141" strokeWidth="7" /><path d="M291 160h122m-103-4v-16h84v16" stroke="#9d4141" strokeWidth="7" strokeLinecap="round" /><path d="M331 207l21-12 21 12v33l-21 12-21-12z" fill="white" stroke="#9d4141" strokeWidth="5" /></>;
      case 'sharps':
        return <><path d="M202 146h173l-13 171H215z" fill="#fff4e5" stroke="#b26b16" strokeWidth="8" /><path d="M188 146h202v-24H188z" fill="#f3c66b" stroke="#b26b16" strokeWidth="7" /><path d="M257 132h65" stroke="#8e5716" strokeWidth="8" strokeLinecap="round" /><path d="M249 200l34 34m0-34-34 34m52 24 29-29" stroke="#a66a16" strokeWidth="7" strokeLinecap="round" /><path d="M284 252l38-38" stroke="#9d4141" strokeWidth="7" /></>;
      case 'iv-infusion':
        return <><path d="M302 124v212m-38-191h76m-38-21v-17" stroke={green} strokeWidth="8" strokeLinecap="round" /><path d="M278 145h48v66h-48z" fill={pale} stroke={green} strokeWidth="6" /><path d="M286 171h32" stroke={line} strokeWidth="5" /><path d="M302 211v42q0 25-31 25h-36" fill="none" stroke={green} strokeWidth="5" /><path d="M231 272h44v50h-44z" fill="white" stroke={line} strokeWidth="5" /><path d="M252 322v18m-45-1h91" stroke={dark} strokeWidth="8" strokeLinecap="round" /></>;
      case 'iv-cannula':
        return <><path d="M176 212h158v63H176z" fill={pale} stroke={green} strokeWidth="7" /><path d="M334 229h76v29h-76m-137-17h65" fill="white" stroke={line} strokeWidth="5" /><path d="M188 194v99m19-99v99" stroke={green} strokeWidth="6" /><path d="M410 243h38" stroke={dark} strokeWidth="5" strokeLinecap="round" /><path d="M267 212l-28-27" stroke={line} strokeWidth="5" /></>;
      case 'ent-set':
        return <><path d="M208 142v149m-18-145h36m-18 145h-33m33 0h35" stroke={green} strokeWidth="8" strokeLinecap="round" /><circle cx="208" cy="149" r="23" fill="white" stroke={line} strokeWidth="6" /><path d="M299 145l22 5-32 140-22-5z" fill={pale} stroke={green} strokeWidth="7" /><path d="M351 149v143m-16-134h32m-16 134h-24m24 0h24" stroke={green} strokeWidth="8" strokeLinecap="round" /><circle cx="351" cy="157" r="20" fill="white" stroke={line} strokeWidth="6" /></>;
      case 'reagent-kits':
        return <><path d="M175 163h61v164h-61z" fill="white" stroke={green} strokeWidth="7" /><path d="M184 163v-28h43v28m-38 52h33v61h-33z" fill={pale} stroke={line} strokeWidth="5" /><path d="M275 185h61v142h-61z" fill="white" stroke={green} strokeWidth="7" /><path d="M284 185v-26h43v26m-39 45h35v52h-35z" fill="#e4f1e6" stroke={line} strokeWidth="5" /><path d="M373 205h54v122h-54z" fill="white" stroke={green} strokeWidth="7" /><path d="M381 205v-25h38v25m-34 48h30v42h-30z" fill={pale} stroke={line} strokeWidth="5" /></>;
      default:
        if (kind.startsWith('product-')) return catalogueProductArt(kind.slice('product-'.length));
        throw new Error(`No SVG illustration is defined for "${kind}".`);
    }
  })();

  const isNe = locale === 'ne';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 480"
      role="img"
      aria-label={isNe
        ? `${productName} का लागि उत्पादन चित्रण; वास्तविक मोडेल फरक हुन सक्छ।`
        : `Product illustration representing ${productName}; actual model may differ.`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{isNe ? `${productName} को उत्पादन चित्रण` : `Product illustration for ${productName}`}</title>
      <rect width="600" height="480" rx="22" fill="#f7faf7" />
      <circle cx="300" cy="226" r="153" fill="#edf6ee" />
      <path d="M96 355h408" stroke="#d4e5d7" strokeWidth="3" strokeLinecap="round" />
      <g aria-hidden="true">{art}</g>
      <text x="300" y="34" textAnchor="middle" fill={dark} fontSize="17" fontWeight="700" fontFamily="Arial, sans-serif">
        Product illustration; actual model may differ.
      </text>
      <text x="300" y="64" textAnchor="middle" fill={green} fontSize="18" fontWeight="700" fontFamily="Noto Sans Devanagari, Nirmala UI, sans-serif">
        सामानको चित्रण; वास्तविक मोडेल फरक हुन सक्छ।
      </text>
    </svg>
  );
}

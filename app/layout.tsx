import type { Metadata } from 'next';
import type {CSSProperties} from 'react';
import {storefront} from './storefront';
import './globals.css';
import './motion.css';
import './checkout.css';
import './everyday.css';
import './collections.css';
import './curated.css';
import './worlds.css';
import './shopping.css';
export const metadata: Metadata = {title:`${storefront.name} — Menswear & Everyday`,description:storefront.description,robots:{index:false,follow:false},icons:{icon:storefront.logo}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="it"><body style={{'--brand-logo':`url("${storefront.logo}")`,'--brand-ratio':`${storefront.logoWidth} / ${storefront.logoHeight}`} as CSSProperties}>{children}</body></html>}

# Memento — Fashion ecommerce proposal

Private reusable fashion ecommerce concept by Memento, built around the selected PANGAIA, SEROTONINN and AETHER references. The demonstration catalog uses JACK & JONES / ONLY & SONS / ONLY photography; it does not represent an active retailer inventory.

## V9 — Replaceable identity and direct product discovery

- The original user-supplied Memento SVG wordmark replaces the Valber identity. `app/storefront.ts` controls the name, logo source, intrinsic proportions and metadata; the homepage mask and travelling logo use those same values. Header, footer, checkout, error page and product/category titles share the identity. The prior Valber logo/favicon are removed from the current public output.
- This is a reusable private proposal. Store records have generic names and no claimed street addresses; former client social links and map directions are removed. Fashion brand photographs and campaign video retain their original attribution and demo status.
- Direct shopping actions appear in the opening scene: shop men/women/jeans and familiar category links. A photographic “Cosa cerchi?” section leads straight to a filtered, nonempty catalog; the Denim entry uses gender-specific fit choices.
- The homepage is shorter: visual category selection, everyday products, one interactive outfit composition, editorial world entrances, then store discovery. The detailed men/women/denim editorial pages remain.
- “Parti da un capo” lets a visitor choose a starting garment and see a complete proposed outfit with real product photos, individual links and total price. Six anchors cover all four men's and both women's looks. Its final action opens the existing size-aware shopping drawer, where any garment may be included or excluded.
- Product-card actions remain visible without hover. Existing stock, variants, shipping/pickup and five simulated payment methods are retained.

Validation uses eight automated tests: the six previous commerce checks plus every photographic category/fit path and every outfit starting garment. App-scoped TypeScript and the standard production build are the publication gates. Browser visual and interaction QA remains unverified after the previously documented URL-policy block; no blocked browser action was retried.

To adapt the identity, edit `app/storefront.ts` and provide the correct vector file and intrinsic width/height. Store details live in `app/data.ts`. The saved V8 remains available in source and Site history. The current Site address retains its original slug; changing the in-page identity does not change that address.

## V8 — Three editorial worlds on one shared grid

- Dedicated `/uomo`, `/donna` and `/denim` experiences, reachable from the main navigation, mobile menu, footer and full-bleed homepage entrances. Men remain the primary entry.
- Uomo: the existing official nine-second JACK & JONES campaign opens a large typographic scene. Four selectable outfit compositions update the principal photograph, companion garments and price; each connects to the existing size-aware outfit drawer. Full-width garment chapters follow.
- Donna: ONLY campaign photography leads into two alternating styling stories with large garment imagery, direct product hotspots, companion pieces and complete-look actions. Scenes stack during scrolling only when the viewport can accommodate them; mobile uses a linear story.
- Denim: a draggable, keyboard-operable visual fit comparison, separate men/women assortment controls and two distinct model selectors. It compares actual product photographs, not body measurements or a promised size match. Three wash chapters link to the selected garments.
- Shared responsive gutter, section spacing and grid-gap tokens align navigation, catalog, text and controls. Campaign scenes extend to the viewport edges. Catalog introductions are compact, with a link back to the corresponding editorial world.
- The homepage retains one travelling wordmark; the world pages use the same single header wordmark over the hero, switching to a light navigation surface when the hero leaves view. Existing native scroll scheduling, reduced-motion support, video visibility/pause controls, product selection and all five simulated payment methods remain.

Validation: six automated commerce-model tests and app-scoped TypeScript passed on 8 September 2026. Production publication uses the standard verified build gate.

Browser QA is incomplete. The supervised preview allowed inspection of the previous collection pages, which revealed an image-positioning issue corrected in this update. Client navigation then failed in the HTTP preview because secure-context crypto was unavailable; a direct request to a new route was blocked by the browser URL policy. Browser actions were stopped at that policy boundary. No V8 screenshot, desktop/mobile interaction, draggable comparison or scroll-layout pass is claimed. Real-device visual, keyboard and performance review remain required before commercial launch.

## V7 — Curated outfits and a more complete shopping journey

- Home: male campaign with a single travelling wordmark, three shoppable outfit boards, everyday garments, a scroll composition of City layers, the fit explorer, a substantial ONLY chapter and city/store catalog links.
- Six curated demo looks: four men and two women. A look drawer lets shoppers include/exclude garments, explicitly select each size and denim length, compare the selected subtotal and check pickup eligibility across the demo stores. Adding a look validates the entire resulting bag, including shared-garment quantities and store stock.
- Nineteen products: twelve men, seven women, eight categories. ONLY now includes KITA tee, LESLY cardigan, MONZA blazer and MOLLY dress alongside the three denim models. Alphabetic, EU numeric and denim W/L sizes retain appropriate labels through product, outfit, bag and checkout.
- Men's collection opens with shirt/racer pairings and structured urban styling; women's collection opens with dress/tee compositions and layering ideas. Both use the Valber sans typography; the prior plum/serif treatment has been removed.
- Seven products now have a third detail photo. Verified composition and model height/worn size appear where official data was found. The product-only cardigan/hoodie galleries do not claim an on-photo model. ONLY size guidance links to the official guide; no garment measurements or fit guarantees have been invented.
- Product recommendations are explicit outfit companions. Mobile product pages have a fixed size/add action. Catalog-to-product navigation stores the originating filter URL and scroll position in session storage; returning through the selection link requests restoration.
- Native scrolling, accessible Radix controls and reduced-motion support remain. Product cards use a simpler front/back hover; the City layers section reveals its companion garments with scrolling. The original approximately nine-second JACK & JONES video remains.
- City links lead to location-filtered catalogs; the real Valber Facebook page is linked. Found directory photos could not be verified as Valber premises or staff, so they were not included. Original store/staff footage is still needed. Conflicting Pordenone addresses are explicitly marked for merchant confirmation.

Validation on 8 September 2026: app-scoped TypeScript and production build passed. Six automated tests exercise outfit completeness/totals, numeric/alpha/waist variants, 100 pickup combinations with both accepted and rejected outcomes, overlapping stock caps, filter URL round trips, recommendations, all displayed product assets, and retained payment methods. Run `node --test tests/valber-looks.test.mjs`.

Browser QA was requested and attempted against the supervised local preview. The browser connection and recovery calls did not return, so no desktop/mobile interaction, screenshot, scroll restoration or visual layout result is claimed. These remain review gates before a commercial launch. This publication is a private, non-transactional prototype.

## V6 — Distinct men's and women's collection identities

- Men's collection: graphite navigation and campaign masthead, urban JACK & JONES photography, bold uppercase typography, steel accents and structured category buttons.
- Women's collection: light editorial masthead with inset ONLY portrait, contrasting serif titles, plum details and fine underline navigation.
- Shared Valber wordmark and purchase flow. Product pages inherit their collection's typography, controls and accents. The home keeps its single travelling logo and official video.
- A compact image/copy split keeps the mobile category introduction contained. Collection and product entrance motion respects reduced-motion preferences; portrait depth uses the existing single scroll/pointer scheduler.
- The collection switch remains above the introduction. Denim navigation and product recommendation links retain women's collection context when selected. All-products view stays neutral.
- Existing local campaign imagery is reused; no added media downloads or dependencies. Product data, sizes, stock and simulated payment behavior are unchanged.

Validation: app-scoped TypeScript and production build, source/asset checks. No browser or screenshot testing in this iteration.

## V5 — Menswear, a mixed wardrobe, and official campaign footage

- Men are the default collection. The homepage selection covers a tee, a shirt, denim and a jacket. Women remain accessible through navigation and a compact ONLY entry.
- 15 demo products: 12 men and 3 women. Seven categories: jeans, T-shirts, polos, shirts, sweatshirts, knitwear and jackets. The six added garments use official, locally stored 700px front/back photography.
- Product variants distinguish waist/leg denim sizes from alpha apparel sizes. Non-denim uses an internal `standard` length key which is never displayed. The same variant label and stock rules run through product pages, bag, pickup and checkout.
- Catalog category, gender, color family, size, brand, price, store, fit, sorting and search state are represented in the URL. Changing a category clears incompatible fit/size choices. Search includes categories and Italian color names; submitting a global search covers both collections.
- Bag and checkout share one quote calculated in integer cents. Session restore rejects malformed variants, merges duplicate lines and caps stale quantities against demo stock.
- Hero uses the official JACK & JONES city/trousers film (about 9 seconds) in its native wide or square edit. Only the matching local video is requested when the hero enters the viewport. H.264 without audio, web faststart; roughly 2.76 MB desktop / 1.69 MB mobile. User pause, offscreen/tab pause, reduced-motion and data-saver preferences are respected. A static campaign poster remains available if playback fails or is disabled.
- The V4 single travelling Valber logo, native scrolling, card hovers, fit explorer and all five simulated payment methods remain.
- These are responsive edits of one official campaign, not two different campaigns. Video/product rights and provenance are recorded in ASSET_SOURCES.json.

## Priorità tecniche per il sito definitivo

1. **Gestionale e giacenze per sede.** Identificare il gestionale attuale e una sola fonte autorevole dello stock. Ogni variante deve avere SKU/EAN, taglia, colore e quantità per negozio. Riservare lo stock durante l'ordine e rilasciarlo su annullamento/scadenza; sincronizzare anche le vendite in cassa. Confermare sedi attive e servizi effettivi.
2. **Catalogo amministrabile.** Sostituire i dati nel codice con un catalogo gestito da backend/CMS o piattaforma commerce. Importare descrizioni, composizioni, guida taglie, prezzi, media approvati e varianti; validare errori e prodotti incompleti prima della pubblicazione.
3. **Ordini, pagamenti e consegna.** Spostare totali, disponibilità e creazione ordini sul server. Collegare il provider scelto e verificare le notifiche firmate, gestendo duplicati e ritardi. Definire una regola per bag con capi in negozi diversi, tariffe, ritiro, resi, tracking ed email transazionali.
4. **Facebook e Instagram.** Valutare un catalogo Meta alimentato dallo stesso catalogo commerciale, dato l'uso attuale di Facebook da parte di Valber. Nessun feed o tracciamento pubblicitario è attivo nel prototipo; eventi e consensi vanno progettati prima dell'attivazione.
5. **Verifica prima del lancio.** Misurare prestazioni su dispositivi reali, verificare navigazione mobile/tastiera e flusso d'acquisto, definire monitoraggio errori e backup, configurare indicizzazione e dati strutturati usando dati commerciali reali. Il prototipo mantiene noindex e dati fittizi.

Fonti tecniche consultate il 7 settembre 2026:
- Shopify, stock per sede: https://help.shopify.com/en/manual/products/inventory/setup/multi-managed-inventory
- Shopify, assegnazione ordini: https://help.shopify.com/en/manual/fulfillment/setup/locations/fulfillment
- Stripe, notifiche e duplicati: https://docs.stripe.com/webhooks
- Meta, cataloghi: https://www.facebook.com/business/help/890714097648074
- Video ufficiale, homepage JACK & JONES: https://www.jackjones.com/en-nl

Queste priorità non impegnano la scelta della piattaforma: dipende soprattutto dall'integrazione disponibile con il gestionale di Valber.

## V4 — One travelling wordmark and simulated checkout

- The header contains the one visible opening wordmark. A layout-only hero marker reserves its large position; the same linked mark scales/translates into the navigation. Its original alpha mask adapts the ink across the light header and photography. Reduced-motion mode keeps a single stationary header mark.
- V3 photography, hover effects, parallax, layout and fit interactions are preserved.
- Bag → contact and shipping/pickup → payment method → simulated result.
- Card, PayPal, Apple Pay, Google Pay and bank transfer are all local simulations. Card data is fixed and masked; no card-number or security-code input, payment SDK, provider popup or network request is used.
- Contact/address fields are prefilled with fictitious data and exist only in component memory. No orders, emails or reservations are sent. Closing an in-progress simulation cancels its timer.
- Card supports a declined result and retry. Wallets simulate authorization; bank transfer ends with a pending state without bank coordinates. The bag remains available to try another method.
- Checkout totals use integer cents, revalidate variant stock and aggregate duplicate variant quantities before checking store availability. Shipping is 490 demo cents; eligible pickup is free.
- V3 remains available in source history and its saved Sites version (source d4dc99fbf3f2f5354fdafde654e0b624fe2cd070).

## V3 — Editorial motion

- Removed the blue announcement strip; shop locations remain in navigation, the local section and footer. Demo information remains available from the footer, catalog and order flow.
- Transparent home navigation becomes a light surface while scrolling. A thin line shows reading progress.
- A short sticky opening combines scroll-driven photo depth, a changing image frame, separate copy movement and pointer response. Large original Valber branding remains the central element.
- One requestAnimationFrame scheduler handles all scroll/pointer effects, stops after settling, and respects reduced-motion and coarse-pointer preferences. Native wheel, touch and keyboard scrolling are never intercepted.
- Product cards reveal on entering the viewport and include front/back image wipes, restrained perspective and pointer lighting; product detail supports pointer-positioned zoom. Home products have an editorial stagger; the catalog grid remains aligned.
- Fit tabs keep all three panels mounted for a crossfade with stable height. Inactive panels are inert and hidden from assistive technology. The indicator glides between fits; keyboard focus and mobile swipe are preserved.
- The women’s campaign becomes a full-width parallax image; section headings reveal line by line; links, selected calls to action and the footer share the motion language.
- V1 and V2 remain recoverable through saved Sites versions and source history. V2 source: 1d6748f2c96eda90a82988245fb2ab629e36291d.

## Included

- Editorial homepage with original Valber logo and real brand imagery.
- Clothing catalog: category, gender, denim fit, brand, color, size, store and price filters; sorting and search.
- Nineteen product routes with front/back imagery, seven detail galleries, category-appropriate sizes and demo store availability.
- Session-local shopping bag, stock quantity limits, shipping/pickup simulation and a non-transactional checkout with five simulated payment methods.
- Four example store records across Maniago, Spilimbergo and Pordenone, based on Valber sources; active premises and conflicting Pordenone addresses must be confirmed.
- Responsive styles, reduced-motion support, keyboard-accessible Radix controls.

## Demonstration data

Prices, sizes, stock, shipping fees and shipping timelines are examples. No orders, payments or reservations are sent. Prefilled fictitious contact/address values are kept only in temporary component memory; they are never transmitted or persisted. Bag data is stored only in browser sessionStorage.

Color and named fit correspond to the selected brand imagery. Composition and model information are included only where verified in the recorded official sources; remaining fields need a complete catalog import. Model height/worn size are not garment measurements. ALEX baggy appears within the broader Loose catalog filter.

Image provenance is recorded in ASSET_SOURCES.json. Assets were sourced for this private evaluation; approved brand/retailer media rights must be confirmed before a public commercial launch.

## Launch dependencies

Confirm active stores and assortment per store; existing POS/ERP with export/API; official product identifiers and media feeds; the inventory system of record; reservation/cancellation/returns handling; shipping origin rules and mixed-store carts; approved prices, tax, delivery and returns policies; payment provider and transactional notifications.

The prototype does not contain a live Shopify or POS connection.

## Validation

Production build and app-scoped TypeScript checks. Model checks cover catalog counts/categories, male default, filter URL round-trips, search, alpha and waist variants, stock quantities, mixed checkout totals, eligible/ineligible pickup, duplicate stock caps and safe session restore. Product asset existence and video duration/codec/no-audio are checked. Browser interaction, measured Web Vitals and screenshot testing have not been performed in this iteration.

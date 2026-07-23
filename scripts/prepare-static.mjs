import { mkdir, readFile, writeFile } from 'node:fs/promises'

const homeHtml = await readFile('dist/index.html', 'utf8')
const pricingTitle = 'CallAudit.co Pricing | 100 Minutes Free'
const pricingDescription =
  'Audit your first 100 call minutes free. Contact CallAudit.co for high-volume transcript auditing, custom scorecards, platform integrations, and live analysis.'

const pricingGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://callaudit.co/pricing/#webpage',
      url: 'https://callaudit.co/pricing/',
      name: pricingTitle,
      description: pricingDescription,
      isPartOf: { '@id': 'https://callaudit.co/#website' },
      about: { '@id': 'https://callaudit.co/#software' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://callaudit.co/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pricing',
          item: 'https://callaudit.co/pricing/',
        },
      ],
    },
    {
      '@type': 'Offer',
      name: 'First 100 Call Minutes Audit',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://callaudit.co/pricing/',
      itemOffered: { '@id': 'https://callaudit.co/#software' },
    },
  ],
}

const pricingHtml = homeHtml
  .replaceAll('./assets/', '../assets/')
  .replace(/<title>[^<]*<\/title>/, `<title>${pricingTitle}</title>`)
  .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${pricingDescription}" />`)
  .replace(/<link rel="canonical" href="[^"]*" \/>/, '<link rel="canonical" href="https://callaudit.co/pricing/" />')
  .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${pricingTitle}" />`)
  .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${pricingDescription}" />`)
  .replace(/<meta property="og:url" content="[^"]*" \/>/, '<meta property="og:url" content="https://callaudit.co/pricing/" />')
  .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${pricingTitle}" />`)
  .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${pricingDescription}" />`)
  .replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(pricingGraph)}</script>\n  </head>`,
  )

await mkdir('dist/pricing', { recursive: true })
await writeFile('dist/pricing/index.html', pricingHtml)
await writeFile('dist/404.html', homeHtml)

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
const assetFiles = await readdir('dist/assets')
const cssFile = assetFiles.find((file) => file.endsWith('.css'))
const jsFile = assetFiles.find((file) => file.endsWith('.js'))

if (!cssFile || !jsFile) throw new Error('Missing production CSS or JavaScript asset')

const [baseHtml, css, js] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile(`dist/assets/${cssFile}`, 'utf8'),
  readFile(`dist/assets/${jsFile}`, 'utf8'),
])

const html = baseHtml
  .replace(
    /<script type="module" crossorigin src="\.\/assets\/[^\"]+"><\/script>/,
    () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`,
  )
  .replace(
    /<link rel="stylesheet" crossorigin href="\.\/assets\/[^\"]+">/,
    () => `<style>${css}</style>`,
  )

const pricingTitle = 'CallAudit.co Pricing | 100 Minutes Free or High-Volume Analysis'
const pricingDescription =
  'Audit your first 100 call minutes free, or contact CallAudit.co for high-volume transcript auditing and live call analysis.'
const pricingHtml = html
  .replace(/<title>[^<]*<\/title>/, `<title>${pricingTitle}</title>`)
  .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${pricingDescription}" />`)
  .replace(/<link rel="canonical" href="[^"]*" \/>/, '<link rel="canonical" href="https://callaudit.co/pricing" />')
  .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${pricingTitle}" />`)
  .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${pricingDescription}" />`)
  .replace(/<meta property="og:url" content="[^"]*" \/>/, '<meta property="og:url" content="https://callaudit.co/pricing" />')

await writeFile(
  'dist/server/index.js',
  `const html = ${JSON.stringify(html)}
const pricingHtml = ${JSON.stringify(pricingHtml)}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/' || !url.pathname.includes('.')) {
      return new Response(url.pathname === '/pricing' ? pricingHtml : html, {
        headers: { 'content-type': 'text/html; charset=UTF-8' },
      })
    }
    return new Response('Not found', { status: 404 })
  },
}\n`,
)

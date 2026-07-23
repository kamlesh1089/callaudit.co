import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
const assetFiles = await readdir('dist/assets')
const cssFile = assetFiles.find((file) => file.endsWith('.css'))
const jsFile = assetFiles.find((file) => file.endsWith('.js'))

if (!cssFile || !jsFile) throw new Error('Missing production CSS or JavaScript asset')

const [baseHtml, basePricingHtml, css, js] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile('dist/pricing/index.html', 'utf8'),
  readFile(`dist/assets/${cssFile}`, 'utf8'),
  readFile(`dist/assets/${jsFile}`, 'utf8'),
])

const inlineAssets = (source) => source
  .replace(
    /<script type="module" crossorigin src="(?:\.\.\/|\.\/)assets\/[^\"]+"><\/script>/,
    () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`,
  )
  .replace(
    /<link rel="stylesheet" crossorigin href="(?:\.\.\/|\.\/)assets\/[^\"]+">/,
    () => `<style>${css}</style>`,
  )

const html = inlineAssets(baseHtml)
const pricingHtml = inlineAssets(basePricingHtml)

await writeFile(
  'dist/server/index.js',
  `const html = ${JSON.stringify(html)}
const pricingHtml = ${JSON.stringify(pricingHtml)}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/' || url.pathname === '/pricing' || url.pathname === '/pricing/') {
      return new Response(url.pathname.startsWith('/pricing') ? pricingHtml : html, {
        headers: { 'content-type': 'text/html; charset=UTF-8' },
      })
    }
    return new Response('Not found', { status: 404 })
  },
}\n`,
)

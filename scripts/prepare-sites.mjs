import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
const assetFiles = await readdir('dist/assets')
const cssFile = assetFiles.find((file) => file.endsWith('.css'))
const jsFile = assetFiles.find((file) => file.endsWith('.js'))

if (!cssFile || !jsFile) throw new Error('Missing production CSS or JavaScript asset')

const [baseHtml, basePricingHtml, css, js, robots, sitemap, llms, ai, security, og] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile('dist/pricing/index.html', 'utf8'),
  readFile(`dist/assets/${cssFile}`, 'utf8'),
  readFile(`dist/assets/${jsFile}`, 'utf8'),
  readFile('dist/robots.txt', 'utf8'),
  readFile('dist/sitemap.xml', 'utf8'),
  readFile('dist/llms.txt', 'utf8'),
  readFile('dist/ai.txt', 'utf8'),
  readFile('dist/.well-known/security.txt', 'utf8'),
  readFile('dist/og.png'),
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
const textFiles = {
  '/robots.txt': { body: robots, type: 'text/plain; charset=UTF-8' },
  '/sitemap.xml': { body: sitemap, type: 'application/xml; charset=UTF-8' },
  '/llms.txt': { body: llms, type: 'text/plain; charset=UTF-8' },
  '/ai.txt': { body: ai, type: 'text/plain; charset=UTF-8' },
  '/.well-known/security.txt': { body: security, type: 'text/plain; charset=UTF-8' },
}

await writeFile(
  'dist/server/index.js',
  `const html = ${JSON.stringify(html)}
const pricingHtml = ${JSON.stringify(pricingHtml)}
const textFiles = ${JSON.stringify(textFiles)}
const ogImage = ${JSON.stringify(og.toString('base64'))}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/' || url.pathname === '/pricing' || url.pathname === '/pricing/') {
      return new Response(url.pathname.startsWith('/pricing') ? pricingHtml : html, {
        headers: { 'content-type': 'text/html; charset=UTF-8' },
      })
    }
    if (textFiles[url.pathname]) {
      const file = textFiles[url.pathname]
      return new Response(file.body, {
        headers: { 'content-type': file.type },
      })
    }
    if (url.pathname === '/og.png') {
      return new Response(Uint8Array.from(atob(ogImage), (character) => character.charCodeAt(0)), {
        headers: {
          'content-type': 'image/png',
          'cache-control': 'public, max-age=86400',
        },
      })
    }
    return new Response('Not found', { status: 404 })
  },
}\n`,
)

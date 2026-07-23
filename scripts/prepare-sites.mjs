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
await writeFile(
  'dist/server/index.js',
  `const html = ${JSON.stringify(html)}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/' || !url.pathname.includes('.')) {
      return new Response(html, {
        headers: { 'content-type': 'text/html; charset=UTF-8' },
      })
    }
    return new Response('Not found', { status: 404 })
  },
}\n`,
)

import { readFile, writeFile } from 'node:fs/promises'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
})

try {
  const [{ default: Home }, { default: Pricing }] = await Promise.all([
    server.ssrLoadModule('/src/pages/Home.tsx'),
    server.ssrLoadModule('/src/pages/Pricing.tsx'),
  ])

  const pages = [
    { file: 'dist/index.html', component: Home },
    { file: 'dist/pricing/index.html', component: Pricing },
  ]

  for (const page of pages) {
    const template = await readFile(page.file, 'utf8')
    const markup = renderToString(React.createElement(page.component))
    const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

    if (html === template) throw new Error(`Missing empty root element in ${page.file}`)
    await writeFile(page.file, html)
  }
} finally {
  await server.close()
}

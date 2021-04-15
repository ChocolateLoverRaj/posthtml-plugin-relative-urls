/* eslint-env mocha */
const posthtml = require('posthtml')
const plugin = require('./index')
const assert = require('assert')

it('Transforms src', () => {
  const { html } = posthtml()
    .use(plugin())
    .process('<script src="/index.js"></script>', { sync: true })
  assert.strictEqual(html, '<script src="./index.js"></script>')
})

it('Leaves existing relative paths', () => {
  const expectedHtml = '<script src="./index.js"></script>'
  const { html } = posthtml()
    .use(plugin())
    .process(expectedHtml, { sync: true })
  assert.strictEqual(html, expectedHtml)
})

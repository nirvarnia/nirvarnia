import 'jsdom-global/register' // Emulates the browser environment.

import { expect } from 'chai'
import parseUrl from '../src/parseUrl'

describe('parseUrl', function() {

  it('should be able to parse a URL string', function() {
    const url = 'http://example.com:3000/pathname/?search=test#hash'
    const result = parseUrl(url)

    expect(result).to.be.deep.equal({
      protocol: 'http:',
      hostname: 'example.com',
      port: '3000',
      pathname: '/pathname/',
      search: '?search=test',
      hash: '#hash',
      host: 'example.com:3000'
    })

  })

})

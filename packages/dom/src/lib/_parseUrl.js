/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 *
 */
const parseUrl = (url) => {
  const link = document.createElement('a')
  link.href = url

  return {
    protocol: link.protocol,
    hostname: link.hostname,
    port: link.port,
    pathname: link.pathname,
    search: link.search,
    hash: link.hash,
    host: link.host
  }
}

export { parseUrl }

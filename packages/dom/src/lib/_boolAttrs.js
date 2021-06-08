/**
 * Returns a big list of HTML tag attributes that accept boolean values. Nothing
 * more complicated than that! This function exists as a private internal helper
 * for other public Nirvarnia functions, but it's exposed publicly for the benefit of
 * application developers, too.
 *
 * @returns {Array}
 */
const boolAttrs = [
  'allowfullscreen',
  'autofocus',
  'autoplay',
  'checked',
  'compact',
  'controls',
  'default',
  'disabled',
  'formnovalidate',
  'hidden',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'noresize',
  'noshade',
  'novalidate',
  'nowrap',
  'open',
  'readonly',
  'required',
  'reversed',
  'seamless',
  'selected',
  'sortable',
  'truespeed',
  'typemustmatch'
]

export { boolAttrs }

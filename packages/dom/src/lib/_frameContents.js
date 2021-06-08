

// // String|null = __(HTMLElements).frameContents()
// // Get the contents of an iFrame — assumed to be the first element in our collection — as
// // plain text. If the Content-Type is NOT text/html, some browsers will render the iFrame's
// // contents in a <pre> tag. Chrome will give the <pre> tag a style attribute, too, e.g.:
// // <pre style="word-wrap: break-word; white-space: pre-wrap;">

// __.fn.frameContents = function () {
//   var out = null,
//     iframe, iframe_doc, iframe_body
//   if (this._targets[0]) {
//     iframe = this._targets[0]
//     // #TODO: Check is actually an iFrame!
//     iframe_doc = iframe.contentDocument || iframe.contentWindow.document
//     iframe_body = iframe_doc.getElementsByTagName('body')[0].innerHTML.trim()
//     if (iframe_body.slice(0, 4).toLowerCase() === '<pre' && iframe_body.slice(-6).toLowerCase() === '</pre>') {
//       iframe_body = iframe_doc.getElementsByTagName('pre')[0].innerHTML
//     }
//     out = iframe_body
//   }
//   return out
// }

import markdownIt from 'markdown-it'
import mdItHljs from 'markdown-it-highlightjs'
import hljs from 'highlight.js'
import blockImg from 'markdown-it-block-image'
import decorate from 'markdown-it-decorate'
import footnote from 'markdown-it-footnote'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-toc'
import container from 'markdown-it-container'

export default function parser(source){
	const md = new markdownIt({
		html: true,
		linkify: true,
		highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); } // eslint-disable-line no-console
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); } // eslint-disable-line no-console

      return ''
    },
	})

  md.use(mdItHljs)
  md.use(blockImg, {
    outputContainer: 'div',
    containerClassName: 'wrapper_img'
  })
  md.use(decorate)
  md.use(footnote)
  md.use(toc)
  md.use(container)

	return md.render(source)
}

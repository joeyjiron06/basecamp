/**

'--tw-prose-body': colors.gray[700],
      '--tw-prose-headings': colors.gray[900],
      '--tw-prose-lead': colors.gray[600],
      '--tw-prose-links': colors.gray[900],
      '--tw-prose-bold': colors.gray[900],
      '--tw-prose-counters': colors.gray[500],
      '--tw-prose-bullets': colors.gray[300],
      '--tw-prose-hr': colors.gray[200],
      '--tw-prose-quotes': colors.gray[900],
      '--tw-prose-quote-borders': colors.gray[200],
      '--tw-prose-captions': colors.gray[500],
      '--tw-prose-kbd': colors.gray[900],
      '--tw-prose-kbd-shadows': hexToRgb(colors.gray[900]),
      '--tw-prose-code': colors.gray[900],
      '--tw-prose-pre-code': colors.gray[200],
      '--tw-prose-pre-bg': colors.gray[800],
      '--tw-prose-th-borders': colors.gray[300],
      '--tw-prose-td-borders': colors.gray[200],
      
      
      '--tw-prose-invert-body': colors.gray[300],
      '--tw-prose-invert-headings': colors.white,
      '--tw-prose-invert-lead': colors.gray[400],
      '--tw-prose-invert-links': colors.white,
      '--tw-prose-invert-bold': colors.white,
      '--tw-prose-invert-counters': colors.gray[400],
      '--tw-prose-invert-bullets': colors.gray[600],
      '--tw-prose-invert-hr': colors.gray[700],
      '--tw-prose-invert-quotes': colors.gray[100],
      '--tw-prose-invert-quote-borders': colors.gray[700],
      '--tw-prose-invert-captions': colors.gray[400],
      '--tw-prose-invert-kbd': colors.white,
      '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
      '--tw-prose-invert-code': colors.white,
      '--tw-prose-invert-pre-code': colors.gray[300],
      '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
      '--tw-prose-invert-th-borders': colors.gray[600],
      '--tw-prose-invert-td-borders': colors.gray[700],
 */

module.exports = theme => ({
  body: {
    '@apply bg-surface-50 text-foreground-700 text-base leading-7': {},
    "> :first-child": {
      '@apply mt-0': {},
    },
    "> :last-child": {
      '@apply mb-0': {},
    }
  },
  "p": {
    '@apply my-5': {},
  },
  "[class~=\"lead\"]": {
    '@apply text-foreground-600 text-xl leading-normal my-5': {},
  },
  "p a": {
    '@apply text-foreground-900 underline font-medium': {},
  },
  "strong": {
    '@apply text-foreground-900 font-semibold': {},
  },
  "a strong": {
    '@apply text-inherit': {},
  },
  "blockquote strong": {
    '@apply text-inherit': {},
  },
  "thead th strong": {
    '@apply text-inherit': {},
  },
  "ol": {
    '@apply list-decimal my-5 pl-6': {},
  },
  "ol[type=\"A\"]": {
    "listStyleType": "upper-alpha"
  },
  "ol[type=\"a\"]": {
    "listStyleType": "lower-alpha"
  },
  "ol[type=\"A\" s]": {
    "listStyleType": "upper-alpha"
  },
  "ol[type=\"a\" s]": {
    "listStyleType": "lower-alpha"
  },
  "ol[type=\"I\"]": {
    "listStyleType": "upper-roman"
  },
  "ol[type=\"i\"]": {
    "listStyleType": "lower-roman"
  },
  "ol[type=\"I\" s]": {
    "listStyleType": "upper-roman"
  },
  "ol[type=\"i\" s]": {
    "listStyleType": "lower-roman"
  },
  "ol[type=\"1\"]": {
    "listStyleType": "decimal"
  },
  "ul": {
    '@apply my-5 pl-6': {},
    "listStyleType": "disc",
  },
  "ol > li::marker": {
    '@apply font-normal text-foreground-500': {},
  },
  "ul > li::marker": {
    '@apply text-foreground-300': {},
  },
  "dt": {
    '@apply text-foreground-900 font-semibold mt-5': {},
  },
  "hr": {
    '@apply border-foreground-200 my-12 border-t-[1px]': {},
  },
  "blockquote": {
    '@apply font-medium italic text-foreground-900 border-l-[0.25rem] border-l-foreground-200 my-6 pl-4': {},
    "quotes": "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"",
  },
  "blockquote p:first-of-type::before": {
    "content": "open-quote"
  },
  "blockquote p:last-of-type::after": {
    "content": "close-quote"
  },
  "h1": {
    '@apply text-foreground-900 font-extrabold text-4xl mt-0 mb-3 leading-tight': {},
  },
  "h1 strong": {
    '@apply font-black text-inherit': {},
  },
  "h2": {
    '@apply text-foreground-900 font-bold text-2xl mt-8 mb-4 leading-snug': {},
  },
  "h2 strong": {
    '@apply font-extrabold text-inherit': {},
  },
  "h3": {
    '@apply text-foreground-900 font-semibold text-xl mt-6 mb-2 leading-relaxed': {},
  },
  "h3 strong": {
    '@apply font-bold text-inherit': {},
  },
  "h4": {
    '@apply text-foreground-900 font-semibold mt-6 mb-2 leading-normal': {},
  },
  "h4 strong": {
    '@apply font-bold text-inherit': '',
  },
  "img": {
    '@apply my-8': {},
  },
  "picture": {
    '@apply block my-8': {},
  },
  "video": {
    '@apply my-8': {},
  },
  "kbd": {
    '@apply font-medium text-foreground-900 text-sm rounded-md py-0.5 px-0': {},
  },
  "code": {
    '@apply text-foreground-900 font-semibold text-sm': {},
  },
  // "code::before": {
  //   "content": "\"`\""
  // },
  // "code::after": {
  //   "content": "\"`\""
  // },
  "a code": {
    '@apply text-inherit': {},
  },
  "h1 code": {
    '@apply text-inherit': {},
  },
  "h2 code": {
    '@apply text-inherit text-sm': {},
  },
  "h3 code": {
    '@apply text-inherit text-sm': {},
  },
  "h4 code": {
    '@apply text-inherit': {},
  },
  "hgroup": {
    "@apply mb-3": {},
    ">*": {
      "@apply mt-0 mb-2": {}
    }
  },
  "hgroup>:not(:first-child):last-child": {
    "@apply text-foreground-500": ""
  },
  "blockquote code": {
    '@apply text-inherit': {},
  },
  "thead th code": {
    '@apply text-inherit': {},
  },
  "pre": {
    '@apply text-foreground-200 bg-surface-800 overflow-x-auto font-normal text-sm leading-relaxed my-7 rounded-md py-3.5 px-4': {},
  },
  "pre code": {
    '@apply bg-transparent border-0 rounded-none p-0 text-inherit': {},
    "fontWeight": "inherit",
    "fontSize": "inherit",
    "fontFamily": "inherit",
    "lineHeight": "inherit"
  },
  "pre code::before": {
    "content": "none"
  },
  "pre code::after": {
    "content": "none"
  },
  "table": {
    '@apply w-full table-auto text-left my-8 text-sm leading-relaxed': {},
  },
  "thead": {
    '@apply border-b border-b-foreground-300': {},
  },
  "thead th": {
    '@apply text-foreground-900 font-semibold align-bottom px-2 pb-2': {},
  },
  "tbody tr": {
    '@apply border-b border-b-foreground-200': {},
  },
  "tbody tr:last-child": {
    '@apply border-b-0': {},
  },
  "tbody td": {
    '@apply align-baseline': {},
  },
  "tfoot": {
    '@apply border-t border-t-foreground-300': {},
  },
  "tfoot td": {
    '@apply align-top': {},
  },
  "figure > *": {
    '@apply my-0': {},
  },
  "figcaption": {
    '@apply text-foreground-500 text-sm leading-normal mt-3.5': {},
  },
  "picture > img": {
    '@apply my-0': {},
  },
  "li": {
    '@apply my-2': {},
  },
  "ol > li": {
    '@apply pl-1.5': {},
  },
  "ul > li": {
    '@apply pl-1.5': {},
  },
  "> ul > li p": {
    '@apply my-3': {},
  },
  "> ul > li > *:first-child": {
    '@apply mt-5': {},
  },
  "> ul > li > *:last-child": {
    '@apply mb-5': {},
  },
  "> ol > li > *:first-child": {
    '@apply mt-5': {},
  },
  "> ol > li > *:last-child": {
    '@apply mb-5': {},
  },
  "ul ul, ul ol, ol ul, ol ol": {
    '@apply my-3': {},
  },
  "dl": {
    '@apply my-5': {},
  },
  "dd": {
    '@apply mt-2 pl-7': {},
  },
  "hr + *": {
    '@apply mt-0': {},
  },
  "h2 + *": {
    '@apply mt-0': {},
  },
  "h3 + *": {
    '@apply mt-0': {},
  },
  "h4 + *": {
    '@apply mt-0': {},
  },
  "thead th:first-child": {
    '@apply pl-0': {},
  },
  "thead th:last-child": {
    '@apply pr-0': {},
  },
  "tbody td, tfoot td": {
    '@apply p-2.5': {},
  },
  "tbody td:first-child, tfoot td:first-child": {
    '@apply pl-0': {},
  },
  "tbody td:last-child, tfoot td:last-child": {
    '@apply pr-0': {},
  },
  "figure": {
    '@apply my-8': {},
  },
  "mark": {
    '@apply bg-yellow-300 px-2 rounded': {}
  },
})
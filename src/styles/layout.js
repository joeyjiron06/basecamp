module.exports = {
  body: {
    '@apply pb-10 w-screen min-w-full min-h-screen overflow-x-hidden': {},
    //  bg-surface-50 text-surface-950
  },
  header: {
    '@apply w-full sticky top-0 left-0 z-30 flex justify-between items-center border-b px-4 py-2': {},

    '@apply bg-surface-50': {},
    '@apply dark:bg-surface-950 dark:border-b-surface-800': {},

    nav: {
      ul: {
        '@apply list-none flex gap-2 py-0 my-0 text-sm font-normal': {},

        li: {
          '@apply flex items-center opacity-75 transition-all duration-200': {},

          '&:hover': {
            '@apply opacity-85': {},
          },

          a: {
            '@apply no-underline font-normal': {},

            '&:has(svg)': {
              '@apply p-2': {},
              '&:hover': {
                '@apply bg-surface-200 rounded': {},
                '@apply dark:bg-surface-800': {},
              }
            },
            svg: {
              '@apply w-4 h-4': {},
            }
          }
        }
      }
    }
  },
  footer: {
    // TODO: fill me in
  }
}
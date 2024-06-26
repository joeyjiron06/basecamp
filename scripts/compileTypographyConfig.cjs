const createTypographyPlugin = require('@tailwindcss/typography/src/index.2')


// const css = fs.readFileSync(path.join(__dirname, './src/styles/lib.css')).toString();

const typopgraphy = createTypographyPlugin({ className: 'prose', target: 'legacy' });


async function main() {

  const variants = [];
  const components = [];
  const prefix = (text) => `tw-${text}`

  function addVariant(...args) {
    variants.push(...args);
  }

  function addComponents(...args) {
    components.push(...args);
  }


  typopgraphy({
    addVariant, addComponents, prefix
  })





  console.log(JSON.stringify({
    variants,
    components,
  }, null, 2))
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
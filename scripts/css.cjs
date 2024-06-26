// const fs = require('fs');
const postcss = require('postcss');
// const path = require('path');
// const { fileURLToPath } = require('url');
// require("tailwindcss/nesting"),
const tailwindNestingPlugin = require('tailwindcss/nesting');
// const autoprefixerPlugin = require("autoprefixer");
// const tailwindPlugin = require("tailwindcss");

// const __dirname = path.dirname(fileURLToPath(import.meta.url));


async function main() {
  // const css = fs.readFileSync(path.join(__dirname, './src/styles/old/accordion.css')).toString();


  const parsed = postcss([
    tailwindNestingPlugin(),

    // adding these plugins converts the css fully to regular css
    // tailwindPlugin(path.join(__dirname, './tailwind.config.mjs')),
    // autoprefixerPlugin()
  ])
    .process(`p  { a { display: block; }  }`)
    .sync();

  console.log(parsed);


  // const preJSS = require('prejss').default;

  // const jss = preJSS`${parsed.css}`;
  // console.log(jss);

  // console.log(jss);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
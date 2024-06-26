import fs from 'fs';
import preJSS from 'prejss';
import postcss from 'postcss'
import path, { parse } from 'path';
import { fileURLToPath } from 'url';
// require("tailwindcss/nesting"),
import tailwindNestingPlugin from 'tailwindcss/nesting/index.js';
import autoprefixerPlugin from "autoprefixer";
import tailwindPlugin from "tailwindcss";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function sync(promise) {
  console.log('promise', promise);
  let status = 'pending';
  let value = undefined;
  let reason = undefined;



  while (status === 'pending') {
    promise.then(val => {
      value = val;
      status = 'fulfilled';
    })
      .catch(error => {
        reason = error;
        status = 'rejected';
      })
  }

  if (status === 'rejected') {
    throw reason;
  }

  return value;
}

async function main() {
  const css = fs.readFileSync(path.join(__dirname, './src/styles/old/accordion.css')).toString();


  const parsed = sync(postcss([
    tailwindNestingPlugin(),

    // adding these plugins converts the css fully to regular css
    // tailwindPlugin(path.join(__dirname, './tailwind.config.mjs')),
    // autoprefixerPlugin()
  ])
    .process(css)
    .async());

  console.log(parsed.css);

  // const jss = preJSS.default`p a { display: 'block'; }`;

  // console.log(jss);

  //   const output = preJSS`
  // p a {
  //   @apply outline-gray-500;
  // }
  //   `
  //   console.log(output);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
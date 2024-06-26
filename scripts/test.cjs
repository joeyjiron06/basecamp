// import { preJSS } from 'prejss';
const preJSS = require('prejss').default;
const postcss = require('postcss');

console.log(preJSS`
p a { 
  @apply my-4;
}
`);
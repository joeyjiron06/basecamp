const computedConfig = require('../typography.computed.json');
const manualConfig = require('../src/styles/typography.cjs')();
const { chain } = require('lodash');
// const { detailedDiff, diff } = require('deep-object-diff');
const jsonDiff = require('json-diff');


async function main() {
  const mappedComputed = chain(computedConfig)
    .mapValues((val) => mapApplyKeyToArray(val))
    .value();

  const mappedManual = chain(manualConfig)
    .mapValues(val => mapApplyKeyToArray(val))
    .value();

  console.log(jsonDiff.diffString(mappedComputed, mappedManual));

  // Object.entries(computedConfig)
  //   .forEach(([key, computedValue], index) => {
  //     if (index !== 1) {
  //       return;
  //     }
  //     const manualValue = manualConfig[key];

  //     const mappedComputed = mapApplyKeyToArray(computedValue);
  //     const mappedManual = mapApplyKeyToArray(manualValue);

  //   })
};

// async function prettyPrintDiff(a, b) {
//   console.log(JSON.stringify({
//     a,
//     b,
//     diff: detailedDiff(a, b)
//   }, null, 2));
// }

function mapApplyKeyToArray(obj) {
  return chain(obj)
    .mapValues((value, key) => {
      if (key.startsWith('@apply')) {
        return key.replace('@apply', '').trim().split(' ').sort().join(' ');
      }

      return value;
    })
    .mapKeys((val, key) => key.startsWith('@apply') ? '@apply' : key)
    .value();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
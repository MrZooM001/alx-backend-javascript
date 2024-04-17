export default function cleanSet(set, startString) {
  const filteredArr = [];
  if (typeof startString !== 'string') { return ''; }

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredArr.push(value.slice(startString.length));
    }
  });

  return filteredArr.join('-');
}

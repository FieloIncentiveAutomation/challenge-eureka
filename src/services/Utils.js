export function sortByFieldName(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

export function addThousandsDots(number) {
  try {
    const numFormat = new Intl.NumberFormat("en-US")
    return number && numFormat.format(number);
  } catch (error) {
    return number && number.toLocaleString("en-US");
  }
}

export function generateIcon ( string ) {
  const text = string.toLowerCase();
  const words = ['received', 'incetive', 'module', 'redeemed'];

  const finded = words.filter( e => {
    return text.indexOf(e) >= 0 && e;
  });

  return finded.toString().toLowerCase();
  
}
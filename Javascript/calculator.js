//   str 285 - 95   [285,95]
const parrafo = document.getElementById('pantalla-calc');

export default function calc(str) {
  switch (true) {
    case str.includes('x'):
      str = str.split('x');
      let resMul = `${(str[0] * str[1]).toFixed(2)}`;
      if (resMul.includes('.00')) {
        return resMul.slice(0, resMul.length - 3);
      }
      return resMul;
    case str.includes('+'):
      str = str.split('+');
      let resSum = `${(Number(str[0]) + Number(str[1])).toFixed(2)}`;
      if (resSum.includes('.00')) {
        return resSum.slice(0, resSum.length - 3);
      }
      return resSum;
    case str.includes('-'):
      str = str.split('-');
      let res = `${(Number(str[0]) - Number(str[1])).toFixed(2)}`;
      if (res.includes('.00')) {
        return res.slice(0, res.length - 3);
      }
      return res;
    case str.includes('÷'):
      str = str.split('÷');
      if (str[1] === '0') {
        alert('cannot be divided by 0');
        parrafo.innerHTML = '';
        ans.innerHTML = '';
        return;
      }
      let resDiv = `${(str[0] / str[1]).toFixed(2)}`;
      if (resDiv.includes('.00')) {
        return resDiv.slice(0, resDiv.length - 3);
      }
      return resDiv;
    default:
      console.log(str.includes('x'));
  }
}

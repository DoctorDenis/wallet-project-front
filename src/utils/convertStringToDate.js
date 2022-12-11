export default function convertStringToDate(str = '2022-12-01T00:00:00.000Z') {
  return str.split('T')[0].split('-').reverse().join('.');
}

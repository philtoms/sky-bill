export function toArray(data) {
  return ({}.toString.call(data) === 'Array' ? data : Object.keys(data))
    .filter(k => Number.isInteger(parseInt(k)))
    .map(k => data[k])
}
export function toArray(data) {
  return ({}.toString.call(data) === 'Array' ? data : Object.keys(data))
    .filter(k => Number.isInteger(parseInt(k)))
    .map(k => data[k])
}

export function checkResponseStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function parseJSON(response) {
  return response.json()
}
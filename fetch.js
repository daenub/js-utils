export function encodeParams(params) {
  let queryStringParams = []
  for (let p in params) {
    if (params[p]) {
      if (Array.isArray(params[p])) {
        params[p].forEach(pValue => {
          queryStringParams.push(`${p}=${pValue}`)
        })
      } else {
        queryStringParams.push(`${p}=${params[p]}`)
      }
    }
  }

  return encodeURI("?" + queryStringParams.join("&"))
}

export const containsJSON = response => {
  const contentType = response.headers.get("content-type")

  if (contentType && contentType.includes("application/json")) {
    return true
  } else {
    return false
  }
}

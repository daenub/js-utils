export function encodeParams(params) {
  let searchParams = new URLSearchParams()
  for (let p in params) {
    if (params[p]) {
      if (Array.isArray(params[p])) {
        params[p].forEach(pValue => {
          searchParams.append(p, pValue)
        })
      } else {
        searchParams.append(p, params[p])
      }
    }
  }

  return "?" + searchParams.toString()
}

export const containsJSON = response => {
  const contentType = response.headers.get("content-type")

  if (contentType && contentType.includes("application/json")) {
    return true
  } else {
    return false
  }
}

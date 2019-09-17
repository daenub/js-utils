export const $ = (selector, base = document) =>
  base.querySelector(selector)

export const $$ = (selector, base = document) =>
  Array.prototype.slice.call(base.querySelectorAll(selector))

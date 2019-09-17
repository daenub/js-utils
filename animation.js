// could be any easing function
const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

const map = (value, start1, stop1, start2, stop2) =>
  ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2

export function animate({duration, startValue, endValue, setValue}) {
  let requestId = null

  const cancel = () => window.cancelAnimationFrame(requestId)

  const promise = new Promise((resolve, reject) => {
    let start = null

    const step = timestamp => {
      if (!start) start = timestamp

      const progress = timestamp - start
      // normalize the progress so it will be a value between 0 and 1
      const normalizedProgress = map(progress, 0, duration, 0, 1)

      // this function applies the current value to a certain style property of an element
      setValue(
        map(easeInOutQuad(normalizedProgress), 0, 1, startValue, endValue)
      )

      if (progress < duration) {
        requestId = window.requestAnimationFrame(step)
      } else {
        resolve()
      }
    }

    try {
      requestId = window.requestAnimationFrame(step)
    } catch (err) {
      reject(err)
    }
  })

  return {promise, cancel}
}

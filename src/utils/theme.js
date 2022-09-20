// Utility functions used in theme-preval.js
// This file needs to be a JavaScript file using CommonJS to be compatible with preval

import isEmpty from 'lodash.isempty'
import isObject from 'lodash.isobject'
import chroma from 'chroma-js'

export function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}

// The following functions are a temporary measure for splitting shadow values out from the colors object.
// Eventually, we will push these structural changes upstream to primer/primitives so this data manipulation
// will not be needed.

export function isShadowValue(value) {
  return typeof value === 'string' && /(inset\s|)([0-9.]+(\w*)\s){1,4}(rgb[a]?\(.*\)|\w+)/.test(value)
}

export function isColorValue(value) {
  return chroma.valid(value)
}

export function filterObject(obj, predicate) {
  if (Array.isArray(obj)) {
    return obj.filter(predicate)
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      const result = filterObject(value, predicate)

      // Don't include empty objects or arrays
      if (!isEmpty(result)) {
        acc[key] = result
      }
    } else if (predicate(value)) {
      acc[key] = value
    }

    return acc
  }, {})
}

export function partitionColors(colors) {
  return {
    colors: filterObject(colors, value => isColorValue(value)),
    shadows: filterObject(colors, value => isShadowValue(value))
  }
}

export function omitScale(obj) {
  const {scale, ...rest} = obj
  return rest
}

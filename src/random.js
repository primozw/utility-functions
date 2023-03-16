
/**
 * Random number generator 
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @param {boolen || number } snap snap to discrete values, e.g. if min = 0, max = 100, snap = 10, the function return random number from the set [0, 10, 20, ... 100 ]
 * @returns number
 */
function random(min = -1, max = 1, snap = false) {

    const val = Math.random() * (max - min) + min;

    return snap ? 
      Math.round(val / snap) * snap : val;
  
}

/**
 * Return random element of provide array or random property key of provided object
 * @param { object || array} elements array of elements or object with own props
 * @returns random array element or random object prop key
 */
function randomElement( elements ){
  if (Array.isArray(elements)) {
    if (elements.length === 0) {
      throw new Error('Provided array must contain at least one element')
    }

    return elements[random(0, elements.length - 1, 1)];

  } else if (typeof elements === 'object' && !!elements) {
    const keys = Object.keys(elements)
    if (keys.length === 0 ) {
      throw new Error('Provided object must contain at least one property')
    }
    return keys[random(0, keys.length - 1, 1)]
    
  } else {
    throw new Error('Provide an array or object')
  }
}

export { random, randomElement };


/**
 * Find maximum item in an Array by given key.
 */
const maxBy = (arr, key) => {
  return arr.reduce((max, obj) => {
    return max[key] >= obj[key] ? max : obj
  }, {})
}

// Usage:

const people = [
  { name: 'Naurto', age: 24 },
  { name: 'Sasuke', age: 32 },
  { name: 'Minato', age: 42 },
  { name: 'Kakashi', age: 36 },
]

maxBy(people, 'age')
// -> { name: 'Minato', age: 42 }

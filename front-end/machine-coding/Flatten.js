// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    let flatArray = []

    for (let index = 0; index < value.length; index++) {
        const item = value[index]

        if (Array.isArray(item)) {
            flatArray.push(...flatten(item))
        } else {
            flatArray.push(item)
        }
    }

    return flatArray
}

const _ = require('lodash')
const moment = require('moment')

const a = _.take([1, 2, 3])

test = () => {
	console.log('test', a)
}

console.log('a', a)
console.log(moment().format())

test()

const array = ['a', 'b', 'c']
const object = {
	a: 'a',
	b: 'b'
}

let c = '111'
let b = '222'

console.log('c', c)
console.log('b', b)

;[c, b] = [b, c]


console.log('c', c)
console.log('b', b)

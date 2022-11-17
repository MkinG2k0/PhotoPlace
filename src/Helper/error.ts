export {}
declare global {
	interface Console {
		errors: any[]
		defaultError: any
	}
}

console.defaultError = console.error.bind(console)
console.errors = []
console.error = function () {
	// default &  console.error()
	console.defaultError.apply(console, arguments)
	// new & array data
	console.errors.push(Array.from(arguments))
}

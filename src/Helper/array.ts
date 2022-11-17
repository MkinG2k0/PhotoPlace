export const cut = <T>(array: T[], length: number) => {
	if (!array) return []
	if (!length) length = array.length

	return array.slice(0, length)
}

export const last = <T>(array: T[]): T | undefined => {
	if (!array) return undefined

	return array[array.length]
}
export const getArrNumber = (length: number): number[] =>
	Array.from({ length }).map((_, i) => i)

export const Sum = (arr: number[]): number => {
	let res = 0
	arr.map((item) => (res += item))

	return res
}

export const CheckArrLength = (
	arr: (string | undefined)[],
	min: number = 3,
	max: number = 24
) => {
	let res = true
	arr.map((item) => {
		if (!item) return
		if (item.length > max) {
			res = false
		} else if (item.length < min) {
			res = false
		}
	})

	return res
}

export const CheckArrTrue = (arr: boolean[]) => {
	let res = true

	arr.map((item) => {
		if (!item) res = false
	})

	return res
}

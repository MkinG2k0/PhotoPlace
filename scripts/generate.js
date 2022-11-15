const fs = require('fs')
const path = require('path')

const arg = process.argv
const type = arg[2]
const fileName = arg[3]

const nameJson = 'generateScript.json'
// const testDir = 'scripts'
const FILENAME = 'FileName'
const pathTest = path.join(__dirname, '..')
//

fs.readdir(pathTest, (err, files) => {
	files.map((file) => {
		if (file === nameJson) {
			init()
		}
	})
})

function init() {
	const pathJson = path.join(pathTest, nameJson)
	fs.readFile(pathJson, { encoding: 'utf8' }, (err, file) => {
		const dataJson = JSON.parse(file)
		read(dataJson)
	})
}

function read(dataJson) {
	const template = Object.entries(dataJson.template)
	template.map((param) => {
		const nameTemplate = param[0]
		const infoTemplate = param[1]

		// если нашли указанный template в командной строке
		if (type === nameTemplate) {
			generate(infoTemplate)
		}
	})
}

function generate(infoTemplate) {
	const generateFiles = infoTemplate.files
	const generateFolder = path.join(pathTest, infoTemplate.folder, fileName)
	console.log(generateFolder)

	fs.mkdir(generateFolder, (err, ok) => {})

	generateFiles.map((file) => {
		const pathFile = path.join(pathTest, file)
		fs.readFile(pathFile, { encoding: 'utf8' }, (err, value) => {
			if (err) {
				console.log(`Не правильный путь "${file}"`)
				return
			}

			// parse
			const pathParse = path.parse(pathFile)
			const ext = pathParse.ext
			const name = pathParse.name
			const replaceName = name.replace(FILENAME, fileName)
			const replacedData = value.replaceAll(FILENAME, fileName)
			// generate
			const generateFileName = `${replaceName}${ext}`
			const generatePathName = path.join(generateFolder, generateFileName)

			// write

			fs.writeFileSync(generatePathName, replacedData, (err, file) => {
				// console.log(err, file)
			})
		})
	})
}

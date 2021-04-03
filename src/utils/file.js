import { readFile } from 'fs'

const file = readFile('../../README.md', 'utf8', (err, res) => err ? err : res)

console.log(file)

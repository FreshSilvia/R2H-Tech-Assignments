let fs = require('fs')

let contents = fs.readFileSync(process.argv[2], 'utf8')
let lines = contents.split('\n').length - 1
console.log(lines)
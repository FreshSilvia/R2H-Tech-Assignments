let fs = require('fs')
let path = require('path')

fs.readdir(process.argv[2], (err, list) => {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
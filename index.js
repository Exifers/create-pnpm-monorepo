import * as fs from 'node:fs'

fs.writeFile('didrun.txt', 'hello world', () => {
  console.log('I runned')
})

var fs = require('fs')
var _ = require('lodash')
var eslintConfigStandard = require('eslint-config-standard')
var eslintConfigStandardJsx = require('eslint-config-standard-jsx')
var eslintConfigStandardReact = require('eslint-config-standard-react')
var json = _.omit(_.merge(eslintConfigStandard, eslintConfigStandardJsx, eslintConfigStandardReact), 'extends')
var outputFileName = './.eslintrc.json'

fs.writeFile(outputFileName, JSON.stringify(json, null, 2), function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('JSON saved to ' + outputFileName)
  }
})

'use strict';

try {
  const fs = require('fs');
  const util = require('util');
  const imageSize = require('image-size');
  
  if( fs && util && util.promisify ) {
    module.exports.openAsync = util.promisify( fs.open );
    module.exports.readAsync = util.promisify( fs.read );
    module.exports.statAsync = util.promisify( fs.stat );
    module.exports.readFileAsync = util.promisify( fs.readFile );
    module.exports.readDirAsync = util.promisify( fs.readdir );
    module.exports.lstatAsync = util.promisify( fs.lstat );
    module.exports.imageSizeAsync = util.promisify( imageSize );
  }
} catch( err ) {
}
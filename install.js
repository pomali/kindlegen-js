(function(){
  var download, binUrl;
  download = require('download');
  binUrl = (function(){
    switch (process.platform) {
    case 'darwin':
      return 'https://kindlegen.s3.amazonaws.com/KindleGen_Mac_i386_v2_9.zip';
    case 'linux':
      return 'https://kindlegen.s3.amazonaws.com/kindlegen_linux_2.6_i386_v2_9.tar.gz';
    case 'win32':
      return 'https://kindlegen.s3.amazonaws.com/kindlegen_win32_v2_9.zip';
    default:
      throw new Error('Unsupported platform');
    }
  }());
  download(binUrl, 'bin', {
    extract: true
  }).then(function(){
    return console.log('Download completed');
  });
}).call(this);
import MediaBitsExtractor from 'media-bits-extractor';
import Extractors from 'randomness-extractors';

var extractor;
function start(){
  var interval = 1000;
  extractor = new MediaBitsExtractor({video: true, audio: true}, interval);
  var wait = function(n, cb){
    var count = 0;
    return function done(){
      if(count++ === n) cb();
    };
  };

  var cb = function(){
    var bit = Extractors.innerProductExtractor([videoBits.split(''), audioBits.split('')])
    document.body.innerHTML += '<p>';
    document.body.innerHTML += 'video: [' + videoBits.length + ']' + videoBits.substring(0, 28) + '...' + ' audio: [' + audioBits.length + ']' + audioBits.substring(0, 28) + '...<br>';
    document.body.innerHTML += 'extracted bit: ' + bit;
    document.body.innerHTML += '</p>';
    document.getElementById('result').innerHTML += bit;
    document.getElementById('result').style.visibility = 'visible';
    done = wait(2, cb);
  };
  var done = wait(2, cb);
  extractor.on('video', function(bits){
    videoBits = bits;
    done();
  });

  extractor.on('audio', function(bits){
    audioBits = bits;
    done();
  });

  extractor.start();
}
function stop(){
  extractor.stop();
}

window.start = start;
window.stop = stop;

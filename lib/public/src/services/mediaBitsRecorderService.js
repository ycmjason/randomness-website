import MediaBitsRecorder from 'media-bits-recorder';
import wait from '../utils/wait';

const sameConfig = (actualConfig, expectedConfig) => {
  return actualConfig.video === expectedConfig.video &&
         actualConfig.audio === expectedConfig.audio;
};

class MediaBitsRecorderService{
  constructor(){
    this.active = false;
    this.currConfig = undefined;
    this._recorder = undefined;
  }

  _getRecorder(config = {audio: true, video: true}){
    if(this._recorder && sameConfig(config, this.currConfig)){
        return this._recorder;
    }

    this._recorder = new MediaBitsRecorder(config);
    this.currConfig = config;
    return this._recorder;
  }

  start(interval = 1000){
    if(!this.active){
      this._getRecorder().start(interval);
      this.active = true;
    }
  }

  stop(){
    if(this.active){
      this._getRecorder().stop();
      this.active = false;
      this._recorder = undefined;
    }
  }

  onBits(cb){
    var done = wait(2, cb, true);
    this._getRecorder().on('video', (bits) => done({video: bits}));
    this._getRecorder().on('audio', (bits) => done({audio: bits}));
  }
}

export default new MediaBitsRecorderService();

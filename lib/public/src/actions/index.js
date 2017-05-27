export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const PUBLISH_BITS = "PUBLISH_BITS";

/* action creators */
export const startRecording = (config, interval) => ({
  type: START_RECORDING,
  config,
  interval
});

export const stopRecording = (recorder) => ({
  type: STOP_RECORDING,
  recorder
});

export const publishBits = (bits) => ({
  type: PUBLISH_BITS,
  bits
});

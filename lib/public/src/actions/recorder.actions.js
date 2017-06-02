export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";

/* action creators */
export const startRecording = (config, interval) => ({
  type: START_RECORDING,
  config,
  interval
});

export const stopRecording = () => ({
  type: STOP_RECORDING
});


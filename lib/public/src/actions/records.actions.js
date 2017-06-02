export const PUBLISH_BITS = "PUBLISH_BITS";

export const publishBits = (video, audio) => ({
  type: PUBLISH_BITS,
  bits: {
    video,
    audio,
  },
  timestamp: Date.now(),
});

export const PUBLISH_TEST = "PUBLISH_TEST";

export const publishTest = (extractor, result) => ({
  type: PUBLISH_TEST,
  extractor,
  result,
});

export const append = (arr, elem) => {
  return arr.concat([elem]);
};
export const prepend = (arr, elem) => {
  return [elem].concat(arr);
}

export const concat = (...arrs) => {
  return Array.prototype.concat.apply([], arrs);
};

export const shallowCopy = (obj) => {
  if(Array.isArray(obj)) return obj.slice(0);
  return Object.assign({}, obj);
};

export const deepCopy = (obj) => {
  if(typeof obj !== "object") return obj;

  let copy = shallowCopy(obj);
  Object.keys(copy).forEach((k) => {
      copy[k] = deepCopy(copy[k]);
  });
  return copy;
}

export const set = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value});
}

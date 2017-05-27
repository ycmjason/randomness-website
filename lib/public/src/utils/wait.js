export default (n, cb, repeat=false) => {
  var count = 0;
  var agg_res = {};
  return (res) => {
    Object.assign(agg_res, res);
    if(++count === n){
      cb(agg_res);
      if(repeat) count = 0;
    }
  };
};

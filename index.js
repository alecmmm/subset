Array.prototype.isSubset = function (arr) {
  return this.every(
    e => {
      if (!Array.isArray(e)) {
        return arr.includes(e)
      }
      else {
          var res = false
          arr.forEach((f) => {
            if (e.isSubset(f)) {
              res = true
              // return true
            }
          });
          return res
      }
  })
};

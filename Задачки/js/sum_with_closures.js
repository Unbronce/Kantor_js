function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

sum(1)(2)(3);

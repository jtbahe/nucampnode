// exports is shorthand for module.exports, must use full module.exports when exporting a full funciton not just adding method to object
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(
      new Error(
        `Rectangle dimensions must be greater than zero. Received : ${x}, ${y}`
      )
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          // dont need x and y in argument list, have access due to closures
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000 // time to wait for setTimeout
    );
  }
};

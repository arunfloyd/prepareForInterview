 function whoIsGreater(a, b) {
  let Car = new Promise((resolve, reject) => {
    if (a > b) {
      resolve("First");
    } else {
      reject("Second");
    }
  });
  Car.then((res) => {
    console.log(res);
  }).catch((res) => {
    console.log(res);
  });
}

whoIsGreater(101, 14);

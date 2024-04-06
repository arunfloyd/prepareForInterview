let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello From Second Promise");
  }, 900);
});

async function checker() {
  await Promise.any([promise1, promise2]).then((res) => {
    console.log(res);
  });
}
checker();

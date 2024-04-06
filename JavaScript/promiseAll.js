async function sum() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sucess 1");
    }, 4000);
  });
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected");
    }, 6000);
  });
  try{
    const result = await Promise.all([promise, promise1]);
    console.log(result)

  }catch(Error){
    console.log("i Catch uuu "+Error)
  }
}

sum()
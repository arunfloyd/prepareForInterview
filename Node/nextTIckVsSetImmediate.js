console.log("Start");
setImmediate(() => {
  console.log("Immediate callback");
});
setTimeout(() => {
  console.log("Timeout callback");
});
process.nextTick(() => {
  console.log("Next tick callback");
});

console.log("End");

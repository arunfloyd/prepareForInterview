console.log('Start');
setImmediate(() => {
    console.log('Immediate callback');
  });
process.nextTick(() => {
  console.log('Next tick callback');
});



console.log('End');
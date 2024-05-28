// A callback is a function that is passed as an argument to another function
// and is executed after some operation has been completed.

// Simple CallBack
function fetchData(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
}

function process() {
  console.log("Hikumbo");
}

// fetchData(process);

//CallBack Hell
const one = (callback) => {
  setTimeout(() => {
    console.log("Hello From 1st");
    callback();
  }, 1000);
};
const two = (callback) => {
  setTimeout(() => {
    console.log("Hello From 2nd");
    // callback();
  }, 1000);
};

const final = () => {
  console.log("The End");
};


one(() => {
  two(() => {
    final();
  });
});


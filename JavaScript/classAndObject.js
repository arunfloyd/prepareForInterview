class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present() {
    console.log("My Car Brand %s", this.brand);
  }
}
class model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    console.log("My Car Brand %s & Model is %s", this.brand, this.model);
  }
}
let myCar = new model("Maruthi", "Swift");
myCar.show();

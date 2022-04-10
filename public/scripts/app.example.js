class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.loadButton.onclick = this.run;
    this.clearButton.onclick = this.clear;
  } 

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };
  
  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
  
  clear = () => {
    let child = this.carContainerElement.firstElementChild;    
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
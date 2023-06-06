// Define an interface for creating cars
class CarFactory {
    createCar() {}
  }
  
  // Concrete subclasses that implement the factory interface for different types of car models
  class ModelSFactory extends CarFactory {
    createCar() {
      return new ModelS();
    }
  }
  
  class Model3Factory extends CarFactory {
    createCar() {
      return new Model3();
    }
  }
  
  // Car classes created by the factory
  class ModelS {
    get model() {
      return 'Model S';
    }
  }
  
  class Model3 {
    get model() {
      return 'Model 3';
    }
  }
  
  // Client code that uses the factory to create cars
  function orderCar(factory) {
    const car = factory.createCar();
    console.log(`Building a ${car.model}...`);
  }
  
  // Order a Model S
  const modelSFactory = new ModelSFactory();
  orderCar(modelSFactory);
  
  // Order a Model 3
  const model3Factory = new Model3Factory();
  orderCar(model3Factory);
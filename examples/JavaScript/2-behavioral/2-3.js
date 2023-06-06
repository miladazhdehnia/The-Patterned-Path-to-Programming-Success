// Define a set of states that the vending machine can be in
class VendingMachineState {
    constructor(itemName) {
      this.itemName = itemName;
    }
  
    display() {
      console.log(`Vending machine is currently dispensing ${this.itemName}`);
    }
  }
  
  // Concrete state classes
  class CandyState extends VendingMachineState {
    constructor() {
      super("candy");
    }
  }
  
  class SodaState extends VendingMachineState {
    constructor() {
      super("soda");
    }
  }
  
  class ChipsState extends VendingMachineState {
    constructor() {
      super("chips");
    }
  }
  
  // Context object - vending machine
  class VendingMachine {
    constructor() {
      this.currentState = null;
      this.states = [new CandyState(), new SodaState(), new ChipsState()];
    }
  
    setState(state) {
      this.currentState = state;
    }
  
    getCurrentState() {
      return this.currentState;
    }
  }
  
  // Usage
  const vendingMachine = new VendingMachine();
  
  vendingMachine.setState(new SodaState());
  vendingMachine.getCurrentState().display(); // Output: "Vending machine is currently dispensing soda"
  
  vendingMachine.setState(new ChipsState());
  vendingMachine.getCurrentState().display(); // Output: "Vending machine is currently dispensing chips"
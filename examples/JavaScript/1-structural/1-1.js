// The Adaptee class
class Heisenberg {
    sayMyName() {
      console.log("You're goddamn right.");
    }
  }
  
  // The Target interface
  class DrugDealerInterface {
    identifyYourself() {
      throw new Error('This method must be overridden!');
    }
  }
  
  // The Adapter class
  class DrugDealerAdapter extends DrugDealerInterface {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
  
    identifyYourself() {
      this.adaptee.sayMyName();
    }
  }
  
  // Usage
  const heisenberg = new Heisenberg();
  const drugDealer = new DrugDealerAdapter(heisenberg);
  drugDealer.identifyYourself(); // Output: "You're goddamn right."
// Define the Don Corleone (subject)
class DonCorleone {
    constructor() {
      this.families = []; // List of families to notify
    }
  
    registerFamily(family) { // Add family to the list
      this.families.push(family);
    }
  
    makeDecision(decision) { // Make a decision and notify all families
      console.log(`Don Corleone has made a decision: ${decision}`);
      this.families.forEach(function(family) {
        family.notify(decision);
      });
    }
  }
  
  // Define the families (observers)
  class BarziniFamily {
    notify(decision) {
      console.log(`Barzini Family received the decision: ${decision}`);
    }
  }
  class TattagliaFamily {
    notify(decision) {
      console.log(`Tattaglia Family received the decision: ${decision}`);
    }
  }
  class CorleoneFamily {
    notify(decision) {
      console.log(`Corleone Family received the decision: ${decision}`);
    }
  }
  
  // Usage example
  const donCorleone = new DonCorleone();
  const barzini = new BarziniFamily();
  const tattaglia = new TattagliaFamily();
  const corleone = new CorleoneFamily();
  
  donCorleone.registerFamily(barzini);
  donCorleone.registerFamily(tattaglia);
  donCorleone.registerFamily(corleone);
  
  donCorleone.makeDecision("Leave the gun. Take the cannoli.");
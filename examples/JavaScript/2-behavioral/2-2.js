// Define the command interface
class Command {
    execute() {}
  }
  
  // Concrete Commands
  class MarchCommand extends Command {
    constructor(receiver) {
      super();
      this.receiver = receiver;
    }
  
    execute() {
      this.receiver.march();
    }
  }
  
  class AttackCommand extends Command {
    constructor(receiver) {
      super();
      this.receiver = receiver;
    }
  
    execute() {
      this.receiver.attack();
    }
  }
  
  // Receiver
  class Soldier {
    march() {
      console.log("Soldier marching!");
    }
  
    attack() {
      console.log("Soldier attacking!");
    }
  }
  
  // Invoker
  class Dictator {
    setCommand(command) {
      this.command = command;
    }
  
    giveOrders() {
      console.log("Dictator giving orders:");
      this.command.execute();
    }
  }
  
  // Usage
  const dictator = new Dictator();
  const soldier = new Soldier();
  
  dictator.setCommand(new MarchCommand(soldier));
  dictator.giveOrders(); // Output: "Dictator giving orders: Soldier marching!"
  
  dictator.setCommand(new AttackCommand(soldier));
  dictator.giveOrders(); // Output: "Dictator giving orders: Soldier attacking!"
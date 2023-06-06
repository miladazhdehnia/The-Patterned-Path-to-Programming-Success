// Define the hungry monster (originator)
class HungryMonster {
    constructor() {
      this.stomach = []; // List of foods eaten by the monster
    }
  
    eat(food) { // Eat a piece of food and add it to the stomach
      console.log(`Yum! ${food} tasted great!`);
      this.stomach.push(food);
    }
    getState() { // Save the current state of the monster
      return new MonsterMemento(this.stomach.slice());
    }
    setState(memento) { // Restore the monster's previous state
      this.stomach = memento.getState();
      console.log(`Oops, I didn't like that ${this.stomach.pop()}...`);
    }
  }
  
  // Define the monster memento (memento)
  class MonsterMemento {
    constructor(stomach) {
      this.stomach = stomach;
    }
    getState() {
      return this.stomach;
    }
  }
  
  // Define the monster caretaker (caretaker)
  class MonsterCaretaker {
    constructor() {
      this.mementos = [];
    }
    addMemento(memento) { // Add a new memento to the list
      this.mementos.push(memento);
    }
    getMemento(index) { // Get the memento at the specified index
      return this.mementos[index];
    }
  }
  
  // Usage example
  const monster = new HungryMonster();
  const caretaker = new MonsterCaretaker();
  monster.eat("Pizza");
  caretaker.addMemento(monster.getState());
  monster.eat("Taco");
  caretaker.addMemento(monster.getState());
  monster.eat("Sushi");
  caretaker.addMemento(monster.getState());
  monster.eat("Durian");
  monster.setState(caretaker.getMemento(1));
  console.log(`My stomach now contains: ${monster.stomach}`);
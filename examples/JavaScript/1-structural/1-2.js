class Mushroom {
    constructor() {
      this.name = 'Mushroom';
    }
  
    eat() {
      console.log('Yum! Grew bigger!');
    }
  }
  
  class FireFlower {
    constructor() {
      this.name = 'Fire Flower';
    }
  
    eat() {
      console.log('Awesome! Can shoot fireballs now!');
    }
  }
  
  class Star {
    constructor() {
      this.name = 'Star';
    }
  
    eat() {
      console.log('Woo-hoo! Invincible!');
    }
  }
  
  class Mario {
    constructor(name) {
      this.name = name;
    }
  
    jump() {
      console.log(`Jumped as ${this.name}`);
    }
  
    run() {
      console.log(`Ran as ${this.name}`);
    }
  }
  
  class PowerUpFacade {
    constructor(mushroom, fireFlower, star, mario) {
      this.mushroom = mushroom;
      this.fireFlower = fireFlower;
      this.star = star;
      this.mario = mario;
    }
  
    eatMushroom() {
      this.mushroom.eat();
      this.mario.jump();
    }
  
    eatFireFlower() {
      this.fireFlower.eat();
      this.mario.run();
    }
  
    eatStar() {
      this.star.eat();
      this.mario.jump();
      this.mario.run();
    }
  }
  
  // Usage example
  const mushroom = new Mushroom();
  const fireFlower = new FireFlower();
  const star = new Star();
  const mario = new Mario('Mario');
  
  const powerUpFacade = new PowerUpFacade(mushroom, fireFlower, star, mario);
  
  powerUpFacade.eatMushroom(); // Yum! Grew bigger! Jumped as Mario
  powerUpFacade.eatFireFlower(); // Awesome! Can shoot fireballs now! Ran as Mario
  powerUpFacade.eatStar(); // Woo-hoo! Invincible! Jumped as Mario, Ran as Mario
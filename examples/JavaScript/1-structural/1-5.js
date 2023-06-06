// Define the flyweight object for player properties that are shared among multiple players
const playerFlyweight = {
    age: 25,
    height: 180,
    weight: 75
  };
  
  // Define the player class which accepts unique properties as parameters
  class Player {
    constructor(name, position, skills) {
      this.name = name;
      this.position = position;
      this.skills = skills;
    }
    
    // A method to change Bob's position mid-game
    changePosition(newPosition) {
      if (this.name === 'Bob') {
        console.log('Bob has flown off the handle again and changed positions. Creating a new player object just for him...');
        
        // Create a new player object specifically for Bob with all unique properties passed in as parameters
        const bobPlayer = new Player('Bob', newPosition, ['Wild Card']);
        return bobPlayer;
      }
      
      // For all other players, reuse the flyweight object for common properties and only pass in unique properties as parameters
      return { ...playerFlyweight, name: this.name, position: newPosition, skills: this.skills };
    }
  }
  
  // Define an array of players on the team
  const teamPlayers = [
    new Player('Alice', 'Forward', ['Speed', 'Precision']),
    new Player('Bob', 'Midfield', ['Unpredictability']),
    new Player('Charlie', 'Defense', ['Strength', 'Tackling']),
    new Player('Dave', 'Forward', ['Agility', 'Shooting'])
  ];
  
  // Use the flyweight object for common properties and only pass in unique properties as parameters when creating a new player object
  console.log(teamPlayers[0].changePosition('Left Forward')); // { age: 25, height: 180, weight: 75, name: 'Alice', position: 'Left Forward', skills: ['Speed', 'Precision'] }
  console.log(teamPlayers[1].changePosition('Right Midfield')); // Bob has flown off the handle again and changed positions. Creating a new player object just for him...
  console.log(teamPlayers[2].changePosition('Center Defense')); // { age: 25, height: 180, weight: 75, name: 'Charlie', position: 'Center Defense', skills: ['Strength', 'Tackling'] }
  console.log(teamPlayers[3].changePosition('Right Forward')); // { age: 25, height: 180, weight: 75, name: 'Dave', position: 'Right Forward', skills: ['Agility', 'Shooting'] }
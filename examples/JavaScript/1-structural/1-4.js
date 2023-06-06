const VikingArmy = {
    warriors: ['Ragnar', 'Lagertha', 'Bjorn'],
    weapons: ['axe', 'sword', 'spear']
  }
  
  const VikingArmyProxy = new Proxy(VikingArmy, {
    get: function(target, property) {
      if (property === 'weapons') {
        console.log('Access denied! Only authorized Vikings can access the weapons.');
        return [];
      } else {
        return target[property];
      }
    }
  });
  
  // Unauthorized Viking tries to access weapons
  console.log(VikingArmyProxy.weapons);
  // Output: Access denied! Only authorized Vikings can access the weapons.
  // []
  
  // Authorized Viking accesses warriors
  console.log(VikingArmyProxy.warriors);
  // Output: [ 'Ragnar', 'Lagertha', 'Bjorn' ]
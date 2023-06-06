class ProductLocationDatabase {
    constructor() {
      if (!ProductLocationDatabase.instance) {
        this._data = {};
        ProductLocationDatabase.instance = this;
      }
      return ProductLocationDatabase.instance;
    }
  
    add(product, location) {
      this._data[product] = location;
    }
  
    remove(product) {
      delete this._data[product];
    }
  
    getLocation(product) {
      return this._data[product];
    }
  }
  
  // Usage
  const MiladDB1 = new ProductLocationDatabase();
  const MiladDB2 = new ProductLocationDatabase();
  
  MiladDB1.add('Toothpaste', 'A23');
  MiladDB1.add('Shampoo', 'B87');
  
  console.log(BobDB2.getLocation('Shampoo')); // B87
class Bag {
  constructor(pBagSize, pBagVolume, pBagPrice) {
    this.bagSize = pBagSize;
    this.bagVolume = pBagVolume;
    this.bagPrice = pBagPrice;
  }
}
class ShoppingBag {
  bagList() {
    let bags = [
      new Bag("large", 750, 0.7),
      new Bag("medium", 400, 0.35),
      new Bag("small", 250, 0.2),
     ];
    return bags;
  }
}


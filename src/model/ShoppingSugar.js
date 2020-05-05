/**
 * SugarListi olusturmaya yarayan class yapisi.
 */
class Sugar {
  constructor(pSugarName, pSugarPrice, pSugarVolume, pSugarPiece) {
    this.sugarName = pSugarName;
    this.sugarPrice = pSugarPrice;
    this.sugarVolume = pSugarVolume;
    this.sugarPiece = pSugarPiece;
  }
}
/**
 * sugarListi olusturan class
 */
class SugarList {
  sugarList() {
    let sugars = [
      new Sugar("Yuvarlak-Lolipop", 3, 50, 0),
      new Sugar("Burgulu-Lolipop", 2.5, 20, 0),
      new Sugar("Jelibon", 2.75, 45, 0),
      new Sugar("Akide", 5, 26, 0),
      new Sugar("Lokum", 1.5, 8, 0),
    ];
    return sugars;
  }
}

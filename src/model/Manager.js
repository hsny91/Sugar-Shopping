/**
 * Manager, seker otamatini viewShopping araciligi ile ekrana yazdirir.
 * Manager, uzerine tiklanan sekeri sepete atar ve tiklanan seker turu dogrultusunda sepet fiyatini ve sepetteki seker hacmini gunceller.
 * Manager sepeti her guncellediginde ekranda yazilmasi icin ViewController clasindaki metodlari cagirir.
 * Manager, musterinin odeme yapilmasi ile alisverisi bitirir.
 */
class Manager {
  #shoppingSugarList = new SugarList().sugarList(); //sugarListi olusturan metodu tutan degisken
  #shoppingBagList = new ShoppingBag().bagList(); // baglisti olusturan metodu tutan degisken
  viewAutomat = null;
  viewSugarBags = null;
  #payment = null; //sekerlerin toplam fiyatini tutan degisken
  #totalvolume = null; // sekerlerin toplam hacmini tutan degisken.
  constructor(pViewAutomat, pViewSugarBags) {
    this.viewAutomat = pViewAutomat; //  seker otamatini ekrana yazdiricak olan, disardan cagirilan metodu tutan degisken
    this.viewSugarBags = pViewSugarBags; // sepeti guncelleyecek olan, disardan cagirilan metodu tutan degisken
  }
  /**
   * bu metod ile seker otamatini ekrana yazdiracak " this.viewAutomat" metodu cagrilrir.
   * sekerler uzerine click eventi yapistirilmasi saglayan "chooseSugar" metodunu cagirir.
   */
  start() {
    this.viewAutomat(this.#shoppingSugarList);
    this.chooseSugar();
    this.payment();
  }
  /**
   * ekrana yaazdirilmis olan seker uzerine click ekler ve bunlara tiklanildiginda istenilen fonksiyonu cagirir.
   */
  chooseSugar() {
    this.#shoppingSugarList.map((sugar) => {
      document
        .querySelector(`#${sugar.sugarName}`)
        .addEventListener("click", this.checkToSugar.bind(this));
    });
  }
  /**
   * uzerine tiklanan sekerin dizinin hangi elemani oldugunu bular ve o elemani "addSugarBags" metoduna parametre olarak gonderir.
   * @param {*} item
   */
  checkToSugar(item) {
    this.#shoppingSugarList.map((sugar) => {
      if (item.target.id === sugar.sugarName) this.addSugarBags(sugar);
    });
  }
  /**
   * Uzerine tiklanan sekerin fiyatini, hacmini ekrana yazdirmak icin alir ve degiskenlere atar.
   * Sepete atilan sekerleri ve bilgileri gostermek icin viewController dosyasinda metod cagirir.
   *
   * @param {*} psugar
   */
  addSugarBags(psugar) {
    psugar.sugarPiece++;
    this.#payment += psugar.sugarPrice;
    this.#totalvolume += psugar.sugarVolume;
    console.log(this.#totalvolume);
    console.log(this.#shoppingSugarList);
    console.log(this.#payment);
    this.viewSugarBags(
      this.#shoppingSugarList,
      this.#shoppingBagList,
      this.#payment,
      this.#totalvolume
    ); //viewControllerdaki fonksoyonu cagirian degisken
  }/**
   * payment butonuna tiklandigi zaman ekrana alert gelir ve sayfa yenilenir.
   */
  payment() {
    document.querySelector("#button-payment").addEventListener("click", () => {
      this.fireAlert();
    });
  }

  fireAlert() {
    Swal.fire({
      title: `<strong>Thank you, for choose us </strong>`,
      icon: `success`,
      html: `<br><br><button class="btn btn primary"></button></b>`,
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up" onclick="location.reload();"> Again Come!!</i>',// tam again come yazisina tiklandiginda sayfa yenileniyor.
    });
  }
}

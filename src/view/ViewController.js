/**
 *Mangerdan aldigi bilgiler dogrultusunda ekranda guncelleme yapar.
 *Satin alina sekeri elemani ekrana yazdirir.
 *Toplam hacimden yola cikarak kullanilacak olan poseti belirler ve fiyat bilgisiniekrana yazdirir.
 *(toplam hacim bilgisini hesaplar iken model bolumde olusturdugum bagListi kullanmak istedim ama kullanamadim. Baslangictaki analize uygun olmasi acisindan, baglisti olusturdugum classi silmedim.)
 *Toplam fiyat bilgisini ekrana yazdirir.
 *Torba hacmi hesaplatirken fiyat bilgisi goz onunde tutulmustur.(ornek 650 cm3 luk seker 750 lik pose konursa 0,7 fr odenirken  1 orta, 1 small posete konulursa 0,55 fr odenir bu nedenle tercih daha az para olan 1 small,1 medium poset tercih edilir.)
 */
class ViewController {
  mediumBag=null;
  smallBag=null;
  viewBags(pSugarListArray, pSugarBagsList, pPayment, pTotalVolume) {
    let list = `<ul class="list-inline justifiy content-center">`;
    pSugarListArray
      .map((sugar) => {
        if (sugar.sugarPiece !== 0) {
          list += `<li class="list-group-item list-group-item-success text-center mt-1">${sugar.sugarName} ${sugar.sugarPiece} adet</li>`;
        }
      }).join(" ");
    list += `</ul>`;
    document.querySelector("#shopping-bag").innerHTML = list;
    let bigBag = Math.floor(pTotalVolume / 750) * 0.7;
    pTotalVolume = pTotalVolume % 750;
    if(pTotalVolume<400 && pTotalVolume>250){
      this.mediumBag = Math.ceil(pTotalVolume / 400) * 0.35;
      this.smallBag=0;
    }
    else{
    this.mediumBag = Math.floor(pTotalVolume / 400) * 0.35;
    pTotalVolume = pTotalVolume % 400;
    this.smallBag = Math.ceil(pTotalVolume / 250) * 0.2;
    }
    let bagPrice = bigBag +this. mediumBag +this.smallBag;//kullanilan posetlerin fiyatinin hesaplanmasi
    let total = bagPrice + pPayment;
    document.querySelector("#payment").innerHTML = "Sugar Price: " +pPayment + " CHF" +"<br>" +
      "Bag Price: " +bagPrice +"CHF" +"<br>" +
      "Total Price: " + total +"CHF";
  }
}


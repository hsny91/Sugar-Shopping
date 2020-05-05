
/**
 * SEKERCI DUKKANI
 * Uygulama bir sekerci dukkaninda bulunan seker otamati olarak calismalidir.
 * Otamata gelen musteri istedigi sekerden istedigi miktarda secebilmelidir.
 * Musteri odeme yaptiginda Otomat satin alinan sekerlerin toplam ücretini ekranda gösterir ve sekerlerin hacimlerine göre, sekerlerin konulacagi 3 fakli büyüklükte kagit posetten hangi(sini/lerini) kullanacagina karar verir ve sekeleri o posetler ile disari cikarir.
 * 
 * ANALIZ
 * - Model OBJELERI:ShoppingSugar,ShoppingBag,Manager
 * - View OBJELERI: ViewController,ViewShopping
 * 
 * ShoppingSugar,satilan sekerlerin bilgilerini olusturur. 
 * ShoppingBag,sekerlerin konulacagi posetlerin bilgilerini olusturur.
 * Manager uygulma ilk acildiginda ekrana gelecek olan seker otamatini viewShopping araciligi ile olusturur.
 * Manager, uzerine tiklanan sekeri sepete atar ve tiklanan seker turu dogrultusunda sepet fiyatini ve sepetteki seker hacmini gunceller.
 * Manager sepeti her guncellediginde ekranda yazilmasi icin ViewController clasindaki metodlari cagirir.
 * Manager, musterinin odeme yapilmasi ile alisverisi bitirir.
 * 
 */
const viewShopping = new ViewShopping();//uygulama ilk acldiginda ektranda seker otamatini gosteren classi tutan degisken.
const viewController=new ViewController();// sepette guncellemeleri ekrana yazdiran  classi tutan degisken.
new Manager(viewShopping.viewAutomat,
    viewController.viewBags).start();


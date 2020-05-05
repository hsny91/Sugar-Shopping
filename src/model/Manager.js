class Manager {
  #shoppingSugarList = new SugarList().sugarList();
  #shoppingBagList = new ShoppingBag().bagList();
  viewAutomat = null;
  viewSugarBags = null;
  #payment = null;
  #totalvolume=null;
  constructor(pViewAutomat, pViewSugarBags) {
    this.viewAutomat = pViewAutomat;
    this.viewSugarBags = pViewSugarBags;
  }
  start() {
    this.viewAutomat(this.#shoppingSugarList, this.#shoppingBagList);
    this.chooseSugar();
  }

  chooseSugar() {
    this.#shoppingSugarList.map((sugar) => {
      document
        .querySelector(`#${sugar.sugarName}`)
        .addEventListener("click", this.checkToSugar.bind(this));
    });
  }

  checkToSugar(item) {
    this.#shoppingSugarList.map((sugar) => {
      if (item.target.id === sugar.sugarName) 
      this.addSugarBags(sugar);
    });
  }

  addSugarBags(psugar) {
    psugar.sugarPiece++;
    this.#payment += psugar.sugarPrice;
    this.#totalvolume+=psugar.sugarVolume
    console.log(this.#totalvolume)
    console.log(this.#shoppingSugarList);
    console.log(this.#payment);
    this.viewSugarBags( this.#shoppingSugarList,this.#shoppingBagList,this.#payment,this.#totalvolume);
  }
}

/*
class Manager {
  #arrayDoctor = new ArrayDoctor().getArrayDoctor();// doctor.js' te olusturulan doctor bilgilerini tutan arraya ulasilir.
  #dailyAnimals = [];//gunluk toplam hayvan dizisi
  #dailyAnimalsLength=null;
  #timerHandle = null;
  constructor(finishedShift, continueShift) {// tedavi devam ederken ve mesai biiriginde disaridan cagirilan fonksiyonlar
    this.finishedShift = finishedShift;
    this.continueShift = continueShift;
    this.randomInformation = new Utility();// rastgele bilgilerin "Utility" classindan alinmasini saglayan degisken
    this.animals = new AllAnimals(); // gunluk toplam tedaviye gelen hayvanlarin olusturulmasi icin "AllAnimals" classini cagiran degisken
    this.doDailyAnimals();//gunluk toplam tedaviye gelen hayvanlarin olusturan metod
    this.getDailyAnimals();
  }
  start() {
    this.#timerHandle = setInterval(() => this.run(), 100); 
    setTimeout(() => {
      clearInterval(this.#timerHandle);
      this.finishedShift(this.#arrayDoctor, this.#dailyAnimals,this.#dailyAnimalsLength);
    }, 180000);
  }
 
  run() {
    this.continueShift(this.#dailyAnimals);//hayvanlari ekrana bastiran fonksiyon disaridan cagrilir.
    this.#arrayDoctor.map((doctor) => {
      if (doctor.status) {
        doctor.status = !doctor.status;// Durumu musait olan doktor hemen hayvan alacagi icin durumu false olarak degistirilir.
        this.check(doctor);
      }
    });
  }
 
  check(pDoctor) {
    let nextAnimal = this.#dailyAnimals.find((animal) => {
      if (animal.animalName === pDoctor.animalName[this.randomInformation.randomIndex()]) //0 veya 1 uretir, boylece niyazi rastgele hamsi veya kedi alir.
      return animal;
    });
    this.startTreatment(pDoctor, nextAnimal);
  }

  startTreatment(pDoctor, pAnimal) {
    setTimeout(() => {
      let status = !pDoctor.status;// doktor tekradan musait hale geldi.
      pDoctor.status = status;// doktorun durumu doktorun bulundugu array elemanina eklendi.
      pDoctor.treatedAnimals.push(pAnimal.animalName);// doktorun baktigi hayvan doktorun bulundugu array elemanina eklendi.
      pDoctor.price += pAnimal.price;//doktorun baktigi hayvanin tedavi masrafi doktorun bulundugu array elemanina eklendi.
      this.finishTreatedAnimal(pAnimal);// tedavi edilen hayvani "dailyAnimals" dizisinden cikaran metod
    }, pAnimal.time);
  }
  finishTreatedAnimal(pAnimal) {
    let treatedAnimalIndex = this.#dailyAnimals.indexOf(pAnimal);
    this.#dailyAnimals.splice(treatedAnimalIndex, 1);
  }
  
  doDailyAnimals() {
    let number = this.randomInformation.randomAnimalNumber(200,250);
    for (let i = 0; i < number; i++) {
      let number = this.randomInformation.randomAnimal();
      this.#dailyAnimals.push(this.animals.animalList(number));
      this.#dailyAnimalsLength= this.#dailyAnimals.length;// ilk dizinin uzunlugu istatistik bilgiler icin kullanilmak uzre viewControlere gonderilrir.
    }
    
  }
  getDailyAnimals() {
    return this.#dailyAnimals;
  }
  getArrayDoctor() {
    return this.#arrayDoctor;
  }

}*/

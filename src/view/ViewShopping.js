class ViewShopping {
  viewAutomat(pSugarListArray,pSugarBagsList) {
    let automat = ` <h1 class="text-center p-3">Sugar Shopp</h1>
        <div id ="screen"class="container">
          <div class="row justify-content-center">
            <button id="${pSugarListArray[0].sugarName}" class="col-2 btn btn-primary mr-3 mt-4">${pSugarListArray[0].sugarName}</button>
            <button id="${pSugarListArray[1].sugarName}" class="col-2 btn btn-success  mr-3 mt-4">${pSugarListArray[1].sugarName}</button>
            <button id="${pSugarListArray[2].sugarName}"  class="col-2 btn btn-warning  mr-3 mt-4">${pSugarListArray[2].sugarName}</button>
            <button id="${pSugarListArray[3].sugarName}" class="col-2 btn btn-danger  mr-3 mt-4">${pSugarListArray[3].sugarName} </button>               
            <button id="${pSugarListArray[4].sugarName}" class="col-2 btn btn-info  mr-3 mt-4">${pSugarListArray[4].sugarName}</button>
            </div>
          </div>
           <div id="maschine" class="container bg-dark ">
        <div class="row justify-content-center">
          <div id="shopping-bag" class="col-3 bg-light text-dark mr-4 mt-5 text-center"> SEPET </div>
          <div id="payment"class="col-3 bg-light text-dark  mr-4 mt-5 text-center">PAYMENT</div>
          <div id="kind-bags"class="col-3 bg-light text-dark  mr-4 mt-5 text-center"> BAGS <br> ${pSugarBagsList[0].bagSize} bags ${pSugarBagsList[0].bagPrice} CHF</div>
        </div>`


    document.querySelector("#ilk").innerHTML = automat;
  }
}

/*
class ViewController {
  finish(pDoctorArray, pAnimalArray,pArrayLength) {
    let table = `<table class="table table-striped table-dark table-hover">`;
    table += `<thead>`;
    table += `<tr>
                <th>DOCTOR NAME</th>
                <th>PRICE</th>
                <th>ANIMAL NAME</th>
                <th>TOTAL NUMBER OF ANIMAL</th>
              </tr>`;
    table += `</thead>`;
    pDoctorArray.map((doctor) => {
        table += `<tr>
            <td>${doctor.doctorName}</td>
            <td>${doctor.price}</td>
            <td>${doctor.animalName}</td>
            <td>${doctor.treatedAnimals.length}</td>
            </tr>`;
      }).join("");
    table += `</table>`;
    document.querySelector("#finish-table").innerHTML = table;
    let untreatedAnimals = pAnimalArray.length;  //tedavi edilmeden kalan hayvan sayisi
    let totalAnimals=pArrayLength;//toplam gunluk tedaviye gelen hayvan sayisi
    let percentTreatedAnimal=100-((untreatedAnimals/totalAnimals)*100)
      
    document.querySelector("#total-animal").innerHTML ="Total Animals: "+totalAnimals;
    document.querySelector("#untreated-animals").innerHTML ="Untreated Animals: "+untreatedAnimals;
    document.querySelector("#treated-animals").innerHTML ="Treated Animals: %"+percentTreatedAnimal;

  }
  continue(pArray) {
    let table = `<table class="table w-25">`;
    table += `<thead>`;
    table += `<tr class="text-light bg-dark">
                  <th>ANIMAL TYPE</th>
                  <th>OWNER</th>
                  <th>AGE</th>
                 </tr>`;
    table += `</thead>`;
    pArray.map((animal) => {
        table += `<tr class="table-success">
            <td>${animal.animalName}</td>
            <td>${animal.ownerName}</td>
            <td>${animal.animalAge}</td>
            </tr>`;
      }).join("");
    document.querySelector("#finish-table").innerHTML = table;
  }



}*/

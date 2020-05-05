/**
 * Manager classinda aldigi bilgiler dogrultusunda uygulama basladiginda seker otamatini ekrana bastirir.
 */
class ViewShopping {
  viewAutomat(pSugarListArray) {
    let automat = ` <h1 class="text-center p-3">Sugar Shopp</h1>
        <div id ="screen" class="container">
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
            <div id="kind-bags"class="col-3 bg-light text-dark  d-flex justify-content-center flex-column text-center  mr-4 mt-5 text-center">
              <button id="button-payment" class="btn btn-primary  ">PAYMENT</button></div>
            <div id="payment"class="col-3 bg-light text-dark d-flex justify-content-center flex-column  mr-4 mt-5 text-center"></div>
          </div>
        </div>`;
    document.querySelector("automat").innerHTML = automat;
  }
}

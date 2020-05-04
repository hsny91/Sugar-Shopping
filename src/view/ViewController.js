class ViewController{
 
  constructor(){
this.x=null;
  }
  viewBags(pSugarListArray,pSugarBagsList,pPayment,pTotalVolume){
  
    let list=`<ul>`
    pSugarListArray.map((sugar) => {
      if(sugar.sugarPiece!==0){
      list += 
          `<li class="list-group-item list-group-item-success text-center mt-1 mr-1 ">${sugar.sugarName} ${sugar.sugarPiece} adet</li>`
          
     } }).join(" ");
  list += `</ul>`;
  document.querySelector("#shopping-bag").innerHTML = list;
  document.querySelector("#payment").innerHTML ="Total: "+pPayment+" CHF";
 



  
  /*if(pTotalVolume<=400)
   this.x= Math.ceil (pTotalVolume/400);
  else if(pTotalVolume<=700){
    this.x= Math.floor(pTotalVolume/700);
  } else{
    this.x=Math.floor(pTotalVolume/750);
  }
 document.querySelector("#kind-bags").innerHTML=(this.x);

  
 */
  
  
 
 }
  
  
  
  }
  
   





/*
  let x=pSugarBagsList.map((bag)=>{
    if(bag.bagSize==="small")
return Math.ceil (pTotalVolume/bag.bagVolume);
else{
  return Math.floor(pTotalVolume/bag.bagVolume);
}
document.querySelector("#payment").innerHTML ="Total: "+pPayment+" CHF";
  })


*/














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
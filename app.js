// Bu cözüm en moderni
// bizim ama normal fonksiyonlari kullanmamiz lazim

const carParts = ["tsla342", "vw0929", "tyt567", "bmw6126", "cabrio213", "alfaromeo3234"];

// Parca isimleri büyük harflere cevrilecektir.
function capitalize(pName){ 
  return pName.toUpperCase();
}

// Parca isimlerinden sayilar cikartilacaktir.
function extractNumbers(pName){
  return pName.replace(/[0-9]/g, '');
}

// Parca isimleri tersine cevrilecektir.
function reverse(pName){
  return pName.split("").reverse().join("");
}

// Her parcanin basina KEREMAG_ eklenecektir.
function addCompanyName(pName){
   return "KEREMAG__" + pName;
}

// Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
function addDate(pName){
  return pName + "__" + Date();
}


for(let index = 0; index < carParts.length; index++){
  let nextPart = carParts[index];
  cartParts[index] = capitalize(extractNumbers(reverse(addCompanyName(addDate(nextPart)))));  
}

                       
console.log("Spare Parts in Kerem AG", result);

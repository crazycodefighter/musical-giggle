


var purQty = document.getElementById('P94_PUR_QUANTITY');
var unitFare = document.getElementById('P94_UNIT_FARE');
var fare = document.getElementById('P94_FARE')
var unitGrossFare = document.getElementById('P94_UNIT_GROSS_FARE');
var disAmount = document.getElementById('P94_DIS_AMT');
var disPercent = document.getElementById('P94_DISCOUNT');


let totalPrice = function() {
    let purQuantity = parseInt(document.getElementById('P94_PUR_QUANTITY').value);
    let uniteFare = parseInt(document.getElementById('P94_UNIT_FARE').value);

    //let unitGrFare = parseInt(document.getElementById('P94_UNIT_GROSS_FARE').value);

   


    let uniGroFare = purQuantity * uniteFare || 0;
    let grossFare = purQuantity * uniGroFare || 0;
    let disAmnt = fare * disPercent / 100 || 0;
    alert(disAmnt);
    document.getElementById('P94_UNIT_GROSS_FARE').value = uniGroFare
    document.getElementById('P94_GROSS_FARE').value = grossFare
    document.getElementById('P94_DIS_AMT').value = disAmnt
    
}


purQty.addEventListener('keyup', totalPrice);
unitFare.addEventListener('keyup', totalPrice);
unitGrossFare.addEventListener('keyup', totalPrice);
disAmount.addEventListener('keyup', totalPrice);



var myName = null;
console.log(myName);
let b;
console.log(b);

/*var john = {
  name: "john",
  yearOfBirth: "1989",
  job: "teacher"
}

var Person = function(name, yearOfBirth, job){
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
}
var john = new Person(john, 1989, 'teacher');*/


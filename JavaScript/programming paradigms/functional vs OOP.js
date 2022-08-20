// functional programming example

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);

// OOP Example 01

var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purcahse1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice(); // 120

// OOP Example 2

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purcahse2.shoes * purchase2.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice(); // 60

// OOP Example 3
// The "this" keyword is an alias for the name of the object.

var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice(); // 120

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice(); // 60

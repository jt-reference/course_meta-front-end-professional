//nested loop - great tool, but can become resource intensive if overused//

for (var year = 2023; year < 2025; year++) {
  console.log(year);
  for (var month = 6; month < 9; month++) {
    console.log("---------", month);
  }
}

//nested loop multiplication//

for (var firstNum = 0; firstNum < 10; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " times " + secondNum + " equals " + firstNum * secondNum
    );
  }
}

//nested loop custom division table//

for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}

//using nested loop on website layout//

var cubes = "ABCDEFG";

for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

//using a function to call an array

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

//Now I'm adding control flow right inside my function, based on whether a specific array member matches a specific value - in this case the string "red".

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      console.log(i * 100, "tomato!");
    } else {
      console.log(i * 100, arr[i]);
    }
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);
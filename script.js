// var input = prompt("Fuck");
// var n = input.indexOf("/");
// var ratio= input.substring(n+1, n+2);
// var quantity = input.indexOf("=");
// var quan = input.substring(quantity+1, quantity+10);
// var bems = quan/ratio;
// console.log(bems);

function myFunction() {
var x = document.getElementById("myText").value;
console.log(x);
var total=0;
var list = x.split("\n");
var calcArray="";
for( i=0; i<list.length;i++){
calcArray = calcArray + (list[i] + " --> " + calculate(list[i]) + "\n");
total = total + calculate(list[i]);
}
calcArray= calcArray+ "\n Total Bems= " + total; 
document.getElementById("display").innerHTML = calcArray;
document.getElementById("demo2").innerHTML = "Total Bems= " + Math.round(total*100)/100;
}

function calculate(item) {
var n = item.indexOf("/");
var sp= item.indexOf(" ");
var ratio= item.substring(n+1,sp);
var quantity = item.indexOf("=");
var quan = item.substring(quantity+1, quantity+10);
var bems = Math.round((quan/ratio)*100)/100;
return bems;
}
var LapOne={
    laptop:"book.jpeg",
    name:"samsung flex",
    price:50000,
    original:50500,
    itemId:"l001"
}
document.getElementById("book").src=LapOne.laptop;
document.getElementById("name1").innerText=LapOne.name;
document.getElementById("price1").innerText=LapOne.price;
document.getElementById("original1").innerText=LapOne.original;

var LapTwo={
    laptop:"book2.jpeg",
    name:"samsung book 2",
    price:54000,
    original:60000,
    itemId:"l002"
}
document.getElementById("book2").src=LapTwo.laptop;
document.getElementById("name2").innerText=LapTwo.name;
document.getElementById("price2").innerText=LapTwo.price;
document.getElementById("original2").innerText=LapTwo.original;

var LapThree={
    laptop:"book3.jpeg",
    name:"samsung book 3",
    price:58000,
    original:65000,
    itemId:"l003"
}
document.getElementById("book3").src=LapThree.laptop;
document.getElementById("name3").innerText=LapThree.name;
document.getElementById("price3").innerText=LapThree.price;
document.getElementById("original3").innerText=LapThree.original;

var LapFour={
    laptop:"book4.jpeg",
    name:"samsung book 4",
    price:60000,
    original:68000,
    itemId:"l004"
}
document.getElementById("book4").src=LapFour.laptop;
document.getElementById("name4").innerText=LapFour.name;
document.getElementById("price4").innerText=LapFour.price;
document.getElementById("original4").innerText=LapFour.original;

var LapFive={
    laptop:"book5.jpeg",
    name:"samsung book 5",
    price:70000,
    original:75000,
    itemId:"l005"
}
document.getElementById("book5").src=LapFive.laptop;
document.getElementById("name5").innerText=LapFive.name;
document.getElementById("price5").innerText=LapFive.price;
document.getElementById("original5").innerText=LapFive.original;

var LapSix={
    laptop:"book6.jpeg",
    name:"samsung book 6",
    price:78000,
    original:82000,
    itemId:"l006"
}
document.getElementById("book6").src=LapSix.laptop;
document.getElementById("name6").innerText=LapSix.name;
document.getElementById("price6").innerText=LapSix.price;
document.getElementById("original6").innerText=LapSix.original;

document.getElementById("lapone").onclick=function(){
    window.location.href="naming.html" + "?" + LapOne.itemId 
}
document.getElementById("laptwo").onclick=function(){
    window.location.href="naming.html" + "?" + LapTwo.itemId 
}
document.getElementById("lapthree").onclick=function(){
    window.location.href="naming.html" + "?" + LapThree.itemId 
}
document.getElementById("lapfour").onclick=function(){
    window.location.href="naming.html" + "?" + LapFour.itemId 
}
document.getElementById("lapfive").onclick=function(){
    window.location.href="naming.html" + "?" + LapFive.itemId 
}
document.getElementById("lapsix").onclick=function(){
    window.location.href="naming.html" + "?" + LapSix.itemId 
}


   
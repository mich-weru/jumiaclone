var LapOne={
    laptop:"book.jpeg",
    name:"samsung flex",
    price:50000,
    original:50500,
    itemId:"l001"
}
var LapTwo={
    laptop:"book2.jpeg",
    name:"samsung book 2",
    price:54000,
    original:60000,
    itemId:"l002"
}
var LapThree={
    laptop:"book3.jpeg",
    name:"samsung book 3",
    price:58000,
    original:65000,
    itemId:"l003"
}
var LapFour={
    laptop:"book4.jpeg",
    name:"samsung book 4",
    price:60000,
    original:68000,
    itemId:"l004"
}
var LapFive={
    laptop:"book5.jpeg",
    name:"samsung book 5",
    price:70000,
    original:75000,
    itemId:"l005"
}
var LapSix={
    laptop:"book6.jpeg",
    name:"samsung book 6",
    price:78000,
    original:82000,
    itemId:"l006"
}
var selectId=decodeURIComponent(window.location.search)
var selectedItem=selectId.substring(1)

if(selectedItem==LapOne.itemId) {
    document.getElementById("book").src=LapOne.laptop;
    document.getElementById("name1").innerHTML=LapOne.name;
    document.getElementById("price1").innerHTML=LapOne.price;
    document.getElementById("original1").innerHTML=LapOne.original;
    var cost=LapOne.price
    qty(cost)
}
else if(selectedItem==LapTwo.itemId) {
    document.getElementById("book").src=LapTwo.laptop;
    document.getElementById("name1").innerHTML=LapTwo.name;
    document.getElementById("price1").innerHTML=LapTwo.price;
    document.getElementById("original1").innerHTML=LapTwo.original;
    var cost=LapTwo.price
    qty(cost)
}
else if(selectedItem==LapThree.itemId) {
    document.getElementById("book").src=LapThree.laptop;
    document.getElementById("name1").innerHTML=LapThree.name;
    document.getElementById("price1").innerHTML=LapThree.price;
    document.getElementById("original1").innerHTML=LapThree.original;
    var cost=LapThree.price
    qty(cost)
}
else if(selectedItem==LapFour.itemId) {
    document.getElementById("book").src=LapFour.laptop;
    document.getElementById("name1").innerHTML=LapFour.name;
    document.getElementById("price1").innerHTML=LapFour.price;
    document.getElementById("original1").innerHTML=LapFour.original;
    var cost=LapFour.price
    qty(cost)
}
else if(selectedItem==LapFive.itemId) {
    document.getElementById("book").src=LapFive.laptop;
    document.getElementById("name1").innerHTML=LapFive.name;
    document.getElementById("price1").innerHTML=LapFive.price;
    document.getElementById("original1").innerHTML=LapFive.original;
    var cost=LapFive.price
    qty(cost)
}
else if(selectedItem==LapSix.itemId) {
    document.getElementById("book").src=LapSix.laptop;
    document.getElementById("name1").innerHTML=LapSix.name;
    document.getElementById("price1").innerHTML=LapSix.price;
    document.getElementById("original1").innerHTML=LapSix.original;
    var cost=LapSix.price
    qty(cost)
}
function qty(cost){
    document.getElementById("quantity").onkeyup=function(){
        let quantity=document.getElementById("quantity").value;
        let amount=cost
        if(quantity>1){
            let total=quantity*amount
            document.getElementById("total").innerText=total
            userLocation(total)
        }
        else if(quantity==1){
            let total=amount
            document.getElementById("total").innerText=total
            userLocation(total)
        }
    }
}
function userLocation(total){
    document.getElementById("location").onchange=function(){
        let delivery=document.getElementById("location").value
        let Malindi=1200
        let Loitoktok=1400
        let Kiambu=200

                if(delivery=="Malindi"){
            document.getElementById("total").innerText=Malindi + total
        }
        else if(delivery=="Loitoktok"){
            document.getElementById("total").innerText=Loitoktok + total
        }
        else if(delivery=="Kiambu"){
            document.getElementById("total").innerText=Kiambu + total
        }
        else if(delivery==" "){
            document.getElementById("total").innerText=total
        }
    }
}
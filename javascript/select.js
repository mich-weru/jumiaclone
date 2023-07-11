var PhoneOne={
    phone:"s20.jpeg",
    name:"samsung galaxy s20",
    price:120000,
    original:125000,
    itemId:"S001"
}
var PhoneTwo={
    phone:"s21.jpeg",
    name:"samsung galaxy s21",
    price:140000,
    original:150000,
    itemId:"S002"
}
var PhoneThree={
    phone:"s22.jpeg",
    name:"samsung galaxy s22",
    price:160000,
    original:170000,
    itemId:"S003"
}
var PhoneFour={
    phone:"s23.jpeg",
    name:"samsung galaxy s23",
    price:180000,
    original:190000,
    itemId:"S004"
}

var selectId=decodeURIComponent(window.location.search)
var selectedItem=selectId.substring(1)

if(selectedItem==PhoneOne.itemId){
    document.getElementById("s20").src=PhoneOne.phone;
    document.getElementById("name1").innerHTML=PhoneOne.name;
    document.getElementById("price1").innerHTML=PhoneOne.price;
    document.getElementById("original1").innerHTML=PhoneOne.original;
    var cost=PhoneOne.price
    qty(cost)
}
else if(selectedItem==PhoneTwo.itemId){
    document.getElementById("s20").src=PhoneTwo.phone;
    document.getElementById("name1").innerHTML=PhoneTwo.name;
    document.getElementById("price1").innerHTML=PhoneTwo.price;
    document.getElementById("original1").innerHTML=PhoneTwo.original;
    var cost=PhoneTwo.price
    qty(cost)
}
else if(selectedItem==PhoneThree.itemId){
    document.getElementById("s20").src=PhoneThree.phone;
    document.getElementById("name1").innerHTML=PhoneThree.name;
    document.getElementById("price1").innerHTML=PhoneThree.price;
    document.getElementById("original1").innerHTML=PhoneThree.original;
    var cost=PhoneThree.price
    qty(cost)
}
else if(selectedItem==PhoneFour.itemId){
    document.getElementById("s20").src=PhoneFour.phone;
    document.getElementById("name1").innerHTML=PhoneFour.name;
    document.getElementById("price1").innerHTML=PhoneFour.price;
    document.getElementById("original1").innerHTML=PhoneFour.original;
    var cost=PhoneFour.price
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
        let Mombasa=1200
        let Kisumu=1400
        let Nairobi=200

                if(delivery=="Mombasa"){
            document.getElementById("total").innerText=Mombasa + total
        }
        else if(delivery=="Kisumu"){
            document.getElementById("total").innerText=Kisumu + total
        }
        else if(delivery=="Nairobi"){
            document.getElementById("total").innerText=Nairobi + total
        }
        else if(delivery==" "){
            document.getElementById("total").innerText=total
        }
    }
}
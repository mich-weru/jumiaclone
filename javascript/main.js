var PhoneOne={
    phone:"s20.jpeg",
    name:"samsung galaxy s20",
    price:120000,
    original:125000,
    itemId:"S001"
}
document.getElementById("s20").src=PhoneOne.phone;
document.getElementById("name1").innerText=PhoneOne.name;
document.getElementById("price1").innerText=PhoneOne.price;
document.getElementById("original1").innerText=PhoneOne.original;

var PhoneTwo={
    phone:"s21.jpeg",
    name:"samsung galaxy s21",
    price:140000,
    original:150000,
    itemId:"S002"
}
document.getElementById("s21").src=PhoneTwo.phone;
document.getElementById("name2").innerText=PhoneTwo.name;
document.getElementById("price2").innerText=PhoneTwo.price;
document.getElementById("original2").innerText=PhoneTwo.original;

var PhoneThree={
    phone:"s22.jpeg",
    name:"samsung galaxy s22",
    price:160000,
    original:170000,
    itemId:"S003"
}
document.getElementById("s22").src=PhoneThree.phone;
document.getElementById("name3").innerText=PhoneThree.name;
document.getElementById("price3").innerText=PhoneThree.price;
document.getElementById("original3").innerText=PhoneThree.original;

var PhoneFour={
    phone:"s23.jpeg",
    name:"samsung galaxy s23",
    price:180000,
    original:190000,
    itemId:"S004"
}
document.getElementById("s23").src=PhoneFour.phone;
document.getElementById("name4").innerText=PhoneFour.name;
document.getElementById("price4").innerText=PhoneFour.price;
document.getElementById("original4").innerText=PhoneFour.original;


document.getElementById("phoneone").onclick=function(){
    window.location.href="select.html" + "?" + PhoneOne.itemId 
}

document.getElementById("phonetwo").onclick=function(){
    window.location.href="select.html" + "?" + PhoneTwo.itemId 
}

document.getElementById("phonethree").onclick=function(){
    window.location.href="select.html" + "?" + PhoneThree.itemId 
}

document.getElementById("phonefour").onclick=function(){
    window.location.href="select.html" + "?" + PhoneFour.itemId 
}
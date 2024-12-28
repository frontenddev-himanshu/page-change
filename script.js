// pages
let page1 = document.querySelector(".p-1");
let page2 = document.querySelector(".p-2");
let page3 = document.querySelector(".p-3");




// default
document.querySelector(".default").addEventListener("click", function () {

    page1.style.display = "block"
    page2.style.display = "none";
    page3.style.display = "none";   

})


document.querySelector(".secound").addEventListener("click", function () {

    page2.style.display = "block";
    page1.style.display = "none";
    page3.style.display = "none"

})

document.querySelector(".third").addEventListener("click", function () {

    page3.style.display = "block";
    page1.style.display = "none";
    page2.style.display = "none";

})
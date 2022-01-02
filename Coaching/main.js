let naav = document.querySelector(".header-nav");

function topBar() {
    
    let scr = window.scrollY;

    // console.log(scr);
    if (scr >=39.2) {
        naav.classList.add("fixed");
    }
    else {
        naav.classList.remove("fixed");
        
    }
}
window.onscroll=topBar;





// for form 
let openButton = document.getElementById("view-button");
let closeButton = document.getElementById("close-button");
let overLay = document.getElementById("overlay");
let formDetails = document.getElementById("contact-details");

openButton.addEventListener("click", function () {
    overLay.classList.add("active");
    formDetails.classList.add("active");
});
closeButton.addEventListener("click", function () {
    overLay.classList.remove("active");
    formDetails.classList.remove("active");
});




// let langAra = document.getElementById("arabic");
// langAra.addEventListener("click", function () { 
//     console.log("click");
// })



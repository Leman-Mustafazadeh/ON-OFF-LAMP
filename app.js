const on = document.querySelector(".onn");
const off = document.querySelector(".off");
const img = document.querySelector("img");


on.addEventListener("click",()=>{
    if(img.getAttribute("src")  == "images/Gluehlampe_01_KMJ.png"){
        img.setAttribute("src","images/qiBoG9A5T.jpg");
    }else{
        img.setAttribute("src","images/Gluehlampe_01_KMJ.png");
    };
});




off.addEventListener("click",()=>{
    if(img.getAttribute("src")  == "images/qiBoG9A5T.jpg"){
        img.setAttribute("src","images/Gluehlampe_01_KMJ.png");
    };
})
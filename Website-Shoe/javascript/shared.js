const btn_scroll=document.querySelector(".scroll-page")
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        btn_scroll.classList.add("show-scroll")
    }
    else{
        btn_scroll.classList.remove("show-scroll")
    }
})
//Change navbar styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 0)
})

//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open')
        //CHANGE ICON
const icon = faq.querySelector('.faq_icon i');
if(icon.className === 'uil uil-plus'){
    icon.className = 'uil uil-minus';
} else {
    icon.className = 'uil uil-plus';
}
    })

})


//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const CloseBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {

    menu.classList.toggle('active');
    CloseBtn.classList.toggle('active');
    menuBtn.classList.toggle('active');

})

// CLOSE NAV MENU
CloseBtn.addEventListener('click',() => {
menu.classList.remove('active');
CloseBtn.classList.remove('active');
menuBtn.classList.remove('active');
})

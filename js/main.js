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


// Animate on Scroll


$(document).ready(function(){
    $(".categories").waypoint(function(){
        $('.categories_container').addClass('animate__animated animate__slideInLeft')
        },
        { offset:'50%'

        });

        $(".courses").waypoint(function(){
            $('.course').addClass('animate__animated animate__zoomIn')
            },
            { offset:'50%'
    
            });

            $(".faqs").waypoint(function(){
                $('.faqs_animate').addClass('animate__animated animate__rubberBand')
                },
                { offset:'40%'
        
                });

            $(".faqs").waypoint(function(){
                $('.faqs_container').addClass('animate__animated animate__fadeInUp')
                },
                { offset:'50%'
        
                });
    
                $(".testimonials_container").waypoint(function(){
                    $('.testimonial_anime').addClass('animate__animated animate__fadeInUp')
                    },
                    { offset:'50%'
            
                    });

                    $(".testimonials_container").waypoint(function(){
                        $('.swiper-wrapper').addClass('animate__animated animate__fadeInLeft')
                        },
                        { offset:'50%'
                
                        });
        
                        $("footer").waypoint(function(){
                            $('.footer_container').addClass('animate__animated animate__fadeInLeft')
                            },
                            { offset:'50%'
                    
                            });

})


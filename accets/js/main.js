const showMenu = function(toggleid, menuid){
    const knopka = document.getElementById(toggleid);
    const menu = document .getElementById(menuid);

    if(knopka && menu){
        knopka.addEventListener('click', () =>{
            menu.classList.toggle('show-menu')
            
        })
    }
}
showMenu('toggle', 'header-menu');

const swiper = new Swiper ('.swiper-container', {
    direction:'horizontal',
    // loop: 'true',
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.mainscreen_button-right',
            prevEl: '.mainscreen_button-left'
        },
})
const scrollAnimation = ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  reset: false, 
})

scrollAnimation.reveal('.discount_card-item, .gift_card-item, .footer_item, .social-footer_link', {
  interval: 200,
  rotate: {
    x: 0,
    y: 90,
    z: 0

  },
  scale: .5
})
scrollAnimation.reveal('.discount_tittle', {
  origin: 'left',
  delay: 1000
})
scrollAnimation.reveal('.list-footer_item', {
  origin: 'left',
  delay: 1000
})
scrollAnimation.reveal('.discount_button',{
  origin: 'right',
  delay: 1800
})

scrollAnimation.reveal('.discount_container',{
  origin:'left',
  duration: 1500,
  distance: '600px'
})
document.addEventListener('DOMContentLoaded', function(){
  // слайдер swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      }

    }
  });

  // открывает блоки по клику на кнопку "подробнее"
  const showMoreBtns = document.querySelectorAll('.show-more-btn');
  const moreBlockElems = document.querySelectorAll('.more-block');
  
  for (const btn of showMoreBtns) {
    btn.addEventListener('click', function(event){
      moreBlockElems[event.target.dataset.block-1].classList.remove('d-none');
      event.target.classList.add('d-none');
    })
  }

  // скрывает прайс-лист по кнопке "скрыть"
  const hideBtn = document.querySelector('.hide-btn');
  hideBtn.addEventListener('click', function(){
    moreBlockElems[2].classList.add('d-none');
    showMoreBtns[2].classList.remove('d-none');
  })

  const hideFormBtn = document.querySelector('.hide-form');
  // console.log(document.querySelector('.order-form'))
  hideFormBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    const orderForms = document.querySelectorAll('.order-form');
    orderForms[4].classList.add('d-none');
  })

  // скрывает и показывает форму в стандартной настройке
  const arrowBtn1 = document.querySelector('.arrow-btn--1');
  arrowBtn1.addEventListener('click', () => {
    moreBlockElems[0].classList.add('d-none');
    showMoreBtns[0].classList.remove('d-none');
  });

// скрывает и показывает форму в индвидуальной настройке
  const arrowBtn2 = document.querySelector('.arrow-btn--2');
  arrowBtn2.addEventListener('click', () => {
    moreBlockElems[1].classList.add('d-none');
    showMoreBtns[1].classList.remove('d-none');
  })

// скрывает и показывает форму в продажах
  const arrowBtn3 = document.querySelector('.arrow-btn--3');
  arrowBtn3.addEventListener('click', () => {
    moreBlockElems[3].classList.add('d-none');
    showMoreBtns[3].classList.remove('d-none');
  })  

  // мобильное меню

  const menuBtn = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav');

  menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('d-none');
  })
})

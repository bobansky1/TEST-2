//burger
const dropdown = document.querySelector('.burger-icon');
const btnDrop = document.querySelector('.burger__menu');

dropdown.addEventListener('click', function() {
	btnDrop.classList.toggle('_active');
	dropdown.classList.toggle('_active');
});


//Modal
const modal = document.querySelector('.overlay1');
const checkboxes = document.querySelectorAll('.tariffs__item');
const formBlock = document.getElementById('formBlock');
const successMessage = document.getElementById('successMessage');

function restoreModalVisibility() {
  formBlock.style.display = 'block';
  successMessage.style.display = 'none';
}

function openModal() {
  restoreModalVisibility();
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  checkboxes.forEach((checkbox) => {
    checkbox.classList.remove('active');
  });
}

function showSuccessMessage() {
  formBlock.style.display = 'none';
  successMessage.style.display = 'block';

  setTimeout(function () {
    successMessage.style.display = 'none';
    closeModal();
  }, 2000);
}

checkboxes.forEach((checkbox) => {
  const button = checkbox.querySelector('.tariffs-btn');
  const tariffClass = checkbox.getAttribute('data-tariff');

  button.addEventListener('click', function () {
    openModal();
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.querySelector('.form__modal').addEventListener('submit', function (event) {
  event.preventDefault();
  showSuccessMessage();
});

// Активация маски для поля телефона
document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.querySelector('.phone-input');
  var phoneMask = IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00'
  });
});


//Price change
const checkbox = document.getElementById('chek');
const prices = document.querySelectorAll('.tarisffs__price');

// Слушатель событий для чекбокса
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
      prices.forEach(price => {
          price.textContent = (parseInt(price.textContent) * 11) + 'Р';
      });
  } else {

      prices.forEach((price, index) => {
          const originalPrice = index === 0 ? '500' : '1000';
          price.textContent = originalPrice + 'Р';
      });
  }
});

//GSAP ANIMATION
gsap.set(".header", { y: -200 });
gsap.fromTo(".header", {
  y: -200
}, {
  y: 0,
  duration: 1,
  scrub: 1,
  ease: "power1.inOut"
});

gsap.set(".gsap-item1", { x: -1500 });
gsap.fromTo(".gsap-item1", {
  x: -1500
}, {
  x: 0,
  delay: 1,
  duration: 1,
  scrub: 1,
  ease: "power1.inOut"
});

gsap.set(".gsap-item2", { x: 1800 });
gsap.fromTo(".gsap-item2", {
  x: 1800
}, {
  x: 0,
  delay: 1.2,
  duration: 1,
  scrub: 1,
  ease: "power2.out"
});

gsap.registerPlugin(ScrollTrigger);
gsap.set(".big-img", { x: -1000, scale: 0.5 });
gsap.to(".big-img", {
  scrollTrigger: {
    trigger: ".big-img",
    start: "top bottom",
    end: "center center",
    scrub: 1,

  },
  x: 0,
  duration: 3,
    scale: 1,
  ease: "power1.inOut"
});


gsap.set(".gsap-item5", { x: 1000, scale: 0.5 });
gsap.to(".gsap-item5", {
  scrollTrigger: {
    trigger: ".gsap-item5",
    start: "top bottom",
    end: "center center",
    scrub: 1,

  },
  x: 0,
  duration: 3,
    scale: 1,
  ease: "power1.inOut"
});
gsap.set(".gsap-item6", { x: 1000, scale: 0.5 });
gsap.to(".gsap-item6", {
  scrollTrigger: {
    trigger: ".gsap-item5",
    start: "top bottom",
    end: "bottom center",
    scrub: 1,

  },
  x: 0,
  duration: 3,
    scale: 1,
  ease: "power1.inOut"
});

//animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0 ) {
    let animationFrameId = null;
    window.addEventListener('scroll', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animOnScroll);
    });

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
               
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                    
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    requestAnimationFrame(animOnScroll);
}

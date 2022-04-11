const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
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

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


}





















let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
  let delay = 500;//задержка
  let body=document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
          iconMenu.classList.toggle("_active");
          menuBody.classList.toggle("_active");
  });
};
function menu_close(){
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}


let iconMenu2 = document.querySelector(".icon-menu2");
if (iconMenu2 != null){
  let delay2 = 500;//задержка
  let body2=document.querySelector("body");
  let menuBody2 = document.querySelector(".menu__body2");
  iconMenu2.addEventListener("click", (e) => {
          iconMenu2.classList.toggle("_active2");
          menuBody2.classList.toggle("_active2");
  });
};
function menu_close2(){
  let iconMenu2 = document.querySelector(".icon-menu2");
  let menuBody2 = document.querySelector(".menu__body2");
  iconMenu2.classList.remove("_active2");
  menuBody2.classList.remove("_active2");
}




new Swiper('.special__swiper',{
    navigation: {
        nextEl: '.special-button-next',
        prevEl: '.special-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    
    slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
        360: {
            slidesPerView: 'auto',
            
        },
        505: {
            slidesPerView: 2,
            
        },
        767:{
            slidesPerView: 3,
            
        }
    },
    
})
new Swiper('.purchased__swiper',{
  navigation: {
      nextEl: '.special-button-next',
      prevEl: '.special-button-prev'
  },
  pagination: {
      el: '.swiper-pagination',
      clickable:true,
  },
  
  slidesPerGroup: 1,
  spaceBetween: 20,
  breakpoints: {
      360: {
          slidesPerView: 'auto',
      },
      505: {
          slidesPerView: 2,
          
      },
      767:{
          slidesPerView: 3,
          
      }
  },
  
})








function viewDiv(){
    document.getElementById("div1").style.display = "block";
    document.getElementById("link1").style.display = "none";
  };
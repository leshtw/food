window.addEventListener('DOMContentLoaded', function() {

    // Tabs

	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {

        tabsContent.forEach(item => {
            // item.classList.add('hide');
            // item.classList.remove('show', 'fade');
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        // tabsContent[i].classList.add('show', 'fade');
        // tabsContent[i].classList.remove('hide');
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
});
//modal
const modalOpen = document.querySelectorAll('[data-modalOpen]'),
      modal = document.querySelector('[data-modal]'),
      modalClose = document.querySelector('.modal__close'),
      backModal = document.querySelector('.modal');

function close(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
function open(){

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

      modalOpen.forEach((item)=>{item.addEventListener('click', ()=>{
          open();
          clearInterval(modalTimerId);

}
)});


modalClose.addEventListener('click', close);
backModal.addEventListener('click', close);
document.addEventListener('keydown', (e)=>{
    if(e.code==='Escape' ){   //&& modal.classList.contains() --прверяем добавлен ли класс
        close();
    }
})

const modalTimerId = setTimeout(open, 5000);


//modal-scroll

function modalScroll(){
if(window.pageXOffset + document.documentElement.clientHeight>=document.documentElement.scrollHeight -1){
open();
console.log('2222');
}
}

window.addEventListener('scroll', modalScroll);



// Timer

const deadline = '2022-05-11';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);
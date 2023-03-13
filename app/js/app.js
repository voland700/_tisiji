let slideUp = (target, duration=500) => {

	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout( () => {
				target.style.display = 'none';
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				//alert("!");
	}, duration);
}

/* SLIDE DOWN */
	let slideDown = (target, duration=500) => {

	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout( () => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

	/* TOOGLE */
var slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}



// Product images gallery
if(document.getElementById('prodactImg')){
	let prodactImg = document.getElementById('prodactImg');



	document.querySelectorAll('.goods_img-link').forEach(function(elem){

		elem.addEventListener('click', function(link){
			link.preventDefault();
			link = link.currentTarget;
			href = link.getAttribute('href');
			prodactImg.setAttribute('src', href);
		});

	});


	prodactImg.addEventListener('click', function (item) {

		let mainImgLink = prodactImg.getAttribute('src');
		let gallery = [];
		let imgNamber = 0;
		//let title = '';

		document.querySelectorAll('.goods_img-link').forEach(function(elem, i, ArrLinks){
			let link = elem.getAttribute('href');
			if(mainImgLink == link) imgNamber = i;
			let objFancyBox = {
				src: link,
    			type: 'image',
			}
			gallery.push(objFancyBox);
		});
		new Fancybox(gallery);
		Fancybox.getInstance().jumpTo(imgNamber);
	});
}


document.getElementById('searchBtn').addEventListener('click', function(event){
	event.preventDefault();
	let search = document.getElementById('search');
	let searchBtn = event.currentTarget;

	if (!search.classList.contains('active')){
		slideDown(search, 500);
		search.classList.add('active');
		searchBtn.classList.add('active');
	} else {
		slideUp(search, 500);
		search.classList.remove('active');
		searchBtn.classList.remove('active');
	}
});

document.getElementById('mobMwnuBtn').addEventListener('click', function(event){
	event.preventDefault();
	let btn = document.querySelector('.menu-icon');
	let menuList = document.getElementById('menuList');

	btn.classList.toggle('opened');

	if (!menuList.classList.contains('active')){
		slideDown(menuList, 350);
		menuList.classList.add('active');
	} else {
		slideUp(menuList, 350);
		menuList.classList.remove('active');
	}
});


// Product images gallery
if(document.getElementById('productImg')){
	let productImg = document.getElementById('productImg');



	document.querySelectorAll('.goods_img-link').forEach(function(elem){

		elem.addEventListener('click', function(link){
			link.preventDefault();
			link = link.currentTarget;
			href = link.getAttribute('href');
			productImg.setAttribute('src', href);
		});

	});


	productImg.addEventListener('click', function (item) {
		item.preventDefault();
		let mainImgLink = productImg.getAttribute('src');
		let gallery = [];
		let imgNamber = 0;
		//let title = '';

		document.querySelectorAll('.goods_img-link').forEach(function(elem, i, ArrLinks){
			let link = elem.getAttribute('href');
			if(mainImgLink == link) imgNamber = i;
			let objFancyBox = {
				src: link,
    		type: 'image',
			}
			gallery.push(objFancyBox);
		});
		new Fancybox(gallery);
		Fancybox.getInstance().jumpTo(imgNamber);
	});
}

/*   --------------------------------------------------------------*/
/*  Функция для прокрутки с контролем скорости
/*  --------------------------------------------------------------*/
function scrollToUp(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {

	document.addEventListener("scroll", (event) => {
		let btn = document.querySelector('#upbutton');
		let total = document.documentElement.scrollHeight;
		let current = window.pageYOffset;

		if(total > window.innerHeight){
			if(current > (total*0.6)){
				btn.classList.add('show');
			}else{
				if(btn.classList.contains('show')) btn.classList.remove('show');
			}
		}

		btn.onclick = function (click) {
        click.preventDefault();
        scrollToUp(0, 500);
    }

});





document.querySelectorAll('.hidden-link').forEach(function(elem){

		elem.addEventListener('click', function(link){
			link.preventDefault();
			url = link.currentTarget.getAttribute('data-link');
			//document.location.replace(url);
			window.open(url, '_blank');
			//console.log(href);
		});

	});
});


document.getElementById('askBtn').addEventListener('click', function(event){
	event.preventDefault();

	const modal = document.getElementById('modal');
	const modalForm = document.getElementById('modalForm');
	const inpName = document.getElementById('inpName');
	const inpMail = document.getElementById('inpMail');
	const message = document.getElementById('message');
	const modalBtn = document.getElementById('modalBtn');


	const askNameValid = document.getElementById('askNameValid');
	const askMailValid = document.getElementById('askMailValid');
	
	let valid = true;

	Fancybox.show([{ src: modal, type: "html" }]);






	inpName.onfocus = function () {			
		if (this.classList.contains('invalid')) {
			this.classList.remove('invalid');
			askNameValid.innerText = "";
			valid = true;
		}		
	};

	inpMail.onfocus = function () {

		console.log(askMailValid);		 
		if (this.classList.contains('invalid')) {
			this.classList.remove('invalid');
			askMailValid.textContent = "";
			valid = true;
		}
	};

	 
	modalBtn.addEventListener('click', function(e){
		e.preventDefault();
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if (inpName.value.trim() === '') {
			if (!inpName.classList.contains('invalid')) inpName.classList.add('invalid');
			askNameValid.innerText = 'Укажите Ваше имя';
			valid = false;
		}

		if(reg.test(inpMail.value) == false) {
			if(inpMail.value == ''){
				if (!inpMail.classList.contains('invalid')) inpMail.classList.add('invalid');
				askMailValid.textContent = 'Укажите Ваш E-mail адрес';
				valid = false;
			}	else {
				if (!inpMail.classList.contains('invalid')) inpMail.classList.add('invalid');
				askMailValid.textContent = 'Не корректный E-mail адрес';
				valid = false;
			}			
		} 

		if(valid) {			
			 
			setTimeout(Fancybox.close(), 1000);

			setTimeout(
				Swal.fire({
					title:'Ваше сообщенеи получено!',
					text: 'You clicked the button!',
					icon: 'success',
					timer: 3000,
				}

			  	), 2000);
		}
	});

	

















	
	
	
	
	//console.log(modal);




});




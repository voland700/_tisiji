// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})


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
		item.preventDefault();
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


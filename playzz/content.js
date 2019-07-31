const links = [].slice.call(document.querySelectorAll('#thumbnail'));

links.forEach((link) => {
	link.addEventListener('mouseenter', (e) => console.log(link.search.split('=')[1]));
});

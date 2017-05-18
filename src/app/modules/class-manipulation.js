export function hasClass(elem, cls) {
	const classes = elem.getAttribute('class');

	if(classes === undefined || classes === null) {
		return false;
	}

	return classes.includes(cls);
}

export function addClass(elem, cls) {
	if(!hasClass(elem, cls)) {
		const classes = elem.getAttribute('class');
		const newClass = classes ? `${classes} ${cls}` : cls;

		elem.setAttribute('class', newClass);
	}
}

export function removeClass(elem, cls) {
	if(hasClass(elem, cls)) {
		let classes = elem.getAttribute('class').split(' ');
		const index = classes.indexOf(cls);

		classes.splice(index, 1);

		elem.setAttribute('class', classes.join(' '));
	}
}

export function toggleClass(elem, cls) {
	if(hasClass(elem, cls)) {
		removeClass(elem, cls);
	} else {
		addClass(elem, cls);
	}
}

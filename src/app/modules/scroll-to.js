import { MIN_SCROLL_TIME, MAX_SCROLL_TIME } from '../config';

import { addTick } from '../modules/tick-manager';
import { getViewportDetails } from '../modules/viewport-details';

import { easeInOutBack } from '../utils/easings';

let ticking = false;
let scrolling = false;
let scrollFrom = 0;
let scrollTo = null;
let duration = 0;
let timestamp = 0;
let viewport = getViewportDetails();

export function ScrollTo(target) {
	if(typeof target !== 'number') {
		target = target.offsetTop;
	}

	if(!ticking) {
		ticking = true;
		addTick(tick);
	}
	
	scrollFrom = viewport.scrollY;
	scrollTo = target;

	timestamp = Date.now();
	duration = Math.round(Math.min(Math.max(Math.round(scrollTo), MIN_SCROLL_TIME), MAX_SCROLL_TIME));

	timestamp = Date.now();
	scrolling = true;

	return duration;
}

window.ScrollToo = ScrollTo;

function tick() {
	ticking = true;
	viewport = getViewportDetails();

	if(scrolling) {
		scroll();
	}
}

function scroll() {
	const elapsed = Date.now() - timestamp;

	let scrollY;


	if(scrollFrom > scrollTo) {
		scrollY = scrollFrom - easeInOutBack(elapsed, 0, scrollFrom - scrollTo, duration);
	} else {
		scrollY = scrollFrom + easeInOutBack(elapsed, 0, scrollTo - scrollFrom, duration);
	}

	if(elapsed >= duration) {
		scrolling = false;
		scrollY = scrollTo;
	}

	window.scrollTo(0, scrollY);
}

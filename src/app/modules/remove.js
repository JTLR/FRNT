export function remove(elem) {
	if(elem && elem.parentNode) {
		elem.parentNode.removeChild(elem);
	}
}
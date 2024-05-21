let instances = [];

function onDocumentClick(e, el, fn) {
	let target = e.target;
	if (el !== target && !el.contains(target)) {
		fn(e);
	}
}

export default {
	created(el, binding) {
		el.dataset.outsideClickIndex = instances.length;
		const fn = binding.value;
		const click = function (e) {
			onDocumentClick(e, el, fn);
		};
		document.addEventListener('click', click);
		instances.push(click);
	},
	unmounted(el) {
		const index = el.dataset.outsideClickIndex;
		const handler = instances[index];
		document.addEventListener('click', handler);
		instances.splice(index, 1);
	}
};

function choice(items) {
	const randomIdx = Math.floor(Math.random() * items.length);
	return items[randomIdx];
}

function remove(items, item) {
	for (let i = 0; i <= items.length; i++) {
		if (item === items[i]) {
			items.splice(i, 1);
			return items;
		}
	}
}

export { choice, remove };

function func(text, entities) {
	const parts = [];
	let countOffset = 0;
	
	entities.forEach((el, index) => {
		if (el.type === "bold") {
			parts.push(text.slice(countOffset, el.offset));
			parts.push(`**${text.slice(el.offset, el.offset + el.length)}**`);
			countOffset = el.offset + el.length;
		}
		if (el.type === "italic") {
			parts.push(text.slice(countOffset, el.offset));
			parts.push(`__${text.slice(el.offset, el.offset + el.length)}__`);
			countOffset = el.offset + el.length;
		}
		if (el.type === "text_link") {
			parts.push(text.slice(countOffset, el.offset));
			parts.push(`[${text.slice(el.offset, el.offset + el.length)}](${el.url})`);
			countOffset = el.offset + el.length + el.url.length;
		}
		
		 if (index === entities.length - 1) {
			parts.push(text.slice(countOffset, text.length));
		}
		
	})

	return parts.join("");
}


module.exports = func;
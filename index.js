function func(text, entities) {
	const parts = [];
	let countOffset = 0;
	
	entities.forEach((el, index) => {
		
		parts.push(text.slice(countOffset, el.offset));
		
		checkType(el, "bold", "**")
		checkType(el, "italic", "__")
		checkType(el, "text_link", "[", "]", el.url)
		
		if (index === entities.length - 1) {
			parts.push(text.slice(countOffset, text.length));
		}
		
	})

	function checkType(obj, type, char, char2 = "", url = "") {
			if (obj.type === type) {
			parts.push(`${char}${text.slice(obj.offset, obj.offset + obj.length)}${char2?char2:char}` 
			+ `${url ? "(" + url + ")" : ""}`);
			countOffset = obj.offset + obj.length
		}
	}
	
	
	
	return parts.join("");
}


module.exports = func;
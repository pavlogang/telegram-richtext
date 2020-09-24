
const formaters = {
	bold: (text) => "**" + text + "**",
	italic: (text) => "*" + text + "*",
	text_link: (text, entity) => "[" + text + "](" + entity.url + ")",
	underline: (text) => "++" + text + "++",
	strikethrough: (text) => "~~" + text + "~~",
	code: (text) => "`" + text + "`",
};

function applyEntities(text, entities) {
	const parts = [];
	let currentOffset = 0;
	
	for (const entity of entities) {
		parts.push(text.slice(currentOffset, entity.offset));
		
		const formatter = formaters[entity.type];
		if (formatter === undefined) continue;
		
		const fragment = text.slice(entity.offset, entity.offset + entity.length);
		const formatted = formatter(fragment, entity);
		parts.push(formatted);
		
		currentOffset = entity.offset + entity.length;
	}
	
	if (currentOffset !== text.length){
		parts.push(text.slice(currentOffset, text.length));
	}
	
	return parts.join("");
}


module.exports = applyEntities;
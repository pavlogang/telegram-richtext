const func = require('./index');

test("example 1", () => {
	const text = "бла бла бла жир бла бла бла";
	const entities = [
		{
			offset: 0,
			length: 3,
			type: "italic",
		},
		{
			offset: 12,
			length: 3,
			type: "bold",
	},
];
	expect(func(text, entities)).toBe("*бла* бла бла **жир** бла бла бла");
});
test('example 2', () => {
	const text = "#дневник тест3 мяу мяу длдлдл ссылка";
	const entities = [{
			"offset": 0,
			"length": 8,
			"type": "hashtag"
		},
		{
			"offset": 9,
			"length": 5,
			"type": "bold"
		},
		{
			"offset": 19,
			"length": 3,
			"type": "bold"
		},
		{
			"offset": 23,
			"length": 6,
			"type": "italic"
		},
		{
			"offset": 30,
			"length": 6,
			"type": "text_link",
			"url": "https://google.com/"
		}
	]

	expect(func(text, entities)).toBe("#дневник **тест3** мяу **мяу** *длдлдл* [ссылка](https://google.com/)");
});

test("example 3", () => {
	const text = "бла бла бла ссылка бла бла бла";
	const entities = [
		{
			offset: 12,
			length: 6,
			type: "text_link",
			url: "https://google.com/",
		},
	];
	expect(func(text, entities)).toBe("бла бла бла [ссылка](https://google.com/) бла бла бла");
});

test("example 4", () => {
	const text = "бла бла бла ссылка подчёркнутый моноширинный зачёркнутый";
	const entities = [{
		offset: 12,
		length: 6,
		type: "text_link",
		url: "https://google.com/",
	},
	{
		offset: 19,
		length: 12,
		type: "underline",
	},
	{
		offset: 32,
		length: 12,
		type: "code",
	},
	{
		offset: 45,
		length: 11,
		type: "strikethrough", 
	},
 ];
	expect(func(text, entities)).toBe("бла бла бла [ссылка](https://google.com/) ++подчёркнутый++ `моноширинный` ~~зачёркнутый~~");
});

test("example 5", () => {
const text = "я жирный #дневник";
	const entities = [
		{
			offset: 2,
			length: 3,
			type: "bold",
		},
		{
			offset: 9,
			length: 8,
			type: "hashtag",
		},
	];
	expect(func(text, entities)).toBe("я **жир**ный #дневник");
});
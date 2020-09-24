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
	expect(func(text, entities)).toBe("__бла__ бла бла **жир** бла бла бла");
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

	expect(func(text, entities)).toBe("#дневник **тест3** мяу **мяу** __длдлдл__ [ссылка](https://google.com/)");
});
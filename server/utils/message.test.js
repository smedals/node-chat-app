var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Admin';
		var text = 'Hello From Test';

		var messageObject = generateMessage(from, text);
		expect(messageObject.from).toBe(from);
		expect(messageObject.text).toBe(text);
		expect(typeof messageObject.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Admin';
		
		var messageObject = generateLocationMessage(from, 1, 1);
		expect(messageObject.from).toBe(from);
		expect(typeof messageObject.createdAt).toBe('number');
		expect(messageObject.url).toBe('https://www.google.com/maps?q=1,1');
	});
})
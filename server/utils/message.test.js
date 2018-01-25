var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Admin';
		var text = 'Hello From Test';

		var messageObject = generateMessage(from, text);
		expect(messageObject.from).toBe(from);
		expect(messageObject.text).toBe(text);
		expect(typeof messageObject.createdAt).toBe('number');
	});
})
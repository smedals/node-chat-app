const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: 1,
			name: 'Mike',
			roomName: 'Node Course'
		}, {
			id: 2,
			name: 'Jen',
			roomName: 'React Course'
		},{
			id: 3,
			name: 'Julie',
			roomName: 'Node Course'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Steve', 
			roomName: 'the office fans'
		};
		var resUser = users.addUser(user.id,user.name,user.roomName);
		expect(users.users).toEqual([user]);
	});

	it('should return names for nodes course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual(['Mike', 'Julie']);
	});

	it('should return names for react course', () => {
		var userList = users.getUserList('React Course');
		expect(userList).toEqual(['Jen']);
	});

	it('should remove a user', () => {
		var userId = 1;
		var user = users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = 99;
		var user = users.removeUser(userId);
		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);

	});

	it('should find user', () => {
		var user = users.getUser(1);
		expect(user).toEqual(users.users[0]);
	});

	it('should not find user', () => {
		var user = users.getUser(44);
		expect(user).toBeFalsy();
	});
})
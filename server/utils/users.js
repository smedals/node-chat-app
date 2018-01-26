
// addUser(id, name, roomName)

// removeUser(id)

// getUser(id)

// getUserList(roomName)

class Users {
	constructor () {
		this.users = [];
	}

	addUser(id, name, roomName) {
		var user = {id, name, roomName};
		this.users.push(user);
		return user;
	}

	removeUser(id) {
		var user = this.getUser(id);

		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
		}
		return user;
	}

	getUser(id) {
		return this.users.filter((user) => user.id === id)[0];
	}

	getUserList(roomName) {
		var users = this.users.filter((user) => {
			return user.roomName === roomName;
		});

		var namesArray = users.map((user) => {
			return user.name;
		});

		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription() {
// 		return `${this.name} is ${this.age} year(s) old`;
// 	}
// }

// var me = new Person('Steve', 50);

// console.log('this.name: ',me.name);
// console.log('this.age: ',me.age);

// var desc = me.getUserDescription();
// console.log(desc);
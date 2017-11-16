import {observable , action, computed, autorun} from 'mobx';

class Person {
	@observable name
	@observable id
	@observable email

	constructor(person) {
		this.name = person.name
		this.id = Date.now()
		this.email = person.email
		this.registered = person.registered,
		this.address= {
			city: person.address.city,
			country: person.address.country,
			zip: person.address.zip,
		}
	}
}

class personStore{
	@observable persons = [];
	@observable filter = '';
	@observable aperson = {
		name: "imran",
		email: 'imran09@gmail.com',
		registered: true,
		address: {
			city: '',
			country: 'bangladesh',
			zip: ''
		}
	}
	@computed get filteredPerson (){
		let matchPerson = new RegExp(this.filter, "i")
		return this.persons.filter(person=> !this.filter|| matchPerson.test(person.name))
	}
	@computed get unRegisteredPersons() {
		return this.persons.filter(person=> !person.registered).length
	}
	@action addTodo(value){
		this.persons.push(new Person(value))
	}
	clearComplete =()=> {
		let registered = this.persons.filter(person=> {
			return !person.registered
		})
		this.persons.replace(registered)
	}
};

const persons = window.store = new personStore();
export default persons;
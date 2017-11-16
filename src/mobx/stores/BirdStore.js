import {observable , action, computed, autorun} from 'mobx';
import {observer} from 'mobx-react';

class BirdStore {
	@observable birds = [];

	@action addBird = (bird) => {
		this.birds.push(bird)
	}

	@computed get birdCount() {
		console.log(this.birds);
		return this.birds.length;
	}
}
const store = new BirdStore();

export default store;



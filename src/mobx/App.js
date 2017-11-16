import React from 'react'
import {Provider} from 'mobx-react'
// import Todos from './todos/Todos';
// import BirdCase from './birdcase/BirdCase';
import TestMobx from './test/TestModule'
import TestAction from './test/TestAction'
import Forms from './forms/Forms'
//import BirdStore from './stores/BirdStore'
//import TodoStore from './stores/TodoStore'
import testStore from './stores/TestStore'
import testAtionStore from './stores/testActionStore'
import PersonStore from './stores/PersonStore'
/*import Main from './Main'*/
 const store= {
 	testStore:testStore,
 	testAtionStore:testAtionStore,
 	PersonStore: PersonStore
 }
 const MobxRoot = () =>
 <Provider store={store}> 
 	<div>
 		{/*<BirdCase/>*/}
 		{/*<div className ="container">
 			<Test />
 		</div>*/}
 		{/*<TestMobx />
 		 		<TestAction />*/}
 		<Forms />
 	</div>
 </Provider> 
const App = () => (
 <MobxRoot /> 
)

export default App
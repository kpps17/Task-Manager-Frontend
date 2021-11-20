import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Tasks from "./Components/Tasks/Tasks";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/signup'component={Signup} exact></Route>
					<Route path='/'component={Login} exact></Route>
					<Route path='/tasks' component={Tasks}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/signup'component={Signup} exact></Route>
					<Route path='/login'component={Login} exact></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

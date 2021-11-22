import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Tasks from "./Components/Tasks/Tasks";
import AuthState from "./Context/Auth/AuthState";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth/AuthContext";

function App() {
	return (
		<AuthState>
			<Router>
				<div className='App'>
					<Switch>
						<Route path='/signup' component={Signup} exact></Route>
						<Route path='/login' component={Login} exact></Route>
						<PrivateRoute path='/' component={Tasks}></PrivateRoute>
					</Switch>
				</div>
			</Router>
		</AuthState>
	);
}

function PrivateRoute(props) {
	let { comp: Component, path } = props;
	let { isAuthenticated } = useContext(AuthContext);
	return isAuthenticated ? <Route path={path} component={Component}></Route> : <Redirect to="/login"></Redirect>;
}


export default App;

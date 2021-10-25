// css 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// router 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// routes 
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Reset from "./Components/Reset/Reset";
import Signup from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Dash from "./Components/Dash/Dash";
import WellDone from './Components/SignUp/WellDone';
import Footer from './Components/Footer/Footer';
import FourOfour from './Components/404/404';
import ServicePage from './Components/ServicePage/ServicePage';
import Services from './Components/Services/Services';
// custom route 
import LoginRoute from "./Routes/LoginRoute";
import ValidateRoute from './Routes/ValidateRoute';
import DashRoute from './Routes/DashRoute';
import SignUpRoute from './Routes/SignUpRoute';
import ServiceRoute from './Routes/ServiceRoute';
import ServiceDisplayRoute from './Routes/ServiceDisplayRoute';
// context provider 
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <ServiceRoute path="/services/:serviceID">
              <ServicePage></ServicePage>
            </ServiceRoute>
            <ServiceDisplayRoute path="/showServices">
              <Services></Services>
            </ServiceDisplayRoute>
            <SignUpRoute path="/signup">
              <Signup></Signup>
            </SignUpRoute>
            <LoginRoute path="/login">
              <Login></Login>
            </LoginRoute>
            <Route path="/reset-your-password-here-right-nwo-right-away-ll-aboard-get-ready-sit-tight">
              <Reset></Reset>
            </Route>
            <DashRoute path="/dashboard">
              <Dash></Dash>
            </DashRoute>
            {/* must be a private route */}
            {/* must be user specific */}
            <ValidateRoute path="/verifymail">
              <WellDone></WellDone>
            </ValidateRoute>
            <Route path="/*">
              <FourOfour></FourOfour>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
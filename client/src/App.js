import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"; // Previous navbar component
import HomeNavbar from "./components/HomeNavbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LandingScreen from "./screens/LandingScreen";
import ResultsPage from "./screens/ResultsPage"; // Import the ResultsPage component

import "./App.css"

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <LandingScreen />
          </Route>
          <Route path="/home" exact>
            <div className="Home">
            <HomeNavbar />
            <Homescreen />
            </div>
          </Route>
          {/* Render other routes with the new navbar */}
          <Route
            path="/book/:roomid/:fromdate/:todate"
            exact
            component={Bookingscreen}
          />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/bookings" exact component={ProfileScreen} />
          <Route path="/admin" exact component={AdminScreen} />
          {/* Add route for ResultsPage */}
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import Departments from "./pages/Departments/Department/Department";
import Doctors from "./pages/Doctors/Doctor/Doctor";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./pages/Private/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

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
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

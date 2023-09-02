// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Reports from './views/Reports';
import Expenses from './views/Expenses';
import FrontOffice from './views/FrontOffice';
import Income from './views/Income';
import HumanResource from './views/HumanResource';
import Home from './views/Home';
// import Footer from './components/Footer';
import Attendance from './views/Attendance';
import Building from './views/Building';
import Transport from './views/Transport';
import Pos from "./views/Pos";
import Profile from './views/Profile';
import EditProfile from './components/forms/profile/BasicInfo'

import { Redirect, Route, Switch } from 'react-router';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/frontoffice" component={FrontOffice}></Route>
        <Route exact path="/reports" component={Reports}></Route>
        <Route exact path="/expenses" component={Expenses}></Route>
        <Route exact path="/income" component={Income}></Route>
        <Route exact path="/attendance" component={Attendance}></Route>
        <Route exact path="/Humanresource" component={HumanResource}></Route>
        <Route exact path="/Transport" component={Transport}></Route>
        <Route exact path="/Profile" component={Profile}></Route>
        <Route exact path="/Profile/edit" component={EditProfile}></Route>
        <Route exact path="/building" component={Building}></Route>
        <Route exact path="/pos" component={Pos}></Route>

        <Redirect to ="/" />
      </Switch>
      {/* <Footer/> */}
      </>
  );
}

export default App;

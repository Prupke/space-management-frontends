import logo from './logo.svg';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import './App.css';
import Toolinformation from './components/Toolinformation';
import { Route } from 'react-router-dom';
import AddReparation from './AddReparation';

function App() {
  return (
    <div className="App">
    <Header />
    <Toolinformation addbtn='Reparatie aanmaken' toolname='Reparaties'/>
    <Menu />

    {/*The code here below is a route for AddReparation but it is not working yet*/}
    {/* <Route exact path='/AddReparation' component={AddReparation} /> */}
  </div> 
  );
}

export default App;

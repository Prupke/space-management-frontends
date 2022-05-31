import Menu from './components/Menu';
import Header from './components/Header'
import Toolinformation from './components/Toolinformation';
import ScrollMenu from './components/ScrollMenu';

function Reparaties() {
    return (
      <div className="Reparaties">
        <Header />
        <Toolinformation toolname={'Reparaties'}/>
        <ScrollMenu scrollTitle={'Reparaties'}/>
        <Menu />
    </div> 
    );
  }
  
  export default Reparaties;
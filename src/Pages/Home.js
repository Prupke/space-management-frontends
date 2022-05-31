import Menu from './components/Menu';
import Header from './components/Header'
import Toolinformation from './components/Toolinformation';

function Home() {
    return (
      <div className="Home">
        <Header />
        {/* <Toolinformation addbtn='Reparatie aanmaken' toolname='Reparaties'/> */}
        <Menu />
        <h1>hi there this is the home page</h1>
    </div> 
    );
  }
  
  export default Home;
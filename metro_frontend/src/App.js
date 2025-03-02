import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Mainpage from './Mainpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Mainpage/>
      <Footer/>
    </div>
  );
}

export default App;

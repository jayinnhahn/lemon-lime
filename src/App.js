import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar/>
      <div className="mt-20 lg:px-40">
        <Home/>
        <Menu/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-[#F5F5F5] mt-20 lg:px-40">
        <Home/>
        <Menu/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

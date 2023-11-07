import './App.css';
import Navbar from './components/navbar/Navbar';
import ShoesImg from './components/shoes/ShoesImg';
import ShopNow from './components/shopnow/ShopNow';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <ShopNow/>
      <ShoesImg/>
    </div>
  );
}

export default App;

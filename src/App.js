import Category from './component/Category';
import Collection from './component/Collection';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Header from './component/Header';
import Home from './component/Home';
import Offer from './component/Offer';
import Offers from './component/Offers';
import Populars from './component/Populars';
import './style.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <Populars/>
      <Category/>
      <Gallery/>
      <Offer/>
      <Collection/>
      <Offers/>
      <Footer/>

    </div>
  );
}

export default App;

import './App.css';
import Banner from './components/Banner/Banner';
import Collections from './components/Banner/CollectionBanner/Collections';
import DiscountBanner from './components/Banner/DiscountBanner.js/DiscountBanner';
import TrendingBanner from './components/Banner/TrendingBanner/TrendingBanner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutSection from './components/Sections/AboutSection';
import OfferSection from './components/Sections/OfferSection';
import Products from './components/Sections/Products';

function App() {
  const offerimage={
    image:'https://cdn-icons-png.flaticon.com/512/1611/1611337.png',
    para:'Ordered Before Now',
    span:"Don't miss out on great discounts"
  }
  const savemoney={
    image:'https://cdn-icons-png.flaticon.com/512/1611/1611337.png',
    para:'Save Money',
    span:"Get the new trend at fraction"
  }
  const profile={
    image:'https://cdn-icons-png.flaticon.com/512/16/16363.png',
    para:'1000+ Customers',
    span:"Order are placed every minutes"
  }
  return (
    <div className='page'>
    <Header />
    <Banner />
    <div className='offerSections'>
    <OfferSection obj={offerimage} />
    <OfferSection obj={savemoney} />
    <OfferSection obj={profile} />
    </div>
    <Products />
    <DiscountBanner />
    <Collections />
    <TrendingBanner />
    <AboutSection />
    <Footer />
    </div>
  );
}

export default App;

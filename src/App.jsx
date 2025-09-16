import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/product" exact component={ProductPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

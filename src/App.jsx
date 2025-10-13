import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import instance from "./api/axios";
import { setUser } from "./store/clientActions";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  let savedUser = null;
  try {
    const savedUserString = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (savedUserString && savedUserString !== "undefined") {
      savedUser = JSON.parse(savedUserString);
    }
  } catch (err) {
    console.error("User parse hatası:", err);
  }

  if (token && savedUser) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    dispatch(setUser(savedUser));
  }
}, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/product" exact component={ProductPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/team" exact component={TeamPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/signin" exact component={SigninPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

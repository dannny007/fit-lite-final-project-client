import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Updates from "./pages/updates/Updates";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./components/productList/ProductList";
import ProductList from "./components/productList/ProductList";
import ProductDetail from "./components/productDetail/ProductDetail";
import SearchResults from "./components/searchResults/SearchResults";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import OrderSuccess from "./pages/checkout/OrderSuccess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import AboutPage from "./pages/about/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="updates" element={<Updates />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="shop" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;

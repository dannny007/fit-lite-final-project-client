import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/final-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  const [cartCount, setCartCount] = useState(3);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const updateUserInfo = () => {
      const user = localStorage.getItem("user");
      if (user) {
        setUserInfo(JSON.parse(user));
      }
    };

    updateUserInfo();
    if (isUserLoggedIn) {
      updateUserInfo();
    }

    window.addEventListener("storage", updateUserInfo);

    return () => {
      window.removeEventListener("storage", updateUserInfo);
    };
  }, [isUserLoggedIn]);

  const mainCategories = [
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Sport", path: "/sport" },
    { name: "Accessories", path: "/accessories" },
    { name: "Sale", path: "/sale" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsUserLoggedIn(false);
    setUserInfo(null);
    navigate("/");
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-customPurple to-purple-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <LocalShippingIcon fontSize="small" />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadsetMicIcon fontSize="small" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isUserLoggedIn && userInfo && (
              <span className="text-white/80">Welcome, {userInfo.email}</span>
            )}
            <span className="hidden md:inline">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-customNavbar shadow-lg ">
        <div className="container mx-auto px-4">
          {/* Upper Navbar */}
          <div className="flex items-center justify-between py-0">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
              <div
                onClick={() => handleNavigation("/")}
                className="text-white text-2xl font-bold cursor-pointer hover:text-customPurple transition-all duration-300 flex items-center gap-2"
              >
                {/* <LocalMallIcon /> */}
                {/* <span>FITlite</span> */}
                <img src={logo} width={250} />
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center flex-1 max-w-2xl mx-12"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-5 py-2.5 bg-white/10 text-white rounded-lg border border-white/20 
                  placeholder-white/50 focus:outline-none focus:border-customPurple focus:ring-2 
                  focus:ring-customPurple/50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 
                  hover:text-customPurple transition-colors duration-300"
                >
                  <SearchIcon />
                </button>
              </div>
            </form>

            {/* Right Icons - Desktop & Mobile */}
            <div className="flex items-center space-x-6">
              {/* Cart Icon - Always visible */}
              <button
                onClick={() => handleNavigation("/cart")}
                className="text-white hover:text-customPurple p-2 rounded-full 
                    hover:bg-white/5 transition-all duration-300 relative"
                title="Cart"
              >
                <ShoppingCartIcon />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-customPurple text-white 
                      text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {isUserLoggedIn ? (
                  <>
                    <button
                      onClick={() => handleNavigation("/wishlist")}
                      className="text-white hover:text-customPurple p-2 rounded-full 
                        hover:bg-white/5 transition-all duration-300"
                      title="Wishlist"
                    >
                      <FavoriteIcon />
                    </button>
                    <div className="relative group">
                      <button
                        className="text-white hover:text-customPurple p-2 rounded-full 
                        hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                      >
                        <PersonOutlineIcon />
                        <span className="text-sm">{userInfo?.email}</span>
                      </button>
                      <div
                        className="absolute right-0 top-full mt-2 w-56 bg-customNavbar border 
                        border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 
                        group-hover:visible transition-all duration-300 transform origin-top scale-95 
                        group-hover:scale-100"
                      >
                        <div className="p-2">
                          <button
                            onClick={() => handleNavigation("/dashboard")}
                            className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 
                          w-full text-left rounded-lg transition-colors duration-300"
                          >
                            <DashboardIcon fontSize="small" />
                            <span>Dashboard</span>
                          </button>
                          <button
                            onClick={() => handleNavigation("/orders")}
                            className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 
                          w-full text-left rounded-lg transition-colors duration-300"
                          >
                            <LocalMallIcon fontSize="small" />
                            <span>Orders</span>
                          </button>
                          <button
                            onClick={() => handleNavigation("/support")}
                            className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 
                          w-full text-left rounded-lg transition-colors duration-300"
                          >
                            <SupportAgentIcon fontSize="small" />
                            <span>Support</span>
                          </button>
                          <hr className="my-2 border-white/10" />
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-3 text-white hover:bg-red-500/10 
                          hover:text-red-500 w-full text-left rounded-lg transition-colors duration-300"
                          >
                            <LogoutIcon fontSize="small" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleNavigation("/login")}
                      className="text-white hover:text-customPurple px-4 py-2 rounded-lg 
                        hover:bg-white/5 transition-all duration-300"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavigation("/signup")}
                      className="bg-customPurple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                        hover:shadow-customPurple/20"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Categories - Desktop */}
          <div className="hidden md:flex items-center justify-between py-3 border-t border-white/10">
            {mainCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleNavigation(category.path)}
                className={`text-white hover:text-customPurple transition-all duration-300 px-4 py-2 
                rounded-lg hover:bg-white/5 ${
                  location.pathname === category.path
                    ? "bg-white/10 text-customPurple"
                    : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 
${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        >
          {/* Menu Content */}
          <div
            className={`fixed right-0 top-0 h-full w-[80%] max-w-[400px] bg-customNavbar shadow-xl transform transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white text-xl font-bold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-customPurple p-2 rounded-full hover:bg-white/5"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-white/10">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 bg-white/10 text-white rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customPurple"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </form>
            </div>

            {/* Mobile User Info */}
            {isUserLoggedIn && userInfo && (
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <PersonOutlineIcon className="text-white" />
                  <div className="text-white">
                    <div className="font-medium">{userInfo.email}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Navigation */}
            <div className="overflow-y-auto h-full">
              {/* Categories */}
              <div className="p-4 space-y-2">
                {mainCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      navigate(category.path);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left flex items-center space-x-2 px-4 py-3 rounded-lg 
          text-white hover:bg-white/10 transition-colors duration-200
          ${
            location.pathname === category.path
              ? "bg-white/10 text-customPurple"
              : ""
          }`}
                  >
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="p-4 border-t border-white/10">
                <div className="space-y-2">
                  {isUserLoggedIn ? (
                    <>
                      <button
                        onClick={() => {
                          navigate("/dashboard");
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg"
                      >
                        <DashboardIcon fontSize="small" />
                        <span>Dashboard</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/orders");
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg"
                      >
                        <LocalMallIcon fontSize="small" />
                        <span>Orders</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/wishlist");
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg"
                      >
                        <FavoriteIcon fontSize="small" />
                        <span>Wishlist</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/support");
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg"
                      >
                        <SupportAgentIcon fontSize="small" />
                        <span>Support</span>
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg text-red-400 hover:text-red-500"
                      >
                        <LogoutIcon fontSize="small" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          navigate("/login");
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-3 text-white hover:text-customPurple transition-colors duration-300 rounded-lg hover:bg-white/5"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => {
                          navigate("/signup");
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-3 bg-customPurple text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Footer Info */}
              <div className="p-4 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <LocalShippingIcon fontSize="small" />
                    <span>Free Shipping Over $50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <HeadsetMicIcon fontSize="small" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Outside Main Nav */}
      <div
        className={`md:hidden bg-customNavbar transition-all duration-300 ${
          showSearch ? "max-h-20" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-customPurple"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

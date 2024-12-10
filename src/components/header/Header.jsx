import backgroundImage from "../../assets/images/header.jpg";

function Header() {
  return (
    <div className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-white text-5xl font-bold mb-4 text-center font-koho">
        FITlite WELCOMES YOU
        <br />
        <span className="text-3xl text-white text-opacity-50">GEAR UP! GLOW UP! FLUSH IT!</span>
      </h1>
      <div className="relative flex space-x-4">
        <button className="bg-white bg-opacity-50 text-white py-2 px-4 rounded text-lg">
          Learn More
        </button>
        <button className="bg-white text-black py-2 px-4 rounded text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
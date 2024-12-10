import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/black-white-photo-group-athletes-exercising-with-weight-bars-sports-training-gym.jpg";
import image2 from "../../assets/images/high-angle-gym-outfit-dumbbells.jpg";
import image3 from "../../assets/images/modern-equipment-gym-indoors-interior-fitness-hall-with-fitness-bicycles.jpg";
import image4 from "../../assets/images/sportive-young-woman-doing-exercise-with-dumbbell-fitness-center.jpg";
import image5 from "../../assets/images/unrecognizable-muscular-build-man-preparing-his-hands-with-talcum-powder-weight-training-health-club-focus-is-hand.jpg";
import image6 from "../../assets/images/view-smartphone-with-weights-yoga-mat.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Slide = ({ image, alt, text }) => (
  <div className="slide p-2">
    <div className="slide-content relative flex justify-center items-center h-full bg-blue-900 rounded-lg">
      <img
        src={image}
        alt={alt}
        className="slide-image w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
        <div className="text-white p-4 rounded">{text}</div>
      </div>
    </div>
  </div>
);

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Arrows are disabled
  };

  const images = [
    { src: image1, alt: "Slide 1", text: "Text for Slide 1" },
    { src: image2, alt: "Slide 2", text: "Text for Slide 2" },
    { src: image3, alt: "Slide 3", text: "Text for Slide 3" },
    { src: image4, alt: "Slide 4", text: "Text for Slide 4" },
    { src: image5, alt: "Slide 5", text: "Text for Slide 5" },
    { src: image6, alt: "Slide 6", text: "Text for Slide 6" },
  ];

  return (
    <div className=" slider-container bg-customNavbar px-0 py-32">
      <div className=" container mx-auto ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Slide
              key={index}
              image={image.src}
              alt={image.alt}
              text={image.text}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomArrows;

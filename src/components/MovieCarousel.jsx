// import React from "react";
// import { Carousel } from "react-bootstrap";
// import movie1 from "../assets/add1.avif";
// import movie2 from "../assets/adds.avif";
// import movie3 from "../assets/add1.avif"; // Add new images to assets folder
// import movie4 from "../assets/adds.avif";

// const MovieCarousel = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img className="d-block w-100" src={movie1} alt="Movie 1" />
//         <Carousel.Caption>
//           <h3>Movie Title 1</h3>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block w-100" src={movie2} alt="Movie 2" />
//         <Carousel.Caption>
//           <h3>Movie Title 2</h3>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block w-100" src={movie3} alt="Movie 3" />
//         <Carousel.Caption>
//           <h3>Movie Title 3</h3>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block w-100" src={movie4} alt="Movie 4" />
//         <Carousel.Caption>
//           <h3>Movie Title 4</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

import React from "react";
import { Carousel } from "react-bootstrap";
// import "../Carousel.css";

import add1 from "../assets/adds.avif";
import adds from "../assets/add1.avif";
import add3 from "../assets/add3.avif";
import add4 from "../assets/add4.avif";


const MovieCarousel = () => {
  return (
    <div className="container-fluid p-0">  {/* Ensures full width */}
      <Carousel className="custom-carousel" indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={add1} alt="Ad 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={adds} alt="Ad 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={add3} alt="Ad 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={add4} alt="Ad 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieCarousel;




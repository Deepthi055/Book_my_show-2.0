// // import React from "react";
// // import MovieCarousel from "../components/MovieCarousel";
// // // import "./Home.css"; 
//  import movie1 from "../assets/movie1.jpg";
//  import movie2 from "../assets/movie2.jpg";

// // const Home = () => {
// //   return (
// //     <div className="home-container container text-center">
// //       <h1 className="title">Welcome to Book My Show</h1>
// //       <p className="subtitle">Your Gateway to Entertainment</p>
      
// //       <MovieCarousel />

// //       {/* Trending Movies Section */}
// //       <div className="trending-section">
// //         <h2>🔥 Trending Movies</h2>
// //         <div className="movie-grid">
// //           <div className="movie-card">
// //             <img src="movie1.jpg" alt="Movie 1" />
// //             <h3>Movie Title</h3>
// //             <button className="book-now">Book Now</button>
// //           </div>
// //           <div className="movie-card">
// //             <img src="movie2.jpg" alt="Movie 2" />
// //             <h3>Movie Title</h3>
// //             <button className="book-now">Book Now</button>
// //           </div>
// //           {/* Add more movie cards here */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from "react";
// import MovieCarousel from "../components/MovieCarousel"; // Ensure the correct path

// const Home = () => {
//   return (
//     <div style={{ paddingTop: "80px" }}> 

//       {/* Hero Section */}
//       <div
//         className="hero-section text-white text-center d-flex align-items-center justify-content-center"
//         style={{
//           backgroundImage: `url('/images/banner.jpg')`,
//           height: "60vh",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="overlay"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <div className="container">
//             <h1 className="display-4">Welcome to Book My Show</h1>
//             <p className="lead">Your Ultimate Movie Experience</p>
//             <a href="/movies" className="btn btn-primary btn-lg">
//               Book Tickets
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Movie Carousel */}
//       <div className="container my-5">
//         <MovieCarousel />
//       </div>

//       {/* Movie Listings */}
//       <div className="container my-5">
//         <h2 className="text-center mb-4">Now Showing</h2>
//         <div className="row">
//           {[
//             { id: 1, title: "Movie 1", img: "../assets/movie1.jpg" },
//             { id: 2, title: "Movie 2", img: "../assets/movie2.jpg" },
//             { id: 3, title: "Movie 3", img: "../assets/movie3.jpg" },
//             { id: 4, title: "Movie 4", img: "../assets/movie4.jpg" },
//           ].map((movie) => (
//             <div key={movie.id} className="col-md-3">
//               <div className="card">
//                 <img src={movie.img} className="card-img-top" alt={movie.title} />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{movie.title}</h5>
//                   <button className="btn btn-danger">Book Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-3">
//         <p>© 2025 CineZone. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// // 
// import React from "react";
// import MovieCarousel from "../components/MovieCarousel";
// // import "../src/Home.css"; // Make sure to create this CSS file
// import "../Home.css";

// import movie1 from "../assets/movie1.jpg";
// import movie2 from "../assets/movie2.jpg";
// import movie3 from "../assets/movie3.jpg";
// import movie4 from "../assets/movie4.jpg";

// const Home = () => {
//   return (
//     <div style={{ paddingTop: "80px" }}> 

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-overlay">
//           <h1>Welcome to Book My Show</h1>
//           <p>Your Ultimate Movie Experience</p>
//           <a href="/movies" className="btn btn-danger btn-lg">
//             Book Tickets
//           </a>
//         </div>
//       </div>

//       {/* Movie Carousel */}
//       <div className="container my-5">
//         <MovieCarousel />
//       </div>

//       {/* Trending Movies Section */}
//       <div className="container">
//         <h2 className="section-title">🔥 Trending Movies</h2>
//         <div className="movie-grid">
//           {[movie1, movie2, movie3, movie4].map((movie, index) => (
//             <div key={index} className="movie-card">
//               <img src={movie} alt={`Movie ${index + 1}`} />
//               <div className="movie-info">
//                 <h5>Movie {index + 1}</h5>
//                 <button className="book-now">Book Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2025 BookMyShow-2.0. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import "../Home.css"; // Ensure the CSS file exists

import movie1 from "../assets/movie8.jpg";
import movie2 from "../assets/movie9.jpg";
import movie3 from "../assets/movie7.jpg";
import movie4 from "../assets/movie6.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie1.jpg";
import movie7 from "../assets/movie2.jpg";
import movie8 from "../assets/movie4.jpg";

const Home = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Book My Show</h1>
          <p>Your Ultimate Movie Experience</p>
          <a href="/movies" className="btn btn-danger btn-lg">
            Book Tickets
          </a>
        </div>
      </div>

      {/* Movie Carousel - Full Width */}
      <div className="container-fluid my-5">
        <MovieCarousel />
      </div>

      {/* Trending Movies Section */}
      <div className="container trending-container">
        <h2 className="section-title">🔥 Trending Movies</h2>
        <div className="movie-grid">
          {[movie1, movie2, movie3, movie4,movie5,movie6,movie7,movie8].map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie} alt={`Movie ${index + 1}`} className="movie-image" />
              <div className="movie-info">
                <h5>Movie {index + 1}</h5>
                <button className="btn btn-primary book-now">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisements Section */}
      <div className="container ads-section">
        <h2 className="section-title">📢 Sponsored Ads</h2>
        <div className="ads-container">
          <div className="ad-box">Ad 1 - Upcoming Movie</div>
          <div className="ad-box">Ad 2 - Special Offers</div>
          <div className="ad-box">Ad 3 - Premium Membership</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 BookMyShow-2.0. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

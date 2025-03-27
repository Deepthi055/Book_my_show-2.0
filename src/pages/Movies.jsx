import React from "react";

const Movies = () => {
  // Movie Data (Can be fetched from API later)
  const movies = [
    { name: "12th Fail", genre: "Drama", release: "2023-10-27", rating: 4.8, price: 150 },
    { name: "Fighter", genre: "Action", release: "2024-01-25", rating: 4.5, price: 200 },
    { name: "Animal", genre: "Action/Romance", release: "2023-12-01", rating: 4.7, price: 180 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="now-showing ">🎬 Now Showing</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Movie Name</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Rating ⭐</th>
              <th>Ticket Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.release}</td>
                <td>{movie.rating}</td>
                <td>₹{movie.price}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Book Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Movies;

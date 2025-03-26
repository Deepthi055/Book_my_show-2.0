import React from "react";

const Sports = () => {
  return (
    
    <div style={{ paddingTop: "80px" }}>

      <h1>🔥 Live Sports Events</h1>
      <p>Book tickets for the latest sports events happening near you!</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397717-gldxkcghbg-portrait.jpg"
              alt="Football Match"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Football Championship</h5>
              <p className="card-text">Experience the thrill of live football!</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00434748-befxcsfjkc-portrait.jpg"
              alt="Cricket Match"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Cricket World Cup</h5>
              <p className="card-text">Get ready for an exciting cricket match!</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403847-zzjgackuth-portrait.jpg"
              alt="Chess Cafe"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Basketball Finals</h5>
              <p className="card-text">Watch the best basketball teams in action!</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;

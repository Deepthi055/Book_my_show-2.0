import React from "react";

const Offers = () => {
  return (
    <div className="container text-center">
      <h1>🎉 Exclusive Offers & Discounts</h1>
      <p>Grab the best deals on movie tickets, events, and more!</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              // src="https://source.unsplash.com/300x200/?discount"
              alt="Movie Discount"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">50% Off on Movie Tickets</h5>
              <p className="card-text">Use code MOVIE50 to avail this offer.</p>
              <button className="btn btn-success">Claim Offer</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              // src="https://source.unsplash.com/300x200/?giftcard"
              alt="Event Discount"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Buy 1 Get 1 Free</h5>
              <p className="card-text">Applicable on selected events this weekend!</p>
              <button className="btn btn-success">Claim Offer</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              // src="https://source.unsplash.com/300x200/?creditcard"
              alt="Bank Offers"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Bank Card Discounts</h5>
              <p className="card-text">Get 20% off with ICICI, HDFC, and SBI cards.</p>
              <button className="btn btn-success">Claim Offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

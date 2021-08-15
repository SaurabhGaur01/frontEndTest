import React from 'react';

const Header = () => (
    <header className="appHeader">
        <div className="d-flex justify-content-between">
            <h3 className="title text-white pl-3 pt-3">Find Your Car</h3>
            <div className="pt-3 pr-3"><button type="button" className="btn btn-light">Manage Bookings</button></div>
        </div>
        <div className="text-center pb-4">
            <h3 className="title text-white pl-3 pt-3">Car Hire - Search, Compare & Save</h3>
        </div>
    </header>
);

export default Header;
import React from 'react';
import './body.css';

function Body() {
  return (
    <div className="body-container">
      {/* Sidebar */}
     
      {/* Main content */}
      <div className="main-content">
        {/* Section des boutons */}
        <div className="button-container">
          <button className="dashboard-button">
            <img src="images/bouton.png" alt="Dashboard" />
            Dashboard
          </button>
          <button className="account-details-button">
            <img src="images/bouton.png" alt="Account Details" />
            Account Details
          </button>
          <button className="new-listing-button">
            <img src="images/add.png" alt="New Listing" />
            New Listing
          </button>
        </div>

        {/* Section des cartes de données */}
        <div className="data-card-container">
          <div className="data-card">
            <h3>25%</h3>
            <p>Lead Conversion Rate</p>
          </div>
          <div className="data-card">
            <h3>10%</h3>
            <p>Listing Click-through Rate (CTR)</p>
          </div>
          <div className="data-card">
            <h3>3 Min</h3>
            <p>Average Time on Property Pages</p>
          </div>
        </div>

        {/* Menu */}
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-item active">active</li>
            <li className="menu-itemsale">For Sale</li>
            <li className="menu-rent">For Rent</li>
            <li className="menu-land">Commercial</li>
            <li className="menu-land">Land</li>
          </ul>
        </div>

        {/* Table */}
        <table className="tableeau">
          <thead>
            <tr>
              <th><input type="checkbox" />Property Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Price</th>
              <th>Beds</th>
              <th>Bath</th>
              <th>Status</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample table rows */}
            <tr>
              <td>
                <input type="checkbox" />
                <img src="images/chambre.png" alt="Votre Image" />
                Oceane Vila
              </td>
              <td>House</td>
              <td>abijan</td>
              <td>$350,000</td>
              <td>4</td>
              <td>3</td>
              <td>active</td>
              <td>
                <img src="images/edit.png" alt="Votre Image" />
                <img src="images/voir.png" alt="Votre Image" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                <img src="images/chambre.png" alt="Votre Image" />
                Oceane Vila
              </td>
              <td>House</td>
              <td>abijan</td>
              <td>$350,000</td>
              <td>4</td>
              <td>3</td>
              <td>active</td>
              <td>
                <img src="images/edit.png" alt="Votre Image" />
                <img src="images/voir.png" alt="Votre Image" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                <img src="images/chambre.png" alt="Votre Image" />
                Oceane Vila
              </td>
              <td>House</td>
              <td>abijan</td>
              <td>$350,000</td>
              <td>4</td>
              <td>3</td>
              <td>active</td>
              <td>
                <img src="images/edit.png" alt="Votre Image" />
                <img src="images/voir.png" alt="Votre Image" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                <img src="images/chambre.png" alt="Votre Image" />
                Oceane Vila
              </td>
              <td>House</td>
              <td>abijan</td>
              <td>$350,000</td>
              <td>4</td>
              <td>3</td>
              <td>active</td>
              <td>
                <img src="images/edit.png" alt="Votre Image" />
                <img src="images/voir.png" alt="Votre Image" />
              </td>
            </tr>
            {/* Additional table rows */}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <footer className="footer">
      
      </footer>
    </div>
    
  );
}

export default Body;

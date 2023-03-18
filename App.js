import React, { useState } from 'react';
import { Navbar, NewsFeedSidebar } from './component/Navbar';
import './App.css';





// for income tax
function App() {
  const [showIncomeTaxPopup, setShowIncomeTaxPopup] = useState(false);
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateIncomeTax = () => {
    // Perform income tax calculation based on the value of 'income'
    let incomeTax = 0;

    if (income <= 500000) {
      incomeTax = income * 0.05;
    } else if (income > 500000 && income <= 1000000) {
      incomeTax = (income - 500000) * 0.1 + 25000;
    } else if (income > 1000000 && income <= 2000000) {
      incomeTax = (income - 1000000) * 0.15 + 75000;
    } else if (income > 2000000 && income <= 5000000) {
      incomeTax = (income - 2000000) * 0.2 + 225000;
    } else if (income > 5000000) {
      incomeTax = (income - 5000000) * 0.3 + 1025000;
    }

    setTax(incomeTax);
  }

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  }

  const handleIncomeTaxButtonClick = () => {
    setShowIncomeTaxPopup(true);
  } 
const closePopup = () => {
    setShowIncomeTaxPopup(false);
  }


  //for vehicle tax
  const [showVehicleTaxPopup, setShowVehicleTaxPopup] = useState(false);
  const handleVehicleTaxButtonClick = () => {
    setShowVehicleTaxPopup(true);
  }

  const [vehicleValue, setVehicleValue] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [vehicleTax, setVehicleTax] = useState(0);

  const handleVehicleValueChange = (event) => {
    setVehicleValue(event.target.value);
  };

  const handleTaxRateChange = (event) => {
    setTaxRate(event.target.value);
  };
   
  const calculateVehicleTax = () => {
    const tax = (vehicleValue * taxRate) / 100;  //formula for vehicle tax
    setVehicleTax(tax);
  };


  

  return (
    <>
      <Navbar />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." />
        </div>
      </div>

      <div className="heading">
        <h3>What do you want to calculate?</h3>
      </div>

      <div className="button">
        <button onClick={handleIncomeTaxButtonClick}>Income tax</button>     
        <button onClick={handleVehicleTaxButtonClick}>Vehicle tax</button>        
        <button>Salary tax</button>
        <button>VAT</button>
      </div>

      {showIncomeTaxPopup && (
        <div className="popup">
                      <h2>Calculate Income Tax</h2>

          <div className="popup-inner">
            <div className='income'> 
              <label htmlFor="income">Income:</label>
              <input type="number" id="income" value={income} onChange={handleIncomeChange} />
            </div>
            <div className='tax'>
              <p1>Your tax amount is:</p1>
              <input type="number" id="tax" value={tax} readOnly />
            </div>
            <div className='income-tax-buttons'>
              <button onClick={calculateIncomeTax}>Calculate</button>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}

{showVehicleTaxPopup && (
  <div className="popup">
    <h2>Vehicle Tax Calculator</h2>
    <label htmlFor="vehicleValue">Vehicle Value:</label>
    <input type="number" id="vehicleValue" value={vehicleValue} onChange={handleVehicleValueChange} />
    <br />
    <label htmlFor="taxRate">Tax Rate (%):</label>
    <input type="number" id="taxRate" value={taxRate} onChange={handleTaxRateChange} />
    <br />
    <button onClick={calculateVehicleTax}>Calculate Tax</button>
    <button onClick={() => setShowVehicleTaxPopup(false)}>Close</button>
    <h2>Vehicle Tax: {vehicleTax}</h2>
  </div>
)}


     
      

      <NewsFeedSidebar />

      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>T</span>ax
            <span>C</span>alculator
            <span>S</span>ystem
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Instruction</a>
            </li>
            

            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App  ;

import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  //creating the state for the dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  //creating the array of items to be displayed in the dropdown
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
  ];
  
  //creating the functions to handle the dropdown items
  const handleReset = () => {
    if (selectedItem) {
      setSelectedItem(null);
    }
    setIsOpen(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  
  //rendering the dropdown menu
  return (
    <>
    <div className="dropdown-container">
      <h3>Select an Option from the Dropdown Menu</h3>
      <div onMouseLeave={() => setIsOpen(false)} className="dropdown" >
        <button className="dropdown-toggle" onMouseEnter={() => setIsOpen(true)} >
        {selectedItem || 'Dropdown Menu'}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {items.map((item, index) => (
              <a 
              key={index} 
              className="dropdown-item" 
              onClick={() => handleItemClick(item)}
              >
              {item}
              </a>
              
            ))}
          <button 
            onClick={handleReset} className={`reset-btn ${selectedItem ? 'active' : 'inactive'}`} 
            disabled={!selectedItem}
            >
            Reset Selection
          </button>
        </div>
      )}
      </div>
    </div>
    </>
  );
};

export default Dropdown;
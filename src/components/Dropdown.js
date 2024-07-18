import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
      'Item 1',
      'Item 2',
      'Item 3',
    ];
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleReset = () => {
    if (selectedItem) {
      setSelectedItem(null);
    }
  };
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <>
    <div className="dropdown-container">
    <h3>Select an Option from the Dropdown Menu</h3>
    <div 
      onMouseLeave={() => setIsOpen(false)}
      className="dropdown"
    >

      <button 
        className="dropdown-toggle" 
        onMouseEnter={() => setIsOpen(true)}
      >
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
              
              onClick={handleReset}
              className={`reset-btn ${selectedItem ? 'active' : 'inactive'}`}
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
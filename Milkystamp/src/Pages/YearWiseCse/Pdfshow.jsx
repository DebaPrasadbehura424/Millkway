import React from 'react'
import { useState } from 'react';
import './index.css'
function Pdfshow({ subjects }) {


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(subjects);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = subjects.filter((item) => item.sub.toLowerCase().includes(term));
    console.log(filtered);
    setFilteredData(filtered);
  };
  return (
    <div className='pdf_container'>
      <div className="search-bar">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search subject'
          className='inputbox'
        />
        <ul className='list_box'>
          {filteredData.map((item, index) => (
            <a href={item.subNav} >
              <li key={index} className='listsname'>{item.sub}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Pdfshow
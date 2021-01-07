import React, { useState } from 'react';
import "./styles.css";
import { useRepositoy } from '../../contexts/repositories';

const Filter = () => {
  const { getUserRepositories } = useRepositoy();
  const [filter, setFilter] = useState("");

  const handleFilter = async () => {
    if(filter.length > 0) 
      await getUserRepositories(filter);
  }

  return (
    <div className="container-filter">
      <div className="content-filter">
        <div className="filter-input">
          <div class="input-container">
            <input 
              onChange={(e) => setFilter(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? handleFilter() : ''}
              className="input-field"
              placeholder="Digite o nome do usuario ou organização" 
              type="text"/>
              <i class="icon" on onClick={handleFilter}>🔎 </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter;

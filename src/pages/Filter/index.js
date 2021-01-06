import React, { useState } from 'react';
import "./styles.css";
import { useRepositoy } from '../../contexts/repositories';

const Filter = () => {
  const { getUserRepositories } = useRepositoy();
  const [filter, setFilter] = useState("");

  const handleFilter = async () => {
    await getUserRepositories(filter);
  }

  return (
    <div className="container-filter">
      <div className="content-filter">
        <div className="filter-input">
          <div class="input-container">
            <input 
              onChange={(e) => setFilter(e.target.value)}
              className="input-field"
              placeholder="Digite o nome do usuario ou organização" 
              type="text"/>
              <i class="icon" onClick={handleFilter}>Filtrar</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter;

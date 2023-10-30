import React from 'react';
import {  Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterByPrice } from '../redux/actions';

const FilterButton = () => {
    const dispatch = useDispatch();
    const filterByPrice = useSelector((state) => state.posts.filterByPrice);

    // selcting price range with dropdown
    const handleSelect = (eventKey) => {
        dispatch(setFilterByPrice(eventKey));
      };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="primary" id="filter-dropdown">
        Filter by Price: {filterByPrice}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="0-500">₹0 - ₹500</Dropdown.Item>
        <Dropdown.Item eventKey="500-5000">₹500 - ₹5000</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterButton;

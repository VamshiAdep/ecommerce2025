import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { clearSearch, searchProduct } from '../slices/searchProductSlice';

function SearchBox() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const searchProductHandler = e => {
    e.preventDefault();
    dispatch(searchProduct(input));
  };

  const clearSearchHandler = () => {
    dispatch(clearSearch());
    setInput('');
  };

  return (
    <Form onSubmit={searchProductHandler} className='search-box'>
      <InputGroup className='custom-search'>
        <Form.Control
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search Products...'
          className='search-input'
        />
        {input !== '' && (
          <Button type='button' variant='light' onClick={clearSearchHandler} className='clear-btn'>
            <FaTimes />
          </Button>
        )}
        <Button type='submit' variant='warning' className='search-btn'>
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBox;
// Compare this snippet from frontend/src/components/Product.jsx:
// import { Card } from 'react-bootstrap';

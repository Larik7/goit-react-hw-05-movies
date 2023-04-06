import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Wrapper, Input, Icon } from './Searchbox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Wrapper>
      <form onSubmit={handelSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          autocomplete="off"
          onChange={onChange}
        />
        <Icon />
      </form>
    </Wrapper>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};

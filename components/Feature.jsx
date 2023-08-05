import React from 'react';
import SearchForm from './SearchForm';
import Sort from './Sort';

const Feature = () => {
  return (
    <div className="flex items-center my-8 space-x-4">
      <SearchForm />
      <Sort />
    </div>
  );
};

export default Feature;

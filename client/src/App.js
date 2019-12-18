import React, { useState } from 'react';

import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/"></Route>
      <Route path="/movies/:id"></Route>
    </div>
  );
};

export default App;

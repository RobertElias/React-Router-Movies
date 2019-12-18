import React, { useState } from 'react';

import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList';
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
      
      <Route 
      exact path = "/"
      render={props => <MovieList{...props}
      addToSavedList={addToSavedList}/>}>
      </Route>
      
      <Route 
      path="/movies/:id"
      render={props => <Movie{...props}
      addToSavedList={addToSavedList}/>}>
      </Route>
      
    </div>
  );
};

export default App;

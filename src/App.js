import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService'

import Movies from './components/movies';

import './App.css';

class App extends Component {
  state = {
    movies: getMovies()
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          { this.state.movies.map(movie => (
            <tr>
              <th scope="row">{movie.title}</th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    );
  }
}

export default App;

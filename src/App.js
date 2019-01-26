import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService'

import Movies from './components/movies';

import './App.css';

class App extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies 
    })
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { this.state.movies.map(movie => (
            <tr key={movie._id}>
              <th scope="row">{movie.title}</th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDelete(movie)}
                  >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    );
  }
}

export default App;

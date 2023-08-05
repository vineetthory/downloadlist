import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import './movies.css'

class Movies extends Component {
    state = { 
        movies : getMovies()
    } 
    handleDelete = (movie) => {
        // basically we need to update the state and remove click movies from movies object 
        const movies = this.state.movies.filter( m=> m._id !== movie._id);
        this.setState( {movies});

    }
    render() { 
        if( this.state.movies.length === 0 ) return <p className='alldeleted'>you watch and delete all movies from your data base </p>
        return (
            <React.Fragment>

                <div className=' border-secondary  m-4 '>
                <p className=' aline m-2'>   there {this.state.movies.length } left in your download list  </p>
      
            <table className='table border '>
            <thead className='thead'>
                <tr>
                    <th> Title </th>
                    <th> Genres </th>
                    <th> Stock</th>

                    <th></th>
      
                    <th> Rate </th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>

                                                {/* now we need to handle onClick event  */}
                        {/* in order to pass an argument we need to pass as an arrow function */}

                        <td><button onClick={ () => this.handleDelete(movie) } className="btn btn-danger btn-sm">watch then delete</button></td>

                        <td>{movie.dailyRentalRate}</td>

                    </tr>
                ))}

            </tbody>
        </table>

                </div>
  
        </React.Fragment>
        ) ;

             
    }
}
 
export default Movies;
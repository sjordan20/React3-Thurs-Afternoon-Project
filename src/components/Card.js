import React, { Component } from 'react'
import data from '../data/data'
import './card.css'
import Button from './Button'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0

        }

    }

    handleNextClick = () => {
        this.setState({ index: this.state.index + 1 })
        if (this.state.index === data.length - 1) {
            this.setState({ index: 0 })
        }

    }

    handlePreviousClick = () => {
        this.setState({ index: this.state.index - 1 })
        if (this.state.index === 0) {
            this.setState({ index: data.length - 1 })
        }
    }



    render() {
        return (
            <>
                <div className="card-container">
                    <div className="id" >{data[this.state.index].id}/25</div>
                    <div className="name">

                        <p> {data[this.state.index].name.first} {data[this.state.index].name.last} </p>

                    </div>

                    <div className="from">
                        <p> <b>From: </b> {data[this.state.index].city}, {data[this.state.index].country} </p>
                    </div>


                    <p className="job-title"> <b> Job Title: </b>{data[this.state.index].title} </p>
                    <p className="employer">  <b> Employer: </b> {data[this.state.index].employer} </p>
                    <div className='favorite-movies'> <b>Favorite Movies:</b>

                        <ol className='movie-list'> {data[this.state.index].favoriteMovies.map((el, i) =>
                            <li key={i}>{el} </li>)}
                        </ol>

                    </div>


                </div>
                <Button handleNextClick={this.handleNextClick}
                    handlePreviousClick={this.handlePreviousClick} />
            </>
        )





    }
}



export default Card 
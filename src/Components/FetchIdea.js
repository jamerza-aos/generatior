import React, { Component } from 'react';
//import UserCard from './UserCard';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <section>
                <div>
                <img src="../assets/img/bild3.png" alt=""/>
                </div>

            <div>
             <div>{this.state.items.value }</div>
            </div>

            </section>
        );
    }
}

export default Jokes;
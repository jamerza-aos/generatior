import React, { Component } from 'react';
//import UserCard from './UserCard';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    // Zufallszahl von 0 bis 255
    const generateRandom = () => Math.floor(Math.random() * 255);
    // drei zufallsZahlen von 255 in Array [R,G,B]
    const randomZahl = function () {
      const containerRGB = [
        generateRandom(),
        generateRandom(),
        generateRandom(),
        0.7,
      ];
      return containerRGB.join();
    };
    const test = randomZahl();
    const test2 = 'rgba(' + test + ')';
    console.log(test2);
    return (
      <section className="fetch">
        <div className="bild">
          <img src="../assets/img/bild3.png" alt="" />
        </div>

        <div>
          <div className="item" style={{ backgroundColor: test2 }}>
            {this.state.items.value}
          </div>
        </div>
        <a
          style={{ backgroundColor: test2 }}
          id="refresh"
          href="/"
          onclick="return render();"
        >
          Refresh
        </a>
      </section>
    );
  }
}

export default Jokes;

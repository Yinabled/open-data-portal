import React from 'react';

class Home extends React.Component {
  //constructor if necessary here
  render() {
    return (
      <div className="container">
        <h2 id = "title">Stanford Open Data Portal</h2>
        <div id="intro">
          Our mission is to make Stanford more transparent and accountable by
          reducing the cost of finding data. Explore at your will and please
          let us know if you encounter any datasets we have not yet included.
        </div>
      </div>
    )

  }
}

export default Home;

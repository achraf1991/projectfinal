import React from 'react'
import "../style/home.css"
import Maps from './Maps';

const Home = () => {
  return (
    <div className="acceuil">
      <h1>1formatik Orange Metouia </h1>
      <h3>
        Avenue Bourguiba,Metouia,<br></br> Gabes en face de college bouine
        Metouia <br></br>+21655000000
      </h3>
      {/* <h1>Integration Maps</h1> */}
      <Maps />
    </div>
  );
}

export default Home
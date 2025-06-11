import React from 'react';
import { Link } from 'react-router-dom';

function Artiste({artist}) {
  return (
    <div style={{ background: `url(${artist.image})`}}>

      <Link to= {`artiste/${artist._id}`}>
        <h3>{artist.name}</h3>
        <img src={artist.image} alt= {`${artist.name}`} width="200" height="200" />
      </Link>
      </div>
  );
}

export default Artiste;

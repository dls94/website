import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Artiste from '../components/Artiste';


function HomeScreen() {

  const [artistes, setArtistes] = useState([])

  useEffect (() =>{

    async function fetchArtistes() {
      const {data} = await axios.get('/api/artistes/')
      setArtistes(data)
    }
     
    fetchArtistes()

  }, [])

  return (  
    <div className='main-container'>
      <h1>Un studio fait pour créer</h1>
        <div>
          <h2>Nos collaborations</h2>
          <div>
              {artistes.map(artist => (
                  <div key={artist._id}>
                      <Artiste artist={artist}/>
                  </div>
              ))}
          </div>
        </div>
        <div>
          <h2>Nos partenaires</h2>
        </div>
    </div>

  );
}

export default HomeScreen;

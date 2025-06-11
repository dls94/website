import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ArtisteScreen({}) {


    const {id} = useParams();
    const [artiste, setArtiste] = useState([])

    useEffect (() =>{
  
      async function fetchArtiste() {
        const {data} = await axios.get(`/api/artistes/${id}`)
        setArtiste(data)
      }
       
      fetchArtiste()
      console.log(id)
  
    }, [])

    return (
        <div>
            {artiste.name}
            <img src={artiste.image} alt='' width="200"/>
        </div>
    );
    }

export default ArtisteScreen;


import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MangaList from './components/MangaList';

function App() {
  const [mangas, setMangas] = useState([
]);

  const getMangaRequest = () => {
    const url = 'https://manga-app-297f8ab2fdef.herokuapp.com/mangas';

    axios.get(url, {
      
    })
      .then(response => {
        // Assign the result to the state
       // console.log(response.data);
        setMangas(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMangaRequest();
  }, [])
  return (
    <div className='container-fluid manga-app'>
      <div className='row'>
        <MangaList mangas={mangas} />
      </div>
    </div>
  );
}

export default App;

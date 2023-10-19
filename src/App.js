import { useEffect, useState } from 'react';
import axios from 'axios';

const ActoresGame = () => {

  const[actores, setListadosActores] = useState([]);

  useEffect(() => {

    const obtenerPersonajes =  async () => {

      const url = 'https://thronesapi.com/api/v2/Characters';
      const result = await axios.get(url);

      //console.log(result.data);

      setListadosActores(result.data)

    }
    obtenerPersonajes()

  }, []);

  return (
    <div>
    <h1>Actores Game Of Thrones</h1>
    <ul>
      {actores.length === 0 && <p>Cargando...</p>}
      {
        actores.map((personas, i) => {
          return i < 10 ?(
            <li key={i}>
              <h4>Nombre: {personas.fullName}</h4>
              <img src={personas.imageUrl} alt="img" width='200'/>
              <h5>{personas.family}</h5>

            </li>
          ) : null
        })
      }
    </ul>
    </div>
  )
}

export default ActoresGame
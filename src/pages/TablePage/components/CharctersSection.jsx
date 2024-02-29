import React, { useEffect, useContext } from "react";
import * as FetchDataService from "../../../services/FetchDataService";
import TableContext from "../../../context/TableContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

function CharactersSection() {
  
  //Uso de los estados proporcionados por TableContext
  const { characters, setCharacters, count } = useContext(TableContext);

  useEffect(() => {
    //Función para obtener y transformar los personajes de la API
    const getCharacters = async () => {
      try {
        //Uso de async await para la petición a la API
        const response = await FetchDataService.getCharacters();
        const characterResponse = response.data.results;
        
        //Asignarle al estado Characters lo que se obtuvo de la petición a la API
        setCharacters(characterResponse);
      } catch(err) {
        //Mostrar un error en consola en caso de que la petición no salga bien
        console.error('Fetching data went wrong', err);
      }
    }
    getCharacters();

    //La petición y el renderizado volverá a ejecutarse cada vez que el estado "count" cambie
  }, [count]);
  
  return (
    <div>
      <Table striped bordered className="">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Image</th>
            <th>Episode</th>
          </tr>
        </thead>

        <tbody>
          {/* Por cada personaje dentro del array "characters" se obtienen los valores id, name, status e image y se crea una nueva fila con esos valores */}
          {characters.map(character => 
            <tr key={character.id}><td>{character.id}</td><td>{character.name}</td><td>{character.status}</td><td className="text-center"><Image rounded src={character.image} alt={character.name} height="180px" /></td><td><a href={character.episode[0]}>{character.episode[0]}</a></td></tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default CharactersSection;
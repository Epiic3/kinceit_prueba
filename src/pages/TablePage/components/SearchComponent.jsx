import React, { useContext } from "react";
import TableContext from "../../../context/TableContext";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function SearchComponent() {

  //Uso de los estados proporcionados por TableContext
  const { search, setSearch, characters, setCharacters, count, setCount } = useContext(TableContext);

  //Funcion para obtener el valor del buscador y filtrar los resultados según la busqueda
  const handleChange = (e) => {
    setSearch(e.target.value);
    filt(e.target.value);
  }

  //Función para realizar la busqueda en los datos
  const filt = (toSearch) => {
    //Cambiar el valor del estado "count" para volver a mostrar todos los datos de la tabla cuando la cadena a buscar está vacía
    if(toSearch === "") {
      setCount(count + 1);
    }
    //Realizar la busqueda dentro del array de personajes con el metodo "inludes" 
    var searchResult = characters.filter((element) => {
      //Revisar si hay elementos dentro del array que coincidan con la cadena introducida en la barra de busqueda convirtiendo ambos a lowercase para facilitar la comparacion
      if(element.name.toString().toLowerCase().includes(toSearch.toLowerCase())) {
        return element;
      }
    });
    //Asignar al arreglo characters los resultados obtenidos en la busqueda para mostrarlos
    setCharacters(searchResult);
  }

  //Función para cambiar el estado de "count" y volver a ejecutar la petición a la API que se encuentra dentro del hook useEffect
  const refresh = () => {
    setCount(count + 1);
  }

  return (
    <div className="d-flex justify-content-around">
      <InputGroup className="my-4 w-50">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        {/* Se asigna el valor del input con el estado "search" y con la función "handleChange" se actualiza el valor de "search" cada vez que se escrib en el input */}
        <Form.Control value={search} onChange={handleChange} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </InputGroup>
      <Button className="my-4" variant="primary" onClick={refresh}>Refresh</Button>
    </div>
  )
}

export default SearchComponent;
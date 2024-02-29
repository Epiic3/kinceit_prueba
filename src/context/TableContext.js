import React, { createContext, useState } from "react";

const TableContext = createContext({});

//Uso de useContext para poder compartir variables entre los componentes de la página que contiene la tabla
export const TableProvider = ({ children }) => {
  //Estado para almacenar la palabra a buscar dentro de la tabla
  const [search, setSearch] = useState("");

  //Estado para almacenar los personajes obtenidos de la API
  const [characters, setCharacters] = useState([]);

  //Estado para volver a ejecutar useEffect
  const [count, setCount] = useState(0);

  return(
    <>
      <TableContext.Provider value={{ search, setSearch, characters, setCharacters, count, setCount }}>
        { children }
      </TableContext.Provider>
    </>
  );
}

export default TableContext;
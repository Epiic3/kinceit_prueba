import React from "react";
import { TableProvider } from "../../context/TableContext";
import CharactersSection from "./components/CharctersSection";
import SearchComponent from "./components/SearchComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function TablePage() {
  return (
    //Todo lo que se encuentre dentro del componente TableProvider puede compartir las variables/estados definidos dentro del contexto
    <TableProvider>
      <div className="mt-3">
        <h1 className="text-center">Rick and Morty API</h1>
        <SearchComponent />
        <CharactersSection />
      </div>
    </TableProvider>
  )
}

export default TablePage;
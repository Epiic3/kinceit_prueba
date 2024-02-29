import axios from "axios";

//URL de la API a la que se hará la petición
const api_url = "https://rickandmortyapi.com/api/character";

//Función get para obtener los valores de la API
export function getCharacters() {
  return axios.get(api_url);
}
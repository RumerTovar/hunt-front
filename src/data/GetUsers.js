/* import axios from 'axios';
const getToken = window.localStorage.getItem('loggedAppUser');
const parseToken = JSON.parse(getToken);
const token = parseToken.token;

const url = import.meta.env.VITE_API_URL;
const config = {
 headers: {
  Authorization: `Bearer ${token}`,
 },
};

export const getUsers = async () => {
 try {
  const respuesta = await axios(`${url}/api/users`, config);
  const resultado = respuesta.data.rows;
  return resultado;
 } catch (error) {
  console.error(error);
 }
};

export const getUser = async (id) => {
 const respuesta = await fetch(`${url}/users/${id}`);
 const resultado = respuesta.json();
 return resultado;
};

export const addUser = async (datos) => {
 try {
  const respuesta = await fetch(`${url}/users`, {
   method: 'POST',
   body: JSON.stringify(datos),
   headers: {
    'Content-Type': 'application/json',
   },
  });
  await respuesta.json();
 } catch (error) {
  console.log(error);
 }
};

export const updateUser = async (id, datos) => {
 try {
  const respuesta = await fetch(`${url}/users/${id}`, {
   method: 'PUT',
   body: JSON.stringify(datos),
   headers: {
    'Content-Type': 'application/json',
   },
  });
  await respuesta.json();
 } catch (error) {
  console.log(error);
 }
};
 */

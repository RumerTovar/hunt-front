/* import { Form, redirect, useActionData } from 'react-router-dom';
import { FormRegister, Errores } from '../components/';
//import { addUser } from "../data/GetUsers";

export const action = async ({ request }) => {
 const formData = await request.formData();
 const datos = Object.fromEntries(formData);
 const email = formData.get('email');

 //validacion

 const errores = [];
 if (Object.values(datos).includes('')) {
  errores.push('Todos los campos son obligatorios');
 }

 let regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
 );

 if (!regex.test(email)) {
  errores.push('El email no es válido');
 }

 //retorna datos si hay errores
 if (Object.keys(errores).length) {
  return errores;
 }
 await addUser(datos);
 return redirect('/admin/users');
};
export const Register = () => {
 const errores = useActionData();
 return (
  <div className='container__general'>
   <h1>Nuevo Usuario</h1>
   <p>Llena todos los campos para registrar un nuevo usuario</p>
   <Form method='post' noValidate className='form__container'>
    {errores?.length &&
     errores.map((error, i) => <Errores key={i}>{error}</Errores>)}
    <FormRegister />

    <input
     className='button__register'
     type='submit'
     value='Registrar Usuario'
    />
   </Form>
  </div>
 );
};
 */

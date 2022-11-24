export const getProducts = async (id) => {
	const url =  import.meta.env.VITE_API_URL;
	const respuesta = await fetch(`${url}/api/products/${id}`)
	const resultado = respuesta.json()
	return resultado
};

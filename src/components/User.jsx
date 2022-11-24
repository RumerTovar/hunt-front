import { useNavigate, Form, redirect } from 'react-router-dom'




export const User = ({ usuario }) => {
	const navigate = useNavigate()
	const { id, username, email, roles } = usuario;
	return (
		<tr key={id}>
			<td>{username}</td>
			<td>{email}</td>
			<td>{roles}</td>
			
			<td>
				<button className="buttonEdit" onClick={()=> navigate(`/admin/user/${id}/edit`)}>Editar</button>
				<Form method='post' action={``}>
				<button type="submit" className="buttonDelete">Eliminar</button>
				</Form>
			</td>
		</tr>
	);
};

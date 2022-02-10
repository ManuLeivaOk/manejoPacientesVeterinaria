
const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
  
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar al paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div>
      <div className="bg-white mx-5 my-4 shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Dueño: <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha del alta:{" "}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className='flex justify-around mt-5'>
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-red-600 text-white font-bold uppercase rounded-lg transition-all"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;

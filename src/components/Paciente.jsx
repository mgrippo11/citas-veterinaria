
const Paciente = ({paciente, setPaciente, deletePaciente}) => {

    const handleDelete = () => {
        const res = confirm('Estas seguro de borrar al paciente?')

        if(res){
            deletePaciente(paciente.id)
        }
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
            <span className="font-normal normal-case">{paciente.dueño}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Mail: {''}
            <span className="font-normal normal-case">{paciente.mail}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
            <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleDelete}
            >Eliminar</button>
        </div>
</div>
  );
};

export default Paciente;

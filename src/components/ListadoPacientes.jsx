import Paciente from "./Paciente";


const ListadoPacientes = ({pacientes, setPaciente, deletePaciente}) => {

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center"> Administrá tus {""}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map((paciente) => (
                            <Paciente key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                deletePaciente={deletePaciente}
                            />
                        )
                    )}
                </>
                ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center"> Al agregar pacientes {""}
                        <span className="text-indigo-600 font-bold">apareceran aquí</span>
                    </p>
                </>
                )
            }
        </div>
    )
};

export default ListadoPacientes;

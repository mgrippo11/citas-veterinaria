import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [dueño, setDueño] = useState('');
  const [mail, setMail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setDueño(paciente.dueño)
      setMail(paciente.mail)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random+fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // valida formulario
    if([nombre, dueño, mail, fecha, sintomas].includes('')){
      console.log('No se permiten campos vacios!')
      setError(true)
    }else{
      setError(false)
      const objPaciente = {
        nombre, 
        dueño, 
        mail, 
        fecha, 
        sintomas
      }

      if(paciente.id){
        objPaciente.id = paciente.id
        const pacienteUpdate = pacientes.map(pacienteState => (pacienteState.id === paciente.id ? objPaciente : pacienteState))
        setPacientes(pacienteUpdate)
        setPaciente({})
      }else{
        objPaciente.id = generarID()
        setPacientes([...pacientes, objPaciente])
 
      }
      setNombre('')
      setDueño('')
      setMail('')
      setFecha('')
      setSintomas('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
        <p className="text-xl mt-5 text-center mb-10">
          Añadí pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          
          <div className="mb-5">
            <label htmlFor="nombreM" className="block text-gray-700 uppercase font-bold">
              Nombre de la mascota
            </label>
            <input type="text" id="nombreM"
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}  
            />
          </div>
          <div className="mb-5">
            <label htmlFor="nombreP" className="block text-gray-700 uppercase font-bold">
              Nombre del dueño
            </label>
            <input type="text" id="nombreP"
                placeholder="Nombre del dueño"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={dueño}
                onChange={(e) => setDueño(e.target.value)}    
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">
              mail
            </label>
            <input type="email" id="mail"
                placeholder="mail"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lmdg"
                value={mail}
                onChange={(e) => setMail(e.target.value)}     
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Fecha de alta
            </label>
            <input type="date" id="alta"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lmdg"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}     
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describir los síntomas"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)} 
            />
            <input type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
            />
            {error && <Error mensaje='Todos los campos son obligatorios!'/>}
          </div>
        </form>
    </div>
  )
}

export default Formulario;

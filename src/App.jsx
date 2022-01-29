import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from 'react'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    const getLS = () => {
      const  pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []

      setPacientes(pacientesLS)
    }
    getLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const deletePaciente = (id) => {
    const updatePacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(updatePacientes)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  )
}

export default App

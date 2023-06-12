/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <>
            <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
                {pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra {' '}
                            <span className="text-indigo-600">Paciente y Citas</span>
                        </p>
                        {pacientes.map(paciente => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando pacientes {' '}
                            <span className="text-indigo-600">y apareceran en este lugar </span>
                        </p>
                    </>
                )}
            </div>
        </>
    )
}

export default ListadoPacientes
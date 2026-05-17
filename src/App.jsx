import { useEffect, useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    getAlumnos()
  }, [])

  async function getAlumnos() {
    const { data, error } =
      await supabase
        .from('alumnos')
        .select('*')

    if (!error) setAlumnos(data)
  }

  return (
    <>
      {alumnos.map(a => (
        <p key={a.id}>{a.nombre}</p>
      ))}
    </>
  )
}

export default App
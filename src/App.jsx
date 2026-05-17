import { useEffect, useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    getClientes()
  }, [])

  async function getClientes() {
    const { data, error } =
      await supabase
        .from('clientes')
        .select('*')

    if (!error) setClientes(data)
  }

  return (
    <>
      {clientes.map(c => (
        <p key={c.id}>{c.nombre}</p>
      ))}
    </>
  )
}

export default App
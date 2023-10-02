import styles from './app.module.scss'
import Formulario from '../components/Form'
import Lista from '../components/List'
import Stopwatch from '../components/Stopwatch'
import { useState } from 'react'
import { Itarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? !tarefa.selecionado : false,
      }))
    )
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id == selecionado.id) {
            return { ...tarefa, selecionado: false, completado: true }
          }
          return tarefa
        })
      )
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Stopwatch selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  )
}

export default App

import { useState } from 'react'
import Button from '../Button'
import styles from './form.module.scss'
import { Itarefa } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'

interface criaTarefa {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Formulario({ setTarefas }: criaTarefa) {
  const [tempo, setTempo] = useState('00:00:00')
  const [tarefa, setTarefa] = useState('')

  function adicionarTarefa(e: any) {
    e.preventDefault()
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa: tarefa, tempo: tempo, selecionado: false, completado: false, id: uuidv4() },
    ])
    //resetar os estados tarefa e tempo
    setTarefa('')
    setTempo('00:00:00')
  }

  return (
    <form className={styles.novaTarefa} action="" onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="timer">Tempo</label>
        <input
          type="time"
          step="1"
          name="timer"
          value={tempo}
          id="timer"
          min="00:00:00"
          max="01:30:00"
          onChange={(e) => setTempo(e.target.value)}
          required
        />
      </div>
      <Button type="submit" texto="Adicionar" />
    </form>
  )
}

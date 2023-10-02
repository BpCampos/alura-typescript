import Item from './Item'
import styles from './list.module.scss'
import { Itarefa } from '../../types/tarefa'

interface Props {
  tarefas: Itarefa[]
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => {
          return <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        })}
      </ul>
    </aside>
  )
}

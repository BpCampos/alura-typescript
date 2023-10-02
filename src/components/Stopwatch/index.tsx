import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/utils/time'
import { Itarefa } from '../../types/tarefa'
import Button from '../Button'
import Clock from './Clock'
import styles from './stopwatch.module.scss'

interface Props {
  selecionado: Itarefa | undefined
  finalizarTarefa: () => void
}

export default function Stopwatch({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado?.tempo)))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.tittulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)} texto="Começar" />
    </div>
  )
}

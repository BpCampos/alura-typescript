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
  const [interv, setInterv] = useState<any>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado?.tempo)))
    }
    if (selecionado?.selecionado) {
      setTempo(0)
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    if (contador > 0) {
      setInterv(
        setInterval(() => {
          setTempo((tempoAnterior = 0) => tempoAnterior - 1)
          contador -= 1
          if (contador <= 0) {
            finalizarTarefa()
          }
        }, 1000)
      )
    }
  }

  function end(contador: number = 0) {
    if (contador <= 0) {
      clearInterval(interv)
    }
  }

  function stop() {
    clearInterval(interv)
  }

  end(tempo)

  return (
    <div className={styles.cronometro}>
      <p className={styles.tittulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => regressiva(tempo)} texto="Começar" />
        <Button onClick={() => stop()} texto="Parar" />
      </div>
    </div>
  )
}

import styles from './button.module.scss'

interface botao {
  texto: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export default function Button({ texto, type = 'button', onClick }: botao) {
  return (
    <button onClick={onClick} type={type} className={styles.botao}>
      {texto}
    </button>
  )
}

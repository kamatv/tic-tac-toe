import styles from '../styles/Home.module.css'
import { TicTacToe, TitleBanner } from '../src/components'


export default function Home() {
  return (
    <div className={styles.container}
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <TitleBanner title={'TIC TAC TOE'} />
      <TicTacToe />
    </div>
  )
}

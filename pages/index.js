import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Produto from './produtos'
import Rodape from './Componentes/Rodape/Footer'
import Menu from './Componentes/Menu/Menu'

// Tudo que está na página index está sendo renderizado do lado do servidor com o nextJs, 
// os componentes Menu e o Rodape, a página produtos, listando produtos vindo de uma API fixa,
// localizada na pasta "api". 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FullStackEletro</title>
      </Head>
      <Menu />

      <main className={styles.main}>
       <Produto />
      </main>

      <footer className={styles.footer}>
        <Rodape />
      </footer>
    </div>
  )
}

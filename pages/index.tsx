import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kernell Link</title>
        <meta name="description" content="Kernell Link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_kernell-link.ico" />
      </Head>
      <main id={styles.main}>
        <div id={styles.contentMain}>
          <div id={styles.headContentMain}>
            <div id={styles.headContentMain1}>
              <img id={styles.logo} src="/logo_kernell-link.svg" alt="Logo kernell link"/>
              <h1 id={styles.contentMainTitle}>KERNELL LINK</h1>
            </div>
            <ul id={styles.contentWorks}>
              <li className={styles.workItens}>Instalação e manutenção de sistemas de vigilância por câmeras. </li>
              <li className={styles.workItens}>Construção e manutenção de redes internas(ethernet).</li>
              <li className={styles.workItens}>Construção e manutenção de redes via rádio internas.</li>
              <li className={styles.workItens}>Construção e manutenção de redes de fibra óptica internas</li>
            </ul>
          </div>
          <div id={styles.contactMain}>
            <h2 id={styles.contactMainh2}>CONTATOS</h2>
            <div id={styles.contactBox}>
              <div id={styles.kelson}>
                <p>Nome: Kelson Camargo</p>
                <a href="tel:+5555999434986">telefone: 55 9 9943-4986</a>
              </div>
              <div id={styles.rafael}>
                <p>Nome: Rafael Betim</p>
                <a href="tel:+5555997310986">telefone: 55 9 9731-0986</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

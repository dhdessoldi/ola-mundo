import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Daniel Dessoldi, Engenheiro e estudante da escola de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="" />
                <img className={styles.minhaFoto} src="https://github.com/dhdessoldi.png" alt="Foto de perfil do Daniel" />
            </div>
        </div>
    )
}  
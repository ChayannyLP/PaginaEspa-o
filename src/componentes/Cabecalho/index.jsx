import Logo from './logo.png';
import Search from './search.png';
import Styles from './cabecalho.module.scss'

export default function Cabecalho (){
    return (
        <header className={Styles.cabecalho}> 
            <img src = {Logo} alt = "Logo do alura Spece"/>
            <div className={Styles.cabecalho__container}>
                <input className={Styles.cabecalho__input}  type = "text" placeholder=" o que vc procura?"/>
                <img src ={Search} alt= "icone de lupa"/>
            </div>
        </header>
    )
}
import React from 'react'
import styles from "./Tags.module.scss"
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags</p>
        <ul className={styles.tags__lista}>
           {tags.map((tag ) => {
            return <li key={tag} onclick ={()=>filtraFotos(tag)}>
              {tag}</li>
            
           })}
           <li onclick={()=>setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}

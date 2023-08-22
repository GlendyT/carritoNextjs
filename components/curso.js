
import styles from "../styles/curso.module.css"

export default function Curso() {
  return (
    <section className={`${styles.curso}`}>
    <div className={`${styles.imagen}`}> 
        
    <div className={`contenedor ${styles.grid}`}>
      <div className={`${styles.contenido}`}>
        <h2 className="heading">Cursos con hasta 30% de descuento</h2>
        <p>j-hope (Jeong, Hoseok) is a South Korean rapper, dancer, songwriter,
           music producer and member of 21st century pop icons, BTS. 
           Known as the lead dancer of the group, j-hope boasts his performance 
           skills that are nearly perfect.</p>
      </div>
    </div>
    </div>
   </section>
  )
}

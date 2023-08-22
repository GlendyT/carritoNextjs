
import Image from "next/image"
import styles from "../styles/guitarras.module.css"
import Link from "next/link"

export default function Guitarra({guitarra}) {

  const { name, followers, image} = guitarra
  return (

    <div className={styles.guitarras}>
      
      <Image src={image} width={600} height={400} alt={`Imagen guitarra ${name}`}/>

      <div  className={styles.contenido}>
        <h3 className={styles.precio}>{name}</h3>
        <p className={styles.descripcion}>j-hope (Jeong, Hoseok) is a South Korean rapper, dancer, songwriter,
             music producer and member of 21st century pop icons, BTS. Known as the
             lead dancer of the group, j-hope boasts his performance skills that 
             are nearly perfect. </p>
        <p className={styles.precio}>{followers}</p>
         <Link href={`/guitarras/${name}`}>
         <p className={styles.enlace}>
            Ver Producto
         </p>
        </Link>


      </div>
    </div>
  )
}

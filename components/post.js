import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {
  const { name, monthlyPeak, image} = post
  return (
    <article>
      <Image src={image} width={600} height={400} alt={`Imagen Blog ${name}`}/>
     
     <div className={styles.contenido}> 
      <h3>{name}</h3>
      <p>Esta fecha no tiene ninguna 
      relacion con el artista</p>
      <p className={styles.fecha}>{formatearFecha(monthlyPeak)}</p>

      <Link href={`/blog/${name}`}>
        <p className={styles.enlace}>
          Leer Post
        </p>
      </Link>
      </div>
    
    </article>
  )
}

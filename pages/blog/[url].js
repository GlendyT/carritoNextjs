import Image from "next/image"
import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers"
import styles from "../../styles/blog.module.css"

export default function Post({post}) {
    const {name, image, monthlyPeak} = post[0]
  return (
    <Layout
     title={name}
    >
    <article className= {`${styles.post} ${styles["mt-3"]}`}>
        <Image src={image} width={1000} height={400} alt={`Imagen Blog ${name}`}/>
        
        <div className={styles.contenido}> 
        <h3>{name}</h3>
        <p>Esta fecha no tiene ninguna 
        relacion con el artista</p>
        <p className={styles.fecha}>{formatearFecha(monthlyPeak)}</p>
        </div>
    </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles?filters[url]=${url}&populate=*
    `)
    const {results: post} = await respuesta.json()

   return {
     props: {
       post
     }
   }
 }
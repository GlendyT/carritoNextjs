import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"

export default function Producto({guitarra, agregarCarrito}) {
   
  const [cantidad, setCantidad] = useState(0)
  const {name, image, followers } = guitarra[2]

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      alert("Cantidad no valida")
      return 
    }
    //Construir un objeto
    const guitarraSeleccionada = {
      image,
      name, 
      followers
    }
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout
      title={`Guitarra ${name}`}
    > 
    <div className={styles.guitarra}>
      <Image src={image} width={600} height={400} alt={`Imagen guitarra ${name}`} />
       
      <div className={styles.contenido}>
      <h3 className={styles.precio}>{name}</h3>
          <p className={styles.descripcion}>j-hope (Jeong, Hoseok) is a South Korean rapper,
           dancer, songwriter,music producer and member of 21st century pop icons, BTS. </p>
          <p className={styles.precio}>{followers}</p>

          <form
           onSubmit={handleSubmit}
           className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>

            <select 
            onChange={ e => setCantidad(+e.target.value)}
            id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
             </select>

             <input
               type="submit"
               value="Agregar al carrito"
             />
          </form>
      </div>
    </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles`)
  const { results } = await respuesta.json()

  const paths = results.map(guitarra => ({
    params: {
      url: guitarra.name
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: { url }}){
  const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles?filters[url]=${url}&populate=image`)
  const {results: guitarra} = await respuesta.json()
 return {
   props: {
     guitarra
   }
 }
}

/*export async function getServerSideProps({query: {url}}){
   const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles?filters[url]=${url}&populate=*
   `)
   const {results: guitarra} = await respuesta.json()
  return {
    props: {
      guitarra
    }
  }
}
*/

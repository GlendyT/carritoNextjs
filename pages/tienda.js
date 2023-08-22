
import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {

  console.log(guitarras)
  return (
    <Layout
      title={"Tienda Virtual"}
      desacription={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >

    
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>

       <div className={styles.grid}> 
         {guitarras?.map(guitarra => (
          <Guitarra
            key={guitarra?.name}
            guitarra={guitarra}
          />
          ))}
         </div>
      </main>

  

    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles`)
  const {results : guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
  }
 }
} 


/*
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles?populate=*`)
  const {results : guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
  }
 }
} */
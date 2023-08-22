import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import Curso from "@/components/curso"
import Post from "@/components/post"
import styles from "../styles/grid.module.css"



export default function Home({guitarras, posts}) {

  return (
    <>
     <Layout
      title={"Inicio"}
      desacription={"Blog de musica, venta de guitaras y mas"}
     > 

     <main className="contenedor">
      <h1 className="heading">Nuestra coleccion</h1>
        <div className={styles.grid}> 
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra?.name}
              guitarra={guitarra}
            />
            ))}
        </div>
     </main>

     <Curso/>

     <section className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.grid}>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}

      </div>
     </section>
     </Layout>
    </>
  )
}


export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/spotify-profiles?populate=imagen`
  const urlPosts = `${process.env.API_URL}/spotify-profiles?populate=imagen`

  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])
  
  const [{results:guitarras}, {results:posts}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])

  return{
    props:{
       guitarras,
       posts
    }
  }
}
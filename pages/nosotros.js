import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      desacription={"Sobre nosotros, GuitarLA, tienda de musica"}
    >

      <main className="contenedor"> 
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis tincidunt commodo. Duis id odio justo. 
            Aliquam ligula tortor, congue quis ornare eget, feugiat vitae lacus. Nunc non pretium justo, in vestibulum mauris. 
            Sed at scelerisque velit. Ut maximus lectus nec nibh semper sagittis. Suspendisse diam dui, laoreet quis luctus at, 
            laoreet id ante. Praesent pretium libero fermentum massa suscipit, eu mattis lectus maximus. Donec sit amet consectetur elit.
            Cras nec semper lacus. Morbi non nisl nec tortor pharetra ullamcorper non tincidunt tortor.
            </p>

            <p>
            Nullam convallis suscipit vehicula. Sed posuere, sapien nec malesuada volutpat, 
            ante nulla aliquam quam, nec sodales tortor augue nec nisl. In at mollis justo,
            vitae posuere felis. Nunc nec pretium neque. Quisque at lacinia arcu, a malesuada urna.
            Etiam sed tempor arcu. Nulla hendrerit aliquam massa sed gravida. Curabitur at libero scelerisque, 
            gravida ligula nec, bibendum purus. Aliquam et euismod felis, nec luctus diam. Praesent quis placerat mi. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </main>
    </Layout>


  )
}

import { useState } from "react"
import Image from "next/image"
import styles from "../styles/guitarras.module.css"
import Link from "next/link"


export default function Guitarra({guitarra, agregarCarrito}) {
  
  const [cantidad, setCantidad] = useState(0)
  const { descripcion, imagen, nombre, precio, url} = guitarra

   const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      alert("Cantidad no valida")
      return 
    }
    //Construir un objeto
   const guitarraSeleccionada = {
    }
    agregarCarrito(guitarraSeleccionada) 
  }
   console.log(guitarra)
  return (

    <div className={styles.guitarras}>
      
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>

      <div  className={styles.contenido}>
        <h3 className={styles.precio}>{nombre}</h3>
        <p className={styles.descripcion}> {descripcion} </p>
        <p className={styles.precio}>${precio}</p>
          <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
          </Link> 

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
  )
}


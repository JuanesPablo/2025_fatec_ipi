import React from 'react'
import Image from './Image'

const ListaImagens = ({photo}) => {
  return (
    photos.map((photo) => (
            
              <Image 
                key={photo.id}
                src={photo.src.small} 
                alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`}/>
            
          ))
  )
}

export default ListaImagens
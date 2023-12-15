import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifts } from './useFetchGifts';

//I1veDRPI86jQui2Uc3t3MohzkDwbKzPY
export const GifGrid = ({category }) => {

  const { images, isLoading } = useFetchGifts( category ); 

return (
    <>
        <h3>{category}</h3>
        <h2>{isLoading && 'Cargando...'}</h2>
        <div className='card-grid'>
          {
              images.map(img => (
                //return <li key={img.id}>{img.title}</li>              
                <GifItem 
                  key={img.id}
                  {...img}
                />
              ))
          }           
        </div>
    </>
  )
}

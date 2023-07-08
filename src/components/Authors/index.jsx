import React from 'react'
import { Author } from '../Author'
import './Authors.css'

export const Authors = () => {
  return (
    <div className='body-page-authors'>
      <h3>Authors</h3>
      <section className="authors-section">
        <Author
          photo={'https://media.tenor.com/DrYtzYAwWeEAAAAC/maquina-invisible.gif'}
          name={'Camilo Suarez'} 
          description={'Fullstack developer in process'}
          addres={'https://github.com/Camilo-Suarez98'}
          github={'Camilo-Suarez98'}
          link={'camilo-suarez98-github-io.vercel.app'}
          value={'Camilo S'}
        />
        <Author
          photo={'https://experienciajoven.com/wp-content/uploads/2023/01/que-hace-un-programador-web.gif'}
          name={'Andrea Vargas'} 
          description={'Fullstack developer in process'}
          addres={'https://github.com/PVARGASM1'}
          github={'PVARGASM1'}
          link={'#'}
          value={'In process...'}
        />
      </section>
    </div>
  )
}

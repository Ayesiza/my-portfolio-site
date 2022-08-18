import React from 'react'
import './projects.css'
import { projects } from '../../data'

const Projects = () => {
  return (
      <div className='wrapper'>
    <div className="album py-5 ">
    <div className="container">
    <h2 className="page-section-heading text-center text-uppercase text-light m-0 "> My Projects</h2>
                
                <div className="divider-custom mb-4">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
      {projects.map(project =>(
        <div className="col  " key={project.id} >
          <div className="card shadow-sm ">
              <div className='p-2 p-browser' >
              <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
                </div>
                <h4 className=' text-warning'>{project.title}</h4>
          <img classNameName="img-fluid" src={project.image} alt="..." />
            <div className="card-body ">
              <p className="card-text">{project.description}</p>
              <div className="d-flex justify-content-around align-items-center">
               
                <a  href={project.source}><button  className="btn btn-sm btn-warning ">Code</button></a>
                <a  href={project.visit}> <button  className="btn btn-sm btn-dark ">Visit</button></a>
                
              </div>
            </div>
          </div>
          </div>
           
            ))}
          </div>
          </div>
          </div>

        
        
          
    
        </div>
  )
}

export default Projects
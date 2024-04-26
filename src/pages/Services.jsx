import React from 'react'
import '../style/ServiceStyle.css'
import serv1 from '../asset/serv/serv1.jpeg'
import serv2 from '../asset/serv/serv2.jpeg'
import serv3 from '../asset/serv/serv3.jpeg'

function Services() {
  return (
    <div className='serv-container'>
        <div className="card-serv">
            <div className="text-serv">
                <h3>SERVICE 01</h3>
                <hr/>
                <h2>Residential Design</h2>
                <p>With a combination of creativity, functionality, and subtlety of detail, our design team will transform your space into the place you dream of.</p>
            </div>
            <div className="img-serv">
                <img src={serv1} alt="" />
            </div>
        </div>
        <div className="card-serv">
            <div className="text-serv">
                <h3>SERVICE 02</h3>
                <hr/>
                <h2>Office Design</h2>
                <p>With ergonomic, functional and modern designs, we present office design solutions that inspire and support your business needs. </p>
            </div>
            <div className="img-serv">
                <img src={serv2} alt="" />
            </div>
        </div>
        <div className="card-serv">
            <div className="text-serv">
                <h3>SERVICE 03</h3>
                <hr/>
                <h2>Interior Design</h2>
                <p>Furniture color and texture selection, we present innovative and bold design solutions to enhance the aesthetics and function of your space. </p>
            </div>
            <div className="img-serv">
                <img src={serv3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Services
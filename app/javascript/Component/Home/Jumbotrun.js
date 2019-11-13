import React ,{Component} from 'react'
import "./utils/jumbo.scss";

export default function Jumbotrun(){
    return (
        <section className="home-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4 div1">
                        <h1>REACT FOR BEGINNERS</h1>
                        <p>Supercharge your ruby on rails app with reactJS </p>
                        <div className="cta-wrapper">
                            <a className="btn fancy-btn">Get Started</a>
                        </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                        <iframe width ="500" height="315" src="https://www.youtube.com/embed/6ACq2QXgGDI" frameBorder='0'  allow='autoplay; encrypted-media; picture-in-picture;gyroscope'  allowFullScreen  title='video'/>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import car from "../../src/images/img_car.png"
import "../style.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 sm-12">
                        <div className="hero-caption">
                        <h2 className="text-black">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                        </div>   
                        <div className="hero-text">
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>    
                        <Link to="/carimobil" className="btn btn-success">
                        <span className="text-white">Mulai Sewa Mobil</span>
                        </Link>
                    </div>
                    <div className="col-md-6 sm-12">
                        <div className="hero-image">
                            <img src={car} width="100%" alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
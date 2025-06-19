import { Link, Outlet } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Slidebar from "./Slidebar";
import './index.css'
// import GImg from "./assets/1.jpeg"
 import SImg from "./assets/shoes.jpeg"
import GImg from "./assets/jbl1.jpeg"
 import TImg from"./assets/clothes.jpeg"
import product1 from "./assets/product1.json"
import product2 from "./assets/product2.json"
import product3 from "./assets/product3.json"
import { useState } from "react";




function Home(props) {


  return (
    <>
      
      <Slidebar/>
          




      <nav className="navbar navbar-expand-sm bg-info">

        <div className="container-fluid">

          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-warning " style={{  marginLeft: "20px" }}> <Link to="/Home/Electronics" className="nav-item">Electronics</Link></button>
            </li>

            <li className="nav-item">
              <button className="btn btn-warning " style={{  marginLeft: "20px" }}>   <Link to="/Home/Shoes" className="nav-item">Shoes</Link></button>
            </li>

            <li className="nav-item">
              <button className="btn btn-warning " style={{ marginLeft: "20px" }}>  <Link to="/Home/Clothes" className="nav-item">Clothes</Link></button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>

    </>
  )
}




<br></br>



   function Electronics(props) {
   

// Make sure to pass `product1` and `GImg` as props when using this component

    let [cat, setCategory] = useState('');
    let [range, setRange] = useState("60");

    // Get unique categories
    let cat_array = product1.map((p) => p.category);
    let unique_array = Array.from(new Set(cat_array));

    return (
        <div className='container-fluid'>
            <div className='row mt-3'>
                {/* Sidebar with filters */}
                <div className='col-md-3'>
                    <div className='alert alert-primary sticky-top'>
                        <h4>Filters</h4>
                        <hr />
                        <h5>Category Filter:</h5>
                        {
                            unique_array.map((c, index) => (
                                <button
                                    key={index}
                                    className='btn btn-info mx-3 mt-3'
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </button>
                            ))
                        }

                        <hr />
                        <h5>Price Range:</h5>
                        Select Price:
                        <input
                            type="range"
                            min={1}
                            max={60}
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        />
                        &nbsp;
                        <span style={{ fontSize: "27px" }}>{range}</span>
                    </div>
                </div>

                {/* Products section */}
                <div className='col-md-9'>
                    <h1>Selected Category: {cat || 'All'}</h1>
                    <div className='row'>
                        {
                            product1
                                .filter((p) => Number(p.price) < Number(range)) // Filter by price
                                  .filter((s) => cat === '' || s.category === cat) // Filter by category (or show all)
                                .map((p, index) => (
                                    <div className='col-md-3 col-sm-4 col-6' key={index}>
                                        <div className="card">
                                            <Link to={`/product_Details1/${p.id}`}>
                                                <img className="card-img-top" src={GImg} alt="Product" />
                                            </Link>
                                            <div className="card-body">
                                                <h4 className="card-title">{p.Title}</h4>
                                                <p className="card-text">{p.Description}</p>
                                                <h3>Price: {p.price}</h3>
                                                <button className="btn btn-primary">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



   
    
 
    
 






  function Shoes(props) {
   
   let [cat, setCategory] = useState('');
    let [range, setRange] = useState("60");

    // Get unique categories
    let cat_array = product2.map((s) => s.categories);
    let unique_array = Array.from(new Set(cat_array));

    return (
        <div className='container-fluid'>
            <div className='row mt-3'>
                {/* Sidebar with filters */}
                <div className='col-md-3'>
                    <div className='alert alert-primary sticky-top'>
                        <h4>Filters</h4>
                        <hr />
                        <h5>Category Filter:</h5>
                        {
                            unique_array.map((c, index) => (
                                <button
                                    key={index}
                                    className='btn btn-info mx-3 mt-3'
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </button>
                            ))
                        }

                        <hr />
                        <h5>Price Range:</h5>
                        Select Price:
                        <input
                            type="range"
                            min={1}
                            max={60}
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        />
                        &nbsp;
                        <span style={{ fontSize: "27px" }}>{range}</span>
                    </div>
                </div>

                {/* Products section */}
                <div className='col-md-9'>
                    <h1>Selected Category: {cat || 'All'}</h1>
                    <div className='row'>
                        {
                            product2
                                .filter((s) => Number(s.price) < Number(range)) // Filter by price
                                .filter((s) => cat === '' || s.categories === cat) // Filter by category (or show all)
                                .map((s, index) => (
                                    <div className='col-md-3 col-sm-4 col-6' key={index}>
                                        <div className="card">
                                            <Link to={`/product_Details1/${s.id}`}>
                                                <img className="card-img-top" src={SImg} alt="Product" />
                                            </Link>
                                            <div className="card-body">
                                                <h4 className="card-title">{s.title}</h4>
                                                <p className="card-text">{s.description}</p>
                                                <h3>Price: {s.price}</h3>
                                                <button className="btn btn-primary">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


    





   
    
    




  

function Clothes(props) {

  
  
   let [cat, setCategory] = useState('');
    let [range, setRange] = useState("60");

    // Get unique categories
    let cat_array = product3.map((p) => p.categories);
    let unique_array = Array.from(new Set(cat_array));

    return (
        <div className='container-fluid'>
            <div className='row mt-3'>
                {/* Sidebar with filters */}
                <div className='col-md-3'>
                    <div className='alert alert-primary sticky-top'>
                        <h4>Filters</h4>
                        <hr />
                        <h5>Category Filter:</h5>
                        {
                            unique_array.map((c, index) => (
                                <button
                                    key={index}
                                    className='btn btn-info mx-3 mt-3'
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </button>
                            ))
                        }

                        <hr />
                        <h5>Price Range:</h5>
                        Select Price:
                        <input
                            type="range"
                            min={1}
                            max={50}
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        />
                        &nbsp;
                        <span style={{ fontSize: "27px" }}>{range}</span>
                    </div>
                </div>

                {/* Products section */}
                <div className='col-md-9'>
                    <h1>Selected Category: {cat || 'All'}</h1>
                    <div className='row'>
                        {
                            product3
                                .filter((p) => Number(p.price) < Number(range)) // Filter by price
                                .filter((p) => cat === '' || p.categories === cat) // Filter by category (or show all)
                                .map((p, index) => (
                                    <div className='col-md-3 col-sm-4 col-6' key={index}>
                                        <div className="card">
                                            <Link to={`/product_Details1/${p.id}`}>
                                                <img className="card-img-top" src={TImg} alt="Product" />
                                            </Link>
                                            <div className="card-body">
                                                <h4 className="card-title">{p.title}</h4>
                                                <p className="card-text">{p.description}</p>
                                                <h3>Price: {p.price}</h3>
                                                <button className="btn btn-primary">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



   
    

export { Home, Electronics, Shoes, Clothes }



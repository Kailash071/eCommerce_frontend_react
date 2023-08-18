import {React,useContext} from "react"
import ThemeContext from "../context/ThemeContext"
function CardItem(props) {
  let{ theme }= useContext(ThemeContext)
  return (
      <div className={`card m-2 text-bg-${theme} border-${theme==='dark'?'light':'dark'}`} >
        <img
          src={props.src}
          className="card-img-top"
          alt={props.alt}
          width={props.width}
          height={props.height}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text  text-truncate">
           {props.description}
          </p>
          <div className="d-flex justify-content-start align-items-center">
            <button className="btn btn-sm btn-primary mx-1">Buy Now <span><i className="bi bi-bag"></i></span></button>
            <button className="btn btn-sm btn-secondary">Add To Cart <span><i className="bi bi-cart"></i></span></button>
          </div>
        </div>
      </div>
  )
}

export default CardItem

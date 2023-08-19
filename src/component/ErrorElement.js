import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom/dist'
const ErrorElement = (props) => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleBack =(e)=>{
      e.preventDefault()
      navigate(-1)?navigate(-1):navigate('/')
    }
  return (
    <div className='container'>        
    {!error&&!props.message?(<> 
<div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button className="btn btn-outline-success border-white" onClick={handleBack}>
          Go back
        </button>
            </div>
        </div>
      </>):
    (<>
<div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span>{error?.status}</p>
                <p class="lead">
                  {props.message?props.message:error.message}
                  </p>
                <button className="btn btn-outline-success border-white" onClick={handleBack}>
          Go back
        </button>
            </div>
        </div>
    </>)
    }
    </div>
  )
}

export default ErrorElement
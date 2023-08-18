import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom/dist'
const ErrorElement = (props) => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleBack =(e)=>{
      e.preventDefault()
      navigate(-1)
    }
  return (
    <div className='container'>        
    {!error&&!props.message?(<> 
<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button className="btn btn-outline-success border-white" onClick={handleBack}>
          Go back
        </button>
            </div>
        </div>
      </>):
    (<>
<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span>{error?.status}</p>
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
import { useContext } from 'react'
import {React} from 'react'
import ThemeContext from '../../context/ThemeContext'

const Dashboard = ()=>{
	const {adminTheme} = useContext(ThemeContext)
	return (
		<>		
		<div className="container text-center">
		  <div className="d-flex justify-content-center gap-4 flex-wrap">
			<div className="card" style={{ width: "18rem" }}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </p>
			    <a href="#" className="btn btn-primary">
			      Go somewhere
			    </a>
			  </div>
			</div>
			<div className="card" style={{ width: "18rem" }}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </p>
			    <a href="#" className="btn btn-primary">
			      Go somewhere
			    </a>
			  </div>
			</div>
			<div className="card" style={{ width: "18rem" }}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </p>
			    <a href="#" className="btn btn-primary">
			      Go somewhere
			    </a>
			  </div>
			</div>
			<div className="card" style={{ width: "18rem" }}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </p>
			    <a href="#" className="btn btn-primary">
			      Go somewhere
			    </a>
			  </div>
			</div>
			<div className="card" style={{ width: "18rem" }}>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </p>
			    <a href="#" className="btn btn-primary">
			      Go somewhere
			    </a>
			  </div>
			</div>

		  </div>
		</div>
		</>
	)
}
export default Dashboard
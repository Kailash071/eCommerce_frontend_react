import { useContext } from 'react'
import {React} from 'react'
import ThemeContext from '../../context/ThemeContext'

const Dashboard = ()=>{
	const {adminTheme} = useContext(ThemeContext)
	return (
		<>		
		<div className="container text-center">
		  <div className="row">
		    <div className="col-6 col-sm-4 h-100">.col-6 .col-sm-4 h-100</div>
		    <div className="col-6 col-sm-4 h-100">.col-6 .col-sm-4 h-100</div>

		    <div className="w-100 d-none d-md-block"></div>

		    <div className="col-6 col-sm-4 h-100">.col-6 .col-sm-4 h-100</div>
		    <div className="col-6 col-sm-4 h-100">.col-6 .col-sm-4</div>
		  </div>
		  <table className={"table table-hover table-"+adminTheme}>
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">First</th>
			      <th scope="col">Last</th>
			      <th scope="col">Handle</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			    <tr>
			      <th scope="row">2</th>
			      <td>Jacob</td>
			      <td>Thornton</td>
			      <td>@fat</td>
			    </tr>
			    <tr>
			      <th scope="row">3</th>
			      <td colspan="2">Larry the Bird</td>
			      <td>@twitter</td>
			    </tr>
			  </tbody>
			</table>
		</div>
		</>
	)
}
export default Dashboard
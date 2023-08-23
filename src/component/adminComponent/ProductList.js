import React from 'react'
import { Link } from 'react-router-dom'
const ProductList = () => {
  return (
    <div className="container-fluid">
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h4>Products List</h4>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/admin/dashboard">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">ProductList</li>
          </ol>
        </nav>
      </div>
      <div className="productTable">
        <table class="table">
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
    </div>
  )
}

export default ProductList
import React from 'react'
import './style.css'

function ResultList(props) {
    return (
        <div className="container-fluid">
          <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                {/* <th scope="col">Street</th> */}
                <th scope="col">City</th>
                {/* <th scope="col">State</th>
                <th scope="col">Postcode</th> */}
                <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
            {props.users? props.users.map((user, i) => 
                <tr key={i}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {/* <td>{user.location.street.name}</td> */}
                <td>{user.location.city}</td>
                {/* <td>{user.location.state}</td>
                <td>{user.location.postcode}</td> */}
                <td>{user.location.country}</td>
                </tr>
                ): <p>No repo available!</p>}
            </tbody>
            </table>  
        </div>
    )
}

export default ResultList;
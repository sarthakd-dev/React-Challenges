import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Home() {
  return (
   <>
   <div className="container">
    <h1 className='text-start'>User Data</h1>
    <div className="table_div mt-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
   
    </>
  )
}

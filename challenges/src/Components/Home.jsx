import React, { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
import Pagination from 'react-bootstrap/Pagination';

export default function Home() {
    const [data, setData] = useState([]);
    const getData = async() =>{
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setData(response.data.products);
    }
    useEffect(()=>{
     getData();
    },[]);
  return (
   <>
   <div className="container">
    <h1 className='text-start'>User Data</h1>
    <div className="table_div mt-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Price</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
       {
       data.map((el, i)=> {
       return (<>
       <tr>
        <td>{el.id}</td>
        <td>{el.price}</td>
       <td>{el.title}</td>
       <td><img src={el.thumbnail} style={{width: 50, height: 50}} /></td>
       </tr>
       </>)
       })
       }
        
      </tbody>
    </Table>
    </div>
    </div>
   
    </>
  )
}

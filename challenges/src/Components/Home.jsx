import React, { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
import Pagination from 'react-bootstrap/Pagination';

export default function Home() {
    const [data, setData] = useState([]);
    const [pageData, setpageData] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [page, setpage] = useState(1);
    
    const getData = async() =>{
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setData(response.data.products);
        setpageCount(Math.ceil(data.length/5));
        setpageData(()=>{
            return data.filter(x =>  x.id< page+5 && x.id>= page);
        })
    }
    const handlePrev = ( )=>{
    if(page !=1 ){
        setpage(page-1);
        if(page>0){
        setpageData(()=>{
            return data.filter(x => x.id< page+5 && x.id>= page);
        })
    }}};
    const handleNext = ( )=>{
        if(page != pageCount ){
             if(page>0){
            setpageData(()=>{
                return data.filter(x => x.id< page+5 && x.id>= page);
            })
        }; 
        setpage(page+1);
    }
    }
  
    useEffect(()=>{
     getData();
    },[pageData]);
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
       pageData.map((el, i)=> {
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
    <div className="d-flex justify-content-end">
    <Pagination>
      <Pagination.Prev onClick={handlePrev} />
      
      {/* <Pagination.Item>{13}</Pagination.Item> */}
      
      <Pagination.Next onClick={handleNext} />
    </Pagination>
    </div>
    </div>
   
    </>
  )
}

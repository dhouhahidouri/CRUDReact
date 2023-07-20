//import React from 'react';
import React, { Fragment } from 'react';
import {Button, Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';
import Produit from './Produit';
function ListeProd(){
    let history = useNavigate();

    const handleEdit = (id , name , prix,quantite) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Prix',prix);
        localStorage.setItem('Quantite',quantite);
        localStorage.setItem('Id',id);
    }
    const handleDelete=(id)=>{
        var index = Produit.map(function(e){
            return e.id
        }).indexOf(id);
        Produit.splice(index,1);
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
            <h1 style={{color:"red"}}>Liste des Produits</h1>
            <br></br>
                           
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Prix
                            </th>
                            <th>
                                Quantite
                            </th>
                            
                            <th>
                                Actions
                            </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    Produit && Produit.length>0
                                    ?
                                    Produit.map((item) =>{
                                        return(
                                            <tr>
                                                <td>
                                                    {item.Name}
                                                </td>
                                                <td>
                                                    {item.prix}
                                                </td>
                                                <td>
                                                    {item.quantite}
                                                </td>
                                                
                                                <td>
                                                    <Link to={'/editProd'}>
                                                    <Button onClick={() => handleEdit(item.id, item.Name, item.prix, item.quantite)}>Edit</Button>
                                                    </Link>
                                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                                </td>
                                                </tr>
                                        )
                                    })
                                    :
                                    "No data available"
                                }
                            </tbody>
                            </Table>
                            <br></br>
                            <Link className='d-grid gap-2' to="createProd">
                                <Button size="lg">Create</Button>
                            </Link>
                            <br></br>
                            <Link className='d-grid gap-2' to="ProductSearch">
                                <Button size="lg">search</Button>
                            </Link>
            </div>  
        </Fragment>
    )
}
export default ListeProd;
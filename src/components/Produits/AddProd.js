import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produit from './Produit';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function AddProd() {
  const [name, setName] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8); // Corrected the way to slice the ID

    let a = name,
      b = prix,
      c = quantite;

    Produit.push({ id: uniqueId, Name: a, prix: b, quantite: c }); // Assuming Produit is an array, you should use the push method of the array.

    history('/');
  };

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPrix'>
          <Form.Control type='text' placeholder='Enter prix' required onChange={(e) => setPrix(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formQuantite'>
          <Form.Control type='text' placeholder='Enter quantite' required onChange={(e) => setQuantite(e.target.value)} />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button> {/* Corrected the type from "button" to "submit" */}
      </Form>
    </div>
  );
}

export default AddProd;

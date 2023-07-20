import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produit from './Produit';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function EditProd() {
  const [name, setName] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');
  const [id, setId] = useState('');

  const history = useNavigate();

  useEffect(() => {
    // Fetch the product data from localStorage using the provided id
    const productId = localStorage.getItem('Id');
    const productData = Produit.find((product) => product.id === productId);

    if (productData) {
      setName(productData.Name);
      setPrix(productData.prix);
      setQuantite(productData.quantite);
      setId(productData.id);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the index of the product in the Produit array
    const productIndex = Produit.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      // Update the product with the new values
      Produit[productIndex] = {
        ...Produit[productIndex],
        Name: name,
        prix: prix,
        quantite: quantite,
      };

      // Save the updated product array to localStorage (assuming Produit is an array of objects)
      localStorage.setItem('Produit', JSON.stringify(Produit));
    }

    history('/');
  };

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPrix'>
          <Form.Control
            type='text'
            placeholder='Enter prix'
            value={prix}
            required
            onChange={(e) => setPrix(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formQuantite'>
          <Form.Control
            type='text'
            placeholder='Enter quantite'
            value={quantite}
            required
            onChange={(e) => setQuantite(e.target.value)}
          />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default EditProd;

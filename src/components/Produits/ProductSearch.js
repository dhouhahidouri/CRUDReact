import React, { useState } from 'react';
import Produit from './Produit';

function ProductSearch() {
  const produits = [
    { id: 1, name: 'javel' },
    { id: 2, name: 'phone' },
    { id: 3, name: 'TV' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filtrez les produits dont l'ID contient le terme de recherche
    const results = produits.filter((produit) =>
      produit.id.toString().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Recherche de produits</h1>
      <input
        type="text"
        placeholder="Rechercher un produit par son ID"
        value={searchTerm}
        onChange={handleSearch}
      />

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((produit) => (
            <li key={produit.id}>{produit.name}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit trouvé.</p>
      )}
    </div>
  );
}

export default ProductSearch;

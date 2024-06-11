import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
    image: `https://via.placeholder.com/150?text=Producto+${i + 1}`
  })));

  // Función para agregar un nuevo producto a la lista
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      image: `https://via.placeholder.com/150?text=Producto+${items.length + 1}`
    };
    setItems([...items, newItem]);
  };

  // Calcular la altura mínima de la tarjeta basada en el contenido
  useEffect(() => {
    const calculateCardHeight = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.height = 'auto';
        const cardHeight = card.offsetHeight;
        card.style.height = cardHeight + 'px';
      });
    };

    calculateCardHeight();

    window.addEventListener('resize', calculateCardHeight);
    return () => window.removeEventListener('resize', calculateCardHeight);
  }, [items]);

  return (
    <div style={{ padding: 10, margin: 0, width: '100%' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi Aplicación</a>
          <div className="d-flex">
            <button className="btn btn-primary me-2">Botón 1</button>
            <button className="btn btn-primary me-2">Botón 2</button>
            <button className="btn btn-primary">Botón 3</button>
          </div>
        </div>
      </nav>
      <div className="container-fluid" style={{ padding: 0 }}>
        <h1 className="text-center mt-5 mb-4">Lista de Productos</h1>
        <div className="row row-cols-3 g-4 justify-content-center">
          {items.map((item) => (
            <div className="col" key={item.id}>
              <div className="card mx-auto" style={{ width: '80%' }}> {/* Ajustar el ancho al 80% y centrar horizontalmente */}
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={addItem}>Agregar Producto</button>
        </div>
      </div>
    </div>
  );
}

export default App;


























import { useState } from 'react';
import './App.css'

import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';
import { Card } from './components/card/card';

function App() {
  const {data} = useFoodData();
  const [isModalOpent, setIsModalOpen] = useState(false);
  const OpenModal = () => {
    setIsModalOpen(true);
  }
  const CloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="app">
        <div className="header">
          <h1>Cardápio</h1>
          <p className="subtitle">Selecione sua refeição favorita</p>
        </div>

      <main className="Container">
        <div className='card-grid'>
          {data?.map((foodData =>
            <Card
              key={foodData.id}
              price={foodData.price}
              title={foodData.title}
              img={foodData.img}
            />))}
        </div>
            {isModalOpent && <CreateModal onClose={CloseModal} />}
            <button className="btn-new" onClick={OpenModal}>Novo</button>
            
      </main>
    </div>
  )
}

export default App;

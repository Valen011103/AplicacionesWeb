import { FC } from 'react';
import './App.css';               
import { Options } from './Componentes/Options';
import { Card }      from './Componentes/Card';
import { Clickbutton } from './Componentes/Clickbutton';



const App: FC = () => (
  <div className="container">
    <div className="box">
      <Options/>
    </div>
    <div className="box">
      <Card />
    </div>
    <div className="box">
      <Clickbutton />
    </div>
  </div>
);

export default App;

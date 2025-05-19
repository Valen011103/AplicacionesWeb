import { FC } from 'react';
import './App.css';               
import { Options } from './Componentes/Options';
import { Card }      from './Componentes/Card';
import { Clickbutton } from './Componentes/Clickbutton';
import styled from 'styled-components';



// const App: FC = () => (
//   <div className="container">
//     <div className="box">
//       <Options/>
//     </div>
//     <div className="box">
//       <Card />
//     </div>
//     <div className="box">
//       <Clickbutton />
//     </div>
//   </div>
// );

// export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 40px auto;
`;

const Box = styled.div`
  background-color: #f5b800;
  border-radius: 15px;
  flex: 1;
  margin: 0 10px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => (
  <Container>
    <Box>
      <Options />
    </Box>
    <Box>
      <Card />
    </Box>
    <Box>
      <Clickbutton />
    </Box>
  </Container>
);

export default App;

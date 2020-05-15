import React, { useState } from 'react';
import TextField from "./TextField"
import { Layout, Typography, Button } from "antd"
import { grey } from '@ant-design/colors';
import "./styles/App.css"
import Timer from './Timer';


const App:React.FC = () => {

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  const [isGameOn,setGameOn] = useState(false);

  const startGame = ()=>{
    setGameOn(true);
  }

  return (
    <Layout className="App" >

      <Header style={{ backgroundColor: "#ffffff", padding: "100px" }}>
        <Title style={{ color: grey[4] }} >Speed-Type</Title>
      </Header>

      <Content unselectable="on" style={{ padding: "10px",}}>

        {(isGameOn) && <Timer/>}

        <TextField text="Helllo" />
        <Button type="primary" size="large" onClick={startGame} disabled={isGameOn}>Start</Button>
      </Content>

      <Footer>Made by SD</Footer>
    </Layout>
  );
}

export default App;

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
  const [startTime, setStartTimeState] = useState(new Date());
  const [typedPara, setTypedPara] = useState("");
  const [result, setResult] = useState(0);

  const startGame = ()=>{
    setGameOn(true);
    setStartTimeState(new Date())    
  }

  const timeUp = ()=> {
    setGameOn(false)
    console.log(`Speed: ${result} wpm!`)
  }

  const wpm = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    let endTime = new Date()
    let timeElapsed = Math.round((endTime.valueOf() - startTime.valueOf())/1000)

    setTypedPara(e.target.value);

    let currentResult = typedPara.split(" ").length/timeElapsed * 60;
    setResult(currentResult);
  }  

  return (
    <Layout className="App" >

      <Header style={{ backgroundColor: "#ffffff", padding: "100px" }}>
        <Title style={{ color: grey[4] }} >Speed-Type</Title>
      </Header>

      <Content unselectable="on" style={{ padding: "10px",}}>

        {(isGameOn) && <Timer timeUp={timeUp}/>}
        <Title level={2}>WPM: {result}</Title>
        <TextField text="Helllo" wpm={wpm} gameStatus = {isGameOn}/>
        <Button type="primary" size="large" onClick={startGame} disabled={isGameOn}>Start</Button>
      </Content>

      <Footer>Made by SD</Footer>
    </Layout>
  );
}

export default App;

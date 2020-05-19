import React from "react"
import { Input,Space } from "antd"
import { inputFieldStyle,textfieldstyle } from "./styles/textfieldstyle";

interface Props {
    text: string;
    wpm: (event: React.ChangeEvent<HTMLTextAreaElement>)=> void;
    gameStatus: boolean;
}

const TextField: React.FC<Props> = (props) =>{
    
    const { TextArea } = Input;
    // const selectedPara = randomParagenerator(difficulty);
    const selectedPara = props.text;
    return(
        <div>
            <Space direction="vertical" style={{width:"100%"}}>
                <TextArea className="placeholder1" rows={4} style={textfieldstyle} value={selectedPara} disabled readOnly/>
                <TextArea className="placeholder2" rows={4} style={inputFieldStyle} onChange={props.wpm} placeholder="Start typing here.." disabled={!props.gameStatus}/> {" "}
            </Space>
        </div>
    )
}
export default TextField;
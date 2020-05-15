import React from "react"
import { Input,Space } from "antd"
import { inputFieldStyle,textfieldstyle } from "./styles/textfieldstyle";

const TextField: React.FC<{text: string}> = (props) =>{
    
    const { TextArea } = Input;
    // const selectedPara = randomParagenerator(difficulty);
    const selectedPara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    return(
        <div>
            <Space direction="vertical" style={{width:"100%"}}>
                <TextArea className="placeholder1" rows={4} style={textfieldstyle} value={selectedPara} disabled readOnly/>
                <TextArea className="placeholder2" rows={4} style={inputFieldStyle} placeholder="Start typing here.."/> {" "}
            </Space>
            {/* <Button type="primary">Button</Button> */}
        </div>
    )
}
export default TextField;
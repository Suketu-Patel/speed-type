import React, { useEffect, useState } from "react"
import { Typography } from "antd"

interface Props {
    timeUp : ()=> void;
}

const Timer: React.FC<Props> = (props) => {
    const { Title } = Typography;
    const [seconds,setSeconds] = useState(10);
    console.log(seconds)
    useEffect(()=>{
        const myInterval = setInterval(() => {
            if (seconds > 1) {
                setSeconds(seconds-1);
            }
            else if(seconds <= 1){
                props.timeUp();
            }
        }, 1000)
        return () => clearInterval(myInterval);
        // eslint-disable-next-line
    },[seconds])

    return(
        <div>
            <Title level={2}>Time left: {seconds}s</Title>
        </div>
    )
}

export default Timer;
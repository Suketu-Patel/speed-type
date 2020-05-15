import React, { useEffect, useState } from "react"
import { Typography } from "antd"

const Timer: React.FC = () => {
    const { Title } = Typography;
    const [seconds,setSeconds] = useState(60);
    console.log(seconds)
    useEffect(()=>{
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds-1)
            }
        }, 1000)
        return () => clearInterval(myInterval);
    },[seconds])

    return(
        <div>
            <Title level={2}>Time left: {seconds}s</Title>
        </div>
    )
}

export default Timer;
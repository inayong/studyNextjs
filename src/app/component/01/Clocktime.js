import { useState, useEffect } from "react";

const Clocktime = () => {

    //useState 변수
    const [dt, setDt] = useState(new Date().toLocaleTimeString());

    //useEffect 함수(콜백함수가짐 + dependency array) : 처음 한번만 실행
    useEffect(() => {
        const t = setInterval(() => {
            setDt(new Date().toLocaleTimeString());
            // console.log(dt);
        }, 1000);

        return () => {clearInterval(t)}; //콜백함수로
    }, []);
    
    //useEffect : 특정 변수가 바뀔때 실행
    useEffect(() => {
        console.log(dt);
    }, [dt]);

    return (
        <>
            <p className="text-lime-700">
                Hello NextJS!!
            </p>
            <div>현재시간 : {dt}</div>
        </>
    );
}


export default Clocktime;
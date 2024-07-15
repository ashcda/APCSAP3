import { useEffect, useState } from "react"
import { Card } from "./Card";

import './MainSection.css'
export const MainSection = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(response=> response.json())
        .then(result => setData(result.products));
    }, [])

    return(
        <main>
            <div className="card-container">
            {
                data.map((item)=>{
                    return (
                        <Card key={item.id} product={item}/>
                    )
                })
            }
            </div>
        </main>
    )
}
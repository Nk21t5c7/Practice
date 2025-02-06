import { useState, useEffect } from "react";
import axios from "axios";

interface DataProps{
    data:object;
}

const Image: React.FC<DataProps>  = ({data}) => {

    console.log(data);
    const [img, setImg] = useState<string>("");

    useEffect(() =>{
        axios.get("http://localhost:3098/current-image")
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

    }, [img])

    return(
        <>
        </>
    )
}

export default Image;
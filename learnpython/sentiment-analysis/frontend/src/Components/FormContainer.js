import { useEffect, useState } from "react";
import axios from 'axios';

export default function FormContainer({setRating}) {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:5000')
            .then((result) => {
                console.log(result.data);

            }).catch((err) => {
                console.log(err);
            });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/msg', { msg: msg })
            .then((result) => {
                console.log(result.data);
                setRating(result.data.result);

            }).catch((err) => {
                console.log(err);

            });
    }

    const handleEdit = (e) => {
        setMsg(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="msg">Message</label>
            <textarea id = "msg" value = {msg} onChange={handleEdit}>

            </textarea>

            <input type="submit" />
        </form>
    )
}
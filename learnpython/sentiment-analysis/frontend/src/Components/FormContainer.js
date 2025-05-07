import { useEffect, useState } from "react";
import axios from 'axios';

export default function FormContainer() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:5000')
            .then((result) => {
                console.log(result);

            }).catch((err) => {
                console.log(err);
            });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000', { msg: msg })
            .then((result) => {
                console.log(result);

            }).catch((err) => {
                console.log(err);

            });
    }

    const handleEdit = (e) => {
        setMsg(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Message</label>
            <textarea onChange={handleEdit}>

            </textarea>

            <input type="submit" />
        </form>
    )
}
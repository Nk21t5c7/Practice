import Papa from 'papaparse';
import axios from 'axios';
import { useEffect, useRef } from 'react';

export default function Upload({ csvData, setCsvData }) {
    const isFirstRender = useRef(true);
    // const [selected, setSelected] = useState("");

    const selected = document.getElementById('selectFile');

    function handleSubmitFile(e) {
        e.preventDefault();
        handleUpload();
    }

    useEffect(() => {
        if (isFirstRender.current || !selected) {
            isFirstRender.current = false;
            return;
        }

        if (selected.value === 'blast') {
            axios.post('http://localhost:3030/register-blast', { csvData })
                .then((res) => {
                    console.log(csvData)
                    console.log('res.data', res.data)
                })
                .then(result => {
                    if (result.ok) setCsvData([])
                })
                .catch(error => console.log(error));
        };
        if (selected.value === 'dog') {
            axios.post('http://localhost:3030/register-dog', { csvData })
                .then((res) => {
                    console.log(csvData)
                    console.log('res.data', res.data)
                })
                .then(result => {
                    if (result.ok) setCsvData([])
                })
                .catch(error => console.log(error));
        };
        if (selected.value === 'userData') {
            axios.post('http://localhost:3030/register-csv', { csvData })
                .then((res) => {
                    console.log(csvData)
                    console.log('res.data', res.data)
                })
                .then(result => {
                    if (result.ok) setCsvData([])
                })
                .catch(error => console.log(error));
        };
    }, [csvData]);

    // execute when theres update in csvData

    async function handleUpload() {
        const csvInput = document.getElementById('csvInput');
        const file = csvInput.files[0];
        if (!file) console.log('No file');

        try {
            await convertCsv(file);
        }
        catch (err) {
            console.log(err);
        }

        // Papa parse takes two arguments
        // 1. file to pass,
        // 2. option to pass
        // header:true indicates that first row of csv contains header info 
        // execute complate callback function when the parsing is completed successfully
    }

    async function convertCsv(file) {
        return await new Promise((res, rej) => {
            Papa.parse(file, {
                header: true,
                complete: (result) => {
                    console.log(result);
                    setCsvData(result.data);
                    res(result.data);

                },
                err: (error) => {
                    console.log(error);
                    rej(error);

                }
            })
        })
    }




    return (
        <form className='sendCsv' onSubmit={handleSubmitFile}>
            <select id='selectFile' defaultValue="userData">
                <option value="userData">User name</option>
                <option value="blast">Blast</option>
                <option value="dog">Dog</option>
            </select>

            <input type="file" accept='.csv' id='csvInput' />
            <button>Submit</button>
        </form>
    )
}

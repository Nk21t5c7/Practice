import React , {useState} from "react";
import { Header } from "../components/Header";
import Form from "next/form";

const Dataset = () => {

  const [data, setData] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file");
    console.log(file);
    if (file instanceof File) {
      const reader = new FileReader();
  
      reader.onload = () => {
        const fileContent = reader.result;
        console.log(fileContent); 
  
      reader.readAsText(file);
      
    }
    }
  }

  return (
    <div>
      <Header />
      <main>
        <h2 className="text-red-200">Lorem, ipsum dolor.</h2>
        <div>
          <Form action="" onSubmit = {handleSubmit}>
            <input name = "file" type = "file" />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Dataset;

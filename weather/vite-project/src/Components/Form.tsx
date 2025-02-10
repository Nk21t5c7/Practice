import {useState} from 'react';
import { FormControl, InputLabel, Input, TextField } from "@mui/material";
import Button from "@mui/material/Button";

interface formData{
    city: string;
    country:string;
    description: string;
    latitude: number;
    longitude: number;
}

const Form = () => {
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();

  return (
    <div className="m-auto max-w-[1200px]  p-6 ">
      <h3 className="text-2xl my-4">Add another city</h3>
      <form className="grid grid-cols-[1fr_1fr] gap-4">
        <InputLabel htmlFor = "city" className="col-start-1 col-end-2">City</InputLabel>
        <Input id='city' name = "city" className="col-start-2 col-end-3"/>

        <InputLabel htmlFor = "country" className="col-start-1 col-end-2">Country</InputLabel>
        <Input id='country'  name = "country" className="col-start-2 col-end-3"/>

        <InputLabel htmlFor = "latitude" className="col-start-1 col-end-2">Latitude</InputLabel>
        <Input id='latitude' name = "latitude" className="col-start-2 col-end-3"/>

        <InputLabel htmlFor = "longitude" className="col-start-1 col-end-2">Longitude</InputLabel>
        <Input id='longitude' name='longitude' className="col-start-2 col-end-3"/>

        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          className="col-start-1 col-end-3 py-4"
          //   startIcon={<CloudUploadIcon />}
        >
          <input type="file" className="opacity-0 appearance-none absolute" />
          Upload files
        </Button>

        <Button
          variant="contained"
          className="border-1 col-start-1 col-end-3 mt-10 py-2  justify-center self-center content-center"
          type="submit"
        >
          <input type="submit" className="opacity-0 appearance-none absolute" />
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;

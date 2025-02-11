import React from "react";
import axios from "axios";
import { useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";

import Button from "@mui/material/Button";

interface formData {
  city: string;
  country: string;
  description: string;
  latitude: number;
  longitude: number;
  url: string;
}

const Form = () => {
  // const [city, setCity] = useState<string>("");
  // const [country, setCountry] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [lat, setLat] = useState<number>();
  // const [lon, setLon] = useState<number>();

  const [data, setData] = useState<formData>({
    city: "",
    country: "",
    description: "",
    latitude: 0,
    longitude: 0,
    url: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendData();
  }

  function sendData() {
    axios
      .post("https://localhost:3098/insert-data", { data })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="m-auto max-w-[1200px]  p-6 ">
      <h3 className="text-2xl my-4">Add another city</h3>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_90%] gap-4"
      >
        <FormControl>
          <InputLabel
            htmlFor="city"
            className="col-start-1 col-end-2 text-right"
          >
            City
          </InputLabel>
          <Input
            id="city"
            onChange={(e) => setData({ ...data, city: e.target.value })}
            name="city"
            value={data.city}
            className="col-start-2 col-end-3"
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor="country"
            className="col-start-1 col-end-2 text-right"
          >
            Country
          </InputLabel>
          <Input
            id="country"
            onChange={(e) => setData({ ...data, country: e.target.value })}
            name="country"
            value={data.country}
            className="col-start-2 col-end-3"
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor="latitude"
            className="col-start-1 col-end-2 text-right"
          >
            Latitude
          </InputLabel>
          <Input
            id="latitude"
            onChange={(e) => setData({ ...data, latitude: Number(e.target.value) })}
            name="latitude"
            value={data.latitude}
            className="col-start-2 col-end-3"
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor="longitude"
            className="col-start-1 col-end-2 text-right"
          >
            Longitude
          </InputLabel>
          <Input
            id="longitude"
            onChange={(e) => setData({ ...data, longitude: Number(e.target.value) })}
            name="longitude"
            value={data.longitude}
            className="col-start-2 col-end-3"
          />
        </FormControl>

        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          className="col-start-1 col-end-3 py-4"
          //   startIcon={<CloudUploadIcon />}
        >
          <Input
            id="url"
            onChange={(e) => setData({ ...data, url: e.target.value })}
            name="url"
            value={data.url}
            type="file"
            className="opacity-0 appearance-none absolute"
          />
          Upload files
        </Button>

        <Button
          variant="contained"
          className="border-1 col-start-1 col-end-3 mt-10 py-2  justify-center self-center content-center"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Form;

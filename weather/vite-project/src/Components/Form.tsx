import React from "react";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Textarea from "@mui/joy/Textarea";
import { FormControl, InputLabel, Input, Box } from "@mui/material";

import Button from "@mui/material/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// interface formData {
//   city: string;
//   country: string;
//   description: string;
//   latitude: number;
//   longitude: number;
//   url: string;
// }

const Form = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  // const [data, setData] = useState<formData>({
  //   city: "",
  //   country: "",
  //   description: "",
  //   latitude: 0,
  //   longitude: 0,
  //   url: "",
  // });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    // let formData: FormData = new FormData();
     formData.append("url", selectedFile);
    // formData.append("city", city);
    // formData.append("country", country);
    // formData.append("latitude", latitude.toString());
    // formData.append("longitude", longitude.toString());
    // formData.append("description", description);

    console.log(formData, selectedFile);

    try {
      const response = await axios.post("http://localhost:3098/insert-data", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload success:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="m-auto max-w-[1200px]  p-6 ">
      <h3 className="text-2xl my-4">Add another city</h3>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_auto] gap-4"
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
            onChange={(e) => setCity(e.target.value)}
            name="city"
            value={city}
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
            onChange={(e) => setCountry(e.target.value)}
            name="country"
            value={country}
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
            onChange={(e) => setLatitude(Number(e.target.value))}
            name="latitude"
            value={latitude}
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
            onChange={(e) =>
              setLongitude(Number(e.target.value))
            }
            name="longitude"
            value={longitude}
            className="col-start-2 col-end-3"
          />
        </FormControl>
        <FormControl className="col-start-1 col-end-3">
          <Textarea
            onChange={(e) => {
              setDescription((e.target.value ));
            }}
            value={description}
            className="h-[20vh]"
          />
        </FormControl>

        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          className="col-start-1 col-end-3 py-4 relative"

          //   startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            id="url"
            onChange={handleChangeFile}
            name="url"
            // value={selectedFile}
            type="file"
          />
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

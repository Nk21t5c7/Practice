import { useState } from "react";
// import axios from "axios";
import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@mui/material/Button";

interface formData {
  userName: string;
  password: string;
}

const Login = () => {
  const [loginInput, setLoginInput] = useState<formData>({
    userName: "",
    password: "",
  });
  return (
    <>
      <form>
        <FormControl>
          <InputLabel
            htmlFor="userName"
            className="col-start-1 col-end-2 text-right"
          >
            User Name
          </InputLabel>
          <Input
            id="userName"
            onChange={(e) =>
              setLoginInput({ ...loginInput, userName: e.target.value })
            }
            name="userName"
            value={loginInput.userName}
            className="col-start-2 col-end-3"
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor="password"
            className="col-start-1 col-end-2 text-right"
          >
            Password
          </InputLabel>
          <Input
            id="password"
            onChange={(e) =>
              setLoginInput({ ...loginInput, password: e.target.value })
            }
            name="password"
            value={loginInput.password}
            className="col-start-2 col-end-3"
          />
        </FormControl>

        <Button
          variant="contained"
          className="border-1 col-start-1 col-end-3 mt-10 py-2  justify-center self-center content-center"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Login;

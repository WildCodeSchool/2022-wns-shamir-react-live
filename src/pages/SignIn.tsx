import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GET_TOKEN = gql`
  mutation GetToken($password: String!, $email: String!) {
    getToken(password: $password, email: $email)
  }
`;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const [loadToken] = useMutation(GET_TOKEN, {
    variables: {
      email: username,
      password: password,
    },
    onCompleted(data) {
      console.log(data.getToken);
      localStorage.setItem("token", data.getToken);
      navigate("/");
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <div>
      Login{" "}
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br />
      Password{" "}
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          loadToken();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default SignIn;

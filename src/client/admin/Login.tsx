import * as React from "react";
import { useHistory } from "react-router-dom";
import { apiService, setToken, User } from "../utils/apiService";

export const Login: React.FC<ILoginProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const history = useHistory();

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let credentials = {
      email,
      password,
    };
    try {
      let res = await apiService(`auth/login`, "POST", credentials);
      if (res) {
        setToken(res.token, { userid: res.userid, role: res.role });
        history.push("/admin");
      } else {
        alert("Incorrect Login Informatin. Try Again.");
      }
    } catch (err) {
      throw err;
    }
  };

  React.useEffect(() => {
    (async () => {
      if (User.userid !== null || User.role === "admin") {
        history.push("/admin");
      }
    })();
  }, []);

  return (
    <main className="container my-5">
      <div className="w-50 mx-auto">
        <h1 className="text-dark text-center border-bottom border-info p-2 mb-2">
          Login
        </h1>
        <form>
          <div className="my-3 form-group">
            <h3>Email address</h3>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="my-3 form-group">
            <h3>Password</h3>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-info d-block w-25 mx-auto"
            onClick={login}
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
};

export interface ILoginProps {}

export default Login;

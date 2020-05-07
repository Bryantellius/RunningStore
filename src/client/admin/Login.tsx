import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiService, setToken, User } from "../utils/apiService";

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }

  login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(this.state);
    try {
      let res = await apiService(`auth/login`, "POST", this.state);
      if (res) {
        setToken(res.token, { userid: res.userid, role: res.role });
        this.props.history.push("/admin");
      } else {
        alert("Incorrect Login Informatin. Try Again.");
        
      }
    } catch (err) {
      throw err;
    }
  };

  async componentDidMount() {
    if (User.userid !== null || User.role === "admin") {
      this.props.history.push("/admin");
    }
  }

  render() {
    return (
      <main className="container my-5">
        <div className="w-50 mx-auto">
          <h1 className="text-dark text-center border-bottom border-info p-2 mb-2">
            Login
          </h1>
          <Form>
            <Form.Group className="my-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ password: e.target.value })
                }
              />
            </Form.Group>

            <Button
              variant="info"
              type="submit"
              className="d-block w-25 mx-auto"
              onClick={this.login}
            >
              Log In
            </Button>
          </Form>
        </div>
      </main>
    );
  }
}

export interface ILoginProps extends React.ComponentPropsWithRef<any> {}

export interface ILoginState {
  email: string;
  password: string;
}

export default Login;

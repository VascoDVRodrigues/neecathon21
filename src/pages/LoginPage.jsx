import PageLayoutPublic from "../PageLayoutPublic"
import Login from "../components/Login";

function LoginPage() {
  return (
    <PageLayoutPublic children={<Login />} />
  );
}

export default LoginPage;
import PageLayout from "../PageLayout";
import Login from "../components/Login";

function LoginPage() {
  return (
    <PageLayout children={<Login />} />
  );
}

export default LoginPage;
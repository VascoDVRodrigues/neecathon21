import PageLayout from "../PageLayout";
import Error from "../components/Error";

function ErrorPage() {
  return (
    <PageLayout children={<Error />} />
  );
}

export default ErrorPage;
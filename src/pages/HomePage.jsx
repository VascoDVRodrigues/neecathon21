import PageLayout from "../PageLayout";
import Home from "../components/Home";

function HomePage() {
  return (
    <PageLayout children={<Home />} />
  );
}

export default HomePage;
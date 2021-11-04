import PageLayout from "../PageLayout";
import Game from "../components/Game";

function GamePage() {
  return (
    <PageLayout children={<Game />} />
  );
}

export default GamePage;
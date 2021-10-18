import PageLayout from "../PageLayout";
import Shop from "../components/Shop";

function ShopPage() {
  return (
    <PageLayout children={<Shop />} />
  );
}

export default ShopPage;
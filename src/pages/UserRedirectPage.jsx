import PageLayoutPublic from "../PageLayoutPublic"
import UserRedirect from "../components/UserRedirect";

function UserRedirectPage() {
  return (
    <PageLayoutPublic children={<UserRedirect />} />
  );
}

export default UserRedirectPage;
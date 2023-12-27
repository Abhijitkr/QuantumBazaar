import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfle";

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <h1 className="px-4 text-3xl mx-auto font-semibold tracking-tight text-gray-900 leading-7">
          My Profile
        </h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;

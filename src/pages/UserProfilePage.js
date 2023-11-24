import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfle";

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <h1 className="text-2xl mx-auto">My Profile</h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;

import NavBar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className="text-2xl mx-auto">My orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;

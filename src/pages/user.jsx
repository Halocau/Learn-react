import UserForm from "../components/user/userForm";
import UserTable from "../components/user/userTable";

const UsersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>
    );
}

export default UsersPage;
import { Input, Button } from 'antd';
const UserForm = () => {
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input placeholder="Enter your fullname" />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Enter your email" />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="Enter your password" />
                </div>
                <div>
                    <span>Phone</span>
                    <Input placeholder="Enter your phone" />
                </div>
                <div><Button type="primary">Create</Button></div>
            </div>
        </div>
    )
}
export default UserForm
import { Input, Button, notification, Space } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/ApiService';


const UserForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullname, email, password, phone);
        if (res.data && res.data.data) {

            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
        }
        console.log(">>>check res: ", res.data);  // bỏ vào {} nhanh shift + {
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        placeholder="Enter your fullname"
                        value={fullname}
                        onChange={(e) => { setFullname(e.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Enter your email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="Enter your password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone</span>
                    <Input placeholder="Enter your phone"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                </div>
                <div><Button type="primary"
                    // onClick={() => { alert("Click me") }}//chuyền tham số hàm
                    onClick={handleClickBtn}//tham chiếu hàm
                >Create</Button></div>
            </div>
        </div>
    )
}
export default UserForm
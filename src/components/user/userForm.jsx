import { Input, Button } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    // console.log("info: ", fullname, email, password, phone);

    const handleClickBtn = () => {
        // alert("Click me")
        console.log("check state: ", { fullname, email, password, phone });  // bỏ vào {} nhanh shift + {
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        placeholder="Enter your fullname"
                        value={fullname}
                        onChange={(event) => { setFullname(event.target.value) }}
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
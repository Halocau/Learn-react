import { Input, Button, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/ApiService';


const UserForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullname, email, password, phone);

        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
            setIsModalOpen(false)
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)//format duoi dang string (array hay gi do cung format ve string)
            })
        }
        console.log(">>>check res: ", res.data);  // bỏ vào {} nhanh shift + {
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table user</h3>
                <Button type="primary"
                    // onClick={() => { alert("Click me") }}//chuyền tham số hàm
                    onClick={() => { setIsModalOpen(true) }}//tham chiếu hàm
                >Create</Button>
            </div>

            <Modal
                title="Create user"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleSubmitBtn}
                okText={"Create"}
                onCancel={() => { setIsModalOpen(false) }}
                maskClosable={false}// click chuột ra ngoài sẽ ko bị đóng modal
            >
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
                </div>
            </Modal>
        </div>
    )
}
export default UserForm
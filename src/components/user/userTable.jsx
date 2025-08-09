import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/ApiService';
import { useState } from 'react';

const UserTable = () => {
    const loadUser = async () => {
        console.log("run load user START")
        const res = await fetchAllUserAPI();
        setDataUsers(res.data)
        console.log("run load user END", res)
    }
    loadUser();
    const [dataUsers, setDataUsers] = useState([
        {
            name: 'Bui Tien Quat',
            age: '22',
            address: 'Dai hoc FPT'
        },
        {
            name: 'Bui Tien',
            age: '23',
            address: 'Ha Noi'
        }
    ]);


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    // const data = [

    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    return (
        <Table columns={columns} dataSource={dataUsers} />
    );
}

export default UserTable
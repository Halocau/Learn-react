//() => {}
//JSX chỉ có 1 cha duy nhấtast
// component = html + css + js
//fragment: giúp ko phá vỡ cấu trúc html (ko render bừa bãi html)
// phải dùng className thay vì class vì dùng class sẽ bị trùng với js
// trong jsx thì css inline là 1 object

import './style.css';

const MyCompomnent = () => { //tag

    //NGUYÊN THUỶ
    // const name = 'Hà Nội';
    // const name = 21;
    // const name = true;// ko in ra gì cả
    // const name = undefined;// ko in ra gì cả

    //ARRAY
    // const person = [1, 2, 3, 4, 5];

    const person = {
        name: 'Bùi Tiến Quát',
        age: 22,
        address: 'Hà Nội'
    }
    // 1 biến object qua String => JSON.stringify (covert object to string)
    return (
        <>
            <div>{console.log("a hi hi")}</div>
            <div style={// use javascript in html
                {// use object
                    color: 'blue',
                    backgroundColor: 'red',
                }
            }>{JSON.stringify(person)} & My Components</div>
            <div className="test">fake</div>
        </>
    );
}
export default MyCompomnent;
// export default function MyCompomnent() {
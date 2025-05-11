//() => {}
//JSX chỉ có 1 cha duy nhấtast
// component = html + css + js
//fragment: giúp ko phá vỡ cấu trúc html (ko render bừa bãi html)
// phải dùng className thay vì class vì dùng class sẽ bị trùng với js
// trong jsx thì css inline là 1 object

import './style.css';

const MyCompomnent = () => { //tag
    return (
        <>
            <div style={
                {
                    color: 'blue',
                    backgroundColor: 'red',
                }
            }>My Components</div>
            <div className="test">fake</div>
        </>
    );
}
export default MyCompomnent;
// export default function MyCompomnent() {
// export default function Start() {
//     return (
//         <div>
//             <h2>Start.jsx Area</h2>
//         </div>
//     )
// }

const Start = ({name}) => {

    // css 파일을 생성하여 import 하는 방법
    // style 객체를 선언하는 방법
    const style = {
        color: 'white',
        backgroundColor : 'black'
    }

    return (
        <div>
            <h2>Start.jsx Area</h2>
            <div style={style}>{name} 님 안녕하세요! </div>
        </div>
    )
}

export default Start;
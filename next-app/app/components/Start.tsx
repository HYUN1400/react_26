export default function Start() {
    // 내부변수사용
    const name = "anthony";

    // 스타일 객체 선언
    const style = {
        color: 'white',
        backgroundColor: 'black',
        padding: '5px 20px',
        borderRadius: '5px'
    }

    return (
        <div>
            <h2 style={style}>Start.tsx area {name} Hello!</h2>
        </div>
    )
}
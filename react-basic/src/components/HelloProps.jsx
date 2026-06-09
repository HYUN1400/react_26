function HelloProps({name, age, gender}) {
    // props => properties 
    // 컴포넌트에게 전달해야 하는 값이 있을 때 사용 => 파라미터로 전달 받음 


    return (
        <div>
            {name}({age}) / {gender}
        </div>
    )
}

export default HelloProps;
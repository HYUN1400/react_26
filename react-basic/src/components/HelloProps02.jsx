import React, { useState } from 'react'

export default function HelloProps02(props) {
    const {name, age, gender} = props;


  return (
    <div>
        {name}({age}) / {gender}
    </div>
  )
}

// startProps name, phone => 홍길동님 전화번호는 1111입니다.
import * as React from 'react'; // 이거 없으면 jsx못씀 <></>
import { useState, useRef } from 'react';


const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    // 함수 분리 시 타입 추론 안되니까 적어줘야함
    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second) {
            // 정답
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            // input 추론은  useRef 는 HTMLInputElement 넣어줘야함
            // input!.focus는 input이 확신이 있을 때만 사용
            if (input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');
            if (input) {
                input.focus();
            }
        }
    };

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                {/* 여기서 e는 type 추론이됨 */}
                <input ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
            </form>
            <div>{result}</div>
        </>
    )
};

export default GuGuDan
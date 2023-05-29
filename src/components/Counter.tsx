// // How to use "useState" directly in the component
// import { useState } from 'react'

// const Counter = () => {
//     const [count, setCount] = useState<number>(1)

//     return (
//         <>
//             <h1>Count is {count}</h1>
//             <button onClick={() => setCount(prev => prev + 1)}>increase</button>
//             <button onClick={() => setCount(prev => prev - 1)}>decrease</button>
//         </>
//     )
// }
// export default Counter


// How to use TS with drilled props
import { ReactNode } from 'react'

type CounterProps = {
    setCount:  React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({ setCount, children}: CounterProps) => {

    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>decrease</button>
        </>
    )
}
export default Counter
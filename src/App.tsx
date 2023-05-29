import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react'

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n - 1) + fib(n + 2)
}

const myNum: number = 1

function App() {
  // // there a not any complains from typeScript like it uses inference 
  // const [count, setCount] = useState(0)
  // but we can be more explicit
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  // // TS not complain if we remove the optional chaining. But doesn't me that this cound't be null
  // console.log(inputRef.current)

  console.log(inputRef?.current)

  // console.log(inputRef?.current.value)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    // console.log('mounting')
    // console.log('Users: ', users)

    // return () => console.log('unmounting')
  }, [users])

  // Event (e) is not used in this function, but it's only to show how much it can be specific
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={addTwo}>Click</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App

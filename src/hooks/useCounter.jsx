import React, { useState } from 'react'

const useCounter = (initialValue, stock) => {

  const [count, setCount] = useState(initialValue)

  const increase = () => {
    count < stock && setCount(count + 1)
  }

  const decrease = () => {
    count > initialValue && setCount(count - 1)
  }
  return { count, increase, decrease }
}

export default useCounter
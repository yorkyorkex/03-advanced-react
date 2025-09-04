import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('john')
  const codeExample = text || 'default text'
  return (
    <>
      <h2>short circuit overview</h2>
      <h3>False OR {text || 'default text'}</h3>
      <h3>False And {text && 'default text'}</h3>
      <h3>True OR {name || 'default name'}</h3>
      <h3>True And {name && 'default name'}</h3>
      {codeExample}
    </>
  )
}
export default ShortCircuitOverview

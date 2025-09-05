import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  /*   const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false)
      return
    } else {
      setShowAlert(true)
    }
  } */

  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'hide' : 'show'}
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className="alert alert-danger">Alert! Toggle me!</div>
}

export default ToggleChallenge

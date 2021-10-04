import React from "react"
import StyledForm from "./styles"

function App() {
  return (
    <StyledForm>
      <form style={{margin: 'auto'}}>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm>
  )
}

export default App
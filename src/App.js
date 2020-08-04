import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App

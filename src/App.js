import * as React from "react";
import imgSrc from './assets/images/tijo.png'

import Header from "./components/Header";
import RouterModule from "./router";
export default function App() {

  const [navActive, setNavActive] = React.useState(false)

  const onNavButtonClick = () => {
    setNavActive(!navActive)
    if (!navActive) {
      document.body.classList.add('hide-scroll')
    }else{
      document.body.classList.remove('hide-scroll')
    }
  }
  return (
    <React.Fragment>
      <main className="main">
        {/* Header */}
        <Header navActive={navActive} onNavButtonClick={onNavButtonClick} />
        {/* Header End */}
        <RouterModule navActive={navActive} imgSrc={imgSrc} onNavButtonClick={onNavButtonClick}  />

      </main>
    </React.Fragment>

  );
}


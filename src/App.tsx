import { useRef } from 'react';
import './App.css'
import ScrollAnimationComponent from './scrollanimation/scrollcomponent'
import ScrollSpaceComponent from './scrollanimation/scrollspace'
import LoadingBar from './loadingbar/loadingbar'
import HamburgerMenu from './navbar/navbar';
import Projects from './projects/projects';
import LoadingScreen from './loadingscreen/loadingscreen';

function App() {
  const scrollSpaceRef = useRef<HTMLDivElement>(null);

  return (
  <div className="mainmain">
    <LoadingScreen />
    <div className="main">
      <HamburgerMenu />
      <LoadingBar scrollSpaceRef2={scrollSpaceRef}/>
      <ScrollSpaceComponent ref={scrollSpaceRef} />
      <ScrollAnimationComponent scrollSpaceRef={scrollSpaceRef} />
      <Projects />
      <LoadingScreen />
    </div>
  </div>
  )
}

export default App

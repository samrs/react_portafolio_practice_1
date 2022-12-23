import design from '../src/assets/design.png'
import code from '../src/assets/code.png'
import consulting from '../src/assets/consulting.png'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Description from './components/Description'
import { CardInfo } from './components/CardInfo'
import web1 from '../src/assets/web1.png';
import web2 from "../src/assets/web2.png";
import web3 from "../src/assets/web3.png";
import web4 from "../src/assets/web4.png";
import web5 from "../src/assets/web5.png";
import web6 from "../src/assets/web6.png";


function App() {
  return (
    <>
      <main className="bg-white px-10">
        <NavBar/>
        <Presentation/>
        <section>
          <Description/>
          <CardInfo image = {design} title = "Beautiful designs"/>
          <CardInfo image = {code} title = "React"/>
          <CardInfo image = {consulting} title = "Consult"/>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portafolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, pariatur maxime? Maxime adipisci aliquid excepturi nihil facilis nisi quas at?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, pariatur maxime? Maxime adipisci aliquid excepturi nihil facilis nisi quas at?
            </p>
          </div>
          <div>
            <div>
              <img src={web1} alt="Web1" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

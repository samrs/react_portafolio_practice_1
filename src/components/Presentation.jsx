import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import deved from '../assets/dev-ed-wave.png'

function Presentation() {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10 max-w-lg mx-auto">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Samuel Ramos</h2>
        <h3 className="text-2xl py-2">Freelance Android for night</h3>
        <p className="text-2xl py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, animi?</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillYoutube/>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
        <img src={deved} alt="Developer logo"/>
      </div>
    </section>
  )
}

export default Presentation
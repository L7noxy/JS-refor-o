import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='container-home'>
        <Navbar />

        <div className='home'>
          <span className='title-home'>Reforço de JavaScript com o professor rafa</span>
        </div>
      </div>
    </>
  )
}

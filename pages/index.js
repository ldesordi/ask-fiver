
import BottomNav from '../components/BottomNav'
import Home from '../components/home/home'
import { Fragment } from "react"

const Index = () => {

  return (
    <Fragment>

      <main className=''>
        <Home />
      </main>


      <footer>
        <BottomNav name='index' />
      </footer>

    </Fragment>
  )
}

export default Index

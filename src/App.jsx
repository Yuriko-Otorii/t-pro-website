import { Helmet } from 'react-helmet'
import { Lp } from './Lp'

function App() {

  return (
    <>
      <Helmet>
        <title>T-Pro Painting</title>
        <meta name="description" content="T-Pro Painting, a professional painting company in Vancouver, provides services from commercial to residential properties. Request a free estimate from this website." />
      </Helmet>
      <Lp />
    </>
  )
}

export default App

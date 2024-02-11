import { useEffect, useState } from 'react'
import { ToursList } from './cmps/ToursList'
import { Loader } from './cmps/Loader'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setIsLoading(true)
      const data = await fetch(url)
      const tours = await data.json()
      setTours(tours)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(true)
      console.log('error:', error)
    }
  }

  function onRemoveTour(tourId) {
    const newFilteredTours = tours.filter(tour => tour.id !== tourId)
    setTours(newFilteredTours)
  }

  function refreshTours() {
    fetchData()
  }


  if (isLoading) return <Loader />

  return (
    <main>
      <div className="title">
        <h2>{tours.length ? 'Our Tours' : 'No Tours Left'}</h2>
        <div className='title-underline'></div>
        {!tours.length && <button onClick={refreshTours} className="btn">refresh</button>}
      </div>
      <ToursList tours={tours} onRemoveTour={onRemoveTour} />
    </main>
  )
}
export default App

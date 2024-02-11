import { useEffect, useState } from 'react'
import { ToursList } from './cmps/ToursList'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url)
        const tours = await data.json()
        setTours(tours)
      } catch (error) {
        console.log('error:', error)
      }
    }
    fetchData()
  }, [])

  function onRemoveTour(tourId) {
    const newFilteredTours = tours.filter(tour => tour.id !== tourId)
    setTours(newFilteredTours)
  }

  if (!tours) return <div>Loading...</div>

  return (
    <main>
      <h2 className='title'>{tours.length ? 'Our Tours' : 'No Tours Left'}</h2>
      <div className='title-underline'></div>
      <ToursList tours={tours} onRemoveTour={onRemoveTour} />
    </main>
  )
}
export default App

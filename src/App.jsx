import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url)
        const tours = await data.json()
        console.log(tours)
      } catch (error) {
        console.log('error:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>

    </>
  )
}
export default App

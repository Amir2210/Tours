import { TourPreview } from './TourPreview'

export function ToursList({ tours }) {
  return (
    <section className='tours'>
      {tours.map(tour => <TourPreview tour={tour} key={tour.id} />)}
    </section>
  )
}
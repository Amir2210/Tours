import { TourPreview } from './TourPreview'

export function ToursList({ tours, onRemoveTour }) {
  return (
    <section className='tours'>
      {tours.map(tour => <TourPreview tour={tour} key={tour.id} onRemoveTour={onRemoveTour} />)}
    </section>
  )
}
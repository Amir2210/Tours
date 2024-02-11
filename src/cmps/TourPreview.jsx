import { useState } from 'react'

export function TourPreview({ tour, onRemoveTour }) {
  const [isReadMore, setIsReadMore] = useState(false)
  const { id, name, info, image, price } = tour

  function readMore(tourId) {
    setIsReadMore(!isReadMore)
  }
  return (
    <article className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isReadMore ?
            (
              <>
                {info}
                <button onClick={() => readMore(id)} className='info-btn'>Show Less</button>
              </>
            )
            :
            (
              <>
                {info.slice(0, info.length / 2) + '...'}
                <button onClick={() => readMore(id)} className='info-btn'>Read more</button>
              </>
            )
          }
        </p>
        <button onClick={() => onRemoveTour(id)} className='delete-btn btn-block btn'>not interested</button>
      </div>
    </article >
  )
}
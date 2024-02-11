export function TourPreview({ tour }) {
  const { id, name, info, image, price } = tour
  return (
    <article className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className='info-btn'>read More</button>
        <button className='delete-btn btn-block btn'>not interested</button>
      </div>
    </article>
  )
}
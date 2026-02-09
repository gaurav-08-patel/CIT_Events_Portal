import { useNavigate } from 'react-router-dom'

function Card({ card }) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/card/${card.id}`)}
      className="w-100
        m-12
        p-5
        bg-white
        border
        border-gray-300
        rounded-lg
        shadow-sm
        cursor-pointer
        transition
        duration-200
        hover:scale-105
      "
    >

      <img
        src={card.image}
        alt={card.title}
        className="w-full rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold mb-1">
        {card.title}
      </h3>

      <p className="text-gray-600 text-sm">
        {card.content}
      </p>

    </div>
  )
}

export default Card

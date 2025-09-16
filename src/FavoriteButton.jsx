import { useEffect, useState } from "react"

export function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        isFavorite ? console.log('liked') : console.log('unliked') 
    }, [isFavorite])

    return (
        <button onClick={() => setIsFavorite(!isFavorite)} className="absolute top-2 right-2 z-10">
            {isFavorite ? '❤️' : '🤍'}
        </button>
    )
}
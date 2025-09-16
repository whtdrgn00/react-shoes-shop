import { FavoriteButton } from "./FavoriteButton"

export function ProductCard({image, name, price}) {
    return (
        <div className="bg-green-300 hover:scale-101 text-black relative">
            <img 
                src={image}
                width={300}
            />
            <div>{name}</div>
            <div>Ціна: {price}</div>
            <FavoriteButton></FavoriteButton>
        </div>
    )
}
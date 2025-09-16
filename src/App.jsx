import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { PRODUCTS } from './protucts.data'
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 600);

  const products = PRODUCTS.filter(product => product.name.toLowerCase().includes(debouncedSearch.toLowerCase()));

  return (
    <div className='min-h-screen w-full bg-white text-black-800 px-12 py-5'>
      <header className='mb-10 flex items-center justify-between'>
        <img 
          src="/0ecd5b5c3606bad08c6d205ad8858e05.svg" 
          alt="Adidas"  
        />

        <input 
          type="search"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value)
          }}
          placeholder='Search...'
          className='border border-black px-2 py-1 rounded text-black'
        />
      </header>

      <main className='flex gap-6'>
        {
          products.length ? products.map(product => (
            <ProductCard 
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          )) : (
            <p className='text-black'>Нічого не знайдено</p>
          )
        }
      </main>
    </div>
  )
}

export default App

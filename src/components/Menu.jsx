import { sliderLists } from "../../constants/index.js";
import { useState } from "react";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails ) % totalCocktails;
    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (indexOffset) => {
    return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
  }

  const currentCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)

  return (
    <section id='menu' aria-labelledby='menu-heading'>
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
      <img src="/images/slider-right-leaf.png" alt="left-leaf" id='m-right-leaf'/>
      <h2 className='sr-only' id='menu-heading'>
        Cocktail Menu
      </h2>
      <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${isActive 
                ? 'text-white border-white' 
                : 'text-white/50 border-white/50' }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>
      <div className='content'>
        <div className='arrows'>
          <button
            className='text-left'
            onClick={() => goToSlide(currentIndex - 1)}>
              <span>{prevCocktail.name}</span><img src="/images/right-arrow.png" alt="l-arrow" aria-hidden='true'/>
          </button>

          <button
            className='text-right'
            onClick={() => goToSlide(currentIndex + 1)}>
              <span>{nextCocktail.name}</span><img src="/images/left-arrow.png" alt="r-arrow" aria-hidden='true'/>
          </button>
        </div>
        <div className='cocktail'>
          <img src={currentCocktail.image} className='object-contain' alt=''/>
        </div>
      </div>
    </section>
  )
}
export default Menu
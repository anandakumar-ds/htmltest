import './Menu.css'

const SimpleSelectMenu = () => (
  <div className='menu__container'>
    <button>
      Select an item
      <span className='menu__down-arrow'>∟</span>
      <ul>
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
        <li>Menu item 4</li>
        <li>Menu item 5</li>
      </ul>
    </button>
  </div>
)

export default SimpleSelectMenu

import './Menu.css'

const DateRangeChooser = () => (
  <div className='menu__container'>
    <button>
      Choose date range
      <span className='menu__down-arrow'>∟</span>
      <ul>
        <li>
          Next <input placeholder='N' className='menu__input-number' type='number' min={0} max={730}/> days
          <button className='menu__input-ok-button'>OK</button>
        </li>
        <li>
          Last <input placeholder='N' className='menu__input-number' type='number' min={0} max={730}/> days
          <button className='menu__input-ok-button'>OK</button>
        </li>
        <li>Last month</li>
        <li>This month</li>
        <li>Next month</li>
        <li>Last quarter</li>
        <li>This quarter</li>
        <li>Next quarter</li>
        <li>Last year</li>
        <li>This year</li>
        <li>Next year</li>
      </ul>
    </button>
  </div>
)

export default DateRangeChooser

import './Menu.css'

const PointInTimeDateChooser = () => (
  <div className='menu__container'>
    <button>
      Choose date
      <span className='menu__arrow'>▼</span>
      <ul>
        <li>
          Date fields
          <span className='menu__right-arrow'>∟</span>
          <div className='menu__sub-menu'>
            <ul>
              <li>
                <input placeholder='Filter fields' className='menu__item-input' />
              </li>
              <li>
                <h4>Step 1</h4>
                <ul>
                  <li>Close date</li>
                  <li>Last contacted date</li>
                </ul>
              </li>
              <li className='menu__sub-menu__divider'></li>
              <li>
                <h4>Step 2</h4>
                <ul>
                  <li>Close date</li>
                  <li>Last contacted date</li>
                </ul>
              </li>
              <li className='menu__sub-menu__divider'></li>
              <li>
                <h4>Step 3</h4>
                <ul>
                  <li>Close date</li>
                  <li>Last contacted date</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li>
          Special dates
          <span className='menu__right-arrow'>∟</span>
          <div className='menu__sub-menu'>
            <ul className='select-items'>
              <li>Today</li>
              <li>Tomorrow</li>
              <li>Yesterday</li>
              <li>This week</li>
              <li>Last week</li>
              <li>This month</li>
              <li>Last month</li>
              <li>This year</li>
              <li>Last year</li>
            </ul>
          </div>
        </li>
        <li>
          Specific date
          <span className='menu__right-arrow'>∟</span>
          <div className='menu__sub-menu'>
            <ul>
              <li>
                <label className='menu__item-label'>Enter a specific date</label>
                <input type='date' className='menu__item-input' />
                <button className='menu__input-ok-button'>OK</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </button>
  </div>
)

export default PointInTimeDateChooser

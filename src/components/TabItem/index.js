// Write your code here
import './index.css'

const TabItem = props => {
  const {displayText, onChangeTabId, id, isActive} = props
  const onTabClick = () => {
    onChangeTabId(id)
  }

  const styleToApply = isActive ? 'active-button-text' : 'button-text'

  return (
    <li className="tabItem">
      <button type="button" onClick={onTabClick} className={styleToApply}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

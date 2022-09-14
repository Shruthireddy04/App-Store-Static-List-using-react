// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {imageUrl, appName} = appItemDetails
  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="appLogo" />
      <p className="appHeading">{appName}</p>
    </li>
  )
}

export default AppItem

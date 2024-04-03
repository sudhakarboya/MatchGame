const TabCard = props => {
  const {tabDetails, selectImgCategory} = props
  const {tabId, displayText} = tabDetails
  const selectCategory = () => {
    selectImgCategory(tabId)
  }

  return (
    <li>
      <div>
        <p onClick={selectCategory}>{displayText}</p>
      </div>
    </li>
  )
}
export default TabCard

const ImageContainer = props => {
  const {imgDetails, onClcikImg} = props
  const {id, imageUrl, thumbnailUrl, category} = imgDetails
  const selectImg = () => {
    onClcikImg(id)
  }
  return (
    <li>
      <img src={thumbnailUrl} alt="thumbnail" onClick={selectImg} />
    </li>
  )
}
export default ImageContainer

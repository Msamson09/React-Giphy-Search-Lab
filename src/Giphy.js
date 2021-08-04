function Giphy(props) {
  return(
      <div className = "giph-result">
  {props.giphy.data.map((data, indx) => {
      return (
          <div className="giph-box" >
              <img src={data.images.downsized.url} alt="GiphyImage"></img>
          </div>
          );
  })}
  </div>
  )
}
         
export default Giphy;
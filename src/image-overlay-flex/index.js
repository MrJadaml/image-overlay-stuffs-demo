const ImageOverlayFlex = ({ children, imageProps }) => {
  let positions = { }

  children.map(child => {
    positions = {
      'top-left': child.position === 'top-left' && child,
      'top-center':  child.position === 'top-center' && child,
      'top-right':  child.position === 'top-right' && child,
      'center-left':  child.position === 'center-left' && child,
      'center-center': child.position === 'center-center' && child,
      'center-right': child.position === 'center-right' && child,
      'bottom-left': child.position === 'bottom-left' && child,
      'bottom-center': child.position === 'bottom-center' && child,
      'bottom-right': child.position === 'bottom-center' && child,
    }

    positions[child.props.position] = child;
  })

  return (
    <div className="image-overlay">
      <Image className="image" {...imageProps} />

      <div className="overlay">
        <div className="top">
          <div className="left">
            {positions['top-left']}
          </div>

          <div className="center">
            {positions['top-center']}
          </div>

          <div className="right">
            {positions['top-right']}
          </div>
        </div>

        <div className="v-center">
          <div className="left">
            {positions['center-left']}
          </div>

          <div className="center">
            {positions['center-center']}
          </div>

          <div className="right">
            {positions['center-right']}
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            {positions['bottom-left']}
          </div>

          <div className="center">
            {positions['bottom-center']}
          </div>

          <div className="right">
            {positions['bottom-right']}
          </div>
        </div>
      </div>
    </div>
  );
}

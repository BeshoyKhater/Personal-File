import React from 'react'
import Typed from 'typed.js';

const TypingAnimation = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef();
  // Create reference to store the Typed instance itself
	const typed = React.useRef();

  React.useEffect(() => {
    const options = {
    	strings: [
        'React Developer',
        'Ui Developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span className='Im'>I' m a</span>
        <span style={{ whiteSpace: 'pre' }} ref={el}/>
      </div>
    </div>
  );
}



export default TypingAnimation
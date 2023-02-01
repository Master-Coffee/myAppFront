import { useLayoutEffect, useState } from 'react';

function useWindowSize() { // Nao uso a altura, mas to pegando mesmo assim
  const [size, setSize] = useState({width : window.innerWidth, height : window.innerHeight});
  useLayoutEffect(() => {
    function updateSize() {
      setSize({width : window.innerWidth, height : window.innerHeight});
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  if(size.width >= 991.98) return "big"
  else if (size.width <= 501) return "small"
  else return "medium"
}

export default useWindowSize;
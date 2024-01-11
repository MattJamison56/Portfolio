import { forwardRef } from 'react';

const ScrollSpaceComponent = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} style={{height: '200vh'}}></div> // Apply forwarded ref here
  );
});

export default ScrollSpaceComponent;

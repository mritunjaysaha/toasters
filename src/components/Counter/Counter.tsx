import { useState } from 'react';
import { useToaster } from '../../hooks/useToaster';

export const Counter = () => {
  const { toaster } = useToaster();

  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);

    toaster.success('Counter', `Counter is ${count}`);
  };

  return (
    <div>
      Counter ${count}
      <button onClick={counter}>Show Toast</button>
    </div>
  );
};

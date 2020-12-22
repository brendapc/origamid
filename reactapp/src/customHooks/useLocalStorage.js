import React from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const localValue = window.localStorage.getItem(key);
    return localValue ? localValue : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

/* USE DESSE HOOK
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};


*/

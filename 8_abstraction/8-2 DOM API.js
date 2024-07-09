const createLoader = () => {
  const el = document.createElement('div');
  const el2 = document.createElement('div');
  const el3 = document.createElement('div');

  return { el, el2, el3 }
}

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "1")
  el2.setAttribute("class", "2")
  el3.setAttribute("class", "3")

  return { newEl: el, newEl2: el2, newEl3: el3 }
}

const loader = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.appendChild(newEl2);
  newEl2.appendChild(newEl3);

  return newEl;
}
(function () {
  const ELEMENTS_TO_TARGET = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'button', 'span', 'dd', 'div'];

  let targetedElements = [];

  ELEMENTS_TO_TARGET.forEach((element) => {
    const domNodes = document.querySelectorAll(element);
    targetedElements = targetedElements.concat(...domNodes);
  });

  targetedElements.forEach((element) => {
    const innerText = element.innerText;
    if (innerText.trim().endsWith('.')) {
      element.innerText = innerText.trim().slice(0, -1) + ' lmao';
    }
  });
})();

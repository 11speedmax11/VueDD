import './style.scss';
const create = document.createElement.bind(document)

export const createEmptyListBlock = (text, buttonText) => {
  
    const emptySection = document.createElement('section');
    emptySection.classList.add('empty-list');
  
    const emptyText = document.createElement('p');
    emptyText.classList.add('empty-list__text');
    emptyText.textContent = text;
  
    const addButton = document.createElement('button');
    addButton.classList.add('empty-list__button');
    addButton.textContent = buttonText;
  
    emptySection.appendChild(emptyText);
    emptySection.appendChild(addButton);

    return emptySection;

  }


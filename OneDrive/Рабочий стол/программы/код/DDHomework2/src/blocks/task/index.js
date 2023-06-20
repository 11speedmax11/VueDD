import './style.scss';
import avatar from '@/assets/images/profilPicture.png'
const create = document.createElement.bind(document)

export const createCardBlock = (name, number, creator, creationTime, changer, changeTime, isTask, avatarSrc = "", state = "") => {

  const cardItem = document.createElement('li');
  cardItem.classList.add('card__item');

  const cardBase = document.createElement('div');
  cardBase.classList.add('card__base');

  const cardHead = document.createElement('div');
  cardHead.classList.add('card__head');

  const cardName = document.createElement('p');
  cardName.classList.add('card__name');
  cardName.textContent = name;
  cardHead.appendChild(cardName);

  if (isTask) {
    const cardImg = document.createElement('img');
    cardImg.classList.add('card__img');
    cardImg.setAttribute('src', avatar);
    cardImg.setAttribute('alt', 'Аватар исполнителя');
    cardHead.appendChild(cardImg);
  }

  const cardBody = document.createElement('div');
  cardBody.classList.add('card__body');

  const cardContent = document.createElement('p');
  cardContent.classList.add('card__content');

  const cardNumber = document.createElement('span');
  cardNumber.classList.add('card__number');
  cardNumber.textContent = number;

  const creatorInfo = document.createElement('span');
  creatorInfo.textContent = `${creator} создал ${creationTime} назад`;

  cardContent.appendChild(cardNumber);
  cardContent.appendChild(creatorInfo);

  if (isTask) {
    const cardState = document.createElement('span');
    cardState.classList.add('card__state');
    cardState.textContent = state;
    cardContent.appendChild(cardState);
  }

  const cardChang = document.createElement('p');
  cardChang.classList.add('card__chang');
  cardChang.textContent = `${changer} изменил ${changeTime} назад`;

  cardBody.appendChild(cardContent);
  cardBody.appendChild(cardChang);

  cardBase.appendChild(cardHead);
  cardBase.appendChild(cardBody);

  const cardMenu = document.createElement('div');
  cardMenu.classList.add('card__menu');

  const myDiv = document.createElement('div');
  myDiv.classList.add('card__icon');
  const mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#ellipsis');
  mySvg.appendChild(useElement);
  myDiv.appendChild(mySvg);
  cardMenu.appendChild(myDiv);


  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('card__dropdownMenu');

  const editBtn = document.createElement('div');
  editBtn.classList.add('card__edit');

  const editText = document.createElement('p');
  editText.textContent = 'Редактировать';

  editBtn.appendChild(editText);

  const deleteBtn = document.createElement('div');
  deleteBtn.classList.add('card__delete');

  const deleteText = document.createElement('p');
  deleteText.textContent = 'Удалить';

  deleteBtn.appendChild(deleteText);

  dropdownMenu.appendChild(editBtn);
  dropdownMenu.appendChild(deleteBtn);

  cardMenu.appendChild(myDiv);
  cardMenu.appendChild(dropdownMenu);

  cardItem.appendChild(cardBase);
  cardItem.appendChild(cardMenu);

   return cardItem;

}
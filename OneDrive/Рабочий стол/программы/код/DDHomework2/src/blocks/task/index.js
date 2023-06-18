import './style.scss';
import avatar from '@/assets/images/profilPicture.png'
const create = document.createElement.bind(document)

export const createCardBlock = (name, avatarSrc, number, creator, creationTime, state, changer, changeTime) => {
  const cardBlock = document.createElement('section');
  cardBlock.classList.add('card');

  const cardList = document.createElement('ul');
  cardList.classList.add('card__list');

  const cardItem = document.createElement('li');
  cardItem.classList.add('card__item');

  const cardBase = document.createElement('div');
  cardBase.classList.add('card__base');

  const cardHead = document.createElement('div');
  cardHead.classList.add('card__head');

  const cardName = document.createElement('p');
  cardName.classList.add('card__name');
  cardName.textContent = name;

  const cardImg = document.createElement('img');
  cardImg.classList.add('card__img');
  cardImg.setAttribute('src', avatar);
  cardImg.setAttribute('alt', 'Аватар исполнителя');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card__body');

  const cardContent = document.createElement('p');
  cardContent.classList.add('card__content');

  const cardNumber = document.createElement('span');
  cardNumber.classList.add('card__number');
  cardNumber.textContent = number;

  const creatorInfo = document.createElement('span');
  creatorInfo.textContent = `${creator} создал ${creationTime} назад`;

  const cardState = document.createElement('span');
  cardState.classList.add('card__state');
  cardState.textContent = state;

  cardContent.appendChild(cardNumber);
  cardContent.appendChild(creatorInfo);
  cardContent.appendChild(cardState);

  const cardChang = document.createElement('p');
  cardChang.classList.add('card__chang');
  cardChang.textContent = `${changer} изменил ${changeTime} назад`;

  cardHead.appendChild(cardName);
  cardHead.appendChild(cardImg);

  cardBody.appendChild(cardContent);
  cardBody.appendChild(cardChang);

  cardBase.appendChild(cardHead);
  cardBase.appendChild(cardBody);

  const cardMenu = document.createElement('div');
  cardMenu.classList.add('card__menu');

  const cardIco = document.createElement('img');
  cardIco.classList.add('card__ico');
  cardIco.setAttribute('src', '../img/ellipsis.svg');
  cardIco.setAttribute('alt', 'Меню');

  cardMenu.appendChild(cardIco);

  cardItem.appendChild(cardBase);
  cardItem.appendChild(cardMenu);

  cardList.appendChild(cardItem);

  cardBlock.appendChild(cardList);

  return cardBlock;
}
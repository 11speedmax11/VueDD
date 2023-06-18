import './style.scss';
import avatar from '@/assets/images/profilPicture.png'
const create = document.createElement.bind(document)

export const createNavigationBlock = (projects, tasks, users, avatarSrc) => {

  const header = document.createElement('header');
  header.classList.add('header');

  const navigation = document.createElement('ul');
  navigation.classList.add('navigation');

  const projectsItem = document.createElement('li');
  projectsItem.classList.add('navigation__item');
  projectsItem.textContent = projects;

  const tasksItem = document.createElement('li');
  tasksItem.classList.add('navigation__item');
  tasksItem.textContent = tasks;

  const usersItem = document.createElement('li');
  usersItem.classList.add('navigation__item');
  usersItem.textContent = users;

  navigation.appendChild(projectsItem);
  navigation.appendChild(tasksItem);
  navigation.appendChild(usersItem);

  const headerButton = document.createElement('div');
  headerButton.classList.add('header__button');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('header__img');
  avatarImg.setAttribute('src', avatar);
  avatarImg.setAttribute('alt', 'Аватар исполнителя');

  // const headerIco = document.createElement('div');
  // headerIco.classList.add('header__ico');

  const headerIco = document.createElement('svg');
  headerIco.classList.add('header__ico');
  const useElement = document.createElement('use');
  // useElement.setAttributeNS('href', "../src/assets/icon/Vector.svg#name");
  headerIco.appendChild(useElement);
  //return svgElement;


  headerButton.appendChild(avatarImg);
  headerButton.appendChild(headerIco);

  header.appendChild(navigation);
  header.appendChild(headerButton);

  return header;

}
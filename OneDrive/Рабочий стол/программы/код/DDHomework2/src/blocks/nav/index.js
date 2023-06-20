import './style.scss';
import '@/js/register.js';
import avatar from '@/assets/images/profilPicture.png'

const create = document.createElement.bind(document)

export const createNavigationBlock = (projects, tasks, users, avatarSrc) => {

  const header = document.createElement('header');
  header.classList.add('header');

  const navigation = document.createElement('ul');
  navigation.classList.add('navigation');

  const projectsItem = document.createElement('li');
  projectsItem.classList.add('navigation__item');
  projectsItem.classList.add('active');
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

  const dropdownMenu = document.createElement('div');
  const profile = document.createElement('div');
  const profileText = document.createElement('p');
  const exit = document.createElement('div');
  const exitText = document.createElement('p');
  
  profileText.textContent = 'Профиль';
  exitText.textContent = 'Выход';
  
  dropdownMenu.classList.add('header__dropdownMenu');
  profile.classList.add('header__profile');
  exit.classList.add('header__exit');
  
  profile.appendChild(profileText);
  exit.appendChild(exitText);
  dropdownMenu.appendChild(profile);
  dropdownMenu.appendChild(exit);
  
  headerButton.appendChild(dropdownMenu);
  headerButton.appendChild(avatarImg);

  const myDiv = document.createElement('div');
  myDiv.classList.add('header__icon');
  const mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  mySvg.classList.add('header__svg');
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#vector');
  mySvg.appendChild(useElement);
  myDiv.appendChild(mySvg);
  headerButton.appendChild(myDiv);


  header.appendChild(navigation);
  header.appendChild(headerButton); 

  return header;

}
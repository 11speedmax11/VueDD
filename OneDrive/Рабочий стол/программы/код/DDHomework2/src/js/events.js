const app = document.querySelector("#app");

export const installEvent = () => {
  mouseLeaveEvent();
  app.addEventListener("click", function (e) {
    clickItemNavigation(e);
    clickButtonNavigation(e);
    clickCardMenu(e);
  });
}

function clickItemNavigation(e) {
  let navigationItem = e.target.closest('.navigation__item');
  if (navigationItem) {
    if (!navigationItem.classList.contains('active')) {
      app.querySelector('.navigation__item.active').classList.remove('active');
      navigationItem.classList.add('active');

      switch (navigationItem.textContent) {
        case "Проекты":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.project').classList.add('active');
          break;
        case "Задачи":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.task').classList.add('active');

          break;
        case "Пользователи":
          app.querySelector('main > div.active').classList.remove('active');
          app.querySelector('.user').classList.add('active');
          break;
      }

    }
  }
}

function clickButtonNavigation(e) {
  let headerItem = e.target.closest('.header__button');
  if (headerItem) {
    if (!e.target.closest('.header__dropdownMenu')){
      headerItem.classList.toggle("active");
    }
  } else {
    let element = document.querySelector('.header__button');
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  }
}

function clickCardMenu(e) {
  let cardItem = e.target.closest('.card__menu');
  if (cardItem) {
    if (!e.target.closest('.card__dropdownMenu'))
      cardItem.classList.toggle("active");
  } else {
    let element = document.querySelectorAll('.card__menu');
    for (let el of element) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    }
  }
}

function mouseLeaveEvent(){
  let cardItem = document.querySelectorAll(".card__item");
  for (let element of cardItem) {
    element.addEventListener('mouseleave', function (e) {
      let menuItem = document.querySelectorAll(".card__menu");
      for (let el of menuItem) {
        if (el.classList.contains('active'))
          el.classList.remove('active');
      }
    })
  }
}


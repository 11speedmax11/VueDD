import { createNavigationBlock } from "../blocks/nav";
import { createEmptyListBlock } from "../blocks/plug";
import { createCardBlock } from "../blocks/task";
// import { items } from "./fakeApi";
const app = document.querySelector("#app");

const create = document.createElement.bind(document);

export const createNavigation = () => {
    const taskItem = createNavigationBlock("Проекты", "Задачи", "Пользователи", "../assets/images/profilPicture.png");
    app.append(taskItem)
};

export const createPlug = () => {
    const taskItem = createEmptyListBlock("Не создан ни один проект", "Добавить");
    app.append(taskItem)
};

export const createTask = () => {
    const taskItem = createCardBlock('Название',
    '../img/profilPicture.png',
    '1',
    'Иванов И.И.',
    '1 час',
    'Черновик',
    'Баранов В.В.',
    '1 минуту');
    app.append(taskItem)
};
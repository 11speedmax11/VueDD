import { createNavigationBlock } from "../blocks/nav";
import { createEmptyListBlock } from "../blocks/plug";
import { createCardBlock } from "../blocks/task";
const app = document.querySelector("#app");
const create = document.createElement.bind(document);

const ctreateDiv = (name, isActive = false) => {
    const div = create("div");
    div.className = name;
    if (isActive)
        div.classList.add('active');
    return div;
};

const ctreateBlock = (name, type) => {
    const block = create(type);
    block.className = name;
    return block;
};

export const ctreateMain = () => {
    const taskList = create("main");
    app.append(taskList);
};

export const createNavigation = () => {
    const navItem = createNavigationBlock("Проекты", "Задачи", "Пользователи", "../assets/images/profilPicture.png");
    app.append(navItem);
};

export const createPlug = () => {
    let main = document.querySelector("main");
    const plugItem = createEmptyListBlock("Нет ни одного пользователя", "Добавить");
    let div = ctreateDiv("user");
    div.append(plugItem);
    main.append(div);
};

export const createTask = () => {
    let main = document.querySelector("main");
    let section = ctreateBlock("card", "section")
    let ul = ctreateBlock("card__list", "ul")
    const taskItem = createCardBlock('НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        true,
        '../img/profilPicture.png',
        'Черновик');
    ul.append(taskItem);
    const taskItemTwo = createCardBlock('звНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНиеНаззваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        true,
        '../img/profilPicture.png',
        'Черновик');
    ul.append(taskItemTwo);
    section.append(ul);
    let div = ctreateDiv("task");
    div.append(section);
    main.append(div);
};


export const createProject = () => {
    let main = document.querySelector("main");
    let section = ctreateBlock("card", "section")
    let ul = ctreateBlock("card__list", "ul")
    const projectItem = createCardBlock('Название',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        false);
    ul.append(projectItem);
    const projectItemTwo = createCardBlock('Название',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        false);
    ul.append(projectItemTwo);
    section.append(ul);
    let div = ctreateDiv("project", true);
    div.append(section);
    main.append(div);
};
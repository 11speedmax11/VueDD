<template>
  <div id="app">
    <NavigationMenu />
    <UserList />
    <ProjectList :projectList="projectList" />
    <ProjectList/>
    <TaskList :taskList="taskList" />
    <TaskList/>
    <UserProfile />
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import ProjectList from "./views/ProjectList/ProjectList.vue";
import TaskList from "./views/TaskList/TaskList.vue";
import UserProfile from "./views/UserProfile/UserProfile.vue";
import UserList from "./views/UserList/UserList.vue";

export default {
  name: "App",
  components: {
    NavigationMenu,
    ProjectList,
    TaskList,
    UserProfile,
    UserList,
  },
  data() {
    return {
      projectList: [
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№1",
          name: "проект",
          code: "черновик",
        },
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id2",
          name: "name33333333",
          code: "черновик",
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "10 час назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "№13",
          name: "проект",
          code: "черновик",
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "2 часа назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id4",
          name: "name123",
          code: "черновик",
        },
        {
          author: "Галанов М.Э.",
          authorEdited: null,
          dateCreated: "3 часа назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "id5",
          name: "name225151",
          code: "черновик",
        },
      ],
      taskList: [
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№11",
          name: "задача",
          code: null,
        },
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "10 часов назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id2",
          name: "задача23",
          code: null,
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№13",
          name: "задача",
          code: null,
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "12 минуту назад",
          dateEdited: "Галанов В.В. изменил 12 минуту назад",
          _id: "id4",
          name: "задача23",
          code: null,
        },
        {
          author: "Галанов М.Э.",
          authorEdited: null,
          dateCreated: "3 часа назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "id2222",
          name: "задача23232",
          code: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>

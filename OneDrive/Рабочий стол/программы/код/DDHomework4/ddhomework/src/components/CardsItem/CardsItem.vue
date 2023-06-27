<template>
  <section class="card">
    <ul class="card__list">
      <li class="card__item">
        <div class="card__base">
          <div class="card__head">
            <p class="card__name">{{ item.name }}</p>
            <img
              :class="classImg"
              src="@/assets/images/profilPicture.png"
              alt="Аватар исполнителя"
              v-if="classImg"
            />
          </div>

          <div class="card__body">
            <p class="card__content">
              <span class="card__number">{{ item._id }}</span
              >{{ item.author }} создал {{ item.dateCreated }}
              <span class="card__state" v-if="item.code">{{ item.code }}</span>
            </p>
            <p class="card__chang">{{ item.dateEdited }}</p>
          </div>
        </div>
        <div class="card__menu">
          <DropDownButton
            :classButton="'card__icon'"
            icon="dots"
            xClass="card__svg"
          >
            <CustomButton classButton="card__edit">Редактировать</CustomButton>
            <CustomButton classButton="card__delete">Удалить</CustomButton>
          </DropDownButton>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";

export default {
  name: "CardsItem",
  props: {
    item: Object,
    classImg: String,
  },
  components: {
    DropDownButton,
    CustomButton,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
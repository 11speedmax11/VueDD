<template>
  <div class="custom-file-upload">
    <div
      class="custom-file-upload__drop-area"
      @dragover="handleDragOver"
      @drop="handleFileDrop"
    >
      <div class="custom-file-upload__text" @click="openFilePicker">
        <span v-if="!selectedFile"
          >Перетащите файл в область или нажмите для загрузки</span
        >
        <span v-if="!selectedFile">Расширение: bmp, gif, jpg, jpeg, png</span>
        <span v-if="!selectedFile">Максимально допустимый размер: 10 Мб</span>
        <span v-if="!selectedFile">Максимальное количество файлов: 1</span>
        <span v-if="selectedFile">{{ getFileTitle(selectedFile.name) }}</span>
        <span v-if="selectedFile">{{ getFileFormat(selectedFile.name) }}</span>
        <span v-if="selectedFile">{{ getFileSize(selectedFile.size) }} Мб</span>
      </div>
    </div>
    <input
      ref="fileInput"
      type="file"
      style="display: none"
      @change="handleFileSelection"
      accept="image/bmp, image/gif, image/jpeg, image/png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleDragOver(event) {
      event.preventDefault();
    },
    handleFileDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.processFile(file);
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileSelection(event) {
      const file = event.target.files[0];
      this.processFile(file);
    },
    processFile(file) {
      const allowedExtensions = ["bmp", "gif", "jpg", "jpeg", "png"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        alert(
          "Неверное расширение файла. Разрешены только bmp, gif, jpg, jpeg и png."
        );
        return;
      }

      const maxSizeInBytes = 10 * 1024 * 1024; 
      if (file.size > maxSizeInBytes) {
        alert("Файл превышает максимально допустимый размер (10 Мб).");
        return;
      }

      this.selectedFile = file;
      this.$emit("selectedPhoto", file);
    },
    getFileTitle(fileName) {
      return fileName.split(".").slice(0, -1).join(".");
    },
    getFileFormat(fileName) {
      return fileName.split(".").pop().toLowerCase();
    },
    getFileSize(fileSize) {
      return (fileSize / (1024 * 1024)).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>

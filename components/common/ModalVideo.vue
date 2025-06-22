<template>
  <div :class="isOpen ? 'modalVid videoActive' : 'modalVid'">
    <div class="maincontainer">
      <iframe
        v-if="isOpen"
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${videoId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <span @click="modalClose">&times;</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["isOpen", "videoId"]);
const emits = defineEmits(["close"]);
const modalClose = () => {
  emits("close");
};
</script>

<style lang="css" scoped>
.modalVid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4500;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  background-color: rgba(0, 0, 0, 0.8);
  /* background-color: rgba($color: #000000, $alpha: 0.6); */
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
.maincontainer {
  max-width: 650px;
  width: 90%;
  height: 350px;
  position: relative;
  transition: 0.5s;
  transform: translateY(50px);
  background-color: black;
  /* display: none; */
}
span {
  position: absolute;
  top: -50px;
  right: -10px;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
}
.videoActive {
  opacity: 1;
  visibility: visible;
}
.videoActive .maincontainer {
  transform: translateY(0px);
}
</style>

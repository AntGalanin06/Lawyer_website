<template>
  <div class="legal-services-container">
    <div class="hero-section">
      <div class="hero-section2">
        <div class="call-to-action-container1">
          <p class="hero-text">Одна зацепка и&nbsp;дело наше</p>
          <div class="call-to-action-container" @click="scrollToForm">
            <p class="call-to-action-heading">запросить звонок</p>
          </div>
        </div>
      </div>
      <div class="negative-margin-top">
        <img :src="heroImg" alt="Главный баннер" class="image-container-fullscreen" />
      </div>
    </div>
  </div>
</template>

<script setup>
import heroImg from '/images/hero/hero.png'

function scrollToForm() {
  const el = document.getElementById('callRequestForm')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.legal-services-container {
  width: 100%;
  min-height: 100vh;
  background: url("/images/hero/fond_index.png") center / cover no-repeat;
  position: relative;
  padding-top: 95px;
  box-sizing: border-box;
}
.hero-section {
  position: relative;
  width: 100%;
  height: calc(100vh - 95px);
  overflow: hidden;
}
.hero-section2 {
  position: absolute;
  top: 30px;
  right: 5%;
  text-align: right;
  z-index: 2;
}
.hero-text {
  font-family: "Advent Pro", sans-serif;
  font-size: clamp(24px, 4vw, 48px);
  color: white;
  margin-bottom: 20px;
}
.call-to-action-container {
  display: inline-block;
  cursor: pointer;
  padding: clamp(8px, 2vw, 14px) clamp(16px, 3vw, 24px);
  border-radius: 10px;
  background: linear-gradient(135deg, #E6CEAA, #C8A27B);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.call-to-action-container:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 16px 0 rgba(200,162,123,0.16);
}
.call-to-action-heading {
  font-family: "Advent Pro", sans-serif;
  font-size: clamp(34px, 3vw, 34px);
  color: #222;
  margin: 0;
  position: relative;
  z-index: 1;
}
.negative-margin-top {
  margin-top: 0 !important;
}
.image-container-fullscreen {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70%;
  height: auto;
  object-fit: contain;
  max-height: 90%;
}
@media (max-width: 900px) {
  .hero-section2 {
    position: static;
    text-align: center;
    padding-top: 18px;
  }
  .image-container-fullscreen {
    position: static;
    width: 100%;
    max-width: 100vw;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  .hero-section {
    height: auto;
    min-height: 380px;
  }
  .legal-services-container {
    padding-top: 75px;
    min-height: unset;
  }
}
</style>
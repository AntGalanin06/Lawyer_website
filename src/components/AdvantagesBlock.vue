<template>
  <div class="legal-services-section1">
    <div class="legal-services-card advantages-gray-block">
      <div class="feature-box-group">
        <div class="vertical-card-group" v-for="(item, i) in items" :key="i">
          <img :src="item.img" :alt="item.alt" class="circle-image-with-text" />
          <p class="hero-text-block">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import hammerImg from '/images/hammer.png'
import caseImg from '/images/case.png'
import moneyImg from '/images/money.png'
import lockImg from '/images/lock.png'

const items = [
  { img: hammerImg, alt: 'Опыт', text: 'Более 30 лет в деле' },
  { img: caseImg, alt: 'Дела', text: 'Берём любые дела' },
  { img: moneyImg, alt: 'Лучшая помощь', text: 'Лучшая юридическая помощь в городе' },
  { img: lockImg, alt: 'Безопасность', text: 'Нам можно доверять' }
]
</script>

<style scoped>
.legal-services-section1 { padding: 40px 20px; background: white; text-align: center; }
.legal-services-card { max-width: 1200px; margin: 0 auto; }
.advantages-gray-block {
  border-radius: 20px;
  background: linear-gradient(182deg,rgba(50, 48, 46, 0.80) -12.42%,rgba(42, 42, 42, 0.80) 211.74%);
  box-shadow: 0px 49px 250px 0px rgba(0, 0, 0, 0.25),-1px -1px 20px 0px rgba(0, 0, 0, 0.13) inset,1px 1px 14px 0px rgba(255, 255, 255, 0.09) inset;
  backdrop-filter: blur(50px); padding: 30px; margin: 0 auto;
}
.feature-box-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.vertical-card-group { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1 1 200px; padding: 20px; }
.hero-text-block { font-family: 'Gabarito', sans-serif; font-size: 20px; margin: 10px 0; color: white; }
.circle-image-with-text { width: 60px; height: 60px; margin-top: 10px; }
</style>
<template>
  <div class="services-steps">
    <div class="services-step" v-for="step in steps" :key="step.number">
      <p class="step-number">{{ step.number }}</p>
      <p class="step-text" v-html="step.text"></p>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    number: '01',
    text: '<span class="gradient-text">Вы оставляете заявку</span> и мы анализируем вашу ситуацию. Определяем возможные пути решения.'
  },
  {
    number: '02',
    text: '<span class="gradient-text">Проводим детальный разбор вашего дела</span> и формируем эффективную стратегию защиты.'
  },
  {
    number: '03',
    text: 'Представляем ваши интересы на всех этапах — от переговоров до суда. <span class="gradient-text">Добиваемся наилучшего результата</span> в рамках закона.'
  }
]
</script>

<style scoped>
.services-steps {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}
.services-step {
  flex: 1 1 300px;
  min-width: 270px;
  max-width: 370px;
  padding: 32px 24px;
  background: linear-gradient(181.72deg, rgba(50,48,46,0.5) 12.41%, rgba(42,42,42,0.5) 211.72%);
  border-radius: 30px;
  box-shadow: inset 1px 1px 14px rgba(255,255,255,0.09),
  inset -1px -1px 20px rgba(0,0,0,0.13),
  0px 49px 250px rgba(0,0,0,0.25);
  backdrop-filter: blur(40px);
  color: white;
  font: 400 17px Gabarito, Arial, sans-serif;
  text-align: left;
  margin-bottom: 16px;
  transition: box-shadow .22s;
}
.services-step:hover {
  box-shadow: 0 20px 60px 0 rgba(200,162,123,0.18);
}
.step-number {
  font: 500 54px Gabarito, Arial, sans-serif;
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 14px 0;
  line-height: 1;
}
.step-text {
  font-size: 18px;
  margin: 0;
}
.gradient-text {
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
@media (max-width: 900px) {
  .services-steps { gap: 18px; }
  .services-step { min-width: 180px; padding: 20px 10px; }
  .step-number { font-size: 42px; }
  .step-text { font-size: 15px; }
}
@media (max-width: 600px) {
  .services-steps { flex-direction: column; gap: 14px; margin-top: 24px; }
  .services-step { max-width: 100%; }
}
</style>
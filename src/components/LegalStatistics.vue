<template>
  <div class="statistics-outer">
    <div class="statistics">
      <div class="stat-item" v-for="s in statistics" :key="s.id">
        <div class="stat-number">{{ s.value }}</div>
        <div class="stat-text">{{ s.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const statistics = [
  { id: 1, value: '95%', text: 'выигранных дел' },
  { id: 2, value: '10+', text: 'лет на рынке' },
  { id: 3, value: '500+', text: 'довольных клиентов' },
  { id: 4, value: '15+', text: 'квалифицированных юристов' },
]
</script>

<style scoped>
.statistics-outer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
.statistics {
  display: flex;
  gap: 38px;
  max-width: 1240px;
  width: 100%;
  justify-content: center;
  padding: 0 30px;
}
.stat-item {
  background: linear-gradient(182deg, rgba(50, 48, 46, .5) 12%, rgba(42, 42, 42, .5) 212%);
  border-radius: 26px;
  padding: 36px 22px 30px 22px;
  text-align: center;
  color: #fff;
  width: 290px;
  min-width: 190px;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.stat-number {
  font-size: 54px;
  font-weight: bold;
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-family: "Advent Pro", sans-serif;
}
.stat-text {
  margin-top: 0;
  font-size: 24px;
  font-family: "Gabarito", sans-serif;
}
@media (max-width: 1250px) {
  .statistics {
    gap: 20px;
    max-width: 900px;
  }
  .stat-item { width: 210px; }
}
@media (max-width: 950px) {
  .statistics {
    flex-wrap: wrap;
    gap: 18px;
    max-width: 100%;
    justify-content: center;
  }
  .stat-item { width: 42vw; min-width: 120px; }
}
@media (max-width: 700px) {
  .statistics {
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 0 4vw;
  }
  .stat-item {
    width: 100%;
    min-width: unset;
    font-size: 18px;
    padding: 20px 0 18px 0;
  }
  .stat-number { font-size: 34px; }
  .stat-text { font-size: 15px; }
}
</style>
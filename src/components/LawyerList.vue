<template>
  <div class="vue-section">
    <h2 class="section-title">Наши специалисты</h2>
    <div class="filter-buttons">
      <button
          class="filter-button"
          :class="{ active: selectedSpecialization === 'all' }"
          @click="filterLawyers('all')"
      >
        Все специалисты
      </button>
      <button
          v-for="spec in specializations"
          :key="spec"
          class="filter-button"
          :class="{ active: selectedSpecialization === spec }"
          @click="filterLawyers(spec)"
      >
        {{ spec }}
      </button>
    </div>
    <div class="lawyers-grid">
      <div
          v-for="l in filteredLawyers"
          :key="l.id"
          class="lawyer-card-grid"
          @click="toggleLawyerDetail(l.id)"
      >
        <img :src="l.photo" :alt="l.name" class="lawyer-photo" />
        <div class="lawyer-name">
          <span class="fname-line">{{ firstMiddle(l.name) }}</span>
          <span class="surname-line">{{ surname(l.name) }}</span>
        </div>
        <p class="lawyer-specialization">{{ l.specialization }}</p>
        <div class="lawyer-detail" v-if="l.showDetail">
          <p>{{ l.details }}</p>
          <p :style="{ color: l.experience > 10 ? '#E6CEAA' : '#fff' }">
            {{ expText(l.experience) }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="showNotification" class="notification-block">
      Вы просмотрели информацию о <strong>{{ viewedCount }}</strong> наших специалистах.<br />
      Хотите связаться с нами?
      <div class="notification-buttons">
        <button class="notif-btn" @click="scrollToForm">Связаться</button>
        <button class="notif-btn" @click="showNotification = false">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import zubovPhoto from '/images/lawyers/zubov.png'
import orlovaPhoto from '/images/lawyers/orlova.png'
import shevcovPhoto from '/images/lawyers/shevcov.png'
import zaharovaPhoto from '/images/lawyers/zaharova.png'
import karpovPhoto from '/images/lawyers/karpov.png'
import smirnovaPhoto from '/images/lawyers/smirnova.png'
import petrovPhoto from '/images/lawyers/petrov.png'
import volkovaPhoto from '/images/lawyers/volkova.png'
import sokolovPhoto from '/images/lawyers/sokolov.png'
import novikovaPhoto from '/images/lawyers/novikova.png'
import medvedevPhoto from '/images/lawyers/medvedev.png'
import morozovaPhoto from '/images/lawyers/morozova.png'
import { ref, computed } from 'vue'

const lawyers = ref([
  {
    id: 1,
    name: 'Иван Валерьевич Зубов',
    photo: zubovPhoto,
    specialization: 'Гражданское право',
    experience: 15,
    details: 'Специалист по делам о защите прав потребителей, договорным спорам и семейному праву.',
    showDetail: false,
  },
  {
    id: 2,
    name: 'Мария Александровна Орлова',
    photo: orlovaPhoto,
    specialization: 'Корпоративное право',
    experience: 12,
    details: 'Эксперт в сфере корпоративного права, сопровождении сделок M&A и защите бизнеса.',
    showDetail: false,
  },
  {
    id: 3,
    name: 'Алексей Федорович Шевцов',
    photo: shevcovPhoto,
    specialization: 'Уголовное право',
    experience: 18,
    details: 'Опытный адвокат по уголовным делам с большим опытом ведения сложных дел.',
    showDetail: false,
  },
  {
    id: 4,
    name: 'Ирина Алексеевна Захарова',
    photo: zaharovaPhoto,
    specialization: 'Семейное право',
    experience: 9,
    details: 'Специалист по семейным спорам, разводам и разделу имущества.',
    showDetail: false,
  },
  {
    id: 5,
    name: 'Дмитрий Сергеевич Карпов',
    photo: karpovPhoto,
    specialization: 'Трудовое право',
    experience: 7,
    details: 'Эксперт в области трудовых споров, защите прав работников и работодателей.',
    showDetail: false,
  },
  {
    id: 6,
    name: 'Елена Викторовна Смирнова',
    photo: smirnovaPhoto,
    specialization: 'Налоговое право',
    experience: 14,
    details: 'Консультант по налоговому планированию и сопровождению налоговых проверок.',
    showDetail: false,
  },
  {
    id: 7,
    name: 'Николай Андреевич Петров',
    photo: petrovPhoto,
    specialization: 'Административное право',
    experience: 11,
    details: 'Специалист по административным правонарушениям и взаимодействию с госорганами.',
    showDetail: false,
  },
  {
    id: 8,
    name: 'Анна Петровна Волкова',
    photo: volkovaPhoto,
    specialization: 'Гражданское право',
    experience: 6,
    details: 'Специалист по защите прав граждан в сфере ЖКХ и страховых споров.',
    showDetail: false,
  },
  {
    id: 9,
    name: 'Сергей Михайлович Соколов',
    photo: sokolovPhoto,
    specialization: 'Уголовное право',
    experience: 16,
    details: 'Адвокат по экономическим преступлениям с обширной практикой в судах.',
    showDetail: false,
  },
  {
    id: 10,
    name: 'Ольга Игоревна Новикова',
    photo: novikovaPhoto,
    specialization: 'Семейное право',
    experience: 8,
    details: 'Юрист по вопросам усыновления, опеки и защите прав детей.',
    showDetail: false,
  },
  {
    id: 11,
    name: 'Виктор Павлович Медведев',
    photo: medvedevPhoto,
    specialization: 'Наследственное право',
    experience: 13,
    details: 'Юрист по наследственным делам, завещаниям и спорам между наследниками.',
    showDetail: false,
  },
  {
    id: 12,
    name: 'Екатерина Сергеевна Морозова',
    photo: morozovaPhoto,
    specialization: 'Жилищное право',
    experience: 10,
    details: 'Специалист по спорам в сфере жилищного права и сделкам с недвижимостью.',
    showDetail: false,
  },
])

const selectedSpecialization = ref('all')
const viewedIds = ref(new Set())
const showNotification = ref(false)

const specializations = computed(() =>
    [...new Set(lawyers.value.map((l) => l.specialization))]
)
const filteredLawyers = computed(() =>
    selectedSpecialization.value === 'all'
        ? lawyers.value
        : lawyers.value.filter(
            (l) => l.specialization === selectedSpecialization.value
        )
)
const viewedCount = computed(() => viewedIds.value.size)

function firstMiddle(n) {
  const p = n.split(' ')
  return p.slice(0, 2).join(' ')
}
function surname(n) {
  return n.split(' ').slice(-1)[0]
}
function expText(y) {
  return y > 10 ? `Опыт работы более ${y} лет!` : `Опыт работы: ${y} лет`
}
function filterLawyers(s) {
  selectedSpecialization.value = s
}
function toggleLawyerDetail(id) {
  const l = lawyers.value.find((x) => x.id === id)
  if (!l) return
  l.showDetail = !l.showDetail
  if (l.showDetail && !viewedIds.value.has(id)) {
    viewedIds.value.add(id)
    if (viewedIds.value.size >= 2) showNotification.value = true
  }
}
function scrollToForm() {
  const el = document.getElementById('callRequestForm')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  showNotification.value = false
}
</script>

<style scoped>
.vue-section {
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 20px;
}
.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
}
.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
}
.filter-button {
  background: linear-gradient(135deg, #E6CEAA, #C8A27B);
  border: none;
  padding: 7px 14px;
  border-radius: 15px;
  font: 600 15px 'Advent Pro', sans-serif;
  cursor: pointer;
  opacity: .7;
  transition: .3s;
}
.filter-button.active {
  opacity: 1;
}
.lawyers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.lawyer-card-grid {
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
  padding: 15px;
  background: linear-gradient(182deg, rgba(50,48,46,.5) 12%, rgba(42,42,42,.5) 212%);
  box-shadow: 0 10px 25px rgba(0,0,0,.15);
  transition: .3s;
}
.lawyer-card-grid:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,.2);
}
.lawyer-photo {
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}
.lawyer-name {
  margin-top: 12px;
  min-height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.fname-line,
.surname-line {
  font: 600 18px Gabarito;
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}
.surname-line {
  margin-top: 2px;
}
.lawyer-specialization {
  margin-top: 6px;
  color: #fff;
  font-size: 14px;
  min-height: 20px;
  line-height: 20px;
}
.lawyer-detail {
  background: rgba(30,30,30,.8);
  color: #fff;
  padding: 15px;
  border-radius: 15px;
  margin-top: 15px;
}
.notification-block {
  margin-top: 40px;
  padding: 38px 24px;
  border-radius: 28px;
  text-align: center;
  position: relative;
  color: #fff;
  font: 600 20px Gabarito;
  line-height: 1.4;
  background: linear-gradient(145deg, #585858 0%, #4c4c4c 45%, #404040 100%);
  box-shadow: 0 18px 40px rgba(0,0,0,.25), inset 0 1px 2px rgba(255,255,255,.08);
  overflow: hidden;
}
.notification-block::before,
.notification-block::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(45px);
  opacity: .27;
}
.notification-block::before {
  width: 240px;
  height: 240px;
  top: -80px;
  left: -80px;
  background: linear-gradient(90deg, #E6CEAA 0%, #C8A27B 100%);
}
.notification-block::after {
  width: 180px;
  height: 180px;
  bottom: -60px;
  right: -60px;
  background: linear-gradient(90deg, #E6CEAA 0%, #C8A27B 100%);
}
.notification-buttons {
  display: flex;
  gap: 22px;
  justify-content: center;
  margin-top: 26px;
}
.notif-btn {
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  border: none;
  padding: 10px 34px;
  border-radius: 24px;
  font: 600 17px 'Advent Pro', sans-serif;
  color: #222;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,.3);
  transition: .22s;
}
.notif-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,.36);
}
</style>
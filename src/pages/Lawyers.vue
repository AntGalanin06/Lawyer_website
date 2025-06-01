<script setup>
import { ref } from 'vue'
import LawyerList from '@/components/LawyerList.vue'
import CallRequestForm from '@/components/CallRequestForm.vue'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal.vue'
import UserAgreementModal from '@/components/UserAgreementModal.vue'

const showPrivacy = ref(false)
const showTerms = ref(false)

function openModal(id) {
  if (id === 'privacy') {
    showPrivacy.value = true
    document.body.style.overflow = 'hidden'
  }
  if (id === 'terms') {
    showTerms.value = true
    document.body.style.overflow = 'hidden'
  }
}

function handlePrivacyUpdate(value) {
  showPrivacy.value = value
  if (!showPrivacy.value && !showTerms.value) {
    document.body.style.overflow = ''
  }
}
function handleTermsUpdate(value) {
  showTerms.value = value
  if (!showPrivacy.value && !showTerms.value) {
    document.body.style.overflow = ''
  }
}

const statistics = [
  { id: 1, value: '95%', text: 'выигранных дел' },
  { id: 2, value: '10+', text: 'лет на рынке' },
  { id: 3, value: '500+', text: 'довольных клиентов' },
  { id: 4, value: '15+', text: 'квалифицированных юристов' },
]
</script>

<template>
  <main class="lawyers-page-main">
    <section class="vue-section">
      <h2 class="section-title">
        Факты и цифры, отражающие наш
        <span class="gradient-text">многолетний опыт и профессионализм</span>
      </h2>
      <div class="statistics">
        <div class="stat-item" v-for="s in statistics" :key="s.id">
          <div class="stat-number">{{ s.value }}</div>
          <div class="stat-text">{{ s.text }}</div>
        </div>
      </div>
    </section>
    <LawyerList />
    <CallRequestForm @open-modal="openModal" />
    <PrivacyPolicyModal
        :modelValue="showPrivacy"
        @update:modelValue="handlePrivacyUpdate"
    />
    <UserAgreementModal
        :modelValue="showTerms"
        @update:modelValue="handleTermsUpdate"
    />
  </main>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "Gabarito", "Arial", sans-serif;
}
.vue-section {
  max-width: 1200px;
  margin: 12px auto 0 auto;
  padding: 20px;
}
.statistics {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.stat-item {
  background: linear-gradient(182deg, rgba(50, 48, 46, .5) 12%, rgba(42, 42, 42, .5) 212%);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  color: #fff;
  min-width: 170px;
}
.stat-number {
  font-size: 36px;
  font-weight: bold;
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Advent Pro", "Arial", sans-serif;
}
.stat-text {
  margin-top: 5px;
  font-size: 18px;
  font-family: "Gabarito", "Arial", sans-serif;
}
.lawyers-page-main {
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
@media (max-width: 900px) {
  .vue-section { margin: 70px 0 0 0; }
  .section-title { font-size: 22px; }
  .statistics { gap: 10px; margin-top: 18px; }
  .stat-item { font-size: 16px; min-width: 120px; }
  .stat-number { font-size: 26px; }
  .stat-text { font-size: 13px; }
  .lawyers-page-main { margin-top: 80px; gap: 22px; }
}
</style>
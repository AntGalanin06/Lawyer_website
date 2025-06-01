<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/HeroBanner.vue'
import AdvantagesBlock from '@/components/AdvantagesBlock.vue'
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
</script>

<template>
  <main class="home-page-main">
    <HeroBanner />
    <div class="advantages-overlap">
      <AdvantagesBlock />
    </div>
    <div class="legal-assistance-form-container">
      <p class="legal-message">
        <span class="golden-sunrise-text">Закон на вашей стороне.</span> Мы тоже.
      </p>
      <p class="legal-notice-text-style">
        Первый шаг к&nbsp;решению&nbsp;— оставьте заявку на разбор дела
      </p>
    </div>
    <CallRequestForm @open-modal="openModal" />
  </main>
  <PrivacyPolicyModal
      :modelValue="showPrivacy"
      @update:modelValue="handlePrivacyUpdate"
  />
  <UserAgreementModal
      :modelValue="showTerms"
      @update:modelValue="handleTermsUpdate"
  />
</template>

<style scoped>
.home-page-main {
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: relative;
}
.advantages-overlap {
  position: relative;
  z-index: 2;
  margin-top: -90px;
  margin-bottom: 0;
}
.legal-assistance-form-container {
  text-align: center;
  margin-top: 12px;
  margin-bottom: 0;
}
.legal-message {
  font-size: clamp(28px, 5vw, 40px);
  font-family: 'Gabarito', sans-serif;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
  line-height: 1.1;
  letter-spacing: 0.5px;
}
.golden-sunrise-text {
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.legal-notice-text-style {
  font-size: clamp(18px, 2.6vw, 26px);
  color: #444;
  font-family: 'Advent Pro', sans-serif;
  margin-bottom: 0;
  font-weight: 500;
}
@media (max-width: 900px) {
  .home-page-main { gap: 24px; }
  .legal-message { font-size: 22px; }
  .legal-notice-text-style { font-size: 14px; }
  .advantages-overlap { margin-top: -40px; }
}
</style>
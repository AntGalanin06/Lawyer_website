<script setup>
import Header from '@/components/Header.vue'
import ContactInfoBlock from '@/components/ContactInfoBlock.vue'
import CallRequestForm from '@/components/CallRequestForm.vue'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal.vue'
import UserAgreementModal from '@/components/UserAgreementModal.vue'

import { ref } from 'vue'
const showPrivacy = ref(false)
const showTerms = ref(false)

function openModal(id) {
  if (id === 'privacy') {
    showPrivacy.value = true
    document.body.style.overflow = 'hidden'
  } else if (id === 'terms') {
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
  <div class="about-page-wrapper">
    <Header />
    <main class="about-main-content">
      <ContactInfoBlock />
      <section class="detailed-analysis-section">
        <div class="detailed-analysis-content">
          <div class="advocate-image-block">
            <img src="/images/advocate.png" alt="Адвокат с телефоном" class="advocate-image" />
          </div>
          <CallRequestForm @open-modal="openModal" />
        </div>
      </section>
    </main>
    <PrivacyPolicyModal
        :modelValue="showPrivacy"
        @update:modelValue="handlePrivacyUpdate"
    />
    <UserAgreementModal
        :modelValue="showTerms"
        @update:modelValue="handleTermsUpdate"
    />
  </div>
</template>

<style scoped>
.about-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}
.about-main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.detailed-analysis-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
}
.detailed-analysis-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
}
.advocate-image-block {
  flex: 1 1 320px;
  text-align: center;
}
.advocate-image {
  border-radius: 20px;
  max-width: 100%;
  height: auto;
}
@media (max-width: 900px) {
  .detailed-analysis-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .about-main-content {
    gap: 30px;
    margin-top: 80px;
  }
  .detailed-analysis-section {
    padding: 20px 6px;
  }
}
</style>
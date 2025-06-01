<script setup>
import { ref } from 'vue'
import ReviewsBlock from '@/components/ReviewsBlock.vue'
import CallRequestForm from '@/components/CallRequestForm.vue'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal.vue'
import UserAgreementModal from '@/components/UserAgreementModal.vue'
import advocateImg from '/images/advocate.png'

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
  <main class="reviews-page-main">
    <ReviewsBlock />
    <section class="detailed-analysis-section">
      <div class="detailed-analysis-content">
        <div class="advocate-image-block">
          <img :src="advocateImg" alt="Адвокат с телефоном" class="advocate-image" />
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
</template>

<style scoped>
.reviews-page-main {
  margin-top: 110px;
  min-height: 70vh;
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
  .reviews-page-main {
    margin-top: 80px;
    gap: 36px;
  }
  .detailed-analysis-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .detailed-analysis-section {
    padding: 20px 6px;
  }
}
</style>
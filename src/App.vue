<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
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
  <Header />
  <main class="page-content">
    <router-view />
  </main>
  <Footer @open-modal="openModal" />
  <PrivacyPolicyModal
      :modelValue="showPrivacy"
      @update:modelValue="handlePrivacyUpdate"
  />
  <UserAgreementModal
      :modelValue="showTerms"
      @update:modelValue="handleTermsUpdate"
  />
</template>
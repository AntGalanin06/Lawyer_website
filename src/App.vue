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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<style scoped>
.page-content {
  width: 100%;
  min-height: calc(100vh - 95px);
}
</style>
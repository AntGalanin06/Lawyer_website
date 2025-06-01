<template>
  <div id="callRequestForm" class="hero-section3">
    <div class="professional-help-form">
      <div class="contact-form-container">
        <form class="request-call-form" @submit.prevent="submitForm">
          <div class="input-prompt-container">
            <p class="gabarito-heading">Введите имя</p>
            <div class="fullwidth-box">
              <div class="rounded-input-container">
                <input
                    type="text"
                    v-model="formData.name"
                    maxlength="50"
                    class="transparent-input-style"
                    placeholder="Например, Иван"
                    @input="validateName"
                    required
                />
              </div>
              <div v-if="nameError" class="input-error">{{ nameError }}</div>
            </div>
          </div>
          <div class="input-prompt-container">
            <p class="gabarito-heading">Введите номер телефона</p>
            <div class="fullwidth-box">
              <div class="rounded-input-container">
                <input
                    ref="phoneInput"
                    type="tel"
                    v-model="formData.phone"
                    class="transparent-input-style"
                    placeholder="+7 (___) ___-__-__"
                    @input="onPhoneInput"
                    @focus="onPhoneFocus"
                    maxlength="18"
                    required
                />
              </div>
              <div v-if="phoneError" class="input-error">{{ phoneError }}</div>
            </div>
          </div>
          <div class="form-consent-text-container">
            <label class="checkbox-wrapper">
              <input
                  type="checkbox"
                  class="hidden-checkbox"
                  v-model="formData.consent"
                  required
              />
              <span class="custom-checkbox"></span>
            </label>
            <span class="user-consent-text-container">
              Отправляя заявку, я принимаю условия
              <span class="user-agreement-text" @click="openModal('terms')">
                Пользовательского соглашения
              </span>
              и соглашаюсь на обработку персональных данных согласно
              <span class="user-agreement-text" @click="openModal('privacy')">
                Политике конфиденциальности
              </span>.
            </span>
          </div>
          <button type="submit" class="professional-help-button" :disabled="!isFormValid">
            Получить помощь профессионала
          </button>
        </form>
        <div v-if="formSubmitted" class="form-success">
          Спасибо за заявку! Мы свяжемся с вами в ближайшее время.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const emit = defineEmits(['open-modal'])
const phoneInput = ref(null)
const formData = ref({
  name: '',
  phone: '',
  consent: false
})
const nameError = ref('')
const phoneError = ref('')
const formSubmitted = ref(false)

const isFormValid = computed(() =>
    formData.value.name &&
    formData.value.phone.length === 18 &&
    formData.value.consent &&
    !nameError.value &&
    !phoneError.value
)

function validateName() {
  const re = /^[А-ЯЁа-яёA-Za-z\s]+$/
  if (formData.value.name && !re.test(formData.value.name)) {
    nameError.value = 'Имя может содержать только русские и английские буквы и пробелы'
  } else {
    nameError.value = ''
  }
}

function onPhoneInput(e) {
  const input = e.target;
  let digits = input.value.replace(/\D/g, '');
  if (digits.startsWith('7') || digits.startsWith('8')) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);
  let newMaskedValue = '';
  if (digits.length > 0) {
    newMaskedValue = '+7 (' + digits.substring(0, 3);
    if (digits.length > 3) {
      newMaskedValue += ') ' + digits.substring(3, 6);
      if (digits.length > 6) {
        newMaskedValue += '-' + digits.substring(6, 8);
        if (digits.length > 8) {
          newMaskedValue += '-' + digits.substring(8, 10);
        }
      }
    }
  }
  formData.value.phone = newMaskedValue;
  phoneError.value = (digits.length > 0 && digits.length < 10)
      ? 'Введите полный номер телефона'
      : '';
  nextTick(() => {
    if (phoneInput.value) {
      const pos = phoneInput.value.value.length;
      phoneInput.value.setSelectionRange(pos, pos);
    }
  });
}

function onPhoneFocus(e) {
  if (!formData.value.phone) {
    formData.value.phone = '+7 ('
    nextTick(() => {
      if (phoneInput.value) phoneInput.value.setSelectionRange(4, 4)
    })
  }
}

function submitForm() {
  validateName()
  onPhoneInput({ target: phoneInput.value })
  if (!isFormValid.value) return
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
  }, 3000)
  formData.value = { name: '', phone: '', consent: false }
  nameError.value = ''
  phoneError.value = ''
}

function openModal(id) {
  emit('open-modal', id)
}
</script>

<style scoped>
.hero-section3 {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
}
.request-call-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.gabarito-heading {
  font-size: 20px;
  margin: 0 0 4px 0;
}
.rounded-input-container {
  background: #ececec;
  border-radius: 50px;
  padding: 10px 20px;
}
.transparent-input-style {
  width: 100%;
  border: none;
  background: none;
  font-size: 16px;
  outline: none;
}
.input-error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
.form-consent-text-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.checkbox-wrapper {
  margin-right: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}
.hidden-checkbox {
  display: none;
}
.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid #bbb;
  border-radius: 3px;
  position: relative;
  flex-shrink: 0;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
}
.hidden-checkbox:checked + .custom-checkbox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/images/check.png') center/contain no-repeat;
  background-size: 100% 100%;
}
.user-consent-text-container {
  font-size: 14px;
  line-height: 1.4;
}
.user-agreement-text {
  color: #C8A27B;
  cursor: pointer;
  text-decoration: underline;
}
.professional-help-button {
  background: linear-gradient(135deg, #E6CEAA, #C8A27B);
  border: none;
  padding: 15px;
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  transition: 0.22s;
}
.professional-help-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.professional-help-button:hover:enabled {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.36);
}
.form-success {
  margin-top: 20px;
  padding: 15px;
  background: #4CAF50;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
@media (max-width: 768px) {
  .hero-section3 {
    padding: 20px 10px;
  }
  .contact-form-container {
    max-width: 100%;
  }
}
</style>
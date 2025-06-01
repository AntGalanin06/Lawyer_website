<template>
  <div
      class="modal-overlay"
      :class="{ show: modelValue }"
      @click.self="close"
  >
    <div class="modal-content" @click.stop>
      <h2>Пользовательское соглашение</h2>
      <p>
        Настоящее Пользовательское соглашение регулирует отношения между сайтом «ЮРИСТ NN» и пользователями, оставляющими заявки через формы обратной связи.<br><br>
        <b>1. Общие положения</b><br>
        1.1. Используя сайт, вы подтверждаете своё согласие с условиями Соглашения.<br>
        1.2. Если вы не согласны с условиями — пожалуйста, прекратите использование сайта.<br><br>
        <b>2. Услуги</b><br>
        2.1. Сайт предоставляет возможность оставить заявку на получение консультации.<br>
        2.2. Окончательная стоимость услуг определяется после общения с юристом.<br><br>
        <b>3. Ответственность</b><br>
        3.1. Администрация сайта не несёт ответственности за возможные убытки, связанные с использованием сайта.<br>
        3.2. Все рекомендации, представленные на сайте, носят справочный характер и не являются юридически обязывающими.
      </p>
      <button class="modal-close" @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
function close() {
  emit('update:modelValue', false)
  document.body.style.overflow = ''
}
</script>

<style scoped>
.modal-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
  justify-content: center;
  align-items: center;
}
.modal-overlay.show {
  display: flex;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}
.modal-content h2 {
  font: 600 28px 'Advent Pro', sans-serif;
  color: #222;
  margin-top: 0;
}
.modal-content p {
  font: 400 16px 'Gabarito', sans-serif;
  color: #333;
}
.modal-close {
  background: linear-gradient(135deg, #E6CEAA, #C8A27B);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font: 600 16px 'Gabarito', sans-serif;
  color: #222;
  cursor: pointer;
  margin-top: 20px;
}
</style>
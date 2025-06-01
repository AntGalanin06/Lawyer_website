<template>
  <div
      class="modal-overlay"
      :class="{ show: modelValue }"
      @click.self="close"
  >
    <div class="modal-content" @click.stop>
      <h2>Политика конфиденциальности</h2>
      <p>
        <b>1. Общие положения</b><br>
        1.1. Мы уважаем ваше право на конфиденциальность и обязуемся защищать ваши персональные данные.<br>
        1.2. Настоящая Политика определяет, какие данные собираются и как они используются.<br><br>
        <b>2. Сбор данных</b><br>
        2.1. Мы собираем только данные, которые вы добровольно предоставляете при заполнении форм: имя, номер телефона.<br>
        2.2. Данные используются исключительно для связи с вами и предоставления консультации.<br><br>
        <b>3. Передача данных третьим лицам</b><br>
        3.1. Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.<br><br>
        <b>4. Хранение данных</b><br>
        4.1. Данные хранятся в защищённой среде и используются строго по назначению.<br>
        4.2. Вы можете запросить удаление своих данных, написав нам на почту:
        <a href="mailto:office@advokatlink.ru">office@advokatlink.ru</a>
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
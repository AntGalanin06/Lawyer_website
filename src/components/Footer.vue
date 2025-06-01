<template>
  <footer class="hero-section1">
    <router-link to="/" style="text-decoration:none">
      <div class="lawyer-card">
        <img :src="logoImg" alt="logo" class="avatar-image" />
        <p class="legal-info-block">
          <span class="legal-title-with-initials">{{ companyName }}</span>
        </p>
      </div>
    </router-link>
    <div class="lawyer-services-section footer-menu">
      <div class="legal-services-card1">
        <div class="lawyer-section">
          <router-link :to="menuItems[0].href" class="legal-expert-heading">
            {{ menuItems[0].text }}
          </router-link>
        </div>
        <router-link :to="menuItems[1].href" class="legal-services-heading">
          {{ menuItems[1].text }}
        </router-link>
      </div>
      <div class="testimonial-section">
        <div class="testimonial-container">
          <router-link :to="menuItems[2].href" class="testimonial-heading">
            {{ menuItems[2].text }}
          </router-link>
        </div>
        <router-link :to="menuItems[3].href" class="testimonial-header">
          {{ menuItems[3].text }}
        </router-link>
      </div>
    </div>
    <div class="legal-info-section footer-links">
      <div class="privacy-policy-section">
        <a href="#" @click.prevent="openModal('privacy')">Политика конфиденциальности</a>
        <a href="#" @click.prevent="openModal('terms')">Пользовательское соглашение</a>
      </div>
      <div class="flex-image-container">
        <img :src="tgImg" alt="tg" class="box-image" />
        <img :src="vkImg" alt="vk" class="box-image" />
        <img :src="ytImg" alt="yt" class="box-image" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoImg from '/images/logo.png'
import tgImg from '/images/telegram.png'
import vkImg from '/images/vk.png'
import ytImg from '/images/youtube.png'

const companyName = 'ЮРИСТ NN'
const menuItems = [
  { text: 'Наши юристы', href: '/lawyers' },
  { text: 'Услуги', href: '/services' },
  { text: 'Отзывы', href: '/reviews' },
  { text: 'О нас', href: '/about' }
]

const emit = defineEmits(['open-modal'])
function openModal(id) {
  emit('open-modal', id)
}
</script>

<style scoped>
.hero-section1 {
  background: #292928;
  padding: 40px 20px;
  text-align: center;
}
.lawyer-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.legal-title-with-initials {
  font: 500 32px "Advent Pro", sans-serif;
  color: white;
}
.lawyer-services-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.legal-expert-heading,
.legal-services-heading,
.testimonial-heading,
.testimonial-header {
  font: 500 20px "Advent Pro", sans-serif;
  color: white;
  text-decoration: none;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 8px 16px;
  display: block;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.legal-expert-heading:hover,
.legal-services-heading:hover,
.testimonial-heading:hover,
.testimonial-header:hover {
  border-color: #E6CEAA;
  background: #E6CEAA;
  color: #292928;
}
.legal-info-section {
  margin-top: 20px;
}
.privacy-policy-section {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.privacy-policy-section a {
  font: 400 16px "Gabarito", sans-serif;
  color: #C8A27B;
  text-decoration: none;
  line-height: 1.5;
  transition: color 0.2s, text-decoration 0.2s;
}
.privacy-policy-section a:hover {
  color: #ffffff;
  text-decoration: underline;
}
.flex-image-container {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.box-image {
  width: 39px;
  height: 39px;
  object-fit: cover;
}
.footer-item {
  margin-bottom: 10px;
}
.footer-links-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
@media (max-width: 768px) {
  .lawyer-services-section {
    flex-direction: column;
    gap: 15px;
  }
  .privacy-policy-section {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .flex-image-container {
    gap: 20px;
    margin-top: 30px;
  }
  .legal-expert-heading,
  .legal-services-heading,
  .testimonial-heading,
  .testimonial-header {
    font-size: 18px;
    padding: 6px 12px;
    border-radius: 10px;
  }
  .privacy-policy-section a {
    font-size: 14px;
  }
  .box-image {
    width: 35px;
    height: 35px;
  }
}
@media (min-width: 769px) and (max-width: 999px) {
  .lawyer-services-section {
    gap: 30px;
  }
  .legal-expert-heading,
  .legal-services-heading,
  .testimonial-heading,
  .testimonial-header {
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 10px;
  }
  .privacy-policy-section a {
    font-size: 16px;
  }
  .box-image {
    width: 37px;
    height: 37px;
  }
  .flex-image-container {
    margin-top: 20px;
  }
}
@media (min-width: 1000px) {
  .hero-section1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 40px 80px;
  }
  .lawyer-card {
    justify-content: flex-start;
  }
  .lawyer-services-section {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
  .testimonial-section,
  .lawyer-section {
    text-align: left;
  }
  .legal-info-section {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .privacy-policy-section {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  .flex-image-container {
    display: flex;
    align-items: center;
  }
  .box-image {
    width: 39px;
    height: 39px;
    object-fit: cover;
  }
}
</style>
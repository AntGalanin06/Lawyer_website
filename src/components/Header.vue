<template>
  <header class="main-navigation-container">
    <div class="header-navbar">
      <router-link to="/" class="logo-block" style="text-decoration:none">
        <img :src="logoImg" alt="logo" class="avatar-image" />
        <p class="lawyer-title">
          <span class="legal-professional-title">{{ companyName }}</span>
        </p>
      </router-link>
      <div class="burger-menu" @click="menuActive = !menuActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="lawyer-menu-container main-nav" :class="{ active: menuActive }">
        <router-link
            v-for="m in menuItems"
            :key="m.href"
            :to="m.href"
            :class="m.class"
            @click="menuActive = false"
        >
          {{ m.text }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import logoImg from '/images/logo.png'
import { ref } from 'vue'

const companyName = 'ЮРИСТ NN'
const menuActive = ref(false)
const menuItems = [
  { text: 'Наши юристы', href: '/lawyers', class: 'lawyer-card-style' },
  { text: 'Услуги', href: '/services', class: 'lawyer-card-style' },
  { text: 'Отзывы', href: '/reviews', class: 'testimonial-section-style' },
  { text: 'О нас', href: '/about', class: 'testimonial-section-style' }
]
</script>

<style scoped>
.main-navigation-container {
  position: fixed;
  top: 0;
  width: 100%;
  background: #292928;
  z-index: 1000;
}
.header-navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 95px;
  box-sizing: border-box;
}
.logo-block {
  display: flex;
  align-items: center;
}
.avatar-image {
  width: 39px;
  height: 39px;
  object-fit: cover;
}
.legal-professional-title {
  font: 500 32px "Advent Pro", sans-serif;
  color: white;
  margin-left: 10px;
}
.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.burger-menu span {
  width: 30px;
  height: 3px;
  background: white;
}
.lawyer-menu-container {
  display: flex;
  gap: 20px;
}
.lawyer-card-style,
.testimonial-section-style {
  font: 500 20px "Advent Pro", sans-serif;
  color: white;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 8px 16px;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.lawyer-card-style:hover,
.testimonial-section-style:hover {
  border-color: #E6CEAA;
  background: #E6CEAA;
  color: #292928;
}
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }
  .lawyer-menu-container {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 95px;
    left: 0;
    width: 100%;
    background: #292928;
    padding: 15px 0;
    gap: 15px;
    align-items: center;
    box-sizing: border-box;
    z-index: 999;
  }
  .lawyer-menu-container.active {
    display: flex;
  }
  .lawyer-card-style,
  .testimonial-section-style {
    font-size: 18px;
    padding: 8px 16px;
    border-radius: 12px;
    width: 90%;
    text-align: center;
    background: transparent;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .lawyer-card-style:hover,
  .testimonial-section-style:hover {
    border-color: #E6CEAA;
    background: #E6CEAA;
    color: #292928;
  }
}
@media (min-width: 769px) and (max-width: 999px) {
  .lawyer-menu-container {
    gap: 30px;
  }
  .lawyer-card-style,
  .testimonial-section-style {
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 10px;
  }
}
@media (min-width: 1000px) {
  .header-navbar {
    max-width: 1300px;
    padding: 20px 40px;
  }
  .lawyer-menu-container {
    gap: 40px;
  }
  .lawyer-card-style,
  .testimonial-section-style {
    font-size: 22px;
    padding: 10px 18px;
    border-radius: 10px;
  }
}
</style>
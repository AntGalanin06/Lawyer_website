<template>
  <section class="contact-info-section" style="margin-top: 100px;">
    <div class="main-content-section">
      <div class="contact-info-section3">
        <div class="contact-address-block">
          <div class="contact-info-text">
            <p class="easy-access-location-heading">К нам легко добраться:</p>
            <p class="location-info">Нижний Новгород, пл. Горького, 17 Б</p>
            <p class="golden-text-gradient">8 800 555 05 35</p>
            <p class="messenger-prompt">Напишите нам в мессенджерах</p>
            <div class="flex-image-container">
              <img :src="tgImg" alt="Telegram" class="box-image" />
              <img :src="vkImg" alt="VK" class="box-image" />
              <img :src="ytImg" alt="YouTube" class="box-image" />
            </div>
            <p class="email-contact-text-style">
              <a href="mailto:office@advokatlink.ru">office@advokatlink.ru</a>
            </p>
          </div>
          <div class="contact-map-container">
            <img :src="addressImg" alt="Карта" class="contact-map-image" />
          </div>
        </div>
        <div class="office-photo-block">
          <img :src="officeImg" alt="Наш офис" class="office-photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import tgImg from '/images/icons/telegram.png'
import vkImg from '/images/icons/vk.png'
import ytImg from '/images/icons/youtube.png'
import addressImg from '/images/icons/address.png'
import officeImg from '/images/icons/office.jpeg'
</script>

<style scoped>
.contact-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
}
.main-content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.contact-info-section3 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  align-items: stretch;
  justify-content: center;
}
.contact-address-block {
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  border-radius: 30px;
  overflow: hidden;
  border: 3px solid #C8A27B;
  background: linear-gradient(182deg, rgba(50,48,46,0.5) 12.41%, rgba(42,42,42,0.5) 211.73%);
  backdrop-filter: blur(50px);
  box-shadow: 0px 49px 250px rgba(0, 0, 0, 0.25);
  min-width: 600px;
  display: flex;
}
.contact-info-text {
  flex: 1;
  padding: 30px;
  color: white;
  min-width: 280px;
  box-sizing: border-box;
}
.easy-access-location-heading {
  margin: 0;
  font: 600 24px Gabarito, sans-serif;
}
.location-info {
  margin: 16px 0 0;
  font: 400 15px Gabarito, sans-serif;
}
.golden-text-gradient {
  margin: 16px 0;
  font: 400 32px Gabarito, sans-serif;
  background: linear-gradient(135deg, #E6CEAA 0%, #C8A27B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.messenger-prompt {
  margin: 11px 0 0;
  font: 400 14px Gabarito, sans-serif;
}
.flex-image-container {
  display: flex;
  gap: 14px;
  margin-top: 8px;
}
.box-image {
  width: 39px;
  height: 39px;
  object-fit: cover;
}
.email-contact-text-style {
  margin-top: 28px;
  font: 400 16px Gabarito, sans-serif;
}
.contact-map-container {
  flex: 1;
  min-width: 0;
  background: #fff;
  display: flex;
}
.contact-map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.office-photo-block {
  flex: 1;
  min-width: 280px;
  border-radius: 30px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.office-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 1100px) {
  .contact-info-section3 {
    flex-direction: column;
    gap: 20px;
  }
  .contact-address-block {
    min-width: 100%;
  }
  .office-photo-block {
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .main-content-section {
    padding: 18px 2vw;
  }
  .contact-address-block {
    flex-direction: column;
    min-width: 100%;
  }
  .contact-map-container {
    height: 160px;
  }
  .office-photo-block {
    width: 100%;
    height: auto;
  }
  .office-photo {
    height: 200px;
  }
}
</style>
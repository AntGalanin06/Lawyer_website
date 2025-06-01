<template>
  <section class="client-testimonials-container">
    <div class="legal-text-container">
      <p class="standout-heading">У нас нет негативных отзывов, так как</p>
      <p class="legal-statement-styler">каждое дело прорабатывается командой</p>
      <p class="legal-statement-styler">квалифицированных юристов</p>
      <p class="client-feedback-statement">Реальные отзывы от тех, кто доверил нам свои дела</p>
    </div>
    <div class="testimonial-container">
      <div class="testimonial-card" v-for="review in reviews" :key="review.name">
        <div class="flexbox-container-with-image-and-text">
          <img :src="review.img" :alt="review.name" class="profile-image-container" />
          <div>
            <p class="golden-text-heading">{{ review.name }}</p>
            <p class="business-info-text-style">{{ review.status }}</p>
          </div>
        </div>
        <p class="testimonial-text">
          {{ review.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import beliyImg from '/images/beliy.png'
import gordeevImg from '/images/gordeev.png'
import vlasovaImg from '/images/vlasova.png'

const reviews = [
  {
    name: 'Анатолий Белый',
    status: 'ИП',
    img: beliyImg,
    text:
        'В сложный момент, когда мой бизнес столкнулся с юридическими проблемами, Иван Валерьевич Зубов стал для меня настоящей опорой. Он детально разобрался в ситуации, грамотно выстроил стратегию защиты и помог избежать серьезных убытков. Благодарю за профессионализм и внимательность к деталям!'
  },
  {
    name: 'Сергей Гордеев',
    status: 'ИП',
    img: gordeevImg,
    text:
        'Стал жертвой недобросовестных партнеров, которые попытались оставить меня без бизнеса. Алексей Федорович не только помог мне разобраться в ситуации, но и грамотно выстроил защиту в суде. В результате – справедливое решение в мою пользу и восстановление репутации. Спасибо за компетентность и поддержку!'
  },
  {
    name: 'Екатерина Власова',
    status: 'ИП',
    img: vlasovaImg,
    text:
        'Неоднократно обращалась к Марии Александровне за консультациями по юридическим вопросам в сфере бизнеса. Его советы всегда точны, решения – эффективны, а подход – индивидуален. Благодаря ему я избежала множества рисков и защитила свой бизнес. Если вам нужен надежный адвокат – обращайтесь!'
  }
]
</script>

<style scoped>
.client-testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.legal-text-container {
  text-align: left;
  margin-bottom: 30px;
  margin-left: 20px;
}
.standout-heading {
  font: 600 42px Gabarito, Arial, sans-serif;
  color: #222;
  margin: 0 0 16px;
}
.legal-statement-styler {
  font: 600 42px Gabarito, Arial, sans-serif;
  background: linear-gradient(135deg, #E6CEAA, #C8A27B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 4px 0;
}
.client-feedback-statement {
  margin-top: 20px;
  font: 400 18px Gabarito, Arial, sans-serif;
  color: #444;
}
.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  justify-content: flex-start;
}
.testimonial-card {
  flex: 1 1 330px;
  min-width: 280px;
  max-width: 370px;
  padding: 22px;
  background: #fafafa;
  border-radius: 20px;
  box-shadow:
      inset 1px 1px 14px rgba(255,255,255,0.09),
      inset -1px -1px 20px rgba(0,0,0,0.13),
      0px 49px 250px rgba(0,0,0,0.13);
  backdrop-filter: blur(60px);
}
.flexbox-container-with-image-and-text {
  display: flex;
  gap: 12px;
  align-items: center;
}
.profile-image-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #E6CEAA;
}
.golden-text-heading {
  font: 700 22px Gabarito, Arial, sans-serif;
  color: #C8A27B;
  margin: 0;
}
.business-info-text-style {
  margin-top: 6px;
  font: 500 18px Gabarito, Arial, sans-serif;
  color: #333;
}
.testimonial-text {
  margin-top: 16px;
  font: 400 17px Gabarito, Arial, sans-serif;
  color: #222;
  line-height: 1.5;
}
@media (max-width: 900px) {
  .legal-text-container {
    margin-left: 8px;
  }
  .testimonial-container {
    flex-direction: column;
  }
  .standout-heading {
    font-size: 32px;
  }
  .legal-statement-styler {
    font-size: 32px;
  }
  .client-feedback-statement {
    font-size: 16px;
  }
}
</style>
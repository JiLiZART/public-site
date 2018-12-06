<template>
  <footer class="footer" id="data-author" itemprop="author" itemscope itemtype="http://schema.org/Person" role="contentinfo" tabindex="6">
    <HeadingSecondary>Со мной можно связаться 🤙</HeadingSecondary>
    <meta itemprop="name" content="Николай Костюрин">
    <PageText>По скайпу
      <PageLink :href="links.skype" itemprop="skype" aria-label="Контакт в Skype">JiLiZART</PageLink>
      или написать на почту
      <PageLink :href="links.mailto" itemprop="email" aria-label="Контакт по Email">nikolay@artkost.ru</PageLink>
      .
    </PageText>
    <PageText>Так же я есть в
      <PageLink :href="links.twitter" itemprop="twitter" aria-label="Контакт в Twitter">Twitter</PageLink>
      ,
      <PageLink
        :href="links.linkedin" itemprop="linkedin" aria-label="Контакт в Linkedin">Linkedin
      </PageLink>
      ,
      <PageLink
        :href="links.facebook" itemprop="facebook" aria-label="Контакт в Facebook">Facebook
      </PageLink>
      ,
      <PageLink
        :href="links.telegram" itemprop="telegram" aria-label="Контакт в Telegram">Telegram
      </PageLink>
      и
      <PageLink
        :href="links.github" itemprop="github" aria-label="Контакт на Github">Github
      </PageLink>
    </PageText>
    <PageText>Для HR у меня есть
      <PageLink :href="links.cv" aria-label="Ссылка на Резюме">CV</PageLink>
    </PageText>
  </footer>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import PrimaryMenu from '~/components/PrimaryMenu.vue'
  import HeadingSecondary from '~/components/HeadingSecondary.vue'
  import PageLink from '~/components/PageLink.vue'
  import PageText from '~/components/PageText.vue'
  import PageDescription from '~/components/PageDescription.vue'

  export default {
    components: {
      Logo,
      PageLink,
      PageText,
      PageDescription,
      HeadingSecondary,
      PrimaryMenu
    },

    data() {
      return {
        links: {
          skype: 'skype:jilizart?chat',
          mailto: 'mailto:nikolay@artkost.ru',
          twitter: 'https://twitter.com/jilizart',
          linkedin: 'https://ru.linkedin.com/in/nkostyurin',
          facebook: 'https://www.facebook.com/JiLiZART',
          telegram: 'https://t.me/jilizart',
          github: 'https://github.com/JiLiZART',
          cv: 'https://docs.google.com/document/d/17mfG-_zVQLGED9dctMpNRMUt4efhVaIc2YKm0k5DJyo/edit?usp=sharing'
        }
      }
    }
  }
</script>

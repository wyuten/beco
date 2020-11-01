<template>
  <div class="layout">
    <Sidebar
      :is-closed="isSidebarClosed" 
      :pages="pages" 
      :current-page-name="pageName"
      @toggle-sidebar="toggleSidebar"
    />

    <header :class="['main-header', 'container', { 'main-header--scroll': isSmallHeader }]">
      <h1 class="page-title">{{ pageTitle }}</h1>
      <input class="search" type="text" placeholder="Какой магазин вам нужен?">
    </header>

    <main class="main-content">
      <ul :class="['promo-codes-list', 'container', { 'promo-codes-list--scroll': isSmallHeader }]">
        <li class="promo-code"
          v-for="(promoCode, index) in promoCodes"
          :key="index"
        >
          <div class="promo-code__text">
            <div class="promo-code__description">
              <h2 class="promo-code__title">{{ promoCode.title }}</h2>
              <p class="promo-code__subtitle">{{ promoCode.subtitle }}</p>
            </div>
            <div class="promo-code__reduction">
              <strong class="promo-code__reduction-code">{{ promoCode.reductionCode }}</strong>
              <span class="promo-code__reduction-type">{{ promoCode.reductionType }}</span>
            </div>
          </div>
          <img class="promo-code__img" :src="require('../assets/images/' + promoCode.image)" alt="Торт">
        </li>
      </ul>
    </main>
  </div>
</template>


<script>
import Sidebar from "./Sidebar.vue"

export default {
  name: "Index",
  props: ["page-title", "page-name"],
  components: {
    Sidebar,
  },
  data: function () {
    return {
      pages: {
        catalog: {
          name: "catalog",
          title: "Каталог",
        },
        health: {
          name: "health",
          title: "Здоровье",
        },
        beauty: {
          name: "beauty",
          title: "Красота",
        },
        enjoy: {
          name: "enjoy",
          title: "Развлечения",
        },
        auto: {
          name: "auto",
          title: "Авто",
        },
      },
      promoCodes: [
        {
          title: "Пробка на мира",
          subtitle: "Вечер для двоих",
          reductionCode: "50%",
          reductionType: "скидка",
          image: "wine.png",
        },
        {
          title: "Кино и немцы",
          subtitle: "Бесплатный бокал пива",
          reductionCode: "варва",
          reductionType: "промокод",
          image: "beer.png",
        },
        {
          title: "Valery cakes",
          subtitle: "Торт",
          reductionCode: "30%",
          reductionType: "скидка",
          image: "cake.png",
        },
        {
          title: "Пробка на мира",
          subtitle: "Вечер для двоих",
          reductionCode: "50%",
          reductionType: "скидка",
          image: "wine.png",
        },
        {
          title: "Кино и немцы",
          subtitle: "Бесплатный бокал пива",
          reductionCode: "варва",
          reductionType: "промокод",
          image: "beer.png",
        },
        {
          title: "Valery cakes",
          subtitle: "Торт",
          reductionCode: "30%",
          reductionType: "скидка",
          image: "cake.png",
        },
      ],
      isSidebarClosed: true,
      isSmallHeader: false,
    }
  },
  methods: {
    hidePageTitle() {
      if (pageYOffset > 10 && this.promoCodes.length > 6) { 
        this.isSmallHeader = true;
      } else {
        this.isSmallHeader = false;
      }
    },
    toggleSidebar(to) {
      if (to) {
        this.isSidebarClosed = to;
      } else {
        this.isSidebarClosed = !this.isSidebarClosed;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.hidePageTitle);
  }
}
</script>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.main-header {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: $headerHeight;
  padding-top: 37px;
  padding-bottom: 26px;
  font-family: "Open Sans", "sans-serif";
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;

  &--scroll {
    height: $headerHeightInScroll;
    padding-top: 27px;

    .page-title {
      display: none;
    }

    .search {
      width: calc(100% - 80px);
      margin-left: auto;
      padding-left: 16px;
      background-image: none;
    }

    &.container {
      padding-left: 0;
    }
  }
}

.page-title {
  align-self: flex-end;
  margin-bottom: 21px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}

.search {
  padding: 12px 16px 12px 46px;

  font-size: 14px;
  line-height: 28px;

  background-image: url("../assets/images/search.svg");
  background-repeat: no-repeat;
  background-position: 16px center;
  border-radius: 50px;
  border: 1px solid #D6D6D6;
}

.promo-codes-list {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - #{$headerHeight});
  margin-top: $headerHeight;
  padding-top: 27px;
  padding-bottom: 27px;
  background-color: #FAFAFA;
  list-style: none;

  &--scroll {
    margin-top: $headerHeightInScroll;
  }
}

.promo-code {
  position: relative;
  display: flex;
  min-height: 131px;
  margin-bottom: 15px;
  padding: 16px 20px;

  font-family: "Roboto", "sans-serif";

  background-color: #FFFFFF;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    border-color: #DF212D;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.promo-code__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promo-code__title {
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.promo-code__subtitle {
  font-size: 12px;
  line-height: 16px;
  opacity: 0.5;
}

.promo-code__reduction-code {
  display: block;
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 28px;
  line-height: 24px;
  color: #DF212D;
  text-transform: uppercase;
}

.promo-code__reduction-type {
  display: block;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  opacity: 0.5;
}

.promo-code__img {
  position: absolute;
  top: 0;
  right: 0.5px;
  height: 100%;
}


@media (min-width: 768px) {
  .container {
    padding-left: $sidebarTabletWidth + 27px;
    padding-right: 27px;
  }

  .main-header--scroll {
    .search {
      width: calc(100% - 172px);
      padding-left: 46px;
      background-image: url("../assets/images/search.svg");
    }
  }

  .page-title {
    font-size: 28px;
    line-height: 38px;
  }

  .search {
    font-size: 18px;

    &::placeholder {
      text-align: left;
    }
  }

  .promo-codes-list {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    min-height: calc(100vh - #{$sidebarTabletHeight});
  }

  .promo-code {
    width: 48.52459016393443%;
    min-height: 144px;
    margin-bottom: 20px;
    padding: 15px 18px;

    &:nth-child(2n) {
      margin-left: auto;
    }

    &:nth-last-child(-n+2) {
      margin-bottom: 0;
    }
  }

  .promo-code__title {
    font-size: 14px;
  }

  .promo-code__subtitle {
    font-size: 14px;
  }

  .promo-code__reduction-code {
    margin-bottom: 3px;
    font-size: 36px;
    line-height: 28px;
  }

  .promo-code__reduction-type {
    font-size: 16px;
  }
}


@media (min-width: 1440px) {
  .container {
    padding-left: calc(#{$sidebarDesktopWidth} + 60px);
    padding-right: calc(100% - (#{$sidebarDesktopWidth} + 60px) - 1080px);
  }

  .main-header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
  }

  .main-header--scroll {
    height: auto;
    padding-top: 37px;
  }

  .main-header--scroll.container {
    padding-left: 300px;
  }

  .main-header--scroll .page-title {
    display: block;
  }

  .main-header--scroll .search {
    width: 100%;
    margin-left: 0;
  }

  .page-title {
    align-self: flex-start;
  }

  .promo-codes-list {
    padding-top: 216px;
    padding-bottom: 40px;
  }

  .promo-codes-list--scroll {
    margin-top: 0;
  }

  .promo-code {
    width: 346px;
    min-height: 160px;

    &:nth-child(odd) {
      margin-right: 0;
    }

    &:nth-last-child(-n+3) {
      margin-bottom: 0;
    }

    &:nth-child(2n) {
      margin-left: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 20px;
    }
  }

  .promo-code__reduction-code {
    margin-bottom: 6px;
  }
}
</style>
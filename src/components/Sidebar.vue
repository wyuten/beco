<template>
  <div :class="['sidebar', [ isClosed ? 'sidebar--closed' : 'sidebar--opened' ]]">
    <a class="logo-link" href="#">
      <IconBase class="emblem" :width="24" :height="24">
        <EmblemIcon/></IconBase>
      <IconBase class="logo" :width="37" :height="11">
        <LogoIcon/></IconBase>
    </a>
    <ul class="main-navigation">
      <li 
        v-for="page in pages" 
        :key="page.name"
        :class="[
          'main-navigation__item', 
          { 'main-navigation__item--current': currentPageName === page.name}
        ]"
      >
        <a @click="$router.push({ path: page.name })">
          <IconBase class="icon" :width="24" :height="24" color="transparent">
            <component :is="page.name"></component>
          </IconBase>
          {{ page.title }}
        </a>
      </li>
    </ul>
    <button class="sidebar__toggle-btn" @click="toggleSidebar">
      <IconBase v-if="isClosed" :width="26" :height="20"><SidebarOpenIcon/></IconBase>
      <IconBase v-if="!isClosed" :width="26" :height="20"><SidebarCloseIcon/></IconBase>
    </button>
  </div>
</template>


<script>
import IconBase from "./main/IconBase.vue"

import EmblemIcon from "./main/icons/EmblemIcon.vue"
import LogoIcon from "./main/icons/LogoIcon.vue"
import SidebarOpenIcon from "./main/icons/SidebarOpenIcon.vue"
import SidebarCloseIcon from "./main/icons/SidebarCloseIcon.vue"
import AutoIcon from "./main/icons/AutoIcon.vue"
import BeautyIcon from "./main/icons/BeautyIcon.vue"
import CatalogIcon from "./main/icons/CatalogIcon.vue"
import EnjoyIcon from "./main/icons/EnjoyIcon.vue"
import HealthIcon from "./main/icons/HealthIcon.vue"

export default {
  name: "Sidebar",
  props: ["is-closed", "current-page-name", "pages"],
  components: {
    IconBase,
    EmblemIcon,
    LogoIcon,
    SidebarOpenIcon,
    SidebarCloseIcon,
    "auto": AutoIcon,
    "beauty": BeautyIcon,
    "catalog": CatalogIcon,
    "enjoy": EnjoyIcon,
    "health": HealthIcon,
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.sidebar {
  position: fixed;
  top: 0;
  z-index: 2;

  width: $sidebarMobileWidth;
  height: 100vh;

  background-color: #F3F4F9;
}

.sidebar__toggle-btn {
  position: absolute;
  top: 0;
  left: $sidebarMobileWidth;

  display: flex;
  align-items: center;
  width: 48px;
  height: 106px;

  background-color: transparent;
  background-image: url("../assets/images/sidebar-btn-background.svg");

  cursor: pointer;
  border: none;
  outline: none;

  svg {
    width: 26px;
    height: 20px;
  }
}

.sidebar--opened {
  width: 192px;

  .logo,
  .emblem {
    display: block;
  }

  .main-navigation {
    display: block;
  }

  .sidebar__toggle-btn {
    left: 192px;
  }
}

.logo,
.emblem,
.main-navigation {
  display: none;
}

.logo-link {
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
}

.emblem {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.logo {
  width: 38px;
  height: 21px;
}

.main-navigation {
  list-style: none;
}

.main-navigation__item {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 42px;
  padding-left: 20px;

  a {
    font-family: "Open Sans", "sans-serif";
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    text-decoration: none;
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &--current {
    padding-left: 18px;
    border-left: 2px solid #34ABE0;

    a {
      color: #34ABE0;
    }
  }

  .icon {
    display: none;
  }
}


@media (min-width: 768px) {
  .sidebar {
    width: $sidebarTabletWidth;
  }

  .sidebar__toggle-btn {
    left: $sidebarTabletWidth;
  }

  .sidebar--closed {
    .emblem {
      display: block;
      margin-right: 0;
    }

    .main-navigation {
      display: block;
    }

    .main-navigation__item {
      padding-left: 40px;

      &--current {
        padding-left: 38px;
      }

      a {
        font-size: 0;
      }
    }
  }

  .sidebar--opened {
    width: 246px;

    .sidebar__toggle-btn {
      left: 246px;
    }

    .logo-link {
      justify-content: flex-start;
      padding-left: 40px;
    }

    .main-navigation__item {
      .icon {
        margin-right: 14px;
      }
    }
  }

  .logo-link {
    justify-content: center;
    padding-left: 0;
  }

  .main-navigation__item {
    padding-left: 40px;

    a {
      display: flex;
      align-items: center;
    }

    .icon {
      display: block;
      width: 24px;
      height: 24px;
      stroke: #000000;
    }

    &--current {
      padding-left: 38px;
    }

    &--current .icon {
      stroke: #34ABE0;
    }
  }
}


@media (min-width: 1440px) {
  .sidebar {
    width: 240px;
  }

  .sidebar__toggle-btn {
    display: none;
  }

  .sidebar--closed,
  .sidebar--opened {
    .logo-link {
      justify-content: flex-start;
      margin-bottom: 12px;
      padding-left: 43px;
    }

    .emblem {
      display: block;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    .logo {
      display: block;
    }

    .main-navigation__item {
      padding-left: 42px;

      &--current {
        padding-left: 40px;
      }

      a {
        font-size: 16px;
      }

      .icon {
        margin: 0;
        margin-right: 15px;
      }
    }
  }
}
</style>
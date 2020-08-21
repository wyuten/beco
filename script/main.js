Vue.component("sidebar", {
    props: ["pages", "current-page", "is-closed"],
    template: `
        <div :class="['sidebar', [ isClosed ? 'sidebar--closed' : 'sidebar--opened' ]]">
            <a class="logo-link" href="#">
                <svg width="49" height="50" class="emblem">
                    <use xlink:href="img/sprite.svg#emblem"/>
                </svg>
                <svg width="61" height="24" class="logo">
                    <use xlink:href="img/sprite.svg#logo"/>
                </svg>
            </a>
            <ul class="main-navigation">
                <li v-for="page in pages" :class="[
                    'main-navigation__item', 
                    { 'main-navigation__item--current': currentPage.name === page.name}
                ]">
                    <a @click="goToPage(page)">
                        <svg class="icon">
                            <use :xlink:href="'img/sprite.svg#' + page.name"/>
                        </svg>
                        {{ page.title }}
                    </a>
                </li>
            </ul>
            <button class="sidebar__toggle-btn" @click="toggleSidebar">
                <svg>
                    <use v-if="isClosed" xlink:href="img/sprite.svg#sidebar-btn--open"/>
                    <use v-if="!isClosed" xlink:href="img/sprite.svg#sidebar-btn--close"/>
                </svg>
            </button>
        </div>
    `,
    mounted() {
        // if (screen.width >= 1440) {
        //     this.toggleSidebar(false);
        // }
    },
    methods: {
        toggleSidebar() {
            this.$emit("toggle-sidebar");
        },

        goToPage(page) {
            this.$emit("go-to-page", page);
        }
    }
});

let vm = new Vue({
    el: "#page",
    data: {
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
        currentPage: {},
        isPageScrolled: false,
        isSidebarClosed: true,
    },
    methods: {
        hidePageTitle() {
            if (pageYOffset > 10) { 
                this.isPageScrolled = true;
            } else {
                this.isPageScrolled = false;
            }
        },
        toggleSidebar(to) {
            if (to) {
                this.isSidebarClosed = to;
            } else {
                this.isSidebarClosed = !this.isSidebarClosed;
            }
        },
        goToPage(page) {
            // window.location.pathname = page.name;
            this.currentPage = page;
        }
    },
    mounted() {
        document.addEventListener("scroll", this.hidePageTitle);

        this.currentPage = this.pages.catalog;
    }
});
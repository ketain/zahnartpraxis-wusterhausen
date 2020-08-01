// credits go to https://webdeasy.de/en/programming-vue-js-fullpage-scroll/
<template>
  <div class="home-page-container">
    <div class="sections-menu">
      <span
        class="menu-point"
        :class="{ active: activeSection == index }"
        v-on:click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index"
      >
      </span>
    </div>
    <section class="fullpage">
      <Header />
    </section>

    <section class="fullpage">
      <b-container>
        <b-row class="fullpage" align-v="center">
          <b-col cols="12">
            <BusinessHours />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container>
        <b-row class="fullpage" align-v="center">
          <b-col cols="12">
            <Services />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="fullpage">
      <b-container>
        <b-row class="fullpage" align-v="center">
          <b-col cols="12">
            <Team />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="fullpage">
      <Contact />
    </section>

    <section class="fullpage">
      <Footer />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import BusinessHours from "@/components/BusinessHours.vue";
import Services from "@/components/Services.vue";
import Team from "@/components/Team.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    BusinessHours,
    Services,
    Team,
    Contact,
    Footer
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    };
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.activeSection = id;
      this.inMove = true;

      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: "smooth"
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },

    handleMouseWheel: function(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },

    moveDown() {
      this.inMove = true;
      this.activeSection--;
      if (this.activeSection < 0) this.activeSection = 0;
      this.scrollToSection(this.activeSection, true);
    },

    moveUp() {
      this.inMove = true;
      this.activeSection++;
      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;
      this.scrollToSection(this.activeSection, true);
    },

    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },

    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      this.touchStartY = 0;
      return false;
    }
  },
  mounted() {
    this.calculateSectionOffsets();

    // Mozilla Firefox
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);

    // Other browsers
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false
    });

    // mobile devices
    window.addEventListener("touchstart", this.touchStart, {
      passive: false
    });

    // mobile devices
    window.addEventListener("touchmove", this.touchMove, {
      passive: false
    });
  },
  destroyed() {
    // Mozilla Firefox
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM);

    // Other browsers
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false
    });

    // mobile devices
    window.removeEventListener("touchstart", this.touchStart);

    // mobile devices
    window.removeEventListener("touchmove", this.touchMove);
  }
};
</script>

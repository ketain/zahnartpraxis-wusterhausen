// credits go to https://webdeasy.de/en/programming-vue-js-fullpage-scroll/
<template>
  <div class="home-page-container" lang="de-DE">
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

    <section class="fullpage header-container">
      <Header />
    </section>

    <section class="fullpage white-background">
      <b-row class="fullpage" align-v="center" align-h="center">
        <b-col cols="12">
          <BusinessHours />
        </b-col>
      </b-row>
    </section>

    <section class="white-background">
      <b-container>
        <b-row class="fullpage" align-v="center">
          <b-col cols="12">
            <Services />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="fullpage white-background">
      <b-container>
        <b-row class="fullpage" align-v="center">
          <b-col cols="12">
            <Team />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="fullpage white-background">
      <Contact />
    </section>

    <section class="fullpage white-background">
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
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>

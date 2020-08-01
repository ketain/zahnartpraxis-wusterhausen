<template>
  <div>
    <h1>UNSER TOLLES TEAM</h1>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="999999999"
      controls
      indicators
      background="#FFF"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-blank
        v-for="(members, index) in splitTeamMembers"
        :key="index"
      >
        <b-card-group deck class="team-slides-container">
          <b-row>
            <b-col
              class="px-lg-0 px-sm-0"
              sm="6"
              md="4"
              v-for="(member, index) in members"
              :key="index"
            >
              <b-card
                :title="member.name"
                img-src="https://picsum.photos/300/300/?image=41"
                img-alt="Image"
                img-top
                img-height="100%"
              >
                <b-card-text>
                  {{ member.occupation }}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-card-group>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import teamMembers from "../data/teamMembers.js";

export default {
  data() {
    return {
      teamMembers,
      splitTeamMembers: [],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  },
  mounted() {
    let slide = -1;
    for (let i = 0; i < this.teamMembers.length; i++) {
      if (i % 3 === 0) {
        let newArray = [];
        newArray.push(this.teamMembers[i]);
        this.splitTeamMembers.push(newArray);
        slide++;
      } else {
        let array = this.splitTeamMembers[slide];
        array.push(this.teamMembers[i]);
      }
    }
  }
};
</script>

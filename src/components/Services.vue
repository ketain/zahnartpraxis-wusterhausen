<template>
  <div>
    <h1>Unsere Leistungen</h1>
    <p>
      Unsere Behandlungskonzepte basieren auf kontinuierlich weitergebildetem
      Wissen durch langjährigen Besuch von Fortbildungsveranstaltungen.
      Entsprechend bieten wir: Fachliche Qualifikation auf hohem Niveau,
      minimalinvasive Techniken und qualitativ hochwertige Zahnheilkunde mit
      modernen erprobten Methoden und Materialien. Am Anfang einer jeden
      Behandlung steht ein ausführliches Gespräch.
    </p>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h1>Vorsorge</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
        <h1>Paradontosebehandlung</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=109">
        <h1>Füllungstherapie</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=23">
        <h1>Wurzelbehandlung</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=545">
        <h1>Laserbehandlung</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=78">
        <h1>Chirurgie</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=99">
        <h1>Zahnersatz</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1">
        <h1>Kieferorthopädie</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

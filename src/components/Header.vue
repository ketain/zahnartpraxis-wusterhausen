<template>
  <div>
    <b-container fluid>
      <b-row class="fullpage" align-v="center" align-h="center">
        <div class="fullpage background-filler"></div>
        <parallax fixed speedFactor="0.5">
          <img
            class="img"
            src="@/assets/images/praxis.jpg"
            alt="very cool bg"
          />
        </parallax>

        <b-col align-self="center">
          <h1>Zahnarztgemeinschaft</h1>
          <h1>Müller & Lehmann</h1>
          <br />
          <p>
            Unsere Patienten vertrauen uns ihre Zähne an. Aus diesem Grund
            stehen bei uns die Patienten im Vordergrund. Wir richten uns nach
            den individuellen Bedürfnissen unserer Patienten. Aus diesem Grund
            bieten wir ein breites Angebot an Behandlungsmethoden an und nehmen
            uns Zeit für jeden einzelnen Patienten. Alles mit dem Ziel, die
            Zahngesundheit zu erhalten oder möglichst schonend
            wiederherzustellen. Krankheiten vorbeugen ist immer besser, als zu
            kurieren. Selbstverständlich nehmen wir auf die Wünsche der
            Patienten Rücksicht und vereinbaren Termine möglichst zeitnah und
            flexibel.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
export default {
  components: {
    Parallax
  }
};
</script>

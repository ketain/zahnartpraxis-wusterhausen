<template>
  <div>
    <b-card
      no-body
      border-variant="light"
      class="overflow-hidden"
      style="max-width: 1024px;"
    >
      <b-row no-gutters>
        <b-col md="6" class="mx-auto">
          <b-card-img
            :src="require('@/assets/images/blur-bristle-brush-clean.jpg')"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Öffnungszeiten">
            <b-card-text>
              <b-table hover :items="items" :fields="fields"></b-table>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "weekday",
          thStyle: {
            display: "none"
          }
        },
        {
          key: "fromTo",
          thStyle: {
            display: "none"
          }
        }
      ],
      items: [
        {
          weekday: "Montag",
          fromTo: "08:00 - 12:00 Uhr und 13:00 - 18:00 Uhr"
        },
        {
          weekday: "Dienstag",
          fromTo: "08:00 - 12:00 Uhr und 13:00 - 18:00 Uhr"
        },
        {
          weekday: "Mittwoch",
          fromTo: "08:00 - 12:00 Uhr und 13:00 - 18:00 Uhr"
        },
        { weekday: "Donnerstag", fromTo: "08:00 - 14:00 Uhr" },
        { weekday: "Freitag", fromTo: "08:00 - 12:00 Uhr " }
      ]
    };
  }
};
</script>

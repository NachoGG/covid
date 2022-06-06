<template>
  <div class="container-vaccines">
      <Table
        :columns="columns"
        :data="vaccines"/>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
// import Table from '@/components/Table.vue';
import Table from '../components/Table.vue';
export default {
  components: {
    Table
  },

  data() {
    return {
      columns: [
        {
            label: 'Country',
            value: 'country',
            type: String
          },
          {
            label: 'Capital city',
            value: 'capital_city',
            type: String
          }, {
            label: 'Continent',
            value: 'continent',
            type: String
          },
          {
            label: 'Population',
            value: 'population',
            type: Number
          },
          {
            label: 'People vaccinated ',
            value: 'people_vaccinated',
            type: Number
          },
          {
            label: 'People partially vaccinated ',
            value: 'people_partially_vaccinated',
            type: Number
          },
          {
            label: 'Administered dose',
            value: 'administered',
            type: Number
          }
      ],
    }
  },

  mounted() {
    this.getVaccines();
  },

  computed: {
    ...mapState(['vaccines']),
  },

  methods: {
    ...mapActions(['getVaccines']),
  },
}
</script>
<style lang="scss" scoped>
.container-vaccines {
  overflow: auto;
}
</style>
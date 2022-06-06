<template>
  <div class="cases-container">
    <Table 
      :columns="columns"
      :data="cases"/>
  </div>
</template>
<script>
import Table from '@/components/Table.vue';
import { mapActions, mapState } from 'vuex';
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
          label: 'Confirmed cases',
          value: 'confirmed',
          type: Number
        },
        {
          label: 'Death cases',
          value: 'deaths',
          type: Number
        }
      ],
    }
  },

  mounted() {
    console.log('ola');
    this.getCases();
  },

  computed: {
    ...mapState(['cases']),
  },

  methods: {
    ...mapActions(['getCases']),
  },
}
</script>
<style lang="scss" scoped>
.container-cases {
  overflow: auto;
}
</style>
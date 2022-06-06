<template>
  <div class="table-data">
      <table>
        <thead>
          <tr>
            <td v-for="(column, key) in columns"
              :key="key">
              {{ column.label }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in data"
            :key="key">
            <td v-for="(columm, keyC) in columns"
              :key="keyC">
              {{ item.All[columm.value] ? format(item.All[columm.value], columm.type) : key }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
export default {
  props: [
    'columns',
    'data'
  ],
  methods: {
    format(value, type) {
      if (type == Number) {
        return (+value).toLocaleString();
      }
      return value;
    }
  },
}
</script>
<style lang="scss" scoped>
.table-data {
  > table {
    width: 100%;
    thead tr td {
      font-weight: bold;
    }
    tbody tr {
      &:hover {
        background-color: #a2a0a0;
      }
      &:nth-child(2n) {
        background-color: #cecece;
        &:hover {
          background-color: #a2a0a0;
        }
      }
    }
  }
}
</style>
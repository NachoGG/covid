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
              <!-- {{ item.All[columm.value] }} -->
              {{ item.All[columm.value] ? item.All[columm.value] : key }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: [
    'columns',
    'data'
  ]
}
</script>
<style lang="scss" scoped>
.table-data {
  overflow: auto;
  > table {
    width: 100%;
    thead tr td {
      font-weight: bold;
      // background-color: red;
    }
    tbody tr {
      &:hover {
        background-color: #a2a0a0;
      }
      &:nth-child(2n) {
        background-color: #cecece;
        // color: white;
        &:hover {
          background-color: #a2a0a0;
        }
      }
    }
  }
}
</style>
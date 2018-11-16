<template>
  <el-button @click="goScanner" type="primary">扫描</el-button>
</template>

<script>
export default {
  methods: {
    goScanner: function () {
      this.$router.push('/scanner')
    }
  }
}
</script>

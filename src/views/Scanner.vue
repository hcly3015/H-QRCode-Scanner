<template>
  <div>
    <qrcode-scanner @error="openError" @success="clearErrors"></qrcode-scanner>

    <div v-for="error in errors" :key="error" class="alert alert-danger">
      {{ error }}
      <button type="button" class="close" aria-label="Close" @click="closeError(error)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import QrcodeScanner from '@/components/QrcodeScanner/QrcodeScanner'

export default {
  data () {
    return {
      errors: []
    }
  },
  components: {
    QrcodeScanner
  },
  methods: {
    openError (error) {
      this.errors.push(error)
    },
    closeError (error) {
      const index = this.errors.indexOf(error)
      this.errors.splice(index, 1)
    },
    clearErrors () {
      this.errors = []
    }
  }
}
</script>

<style lang="css" scoped>
.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.close {
  padding: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
button.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
</style>

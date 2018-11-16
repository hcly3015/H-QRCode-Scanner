<template>
  <div>
    <QrcodeReader @decode="onDecode" @init="onInit">
      <div class="decoded-content">{{ content }}</div>
      <LoadingIndicator v-show="loading" />
    </QrcodeReader>
  </div>
</template>

<script>
import { QrcodeReader, QrcodeStream } from 'vue-qrcode-reader'

import InitHandler from '@/mixins/InitHandler'

export default {
  mixins: [InitHandler],

  data () {
    return {
      paused: false,
      content: ''
    }
  },
  components: {
    QrcodeReader,
    QrcodeStream
  },
  methods: {
    onDecode (content) {
      this.content = content
      this.paused = true
    }
  }
}
</script>

<style lang="css" scoped>
.decoded-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;

  padding: 0px 20px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<template>
  <div class="container mt-4">
    <h5>테스트 블로그입니다.</h5>
    <p>vue Test</p>
    <p>시간: {{ nowTime }}</p>
    <p>{{ searchTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowTime: '',
    };
  },
  created() {
    this.nowTimes();
    this.setDate();
    setInterval(this.nowTimes.bind(this), 1000);
  },
  methods: {
    setDate() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
      let date = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
      let hh = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
      let mm = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      return {
        year: year,
        month: month,
        date: date,
        hh: hh,
        mm: mm,
        ss: ss,
      };
    },
    nowTimes() {
      this.nowTime = this.setDate().year + '-' + this.setDate().month + '-' + this.setDate().date + '-' + this.setDate().hh + ':' + this.setDate().mm + ':' + this.setDate().ss;
    },
  },
  mounted() {},
};
</script>

<style></style>

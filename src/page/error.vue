<template>
  <div class="error">
    <p>页面找不到</p>
    <a :href="homeUrl">回到首页</a>
  </div>
</template>
<script>
export default {
    name: 'error',
    data() {
        return {
            homeUrl: null
        };
    },
    methods: {},
    created() {
        this.homeUrl = window.location.href.split('#')[0];
    }
};
</script>

<style lang="less" scoped>
.error {
    p {
        text-align: center;
        line-height: 5rem;
    }
    a {
        display: block;
        width: 10rem;
        height: 2rem;
        text-align: center;
    }
}
</style>

<template>
    <p @click="test">Stations</p>
</template>

<script>
export default {
    methods: {
        test: function() {
            this.$router.push('/stations/1')
        }
    }
}
</script>

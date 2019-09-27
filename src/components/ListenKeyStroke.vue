<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "ListenKeyStroke",
        data() {
            return {
            }
        },
        mounted() {
            // single keys
            this.$mousetrap.bind('a', this.logIt);
            this.$mousetrap.bind("b", this.logIt);
        },
        methods: {
            logIt(e) {  
                let timestamp = new Date();
                this.$emit('setItem', e.key, timestamp)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
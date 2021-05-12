<template>
    <div>
        <Header />
        <Slogan/>
        <Part/>
    </div>
</template>
<script>
import Header from "./component/header";
import Slogan from "./component/slogan";
import Part from "./part";
export default {
    components: {
        Header,
        Slogan,
        Part
    },
};
</script>
<style lang="less" scoped>

</style>

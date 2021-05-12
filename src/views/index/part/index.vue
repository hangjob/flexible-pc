<template>
    <div class="part bg">
        <div class="part-container">
            <div class="part-content">
                <Tab @change="change" />
                <TabTable v-if="active === 1" />
                <AgentTable v-if="active === 2" />
            </div>
        </div>
    </div>
</template>
<script>
import Tab from "./tab";
import TabTable from "./table";
import AgentTable from "./AgentTable";
export default {
    components: {
        Tab,
        TabTable,
        AgentTable,
    },
    data() {
        return {
            active: 1,
        };
    },
    methods: {
        change(active) {
            this.active = active;
        },
    },
};
</script>
<style lang="less" scoped>
.part {
    width: 100%;
    padding: 0 48px;
    &-container {
        width: 100%;
        height: 1682px;
        background: linear-gradient(
            180deg,
            rgba(49, 150, 250, 0.25) 0%,
            rgba(49, 150, 250, 0) 100%
        );
        border: 1px solid #3196fa;
    }
    &-content {
        display: flex;
        padding: 118px 110px 68px 110px;
    }
}
</style>

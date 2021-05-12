<template>
    <div class="tab">
        <div class="tab-container">
            <div class="tab-content">
                <a
                    :class="activeClass(1)"
                    @click="handactive(1)"
                    href="javascript:;"
                    ><i class="iconfont icon-iconfontdailishenfen"></i
                    >代理企业基本信息</a
                >
                <a
                    :class="activeClass(2)"
                    @click="handactive(2)"
                    href="javascript:;"
                    ><i class="iconfont icon-kaohebiaozhun"></i
                    >代理季度考核结果</a
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 1,
        };
    },
    computed: {
        activeClass() {
            return function(active) {
                return this.active === active ? "active" : null;
            };
        },
    },
    methods: {
        handactive(active) {
            this.active = active;
            this.$emit("change", active);
        },
    },
};
</script>
<style lang="less" scoped>
.tab {
    flex-shrink: 0;
    &-content {
        a {
            display: block;
            width: 742px;
            height: 160px;
            background: rgba(49, 150, 250, 0.25);
            border-radius: 6px;
            margin-bottom: 48px;
            font-size: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            transition: all 0.3s;
            i {
                font-size: 56px;
                margin-right: 46px;
            }
            &:hover {
                background: rgba(49, 150, 250, 0.5);
                box-shadow: 0px 2px 16px 0px rgba(0, 16, 34, 0.3);
            }
        }
        a.active {
            background: rgba(49, 150, 250, 0.5);
            box-shadow: 0px 2px 16px 0px rgba(0, 16, 34, 0.3);
        }
    }
}
</style>

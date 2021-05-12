<template>
    <div class="table">
        <div class="table-container">
            <div class="table-content">
                <div class="table-data">
                    <ul>
                        <li v-for="item in 13" :key="item">
                            <a href="javascript:;">
                                <span class="name">萧招管(2020)1号</span>
                                <span class="time">发布时间：2021/01/15</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="page">
                    <Paging />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Paging from "../component/paging";
export default {
    components: {
        Paging,
    },
    data() {
        return {
            items: [],
        };
    },
};
</script>
<style lang="less" scoped>
.table {
    flex: 1;
    padding-left: 48px;
    &-content {
        .table-data {
            width: 100%;
            ul {
                li {
                    a {
                        display: flex;
                        align-items: center;
                        height: 96px;
                        color: #cccccc;
                        border-bottom: 1px solid rgba(238, 238, 238, 0.25);
                        .name {
                            flex: 1;
                            flex-shrink: 0;
                            font-size: 32px;
                        }
                        .time {
                            font-size: 32px;
                        }
                    }
                }
            }
        }
        .page {
            margin-top: 76px;
            text-align: right;
        }
    }
}
</style>

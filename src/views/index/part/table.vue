<template>
    <div class="table">
        <div class="table-container">
            <div class="table-content">
                <div class="search">
                    <div class="search-box">
                        <div class="title">主体名称：</div>
                        <div class="input"><input type="text" /></div>
                    </div>
                    <div class="search-box">
                        <div class="title">主体代码：</div>
                        <div class="input"><input type="text" /></div>
                    </div>
                    <div class="search-btn">
                        <button>查询</button>
                    </div>
                </div>
                <div class="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th class="index">序号</th>
                                <th width="30%">主体名称</th>
                                <th width="25%">报送时间</th>
                                <th>备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in 11" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td class="name" @click="handDetail">
                                    浙江森威建设管理有限公司
                                </td>
                                <td>2021年05月08日</td>
                                <td>有信息变更</td>
                            </tr>
                        </tbody>
                    </table>
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
    methods: {
        handDetail() {
            this.$router.push({ path: "/pdetail", query: {} });
        },
    },
};
</script>
<style lang="less" scoped>
.table {
    flex: 1;
    padding-left: 48px;
    &-content {
        .search {
            display: flex;
            justify-content: space-between;
            &-box {
                display: flex;
                align-items: center;
                &:first-of-type {
                    margin-left: 58px;
                }
                .title {
                    font-size: 40px;
                    font-weight: bold;
                    color: #ffffff;
                }
                .input {
                    input {
                        margin-left: 32px;
                        background: none;
                        outline: none;
                        width: 742px;
                        height: 112px;
                        border-radius: 6px;
                        border: 2px solid #3196fa;
                        color: #ffffff;
                        font-size: 36px;
                        text-indent: 20px;
                    }
                }
            }
            &-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                button {
                    width: 465px;
                    height: 112px;
                    background: #3196fa;
                    border: 1px solid #3196fa;
                    outline: none;
                    font-size: 36px;
                    color: #ffffff;
                }
            }
        }
        .table-data {
            width: 100%;
            margin-top: 72px;
            table {
                width: 100%;
                border-collapse: collapse;
                th,
                td {
                    height: 96px;
                    color: #ffffff;
                    text-align: center;
                    font-size: 32px;
                }
                tr th,
                tr td {
                    border: 1px solid #0094ff;
                }

                th {
                    min-width: 200px;
                }
                th.index {
                    width: 180px;
                }
                .name{
                    cursor: pointer;
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

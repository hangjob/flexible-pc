<template>
    <div class="pdetail">
        <Header />
        <div class="pdetail-container">
            <div class="pdetail-content">
                <div class="slogan-title">
                    <div class="line line-left"></div>
                    <div class="title">企业信息</div>
                    <div class="line line-right"></div>
                </div>
                <div class="info">
                    <div
                        class="item"
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <InfoText :title="item.title" :des="item.des" />
                    </div>
                </div>
                <div class="slogan-title">
                    <div class="line line-left"></div>
                    <div class="title">企业业绩信息</div>
                    <div class="line line-right"></div>
                </div>
                <div class="info">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item, index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>1</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item, index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>2</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item, index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>3</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <div class="slogan-title">
                    <div class="line line-left"></div>
                    <div class="title">代理人员信息</div>
                    <div class="line line-right"></div>
                </div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th class="index">序号</th>
                                <th>代理人员姓名</th>
                                <th>学历</th>
                                <th>专业</th>
                                <th>职称</th>
                                <th>执业(注册)资格</th>
                                <th>是否通过专职人员考试</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in 11" :key="item">
                                <td>{{ index + 1 }}</td>
                                <td>浙江森威建设管理有限公司</td>
                                <td>浙江森威建设管理有限公司</td>
                                <td>浙江森威建设管理有限公司</td>
                                <td>2021年05月08日</td>
                                <td>2021年05月08日</td>
                                <td>有信息变更</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="slogan-title">
                    <div class="line line-left"></div>
                    <div class="title">企业信息</div>
                    <div class="line line-right"></div>
                </div>
                <div class="download">
                    <div class="download-list">
                        <div class="download-list-box">
                            <div class="labe">营业执照：</div>
                            <div class="labe-info">
                                <div class="name">营业执照.pdf</div>
                                <div class="btns">
                                    <button>查看</button>
                                    <button>下载</button>
                                </div>
                            </div>
                        </div>
                        <div class="download-list-box">
                            <div class="labe">企业资质证书：</div>
                            <div class="labe-info">
                                <div class="name">
                                    浙江浙坤工程管理有限公司专职人员登记表.pdf
                                </div>
                                <div class="btns">
                                    <button>查看</button>
                                    <button>下载</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./component/header";
import InfoText from "./component/infoText";
export default {
    components: {
        Header,
        InfoText,
    },
    data() {
        return {
            items: [
                { title: "企业名称", des: "浙江浙坤工程管理有限公司浙江浙坤工程管理有限公司" },
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "是否有分支机构", des: "否" },
                { title: "是否有分支机构", des: "否" },
                { title: "法定代表人", des: "马成龙" },
                { title: "法定代表人", des: "马成龙" },
                { title: "企业联系人", des: "0571****2991" },
                { title: "法定代表人", des: "马成龙" },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
            ],
            items2: [
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "是否有分支机构", des: "否" },
                { title: "是否有分支机构", des: "否" },
                { title: "法定代表人", des: "马成龙" },
            ],
        };
    },
};
</script>
<style lang="less" scoped>
.pdetail {
    &-container {
        padding: 48px;
    }
    &-content {
        min-height: 4315px;
        background: linear-gradient(
            180deg,
            rgba(49, 150, 250, 0.25) 0%,
            rgba(49, 150, 250, 0) 100%
        );
        border: 1px solid #3196fa;
        .slogan-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 118px;
            margin-bottom: 48px;
            .line {
                width: 245px;
                height: 1px;
                background-color: rgba(238, 238, 238, 0.25);
            }
            .title {
                font-weight: bold;
                color: #ffffff;
                font-size: 44px;
                padding-left: 68px;
                padding-right: 68px;
            }
        }

        .info {
            display: flex;
            padding-left: 110px;
            padding-right: 110px;
            flex-wrap: wrap;
            .info-border {
                background: rgba(49, 150, 250, 0.1);
                border: 1px solid #3196fa;
                display: flex;
                flex-wrap: wrap;
                padding: 36px 0;
                width: 100%;
                margin-bottom: 48px;
                position: relative;
                .tag {
                    position: absolute;
                    top: 48px;
                    left: 48px;
                    i {
                        color: #facc14;
                        font-size: 80px;
                    }
                    span{
                        position: absolute;
                        top: 18px;
                        left: 26px;
                        font-size: 36px;
                        z-index: 10;
                        color: #fff;
                    }
                }
            }
            .item {
                width: 50%;
                flex-shrink: 0;
                display: flex;
                height: 96px;
            }
        }

        .table {
            padding-left: 110px;
            padding-right: 110px;
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
            }
        }
        .download {
            padding-left: 110px;
            padding-right: 110px;
            &-list {
                color: #fff;
                &-box {
                    display: flex;
                    align-items: center;
                    margin-bottom: 64px;
                    .labe {
                        width: 300px;
                        text-align: right;
                        font-size: 32px;
                    }
                    .labe-info {
                        display: flex;
                        flex: 1;
                        flex-shrink: 0;
                        align-items: center;
                        border-bottom: 1px solid rgba(238, 238, 238, 0.25);
                        height: 96px;
                        position: relative;
                        .name {
                            flex: 1;
                            flex-shrink: 0;
                            font-size: 32px;
                        }
                        .btns {
                            position: absolute;
                            right: 0;
                            bottom: 16px;
                            button {
                                font-size: 32px;
                                outline: none;
                                color: #ffffff;
                                width: 200px;
                                height: 96px;
                                background: #3196fa;
                                border-radius: 6px;
                                border: 1px solid #979797;
                                margin-right: 48px;
                                &:last-of-type {
                                    margin-right: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

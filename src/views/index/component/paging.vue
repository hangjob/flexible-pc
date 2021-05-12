<template>
    <ul class="mo-paging">
        <!-- prev -->
        <li
            :class="[
                'paging-item',
                'paging-item--prev',
                { 'paging-item--disabled': index === 1 },
            ]"
            @click="prev"
        >
            首页
        </li>

        <!-- first -->
        <li
            :class="[
                'paging-item',
                'paging-item--first',
                { 'paging-item--disabled': index === 1 },
            ]"
            @click="first"
        >
            上一页
        </li>

        <li :class="['paging-item', 'paging-item--more']" v-if="showPrevMore">
            ...
        </li>

        <li
            :class="[
                'paging-item',
                { 'paging-item--current': index === pager },
            ]"
            v-for="pager in pagers"
            :key="pager"
            @click="go(pager)"
        >
            {{ pager }}
        </li>

        <li :class="['paging-item', 'paging-item--more']" v-if="showNextMore">
            ...
        </li>

        <!-- last -->
        <li
            :class="[
                'paging-item',
                'paging-item--last',
                { 'paging-item--disabled': index === pages },
            ]"
            @click="next"
        >
            下页
        </li>

        <!-- next -->
        <li
            :class="[
                'paging-item',
                'paging-item--next',
                { 'paging-item--disabled': index === pages },
            ]"
            @click="last"
        >
            尾页
        </li>
        <!-- <li :class="['paging-item']">
            <input type="text" class="pn" v-model="skrnumber" />
            <span class="btn-primary" @click="skip">跳转</span>
        </li> -->
    </ul>
</template>

<script>
export default {
    //通过props来接受从父组件传递过来的值
    props: {
        //页面中的可见页码，其他的以...替代, 必须是奇数
        perPages: {
            type: Number,
            default: 5,
        },
        //当前页码
        pageIndex: {
            type: Number,
            default: 1,
        },
        //每页显示条数
        pageSize: {
            type: Number,
            default: 10,
        },
        //总记录数
        total: {
            type: Number,
            default: 1000,
        },
    },
    methods: {
        prev() {
            if (this.index > 1) {
                this.go(1);
            }
        },
        next() {
            if (this.index < this.pages) {
                this.go(this.index + 1);
            }
        },
        first() {
            if (this.index !== 1) {
                this.go(this.index - 1);
            }
        },
        last() {
            if (this.index != this.pages) {
                this.go(this.pages);
            }
        },
        go(page) {
            if (this.index !== page) {
                this.index = page;
                //父组件通过change方法来接受当前的页码
                this.$emit("change", this.index);
            }
        },
        skip() {
            let num = parseInt(this.skrnumber);
            if (this.index !== num && num <= this.pages) {
                this.go(num);
            }
        },
    },
    computed: {
        //计算总页码
        pages() {
            return Math.ceil(this.size / this.limit);
        },
        //计算页码，当count等变化时自动计算
        pagers() {
            const array = [];
            const perPages = this.perPages;
            const pageCount = this.pages;
            let current = this.index;
            const _offset = (perPages - 1) / 2;

            const offset = {
                start: current - _offset,
                end: current + _offset,
            };
            //-1, 3
            if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start);
                offset.start = 1;
            }
            if (offset.end > pageCount) {
                offset.start = offset.start - (offset.end - pageCount);
                offset.end = pageCount;
            }
            if (offset.start < 1) {
                offset.start = 1;
            }
            // this.showPrevMore = offset.start > 1;
            // this.showNextMore = offset.end < pageCount;
            for (let i = offset.start; i <= offset.end; i++) {
                array.push(i);
            }
            return array;
        },
    },
    data() {
        return {
            index: this.pageIndex, //当前页码
            limit: this.pageSize, //每页显示条数
            size: this.total || 1, //总记录数
            showPrevMore: false,
            showNextMore: false,
            skrnumber: 1,
        };
    },
    watch: {
        pageIndex(val) {
            this.index = val || 1;
        },
        pageSize(val) {
            this.limit = val || 10;
        },
        total(val) {
            this.size = val || 1;
        },
    },
};
</script>
<style scoped>
.mo-paging .paging-item {
    cursor: pointer;
    font-size: 28px;
    line-height: 60px;
    margin-left: 8px;
    padding: 0 12px;
    color: #3e4959;
    border-radius: 3px;
    outline: none;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
    position: relative;
    min-width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0);
    border-radius: 6px;
    border: 2px solid rgba(238, 238, 238, 0.25);
}
.mo-paging .paging-item:first-child {
    margin-left: 0;
}
.mo-paging .paging-item:hover {
    color: #3196fa;
}
.mo-paging .paging-item.paging-item--disabled,
.mo-paging .paging-item.paging-item--more {
    color: #505050;
    background: rgba(255, 255, 255, 0);
}
.mo-paging .paging-item.paging-item--disabled {
    cursor: not-allowed;
    opacity: 0.75;
    background: rgba(255, 255, 255, 0) !important;
}
.mo-paging .paging-item.paging-item--more,
.mo-paging .paging-item.paging-item--current {
    cursor: default;
}
.mo-paging .paging-item.paging-item--current {
    color: #3196fa;
    position: relative;
    z-index: 1;
}
.mo-paging .paging-item:last-child {
    padding: 0;
    padding: 0 3px;
    padding-right: 0;
}
.mo-paging .paging-item:last-child:hover {
    background-color: #fff;
    color: #505050;
}
.mo-paging input.pn {
    margin-left: 30px;
    width: 37px;
    font-size: 12px;
    border-right: none;
    vertical-align: middle;
    border-radius: 3px 0 0 3px;
    border: 1px solid #ddd;
    padding: 0 6px;
    color: #3e4959;
    background-color: #fff;
    line-height: 30px;
    border-radius: 3px;
    font-size: 12px;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    margin: 0em;
    font: 400 13.3333px Arial;
    -webkit-writing-mode: horizontal-tb !important;
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    outline-color: transparent;
    box-shadow: none;
    height: 30px;
}
.mo-paging .paging-item:last-child .btn-primary {
    background-color: #5897ff;
    border-color: #5897ff;
    color: #fff;
    border-radius: 0 3px 3px 0;
    padding: 0 5px;
    display: inline-block;
    border: 1px solid #5897ff;
    color: #fff;
    height: 32px;
    line-height: 30px;
    padding: 0 16px;
    font-size: 14px;
    box-sizing: border-box;
    border-left: none;
    border-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    vertical-align: middle;
    display: inline-block;
    outline: none;
    text-decoration: none;
}
</style>

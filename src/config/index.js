const isProduction = process.env.NODE_ENV === 'production';

const data = {
    // 搜索输入框的配置
    search: {
        str: {
            maxlen: 50,
        },
        user: {
            maxlen: 100
        }
    },
}

const dev = {

}

const prd = {

}


const configTbale = isProduction ? Object.assign(data, prd) : Object.assign(data, dev);


export default configTbale;
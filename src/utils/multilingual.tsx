const fs = require('fs'); // 载入fs模块
const language = () => {
    fs.readFile('./language/en_US.json', function(err: any, data: any) {
        // 读取文件失败/错误
        if (err) {
            throw err;
        }
        // 读取文件成功
        console.log('data读取成功', data);
    });
}
export default language;
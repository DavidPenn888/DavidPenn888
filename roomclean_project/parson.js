if (location.pathname == '/2023/04/27/CleanRoomProject/') {
    // 仅设定的页面需要执行的代码

    // 日期字符串
    const startDateString = '2023-04-25';

    // 将日期字符串转换为日期对象
    const startDate = new Date(startDateString);

    // 获取今天的日期对象
    const today = new Date();

    // 计算时间差，单位为毫秒
    const timeDiff = today.getTime() - startDate.getTime();

    // 将毫秒数转换为天数
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // 计算天数除以6的余数
    const remainder = dayDiff % 6;

    var result = "出错了，请联系网站管理员";

    // 根据余数输出不同的结果
    switch (remainder) {
    case 0:
        result = "段洋,今天打扫卫生";
        break;
    case 1:
        result = "曾川航,今天打扫卫生";
        break;
    case 2:
        result = "王瑞,今天打扫卫生";
        break;
    case 3:
        result = "刘啸天,今天打扫卫生";
        break;
    case 4:
        result = "邓云芃,今天打扫卫生";
        break;
    case 5:
        result = "彭海翀,今天打扫卫生";
        break;
    default:
        result = "出错了，请联系网站管理员";
    }
    alert(result);
 }


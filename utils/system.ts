const systemInfo = function () {
  let systemInfomations = uni.getSystemInfoSync(); // 设备系统信息
  let scaleFactor = 750 / systemInfomations.windowWidth; // 机型适配比例系数
  let windowHeight = systemInfomations.windowHeight * scaleFactor; // 当前机型-屏幕高度
  let windowWidth = systemInfomations.windowWidth * scaleFactor; // 当前机型-屏幕宽度
  let statusBarHeight = systemInfomations.statusBarHeight * scaleFactor; // 状态栏高度
  let platform = systemInfomations.platform; // 运行平台
  const uniPlatform = systemInfomations.uniPlatform; // 运行环境
  return {
    scaleFactor,
    windowHeight,
    windowWidth,
    statusBarHeight,
    platform,
    uniPlatform
  };
};


export { systemInfo };


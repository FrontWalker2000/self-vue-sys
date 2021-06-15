export function openAPP(url) {
  let u = navigator.userAgent,
    encodeUri,
    isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    // 配置应用宝 appLink 跳转app指定页面功能
    let baseAndroid =
      "http://a.app.qq.com/o/simple.jsp?pkgname=com.yijiuyiyiedu.xuetang";
    encodeUri = url && encodeURIComponent(url);
    location.href = `${baseAndroid}&android_schema=${encodeUri}`;
  } else if (isiOS) {
    location.href = "https://apps.apple.com/cn/app/id1464489055";
  }
}

/**
 * Created by Lzhang on 2018/10/24.
 */
// jsonp请求
export function jsonp(options) {
    options = options || {};
    if (!options.url) {
        throw new Error("参数不合法");
    }

    options.callback = options.callback || "callback";
    options.callbackName = options.callbackName || ("jsonp_" + Math.random()).replace(".", "");
    options.data = options.data || {};
    options.data[options.callback] = options.callbackName;

    let oHead = document.getElementsByTagName("head")[0];
    let oScript = document.createElement("script");
    oHead.appendChild(oScript);

    // 创建jsonp回调函数
    window[options.callbackName] = function (json) {
        clearTimeout(timer);
        oHead.removeChild(oScript);
        window[options.callbackName] = null;
        options.success && options.success(json);
    };

    // 超时处理
    let timer;
    if (options.timeout) {
        timer = setTimeout(function () {
            oHead.removeChild(oScript);
            window[options.callbackName] = null;
            options.fail && options.fail({message: "超时"});
        }, options.timeout);
    }

    // 发送请求
    oScript.src = options.url + "?" + formatParams(options.data);

    function formatParams(data) {
        let arr = [];
        for (let name in data) {
            if (data.hasOwnProperty(name)) {
                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
        }
        return arr.join("&");
    }
}

export function formatDate(date, format) {
    const newDate = new Date(date);
    console.log(newDate);
    let o = {
        "M+": newDate.getMonth() + 1, // month
        "d+": newDate.getDate(),    // day
        "h+": newDate.getHours(),   // hour
        "m+": newDate.getMinutes(), // minute
        "s+": newDate.getSeconds(), // second
        "q+": Math.floor((newDate.getMonth() + 3) / 3),  // quarter
        "S": newDate.getMilliseconds() // millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1,
            (String(newDate.getFullYear())).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr((String(o[k])).length));
        }
    }
    return format;
}

export function ajax(option) {
    const {
        baseUrl = host || "", url, dataType = "json", method = "GET", headers, success, error, resolve = function () {

    }, reject = function () {

    }
    } = option;
    if (!url) {
        throw new Error("Need for url");
    }
    if (requestUrlObj[url]) return;
    requestUrlObj[url] = url;
    let data = option.data || {};
    let requestUrl = `${baseUrl}${url}`;
    if (!!option.data && typeof option.data !== "string") {
        data = Object.keys(option.data)
            .map(key => `${key}=${option.data[key]}`)
            .join("&");
    } else {
        data = option.data || "";
    }
    if (method.toUpperCase() === "GET") {
        requestUrl = data ? `${baseUrl}${url}?${data}` : requestUrl;
    }
    const request = new XMLHttpRequest();
    request.open(method, requestUrl, true);
    if (method.toUpperCase() === "POST") {
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (headers) {
        Object.keys(headers).forEach((item) => {
            request.setRequestHeader(item, headers[item]);
        });

    }
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let result = request.responseText;
            if (dataType.toUpperCase() === "JSON") {
                result = JSON.parse(request.responseText);
            }
            if (result.code === -1306 || result.code === 403) {
                //活动已下线
                document.getElementsByTagName("body")[0].removeChild(document.getElementById('app'));
                toast({ msg: result.msg });
            }

            if (typeof success === "function") {
                success(result);
            }
            resolve(result);
        } else if (error && typeof error === "function") {
            error();
            reject();
        }
        deleteRequestUrl(url);
    };
    request.onerror = () => {
        deleteRequestUrl(url);
        reject();
        error && error();
    };
    if (method.toUpperCase() === "GET") {
        request.send(null);
    } else {
        request.send(data);
    }
}

export function fetch(option) {
    if (Promise) {
        return new Promise(function (resolve, reject) {
            option.resolve = resolve;
            option.reject = reject;
            ajax(option);
        });
    } else {
        throw new Error("不支持Promise");
    }
}

export function loop() {
    
}


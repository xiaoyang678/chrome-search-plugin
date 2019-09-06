// 百度
chrome.contextMenus.create({
  title: "百度搜索：%s", // %s表示选中的文字
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url:
        "https://www.baidu.com/s?ie=utf-8&wd=" + encodeURI(params.selectionText)
    });
  }
});

// 优酷
chrome.contextMenus.create({
  title: "优酷搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url:
        "https://so.youku.com/search_video/q_" + encodeURI(params.selectionText)
    });
  }
});

// blibli
chrome.contextMenus.create({
  title: "BliBli搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url:
        "https://search.bilibili.com/all?keyword=" +
        encodeURI(params.selectionText) +
        "&from_source=banner_search"
    });
  }
});

// 微博
chrome.contextMenus.create({
  title: "WeiBo搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url: "https://s.weibo.com/weibo/" + encodeURI(params.selectionText)
    });
  }
});

//github
chrome.contextMenus.create({
  title: "github搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url: "https://github.com/search?q=" + encodeURI(params.selectionText)
    });
  }
});

// stackoverflow
chrome.contextMenus.create({
  title: "Stack Overflow搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url:
        "https://stackoverflow.com/search?q=" + encodeURI(params.selectionText)
    });
  }
});

// google
chrome.contextMenus.create({
  title: "google搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url:
        "https://www.google.com.hk/search?q=" + encodeURI(params.selectionText)
    });
  }
});

// v2ex
chrome.contextMenus.create({
  title: "v2ex搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url: "https://www.sov2ex.com/?q=" + encodeURI(params.selectionText)
    });
  }
});

// 豆瓣
chrome.contextMenus.create({
  title: "豆瓣搜索：%s", //
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({
      url: "https://www.douban.com/search?q=" + encodeURI(params.selectionText)
    });
  }
});


    // 练习hyajax -> axios
    function hyajax({
      url,
      method = "get",
      data = {},
      headers = {}, // token
      success,
      failure
    } = {}) {
      // 1.创建对象
      const xhr = new XMLHttpRequest()

      // 2.监听数据
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          success && success(xhr.response)
        } else {
          failure && failure({ status: xhr.status, message: xhr.statusText })
        }
      }

      // 3.设置类型
      xhr.responseType = "json"

      // 4.open方法
      if (method.toUpperCase() === "GET") {
        const queryStrings = []
        for (const key in data) {
          queryStrings.push(`${key}=${data[key]}`)
        }
        url = url + "?" + queryStrings.join("&")
        xhr.open(method, url)
        xhr.send()
      } else {
        xhr.open(method, url)
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(JSON.stringify(data))
      }

      return xhr
    }

    // 调用者
    hyajax({
      url: "http://123.207.32.32:1888/02_param/get",
      method: "GET",
      data: {
        name: "why",
        age: 18
      },
      success: function(res) {
        console.log("res:", res)
      },
      failure: function(err) {
        // alert(err.message)
      }
    })

    // hyajax({
    //   url: "http://123.207.32.32:1888/02_param/postjson",
    //   method: "post",
    //   data: {
    //     name: "jsondata",
    //     age: 22
    //   },
    //   success: function(res) {
    //     console.log("res:", res)
    //   },
    //   failure: function(err) {
    //     // alert(err.message)
    //   }
    // })

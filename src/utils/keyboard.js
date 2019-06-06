export default {
  // 判断设备类型
  judgeDeviceType() {
    var ua = window.navigator.userAgent.toLocaleLowerCase();
    var isIOS = /iphone|ipad|ipod/.test(ua);
    var isAndroid = /android/.test(ua);

    return {
      isIOS: isIOS,
      isAndroid: isAndroid
    }
  },
  // 监听输入框的软键盘弹起和收起事件
  listenKeybord($input) {
    if (this.judgeDeviceType().isIOS) {
      // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
      $input.addEventListener('focus', function () {
        console.log('IOS 键盘弹起啦！');
        // IOS 键盘弹起后操作

        // var inputTextBox = document.getElementById('input-text-box');
        alert('键盘弹起')
        setInterval(function () {
          $input.scrollIntoView(false);
        }, 200)
      }, false)

      // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，
      $input.addEventListener('blur', () => {
        console.log('IOS 键盘收起啦！');
        alert('键盘收起')
        // IOS 键盘收起后操作
      })

    }

    // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
    if (this.judgeDeviceType().isAndroid) {
      var originHeight = document.documentElement.clientHeight || document.body.clientHeight;

      window.addEventListener('resize', function () {
        var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (originHeight < resizeHeight) {
          console.log('Android 键盘收起啦！');
          // Android 键盘收起后操作
        } else {
          console.log('Android 键盘弹起啦！');
          // Android 键盘弹起后操作
          // ...
          // Android 键盘弹起后操作
          this.activeElementScrollIntoView($input, 1000);
          // ...
        }

        originHeight = resizeHeight;
      }, false)
    }
  },
  // 获取到焦点元素滚动到可视区
  activeElementScrollIntoView(activeElement, delay) {
    var editable = activeElement.getAttribute('contenteditable')

    // 输入框、textarea或富文本获取焦点后没有将该元素滚动到可视区
    if (activeElement.tagName == 'INPUT' || activeElement.tagName == 'TEXTAREA' || editable === '' || editable) {
      setTimeout(function () {
        activeElement.scrollIntoView();
      }, delay)
    }
  }
}




//   var $inputs = document.querySelectorAll('.input');

//   for (var i = 0; i < $inputs.length; i++) {
//     listenKeybord($inputs[i]);
//   }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/reset.css";
import locale from "element-ui/lib/locale/lang/zh-CN";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

function demo(a) {
  console.log("a", a);
  return function(target, key, description) {
    // target.prototype["log"] = function(value) {
    //   console.log(value);
    // };
    console.log(target, key, description);
  };
}

// @demo("aaabbbbb")
class TestClass {
  @demo("aaabbbbb")
  _id;

  @demo("cccccc")
  test(p) {
    this.log(p);
  }
}

const foo = new TestClass();
// foo.test("ccccccalfkjalskjfaslkfjalks;fj");

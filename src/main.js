import ComponentTest from "./components/ComponentTest/index";

const components = [ComponentTest];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default { ComponentTest, install };
// export default { version, install };

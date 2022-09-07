import { mount } from "@vue/test-utils";
import Hello3 from "./hello-3.vue";

fdescribe("Hello3", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Hello3);
  });

  //dom expect view
  it("should counter when click btn", async () => {
    await wrapper.find("#click-btn").trigger("click");

    expect(wrapper.text()).toContain("hello 1");
  });

  //component properties expect
  it("should counter when doSomething", () => {
    wrapper.vm.doSomething();

    expect(wrapper.vm.counter).toBe(1);
  });
  
});

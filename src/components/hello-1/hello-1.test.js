import { mount } from "@vue/test-utils";
import Hello1 from "./hello-1.vue";

describe("Hello1", () => {
  let wrapper = mount(Hello1);

  beforeEach(() => {
    wrapper.setData({ count: 0 });
  });

  //mock with jest
    //   it("click does something", async () => {
    //     const mockMethod = jest.spyOn(wrapper.vm, "doSomething");
    //     await wrapper.find("#click-btn").trigger("click");
    //     expect(mockMethod).toHaveBeenCalled();
    //   });

  //dom expect view
  it("should counter when doSomething", async () => {
    await wrapper.find("#click-btn").trigger("click");

    expect(wrapper.text()).toContain("hello 1");
  });

  //component properties expect
  it("should counter when doSomething", () => {
    wrapper.vm.doSomething();

    expect(wrapper.vm.count).toBe(1);
  });
  
});

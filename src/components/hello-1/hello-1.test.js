import { mount } from '@vue/test-utils';
import Hello1 from "./hello-1.vue";


describe('Hello1', () => {
    //dom expect view
    it('should counter when doSomething', async () => {
        const wrapper = mount(Hello1);
        wrapper.setData({ count: 0 });

        await wrapper.find('#click-btn').trigger('click');

        expect(wrapper.text()).toContain('hello 1');
    });

    //properties expect
    it('should counter when doSomething', async () => {
        const wrapper = mount(Hello1);
        wrapper.setData({ count: 0 });

        wrapper.vm.doSomething();

        expect(wrapper.vm.count).toBe(1);
    });
});
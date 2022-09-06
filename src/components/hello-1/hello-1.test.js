import { mount } from '@vue/test-utils';
import Hello1 from "./hello-1.vue";


describe('Hello1', () => {
    it('should display text hello1', () => {
        const wrapper = mount(Hello1);
        expect(wrapper.text()).toContain('hello 1');
    });

    it('should button click with doSomething', async() => {
        const mockMethod = jest.spyOn(Hello1.methods, 'doSomething');
        await mount(Hello1).find('#click-btn').trigger('click');
        expect(mockMethod).toHaveBeenCalled();
    });
});
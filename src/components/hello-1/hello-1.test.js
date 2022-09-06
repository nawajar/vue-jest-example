import { mount } from '@vue/test-utils';
import Hello1 from "./hello-1.vue";


describe('Hello1', () => {
    it('should display text hello1', () => {
        const wrapper = mount(ParentComponent);
        expect(wrapper.text()).toContain('hello 1');
    });
});
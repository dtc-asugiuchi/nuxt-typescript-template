import Inspire from '@/pages/inspire.vue';
import { mount } from '@vue/test-utils';

describe('InspirePage', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Inspire);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
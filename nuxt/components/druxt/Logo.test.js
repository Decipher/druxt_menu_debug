/* global describe, expect, test */

import { mount } from '@vue/test-utils'
import Logo from './Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {})
    expect(wrapper.vm).toBeTruthy()

    // Expect HTML to match snapshot.
    expect(wrapper.html()).toMatchSnapshot()
  })
})

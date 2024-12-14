import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import IconButton from '../IconButton.vue'

describe('IconButton', () => {
  it('renders properly', () => {
    const wrapper = mount(IconButton, { props: { color: 'red', label: 'test label' } })
    expect(wrapper.text()).toContain('test label')
  })
})

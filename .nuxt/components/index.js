export { default as Modal } from '../../components/Modal.vue'
export { default as NavLink } from '../../components/NavLink.vue'
export { default as AuthApplicationLogo } from '../../components/auth/application-logo.vue'
export { default as AuthButton } from '../../components/auth/button.vue'
export { default as AuthCheckbox } from '../../components/auth/checkbox.vue'
export { default as AuthDropdownButton } from '../../components/auth/dropdown-button.vue'
export { default as AuthDropdown } from '../../components/auth/dropdown.vue'
export { default as AuthInput } from '../../components/auth/input.vue'
export { default as AuthLabel } from '../../components/auth/label.vue'
export { default as AuthNavLink } from '../../components/auth/nav-link.vue'
export { default as AuthResponsiveNavLink } from '../../components/auth/responsive-nav-link.vue'
export { default as AuthToggle } from '../../components/auth/toggle.vue'
export { default as AuthValidationErrors } from '../../components/auth/validation-errors.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

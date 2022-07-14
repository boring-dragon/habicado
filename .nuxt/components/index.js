export { default as BaseModal } from '../../components/BaseModal.vue'
export { default as ConfirmationModal } from '../../components/ConfirmationModal.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as NavLink } from '../../components/NavLink.vue'
export { default as UiApplicationLogo } from '../../components/ui/application-logo.vue'
export { default as UiDropdownButton } from '../../components/ui/dropdown-button.vue'
export { default as UiDropdown } from '../../components/ui/dropdown.vue'
export { default as UiNavLink } from '../../components/ui/nav-link.vue'
export { default as UiResponsiveNavLink } from '../../components/ui/responsive-nav-link.vue'
export { default as FormButton } from '../../components/form/button.vue'
export { default as FormCheckbox } from '../../components/form/checkbox.vue'
export { default as FormInput } from '../../components/form/input.vue'
export { default as FormLabel } from '../../components/form/label.vue'
export { default as FormSelect } from '../../components/form/select.vue'
export { default as FormTextarea } from '../../components/form/textarea.vue'
export { default as FormToggle } from '../../components/form/toggle.vue'
export { default as FormValidationErrors } from '../../components/form/validation-errors.vue'

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

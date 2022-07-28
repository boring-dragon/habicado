export const BaseModal = () => import('../../components/BaseModal.vue' /* webpackChunkName: "components/base-modal" */).then(c => wrapFunctional(c.default || c))
export const DialogModal = () => import('../../components/DialogModal.vue' /* webpackChunkName: "components/dialog-modal" */).then(c => wrapFunctional(c.default || c))
export const NavLink = () => import('../../components/NavLink.vue' /* webpackChunkName: "components/nav-link" */).then(c => wrapFunctional(c.default || c))
export const FormButton = () => import('../../components/form/button.vue' /* webpackChunkName: "components/form-button" */).then(c => wrapFunctional(c.default || c))
export const FormCheckbox = () => import('../../components/form/checkbox.vue' /* webpackChunkName: "components/form-checkbox" */).then(c => wrapFunctional(c.default || c))
export const FormDarkModeToggle = () => import('../../components/form/dark-mode-toggle.vue' /* webpackChunkName: "components/form-dark-mode-toggle" */).then(c => wrapFunctional(c.default || c))
export const FormDateInput = () => import('../../components/form/date-input.vue' /* webpackChunkName: "components/form-date-input" */).then(c => wrapFunctional(c.default || c))
export const FormInput = () => import('../../components/form/form-input.vue' /* webpackChunkName: "components/form-input" */).then(c => wrapFunctional(c.default || c))
export const FormLabel = () => import('../../components/form/label.vue' /* webpackChunkName: "components/form-label" */).then(c => wrapFunctional(c.default || c))
export const FormSelect = () => import('../../components/form/select.vue' /* webpackChunkName: "components/form-select" */).then(c => wrapFunctional(c.default || c))
export const FormTextarea = () => import('../../components/form/textarea.vue' /* webpackChunkName: "components/form-textarea" */).then(c => wrapFunctional(c.default || c))
export const FormToggle = () => import('../../components/form/toggle.vue' /* webpackChunkName: "components/form-toggle" */).then(c => wrapFunctional(c.default || c))
export const FormValidationErrors = () => import('../../components/form/validation-errors.vue' /* webpackChunkName: "components/form-validation-errors" */).then(c => wrapFunctional(c.default || c))
export const UiApplicationLogo = () => import('../../components/ui/application-logo.vue' /* webpackChunkName: "components/ui-application-logo" */).then(c => wrapFunctional(c.default || c))
export const UiBadge = () => import('../../components/ui/badge.vue' /* webpackChunkName: "components/ui-badge" */).then(c => wrapFunctional(c.default || c))
export const UiCard = () => import('../../components/ui/card.vue' /* webpackChunkName: "components/ui-card" */).then(c => wrapFunctional(c.default || c))
export const UiDropdownButton = () => import('../../components/ui/dropdown-button.vue' /* webpackChunkName: "components/ui-dropdown-button" */).then(c => wrapFunctional(c.default || c))
export const UiDropdown = () => import('../../components/ui/dropdown.vue' /* webpackChunkName: "components/ui-dropdown" */).then(c => wrapFunctional(c.default || c))
export const UiFormSectionTitle = () => import('../../components/ui/form-section-title.vue' /* webpackChunkName: "components/ui-form-section-title" */).then(c => wrapFunctional(c.default || c))
export const UiFormSection = () => import('../../components/ui/form-section.vue' /* webpackChunkName: "components/ui-form-section" */).then(c => wrapFunctional(c.default || c))
export const UiNavLink = () => import('../../components/ui/nav-link.vue' /* webpackChunkName: "components/ui-nav-link" */).then(c => wrapFunctional(c.default || c))
export const UiNavigation = () => import('../../components/ui/navigation.vue' /* webpackChunkName: "components/ui-navigation" */).then(c => wrapFunctional(c.default || c))
export const UiResponsiveNavLink = () => import('../../components/ui/responsive-nav-link.vue' /* webpackChunkName: "components/ui-responsive-nav-link" */).then(c => wrapFunctional(c.default || c))
export const UiSection = () => import('../../components/ui/section.vue' /* webpackChunkName: "components/ui-section" */).then(c => wrapFunctional(c.default || c))

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

<script>
import FormInput from '@/components/form/form-input.vue';
import FormTextArea from '@/components/form/textarea.vue';
import FormCheckBox from "@/components/form/checkbox.vue";
import FormToggle from "@/components/form/toggle.vue";
import FormSelect from "@/components/form/select.vue";
import FormDateInput from "@/components/form/date-input.vue";
import DarkModeToggle from "@/components/form/dark-mode-toggle.vue";

export default {
    layout: 'guest',

    components: {
        FormInput,
        FormTextArea,
        FormCheckBox,
        FormToggle,
        FormSelect,
        FormDateInput,
        DarkModeToggle
    },

    data() {
        return {
            form_input: '',
            form_textarea: '',
            form_checkbox: false,
            form_toggle: false,
            form_select: '',
            form_date: '',
            options: [
                {
                    label: 'Option 1',
                    value: 'option-1'
                },
                {
                    label: 'Option 2',
                    value: 'option-2'
                },
                {
                    label: 'Option 3',
                    value: 'option-3'
                }
            ]
        }
    }
};
</script>
<template>
<div>
    <h3 class="text-center font-bold text-3xl">Testing UI Components</h3>

    <div class="mt-8 space-y-3">
        <h6 class="text-md my-6">Form Components</h6>

        <div class="space-y-3">
             <p class="text-sm text-gray-600">Dark Mode toggle</p>
             <DarkModeToggle></DarkModeToggle>
        </div>
        <div class="space-y-3">
             <p class="text-sm text-gray-600">Inputs</p>
             <FormInput v-model="form_input" placeholder="Form Placeholder.."></FormInput>
        </div>

         <div class="space-y-3">
             <p class="text-sm text-gray-600">Textarea</p>
             <FormTextArea v-model="form_textarea" placeholder="Form Placeholder.." label="Text Area label"></FormTextArea>
        </div>

         <div class="space-y-3">
             <p class="text-sm text-gray-600">Checkbox</p>
             <FormCheckBox v-model="form_checkbox" label="Check box label"></FormCheckBox>
        </div>

        <div class="space-y-3">
             <p class="text-sm text-gray-600">Toggle</p>
             <FormToggle v-model="form_toggle" label="Toggle label"></FormToggle>
        </div>

         <div class="space-y-3">
             <p class="text-sm text-gray-600">Select</p>
             <FormSelect v-model="form_select" :options="options" label="Select label"></FormSelect>
        </div>

           <div class="space-y-3">
             <p class="text-sm text-gray-600">Date input</p>
             <FormDateInput v-model="form_select"></FormDateInput>
        </div>
       

    </div>
</div>
</template>
import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        careerForm: {
            formDetails: {
                name: { value: '', required: true },
                phone: { value: '', required: false },
            },
            loading: false,
            error: false,
            success: false,
        },
    },
    getters: {
        getField,
    },
    mutations: {
        updateField,
        startLoading(state) {
            state.careerForm.loading = true;
        },
        stopLoading(state) {
            state.careerForm.loading = false;
        },
        setSuccess(state) {
            state.careerForm.success = true;
        },
        setError(state, payload) {
            state.careerForm.error = payload;
        },
    },
    actions: {
        submit({ commit, state }) {
            commit('setError', false);
            commit('startLoading', null);
            setTimeout(() => {
                commit('stopLoading', null);

                const formFields = Object.keys(state.careerForm.formDetails);
                const isInvalid = formFields.some(formField => {
                    return (
                        state.careerForm.formDetails[formField].required &&
                        state.careerForm.formDetails[formField].value.trim() ===
                            ''
                    );
                });
                if (isInvalid) {
                    commit('setError', true);
                } else {
                    commit('setSuccess', null);
                }
            }, 1500);
        },
    },
});

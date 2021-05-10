<template>
    <div class="career-form--section">
        <h2 class="heading-text">Shift Your Career Into Overdrive</h2>
        <div class="career-form--wrapper">
            <p class="career-form--summary">
                We're seeking friendly, happy individuals up for the challenge
                to change the way people view the automitive industry. If you
                agree that a customer's time is valuable and positive human
                interaction is important, then we want to hear from you!
            </p>
            <div class="career-form--container">
                <div v-if="error" class="career-form--error--msg">
                    Sorry. We could not submit the form. Please review the
                    errors.
                </div>

                <form
                    v-if="!success"
                    v-bind:class="{ loading: loading }"
                    class="career-form"
                >
                    <div>
                        <label for="name">Name (required)</label>
                        <input
                            v-model="name.value"
                            type="text"
                            name="name"
                            :required="name.required"
                        />
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <input
                            v-model="phone.value"
                            type="phone"
                            name="phone"
                            :required="phone.required"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            :disabled="loading"
                            class="career-form--submit btn"
                            @click="handleSubmit()"
                        >
                            I'm Interested
                        </button>
                    </div>
                </form>

                <div v-if="success" class="career-form--success--msg">
                    Thank you for your interest. We will respond within 72
                    hours.
                </div>

                <div v-if="loading" class="loading-container">
                    <div class="spinner"></div>
                </div>
            </div>

            <img
                :src="require('@/assets/careers.jpg')"
                alt="Chapman Careers"
                class="career-form--figure"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
    name: 'CareerForm',
    computed: {
        ...mapFields([
            'careerForm.formDetails.name',
            'careerForm.formDetails.phone',
        ]),
        ...mapState({
            loading: (state) => state.careerForm.loading,
            success: (state) => state.careerForm.success,
            error: (state) => state.careerForm.error,
        }),
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch('submit');
        },
    },
};
</script>

<style lang="scss" scoped>
label {
    font-size: 1rem;
    font-weight: bold;
}
input:not([type='radio']):not([type='checkbox']) {
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0 0 1rem 0;
}
button {
    background: var(--color-highlight);
    color: #000;
    border: none;
    border-radius: 3px;
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;

    &[disabled] {
        opacity: 0.4;
    }
}
.heading-text {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 6px solid var(--color-highlight);
    font-size: 44px;
    text-transform: uppercase;
}

.career-form--wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
}
.career-form--container {
    position: relative;
}
.career-form--figure {
    grid-row: 1;
    width: 100%;
    margin: 0 0 1rem 0;
    clip-path: polygon(0% 0, 100% 0%, 100% 100%, 10% 100%);
}
.career-form--summary,
.career-form {
    padding: 0;
    margin: 0;
}

.career-form {
    margin: 1rem 0 0 0;
}

.career-form.loading {
    opacity: 0.25;
}

.career-form--figure {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .career-form--wrapper {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-column-gap: 2rem;
    }
    .career-form--figure {
        grid-column: 2;
        grid-row: 1 / span 2;
        width: 100%;
    }
    .career-form--summary,
    .career-form {
        grid-column: 1;
        padding: 0;
        margin: 0;
    }

    .career-form {
        margin: 1rem 0 0 0;
    }
}

.career-form--success--msg,
.career-form--error--msg {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    opacity: 0;
    animation: fadeIn 400ms forwards;
    margin: 1rem 0 0 0;
}

.career-form--success--msg {
    border: 1px solid rgb(50, 104, 50);
    background: rgb(153, 229, 178);
}

.career-form--error--msg {
    border: 1px solid rgb(151, 31, 31);
    background: rgb(255, 210, 210);
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.loading-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.spinner {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: 2px solid #c0c0c0;
    border-color: #686868 #c0c0c0 #c0c0c0 #c0c0c0;
    animation: spin 1s infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

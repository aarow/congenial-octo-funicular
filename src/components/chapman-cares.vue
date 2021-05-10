<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img
            :src="require('@/assets/cares-banner.jpg')"
            alt="Chapman Cares"
            class="banner-img"
        />

        <div v-for="(event, index) in events" :key="index" class="event">
            <div class="event-image">
                <img :src="event.image" :alt="event.alt" class="event-image" />
            </div>
            <div class="event-details">
                <h3 class="event-name">{{ event.name }}</h3>
                <p class="event-text">{{ event.text }}</p>
            </div>
        </div>

        <div>
            <CareerForm />
        </div>
    </div>
</template>

<script>
import HeadingText from '@/components/heading-text';
import CareerForm from '@/components/career-form';

export default {
    name: 'ChapmanCares',
    components: {
        HeadingText,
        CareerForm,
    },
    data() {
        return {
            events: [
                {
                    name: 'Making Strides Against Cancer',
                    text:
                        'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
                    image: require('@/assets/making-strides.jpg'),
                    alt: 'Maing Strides Against Cancer',
                },
                {
                    name: 'Canine Companions For Independence',
                    text:
                        'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
                    image: require('@/assets/canine-companions.jpg'),
                    alt: 'Canine Companions for Independence',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.banner-img {
    width: 100%;
}
.event {
    margin-top: 2rem;
}
.event-name {
    margin-bottom: 1rem;
}

.event-image {
    width: 200px;
    flex: 0 0 200px;
}

.event-image img {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .event {
        display: flex;
    }
    .event-image {
        margin: 0 1rem 0 0;
        width: 200px;
    }
}
</style>

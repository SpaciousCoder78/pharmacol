<template>
    <div>
        <h1>Medicines</h1>
        <ul>
            <li v-for="medicine in medicines" :key="medicine.id">
                {{ medicine.name }} - {{ medicine.description }}
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
    data() {
        return {
            medicines: [],
        };
    },
    mounted() {
        // Initialize Firebase
        const firebaseConfig = {
            // Your Firebase configuration
        };
        firebase.initializeApp(firebaseConfig);

        // Retrieve medicines from Firebase database
        const database = firebase.database();
        const medicinesRef = database.ref('medicines');

        medicinesRef.on('value', (snapshot) => {
            const medicines = [];
            snapshot.forEach((childSnapshot) => {
                const medicine = childSnapshot.val();
                medicines.push(medicine);
            });
            this.medicines = medicines;
        });
    },
};
</script>

<style>
/* Add your custom styles here */
</style>
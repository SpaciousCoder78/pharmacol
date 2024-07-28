<!-- Billing page -->
<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
    data() {
        return {
            medicineName: '',
            availableMedicines: [],
        };
    },
    computed: {
        filteredMedicines() {
            return this.availableMedicines.filter(medicine =>
                medicine.name.toLowerCase().includes(this.medicineName.toLowerCase())
            );
        },
    },
    created() {
        // Initialize Firebase
        const firebaseConfig = {
            // Your Firebase configuration
        };
        firebase.initializeApp(firebaseConfig);

        // Fetch data from Firebase
        const database = firebase.database();
        const medicinesRef = database.ref('medicines');

        medicinesRef.on('value', snapshot => {
            const medicines = snapshot.val();
            this.availableMedicines = Object.values(medicines);
        });
    },
};
</script>

<template>
    <div id="billingarea">
        <h2>Billing</h2>
        <textarea v-model="medicineName" placeholder="Enter medicine name"></textarea>
        <ul>
            <li v-for="medicine in filteredMedicines" :key="medicine.name">
                <div>{{ medicine.name }}</div>
                <div>Dosage: {{ medicine.dosage }}</div>
                <div>Company: {{ medicine.company }}</div>
                <div>Price: {{ medicine.price }}</div>
            </li>
        </ul>
    </div>
</template>

<style>
/* Add your custom styles here */
</style>
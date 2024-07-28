<!-- Billing page -->
<script>
export default {
    data() {
        return {
            medicineName: '',
            availableMedicines: [
                { name: 'Paracetamol', dosage: '500mg', company: 'Pharma Inc.', price: '$5.00' },
                { name: 'Ibuprofen', dosage: '200mg', company: 'Health Corp.', price: '$8.00' },
            ],
        };
    },
    computed: {
        filteredMedicines() {
            return this.availableMedicines.filter(medicine =>
                medicine.name.toLowerCase().includes(this.medicineName.toLowerCase())
            );
        },
    },
};
</script>

<template>
    <div id="billingarea">
        <h2>Billing</h2>
        <textarea v-model="medicineName" placeholder="Enter medicine name"></textarea>
        <ul>
            <li v-for="medicine in filteredMedicines" :key="medicine.name" class="medicine-item">
                <div class="medicine-details">
                    <div class="medicine-name">{{ medicine.name }}</div>
                    <div class="medicine-dosage">Dosage: {{ medicine.dosage }}</div>
                    <div class="medicine-company">Company: {{ medicine.company }}</div>
                    <div class="medicine-price">Price: {{ medicine.price }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
#billingarea {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

ul {
    list-style-type: none;
    padding: 0;
}

.medicine-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}

.medicine-details {
    display: flex;
    flex-direction: column;
}

.medicine-name {
    font-weight: bold;
    font-size: 1.2em;
}

.medicine-dosage,
.medicine-company,
.medicine-price {
    color: #555;
    font-size: 1em;
}
</style>
<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Medicines</h1>
        <ul class="list-group">
            <li v-for="medicine in medicines" :key="medicine.id" class="list-group-item">
                <h5>{{ medicine.name }}</h5>
                <p>{{ medicine.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            medicines: [
                { id: 1, name: 'Aspirin', description: 'Pain reliever' },
                { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory' },
                { id: 3, name: 'Paracetamol', description: 'Fever reducer' },
            ],
        };
    },
};
</script>

<style>
.container {
    max-width: 600px;
    margin: auto;
}

h1 {
    font-size: 2.5rem;
    color: #007bff;
}

.list-group-item {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    margin-bottom: 10px;
}

.list-group-item h5 {
    margin: 0;
    font-size: 1.25rem;
    color: #343a40;
}

.list-group-item p {
    margin: 0;
    color: #6c757d;
}
</style>
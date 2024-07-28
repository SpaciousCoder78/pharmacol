<template>
    <div>
        <h1>Bill Receipts</h1>
        <ul>
            <li v-for="receipt in receipts" :key="receipt.id">
                {{ receipt.name }} - {{ receipt.amount }}
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    data() {
        return {
            receipts: [],
        };
    },
    mounted() {
        this.fetchReceipts();
    },
    methods: {
        fetchReceipts() {
            const db = firebase.firestore();
            db.collection('receipts')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.receipts.push(doc.data());
                    });
                })
                .catch((error) => {
                    console.error('Error fetching receipts:', error);
                });
        },
    },
};
</script>

<style>
/* Add your custom styles here */
</style>
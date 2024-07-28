<template>
    <div class="receipts-container">
        <h1>Bill Receipts</h1>
        <ul class="receipts-list">
            <li v-for="receipt in receipts" :key="receipt.id" class="receipt-item">
                <div class="receipt-details">
                    <span class="receipt-name">{{ receipt.name }}</span>
                    <span class="receipt-amount">{{ receipt.amount }}</span>
                    <span class="receipt-date">{{ receipt.date }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            receipts: [
                { id: 1, name: 'Groceries', amount: '$50.00', date: '2023-10-01' },
                { id: 2, name: 'Utilities', amount: '$75.00', date: '2023-10-05' },
            ],
        };
    },
};
</script>

<style>
.receipts-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.receipts-list {
    list-style-type: none;
    padding: 0;
}

.receipt-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.receipt-details {
    display: flex;
    flex-direction: column;
}

.receipt-name {
    font-weight: bold;
    font-size: 1.2em;
}

.receipt-amount {
    color: #4caf50;
    font-size: 1.1em;
}

.receipt-date {
    color: #888;
    font-size: 0.9em;
}
</style>
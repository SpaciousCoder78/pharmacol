

<template>
    <div id="mainmenu">
        <h1>Main Menu</h1>
        <!--Billing card-->
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Billing</h5>
                        <p class="card-text">Open the billing menu for billing</p>
                        <button type="submit" class="btn btn-primary" @click="ToBilling">Billing</button>
                    </div>
                </div>
            </div>
            <!--Add meds card-->
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add New Medicines</h5>
                        <p class="card-text">Add New Medicines to the database</p>
                        <button type="submit" class="btn btn-primary" @click="Toaddmeds">Add New Medicines</button>
                    </div>
                </div>
            </div>
            <!--View receipts-->
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">View Receipts</h5>
                        <p class="card-text">View Past Bill Receipts</p>
                        <button type="submit" class="btn btn-primary" @click="ToReceipts">View Receipts</button>
                    </div>
                </div>
            </div>
            <!--View Medicines-->
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">View Medicines</h5>
                        <p class="card-text">View Avaliable Medicines in the store</p>
                        <button type="submit" class="btn btn-primary" @click="ToViewMedicines">View Medicines</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>

import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async Toaddmeds() {
      try {
        this.router.push('/add-meds'); // Ensure this line is correct
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      }
    },
    async ToReceipts() {
        try {
             this.router.push('/receipts');
        } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      }
    },

async ToBilling() {
      try {
        this.router.push('/billing');
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      }
    },
    async ToViewMedicines() {
      try {
        this.router.push('/view_meds');
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      }
    },
  },
};
</script>
<style>
    /*css here*/
</style>
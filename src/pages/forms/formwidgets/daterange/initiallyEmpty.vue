<template>
     <div class="col-xl-12">
                    <div class="daterange-card">
                      <h6 class="sub-title">Input Initially Empty</h6>
                      <p>If you're using a date range as a filter, you may want to attach a picker to an input but leave it empty by default. This example shows how to accomplish that using the <code>autoUpdateInput</code> setting, and the <code>apply</code> and <code>cancel</code> events.</p>
                      <div class="theme-form">
                        <div class="form-group">
                       
                          <datepicker class=" digits" v-model="date"  />
                        </div>
                      </div>
                    </div>
                  </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref();
        
        return {
          date,
        }
    }
}
</script>
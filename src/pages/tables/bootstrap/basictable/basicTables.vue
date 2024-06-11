<template>
      <Breadcrumbs main="Bootstrap Tables" title="Bootstrap Basic Tables" />
      <div class="container-fluid">
            <div class="row">
                  <basicTable />
                  <inverseTable />
                  <hoverableRows />
                  <inversePrimary />
                  <contextualClasses />
                  <backgroundUtilities />
                  <captionTable />
                  <tableDark />
                  <stripedrowInverse />
                  <breckpointSpecific />
                  <responsiveTables />
                  <sizingTable />
                  <customTable />
                  <dashedBorder />
            </div>
      </div>
</template>
<script>
import basicTable from "./basicTable.vue"
import inverseTable from "./inverseTable.vue"
import inversePrimary from "./inversePrimary.vue"
import hoverableRows from "./hoverableRows.vue"
import contextualClasses from "./contextualClasses.vue"
import backgroundUtilities from "./backgroundUtilities.vue"
import tableDark from "./tableDark.vue"

import stripedrowInverse from "./stripedrowInverse.vue"
import captionTable from "./captionTable.vue"
import responsiveTables from "./responsiveTables.vue"
import breckpointSpecific from "./breckpointSpecific.vue"
import sizingTable from "./sizingTable.vue"
import customTable from "./customTable.vue"
import dashedBorder from "./dashedBorder.vue"
export default {
      components: {
            basicTable,
            inverseTable,
            inversePrimary,
            hoverableRows,
            contextualClasses,
            backgroundUtilities,
            tableDark,

            stripedrowInverse,
            captionTable,
            responsiveTables,
            breckpointSpecific,
            sizingTable,
            customTable,
            dashedBorder
      }
}
</script>
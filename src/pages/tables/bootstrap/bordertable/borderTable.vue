<template>
    <Breadcrumbs main="Bootstrap Tables" title="Bootstrap Border Table" />
    <div class="container-fluid">
        <div class="row">
            <horizontalBorders />
            <verticalBorders />
            <bothBordeds />
            <borderlessTable />
            <defaultBorder />
            <solidBorder />
            <doubleBorder />
            <dottedBorder />

            <borderBottomColor />
        </div>
    </div>
</template>
<script>
import horizontalBorders from "./horizontalBorders.vue"
import verticalBorders from "./verticalBorders.vue"
import bothBordeds from "./bothBordeds.vue"
import borderlessTable from "./borderlessTable.vue"
import defaultBorder from "./defaultBorder.vue"
import solidBorder from "./solidBorder.vue"
import doubleBorder from "./doubleBorder.vue"
import dottedBorder from "./dottedBorder.vue"

import borderBottomColor from "./borderBottomColor.vue"
export default {
    components: {
        horizontalBorders,
        verticalBorders,
        bothBordeds,
        borderlessTable,
        defaultBorder,
        solidBorder,
        doubleBorder,
        dottedBorder,

        borderBottomColor
    }
}
</script>
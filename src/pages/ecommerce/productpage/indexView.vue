<template>
    <Breadcrumbs main="Inventario" title="Detalles" />
    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0">
                <detailsView/>
                <filterBlock :product="product" :loading="loading"/>
                <tabList :product="product" :loading="loading" :accessToken="accessToken"/>
            </div>
        </div>
    </div>
</template>

<script>
import detailsView from "./detailsView.vue"
import pageDetails from "./pageDetails.vue"
import filterBlock from "./filterBlock.vue"
import tabList from "./tabList.vue"

import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    components: {
        detailsView,
        pageDetails,
        filterBlock,
        tabList
    },
    data() {
        return {
            id: this.$route.params.id,
            accessToken: 'Bearer ' + localStorage.getItem('token'),
            product: {},
            loading: true,
        }
    },
    methods: {
        fetchData() {
            axios.get(apiDetails.url + 'api/products/' + this.id, {
                headers: {
                'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
                }
            })
            .then(response => {
                this.product = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
        },
    },
    watch: {
        '$route.params.id'(newId) {
            this.id = newId;
        },
    },
    created() {
        this.fetchData();
    },
}
</script>

<template>
    <Breadcrumbs main="Ventas" title="Detalles de venta" />
    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0">
                <tabList :sale="sale" :loading="loading" :accessToken="accessToken"/>
            </div>
        </div>
    </div>
</template>

<script>
import tabList from "./tabList.vue"

import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    components: {
        tabList
    },
    data() {
        return {
            id: this.$route.params.id,
            accessToken: 'Bearer ' + localStorage.getItem('token'),
            sale: {},
            loading: true,
        }
    },
    methods: {
        fetchData() {
            axios.get(apiDetails.url + 'api/sales/' + this.id, {
                headers: {
                    'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
                }
            })
            .then(response => {
                this.sale = response.data;
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

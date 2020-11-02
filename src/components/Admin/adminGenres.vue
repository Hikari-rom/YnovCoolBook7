<template>
    <div class="row">
         <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">🔏 Admin / Genres
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->
        <div class="alert alert-success" role="alert" v-show="onSuccess">
            Commande réussite
        </div>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Label</th>
                <th scope="col">Icon</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="genre in genres" :key="genre.id">
                <th scope="row">{{genre.id}}</th>
                <td>{{genre.label}}</td>
                <td>{{genre.icon}}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" @click="editGenre(genre.id)">Editer</button>
                        <button type="button" class="btn btn-danger" @click="deleteGenre(genre.id)">Supprimer</button>
                    </div>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>

import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/";

export default {
  name: 'adminBooks',
    data: () => ({
      hasId: true,
      genres: {},
      onSuccess: false,
    }),
    methods: {
        async fetchGenres() {
            let response = await axios.get(`${API_ENDPOINT}genres/`);
            this.genres = response.data
        },
        editGenre(bookId) {
            this.$router.push(`/admin/genres/${bookId}`)
        },
        async deleteGenre(bookId) {
            if(confirm(`Etes-vous sur de vouloir supprimer le genre ?`)){  
                let response = await axios.delete(API_ENDPOINT + 'genres/' + bookId);
                if(response.status === 200) {
                    this.onSuccess = true;
                    this.fetchGenres();
                    setTimeout(() => this.onSuccess = false, 2000);
                }
            }
        }

    },
    created() {
        this.fetchGenres();
    }
}
</script>

<style scoped>

</style>

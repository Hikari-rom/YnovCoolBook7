<template>
    <div class="row">
        
         <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">🔏 Admin / Books / {{this.hasId?'Modifier':'Ajouter'}}
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
        <form v-on:submit.prevent="handleGenre()">
            <div class="form-group">
                <label for="label">Titre du genre</label>
                <input v-model="genre.label" type="text" class="form-control" id="label" required>
            </div>
            <div class="form-group">
                <label for="icon">Icone du genre</label>
                <input v-model="genre.icon" type="text" class="form-control" id="icon">
            </div>
            <button type="submit" class="btn btn-primary">{{this.hasId?'Modifier':'Ajouter'}} le genre</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/";

export default {
  name: 'GenresEditOrCreate',
    data: () => ({
      genre: {},
      hasId: false,
      onSuccess: false,
    }),
    methods: {
        async fetchGenre(id) {
            let response = await axios.get(`${API_ENDPOINT}genres/${id}`);
            this.genre = response.data
        },
        handleGenre() {
            if (this.hasId){
                this.updateGenre();
            } else {
                this.createGenre();
            }
        },
        async updateGenre() {
            let response = await axios.put(API_ENDPOINT + 'genres/' + this.genre.id, this.genre);
            if(response.status === 200) {
                this.onSuccess = true;
                setTimeout(() => this.onSuccess = false, 2000)
            }
        },
        async createGenre() {
            let response = await axios.post(API_ENDPOINT+ 'genres/', this.genre);
            if(response.status === 201) {
                this.onSuccess = true;
                setTimeout(() => this.onSuccess = false, 2000)
            }
        }
    },
    created() {
        if( Object.prototype.hasOwnProperty.call(this.$route.params, 'genreId') &&
            this.$route.params.genreId != null){
            this.hasId = true;
            this.fetchGenre(this.$route.params.genreId);
        } else {
            this.hasId = false;
        }
    }
}
</script>

<style scoped>

</style>

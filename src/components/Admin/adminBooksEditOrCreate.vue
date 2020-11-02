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
        <form v-on:submit.prevent="handleBook()">
            <div class="form-group">
                <label for="title">Titre du livre</label>
                <input v-model="book.title" type="text" class="form-control" id="title" required>
            </div>
            <div class="form-group">
                <label for="author">Autheur du livre</label>
                <input v-model="book.author" type="text" class="form-control" id="author">
            </div>
            <div class="form-group">
                <label for="year">Date de sortie</label>
                <input v-model="book.year" type="text" class="form-control" id="year">
            </div>
            <div class="form-group">
                <label for="resume">Résumé</label>
                <textarea class="form-control" id="resume" rows="3" v-model="book.resume"></textarea>
            </div>
            <div class="form-group">
                <label for="genre">Genre</label>
                <select v-model="book.genre.id" class="form-control" id="genre">
                    <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                        {{genre.label}}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="coverUri">Lien de la couverture</label>
                <input v-model="book.coverUri" type="text" class="form-control" id="coverUri">
            </div>
            <div class="form-check">
                <input v-model="book.ebooks" type="checkbox" class="form-check-input" id="ebooks">
                <label class="form-check-label" for="ebooks">Disponible en Ebook</label>
            </div>
            <button type="submit" class="btn btn-primary">{{this.hasId?'Modifier':'Ajouter'}} le livre</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/";

export default {
  name: 'BooksEditOrCreate',
    data: () => ({
      book: {
          genre : {
              id : 0
          }
      },
      hasId: true,
      genres: {},
      onSuccess: false,
    }),
    methods: {
        async fetchBook(id) {
            let response = await axios.get(`${API_ENDPOINT}books/${id}`);
            this.book = response.data
        },
        async fetchGenres() {
            let response = await axios.get(`${API_ENDPOINT}genres/`);
            this.genres = response.data
        },
        handleBook() {
            if (this.hasId){
                this.updateBook();
            } else {
                this.createBook();
            }
        },
        async updateBook() {
            let response = await axios.put(API_ENDPOINT + 'books/' + this.book.id, this.book);
            if(response.status === 200) {
                this.onSuccess = true;
                setTimeout(() => this.onSuccess = false, 2000)
            }
        },
        async createBook() {
            let response = await axios.post(API_ENDPOINT+ 'books/', this.book);
            if(response.status === 201) {
                this.onSuccess = true;
                setTimeout(() => this.onSuccess = false, 2000)
            }
        }

    },
    created() {
        this.fetchGenres();
        if( Object.prototype.hasOwnProperty.call(this.$route.params, 'bookId') &&
            this.$route.params.bookId != null){
            this.hasId = true;
            this.fetchBook(this.$route.params.bookId);
        } else {
            this.hasId = false;
        }
    }
}
</script>

<style scoped>

</style>

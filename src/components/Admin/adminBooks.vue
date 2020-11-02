<template>
    <div class="row">
         <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">🔏 Admin / Books
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
                <th scope="col">Titre</th>
                <th scope="col">Autheur</th>
                <th scope="col">Resumé</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" :key="book.id">
                <th scope="row">{{book.id}}</th>
                <td>{{book.title}}</td>
                <td>{{book.author}}</td>
                <td>{{truncate(book.resume, 125)}}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" @click="editBook(book.id)">Editer</button>
                        <button type="button" class="btn btn-danger" @click="deleteBook(book.id)">Supprimer</button>
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
      books: {},
      hasId: true,
      genres: {},
      onSuccess: false,
    }),
    methods: {
        async fetchBooks() {
            let response = await axios.get(`${API_ENDPOINT}books/`);
            this.books = response.data
        },
        editBook(bookId) {
            this.$router.push(`/admin/books/${bookId}`)
        },
        async deleteBook(bookId) {
            if(confirm(`Etes-vous sur de vouloir supprimer le livre ?`)){  
                let response = await axios.delete(API_ENDPOINT + 'books/' + bookId);
                if(response.status === 200) {
                    this.onSuccess = true;
                    this.fetchBooks();
                    setTimeout(() => this.onSuccess = false, 2000);
                }
            }
        },
        truncate(str, n){
            return (str.length > n) ? str.substr(0, n-1) + ' ...' : str;
        }

    },
    created() {
        this.fetchBooks();
    }
}
</script>

<style scoped>

</style>

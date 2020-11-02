<template>
    <div>
        <section class="welcome p-t-10">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="title-4">Mes livres
                        </h1>
                        <hr class="line-seprate">
                    </div>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col-3">
                <ul>
                    <li v-for="genre in genres" :key="genre.id">
                        <button class="btn btn-info" @click="changeFilter(genre.id)">{{genre.label}}</button>
                    </li>
                    <li>
                        <button class="btn btn-info" @click="getallBooks()">Réinitialiser le filtre</button>
                    </li>
                </ul>
            </div>
            <div class="col-9">
                <div v-for="book in books" :key="book.id">
                    <img :src="book.coverUri">
                    <h1>{{book.title}}</h1>
                    <h2>{{book.author}}</h2>
                    <h3>{{book.year}}</h3>
                    <button class="btn btn-info" @click="goToDetails(book.id)">Détails</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

const BOOKS_API_ENDPOINT = "http://localhost:3000/books"
const GENRE_API_ENDPOINT = "http://localhost:3000/genres"

export default {
    name: "LibraryBooks",
    data:()=>({
        books: [],
        genres: [],
    }),
    methods:{
        goToDetails(bookId){
            this.$router.push({ name:'bookDetails', params:{bookId} })
        },
        changeFilter(genreId){
            let bookFiltered = [];
            for(let book of this.books){
                if(book.genre.id == genreId)
                {
                    bookFiltered.push(book);
                }
            }
            console.log(bookFiltered)
            this.books = bookFiltered;
        },
        async getallBooks(){
            let allBooks = await axios.get(BOOKS_API_ENDPOINT)
            let { data } = allBooks;
            this.books = data;
        }
    },
    async created(){
        await this.getallBooks();
        let allGenres = await axios.get(GENRE_API_ENDPOINT);
        this.genres = allGenres.data;
        console.log(this.genres)
    },
}
</script>
<style scoped>

</style>
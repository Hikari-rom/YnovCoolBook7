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
                Coucou
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

export default {
    name: "LibraryBooks",
    data:()=>({
        books: [],
    }),
    methods:{
        goToDetails(bookId){
            this.$router.push({ name:'bookDetails', params:{bookId} })
        }
    },
    async created(){
        let allBooks = await axios.get(BOOKS_API_ENDPOINT);
        let { data } = allBooks;
        this.books = data;
        console.log(this.books);
    },
}
</script>
<style scoped>

</style>
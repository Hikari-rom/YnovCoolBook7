<template>
    <div>
        <section class="welcome p-t-10">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="title-4">{{book.title}}
                        </h1>
                        <hr class="line-seprate">
                    </div>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col-md-2">
                <img :src="book.coverUri">
            </div>
            <div class="col-md-10">
                <div class="row mt-3">
                    <div class="col-md-7">
                        <h3>{{book.title}}</h3>
                        <h3>{{book.author}}</h3>
                        <h3>{{book.year}}</h3>
                    </div>
                    <div class="col-md-4">
                        <h3 v-if="book.ebooks">Disponible en ebook</h3>
                        <h3 v-else>Non disponible en ebook</h3>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="row">
                        <h2> Résumé </h2>
                    </div>
                    <div class="row">
                        {{book.resume}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const BOOK_API_ENDPOINT = "http://localhost:3000/books/"
import axios from "axios"
export default {
    name: "LibraryBooksDetails",
    data:()=>({
        book:{}
    }),
    methods:{
        async loadSelectedBook(){
            let {bookId} = this.$route.params;
            let {data} = await axios.get(`${BOOK_API_ENDPOINT}${bookId}`)
            this.book = data
        }
    },
    created(){
        this.loadSelectedBook();
    }
}
</script>
<style scoped>

</style>
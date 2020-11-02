<template>
    <div>
        <section class="welcome p-t-10">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="title-4">Les genres
                        </h1>
                    <hr class="line-seprate">
                    </div>
                </div>
            </div>
        </section>
        <div class="row justify-content-center border rounded" v-for="genre in allGenres" :key="genre.id">
            <div class="m-2">
                {{genre.label}} : {{genre.count}} livres de ce genre
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

const GENRE_API_ENDPOINT = "http://localhost:3000/genres"
const BOOKS_API_ENDPOINT = "http://localhost:3000/books"

export default {
    name:"LibraryGenres",
    data:()=>({
        allGenres:{}
    }),
    methods:{
        countNumberOfBooks(genres,books){
            for(let genre of genres)
            {
                genre.count = 0
            }
            console.log("truc")
            console.log(genres)
            console.log('machin')
            // let { data } = books;
            // console.log(data);
            for(let book of books)
            {
                // console.log(book)
                let idGenre = book.genre.id;
                genres[idGenre].count++;
                // console.log(genres[idGenre]);
            }
            console.log(genres)
        }
    },
    async created(){
        let genres = await axios.get(GENRE_API_ENDPOINT);
        let library = await axios.get(BOOKS_API_ENDPOINT);
        let books = library.data;
        let { data } = genres;
        this.allGenres = data;
        this.countNumberOfBooks(data,books)
    },
}
</script>
<style scoped>

</style>
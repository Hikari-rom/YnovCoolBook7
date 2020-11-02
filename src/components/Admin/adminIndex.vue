<template>
<div>
                <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">🔏 Admin
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->
    <div class="row justify-content-center">

        <div class="card m-4">
            <div class="card-header">
                Books
            </div>
            <div class="card-body">
                <button class="btn btn-primary" @click="createBook()">Ajouter un livre</button>
                <button class="btn btn-warning" @click="editBook()">Editer | supprimer un livre</button>
            </div>
        </div>

        
        <div class="card m-4">
            <div class="card-header">
                Genres
            </div>
            <div class="card-body">
                <button class="btn btn-primary" @click="createGenre()">Ajouter un genre</button>
                <button class="btn btn-warning" @click="editGenre()">Editer | supprimer un livre</button>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'adminIndex',
    methods: {
        createBook() {
            this.$router.push(`/admin/books/new`)
        },
        editBook() {
            this.$router.push(`/admin/books`)
        },
        createGenre() {
            this.$router.push(`/admin/genres/new`)
        },
        editGenre() {
            this.$router.push(`/admin/genres`)
        }

    },
}
</script>

<style scoped>

</style>

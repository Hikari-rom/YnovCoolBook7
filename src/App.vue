<template>
  <div id="app">

    <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <router-link class="text-uppercase text-expanded headerlink " to="/home">
                            <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
                        </router-link>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">

                            <li>
                                <router-link class="text-uppercase text-expanded headerlink " to="/books">
                                    <i class="fas fa-book"></i>
                                    <span class="bot-line"></span>Livres</router-link>
                            </li>
                            <li>
                                <router-link class="text-uppercase text-expanded headerlink " to="/genres">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Genre</router-link>
                            </li>
                            <li>
                                <a href="/#/admin">
                                    <i class="fas fa-cogs"></i>
                                    <span class="bot-line"></span>Admin</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
        <!-- END HEADER DESKTOP-->

        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            
            <!-- Content -->
            <section class="container">
                <router-view/>
            </section>
            <!-- END STATISTIC CHART-->
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

</style>

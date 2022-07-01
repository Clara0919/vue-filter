<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <router-link to="" class="navbar-brand" href="#">
                <div class="logo">
                    LOGO
                </div>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-lg-flex align-items-lg-center">
                    <li class="nav-item d-inline d-lg-block">
                        <router-link to="" class="active" aria-current="page" href="#">企業資訊</router-link>
                    </li>
                    <li class="d-none d-lg-inline">/</li>
                    <li class="nav-item d-inline d-lg-block">
                        <router-link to="" class="" href="#">經驗分享</router-link>
                    </li>
                    <li class="d-none d-lg-inline">/</li>
                    <li class="nav-item d-inline d-lg-block">
                        <router-link to="" class="" href="#">學員專區</router-link>
                    </li>
                </ul>
            </div>
            <div class="d-none d-lg-block">
                <router-link to="" class="back-end">
                    <img src="../assets/person-icon.png" alt="">
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>


</script>
<style scoped>
    .logo {
        width: 50px;
        height: 50px;
        color: white;
        font-size: 12px;
        background-color: gray;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        margin-right: 10px;
    }

    nav {
        background-color: #2EC4B6;
        padding: 20px 0;
    }

    .navbar-nav li {
        color: white;
        font-size: 18px;
        margin: 5px;
    }

    .navbar-nav li a {
        color: white;
        text-decoration: none;
    }

    .navbar-nav li a:hover {
        text-decoration: underline;
    }

    .back-end {
        margin: 0 30px;
    }

    .back-end img {
        width: 35px;
        height: 35px;
    }
</style>
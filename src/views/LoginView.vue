<template>
    <div class="wrapper">
        <div class="logo">
            LOGO示意圖
        </div>
        <form action="">
            <div class="account-group">
                <label class="title">
                    Account
                </label>
                <input type="text" class="account-input">
            </div>
            <div class="password-group">
                <label class="title">
                    Password
                </label>
                <input type="password" class="password-input">
            </div>
            <button type="submit" class="login-button">LOGIN</button>
        </form>
    </div>
</template>
<script>


</script>
<style scoped>
    .logo {
        margin: 0 auto;
        width: 200px;
        height: 200px;
        color: white;
        background-color: gray;
        border-radius: 50%;
        line-height: 200px;
        text-align: center;
    }

    .wrapper {
        margin: 110px 0;
    }

    form {
        width: 400px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .account-group {
        width: 400px;
        /* height: 67px; */
        position: relative;
        margin: 50px 0;
    }

    .password-group {
        width: 400px;
        position: relative;
        margin: 50px 0;
    }

    .title {
        width: 130px;
        position: absolute;
        background-color: #2EC4B6;
        color: white;
        font-size: 18px;
        text-align: center;
        border-radius: 20px 0 0 20px;
        padding: 16.8px;
        left: 0;
        z-index: 1;
    }

    .account-input {
        width: 280px;
        position: absolute;
        border: solid 1px transparent;
        outline: none;
        border-radius: 0 20px 20px 0;
        padding: 20px 20px 20px 30px;
        right: 0;
    }

    .password-input {
        width: 280px;
        position: absolute;
        border: solid 1px transparent;
        outline: none;
        border-radius: 0 20px 20px 0;
        padding: 20px 20px 20px 30px;
        right: 0;
    }

    .login-button {
        margin: 50px 0;
        background-color: #FF9F1C;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: solid 1px transparent;
        border-radius: 10px;
    }
</style>
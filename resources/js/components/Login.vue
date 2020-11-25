<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Sign In</div>
            <div class="card-body">
                <div class="alert alert-danger" v-if="error">
                    <p>Sign in fail. Please try again!</p>
                </div>
                <form autocomplete="off" @submit.prevent="login" method="post">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-default">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    data: function () {
        return {
            email: null,
            password: null,
            error: false
        }
    },
    methods: {
        login: function () {
            var app = this
            this.$auth.login({
                params: {
                    email: app.email,
                    password: app.password
                },
                success: function (response) {},
                error: function () {
                    app.error = true
                },
            })
        }
    }
}
</script>

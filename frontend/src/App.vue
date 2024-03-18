<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const { state, authLogout } = useAuthStore();

import Cookies from 'js-cookie';

if (Cookies.get('access_token')) {
  state.isLoggedin = true;
  state.username = Cookies.get('fullname');
} else {
  state.isLoggedin = false;
  state.username = '';
}
</script>

<template>
  <div>
    <header>
      <div class="nav-link">
        <img alt="logo" class="logo" src="@/assets/urbanbrush-20181218140122879196.png" width="48" height="48" />

        <div class="wrapper">
          <nav>
            <RouterLink to="/my-appoint">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </div>

      <div class="user-profile">
        <RouterLink v-if="!state.isLoggedin" to="/login">Login</RouterLink>
        <div v-else>
          {{ state.username }}
          <RouterLink @click="authLogout" to="/login">Logout</RouterLink>
        </div>
      </div>
    </header>

    <nav class="sideBar" v-if="$route.path !== '/login'">
      <ul>
        <li>
          <RouterLink to="make-appoint"><el-button type="primary">
              New Appointment
            </el-button></RouterLink>
        </li>
        <li>
          <RouterLink to="/my-appoint"><el-button type="primary">
              My Appointments
            </el-button></RouterLink>
        </li>
      </ul>
    </nav>

    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/app.scss";

.sideBar {
  position: fixed;
  inset: 72px 0;
  width: 200px;
  z-index: 100;

  ul {
    list-style: none;
    padding: 0;

    li {
      padding-left: 24px;
      margin-bottom: 12px;

      button {
        border-radius: 8px;
      }
    }
  }
}

header {
  max-height: 100vh;
  widows: 100dvw !important;
  position: fixed;
  inset: 0 0;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: auto 1rem;
  }

  .nav-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .user-profile {
    margin: auto 2rem;
  }

  nav {
    // width: 100%;
    margin: auto;
    font-size: 12px;
    text-align: center;

    display: flex;
    flex-direction: row;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

}

footer {
  position: fixed;
  bottom: 0;
  left: 72px;
  background-color: aqua !important;
  width: calc(100dvw - 72px);
  height: 48px;
  background-color: var(--color-background-soft);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  width: calc(100dvw - 200px);
  height: calc(100dvh - 64px - 48px);
  position: fixed;
  bottom: 48px;
  left: 200px;

  overflow: auto;

}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-text);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text);
}
</style>

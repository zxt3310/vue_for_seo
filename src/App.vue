<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> 
	  <router-link to="/service">产品服务</router-link> 
      <router-link to="/about">关于我们</router-link> 
	  <router-link to="/download">下载中心</router-link>
	  <button class="btn btn-default">登录</button>
	  <button class="btn btn-default">注册</button>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  top: 0;
  right: 10%;
  padding: 30px 0 30px 0;
}

#nav a {
  text-decoration: none;
  margin:0 20px 0 20px;
  color: #DFE0FB;
}

#nav button{
	margin-right: 10px;
	border-radius: 15px;
	border: none;
	/* padding: 3px 10px 3px 10px; */
}

#nav a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.page{
	height: 100%;
	width: 100%;
}
</style>

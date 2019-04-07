<template>
  <div id='show-blogs' v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text"  v-model="search" placeholder="搜索" >
    <div class='single-blog' v-for='blog in filteredBlogs' :key='blog.title'>
      <router-link :to="'/blog/' + blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}
        </h2></router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'show-blogs',
  data(){
    return {
      blogs: [],
      search:''
    }
  },
  created(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            console.log(this.blogs)
            this.blogs = data.data.slice(0, 10)
         })
    },
    computed:{
  	    filteredBlogs:function(){
            return this.blogs.filter((blog) =>{
                return blog.title.match(this.search);
            })
          }
    },
    filters: {
        "to-uppercase": function(value) {
            return value.toUpperCase();
         }
    },
    directives: {
        'rainbow': {
            bind(el,binding,vnode) {
                el.style.color = "#" + Math.random().toString(18).slice(2,8);
            }
        }
    }
}
</script>
<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px solid #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}

</style>

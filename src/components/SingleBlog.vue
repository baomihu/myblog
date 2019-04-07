<template>
    <div class="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id">编辑博客</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default{
		name:"SingBlog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id )
				.then((data) => {
                    this.blog = data.data;
                    // console.log(data)
				})
        },
        methods: {
            deleteSingleBlog(){
                axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.id)
                    .then(response =>{
                        this.$router.push({path: '/'})
                    } )
            }
        }
	}
</script>

<style>
    #single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
</style>



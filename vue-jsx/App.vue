

<script>
   //mintui element template
    import hello from "./views/hello"
    //object.define
    export default {
        name: "App",
        data(){
           return {
               msg:"hello component"
           }
        },
        render(){
            //如果是使用 jsx，不可以使用interpolation express {{}}
            return <div>
                <h1>jsx vue {this.msg}</h1>
                <hello></hello>
            </div>
        }
    }
</script>

<style scoped>

</style>

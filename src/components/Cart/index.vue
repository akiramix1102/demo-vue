<template>
  <el-container>
    <el-row gutter="30">
    <el-table :data="cart" 
     style="width: 100%" :default-sort = "{prop: 'price', order: 'descending'}">
      
        <el-table-column prop="name" sortable label="Name">
        </el-table-column>
          <el-table-column prop="category" label="Category" >
        </el-table-column>

        <el-table-column prop="quantity" sortable label="Quantity" > </el-table-column>
        <el-table-column  sortable prop="cost" label="Toltal" >
        </el-table-column>
        <el-table-column
     >
      <template slot-scope="scope">
          <i class="el-icon-delete-solid" @click="handleDelete(scope.row.id)"></i>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row.name)">Delete</el-button> -->
      </template>
    </el-table-column>
    </el-table>
    </el-row>
    <el-row type="flex" justify="end">
        <el-col :span="6">
            <h2>Total: $ {{total}}</h2>
            <button class="ck">Check out</button>
        </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
    name: "cart",
    methods:{
        handleDelete(id){
            return this.$store.commit('deleteProduct',id)
        }
    },
    computed:{
        cart(){
            return this.$store.state.cart;
            },
        total(){
             return this.$store.state.total;
        }
    }
};
</script>

<style scoped>
    .el-container{
        max-width: 1200px;
        margin: auto;
        flex-wrap: wrap;
    }
    .el-row{
        width: 100%;
    }
    .el-table{
        font-size: 20px;
    }
    .el-icon-delete-solid{
        margin-left: 15px;
    }
    .ck{
        background-color: #2b96cc;
    padding: 10px 25px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    border: none;
    transition: .3s;
    }
</style>

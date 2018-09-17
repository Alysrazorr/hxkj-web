<template>
  <div class="root">
    <el-row>
      <el-form :inline="true">
        <el-col :span="16">
          <el-form-item>
            <el-input
              placeholder="关键字"
              v-model="keyword"
              style="width: 400px;"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-row type="flex" justify="end">
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" @click="addForm.visible = true">新增</el-button>
              <!-- <el-button type="success" icon="el-icon-download">导出</el-button> -->
            </el-form-item>
          </el-row>
        </el-col>
      </el-form>
    </el-row>
    <el-card
      shadow="hover"
      class="card-department"
      v-for="department in departments" :key="department.id">
      <div slot="header" class="clearfix card-chart-header">
        <span>{{department.domainName}}</span>
        <span style="float: right;"><i class="el-icon-date">&nbsp;{{department.createTime}}</i></span>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-row :gutter="20">
            <el-col :span="20">
              <span class="department-info">名称：{{department.domainName}}</span>
            </el-col>
            <el-col :span="4">
              <el-button type="success" size="small" icon="el-icon-edit" @click="showEditForm(department.domainId)">修改</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20">
              <span class="department-info">备注：{{department.remark}}</span>
            </el-col>
            <el-col :span="4">
            <el-button type="danger" size="small" icon="el-icon-delete" @click="del(department.domainId)">删除</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!-- 新增 -->
    <el-dialog
      width="30%"
      title="部门-新增"
      :visible.sync="addForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
      <el-form :model="addForm.data" :rules="addForm.rules" ref="addForm" label-width="130px">
        <el-form-item label="名称：" prop="domainName">
          <el-input v-model="addForm.data.domainName"></el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="remark">
          <el-input v-model="addForm.data.remark" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddForm()">提交</el-button>
      </span>
    </el-dialog>
    <!-- 编辑=修改 -->
    <el-dialog
      width="30%"
      title="部门-修改"
      :visible.sync="editForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
      <el-form :model="editForm.data" ref="editForm" label-width="130px">
        <el-form-item label="名称：" prop="domainName">
          <el-input v-model="editForm.data.domainName"></el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="remark">
          <el-input v-model="editForm.data.remark" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitEditForm()">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    let rules = {
      domainName: [{required: true, message: '请输入名称'}, {max: 50, message: '长度不超过50个字符'}]
    }
    return {
      keyword: '',
      addForm: {
        visible: false,
        data: {
          domainName: '',
          remark: ''
        },
        rules: rules
      },
      editForm: {
        visible: false,
        data: {
          domainName: '',
          remark: ''
        }
      },
      departments: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.search()
    })
  },
  methods: {
    showEditForm (id) {
      let thiz = this
      thiz.editForm.visible = true
      thiz.$axios.get(`/department/${id}`).then(({data}) => {
        let department = data.data
        thiz.editForm.data = department
      })
    },
    del (id) {
      let thiz = this
      thiz.$confirm('此操作将删除本部门, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(id)
        thiz.$axios.delete(`/department/${id}`).then(({data}) => {
          if (data.statusCode === 233) {
            thiz.search()
            thiz.$message({
              type: 'success',
              message: '删除成功'
            })
          } else {
            thiz.$message({
              type: 'error',
              message: '删除失败'
            })
          }
        })
      }).catch(() => {
        thiz.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    submitAddForm () {
      let thiz = this
      thiz.$refs['addForm'].validate((valid) => {
        if (valid) {
          thiz.$axios.put(`/department`, thiz.addForm.data).then((result) => {
            if (result.data.statusCode === 233) {
              thiz.$message({
                message: '新增成功',
                type: 'success'
              })
              thiz.search()
              thiz.addForm.visible = false
              thiz.$refs['addForm'].resetFields()
            } else {
              thiz.$message({
                message: '新增失败',
                type: 'error'
              })
            }
          })
        } else {
          return false
        }
      })
    },
    submitEditForm () {
      let thiz = this
      thiz.$refs['editForm'].validate((valid) => {
        if (valid) {
          thiz.$axios.post(`/department`, thiz.editForm.data).then((result) => {
            if (result.data.statusCode === 233) {
              thiz.$message({
                message: '编辑成功',
                type: 'success'
              })
              thiz.search()
              thiz.editForm.visible = false
              thiz.$refs['editForm'].resetFields()
            } else {
              thiz.$message({
                message: '编辑失败',
                type: 'error'
              })
            }
          })
        } else {
          return false
        }
      })
    },
    search () {
      let thiz = this
      thiz.$axios.get(`/department?keyword=${thiz.keyword}`).then(({data}) => {
        thiz.departments = data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div.root {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
.card-department {
  width: calc((100% - 24px) * .5);
  display: inline-block;
  margin-bottom: 20px;
  &:nth-child(even) {
    margin-right: 20px;
  }
  .card-chart-header > span {
    user-select: none;
    font: {
      size: 25px;
      weight: 100;
      family: 'simhei';
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}

img.department-img {
  width: 100%;
  height: 160px;
}

span.department-info {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
</style>

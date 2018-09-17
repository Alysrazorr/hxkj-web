<template>
  <div class="root">
    <el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-col :span="16">
          <el-form-item>
            <el-input
              placeholder="关键字"
              v-model="keyword"
              style="width: 400px;"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-row type="flex" justify="end">
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" @click="addForm.visible = true">新增</el-button>
              <!-- <el-button type="danger" icon="el-icon-delete">删除</el-button> -->
              <!-- <el-button type="success" icon="el-icon-download">导出</el-button> -->
            </el-form-item>
          </el-row>
        </el-col>
      </el-form>
    </el-row>
    <el-card
      shadow="hover"
      class="card-user"
      v-for="user in users" :key="user.id">
      <div slot="header" class="clearfix card-chart-header">
        <span class="user-title">用户名</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="5">
          <img class="user-img"/>
        </el-col>
        <el-col :span="15">
          <el-row>
            <span class="user-info"><b style="font-weight: bold">用户名:XXXX</b></span>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="user-info">账号: 888888</span></el-col>
            <el-col :span="8">
              <span class="user-info">密码: 12387644</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="user-info">所属部门:</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16">
              <span class="user-info">电子邮箱: 44234668@qq.com</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row><span class="user-info"></span></el-row>
          <el-row><span class="user-info"></span></el-row>
          <el-row><span class="user-info"></span></el-row>
          <el-row type="fix" justify="end">
            <el-button type="warning" icon="el-icon-edit" @click="editForm.visible = true">修改信息</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!-- 新增 -->
    <el-dialog
      width="30%"
      title="用户-新增"
      :visible.sync="addForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
      <el-form :model="addForm.data" :rules="addForm.rules" ref="addForm" label-width="130px">
        <el-row type="flex" justify="center" :style="'margin-bottom: 20px;'">
          <el-upload
            class="avatar-uploader"
            action
            :show-file-list="false"
            :http-request="handleUpload">
            <img v-if="addForm.imageUrl" :src="addForm.imageUrl" class="avatar">
            <i v-else class="el-icon-upload avatar-uploader-icon"></i>
            <div>上传头像</div>
          </el-upload>
        </el-row>
        <el-form-item label="昵称：" prop="nickname">
          <el-input v-model="addForm.data.nickname"></el-input>
        </el-form-item>
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="addForm.data.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="addForm.data.password"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：" prop="email">
          <el-input v-model="addForm.data.email"></el-input>
        </el-form-item>
        <el-form-item label="所属部门：" prop="department">
          <el-select v-model="addForm.data.department" clearable placeholder="请选择">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注：" prop="remark">
          <el-input type="textarea" v-model="addForm.data.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddForm()">提交</el-button>
      </span>
    </el-dialog>
    <!-- 编辑-修改 -->
    <el-dialog
      width="30%"
      title="用户-新增"
      :visible.sync="editForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="editForm.data" ref="editForm" label-width="130px">
        <el-row>
           <el-col :span="14">
             <el-form-item label="用户名：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">

          </el-col>
         </el-row>
        <el-form-item label="账号:" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属部门：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="pRemark">
          <el-input type="textarea" ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddForm()">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    let rules = {
      nickname: [{required: true, message: '请输入名称'}, {max: 50, message: '长度不超过50个字符'}]
    }
    return {
      keyword: '',
      addForm: {
        visible: false,
        imageUrl: '',
        data: {
          nickname: '',
          username: '',
          password: '',
          email: '',
          department: '',
          remark: ''
        },
        rules: rules
      },
      editForm: {
        visible: false,
        imageUrl: '',
        data: {
          nickname: '',
          username: '',
          password: '',
          email: '',
          department: '',
          remark: ''
        }
      },
      departments: [],
      users: [{id: '1'}, {id: '2'}, {id: '3'}]
    }
  },
  mounted () {
    let thiz = this
    thiz.$nextTick(() => {
      thiz.$axios.get('/department').then(({data}) => {
        console.log(data)
        for (let dept of data.data) {
          console.log(dept)
          thiz.departments.push({
            label: dept.domainName,
            value: dept.domainId
          })
        }
      })
    })
  },
  methods: {
    search () {
      let thiz = this
      thiz.$axios.get(`/user`).then(({data}) => {
        thiz.users = data.data
      })
    },
    submitAddForm () {
      let thiz = this
      thiz.$refs['addForm'].validate((valid) => {
        if (valid) {
          thiz.$axios.put(`/user`, thiz.addForm.data).then((result) => {
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
    handleUpload (param) {
      let thiz = this
      let formData = new FormData()
      formData.append('files', param.file)
      const isJPG = param.file.type === 'image/jpeg'
      const isLt2M = param.file.size / 1024 < 512
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
        return
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 512KB!')
        return
      }
      let loading = thiz.$loading({
        lock: true,
        text: '上传中，请稍候...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      thiz.$axios.post('/attachment', formData).then(({data}) => {
        if (data.statusCode === 233) {
          thiz.$message({
            message: '上传成功',
            type: 'success'
          })
          thiz.addForm.imageUrl = URL.createObjectURL(param.file)
          thiz.addForm.data.avatar = data.data
        } else {
          thiz.$message({
            message: '上传失败',
            type: 'danger'
          })
        }
        loading.close()
      })
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 350px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin-top: 125px;
}
.avatar {
  width: 350px;
  height: 350px;
  display: block;
  image-orientation: flip;
}
</style>

<style lang="scss" scoped>
div.root {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
.card-user {
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

img.user-img {
  width: 100%;
  height: 160px;
}

span.user-info {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
</style>

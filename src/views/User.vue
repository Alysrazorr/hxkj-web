<template>
  <div class="root">
    <el-row>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-col :span="16">
          <el-form-item style="width: 120px;">
            <el-select v-model="formInline.region" placeholder="项目类型">
              <el-option label="全委" value="qw"></el-option>
              <el-option label="半委" value="bw"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="关键字"
              v-model="formInline.keyword"
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
              <el-button type="danger" icon="el-icon-delete">删除</el-button>
              <el-button type="success" icon="el-icon-download">导出</el-button>
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
         <el-row>
           <el-col :span="14">
             <el-form-item label="昵称：" prop="nickname">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="头像：" style="margin-bottom: 10px">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="addForm.imageUrl" :src="addForm.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
         </el-row>
        <el-form-item label="用户名：" prop="username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：" prop="email">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属部门：" prop="department">
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
            <el-form-item label="用户头像：" style="margin-bottom: 10px">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="editForm.imageUrl" :src="editForm.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
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
      pName: [{required: true, message: '请输入名称'}, {max: 50, message: '长度不超过50个字符'}]
    }
    return {
      formInline: {
        user: '',
        region: '',
        keyword: ''
      },
      addForm: {
        visible: false,
        imageUrl: '',
        data: {},
        rules: rules
      },
      editForm: {
        visible: false,
        imageUrl: '',
        data: {}
      },
      users: [{id: '1'}, {id: '2'}, {id: '3'}]
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
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
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
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

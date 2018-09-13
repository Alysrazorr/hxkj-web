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
      class="card-company"
      v-for="company in companys" :key="company.id">
      <div slot="header" class="clearfix card-chart-header">
        <span class="company-title">广州广汽租赁有限公司</span>
      </div>
      <el-row
        :gutter="20">
        <el-col :span="6">
          <img class="company-img"/>
        </el-col>
        <el-col :span="16">
          <el-row justify="flex" :gutter="20">
            <el-col :span="14">
              <span class="company-info"><b style="font-weight: bold">租赁公司全名：广州广汽租赁有限公司</b></span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">租赁公司简称：广汽租赁</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info"><b style="font-weight: 500; color: #409EFF">项目类型：全委</b></span>
            </el-col>
          </el-row>
          <el-row justify="flex" :gutter="20">
            <el-col :span="4">
              <span class="company-info">对接人姓名：张三</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">对接人座机：020-3144123</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">对接人手机号码：137888888</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">对接人邮箱：888888@163.com</span>
            </el-col>
          </el-row>
          <el-row justify="flex" :gutter="20">
            <el-col :span="4">
              <span class="company-info">经办人：李四</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">经办人手机号码：1234555</span>
            </el-col>
          </el-row>
          <el-row justify="flex" :gutter="20">
            <el-col :span="4">
              <span class="company-info" style="color: #409eff">设备件数：999999</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">委托合同数：1234534</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">委托金额：1,000,000</span>
            </el-col>
            <el-col :span="5">
              <span class="company-info">合作起始日期：2018/8/01</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-row><span class="company-info"></span></el-row>
          <el-row><span class="company-info"></span></el-row>
          <el-row><span class="company-info"></span></el-row>
          <el-row type="fix" justify="end">
            <el-button type="warning" icon="el-icon-edit" @click="editForm.visible = true">修改</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!-- 新增 -->
    <el-dialog
      width="40%"
      title="租赁公司-新增"
      :visible.sync="addForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="addForm.data" :rules="addForm.rules" ref="addForm" label-width="150px">
         <el-row>
           <el-col :span="14">
              <el-form-item label="租赁公司名称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="租赁公司系统简称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="项目类型：" prop="pName">
                <el-input></el-input>
              </el-form-item>
           </el-col>
           <el-col :span="10">
             <el-form-item label="公司图片：">
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
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="对接人姓名：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="对接人座机：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="对接人手机号码：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="对接人邮箱：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="经办人：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经办人手机号码：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="合作起始日期：" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="设备件数" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="委托合同数：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="委托金额：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddForm()">提交</el-button>
      </span>
    </el-dialog>
    <!-- 编辑-修改 -->
    <el-dialog
      width="40%"
      title="租赁公司-修改"
      :visible.sync="editForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="editForm.data" ref="editForm" label-width="150px">
         <el-row>
           <el-col :span="14">
              <el-form-item label="租赁公司名称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="租赁公司系统简称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="项目类型：" prop="pName">
                <el-input></el-input>
              </el-form-item>
           </el-col>
           <el-col :span="10">
             <el-form-item label="公司图片：">
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
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="对接人姓名：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="对接人座机：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="对接人手机号码：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="对接人邮箱：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="经办人：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经办人手机号码：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="合作起始日期：" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="设备件数" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="委托合同数：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="委托金额：" prop="pRemark">
              <el-input></el-input>
            </el-form-item>
          </el-col>
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
      companys: [{id: '1'}, {id: '2'}, {id: '3'}],
      addForm: {
        visible: false,
        imageUrl: '',
        data: {
        },
        rules: rules
      },
      editForm: {
        visible: false,
        imageUrl: '',
        data: {
        }
      }
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
  width: 145px;
  height: 145px;
  line-height: 145px;
  text-align: center;
}
.avatar {
  width: 145px;
  height: 145px;
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

.card-company {
  margin-bottom: 20px;
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

img.company-img {
  width: 100%;
  height: 200px;
}

span.company-info {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}

</style>

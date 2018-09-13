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
      class="card-renter"
      v-for="renter in renters" :key="renter.id">
      <div slot="header" class="clearfix card-chart-header">
        <span class="renter-title">承租人名称</span>
      </div>
      <el-row
        :gutter="20">
        <el-col :span="6">
          <img class="renter-img"/>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="6">
              <span class="renter-info"><b style="font-weight: bold">承租人名称:XXXX</b></span>
            </el-col>
            <el-col :span="6">
              <span class="renter-info">承租人全称:XXXX</span>
            </el-col>
            <el-col :span="6">
              <span class="renter-info">实际承租人:XXXX</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="5">
              <span class="renter-info">租赁公司:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">租赁物:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">数量:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">采购价:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">附属设备:</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="5">
              <span class="renter-info">首付比例:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">首付款:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">保证金比例:</span>
            </el-col>
            <el-col :span="5">
              <span class="renter-info">保证金:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">每期租金:</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4">
              <span class="renter-info">逾期金额:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">逾期期数:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">逾期天数:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">五级分类:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">数量:</span>
            </el-col>
            <el-col :span="4">
              <span class="renter-info">催款联络人:</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-row><span class="renter-info"></span></el-row>
          <el-row><span class="renter-info"></span></el-row>
          <el-row><span class="renter-info"></span></el-row>
          <el-row type="fix" justify="end">
            <el-button type="warning" icon="el-icon-edit" @click="editForm.visible = true">修改</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!-- 新增 -->
    <el-dialog
      width="40%"
      title="承租人-修改"
      class="renter-add"
      :visible.sync="addForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="addForm.data" :rules="addForm.rules" ref="addForm" label-width="130px">
        <el-row>
           <el-col :span="14">
              <el-form-item label="承租人全称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="实际承租人：" prop="pName">
                <el-input></el-input>
              </el-form-item>
           </el-col>
           <el-col :span="10">
             <el-form-item label="承租人照片：" style="margin-bottom: 10px;">
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
        <el-form-item label="租赁公司：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="18">
            <el-form-item label="租赁物：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="80px" label="数量：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="10">
            <el-form-item label="采购价：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="100px" label="附属设备：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="80px" label="数量：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="14">
            <el-form-item label="首付比例：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="100px" label="首付款：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="14">
            <el-form-item label="保证金比例：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="100px" label="保证金：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="10">
            <el-form-item label="每期租金：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="100px" label="逾期金额：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="100px" label="逾期期数：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="五级分类：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="催款联络人" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联络人联系方式" prop="pName">
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
      title="承租人-修改"
      class="renter-add"
      :visible.sync="editForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="editForm.data" ref="editForm" label-width="130px">
        <el-row>
           <el-col :span="14">
              <el-form-item label="承租人全称：" prop="pName">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="实际承租人：" prop="pName">
                <el-input></el-input>
              </el-form-item>
           </el-col>
           <el-col :span="10">
             <el-form-item label="承租人照片：" style="margin-bottom: 10px;">
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
        <el-form-item label="租赁公司：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="18">
            <el-form-item label="租赁物：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="80px" label="数量：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="10">
            <el-form-item label="采购价：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="100px" label="附属设备：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="80px" label="数量：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="14">
            <el-form-item label="首付比例：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="100px" label="首付款：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="14">
            <el-form-item label="保证金比例：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="100px" label="保证金：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="10">
            <el-form-item label="每期租金：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="100px" label="逾期金额：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="100px" label="逾期期数：" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="五级分类：" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-col :span="12">
            <el-form-item label="催款联络人" prop="pName">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联络人联系方式" prop="pName">
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
      renters: [{id: '1'}, {id: '2'}, {id: '3'}],
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

<style lang="scss">
.renter-add .el-dialog {
  margin-top: 85px !important;
}

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
.card-renter {
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

img.renter-img {
  width: 100%;
  height: 210px;
}

span.renter-info {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}
</style>

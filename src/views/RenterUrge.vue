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
      class="card-renterUrge"
      v-for="renterUrge in renterUrges" :key="renterUrge.id">
      <div slot="header" class="clearfix card-chart-header">
        <span class="renterUrge-title">承租人XX001</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="5">
          <img class="renterUrge-img"/>
        </el-col>
        <el-col :span="15">
          <el-row>
            <span class="renterUrge-info"><b style="font-weight: bold">承租人编号: 承租人XX001</b></span>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="renterUrge-info">委托日期:</span></el-col>
            <el-col :span="8">
              <span class="renterUrge-info">时点逾期天数:</span>
            </el-col>
            <el-col :span="8">
              <span>逾期金额:</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="renterUrge-info">五级分类:</span>
            </el-col>
            <el-col :span="8">
              <span class="renterUrge-info">催收记录:</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row><span class="renterUrge-info"></span></el-row>
          <el-row><span class="renterUrge-info"></span></el-row>
          <el-row><span class="renterUrge-info"></span></el-row>
          <el-row type="fix" justify="end">
            <el-button type="warning" icon="el-icon-edit" @click="editForm.visible = true">修改</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!-- 新增 -->
    <el-dialog
      width="30%"
      title="承租人催收-新增"
      :visible.sync="addForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="addForm.data" :rules="addForm.rules" ref="addForm" label-width="130px">
        <el-form-item label="承租人编号：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="委托日期：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="时点逾期天数：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="逾期金额：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="五级分类：" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="催收记录：" prop="pRemark">
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
      title="承租人催收-修改"
      :visible.sync="editForm.visible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
       <el-form :model="editForm.data" ref="editForm" label-width="130px">
        <el-form-item label="承租人编号：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="委托日期：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="时点逾期天数：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="逾期金额：" prop="pName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="五级分类：" prop="pRemark">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="催收记录：" prop="pRemark">
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
      pName: [{required: true, message: '请输入名称'}, {max: 50, message: '长度不超过50个字符'}],
      pRemark: [{max: 4000, message: '长度不超过4000个字符'}]
    }
    return {
      formInline: {
        user: '',
        region: '',
        keyword: ''
      },
      renterUrges: [{id: '1'}, {id: '2'}, {id: '3'}],
      addForm: {
        visible: false,
        data: {
        },
        rules: rules
      },
      editForm: {
        visible: false,
        data: {
        }
      }
    }
  },
  methods: {
    submitAddForm () {}
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
.card-renterUrge {
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

img.renterUrge-img {
  width: 100%;
  height: 210px;
}

span.renterUrge-info {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}
</style>

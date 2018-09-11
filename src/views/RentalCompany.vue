<template>
  <div class="root">
    <el-row>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
      </el-form>
    </el-row>
    <el-row
      justify="flex"
      :gutter="20"
      v-for="company in companys" :key="company.id"
      class="company">
      <el-col :span="6">
        <img class="company-img"/>
      </el-col>
      <el-col :span="18">
        <el-row justify="flex" :gutter="20">
          <el-col :span="14">
            <span class="company-info"><b>租赁公司全名：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>租赁公司简称：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>项目类型：</b></span>
          </el-col>
        </el-row>
        <el-row justify="flex" :gutter="20">
          <el-col :span="4">
            <span class="company-info"><b>对接人姓名：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>对接人座机：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>对接人手机号码：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>对接人邮箱：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>设备件数：</b></span>
          </el-col>
        </el-row>
        <el-row justify="flex" :gutter="20">
          <el-col :span="4">
            <span class="company-info"><b>经办人：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>经办人手机号码：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>合作起始日期：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>委托合同数：</b></span>
          </el-col>
          <el-col :span="5">
            <span class="company-info"><b>委托金额：</b></span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        region: '',
        keyword: ''
      },
      companys: [{id: '1'}, {id: '2'}, {id: '3'}]
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

.company {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

img.company-img {
  width: 100%;
  height: 210px;
}

span.company-info {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
</style>

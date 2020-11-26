<template>
  <div class="main">
    <el-card class="form">
      <div slot="header">
        <div>
          <el-button type="text">信息填报</el-button>
          <el-button type="text"
            disabled>XBRL</el-button>
        </div>
        <div>
          <el-upload class="upload-demo"
            action="https://austinxt.com"
            :file-list="fileList">
            <el-button type="primary"
              size="mini">导入</el-button>
          </el-upload>
          <el-button type="primary"
            size="mini"
            @click="submitForm">提交</el-button>
        </div>
      </div>
      <el-collapse>
        <el-collapse-item title="基本信息"
          name="1">
        </el-collapse-item>
        <el-collapse-item title="公告声明"
          name="2">
        </el-collapse-item>
        <el-collapse-item title="一、股东股权解除质押情况"
          name="3">
          <el-form label-position="top"
            label-width="80px"
            :model="form">
            <el-form-item label="解押股东解除质押情况：">
              <el-input size="small"
                v-model="form.value1"></el-input>
            </el-form-item>
            <el-form-item label="解除质押股数（股）：">
              <el-input size="small"
                v-model="form.value2"></el-input>
            </el-form-item>
            <el-form-item label="解押股份占公司股份的比例：">
              <el-input size="small"
                v-model="form.value3"></el-input>
            </el-form-item>
            <el-form-item label="股份性质：">
              <el-input size="small"
                v-model="form.value4"></el-input>
            </el-form-item>
            <el-form-item label="质押开始日期：">
              <el-input size="small"
                v-model="form.value5"></el-input>
            </el-form-item>
            <el-form-item label="质押解除日期：">
              <el-input size="small"
                v-model="form.value6"></el-input>
            </el-form-item>
            <el-form-item label="质权人：">
              <el-input size="small"
                v-model="form.value7"></el-input>
            </el-form-item>
            <el-button type="primary"
              size="mini">保存</el-button>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="二、股东持股及股权质押情况"
          name="4">
        </el-collapse-item>
        <el-collapse-item title=" 三、备查文件目录"
          name="4">
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card v-if="rightPane===0"
      class="preview"
      header="预览">
      <el-collapse>
        <el-collapse-item title="基本信息"
          name="1">
        </el-collapse-item>
        <el-collapse-item title="公告声明"
          name="2">
        </el-collapse-item>
        <el-collapse-item title="一、股东股权解除质押情况"
          name="3">
          <el-table :data="tableData"
            border
            style="width: 100%">
            <el-table-column prop="value1"
              label="股东名称"
              width="100">
            </el-table-column>
            <el-table-column prop="value2"
              label="解除质押股数（股）"
              width="180">
            </el-table-column>
            <el-table-column prop="value3"
              label="解押股份占公司股份的比例">
            </el-table-column>
            <el-table-column prop="value4"
              label="股份性质">
            </el-table-column>
            <el-table-column prop="value5"
              label="质押开始日期">
            </el-table-column>
            <el-table-column prop="value6"
              label="质押解除日期">
            </el-table-column>
            <el-table-column prop="value7"
              label="质权人">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="二、股东持股及股权质押情况"
          name="4">
        </el-collapse-item>
        <el-collapse-item title=" 三、备查文件目录"
          name="4">
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card v-else
      class="preview"
      header="验证信息">
      <el-table :data="validateCol1"
        style="width: 100%">
        <el-table-column prop="item"
          label="基本要素验证（6）"
          min-width="350">
        </el-table-column>
        <el-table-column prop="state"
          label="状态"
          min-width="100">
          <template slot-scope="scope">
            <i v-if="rightPane===2"
              class="el-icon-loading"
              style="color: #409EFF;"></i>
            <i v-else-if="scope.row.state"
              class="el-icon-success"
              style="color: #67C23A;"></i>
            <i v-else
              class="el-icon-error"
              style="color: #F56C6C;"></i>
            <span style="margin-left: 5px">{{ scope.row.state?'通过':'不通过' }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="validateCol2"
        style="width: 100%">
        <el-table-column prop="item"
          label="XBRL实例文档结构验证（6）"
          min-width="350">
        </el-table-column>
        <el-table-column prop="state"
          label="状态"
          min-width="100">
          <template slot-scope="scope">
            <i v-if="rightPane===2"
              class="el-icon-loading"
              style="color: #409EFF;"></i>
            <i v-else-if="scope.row.state"
              class="el-icon-success"
              style="color: #67C23A;"></i>
            <i v-else
              class="el-icon-error"
              style="color: #F56C6C;"></i>
            <span style="margin-left: 5px">{{ scope.row.state?'通过':'不通过' }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="validateCol3"
        style="width: 100%">
        <el-table-column prop="item"
          label="分类标准计算关系验证（0）"
          min-width="350">
        </el-table-column>
        <el-table-column prop="state"
          label="状态"
          min-width="100">
          <template slot-scope="scope">
            <i v-if="rightPane===2"
              class="el-icon-loading"
              style="color: #409EFF;"></i>
            <i v-else-if="scope.row.state"
              class="el-icon-success"
              style="color: #67C23A;"></i>
            <i v-else
              class="el-icon-error"
              style="color: #F56C6C;"></i>
            <span style="margin-left: 5px">{{ scope.row.state?'通过':'不通过' }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      tableData: [],
      rightPane: 0,
      fileList: [],
      validateCol1: [
        {
          item: '公告编号验证',
          state: 1
        },
        {
          item: '公告名称验证',
          state: 1
        },
        {
          item: '公告人验证',
          state: 1
        },
        {
          item: '公告日期验证',
          state: 1
        },
        {
          item: '证券代码验证',
          state: 1
        },
        {
          item: '证券简称验证',
          state: 1
        }
      ],
      validateCol2: [
        {
          item: '抽象元素是否被实例化验证',
          state: 1
        },
        {
          item: '单位定义验证',
          state: 1
        },
        {
          item: '上下文定义验证',
          state: 0
        },
        {
          item: '上下文引用验证',
          state: 1
        },
        {
          item: '元素内容',
          state: 1
        },
        {
          item: '证券简称验证',
          state: 1
        }
      ],
      validateCol3: []
    }
  },
  methods: {
    submitForm() {
      this.rightPane=2
      setTimeout(()=> {
        this.rightPane=1
      }, 300)
    }
  }
}
</script>

<style>
.main {
  display: flex;
  height: 100%;
}
.main .el-card {
  box-shadow: none;
  border-radius: 0;
}
.main .form .el-card__header {
  padding: 1px 10px 1px 20px;
}
.main .form .el-card__header div {
  display: flex;
  justify-content: space-between;
}
.main .preview .el-card__header {
  padding: 10px 10px 10px 20px;
}
.main .el-card .el-card__body {
  padding: 10px;
}
.form {
  width: 60%;
}
.preview {
  width: 40%;
}
</style>
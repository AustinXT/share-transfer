<template>
  <div id="layout">
    <div id="sider">
      <div id="logo">
        <img src="../assets/logo.jpg"
          alt="logo"
          style="height: 28px; margin: 7px 5px 6px 5px;">
        <div style="color: #C4CACF;font-size: 28px;">|</div>
        <div style="font-size: 24px; color: #3768A1;margin-left: 5px; font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;">Memect Editor</div>
      </div>
      <div id="tree">
        <el-card>
          <div slot="header">
            <span>公告类型</span>
            <i style="float: right;"
              class="el-icon-caret-left"></i>
          </div>
          <el-input placeholder="输入关键字进行过滤"
            v-model="filterText"
            size="small">
          </el-input>
          <el-tree class="filter-tree"
            :data="docTree"
            :props="defaultProps"
            :filter-node-method="filterNode"
            :highlight-current="true"
            :accordion="true"
            @node-click="addTab"
            ref="tree">
          </el-tree>
        </el-card>
      </div>
    </div>
    <div id="content">
      <el-tabs v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab">
        <el-tab-pane :key="item.name"
          v-for="item in editableTabs"
          :label="item.title"
          :name="item.name">
          <component :is="item.content"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Bulletin from './Bulletin'
import BulletinEdit from './BulletinEdit'
export default {
  name: 'HelloWorld',
  components: {
    'bulletin': Bulletin,
    'bulletin-edit': BulletinEdit
  },
  data() {
    return {
      editableTabsValue: '',
      editableTabs: [],
      filterText: '',
      docTree: [{
        id: '01',
        label: '01定期报告类',
        children: [{
          id: '101',
          label: '二级 1-1',
        }]
      }, {
        id: '2',
        label: '02业绩预告、业绩快报类',
        children: [{
          id: '201',
          label: '二级 2-1'
        }]
      }, {
        id: '3',
        label: '03公司治理类',
        children: [{
          id: '301',
          label: '二级 2-1'
        }]
      }, {
        id: '4',
        label: '04公司经营类',
        children: [{
          id: '401',
          label: '二级 2-1'
        }]
      }, {
        id: '5',
        label: '05日常业务办理类',
        children: [{
          id: '501',
          label: '二级 2-1'
        }]
      }, {
        id: '6',
        label: '06公司信息变更类',
        children: [{
          id: '601',
          label: '二级 2-1'
        }]
      }, {
        id: '7',
        label: '07定向发行及相关业务办理类',
        children: [{
          id: '701',
          label: '二级 2-1'
        }]
      }, {
        id: '8',
        label: '08优先股及相关业务办理类',
        children: [{
          id: '801',
          label: '二级 2-1'
        }]
      }, {
        id: '9',
        label: '09固定收益类',
        children: [{
          id: '901',
          label: '二级 2-1'
        }]
      }, {
        id: '10',
        label: '10重大资产重组类',
        children: [{
          id: '1001',
          label: '二级 2-1'
        }]
      }, {
        id: '11',
        label: '11收购类',
        children: [{
          id: '1101',
          label: '二级 2-1'
        }]
      }, {
        id: '12',
        label: '12股权相关类',
        children: [{
          id: '1201',
          label: '1201股权解除质押公告',
          content: 'bulletin'
        }, {
          id: '1202',
          label: '1202股权解除质押公告修订',
          content: 'bulletin-edit'
        }, {
          id: '1203',
          label: '1203股权司法拍卖、托管、设定信托等其他类别公告'
        }, {
          id: '1204',
          label: '1204股权受限解除公告'
        }, {
          id: '1205',
          label: '1205股权异常波动公告'
        }, {
          id: '1299',
          label: '1299其他股权相关公告'
        }]
      }, {
        id: '13',
        label: '13股权激励类类',
        children: [{
          id: '1301',
          label: '二级 2-1'
        }]
      }, {
        id: '14',
        label: '14员工持股计划类',
        children: [{
          id: '1401',
          label: '二级 2-1'
        }]
      }, {
        id: '15',
        label: '15股份回购类',
        children: [{
          id: '1501',
          label: '二级 2-1'
        }]
      }, {
        id: '16',
        label: '16风险事项类',
        children: [{
          id: '1601',
          label: '二级 2-1'
        }]
      }, {
        id: '17',
        label: '17诚信情况类',
        children: [{
          id: '1701',
          label: '二级 2-1'
        }]
      }, {
        id: '18',
        label: '18终止挂牌类公告',
        children: [{
          id: '1801',
          label: '二级 2-1'
        }]
      }, {
        id: '19',
        label: '19做市类公告',
        children: [{
          id: '1901',
          label: '二级 2-1'
        }]
      }, {
        id: '20',
        label: '20股票公开发行及相关业务办理类',
        children: [{
          id: '2001',
          label: '二级 2-1'
        }]
      }, {
        id: '99',
        label: '99其他',
        children: [{
          id: '9901',
          label: '二级 2-1'
        }]
      }, {
        id: '100',
        label: '00券商公告',
        children: [{
          id: '10001',
          label: '二级 2-1'
        }]
      }, {
        id: '101',
        label: 'AA首次信息披露'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    addTab(node) {
      if(!node.children && node.content) {
        this.editableTabs.push({
          title: node.label,
          name: node.id,
          content: node.content
        });
        this.editableTabsValue = node.id;
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>

<style>
#layout {
  display: flex;
}
#sider {
  width: 20%;
  border-right: 1px solid rgba(247, 249, 251, 1);
}
#logo {
  display: flex;
  align-items: center;
  background: rgba(247, 249, 251, 1);
}
#content {
  width: 80%;
}
#tree .el-card {
  box-shadow: none;
  border-radius: 0;
  border: none;
}
#tree .el-card .el-card__header {
  padding: 10px 10px 10px 20px;
  background: rgba(235, 238, 242, 1);
}
.el-card .el-card__body {
  padding: 10px;
}
#content .el-tabs {
  height: 100%;
}
#content .el-tabs__header {
  margin-bottom: 0;
  border-bottom: none;
  height: 41px;
  background: rgba(247, 249, 251, 1);
}
#content .el-tabs .el-tabs__nav {
  border-radius: 0px;
  border: none;
  background: #fff;
}
#content .el-tabs__content {
  height: 100%;
}
#content .el-tab-pane {
  height: 100%;
}
</style>

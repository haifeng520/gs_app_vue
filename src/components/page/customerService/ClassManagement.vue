<template>

  <el-card shadow="always" style="overflow: auto;">
    <el-row>
      <el-button @click="handleAddClass" type="primary" style="margin: 0 0 15px 0;"><i class="el-icon-circle-plus"></i> 新增班级</el-button>
    </el-row>
    <!-- 检索功能 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item title="检索功能" name="1">
        <el-form :model="formData" label-width="100px" class="demo-ruleForm" ref="formData">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="课程" prop="courseId">
                <el-select v-model="formData.courseId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="班级名称" prop="showClassName">
                <el-input v-model="formData.showClassName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="班级状态" prop="classStatus">
              <el-select v-model="formData.classStatus" placeholder="请选择">
                  <el-option label="无" value="0"></el-option>
                  <el-option label="进行中" value="1"></el-option>
                  <el-option label="已取消" value="2"></el-option>
                  <el-option label="以结束" value="3"></el-option>
                  <el-option label="已删除" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="开课时段" prop="beginDate">
                <el-date-picker
                  v-model="formData.beginDate"
                  type="datetimerange"
                  align="right"
                  style="width: 100%"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="timestamp"
                  :default-time="['00:00:00']">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="科目" prop="subId">
                <el-select v-model="formData.subId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年级" prop="gradeId">
              <el-select v-model="formData.gradeId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="课程类型" prop="classType">
                <el-select v-model="formData.classType" placeholder="请选择">
                  <el-option label="V课" value="0"></el-option>
                  <el-option label="拼课" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否推荐" prop="isRecommend">
                <el-select v-model="formData.isRecommend" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否促销" prop="isPromotion">
              <el-select v-model="formData.isPromotion" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="教师" prop="showTeacherName">
                <el-input v-model="formData.showTeacherName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-row>
                <el-form-item label="校区：">
                  <el-col :span="5">
                    <el-form-item prop="provinceId">
                      <el-select v-model="formData.provinceId" placeholder="请选择">
                        <el-option
                          v-for="item in options_1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="cityId">
                      <el-select v-model="formData.cityId" placeholder="请选择">
                        <el-option
                          v-for="item in options_2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="districtId">
                      <el-select v-model="formData.districtId" placeholder="请选择">
                        <el-option
                          v-for="item in options_3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="camId">
                      <el-select v-model="formData.camId" placeholder="请选择">
                        <el-option
                          v-for="item in options_4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-form-item>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-button type="primary" @click="handleSearch">搜索</el-button>
                <el-button @click="handleFormData('formData')">重置</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="8">
            </el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <!-- 表格 -->
    <div>班级列表</div>
    <el-table
      :data="tableData"
      border
      :highlight-current-row="true"
      :stripe="true"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      style="width: 100%;">
      <el-table-column
        fixed
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        prop="showClassName"
        label="班名"
        width="220">
      </el-table-column>
      <el-table-column
        prop="campusName"
        label="校区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="subName"
        label="科目"
        width="80">
      </el-table-column>
      <el-table-column
        prop="gradeName"
        label="年级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="educationalType"
        label="学年制"
        width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.educationalType === 0">六三制</span>
          <span v-else-if="scope.row.educationalType === 1">五四制</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="classType"
        label="课程类型"
        width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.classType === 0">V课</span>
          <span v-else-if="scope.row.classType === 1">拼课</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="课程"
        width="80">
      </el-table-column>
      <el-table-column
        prop="classBeginTime"
        label="上课时间"
        width="80">
      </el-table-column>
      <el-table-column
        prop="beginDate"
        label="开课日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="endDate"
        label="结课日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="classStatus"
        label="课程状态"
        width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.classStatus === 0">无</span>
          <span v-else-if="scope.row.classStatus === 1">进行中</span>
          <span v-else-if="scope.row.classStatus === 2">已取消</span>
          <span v-else-if="scope.row.classStatus === 3">已结束</span>
          <span v-else-if="scope.row.classStatus === 4">已结束</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="showTeacherName"
        label="教师名称"
        width="160">
        <template slot-scope="scope">
          <el-button v-if="scope.row.showTeacherName === ''" type="primary" size="mini">添加</el-button>
          <span v-if="scope.row.showTeacherName !== ''"><span class="btn">{{scope.row.showTeacherName}}</span>---<span class="btn" @click="removeTeacher(scope.row)">移除</span></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="isRecommend"
        label="是否推荐"
        width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.isRecommend === '0'">否</span>
          <span v-else-if="scope.row.isRecommend === '1'">是</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="isPromotion"
        label="是否促销"
        width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.isPromotion === '0'">否</span>
          <span v-else-if="scope.row.isPromotion === '1'">是</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="originalPrice"
        label="班级原价"
        width="80">
      </el-table-column>
      <el-table-column
        prop="presentPrice"
        label="班级现价"
        width="80">
      </el-table-column>
      <el-table-column
        prop="materialCharge"
        label="材料费"
        width="80">
      </el-table-column>
      <el-table-column
        prop="otherCharge"
        label="其他杂费"
        width="80">
      </el-table-column>
      <el-table-column
        prop="onSignUpUpper"
        label="报名上限"
        width="80">
      </el-table-column>
      <el-table-column
        prop="onSignUpNum"
        label="报名人数"
        width="80">
        <template slot-scope="scope">
          <el-input v-model="scope.row.onSignUpNum" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="sections"
        label="总课时（节/次）"
        width="130">
      </el-table-column>
      <el-table-column
        label="编辑信息"
        width="230">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.row)"
            size="mini">编辑信息</el-button>
          <el-button
            @click="handleEditChange(scope.row.id)"
            size="mini">进入编辑页面</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="500">
        <template slot-scope="scope">
          <el-button
            @click="ccc(scope.row)"
            size="mini">查看已排节次</el-button>
          <el-button
            size="mini">查看已上节次</el-button>
          <el-button size="mini">取消</el-button>
          <el-button size="mini" type="warning">结束</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
    <!-- 编辑信息对话框 -->
    <el-dialog
      title="编辑信息"
      :visible.sync="editDialogVisible"
      width="30%">
      <el-form ref="form" :model="editDialogData" label-width="80px">
        <el-form-item label="上课时间">
          <el-time-select
            v-model="editDialogData.classBeginTime"
            :picker-options="{
              start: '04:00',
              step: '00:30',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
        </el-form-item>
        <el-form-item label="是否推荐">
          <template>
            <el-radio v-model="editDialogData.isRecommend" label="0">否</el-radio>
            <el-radio v-model="editDialogData.isRecommend" label="1">是</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="是否促销">
          <template>
            <el-radio v-model="editDialogData.isPromotion" label="0">否</el-radio>
            <el-radio v-model="editDialogData.isPromotion" label="1">是</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="班级原价">
          <el-input v-model="editDialogData.originalPrice" placeholder="请输入金额"></el-input>
        </el-form-item>
        <el-form-item label="班级现价">
          <el-input v-model="editDialogData.presentPrice" placeholder="请输入金额"></el-input>
        </el-form-item>
        <el-form-item label="材料费">
          <el-input v-model="editDialogData.materialCharge" placeholder="请输入金额"></el-input>
        </el-form-item>
        <el-form-item label="其他杂费">
          <el-input v-model="editDialogData.otherCharge" placeholder="请输入金额"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>

</template>

<script>
export default {
  data() {
    return {
      /* 班级管理 */
      activeNames: ['1'],
      formData: {
        courseId: '',
        showClassName: '',
        classStatus: '',
        beginDate: '',
        endDate: '',
        subId: '',
        gradeId: '',
        classType: '',
        isRecommend: '',
        isPromotion: '',
        showTeacherName: '',
        provinceId: '',
        cityId: '',
        districtId: '',
        camId: ''
      },
      tableData: [
        {
          showClassName: '高一数学进阶班-香港中路校区阶班-香港中路校区',
          campusName: '中山路校区中山路校区中山路校区中山路校区',
          subName: '数学',
          gradeName: '高一',
          educationalType: 0,
          classType: 0,
          courseName: '暑假',
          classBeginTime: '05：00',
          beginDate: '2019-07-08',
          endDate: '2019-07-08',
          classStatus: 0,
          showTeacherName: '大饼',
          isRecommend: '0',
          isPromotion: '0',
          originalPrice: '100',
          presentPrice: '80',
          materialCharge: '0',
          otherCharge: '0',
          onSignUpUpper: '10',
          onSignUpNum: '8',
          sections: '2'
        }
      ],
      options_1: [{ value: '选项1', label: '黄金糕' }],
      options_2: [{ value: '选项1', label: '黄金糕' }],
      options_3: [{ value: '选项1', label: '黄金糕' }],
      options_4: [{ value: '选项1', label: '黄金糕' }],
      // 编辑信息对话框
      editDialogVisible: false,
      // 对话框表单数据
      editDialogData: {},
    
    };
  },
  methods: {
    /* 班级管理 */
    // 重置表单  两个方法 注意
    handleFormData(formName) {
      // this.formData = {};
      this.$refs[formName].resetFields();
    },
    handleSearch() {
      console.log(this.formData);
    },
    cellStyle({row, column, rowIndex, columnIndex}) {
      return "text-align: center";
    },
    rowClass({row, rowIndex}) {
      return "text-align: center";
    },
    // 编辑信息
    handleEdit(obj) {
      // 打开对话框
      this.editDialogVisible = true;
      this.editDialogData = obj;
    },
    // 点击编辑页面
    handleEditChange(id) {
      this.$router.push({
        name: "editClass",
        params: {id: 1}
      });
    },
    // 点击添加班级 展示添加班级
    handleAddClass() {
      this.$router.push('/classmanagement/add');
    },
    // 移除教师
    removeTeacher(obj) {
      this.$confirm('此操作将移除该教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    ccc(obj) {
      console.log(obj);
      
    }
  }
};
</script>

<style>
.el-select {
  display: block;
}
.btn {
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-table .cell {
  box-sizing: border-box;
  word-break: break-all;
  line-height: 23px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

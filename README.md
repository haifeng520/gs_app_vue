
## 安装步骤 ##

npm install       

// 开启服务器，浏览器访问 http://localhost:8033
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build

// 执行测试命令，生成的test文件夹放在服务器下即可访问
npm run test

### 切换主题色呢 ###

第一步：打开 src/main.js 文件，找到引入 element 样式的地方，换成浅绿色主题。

```javascript
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
```

第二步：打开 src/App.vue 文件，找到 style 标签引入样式的地方，切换成浅绿色主题。

```javascript
@import "../static/css/main.css";
@import "../static/css/color-dark.css";     /*深色主题*/
/*@import "../static/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

第三步：打开 src/components/common/Sidebar.vue 文件，找到 el-menu 标签，把 background-color/text-color/active-text-color 属性去掉即可。

## License

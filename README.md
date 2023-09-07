# Vue3-big-event

This template should help get you started developing with Vue 3 in Vite.
# steps
```
项目初始化配置
    npm install -g pnpm
    pnpm create vue  
    pinia router eslint prettier 
      
    husky 配置
        git初始化 git init
        pnpm dlx husky-init && pnpm install
        修改 .husky/pre-commit 文件
            pnpm lint
        全量检查 费时    
    暂存区eslint校验
        lint-staged 配置
            pnpm i lint-staged -D
            配置 package.json
            修改 .husky/pre-commit 文件
                pnpm lint-staged        
                
Vue Router 4 
    获取路由对象
        const router = useRouter()
    获取路由参数
        const route = useRoute()

Element Plus 引入使用
Pinia
     持久化配置（pinia-plugin-persistedstate 插件）
     独立维护（从main.js分离开）
     仓库统一导出（在index.js中导出）
        export * from './xxx/xxx'
Axios 配置
    基础地址，超时时间
    携带token
    处理业务失败
    摘取核心响应数据
    处理401错误
配置路由
     一级路由
     二级路由
     异步组件
登录页静态
    1. 结构相关
      el-row表示一行，一行分成24份 
       el-col表示列  
       (1) :span="12"  代表在一行中，占12份 (50%)
       (2) :span="6"   表示在一行中，占6份  (25%)
       (3) :offset="3" 代表在一行中，左侧margin份数

       el-form 整个表单组件
       el-form-item 表单的一行 （一个表单域）
       el-input 表单元素（输入框） :prefix-icon  
表单校验       
    整个表单的校验规则
         1. 非空校验 required: true      message消息提示，  trigger触发校验的时机 blur change
         2. 长度校验 min:xx, max: xx
         3. 正则校验 pattern: 正则规则    \S 非空字符
         4. 自定义校验 => 自己写逻辑校验 (校验函数)
            validator: (rule, value, callback)
            (1) rule  当前校验规则相关的信息
            (2) value 所校验的表单元素目前的表单值
            (3) callback 无论成功还是失败，都需要 callback 回调
                - callback() 校验成功
                - callback(new Error(错误信息)) 校验失败
         预校验 validate方法
封装注册api
登陆页面校验
封装登录api
获取用户信息 持久化 渲染用户信息
退出登录操作           
搭建文章分类架子 card组件
文章分类渲染  封装获取文章分类api
添加分类弹层    dialog组件  父子通信
文章分类组件封装  
        父子通信
        :modelValue=""
        @update:modelValue
封装获取文章列表api 动态渲染
    
    
```
## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

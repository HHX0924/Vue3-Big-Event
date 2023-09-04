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

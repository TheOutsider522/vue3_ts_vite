# 基于Vite构建工具的Vue3 + TypeScript初始化项目

## 初始化项目

```bash
pnpm create vite

pnpm install

pnpm run dev
```

## 项目配置

### 1、eslint配置

> 提供一个插件化的javascript代码检测工具

1. 安装`eslint`

```bash
pnpm install eslint -D
```

2. 生成配置文件

```bash
npx eslint --init
```

 <img src="C:\Users\TheOutsider\AppData\Roaming\Typora\typora-user-images\image-20231109184437463.png" alt="image-20231109184437463" style="zoom: 67%;" />

3. 添加vue3环境代码校验插件

- 让所有与`prettier`规则存在冲突的`Eslint rules`失效，并使用`prettier`进行代码检查

  ```javascript
  "eslint-config-prettier": "^8.6.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-node": "^11.1.0",
  ```

- 运行更漂亮的`Eslint`，使`prettier`规则优先级更高，`Eslint`优先级低

  ```javascript
  "eslint-plugin-prettier": "^4.2.1",
  ```

- `vue.js`的`Eslint`插件（查找`vue`语法错误，发现错误指令，查找违规风格指南

  ```javascript
  "eslint-plugin-vue": "^9.9.0",
  ```

- 该解析器允许使用`Eslint`校验所有`babel code`

  ```javascript
  "@babel/eslint-parser": "^7.19.1",
  ```

  3.1、安装插件

```bash
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

3.2、修改`.eslintrc.cjs`配置文件

```javascript
module.exports = {
  /**
   * 运行环境
   */
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  /**
   * 规则继承
   */
  extends: [
    // 开启推荐规则
    'eslint:recommended',
    // ts语法规则
    'plugin:@typescript-eslint/recommended',
    // vue3语法规则
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],

  /**
   * 为特定类型的文件指定处理器
   */
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  /**
   * 指定解析器及其解析器选项
   */
  parserOptions: {
    // 校验ECMA最新版本
    ecmaVersion: 'latest',
    // 指定ts-解析器
    parser: '@typescript-eslint/parser',
    /**
     * 默认: "script"
     * "module"代码在ECMAScript模块中
     */
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },

  /**
   * ESLint支持使用第三方插件, 但在使用之前,需要先安装(npm)
   * eslint-plugin- 前缀可以省略
   */
  plugins: ['@typescript-eslint', 'vue'],

  /**
   * ESLint规则配置
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
}
```

3.4、添加`.eslintignore`忽略文件

```javascript
dist
node_modules
```

3.5、修改运行脚本

> 在`package.json`新增两个运行脚本

- `"lint": "eslint src"`

  > 检测`src`下的代码

- `"fix": "eslint src --fix"`

  > 检测并修复`src`下的代码

```json
"scripts": {
    "lint": "eslint src",
    "fix": "eslint src --fix",
}
```

### 2、prettier配置

> `prettier`属于格式化工具， `eslint`和`prettier`一个保证JavaScript代码质量，一个保证代码美观

1. 安装依赖

```bash
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

2. 创建`prettierrc.json`配置文件并添加规则

```json
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

3. 创建`.prettierignore`忽略文件

```javascript
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

### 3、stylelint配置

> [stylelint](https://stylelint.io/)为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。

1. 安装依赖

```bash
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

2. `.stylelintrc.cjs`配置文件



































[【从零到一手撕脚手架 | 第三节】项目集成CommitLInt+ESLint+Prettier+StyleLint+LintStaged-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1180656)

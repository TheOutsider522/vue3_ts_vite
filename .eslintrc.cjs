module.exports = {
    /**
     * 运行环境
     */
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true,
    },

    /**
     * 规则继承
     */
    "extends": [
        // 开启推荐规则
        "eslint:recommended",
        // ts语法规则
        "plugin:@typescript-eslint/recommended",
        // vue3语法规则
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended",
    ],

    /**
     * 为特定类型的文件指定处理器
     */
    "overrides": [

    ],

    /**
     * 指定解析器及其解析器选项
     */
    "parserOptions": {
        // 校验ECMA最新版本
        "ecmaVersion": "latest",
        // 指定ts-解析器
        "parser": "@typescript-eslint/parser",
        /**
         * 默认: "script"
         * "module"代码在ECMAScript模块中
         */
        "sourceType": "module",
        "parser": '@typescript-eslint/parser',
        "jsxPragma": 'React',
        "ecmaFeatures": {
            "jsx": true,
        },
    },

    /**
     * ESLint支持使用第三方插件, 但在使用之前,需要先安装(npm)
     * eslint-plugin- 前缀可以省略
     */
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],

    /**
     * ESLint规则配置
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    "rules": {
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
    }
}

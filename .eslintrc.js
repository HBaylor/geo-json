// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-proto': 2, //禁止使用__proto__属性
    'no-return-assign': 1, //return 语句中不能有赋值表达式
    'no-self-compare': 2, //不能比较自身
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-extra-semi': 2, //禁止多余的分号
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'no-redeclare': 2, //禁止重复声明变量
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-unused-vars': [
      //不能有声明后未被使用的变量或参数
      2,
      {
        vars: 'all',
        // args: 'after-used'
        args: 'none'
      }
    ],
    'key-spacing': [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ], //对象字面量中冒号的前后空格
    eqeqeq: 2, //必须使用全等
    'prefer-const': 0, //首选const
    'prefer-spread': 0, //首选展开运算
    quotes: ['error', 'single'], //单引号
    'vue/max-attributes-per-line': [
      //多属性换行，第一个属性例外
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ]
  }
}

# eslint-prettier-husky

```
npm install --save-dev eslint-config-eslint-prettier-husky
```

package.json
```
"eslintConfig": {
    "extends": [
      "eslint-prettier-husky/react"
    ]
  },
  "prettier": "eslint-config-eslint-prettier-husky/prettier.js",
```

基于vscode ，安装 eslint插件, 主要作用是保存文件时，vscode触发eslint插件，eslnt插件触发eslint校验，eslint包触发prettier格式化

配置 vscode的setting
```
 "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
 }
```

#### 如果要用到prettier插件
配置 vscode的setting
```
 "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.formatOnSave": true,
```
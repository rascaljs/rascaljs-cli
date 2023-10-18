# rascaljs-cli

一个小瘪三的命令行工具

## Usage

### install

```bash
pnpm i -D rascaljs-cli
```

### Use command

```bash
pnpm rascal -h
```

## 命令介绍

| 命令              | 作用                                     |
| ----------------- | ---------------------------------------- |
| help              | 查看全部命令用法                         |
| git-commit        | 生成符合 Angular 规范的 git 提交信息     |
| git-commit-verify | 校验 git 的提交信息是否符合 Angular 规范 |
| cleanup           | 清空依赖和构建产物                       |
| init-git-hooks    | 初始化 simple-gi t-hooks 钩子            |
| release           | 版本发布，自动变更版本，生成日志 CHANGELOG.md |
| update-pkg        | 升级依赖                                 |
| prettier-format   | prettier 格式化                          |

### prettier-format

底层调用 prettier --write 达到格式化文件的目的

默认忽略的格式化文件：

- js,jsx,mjs,cjs,json,ts,tsx,mts,cts,vue
  > 以上文件通过 eslint 去格式化
- node_modules
- _.min._
- CHANGELOG.md
- dist
- LICENSE\*
- output
- coverage
- public
- temp
- package-lock.json
- pnpm-lock.yaml
- yarn.lock
- **snapshots**

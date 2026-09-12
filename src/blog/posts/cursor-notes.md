---
author: CallumRen
pubDatetime: 2026-07-10T00:00:00+08:00
title: AI 编程工具与 Cursor 实战指南
featured: true
draft: false
tags:
  - Cursor
  - AI
  - Skills
description: 梳理 TRAE、Qoder、Cursor、Codex、Claude Code 的定位差异，以及 Cursor 的模型选择、会员计费和 Agent Skills 实践。
timezone: Asia/Shanghai
---

梳理 TRAE、Qoder/Qwen Code、Cursor、OpenAI Codex、Claude Code 的分工，以及 Cursor 里如何选模型、看会员计费、写 Agent Skills。

## Table of contents

## 一、核心结论

### 1. 工具和模型不是同一层概念

需要首先区分三个层次：

```text
AI 编程产品
├─ 编辑器或工作台：Cursor、TRAE、Qoder
├─ 编程 Agent：Codex、Claude Code、Qwen Code
└─ 底层模型：GPT、Claude、Gemini、Grok、Kimi、GLM 等
```

例如：

- Cursor 是一个 AI 编程平台，不是某一个大模型。
- Claude Sonnet、Claude Opus 是模型。
- Claude Code 是使用 Claude 模型完成代码任务的 Agent 产品。
- Codex 是 OpenAI 的编程 Agent，也可以在终端、IDE 和云端工作。
- Cursor 可以在一个界面中调用不同厂商的模型。

### 2. 没有任何模型在所有场景中都最好

选择模型要看：

- 任务复杂度；
- 项目上下文大小；
- 是否需要运行命令和测试；
- 是否涉及大量跨文件修改；
- 对速度、质量和成本的要求；
- 是否需要视觉理解或截图转前端；
- 是否希望 Agent 长时间自主执行。

### 3. Cursor 已经从“按请求次数”转向“按模型用量计费”

当前核心逻辑是：

```text
会员订阅费
= 产品功能权限
+ 套餐内模型使用额度
+ 第一方模型或 Auto 的相应使用池

超出套餐额度后
= 是否继续收费，取决于 On-Demand Usage 设置
```

第三方前沿模型通常根据实际 Token 用量和对应模型费率扣除额度，而不是简单地按“点击一次”或“发送一条消息”计费。

### 4. Skill 是 Agent 的可复用标准作业流程

Skill 不是模型，也不是插件本身，而是一套按需加载的：

- 专业知识；
- 执行步骤；
- 检查清单；
- 命令或脚本；
- 输出规范；
- 风险边界。

一句话区分：

> **Rules 规定必须遵守什么，Skills 规定一件事情应该怎么做。**

---

## 二、AI 编程工具的基本分类

### 2.1 AI 原生编辑器或开发工作台

代表产品：

- Cursor
- TRAE
- Qoder

共同特点：

- 提供完整代码编辑界面；
- 支持项目代码索引；
- 支持对话、补全和多文件编辑；
- 可以让 Agent 运行命令和测试；
- 适合作为日常主力开发环境。

### 2.2 终端、IDE 和云端编程 Agent

代表产品：

- OpenAI Codex
- Claude Code
- Qwen Code

共同特点：

- 可以直接进入现有项目目录工作；
- 读取、搜索和修改项目文件；
- 调用 Shell、Git、测试工具和构建命令；
- 不一定要求更换现有 IDE；
- 更适合工程化、自动化和长期任务。

### 2.3 两类产品正在逐渐融合

现在的趋势已经不是“编辑器”和“Agent”二选一：

- Cursor 同时提供编辑器、CLI、云端 Agent 和自动化；
- Codex 同时覆盖 CLI、IDE 扩展、桌面端和云端；
- Claude Code 同时覆盖终端、IDE、桌面和 Web；
- TRAE、Qoder 也在强化自主执行模式。

---

## 三、TRAE、Qoder、Cursor、Codex、Claude Code 对比

> “qcode”可能指 **Qoder**，也可能指 **Qwen Code**。二者是不同产品。

### 3.1 核心对比

| 工具 | 主要形态 | 核心特点 | 更适合的用户 | 主要注意点 |
|---|---|---|---|---|
| **TRAE** | 独立 AI IDE | IDE 与 SOLO Agent 结合，强调从需求到项目交付 | 中文用户、新手、产品原型、网页和内部工具开发 | 大型复杂工程的精细控制和生态成熟度需要结合项目验证 |
| **Qoder** | 独立 AI IDE、Agent 平台 | 强调 Repo Wiki、项目知识和长期代码库理解 | 接手陌生项目、遗留系统、大型长期维护项目 | 社区和第三方生态相对 Cursor 较小 |
| **Cursor** | AI 原生编辑器、Agent 工作台、CLI、云端 | 多模型、补全、Agent、多文件修改、Rules、Skills、MCP 综合能力均衡 | 日常主力开发、全栈开发、团队协作 | 不同模型价格差异很大，需要管理额度 |
| **OpenAI Codex** | CLI、IDE 扩展、桌面和云端 Agent | 本地执行与云端委派结合，适合并行任务、自动化和 CI | OpenAI/ChatGPT 用户、工程自动化、多个任务并行执行 | 不是以独立 IDE 为唯一核心，体验依赖所使用的宿主环境 |
| **Claude Code** | 终端、IDE、桌面和 Web Agent | 复杂代码库理解、重构、调试和长期执行能力突出 | 后端、基础设施、复杂工程和终端用户 | 复杂任务可能消耗较多额度，对新手有一定学习成本 |
| **Qwen Code** | 开源终端编程 Agent | 偏终端和开源生态，可配合 Qwen 系列模型 | 中文开发、私有化或可定制 Agent 工作流 | 与 Qoder 不是同一个产品 |

### 3.2 每个工具的一句话定位

#### TRAE

> 更像“通过自然语言帮助用户把一个项目做出来”的完整工作台。

适合：

- 快速生成原型；
- 前端网页；
- 管理后台；
- 内部工具；
- 不希望频繁配置终端环境的用户。

#### Qoder

> 更强调让 AI 长期理解项目，而不只是临时生成代码。

特色方向：

- Repo Wiki；
- 项目文档自动化；
- 代码结构理解；
- 项目知识沉淀；
- 陌生代码库导航。

#### Cursor

> 当前最均衡的 AI 编程主力编辑器之一。

优势在于把以下能力放在统一工作区：

- Tab 智能补全；
- 对话和局部编辑；
- 项目索引；
- 多文件 Agent；
- 模型切换；
- Rules；
- Skills；
- MCP；
- Hooks；
- Subagents；
- 云端 Agent。

#### Codex

> 更像可以被委派任务的 OpenAI 编程执行 Agent。

典型任务：

```text
修复并发问题；
补充单元测试；
运行测试；
分析失败原因；
完成修改；
给出变更摘要。
```

适合：

- 终端开发；
- CI/CD；
- 脚本化调用；
- 本地与云端切换；
- 多个独立任务并行执行。

#### Claude Code

> 更适合深度进入一个工程，在终端环境中持续分析、修改、测试和迭代。

典型优势：

- 大范围重构；
- 复杂调用链分析；
- 疑难 Bug；
- 后端与基础设施；
- Docker、Git、数据库和部署命令；
- 长时间 Agent 循环。

### 3.3 最实用的选型建议

| 需求 | 建议 |
|---|---|
| 只安装一个主力 AI 编辑器 | Cursor |
| 中文为主、快速做完整项目 | TRAE |
| 经常接手大型或陌生代码库 | Qoder |
| 已经深度使用 ChatGPT/OpenAI | Codex |
| 经常做复杂后端、重构和调试 | Claude Code |
| 希望使用开源终端 Agent | Qwen Code |
| 专业开发者组合 | Cursor 负责日常编辑，Codex 或 Claude Code 负责复杂任务 |

---

## 四、Cursor 中的模型生态

### 4.1 Cursor 自身不等于某一个模型

Cursor 主要提供的是：

1. 代码编辑和 Agent 交互界面；
2. 项目索引和上下文管理；
3. 文件读取、修改和命令执行工具；
4. Agent 调度机制；
5. 多模型接入；
6. 用量管理和计费体系。

即使调用同一个底层模型，在 Cursor、Claude Code、Codex 或其他工具中的表现也可能不同，因为：

- 系统提示词不同；
- 代码检索策略不同；
- 上下文压缩方式不同；
- 工具调用策略不同；
- Agent 循环不同；
- 权限和沙箱不同。

### 4.2 模型厂商分类

| 厂商或体系 | 截图中的模型 |
|---|---|
| **Cursor / SpaceXAI** | Composer 2.5、Cursor Grok 4.5 |
| **Anthropic** | Fable 5、Opus 4.5–4.8、Sonnet 4–5、Haiku 4.5 |
| **OpenAI GPT** | GPT-5 Mini、GPT-5.1、GPT-5.2、GPT-5.4、GPT-5.5、GPT-5.6 Sol/Terra/Luna |
| **OpenAI Codex** | Codex 5.1 Mini、Codex 5.1 Max、Codex 5.2、Codex 5.3 |
| **Google** | Gemini 2.5 Flash、Gemini 3 Flash、Gemini 3.1 Pro、Gemini 3.5 Flash |
| **Moonshot AI** | Kimi K2.7 Code |
| **Z.ai** | GLM 5.2 |

### 4.3 模型层级的常见命名逻辑

#### Anthropic

```text
Fable：最高能力和最长任务
Opus：旗舰级复杂推理和工程任务
Sonnet：能力、速度、成本平衡
Haiku：高速、低成本
```

#### OpenAI GPT-5.6

```text
Sol：旗舰
Terra：中型、平衡
Luna：小型、低成本
```

#### OpenAI Codex

Codex 系列更偏：

- 编程 Agent；
- 多文件修改；
- 终端操作；
- 测试循环；
- 代码审查；
- 长任务执行。

#### Google Gemini

```text
Pro：高能力和复杂推理
Flash：速度、成本和多模态平衡
```

---

## 五、Cursor 模型完整分类与参考价格

### 5.1 阅读价格表的方法

以下价格统一按照：

```text
美元 / 100 万 Token
```

顺序为：

```text
普通输入 / 缓存写入 / 缓存读取 / 输出
```

例如：

```text
$3 / $3.75 / $0.30 / $15
```

表示：

- 输入：3 美元/百万 Token；
- 缓存写入：3.75 美元/百万 Token；
- 缓存读取：0.30 美元/百万 Token；
- 输出：15 美元/百万 Token。

> **重要提示：** 模型价格、促销、Max 模式加价、账户地区和模型可用性可能变化。以下表格用于讲座理解和横向比较，正式使用前应以 Cursor 的 **Models & Pricing** 页面及个人 Usage 面板为准。

### 5.2 Cursor 第一方模型

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **Cursor Grok 4.5** | `$2 / — / $0.50 / $6` | 高能力第一方 Agent 模型 | 长时间自主编程、多文件修改、知识工作；输出成本低于部分旗舰模型 |
| **Composer 2.5** | `$0.50 / — / $0.20 / $2.50` | Cursor 自研高性价比模型 | 日常 Agent、代码搜索、小中型修改、测试和低成本快速迭代 |

#### 使用建议

- 日常默认：**Composer 2.5**
- 更复杂的自主任务：**Cursor Grok 4.5**
- 高频小修改和脚手架：优先 Composer

### 5.3 Anthropic Claude 系列

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **Fable 5** | `$10 / $12.50 / $1 / $50` | 顶级前沿模型 | 超复杂 Agent、从零构建项目、研究推理、长期自主任务；能力强但价格高 |
| **Opus 4.8** | `$5 / $6.25 / $0.50 / $25` | 最新 Opus 主力旗舰 | 大型代码库、复杂架构、深度调试、跨服务重构和代码审查 |
| **Opus 4.7** | `$5 / $6.25 / $0.50 / $25` | 上一代旗舰 | 高强度推理、复杂 Agent、难问题分析 |
| **Opus 4.6** | `$5 / $6.25 / $0.50 / $25` | 大型工程模型 | 代码库规划、审查、调试和长任务 |
| **Opus 4.5** | `$5 / $6.25 / $0.50 / $25` | 较早旗舰版本 | 长时间编码和复杂重构；主要用于兼容旧行为 |
| **Sonnet 5** | `$3 / $3.75 / $0.30 / $15` | 高性能平衡型号 | 持续编码、工具调用、调试、多步骤任务和复杂全栈开发 |
| **Sonnet 4.6** | `$3 / $3.75 / $0.30 / $15` | 上一代平衡主力 | 编码、电脑操作、长上下文和 Agent 规划 |
| **Sonnet 4.5** | `$3 / $3.75 / $0.30 / $15` | 精确编辑型号 | 精确代码编辑、前端开发、遵循既有代码风格 |
| **Sonnet 4** | `$3 / $3.75 / $0.30 / $15` | 较早版本 | 通用编码和推理，主要用于兼容 |
| **Haiku 4.5** | `$1 / $1.25 / $0.10 / $5` | 高速低成本 | 简单修改、单元测试、代码解释、格式转换和批量任务 |

#### Anthropic 选择建议

| 任务 | 推荐 |
|---|---|
| 日常高质量编程 | Sonnet 5 |
| 大型重构、复杂 Bug | Opus 4.8 |
| 极复杂任务、预算不敏感 | Fable 5 |
| 快速小修改 | Haiku 4.5 |
| 复现旧项目行为 | 对应旧版本 Sonnet 或 Opus |

### 5.4 OpenAI GPT 通用系列

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **GPT-5.6 Sol** | `$5 / $6.25 / $0.50 / $30` | GPT-5.6 旗舰 | 最复杂专业工作、长时间编程、工具调用、大型项目和研究分析 |
| **GPT-5.6 Terra** | `$2.50 / $3.125 / $0.25 / $15` | GPT-5.6 中型 | 中大型编码、架构修改和调试；性能与成本平衡 |
| **GPT-5.6 Luna** | `$1 / $1.25 / $0.10 / $6` | GPT-5.6 小型 | 高频编码、日常修复、批量任务和子 Agent |
| **GPT-5.5** | `$5 / — / $0.50 / $30` | 上一代高端旗舰 | 复杂专业工作、编码和长任务 |
| **GPT-5.4** | `$2.50 / — / $0.25 / $15` | 前沿平衡模型 | 编码、专业分析、架构规划、图片和截图理解 |
| **GPT-5.4 Mini** | `$0.75 / — / $0.075 / $4.50` | 强力小模型 | 快速代码编辑、代码库导航、调试循环、前端和子 Agent |
| **GPT-5.4 Nano** | `$0.20 / — / $0.02 / $1.25` | 最低成本型号 | 分类、抽取、排序、简单检查和批量机械任务 |
| **GPT-5.2** | `$1.75 / — / $0.175 / $14` | 较早推理模型 | 通用推理、Agent 编程和复杂问题 |
| **GPT-5.1** | `$1.25 / — / $0.125 / $10` | 较早平衡型号 | 通用编码、前端、PR 审查和工具调用 |
| **GPT-5 Mini** | `$0.25 / — / $0.025 / $2` | 初代低成本型号 | 简单代码、低延迟问答和批量生成 |

### 5.5 OpenAI Codex 编程系列

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **Codex 5.3** | `$1.75 / — / $0.175 / $14` | 当前高能力 Codex | 多文件修改、复杂 Bug、测试、终端操作、审查和长期 Agent |
| **Codex 5.2** | `$1.75 / — / $0.175 / $14` | 上一代 Codex | 长周期编程、工程修改和工具调用 |
| **Codex 5.1 Max** | `$1.25 / — / $0.125 / $10` | 长任务强化版 | 项目级重构、深度调试、持续运行测试并修复 |
| **Codex 5.1 Mini** | `$0.25 / — / $0.025 / $2` | 低成本 Codex | 小修复、生成测试、机械性修改和批量任务 |

#### GPT 与 Codex 的区别

| 需求 | 更适合 |
|---|---|
| 既要分析业务需求又要写代码 | GPT 系列 |
| 纯代码 Agent、多文件修改和测试循环 | Codex 系列 |
| 最复杂通用任务 | GPT-5.6 Sol |
| 性价比较好的复杂任务 | GPT-5.6 Terra |
| 高频低成本开发 | GPT-5.4 Mini 或 GPT-5.6 Luna |
| 长时间工程 Agent | Codex 5.3 |

### 5.6 Google Gemini 系列

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **Gemini 3.1 Pro** | `$2 / — / $0.20 / $12` | 高端推理模型 | 大型代码库、复杂工具调用、长上下文、图片/PDF/视频理解 |
| **Gemini 3.5 Flash** | `$1.50 / — / $0.15 / $9` | 新一代快速 Agent | 子 Agent、多步骤工作流、持续编程和批量复杂任务 |
| **Gemini 3 Flash** | `$0.50 / — / $0.05 / $3` | 低成本多模态模型 | 截图转网页、前端、Vibe Coding、多模态理解和快速迭代 |
| **Gemini 2.5 Flash** | `$0.30 / — / $0.03 / $2.50` | 老牌高性价比型号 | 大规模处理、低延迟、简单 Agent 和长文档理解 |

#### Gemini 选择建议

- 截图转页面和视觉前端：**Gemini 3 Flash**
- 大型代码库和复杂工具任务：**Gemini 3.1 Pro**
- 大量 Agent 工作流：**Gemini 3.5 Flash**
- 低成本文档和简单编码：**Gemini 2.5 Flash**

### 5.7 Moonshot Kimi 和 Z.ai GLM

| 模型 | 参考费率：输入/写入/读取/输出 | 定位 | 擅长领域与优势 |
|---|---:|---|---|
| **Kimi K2.7 Code** | `$0.95 / — / $0.19 / $4` | 中文和长上下文代码模型 | 代码 Agent、多文件修改、中英文交流、持续任务，价格较低 |
| **GLM 5.2** | `$1.40 / — / $0.26 / $4.40` | 超长上下文工程模型 | 大型仓库、长期 Agent、自动研究和性能优化 |

#### Kimi 与 GLM 的选择

| 维度 | Kimi K2.7 Code | GLM 5.2 |
|---|---|---|
| 成本 | 更低 | 略高 |
| 中文体验 | 强 | 强 |
| 核心优势 | 指令遵循、中文编程、性价比 | 超长代码库和长期工程任务 |
| 更适合 | 日常中文代码 Agent | 特大项目和长上下文分析 |

---

## 六、如何根据任务选择模型

### 6.1 按任务复杂度分层

#### 低成本快速层

适合：

- 改变量名；
- 写简单函数；
- 格式化；
- 添加注释；
- 生成机械性测试；
- 简单数据抽取；
- 批量修改。

推荐：

- Composer 2.5
- GPT-5.4 Nano
- GPT-5 Mini
- Codex 5.1 Mini
- Gemini 2.5 Flash
- Gemini 3 Flash
- Haiku 4.5

#### 日常主力层

适合：

- 开发普通功能；
- 排查常见 Bug；
- 多文件修改；
- 编写接口；
- 前后端联调；
- 编写和修复测试。

推荐：

- Sonnet 5
- GPT-5.6 Terra
- GPT-5.4
- Codex 5.3
- Gemini 3.1 Pro
- Cursor Grok 4.5
- Kimi K2.7 Code

#### 旗舰复杂层

适合：

- 架构设计；
- 大型重构；
- 难以定位的并发或状态问题；
- 跨服务修改；
- 高风险代码审查；
- 长时间自主任务；
- 研究型推理。

推荐：

- Fable 5
- Opus 4.8
- GPT-5.6 Sol

### 6.2 根据具体开发场景选择

| 场景 | 首选 | 备选 |
|---|---|---|
| 日常写功能、改接口 | Composer 2.5 | GPT-5.4 Mini |
| Python、Gradio 常规排错 | Sonnet 5 | GPT-5.6 Terra |
| 跨模块复杂重构 | Opus 4.8 | GPT-5.6 Sol |
| Agent 自主搜索、修改和测试 | Codex 5.3 | Cursor Grok 4.5 |
| 根据截图实现前端页面 | Gemini 3 Flash | Sonnet 5 |
| 大量简单重复任务 | GPT-5.4 Nano | Gemini 2.5 Flash |
| 中文需求、成本敏感 | Kimi K2.7 Code | GLM 5.2 |
| 超大仓库和超长上下文 | GLM 5.2 | Gemini 3.1 Pro |

### 6.3 推荐的日常组合

```text
默认模型：Composer 2.5
复杂功能和调试：Sonnet 5 或 GPT-5.6 Terra
多文件 Agent 任务：Codex 5.3
大型疑难重构：Opus 4.8
截图和视觉前端：Gemini 3 Flash
```

核心原则：

> 不要让最贵的模型完成所有任务。先用便宜模型定位和拆解，只有在复杂度确实较高时再升级模型。

---

## 七、Cursor 会员和用量计费

### 7.1 开通 Pro 后是否还有“免费额度”

更准确的说法不是“额外免费额度”，而是：

> 用户支付会员费后，套餐中已经包含一定的模型使用额度和产品功能。

Pro 会员费购买的是一个组合：

```text
Pro 订阅
├─ 更高的 Agent 使用限制
├─ Grok、Composer 等第一方模型的相应额度
├─ 第三方前沿模型的套餐内用量
├─ Tab 补全
├─ MCP
├─ Skills
├─ Hooks
├─ Cloud Agents
└─ 其他会员功能
```

因此：

- 不是支付会员费后所有模型无限使用；
- 也不是会员费之外又“白送一笔可以提现的钱”；
- 而是会员本身包含一部分可使用的模型预算。

### 7.2 当前主要按 Token，而不是按调用次数

过去 Cursor 曾经采用类似“每月若干次高级请求”的方式。

当前外部前沿模型主要按照：

```text
实际 Token 数量 × 对应模型价格
```

计算。

一次任务的费用大致为：

```text
费用 =
普通输入 Token × 输入单价
+ 缓存写入 Token × 缓存写入单价
+ 缓存读取 Token × 缓存读取单价
+ 输出或推理 Token × 输出单价
```

### 7.3 一条消息不等于一次模型调用

用户只发送一次指令，Agent 可能在后台完成：

1. 读取目录；
2. 搜索代码；
3. 读取多个文件；
4. 调用模型制定计划；
5. 修改文件；
6. 运行测试；
7. 分析报错；
8. 再次修改；
9. 调用子 Agent；
10. 汇总结果。

所以：

```text
一条用户消息
≠ 一次 API 调用
≠ 固定价格
```

### 7.4 费用计算示例

假设某模型价格为：

```text
输入：$3 / 100 万 Token
输出：$15 / 100 万 Token
```

某个任务消耗：

```text
输入：100,000 Token
输出：10,000 Token
```

费用约为：

```text
输入费用：100,000 ÷ 1,000,000 × $3 = $0.30
输出费用：10,000 ÷ 1,000,000 × $15 = $0.15

合计：$0.45
```

这笔费用通常先从套餐内模型使用额度扣除。

### 7.5 为什么 Agent 任务有时消耗很快

主要影响因素：

- 项目代码库很大；
- 对话历史很长；
- 每轮需要携带大量上下文；
- Agent 多次运行测试；
- 使用多个 Subagent；
- 模型开启高推理等级；
- 使用 Max 或超长上下文模式；
- 使用 Opus、Fable、旗舰 GPT 等高价模型；
- Agent 因测试失败反复循环。

### 7.6 两类常见额度池

当前可以用以下方式理解：

#### 第一方模型池

主要可能包括：

- Composer；
- Cursor Grok；
- Auto 路由中的相应第一方能力。

特点：

- 与指定第三方模型的 API 用量可能分开统计；
- 具体规则和剩余额度应查看账户 Usage 页面；
- 不同套餐的额度不同。

#### API 模型池

通常用于手动选择的：

- Claude；
- GPT；
- Codex；
- Gemini；
- Kimi；
- GLM 等。

特点：

- 按模型 Token 费率消耗；
- 模型越贵、上下文越长，扣减越快。

### 7.7 超出套餐额度后怎么办

Cursor 官方说明：套餐包含一定模型用量；使用完后，可以通过 **On-Demand Usage** 继续使用，并在之后结算。

账户中常见的控制方式包括：

#### 关闭按需使用

```text
On-Demand Usage：Disabled
```

效果：

- 套餐内对应额度用完后停止；
- 不继续产生额外模型费用；
- 等待下个计费周期，或主动升级/开启按需使用。

#### 设置固定额外上限

```text
On-Demand Usage：Fixed
Monthly Limit：$10
```

例如：

```text
Pro 会员费：$20
额外消费上限：$10

模型相关月度支出上限约为：$30
```

不包括税费、汇率和其他单独计费服务。

#### 不限制按需使用

```text
On-Demand Usage：Unlimited
```

效果：

- 额度用完后继续按实际 Token 计费；
- 可能在月中分批结算；
- 重度 Agent 或失控循环可能产生较高费用。

普通用户不建议直接开启 Unlimited。

### 7.8 安全的用量设置建议

```text
On-Demand Usage：Fixed
Monthly Limit：$5～$20
```

并定期查看：

- First Party Models；
- API Usage；
- 单次任务消耗；
- 哪些模型消耗最高；
- 是否出现异常 Agent 循环。

---

## 八、不开会员、Pro、Pro+、Ultra 和团队版的区别

> 套餐内容和额度可能动态调整，下列金额用于理解当前常见结构，最终以 Cursor 官方 Pricing 和个人账户页面为准。

### 8.1 个人套餐概览

| 套餐 | 常见月费 | 第三方/API 模型用量参考 | 第一方模型池 | 适合人群 |
|---|---:|---:|---|---|
| **Hobby** | `$0` | 有限 | 很有限 | 体验和偶尔使用 |
| **Pro** | `$20` | 常见约 `$20` 用量 | 独立额度 | 轻度到中度使用 |
| **Pro+** | `$60` | 常见约 `$70` 用量 | 高于 Pro | 每天使用 Agent |
| **Ultra** | `$200` | 常见约 `$400` 用量 | 显著高于 Pro+ | 重度和长时间 Agent 用户 |

### 8.2 Hobby 免费版

官方当前列出的主要特点：

- 无需信用卡；
- 有限 Agent 请求；
- 有限 Tab 补全。

适合：

- 初次体验；
- 偶尔询问代码；
- 小型项目和低频开发。

不适合：

- 每天长时间 Agent 开发；
- 大量多文件修改；
- 频繁使用旗舰模型；
- 长时间自主任务。

### 8.3 Pro

适合：

- 普通个人开发者；
- 不是每天长时间跑 Agent；
- 大多数任务使用 Composer；
- 偶尔使用 Sonnet、GPT、Codex 或 Gemini。

官方当前列出的 Pro 能力包括：

- 更高的 Agent 限额；
- Grok 和 Composer 的相应额度；
- 前沿模型访问；
- MCP、Skills 和 Hooks；
- Cloud Agents；
- 按用量计费的其他能力。

### 8.4 Pro+

适合：

- 每天使用 Agent；
- 每月第三方模型消耗明显高于 Pro；
- 经常使用 Sonnet、Codex、GPT 中高档模型；
- 希望减少频繁购买额外用量。

### 8.5 Ultra

适合：

- Agent 重度用户；
- 长时间自主开发；
- 多个并行任务；
- 大型工程；
- 经常使用高价旗舰模型；
- 对月度用量的可预测性要求较高。

### 8.6 简单的数学对比

只考虑 API 模型池，不考虑第一方额度、促销、税费和额外权益：

#### 每月使用约 70 美元第三方模型

```text
Pro：
$20 订阅 + 约 $50 额外用量
≈ $70

Pro+：
$60 订阅，套餐内常见约 $70 用量
≈ $60
```

#### 每月使用约 400 美元第三方模型

```text
Pro+：
$60 + 约 $330 额外用量
≈ $390

Ultra：
$200，套餐内常见约 $400 用量
≈ $200
```

这只是帮助理解的静态估算，并不代表官方承诺的固定盈亏线。

### 8.7 Teams 和 Enterprise

#### Teams

官方当前价格常见为：

```text
$40 / 用户 / 月
```

主要增加：

- 集中式团队账单和管理；
- 团队内部 Rules、Skills 和 Plugins 市场；
- Bugbot 代码审查；
- 共享团队上下文的云端 Agent 和自动化；
- 使用分析；
- 团队隐私模式；
- SAML/OIDC SSO。

#### Enterprise

通常为定制报价，增加：

- 共享或池化用量；
- 发票和采购流程；
- SCIM；
- 仓库、模型和 MCP 访问控制；
- 浏览器、网络和自动执行控制；
- 审计日志；
- 服务账号；
- 优先支持。

### 8.8 自己提供 API Key 能否替代会员

只能部分替代。

自己的 OpenAI、Anthropic 或 Google API Key 可能用于部分第三方模型，但通常不能完整替代：

- Cursor Tab；
- Composer 等 Cursor 专有模型；
- Cloud Agents；
- 部分 Cursor Agent 功能；
- 第一方模型使用池；
- 完整会员权限。

因此：

```text
Hobby + 自己的 API Key
≠ 完整的 Cursor Pro
```

---

## 九、Cursor Skills 是什么

Cursor Skills 是一种开放的 Agent 能力扩展形式。

一个 Skill 通常是一个文件夹，核心为：

```text
SKILL.md
```

它可以包含：

- 指令；
- 专业知识；
- 标准操作流程；
- 自定义命令；
- 脚本；
- 检查表；
- 模板；
- 参考资料。

Cursor Agent 可以：

1. 根据当前任务自动发现并加载 Skill；
2. 通过斜杠菜单手动调用 Skill。

### 9.1 Skill 适合解决什么问题

例如：

- `gradio-debug`：排查 Gradio、Nginx、登录和下载问题；
- `safe-refactor`：进行安全重构；
- `deployment-check`：上线前检查；
- `api-compatibility`：接口兼容性检查；
- `video-pipeline-debug`：排查视频生成链路；
- `database-migration`：数据库迁移流程；
- `strict-code-review`：严格代码审查；
- `aigc-workflow-development`：按固定规范开发 AIGC 工作流。

### 9.2 Skill 与普通提示词的区别

普通提示词：

- 每次都需要重新输入；
- 难以保证团队一致；
- 不便于版本管理；
- 不容易携带脚本和模板。

Skill：

- 可以保存和复用；
- 可以提交到 Git；
- 可以团队共享；
- 根据任务按需加载；
- 可以附带脚本和资源；
- 更适合标准化工程流程。

---

## 十、如何创建和调用 Skill

### 10.1 项目级 Skill

目录结构：

```text
项目根目录/
└─ .cursor/
   └─ skills/
      └─ gradio-debug/
         └─ SKILL.md
```

完整路径：

```text
.cursor/skills/gradio-debug/SKILL.md
```

适合：

- 当前项目专用；
- 跟随 Git 仓库；
- 团队共同维护；
- 与项目代码和部署方式绑定。

### 10.2 用户级全局 Skill

macOS/Linux：

```text
~/.cursor/skills/gradio-debug/SKILL.md
```

Windows：

```text
C:\Users\用户名\.cursor\skills\gradio-debug\SKILL.md
```

适合：

- 多个项目复用；
- 个人通用流程；
- 不希望提交到具体仓库。

Cursor 也可能识别开放 Agent Skills 标准中的 `.agents/skills/` 目录，具体以当前版本文档和设置页面为准。

### 10.3 最小 SKILL.md 示例

```markdown
---
name: safe-refactor
description: >
  对现有项目进行跨文件重构。在用户提到重构、模块拆分、
  解耦、技术债、保持兼容性或不能破坏已有功能时使用。
---

# 安全重构流程

## 目标

在不改变现有外部行为的前提下，改进代码结构。

## 执行步骤

1. 阅读相关模块和调用链。
2. 找出已有测试和接口约束。
3. 先输出重构计划。
4. 明确可能受影响的文件。
5. 进行最小范围修改。
6. 运行已有测试。
7. 如测试失败，分析原因并继续修复。
8. 输出变更摘要和剩余风险。

## 禁止事项

- 未确认依赖关系前不得删除公共接口。
- 不得同时修改与任务无关的模块。
- 不得在测试失败时声称任务完成。
- 未经用户要求不得更换技术框架。
```

### 10.4 如何调用

#### 自动触发

直接描述符合 Skill 范围的任务：

```text
请重构当前的视频生成任务队列，
保持现有接口不变，并在修改后运行全部测试。
```

Agent 会根据 Skill 的 `description` 判断是否加载。

#### 斜杠调用

在 Agent 输入框中输入：

```text
/
```

选择对应 Skill，例如：

```text
/safe-refactor
```

然后输入：

```text
/safe-refactor

重构当前任务队列，保持接口兼容，
先给出计划，再进行最小修改。
```

#### 在提示词中明确指定

```text
使用 safe-refactor Skill 完成当前任务。
```

### 10.5 让 Skill 携带脚本

目录可以扩展为：

```text
.cursor/
└─ skills/
   └─ gradio-debug/
      ├─ SKILL.md
      ├─ scripts/
      │  ├─ check_gradio_config.py
      │  └─ check_proxy_path.py
      ├─ references/
      │  ├─ nginx-example.md
      │  └─ deployment-checklist.md
      └─ templates/
         └─ nginx-gradio.conf
```

在 `SKILL.md` 中明确：

- 什么时候运行脚本；
- 使用什么命令；
- 脚本是否只读；
- 是否可以修改文件；
- 脚本失败后如何处理；
- 是否需要用户确认。

例如：

````markdown
## 自动检查

首先运行：

```bash
python .cursor/skills/gradio-debug/scripts/check_gradio_config.py
```

该脚本只读取配置，不得修改项目文件。
如果脚本执行失败，先说明失败原因，不得跳过检查直接修改代码。
````

---

## 十一、Skills、Rules、MCP、Commands、Hooks、Subagents 的区别

| 类型 | 核心作用 | 典型场景 |
|---|---|---|
| **Skills** | 教 Agent 按照某个流程完成任务 | 排错、部署、重构、审查、数据迁移 |
| **Rules** | 规定长期约束和项目规范 | 代码风格、安全规则、目录规范、禁止事项 |
| **Commands** | 将固定提示词包装为手动命令 | `/review`、`/release-check` |
| **MCP** | 为 Agent 连接外部工具和数据 | GitHub、数据库、浏览器、监控、文档系统 |
| **Hooks** | 在特定事件前后执行检查或逻辑 | 阻止危险命令、提交前检查、工具调用审计 |
| **Subagents** | 使用独立上下文执行子任务 | 前端、后端、测试并行分析 |
| **Plugins** | 打包多个扩展能力 | 集成 Skills、Rules、MCP、Hooks 和模板 |

### 11.1 Rules 和 Skills 的区别

| 对比项 | Skills | Rules |
|---|---|---|
| 核心目的 | 描述“如何做” | 规定“必须遵守什么” |
| 加载方式 | 按需发现或手动调用 | 持续或按规则匹配应用 |
| 适合内容 | 流程、步骤、检查清单 | 风格、限制和长期规范 |
| 是否适合脚本 | 适合 | 通常不是主要用途 |
| 上下文占用 | 相关时加载 | Always 规则可能持续占用 |
| 典型示例 | 如何排查下载失败 | 不得硬编码密钥 |

#### 适合写进 Rules

```text
所有 Python 函数必须提供类型标注。
禁止在代码中硬编码 API 密钥。
修改公共接口时必须保持向后兼容。
项目统一使用中文注释。
```

#### 适合写进 Skills

```text
如何排查 Gradio 下载失败。
如何执行数据库迁移。
如何发布视频生成服务。
如何进行安全重构。
如何执行上线前检查。
```

---

## 十一、适合实际项目的 Skill 示例

下面是一份可直接使用的 Gradio 排错 Skill。

### 11.1 目录

```text
.cursor/skills/gradio-debug/SKILL.md
```

### 11.2 完整内容

```markdown
---
name: gradio-debug
description: >
  排查 Gradio 项目中的启动失败、反向代理、root_path、
  登录鉴权、静态资源、视频预览和文件下载问题。
  当用户提到 Gradio、Nginx、下载失败、401、403、404、
  gradio_api/file、root_path 或代理路径时使用。
---

# Gradio 故障排查

## 目标

系统分析 Gradio 服务问题，优先查明根因，
不得直接进行无关的大范围代码改写。

## 工作流程

1. 阅读 Gradio 启动入口和部署配置。
2. 检查以下配置：
   - server_name
   - server_port
   - root_path
   - auth
   - allowed_paths
   - blocked_paths
3. 检查 Nginx 或其他反向代理配置。
4. 对比浏览器访问路径、接口路径与服务器文件路径。
5. 检查请求状态：
   - 401：鉴权或 Cookie 问题
   - 403：权限或路径白名单问题
   - 404：root_path 或代理路径错误
   - 5xx：服务端异常
6. 修改代码前先说明根因和修改范围。
7. 修改完成后执行最小验证。

## 下载失败专项检查

遇到视频或文件无法下载时，必须检查：

1. 下载 URL 是否包含正确的反向代理前缀。
2. 页面登录 Cookie 是否随下载请求发送。
3. gradio_api/file= 前的路径是否正确。
4. 文件是否位于 Gradio 允许访问的目录。
5. Nginx 是否正确转发查询字符串和长路径。
6. 浏览器 Network 中的响应状态和重定向链。

## 修改原则

- 未确定根因前不得修改代码。
- 优先最小改动。
- 不得删除已有鉴权。
- 不得修改与问题无关的模块。
- 修改后必须给出验证方法。
- 测试失败时不得声称任务完成。

## 输出格式

### 根因判断

### 证据

### 建议修改

### 修改后的验证方法
```

### 11.3 建议建立的三个基础 Skill

```text
.cursor/skills/gradio-debug/
.cursor/skills/aigc-workflow-development/
.cursor/skills/safe-refactor/
```

分别用于：

1. Gradio、Nginx 和文件下载排错；
2. AI 图像/视频生成工作流开发；
3. 大型代码修改前的安全分析、测试和验证。

---

## 十二、常见问题与避坑

### 12.1 Skill 没有生效

依次检查：

1. 路径是否正确：

```text
.cursor/skills/技能名称/SKILL.md
```

2. 文件名是否为：

```text
SKILL.md
```

3. YAML 头是否完整：

```yaml
---
name: gradio-debug
description: 排查 Gradio 相关故障……
---
```

4. `name` 是否使用简单的小写英文和连字符：

```text
gradio-debug
safe-refactor
deployment-check
```

5. 是否重新打开 Agent 会话；
6. 是否通过命令面板执行 `Developer: Reload Window`；
7. 输入 `/` 后是否能看到对应 Skill；
8. Skill 的 `description` 是否写清楚触发场景；
9. 当前 Cursor 版本是否支持 Skills；
10. 第三方 Skill 是否被禁用或缺少权限。

### 12.2 description 写得太模糊

不推荐：

```yaml
description: 用于 Gradio 开发
```

推荐：

```yaml
description: >
  排查 Gradio 启动、Nginx 反向代理、root_path、
  登录鉴权、静态资源和文件下载问题。
  当出现 401、403、404、gradio_api/file 或下载失败时使用。
```

`description` 不只是说明文字，也是 Agent 判断何时加载 Skill 的重要依据。

### 12.3 一个 Skill 解决太多问题

不建议：

```text
万能开发助手
```

更适合拆分为：

```text
gradio-debug
video-pipeline-debug
safe-refactor
deployment-check
api-compatibility-check
prompt-workflow-development
```

### 12.4 Skill 内容过长

建议把 Skill 主体保持为：

```text
目标
适用条件
输入要求
执行步骤
检查项
禁止事项
输出格式
```

大量背景资料放入：

```text
references/
```

脚本放入：

```text
scripts/
```

模板放入：

```text
templates/
```

### 12.5 Skill 会不会额外收费

Skill 本身没有单独安装费或调用次数费。

但它会影响模型使用量：

- `SKILL.md` 会占用上下文；
- Agent 可能读取更多文件；
- 可能运行脚本；
- 可能触发更多模型循环；
- 每轮模型调用仍按照模型 Token 规则计费。

所以 Skill 应该：

- 精简；
- 触发范围准确；
- 步骤清晰；
- 不重复堆叠背景；
- 避免无意义的长循环。

### 12.6 第三方 Skill 的安全问题

安装第三方 Skill 前必须检查：

- `SKILL.md` 中是否包含危险指令；
- `scripts/` 是否会上传文件或读取密钥；
- 是否运行未知 Shell 命令；
- 是否修改用户目录；
- 是否访问生产数据库；
- 是否扩大 Agent 权限；
- 是否存在提示词注入或供应链风险。

建议：

```text
默认最小权限；
先只读运行；
高风险操作必须人工确认；
生产环境 Skill 不允许自动调用。
```

### 12.7 模型越贵是否一定越好

不一定。

常见浪费方式：

- 用 Opus/Fable 修改一行配置；
- 用旗舰模型做简单格式化；
- 对话历史过长却不新建会话；
- Agent 在测试失败后无限循环；
- 同时启动过多子 Agent；
- 给模型读取整个仓库，而不是限定范围。

更好的策略：

```text
便宜模型完成搜索、分类和初步定位
→ 中档模型完成普通实现
→ 只有疑难问题升级到旗舰模型
```

---

## 十三、参考资料

1. Cursor Pricing  
   https://cursor.com/pricing

2. Cursor Models & Pricing  
   https://cursor.com/docs/models-and-pricing

3. Cursor Usage and Limits  
   https://cursor.com/help/models-and-usage/usage-limits

4. Cursor Agent Skills  
   https://cursor.com/docs/skills

5. Cursor 2.4：Subagents、Skills 和 Image Generation  
   https://cursor.com/changelog/2-4

6. Cursor：Clarifying Our Pricing  
   https://cursor.com/blog/june-2025-pricing

7. Cursor：Agent Best Practices  
   https://cursor.com/blog/agent-best-practices

8. OpenAI Codex CLI  
   https://developers.openai.com/codex/cli

9. OpenAI Codex Cloud  
   https://developers.openai.com/codex/cloud

10. Anthropic Claude Code  
    https://www.anthropic.com/product/claude-code

11. TRAE SOLO Agent  
    https://docs.trae.ai/ide/solo-coder

12. Qoder  
    https://qoder.com/en

---

### 最终速记卡

```text
工具选择：
Cursor = 最均衡的日常主力 IDE
TRAE = 中文和快速项目交付
Qoder = 项目知识与陌生代码库
Codex = OpenAI 终端/IDE/云端 Agent
Claude Code = 复杂工程和终端深度开发

模型选择：
Composer = 日常低成本
Sonnet = 日常高质量
Codex = 多文件编程 Agent
Gemini Flash = 视觉前端和低成本多模态
Opus/GPT Sol/Fable = 疑难复杂任务

计费：
会员费包含功能和模型额度
指定第三方模型主要按 Token 扣费
一条消息可能触发多次模型调用
建议设置 Fixed On-Demand 上限

Skills：
Rules 管“必须遵守什么”
Skills 管“应该如何完成”
MCP 管“可以连接什么”
Hooks 管“何时拦截或检查”
Subagents 管“如何并行分工”
```

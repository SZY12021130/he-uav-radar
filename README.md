# AI安全文献雷达（AI Security Literature Radar）

基于《中国计算机学会推荐国际学术会议和期刊目录》（第七版 · 2026年3月），逐期刊/会议检索 **2022-01 ~ 2026-07** 期间发表的 **AI 安全**相关研究论文的可视化文献雷达。

**在线访问：** https://szy12021130.github.io/ai-security-radar/

## 覆盖领域

- 人工智能（NeurIPS / ICML / AAAI / IJCAI 等）
- 网络与信息安全（IEEE S&P / USENIX Security / CCS / NDSS 等）
- 计算机体系结构、计算机网络与数据工程

## 检索关键词

对抗样本与对抗攻击（adversarial）、后门（backdoor）、投毒（poisoning）、成员推断（membership inference）、模型窃取/提取/反演（model stealing / extraction / inversion）、联邦学习（federated learning）、提示注入与越狱（prompt injection / jailbreak）、差分隐私（differential privacy）、机器遗忘（machine unlearning）、模型水印（model watermarking）、深伪（deepfake）、逃逸攻击（evasion attack）、AI 安全与对齐（AI safety）、大模型安全（LLM security）等。

## 功能

- 统计总览：各期刊/会议发文量排行、Top 阵地年份趋势
- 阵地浏览：折叠下拉、刊内检索、按时间排序、分页浏览
- 全局检索：跨期刊/会议按标题、作者、关键词检索
- 每篇论文含标题、作者、日期、DOI、摘要与研究方向标签

## 数据来源

- 论文元数据：dblp（https://dblp.org）
- 摘要与被引数：Semantic Scholar
- 数据文件：`public/ai_data.json`

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

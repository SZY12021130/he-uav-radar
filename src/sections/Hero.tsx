import { useEffect, useRef, useState } from 'react'
import type { Dataset } from '@/types/dataset'

function Counter({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef<number>(0)
  useEffect(() => {
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) ref.current = requestAnimationFrame(tick)
    }
    ref.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(ref.current!)
  }, [target, duration])
  return <span>{val}</span>
}

export default function Hero({ data }: { data: Dataset }) {
  const journals = data.venues.filter((v) => v.type === 'journal')
  const confs = data.venues.filter((v) => v.type === 'conference')
  const ccf = data.venues.filter((v) => v.level !== 'N')
  const stats = [
    { label: '收录论文', value: data.total, suffix: '篇' },
    { label: 'CCF目录阵地（A/B/C）', value: ccf.length, suffix: '个' },
    { label: '收录期刊（标注中科院分区）', value: journals.length, suffix: '种' },
    { label: '收录会议', value: confs.length, suffix: '个' },
  ]
  return (
    <header className="relative overflow-hidden border-b border-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-center gap-3 text-orange-400 text-sm font-medium tracking-widest">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          HE × UAV LITERATURE RADAR
        </div>
        <h1 className="mt-4 text-4xl font-bold text-slate-50 md:text-5xl">
          同态加密 × 无人机文献雷达
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
          <span className="text-slate-200">逐个遍历 CCF 推荐目录全部期刊与会议阵地</span>（网络与信息安全、计算机网络、体系结构/交叉等大类共 95 个阵地），
          并补充收录目录外相关期刊，检索 <span className="text-slate-200">{data.range}</span> 期间
          <span className="text-slate-200">同态加密（HE / Paillier / CKKS 等）与无人机（UAV / Drone / FANET）两个主题同时出现</span>的研究论文——
          涵盖联邦学习安全聚合、隐私保护导航与控制、任务卸载、认证与通信安全等交叉方向。
          期刊条目均标注中科院分区（2025年3月升级版大类），阵地标注 CCF A/B/C 等级。数据抓取于 {data.generated}，经 dblp / Semantic Scholar / Crossref 三路交叉核验。
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-3xl font-bold text-slate-50">
                <Counter target={s.value} />
                <span className="ml-1 text-sm font-normal text-orange-400">{s.suffix}</span>
              </div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

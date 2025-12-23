
import { Question, Option, ResultProfile, Quote } from './types';

export const QUOTES: Quote[] = [
  { text: { zh: "人是万物的尺度。", en: "Man is the measure of all things.", ja: "人間は万物の尺度である。" }, author: "Protagoras" },
  { text: { zh: "我思故我在。", en: "I think, therefore I am.", ja: "我思う、ゆえに我あり。" }, author: "Descartes" },
  { text: { zh: "人人人人生而自由，却无往不在枷锁之中。", en: "Man is born free, and everywhere he is in chains.", ja: "人間は自由なものとして生まれた、しかもいたる所で鎖につながれている。" }, author: "Rousseau" },
  { text: { zh: "权力导致腐败，绝对的权力导致绝对的腐败。", en: "Power tends to corrupt, and absolute power corrupts absolutely.", ja: "権力は腐敗する傾向があり、絶対的な権力は绝对的に腐敗する。" }, author: "Lord Acton" },
  { text: { zh: "未经审视的生活是不值得过的。", en: "The unexamined life is not worth living.", ja: "吟味されざる生は、人間に値する生ではない。" }, author: "Socrates" },
  { text: { zh: "上帝已死。", en: "God is dead.", ja: "神は死んだ。" }, author: "Nietzsche" },
  { text: { zh: "世界是我的表象。", en: "The world is my representation.", ja: "世界は私の意志であり表象である。" }, author: "Schopenhauer" },
  { text: { zh: "凡是现实的都是合理的。", en: "What is rational is real; and what is real is rational.", ja: "理性的であるものは現実的であり、現実的であるものは理性的である。" }, author: "Hegel" },
  { text: { zh: "存在先于本质。", en: "Existence precedes essence.", ja: "実存は本質に先立つ。" }, author: "Sartre" },
  { text: { zh: "认识你自己。", en: "Know thyself.", ja: "汝自身を知れ。" }, author: "Socrates" },
  { text: { zh: "知识就是力量。", en: "Knowledge is power.", ja: "知は力なり。" }, author: "Francis Bacon" },
  { text: { zh: "美德即知识。", en: "Virtue is knowledge.", ja: "徳は知恵である。" }, author: "Socrates" },
  { text: { zh: "法律是理性的体现，不包含激情。", en: "The law is reason, free from passion.", ja: "法は情熱のない理性である。" }, author: "Aristotle" },
  { text: { zh: "人是天生的政治动物。", en: "Man is by nature a political animal.", ja: "人間は本性的には政治的動物である。" }, author: "Aristotle" },
  { text: { zh: "平庸之恶。", en: "The banality of evil.", ja: "悪の陳腐さ。" }, author: "Hannah Arendt" }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: { zh: "一个正义的社会必须通过强制性的财富再分配来消除极端贫富差距。", en: "A just society must eliminate extreme wealth gaps through mandatory redistribution.", ja: "正義の社会は、強制的再分配を通じて極端な格差を解消しなければならない。" },
    options: {
      [Option.A]: { zh: "绝对必要", en: "Absolutely Necessary", ja: "絶対に必要" },
      [Option.B]: { zh: "较为赞同", en: "Somewhat Agree", ja: "やや賛成" },
      [Option.C]: { zh: "存有疑虑", en: "Somewhat Disagree", ja: "やや反対" },
      [Option.D]: { zh: "坚决反对", en: "Strongly Oppose", ja: "断固反対" }
    },
    scores: { [Option.A]: { x: -2, y: 0.5 }, [Option.B]: { x: -1, y: 0.2 }, [Option.C]: { x: 1, y: -0.2 }, [Option.D]: { x: 2, y: -0.5 } }
  },
  {
    id: 2,
    text: { zh: "在突发紧急状况下，国家为了公共安全有权限制个人的言论与行动自由。", en: "In emergencies, the state has the right to restrict individual freedoms for public safety.", ja: "緊急事態において、国家は公共の安全のために個人の自由を制限する権利がある。" },
    options: {
      [Option.A]: { zh: "安全第一", en: "Safety Above All", ja: "安全が第一" },
      [Option.B]: { zh: "倾向秩序", en: "Favor Order", ja: "秩序を重視" },
      [Option.C]: { zh: "自由更重", en: "Freedom Matters More", ja: "自由を重視" },
      [Option.D]: { zh: "神圣不可侵", en: "Inviolable Freedom", ja: "自由は神圣不可侵" }
    },
    scores: { [Option.A]: { x: 0, y: 2 }, [Option.B]: { x: 0, y: 1 }, [Option.C]: { x: 0, y: -1 }, [Option.D]: { x: 0, y: -2 } }
  },
  {
    id: 3,
    text: { zh: "人类社会应当遵循自发的演化秩序，而非依靠少数专家的理性和计划去设计。", en: "Society should follow spontaneous evolution rather than rational design by experts.", ja: "社会は専門家による計画ではなく、自生的な進化の秩序に従うべきである。" },
    options: {
      [Option.A]: { zh: "完全赞同", en: "Strongly Agree", ja: "強く賛成" },
      [Option.B]: { zh: "比较赞同", en: "Somewhat Agree", ja: "やや賛成" },
      [Option.C]: { zh: "需要干预", en: "Need Intervention", ja: "介入が必要" },
      [Option.D]: { zh: "必须计划", en: "Planning is Essential", ja: "計画は不可欠" }
    },
    scores: { [Option.A]: { x: 1.5, y: -1.5 }, [Option.B]: { x: 0.8, y: -0.8 }, [Option.C]: { x: -0.8, y: 0.8 }, [Option.D]: { x: -1.5, y: 1.5 } }
  },
  {
    id: 4,
    text: { zh: "最低工资标准等价格管制措施，本质上是对自由契约精神的破坏。", en: "Price controls like minimum wage are essentially a violation of free contract.", ja: "最低賃金などの価格統制は、本質的に契約の自由の侵害である。" },
    options: {
      [Option.A]: { zh: "绝对正确", en: "Absolutely Correct", ja: "全くその通り" },
      [Option.B]: { zh: "基本认可", en: "Agree", ja: "賛成" },
      [Option.C]: { zh: "不太同意", en: "Disagree", ja: "反対" },
      [Option.D]: { zh: "完全反对", en: "Strongly Disagree", ja: "強く反対" }
    },
    scores: { [Option.A]: { x: 2, y: -1 }, [Option.B]: { x: 1, y: -0.5 }, [Option.C]: { x: -1, y: 0.5 }, [Option.D]: { x: -2, y: 1 } }
  },
  {
    id: 5,
    text: { zh: "传统习俗和宗教信仰是维持社会稳定和道德延续的基石。", en: "Tradition and religion are cornerstones for social stability and moral continuity.", ja: "伝統や宗教は、社会の安定と道徳の継承のための基盤である。" },
    options: {
      [Option.A]: { zh: "深有同感", en: "Strongly Agree", ja: "強く賛成" },
      [Option.B]: { zh: "倾向传统", en: "Leaning Traditional", ja: "伝統寄り" },
      [Option.C]: { zh: "倾向进步", en: "Leaning Progressive", ja: "進歩寄り" },
      [Option.D]: { zh: "应被抛弃", en: "Should be Discarded", ja: "捨てるべき" }
    },
    scores: { [Option.A]: { x: 1, y: 1.5 }, [Option.B]: { x: 0.5, y: 0.8 }, [Option.C]: { x: -0.5, y: -0.8 }, [Option.D]: { x: -1, y: -1.5 } }
  },
  {
    id: 6,
    text: { zh: "社会福利制度的存在往往会滋生懒惰，降低整体的经济效率。", en: "Social welfare systems often breed laziness and reduce economic efficiency.", ja: "社会福祉制度はしばしば怠慢を助長し、経済効率を低下させる。" },
    options: {
      [Option.A]: { zh: "完全同意", en: "Strongly Agree", ja: "強く賛成" },
      [Option.B]: { zh: "比较同意", en: "Agree", ja: "賛成" },
      [Option.C]: { zh: "不太同意", en: "Disagree", ja: "反対" },
      [Option.D]: { zh: "必须加强福利", en: "Welfare must expand", ja: "福祉を強化すべき" }
    },
    scores: { [Option.A]: { x: 2, y: -0.5 }, [Option.B]: { x: 1, y: -0.2 }, [Option.C]: { x: -1, y: 0.2 }, [Option.D]: { x: -2, y: 0.5 } }
  },
  {
    id: 7,
    text: { zh: "国家边界在未来应当逐渐消失，人类应当建立统一的全球治理机构。", en: "National borders should vanish; humanity needs unified global governance.", ja: "将来的に国境は消えるべきで、人類は統一された地球統治機関を確立すべきだ。" },
    options: {
      [Option.A]: { zh: "理想蓝图", en: "Ideal Blueprint", ja: "理想の設計図" },
      [Option.B]: { zh: "长远目标", en: "Long-term Goal", ja: "長期的目標" },
      [Option.C]: { zh: "不切实际", en: "Impractical", ja: "非現実的" },
      [Option.D]: { zh: "坚决捍卫主权", en: "Defend Sovereignty", ja: "主権を断固守る" }
    },
    scores: { [Option.A]: { x: -1.5, y: -1 }, [Option.B]: { x: -0.8, y: -0.5 }, [Option.C]: { x: 0.8, y: 0.5 }, [Option.D]: { x: 1.5, y: 1 } }
  },
  {
    id: 8,
    text: { zh: "人性的贪婪决定了我们需要一个强大的威权政府来防止社会陷入内乱。", en: "Human greed necessitates a strong authoritarian government to prevent civil strife.", ja: "人間の貪欲さは、社会の内乱を防ぐために強力な威権政府を必要とする。" },
    options: {
      [Option.A]: { zh: "深刻洞见", en: "Profound Insight", ja: "深い洞察" },
      [Option.B]: { zh: "基本认同", en: "Basic Agreement", ja: "基本的には賛成" },
      [Option.C]: { zh: "过分夸大", en: "Overstated", ja: "誇張しすぎ" },
      [Option.D]: { zh: "反对威权", en: "Oppose Authority", ja: "威権に反対" }
    },
    scores: { [Option.A]: { x: 0, y: 2 }, [Option.B]: { x: 0, y: 1 }, [Option.C]: { x: 0, y: -1 }, [Option.D]: { x: 0, y: -2 } }
  },
  {
    id: 9,
    text: { zh: "经验与实践比抽象的哲学理论更能指导社会治理。", en: "Experience and practice guide social governance better than abstract theory.", ja: "経験と実践は、抽象的な理論よりも社会統治をより良く導く。" },
    options: {
      [Option.A]: { zh: "经验至上", en: "Experience First", ja: "经验が第一" },
      [Option.B]: { zh: "偏向实践", en: "Favor Practice", ja: "实践を重視" },
      [Option.C]: { zh: "理论指引", en: "Guided by Theory", ja: "理论が先导" },
      [Option.D]: { zh: "理性的胜利", en: "Victory of Reason", ja: "理性の胜利" }
    },
    scores: { [Option.A]: { x: 0.5, y: -1.5 }, [Option.B]: { x: 0.2, y: -0.8 }, [Option.C]: { x: -0.2, y: 0.8 }, [Option.D]: { x: -0.5, y: 1.5 } }
  },
  {
    id: 10,
    text: { zh: "由于历史原因造成的弱势，应当在升学或就业中给予少数族裔特殊的补偿性优惠。", en: "Disadvantaged groups should get special compensatory preference in schools or jobs.", ja: "歴史的理由による弱者は、進学や雇用において特別な補償的優遇を受けるべきだ。" },
    options: {
      [Option.A]: { zh: "绝对公平", en: "Truly Fair", ja: "絶対に公平" },
      [Option.B]: { zh: "必要补偿", en: "Necessary Compensation", ja: "必要な補償" },
      [Option.C]: { zh: "程序不正义", en: "Procedural Injustice", ja: "手続き上の不当" },
      [Option.D]: { zh: "逆向歧视", en: "Reverse Discrimination", ja: "逆差別である" }
    },
    scores: { [Option.A]: { x: -2, y: -1 }, [Option.B]: { x: -1, y: -0.5 }, [Option.C]: { x: 1, y: 0.5 }, [Option.D]: { x: 2, y: 1 } }
  },
  {
    id: 11,
    text: { zh: "刑罚的首要目的应当是惩罚犯罪并震慑他人，而非对罪犯进行‘人性化改造’。", en: "Punishment should primarily deter and penalize, not 'humanely rehabilitate'.", ja: "刑罰の主な目的は処罰と抑止であり、「人道的な更生」ではない。" },
    options: {
      [Option.A]: { zh: "惩罚第一", en: "Punishment First", ja: "罰が第一" },
      [Option.B]: { zh: "倾向震慑", en: "Favor Deterrence", ja: "抑止を重視" },
      [Option.C]: { zh: "倾向改造", en: "Favor Rehab", ja: "更生を重視" },
      [Option.D]: { zh: "人权至上", en: "Human Rights First", ja: "人権が第一" }
    },
    scores: { [Option.A]: { x: 0, y: 2 }, [Option.B]: { x: 0, y: 1 }, [Option.C]: { x: 0, y: -1 }, [Option.D]: { x: 0, y: -2 } }
  },
  {
    id: 12,
    text: { zh: "只要不伤害他人，个人的生活方式与道德选择不应受到政府或法律的干涉。", en: "Individual lifestyle and moral choices shouldn't be interfered with unless they harm others.", ja: "他人に危害を加えない限り、個人の生活様式や道徳的選択に干渉すべきではない。" },
    options: {
      [Option.A]: { zh: "绝对自由", en: "Absolute Freedom", ja: "絶対的な自由" },
      [Option.B]: { zh: "基本尊重", en: "Basic Respect", ja: "基本的には尊重" },
      [Option.C]: { zh: "公序良俗", en: "Public Morality", ja: "公序良俗を重視" },
      [Option.D]: { zh: "道德指引", en: "Moral Guidance", ja: "道徳的指針が必要" }
    },
    scores: { [Option.A]: { x: 0, y: -2 }, [Option.B]: { x: 0, y: -1 }, [Option.C]: { x: 0, y: 1 }, [Option.D]: { x: 0, y: 2 } }
  },
  {
    id: 13,
    text: { zh: "精英和专家的治理比大众民主更能确保社会的长期健康与繁荣。", en: "Governance by elites and experts ensures social prosperity better than mass democracy.", ja: "エリートや専門家による統治は、大衆民主主義よりも社会の繁栄をより良く保証する。" },
    options: {
      [Option.A]: { zh: "专家治国", en: "Technocracy", ja: "技術官僚政治" },
      [Option.B]: { zh: "倾向精英", en: "Favor Elites", ja: "エリートを重視" },
      [Option.C]: { zh: "倾向平民", en: "Favor Populace", ja: "庶民を重視" },
      [Option.D]: { zh: "民主神圣", en: "Sacred Democracy", ja: "民主主義は神聖" }
    },
    scores: { [Option.A]: { x: 0.5, y: 2 }, [Option.B]: { x: 0.2, y: 1 }, [Option.C]: { x: -0.2, y: -1 }, [Option.D]: { x: -0.5, y: -2 } }
  },
  {
    id: 14,
    text: { zh: "为了维护宏大的民族利益或集体利益，牺牲一部分个人的利益是必要的。", en: "It is necessary to sacrifice some individual interests for the greater collective good.", ja: "大きな集団の利益のために、一部の個人の利益を犠牲にすることは不可欠だ。" },
    options: {
      [Option.A]: { zh: "理所当然", en: "Obviously", ja: "当然だ" },
      [Option.B]: { zh: "可以接受", en: "Acceptable", ja: "受け入れられる" },
      [Option.C]: { zh: "尽量避免", en: "Avoid if Possible", ja: "極力避けるべき" },
      [Option.D]: { zh: "个人至上", en: "Individual First", ja: "个人が至上" }
    },
    scores: { [Option.A]: { x: -1, y: 1.5 }, [Option.B]: { x: -0.5, y: 0.8 }, [Option.C]: { x: 0.5, y: -0.8 }, [Option.D]: { x: 1, y: -1.5 } }
  },
  {
    id: 15,
    text: { zh: "科学技术的发展如果不加伦理约束，终将导致人类文明的毁灭。", en: "Technological growth without ethical bounds will eventually destroy human civilization.", ja: "倫理的な拘束のない技術発展は、最終的に人類文明を破滅させるだろう。" },
    options: {
      [Option.A]: { zh: "深切忧虑", en: "Deep Concern", ja: "深く憂慮" },
      [Option.B]: { zh: "审慎发展", en: "Prudent Growth", ja: "慎重な発展" },
      [Option.C]: { zh: "盲目悲观", en: "Blindly Pessimistic", ja: "盲目的な悲観" },
      [Option.D]: { zh: "技术进步第一", en: "Progress First", ja: "技术进步が第一" }
    },
    scores: { [Option.A]: { x: 0, y: 1.5 }, [Option.B]: { x: 0, y: 0.8 }, [Option.C]: { x: 0, y: -0.8 }, [Option.D]: { x: 0, y: -1.5 } }
  }
];

export const UI_STRINGS = {
  start: { zh: "开始审视自我", en: "Begin Self-Examination", ja: "自己省察を始める" },
  title: { zh: "思想光谱测试", en: "Ideological Spectrum", ja: "思想スペクトル" },
  subtitle: { zh: "深度分析 v2.5", en: "Deep Analysis v2.5", ja: "詳細分析 v2.5" },
  prev: { zh: "上一步", en: "Back", ja: "戻る" },
  next: { zh: "继续探索", en: "Continue", ja: "次へ" },
  submit: { zh: "揭晓图谱", en: "Reveal Results", ja: "結果を見る" }
};

export const RESULT_PROFILES: Record<string, ResultProfile> = {
  leftUp: {
    name: { zh: "激进左翼 / 科学社会主义", en: "Radical Left / Scientific Socialism", ja: "急進左翼 / 科学的社会主義" },
    title: { zh: "解放的先锋", en: "Vanguard of Liberation", ja: "解放の先駆者" },
    philosopher: { zh: "卡尔·马克思", en: "Karl Marx", ja: "カール・マルクス" },
    philosopherImg: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
    animal: 'lion',
    message: { zh: "哲学家们只是用不同的方式解释世界，而问题在于改变世界。在你身上，我看到了打破旧锁链的勇气。", en: "Philosophers have only interpreted the world; the point is to change it. In you, I see the courage to break old chains.", ja: "哲学者は世界を解釈してきただけだ。大切なのはそれを変えることだ。あなたの中に、古い鎖を断ち切る勇気を見ました。" },
    description: { zh: "你主张通过集体力量和科学规划来实现社会平等。你对私有制带来的异化保持高度警惕。", en: "You advocate for social equality through collective power and scientific planning. You are vigilant against alienation from private ownership.", ja: "集団の力と科学的計画を通じて社会の平等を追求します。私有財産が生み出す疎外に対して高い警戒心を持っています。" },
    history: {
      pros: [
        { zh: "里程碑：在19世纪末20世纪初极大地推动了八小时工作制的确立与全球童工制度的废除。", en: "Milestone: Pushed for the 8-hour workday and total abolition of child labor globally.", ja: "19世紀末から20世紀初頭にかけて、8時間労働制の確立と児童労働の全面廃止を強力に推進した。" },
        { zh: "成就：为现代全民医疗、义务教育体系提供了最初的理论蓝图与抗争动能。", en: "Achievement: Provided the initial theoretical blueprint and momentum for universal healthcare and education.", ja: "現代の国民皆保険や義務教育制度に最初の思想的基盤と動力を提供した。" }
      ],
      cons: [
        { zh: "教训：20世纪中叶的实践证明，过度集权的计划经济常导致长期的物资匮乏、寻租腐败与创新停滞。", en: "Lesson: Centrally planned economies led to severe shortages, corruption, and technological stagnation.", ja: "教訓：20世紀半ばの試みは、過度な計画経済が慢性的な物資不足と革新の停滞を招くことを証明した。" },
        { zh: "示例：历史上某些激进阶段为了追求绝对平等，不惜大规模压制政治多元化与基本个体自由。", en: "Example: Radical phases often suppressed political pluralism and individual liberty for absolute equality.", ja: "事例：歴史上の急進的な段階では、絶対的な平等追求のために個人の自由が大規模に抑圧された。" }
      ]
    },
    color: "bg-red-800"
  },
  rightUp: {
    name: { zh: "秩序保守 / 现实主义", en: "Conservative Order / Realism", ja: "秩序保守 / リアリズム" },
    title: { zh: "秩序的捍卫者", en: "Defender of Order", ja: "秩序の擁护者" },
    philosopher: { zh: "托马斯·霍布斯", en: "Thomas Hobbes", ja: "トマス・ホッブズ" },
    philosopherImg: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Thomas_Hobbes_%28subset%29.jpg",
    animal: 'serpent',
    message: { zh: "没有强大的主权，社会将陷入‘所有人对所有人的战争’。你明白秩序是文明最昂贵的基石。", en: "Without a common power, life is solitary, poor, nasty, brutish, and short. You understand order is civilization's costliest cornerstone.", ja: "強力な主権がなければ、社会は「万人の万人に対する闘争」に陥る。秩序こそが文明の最も高価な礎であることを、あなたは理解しています。" },
    description: { zh: "你重视传统、秩序与国家安全，认为激进的社会实验往往带来不可控的灾难。", en: "You value tradition, order, and national security, viewing radical social experiments as uncontrollable disasters.", ja: "伝統、秩序、国家安全保障を重視し、急進的な社会実験はしばしば制御不能な災厄をもたらすと考えています。" },
    history: {
      pros: [
        { zh: "里程碑：在内战或大崩坏后重建法律权威，如《威斯特伐利亚和约》确立了主权国家体系的基础。", en: "Milestone: Rebuilt law and authority post-collapse, like the Peace of Westphalia founding modern sovereignty.", ja: "内戦後の法の再建、例えばウェストファリア条約による主権国家体制の基礎確立に貢献した。" },
        { zh: "成就：通过维护社会结构的连续性，在激进动荡中保护了珍贵的文化遗产与社会共识。", en: "Achievement: Preserved cultural heritage and consensus by maintaining social continuity during radical upheaval.", ja: "社会構造の連続性を維持することで、激動の時代に文化遺産や社会的合意を守り抜いた。" }
      ],
      cons: [
        { zh: "教训：长期的秩序高压可能导致阶层固化，正如法国大革命前的‘旧制度’因缺乏流动性而最终崩塌。", en: "Lesson: Prolonged rigid order leads to social stagnation, like the collapse of the Ancien Régime.", ja: "教訓：長期的な抑圧は階級の固定化を招き、フランス革命前の旧体制のような崩壊を招く恐れがある。" },
        { zh: "示例：历史上某些政权为求稳定而建立的‘利维坦’式监控体系，最终演变为对社会活力的毁灭性摧残。", en: "Example: Surveillance states built for stability eventually destroyed societal creativity and vitality.", ja: "事例：安定のために構築された監視体制が、最終的に社会の創造性を破壊する暴政と化した。" }
      ]
    },
    color: "bg-stone-800"
  },
  leftDown: {
    name: { zh: "进步自由 / 经验改良", en: "Progressive Liberal / Reformism", ja: "進歩的自由 / 改良主義" },
    title: { zh: "社会的修复者", en: "Social Repairer", ja: "社会の修復者" },
    philosopher: { zh: "约翰·斯图尔特·密尔", en: "John Stuart Mill", ja: "ジョン・スチュアート・ミル" },
    philosopherImg: "https://upload.wikimedia.org/wikipedia/commons/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
    animal: 'owl',
    message: { zh: "个人的自由应当是神圣不可侵犯的。你在寻求公平的同时，依然保留了对个体的最高尊重。", en: "The only purpose for which power can be rightfully exercised is to prevent harm to others. You seek fairness with supreme respect for individuals.", ja: "個人の自由は神聖にして侵されるべからざるものです。公平さを求めつつも、個人に対する最高の敬意を保っています。" },
    description: { zh: "你追求平等与进步，但对公权力的扩张保持警惕。你倾向于通过温和的改良来修复社会伤痕。", en: "You seek equality and progress but stay vigilant against state expansion. You prefer mild reforms to heal social wounds.", ja: "平等と進歩を追求しながらも、公権力の拡大を警戒しています。社会の傷を癒すために、穏やかな改良を好みます。" },
    history: {
      pros: [
        { zh: "里程碑：主导了19-20世纪女性参政权运动（Suffrage）与民权法案（Civil Rights）的最终胜利。", en: "Milestone: Led the victory of women's suffrage and the expansion of modern civil rights.", ja: "19-20世紀の女性参政権運動や市民権法の最終的な勝利を主導した。" },
        { zh: "成就：成功在原始积累的资本主义中植入了人道主义补丁，构建了现代平衡风险与竞争的福利国家格局。", en: "Achievement: Built the modern welfare state by balancing market competition with humanitarian safeguards.", ja: "資本主義に人道的な修正を加え、競争と保障を両立させた現代福祉国家の枠組みを構築した。" }
      ],
      cons: [
        { zh: "教训：过度追求‘结果正义’可能引发效率低下，如20世纪70年代欧美普遍遭遇的‘滞胀’危机。", en: "Lesson: Over-pursuing 'equality of outcome' led to the stagflation crises of the 1970s.", ja: "教訓：結果の平等を過度に追求すると、1970年代のスタグフレーションのような経済危機を招くことがある。" },
        { zh: "示例：当改良主义演变为‘身份政治’的碎片化竞争时，可能瓦解社会共同体的整体认同。", en: "Example: Reformism devolving into fragmented identity politics can erode shared national or community values.", ja: "事例：改良主義がアイデンティティ・ポリティクスに陥ると、共同体の価値観が分断される恐れがある。" }
      ]
    },
    color: "bg-teal-800"
  },
  rightDown: {
    name: { zh: "古典自由 / 市场个人", en: "Classical Liberal / Individualism", ja: "古典的自由 / 個人主義" },
    title: { zh: "自由的守夜人", en: "Sentinel of Freedom", ja: "自由の守護者" },
    philosopher: { zh: "弗里德里希·哈耶克", en: "Friedrich Hayek", ja: "フリードリヒ・ハイエク" },
    philosopherImg: "https://upload.wikimedia.org/wikipedia/commons/a/af/Friedrich_Hayek_1974.jpg",
    animal: 'eagle',
    message: { zh: "通往地狱之路，往往是由善意铺就的。你的敏锐让你能够识别那些伪装成救世主的枷锁。", en: "The road to hell is paved with good intentions. Your sharpness allows you to identify chains disguised as saviors.", ja: "地獄への道は善意で舗装されている。あなたの鋭さは、救世主に変装した鎖を見分けることを可能にします。" },
    description: { zh: "你坚信自发秩序与自由贸易是文明繁荣的唯一源泉。你极其反感任何形式的家长式干预。", en: "You believe spontaneous order and free trade are the only sources of prosperity. You strongly oppose any paternalistic intervention.", ja: "自生的秩序と自由貿易こそが文明繁栄の唯一の源泉だと信じています。いかなる形式のパターナリズム的な介入も極めて嫌います。" },
    history: {
      pros: [
        { zh: "里程碑：引爆了工业革命以来人类历史上规模最大的财富创造与全球绝对贫困人口的骤减。", en: "Milestone: Unleashed the greatest wealth creation in history and drastically reduced global poverty.", ja: "産業革命以来、人類史上最大の富の創造と、地球規模での絶対貧困の劇的な削減をもたらした。" },
        { zh: "成就：通过高效的分散决策机制，极大地释放了个体在技术、艺术与商业领域的创新潜能。", en: "Achievement: Unleashed individual innovation potential in tech, arts, and business through decentralized choice.", ja: "分散型の意思決定メカニズムを通じて、技術や芸術、ビジネスにおける個人の革新を最大限に引き出した。" }
      ],
      cons: [
        { zh: "教训：1929年大萧条的历史证明，缺乏底层监管的自发秩序可能因系统性风险导致现代文明的瞬间停摆。", en: "Lesson: The 1929 Depression showed that unregulated markets risk systemic collapse.", ja: "教訓：1929年の大恐慌は、規制のない自生的秩序がシステム的リスクにより文明を停止させ得ることを示した。" },
        { zh: "示例：自由放任政策在历史上曾导致极端的财富两极分化与公共领域（如环境）的‘公地悲剧’。", en: "Example: Laissez-faire policies historically led to extreme inequality and the 'Tragedy of the Commons'.", ja: "事例：自由放任主義は、歴史的に極端な富の偏在と環境などの共有財産の荒废（共有地の悲劇）を招いた。" }
      ]
    },
    color: "bg-amber-800"
  }
};

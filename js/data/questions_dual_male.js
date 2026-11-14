/**
 * 《顶流和他的私人医生》剧情化词汇题 —— 耽美版本
 * 共 50 章，每章 4 题，合计 200 题
 * 第 k 章使用 WORD_BANK 第 (k-1)*4+1 ~ k*4 号词
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.dual_male = [
  {
    id: 'dm_1',
    index: 1,
    title: '第 1 章 · 他在监视器后倒下',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '雨夜的片场，MV 已经拍到第三十六个小时。江予站在监视器后看回放，眼前忽然一黑，整个人顺着折叠椅滑了下去。灯光、雨机和惊呼声一起涌上来，他却还在笑。',
    questions: [
      {
        plotDescription: '江予被扶到台阶上，助理嚷着要叫救护车，他摆摆手，提起了刚出道那年。',
        line: "Relax. I was broke when I debuted. Three shows a night, no problem.",
        lineCn: '放轻松。我出道那会儿身无分文，一晚上跑三场演出都没问题。',
        prompt: "根据上下文，选出画线词汇 'broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'injured', cn: '受了伤', correct: false, reason: 'broke 和受伤无关，真正撑不住的是他现在的身体，不是过去。' },
          { key: 'B', en: 'having no money', cn: '身无分文', correct: true, reason: '他说出道时一晚跑三场演出，指的是当年一分钱都没有。' },
          { key: 'C', en: 'exhausted', cn: '精疲力尽', correct: false, reason: '累是真的，但 broke 说的是没钱，不是累，别被情绪带跑。' }
        ],
        analysis: 'broke 在口语里几乎固定指“一分钱都没有”，常和 be 动词连用。江予拿自己最穷的那年，来证明这点累根本不算什么。',
        wrongFeedback: '你选错了，助理以为他在逞强，硬把他按在台阶上，现场乱成一团。',
        afterCorrect: '助理还想说什么，江予已经自己站起来，拍了拍裤腿上的灰，抬手示意导演继续。转身那一刻他扶了一下额角——眼前的灯，轻轻晃了一下。'
      },
      {
        plotDescription: '收工后他独自坐在保姆车里，翻到一笔三年前的转账记录，久久没有动。',
        line: "That apartment was tiny, but the rent was all I thought about.",
        lineCn: '那间公寓很小，可房租是我当时唯一惦记的事。',
        prompt: "根据上下文，选出画线词汇 'rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'monthly housing payment', cn: '房租', correct: true, reason: '前一句说公寓很小，rent 指每月交给房东的住房租金。' },
          { key: 'B', en: 'a bank loan', cn: '银行贷款', correct: false, reason: '房租付给房东，不是向银行借的钱，两者性质完全不同。' },
          { key: 'C', en: 'a service tip', cn: '小费', correct: false, reason: '小费是给服务人员的额外报酬，和住处没有任何关系。' }
        ],
        analysis: 'rent 作名词就是“房租”，常和 pay、due 搭配。公寓再小，房租也是压在他心上的全部重量。',
        wrongFeedback: '你选错了，江予把手机扣在膝盖上，车外的雨忽然很吵，他一整夜没睡。',
        afterCorrect: '他把那笔钱又看了一遍，备注栏只有两个字：谢谢。三年前有人替他垫过那间小公寓的房租，这件事他谁也没说过。'
      },
      {
        plotDescription: '经纪人翻着账本皱眉，说这支 MV 严重超支，得从别的地方省回来。',
        line: "We're way over budget. Someone has to cut something.",
        lineCn: '我们严重超预算了，总得有人砍掉点什么。',
        prompt: "根据上下文，选出画线词汇 'budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a signed contract', cn: '已签的合同', correct: false, reason: '合同是双方的约定，超支说的是钱花得比计划多。' },
          { key: 'B', en: 'a list of songs', cn: '曲目单', correct: false, reason: '曲目单决定唱什么，不涉及钱，超支和它无关。' },
          { key: 'C', en: 'the money plan for a project', cn: '预算', correct: true, reason: 'over budget 是超出预算，budget 指项目预先算好的开销。' }
        ],
        analysis: 'over budget 是高频固定搭配：超出预算。经纪人真正担心的是钱不够，而不是合同或曲目单。',
        wrongFeedback: '你选错了，经纪人当场砍掉了灯光组，江予站在暗下来的片场里一句话没说。',
        afterCorrect: '江予听完只说了一句：“省别的地方，别省人。”他签完字，笔放下时手指有点抖，耳里那阵嗡鸣又回来了。'
      },
      {
        plotDescription: '凌晨收工，江予却让助理去订最贵的餐车，说今晚全组人都要吃热的。',
        line: "Let me splurge tonight. The whole crew eats hot food.",
        lineCn: '今晚让我挥霍一次，全组人都吃上热饭。',
        prompt: "根据上下文，选出画线词汇 'splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'save money carefully', cn: '精打细算', correct: false, reason: '他说的是花大钱请客，和节省恰好相反，方向别弄反。' },
          { key: 'B', en: 'spend a lot on a treat', cn: '挥霍、大手大脚地花', correct: true, reason: 'splurge 指为享受痛快花一笔钱，这里是他请全组吃饭。' },
          { key: 'C', en: 'split the bill', cn: 'AA 制', correct: false, reason: 'AA 是各付各的，而他是要一个人把钱全付了。' }
        ],
        analysis: 'splurge 是“为一次享受痛快花钱”，常接 on。江予用一顿热饭，把整个剧组从超支的阴影里拉了出来。',
        wrongFeedback: '你选错了，餐车没订成，全组人啃着冷面包，江予的脸色比夜还沉。',
        afterCorrect: '餐车开到片场时，热气把雨都顶开了。江予端着一碗汤站在人群外，忽然听见有人喊他名字——那声音像从很远的水底传来。'
      }
    ],
    completeText: '第一章结束。那晚之后，江予的耳朵里多了一种声音，像有人在很远的地方按住了他的世界。他没告诉任何人，包括明天要来的那位私人医生。'
  },
  {
    id: 'dm_2',
    index: 2,
    title: '第 2 章 · 救护车上的一只手',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '救护车停在片场外，雨刷来回刮着。顾清和是被临时叫来的，白大褂还没换，手电照进江予瞳孔时，对方正睁着眼看他，睫毛上全是雨水。',
    questions: [
      {
        plotDescription: '江予靠在担架上，还在抱怨上周那家诊所十分钟检查收了他五千块。',
        line: "Five thousand for a ten-minute check? That clinic is a total rip-off.",
        lineCn: '十分钟检查收五千？那家诊所简直是明抢。',
        prompt: "根据上下文，选出画线词汇 'rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a great bargain', cn: '超值的好价', correct: false, reason: '他是在抱怨被宰，语气里全是不值，不是捡了便宜。' },
          { key: 'B', en: 'a free service', cn: '免费服务', correct: false, reason: '恰恰相反，他觉得收费高得离谱，才叫 rip-off。' },
          { key: 'C', en: 'something wildly overpriced', cn: '坑钱货、宰人的东西', correct: true, reason: 'rip-off 指价格远高于价值的东西，这里指那家诊所的收费。' }
        ],
        analysis: 'rip-off 是口语里形容“被宰”的高频词：What a rip-off。江予心疼钱，更气自己被当成冤大头。',
        wrongFeedback: '你选错了，顾清和没接话，只把听诊器按得更紧，江予忽然更尴尬了。',
        afterCorrect: '顾清和低头写记录，淡淡道：“那家诊所上周刚被投诉。”江予愣了一下，忽然笑出声，雨声都盖不住。'
      },
      {
        plotDescription: '顾清和提起江予那位前任经纪人，语气平静得像在念一份病历。',
        line: "Your old manager is a freeloader. He drinks my coffee and never pays.",
        lineCn: '你那位前经纪人是个白嫖怪，喝我的咖啡从来不给钱。',
        prompt: "根据上下文，选出画线词汇 'freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who spends too much', cn: '花钱大手大脚的人', correct: false, reason: 'freeloader 恰恰相反，是占别人便宜、自己不掏钱的人。' },
          { key: 'B', en: 'someone who lives off others', cn: '白嫖怪、蹭吃蹭喝的人', correct: true, reason: '后一句说他喝咖啡从不付钱，正是 freeloader 的意思。' },
          { key: 'C', en: 'a loyal business partner', cn: '忠诚的合作伙伴', correct: false, reason: '顾清和的语气是嫌弃，不是称赞，更谈不上忠诚。' }
        ],
        analysis: 'freeloader 由 free 加 loader 构成，指长期占别人便宜的人。顾清和用这个词，是在提醒江予看清身边的人。',
        wrongFeedback: '你选错了，顾清和没再解释，江予却替前经纪人辩解了一句，两人之间忽然冷了下来。',
        afterCorrect: '江予沉默了两秒，说：“他也不容易。”顾清和抬眼看他，那一眼很长，最后只说：“你总是替别人找理由。”'
      },
      {
        plotDescription: '江予掏出手机，给顾清和看自己刚下单的三无“神药”滴耳液。',
        line: "I bought these ear drops online. Tell me it's not a scam.",
        lineCn: '我在网上买了这个滴耳液，你告诉我这不是骗局。',
        prompt: "根据上下文，选出画线词汇 'scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a trick to cheat people', cn: '骗局', correct: true, reason: '三无滴耳液在网上高价出售，正是骗人钱财的骗局。' },
          { key: 'B', en: 'a good discount', cn: '优惠折扣', correct: false, reason: '他是在怀疑自己被骗，不是在说自己捡了便宜。' },
          { key: 'C', en: 'a rare medicine', cn: '稀有药', correct: false, reason: 'scam 说的是骗人的把戏，和药物是否稀有无关。' }
        ],
        analysis: 'scam 既是名词“骗局”，也能作动词“诈骗”。江予心里其实已经有了答案，只是在等顾清和确认。',
        wrongFeedback: '你选错了，顾清和把那瓶滴耳液收走，江予想抢，手却停在半空。',
        afterCorrect: '顾清和拧开瓶盖闻了一下，直接丢进垃圾桶：“成分表是假的。”江予张了张嘴，忽然有点想笑，又有点想哭。'
      },
      {
        plotDescription: '江予别开脸，说他不想欠任何人，尤其是眼前这一个人。',
        line: "I don't want to be in your debt. Not even a little.",
        lineCn: '我不想欠你的，一点都不想。',
        prompt: "根据上下文，选出画线词汇 'debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a gift freely given', cn: '不求回报的馈赠', correct: false, reason: '他明确说不想“欠”，馈赠恰恰是不用还的东西。' },
          { key: 'B', en: 'a promise to stay', cn: '留下的承诺', correct: false, reason: 'debt 与承诺无关，这里指人情上的亏欠和负担。' },
          { key: 'C', en: 'something you owe', cn: '债务、欠下的人情', correct: true, reason: 'be in someone is debt 指欠某人的情，他怕自己还不起。' }
        ],
        analysis: 'in someone is debt 是固定表达：欠某人的情。江予把边界划得很清楚，可他越是这样，越显得在意。',
        wrongFeedback: '你选错了，顾清和收回手说了句“随你”，担架被推进雨里，江予一个人盯着车顶。',
        afterCorrect: '顾清和看着他，声音很轻：“救人不是生意，不用还。”说完他转身上车，白大褂的下摆被雨水打湿了一片。'
      }
    ],
    completeText: '第二章结束。车开走时，江予从后视镜里看见顾清和站在原地没动。他忽然意识到，这个人大概不会像别人那样，被他一句“没事”就打发走。'
  },
  {
    id: 'dm_3',
    index: 3,
    title: '第 3 章 · 私人医生顾清和',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '第二天清晨，顾清和拎着医药箱出现在江予的公寓门口，合同上写着“私人医生，随行半年”。江予靠在门框上打量他，心想这人连敲门都敲得像在报数。',
    questions: [
      {
        plotDescription: '江予把合同翻到薪资那页，挑眉问他这么点钱也肯干。',
        line: "My paycheck is huge, but it doesn't buy me sleep.",
        lineCn: '我的薪水很高，可它买不到睡眠。',
        prompt: "根据上下文，选出画线词汇 'paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you are paid for work', cn: '薪水', correct: true, reason: '前一句在谈合同上的钱，paycheck 指工作拿到的报酬。' },
          { key: 'B', en: 'a year-end bonus', cn: '年终奖金', correct: false, reason: '奖金是额外奖励，这里说的是他固定拿到的那笔钱。' },
          { key: 'C', en: 'a shopping receipt', cn: '购物收据', correct: false, reason: '收据是付款凭证，和他在谈的报酬完全是两回事。' }
        ],
        analysis: 'paycheck 原指工资支票，口语里直接代指薪水。江予一边炫耀一边示弱：钱能解决很多事，却解决不了失眠。',
        wrongFeedback: '你选错了，顾清和把合同合上，说“那我走了”，江予下意识伸手拦住了门。',
        afterCorrect: '顾清和把笔递给他：“那就换个价钱。”江予低头签字，笔尖顿了顿，忽然发现自己很久没有这么听话过。'
      },
      {
        plotDescription: '桌上摊着一叠医院单据，顾清和一张张摊平，说这些不能拖。',
        line: "These hospital bills aren't going away. Pay them today.",
        lineCn: '这些医院账单不会自己消失，今天就去付掉。',
        prompt: "根据上下文，选出画线词汇 'bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'business cards', cn: '名片', correct: false, reason: '名片不会产生欠款，也不需要专门“去付掉”。' },
          { key: 'B', en: 'concert tickets', cn: '演唱会门票', correct: false, reason: '门票是入场凭证，这里说的是医院寄来的欠款单。' },
          { key: 'C', en: 'statements of money owed', cn: '账单', correct: true, reason: '医院 bills 指需要付款的费用清单，所以他说不能拖。' }
        ],
        analysis: 'bills 在生活里常指水电、医疗等应付账单。顾清和管的是病情，却顺手把江予乱成一团的生活也理了。',
        wrongFeedback: '你选错了，账单被风掀到地上，江予弯腰去捡，起身时耳朵里嗡的一声。',
        afterCorrect: '江予一张张付完，把手机往沙发上一丢：“行了，顾医生。”顾清和嗯了一声，转身去厨房烧水，像这屋子本来就该有他。'
      },
      {
        plotDescription: '楼下便利店，顾清和买了两瓶水，从钱包里抽出几张纸币。',
        line: "He paid in cash and told the clerk to keep the change.",
        lineCn: '他付了现金，还让店员不用找零。',
        prompt: "根据上下文，选出画线词汇 'cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'a credit card', cn: '信用卡', correct: false, reason: '后面的“不用找零”正是现金支付才会有的场景。' },
          { key: 'B', en: 'physical money', cn: '现金', correct: true, reason: 'in cash 指用纸币硬币付款，找零也只发生在现金交易里。' },
          { key: 'C', en: 'a bank transfer', cn: '银行转账', correct: false, reason: '转账没有找零这一步，也不需要店员经手。' }
        ],
        analysis: 'pay in cash 是固定搭配：用现金支付。这个细节让江予意外——一个私人医生，居然还随身带现金。',
        wrongFeedback: '你选错了，江予站在门口，把要说的那句“我请你”咽了回去。',
        afterCorrect: '江予接过水，忽然问：“你一直这么过日子？”顾清和拧开瓶盖：“方便。”两个字，把江予后面的话全堵住了。'
      },
      {
        plotDescription: '回程车上，顾清和提到自己读医时借过钱，语气轻得像在说天气。',
        line: "I took out a loan for medical school. It took me six years to pay it off.",
        lineCn: '我为了读医学院贷了款，还了六年才还清。',
        prompt: "根据上下文，选出画线词汇 'loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money borrowed that must be repaid', cn: '贷款', correct: true, reason: '后一句说还了六年，说明这笔钱是借来并且必须偿还的。' },
          { key: 'B', en: 'money given as a gift', cn: '赠款', correct: false, reason: '赠款不用还，而他花了六年才还清，显然不是赠予。' },
          { key: 'C', en: 'a fine from the school', cn: '学校罚款', correct: false, reason: '罚款不会用六年分期偿还，语境也不相符。' }
        ],
        analysis: 'take out a loan 是“申请贷款”的固定说法。顾清和说得很平淡，江予却第一次意识到，这个人也有过很难的日子。',
        wrongFeedback: '你选错了，江予接不上话，车里的沉默比窗外的红灯还长。',
        afterCorrect: '江予看着窗外，很久才问：“那你现在还欠钱吗？”顾清和笑了一下：“不欠了。所以我可以只做我想做的事。”'
      }
    ],
    completeText: '第三章结束。那天之后，顾清和每天七点准时出现在门口。江予开始习惯有人替他量血压、递温水，也开始害怕那支手电照进耳朵的时刻。'
  },
  {
    id: 'dm_4',
    index: 4,
    title: '第 4 章 · 病房里的第一份账单',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '江予的公寓干净得像样板间，冰箱里只有水和过期的酱料。顾清和打开衣柜，发现这位顶流所有私服都是同一个牌子，标签都还没剪。',
    questions: [
      {
        plotDescription: '顾清和捏着那件起球的旧卫衣，问他为什么到现在还留着。',
        line: "This hoodie is cheap, but I've worn it for eight years.",
        lineCn: '这件卫衣很便宜，可我穿了八年。',
        prompt: "根据上下文，选出画线词汇 'cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'very expensive', cn: '很贵', correct: false, reason: '穿了八年的旧卫衣，通常不会是昂贵的东西，语境不支持。' },
          { key: 'B', en: 'low in price', cn: '便宜的', correct: true, reason: 'cheap 在这里指价格低，和后面“穿了八年”形成对照。' },
          { key: 'C', en: 'out of style', cn: '过时的', correct: false, reason: 'cheap 说的是价格，不是款式新旧，别混淆。' }
        ],
        analysis: 'cheap 形容价格低，也可形容人抠门。这里江予强调的不是衣服便宜，而是便宜的东西他也舍不得扔。',
        wrongFeedback: '你选错了，顾清和把卫衣放回原处，江予忽然伸手抢过去抱住，像被看穿了什么。',
        afterCorrect: '顾清和没追问，只把衣柜门关上：“留着吧。旧的东西，穿着安心。”江予背对着他，肩膀轻轻松了一下。'
      },
      {
        plotDescription: '顾清和把体检报告放在桌上，语气第一次变得很硬。',
        line: "You can't afford another collapse. Your body isn't a machine.",
        lineCn: '你经不起再倒下一次了，你的身体不是机器。',
        prompt: "根据上下文，选出画线词汇 'afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'be able to bear the cost of', cn: '负担得起、承受得起', correct: true, reason: '这里指身体已经付不起再倒一次的代价，afford 引申为承受。' },
          { key: 'B', en: 'deserve', cn: '值得', correct: false, reason: '他是在警告，不是在说江予“值得”倒下，语气完全不同。' },
          { key: 'C', en: 'avoid completely', cn: '完全避免', correct: false, reason: 'afford 不表示避免，而是承担得起某种代价。' }
        ],
        analysis: 'afford 本义是“买得起”，也常引申为“承受得起某种后果”。顾清和用这个词，是在替江予算一笔身体的账。',
        wrongFeedback: '你选错了，江予把报告推回去说“我很清楚自己的极限”，顾清和的眼神冷了下来。',
        afterCorrect: '江予没说话，手指在报告边缘来回摩挲。半晌他抬头：“那你告诉我，我还剩多少？”顾清和没有立刻回答。'
      },
      {
        plotDescription: '江予指着窗外凌晨四点的城市，说这场巡演他一定要唱完。',
        line: "Two hours of sleep, one perfect show. It's worth it.",
        lineCn: '只睡两小时，换一场完美的演出，值了。',
        prompt: "根据上下文，选出画线词汇 'worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'too expensive', cn: '太贵了', correct: false, reason: '他说“值了”，是觉得代价可以接受，不是在嫌贵。' },
          { key: 'B', en: 'free of charge', cn: '免费的', correct: false, reason: 'worth it 和免费无关，说的是付出与回报相称。' },
          { key: 'C', en: 'deserving the cost', cn: '值得、划算', correct: true, reason: '前一句给出代价与回报，worth it 表示这笔交换划算。' }
        ],
        analysis: 'worth it 是口语高频：值了、不亏。江予把健康和舞台放在天平两端，毫不犹豫地选了后者。',
        wrongFeedback: '你选错了，顾清和把窗帘拉上，屋子里黑下来，江予的倔强没了落点。',
        afterCorrect: '顾清和沉默很久，说：“那我把两小时变成四小时。”江予愣住，第一次觉得有人不是在拦他，而是在陪他。'
      },
      {
        plotDescription: '深夜顾清和还在电脑前写稿，江予探头问他是不是缺钱。',
        line: "It's just a side hustle. I write for a medical column.",
        lineCn: '这只是个副业，我给一个医学专栏写稿。',
        prompt: "根据上下文，选出画线词汇 'side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'his main job', cn: '主业', correct: false, reason: '他明确说“只是副业”，主业是当江予的私人医生。' },
          { key: 'B', en: 'a second job for extra income', cn: '副业', correct: true, reason: 'side hustle 指主业之外挣钱的行当，这里指写医学专栏。' },
          { key: 'C', en: 'a pure hobby', cn: '纯粹的爱好', correct: false, reason: '专栏是有报酬的写作，不只是消遣，所以叫 side hustle。' }
        ],
        analysis: 'side hustle 强调“能赚钱的第二职业”。顾清和写专栏，既是收入，也是他不肯把全部生活交给一个人的方式。',
        wrongFeedback: '你选错了，江予把热牛奶放在他手边，说了句“别写了”，语气比谁都像命令。',
        afterCorrect: '顾清和合上电脑：“写完这段就睡。”江予没走，靠在门边看他打字，直到台灯的光把两个影子叠在一起。'
      }
    ],
    completeText: '第四章结束。顾清和渐渐发现，江予不是不肯休息，是不敢。他怕一停下来，耳朵里的声音就会变得清楚，清楚到再也骗不了自己。'
  },
  {
    id: 'dm_5',
    index: 5,
    title: '第 5 章 · 左耳的杂音',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '复诊安排在深夜。江予坐在沙发扶手上，任由顾清和把耳机戴上他的左耳，一次次调高音量。房间里安静得能听见冰箱运转，而他什么都听不见。',
    questions: [
      {
        plotDescription: '沉默太久，江予忽然笑着提起自己在练习室的那几年。',
        line: "We danced twelve hours a day for minimum wage and still thought we were lucky.",
        lineCn: '我们一天跳十二个小时，拿最低工资，还觉得自己很幸运。',
        prompt: "根据上下文，选出画线词汇 'minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'a huge salary', cn: '高额薪水', correct: false, reason: '一天跳十二小时只拿这点钱，显然不是高薪，而是最低报酬。' },
          { key: 'B', en: 'a monthly bonus', cn: '月度奖金', correct: false, reason: '奖金是额外奖励，这里说的是当时赖以生活的基本报酬。' },
          { key: 'C', en: 'the lowest legal pay', cn: '最低工资', correct: true, reason: 'minimum wage 指法律规定的最低报酬标准，符合练习生时期。' }
        ],
        analysis: 'minimum wage 是“法定最低工资”。江予说这话时在笑，可那笑意里全是从前咬牙撑过来的日子。',
        wrongFeedback: '你选错了，顾清和的手停了一下，耳机里的电流声忽然变得很刺耳。',
        afterCorrect: '顾清和取下耳机：“所以你习惯了用身体去换。”江予想反驳，话到嘴边又咽回去，因为他说得对。'
      },
      {
        plotDescription: '顾清和瞥见他手机弹出的银行提醒，眉头皱了一下。',
        line: "Your card hit overdraft again. What did you buy this time?",
        lineCn: '你的卡又透支了，这次买了什么？',
        prompt: "根据上下文，选出画线词汇 'overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a refund', cn: '退款', correct: false, reason: '退款是钱退回来，和卡被刷到负数完全相反。' },
          { key: 'B', en: 'spending more than you have', cn: '透支', correct: true, reason: 'overdraft 指账户余额不足仍继续支付，所以银行来提醒。' },
          { key: 'C', en: 'a discount coupon', cn: '折扣券', correct: false, reason: '折扣券不会让账户变成负数，也和银行提醒无关。' }
        ],
        analysis: 'overdraft 是银行术语“透支”，也指透支额度。江予花钱没数，顾清和却从这条提醒里看出了别的东西。',
        wrongFeedback: '你选错了，江予把手机反扣在桌上说“不关你的事”，空气一下子僵住。',
        afterCorrect: '顾清和把手机推回去：“买助听设备不算乱花。”江予怔住，他确实刚下单了一套监测仪器。'
      },
      {
        plotDescription: '顾清和问起琴盒里那支定制麦克风，江予的眼神软了一点。',
        line: "I saved up for a year to buy that mic. It was my first real thing.",
        lineCn: '我存了一年的钱才买到那支麦克风，那是我第一件真正属于自己的东西。',
        prompt: "根据上下文，选出画线词汇 'saved up' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money aside over time', cn: '存钱', correct: true, reason: '存了一年才买得起，说明是把钱一点点攒下来的。' },
          { key: 'B', en: 'spend everything at once', cn: '一次性花光', correct: false, reason: 'save up 是慢慢攒，和一次花光正好相反。' },
          { key: 'C', en: 'borrow from friends', cn: '向朋友借', correct: false, reason: '他是靠自己存下来的钱，不是向别人借的。' }
        ],
        analysis: 'save up for 是“为某样东西攒钱”。那支麦克风不是奢侈品，是他确认自己真的能唱歌的证据。',
        wrongFeedback: '你选错了，江予把麦克风收回盒子里，动作很轻，像怕碰坏什么。',
        afterCorrect: '顾清和看着那支麦克风：“它还能用。”江予低头：“能。只要我还听得见。”这句话说完，两个人都没再开口。'
      },
      {
        plotDescription: '顾清和把一份手术方案推过来，最后一页写着预估费用。',
        line: "Invest in your ears now, or spend ten times more later.",
        lineCn: '现在把钱投在耳朵上，否则以后要花十倍。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'waste money on', cn: '把钱浪费在', correct: false, reason: '他是在劝对方花这笔钱，不是认为这笔钱白花。' },
          { key: 'B', en: 'save time on', cn: '在……上省时间', correct: false, reason: 'invest 与时间无关，这里谈的是钱和健康的投入。' },
          { key: 'C', en: 'put money into for future benefit', cn: '投资', correct: true, reason: '后一句对比未来十倍的代价，说明这是为将来收益投入。' }
        ],
        analysis: 'invest in 本意“投资”，也常用来指对健康、对自己的投入。顾清和把手术说成一笔投资，是想让江予听得进去。',
        wrongFeedback: '你选错了，江予把方案推回去说“我不做”，声音比想象中还要平静。',
        afterCorrect: '顾清和没有劝，只把方案留在桌上：“你可以慢慢想。但时间不会等你。”那一夜，江予盯着那几页纸到天亮。'
      }
    ],
    completeText: '第五章结束。左耳的高频已经掉到危险区，顾清和在病历上写下一个日期，又划掉。他知道，从这一刻起，他们之间多了一个谁都不能先说出口的秘密。'
  },
  {
    id: 'dm_6',
    index: 6,
    title: '第 6 章 · 别告诉任何人',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '第二天有品牌方来探班，会议室里摆着水果和合同。江予笑着应酬，顾清和站在角落，看见他每隔几分钟就不自觉地侧一下头，用右耳去对准说话的人。',
    questions: [
      {
        plotDescription: '品牌方谈起代言费，江予随口接了一句，语气懒散又熟练。',
        line: "After tax, that number isn't as pretty as you think.",
        lineCn: '扣完税，那个数字没你想的那么好看。',
        prompt: "根据上下文，选出画线词汇 'tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid to the government', cn: '税', correct: true, reason: '代言费扣掉一部分交给政府，这一部分就是 tax。' },
          { key: 'B', en: 'a tip for the staff', cn: '给员工的小费', correct: false, reason: '小费是给服务人员的，不会从代言费里整体扣除。' },
          { key: 'C', en: 'the rent of the venue', cn: '场地租金', correct: false, reason: '场地租金是支出项目，和“扣完剩下的数字”语境不同。' }
        ],
        analysis: 'tax 指税款。江予用一句轻描淡写的话，把天价代言费拉回现实，也顺手挡掉了对方接下来的试探。',
        wrongFeedback: '你选错了，品牌方笑意一僵，会议室安静下来，江予却像没察觉。',
        afterCorrect: '散会后顾清和递给他一杯水：“你刚才听清了吗？”江予顿了两秒：“听清了。”那两秒，比任何回答都诚实。'
      },
      {
        plotDescription: '主办方临时改期，助理小声问要不要给观众退钱。',
        line: "If we cancel, every ticket gets a full refund. No excuses.",
        lineCn: '如果取消，每张票全额退款，没有借口。',
        prompt: "根据上下文，选出画线词汇 'refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'a replacement ticket', cn: '替换门票', correct: false, reason: '退款是把钱退回去，不是换一张新的票。' },
          { key: 'B', en: 'a formal apology', cn: '正式道歉', correct: false, reason: '道歉不能解决票款问题，这里说的是钱要退回去。' },
          { key: 'C', en: 'money given back', cn: '退款', correct: true, reason: '取消演出后把票钱还给观众，这正是 refund。' }
        ],
        analysis: 'refund 既是名词“退款”，也是动词“退钱”。江予说“没有借口”，是不想让自己成为那个被原谅的人。',
        wrongFeedback: '你选错了，主办方顺势压下了这场演出，江予在空荡的场馆里站了很久。',
        afterCorrect: '顾清和在后台找到他，什么也没说，只把一张票根放进他手心。江予低头看，是第一排的座位。'
      },
      {
        plotDescription: '顾清和整理药箱，把一张购物小票递到他眼前。',
        line: "Keep the receipt. If the machine breaks, we can return it.",
        lineCn: '留着收据，机器要是坏了，我们还能退。',
        prompt: "根据上下文，选出画线词汇 'receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a doctor prescription', cn: '医生处方', correct: false, reason: '处方是开药的单子，不能用来退货，语境也不符。' },
          { key: 'B', en: 'proof of purchase', cn: '收据、购物凭证', correct: true, reason: '后面说坏了可以退，说明这是购买凭证 receipt。' },
          { key: 'C', en: 'a medical report', cn: '体检报告', correct: false, reason: '报告记录病情，不能作为退货依据，用途不同。' }
        ],
        analysis: 'receipt 是“收据、购物凭证”，退货和保修都要靠它。顾清和做事一向留后手，连一张小票都不扔。',
        wrongFeedback: '你选错了，那张小票被风吹走，顾清和弯腰去追，江予忽然觉得有点好笑。',
        afterCorrect: '江予把收据折好，塞进钱包最里层。顾清和看见了，没说什么，只把药箱的扣子扣得更紧了一点。'
      },
      {
        plotDescription: '收工后两人在巷口吃面，江予结账时多放了些钱在桌上。',
        line: "I left a big tip. That's why the owner lets me sit in the back corner.",
        lineCn: '我多留了小费，老板才让我坐后角落那张桌。',
        prompt: "根据上下文，选出画线词汇 'tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money for good service', cn: '小费', correct: true, reason: '结账时多留给老板的钱，正是为服务额外付的 tip。' },
          { key: 'B', en: 'a piece of advice', cn: '建议', correct: false, reason: 'tip 也能指建议，但这里说的是留在桌上的钱。' },
          { key: 'C', en: 'a gift card', cn: '礼品卡', correct: false, reason: '他留的是现金，不是可以刷卡消费的卡片。' }
        ],
        analysis: 'tip 有两个高频义项：小费和建议。判断靠语境——这里出现“留在桌上”“多给”，只能是小费。',
        wrongFeedback: '你选错了，老板以为钱算错了，追出来喊住他们，江予耳根一下红了。',
        afterCorrect: '顾清和把自己那碗面推过去一半：“下次我带你来，不用给小费。”江予抬眼：“你请？”他嗯了一声，很自然。'
      }
    ],
    completeText: '第六章结束。那碗面之后，江予开始习惯身边有个人替他挡掉琐事。可越是这样，他越不敢说出那句“我左耳听不见了”。'
  },
  {
    id: 'dm_7',
    index: 7,
    title: '第 7 章 · 贴身随行的规矩',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '江予把一份新合同推到顾清和面前，说之前那半年太短，他要改成长期。顾清和没接，只问他是不是又熬夜了。窗外天刚亮，茶几上还放着没动的早餐。',
    questions: [
      {
        plotDescription: '江予敲了敲桌面，语气像在谈一笔很重要的生意。',
        line: "I want to hire you full-time. Name your price.",
        lineCn: '我想全职雇你，价钱你开。',
        prompt: "根据上下文，选出画线词汇 'hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'fire someone', cn: '解雇某人', correct: false, reason: '他是想留住这个人，还主动让对方开价，显然不是解雇。' },
          { key: 'B', en: 'employ someone', cn: '雇佣', correct: true, reason: '后面说“价钱你开”，说明他要把顾清和正式请到身边工作。' },
          { key: 'C', en: 'thank someone', cn: '感谢某人', correct: false, reason: 'hire 是雇佣关系，不是道谢，更不会有价钱可谈。' }
        ],
        analysis: 'hire 指“雇佣、聘用”。江予用谈生意的方式开口，是因为他不擅长说“我需要你”这种话。',
        wrongFeedback: '你选错了，顾清和把合同推回来，说“我不缺钱”，江予的手指僵在纸上。',
        afterCorrect: '顾清和看了他一会儿：“我留不留，不取决于合同。”江予抬头，那句“取决于什么”到底没问出口。'
      },
      {
        plotDescription: '公司那边打来电话，语气很硬，说医务团队必须换人。',
        line: "If you tell the board about my ear, they will fire you.",
        lineCn: '你要是把我的耳朵告诉董事会，他们就会解雇你。',
        prompt: "根据上下文，选出画线词汇 'fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'dismiss from a job', cn: '解雇', correct: true, reason: '董事会掌握人事权，把消息说出去会让他丢掉这份工作。' },
          { key: 'B', en: 'promote to a higher post', cn: '升职', correct: false, reason: '泄露病情是坏事，结果不可能是升职，方向反了。' },
          { key: 'C', en: 'pay a fine', cn: '罚款', correct: false, reason: 'fire 在这里指丢掉工作，不是交钱了事。' }
        ],
        analysis: 'fire 作动词是“解雇”，和 hire 相对。江予这句警告听着像威胁，其实是在保护顾清和。',
        wrongFeedback: '你选错了，顾清和沉默地收拾药箱，江予伸手挡住门口，第一次有点慌。',
        afterCorrect: '顾清和抬眼：“你在担心我？”江予收回手，别开脸：“我只是不想欠人。”声音低得几乎听不见。'
      },
      {
        plotDescription: '顾清和把听诊器收进口袋，说这份工作他可以不做，但不能被利用。',
        line: "I will quit before I let them use your chart as a weapon.",
        lineCn: '在让他们拿你的病历当武器之前，我会先辞职。',
        prompt: "根据上下文，选出画线词汇 'quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'retire at an old age', cn: '到龄退休', correct: false, reason: '他说的是一气之下不干了，和年龄、退休毫无关系。' },
          { key: 'B', en: 'take a short break', cn: '短暂休息', correct: false, reason: 'quit 是彻底离开岗位，不是请几天假休息。' },
          { key: 'C', en: 'leave a job for good', cn: '辞职', correct: true, reason: '他宁可失去这份工作，也不愿病历被人拿来利用。' }
        ],
        analysis: 'quit 强调主动、彻底地离开工作。顾清和把话说得很轻，却是在表态：他站在江予这一边。',
        wrongFeedback: '你选错了，江予脱口而出“不行”，说完自己也愣了，屋子安静得可怕。',
        afterCorrect: '顾清和看着他，慢慢把听诊器又拿了出来：“那我留下。”江予喉咙动了一下，什么也没说。'
      },
      {
        plotDescription: '电话那头换了语气，说只要配合，就能给他一个更好的位置。',
        line: "They offered me a promotion. I turned it down this morning.",
        lineCn: '他们给了我一个升职机会，我今天早上推掉了。',
        prompt: "根据上下文，选出画线词汇 'promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious warning', cn: '严厉警告', correct: false, reason: '对方是拿好处拉拢，不会把警告当作交换条件。' },
          { key: 'B', en: 'a higher position at work', cn: '升职', correct: true, reason: 'promotion 指职位提升，所以他才会说“推掉了”。' },
          { key: 'C', en: 'a transfer to another city', cn: '调去外地', correct: false, reason: '调岗只是换地方，不一定升职，这里是职位提升。' }
        ],
        analysis: 'promotion 是“升职、晋升”。顾清和把这件事说得像扔掉一张废纸，江予却听懂了背后的代价。',
        wrongFeedback: '你选错了，江予问“为什么”，顾清和没答，只把窗户推开让风进来。',
        afterCorrect: '风把桌上的纸吹起一角。江予低声说：“你会后悔的。”顾清和回头：“我后悔的事，从来不在这上面。”'
      }
    ],
    completeText: '第七章结束。合同最终签了，期限那一栏空着。江予说空着好，随时能改。顾清和没反对，只把那一页折了个角。'
  },
  {
    id: 'dm_8',
    index: 8,
    title: '第 8 章 · 凌晨三点的复诊',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '新专辑进入倒计时，录音棚的灯整夜不关。顾清和每天在门口等，等到江予摘下耳机走出来，脸色一次比一次白。他把这些都记在本子上，像记一份没人会看的病历。',
    questions: [
      {
        plotDescription: '凌晨两点，制作人还在调音，顾清和看了一眼时间。',
        line: "The whole team is working overtime again. Nobody has eaten.",
        lineCn: '整个团队又在加班，没人吃过饭。',
        prompt: "根据上下文，选出画线词汇 'overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'a day off', cn: '休息日', correct: false, reason: '凌晨两点还在工作，显然不是休息日，语境相反。' },
          { key: 'B', en: 'a change of shift', cn: '换班', correct: false, reason: '大家是继续干下去，不是换人接替，注意语境。' },
          { key: 'C', en: 'working beyond normal hours', cn: '加班', correct: true, reason: '凌晨仍在录音棚工作，正是超出正常工时。' }
        ],
        analysis: 'overtime 指超出正常工作时间的工作，也指加班费。顾清和在意的不只是江予，还有整个被拖垮的团队。',
        wrongFeedback: '你选错了，顾清和把外卖放在门口就走，第二天江予才发现饭已经凉透。',
        afterCorrect: '他还是把热汤提了进去。制作人一愣，江予抬头看见他，眼睛里那点疲惫忽然有了落脚的地方。'
      },
      {
        plotDescription: '制作人拍着桌子，说这一版必须赶上发片时间。',
        line: "The deadline is in nine days. We can't move it again.",
        lineCn: '截止时间只剩九天，不能再往后推了。',
        prompt: "根据上下文，选出画线词汇 'deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'a starting date', cn: '开始日期', correct: false, reason: '“不能再往后推”说的是最后期限，不是开始时间。' },
          { key: 'B', en: 'the final time limit', cn: '最后期限、死线', correct: true, reason: '九天之后必须交片，正是不可再延的截止期限。' },
          { key: 'C', en: 'a public holiday', cn: '公共假日', correct: false, reason: '假日不会因为“不能再推”而影响发片，语境不符。' }
        ],
        analysis: 'deadline 是“最后期限”。九天，对一张专辑来说几乎是宣判，对一只正在失聪的耳朵更是。',
        wrongFeedback: '你选错了，江予把耳机重新戴上说“那就熬”，顾清和的手指在门框上收紧。',
        afterCorrect: '顾清和走进录音棚，把水放在调音台上：“熬可以，每小时休息十分钟。”没人敢反驳他。'
      },
      {
        plotDescription: '电话里品牌方催得紧，助理捂着话筒看向江予。',
        line: "The client wants a finished song by Friday. They paid for it.",
        lineCn: '客户要周五前拿到成品，他们付了钱。',
        prompt: "根据上下文，选出画线词汇 'client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a paying customer', cn: '客户', correct: true, reason: '后面说“他们付了钱”，说明这是付费合作的客户。' },
          { key: 'B', en: 'a personal doctor', cn: '私人医生', correct: false, reason: '医生不会要求交歌，也不涉及付钱买成品。' },
          { key: 'C', en: 'a loyal fan', cn: '忠实粉丝', correct: false, reason: '粉丝不会用合同催交付，这里指的是商业客户。' }
        ],
        analysis: 'client 指付费购买服务的客户。顾清和听见这个词，忽然明白江予为什么不敢停下来。',
        wrongFeedback: '你选错了，助理把电话挂了，录音棚里只剩空调声，江予揉了揉太阳穴。',
        afterCorrect: '顾清和开口：“告诉客户，歌手需要休息。”助理愣住，江予也愣住，谁都没见过他这样说话。'
      },
      {
        plotDescription: '公司临时召集开会，江予到的时候，所有人都在等他一个。',
        line: "The meeting ran until two in the morning. They still didn't decide.",
        lineCn: '会议开到凌晨两点，他们还是没做决定。',
        prompt: "根据上下文，选出画线词汇 'meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a celebration party', cn: '庆功派对', correct: false, reason: '开到凌晨还没有结果，气氛显然不是庆祝。' },
          { key: 'B', en: 'a medical surgery', cn: '外科手术', correct: false, reason: '一群人讨论却“没做决定”，并不是手术场景。' },
          { key: 'C', en: 'a formal discussion', cn: '会议', correct: true, reason: '开到凌晨两点仍未有结论，正是会议讨论的情形。' }
        ],
        analysis: 'meeting 是“会议”。一场开到凌晨、什么都没定的会，把江予最后一点力气也耗掉了。',
        wrongFeedback: '你选错了，江予在电梯里靠着墙，顾清和伸手扶了一下，他没有躲。',
        afterCorrect: '电梯镜面里，两个人靠得很近。顾清和低声说：“下次这种会，我陪你去。”江予闭着眼，嗯了一声。'
      }
    ],
    completeText: '第八章结束。回家的路上，江予第一次主动说起耳朵：“高频那块，已经模糊了。”顾清和握着方向盘的手紧了紧，没有说“我早就知道”。'
  },
  {
    id: 'dm_9',
    index: 9,
    title: '第 9 章 · 你不能唱了',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '检查结果摊在桌上，左耳的高频曲线像一道断崖。顾清和说得很慢，江予却只听清最后一句：如果再唱下去，可能会彻底听不见。窗外的城市正在醒来。',
    questions: [
      {
        plotDescription: '经纪人还在门外催，说这个企划不能停，投资都压在上面。',
        line: "This project can wait. My ear can't.",
        lineCn: '这个项目可以等，我的耳朵不能等。',
        prompt: "根据上下文，选出画线词汇 'project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work', cn: '项目', correct: true, reason: '前文提到企划和投资，指的就是正在推进的工作项目。' },
          { key: 'B', en: 'a verbal promise', cn: '口头承诺', correct: false, reason: '承诺不会因为投资而停摆，这里说的是具体计划。' },
          { key: 'C', en: 'a long vacation', cn: '长假', correct: false, reason: '假期不需要投资，也不会被人催着推进。' }
        ],
        analysis: 'project 指有目标、有周期的工作计划。江予第一次把“等”这个字，放在了工作前面。',
        wrongFeedback: '你选错了，经纪人推门进来，江予的话被打断，那句“不能等”再没说完整。',
        afterCorrect: '顾清和替他挡在门口：“他在休息。”门关上的一刻，江予忽然觉得，这间屋子终于安静了。'
      },
      {
        plotDescription: '江予忽然笑了一下，说起自己十八岁那年的旧事。',
        line: "I got fired from my first label for refusing to lip-sync.",
        lineCn: '我十八岁被第一家唱片公司炒了，因为我不肯假唱。',
        prompt: "根据上下文，选出画线词汇 'fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'given a promotion', cn: '得到升职', correct: false, reason: '拒绝假唱是被处罚的原因，不可能是得到升职。' },
          { key: 'B', en: 'invited to perform', cn: '受邀演出', correct: false, reason: '公司是把他赶走，不是请他登台，方向相反。' },
          { key: 'C', en: 'dismissed from a job', cn: '被解雇、被炒', correct: true, reason: '因为不肯假唱而被公司赶走，正是 got fired 的意思。' }
        ],
        analysis: 'get fired 是“被解雇”的口语说法。江予说得很轻，可那次被赶走，是他所有倔强的起点。',
        wrongFeedback: '你选错了，江予的笑停在脸上，顾清和递过来的水他也没接。',
        afterCorrect: '顾清和说：“那你现在也没变。”江予愣了一下，忽然觉得这句话比任何安慰都好用。'
      },
      {
        plotDescription: '顾清和把病历合上，提醒他别把所有人都当敌人，也别把一切当成交易。',
        line: "Music is a business, but you are not a product.",
        lineCn: '音乐是生意，但你不是商品。',
        prompt: "根据上下文，选出画线词汇 'business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a personal hobby', cn: '个人爱好', correct: false, reason: '音乐产业有合约、分成和票房，显然不只是爱好。' },
          { key: 'B', en: 'the activity of making money', cn: '生意、商业', correct: true, reason: '后半句的“商品”对应商业逻辑，business 指赚钱的行当。' },
          { key: 'C', en: 'a charity event', cn: '慈善活动', correct: false, reason: '慈善不以盈利为目的，和“商品”的对比不成立。' }
        ],
        analysis: 'business 指商业、生意。顾清和这句话，是在把江予从“被定价”的位置上拉回来。',
        wrongFeedback: '你选错了，江予冷冷回了句“你懂什么”，话一出口就后悔了。',
        afterCorrect: '顾清和没有生气，只把病历放回桌上：“我懂的是，你倒下了，他们换个人就行。”江予没再说话。'
      },
      {
        plotDescription: '沉默了很久，江予伸出手，说要跟他定一个规矩。',
        line: "We made a deal. No secrets in this room.",
        lineCn: '我们说好了，这间屋子里不许有秘密。',
        prompt: "根据上下文，选出画线词汇 'deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement between two people', cn: '约定、交易', correct: true, reason: '后面说“说好了”，说明这是两人达成的约定。' },
          { key: 'B', en: 'a serious quarrel', cn: '激烈争吵', correct: false, reason: '他伸出手来谈条件，不是要吵架，语气很郑重。' },
          { key: 'C', en: 'a practical joke', cn: '恶作剧', correct: false, reason: '这句话说得极其认真，和玩笑没有任何关系。' }
        ],
        analysis: 'make a deal 是“达成约定”。江予主动立规矩，是想给自己留一条能说实话的路。',
        wrongFeedback: '你选错了，顾清和没有握那只手，江予的手在半空停了很久。',
        afterCorrect: '顾清和最终握住他的手：“那你先说实话。”江予张了张嘴，那句“我听不清了”还是卡在喉咙里。'
      }
    ],
    completeText: '第九章结束。这天之后，“不能唱”三个字谁也没再提。顾清和把手术方案锁进抽屉，江予把助听器藏进琴盒，两个人默契得像共犯。'
  },
  {
    id: 'dm_10',
    index: 10,
    title: '第 10 章 · 他只签了一个名字',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '公司送来一份新合同，条款厚得像一本书。江予坐在会议桌这头，顾清和站在他身后，看着那些关于“健康风险由艺人自行承担”的字句，一行一行读下去。',
    questions: [
      {
        plotDescription: '律师把文件推过来，说签字之前最好有人陪着看一遍。',
        line: "Read the contract before you sign it. Every line.",
        lineCn: '签之前把合同读完，每一行都要看。',
        prompt: "根据上下文，选出画线词汇 'contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fan letter', cn: '粉丝来信', correct: false, reason: '粉丝来信不需要律师在场，也不会有任何条款。' },
          { key: 'B', en: 'a legal agreement', cn: '合同', correct: true, reason: '律师在场、要逐行阅读，正是有法律效力的合同。' },
          { key: 'C', en: 'a shopping list', cn: '购物清单', correct: false, reason: '购物清单没有法律效力，也不需要律师陪同。' }
        ],
        analysis: 'contract 指具有法律约束力的合同。顾清和逐行读，是在替江予看那些他自己不愿看的东西。',
        wrongFeedback: '你选错了，江予直接翻到最后一页签字，顾清和的手停在半空。',
        afterCorrect: '顾清和把文件抽走：“先看第七页。”江予皱眉，还是低头看了，脸色慢慢沉了下去。'
      },
      {
        plotDescription: '律师解释分成比例，语气公事公办，像在念一份清单。',
        line: "The label keeps eighty percent of the profit. You get the rest.",
        lineCn: '公司拿走八成利润，剩下的才归你。',
        prompt: "根据上下文，选出画线词汇 'profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'money left after costs', cn: '利润', correct: true, reason: '收入扣除成本后按比例分，这里的八成指的就是利润。' },
          { key: 'B', en: 'money lost in a deal', cn: '亏损', correct: false, reason: '分成的前提是有钱可赚，亏损没有百分比可分。' },
          { key: 'C', en: 'the tax on income', cn: '所得税', correct: false, reason: '税是上缴政府的部分，不是公司与艺人分的那笔钱。' }
        ],
        analysis: 'profit 指扣除成本后的利润。八成归公司，江予听完只是笑了一下，好像早就知道。',
        wrongFeedback: '你选错了，江予在合同上敲了敲手指说“无所谓”，顾清和却听出了疲惫。',
        afterCorrect: '顾清和低声问：“你不在意？”江予靠在椅背上：“我在意的不是钱。”他说完，眼睛看向别处。'
      },
      {
        plotDescription: '律师又补了一句，说巡演顺利结束，还有额外的奖励。',
        line: "There is a bonus if the tour ends on schedule. Health issues do not count.",
        lineCn: '巡演按期结束就有奖金，健康问题不算理由。',
        prompt: "根据上下文，选出画线词汇 'bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'a financial penalty', cn: '罚款', correct: false, reason: '这是额外给的钱，不是扣钱，方向完全相反。' },
          { key: 'B', en: 'a cut in salary', cn: '降薪', correct: false, reason: 'bonus 是加给的钱，降薪是减少，不能混为一谈。' },
          { key: 'C', en: 'extra money as a reward', cn: '奖金', correct: true, reason: '巡演按期完成给的额外报酬，正是 bonus。' }
        ],
        analysis: 'bonus 是“奖金、额外奖励”。那句“健康问题不算理由”，让这笔钱听起来更像一封警告信。',
        wrongFeedback: '你选错了，江予把合同合上，会议室里谁也没再说话。',
        afterCorrect: '顾清和把那一页折起来：“这条可以谈。”律师愣住，江予侧头看他，眼里有一点意外。'
      },
      {
        plotDescription: '谈完所有条件，律师随口问起私人医生的费用由谁承担。',
        line: "They doubled my salary to keep me quiet. Now they want to cut it.",
        lineCn: '他们当初把我的薪资翻倍让我闭嘴，现在又想砍掉。',
        prompt: "根据上下文，选出画线词汇 'salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'working hours', cn: '工作时长', correct: false, reason: '“翻倍”和“砍掉”说的是钱，不是工时长短。' },
          { key: 'B', en: 'fixed pay for a job', cn: '薪资', correct: true, reason: '翻倍和削减都指向报酬金额，salary 指固定薪资。' },
          { key: 'C', en: 'days of vacation', cn: '假期天数', correct: false, reason: '假期天数不会以“翻倍”的方式当作封口费。' }
        ],
        analysis: 'salary 指按月发放的固定薪资。这句抱怨，把公司那套先堵嘴、再省钱的做法全揭开了。',
        wrongFeedback: '你选错了，律师尴尬地咳嗽，江予却笑出声，笑得有点冷。',
        afterCorrect: '散会后走廊很空。江予忽然说：“你听见了吧，他们买的是我的沉默。”顾清和点头：“那就别卖。”'
      }
    ],
    completeText: '第十章结束。合同最终加了三条补充条款，都是顾清和坚持的。江予看着那些字，第一次觉得有人替他挡住的不只是风，还有整个行业的刀。'
  },
  {
    id: 'dm_11',
    index: 11,
    title: '第 11 章 · 录音棚里的失控',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '录音棚里，江予第三遍唱错同一句。他摘了耳机，说监听有问题，制作人冷笑，说这棚里所有人都听得见。顾清和站在玻璃外，手一直没从门把上放下。',
    questions: [
      {
        plotDescription: '制作人说他在装，江予的手在裤缝上攥紧，声音冷了下来。',
        line: "He said I was faking it. I was so pissed off I almost walked out.",
        lineCn: '他说我在装，我气得差点直接走人。',
        prompt: "根据上下文，选出画线词汇 'pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very tired', cn: '特别累', correct: false, reason: '他是被质疑后想摔门走人，情绪是怒，不是疲惫。' },
          { key: 'B', en: 'very happy', cn: '很高兴', correct: false, reason: '被说成装病还被冷笑，不可能是高兴，语境相反。' },
          { key: 'C', en: 'very angry', cn: '火大、气炸了', correct: true, reason: '后面说差点走人，说明他当时怒到极点。' }
        ],
        analysis: 'pissed off 是口语里极常见的“火大、气炸”。江予真正气的不是那句嘲讽，是没人相信他听不见。',
        wrongFeedback: '你选错了，江予把耳机摔在调音台上，录音棚里一片死寂。',
        afterCorrect: '玻璃门被推开，顾清和走进来，把耳机捡起来：“他说的是真的。”制作人的笑僵在脸上。'
      },
      {
        plotDescription: '监听忽然没了声音，助理慌慌张张地冲进来。',
        line: "Don't freak out, but the main monitor just died.",
        lineCn: '别慌，不过主监听刚刚烧了。',
        prompt: "根据上下文，选出画线词汇 'freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'laugh loudly', cn: '大声笑', correct: false, reason: '设备烧坏是坏消息，不可能叫人放声大笑。' },
          { key: 'B', en: 'lose control from panic', cn: '崩溃、抓狂', correct: true, reason: '先让人别慌，说明接下来要说的事会让人抓狂。' },
          { key: 'C', en: 'fall asleep', cn: '睡着', correct: false, reason: '助理是来报故障，不是来催人睡觉的。' }
        ],
        analysis: 'freak out 指因惊慌而失控，可引申为“抓狂”。这句“别慌”本身就是剧透：事情不小。',
        wrongFeedback: '你选错了，助理被自己的慌张带跑，整个棚里乱成一团，江予站在中间发怔。',
        afterCorrect: '顾清和按住他的肩：“看着我。设备坏了可以修，你的耳朵也一样。”江予的呼吸慢慢稳了下来。'
      },
      {
        plotDescription: '终于收工，江予靠在墙上，眼睛都懒得睁开。',
        line: "I'm exhausted, but I can still do one more take.",
        lineCn: '我精疲力尽了，但还能再来一条。',
        prompt: "根据上下文，选出画线词汇 'exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely out of energy', cn: '精疲力尽', correct: true, reason: '后面说“还能再来一条”，是用来对抗前面的精疲力尽。' },
          { key: 'B', en: 'bored', cn: '无聊', correct: false, reason: 'bored 是没兴趣，这里说的是身体被掏空。' },
          { key: 'C', en: 'hungry', cn: '肚子饿', correct: false, reason: '整夜录音的语境指向体力耗尽，不是饿。' }
        ],
        analysis: 'exhausted 是“精疲力尽”，比 tired 更重。他说还能再来一条，恰恰说明已经撑到极限。',
        wrongFeedback: '你选错了，江予又进棚唱了三条，出来时扶着门框，脸色白得吓人。',
        afterCorrect: '顾清和把外套披到他肩上：“够了。”江予笑了一下：“你管得真宽。”却没有把外套拿下来。'
      },
      {
        plotDescription: '第二天清晨，江予捂着额头坐在保姆车里，助理递来醒酒汤。',
        line: "This isn't a hangover. I didn't drink anything last night.",
        lineCn: '这不是宿醉，我昨晚一滴酒都没喝。',
        prompt: "根据上下文，选出画线词汇 'hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a headache from loud music', cn: '噪音引起的头痛', correct: false, reason: 'hangover 特指饮酒后的不适，不是噪音造成的。' },
          { key: 'B', en: 'a bad cold', cn: '重感冒', correct: false, reason: '感冒不会靠“没喝酒”来否认，语境不合。' },
          { key: 'C', en: 'sickness after drinking', cn: '宿醉', correct: true, reason: '他特意说自己没喝酒，正是在否认宿醉。' }
        ],
        analysis: 'hangover 指饮酒过量后第二天的不适。江予否认得很急，因为他知道这头痛意味着别的。',
        wrongFeedback: '你选错了，助理把醒酒汤收走，江予却突然捂住耳朵，指节发白。',
        afterCorrect: '顾清和拉开车门坐进来，看了一眼他的瞳孔：“不是宿醉。今天必须做检查。”江予这次没有反驳。'
      }
    ],
    completeText: '第十一章结束。检查单开出来的那个下午，江予躺在诊室的窄床上，第一次觉得天花板那么白。顾清和说，别再拿身体证明什么了。'
  },
  {
    id: 'dm_12',
    index: 12,
    title: '第 12 章 · 一场没开灯的对话',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '公寓没开灯，只有落地窗外的霓虹。江予抱着膝盖坐在地毯上，说他想退出这张专辑。顾清和在他对面坐下，两个人中间隔着一杯已经凉掉的水。',
    questions: [
      {
        plotDescription: '江予说那份合约像在吸他的血，每一条都在榨人。',
        line: "That contract is toxic. It feeds on you and gives nothing back.",
        lineCn: '那份合约有毒，它吸干你，什么都不还。',
        prompt: "根据上下文，选出画线词汇 'toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful and draining', cn: '有害的、吸干人的', correct: true, reason: '后半句说它吸干人、不给回报，正是有害的关系。' },
          { key: 'B', en: 'very sweet', cn: '很甜的', correct: false, reason: '他在控诉合约剥削，和“甜”完全相反。' },
          { key: 'C', en: 'easy to read', cn: '容易读懂的', correct: false, reason: 'toxic 与文字难易无关，这里说的是伤害性。' }
        ],
        analysis: 'toxic 本义“有毒的”，口语里常形容消耗人、伤害人的关系或环境。江予用的正是这个引申义。',
        wrongFeedback: '你选错了，江予把水杯推远，说“你不懂这行”，屋子里更暗了。',
        afterCorrect: '顾清和没有反驳，只把杯子拿回来重新倒了热水：“那就先从能改的那一条开始。”'
      },
      {
        plotDescription: '顾清和问了一句“你打算什么时候告诉他们”，空气忽然凝住。',
        line: "The silence after my question was awkward. Neither of us moved.",
        lineCn: '我问完那句之后，沉默很尴尬，我们谁都没动。',
        prompt: "根据上下文，选出画线词汇 'awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'peaceful', cn: '平静安宁的', correct: false, reason: '两个人都僵住不动，这不是安宁，是不自在。' },
          { key: 'B', en: 'noisy', cn: '吵闹的', correct: false, reason: '屋里没有开灯也没有声音，和吵闹相反。' },
          { key: 'C', en: 'embarrassing and uneasy', cn: '尴尬死', correct: true, reason: '谁都不动、谁也不说话，正是尴尬到极点的场面。' }
        ],
        analysis: 'awkward 形容让人不自在、不知道怎么接的场面。这里不是安静，是两个人都怕说错话。',
        wrongFeedback: '你选错了，江予起身去了阳台，玻璃门被关上，声音全隔在外面。',
        afterCorrect: '顾清和跟出去，把外套搭在他背上：“你可以不回答。但别一个人站着。”'
      },
      {
        plotDescription: '江予忽然模仿起制作人刚才的表情，自己先绷不住。',
        line: "His face when I said that — I'm dead. Look at it again.",
        lineCn: '我说那句话时他的表情，笑死我了，你再看看。',
        prompt: "根据上下文，选出画线词汇 'dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'no longer alive', cn: '死了', correct: false, reason: '他在讲一个好笑的表情，不是真的说谁去世了。' },
          { key: 'B', en: 'laughing so hard', cn: '笑死我了', correct: true, reason: '前一句在描述滑稽表情，I am dead 是笑到不行的口语。' },
          { key: 'C', en: 'very serious', cn: '非常严肃', correct: false, reason: '他正笑着模仿别人，气氛轻松，不是严肃。' }
        ],
        analysis: 'I am dead 是网络和口语里“笑死我了”的说法，和“死亡”无关。这里是全章唯一一处松口气的时刻。',
        wrongFeedback: '你选错了，江予的笑没被接住，他低下头，把脸埋进膝盖里。',
        afterCorrect: '顾清和终于笑了一下，很轻。江予抬起头，像被这一下点亮，连呼吸都慢了半拍。'
      },
      {
        plotDescription: '笑过之后，江予问他要不要听一遍还没做完的那首歌。',
        line: "I'm thrilled you asked. Play it. I want to hear it first.",
        lineCn: '你能问这句话，我太高兴了。放吧，我想第一个听。',
        prompt: "根据上下文，选出画线词汇 'thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '爽飞了、特别高兴', correct: true, reason: '他主动说想第一个听，语气是兴奋和期待。' },
          { key: 'B', en: 'a little worried', cn: '有点担心', correct: false, reason: '“想第一个听”是期待，不是担忧。' },
          { key: 'C', en: 'shocked in a bad way', cn: '震惊且不快', correct: false, reason: 'thrilled 是正面的强烈情绪，不是负面震惊。' }
        ],
        analysis: 'thrilled 表示极度高兴、兴奋，比 happy 更强烈。顾清和很少情绪外露，这一句算是破例。',
        wrongFeedback: '你选错了，江予把手机放下，说“算了，还没做完”，气氛一下退回原点。',
        afterCorrect: '前奏响起时，顾清和没说话。江予盯着他的侧脸，直到那句高音落下，才发现自己一直在等一个反应。'
      }
    ],
    completeText: '第十二章结束。歌放完，顾清和只说了一句“这一句你唱得很稳”。江予却听懂了，那是在说：你现在还唱得出来，所以别急着放弃。'
  },
  {
    id: 'dm_13',
    index: 13,
    title: '第 13 章 · 他把药换成了糖',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '顾清和把药盒重新贴了标签，把苦的那几粒换成糖衣片。江予发现时，正站在厨房门口，看见他低着头，一粒一粒地换，动作耐心得不像他。',
    questions: [
      {
        plotDescription: '片场探班的人太多，江予缩在休息室的角落，声音有点飘。',
        line: "I'm overwhelmed. Too many people, too many questions.",
        lineCn: '我有点扛不住了，人太多，问题也太多。',
        prompt: "根据上下文，选出画线词汇 'overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely relaxed', cn: '完全放松', correct: false, reason: '人太多问题太多才让他难受，放松与语境相反。' },
          { key: 'B', en: 'under too much pressure', cn: '压力过载、被压得喘不过气', correct: true, reason: '后半句列出一堆压力源，正是 overwhelmed 的感觉。' },
          { key: 'C', en: 'suddenly famous', cn: '突然出名', correct: false, reason: '他早就是顶流，这里说的是被压垮，不是走红。' }
        ],
        analysis: 'overwhelmed 指被情绪或事务压得喘不过气。江予在人群里说不出话，不是冷漠，是负荷到了顶。',
        wrongFeedback: '你选错了，江予把门反锁，外面敲门声一直响，他蹲在地上没动。',
        afterCorrect: '顾清和从侧门进来，把灯调暗，什么都没问，只在他旁边坐下。房间里终于只剩下两个人的呼吸。'
      },
      {
        plotDescription: '顾清和看他紧张得手指发抖，把水杯塞进他手里。',
        line: "Chill. We have all night. Nobody is timing you.",
        lineCn: '放松点，我们有一整晚，没人在给你计时。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'relax and calm down', cn: '放松、冷静下来', correct: true, reason: '后面说没人计时、有一整晚，是在让对方别紧张。' },
          { key: 'B', en: 'get angry', cn: '发火', correct: false, reason: '他是在安抚，不是挑事，语气完全不同。' },
          { key: 'C', en: 'leave at once', cn: '马上离开', correct: false, reason: '没人计时是让人慢慢来，不是催人走。' }
        ],
        analysis: 'Chill 作祈使句是“放松、别紧张”，也可指躺平休息。顾清和把节奏压下来，是在替江予卸压。',
        wrongFeedback: '你选错了，江予反而更急，水洒了一手，他低声说了句抱歉。',
        afterCorrect: '顾清和拿纸巾替他擦手，动作很慢：“不用道歉。这里没有镜头。”江予的手终于不抖了。'
      },
      {
        plotDescription: '每次检查结束，江予都要在车里坐很久才缓过来。',
        line: "After every checkup I feel drained. Like someone pulled a plug.",
        lineCn: '每次检查完我都像被掏空，像有人拔掉了插头。',
        prompt: "根据上下文，选出画线词汇 'drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'full of energy', cn: '精力充沛', correct: false, reason: '“像被拔掉插头”是没力气，和精力充沛相反。' },
          { key: 'B', en: 'wet with sweat', cn: '满身是汗', correct: false, reason: 'drain 本义排水，但这里说的是精力被抽干。' },
          { key: 'C', en: 'emptied of energy', cn: '被掏空、精疲力竭', correct: true, reason: '拔掉插头的比喻正是能量被抽走的感觉。' }
        ],
        analysis: 'drained 指精力被耗尽，常用 feel drained。江予不是身体累，是每次面对结果都要重新鼓起勇气。',
        wrongFeedback: '你选错了，江予把座椅放倒，闭上眼，一路都没再说话。',
        afterCorrect: '顾清和把车停在楼下，没有催他下车。过了很久，江予说：“再坐五分钟。”他说：“好。”'
      },
      {
        plotDescription: '顾清和注意到，每次手碰到病历，江予的呼吸就会变浅。',
        line: "You get anxious every time I open that folder.",
        lineCn: '每次我打开那个文件夹，你就开始焦虑。',
        prompt: "根据上下文，选出画线词汇 'anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'sleepy', cn: '困倦', correct: false, reason: '呼吸变浅是紧张的反应，不是想睡觉。' },
          { key: 'B', en: 'worried and nervous', cn: '焦虑、心神不宁', correct: true, reason: '一看到病历就有反应，说明他担心结果，是焦虑。' },
          { key: 'C', en: 'proud', cn: '骄傲', correct: false, reason: '面对病历不可能骄傲，这里明显是不安。' }
        ],
        analysis: 'anxious 指对未知结果感到紧张不安。江予怕的不是纸，是纸上那个越来越差的数字。',
        wrongFeedback: '你选错了，江予抢过文件夹合上，说“别看了”，声音有点抖。',
        afterCorrect: '顾清和把文件夹放到茶几另一头：“那今天不看。”江予怔住，第一次发现拒绝也可以被允许。'
      }
    ],
    completeText: '第十三章结束。那盒被换过标签的药放在床头，江予每晚都按时吃。他忽然明白，有人替你把苦换成甜，是件很奢侈的事。'
  },
  {
    id: 'dm_14',
    index: 14,
    title: '第 14 章 · 后台的十分钟',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演出后台只有十分钟。江予坐在化妆镜前，手心里全是汗，耳返里传来一阵一阵的杂音。顾清和蹲在他面前，替他调整音量，抬头时两个人的距离近得有点过分。',
    questions: [
      {
        plotDescription: '外面传来导演的吼声，说再拖就掐掉节目，江予听见了。',
        line: "The director was furious when we stopped the shoot. He doesn't care why.",
        lineCn: '我们停下拍摄时，导演狂怒，他根本不管原因。',
        prompt: "根据上下文，选出画线词汇 'furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'a little confused', cn: '有点困惑', correct: false, reason: '“根本不管原因”说明他是在发火，不是困惑。' },
          { key: 'B', en: 'very pleased', cn: '很满意', correct: false, reason: '节目被拖停还满意，逻辑不成立，方向相反。' },
          { key: 'C', en: 'extremely angry', cn: '狂怒', correct: true, reason: '吼声和“不管原因”都指向极度的愤怒。' }
        ],
        analysis: 'furious 表示暴怒，比 angry 更强。顾清和平铺直叙地说出来，是想让江予别再为别人的情绪负责。',
        wrongFeedback: '你选错了，江予的肩绷得更紧，耳返里的杂音一下放大。',
        afterCorrect: '顾清和摘下他一边耳返：“看着我。他吼他的，你唱你的。”江予的呼吸慢慢沉下来。'
      },
      {
        plotDescription: '化妆师离开后，江予忽然说，他最近早上都不想起床。',
        line: "He has been depressed since the diagnosis. I noticed it before he said it.",
        lineCn: '确诊之后他一直很抑郁，我比他自己更早发现。',
        prompt: "根据上下文，选出画线词汇 'depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited', cn: '非常兴奋', correct: false, reason: '不想起床、情绪低落，和兴奋完全是两回事。' },
          { key: 'B', en: 'low and deeply sad', cn: '抑郁、情绪低落', correct: true, reason: '确诊后不想起床，正是持续的情绪低落。' },
          { key: 'C', en: 'extremely busy', cn: '非常忙碌', correct: false, reason: '这里说的是情绪状态，不是工作量。' }
        ],
        analysis: 'depressed 指持续的情绪低落、抑郁。顾清和说“我比他自己更早发现”，是医生，也是在意的人。',
        wrongFeedback: '你选错了，江予笑了一下说“我没事”，那笑比哭还难看。',
        afterCorrect: '顾清和没有拆穿，只把镜子上的灯调暗：“今天不用演给谁看。”江予低下头，睫毛在发抖。'
      },
      {
        plotDescription: '外面的粉丝开始合唱，声音隔着墙也能听见。',
        line: "The fans are so hyped. Listen to them. They came for you.",
        lineCn: '粉丝特别兴奋，你听，他们是为你来的。',
        prompt: "根据上下文，选出画线词汇 'hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely excited', cn: '极度兴奋', correct: true, reason: '隔着墙合唱、为他而来，正是被点燃的兴奋状态。' },
          { key: 'B', en: 'disappointed', cn: '失望', correct: false, reason: '合唱和欢呼是热情，不是失望。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '粉丝很清楚自己在等谁，这里不是困惑。' }
        ],
        analysis: 'hyped 是“极度兴奋、被点燃”。顾清和把外面的声音翻译成一句话：有人在等你。',
        wrongFeedback: '你选错了，江予捂住耳朵，说“太吵了”，声音里全是抗拒。',
        afterCorrect: '顾清和没有关掉声音，只握住他的手腕：“吵也能听见，是不是？”江予愣住，缓慢地点了头。'
      },
      {
        plotDescription: '上台前，江予忽然问，如果这次唱砸了会怎么样。',
        line: "If I fail tonight, it will be a miserable night for everyone. So what?",
        lineCn: '如果我今晚唱砸了，对所有人来说都是惨透的一夜。那又怎样？',
        prompt: "根据上下文，选出画线词汇 'miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'wonderful', cn: '美好', correct: false, reason: '唱砸了不可能美好，语义完全相反。' },
          { key: 'B', en: 'ordinary', cn: '普通的', correct: false, reason: '他担心的是糟糕的结果，不是平淡。' },
          { key: 'C', en: 'extremely bad', cn: '惨透了、糟透了', correct: true, reason: '唱砸之后的夜晚，正是 miserable 的糟糕处境。' }
        ],
        analysis: 'miserable 形容极糟糕、令人难受的处境。江予先替所有人预设了最坏结果，顾清和要做的，是把它拆掉。',
        wrongFeedback: '你选错了，江予低下头，妆台上的灯把他的影子拉得很长。',
        afterCorrect: '顾清和替他理了理领口：“唱砸了，我还在后台。”江予抬眼看他，那一眼里有东西终于松动。'
      }
    ],
    completeText: '第十四章结束。十分钟到了，江予站起来，走过通道时回头看了一眼。顾清和站在原地，抬手比了一个很轻的手势，像在说：去吧。'
  },
  {
    id: 'dm_15',
    index: 15,
    title: '第 15 章 · 你在瞒我什么',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演出结束，全场灯亮。江予在掌声里走下台，脸还带着笑，脚步却很虚。顾清和在侧幕接住他，低声说了一句“你瞒了我什么”，他的手一下就凉了。',
    questions: [
      {
        plotDescription: '助理举着手机冲过来，说热搜第一是他们这场演出。',
        line: "You looked ecstatic on stage tonight. The whole venue felt it.",
        lineCn: '你今晚在台上看起来欣喜若狂，全场都感受到了。',
        prompt: "根据上下文，选出画线词汇 'ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '欣喜若狂', correct: true, reason: '全场的欢呼和“看起来”都在形容他当时极度的快乐。' },
          { key: 'B', en: 'completely tired', cn: '疲惫不堪', correct: false, reason: '疲惫不会让全场共振，这里说的是情绪高点。' },
          { key: 'C', en: 'very nervous', cn: '非常紧张', correct: false, reason: '紧张是上台前的状态，演出结束时的欢呼指向喜悦。' }
        ],
        analysis: 'ecstatic 表示欣喜若狂，是极高强度的正面情绪。台上的江予确实快乐，下台之后的空才更明显。',
        wrongFeedback: '你选错了，江予把笑收了，说“别拍了”，助理愣在原地。',
        afterCorrect: '侧幕的灯很暗。江予靠着墙，忽然说：“刚才有一瞬间，我什么都听不见。”'
      },
      {
        plotDescription: '顾清和问他那一刻是什么感觉，江予想了很久。',
        line: "I felt numb. Like the sound was there, but I couldn't reach it.",
        lineCn: '我感觉很麻木，声音好像还在，可我怎么都够不到。',
        prompt: "根据上下文，选出画线词汇 'numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常愤怒', correct: false, reason: '他说的是够不到声音，不是生气，情绪是空。' },
          { key: 'B', en: 'relieved', cn: '松了口气', correct: false, reason: '听不见声音不可能让他放松，语境相反。' },
          { key: 'C', en: 'unable to feel anything', cn: '麻木、失去感觉', correct: true, reason: '声音在却够不到，正是感官变钝、麻木的描述。' }
        ],
        analysis: 'numb 指失去感觉、麻木，可指身体也可指情绪。江予描述的不是疼，是一种更可怕的空白。',
        wrongFeedback: '你选错了，顾清和的手停在半空，江予把头别向另一边。',
        afterCorrect: '顾清和把听诊器贴在他耳后，很久才说：“明天做一次完整的检查。”江予没有拒绝。'
      },
      {
        plotDescription: '休息室里，江予看着顾清和替别人量血压，忽然别开视线。',
        line: "I'm jealous of how easily you sleep. You don't have to listen for sounds.",
        lineCn: '我嫉妒你睡得那么安稳，你不用一直去听声音还在不在。',
        prompt: "根据上下文，选出画线词汇 'jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'proud of you', cn: '为你骄傲', correct: false, reason: '他羡慕的是对方能安心睡觉，不是骄傲。' },
          { key: 'B', en: 'envious', cn: '嫉妒、羡慕', correct: true, reason: '后一句说明他羡慕对方不用时刻留意声音。' },
          { key: 'C', en: 'grateful to you', cn: '感激你', correct: false, reason: '这里是比较后的不平衡感，不是感谢。' }
        ],
        analysis: 'jealous 指因别人拥有自己没有的东西而嫉妒。江予嫉妒的不是睡眠，是那份不必恐惧的安稳。',
        wrongFeedback: '你选错了，江予说完就后悔，转身去拿外套，动作有点急。',
        afterCorrect: '顾清和拉住他的手腕：“那你今晚别一个人睡。”江予愣住，脸在灯下慢慢热了起来。'
      },
      {
        plotDescription: '江予终于承认，他早就发现自己听不清，只是一直没说。',
        line: "I feel guilty for hiding it. You've been guessing the whole time.",
        lineCn: '瞒着你让我很内疚，你一直在猜。',
        prompt: "根据上下文，选出画线词汇 'guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'ashamed of having done wrong', cn: '内疚、愧疚', correct: true, reason: '瞒着对方又被对方猜中，正是做错事后的愧疚。' },
          { key: 'B', en: 'innocent', cn: '无辜', correct: false, reason: '他承认自己在隐瞒，显然不是无辜。' },
          { key: 'C', en: 'angry at you', cn: '生你的气', correct: false, reason: '他说的是自己瞒着对方，不是在责怪对方。' }
        ],
        analysis: 'feel guilty 是“感到内疚”。江予的愧疚不只因为隐瞒，还因为他让对方一次次替自己担心。',
        wrongFeedback: '你选错了，江予低下头，声音越来越小，最后只剩一句“对不起”。',
        afterCorrect: '顾清和看着他：“我不需要你道歉。我需要你以后别一个人扛。”江予点头，眼睛红了。'
      }
    ],
    completeText: '第十五章结束。那天晚上，顾清和留在公寓没走。客厅的灯亮到很晚，两个人隔着一张茶几坐着，谁都没提“喜欢”两个字。'
  },
  {
    id: 'dm_16',
    index: 16,
    title: '第 16 章 · 心跳比耳疾更吵',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '凌晨三点，江予说自己睡不着。顾清和坐在床边替他听心跳，房间里只有仪器轻微的滴答声。江予忽然问，医生听病人的心跳时，会不会也紧张。',
    questions: [
      {
        plotDescription: '江予看着桌上一排检查单，说最近连呼吸都觉得有人在催。',
        line: "You're stressed because you can't control any of this.",
        lineCn: '你压力大，是因为这些事你一件都控制不了。',
        prompt: "根据上下文，选出画线词汇 'stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely calm', cn: '完全冷静', correct: false, reason: '连呼吸都觉得被催，显然不是冷静，语境相反。' },
          { key: 'B', en: 'under great pressure', cn: '压力很大', correct: true, reason: '后面点明他控制不了任何事，正是压力大的来源。' },
          { key: 'C', en: 'bored with everything', cn: '对一切感到无聊', correct: false, reason: '这里是不安和紧绷，不是无聊。' }
        ],
        analysis: 'stressed 指承受很大压力。顾清和把原因说得很准：真正压垮江予的，是失控感。',
        wrongFeedback: '你选错了，江予把检查单扫到地上，说“别分析了”，屋子里一片乱。',
        afterCorrect: '顾清和蹲下去一张张捡起来：“分析是我的事，你只管睡觉。”江予看着他，慢慢躺了回去。'
      },
      {
        plotDescription: '顾清和提起自己实习那年，连续三个月没休过一天。',
        line: "That was real burnout. I could not remember why I started.",
        lineCn: '那才是真正的职业倦怠，我连当初为什么开始都想不起来了。',
        prompt: "根据上下文，选出画线词汇 'burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'exhaustion from overwork', cn: '职业倦怠、被工作耗空', correct: true, reason: '连续三个月无休、忘了为什么开始，正是倦怠的表现。' },
          { key: 'B', en: 'a small injury', cn: '一点小伤', correct: false, reason: '三个月不休说的是精神耗竭，不是外伤。' },
          { key: 'C', en: 'a kind of fever', cn: '一种发烧', correct: false, reason: '忘记初心不是发烧症状，语境不符。' }
        ],
        analysis: 'burnout 指长期高压工作导致的身心耗竭。顾清和讲自己的事，是想说“我懂”，不是讲道理。',
        wrongFeedback: '你选错了，江予没接话，只是把手缩回被子里。',
        afterCorrect: '顾清和替他把被角掖好：“所以我知道，那种空不是靠意志撑过去的。”江予闭上眼，睫毛轻轻动了一下。'
      },
      {
        plotDescription: '外面忽然传来救护车的声音，江予一下坐起来，脸色发白。',
        line: "I saw panic in your eyes when the sound cut out.",
        lineCn: '声音断掉的那一秒，我在你眼里看见了恐慌。',
        prompt: "根据上下文，选出画线词汇 'panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'great joy', cn: '巨大的喜悦', correct: false, reason: '坐起来脸色发白，是惊吓反应，不是喜悦。' },
          { key: 'B', en: 'sleepiness', cn: '困意', correct: false, reason: '他是被声音惊得坐起，不是想睡。' },
          { key: 'C', en: 'sudden overwhelming fear', cn: '恐慌', correct: true, reason: '声音一断就弹起、脸色发白，正是突然的恐慌。' }
        ],
        analysis: 'panic 指突如其来的强烈恐惧。对江予来说，声音中断等于世界断电，那种恐惧已经刻进身体。',
        wrongFeedback: '你选错了，江予捂住耳朵，呼吸越来越快，顾清和叫了他两声。',
        afterCorrect: '顾清和握住他的手，一字一句地说：“我在。你听得见我。”江予的呼吸终于跟着他的节奏慢下来。'
      },
      {
        plotDescription: '等江予平静下来，顾清和才说检查结果比预想的好一点。',
        line: "You looked relieved when I said it wasn't worse.",
        lineCn: '我说情况没那么糟的时候，你明显松了口气。',
        prompt: "根据上下文，选出画线词汇 'relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望', correct: false, reason: '结果没那么糟，反应应该是放松，不是失望。' },
          { key: 'B', en: 'free from worry', cn: '松了口气、放下心', correct: true, reason: '听到情况没那么糟后放松下来，正是 relieved。' },
          { key: 'C', en: 'still angry', cn: '仍在生气', correct: false, reason: '这一句描述的是紧张解除，不是愤怒。' }
        ],
        analysis: 'relieved 指忧虑解除后的轻松。江予松的那口气，顾清和看在眼里，也松了一口气。',
        wrongFeedback: '你选错了，江予说“我没松”，可肩膀已经塌下去了。',
        afterCorrect: '顾清和笑了一下：“嘴硬。”江予把被子拉高，遮住半张脸，只露出一点发红的耳朵。'
      }
    ],
    completeText: '第十六章结束。那晚顾清和没走，睡在沙发上。江予半夜起来喝水，看见他侧着身，手还搭在医药箱上。'
  },
  {
    id: 'dm_17',
    index: 17,
    title: '第 17 章 · 谁先动了心',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '顾清和接到医院的电话，说要调他回院。他站在阳台上讲完，回头看见江予站在门口，手里握着两只杯子，其中一只已经凉了。',
    questions: [
      {
        plotDescription: '江予问他是不是要走，声音很平，杯子却握得太紧。',
        line: "You looked heartbroken when I said I might leave.",
        lineCn: '我说我可能会走的时候，你看起来心都碎了。',
        prompt: "根据上下文，选出画线词汇 'heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'very hungry', cn: '非常饿', correct: false, reason: '杯子握得太紧是情绪反应，和饥饿无关。' },
          { key: 'B', en: 'very calm', cn: '非常平静', correct: false, reason: '他表面平静，但握杯子的手泄露了难过。' },
          { key: 'C', en: 'deeply sad', cn: '心碎、极度难过', correct: true, reason: '听到对方可能离开，握紧杯子的反应正是心碎。' }
        ],
        analysis: 'heartbroken 形容极度伤心，常用于失去重要的人。江予没挽留，可他的表情已经先说了话。',
        wrongFeedback: '你选错了，江予把杯子放在桌上，转身回房，门关得很轻。',
        afterCorrect: '顾清和跟进去，站在门口说：“我还没答应。”江予背对着他，肩膀动了一下。'
      },
      {
        plotDescription: '顾清和把手机收起来，回身看他，嘴角有一点得意。',
        line: "Don't look so smug. You were worried too.",
        lineCn: '别那么得意，你刚才也担心了。',
        prompt: "根据上下文，选出画线词汇 'smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'ashamed', cn: '羞愧', correct: false, reason: '嘴角带着得意，显然不是羞愧，情绪相反。' },
          { key: 'B', en: 'too pleased with yourself', cn: '得意忘形', correct: true, reason: '被指出“得意”，正是 smug 形容的自我满足。' },
          { key: 'C', en: 'sleepy', cn: '困倦', correct: false, reason: '这里描写的是神情得意，不是疲倦。' }
        ],
        analysis: 'smug 指自鸣得意、藏不住的满意。顾清和抓到江予在意自己的证据，难免有点得意。',
        wrongFeedback: '你选错了，江予把抱枕丢过去，顾清和接住，笑意没收。',
        afterCorrect: '顾清和把抱枕放回沙发：“我说了，我还没答应。”江予闷声问：“那你为什么不答应？”'
      },
      {
        plotDescription: '第二天，助理说漏嘴，把江予的病情告诉了造型师。',
        line: "I'm annoyed that he told everyone. That was my call, not his.",
        lineCn: '他告诉了所有人，我很烦。那是我的事，不该由他决定。',
        prompt: "根据上下文，选出画线词汇 'annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly angry and irritated', cn: '烦透了、恼火', correct: true, reason: '隐私被别人擅自说出去，他的反应正是恼火。' },
          { key: 'B', en: 'delighted', cn: '非常高兴', correct: false, reason: '隐私被泄露不可能是高兴，语境相反。' },
          { key: 'C', en: 'scared', cn: '害怕', correct: false, reason: '他说的是“不该由他决定”，重点在生气，不是恐惧。' }
        ],
        analysis: 'annoyed 指轻度到中度的恼火。江予真正介意的是，自己连公开病情的权利都被别人拿走了。',
        wrongFeedback: '你选错了，江予把手机摔在沙发上，助理站在旁边不敢出声。',
        afterCorrect: '顾清和把门关上：“这件事我来处理。”江予抬头看他：“你凭什么？”他说：“凭你刚才没自己冲出去。”'
      },
      {
        plotDescription: '深夜，江予忽然问，剧组里是不是有人在偷拍他吃药。',
        line: "Thinking the whole crew is spying on you — that's paranoia, not instinct.",
        lineCn: '觉得整个剧组都在偷拍你吃药，那是被害妄想，不是直觉。',
        prompt: "根据上下文，选出画线词汇 'paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'courage', cn: '勇气', correct: false, reason: '怀疑所有人偷拍并不是勇气，是被害感。' },
          { key: 'B', en: 'a very good memory', cn: '记性极好', correct: false, reason: '这里说的是过度猜疑，不是记忆力。' },
          { key: 'C', en: 'false suspicion', cn: '被害妄想、无端猜疑', correct: true, reason: '“不是直觉”说明这种猜疑缺乏根据，正是 paranoia。' }
        ],
        analysis: 'paranoia 指没有根据的强烈猜疑。顾清和不是否认危险，而是不想让猜疑先把他吞掉。',
        wrongFeedback: '你选错了，江予拉上所有窗帘，屋里彻底黑了下来。',
        afterCorrect: '顾清和拉开一条缝：“留一点光。你要防的是镜头，不是所有人。”江予看了很久，终于点头。'
      }
    ],
    completeText: '第十七章结束。那晚江予睡着时，手还抓着顾清和的袖口。顾清和没有抽开，坐在床边看了一整夜的天花板。'
  },
  {
    id: 'dm_18',
    index: 18,
    title: '第 18 章 · 凌晨的便利店',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '凌晨的便利店亮得像一座孤岛。江予戴着口罩站在关东煮前，顾清和替他拿着伞。收银台的电视正在播他的旧闻，两个人都没看，声音却一直在。',
    questions: [
      {
        plotDescription: '江予在店里来回走了三圈，最后什么也没拿。',
        line: "You've been restless all night. Sit down. I'll pick something.",
        lineCn: '你一整晚都坐不住，坐下吧，我来挑。',
        prompt: "根据上下文，选出画线词汇 'restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to stay calm or still', cn: '焦躁、坐立不安', correct: true, reason: '来回走了三圈、什么都没拿，正是待不住的状态。' },
          { key: 'B', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: '他在店里走来走去，显然没有睡着。' },
          { key: 'C', en: 'very talkative', cn: '话特别多', correct: false, reason: '这段描写的是动作停不下来，不是话多。' }
        ],
        analysis: 'restless 指无法安静下来、坐立不安。江予不是在挑吃的，是在躲电视里那个自己的名字。',
        wrongFeedback: '你选错了，江予又绕到货架后，背影显得很疲惫。',
        afterCorrect: '顾清和把热好的饭团放进他手里：“先吃。别的事，等天亮。”江予捏着饭团，终于坐下了。'
      },
      {
        plotDescription: '电视里，前经纪人正在接受采访，说自己“从不知情”。',
        line: "He is still bitter about being replaced. That's why he talks like that.",
        lineCn: '他一直对被换掉耿耿于怀，所以才那么说。',
        prompt: "根据上下文，选出画线词汇 'bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'sweet-tasting', cn: '味道甜的', correct: false, reason: '这里说的是怀恨在心的情绪，不是味道。' },
          { key: 'B', en: 'grateful', cn: '感激的', correct: false, reason: '被换掉后还说坏话，显然不是感激。' },
          { key: 'C', en: 'resentful and unforgiving', cn: '苦涩、怀着怨恨', correct: true, reason: '“对被换掉耿耿于怀”正是 bitter 的怨恨含义。' }
        ],
        analysis: 'bitter 由“苦味”引申为“心怀怨恨”。顾清和一句话点破：那些采访说的不是事实，是不甘。',
        wrongFeedback: '你选错了，江予低头咬了一口饭团，什么味道都没尝出来。',
        afterCorrect: '顾清和把电视关掉：“他说的每句话，都在替自己开脱。”江予抬起头，眼神终于聚焦。'
      },
      {
        plotDescription: '江予忽然说，他怕的不是听不见，是被人看见听不见。',
        line: "For the first time he looked vulnerable. He didn't try to hide it.",
        lineCn: '那是他第一次显得脆弱，他没有再试图掩饰。',
        prompt: "根据上下文，选出画线词汇 'vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'dangerous to others', cn: '对别人有危险', correct: false, reason: '这里是暴露软肋的状态，不是有攻击性。' },
          { key: 'B', en: 'easily hurt and unprotected', cn: '脆弱、没有防备', correct: true, reason: '他没有掩饰、露出软肋，正是 vulnerable 的含义。' },
          { key: 'C', en: 'full of confidence', cn: '充满自信', correct: false, reason: '第一次露出脆弱，和自信相反。' }
        ],
        analysis: 'vulnerable 指容易受伤、没有防护。江予把最怕的事说出口，等于把自己交出去一半。',
        wrongFeedback: '你选错了，江予立刻把口罩往上拉了拉，遮住了眼睛。',
        afterCorrect: '顾清和没有安慰，只把自己的围巾解下来给他：“冷就围着。别遮眼睛。”江予的手停在口罩上，最终放了下来。'
      },
      {
        plotDescription: '走出便利店，雨停了，江予却站着不动，说也许该认命。',
        line: "It's not hopeless. Not while you can still hear my voice.",
        lineCn: '这还没到绝望的地步，只要你还听得见我的声音。',
        prompt: "根据上下文，选出画线词汇 'hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'with no hope at all', cn: '绝望、毫无希望', correct: true, reason: '前面用 not 否定它，说明对方认为还有希望。' },
          { key: 'B', en: 'full of hope', cn: '充满希望', correct: false, reason: 'hopeless 本身是毫无希望，不能理解成充满希望。' },
          { key: 'C', en: 'uncertain but fine', cn: '不确定但没关系', correct: false, reason: '这是明确的“没有希望”，不是模棱两可。' }
        ],
        analysis: 'hopeless 表示毫无希望。顾清和用双重否定把它推开：还没到那一步，因为你还能听见我。',
        wrongFeedback: '你选错了，江予苦笑了一下，说“你太乐观了”，径直往前走。',
        afterCorrect: '顾清和站在原地喊他的名字。江予停下脚步，回头，雨后的路灯把两个人的影子拉得很近。'
      }
    ],
    completeText: '第十八章结束。回去的路上，江予忽然说：“你刚才那句话，再说一遍。”顾清和没问哪句，只说：“你听得见我。”'
  },
  {
    id: 'dm_19',
    index: 19,
    title: '第 19 章 · 他记得每一句歌词',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '车里放着一张旧专辑，是很久以前的现场版。江予闭着眼跟唱，每一句都接得上。顾清和忽然发现，副歌里有一句歌词，是他自己在诊室随口说过的。',
    questions: [
      {
        plotDescription: '唱完最后一句，江予睁开眼，说这张专辑是他撑过来的理由。',
        line: "I'm grateful you stayed through the worst of it.",
        lineCn: '最难的那段你都留下来了，我很感激。',
        prompt: "根据上下文，选出画线词汇 'grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry with you', cn: '生你的气', correct: false, reason: '对方留下来陪他熬过最难的时候，不可能生气。' },
          { key: 'B', en: 'thankful', cn: '感激', correct: true, reason: '对方陪他走过最难的一段，他说的是感谢。' },
          { key: 'C', en: 'sorry for you', cn: '为你感到遗憾', correct: false, reason: '这里表达的是感谢，不是遗憾。' }
        ],
        analysis: 'grateful 是“感激、感谢”，常用 be grateful for。江予不擅长道谢，这一句说得很慢。',
        wrongFeedback: '你选错了，江予把音量调小，说“算了”，手指在方向盘上敲。',
        afterCorrect: '顾清和看着前方的路：“我也不是白留的。”江予侧头看他，没听懂，又好像懂了。'
      },
      {
        plotDescription: '红灯亮起，江予看着窗外的夜，忽然说这样也挺好。',
        line: "For once, I'm content with where I am. I don't need more.",
        lineCn: '这一次，我对现在的位置很满足，不需要更多了。',
        prompt: "根据上下文，选出画线词汇 'content' 最准确的意思。",
        options: [
          { key: 'A', en: 'satisfied', cn: '满足', correct: true, reason: '后一句说“不需要更多”，正是满足于现状。' },
          { key: 'B', en: 'very rich', cn: '非常富有', correct: false, reason: 'content 在这里是形容词“满足”，不是财富。' },
          { key: 'C', en: 'widely famous', cn: '很有名', correct: false, reason: '他早就有名，这里说的是心态，不是名气。' }
        ],
        analysis: 'content 作形容词是“满足的”，不是“内容”。江予第一次说“不需要更多”，是难得的松弛。',
        wrongFeedback: '你选错了，江予自嘲地笑了一下，把车窗降下来一半。',
        afterCorrect: '顾清和把车窗升回去：“风大。”江予没争，只把手放在膝盖上，安静得像换了一个人。'
      },
      {
        plotDescription: '顾清和问他，唱了这么多年，最喜欢哪一场。',
        line: "The small show in a bar made me feel fulfilled. Nobody knew my name.",
        lineCn: '那场小酒吧的演出让我觉得很充实，没人知道我的名字。',
        prompt: "根据上下文，选出画线词汇 'fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'empty inside', cn: '内心空虚', correct: false, reason: '那是他最喜欢的演出，感受是满足，不是空虚。' },
          { key: 'B', en: 'very tired', cn: '非常疲惫', correct: false, reason: '这里说的是意义感，不是体力。' },
          { key: 'C', en: 'deeply satisfied and complete', cn: '充实、有成就感', correct: true, reason: '没人认识他仍觉得好，说明满足来自唱歌本身。' }
        ],
        analysis: 'fulfilled 指因实现价值而感到充实。那场没人认识他的演出，反而给了他最多的意义。',
        wrongFeedback: '你选错了，江予沉默了一会儿，把这首歌跳了过去。',
        afterCorrect: '顾清和说：“以后可以再唱一次。”江予看着窗外：“那时候你得坐在第一排。”'
      },
      {
        plotDescription: '回到家，助理打来电话，说有人在网上放出了他失聪的传闻。',
        line: "My manager went hysterical on the phone. She thinks the label will drop me.",
        lineCn: '我经纪人在电话里歇斯底里，她觉得公司会放弃我。',
        prompt: "根据上下文，选出画线词汇 'hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'very quiet', cn: '非常安静', correct: false, reason: '在电话里失控大叫，和安静相反。' },
          { key: 'B', en: 'out of control with emotion', cn: '歇斯底里、情绪失控', correct: true, reason: '她认定公司会放弃他，情绪已经崩溃失控。' },
          { key: 'C', en: 'amused', cn: '觉得好笑', correct: false, reason: '担心被公司放弃，不可能是觉得好笑。' }
        ],
        analysis: 'hysterical 指情绪失控、歇斯底里。江予转述时很平静，反而让这件事显得更重。',
        wrongFeedback: '你选错了，电话那头还在喊，江予把手机放远了一点。',
        afterCorrect: '顾清和把手机接过去，说了三句话就挂了。江予问他说了什么，他说：“让她先睡。”'
      }
    ],
    completeText: '第十九章结束。那晚江予把旧专辑又听了一遍，听到副歌时停住。那句歌词确实出自顾清和，只是没人知道，除了他。'
  },
  {
    id: 'dm_20',
    index: 20,
    title: '第 20 章 · 隔着口罩的呼吸',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '医院走廊，两个人隔着口罩说话。江予刚做完一轮检查，坐在长椅上，把口罩往上拉了拉。顾清和站在他面前，第一次不知道该把手放在哪里。',
    questions: [
      {
        plotDescription: '电话里，公司的人说要他“为大局考虑”，江予挂了之后手还在抖。',
        line: "He was shaking with rage after that call. I have never seen him like that.",
        lineCn: '那通电话之后他气得发抖，我从没见过他那样。',
        prompt: "根据上下文，选出画线词汇 'rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'laughter', cn: '笑意', correct: false, reason: '挂了电话手还在抖，是被激怒，不是觉得好笑。' },
          { key: 'B', en: 'coldness', cn: '寒冷', correct: false, reason: '抖在这里是气的，不是冷，语境已经点明。' },
          { key: 'C', en: 'violent anger', cn: '暴怒', correct: true, reason: '手发抖、从没见过他那样，正是极度愤怒。' }
        ],
        analysis: 'rage 指难以压制的暴怒，比 anger 更猛烈。江予这次没有再忍，只是把所有火气都压在了身体里。',
        wrongFeedback: '你选错了，江予把手机塞进口袋，径直走向楼梯间。',
        afterCorrect: '顾清和在楼梯间找到他，江予背对着墙说：“别过来。”他还是走过去，站到了一步之外。'
      },
      {
        plotDescription: '沉默很久，江予忽然说，他妈妈走的那年，也是这样一条走廊。',
        line: "There was nothing but sorrow in his eyes when he said it.",
        lineCn: '他说那句话的时候，眼里只有悲伤。',
        prompt: "根据上下文，选出画线词汇 'sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'pride', cn: '骄傲', correct: false, reason: '提起亲人离世的走廊，情绪不可能是骄傲。' },
          { key: 'B', en: 'deep sadness', cn: '悲伤', correct: true, reason: '说起母亲离开的往事，眼里自然是深切的悲伤。' },
          { key: 'C', en: 'curiosity', cn: '好奇', correct: false, reason: '这是沉重的回忆，不是好奇。' }
        ],
        analysis: 'sorrow 指深沉的悲伤，比 sad 更重。江予很少提家里的事，一开口就是最疼的那一段。',
        wrongFeedback: '你选错了，江予低下头，口罩的边缘被呼吸打湿了一小块。',
        afterCorrect: '顾清和在他旁边坐下，没有再问。走廊很长，两个人的肩隔着几厘米，谁也没有挪开。'
      },
      {
        plotDescription: '护士说复查结果稳定，江予愣了一下，随即笑出了声。',
        line: "The moment she said stable, I felt pure euphoria. Like I could breathe.",
        lineCn: '她说情况稳定的时候，我感到纯粹的狂喜，像终于能呼吸了。',
        prompt: "根据上下文，选出画线词汇 'euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'extreme joy', cn: '极度愉悦、狂喜', correct: true, reason: '听到结果稳定后笑出声、能呼吸，正是强烈的喜悦。' },
          { key: 'B', en: 'fear', cn: '恐惧', correct: false, reason: '结果是稳定，他的反应是放松和喜悦，不是恐惧。' },
          { key: 'C', en: 'numbness', cn: '麻木', correct: false, reason: '他笑出了声，情绪明显是高涨的。' }
        ],
        analysis: 'euphoria 指强烈的、几乎不真实的幸福感。那一刻的轻松来得太猛，江予自己都有点站不稳。',
        wrongFeedback: '你选错了，江予的笑停在半路，像是怕自己高兴得太早。',
        afterCorrect: '顾清和伸手扶住他：“站稳。”江予抓着他的手臂，笑着说了句“我没事”，眼睛却红了。'
      },
      {
        plotDescription: '回程车上，江予说起公司那些人的反应，语气变得很冷。',
        line: "Their apathy hurt more than any insult. Nobody even asked how I was.",
        lineCn: '他们的冷漠比任何辱骂都伤人，没有一个人问我怎么样。',
        prompt: "根据上下文，选出画线词汇 'apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'kindness', cn: '善意', correct: false, reason: '没有人问他怎么样，这显然不是善意。' },
          { key: 'B', en: 'anger', cn: '愤怒', correct: false, reason: '这里说的是漠不关心，而不是发火。' },
          { key: 'C', en: 'lack of feeling or care', cn: '冷漠、无动于衷', correct: true, reason: '没人问他一句，正是 apathy 所指的漠不关心。' }
        ],
        analysis: 'apathy 指缺乏关心和情绪反应。江予怕的不是被骂，是被当成一个可以随时替换的符号。',
        wrongFeedback: '你选错了，江予把座椅往后调，闭上了眼睛。',
        afterCorrect: '顾清和说：“我问了。”江予睁开眼看他，半晌才低声说：“嗯，你问了。”'
      }
    ],
    completeText: '第二十章结束。车停在公寓楼下，江予没有立刻下车。他说：“下一场演出，我还是想上。”顾清和没有反对，只说：“那我陪你。”'
  },
  {
    id: 'dm_21',
    index: 21,
    title: '第 21 章 · 万人现场的那一秒',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '万人场馆，灯牌连成一片海。江予站在升降台上，耳返里是伴奏，也是杂音。他握紧话筒，脑子里只有一句话：只要唱完这一首，就没人能说他不行。',
    questions: [
      {
        plotDescription: '后台有人小声议论，说顾医生对江予太上心了。',
        line: "I think he has a crush on you. Everyone backstage says so.",
        lineCn: '我觉得他对你有意思，后台所有人都这么说。',
        prompt: "根据上下文，选出画线词汇 'crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a romantic liking for someone', cn: '暗恋、喜欢', correct: true, reason: '后面说“所有人都这么说”，指的是对某人的好感。' },
          { key: 'B', en: 'a sudden injury', cn: '突然的伤', correct: false, reason: 'crush 本义压碎，但这里说的是喜欢一个人。' },
          { key: 'C', en: 'a strong dislike', cn: '强烈的厌恶', correct: false, reason: '上心和厌恶方向相反，语境不允许。' }
        ],
        analysis: 'have a crush on someone 是“暗恋某人”的固定说法。江予嘴上否认，心跳却先乱了。',
        wrongFeedback: '你选错了，江予把毛巾丢回去，说“别乱讲”，耳根却红了。',
        afterCorrect: '他转身上台，走到通道口时看见顾清和站在那里。两个人都没说话，灯已经亮了。'
      },
      {
        plotDescription: '演出前一天，顾清和忽然两天没出现，消息也只回一个字。',
        line: "He ghosted me for two days. Then he showed up like nothing happened.",
        lineCn: '他消失了两天，然后像什么都没发生一样出现了。',
        prompt: "根据上下文，选出画线词汇 'ghosted' 最准确的意思。",
        options: [
          { key: 'A', en: 'called me every hour', cn: '每小时都打电话', correct: false, reason: 'ghost 与频繁联系相反，这里是突然不回应。' },
          { key: 'B', en: 'suddenly stopped replying', cn: '玩消失、突然不回消息', correct: true, reason: '两天没出现、消息只回一个字，正是 ghost 的用法。' },
          { key: 'C', en: 'moved to another city', cn: '搬去了别的城市', correct: false, reason: '他又出现了，说明不是搬家，而是故意失联。' }
        ],
        analysis: 'ghost someone 指突然断联、不回消息。江予表面不在意，这两天却把手机看了无数遍。',
        wrongFeedback: '你选错了，江予把手机扣在桌上，说“我也不缺人陪”。',
        afterCorrect: '顾清和把一份会诊记录放在他面前：“我去查了一个方案。”江予愣住，所有火气一下没了落点。'
      },
      {
        plotDescription: '造型师提醒他，耳返音量调得太高会伤耳，江予却坚持。',
        line: "Losing a little hearing is a red flag you shouldn't ignore.",
        lineCn: '听力下降是一个不该忽视的危险信号。',
        prompt: "根据上下文，选出画线词汇 'red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning sign of danger', cn: '危险信号', correct: true, reason: '听力下降是身体发出的警示，正是 red flag 的意思。' },
          { key: 'B', en: 'a red piece of cloth', cn: '一块红布', correct: false, reason: '这里用的是比喻义，不是真的布料。' },
          { key: 'C', en: 'a good sign', cn: '好兆头', correct: false, reason: '听力下降是坏信号，不是好兆头。' }
        ],
        analysis: 'red flag 指值得警惕的危险信号。这句话顾清和说过很多次，江予每次都当没听见。',
        wrongFeedback: '你选错了，江予把耳返音量又调高一格，舞台监督在门外催了。',
        afterCorrect: '他走上台，第一束灯打下来。前奏响起时，他忽然想起那句“危险信号”，手指在话筒上收紧。'
      },
      {
        plotDescription: '演出结束后，后台有人凑过来，说看见顾医生和另一个艺人一起离场。',
        line: "I heard they hooked up after the wrap party. Is that true?",
        lineCn: '听说他们在杀青派对之后搞到一起了，是真的吗？',
        prompt: "根据上下文，选出画线词汇 'hooked up' 最准确的意思。",
        options: [
          { key: 'A', en: 'got together romantically', cn: '勾搭、暧昧地在一起', correct: true, reason: '后面追问“是真的吗”，说的是两人发展出亲密关系。' },
          { key: 'B', en: 'argued loudly', cn: '大吵了一架', correct: false, reason: '若是吵架，不会用“是真的吗”这种八卦语气追问。' },
          { key: 'C', en: 'shook hands', cn: '握了手', correct: false, reason: '握手是普通礼节，不会被当成八卦来打听。' }
        ],
        analysis: 'hook up 在口语里指两人发生亲密关系或勾搭上。江予听见这句，脸上的血色一下退了。',
        wrongFeedback: '你选错了，江予冷着脸说“跟我没关系”，转身时撞到了门框。',
        afterCorrect: '顾清和正好走进来，扶住他：“怎么了？”江予甩开手：“你自己的事，自己清楚。”'
      }
    ],
    completeText: '第二十一章结束。那晚的庆功宴江予没去。他坐在空掉的场馆里，一遍遍听刚才的录音，直到听见自己有一句唱错了拍。'
  },
  {
    id: 'dm_22',
    index: 22,
    title: '第 22 章 · 他听不见掌声',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演唱会视频上了热搜，所有人都在夸最后那段清唱。只有顾清和知道，江予在台上有一秒完全听不见伴奏，靠着记忆硬唱了下去。',
    questions: [
      {
        plotDescription: '顾清和提起，最近围绕这场巡演的闲话越来越多。',
        line: "There's too much drama around this tour. Let's keep our heads down.",
        lineCn: '这场巡演周围的抓马太多了，我们都低调点。',
        prompt: "根据上下文，选出画线词汇 'drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'music and songs', cn: '音乐和歌曲', correct: false, reason: '巡演本身就是音乐，这里说的是额外的纷争。' },
          { key: 'B', en: 'messy, attention-seeking conflict', cn: '抓马、闹剧', correct: true, reason: '闲话和风波太多，正是 drama 指的那种纷争。' },
          { key: 'C', en: 'ticket sales', cn: '票房销量', correct: false, reason: '后半句让人低调，说明指的不是销量，是是非。' }
        ],
        analysis: 'drama 在口语里指戏剧化的纠纷和闹剧。顾清和不想让江予被卷进去，所以先要求收声。',
        wrongFeedback: '你选错了，江予冷笑说“我本来就是话题”，把帽子压低走了。',
        afterCorrect: '顾清和跟上去，把他手里的帽子摘下来：“不用遮。你今晚唱得很好。”'
      },
      {
        plotDescription: '这几天江予几乎不让他离开视线，连买咖啡都要跟着。',
        line: "You've been clingy since the diagnosis. I am not going anywhere.",
        lineCn: '确诊之后你变得很黏人，我哪儿也不去。',
        prompt: "根据上下文，选出画线词汇 'clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'always needing to be close', cn: '黏人', correct: true, reason: '连买咖啡都要跟着，正是过度依赖、黏人的表现。' },
          { key: 'B', en: 'very distant', cn: '非常疏远', correct: false, reason: '跟着对方寸步不离，和疏远相反。' },
          { key: 'C', en: 'extremely polite', cn: '格外客气', correct: false, reason: '这里说的是依赖，不是礼貌。' }
        ],
        analysis: 'clingy 形容过度依赖、总要贴着人。顾清和没有嫌烦，反而先给了他一句保证。',
        wrongFeedback: '你选错了，江予立刻退开半步，说“我没黏人”，手却还抓着外套。',
        afterCorrect: '顾清和把他的手指掰开，又反手握回去：“抓着吧，别松。”江予的耳根一路红到脖子。'
      },
      {
        plotDescription: '顾清和发现江予让助理把所有采访提纲都送到自己房间。',
        line: "I need boundaries. You can't read my chart without asking.",
        lineCn: '我需要边界感，你不能不问就翻我的病历。',
        prompt: "根据上下文，选出画线词汇 'boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bigger apartment', cn: '更大的公寓', correct: false, reason: '这里说的是相处规则，不是居住面积。' },
          { key: 'B', en: 'more free time', cn: '更多空闲时间', correct: false, reason: '后半句讲病历和询问，指的是权限和界线。' },
          { key: 'C', en: 'limits between people', cn: '边界感、相处的界限', correct: true, reason: '不能不问就翻病历，说的正是人与人之间的界限。' }
        ],
        analysis: 'boundaries 指人际交往中的界限。顾清和第一次把话说得这么直，是怕自己越界成了另一种控制。',
        wrongFeedback: '你选错了，江予把病历本抱在怀里，说“那你别管我了”。',
        afterCorrect: '顾清和沉默两秒：“好。那你自己念给我听。”江予愣住，抱着本子的手松了一点。'
      },
      {
        plotDescription: '采访临时取消，公关却找不到人，现场只剩下记者。',
        line: "He bailed on the interview and left us with the cameras.",
        lineCn: '他放了采访的鸽子，把我们丢给了一堆镜头。',
        prompt: "根据上下文，选出画线词汇 'bailed' 最准确的意思。",
        options: [
          { key: 'A', en: 'arrived very early', cn: '很早就到了', correct: false, reason: '现场只剩记者，说明他根本没来，不是早到。' },
          { key: 'B', en: 'ran off and left others behind', cn: '跑路、放鸽子', correct: true, reason: '临时不来、把团队丢在现场，正是 bail 的意思。' },
          { key: 'C', en: 'paid for everything', cn: '把账全付了', correct: false, reason: '公关焦头烂额，显然不是有人买单。' }
        ],
        analysis: 'bail on someone 指临时放鸽子、把人丢下。江予这次不是逃，是耳朵突然听不清，没法面对提问。',
        wrongFeedback: '你选错了，公关部的人围上来，顾清和挡在前面，替他把所有问题都接了过去。',
        afterCorrect: '等人群散了，江予从消防通道出来，声音很低：“我不是想跑。”顾清和说：“我知道。”'
      }
    ],
    completeText: '第二十二章结束。回程路上，江予第一次主动把助听器戴上，把音量调到最低。他说，至少这样，还能听见一点世界。'
  },
  {
    id: 'dm_23',
    index: 23,
    title: '第 23 章 · 热搜第一',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '热搜第一挂着江予的名字，配图是他在后台扶住耳朵的一瞬间。评论区吵成一片，助理把手机收走，他却又拿了回来，一条一条往下翻。',
    questions: [
      {
        plotDescription: '助理急得直转圈，说知道内情的人嘴太松，江予却还笑得出来。',
        line: "Bro code says I can't tell you what he said. But you'd laugh.",
        lineCn: '兄弟法则不允许我说他说了什么，但你听了会笑。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'a law about brothers', cn: '关于兄弟的法律', correct: false, reason: '这是朋友间的默契，不是真正的法律条文。' },
          { key: 'B', en: 'a hospital rule', cn: '医院规定', correct: false, reason: '语境是朋友之间守口，不是医院制度。' },
          { key: 'C', en: 'unwritten rules between close male friends', cn: '兄弟法则', correct: true, reason: '不能把朋友说的话外传，正是 bro code 的意思。' }
        ],
        analysis: 'bro code 指男性好友之间不成文的规矩：讲义气、不拆台、不外传。江予用它把沉重的话题轻轻带过。',
        wrongFeedback: '你选错了，助理更急了，说“都什么时候了你还开玩笑”。',
        afterCorrect: '江予把手机屏幕按灭：“热搜能挂几天？我的耳朵能挂几年？”助理一下说不出话。'
      },
      {
        plotDescription: '顾清和来接人，助理嘴快，问他是不是要见家长了。',
        line: "Meeting the in-laws already? You two move fast.",
        lineCn: '这就见家长了？你们进展真快。',
        prompt: "根据上下文，选出画线词汇 'in-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'your own parents', cn: '你自己的父母', correct: false, reason: 'in-laws 指配偶一方的亲属，不是自己的父母。' },
          { key: 'B', en: 'your partner is family', cn: '公婆、岳父母等姻亲', correct: true, reason: '被问“见家长”，指的是伴侣一方的家人。' },
          { key: 'C', en: 'your coworkers', cn: '你的同事', correct: false, reason: '同事不属于姻亲关系，和见家长无关。' }
        ],
        analysis: 'in-laws 指因婚姻产生的亲属，如公婆、岳父母。助理这句玩笑，让车里两个人都沉默了。',
        wrongFeedback: '你选错了，顾清和握着方向盘的手紧了一下，江予却先笑了。',
        afterCorrect: '江予说：“我没家长可见。”车里安静了几秒，顾清和开口：“那见我老师吧，他算半个。”'
      },
      {
        plotDescription: '等红灯时，顾清和忽然说起同事给他安排了一场相亲。',
        line: "My colleague set me up on a blind date. I said no.",
        lineCn: '我同事给我安排了一场相亲，我拒绝了。',
        prompt: "根据上下文，选出画线词汇 'blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a date with someone you have never met', cn: '相亲、和陌生人约会', correct: true, reason: '同事安排、事先不认识，正是 blind date 的意思。' },
          { key: 'B', en: 'a date you forgot', cn: '被忘记的约会', correct: false, reason: 'blind 在这里指陌生，不是忘记。' },
          { key: 'C', en: 'a group dinner', cn: '多人聚餐', correct: false, reason: '相亲是一对一见面，不是集体聚餐。' }
        ],
        analysis: 'blind date 指由别人安排、双方此前不认识的约会。顾清和特意说自己拒绝了，意思已经很明显。',
        wrongFeedback: '你选错了，江予“哦”了一声，转头看窗外，一路没再说话。',
        afterCorrect: '顾清和补了一句：“我说我有在等的人。”江予的呼吸停了半拍，还是没回头。'
      },
      {
        plotDescription: '晚上，公关发来舆情分析，说只要他否认，热度三天就能过去。',
        line: "You have a blind spot when it comes to him. You think he's safe.",
        lineCn: '一遇到他的事你就有盲区，你觉得他是安全的。',
        prompt: "根据上下文，选出画线词汇 'blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'a problem with your eyes', cn: '眼睛的毛病', correct: false, reason: '这里说的是判断上的疏漏，不是视力问题。' },
          { key: 'B', en: 'very good judgment', cn: '极好的判断力', correct: false, reason: '盲区恰恰是判断不到的地方，方向相反。' },
          { key: 'C', en: 'an area you fail to see clearly', cn: '盲区、看不清楚的领域', correct: true, reason: '认为对方安全而忽略风险，正是判断上的盲区。' }
        ],
        analysis: 'blind spot 指自己看不见、容易忽略的地方。公关说的不是眼睛，是江予对顾清和的信任。',
        wrongFeedback: '你选错了，江予把分析报告扔在桌上，说“他不一样”。',
        afterCorrect: '公关沉默了一下：“我知道他不一样。可明天头条不会管这个。”江予盯着那份报告，很久没说话。'
      }
    ],
    completeText: '第二十三章结束。深夜，江予删掉了准备好的否认声明。他给顾清和发了一条消息：明天，你陪我去公司。'
  },
  {
    id: 'dm_24',
    index: 24,
    title: '第 24 章 · 你和他什么关系',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '公司会议室，长桌两边坐满了人。第一句话就落在顾清和身上：你和他到底是什么关系。江予要开口，被他先按住了手背。',
    questions: [
      {
        plotDescription: '有人提起江予身边那位“老朋友”，说他这两年只在需要帮忙时出现。',
        line: "That guy is a toxic friend. He only calls when he needs something.",
        lineCn: '那个人是有毒的朋友，只在需要帮忙时才打电话。',
        prompt: "根据上下文，选出画线词汇 'toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a harmful, draining friend', cn: '有毒的朋友、消耗你的人', correct: true, reason: '只在需要时出现，正是单方面索取的坏朋友。' },
          { key: 'B', en: 'a very loyal friend', cn: '非常忠诚的朋友', correct: false, reason: '只索取不付出，和忠诚完全相反。' },
          { key: 'C', en: 'a childhood friend', cn: '从小一起长大的朋友', correct: false, reason: '这里说的是关系性质，不是认识多久。' }
        ],
        analysis: 'toxic friend 指总在消耗你、带来伤害的朋友。顾清和说得克制，却把对方的行为定性得很清楚。',
        wrongFeedback: '你选错了，江予还想替那人说话，被顾清和按住了手腕。',
        afterCorrect: '顾清和收回手：“你不用替他解释。他做过什么，你自己最清楚。”江予沉默下来。'
      },
      {
        plotDescription: '对方步步紧逼，最后干脆问，今晚这顿饭算不算约会。',
        line: "Is this a date, or just dinner? I need to know what to call it.",
        lineCn: '这算约会，还是只是吃顿饭？我得知道该怎么定义它。',
        prompt: "根据上下文，选出画线词汇 'date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business meeting', cn: '商务会面', correct: false, reason: '他把“约会”和“只是吃饭”并列，显然不是谈工作。' },
          { key: 'B', en: 'a medical appointment', cn: '就诊预约', correct: false, reason: '这里问的是私人关系，不是看病。' },
          { key: 'C', en: 'a romantic outing', cn: '约会', correct: true, reason: '要与普通晚饭区分开，指的正是带感情意味的约会。' }
        ],
        analysis: 'date 指带有感情意味的约会。顾清和把问题原样抛回去，是想让江予自己先说清楚。',
        wrongFeedback: '你选错了，江予愣住了，筷子停在半空，谁都没接话。',
        afterCorrect: '江予放下筷子：“你想让它是什么？”顾清和看着他：“我先问的。”'
      },
      {
        plotDescription: '第二天，媒体放出消息，说两人关系破裂，即将分道扬镳。',
        line: "The rumors say we're about to break up. We were never together.",
        lineCn: '传闻说我们快分手了，可我们从来没在一起过。',
        prompt: "根据上下文，选出画线词汇 'break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'start dating', cn: '开始交往', correct: false, reason: 'rupture 和“快”搭配，指向结束而非开始。' },
          { key: 'B', en: 'end a relationship', cn: '分手', correct: true, reason: '后半句否认在一起过，对应的正是“分手”这件事。' },
          { key: 'C', en: 'get married', cn: '结婚', correct: false, reason: '传闻是关系破裂，不是喜讯。' }
        ],
        analysis: 'break up 指关系结束、分手。顾清和把这句荒谬的传闻念出来，语气里有点说不清的东西。',
        wrongFeedback: '你选错了，江予把报纸折起来，说“那就让它成真一次”。',
        afterCorrect: '顾清和抬头看他：“你知不知道自己在说什么？”江予没躲：“我很清楚。”'
      },
      {
        plotDescription: '江予忽然提起那位前经纪人，说对方被公司甩掉之后一直怀恨。',
        line: "She dumped him the day the news broke. He never forgave her.",
        lineCn: '新闻爆出来那天她就甩了他，他一直没原谅她。',
        prompt: "根据上下文，选出画线词汇 'dumped' 最准确的意思。",
        options: [
          { key: 'A', en: 'ended the relationship with him', cn: '甩了他、和他分手', correct: true, reason: '“一直没原谅她”说明是被结束关系的一方怀恨。' },
          { key: 'B', en: 'praised him publicly', cn: '公开夸了他', correct: false, reason: '被夸不会结下多年怨恨，语境相反。' },
          { key: 'C', en: 'called him for help', cn: '打电话找他帮忙', correct: false, reason: '这里说的是抛弃，不是求助。' }
        ],
        analysis: 'dump someone 是“甩了某人”的口语说法。江予讲这段旧事，是在提醒顾清和别低估被抛下的人。',
        wrongFeedback: '你选错了，江予笑了一下：“你看，被丢下的人最记仇。”',
        afterCorrect: '顾清和看着他：“那你呢？被丢下过几次？”江予的笑慢慢收了，没有回答。'
      }
    ],
    completeText: '第二十四章结束。会议没谈出结果，顾清和却在走廊尽头停下。他回头对江予说：不管他们怎么定义，我不会先走。'
  },
  {
    id: 'dm_25',
    index: 25,
    title: '第 25 章 · 记者堵在门口',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '公司门口的台阶下挤满了记者，话筒伸得很长。有人喊“你是不是假唱”，有人喊“你身边那位是谁”。江予站在玻璃门后，第一次觉得这道门太薄。',
    questions: [
      {
        plotDescription: '一个记者大声质问，说他那晚的现场是作弊。',
        line: "They said I cheated on the live show. I didn't. I sang every note.",
        lineCn: '他们说我那场直播作弊，我没有，每一个音都是我唱的。',
        prompt: "根据上下文，选出画线词汇 'cheated' 最准确的意思。",
        options: [
          { key: 'A', en: 'won fairly', cn: '公平地赢了', correct: false, reason: '被质疑作弊时，否认的是不正当手段，不是公平。' },
          { key: 'B', en: 'broke the rules dishonestly', cn: '作弊、用不正当手段', correct: true, reason: '后面强调每个音都是自己唱的，正是在否认作弊。' },
          { key: 'C', en: 'sang too loudly', cn: '唱得太大声', correct: false, reason: '作弊和音量无关，这里指的是作假。' }
        ],
        analysis: 'cheat 指用不正当手段取胜或蒙混。江予最不能忍的，是别人把他拼命唱完的歌说成作假。',
        wrongFeedback: '你选错了，江予后退半步，玻璃门上的倒影晃了一下。',
        afterCorrect: '顾清和站到他前面：“他可以回答，但不是现在。”记者们的声音被门隔了一半。'
      },
      {
        plotDescription: '人群里有人笑着问顾医生，是不是对每个病人都这么上心。',
        line: "He flirts with everyone. Don't read too much into it.",
        lineCn: '他对谁都调情，别想太多。',
        prompt: "根据上下文，选出画线词汇 'flirts' 最准确的意思。",
        options: [
          { key: 'A', en: 'playfully shows romantic interest', cn: '调情、暧昧示好', correct: true, reason: '后面劝人“别想太多”，说明这被理解为暧昧示好。' },
          { key: 'B', en: 'argues with everyone', cn: '和所有人争吵', correct: false, reason: '与“别想太多”的提醒不搭，这里指的是暧昧。' },
          { key: 'C', en: 'ignores everyone', cn: '无视所有人', correct: false, reason: '无视别人不会让人误会成喜欢。' }
        ],
        analysis: 'flirt 指带着好感地打趣、示好。江予用这句话挡回记者，语气却比谁都酸。',
        wrongFeedback: '你选错了，顾清和侧过脸看他，江予立刻把视线移开。',
        afterCorrect: '顾清和低声说：“我对谁调情，你很清楚。”江予的耳朵一下红了，记者还在喊。'
      },
      {
        plotDescription: '回车上，江予的手机一直在响，屏幕上是一个很久没出现的名字。',
        line: "My ex called me after the news. He wanted to know if I was okay.",
        lineCn: '新闻出来之后我前任给我打了电话，问我好不好。',
        prompt: "根据上下文，选出画线词汇 'ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'my doctor', cn: '我的医生', correct: false, reason: '医生就在旁边，这里指的是过去交往过的人。' },
          { key: 'B', en: 'my fan', cn: '我的粉丝', correct: false, reason: '粉丝不会被称为 ex，这个词特指前任。' },
          { key: 'C', en: 'my former partner', cn: '前任', correct: true, reason: '“问我好不好”的旧人，正是 ex 所指的前任。' }
        ],
        analysis: 'ex 是“前任”的口语说法。江予提起这通电话，眼睛却在看顾清和的反应。',
        wrongFeedback: '你选错了，顾清和把视线移回路面，说“那挺好”，语气很平。',
        afterCorrect: '江予把手机扣下：“我没接。”顾清和嗯了一声，握方向盘的手却松了一点。'
      },
      {
        plotDescription: '为了甩开跟拍，江予让助理去拦住车，自己拉着顾清和绕进小巷。',
        line: "Be my wingman tonight. I need five minutes alone with him.",
        lineCn: '今晚给我当僚机，我需要和他单独待五分钟。',
        prompt: "根据上下文，选出画线词汇 'wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bodyguard', cn: '保镖', correct: false, reason: '他要的是有人帮忙创造独处机会，不是保护安全。' },
          { key: 'B', en: 'a friend who helps you in romance', cn: '僚机、帮你撮合的朋友', correct: true, reason: '让朋友拦住别人、自己独处，正是僚机的作用。' },
          { key: 'C', en: 'a driver', cn: '司机', correct: false, reason: '这里与开车无关，重点是帮忙制造机会。' }
        ],
        analysis: 'wingman 指在感情上帮你打配合的朋友。江予说这话时，顾清和就在他身边，被拉着一路小跑。',
        wrongFeedback: '你选错了，助理没拦住人，闪光灯又追了上来。',
        afterCorrect: '两人躲进巷子，背贴着墙。江予喘着气笑出声，顾清和看着他，也笑了。'
      }
    ],
    completeText: '第二十五章结束。巷子里没有灯，只有远处的声音。江予忽然说：“刚才那五分钟，我其实什么都不想说。”'
  },
  {
    id: 'dm_26',
    index: 26,
    title: '第 26 章 · 他站在镜头前',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '发布会现场，几十支话筒对着台前。顾清和主动站到了江予侧前方半步的位置，替他把最尖锐的问题挡了下来。灯光很亮，他第一次站在这种地方。',
    questions: [
      {
        plotDescription: '顾清和走上台时，台下的议论声忽然变了调。',
        line: "The whole room had a strange vibe when you walked in.",
        lineCn: '你走进来的时候，整个房间的气氛都变了。',
        prompt: "根据上下文，选出画线词汇 'vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loud noise', cn: '很大的噪音', correct: false, reason: '议论声本来就是声音，这里指的是整体感觉。' },
          { key: 'B', en: 'a cold temperature', cn: '很低的气温', correct: false, reason: 'vibe 指氛围，不是温度，别被字面误导。' },
          { key: 'C', en: 'the feeling a place gives', cn: '氛围感、气氛', correct: true, reason: '他一走进来议论就变调，说的正是场合的氛围。' }
        ],
        analysis: 'vibe 是口语里的“氛围、感觉”。顾清和站上台的那一刻，整个发布会的空气都变了。',
        wrongFeedback: '你选错了，江予的手在桌下抓紧，顾清和却没退。',
        afterCorrect: '顾清和对着话筒说：“我是他的医生。今天只回答与病情无关的问题。”台下安静了两秒。'
      },
      {
        plotDescription: '有记者追问他们的关系，还用了十分夸张的词。',
        line: "Don't say soulmate on live TV. We haven't even had dinner alone.",
        lineCn: '别在直播里说灵魂伴侣，我们连单独吃顿饭都还没有过。',
        prompt: "根据上下文，选出画线词汇 'soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a personal doctor', cn: '私人医生', correct: false, reason: '医生是他自己的身份，不是记者用的那个词。' },
          { key: 'B', en: 'a person perfectly matched to you', cn: '灵魂伴侣', correct: true, reason: '“连饭都没单独吃过”是在否认这种极致契合的关系。' },
          { key: 'C', en: 'a coworker', cn: '同事', correct: false, reason: '同事不会被称为灵魂伴侣，语义不符。' }
        ],
        analysis: 'soulmate 指灵魂契合的伴侣。顾清和用一句轻描淡写的话，把过于浪漫的词拉回了地面。',
        wrongFeedback: '你选错了，记者哄笑起来，江予的耳朵红得很明显。',
        afterCorrect: '顾清和补了一句：“不过，我确实想请。”台下笑声更大了，江予低下头，嘴角压不住。'
      },
      {
        plotDescription: '记者问两人合作舞台为什么那么有感染力，顾清和答得很直接。',
        line: "We have chemistry on stage. Everyone can see it.",
        lineCn: '我们在舞台上有化学反应，所有人都看得出来。',
        prompt: "根据上下文，选出画线词汇 'chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'natural connection between people', cn: '化学反应、默契', correct: true, reason: '被问舞台感染力，回答的是两人之间的默契。' },
          { key: 'B', en: 'a science experiment', cn: '科学实验', correct: false, reason: '这是舞台采访，不是实验室场景。' },
          { key: 'C', en: 'a signed contract', cn: '签约合同', correct: false, reason: '合同不会产生感染力，指的不是纸面关系。' }
        ],
        analysis: 'chemistry 在人际语境里指“化学反应、默契”。顾清和说得很坦荡，反而没人再追问。',
        wrongFeedback: '你选错了，江予被水呛了一下，连忙低头。',
        afterCorrect: '顾清和替他把水杯挪开：“慢点。”这个动作被镜头完整拍了下来。'
      },
      {
        plotDescription: '发布会结束，江予在后台问他，为什么要做到这个地步。',
        line: "Trust takes years. You're asking me to give it in one night.",
        lineCn: '信任要很多年才建立，你却在让我一夜之间就交出去。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'money', cn: '金钱', correct: false, reason: '这里谈的是把心交出去，不是财务问题。' },
          { key: 'B', en: 'a signature', cn: '签名', correct: false, reason: '信任不是签个字，需要时间累积。' },
          { key: 'C', en: 'belief that someone is reliable', cn: '信任', correct: true, reason: '“要很多年才建立”正是信任的典型特征。' }
        ],
        analysis: 'trust 指相信对方可靠、不会伤害自己。江予不是在拒绝，是在说自己已经很难再相信人。',
        wrongFeedback: '你选错了，顾清和把话筒放回桌上，转身走了两步。',
        afterCorrect: '他停下来说：“我不是要你今晚就给。我可以等。”江予站在原地看着他的背影，很久没动。'
      }
    ],
    completeText: '第二十六章结束。发布会视频被反复转发，评论里最热的一条是：那个医生挡在他前面的样子，太明显了。'
  },
  {
    id: 'dm_27',
    index: 27,
    title: '第 27 章 · 一夜之间的黑料',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '凌晨，十几条黑料一起被放出来：耍大牌、假唱、私生活混乱。江予坐在黑暗里翻完，最后一条写着“他的医生也脱不了干系”。他把手机捏得很紧。',
    questions: [
      {
        plotDescription: '顾清和连夜赶来，江予开门时第一句话却是自嘲。',
        line: "The only person still loyal to me is my assistant. Everyone else ran.",
        lineCn: '现在唯一还对我忠诚的人是我的助理，其他人都跑了。',
        prompt: "根据上下文，选出画线词汇 'loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'always supportive and faithful', cn: '忠诚、始终站在你这边', correct: true, reason: '别人都跑了，只有助理留下，正是忠诚。' },
          { key: 'B', en: 'very famous', cn: '非常有名', correct: false, reason: '这里说的是有没有人留下，不是名气。' },
          { key: 'C', en: 'extremely rich', cn: '非常有钱', correct: false, reason: '留下与财富无关，指的是忠诚。' }
        ],
        analysis: 'loyal 指对人或关系始终忠诚。江予用一句自嘲，把整晚的失望都压缩进去了。',
        wrongFeedback: '你选错了，江予把门开着，自己先回了客厅，背影很僵。',
        afterCorrect: '顾清和关上门：“我不算别人。”江予停了一下，没有回头，肩膀却松了。'
      },
      {
        plotDescription: '公司发来最后通牒，说只要他配合公关，资源还能保住。',
        line: "They offered me a deal. I rejected it. All of it.",
        lineCn: '他们给了我一个条件，我拒绝了，全部拒绝。',
        prompt: "根据上下文，选出画线词汇 'rejected' 最准确的意思。",
        options: [
          { key: 'A', en: 'accepted happily', cn: '高兴地接受了', correct: false, reason: '后半句说“全部拒绝”，和接受相反。' },
          { key: 'B', en: 'forgot about it', cn: '把它忘了', correct: false, reason: '他是明确回绝，不是忘记。' },
          { key: 'C', en: 'refused to accept', cn: '拒绝了', correct: true, reason: '面对最后通牒，他的回应是不接受任何条件。' }
        ],
        analysis: 'reject 指明确拒绝、不接受。江予这次没有讨价还价，把所有交换都推了回去。',
        wrongFeedback: '你选错了，江予把那份通牒揉成一团，扔进了垃圾桶。',
        afterCorrect: '顾清和把纸团捡出来，展开看了一眼：“明天我陪你去谈。”江予说：“没得谈。”'
      },
      {
        plotDescription: '沉默很久，江予忽然抬起头，说有一件事再不说就来不及了。',
        line: "I have to confess. I've liked you since the first night in the ambulance.",
        lineCn: '我得表白了，从救护车那晚起我就喜欢你。',
        prompt: "根据上下文，选出画线词汇 'confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'admit a crime', cn: '承认罪行', correct: false, reason: '他说的是喜欢一个人，不是认罪。' },
          { key: 'B', en: 'tell someone your romantic feelings', cn: '表白', correct: true, reason: '后面直接说出喜欢，正是把心意讲出来。' },
          { key: 'C', en: 'keep a secret', cn: '保守秘密', correct: false, reason: 'confess 是说出来，和保密相反。' }
        ],
        analysis: 'confess 本义“坦白”，在感情语境里就是“表白”。江予挑在最糟的一夜说出口，反而最真。',
        wrongFeedback: '你选错了，江予把话咽回去，改口说“算了，当我没说”。',
        afterCorrect: '顾清和看着他，很久才开口：“我等这句话，比你想象得久。”'
      },
      {
        plotDescription: '江予苦笑，说他早就发现，顾清和一直在往后退。',
        line: "You're afraid of commitment, not of me. Say it.",
        lineCn: '你怕的是承诺，不是我。你说啊。',
        prompt: "根据上下文，选出画线词汇 'commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious promise to a relationship', cn: '承诺、对关系的投入', correct: true, reason: '“怕的不是我”对比的正是对长期关系的承诺。' },
          { key: 'B', en: 'a business contract', cn: '商业合同', correct: false, reason: '这里谈的是感情，不是生意。' },
          { key: 'C', en: 'a medical treatment', cn: '治疗方案', correct: false, reason: '语境是两人关系，与治疗无关。' }
        ],
        analysis: 'commitment 指对关系作出的长期承诺。江予一针见血，把顾清和一直回避的东西挑明。',
        wrongFeedback: '你选错了，顾清和没有回答，江予眼里的光暗了下去。',
        afterCorrect: '顾清和终于说：“我怕的是我给不了。”江予笑了：“你连试都没试。”'
      }
    ],
    completeText: '第二十七章结束。那一夜谁也没睡。天亮时，江予把黑料从头到尾又看了一遍，然后说：我不澄清了。'
  },
  {
    id: 'dm_28',
    index: 28,
    title: '第 28 章 · 解约风波',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '黑料压下来的第三天，公司叫顾清和一起进会议室。桌上摊着解约合同和违约金清单，法务的语气很客气，意思很清楚：要么江予认个错，要么自己走。',
    questions: [
      {
        plotDescription: '律师出去接电话，会议室只剩他们两个。顾清和把椅子往江予那边挪了半寸，文件还摊在桌上。',
        line: "I'm not asking for intimacy. I'm asking you to stay until the lawyer gets back.",
        lineCn: '我不是在要求什么亲密。我只是让你留到律师回来。',
        prompt: "根据上下文，选出画线词汇 'intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious relationship', cn: '一段正式的恋爱关系', correct: false, reason: 'intimacy 不等于名分，它说的是彼此靠近的程度，不是关系的身份。' },
          { key: 'B', en: 'closeness between two people', cn: '两个人之间的亲近', correct: true, reason: 'intimacy 的核心是贴近和私密。他说的是先别谈那么远，先留下来。' },
          { key: 'C', en: 'a private meeting', cn: '一场私下会面', correct: false, reason: '会面确实私密，但 intimacy 说的是情感距离，不是会议的性质。' }
        ],
        analysis: '顾清和什么都没承诺。他只是要求江予留在原地。intimacy 在这里不是宣誓，而是允许对方靠近的那道门。',
        wrongFeedback: '你选错了，江予以为他在拒绝，把文件合上站了起来，气血 -10。',
        afterCorrect: '江予没走。他重新坐下，手指在桌上敲了两下：“那你最好别嫌我烦。”律师推门回来时，两个人已经并肩坐着，谁也没提刚才那句话。'
      },
      {
        plotDescription: '走廊的灯还没亮。江予靠着墙，忽然低声问了一句，像在自言自语，又像非要一个答案。',
        line: "You never show affection, but you stayed. Why?",
        lineCn: '你从来不表露感情，可你留下来了。为什么？',
        prompt: "根据上下文，选出画线词汇 'affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'warm feelings you show', cn: '对某人的感情与喜欢', correct: true, reason: 'affection 指流露出来的温情。他问的是：你明明不表露，为什么还在。' },
          { key: 'B', en: 'a kind of illness', cn: '一种疾病', correct: false, reason: 'affection 和 affect 容易混，但 affection 是感情，不是病症。' },
          { key: 'C', en: 'attention from fans', cn: '来自粉丝的关注', correct: false, reason: '走廊里没有粉丝，只有他们两个人，affection 也不指公众关注。' }
        ],
        analysis: '江予问得很轻，却把话说得很重。affection 是被看见的温情，而顾清和恰恰最不擅长把它摆在明面上。',
        wrongFeedback: '你选错了，江予把这句问话咽回去了，转身走进电梯，气血 -10。',
        afterCorrect: '顾清和沉默了十几秒，最后只说：“因为我是你的医生。”江予笑了一声，替他把后半句补上：“也只有你还在。”'
      },
      {
        plotDescription: '顾清和本来要值夜班，结果把班换掉了。他把手机屏幕转给江予看，上面只有一行字。',
        line: "I traded my shift. Tonight is our first date night, even if it is just hospital food.",
        lineCn: '我把班换了。今晚是我们的第一个约会夜——哪怕只有医院食堂的饭。',
        prompt: "根据上下文，选出画线词汇 'date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a night shift at work', cn: '一个夜班', correct: false, reason: 'date night 是约会之夜，而这次他正好把夜班换掉了，意思相反。' },
          { key: 'B', en: 'a blind date', cn: '相亲', correct: false, reason: 'blind date 才是相亲，date night 是伴侣之间固定留出来的一晚。' },
          { key: 'C', en: 'a night set aside for them', cn: '专门留给两个人的一晚', correct: true, reason: 'date night 指两个人专门空出来的相处时间，做什么都不重要。' }
        ],
        analysis: 'date night 的重点不在吃什么，而在“专门留出来”。顾清和换班这件事，本身比任何一句话都坦白。',
        wrongFeedback: '你选错了，江予没接手机，只说了句“你忙就忙吧”，气血 -10。',
        afterCorrect: '食堂十点关门。他们端着最后两份饭坐在最角落，头顶只剩一盏灯。江予吃着吃着，忽然低头笑了一下，米饭都掉在了桌上。'
      },
      {
        plotDescription: '江予低头吃饭，顾清和看着他，忽然发现自己很久没有移开视线。江予抬起眼，正好撞上。',
        line: "Do not look at me like that. People will think you are smitten.",
        lineCn: '别那样看我。别人会以为你陷进去了。',
        prompt: "根据上下文，选出画线词汇 'smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry', cn: '生气', correct: false, reason: 'smitten 是动心到失神，和生气正好相反。' },
          { key: 'B', en: 'totally in love', cn: '神魂颠倒地喜欢', correct: true, reason: 'be smitten with someone 就是被谁迷住。江予是在点破他的眼神。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '困惑是 confused。smitten 带着甜，是心动到藏不住。' }
        ],
        analysis: 'smitten 比 love 更轻，也更藏不住。江予没有质问，他只是在提醒——你的眼睛已经把答案写在脸上了。',
        wrongFeedback: '你选错了，顾清和移开视线，那顿饭剩下的时间两个人一句话都没说，气血 -10。',
        afterCorrect: '顾清和没有否认，也没有承认。他只是把最后一块糖醋排骨夹到江予碗里，说：“吃你的饭。”江予低头，耳朵红了。'
      }
    ],
    completeText: '第二十八章结束。解约的风声暂时按下，两个人端着餐盘坐在空食堂里。顾清和什么都没说，只把最后一块排骨夹给他，动作笨拙得不像个从不失手的外科医生。'
  },
  {
    id: 'dm_29',
    index: 29,
    title: '第 29 章 · 助听器里的雨声',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '雨下了整夜，病房的窗上全是水。江予刚从复查室回来，助听器的音量被调低了一格。顾清和坐在床边记数据，笔尖停在那份外地进修的通知上。',
    questions: [
      {
        plotDescription: '雨敲在玻璃上，江予把助听器摘下一半，忽然说起那个从此再也不会打来的号码，声音很平。',
        line: "I thought I knew heartbreak. Then I lost a note I will never hear again.",
        lineCn: '我以为我懂什么叫心碎。直到我失去了一个再也听不到的音。',
        prompt: "根据上下文，选出画线词汇 'heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'a physical pain in the chest', cn: '胸口上的生理疼痛', correct: false, reason: 'heartbreak 不是心脏出了毛病，而是情感上被生生撕开的痛。' },
          { key: 'B', en: 'being tired of love', cn: '对爱情感到厌倦', correct: false, reason: '心碎源于失去，不是厌倦。他失去的是一个音，不是一个人。' },
          { key: 'C', en: 'deep pain from losing something', cn: '因失去而生的深切痛苦', correct: true, reason: 'heartbreak 是被夺走之后留下的剧痛。这一次夺走的是他的高音。' }
        ],
        analysis: '江予把心碎说得很轻。他没提那个人，只提那个音。heartbreak 在这里不只是恋爱，是他整个身份被削掉一角。',
        wrongFeedback: '你选错了，江予没等到回应，把助听器整个摘了下来，气血 -10。',
        afterCorrect: '顾清和把记录本合上，说：“还有一个音能救。”江予抬头，眼睛里有雨：“那你救。”窗外的雷声滚过去，两个人都没动。'
      },
      {
        plotDescription: '顾清和要去外地进修三个月。他把行程表放在床头，江予看了一眼就转开了脸。',
        line: "Three months of long-distance, and you still think I will be fine.",
        lineCn: '三个月的异地，你还觉得我会没事。',
        prompt: "根据上下文，选出画线词汇 'long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a relationship overseas', cn: '跨国恋爱', correct: false, reason: 'long-distance 只强调距离远，不一定是跨国，外地进修三个月也算。' },
          { key: 'B', en: 'being apart for a long time', cn: '长时间两地分开', correct: true, reason: 'long-distance 就是长时间不在同一个地方。江予怕的是这三个月。' },
          { key: 'C', en: 'a call that lags', cn: '通话延迟', correct: false, reason: '通话卡顿是 lag，long-distance 说的是相隔两地的状态。' }
        ],
        analysis: 'long-distance 的重点不是公里数，而是“见不到”。江予这句话不是抱怨距离，是在确认对方会不会走。',
        wrongFeedback: '你选错了，江予把行程表推回去，说“你去吧”，声音比雨还冷，气血 -10。',
        afterCorrect: '顾清和没走开。他把行程表折起来，放进抽屉：“三个月而已。”江予盯着抽屉看了很久，才说：“你要是回来发现我听没了呢。”'
      },
      {
        plotDescription: '公司发来一版新的公关方案，说给他安排“多角恋”话题更抓眼球。江予把平板推到桌上。',
        line: "Their plan is polyamory for clicks. I cannot even hold one person hand in public.",
        lineCn: '他们的方案是靠多角恋博点击。我连公开牵一个人的手都做不到。',
        prompt: "根据上下文，选出画线词汇 'polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having several partners at once', cn: '同时与多人交往', correct: true, reason: 'polyamory 指同时经营多段亲密关系。这里就是公关要给他贴的标签。' },
          { key: 'B', en: 'having many fans', cn: '拥有很多粉丝', correct: false, reason: '粉丝多是 popularity。polyamory 说的是感情关系的数量。' },
          { key: 'C', en: 'a kind of contract', cn: '一种合同', correct: false, reason: '这里谈的是恋情话题，不是合约条款。' }
        ],
        analysis: 'polyamory 是个被媒体误用的词。江予真正在意的是——他连一个人都藏得那么辛苦，别人却拿这个当卖点。',
        wrongFeedback: '你选错了，江予把平板扣在桌上，冷笑了一声没说话，气血 -10。',
        afterCorrect: '“不接。”江予说得很快，“他们要热度，让他们自己谈。”顾清和把平板翻过来，看了一眼方案，只说：“我同意你。”'
      },
      {
        plotDescription: '隔壁病房传来争吵。一个男人说签了字就自由了。江予把门轻轻关上，回头看顾清和。',
        line: "He sounded almost happy about the divorce. I do not understand that.",
        lineCn: '他说起离婚的时候几乎像是高兴的。我不理解。',
        prompt: "根据上下文，选出画线词汇 'divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a break from work', cn: '工作之余的休息', correct: false, reason: '休息是 break。divorce 是法律上结束一段婚姻。' },
          { key: 'B', en: 'moving to another city', cn: '搬到另一个城市', correct: false, reason: '搬家是 move。divorce 与搬家无关，是婚姻关系的解除。' },
          { key: 'C', en: 'the legal end of a marriage', cn: '婚姻关系的法律终止', correct: true, reason: 'divorce 就是离婚，法庭上正式结束婚姻的那一步。' }
        ],
        analysis: '江予在意的不是离婚本身，而是那个人说话时的轻松。对一个把关系藏起来的人来说，这种轻松近乎奢侈。',
        wrongFeedback: '你选错了，顾清和以为他在替别人难过，递了张纸巾过去，气血 -10。',
        afterCorrect: '顾清和说：“有些人早就结束了，只是还没签字。”江予看着他，很久才说：“那我们呢，是没开始，还是也没签？”'
      }
    ],
    completeText: '第二十九章结束。那天晚上雨一直没停。顾清和把进修的行程表折好扔进抽屉，说三个月而已。江予没回答，只把助听器重新戴了回去，耳朵里又灌满了雨。'
  },
  {
    id: 'dm_30',
    index: 30,
    title: '第 30 章 · 他没有退',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '视频流出的当天下午，公司楼下围了三十多家媒体。标题写着“顶流深夜密会”，配图是顾清和替他拉开车门的那一秒，连路灯都拍得很清楚。',
    questions: [
      {
        plotDescription: '公关总监把热搜截图甩在桌上，问要不要发声明否认。江予看了一眼那张深夜的照片，没抬头。',
        line: "They call it an affair. I call it the only hour I can hear myself.",
        lineCn: '他们管这叫绯闻。我管这叫唯一能听见自己的一小时。',
        prompt: "根据上下文，选出画线词汇 'affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship', cn: '秘密的恋情、绯闻', correct: true, reason: 'affair 常指见不得光的情感关系，媒体用的正是这个意思。' },
          { key: 'B', en: 'a business event', cn: '一场商务活动', correct: false, reason: '商务活动是 event。affair 放在八卦标题里就是绯闻。' },
          { key: 'C', en: 'an accident', cn: '一次意外', correct: false, reason: '意外是 accident。affair 这里指被曝光的私密关系。' }
        ],
        analysis: '同一个词，媒体看到的是丑闻，江予说的是那几个小时。affair 的锋利之处在于——它先把关系定了性，再让你解释。',
        wrongFeedback: '你选错了，公关把这句当成默认，立刻拟了一份道歉声明，气血 -10。',
        afterCorrect: '江予把截图推开：“不否认，也不承认。”公关总监愣住。顾清和在旁边补了一句：“什么都不说，也是一种说法。”'
      },
      {
        plotDescription: '散会后走廊空下来。江予靠在消防栓旁边，声音低得只有两个人能听见，说的是他从没求过的东西。',
        line: "I never wanted romance on a headline. I wanted it in a room with the door closed.",
        lineCn: '我从没想让恋情上头条。我只想让它留在一间关着门的屋子里。',
        prompt: "根据上下文，选出画线词汇 'romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of novel', cn: '一种小说体裁', correct: false, reason: 'romance 确实有言情小说的意思，但这里说的是他自己的感情。' },
          { key: 'B', en: 'a marketing plan', cn: '一个营销方案', correct: false, reason: '他正在拒绝把感情做成营销，romance 指的是真实的恋爱。' },
          { key: 'C', en: 'love and courtship', cn: '爱情与追求' , correct: true, reason: 'romance 就是两个人之间的爱与追求。他要的是私下的，不是热搜的。' }
        ],
        analysis: 'romance 在商业语境里被用滥了。江予把它拿回来，放回一间关着门的屋子——他要的从来不是被看见，是被允许。',
        wrongFeedback: '你选错了，江予笑了一下，说“算了，你不懂”，转身走向电梯，气血 -10。',
        afterCorrect: '顾清和站在原地，过了几秒才跟上去：“我懂。”江予没回头，脚步却慢了半拍。“那你留门。”他说。'
      },
      {
        plotDescription: '深夜的车上，江予忽然提起家里的事。他说得很平静，像在讲别人的故事，手却一直按在膝盖上。',
        line: "I have seen devotion before. My mother stayed for eleven years. I do not want that kind.",
        lineCn: '我见过什么叫付出。我妈守了十一年。我不想要那种。',
        prompt: "根据上下文，选出画线词汇 'devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a medical treatment', cn: '一种医学治疗', correct: false, reason: 'devotion 不是治疗，尽管常出现在护理语境，这里说的是感情上的投入。' },
          { key: 'B', en: 'deep loyalty and commitment', cn: '深切的忠诚与投入', correct: true, reason: 'devotion 是不计回报的长久投入。他母亲守了十一年，正是这个词。' },
          { key: 'C', en: 'a kind of prayer', cn: '一种祈祷', correct: false, reason: '祈祷是 prayer。devotion 在这里是人对人的长久付出。' }
        ],
        analysis: 'devotion 本来是褒义词，江予却说得发冷。他怕的不是付出，是那种把自己耗到没有的付出。',
        wrongFeedback: '你选错了，顾清和接错了话，车里的空气一下子僵住，气血 -10。',
        afterCorrect: '顾清和把车停在路边，没有立刻说话。过了很久他才开口：“我不会让你守。”江予转头看他：“那你打算怎么办。”'
      },
      {
        plotDescription: '演唱会彩排结束，全场只剩一盏工作灯。江予坐在舞台边缘，看着空荡荡的观众席，说了句不像问题的话。',
        line: "Passion is not loud. It is the part nobody sees, the part that stays after the lights go out.",
        lineCn: '热爱不是喧哗的。它是没人看见的那部分，是灯灭之后还留下的那部分。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'intense love or strong feeling', cn: '强烈的热爱与激情', correct: true, reason: 'passion 是烧得起来的热。他没说不热烈，只说不喧哗。' },
          { key: 'B', en: 'a kind of fruit', cn: '一种水果', correct: false, reason: 'passion fruit 是百香果，但单说 passion 指的是强烈的情感。' },
          { key: 'C', en: 'anger', cn: '愤怒', correct: false, reason: '愤怒是 anger。passion 在这里说的是撑着他唱歌的那股劲。' }
        ],
        analysis: 'passion 常被当成口号喊，江予却把它放在灯灭之后。对听不见的人来说，热爱不是声音，是还愿不愿意站上台。',
        wrongFeedback: '你选错了，江予把话筒放回架子上，说“回吧”，气血 -10。',
        afterCorrect: '顾清和走到台边，抬头看他：“那就让我当那个没人看见的部分。”江予低头，灯光把他的影子投在空座上，很长。'
      }
    ],
    completeText: '第三十章结束。那段视频最后停在顾清和关门的动作上。江予看完，把手机屏幕按灭：“他们连我进门时摘助听器都没拍到。”顾清和说：“那我们就让他们拍一次。”'
  },
  {
    id: 'dm_31',
    index: 31,
    title: '第 31 章 · 手术同意书',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '手术通知单放在桌上，签名栏空着。医生说越早越好，可一旦失败，他可能连一句完整的话都留不住。顾清和把笔递过去，江予没有接。',
    questions: [
      {
        plotDescription: '病房门外，经纪人还在压消息。江予把外套拉上拉链，语气很平，却把“今晚”咬得很重。',
        line: "I am going to confront him. Not tomorrow, not after the show, but tonight.",
        lineCn: '我要去当面问他。不是明天，不是演出之后，就是今晚。',
        prompt: "根据上下文，选出画线词汇 'confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'comfort someone', cn: '安慰某人', correct: false, reason: 'confront 不是安慰，而是正面把事情摊开来问清楚。' },
          { key: 'B', en: 'face someone directly', cn: '当面质问、正面面对', correct: true, reason: 'confront 是站出来当面对质。他强调的不是明天，是今晚。' },
          { key: 'C', en: 'argue online', cn: '在网上争吵', correct: false, reason: '这里要的是当面把话说清，不是网络对骂。' }
        ],
        analysis: 'confront 需要承担后果。江予把时间卡在今晚，等的不是把握，是不想再拖。',
        wrongFeedback: '你选错了，江予以为你在劝他等，回头看了你一眼就自己出门了，气血 -10。',
        afterCorrect: '顾清和没拦，只把外套递给他：“那我在楼下等。”江予脚步停了一下，说：“万一我出来的时候听不见了呢。”'
      },
      {
        plotDescription: '谈崩了。对方的法务还在打圆场，江予已经站起来，把水杯推回桌子中央。',
        line: "If he leaks my records again, I will cut ties with the whole company.",
        lineCn: '他要是再把我的病历捅出去，我就跟整个公司断绝关系。',
        prompt: "根据上下文，选出画线词汇 'cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'end the relationship completely', cn: '彻底断绝关系', correct: true, reason: 'cut ties 就是切断联系、不再往来，比吵架严重得多。' },
          { key: 'B', en: 'renew a contract', cn: '续签合同', correct: false, reason: '续约是 renew。cut ties 恰恰是彻底断掉。' },
          { key: 'C', en: 'hang up a phone call', cn: '挂断电话', correct: false, reason: '挂电话是 hang up。cut ties 指关系层面的切断。' }
        ],
        analysis: 'cut ties 是最重的一句表态。江予不是在谈条件，他把最坏的打算先摆在桌上，让对方自己选。',
        wrongFeedback: '你选错了，对方听成了还在谈，笑着递过来一份补充协议，气血 -10。',
        afterCorrect: '会议室安静了半分钟。最后对方说：“病历的事，我们去查。”江予没坐下，只说：“查出来之前，我不唱。”'
      },
      {
        plotDescription: '彩排的录像被放到最大声。第二段副歌里有一句明显塌了，江予盯着屏幕，把音量调小了一格。',
        line: "I messed up the second chorus. The monitor was dead and I could not hear myself.",
        lineCn: '我把第二段副歌唱砸了。耳返坏了，我根本听不见自己。',
        prompt: "根据上下文，选出画线词汇 'messed up' 最准确的意思。",
        options: [
          { key: 'A', en: 'dirtied something', cn: '把东西弄脏', correct: false, reason: 'mess up 字面有弄乱，但这里说的是唱砸了，不是弄脏。' },
          { key: 'B', en: 'fixed a problem', cn: '解决了问题', correct: false, reason: '意思正好相反，他搞砸了，不是解决了。' },
          { key: 'C', en: 'did something badly', cn: '搞砸了、做坏了', correct: true, reason: 'mess up 就是把事情弄糟。他自己承认第二段唱坏了。' }
        ],
        analysis: 'messed up 是承认失误的说法，带着一点懊恼。奇怪的是，江予说这句话时，语气里没有慌。',
        wrongFeedback: '你选错了，江予以为你在替他找借口，把录像直接关掉了，气血 -10。',
        afterCorrect: '顾清和把视频倒回去，停在那一秒：“不是你的错。”江予摇头：“我知道不是。但观众不会知道。”'
      },
      {
        plotDescription: '走廊的灯白得刺眼。江予忽然笑了一下，说出的话让顾清和停住了脚步。',
        line: "I screwed it up on purpose. I want him to see that I cannot do this alone.",
        lineCn: '我是故意搞砸的。我想让他看见，我一个人做不成这件事。',
        prompt: "根据上下文，选出画线词汇 'screwed it up' 最准确的意思。",
        options: [
          { key: 'A', en: 'tightened a screw', cn: '把螺丝拧紧了', correct: false, reason: 'screw up 是固定短语，跟拧螺丝一点关系也没有。' },
          { key: 'B', en: 'ruined it deliberately', cn: '故意把它毁掉', correct: true, reason: 'screw up 就是搞砸。他说自己是故意的，为的是把人留在这。' },
          { key: 'C', en: 'wrote it down', cn: '把它写下来了', correct: false, reason: '完全没有这层意思。screw up 指把事情弄坏。' }
        ],
        analysis: '这句话里最狠的不是 screwed it up，而是 on purpose。江予用一次失败，去换一个人必须留下。',
        wrongFeedback: '你选错了，顾清和以为他在推卸责任，脸色沉了下来，气血 -10。',
        afterCorrect: '顾清和看着他：“你不需要用这种方式留人。”江予低头笑：“那你告诉我，还有哪种方式能留住你。”'
      }
    ],
    completeText: '第三十一章结束。江予最后没有签。他把手术通知单折成四折塞进外套口袋，说再给我三天。顾清和没有催，只把笔收回去，替他合上了门。'
  },
  {
    id: 'dm_32',
    index: 32,
    title: '第 32 章 · 退圈声明',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '退圈声明写到第三稿。公关问要不要把耳疾写进去，会议室里没人敢先开口。江予靠在窗边不说话，顾清和把笔放了下来，看着楼下堵住的车流。',
    questions: [
      {
        plotDescription: '公关说，观众只想要一个故事。江予把手机扔在桌上，屏幕还亮着那条热搜。',
        line: "If you want me to spill the tea, fine. I will tell them everything, including the deaf ear.",
        lineCn: '你们要爆料是吧，行。我把所有事都说出去，包括这只听不见的耳朵。',
        prompt: "根据上下文，选出画线词汇 'spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'make tea for guests', cn: '给客人泡茶', correct: false, reason: 'spill the tea 是网络俚语，不是在泡茶，而是把内幕倒出来。' },
          { key: 'B', en: 'start a fight', cn: '挑起点冲突', correct: false, reason: '不是要挑事，是把藏着的秘密全说出来。' },
          { key: 'C', en: 'share gossip or secrets', cn: '爆料、说出内幕', correct: true, reason: 'spill the tea 就是“抖内幕”。他说的是把一切都摊开。' }
        ],
        analysis: 'spill the tea 通常带点看热闹的意味，江予却把它当武器。他要把自己最怕的那部分先说出去。',
        wrongFeedback: '你选错了，公关以为他要开茶话会，还问要不要叫媒体，气血 -10。',
        afterCorrect: '“不行。”顾清和第一次在会上打断他，“你的病历，轮不到你拿去做筹码。”江予看着他，把手机收了回去。'
      },
      {
        plotDescription: '散会后顾清和把门关上，声音压得很低。他不是在发火，只是一字一句地说。',
        line: "Swear to god, if you lie to me again, I will not be in that operating room.",
        lineCn: '我发誓，你要是再对我撒谎，我就不进那间手术室。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'say a prayer', cn: '做一段祷告', correct: false, reason: 'swear to god 是发誓，不是在祈祷，它带的是愤怒和认真。' },
          { key: 'B', en: 'promise very seriously', cn: '郑重发誓、极其认真地保证', correct: true, reason: 'swear to god 是加强语气的发誓，等于“我是认真的”。' },
          { key: 'C', en: 'thank god', cn: '谢天谢地', correct: false, reason: 'thank god 才是庆幸。swear to god 是拿话压住对方。' }
        ],
        analysis: '顾清和说这句话时没有提高声音，反而更重。swear to god 是在划底线——不是威胁，是他真的会走。',
        wrongFeedback: '你选错了，江予以为他在开玩笑，还笑了一下，气血 -10。',
        afterCorrect: '江予的笑停在脸上。他第一次看见顾清和这样说话。“我没有骗你。”他说。顾清和盯着他：“那就别再开始。”'
      },
      {
        plotDescription: '第四稿还是被退回来。公关说写得太软。江予把笔扔在桌上，靠回椅背，闭了闭眼。',
        line: "Whatever. Write what you want in the statement. I am done explaining.",
        lineCn: '随便吧。声明你们爱怎么写怎么写。我懒得解释了。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'I do not care anymore', cn: '随便吧、我不在乎了', correct: true, reason: 'whatever 单用是放弃争辩的“随便”，带着疲惫，也带着赌气。' },
          { key: 'B', en: 'anything at all', cn: '任何事情', correct: false, reason: 'whatever 字面是“任何”，但这句是态度词，不是指任何事。' },
          { key: 'C', en: 'what did you say', cn: '你刚才说什么', correct: false, reason: '没听清是 pardon。whatever 在这里不是追问。' }
        ],
        analysis: 'whatever 是最快关掉一段对话的词。江予说它的时候，其实不是不在乎，是已经累到不想再被问。',
        wrongFeedback: '你选错了，公关真的按自己的意思写了，第二天标题全歪了，气血 -10。',
        afterCorrect: '顾清和把那份草稿拿过来，划掉两行，重新写了一句。江予睁开眼：“你写什么。”他说：“写你会回来。”'
      },
      {
        plotDescription: '深夜，最后一个知道真相的人终于说了实话。江予握着手机的指节发白，声音低得几乎听不清。',
        line: "Seriously? You are telling me the label knew about my ear for a year?",
        lineCn: '你说真的？你是说公司一年前就知道我耳朵的事？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'in a serious manner', cn: '以严肃的方式', correct: false, reason: 'seriously 作副词是“严肃地”，但单独成句时是质疑对方的真假。' },
          { key: 'B', en: 'are you joking', cn: '你在开玩笑吧', correct: false, reason: '有点接近，但这里不是打趣，而是难以置信的追问。' },
          { key: 'C', en: 'are you being for real', cn: '你是认真的吗、真的假的', correct: true, reason: 'Seriously? 独立成句表示难以置信的质问，接近“你跟我说的是真的”。' }
        ],
        analysis: 'Seriously? 升调说出来，是把对方的话原样退回去。剥掉语气词，剩下的是一句“你再说一遍”。',
        wrongFeedback: '你选错了，江予把电话挂了，一个人在走廊坐到天亮，气血 -10。',
        afterCorrect: '电话那头还在解释。江予把手机放在窗台上，让它自己说。顾清和走过来，什么都没问，只把手搭在他肩上。'
      }
    ],
    completeText: '第三十二章结束。声明最后没有写“退圈”，只写了“暂别舞台”。江予看完把纸推回去：“这样可以。”顾清和把那份草稿收起来，像收起一件易碎的东西。'
  },
  {
    id: 'dm_33',
    index: 33,
    title: '第 33 章 · 走廊尽头的那句话',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '走廊尽头只开着一半的灯。江予靠着墙，顾清和站在三步之外，两个人中间隔着一辆推车，还有一段谁都不肯先低头的沉默。',
    questions: [
      {
        plotDescription: '顾清和从值班室出来，发现外套不见了。江予正穿着它，袖子长出一截，抬了抬手。',
        line: "My bad. I took your coat thinking it was mine.",
        lineCn: '是我的错。我拿了你的外套，还以为是自己的。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my mistake, sorry', cn: '是我的错、抱歉', correct: true, reason: 'my bad 是口语里很轻的道歉，等于“我的锅”，不郑重但不敷衍。' },
          { key: 'B', en: 'I am a bad person', cn: '我是个坏人', correct: false, reason: 'my bad 不是自我评价，只是为一件小事认个错。' },
          { key: 'C', en: 'my turn', cn: '轮到我了', correct: false, reason: '轮到我是 my turn，和认错没有关系。' }
        ],
        analysis: 'my bad 的分量很轻，但它是江予难得说出口的“我错了”。一件外套，比手术同意书更容易承认。',
        wrongFeedback: '你选错了，顾清和以为他在自嘲，什么也没说就走了过去，气血 -10。',
        afterCorrect: '顾清和看了他两秒：“穿着吧。”江予把袖口卷了两圈，忽然说：“我好像每次都拿你的东西。”'
      },
      {
        plotDescription: '网上开始骂音响师。江予把手机递过去，语气很硬，像在替一个不在场的人挡枪。',
        line: "Do not blame the sound engineer. He was never told about my ear either.",
        lineCn: '别怪音响师。我的耳朵的事，他也从来不知道。',
        prompt: "根据上下文，选出画线词汇 'blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'praise someone', cn: '表扬某人', correct: false, reason: 'blame 是责怪，正好和表扬相反。' },
          { key: 'B', en: 'pay someone', cn: '给某人付钱', correct: false, reason: '付钱是 pay。blame 是追究责任。' },
          { key: 'C', en: 'hold someone responsible', cn: '把责任归到某人身上', correct: true, reason: 'blame 就是认为某人该负责。他正在替音响师把责任拿回来。' }
        ],
        analysis: 'blame 是把责任推给谁。江予在做的恰恰相反——他把所有的话往自己身上收。',
        wrongFeedback: '你选错了，江予以为你在推责，直接把手机收走了，气血 -10。',
        afterCorrect: '“那你呢。”顾清和问。江予顿了一下：“我怪我自己。”走廊里有人推着车过去，轮子响得很吵。'
      },
      {
        plotDescription: '两个人站在窗边，楼下是凌晨的停车场。江予说得很慢，像终于想通了一件事。',
        line: "We argue about everything except the one thing that matters.",
        lineCn: '我们什么都能吵，唯独不吵真正重要的那件事。',
        prompt: "根据上下文，选出画线词汇 'argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'laugh together', cn: '一起大笑', correct: false, reason: 'argue 是争吵，不是一起笑。' },
          { key: 'B', en: 'quarrel and disagree', cn: '争吵、争辩', correct: true, reason: 'argue 是各说各的、互不相让。他们吵的全是别的事。' },
          { key: 'C', en: 'agree completely', cn: '完全同意', correct: false, reason: '意思正好相反，argue 表示意见相左。' }
        ],
        analysis: 'argue 在这里不是坏事，反而证明他们在乎。真正可怕的是那句 except——最重要的那件事，谁都不敢碰。',
        wrongFeedback: '你选错了，江予把话咽了回去，说“算了，吵这个没意义”，气血 -10。',
        afterCorrect: '顾清和转过头：“那我们现在吵。”江予看着楼下的空车位，说：“我快听不见了，你还留不留。”'
      },
      {
        plotDescription: '护士站的人往这边看。江予把声音压得更低，反而比喊出来更让人不敢接话。',
        line: "I never yell. I just go quiet, and that scares people more.",
        lineCn: '我从来不喊。我就是不说话，而这更让人害怕。',
        prompt: "根据上下文，选出画线词汇 'yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'shout loudly', cn: '大声喊叫', correct: true, reason: 'yell 就是提高嗓门喊。他说自己不喊，只会沉默下去。' },
          { key: 'B', en: 'whisper softly', cn: '轻声低语', correct: false, reason: 'whisper 才是低声说话，和 yell 相反。' },
          { key: 'C', en: 'cry', cn: '哭', correct: false, reason: '哭是 cry。yell 是音量上的爆发。' }
        ],
        analysis: 'yell 是向外炸，沉默是向内收。江予把后者说成更可怕的东西，因为他知道沉默会把对方关在外面。',
        wrongFeedback: '你选错了，江予以为你不信，转身走进安全通道，门在身后合上，气血 -10。',
        afterCorrect: '顾清和跟上去，在楼梯口拉住他的手腕：“那你就说。”江予没抽手，只说了一句：“我怕说完你就走了。”'
      }
    ],
    completeText: '第三十三章结束。那天谁都没道歉。江予先转身走了几步，又停下来，把外套脱了扔给顾清和：“走廊冷，你穿着。”顾清和接住，没有回头。'
  },
  {
    id: 'dm_34',
    index: 34,
    title: '第 34 章 · 我不需要你负责',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '病房的窗帘拉开了一半。江予坐在床沿，顾清和站在门口，手里那份调职申请还没递出去，纸角已经被捏得起了毛。两个人都没先开口。',
    questions: [
      {
        plotDescription: '院方来人问责，说他越过流程调了病历。顾清和把那页纸放在桌上，站得很直。',
        line: "I will not deny it. I did read your chart without asking.",
        lineCn: '我不否认。我确实没经过同意就看了你的病历。',
        prompt: "根据上下文，选出画线词汇 'deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'forget something', cn: '忘记某事', correct: false, reason: 'deny 是否认，不是忘记。他记得很清楚，也不打算躲。' },
          { key: 'B', en: 'say it is not true', cn: '否认、拒不承认', correct: true, reason: 'deny 就是否认。他说自己不否认，因为确实做了这件事。' },
          { key: 'C', en: 'refuse to eat', cn: '拒绝进食', correct: false, reason: '拒绝是 refuse。deny 在这里是“拒不承认”。' }
        ],
        analysis: 'deny 是把自己从指控里摘出去。顾清和偏偏不摘，他把手举起来，承认得干干净净。',
        wrongFeedback: '你选错了，江予以为他在推卸，坐直了身子盯着他，气血 -10。',
        afterCorrect: '院长皱起眉。顾清和接着说：“所以处理我一个人就够了，别动他。”江予忽然抬头，第一次没有反驳。'
      },
      {
        plotDescription: '人走后，江予把门关上，背对着他。顾清和把调职申请放在床头，说得很慢。',
        line: "I came to apologize, not to explain. There is a difference.",
        lineCn: '我是来道歉的，不是来解释的。这两件事不一样。',
        prompt: "根据上下文，选出画线词汇 'apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'say sorry', cn: '道歉', correct: true, reason: 'apologize 就是道歉。他强调的是认错，而不是找理由。' },
          { key: 'B', en: 'ask for permission', cn: '请求许可', correct: false, reason: '请求许可是 ask for permission，这里没有征求的意思。' },
          { key: 'C', en: 'make an excuse', cn: '找借口', correct: false, reason: '他明说自己不是来解释的，apologize 与找借口正好相反。' }
        ],
        analysis: 'apologize 和 explain 被顾清和摆成对立面。前者承担，后者脱身。他选得很清楚。',
        wrongFeedback: '你选错了，江予转过来，说“你不用道歉，你没错”，气血 -10。',
        afterCorrect: '顾清和摇头：“我错在没问你。”江予看着他，很久才说：“那你现在问。”'
      },
      {
        plotDescription: '调职申请旁边，是一份手术方案的修改稿。江予推回去，语气第一次没有商量。',
        line: "I can forgive the lie. I cannot forgive that you decided for me.",
        lineCn: '谎言我可以原谅。我不能原谅的是你替我做决定。',
        prompt: "根据上下文，选出画线词汇 'forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'punish someone', cn: '惩罚某人', correct: false, reason: 'forgive 是原谅，不是惩罚，方向完全相反。' },
          { key: 'B', en: 'forget completely', cn: '完全忘记', correct: false, reason: '原谅不等于忘记。他可以原谅谎言，但记得被代做决定这件事。' },
          { key: 'C', en: 'stop being angry at someone', cn: '原谅、不再责怪', correct: true, reason: 'forgive 就是放下责怪。他的界线卡在“替我做决定”。' }
        ],
        analysis: 'forgive 不是全部抹掉。江予把界线划得很细——谎言可以过去，越权不行。',
        wrongFeedback: '你选错了，江予把方案推得更远，说“那就按你的来”，气血 -10。',
        afterCorrect: '顾清和把修改稿收回来，一行行划掉自己加的内容：“那这条删掉。”江予没看，只问：“疼不疼。”'
      },
      {
        plotDescription: '窗外有人放起了很远的鞭炮。江予忽然提起一件旧事，语气淡得像不在说自己。',
        line: "You are holding a grudge about something I said three years ago.",
        lineCn: '三年前我说过的一句话，你到现在还记着。',
        prompt: "根据上下文，选出画线词汇 'grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a heavy bag', cn: '一个很重的包', correct: false, reason: 'grudge 不是行李，是心里一直留着的那点怨。' },
          { key: 'B', en: 'a long-lasting resentment', cn: '长期记着的怨恨', correct: true, reason: 'hold a grudge 就是心里记恨。他指的是三年前那句话。' },
          { key: 'C', en: 'a small mistake', cn: '一个小错误', correct: false, reason: '错误是 mistake。grudge 是带着情绪记住的事。' }
        ],
        analysis: 'hold a grudge 是“留着不放”。江予说这句话时反而有点软，因为他知道被记这么久，也是一种在乎。',
        wrongFeedback: '你选错了，顾清和否认得太快，江予笑了一下转过头去，气血 -10。',
        afterCorrect: '顾清和没有否认：“你说我不懂失去。”江予顿住。三年前那句玩笑，他早忘了，对方却一直带着。'
      }
    ],
    completeText: '第三十四章结束。调职申请最后没有交上去。顾清和把它撕成两半扔进垃圾桶，说我不走。江予垂下眼：“我从来没让你走。”'
  },
  {
    id: 'dm_35',
    index: 35,
    title: '第 35 章 · 谁在说假话',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '录音笔放在玻璃桌上，红灯一直亮着。公关团队围成一圈，谁都不肯第一个承认那通电话是自己打的，空气里全是没有说完的半句话。',
    questions: [
      {
        plotDescription: '录音里有人报出了他的病情。江予听完，把耳机摘下来放在桌上，说得很慢。',
        line: "He did not betray me by selling the story. He betrayed me by saying he never did.",
        lineCn: '他卖故事不算背叛我。他说自己没卖，才算。',
        prompt: "根据上下文，选出画线词汇 'betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'help someone', cn: '帮助某人', correct: false, reason: 'betray 是背叛，方向和帮助完全相反。' },
          { key: 'B', en: 'praise someone in public', cn: '当众表扬某人', correct: false, reason: '表扬是 praise。betray 是把信任弄碎。' },
          { key: 'C', en: 'break someone trust', cn: '背叛某人的信任', correct: true, reason: 'betray 就是辜负信任。他介意的不是卖故事，是那句否认。' }
        ],
        analysis: 'betray 的伤口不在事情本身，而在关系。江予能接受有人为了钱开口，不能接受那人转身说没有。',
        wrongFeedback: '你选错了，江予以为你在替对方说话，起身走到了窗边，气血 -10。',
        afterCorrect: '顾清和把录音倒回去，又听了一遍：“这声音我认识。”江予转过头：“那你说，我该不该当场拆穿。”'
      },
      {
        plotDescription: '有人替自己辩白，说只是喝多了。江予笑了一下，笑意没到眼睛，说得很平。',
        line: "Call me a liar if you want. Just do not call me a coward.",
        lineCn: '要叫我骗子随便你。但别叫我懦夫。',
        prompt: "根据上下文，选出画线词汇 'liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who tells jokes', cn: '讲笑话的人', correct: false, reason: '讲笑话的是 joker。liar 和幽默没关系。' },
          { key: 'B', en: 'someone who does not tell the truth', cn: '说谎的人', correct: true, reason: 'liar 就是说谎的人。他说随便叫他什么，只要不是懦夫。' },
          { key: 'C', en: 'a lawyer', cn: '律师', correct: false, reason: 'lawyer 是职业。liar 发音像，但意思是撒谎的人。' }
        ],
        analysis: 'liar 指控的是事实，coward 指控的是人。江予愿意认前者，因为他知道自己确实瞒了事。',
        wrongFeedback: '你选错了，江予没再解释，把录音笔关了，气血 -10。',
        afterCorrect: '顾清和说：“你不是懦夫。”江予看着他，忽然觉得这句比任何澄清都有用。他坐下：“那就继续听。”'
      },
      {
        plotDescription: '彩排的灯打得很亮。江予看着屏幕里的自己，忽然说了句像是评价别人的话。',
        line: "Everything on that stage was fake, including the smile I gave them.",
        lineCn: '台上的一切都是假的，包括我给他们的那个笑。',
        prompt: "根据上下文，选出画线词汇 'fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'not real, pretended', cn: '假的、装出来的', correct: true, reason: 'fake 就是假的。他说连笑都是装出来的。' },
          { key: 'B', en: 'very expensive', cn: '非常昂贵', correct: false, reason: '贵是 expensive。fake 说的是真假，不是价格。' },
          { key: 'C', en: 'extremely loud', cn: '极其响亮', correct: false, reason: '响是 loud。fake 与音量无关。' }
        ],
        analysis: 'fake 在这里不是骂舞台，是骂自己。他把“专业”和“真诚”分开了，然后发现两者不能同时拿。',
        wrongFeedback: '你选错了，江予以为你在批评舞台，替整个团队辩解了一句，气血 -10。',
        afterCorrect: '顾清和关掉屏幕：“那个笑不假。”江予抬眼。他补了一句：“你唱到第二段的时候，是真的在笑。”'
      },
      {
        plotDescription: '对方最后甩下一句话就走了。江予坐在原地没动，手指压在录音笔上，半天没抬起来。',
        line: "He called me a hypocrite, and I could not answer him.",
        lineCn: '他叫我伪君子，我竟然答不上来。',
        prompt: "根据上下文，选出画线词汇 'hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very honest person', cn: '一个很诚实的人', correct: false, reason: '意思正好相反，hypocrite 是伪君子。' },
          { key: 'B', en: 'a fan who follows him', cn: '追随他的粉丝', correct: false, reason: '粉丝是 fan。hypocrite 说的是口是心非的人。' },
          { key: 'C', en: 'someone who says one thing but does another', cn: '说一套做一套的人', correct: true, reason: 'hypocrite 就是伪君子，言行不一。被这样叫，他答不上来。' }
        ],
        analysis: 'hypocrite 是最难反驳的一种骂。因为江予确实说过“我不想骗你们”，又确实藏了一年。',
        wrongFeedback: '你选错了，江予以为你在安慰，站起来说“我没事”，气血 -10。',
        afterCorrect: '顾清和蹲下来，和他平视：“你不是。你只是没想好怎么说。”江予看着他，很久才点了下头。'
      }
    ],
    completeText: '第三十五章结束。录音放到最后，所有人都听见了那句“他的耳朵撑不过今年”。江予把录音笔按停，说：“行了，不用再找了。”'
  },
  {
    id: 'dm_36',
    index: 36,
    title: '第 36 章 · 你别再替他扛了',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '后台的化妆镜前摆着一份新排期表。江予的名字被排到凌晨三点，另一位的录音却挪进了黄金时段。顾清和把表折起来，问了一句是谁改的。',
    questions: [
      {
        plotDescription: '会议记录被调出来，声音很小。江予听到一半就笑了，把耳机推给顾清和。',
        line: "He backstabbed me in a meeting where I could not hear half of what was said.",
        lineCn: '他在一场我连一半都听不清的会议上，从背后捅了我一刀。',
        prompt: "根据上下文，选出画线词汇 'backstabbed' 最准确的意思。",
        options: [
          { key: 'A', en: 'betray someone secretly', cn: '背后捅刀、暗中背叛', correct: true, reason: 'backstab 是趁人不在背后下手。而这次，他连听都没听清。' },
          { key: 'B', en: 'praise someone behind their back', cn: '在背后表扬某人', correct: false, reason: 'backstab 是背后捅刀，不是背后说好话。' },
          { key: 'C', en: 'attack someone physically', cn: '进行身体攻击', correct: false, reason: '这里没有人动手，伤来自会议上的暗中背叛。' }
        ],
        analysis: 'backstab 最狠的地方在于“背后”——你甚至来不及反应。江予连内容都没听全，就已经被定了罪。',
        wrongFeedback: '你选错了，江予把耳机拿回来，说“算了，听得见也改变不了”，气血 -10。',
        afterCorrect: '顾清和把会议记录打印出来，一行行标红：“这几句是他加的。”江予看着纸：“你打算怎么办。”'
      },
      {
        plotDescription: '对方来“沟通”，说那些话从没说过。江予听完，看向顾清和，眼神很静。',
        line: "He kept telling me I remembered it wrong. That is not a mistake. That is gaslighting.",
        lineCn: '他一直说是我记错了。那不是失误，那是精神操控。',
        prompt: "根据上下文，选出画线词汇 'gaslighting' 最准确的意思。",
        options: [
          { key: 'A', en: 'lighting a gas stove', cn: '点燃煤气灶', correct: false, reason: 'gaslight 字面是煤气灯，但作动词指让人怀疑自己的操控。' },
          { key: 'B', en: 'giving someone a gift', cn: '送礼物给某人', correct: false, reason: '和送礼物无关，gaslight 是让对方不再相信自己。' },
          { key: 'C', en: 'making someone doubt their own mind', cn: '让人怀疑自己的判断', correct: true, reason: 'gaslight 是通过否认和误导，让受害者怀疑自己的记忆和感受。' }
        ],
        analysis: 'gaslight 最阴的地方是它不留伤口。对方不用骂你，只要让你开始怀疑自己的耳朵就够了。',
        wrongFeedback: '你选错了，顾清和点头太快，江予以为他没听懂，把话咽了回去，气血 -10。',
        afterCorrect: '顾清和说：“那就录下来。”江予看着他：“录了又怎样。”他说：“录了，你就不会再怀疑自己。”'
      },
      {
        plotDescription: '排期表被调出来，时间对不上。顾清和把两份表并排放好，指尖点在改动的那一栏。',
        line: "They manipulate the schedule so I always look like the one who is late.",
        lineCn: '他们动手脚改排期，好让我永远看起来像那个迟到的人。',
        prompt: "根据上下文，选出画线词汇 'manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'repair a machine', cn: '修理机器', correct: false, reason: 'manipulate 在机械语境是操控，但这里操控的是人和安排。' },
          { key: 'B', en: 'control someone for your own gain', cn: '为私利操控他人', correct: true, reason: 'manipulate 是通过暗中操作让别人按你的意思走，这正是改排期的目的。' },
          { key: 'C', en: 'print a document', cn: '打印文件', correct: false, reason: '打印是 print。和 manipulate 毫无关系。' }
        ],
        analysis: 'manipulate 不是明着改，是改到你看不出改过。排期表上每一格都合法，合起来就是一个陷阱。',
        wrongFeedback: '你选错了，顾清和以为只是沟通问题，把表还了回去，气血 -10。',
        afterCorrect: '顾清和把两份表叠在一起对着光看：“改过的地方有压痕。”江予凑过来，第一次笑了：“你还真会查。”'
      },
      {
        plotDescription: '有人劝他别忍，说粉丝会替他骂。江予摇头，把外套挂好，说了一句很短的话。',
        line: "I am not a pushover. I just do not fight in front of people.",
        lineCn: '我不是好欺负的人。我只是不在人前打架。',
        prompt: "根据上下文，选出画线词汇 'pushover' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone easy to take advantage of', cn: '容易被占便宜的人', correct: true, reason: 'pushover 就是好说话到被人推着走的人。他说自己不是。' },
          { key: 'B', en: 'someone who pushes others', cn: '推别人的人', correct: false, reason: 'pushover 是被推倒的那一方，不是动手推人的那个。' },
          { key: 'C', en: 'a kind of vehicle', cn: '一种交通工具', correct: false, reason: '和车没有关系。pushover 指好欺负的人。' }
        ],
        analysis: 'pushover 是被推一下就倒的人。江予在纠正一个误会——他不是不还手，只是不在人前还手。',
        wrongFeedback: '你选错了，顾清和真的不再劝，只说“那我不管了”，气血 -10。',
        afterCorrect: '顾清和看着他，把外套从架上取下来：“那今天这次，我陪你不在人前打。”江予愣了一下，接过外套。'
      }
    ],
    completeText: '第三十六章结束。排期表最后一栏写着“艺人本人已确认”。顾清和把纸推回去，说那签名不是他的。江予坐在旁边，第一次没有反驳。'
  },
  {
    id: 'dm_37',
    index: 37,
    title: '第 37 章 · 我要的是你',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '清晨的会议室外，走廊里挤着两个团队的人。江予站在最前面，助听器被衬衫领子遮住，谁都不知道他其实听得断断续续。顾清和在他身后半步。',
    questions: [
      {
        plotDescription: '旧账被翻出来，说的是去年那场合作。江予看着对面的人，第一次没有回避。',
        line: "I did not stand up for you because I was afraid of losing the deal.",
        lineCn: '我当时没替你说话，是因为我怕丢了那笔合作。',
        prompt: "根据上下文，选出画线词汇 'stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'sit down for someone', cn: '为某人坐下', correct: false, reason: 'stand up for 是替某人出头，和起身让座没有关系。' },
          { key: 'B', en: 'support and defend someone', cn: '替某人说话、维护某人', correct: true, reason: 'stand up for 就是在别人被针对时站出来。他承认当时没站。' },
          { key: 'C', en: 'stand in line for someone', cn: '替某人排队', correct: false, reason: '排队是 stand in line，和 stand up for 完全不同。' }
        ],
        analysis: 'stand up for 需要代价。江予把代价说出来——他算过一笔账，然后选了合作。这句话是认账，也是忏悔。',
        wrongFeedback: '你选错了，江予以为你在替他解释，声音低了下去，气血 -10。',
        afterCorrect: '对方挑了下眉：“所以现在呢。”江予把椅子往后推了推，站了起来：“现在我不怕了。”'
      },
      {
        plotDescription: '会议室里有人劝他别闹大。江予把手机反过来扣在桌上，说的话很稳。',
        line: "I will fight back this time. Not online, in the room where it happened.",
        lineCn: '这次我会还手。不在网上，就在事情发生的这间屋子里。',
        prompt: "根据上下文，选出画线词汇 'fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'resist and defend yourself', cn: '反击、为自己还手', correct: true, reason: 'fight back 是被打之后还手。他说要在现场，不在键盘后。' },
          { key: 'B', en: 'start a war', cn: '发动战争', correct: false, reason: 'fight back 是个人层面的反击，不是开战。' },
          { key: 'C', en: 'run away quickly', cn: '快速逃开', correct: false, reason: '意思相反。fight back 是还手，不是逃。' }
        ],
        analysis: 'fight back 的重点是 back——先被打，才谈还手。江予忍了一年，这次把战场选回了原点。',
        wrongFeedback: '你选错了，江予被劝住了，把话收了回去，气血 -10。',
        afterCorrect: '会议室安静下来。江予把手放在桌上：“排期表谁改的，会议记录谁加的，一句一句说清楚。”'
      },
      {
        plotDescription: '顾清和往前一步，挡在他和那张长桌之间。江予愣了一下，伸手拉住他的袖子。',
        line: "Let me defend you once. You have been doing it for everyone else.",
        lineCn: '让我护你一次。你一直在替所有人挡。',
        prompt: "根据上下文，选出画线词汇 'defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'attack someone', cn: '攻击某人', correct: false, reason: 'defend 是防守和保护，方向和攻击相反。' },
          { key: 'B', en: 'pay for someone', cn: '替某人付钱', correct: false, reason: '付钱是 pay for。defend 是挡在别人前面。' },
          { key: 'C', en: 'protect someone from criticism', cn: '保护某人免受指责', correct: true, reason: 'defend 就是替人辩护、挡住攻击。他要挡在江予前面。' }
        ],
        analysis: 'defend 的位置很重要——站在前面。顾清和第一次站在他前面，说的是“让我”。',
        wrongFeedback: '你选错了，江予把他拉了回去，说“你别掺和”，气血 -10。',
        afterCorrect: '江予没有松手，反而握紧了一点：“你护我，我记着。”顾清和回头看他，那一眼长得像一个决定。'
      },
      {
        plotDescription: '散会后，有人问他为什么不回消息。江予把助听器往上推了推，说得没有一丝辩解。',
        line: "I did not ignore you. I could not hear you.",
        lineCn: '我不是不理你。我是听不见你。',
        prompt: "根据上下文，选出画线词汇 'ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'hate someone', cn: '讨厌某人', correct: false, reason: 'ignore 是不理睬，不是讨厌。而且这里根本没有不理。' },
          { key: 'B', en: 'pay no attention to someone', cn: '不理睬某人', correct: true, reason: 'ignore 是刻意不回应。他说自己不是不理，是真的听不到。' },
          { key: 'C', en: 'forget someone name', cn: '忘记某人的名字', correct: false, reason: '忘记是 forget。ignore 是有意识地不回应。' }
        ],
        analysis: 'ignore 是带态度的沉默。江予要做的，是把这种沉默和“听不见”区分开——这是他第一次主动解释。',
        wrongFeedback: '你选错了，对方脸色变了，江予没再说话，转身走了，气血 -10。',
        afterCorrect: '对方张了张嘴。江予笑了笑：“现在你知道了。”他转身，顾清和跟上来：“你终于肯说。”'
      }
    ],
    completeText: '第三十七章结束。那场会议散的时候，江予没有坐回原来的位置。他站在门口，把话一句一句说完，才回头看了顾清和一眼。'
  },
  {
    id: 'dm_38',
    index: 38,
    title: '第 38 章 · 只有你听得见',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '服务器机房的门开着，冷气往外涌。顾清和站在一排硬盘前面，手里那张授权书被压得笔直，走廊尽头是等着他签字的两个人。江予没有跟来。',
    questions: [
      {
        plotDescription: '他把授权书放进包里，对面的人没有回应，只是看着他。那几秒钟比任何一句话都重。',
        line: "Their silence was louder than any threat.",
        lineCn: '他们的沉默比任何威胁都响。',
        prompt: "根据上下文，选出画线词汇 'silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of music', cn: '一种音乐' , correct: false, reason: 'silence 是声音的缺席。这里说它“响”，是比喻，不是音乐。' },
          { key: 'B', en: 'a formal apology', cn: '正式道歉', correct: false, reason: '这里根本没人开口，更谈不上道歉。' },
          { key: 'C', en: 'complete absence of sound', cn: '完全的安静、沉默', correct: true, reason: 'silence 就是没有声音。不作答的沉默，本身就是压力。' }
        ],
        analysis: 'silence 本来是空的，这里却被说成“更响”。不表态往往比表态更让人难受——你不知道对方在想什么。',
        wrongFeedback: '你选错了，顾清和把授权书递了出去，手停在半空，气血 -10。',
        afterCorrect: '最后还是对方先开口：“签了，东西就删。”顾清和把笔帽扣上：“先给我看原件。”'
      },
      {
        plotDescription: '对方把话说明白了，说照片一旦放出去，谁都救不了。顾清和把包放在桌上，抬眼看过去。',
        line: "They threatened to release the surgery photos if I did not sign.",
        lineCn: '他们威胁说，我不签就把手术的照片放出去。',
        prompt: "根据上下文，选出画线词汇 'threatened' 最准确的意思。",
        options: [
          { key: 'A', en: 'invite someone politely', cn: '礼貌地邀请某人', correct: false, reason: 'threaten 是威胁，和邀请的语气完全相反。' },
          { key: 'B', en: 'say you will harm someone', cn: '威胁、扬言要伤害', correct: true, reason: 'threaten 就是拿后果压人。这里压的是他的照片和名声。' },
          { key: 'C', en: 'promise a reward', cn: '许诺奖励', correct: false, reason: '许诺奖励是 promise a reward。威胁给的是坏结果。' }
        ],
        analysis: 'threaten 的核心是“如果你不，我就”。顾清和听到这句话时没生气，他反而松了口气——对方亮底牌了。',
        wrongFeedback: '你选错了，顾清和以为还能谈，被对方把话堵死了，气血 -10。',
        afterCorrect: '“照片可以放。”顾清和说得很快，“但手术记录在我手上，你们放一张，我就公布一页。”'
      },
      {
        plotDescription: '深夜的车里，江予看着窗外的灯，忽然说了句听起来不像警告的话。',
        line: "One post can ruin a career. One word can ruin a person.",
        lineCn: '一条帖子能毁掉一个人的事业。一句话能毁掉一个人。',
        prompt: "根据上下文，选出画线词汇 'ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'destroy completely', cn: '彻底毁掉', correct: true, reason: 'ruin 是把东西弄到无法挽回。这里说的是事业，也说人。' },
          { key: 'B', en: 'improve slowly', cn: '慢慢改善', correct: false, reason: '意思正好相反，ruin 是毁掉，不是改善。' },
          { key: 'C', en: 'delay briefly', cn: '短暂延迟', correct: false, reason: '延迟是 delay。ruin 是不可逆的破坏。' }
        ],
        analysis: 'ruin 比 damage 更彻底。江予把“事业”和“人”放在一起说，因为他知道后者更脆弱。',
        wrongFeedback: '你选错了，江予以为他在说别人，点了点头没再接话，气血 -10。',
        afterCorrect: '顾清和把车停在红灯前：“所以那句话，你别自己说。”江予转过头：“那谁说。”他答：“我说。”'
      },
      {
        plotDescription: '录音带被放进机器。江予伸手要按下去，被顾清和拦住了，两个人的手叠在一起。',
        line: "You can destroy the tape. You cannot destroy what I heard.",
        lineCn: '你可以毁掉这盘带子。你毁不掉我听见的东西。',
        prompt: "根据上下文，选出画线词汇 'destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'build something new', cn: '建造新东西', correct: false, reason: 'destroy 是摧毁，和建造正好相反。' },
          { key: 'B', en: 'hide something well', cn: '把东西藏得很好', correct: false, reason: '藏起来是 hide。destroy 是让东西彻底不存在。' },
          { key: 'C', en: 'damage something so it no longer exists', cn: '彻底毁掉、使不复存在', correct: true, reason: 'destroy 是毁灭性的破坏。带子能毁，听过的东西不能。' }
        ],
        analysis: 'destroy 是让东西不再存在。顾清和这句话把物理和记忆分开——带子会没，但听见的不会。',
        wrongFeedback: '你选错了，江予把手抽了回去，说“那留着干什么”，气血 -10。',
        afterCorrect: '顾清和没有松手：“留着，等你有一天想听。”江予看着那盘带子，很久才把手放下来。'
      }
    ],
    completeText: '第三十八章结束。硬盘被抬走的时候，顾清和一直站在门口。江予在楼梯间等他，见他出来，只问了一句：“还在吗。”他说：“在。”'
  },
  {
    id: 'dm_39',
    index: 39,
    title: '第 39 章 · 停战协议',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '律师把和解协议放在桌上，一式三份。窗外是午后的太阳，会议室里没人提“原谅”两个字，只在标题上写了一个很轻的词：暂停。',
    questions: [
      {
        plotDescription: '签完字，律师问他要不要加一条追责。江予把笔放下，摇了摇头，说得很清楚。',
        line: "I do not regret what I did. I regret how long it took me to do it.",
        lineCn: '我不后悔我做了什么。我后悔的是拖了这么久才做。',
        prompt: "根据上下文，选出画线词汇 'regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'feel sorry about something', cn: '后悔、遗憾', correct: true, reason: 'regret 是对已经发生的事感到难受。他后悔的是时间，不是选择。' },
          { key: 'B', en: 'feel proud of something', cn: '为某事感到骄傲', correct: false, reason: 'regret 是后悔，和骄傲正好相反。' },
          { key: 'C', en: 'forget something completely', cn: '彻底忘记某事', correct: false, reason: '后悔是记得并且难受，不是忘记。' }
        ],
        analysis: 'regret 后面的内容决定了它的分量。江予没有后悔反抗，他后悔的是拖了一年才开口。',
        wrongFeedback: '你选错了，律师真的加了追责条款，江予看着纸愣了几秒，气血 -10。',
        afterCorrect: '顾清和在旁边把那条划掉：“他不追。”律师抬头，江予补了一句：“我说不追。”'
      },
      {
        plotDescription: '走廊里，助理小声问要不要找水军反击。江予靠在墙上，眼睛看着地面。',
        line: "I want to hurt them. But revenge would cost me the only thing I have left.",
        lineCn: '我想让他们难受。但报复会让我失去唯一剩下的东西。',
        prompt: "根据上下文，选出画线词汇 'revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of medicine', cn: '一种药', correct: false, reason: 'revenge 是报复，和药没有任何关系。' },
          { key: 'B', en: 'a formal meeting', cn: '一次正式会议', correct: false, reason: '这里说的是报复的冲动，不是在开会。' },
          { key: 'C', en: 'hurting someone who hurt you', cn: '对伤害过你的人进行报复', correct: true, reason: 'revenge 就是回敬伤害。他承认自己想，但忍住没做。' }
        ],
        analysis: 'revenge 是甜的，代价却是后付。江予算得很清楚——他要留着的那个东西，是台上还能开口唱的权利。',
        wrongFeedback: '你选错了，助理真的去联系了水军，第二天骂声翻倍，气血 -10。',
        afterCorrect: '助理没再问。江予抬起头：“让他们骂。骂完了，我还在。”顾清和在门口听着，没有进来。'
      },
      {
        plotDescription: '夜里，病房的灯只开了一盏。江予把窗帘拉开，看着对面的楼，说得很轻。',
        line: "I am not asking for peace with them. I am asking for peace with myself.",
        lineCn: '我不是要跟他们和解。我是要跟自己和解。',
        prompt: "根据上下文，选出画线词汇 'peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of land', cn: '一块土地', correct: false, reason: 'peace 和 piece 同音不同义，这里说的是心境，不是土地。' },
          { key: 'B', en: 'a calm state without conflict', cn: '没有冲突的平静安宁', correct: true, reason: 'peace 就是不再打仗的安宁。他求的是心里那场仗停。' },
          { key: 'C', en: 'a contract', cn: '一份合同', correct: false, reason: '合同是 contract。peace 在这里指内心状态。' }
        ],
        analysis: 'peace 有两个方向：对外和对内。江予把话说得很绝——外面那场他不要了，他只要里面这场停。',
        wrongFeedback: '你选错了，江予把窗帘拉回去，说“跟你说不明白”，气血 -10。',
        afterCorrect: '顾清和站在门边：“那我呢，算外面还是里面。”江予没回头，过了几秒才说：“你算那个让我停下来的。”'
      },
      {
        plotDescription: '两个人在安全通道的台阶上坐着。江予把手里的矿泉水递过去，说得很平，像在谈条件。',
        line: "Let us call a truce. One night. No reporters, no lawyers, no secrets.",
        lineCn: '我们停战吧。就一晚。没有记者，没有律师，没有秘密。',
        prompt: "根据上下文，选出画线词汇 'truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting for a while', cn: '暂时停战的约定', correct: true, reason: 'truce 是双方约定先不打。他给这一晚划了范围。' },
          { key: 'B', en: 'a kind of food', cn: '一种食物', correct: false, reason: 'truce 不是食物，是停火。' },
          { key: 'C', en: 'a loud song', cn: '一首很响的歌', correct: false, reason: '和歌无关。truce 说的是双方先放下对抗。' }
        ],
        analysis: 'truce 的关键是“暂时”——不是和解，是先停一会儿。江予只敢要一晚，因为他知道多要一天都算贪心。',
        wrongFeedback: '你选错了，顾清和以为他在说笑，站起来要走，气血 -10。',
        afterCorrect: '顾清和接过水，拧开喝了一口：“一晚。”江予点头。楼梯间的灯闪了两下，两个人都没再提明天。'
      }
    ],
    completeText: '第三十九章结束。协议签完，谁都没有握手。江予走在最后，把门带上，走廊里只剩下顾清和的脚步声，一下一下，跟得很近。'
  },
  {
    id: 'dm_40',
    index: 40,
    title: '第 40 章 · 病房里的告白',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '病房里的灯终于全亮了。窗外的天泛白，江予坐在床边，顾清和站在他面前，两个人的影子被拉得很长，几乎挨到一起。',
    questions: [
      {
        plotDescription: '江予起身要走，顾清和先一步挡住门。他没有拉人，只把手放在门把上，说得很轻。',
        line: "We do not have to reconcile tonight. We just have to stop walking away.",
        lineCn: '我们不用今晚就和好。我们只要别再转身走开。',
        prompt: "根据上下文，选出画线词汇 'reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'argue again', cn: '再次争吵', correct: false, reason: 'reconcile 是和好，方向正好和争吵相反。' },
          { key: 'B', en: 'become friends again after a fight', cn: '吵架之后重新和好', correct: true, reason: 'reconcile 是关系断裂之后重新接上。他把这一步推到了以后。' },
          { key: 'C', en: 'sign a contract', cn: '签一份合同', correct: false, reason: '签合同是 sign a contract。reconcile 说的是关系修复。' }
        ],
        analysis: 'reconcile 太重，所以顾清和把它往后放。他只提出一个更低的要求——先别走。这一步小，却是唯一能开始的。',
        wrongFeedback: '你选错了，江予以为他要一次谈完，把门拉开了，气血 -10。',
        afterCorrect: '江予的手停在门把上，没有往下按。他低着头说：“那你别用医生的口气跟我说话。”'
      },
      {
        plotDescription: '江予忽然笑了一下，说昨晚那段根本不算吵架。顾清和把外套挂好，转过身。',
        line: "That was not an argument. That was me begging.",
        lineCn: '那不算吵架。那是我在求你。',
        prompt: "根据上下文，选出画线词汇 'argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a disagreement with words', cn: '用言语进行的争执', correct: true, reason: 'argument 在这里是吵架。他自己说那不是吵，是在求。' },
          { key: 'B', en: 'a kind of proof', cn: '一种证据', correct: false, reason: 'argument 确实有“论点”的意思，但这句话里说的是争吵。' },
          { key: 'C', en: 'a business plan', cn: '一份商业计划', correct: false, reason: '这里没有任何商业内容，只有两个人互相顶。' }
        ],
        analysis: 'argument 两边都有理才成立。江予说“不是吵架，是我在求”——他把自己放到了没有理的那一边。',
        wrongFeedback: '你选错了，顾清和顺着他解释下去，江予的眼神暗了一点，气血 -10。',
        afterCorrect: '顾清和沉默了一会儿：“那你求到了。”江予抬起头，第一次没接话。'
      },
      {
        plotDescription: '天快亮了，江予把助听器放在床头。他说这句话时没有看人，像在跟自己交代。',
        line: "I am tired of the fight. Not with them, but with the version of me that keeps saying no.",
        lineCn: '我累了。不是跟他们，是跟那个一直说不行 的自己。',
        prompt: "根据上下文，选出画线词汇 'fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'a physical battle', cn: '一场肢体打斗', correct: false, reason: '这里没有人动手。fight 指的是长期的心理对抗。' },
          { key: 'B', en: 'a loud party', cn: '一场喧闹的聚会', correct: false, reason: '和聚会无关。fight 在这里是内心的挣扎。' },
          { key: 'C', en: 'a struggle or conflict', cn: '一场挣扎、对抗', correct: true, reason: 'fight 可以是身体冲突，也可以是长期对抗。他打的是自己。' }
        ],
        analysis: 'fight 后面接 with them 是对外，接 with myself 是对内。江予把敌人换成了自己，这才是最难打的一场。',
        wrongFeedback: '你选错了，顾清和以为他在说公司，接了一句无关的话，气血 -10。',
        afterCorrect: '顾清和走过去，把床头那盏灯调到最暗：“那个说不行 的你，我认识。”江予闭上眼：“那你劝劝他。”'
      },
      {
        plotDescription: '最后的几句话很短。江予问他会退到哪里，顾清和把手插在口袋里，说得很平。',
        line: "I will compromise on everything except you.",
        lineCn: '什么我都可以让步，除了你。',
        prompt: "根据上下文，选出画线词汇 'compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'refuse to change', cn: '拒绝改变', correct: false, reason: 'compromise 是妥协让步，不是拒绝改变。' },
          { key: 'B', en: 'give up part of what you want', cn: '让步、妥协', correct: true, reason: 'compromise 是各退一步。他把所有可以退的都退了，只留下一个。' },
          { key: 'C', en: 'break a promise', cn: '违背承诺', correct: false, reason: '违背承诺是 break a promise。compromise 是在条件上退让。' }
        ],
        analysis: 'compromise 通常意味着退让，这里却成了最硬的告白——除了你，什么都能让。',
        wrongFeedback: '你选错了，江予以为他还要谈条件，把被子往上拉了拉，气血 -10。',
        afterCorrect: '江予没动。过了很久他才开口，声音有点抖：“那你现在，是什么身份留在这。”顾清和看着他，没有立刻回答。'
      }
    ],
    completeText: '第四十章结束。天亮之前，顾清和说了一句话，声音不大：“我不想再当你的医生了。”江予抬起头，眼睛红得厉害，握着被角的手一直没有松开。'
  },
  {
    id: 'dm_41',
    index: 41,
    title: '第 41 章 · 复出前夜',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '复出演唱会的票在凌晨开卖。数据板上跳着数字，江予坐在后台的折叠椅上，助听器换成了新的型号，耳后露出一小截银色的线。',
    questions: [
      {
        plotDescription: '运营总监把投放方案翻得很快。江予听完，只说了一句，语气里有点佩服。',
        line: "She is savvy enough to know exactly when to leak the news.",
        lineCn: '她精明得很，知道该在什么时候把消息放出去。',
        prompt: "根据上下文，选出画线词汇 'savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very shy', cn: '非常害羞', correct: false, reason: 'savvy 是精明，和害羞没有关系。' },
          { key: 'B', en: 'very loud', cn: '非常吵闹', correct: false, reason: '吵闹是 loud。savvy 说的是脑子和判断。' },
          { key: 'C', en: 'practical and smart', cn: '精明、有实际判断力', correct: true, reason: 'savvy 是懂行、会算。他是在夸对手出手的时机。' }
        ],
        analysis: 'savvy 不是书面的聪明，是懂“怎么在现实里做事”。江予说这句话时，其实是在承认自己输在哪。',
        wrongFeedback: '你选错了，江予以为你在骂人，把方案推了回去，气血 -10。',
        afterCorrect: '运营总监愣了一下：“那我们怎么办。”江予把方案翻回第一页：“比她早一天。”'
      },
      {
        plotDescription: '会议室里没人敢说数据难看。江予把票务报表推到中间，自己先开了口。',
        line: "I will be blunt. The ticket sales are not good enough.",
        lineCn: '我说直白点。票房不够。',
        prompt: "根据上下文，选出画线词汇 'blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'very polite', cn: '非常客气', correct: false, reason: 'blunt 是直白，甚至有点冲，和客气相反。' },
          { key: 'B', en: 'direct, without softening words', cn: '直截了当、不绕弯子', correct: true, reason: 'blunt 就是把话说死，不加修饰。他自己先说了难听的。' },
          { key: 'C', en: 'not sharp', cn: '不锋利', correct: false, reason: 'blunt 形容刀是“钝”，但形容人说话是“直”。' }
        ],
        analysis: 'blunt 常常让人不舒服，但江予选择自己当那个说难听话的人。比起被瞒着，他宁愿先听真话。',
        wrongFeedback: '你选错了，团队以为他在发火，会议草草结束了，气血 -10。',
        afterCorrect: '没人接话。江予把报表合上：“还有十二天。我不问原因，只问怎么补。”'
      },
      {
        plotDescription: '采访问到耳疾，江予没有回避，反而笑了一下，回答得又轻又快。',
        line: "The fans like it when I am a little sassy in interviews.",
        lineCn: '粉丝就喜欢我在采访里有点冲、有点俏皮。',
        prompt: "根据上下文，选出画线词汇 'sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'bold and cheeky', cn: '泼辣、有点俏皮的放肆', correct: true, reason: 'sassy 是敢说又带点俏皮。他就是靠这个把尖锐的问题挡回去。' },
          { key: 'B', en: 'quiet and shy', cn: '安静害羞', correct: false, reason: 'sassy 是带冲劲的俏皮，和害羞正好相反。' },
          { key: 'C', en: 'very sad', cn: '非常难过', correct: false, reason: '难过是 sad。sassy 是又敢又俏。' }
        ],
        analysis: 'sassy 不是无礼，是有分寸的顶。江予用一点锋利，把那个他不想答的问题轻轻推开。',
        wrongFeedback: '你选错了，江予顺着问题答了下去，采访气氛一下子沉了，气血 -10。',
        afterCorrect: '记者笑了。江予也笑，把话筒往前推了推：“下一位。”顾清和在镜头外，嘴角动了一下。'
      },
      {
        plotDescription: '深夜复盘，助理替自己找理由。江予听完，把笔转了一圈，说得很轻，但没给台阶。',
        line: "My excuse was lame, and everybody knew it.",
        lineCn: '我那个借口很烂，所有人都听得出来。',
        prompt: "根据上下文，选出画线词汇 'lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'hurt', cn: '受伤的', correct: false, reason: 'lame 原义是“跛的”，但这里说的是借口很烂。' },
          { key: 'B', en: 'expensive', cn: '昂贵的', correct: false, reason: '贵是 expensive。lame 指差劲、站不住脚。' },
          { key: 'C', en: 'weak and unconvincing', cn: '差劲、站不住脚的', correct: true, reason: 'lame 的空洞感就是“一听就知道在敷衍”。他在说自己。' }
        ],
        analysis: 'lame 带着一点尴尬。江予没有骂人，他先把自己的借口拆了——这样别人才会跟着说实话。',
        wrongFeedback: '你选错了，助理以为他在怪自己，低着头退出去了，气血 -10。',
        afterCorrect: '助理把复盘表重新摊开。江予说：“重新来。这次说真的原因。”'
      }
    ],
    completeText: '第四十一章结束。凌晨三点，票卖完了。数据板上停着那一行数字，江予看了很久，才说：“明天，我要上去。”'
  },
  {
    id: 'dm_42',
    index: 42,
    title: '第 42 章 · 彩排到天亮',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '彩排从晚上十点一直排到凌晨四点。场灯只开了一半，乐队已经轮换了两批，江予还在唱第三遍同一段副歌，声音有一点哑。',
    questions: [
      {
        plotDescription: '新的编曲第一次合上。鼓点砸下来的时候，顾清和站在观众席第三排，忍不住说了一句。',
        line: "That new arrangement is dope. Play it again.",
        lineCn: '这段新编曲太酷了。再来一遍。',
        prompt: "根据上下文，选出画线词汇 'dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'really cool, excellent', cn: '太酷了、非常棒', correct: true, reason: '口语里 dope 是夸酷、夸好。他是在夸这段编曲。' },
          { key: 'B', en: 'a kind of drug', cn: '一种毒品', correct: false, reason: 'dope 确实有毒品的意思，但这里明显是在称赞。' },
          { key: 'C', en: 'very slow', cn: '非常缓慢', correct: false, reason: '慢是 slow。dope 在这里是正面评价。' }
        ],
        analysis: 'dope 是很年轻的说法，带情绪。顾清和平时刻板，这一句反而显得他没在装。',
        wrongFeedback: '你选错了，江予以为他在挑毛病，把耳机摘了下来，气血 -10。',
        afterCorrect: '江予在台上笑了一下：“你居然会说这个词。”顾清和把手插回口袋：“我只是听得出来好不好。”'
      },
      {
        plotDescription: '唱到第二段，有个转音塌了。江予停下来，抬手示意乐队别再往下走。',
        line: "The second verse was sloppy. We are doing it again.",
        lineCn: '第二段太潦草了。我们再来一遍。',
        prompt: "根据上下文，选出画线词汇 'sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'too loud', cn: '太吵了', correct: false, reason: 'sloppy 是马虎、不干净，不是音量问题。' },
          { key: 'B', en: 'perfect', cn: '完美', correct: false, reason: '意思相反。sloppy 指做得潦草，不收口。' },
          { key: 'C', en: 'careless and messy', cn: '马虎、潦草', correct: true, reason: 'sloppy 是细节没收拾好。塌掉的那个转音正是这样。' }
        ],
        analysis: 'sloppy 不一定很难听，但它意味着没做到位。江予对自己的要求，比他对外说的更狠。',
        wrongFeedback: '你选错了，乐队以为过了，收拾东西准备走，气血 -10。',
        afterCorrect: '乐队重新起拍。第四遍唱到那一句，江予把转音拆成了两个音，稳稳落下来。'
      },
      {
        plotDescription: '凌晨三点半，休息的十分钟里，江予跟着顾清和走到侧台，忽然说了句很轻的话。',
        line: "I know I am being needy. I just do not want to be alone in that room tonight.",
        lineCn: '我知道我在黏人。我只是今晚不想一个人待在那间屋子里。',
        prompt: "根据上下文，选出画线词汇 'needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very generous', cn: '非常大方', correct: false, reason: 'needy 是需要陪伴，和大方没有关系。' },
          { key: 'B', en: 'wanting too much attention', cn: '过于需要关注与陪伴', correct: true, reason: 'needy 是情感上依赖，需要别人一直在。他自己先承认了。' },
          { key: 'C', en: 'extremely tired', cn: '极度疲惫', correct: false, reason: '疲惫是 exhausted。needy 说的是心里的空缺。' }
        ],
        analysis: 'needy 常带贬义，江予却把它说得很坦白。他不是要人哄，只是不想再一个人对着那面墙。',
        wrongFeedback: '你选错了，顾清和以为他只是在撒娇，笑着走开了，气血 -10。',
        afterCorrect: '顾清和没有笑他，只把保温杯递过去：“那我不走。”江予握着杯子，指尖慢慢热起来。'
      },
      {
        plotDescription: '天快亮了，江予坐在台阶上，忽然提起一件从没说过的事，声音低得几乎听不见。',
        line: "It was selfish, wanting you to give up the surgery just so I could hear you sing.",
        lineCn: '我那时很自私，想让你放弃手术，只为了让我能听见你唱歌。',
        prompt: "根据上下文，选出画线词汇 'selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'only thinking about yourself', cn: '只想着自己、自私', correct: true, reason: 'selfish 是只顾自己的需要。他承认自己当时就是这么想的。' },
          { key: 'B', en: 'very brave', cn: '非常勇敢', correct: false, reason: '勇敢是 brave。selfish 指顾己不顾人。' },
          { key: 'C', en: 'very quiet', cn: '非常安静', correct: false, reason: '安静是 quiet，和 selfish 毫无关系。' }
        ],
        analysis: 'selfish 是一句自我审判。江予把它说出来，不是为了求原谅，是想让对方知道当时的自己有多怕。',
        wrongFeedback: '你选错了，顾清和以为他在自责求安慰，说了句“都过去了”，气血 -10。',
        afterCorrect: '顾清和看着他：“那不是自私。那是你怕。”江予低下头，很久才说：“我怕的其实是你不在了。”'
      }
    ],
    completeText: '第四十二章结束。第六遍唱完，江予终于把话筒放下。顾清和在台下鼓掌，声音在空场里荡开，只有他一个人听见。'
  },
  {
    id: 'dm_43',
    index: 43,
    title: '第 43 章 · 后台的那面镜子',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '后台的镜子有一圈灯，亮起来的时候会把人的脸照得很白。江予站在镜子前，顾清和在后面替他理领口，两个人都没看镜子里的对方。',
    questions: [
      {
        plotDescription: '灯亮起来的瞬间，江予从镜子里看见了顾清和。他转过身，说了句半是玩笑的话。',
        line: "You look gorgeous under that light. I almost forgot my line.",
        lineCn: '你在这种灯光下好看得过分。我差点忘了词。',
        prompt: "根据上下文，选出画线词汇 'gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'very tired', cn: '非常疲惫', correct: false, reason: 'gorgeous 是美得惊人，不是疲惫。' },
          { key: 'B', en: 'extremely beautiful', cn: '极其漂亮、美得惊人', correct: true, reason: 'gorgeous 是最高一档的漂亮，比 pretty 重得多。' },
          { key: 'C', en: 'very nervous', cn: '非常紧张', correct: false, reason: '紧张是 nervous。这里他在夸人，不是在描述状态。' }
        ],
        analysis: 'gorgeous 说出口就等于承认在看。江予没有回避，他把这句话当成玩笑递了出去。',
        wrongFeedback: '你选错了，江予把话咽了回去，转身去调话筒，气血 -10。',
        afterCorrect: '顾清和的手停了一下，继续把领口压平：“专心。”江予笑：“我很专心。”'
      },
      {
        plotDescription: '耳机里传来自己的声音，比平时慢半拍。江予摘下一边，皱着眉说了一句。',
        line: "It is weird to hear my own voice from outside the room.",
        lineCn: '从屋子外面听见自己的声音，感觉怪怪的。',
        prompt: "根据上下文，选出画线词汇 'weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'strange, not normal', cn: '奇怪的、不寻常的', correct: true, reason: 'weird 就是“不对劲”。听见自己的声音，正是那种错位感。' },
          { key: 'B', en: 'wonderful', cn: '极好的', correct: false, reason: 'weird 是古怪，不带夸赞。' },
          { key: 'C', en: 'painful', cn: '痛苦的', correct: false, reason: '痛是 painful。weird 强调的是怪，不是疼。' }
        ],
        analysis: 'weird 是一种说不出哪里错了的不适。对听得见的人来说很正常，对江予来说却是陌生的。',
        wrongFeedback: '你选错了，江予以为你在批评他的声音，把耳机整个摘了，气血 -10。',
        afterCorrect: '顾清和把耳机接过去听了一遍：“很好听。”江予愣了一下，随即低头笑了。'
      },
      {
        plotDescription: '场地的灯商临时换了货。顾清和把单据摊在化妆台上，指着一处对不上的数字。',
        line: "The guy who sold us the lights is sketchy. Half the receipts do not match.",
        lineCn: '卖灯给我们的那个人很可疑。一半的收据都对不上。',
        prompt: "根据上下文，选出画线词汇 'sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very handsome', cn: '非常英俊', correct: false, reason: 'sketchy 是可疑，不是长得好看。' },
          { key: 'B', en: 'extremely careful', cn: '极其小心', correct: false, reason: '小心是 careful。sketchy 正相反，是让人不放心的。' },
          { key: 'C', en: 'suspicious, not trustworthy', cn: '可疑、不可信', correct: true, reason: 'sketchy 是“看着就不对劲”。收据对不上，正是这个意思。' }
        ],
        analysis: 'sketchy 不一定有证据，是一种直觉上的不信任。顾清和很少用这种词，说明他已经查过一遍。',
        wrongFeedback: '你选错了，顾清和以为你在开玩笑，把单据收了起来，气血 -10。',
        afterCorrect: '江予把单据拿过来对了一遍：“确实对不上。”他抬头：“那这灯，今晚能不能用。”'
      },
      {
        plotDescription: '演唱会结束，两个人坐在空掉的后台。江予把假发摘下来，说得有点恍惚。',
        line: "The whole night was bizarre. I sang, I cried, and nobody noticed.",
        lineCn: '整个晚上都离奇得很。我唱了，我哭了，居然没人发现。',
        prompt: "根据上下文，选出画线词汇 'bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'very ordinary', cn: '非常普通', correct: false, reason: 'bizarre 是离奇，和普通正好相反。' },
          { key: 'B', en: 'very strange, hard to believe', cn: '离奇、难以置信', correct: true, reason: 'bizarre 是怪得超出常理。哭和唱同时发生还没人察觉，正是。' },
          { key: 'C', en: 'very short', cn: '非常短暂', correct: false, reason: '短暂是 short。bizarre 说的是怪得离谱。' }
        ],
        analysis: 'bizarre 带着一种荒诞感。江予用了这个词，因为那晚的一切都不合逻辑——包括他自己。',
        wrongFeedback: '你选错了，江予以为你没听懂，把假发往桌上一放，不说了，气血 -10。',
        afterCorrect: '顾清和把水递过去：“我看见了。”江予抬眼。他补了一句：“我就站在第二排。”'
      }
    ],
    completeText: '第四十三章结束。镜子的灯忽然闪了一下。江予转过头，顾清和的手还停在领口上，谁也没有退开。'
  },
  {
    id: 'dm_44',
    index: 44,
    title: '第 44 章 · 万人合唱',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '安可的第三首，全场忽然一起唱了起来。江予站在舞台中央，耳机里是几万人的声音，混着一点他自己都听不清的伴奏。',
    questions: [
      {
        plotDescription: '顾清和站在侧台，灯光从头顶打下来。他对身边的工作人员说了一句，声音有点抖。',
        line: "That last chorus was epic. I have never heard a stadium sing like that.",
        lineCn: '最后那段副歌太震撼了。我从没听过整个体育场这样合唱。',
        prompt: "根据上下文，选出画线词汇 'epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'very boring', cn: '非常无聊', correct: false, reason: 'epic 是震撼到让人记住，和无聊相反。' },
          { key: 'B', en: 'very short', cn: '非常短', correct: false, reason: 'epic 不是在说长度，说的是分量。' },
          { key: 'C', en: 'huge and unforgettable', cn: '宏大、令人难忘', correct: true, reason: 'epic 是史诗级的规模感。几万人合唱，正是这个词。' }
        ],
        analysis: 'epic 本来用于史诗，后来被用来形容“大到不像真的”。顾清和说这句话时，手一直抓着栏杆。',
        wrongFeedback: '你选错了，工作人员以为他在抱怨，赶紧去调音，气血 -10。',
        afterCorrect: '江予在台上转过头，隔着几万人的灯，准确地看向侧台那个方向。'
      },
      {
        plotDescription: '唱完，江予在台上说了几句感谢的话。下来之后他把话筒一放，捂住了脸。',
        line: "My own speech made me cringe. I sounded like a commercial.",
        lineCn: '我自己那段话听得我直起鸡皮疙瘩。像在念广告。',
        prompt: "根据上下文，选出画线词汇 'cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'feel very proud', cn: '感到非常骄傲', correct: false, reason: 'cringe 是尴尬得想缩起来，不是骄傲。' },
          { key: 'B', en: 'feel embarrassed and uncomfortable', cn: '觉得尴尬、难受', correct: true, reason: 'cringe 是替自己难为情。他嫌自己那段话说得太像广告。' },
          { key: 'C', en: 'feel sleepy', cn: '感到困倦', correct: false, reason: '困是 sleepy。cringe 是尴尬的身体反应。' }
        ],
        analysis: 'cringe 是那种“恨不得钻进去”的感觉。江予在几万人面前没慌，回后台却因为一句话脸红。',
        wrongFeedback: '你选错了，江予以为你在夸他，把手放了下来，气血 -10。',
        afterCorrect: '顾清和递过一瓶水：“不像广告。”江予从指缝里看他：“像什么。”他说：“像你。”'
      },
      {
        plotDescription: '乐队的最后一段 solo 收得很干净。顾清和从侧台走回来，一边走一边说。',
        line: "The band was fabulous tonight. Every single one of them.",
        lineCn: '今晚乐队太出色了。每一个都是。',
        prompt: "根据上下文，选出画线词汇 'fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good', cn: '极好的、出色极了', correct: true, reason: 'fabulous 是很高的夸奖，比 good 重得多。他夸的是整支乐队。' },
          { key: 'B', en: 'very late', cn: '非常迟', correct: false, reason: '迟到是 late。fabulous 是称赞。' },
          { key: 'C', en: 'a little nervous', cn: '有点紧张', correct: false, reason: '紧张是 nervous。fabulous 是夸表现好。' }
        ],
        analysis: 'fabulous 带一点夸张的热情。顾清和平常说话很克制，这一句反倒显得真心。',
        wrongFeedback: '你选错了，鼓手没有听见，还以为被批评了，气血 -10。',
        afterCorrect: '江予在后台把这句话原样转给乐队。鼓手愣了两秒，然后整个后台都笑了。'
      },
      {
        plotDescription: '复盘的时候，调音师主动承认了问题。江予没有发火，只把耳机放在桌上。',
        line: "The sound in the first three songs was terrible. I could not hear the strings.",
        lineCn: '前三首的声音糟透了。我根本听不见弦乐。',
        prompt: "根据上下文，选出画线词汇 'terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'excellent', cn: '极好的', correct: false, reason: '意思正好相反，terrible 是很糟。' },
          { key: 'B', en: 'very cheap', cn: '非常便宜', correct: false, reason: '便宜是 cheap。terrible 指质量差。' },
          { key: 'C', en: 'very bad', cn: '非常糟糕', correct: true, reason: 'terrible 就是差到不能接受。前三首的返送确实出了问题。' }
        ],
        analysis: 'terrible 是江予能给的最差评价。但他把话说得很平，因为他要的是解决，不是追责。',
        wrongFeedback: '你选错了，调音师以为要被开除，当场白了脸，气血 -10。',
        afterCorrect: '“下一场我来盯。”顾清和在旁边说。江予看了他一眼，把耳机递过去：“那你听。”'
      }
    ],
    completeText: '第四十四章结束。那一首唱完，江予在台上站了很久。他没有说话，只是把话筒举起来，让全场的声音自己响着。'
  },
  {
    id: 'dm_45',
    index: 45,
    title: '第 45 章 · 聚光灯下的他',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演唱会之后的第一场直播采访，灯全打在江予一个人身上。他坐在高脚凳上，身后是一整面白墙，顾清和站在摄像机的死角里。',
    questions: [
      {
        plotDescription: '主持人问起那位“一直陪着他的人”。江予想了两秒，答得很稳。',
        line: "He is a decent guy. He did not ask for anything in return.",
        lineCn: '他是个正派的人。他没要过任何回报。',
        prompt: "根据上下文，选出画线词汇 'decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'honest and respectable', cn: '正派、体面', correct: true, reason: 'decent 形容人就是“靠得住、有底线”。这是他能给的最低也最重的评价。' },
          { key: 'B', en: 'very rich', cn: '非常有钱', correct: false, reason: 'decent 说的是人品，和财富没有关系。' },
          { key: 'C', en: 'very funny', cn: '非常搞笑', correct: false, reason: '搞笑是 funny。decent 指为人端正。' }
        ],
        analysis: 'decent 听起来很平，其实是江予很少给人的评价。他没有说“重要”，因为那太容易被追问。',
        wrongFeedback: '你选错了，主持人顺着往八卦方向追，江予脸色沉了一下，气血 -10。',
        afterCorrect: '镜头死角里，顾清和把手上的表格合上了。江予没看那边，但说话时声音更稳了一点。'
      },
      {
        plotDescription: '弹幕刷过一条旧帖，说他“不合群”。江予看了一眼，笑着把话题接了过来。',
        line: "They call him a weirdo because he reads in the corner instead of talking to anyone.",
        lineCn: '他们叫他怪人，因为他宁可缩在角落看书，也不跟人说话。',
        prompt: "根据上下文，选出画线词汇 'weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very famous singer', cn: '很有名的歌手', correct: false, reason: 'weirdo 是怪人，和名气没有关系。' },
          { key: 'B', en: 'a person who is very polite', cn: '很有礼貌的人', correct: false, reason: '有礼是 polite。weirdo 带着“跟别人不一样”的意味。' },
          { key: 'C', en: 'a strange person', cn: '怪人、不合群的人', correct: true, reason: 'weirdo 就是被看作古怪的人。他说这个词时语气是护着的。' }
        ],
        analysis: 'weirdo 通常是骂人的。江予把它重复一遍，等于把那个标签拿回来自己用。',
        wrongFeedback: '你选错了，江予顺着弹幕嘲讽了一句，气氛有点僵，气血 -10。',
        afterCorrect: '“我觉得挺好的。”江予把话筒往上一抬，“角落里有光，也有书。”'
      },
      {
        plotDescription: '主持人放出一段舞台回放。江予看着屏幕里的自己，忽然笑了一下，说了句不设防的话。',
        line: "Under that spotlight he looked hot, and he knew it.",
        lineCn: '聚光灯下他很好看，而且他自己知道。',
        prompt: "根据上下文，选出画线词汇 'hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'very warm weather', cn: '天气很热', correct: false, reason: 'hot 可以指热，但这里说的是人很好看、很有吸引力。' },
          { key: 'B', en: 'very attractive', cn: '非常性感、吸引人', correct: true, reason: '形容人时 hot 就是“很辣、很吸引”。他在说屏幕里的自己。' },
          { key: 'C', en: 'spicy food', cn: '辛辣食物', correct: false, reason: '这里没有人吃东西。hot 指的是人的吸引力。' }
        ],
        analysis: 'hot 是最不遮掩的夸法。江予说得很自然，因为他说的是台上那个“他”，把自己推远了一点。',
        wrongFeedback: '你选错了，江予接错了话，主持人笑着换了话题，气血 -10。',
        afterCorrect: '弹幕一下子炸开。江予看着镜头：“你们别多想。我说的是舞台。”'
      },
      {
        plotDescription: '聊到最后，助理在镜头外比划。江予听完，忽然说了一段没写进提纲的话。',
        line: "He fell asleep on the flight, and honestly, it was cute.",
        lineCn: '他在飞机上睡着了，说实话，很可爱。',
        prompt: "根据上下文，选出画线词汇 'cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'endearing, sweet', cn: '可爱的、让人心软', correct: true, reason: 'cute 是招人喜欢。他说的是一件很小的事，语气却软了。' },
          { key: 'B', en: 'very clever', cn: '非常聪明', correct: false, reason: 'clever 是聪明。cute 说的是让人心软的那种可爱。' },
          { key: 'C', en: 'extremely loud', cn: '非常吵', correct: false, reason: '吵是 loud。cute 与音量无关。' }
        ],
        analysis: 'cute 是江予第一次在公开场合用这么软的词。他没有点名，但所有人都知道，也都不确定。',
        wrongFeedback: '你选错了，江予把话收了回去，改口说了句官方的，气血 -10。',
        afterCorrect: '直播结束后，弹幕还在刷。江予把耳麦摘下来，转头看向死角：“刚才那句，你听见了吗。”'
      }
    ],
    completeText: '第四十五章结束。直播结束后，弹幕还在刷。江予把耳麦摘下来，转头问：“刚才那句，你听见了吗。”顾清和点了下头。'
  },
  {
    id: 'dm_46',
    index: 46,
    title: '第 46 章 · 一张被拍到的照片',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '照片是被路人拍到的，糊得很厉害。两个人站在一家便利店门口，一人手里一根烤肠，谁都没戴口罩。热搜挂了一整个上午。',
    questions: [
      {
        plotDescription: '医院的人问他最近怎么总是一大早到。顾清和把白大褂挂好，说得随口。',
        line: "My commute used to be forty minutes. Now it is a hallway.",
        lineCn: '我以前通勤要四十分钟。现在就是一条走廊。',
        prompt: "根据上下文，选出画线词汇 'commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of food', cn: '一种食物', correct: false, reason: 'commute 是通勤，和食物没有关系。' },
          { key: 'B', en: 'the regular trip to work', cn: '日常通勤', correct: true, reason: 'commute 就是上下班的路。他说现在只要走过一条走廊。' },
          { key: 'C', en: 'a phone call', cn: '一通电话', correct: false, reason: '电话是 call。commute 指的是路程。' }
        ],
        analysis: 'commute 说的是每天往返的路。顾清和把四十分钟换成一条走廊，等于承认自己搬近了。',
        wrongFeedback: '你选错了，同事听成了他搬家，追问了半天地址，气血 -10。',
        afterCorrect: '同事笑：“那不是通勤，是同居。”顾清和把听诊器绕好，没有否认。'
      },
      {
        plotDescription: '车上，江予的头歪在窗边。顾清和把外套盖过去，对司机说了一句。',
        line: "He takes a nap in the car. Twenty minutes, no matter where we are.",
        lineCn: '他在车上会小睡一会儿。不管在哪，二十分钟。',
        prompt: "根据上下文，选出画线词汇 'nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep', cn: '小睡一会儿', correct: true, reason: 'nap 就是短时间的睡眠。二十分钟正是它的常见长度。' },
          { key: 'B', en: 'a long meeting', cn: '一场长会', correct: false, reason: 'nap 和小睡有关，和会议没有关系。' },
          { key: 'C', en: 'a phone app', cn: '一个手机应用', correct: false, reason: '和 app 无关。nap 在这里就是打盹。' }
        ],
        analysis: 'nap 是那种不用躺下、随时能补的二十分钟。只有在觉得安全的人面前，人才睡得着。',
        wrongFeedback: '你选错了，司机以为要停车，绕了三圈，气血 -10。',
        afterCorrect: '车停在红灯前。顾清和把外套往上拉了拉，江予在睡里皱了下眉，又松开。'
      },
      {
        plotDescription: '回到住处，江予打开冰箱又关上。顾清和站在厨房门口，看了一眼那口没洗的锅。',
        line: "We should order in tonight. I am not letting you near a stove.",
        lineCn: '今晚点外卖吧。我不会让你靠近灶台。',
        prompt: "根据上下文，选出画线词汇 'order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'go to a restaurant', cn: '去餐厅吃饭', correct: false, reason: 'order in 是叫餐到家，和出门吃正好相反。' },
          { key: 'B', en: 'cook at home', cn: '在家做饭', correct: false, reason: '他恰恰不让对方进厨房，order in 是点外卖。' },
          { key: 'C', en: 'have food delivered', cn: '点外卖、叫餐到家里', correct: true, reason: 'order in 指让餐厅送到家里。这里对应的是厨房不能用的现实。' }
        ],
        analysis: 'order in 的重点是 in——送进来。顾清和说这句话时，其实在替自己解释：不是不想做，是不敢让他碰。',
        wrongFeedback: '你选错了，两个人在厨房门口站了很久，谁也没动，气血 -10。',
        afterCorrect: '江予把手机递过去：“你点。”顾清和接过来，往下翻了很久，最后点了两个最普通的菜。'
      },
      {
        plotDescription: '外卖到了，两个人坐在窗边。江予把窗帘拉开一条缝，看着楼下。',
        line: "We never eat out. Not once in two years.",
        lineCn: '我们从来没出去吃过饭。两年，一次都没有。',
        prompt: "根据上下文，选出画线词汇 'eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'eat too much', cn: '吃太多', correct: false, reason: 'eat out 是出去吃，不是吃得多。' },
          { key: 'B', en: 'have a meal at a restaurant', cn: '在外面餐厅吃饭', correct: true, reason: 'eat out 就是在外面吃。两年一次都没有，说明他们一直藏着。' },
          { key: 'C', en: 'eat quickly', cn: '吃得很快', correct: false, reason: '吃得快是 eat fast。和出去吃无关。' }
        ],
        analysis: 'eat out 是最普通的事，对他们却是奢侈品。这句话不是说没时间，是在说没有那个资格。',
        wrongFeedback: '你选错了，江予真的开始订餐厅，顾清和按住了他的手，气血 -10。',
        afterCorrect: '顾清和把筷子放下：“那就去一次。”江予转头：“被拍到怎么办。”他说：“那就被拍到。”'
      }
    ],
    completeText: '第四十六章结束。公关问要不要把照片买下来。江予把照片存进手机，说不用。顾清和看了一眼那张糊掉的照片，没有说话。'
  },
  {
    id: 'dm_47',
    index: 47,
    title: '第 47 章 · 官宣',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '官宣的那天，家里反而最安静。没有发布会，没有通稿，只有一屋子的纸箱和两把没配对的拖鞋，阳光从窗帘的缝里漏进来。',
    questions: [
      {
        plotDescription: '两个人蹲在客厅拆箱子。江予把抹布递过去，一边算一边说，语气难得轻松。',
        line: "We split the chores. He does the dishes, I do everything I can reach.",
        lineCn: '我们分家务。他洗碗，我负责我够得着的所有地方。',
        prompt: "根据上下文，选出画线词汇 'chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'arguments about money', cn: '关于钱的争吵', correct: false, reason: 'chores 是家务，和钱没有关系。' },
          { key: 'B', en: 'work meetings', cn: '工作会议', correct: false, reason: '会议是 meeting。chores 指家里的杂活。' },
          { key: 'C', en: 'small jobs around the house', cn: '家里的杂活、家务', correct: true, reason: 'chores 就是洗碗、扫地这些日常小事。他正在分的就是这些。' }
        ],
        analysis: 'chores 是琐碎到不值得提的事，但正是这些事决定了日子能不能过下去。江予说得很认真。',
        wrongFeedback: '你选错了，江予以为你在问公司的事，接了一句工作安排，气血 -10。',
        afterCorrect: '顾清和把抹布接过去：“柜子顶上我来。”江予仰头看了一眼：“那你得垫个凳子。”'
      },
      {
        plotDescription: '箱子里翻出一张旧日程表，上面全是拖到最后一天才写的字。江予把它举起来。',
        line: "I procrastinate on everything except going on stage.",
        lineCn: '除了上台，我什么事都拖。',
        prompt: "根据上下文，选出画线词汇 'procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'finish early', cn: '提前完成', correct: false, reason: 'procrastinate 是拖延，和提前完成正好相反。' },
          { key: 'B', en: 'delay things you should do now', cn: '拖延、把事情往后推', correct: true, reason: 'procrastinate 就是明明该做却一直不做。旧日程表上全是证据。' },
          { key: 'C', en: 'plan carefully', cn: '仔细计划', correct: false, reason: '计划是 plan。procrastinate 是一直往后拖。' }
        ],
        analysis: 'procrastinate 是那种明知道却做不到。江予把上台排除在外，因为那件事他从来不敢拖。',
        wrongFeedback: '你选错了，江予以为你在批评他，把日程表塞回箱子，气血 -10。',
        afterCorrect: '顾清和看了一眼那张表：“扫地呢。”江予想了下：“扫地也拖。”两个人一起笑了。'
      },
      {
        plotDescription: '电视开着，谁也没在看。江予把腿搭在茶几上，说得很心安理得。',
        line: "We binge-watched three seasons in one weekend, and I do not regret a single hour.",
        lineCn: '我们一个周末连看了三季，我一点都不后悔。',
        prompt: "根据上下文，选出画线词汇 'binge-watched' 最准确的意思。",
        options: [
          { key: 'A', en: 'watch many episodes in a row', cn: '一口气连看好几集', correct: true, reason: 'binge-watch 就是连续大量地看。一个周末三季正是这个量。' },
          { key: 'B', en: 'watch one short clip', cn: '看一个短片', correct: false, reason: 'binge-watch 是连着看很多，不是一个短片。' },
          { key: 'C', en: 'rewatch the same scene', cn: '反复看同一场戏', correct: false, reason: '重点在连续大量的观看，不是重复同一段。' }
        ],
        analysis: 'binge-watch 带一点自嘲的负罪感，但江予说“不后悔”。他像终于被允许浪费时间了。',
        wrongFeedback: '你选错了，江予以为你在嫌他浪费时间，把电视关了，气血 -10。',
        afterCorrect: '顾清和把遥控器拿过去，按了下一集：“那就再看一集。”江予笑着往沙发里陷了一点。'
      },
      {
        plotDescription: '手机在桌上亮了很多次。顾清和拿起来，划了很久，一直没抬头。',
        line: "He scrolls through the comments for an hour and never tells me what they say.",
        lineCn: '他刷了一个小时的评论，从来不告诉我上面写了什么。',
        prompt: "根据上下文，选出画线词汇 'scrolls' 最准确的意思。",
        options: [
          { key: 'A', en: 'write a long post', cn: '写一篇长文', correct: false, reason: 'scroll 是滑动浏览，不是写作。' },
          { key: 'B', en: 'turn off the phone', cn: '关掉手机', correct: false, reason: '意思相反，scroll 是一直往下滑着看。' },
          { key: 'C', en: 'move through a screen with your finger', cn: '用手指滑动屏幕浏览', correct: true, reason: 'scroll 就是手指往下滑。他滑了一个小时，一句话都没说。' }
        ],
        analysis: 'scroll 是个没有尽头的动作。顾清和滑了一个小时，说明他在找某条具体的评论，或者在替江予筛掉什么。',
        wrongFeedback: '你选错了，江予以为他在玩手机，把手机抢了过去，气血 -10。',
        afterCorrect: '江予把手机拿过来，翻了两下就放下了。“别看了。”他说。顾清和沉默了一会儿，才点头。'
      }
    ],
    completeText: '第四十七章结束。那天他们没出门，也没看手机。江予把最后一个纸箱拆开，里面是两年前的药盒，他愣了很久。'
  },
  {
    id: 'dm_48',
    index: 48,
    title: '第 48 章 · 深夜的发布会',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '发布会定在晚上十一点，说是为了避开白天的版面。会场只开了一半的灯，台下坐着三十多个记者，谁的手机都没放下。',
    questions: [
      {
        plotDescription: '热搜一条条往下滚。江予坐在后台，手指在屏幕上划了一下，把那条文章关了。',
        line: "I watched him swipe the news away like it was nothing.",
        lineCn: '我看着他随手一划就把那条新闻关了，像什么都没发生。',
        prompt: "根据上下文，选出画线词汇 'swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'slide a finger across a screen', cn: '在屏幕上滑动', correct: true, reason: 'swipe 在手机语境里就是划过屏幕。他一划就关掉了那条新闻。' },
          { key: 'B', en: 'steal something quietly', cn: '悄悄偷东西', correct: false, reason: 'swipe 确实有“顺走”的意思，但这里是对着手机屏幕。' },
          { key: 'C', en: 'clean the floor', cn: '擦地板', correct: false, reason: 'swipe 有擦拭的意思，但这里明显是在划屏幕。' }
        ],
        analysis: 'swipe 是个几乎不带情绪的动作。江予划走那条新闻时太熟练了，熟练得让人心疼。',
        wrongFeedback: '你选错了，顾清和以为他在删东西，伸手想拦，气血 -10。',
        afterCorrect: '顾清和把手机拿过来，看见屏幕上还留着没关掉的那条。江予说：“习惯了。”'
      },
      {
        plotDescription: '凌晨一点，两个人从后门出来。江予在车上没坐稳，头一歪就靠了过来。',
        line: "He crashed at my place after the press conference. Slept twelve hours.",
        lineCn: '发布会之后他直接在我那儿倒头睡了。一睡十二个小时。',
        prompt: "根据上下文，选出画线词汇 'crashed' 最准确的意思。",
        options: [
          { key: 'A', en: 'drove into a wall', cn: '开车撞墙', correct: false, reason: 'crash 有撞车的意思，但这里说的是借宿睡下。' },
          { key: 'B', en: 'started a fight', cn: '打起架来', correct: false, reason: '这里没有冲突，crash 口语里指倒头就睡。' },
          { key: 'C', en: 'stayed overnight', cn: '借宿过夜、倒头就睡', correct: true, reason: 'crash 口语里就是“凑合睡一觉”。他睡了十二个小时。' }
        ],
        analysis: 'crash 这个词很随意，带着“撑不住了”的意思。江予在台上撑了两小时，一上车就散了。',
        wrongFeedback: '你选错了，江予被这句话弄醒了，坐直了身子，气血 -10。',
        afterCorrect: '顾清和把车窗调暗，声音放轻：“睡吧。”江予嗯了一声，眼睛已经闭上了。'
      },
      {
        plotDescription: '第二天中午，江予把行程表翻来翻去，最后抬起头，说了句很普通的话。',
        line: "We should hang out somewhere that is not a hospital room.",
        lineCn: '我们该去个不是病房的地方待着。',
        prompt: "根据上下文，选出画线词汇 'hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'hang clothes outside', cn: '把衣服挂到外面', correct: false, reason: 'hang out 字面像晾衣服，但这里说的是“一起出去玩、待着”。' },
          { key: 'B', en: 'spend time together', cn: '一起出去玩、待在一起', correct: true, reason: 'hang out 就是没目的地一起消磨时间。他要的是“不是病房”的地方。' },
          { key: 'C', en: 'call someone on the phone', cn: '打电话给某人', correct: false, reason: '打电话是 call。hang out 是面对面待在一起。' }
        ],
        analysis: 'hang out 的重点是“没有目的”。对两个人来说，这一点比去哪里更难。',
        wrongFeedback: '你选错了，江予以为你在推脱，把行程表合上了，气血 -10。',
        afterCorrect: '顾清和想了想：“楼下有个面馆。”江予笑出声：“这也算。”'
      },
      {
        plotDescription: '彩排间隙，江予站在台边，顾清和从后面走过去，把手按在他肩上。',
        line: "Come on, kick back. You have been standing for six hours.",
        lineCn: '行了，歇会儿吧。你站了六个小时了。',
        prompt: "根据上下文，选出画线词汇 'kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'relax and rest', cn: '放松休息一下', correct: true, reason: 'kick back 是坐下来放松。他说对方站了六小时，正是催他歇。' },
          { key: 'B', en: 'kick something backward', cn: '把东西往后踢', correct: false, reason: 'kick back 字面像踢回去，但这里是放松的意思。' },
          { key: 'C', en: 'leave the room', cn: '离开房间', correct: false, reason: '离开是 leave。kick back 是歇下来。' }
        ],
        analysis: 'kick back 带着一点轻松的催促。顾清和平常说“休息”，只有这一次用了这么松弛的说法。',
        wrongFeedback: '你选错了，江予以为你在赶他，转身走开了，气血 -10。',
        afterCorrect: '江予没坐，反而往后靠了一点，把重心靠在顾清和的手上：“那你也别走。”'
      }
    ],
    completeText: '第四十八章结束。发布会结束后，两个人从后门出去。江予在车里睡着了，顾清和撑着没睡，把手一直放在他肩上。'
  },
  {
    id: 'dm_49',
    index: 49,
    title: '第 49 章 · 把话说完',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '空掉的会场只剩椅子和纸杯。江予坐在第一排，顾清和在他旁边，两个人隔着一个座位的距离，谁都没提起刚才那场采访。',
    questions: [
      {
        plotDescription: '记者还想再问，工作人员在旁边比划。江予抬手示意了一下，把话接住。',
        line: "Let us wrap up the interview. He still has to rest.",
        lineCn: '采访就到这儿吧。他还需要休息。',
        prompt: "根据上下文，选出画线词汇 'wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'wrap a gift', cn: '包一份礼物', correct: false, reason: 'wrap up 字面有包装，但这里是“结束、收尾”。' },
          { key: 'B', en: 'finish something', cn: '结束、收尾', correct: true, reason: 'wrap up 就是把它收掉。他要把这场采访停在这里。' },
          { key: 'C', en: 'start again', cn: '重新开始', correct: false, reason: '意思相反。wrap up 是做完，不是重来。' }
        ],
        analysis: 'wrap up 带着“到此为止”的干脆。江予用这句话替对方划了界，也替自己挡了一下。',
        wrongFeedback: '你选错了，采访又多拖了半小时，江予的脸色越来越差，气血 -10。',
        afterCorrect: '记者收了话筒。江予转过头，对顾清和低声说：“走吧。”'
      },
      {
        plotDescription: '后台的桌上摊着一堆文件，合同、病历、还有几份没签的授权。江予把它们往中间推了推。',
        line: "We still have to sort out the contract and the medical records.",
        lineCn: '合同和病历的事，我们还得处理清楚。',
        prompt: "根据上下文，选出画线词汇 'sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'deal with and organize', cn: '处理、梳理清楚', correct: true, reason: 'sort out 是把乱的东西整理清楚。桌上那堆文件正是这样。' },
          { key: 'B', en: 'throw away', cn: '扔掉', correct: false, reason: '扔掉是 throw away。sort out 是要理出来，不是丢掉。' },
          { key: 'C', en: 'buy something new', cn: '买新的东西', correct: false, reason: '这里没有任何购买，是把遗留的问题处理掉。' }
        ],
        analysis: 'sort out 带着“把一团乱麻解开”的意思。江予没有说“解决”，因为他知道这件事没那么快。',
        wrongFeedback: '你选错了，江予把文件收进包里，说“那我自己来”，气血 -10。',
        afterCorrect: '顾清和把病历那一叠拿到自己这边：“这个我来。”江予看了他一眼，没有争。'
      },
      {
        plotDescription: '灯已经关了一半。江予坐在台阶上，忽然说了句很直的话，声音有点闷。',
        line: "I can deal with the press. I cannot deal with you not talking to me.",
        lineCn: '媒体我能应付。你不跟我说话，我应付不了。',
        prompt: "根据上下文，选出画线词汇 'deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'have a business deal', cn: '做一笔生意', correct: false, reason: 'deal with 是应对、处理，不是做生意。' },
          { key: 'B', en: 'share something', cn: '分享某物', correct: false, reason: '分享是 share。deal with 是去面对某件事。' },
          { key: 'C', en: 'handle a problem or person', cn: '应对、处理', correct: true, reason: 'deal with 就是扛下来。他能扛媒体，扛不住沉默。' }
        ],
        analysis: 'deal with 在这里是“应付得了”。江予把媒体和沉默放在天平两端，答案立刻就看出来了。',
        wrongFeedback: '你选错了，江予以为你在讲条件，站起来走了两级台阶，气血 -10。',
        afterCorrect: '顾清和在下一级台阶坐下，和他平齐：“那我说。”江予没抬头：“说什么。”'
      },
      {
        plotDescription: '演出已经结束很久，场馆里只剩收尾的人。顾清和还站得笔直，江予伸手拉了他一下。',
        line: "Chill out. The show is over. Nobody is watching us now.",
        lineCn: '放松点。演出结束了，现在没人看着我们。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'get colder', cn: '变冷', correct: false, reason: 'chill out 字面像变凉，但这里是叫对方放松。' },
          { key: 'B', en: 'calm down and relax', cn: '放松、别紧张', correct: true, reason: 'chill out 就是让人松下来。他在提醒对方不必再绷着。' },
          { key: 'C', en: 'go outside', cn: '到外面去', correct: false, reason: '出门是 go out。chill out 是情绪上的放松。' }
        ],
        analysis: 'chill out 是叫人卸下防备。江予说“没人看着”，其实是在告诉对方——现在可以做自己了。',
        wrongFeedback: '你选错了，顾清和以为他在赶人，把外套拿起来，气血 -10。',
        afterCorrect: '顾清和没有走，反而坐了下来。两个人肩并着肩，谁都没再说话。'
      }
    ],
    completeText: '第四十九章结束。最后一个工作人员关掉了场灯。江予在黑暗里伸出手，摸到了顾清和的手，握住了。'
  },
  {
    id: 'dm_50',
    index: 50,
    title: '第 50 章 · 顶峰相见',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '最后一场演唱会开在最高的那个场馆。后台的窗外能看见整座城市的灯，江予把助听器调好，顾清和站在他身后，替他理了理耳后那截银色的线。',
    questions: [
      {
        plotDescription: '上场前十五分钟，江予还在对歌单。顾清和把一小袋东西放进他手里，语气不容商量。',
        line: "Eat a snack before you go on. You cannot sing on an empty stomach.",
        lineCn: '上台前吃点东西。空着肚子唱不了。',
        prompt: "根据上下文，选出画线词汇 'snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a heavy meal', cn: '一顿正餐', correct: false, reason: 'snack 是少量垫肚子的东西，不是正餐。' },
          { key: 'B', en: 'a kind of drink', cn: '一种饮料', correct: false, reason: '饮料是 drink。snack 指小份食物。' },
          { key: 'C', en: 'a small amount of food', cn: '少量食物、点心', correct: true, reason: 'snack 就是垫一口的小东西。上场前十五分钟，也只能吃这个。' }
        ],
        analysis: 'snack 是最轻的一餐，刚好够顶住一场演出。顾清和递东西的动作太熟练了，像做了很多年。',
        wrongFeedback: '你选错了，江予把袋子推回去，说“唱完再吃”，气血 -10。',
        afterCorrect: '江予拆开吃了一块，抬头：“你也吃。”顾清和说自己不唱，被塞了一块到手里。'
      },
      {
        plotDescription: '监控屏上的数字已经跳到满场。江予的嗓子有点干，顾清和把水递过去，说得很短。',
        line: "Hydrate first. Then we talk about the setlist.",
        lineCn: '先补水。歌单的事等下再说。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'take a photo', cn: '拍照', correct: false, reason: '拍照是 take a photo。hydrate 是补水。' },
          { key: 'B', en: 'drink enough water', cn: '补充水分', correct: true, reason: 'hydrate 是让身体补上水。他把水递过去就是为这个。' },
          { key: 'C', en: 'rest your voice', cn: '让嗓子休息', correct: false, reason: '让嗓子休息是 rest your voice。hydrate 说的是喝水。' }
        ],
        analysis: 'hydrate 是件很小的事，顾清和却把它放在最前面。因为对一个快要听不见的人来说，嗓子就是全部。',
        wrongFeedback: '你选错了，江予以为他在绕开歌单的事，把水瓶放下了，气血 -10。',
        afterCorrect: '江予喝了半瓶，把剩下的放在台口。顾清和说：“唱完再来。”他点头：“你等我。”'
      },
      {
        plotDescription: '开场前的最后一次热身，江予低头转着脖子。顾清和走过去，把手按在他肩上。',
        line: "Stretch your neck before the high notes. You always forget.",
        lineCn: '唱高音之前先把脖子拉开。你每次都忘。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'extend and loosen your body', cn: '伸展、拉伸身体', correct: true, reason: 'stretch 是把身体拉开。这里指的是脖子。' },
          { key: 'B', en: 'write down notes', cn: '写下笔记', correct: false, reason: 'notes 在这里是高音，不是笔记。stretch 是拉伸。' },
          { key: 'C', en: 'raise your voice', cn: '提高音量', correct: false, reason: '提高音量是 raise your voice。stretch 是身体的动作。' }
        ],
        analysis: 'stretch 是准备动作，也是他唯一还能控制的环节。高音会不会塌不确定，能拉开的筋先拉开。',
        wrongFeedback: '你选错了，江予直接上台，第一句高音就有点发紧，气血 -10。',
        afterCorrect: '江予低着头，跟着他的手往侧面慢慢地拉。两个人的呼吸几乎同步了。'
      },
      {
        plotDescription: '音响调试的时候，江予坐在箱子上发呆。工作人员问要不要叫他，顾清和摆了摆手。',
        line: "He zones out during sound check. That is how he rests.",
        lineCn: '他试音的时候会走神。那就是他休息的方式。',
        prompt: "根据上下文，选出画线词汇 'zones out' 最准确的意思。",
        options: [
          { key: 'A', en: 'become very angry', cn: '变得非常生气', correct: false, reason: 'zone out 是走神放空，不是发火。' },
          { key: 'B', en: 'leave the stage', cn: '离开舞台', correct: false, reason: '人还在原地，只是注意力不在了。' },
          { key: 'C', en: 'stop paying attention, drift away', cn: '走神、放空', correct: true, reason: 'zone out 就是人在这、神不在。那是江予唯一能歇的方式。' }
        ],
        analysis: 'zone out 是主动关掉外面。对听得见的人来说是发呆，对江予来说，那可能是一天里最安静的几分钟。',
        wrongFeedback: '你选错了，工作人员去把江予叫醒了，他一下子没反应过来，气血 -10。',
        afterCorrect: '顾清和站在两米外看着，没有出声。江予回过神，正好对上他的视线，笑了一下。'
      }
    ],
    completeText: '第五十章结束。安可的最后一首，江予没有唱自己的歌。他唱了一首很慢的，台下几万人替他把副歌接了下去。他站在最高的地方，回头看了一眼侧台——那里有人一直在。'
  }
];
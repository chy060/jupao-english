window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.dual_female = [
  {
    id: 'df_1',
    index: 1,
    title: '第 1 章 · 替身站在光外面',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '片场在城郊，凌晨四点的风把铁门吹得哐当作响。沈知夏抱着替身演员的号码牌站在门外，工资日结、没有名字、镜头里只留背影。今天她要替影后姜黎拍一场坠马戏，导演说，摔得越像，钱给得越多。',
    questions: [
      {
        plotDescription: '她把口袋翻了个底朝天，公交卡只剩最后一次，手机里还躺着催缴房租的短信。',
        line: "I'm broke, all right? I don't even have the fare home.",
        lineCn: '我是身无分文，行了吧？我连回家的车费都没有。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'injured and unable to move', cn: '受伤了、动不了', correct: false, reason: 'broke 是 break 的过去式，但 I am broke 说的是钱包，不是骨头。' },
          { key: 'B', en: 'having no money at all', cn: '身无分文、一分钱没有', correct: true, reason: 'be broke 是固定口语，表示“没钱了”，和身体状况没有关系。' },
          { key: 'C', en: 'extremely tired', cn: '累到脱力', correct: false, reason: '累是 exhausted 或 dead tired；broke 讲的是经济状态，不是体力。' }
        ],
        analysis: 'broke 放在 be 动词后形容人，就是“没钱”。她不是在抱怨累，而是在解释自己为什么站在铁门外犹豫。',
        wrongFeedback: '你把“没钱”听成了“受伤”，副导演以为你要请病假，当场把号码牌收了回去，气血 -10。',
        afterCorrect: '副导演上下打量她一眼，从兜里抽出一张皱巴巴的钞票塞过来：“先拿着，摔完再结。”沈知夏没接，只说了一句：“我摔得比谁都像，你别少算我一场。”'
      },
      {
        plotDescription: '化妆间里，场务把她的资料往桌上一扔，顺口问了一句她住哪儿。',
        line: "I live in a basement near the studio. The rent eats half of what I make.",
        lineCn: '我住在片场附近的地下室，房租吃掉我一半的收入。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid regularly for a home', cn: '房租、住房的租金', correct: true, reason: 'rent 就是按月付给房东的住房钱，这里是她最大的固定开销。' },
          { key: 'B', en: 'money borrowed from a bank', cn: '银行贷款', correct: false, reason: '贷款是 loan；rent 是“住房子要付的钱”，不是借来的钱。' },
          { key: 'C', en: 'a fee for entering a place', cn: '进门要交的费用', correct: false, reason: '进片场不用付 rent，这个词只和“居住”有关。' }
        ],
        analysis: 'rent 在日常生活里几乎只指“房租”。她说 rent eats half of what I make，是在交代自己为什么这么拼。',
        wrongFeedback: '你把房租听成了贷款，场务顺口问了句“欠了多少”，她脸一下白了，气血 -10。',
        afterCorrect: '场务愣了一下，把资料重新摆正：“地下室潮，摔完记得去医务室看看。”沈知夏笑了一下，那是她进组以来听到的第一句像人说的话。'
      },
      {
        plotDescription: '助理递来一份替身须知，上面写着每天开销自己先垫，月底统一结算。',
        line: "Keep it under two hundred a day. I'm on a tight budget.",
        lineCn: '一天控制在一百五以内，我预算很紧。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a type of insurance', cn: '一种保险', correct: false, reason: '保险是 insurance；预算管的是“能花多少”，不是风险赔付。' },
          { key: 'B', en: 'a list of working hours', cn: '一张排班表', correct: false, reason: '排班是 schedule；budget 只和钱有关，不安排时间。' },
          { key: 'C', en: 'a plan for how much you can spend', cn: '预算、花钱的计划', correct: true, reason: 'on a tight budget 就是“手头紧、预算卡得死”，说的是可花的钱有限。' }
        ],
        analysis: 'budget 是“预算”。on a tight budget 不是提要求，是在告诉助理：她垫不起更多的钱。',
        wrongFeedback: '你以为是排班表，助理真给她排了十四小时，她连饭钱都搭了进去，气血 -10。',
        afterCorrect: '助理把数字改成了一百五，又补一句：“超了你自己想办法。”沈知夏在纸上画了个勾，心想一百五也够，只要不生病。'
      },
      {
        plotDescription: '收工后有人喊她去片场外吃火锅，她摆摆手，指了指手里的盒饭。',
        line: "Not tonight. Can't splurge on hotpot when tomorrow's lunch is still a question.",
        lineCn: '今晚不去了，明天午饭都还没着落，哪敢挥霍去吃火锅。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend a lot on something nice', cn: '挥霍、舍得花钱享受一次', correct: true, reason: 'splurge 是“偶尔大手大脚花一次”，火锅对她就是不该有的支出。' },
          { key: 'B', en: 'eat too fast', cn: '吃得太急太快', correct: false, reason: 'splurge 和速度无关，它讲的是花钱，不是吃相。' },
          { key: 'C', en: 'complain loudly', cn: '大声抱怨', correct: false, reason: '她是在拒绝邀请，不是抱怨；splurge 的对象是钱。' }
        ],
        analysis: 'splurge 的核心是“花一笔不该花的大钱”。她拒绝得干脆，因为火锅不是聚餐，是预算外的窟窿。',
        wrongFeedback: '你把挥霍理解成吃太快，第二天她真的胃疼，蹲在片场角落，气血 -10。',
        afterCorrect: '有人笑她抠，她也不辩，低头把盒饭里的鸡腿留了一半。后来那半个鸡腿被装进保温盒，第二天出现在姜黎休息室的门口。'
      }
    ],
    completeText: '第一章结束。她替姜黎摔了七次，导演喊过的时候，所有人都在看监视器里的那个背影。没有人记得，那个背影其实是她。'
  },
  {
    id: 'df_2',
    index: 2,
    title: '第 2 章 · 一天三百块的命',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '午休时，场务在群里发结账单，替身的钱被砍了三成，理由是“机位重来三次”。姜黎坐在遮阳伞下翻剧本，听见那女孩跟人争了两句，又自己把话咽了回去，只把手里的单据折得很整齐。',
    questions: [
      {
        plotDescription: '结账单摊在道具箱上，沈知夏盯着那串数字，声音压得很低。',
        line: "Three hundred for a whole day of falling off a horse? That's a rip-off.",
        lineCn: '摔一整天马给三百？这简直是坑人。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very good bargain', cn: '非常划算的买卖', correct: false, reason: 'rip-off 是“被宰”，和划算正好相反，别把语气听反了。' },
          { key: 'B', en: 'a sudden accident', cn: '一场突发的意外', correct: false, reason: '这说的是价钱不合理，不是有人摔下来；rip-off 只谈钱。' },
          { key: 'C', en: 'something that charges far too much', cn: '坑钱的东西、宰人的价', correct: true, reason: 'rip-off 指“价格离谱、明摆着占你便宜”，她是不认这个价。' }
        ],
        analysis: 'rip-off 是“价格离谱、被宰”。她不是单纯嫌钱少，是不认这套算法：摔一天只值三百。',
        wrongFeedback: '你把它当成便宜，笑着说“那不挺好”，她眼圈一下就红了，气血 -10。',
        afterCorrect: '姜黎合上剧本，隔着两步远开口：“把账单给我。”她看完只说了三个字：“不合理。”场务的脸立刻变了。'
      },
      {
        plotDescription: '放饭时，一个没签合同的配角端着盘子挨桌夹菜，还笑着说下次请客。',
        line: "He's been eating here for a week and never paid once. Total freeloader.",
        lineCn: '他在这儿白吃一个星期了，一次钱没掏过。标准的白嫖怪。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who takes things without paying', cn: '白吃白拿、蹭别人的人', correct: true, reason: 'freeloader 指长期占别人便宜、不肯掏钱的人，重点在“白拿”。' },
          { key: 'B', en: 'someone who works for free', cn: '免费出力打工的人', correct: false, reason: '免费干活是 volunteer；freeloader 是白拿好处，不干活。' },
          { key: 'C', en: 'a very generous person', cn: '特别大方的人', correct: false, reason: '这词是骂人的，和“大方”完全相反。' }
        ],
        analysis: 'freeloader 的重点是“占便宜”。他吃的是剧组的饭，也是别人的忍耐。',
        wrongFeedback: '你听成免费打工，还替他辩了两句，结果他当天又打包了三份饭，气血 -10。',
        afterCorrect: '姜黎没抬头，只让助理把多出来的那份盒饭收走。那人讪讪地放下筷子，沈知夏低头扒饭，肩膀却松了一点。'
      },
      {
        plotDescription: '晚上回到地下室，她刷到一条私信，说交八百块就能拿到剧组内部名额。',
        line: "Pay eight hundred to get a role? Sounds like a scam to me.",
        lineCn: '交八百就能拿到角色？我看这就是个骗局。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very hard test', cn: '一场很难的考试', correct: false, reason: 'scam 不是考试，也不需要你答题，它只要你掏钱。' },
          { key: 'B', en: 'a trick to steal your money', cn: '骗局、骗钱的套路', correct: true, reason: 'scam 指以欺骗手段拿走你的钱，越像机会越可能是坑。' },
          { key: 'C', en: 'a special discount', cn: '一个特殊折扣', correct: false, reason: '折扣是让你少付钱，scam 是让你白付钱，方向相反。' }
        ],
        analysis: 'scam 是“骗钱的局”。她太熟悉这种话了：先给你希望，再让你先付钱。',
        wrongFeedback: '你信了那是折扣，第二天转了钱，对方直接把她拉黑，气血 -10。',
        afterCorrect: '她截图存了下来，又点开另一个对话框。姜黎的助理发来一句：“明天七点，化妆间三号。”她盯着那行字看了很久，才回了一个“好”。'
      },
      {
        plotDescription: '电话那头是医院，说母亲的账还能再拖一个月，但要先交一部分。',
        line: "I'm in debt up to my neck, but I still send money home every month.",
        lineCn: '我欠了一屁股债，可每个月还是往家里寄钱。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money that you owe', cn: '债务、欠别人的钱', correct: true, reason: 'in debt 就是“欠着钱”，up to my neck 夸张地说欠得太多。' },
          { key: 'B', en: 'a monthly salary', cn: '每个月的工资', correct: false, reason: '工资是 income 或 salary；debt 是你欠出去的，不是挣进来的。' },
          { key: 'C', en: 'a type of insurance', cn: '一种保险', correct: false, reason: '保险是 insurance，和“欠债”没有关系。' }
        ],
        analysis: 'debt 是“欠债”。她不是诉苦，只是在说明：再难，家里那份钱也不能断。',
        wrongFeedback: '你以为是工资，顺口说“那你还挺宽裕”，她沉默了很久，气血 -10。',
        afterCorrect: '姜黎站在楼梯拐角听见了这句，没有出声。第二天助理多订了一份饭，说是订错了，让沈知夏帮忙吃掉。'
      }
    ],
    completeText: '第二章结束。姜黎记住了这个替身的名字——不是从演员表上，是从那张被砍掉三成的结账单上。'
  },
  {
    id: 'df_3',
    index: 3,
    title: '第 3 章 · 发薪日之前',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '发薪日是十五号，财务却说新人要压到下个月。沈知夏坐在片场台阶上算账：房租、水电、母亲的药费，还有那台总在关键时刻死机的旧手机。她把数字写了两遍，两遍都差一点。',
    questions: [
      {
        plotDescription: '财务把转账截图发过来，比说好的少了一截，理由是新人第一个月按比例算。',
        line: "My paycheck doesn't even cover the hospital bill this month.",
        lineCn: '我这个月的薪水连医药费都不够付。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bill you have to pay', cn: '一笔要付的账单', correct: false, reason: '账单是 bill；paycheck 是钱进你口袋，不是往外付。' },
          { key: 'B', en: 'a bank statement', cn: '银行流水单', correct: false, reason: '流水只是记录，paycheck 是实打实到手的工资。' },
          { key: 'C', en: 'the money you get from a job', cn: '薪水、到手的工资', correct: true, reason: 'paycheck 原指工资支票，口语里就是“这次的工资”。' }
        ],
        analysis: 'paycheck 是“到手的工资”。她说的是收入不够付支出，不是在念一张账单。',
        wrongFeedback: '你把工资听成账单，跟财务吵了半天“我什么时候欠钱了”，气血 -10。',
        afterCorrect: '财务被她问得发懵，最后补了一句：“下个月一起算。”她点头，把截图存好，转身时正好撞上姜黎的目光。'
      },
      {
        plotDescription: '手机在口袋里震个不停，全是缴费提醒，最后一条写着逾期将停水。',
        line: "The bills keep piling up, and I keep pretending I don't see them.",
        lineCn: '账单越堆越多，我就一直假装没看见。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'requests for money you must pay', cn: '账单、必须缴的费用', correct: true, reason: 'bills 在生活里多指水电、房租、医药这类要付的账。' },
          { key: 'B', en: 'paper money in your wallet', cn: '钱包里的纸币', correct: false, reason: '纸币是 cash 或 notes；bills 在这里是你欠别人的钱。' },
          { key: 'C', en: 'letters from old friends', cn: '老朋友寄来的信', correct: false, reason: '信件是 letters，和“催缴费”不是一回事。' }
        ],
        analysis: 'bills 是“账单”。keep piling up 是越堆越高，她把它们压下去，也把生活压下去。',
        wrongFeedback: '你以为是信件，还笑着说“谁给你写信啊”，她扯了扯嘴角没说话，气血 -10。',
        afterCorrect: '姜黎从她身边经过，脚步慢了一下：“欠费的号码，我可以让助理转成公司代缴。”沈知夏摇头：“不用，我自己能扛。”'
      },
      {
        plotDescription: '散场后，一个群演拉住她，说微信转不了，问能不能用现钱换一下。',
        line: "I only have cash on me. No phone, no card, just this.",
        lineCn: '我身上只有现金，没手机没卡，就这些。',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'money kept in a bank account', cn: '存在银行账户里的钱', correct: false, reason: '账户里的钱要刷卡；cash 恰恰是拿出来就能用的现钱。' },
          { key: 'B', en: 'physical money, coins and notes', cn: '现金、纸钞和硬币', correct: true, reason: 'cash 指看得见摸得着的钱，所以她强调没有手机和卡。' },
          { key: 'C', en: 'a coupon or voucher', cn: '优惠券或代金券', correct: false, reason: '券不能当钱找开，cash 是可以直接交易的现钞。' }
        ],
        analysis: 'cash 是“现钱”。她强调 only cash，是说自己连电子支付的门槛都过不去。',
        wrongFeedback: '你以为她说的是存款，回了一句“那你挺有钱”，她愣了半天，气血 -10。',
        afterCorrect: '群演接过钱，数了两遍才走。沈知夏把剩下的零钞按面值叠好，最上面那张是母亲的药费，她记得每一个数字。'
      },
      {
        plotDescription: '中介发来消息，说可以“先借一笔周转”，利息写在最后一行，小得几乎看不清。',
        line: "A loan with that interest? I'd be paying it off for ten years.",
        lineCn: '利息那么高的贷款？我得还十年。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money borrowed that must be paid back', cn: '贷款、要还的借款', correct: true, reason: 'loan 的核心是“借了要还”，而且通常带利息。' },
          { key: 'B', en: 'a gift from a friend', cn: '朋友送的一笔钱', correct: false, reason: '礼物不用还；loan 是必须还的，这是关键区别。' },
          { key: 'C', en: 'a bonus from work', cn: '工作拿到的奖金', correct: false, reason: '奖金是白给的，loan 是借来的，还要付利息。' }
        ],
        analysis: 'loan 是“借款”。她一眼看穿这笔钱会把她绑住十年，所以宁可继续熬。',
        wrongFeedback: '你以为是奖金，兴冲冲点了同意，利息像雪球一样滚起来，气血 -10。',
        afterCorrect: '她删掉对话框，把手机反扣在膝盖上。姜黎的声音从背后传来：“缺钱可以跟剧组预支，不用碰那种东西。”她没回头：“预支的也是要还的。”'
      }
    ],
    completeText: '第三章结束。她算完最后一笔账，发现这个月还差四百二十块，刚好是一场坠马戏的价钱。'
  },
  {
    id: 'df_4',
    index: 4,
    title: '第 4 章 · 便宜的替身',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎的休息室堆着品牌方送来的衣服，标签都没剪。助理说，替身那姑娘的护膝是网上淘的便宜货，摔一次就开线，她自己拿胶带缠了三圈。姜黎翻剧本的手停住了。',
    questions: [
      {
        plotDescription: '助理把那双开线的护膝放在桌上，语气里带着点不以为然。',
        line: "Those pads are cheap, but they're all she can get.",
        lineCn: '那副护具很便宜，可她也只买得起这个。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'stingy with money', cn: '为人抠门、舍不得花钱', correct: false, reason: 'cheap 形容人才是“抠门”，这里形容护具，说的是价格低。' },
          { key: 'B', en: 'low in price', cn: '便宜的、价格低廉的', correct: true, reason: 'cheap 修饰物品就是“便宜”，重点在标价，不在人品。' },
          { key: 'C', en: 'free of charge', cn: '完全免费、不要钱', correct: false, reason: '免费是 free；cheap 只是便宜，还是要花钱买。' }
        ],
        analysis: 'cheap 形容东西是“便宜”，形容人才是“抠”。姜黎听到的不是“抠”，是“买不起更好的”。',
        wrongFeedback: '你把它当成抠门，跟着骂了句“真抠”，姜黎抬眼看你，一句话没说，气血 -10。',
        afterCorrect: '姜黎把护膝翻过来，看了看那三圈胶带，让助理去买一副新的。“别说是剧组发的，”她顿了顿，“就说品牌多送了一副。”'
      },
      {
        plotDescription: '助理说可以给她排两天假养伤，沈知夏却摇头，说了一句让姜黎记很久的话。',
        line: "I can't afford to get hurt. A week off means no pay at all.",
        lineCn: '我伤不起。休息一周就一分钱都没有。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'refuse to do something', cn: '拒绝做某件事', correct: false, reason: 'afford 不是“拒绝”，它讲的是“有没有能力承担”。' },
          { key: 'B', en: 'be allowed to do something', cn: '被允许做某事', correct: false, reason: '许可用 be allowed to；afford 说的是代价，不是规矩。' },
          { key: 'C', en: 'be able to bear the cost or result', cn: '承担得起（代价或后果）', correct: true, reason: 'afford 不只指买得起，也指“承受得起后果”，她怕的是停工断粮。' }
        ],
        analysis: 'afford 后面接的不一定是东西，也可以是受伤、休息这种代价。她不是不怕疼，是怕没饭吃。',
        wrongFeedback: '你听成“不允许受伤”，还回了句“谁允许你受伤了”，她眼神一下冷了，气血 -10。',
        afterCorrect: '姜黎沉默几秒，说：“那就别伤。”她转身吩咐场务把马换成最温的那匹，谁都听得出来，这不是商量。'
      },
      {
        plotDescription: '监视器里回放刚才那一条，导演终于点头，说这个背影能骗过所有人。',
        line: "One more take, one more bruise. For her, it's worth it.",
        lineCn: '再拍一条，再多一块淤青。对她来说，值。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough to justify the cost', cn: '值得、代价换得回来', correct: true, reason: 'worth it 是“付出和回报相抵，还赚了”，她拿身体换来了镜头。' },
          { key: 'B', en: 'extremely expensive', cn: '非常昂贵、价格很高', correct: false, reason: 'worth it 讲的是“值不值”，不是东西标价高不高。' },
          { key: 'C', en: 'completely useless', cn: '完全没有意义', correct: false, reason: '这句是肯定不是否定：她觉得这笔交换划算。' }
        ],
        analysis: 'worth it 的重点是“值”。bruise 是淤青，她拿它换一个能骗过所有人的背影，还觉得划算。',
        wrongFeedback: '你理解成“太贵了”，劝她别拍了，导演当场黑脸，她被换下一条，气血 -10。',
        afterCorrect: '姜黎把保温杯递过去：“不值得。”沈知夏接过来，喝了一口才说：“姜老师，你觉得不值得的东西，我拿它交房租。”'
      },
      {
        plotDescription: '休息时姜黎问她，既然这么难，为什么不做点别的。',
        line: "This stunt work is my side hustle. My real job pays even less.",
        lineCn: '替身这活儿是我的副业，我正经工作挣得更少。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a hobby you do for fun', cn: '纯粹为爱好的消遣', correct: false, reason: 'side hustle 是为了钱，不是消遣，也不是纯喜欢。' },
          { key: 'B', en: 'a full-time career', cn: '全职的主业', correct: false, reason: '她自己说得很清楚，这是 side，是主业之外多打的一份工。' },
          { key: 'C', en: 'an extra job to earn more money', cn: '副业、兼职挣钱', correct: true, reason: 'side hustle 就是主业之外再挣一份，通常就是为了钱。' }
        ],
        analysis: 'side hustle 是这一代人的生存词：白天一份工，晚上再打一份。她的“副业”比主业还拼命。',
        wrongFeedback: '你听成“爱好”，笑着说“挺好的”，她扯了下嘴角：“挺好的意思是，我还得再干一份。”气血 -10。',
        afterCorrect: '姜黎合上剧本：“我拍这部戏的片酬，够你打十年工。”沈知夏低头系护膝：“那是你的十年，不是我的。”'
      }
    ],
    completeText: '第四章结束。那天收工，沈知夏的护膝换成了新的。她问是谁买的，场务说不知道，只知道盒子上没有价签。'
  },
  {
    id: 'df_5',
    index: 5,
    title: '第 5 章 · 卡里只剩两位数',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '群演公司按最低工资结钱，扣完管理费只剩零头。沈知夏在便利店刷了三次卡都没过，收银员抬眼看了她一下。她想给母亲攒手术费，可每个月都在透支，账本上那道缺口怎么填都填不平。',
    questions: [
      {
        plotDescription: '结账单上写着按最低标准结算，后面还跟了一行管理费。',
        line: "They pay minimum wage and call it an opportunity.",
        lineCn: '他们给最低工资，还说这是机会。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest pay allowed by law', cn: '法定最低工资', correct: true, reason: 'minimum 是“最低”，指法律允许的最低报酬标准。' },
          { key: 'B', en: 'a very high salary', cn: '非常高的薪水', correct: false, reason: 'minimum 是“最低”不是“最高”，意思正好相反。' },
          { key: 'C', en: 'extra pay for night shifts', cn: '上夜班的额外补贴', correct: false, reason: '这里说的是整份工的底薪，不是某一项补贴。' }
        ],
        analysis: 'minimum wage 是“法定最低工资”。她这句不是在陈述，是在拆穿“机会”两个字。',
        wrongFeedback: '你听成高薪，还替公司说了句好话，她当场把结账单揉成一团，气血 -10。',
        afterCorrect: '她把结账单折好收进兜里，转身去接下一场。副导演在后面喊“替身到位”，她抬手应了一声，像在应一个不属于自己的名字。'
      },
      {
        plotDescription: '便利店的卡刷不过，她打开手机银行，看到余额前面多了个减号。',
        line: "I hit an overdraft last week. Ten yuan short, and the card froze.",
        lineCn: '上周我透支了，就差十块钱，卡都被冻了。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a large amount of savings', cn: '一大笔存款', correct: false, reason: 'overdraft 是“花超了”，和存款正好相反。' },
          { key: 'B', en: 'a loan for buying a house', cn: '买房贷款', correct: false, reason: '房贷是 mortgage；overdraft 是账户被扣成负数。' },
          { key: 'C', en: 'spending more than your account holds', cn: '账户透支、花超余额', correct: true, reason: 'overdraft 指卡里钱不够还继续扣，余额变成负数。' }
        ],
        analysis: 'overdraft 就是“刷爆了”。十块钱的缺口，能把一个人的一整天卡死。',
        wrongFeedback: '你以为是存款，笑着说“那你还挺有钱”，收银员都替她尴尬，气血 -10。',
        afterCorrect: '她退掉手里的面包，只留了一瓶水。走出便利店时手机响了，是医院打来的，说下个月的床位可以先留着。'
      },
      {
        plotDescription: '夜里她坐在楼梯间，把每笔收入写进旧本子，最上面一行写着手术。',
        line: "I'm saving up for my mom's surgery. Every take counts.",
        lineCn: '我在给我妈攒手术费，每一条戏都算数。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'spending money quickly', cn: '很快地把钱花掉', correct: false, reason: 'save up 是“攒”，不是“花”，方向完全相反。' },
          { key: 'B', en: 'putting money aside over time', cn: '慢慢存钱、一点点攒', correct: true, reason: 'save up 强调长期积累，正是她在本子上做的事。' },
          { key: 'C', en: 'borrowing money from others', cn: '向别人借钱', correct: false, reason: '借钱是 borrow；save up 是自己的钱一分分留下。' }
        ],
        analysis: 'save up for 是“为某件事攒钱”。她的每一场摔，都能换算成手术费上的一个数字。',
        wrongFeedback: '你理解成乱花钱，还劝她省着点，她把本子合上，没再说话，气血 -10。',
        afterCorrect: '本子最后一页夹着一张照片，是她母亲年轻时的样子。她看了两秒就合上，起身去接下一场夜戏。'
      },
      {
        plotDescription: '一个老群演劝她，把攒的钱投进所谓内部理财，说三个月就能翻倍。',
        line: "She told me to invest in myself, not in some stranger's promise.",
        lineCn: '她让我投资自己，别去信陌生人给的承诺。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money or effort in for a return', cn: '投入钱或精力以求回报', correct: true, reason: 'invest 是有预期回报的投入，可以是钱，也可以是时间和力气。' },
          { key: 'B', en: 'waste money on useless things', cn: '把钱浪费在没用的东西上', correct: false, reason: 'invest 是有目的的投入，不是浪费。' },
          { key: 'C', en: 'lend money to a friend', cn: '把钱借给朋友', correct: false, reason: '借钱是 lend；invest 是把资源投进去等回报。' }
        ],
        analysis: 'invest in yourself 是“把钱和力气花在自己身上”。姜黎这句话，比三个月翻倍靠谱得多。',
        wrongFeedback: '你听成“借钱给朋友”，真去借了，钱到现在没要回来，气血 -10。',
        afterCorrect: '她把那笔钱转进了表演课的报名账户。付款成功的那一刻，她第一次觉得，钱花出去也可以是往前走的。'
      }
    ],
    completeText: '第五章结束。她的卡里只剩两位数，但那两位数后面，第一次跟着一个明确的去处。'
  },
  {
    id: 'df_6',
    index: 6,
    title: '第 6 章 · 报销单上的名字',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '替身的医药费要走报销，会计把单子推回来，说她没正式合同，只能算临时支出。姜黎路过财务室，看见她蹲在走廊上，一张一张地理票据，理得比账本还整齐。',
    questions: [
      {
        plotDescription: '会计指着单子最下面一行，说这笔钱要先扣掉一部分。',
        line: "Half of that number is tax. Nobody tells you that in the beginning.",
        lineCn: '那数字里一半是税，一开始没人告诉你。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'a tip for good service', cn: '给服务的小费', correct: false, reason: '小费是 tip，给个人；tax 是按比例上缴的。' },
          { key: 'B', en: 'money paid to the government', cn: '税、上缴政府的钱', correct: true, reason: 'tax 按收入或消费上缴，会直接从报酬里扣掉一部分。' },
          { key: 'C', en: 'a fee for using a card', cn: '刷卡的手续费', correct: false, reason: '手续费是 fee；tax 是按规则上缴的钱，不是银行收的。' }
        ],
        analysis: 'tax 是“税”。她说“没人一开始告诉你”，指的是这行的隐形扣款。',
        wrongFeedback: '你听成小费，还问“给谁的小费”，会计冷笑了一声，气血 -10。',
        afterCorrect: '姜黎伸手把单子拿过去，看了一眼：“她的税按剧组人员走，我来签。”会计张了张嘴，最后什么也没说。'
      },
      {
        plotDescription: '前一天买的护具尺寸不对，她拎着袋子站在店门口，反复看小票。',
        line: "I asked for a refund on the pads. They said no because I opened them.",
        lineCn: '我想退护具，他们说我拆了包装就不给退。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'a discount for your next purchase', cn: '下次购买时的折扣', correct: false, reason: 'refund 是把钱退回来，不是给你下次的优惠。' },
          { key: 'B', en: 'a repair service', cn: '一项维修服务', correct: false, reason: '她要的是退钱，不是把东西修好。' },
          { key: 'C', en: 'money given back when you return something', cn: '退货退款、退回的钱', correct: true, reason: 'refund 就是东西退回去、钱退回来，拆封不退是商家规则。' }
        ],
        analysis: 'refund 的核心是“退回钱”。拆封不退是规矩，也是她这种人最容易吃到的亏。',
        wrongFeedback: '你以为是折扣，还替店家说了句“挺划算”，她拎着袋子站在原地，气血 -10。',
        afterCorrect: '姜黎的助理从后面走过来，报了个品牌名，店员的态度立刻变了。沈知夏没看那副新护具，只把自己的旧袋子收好。'
      },
      {
        plotDescription: '会计说，没有凭证的钱一律不认，哪怕只有两百块。',
        line: "Keep the receipt. Without it, they won't even look at you.",
        lineCn: '把收据留着。没有它，人家连看都不会看你一眼。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'proof that you paid', cn: '付款凭证、收据', correct: true, reason: 'receipt 就是证明你付过钱的纸，报销全靠它。' },
          { key: 'B', en: 'a written apology', cn: '一封书面道歉信', correct: false, reason: '道歉信是 apology；receipt 只和钱有关。' },
          { key: 'C', en: 'a note from a doctor', cn: '医生开的证明', correct: false, reason: '医生证明是 medical note，不是消费凭证。' }
        ],
        analysis: 'receipt 是“凭证”。在这套流程里，它比事实重要：没有那张纸，就等于什么都没发生。',
        wrongFeedback: '你把收据当成道歉信，等着对方道歉，等到收工也没人来，气血 -10。',
        afterCorrect: '沈知夏把每张小票按日期排好，用回形针别住。姜黎站在门口看了会儿，说：“你比我助理还会整理。”'
      },
      {
        plotDescription: '收工后两人在路边小店吃面，姜黎结账时多放了一张钞票在桌上。',
        line: "She left a tip bigger than the meal itself.",
        lineCn: '她留的小费比那顿饭还贵。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written comment', cn: '一条书面评价', correct: false, reason: 'tip 在饭桌上不是“建议”，是给服务员的一笔钱。' },
          { key: 'B', en: 'a bill to be paid later', cn: '一张以后付款的欠条', correct: false, reason: '小费是当场留下的钱，不是赊账。' },
          { key: 'C', en: 'extra money for the service', cn: '给服务员的小费', correct: true, reason: 'tip 就是额外留给服务人员的钱，通常按比例给。' }
        ],
        analysis: 'tip 是“小费”。姜黎不是不会算账，她是想用最不伤人的方式，多给那家店一点钱。',
        wrongFeedback: '你以为是评价，认真地写了三行字，老板娘看着那张纸哭笑不得，气血 -10。',
        afterCorrect: '沈知夏低声说太多了，姜黎把找零推回去：“老板的女儿在学表演，我认得她。”她没再说下去，低头吃完了那碗面。'
      }
    ],
    completeText: '第六章结束。那张报销单最后被签了字，签名很漂亮，落款却不是沈知夏的名字。'
  },
  {
    id: 'df_7',
    index: 7,
    title: '第 7 章 · 她被录用了',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '制片看完样片，说这个替身的背影有戏，当场拍板签下整部戏。同组另一个武替却因为提了句安全绳，被通知明天不用来了。老群演把手套一摘，说他也不干了。片场一下安静得只剩风声。',
    questions: [
      {
        plotDescription: '制片把合同推过来，笔帽都没盖，像是怕她反悔。',
        line: "They hired me for the whole shoot. Ninety days, no gaps.",
        lineCn: '他们雇了我整个拍摄期，九十天，不断档。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'officially employ someone', cn: '正式雇佣、录用', correct: true, reason: 'hire 是“雇人”，这里指剧组正式签下她九十天。' },
          { key: 'B', en: 'invite someone to dinner', cn: '请某人吃饭', correct: false, reason: 'hire 跟吃饭无关，它的核心是“雇”，不是请客。' },
          { key: 'C', en: 'rent something for a short time', cn: '短时间租用某样东西', correct: false, reason: '租东西是 rent；hire 人在这里是“雇用”。' }
        ],
        analysis: 'hire 是“雇佣”。九十天不断档，对她来说不是一份工作，是九十天的饭钱和药费。',
        wrongFeedback: '你听成请吃饭，还问她“请谁”，制片把合同收了回去，气血 -10。',
        afterCorrect: '她签字时手很稳，写完才发现自己屏了很久的气。制片拍拍她肩：“好好干，别出岔子。”她点头，心里想的是那九十天的账。'
      },
      {
        plotDescription: '走廊尽头，另一个武替抱着纸箱出来，安全绳的事没人再提。',
        line: "They fired him for asking about the safety rope.",
        lineCn: '他们把他解雇了，就因为他问了句安全绳。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'praised him publicly', cn: '公开表扬了他', correct: false, reason: 'fire 在这里是“开除”，和表扬正好相反。' },
          { key: 'B', en: 'dismissed him from the job', cn: '解雇、让他丢掉工作', correct: true, reason: 'fire someone 就是让他失去工作，所以他抱着纸箱走。' },
          { key: 'C', en: 'moved him to another team', cn: '把他调去别的组', correct: false, reason: '调岗不是 fire；fire 是直接不要这个人了。' }
        ],
        analysis: 'fire 是“解雇”。他不是做错事，是问了不该问的问题，这才是最让人发冷的地方。',
        wrongFeedback: '你听成表扬，还笑着说“那不是挺好”，那人抱着箱子从你身边走过，气血 -10。',
        afterCorrect: '沈知夏追出去两步，又停下。那人回头看她一眼：“别学我。”纸箱里露出一截磨破的安全绳，她记住了那个颜色。'
      },
      {
        plotDescription: '老群演在门口抽完最后一口烟，把手套塞进她手里。',
        line: "If they don't change that rope by Friday, I quit.",
        lineCn: '周五之前他们不换那根绳子，我就辞职。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'complain quietly', cn: '小声抱怨几句', correct: false, reason: 'quit 不是抱怨，是“不干了”，是带行动的。' },
          { key: 'B', en: 'ask for more money', cn: '要求涨工资', correct: false, reason: '他说的是安全，不是钱；quit 是走人。' },
          { key: 'C', en: 'leave your job on purpose', cn: '主动辞职、不干了', correct: true, reason: 'quit 是自己提出不干，不是被开除，是主动离开。' }
        ],
        analysis: 'quit 是主动离开。老一辈的替身不讲道理，只讲底线：绳子不换，人就走。',
        wrongFeedback: '你听成抱怨，还劝他忍忍，他把手套收回去，什么也没留给你，气血 -10。',
        afterCorrect: '周五那根绳子真的换了。老群演没回来，只在群里发了句“替身也是人”。沈知夏把那副手套戴上，尺寸刚好。'
      },
      {
        plotDescription: '制片主任说，下一部戏可以给她挂个武替组长的名头。',
        line: "A promotion here just means your name shows up in the credits.",
        lineCn: '在这儿升职，只意味着你的名字能出现在片尾。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a punishment for mistakes', cn: '犯错之后的惩罚', correct: false, reason: 'promotion 是往上走，不是受罚，方向不同。' },
          { key: 'B', en: 'a move to a higher position', cn: '升职、职位往上提', correct: true, reason: 'promotion 就是职位升高，哪怕这里只多了一行字幕。' },
          { key: 'C', en: 'a longer working contract', cn: '一份更长的合同', correct: false, reason: '合同变长不等于升职；promotion 指位置变了。' }
        ],
        analysis: 'promotion 是“升职”。在这行，升职不加钱，只加一行字幕，但她还是想看见自己的名字。',
        wrongFeedback: '你听成惩罚，脸一下白了，制片主任以为你不愿意，把名额给了别人，气血 -10。',
        afterCorrect: '她问能不能把名字写全，不要只写“替身 B”。主任笑了：“你倒是第一个提这要求的。”她说：“那我当第一个。”'
      }
    ],
    completeText: '第七章结束。那天夜里，她第一次在手机上搜自己的名字，搜索结果为零，但她还是截了图。'
  },
  {
    id: 'df_8',
    index: 8,
    title: '第 8 章 · 拍到凌晨三点',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '投资方临时改档期，整部戏要提前两周杀青。通告单从一天八场变成十四场，姜黎的替身跟着连轴转。凌晨三点，片场还亮着两盏大灯，马在棚里不安地刨着地。',
    questions: [
      {
        plotDescription: '场务在通告单背面记时间，记到一半笔没水了。',
        line: "Three hours of overtime, and nobody wrote it down.",
        lineCn: '三个小时加班，没一个人记下来。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'a break between scenes', cn: '两场戏之间的休息', correct: false, reason: 'overtime 是“超出正常工时”，不是休息，别听反了。' },
          { key: 'B', en: 'a salary increase', cn: '一次涨薪', correct: false, reason: '加班不等于加钱；这里恰恰是加了班也没被记。' },
          { key: 'C', en: 'extra hours beyond normal work time', cn: '加班、超时工作的时间', correct: true, reason: 'overtime 就是正常工时之外多干的那几个小时。' }
        ],
        analysis: 'overtime 是“加班”。她说的不是累，是这三个小时最后不算钱。',
        wrongFeedback: '你听成休息，还说了句“那挺爽”，场务抬头看了你一眼，气血 -10。',
        afterCorrect: '姜黎把自己的时间表递过去：“从我这边扣，记她名下。”场务愣住，笔尖在纸上停出一个黑点。'
      },
      {
        plotDescription: '制片在群里发消息，说上线日期提前，所有人都得往前赶。',
        line: "The deadline moved up two weeks. Of course it did.",
        lineCn: '死线提前了两周。意料之中。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the final time something must be finished', cn: '最后期限、死线', correct: true, reason: 'deadline 是“必须完成的最后时间”，move up 就是提前。' },
          { key: 'B', en: 'a line drawn on the floor', cn: '地上画的一条线', correct: false, reason: 'deadline 不是实体的线，是时间上的界限。' },
          { key: 'C', en: 'a break in the schedule', cn: '档期里的空档', correct: false, reason: '它不是空出来的时间，是最晚必须交工的那一刻。' }
        ],
        analysis: 'deadline 是“死线”。moved up 是提前不是推迟，所以那句 Of course it did 才这么疲惫。',
        wrongFeedback: '你以为是延期，松了口气，结果第二天通告翻倍，气血 -10。',
        afterCorrect: '姜黎把通告单折成两半：“提前两周，钱不加，人不变。你去告诉他们，我只看结果。”'
      },
      {
        plotDescription: '投资方的车停在片场外，来人下车先看了一眼表。',
        line: "The client wants the horse scene reshot. Today.",
        lineCn: '客户要求重拍马戏，就今天。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who works on the crew', cn: '剧组里的工作人员', correct: false, reason: 'client 是出钱的那一方，不是被雇来干活的人。' },
          { key: 'B', en: 'the person or company paying for the work', cn: '客户、出钱的甲方', correct: true, reason: 'client 就是付钱买服务的人，在这里是投资方。' },
          { key: 'C', en: 'a journalist covering the shoot', cn: '来采访的记者', correct: false, reason: '记者是 reporter；client 是掏钱的甲方。' }
        ],
        analysis: 'client 是“客户、甲方”。一句 today，意味着所有替身要再摔一遍。',
        wrongFeedback: '你听成剧组同事，还去跟他商量排班，他连正眼都没给你，气血 -10。',
        afterCorrect: '姜黎站起来：“马可以重拍，人不行。今天谁上，先让医生签字。”投资方的人第一次把表收了起来。'
      },
      {
        plotDescription: '凌晨四点，会议室的门开着，桌上摆着一排凉透的咖啡。',
        line: "There's a meeting at six. Bring the schedule, not your opinions.",
        lineCn: '六点开会，带上排期表，别带你的意见。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a party after shooting', cn: '杀青之后的聚会', correct: false, reason: 'meeting 是“会议”，是谈事的，不是庆祝。' },
          { key: 'B', en: 'a medical checkup', cn: '一次身体检查', correct: false, reason: '体检是 checkup，和工作会议无关。' },
          { key: 'C', en: 'a formal gathering to discuss work', cn: '开会、正式的工作会议', correct: true, reason: 'meeting 是为工作聚在一起谈事，所以还要带材料。' }
        ],
        analysis: 'meeting 是“会”。Bring the schedule, not your opinions 把规则说得很清楚：只要数据，不要态度。',
        wrongFeedback: '你听成聚会，穿着便服就去了，推开门发现满桌合同，气血 -10。',
        afterCorrect: '沈知夏抱着一摞通告单站在门口，眼睛下面全是青的。姜黎抬手示意她坐下，第一次在会议上替她留了一个位置。'
      }
    ],
    completeText: '第八章结束。天亮的时候，马戏还剩最后一个镜头，所有人都没说话，只有灯还亮着。'
  },
  {
    id: 'df_9',
    index: 9,
    title: '第 9 章 · 马背上的三秒钟',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那匹马在第三次起跑时突然受惊。沈知夏记得自己被甩出去，记得半空里看见的那盏灯，然后就什么都不知道了。醒来时，她听见的第一句话，是有人在门外说这个项目不能停。',
    questions: [
      {
        plotDescription: '病房外，制片的声音隔着门板传进来，一句比一句急。',
        line: "One fall, and suddenly the whole project is my fault.",
        lineCn: '摔了一次，整个项目就都成我的错了。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person in charge of money', cn: '负责管钱的人', correct: false, reason: 'project 是“项目”，不是人，不能指负责人。' },
          { key: 'B', en: 'a planned piece of work with a goal', cn: '项目、有目标的整体工作', correct: true, reason: 'project 指有计划有目标的一整件事，这里就是这部戏。' },
          { key: 'C', en: 'a kind of insurance claim', cn: '一份保险理赔', correct: false, reason: '理赔是 claim；project 指的是这部戏本身。' }
        ],
        analysis: 'project 是“项目”。一个人摔下来，最先被讨论的不是她的骨头，是项目能不能继续。',
        wrongFeedback: '你听成负责人，跟着找人理论，找错了对象，制片当场变脸，气血 -10。',
        afterCorrect: '她撑着床沿坐起来，肋骨像被人从里面顶了一下。门外安静了，接着是姜黎的声音：“项目停不停，先看她能不能站起来。”'
      },
      {
        plotDescription: '制片助理进来放下一张纸，说剧组已经做出决定，让她签个字。',
        line: "They fired me before the ambulance even left.",
        lineCn: '救护车还没走，他们就把我开了。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'moved to a better role', cn: '被调去更好的角色', correct: false, reason: 'fire 是丢掉工作，不是升迁，方向完全反了。' },
          { key: 'B', en: 'paid for the injury', cn: '为伤势赔了钱', correct: false, reason: '这里她什么都没拿到，fire 是“被开除”。' },
          { key: 'C', en: 'dismissed from the job', cn: '被解雇、被开掉', correct: true, reason: 'fire someone 是让他失去工作，这里是还没治好就先被辞。' }
        ],
        analysis: 'fire 是“解雇”。时间点才是最狠的：救护车还没开走，人已经被划掉了。',
        wrongFeedback: '你听成升职，还劝她别难过，她把那张纸攥皱了，气血 -10。',
        afterCorrect: '姜黎把那张纸拿过去，看了一眼就撕了：“她还在合同期内。要么赔，要么等我律师来。”助理站在原地，没敢捡。'
      },
      {
        plotDescription: '制片主任进来打圆场，说这行的规矩就是这样，谁都不容易。',
        line: "This is show business. Nobody apologizes, they just replace you.",
        lineCn: '这就是演艺圈。没人道歉，他们只是把你换掉。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'the industry of making films and shows', cn: '影视行业、演艺这一行', correct: true, reason: 'show business 就是“演艺圈”，这里指这行的运作方式。' },
          { key: 'B', en: 'a small shop run by a family', cn: '一家家庭小商店', correct: false, reason: 'business 在这里不是小店，是“这一行”。' },
          { key: 'C', en: 'a private personal matter', cn: '一件私人的事', correct: false, reason: '她恰恰是在说：这不是私事，是行业的规则。' }
        ],
        analysis: 'business 在这里指“行业”。show business 不是“表演生意”，是只认结果、不认人的规则。',
        wrongFeedback: '你听成小商店，还问“哪家店”，主任愣了一下，觉得你根本不在状况，气血 -10。',
        afterCorrect: '姜黎冷笑一声：“规矩是死人写的，活人可以改。”她说完就往外走，高跟鞋敲在走廊上，一声一声。'
      },
      {
        plotDescription: '傍晚，制片拿着一份协议进来，说签了它医药费全包，别的就别提了。',
        line: "Sign this deal and we'll cover the hospital. That's the offer.",
        lineCn: '签了这份协议，医药费我们全包。就这个条件。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious injury', cn: '一次严重的伤', correct: false, reason: 'deal 是“交易、协议”，不是伤情本身。' },
          { key: 'B', en: 'an agreement between two sides', cn: '交易、双方谈妥的协议', correct: true, reason: 'deal 就是双方交换条件，这里是拿沉默换医药费。' },
          { key: 'C', en: 'a court punishment', cn: '法院给出的判罚', correct: false, reason: '这不是判决，是私下谈的条件。' }
        ],
        analysis: 'deal 是“交易”。她听懂了：这份协议买的不是她的伤，是她的嘴。',
        wrongFeedback: '你听成伤情，还问“伤到哪儿了”，制片把协议往前推了推，气血 -10。',
        afterCorrect: '沈知夏看着那张纸，忽然问：“如果我签了，是不是以后谁摔下来，都只能拿到这一张纸？”病房里安静得能听见输液的声音。'
      }
    ],
    completeText: '第九章结束。她最后没有签。那天夜里，她第一次觉得自己不是替身，是一个不肯被替换掉的人。'
  },
  {
    id: 'df_10',
    index: 10,
    title: '第 10 章 · 合同第十三条',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎把剧组那份合同带回病房，翻到第四页，指着第十三条给律师看。条款写得很客气：所有特技风险由演员本人承担。她又让人把整部戏的账本调了出来。',
    questions: [
      {
        plotDescription: '律师把合同摊在病床的小桌板上，纸边还带着咖啡印。',
        line: "Read the contract again. Page four, the part they skipped.",
        lineCn: '把合同再读一遍，第四页，他们跳过去的那部分。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written legal agreement', cn: '合同、具有法律效力的书面协议', correct: true, reason: 'contract 是签字就要负责的书面约定，这里指剧组那份。' },
          { key: 'B', en: 'a list of shooting locations', cn: '拍摄地点清单', correct: false, reason: '地点清单只是排期的一部分，不是 contract。' },
          { key: 'C', en: 'a letter of recommendation', cn: '一封推荐信', correct: false, reason: '推荐信不约束双方，contract 才约束。' }
        ],
        analysis: 'contract 是“合同”。第十三条不是疏忽，是故意写得客气，让人不好意思细看。',
        wrongFeedback: '你听成地点清单，还问“明天去哪拍”，律师抬头看了你一眼，气血 -10。',
        afterCorrect: '沈知夏一行一行读下去，读到本人自愿承担一切风险时停住了。姜黎说：“这句，是他们在你摔之前就写好的。”'
      },
      {
        plotDescription: '账本上的数字一路往上，最后一行却写着特技组支出为零。',
        line: "The film made a fortune. The profit never reached the people who fell.",
        lineCn: '这部戏赚翻了，可利润从来到不了那些摔下来的人手里。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loss in the accounts', cn: '账面上的亏损', correct: false, reason: 'profit 是赚到的钱，和亏损正好相反。' },
          { key: 'B', en: 'the cost of making a film', cn: '拍摄一部戏的成本', correct: false, reason: '成本是 cost；profit 是扣掉成本后剩下的那部分。' },
          { key: 'C', en: 'money gained after costs are paid', cn: '利润、扣完成本赚到的钱', correct: true, reason: 'profit 是收入减去成本后的盈余，这里指这部戏赚的钱。' }
        ],
        analysis: 'profit 是“利润”。她指的不是账本上的总数，是这笔钱流向了谁、又绕开了谁。',
        wrongFeedback: '你听成亏损，还安慰她“亏了就亏了”，她把账本合上，气血 -10。',
        afterCorrect: '姜黎把账本推到一边：“从今天起，特技组的账我盯。”她顿了顿，“他们摔下来的每一条，都要有名字。”'
      },
      {
        plotDescription: '经纪人在电话那头劝她别冲动，说这部戏的奖金还没到账。',
        line: "I'm giving my bonus to the stunt team. All of it.",
        lineCn: '我要把我的奖金给特技组，全部。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fine for breaking rules', cn: '违规之后的罚款', correct: false, reason: 'bonus 是额外奖励，不是罚款，方向正好相反。' },
          { key: 'B', en: 'extra money given for good work', cn: '奖金、额外的奖励', correct: true, reason: 'bonus 是正常报酬之外的奖励，这里指这部戏的分红。' },
          { key: 'C', en: 'a monthly fixed payment', cn: '每月固定的工资', correct: false, reason: '固定工资是 salary；bonus 是额外那一笔。' }
        ],
        analysis: 'bonus 是“奖金”。她把这笔钱给出去，不是慈善，是把账算回该拿的人身上。',
        wrongFeedback: '你听成罚款，还替她心疼，她笑了一下：“我自愿的。”气血 -10。',
        afterCorrect: '经纪人沉默很久，说这会得罪人。姜黎答：“我已经得罪过了。”她挂掉电话，把转账截图发进了特技组的群。'
      },
      {
        plotDescription: '律师拟好补充条款，把最后一条念给她听。',
        line: "Her salary gets doubled, and it comes out of mine.",
        lineCn: '她的薪资翻倍，从我的里面扣。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed pay for a job', cn: '薪资、按岗位发的固定报酬', correct: true, reason: 'salary 是按岗位定期支付的报酬，这里指替身的正式工资。' },
          { key: 'B', en: 'a one-time reward', cn: '一次性的奖励', correct: false, reason: '一次性的是 bonus；salary 是按期发的。' },
          { key: 'C', en: 'money paid for medical costs', cn: '看病要付的医药费', correct: false, reason: '医药费是 medical bill，salary 是劳动报酬。' }
        ],
        analysis: 'salary 是“薪资”。翻倍不是恩赐，是把原本被压低的那部分还回来。',
        wrongFeedback: '你听成医疗费，还问“那医药费谁出”，律师只好又念了一遍，气血 -10。',
        afterCorrect: '沈知夏想说什么，被姜黎打断：“别谢我。这是你摔出来的价。”窗外的天亮了，第一缕光落在合同第十三条上。'
      }
    ],
    completeText: '第十章结束。补充条款签完那天，她在片场的名字从替身 B 变成了沈知夏，三个字写得很小，但她看清了。'
  },
  {
    id: 'df_11',
    index: 11,
    title: '第 11 章 · 病房里的那碗粥',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎在病房守了一夜，粥是从家里带来的，还温着。沈知夏睁眼时，看见影后坐在塑料椅上，外套盖在她腿边。走廊里传来压低的争吵声，是姜黎的经纪人在打电话，声音一句比一句急。',
    questions: [
      {
        plotDescription: '沈知夏听见姜黎在走廊尽头说话，语气压得很低，却每个字都硬。',
        line: "She's pissed off at the producer. I've never heard her talk like that.",
        lineCn: '她对制片人火大得很，我从没听她用那种语气说话。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly confused', cn: '有点困惑、没搞明白', correct: false, reason: 'pissed off 是情绪，不是疑惑；她不是没听懂，是很生气。' },
          { key: 'B', en: 'very angry', cn: '非常生气、火大', correct: true, reason: 'be pissed off 就是“气炸了”，语气比 angry 更口语更重。' },
          { key: 'C', en: 'a little drunk', cn: '喝得有点醉', correct: false, reason: 'pissed 单独用可指喝醉，但加了 off 就是“发火”。' }
        ],
        analysis: 'pissed off 是“火大”。她不是在猜测，是第一次听见那个人为自己说话。',
        wrongFeedback: '你听成喝醉了，还劝她别喝太多，姜黎回过头，眼神冷得吓人，气血 -10。',
        afterCorrect: '姜黎挂了电话进来，像什么都没发生，把粥推到她面前：“医生说先吃点东西。”沈知夏看着碗，忽然不敢问那通电话是为谁打的。'
      },
      {
        plotDescription: '手机在枕头下面震了一下，是助理发来的消息，只有一张模糊的照片。',
        line: "Don't freak out, but the press got a photo of us last night.",
        lineCn: '别抓狂，但昨晚我们被拍到照片了。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'become very happy', cn: '变得特别高兴', correct: false, reason: '这里不是报喜，是提前打招呼：要出事了。' },
          { key: 'B', en: 'fall asleep suddenly', cn: '突然睡着', correct: false, reason: 'freak out 是情绪失控，不是犯困。' },
          { key: 'C', en: 'panic or lose control', cn: '崩溃、抓狂、情绪失控', correct: true, reason: 'freak out 指被吓到或急到控制不住，符合照片曝光的语境。' }
        ],
        analysis: 'freak out 是“抓狂”。她先说别抓狂，就说明这件事足够让人抓狂。',
        wrongFeedback: '你听成“突然睡着”，还回了句“那你睡吧”，助理在电话那头沉默了三秒，气血 -10。',
        afterCorrect: '照片拍得很糊，只能看见两个人靠得很近。姜黎拿过手机看了两秒，说：“先别删，我来处理。”她的手指在屏幕上停了一下。'
      },
      {
        plotDescription: '粥喝到一半，沈知夏发现姜黎眼下也是青的，妆都没卸干净。',
        line: "You look exhausted. Sit down before you fall down.",
        lineCn: '你看起来精疲力尽了，坐下，别等摔了才坐。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely tired', cn: '精疲力尽、累到极限', correct: true, reason: 'exhausted 是“被抽干”，不是困，是身体已经到了底。' },
          { key: 'B', en: 'very hungry', cn: '非常饿', correct: false, reason: '饿是 hungry；她说的是累，看他眼下那片青就知道。' },
          { key: 'C', en: 'completely prepared', cn: '完全准备好', correct: false, reason: 'exhausted 是耗尽，不是准备充分，意思不搭。' }
        ],
        analysis: 'exhausted 是“精疲力尽”。她劝的是那个守了一夜的人，自己还躺在床上。',
        wrongFeedback: '你听成“饿了”，把粥全推给她，姜黎愣了下，说你留着自己吃，气血 -10。',
        afterCorrect: '姜黎没坐，只是把椅子往床边挪了挪：“我坐着会睡着。”沈知夏说：“那就睡。”过了很久，椅子上的人真的靠了下来。'
      },
      {
        plotDescription: '第二天早上，经纪人来送换洗衣物，一进门就皱眉。',
        line: "One glass of wine and I wake up with a hangover. Embarrassing.",
        lineCn: '一杯酒我就宿醉，真丢人。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a headache from lack of sleep', cn: '缺觉引起的头痛', correct: false, reason: 'hangover 是喝酒之后的不适，不是单纯没睡好。' },
          { key: 'B', en: 'the bad feeling after drinking too much', cn: '喝多之后的宿醉反应', correct: true, reason: 'hangover 专指饮酒后的头痛恶心，这里还带着自嘲。' },
          { key: 'C', en: 'a serious allergy', cn: '严重的过敏反应', correct: false, reason: '过敏是 allergy，和前一晚喝的酒是两回事。' }
        ],
        analysis: 'hangover 是“宿醉”。她只喝了一杯，却难受成这样，说的其实是这一夜没敢睡。',
        wrongFeedback: '你以为是过敏，赶紧叫了医生，经纪人举着保温桶站在门口，一脸莫名其妙，气血 -10。',
        afterCorrect: '姜黎把保温桶接过去，淡淡地说：“以后别喝了。”窗外的光落在她手背上，沈知夏忽然觉得，那句话像在管一个人，也像在护一个人。'
      }
    ],
    completeText: '第十一章结束。那碗粥最后剩了一半，姜黎没倒，端回去重新热了。她说浪费粮食不好，沈知夏没拆穿她。'
  },
  {
    id: 'df_12',
    index: 12,
    title: '第 12 章 · 热搜第一',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '热搜挂了一整夜，词条从影后夜会神秘人变成替身演员上位。姜黎坐在化妆间刷评论，指尖停在最脏的那一条上。沈知夏推门进来时，两个人同时僵住，谁都没先开口。',
    questions: [
      {
        plotDescription: '助理把手机递过来，热搜底下几千条评论，一条比一条难听。',
        line: "The comments are toxic. Don't read them, not tonight.",
        lineCn: '评论区有毒，别看了，今晚别看。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful and poisonous in tone', cn: '有毒的、带伤害性的', correct: true, reason: 'toxic 原指有毒，形容言论时就是“充满恶意、会伤人的”。' },
          { key: 'B', en: 'extremely funny', cn: '特别好笑', correct: false, reason: '这里没人笑得出来；toxic 是负面评价，不是有趣。' },
          { key: 'C', en: 'written by doctors', cn: '医生写的专业内容', correct: false, reason: 'toxic 和医生无关，评论区不是在讲医学。' }
        ],
        analysis: 'toxic 在网络上就是“有毒”。它不是骂人一句，是一整片让人越看越沉下去的空气。',
        wrongFeedback: '你听成好笑，还笑着念了两条，姜黎把手机扣在桌上，气血 -10。',
        afterCorrect: '姜黎把手机反扣过去，屏幕的光从指缝里漏出来。她说：“明天照常开工。”助理欲言又止，最后只把窗帘拉严了。'
      },
      {
        plotDescription: '化妆间的门开了，沈知夏站在门口，手里还拎着那副旧护膝。',
        line: "We shared an elevator and nobody said a word. So awkward.",
        lineCn: '我们同乘一部电梯，谁都没说话，尴尬死了。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'very exciting', cn: '非常刺激、让人兴奋', correct: false, reason: '这里的沉默让人难受，不是刺激，也不是期待。' },
          { key: 'B', en: 'quite dangerous', cn: '相当危险', correct: false, reason: 'awkward 说的是社交上的不自在，不是人身危险。' },
          { key: 'C', en: 'socially uncomfortable', cn: '尴尬、不自在', correct: true, reason: 'awkward 形容“气氛僵住、不知怎么相处”，正是电梯里那一幕。' }
        ],
        analysis: 'awkward 是“尴尬”。最难的不是被拍，是两个人明明有话，却只能在沉默里站着。',
        wrongFeedback: '你听成危险，紧张地问“谁受伤了”，姜黎看了你一眼，气血 -10。',
        afterCorrect: '沈知夏把护膝放在桌上：“热搜我看到了。”姜黎抬眼：“怕吗？”她想了想，说：“怕的是你后悔。”'
      },
      {
        plotDescription: '助理念了条评论，说替身是故意摔的，就为博影后心软。',
        line: "The way she imitated that reporter? I'm dead.",
        lineCn: '她模仿那个记者的样子？我笑死了。',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'no longer alive', cn: '已经死了（字面意思）', correct: false, reason: '字面意思是“死”，但这里不是在说生死，是在说笑。' },
          { key: 'B', en: 'laughing uncontrollably', cn: '笑死了、笑到停不下来', correct: true, reason: '口语 I am dead 表示“笑死了”，是夸张的玩笑说法。' },
          { key: 'C', en: 'completely silent', cn: '完全沉默、一声不响', correct: false, reason: 'dead 在这里不是安静，是笑到不行，语气是轻松的。' }
        ],
        analysis: 'I am dead 是网络口语里的“笑死我了”。化妆间难得有一点笑声，两个人都不敢笑太久。',
        wrongFeedback: '你按字面理解，脸都白了，问要不要叫救护车，助理笑到咳嗽，气血 -10。',
        afterCorrect: '姜黎也笑了一下，很短，像怕被人看见。笑完她把剧本翻开：“明天这场戏，你上。不是替身，是角色。”'
      },
      {
        plotDescription: '公司打来电话，说采访已经排好，让她明天出面澄清。',
        line: "She said yes to the interview. She's thrilled, apparently.",
        lineCn: '她答应采访了，据说还爽飞了。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'very worried', cn: '非常担心', correct: false, reason: 'thrilled 是高兴，不是担忧；后面那个 apparently 才是讽刺。' },
          { key: 'B', en: 'a little bored', cn: '有点无聊、提不起劲', correct: false, reason: '无聊是 bored；thrilled 是情绪高涨，正好相反。' },
          { key: 'C', en: 'extremely pleased', cn: '爽飞了、特别高兴', correct: true, reason: 'thrilled 是“兴奋到不行”，这里用 apparently 表示她并不信。' }
        ],
        analysis: 'thrilled 是“爽飞了”。姜黎复述这句时带着 apparently，说明她一个字都不信。',
        wrongFeedback: '你听成担心，还安慰她别怕，姜黎笑了下：“怕的是她。”气血 -10。',
        afterCorrect: '挂了电话，姜黎对沈知夏说：“明天你坐在我旁边。”沈知夏摇头：“我会毁了你。”姜黎答：“那就一起毁。”'
      }
    ],
    completeText: '第十二章结束。那条热搜第二天没有掉，反而更高了。只是词条下面，多了一张两个人并肩走进片场的背影照。'
  },
  {
    id: 'df_13',
    index: 13,
    title: '第 13 章 · 公关部的电话',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '公关部的电话从早上七点打到中午，说法只有一个：发声明，说那晚只是工作人员送医。沈知夏坐在楼梯间，屏幕上是姜黎的名字，她打了三次，又删了三次，最后只发过去两个字：在吗。',
    questions: [
      {
        plotDescription: '公关经理一口气说完三条要求，最后问她听清楚没有。',
        line: "Two calls, three lawyers, one statement to sign. I'm overwhelmed.",
        lineCn: '两个电话、三个律师、一份要签的声明，我压力过载了。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely relaxed', cn: '完全放松、毫无压力', correct: false, reason: 'overwhelmed 是压力到顶，和放松正好相反。' },
          { key: 'B', en: 'slightly curious', cn: '有点好奇', correct: false, reason: '她不是好奇，是被一堆事压得说不出话。' },
          { key: 'C', en: 'unable to handle so much at once', cn: '被压得喘不过气、应付不过来', correct: true, reason: 'overwhelmed 指事情太多太猛，超出承受范围。' }
        ],
        analysis: 'overwhelmed 是“压力过载”。不是一件事难，是所有事同时压下来，人连呼吸都要排队。',
        wrongFeedback: '你听成“好奇”，还问她想知道什么，公关经理直接把电话挂了，气血 -10。',
        afterCorrect: '她把手机放到膝盖上，闭眼数了十秒。再睁开时，楼梯间的灯还是那么白，她却在心里把每一条要求都拆开看了一遍。'
      },
      {
        plotDescription: '姜黎回了一个字：等我。二十分钟后，她推开了楼梯间的门。',
        line: "Just chill. We'll deal with it tomorrow, not tonight.",
        lineCn: '放松点，明天再处理，不是今晚。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm down and relax', cn: '冷静下来、放轻松', correct: true, reason: 'chill 在口语里就是“别紧张、松一点”，不是温度。' },
          { key: 'B', en: 'feel cold', cn: '觉得冷、发凉', correct: false, reason: '这里是劝人放松，不是说自己体温低。' },
          { key: 'C', en: 'leave the room', cn: '离开这个房间', correct: false, reason: '她没有让人走，她自己也坐下来了。' }
        ],
        analysis: 'chill 是“冷静、放松”。她说的是把节奏放慢，不是把问题解决掉。',
        wrongFeedback: '你听成“觉得冷”，起身去关窗，姜黎看着你，一脸无奈，气血 -10。',
        afterCorrect: '姜黎在她旁边坐下，两个人的肩膀隔着半拳距离。过了会儿，她说：“今晚什么都不发。让他们猜。”'
      },
      {
        plotDescription: '一场采访结束，沈知夏靠在走廊墙上，连手指都不想动。',
        line: "One interview and I'm drained. How do you do this every day?",
        lineCn: '一场采访我就被掏空了，你是怎么做到每天这样的？',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'well prepared', cn: '准备得很充分', correct: false, reason: 'drained 是能量被抽干，不是准备状态。' },
          { key: 'B', en: 'very popular', cn: '非常受欢迎', correct: false, reason: '她不是在说热度，是在说自己累到空了。' },
          { key: 'C', en: 'completely emptied of energy', cn: '被掏空、精力耗尽', correct: true, reason: 'drained 原指“被排干”，形容人就是一点力气都不剩。' }
        ],
        analysis: 'drained 是“被掏空”。采访不是体力活，却比摔一整天更耗人。',
        wrongFeedback: '你听成“很受欢迎”，还恭喜她，她笑都笑不出来，气血 -10。',
        afterCorrect: '姜黎递给她一瓶水：“习惯就好。”沈知夏摇头：“我不想习惯。”姜黎看了她一眼，说：“那就别习惯。”'
      },
      {
        plotDescription: '首映礼后台，姜黎对着镜子整理耳环，手指却一直没对准。',
        line: "She gets anxious before every premiere. She hides it well.",
        lineCn: '每次首映前她都会焦虑，只是藏得很好。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited', cn: '非常兴奋、期待', correct: false, reason: 'anxious 是带着不安的紧张，不是单纯的兴奋。' },
          { key: 'B', en: 'nervous and worried', cn: '焦虑、紧张不安', correct: true, reason: 'anxious 指心里悬着、担心出事，符合首映前的状态。' },
          { key: 'C', en: 'angry at everyone', cn: '对所有人都很生气', correct: false, reason: '她是紧张，不是发火；手指对不准耳环就是证据。' }
        ],
        analysis: 'anxious 是“焦虑”。她藏得好，不代表没有；耳环那一下，把藏起来的都露了出来。',
        wrongFeedback: '你听成生气，赶紧躲远了，姜黎一个人在镜子前站了很久，气血 -10。',
        afterCorrect: '沈知夏走过去，伸手替她把耳环扣好。姜黎没动，只说：“手很稳。”沈知夏答：“摔出来的。”'
      }
    ],
    completeText: '第十三章结束。那晚的声明最终没有发。姜黎说，有些话一旦写下来，就再也改不回去了。'
  },
  {
    id: 'df_14',
    index: 14,
    title: '第 14 章 · 记者堵在门口',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '记者堵在片场门口，长枪短炮架了一排。姜黎的经纪人按住车门，说一个字都不能说，然后当着她的面挂了电话。姜黎站在车边笑了一下，那笑意谁看都发冷，助理都不敢靠近。',
    questions: [
      {
        plotDescription: '经纪人第三次挂断电话，姜黎把手机从耳边拿下来，指节发白。',
        line: "The agent hung up on me. I was furious.",
        lineCn: '经纪人直接挂了我电话，我狂怒。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '狂怒、气到极点', correct: true, reason: 'furious 是愤怒的最高级，比 angry 强得多，符合当下的火气。' },
          { key: 'B', en: 'a little tired', cn: '有点累', correct: false, reason: '她不是累，是被挂电话这件事实实在在地激怒了。' },
          { key: 'C', en: 'very grateful', cn: '非常感激', correct: false, reason: '感激是 grateful，和 furious 只差几个字母，意思天差地别。' }
        ],
        analysis: 'furious 是“狂怒”。指节发白、笑意发冷，这些都是怒到极点的样子。',
        wrongFeedback: '你把狂怒听成感激，还替经纪人道谢，姜黎转过头，眼神让空调都低了两度，气血 -10。',
        afterCorrect: '她拉开车门坐进去，声音很平：“我自己说。”经纪人拦住她：“你一说，全完了。”姜黎答：“不说，才真的完了。”'
      },
      {
        plotDescription: '保姆车里没开灯，沈知夏抱着膝盖坐在最后一排，已经一下午没动。',
        line: "She stayed in the van all afternoon. She sounded depressed on the phone.",
        lineCn: '她在车里待了一下午，电话里的声音很抑郁。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited', cn: '非常兴奋', correct: false, reason: 'depressed 是情绪往下沉，和兴奋方向相反。' },
          { key: 'B', en: 'quite hungry', cn: '相当饿', correct: false, reason: '她不是饿，是长时间的情绪低落。' },
          { key: 'C', en: 'very low and sad for a long time', cn: '情绪低落、长时间抑郁', correct: true, reason: 'depressed 是持续的消沉状态，不只是心情差一下。' }
        ],
        analysis: 'depressed 是“抑郁、消沉”。一下午不动、不开灯，这些比任何解释都清楚。',
        wrongFeedback: '你听成“饿了”，拎着饭盒上车，她抬头看你一眼，又慢慢低下去，气血 -10。',
        afterCorrect: '姜黎上车，没有开灯，只在她旁边坐下：“热搜会过去。”沈知夏说：“我怕的不是热搜。”'
      },
      {
        plotDescription: '片场那边传来笑声，几个年轻演员凑在一起看新出的预告片。',
        line: "The crew is hyped about the new trailer. I just want to sleep.",
        lineCn: '剧组都在为新预告兴奋，我只想睡觉。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'very worried', cn: '非常担心', correct: false, reason: '别人是在欢呼，不是发愁，别把气氛听反了。' },
          { key: 'B', en: 'extremely excited and eager', cn: '极度兴奋、期待拉满', correct: true, reason: 'hyped 指被吊到最高点的兴奋，常带“等不及”的意味。' },
          { key: 'C', en: 'completely indifferent', cn: '完全无所谓', correct: false, reason: '无所谓是 indifferent；hyped 恰恰是情绪高涨。' }
        ],
        analysis: 'hyped 是“兴奋到爆”。外面的欢呼和车里的沉默，被一扇车门隔成两个世界。',
        wrongFeedback: '你听成担心，还去安慰那群人，他们举着手机看你，气氛一下变得奇怪，气血 -10。',
        afterCorrect: '沈知夏把窗帘拉上：“恭喜他们。”姜黎说：“预告里那个背影，是你。”车里安静下来，两个人都没再说话。'
      },
      {
        plotDescription: '夜里，沈知夏给母亲打电话，说了两句就笑不出来了。',
        line: "I've had a miserable week. Don't ask, just sit with me.",
        lineCn: '我这周惨透了，别问，陪我坐会儿就行。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely bad and unhappy', cn: '惨透了、非常糟糕', correct: true, reason: 'miserable 形容处境和心情都惨到极点，正是她这一周。' },
          { key: 'B', en: 'very busy but good', cn: '很忙但很充实', correct: false, reason: '她很忙，但一点也不“good”，miserable 是完全负面的。' },
          { key: 'C', en: 'surprisingly peaceful', cn: '意外地平静', correct: false, reason: '她连笑都笑不出来，谈不上平静。' }
        ],
        analysis: 'miserable 是“惨透了”。她不需要建议，也不想要安慰，只想有人坐在旁边。',
        wrongFeedback: '你追问她到底怎么了，她把手机按灭，转过身去，气血 -10。',
        afterCorrect: '姜黎在她身边坐下，什么也没问。过了很久，沈知夏把头轻轻靠了过去，只靠了一秒，又坐直了。'
      }
    ],
    completeText: '第十四章结束。那天谁都没有回应记者。第二天通稿标题写着：影后全程沉默，疑似默认。'
  },
  {
    id: 'df_15',
    index: 15,
    title: '第 15 章 · 她替她挡了一句',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那场群访只给了三分钟，问题却一个比一个尖。有人问姜黎，替身是不是靠她上位。姜黎把话筒往前推了推，说了第一句话，全场安静下来，连快门声都慢了半拍。',
    questions: [
      {
        plotDescription: '姜黎在镜头前念出她的全名，还补了一句：她摔了二十七次。',
        line: "When she said my name on camera, I was ecstatic.",
        lineCn: '她在镜头前说出我名字的时候，我欣喜若狂。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely numb', cn: '完全麻木、没有感觉', correct: false, reason: 'ecstatic 是情绪冲到最高点，和麻木正好相反。' },
          { key: 'B', en: 'a little embarrassed', cn: '有点尴尬、不好意思', correct: false, reason: '她不是难为情，是高兴到控制不住。' },
          { key: 'C', en: 'extremely happy', cn: '欣喜若狂、高兴到极点', correct: true, reason: 'ecstatic 是快乐的上限，比 happy 强得多。' }
        ],
        analysis: 'ecstatic 是“欣喜若狂”。二十七年没人念过她的名字，这一次是在镜头前。',
        wrongFeedback: '你听成麻木，还问她是不是不高兴，她张了张嘴，眼圈一下红了，气血 -10。',
        afterCorrect: '她站在人群后面，手指抠着裤缝，怕自己笑出来。姜黎隔着十几支话筒看过来，只看了半秒，就把视线收回去。'
      },
      {
        plotDescription: '回程车上，她一条条往下刷评论，刷到最难听的那条，手指停住了。',
        line: "I read the worst comment and felt numb. Nothing.",
        lineCn: '我看了最难听的那条评论，只觉得麻木，什么都没感觉到。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to feel anything', cn: '麻木、什么都感觉不到', correct: true, reason: 'numb 指情绪或身体失去知觉，这里是“被伤到没反应了”。' },
          { key: 'B', en: 'extremely angry', cn: '非常愤怒', correct: false, reason: '她不是愤怒，是连愤怒的力气都没有了。' },
          { key: 'C', en: 'very sleepy', cn: '非常困', correct: false, reason: 'numb 是感觉的消失，不是睡意。' }
        ],
        analysis: 'numb 是“麻木”。骂得太多，人会自动关掉感觉，这是身体最后的保护。',
        wrongFeedback: '你听成困了，还让她睡一会儿，她笑了一下，那笑比哭还难看，气血 -10。',
        afterCorrect: '姜黎把她的手机拿走，锁屏，放进自己包里：“今天不看了。”沈知夏没抢，只把手放在膝盖上，很久才动了一下。'
      },
      {
        plotDescription: '第二天进组，原定女主角在化妆镜前补口红，从镜子里看了她一眼。',
        line: "The lead actress is jealous. She's been cold to me all morning.",
        lineCn: '女主角嫉妒了，一早上都对我很冷淡。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'very friendly', cn: '非常友好', correct: false, reason: '冷淡和友好相反，jealous 也不是善意。' },
          { key: 'B', en: 'upset because someone has what you want', cn: '嫉妒、眼红别人拥有的东西', correct: true, reason: 'jealous 是“别人有我没有”的酸，符合她对戏份的在意。' },
          { key: 'C', en: 'completely unaware', cn: '完全没察觉、不知情', correct: false, reason: '她显然很在意，才会一早上都冷着脸。' }
        ],
        analysis: 'jealous 是“嫉妒”。在这个剧组，多一个镜头就是多一条命，嫉妒来得比善意快。',
        wrongFeedback: '你听成友好，还主动去打招呼，对方把口红盖一扣，起身走了，气血 -10。',
        afterCorrect: '沈知夏没往心里去，只把自己的台词本翻开。第一页上写着三个字：别出错。她看了很久，把纸角捏得起了毛。'
      },
      {
        plotDescription: '试镜名单出来，她的名字排在第一，备注写着导演特别推荐。',
        line: "I got the role because of her. I feel guilty about it.",
        lineCn: '这个角色是因为她才拿到的，我心里很内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'proud and confident', cn: '骄傲又自信', correct: false, reason: '她的第一反应是亏欠，不是自豪。' },
          { key: 'B', en: 'excited and ready', cn: '兴奋又准备充分', correct: false, reason: 'guilty 是负罪感，和兴奋不搭。' },
          { key: 'C', en: 'feeling you did something wrong', cn: '内疚、觉得亏欠别人', correct: true, reason: 'guilty 是“觉得自己不该得到”，正合她当下的心情。' }
        ],
        analysis: 'guilty 是“内疚”。她怕的不是被说靠关系，是自己真的靠了。',
        wrongFeedback: '你听成骄傲，还夸她实至名归，她把名单折起来，一句话都没说，气血 -10。',
        afterCorrect: '姜黎看完名单，只问：“你想演吗？”沈知夏点头。姜黎说：“那就把内疚演成戏，别演成借口。”'
      }
    ],
    completeText: '第十五章结束。那天她第一次拿到完整的剧本，不是替身的走位纸，是一个有名字、有过去的人。'
  },
  {
    id: 'df_16',
    index: 16,
    title: '第 16 章 · 别把心疼演成戏',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '连着四十天，姜黎每天只睡三个小时。助理在通告单上画了个红圈，说这是她今年第三部戏。姜黎看了一眼，把单子压在咖啡杯下面，起身时扶了一下桌角，很轻，几乎没人看见。',
    questions: [
      {
        plotDescription: '医生问她最近睡眠怎么样，她还没开口，助理先替她答了。',
        line: "I'm stressed about the schedule. Forty days, fourteen scenes each.",
        lineCn: '我对这个排期压力很大，四十天，每天十四场。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very relaxed', cn: '非常放松', correct: false, reason: 'stressed 是压力大，和放松正好相反。' },
          { key: 'B', en: 'under a lot of pressure', cn: '压力大、绷得很紧', correct: true, reason: 'be stressed 就是被压力压着，睡不好、绷得紧。' },
          { key: 'C', en: 'a little bored', cn: '有点无聊', correct: false, reason: '她不是闲得无聊，是忙到身体报警。' }
        ],
        analysis: 'stressed 是“压力大”。她嘴上说得平稳，扶桌角那一下已经替她说完了。',
        wrongFeedback: '你听成放松，还劝她多休息，医生抬头看了你一眼，气血 -10。',
        afterCorrect: '医生让她减场，她摇头：“减一场，全组两百人等一天。”助理在旁边小声说：“等一天，总比等一年好。”'
      },
      {
        plotDescription: '助理把三年的行程表摊开，密密麻麻几乎没有空白。',
        line: "Three films in a year. She's heading for burnout.",
        lineCn: '一年三部戏，她正走向职业倦怠。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'a big promotion', cn: '一次很大的升职', correct: false, reason: 'burnout 是耗到烧空，不是往上走。' },
          { key: 'B', en: 'a sudden injury', cn: '一次突然的受伤', correct: false, reason: '这里说的是长期过劳的状态，不是某一次外伤。' },
          { key: 'C', en: 'exhaustion from too much work over time', cn: '长期过劳导致的倦怠', correct: true, reason: 'burnout 指长期高压工作后身心都被烧空，不是一天两天。' }
        ],
        analysis: 'burnout 是“职业倦怠”。不是累一次，是一直烧，烧到没有东西可烧。',
        wrongFeedback: '你听成升职，还跟她道喜，助理把行程表合上，脸色很难看，气血 -10。',
        afterCorrect: '姜黎盯着那张表看了会儿，忽然问：“我上一次连休三天，是什么时候？”助理翻到最前面，翻了很久，没找到。'
      },
      {
        plotDescription: '收工后沈知夏找不到她，电话打了六个，最后一个才被接起。',
        line: "She called six times. There was panic in her voice.",
        lineCn: '她打了六个电话，声音里全是恐慌。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'sudden overwhelming fear', cn: '恐慌、突然压过来的强烈恐惧', correct: true, reason: 'panic 是失控的恐惧，六个电话就是它的形状。' },
          { key: 'B', en: 'a quiet calmness', cn: '一种安静的平静', correct: false, reason: 'panic 是反过来的，越找不到人越乱。' },
          { key: 'C', en: 'a kind of laughter', cn: '一种笑声', correct: false, reason: '电话那头的不是笑，是压不住的慌。' }
        ],
        analysis: 'panic 是“恐慌”。她怕的不是出事，是怕再一次来不及。',
        wrongFeedback: '你听成笑声，还问她笑什么，电话那头沉默了一下，然后被挂断，气血 -10。',
        afterCorrect: '最后是在消防通道找到的。姜黎坐在台阶上，鞋脱了一只，手机反扣在腿边。她抬头说：“我没事。”声音很轻。'
      },
      {
        plotDescription: '看到人还好好坐着，沈知夏才发现自己一路上都在发抖。',
        line: "When I found her in the stairwell, I felt relieved.",
        lineCn: '在楼梯间找到她时，我松了口气。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望、扫兴', correct: false, reason: '找到人了是好事，relieved 是松下来，不是失望。' },
          { key: 'B', en: 'glad that something bad is over', cn: '松了口气、悬着的心放下', correct: true, reason: 'relieved 就是坏事没发生或结束后那种放松。' },
          { key: 'C', en: 'still angry', cn: '仍然很生气', correct: false, reason: '她一路上的慌在看到人的瞬间散掉了，不是生气。' }
        ],
        analysis: 'relieved 是“松了口气”。刚才还panic，现在人找到了，身体先于脑子松下来。',
        wrongFeedback: '你听成失望，脸沉了下来，姜黎以为你在怪她，把鞋穿上了，气血 -10。',
        afterCorrect: '她走过去，蹲下来，替姜黎把另一只鞋摆正。姜黎看着她，忽然说：“别把心疼演成戏。”沈知夏答：“我没演。”'
      }
    ],
    completeText: '第十六章结束。那晚姜黎终于睡了六个小时。助理守在门外，谁都没敢敲门。'
  },
  {
    id: 'df_17',
    index: 17,
    title: '第 17 章 · 深夜的保姆车',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '深夜的保姆车停在路边，沈知夏刷到一条旧新闻：姜黎五年前和某导演的合照。评论区说，那才是影后真正爱过的人。她把手机扣下，车窗上全是自己的脸。',
    questions: [
      {
        plotDescription: '旧照片里两个人站得很近，配文写着那几年她笑得最真。',
        line: "I saw the old photos of her with someone else. I was heartbroken.",
        lineCn: '我看到她和别人的旧照片，心都碎了。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '非常开心', correct: false, reason: 'heartbroken 是心碎，和开心不可能同时出现。' },
          { key: 'B', en: 'a little curious', cn: '有点好奇', correct: false, reason: '好奇不会让人把手机扣在腿上，坐很久不动。' },
          { key: 'C', en: 'deeply hurt emotionally', cn: '心碎、情感上被重创', correct: true, reason: 'heartbroken 是“心被摔碎”的那种痛，比 sad 重得多。' }
        ],
        analysis: 'heartbroken 是“心碎”。她连吃醋的资格都还没有，就已经先疼了一遍。',
        wrongFeedback: '你听成开心，还恭喜她看到旧照，她把手机屏幕按灭，指节泛白，气血 -10。',
        afterCorrect: '车窗外的路灯一盏一盏往后退。她想过问，又觉得没资格问。最后只把那条新闻划掉，像划掉一个不该有的念头。'
      },
      {
        plotDescription: '第二天进组，那个女演员从她身边走过，嘴角一直挂着笑。',
        line: "The actress walked past with a smug smile. She knew.",
        lineCn: '那个女演员带着得意的笑走过去，她什么都知道。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'too pleased with yourself', cn: '得意忘形、自满', correct: true, reason: 'smug 是“我早知道”的那种优越感，带着看热闹的意思。' },
          { key: 'B', en: 'very shy', cn: '非常害羞', correct: false, reason: '害羞的人不会特意走过来给人看笑脸。' },
          { key: 'C', en: 'deeply sorry', cn: '深深的歉意', correct: false, reason: '那笑里没有半点歉意，只有“我早说过”。' }
        ],
        analysis: 'smug 是“得意”。她的笑不是为了打招呼，是为了让人看见自己早就知道。',
        wrongFeedback: '你听成歉意，还回了句“没关系”，对方笑得更明显了，气血 -10。',
        afterCorrect: '沈知夏没躲，迎着她的目光看回去。那女演员愣了一下，笑意淡了，绕过她走开。姜黎在监视器后面，把这一幕看完了。'
      },
      {
        plotDescription: '姜黎的手机在桌上震个不停，她看了一眼来电显示，直接按掉。',
        line: "Her phone kept ringing. She looked annoyed.",
        lineCn: '她的手机一直响，她看起来很烦。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very grateful', cn: '非常感谢', correct: false, reason: '她按掉电话的动作，和感激搭不上。' },
          { key: 'B', en: 'slightly angry and irritated', cn: '烦透了、有点恼火', correct: true, reason: 'annoyed 是被小事反复打扰后的烦，不是暴怒。' },
          { key: 'C', en: 'completely calm', cn: '完全平静', correct: false, reason: '她按电话的力道，已经说明她一点都不平静。' }
        ],
        analysis: 'annoyed 是“烦”。不是天塌下来的怒，是有人一遍遍踩到同一个点上。',
        wrongFeedback: '你听成感激，还问要不要回拨，她把手机翻过来扣住，气血 -10。',
        afterCorrect: '沈知夏没问是谁。姜黎自己开口：“旧账。有人想拿它换点东西。”她说得很轻，像在说别人的事。'
      },
      {
        plotDescription: '收工回酒店，走廊尽头的灯一闪一闪，她总觉得后面有人。',
        line: "Maybe it was paranoia, but I felt watched all night.",
        lineCn: '也许是被害妄想，可我整晚都觉得有人在看着我。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'false belief that people are against you', cn: '被害妄想、总觉得有人针对自己', correct: true, reason: 'paranoia 是没有根据的猜疑，她自己都说了 maybe。' },
          { key: 'B', en: 'a strong sense of safety', cn: '强烈的安全感', correct: false, reason: '她整晚不安，和安全感正好相反。' },
          { key: 'C', en: 'a very clear memory', cn: '非常清晰的记忆', correct: false, reason: 'paranoia 是当下的猜疑，不是回忆。' }
        ],
        analysis: 'paranoia 是“被害妄想”。她说也许是，正因为分不清是真的有人，还是自己吓自己。',
        wrongFeedback: '你听成“很有安全感”，还让她早点睡，她把门锁又检查了一遍，气血 -10。',
        afterCorrect: '她回房后把椅子抵在门后，坐了很久。凌晨一点，门缝下面塞进来一张纸条，上面只有三个字：我在隔壁。'
      }
    ],
    completeText: '第十七章结束。第二天她问前台，隔壁有没有人入住。前台说，那间房长年不对外。'
  },
  {
    id: 'df_18',
    index: 18,
    title: '第 18 章 · 谁先动了心',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '凌晨两点，姜黎的房间还亮着灯。她把旧合同翻出来，一页页看，看到某一条时笑了一下，那笑没有温度。沈知夏端着一杯热水站在门口，没有敲。',
    questions: [
      {
        plotDescription: '手机屏幕亮了又暗，她把同一段聊天记录翻了三遍。',
        line: "I was restless all night. I kept checking my phone.",
        lineCn: '我整晚都很焦躁，一直看手机。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: 'restless 恰恰是睡不好、动来动去，和睡沉相反。' },
          { key: 'B', en: 'unable to stay still or calm', cn: '焦躁、坐不住也静不下来', correct: true, reason: 'restless 指身体和心都停不下来，所以一直看手机。' },
          { key: 'C', en: 'very hungry', cn: '非常饿', correct: false, reason: '她不是饿，是心里有事放不下。' }
        ],
        analysis: 'restless 是“焦躁不安”。不是失眠那么简单，是心里悬着一个没答案的问题。',
        wrongFeedback: '你听成睡得很沉，还夸她气色好，她把手机扣在桌上，气血 -10。',
        afterCorrect: '门口传来很轻的脚步声，停住了。姜黎没有回头，只把手机翻过去：“进来吧，门没锁。”'
      },
      {
        plotDescription: '旧合同最后一页，是公司替她签下的十年，她指着那一行。',
        line: "She is still bitter about how the studio treated her.",
        lineCn: '她对公司当年的做法仍然心怀怨恨。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'very sweet', cn: '非常甜、温柔', correct: false, reason: 'bitter 原意是苦，这里指心里的怨，和甜相反。' },
          { key: 'B', en: 'completely forgetful', cn: '完全健忘、不记得了', correct: false, reason: '她记得每一个条款，显然没有忘。' },
          { key: 'C', en: 'resentful about something in the past', cn: '对往事耿耿于怀、心里有怨', correct: true, reason: 'bitter 指旧伤没愈合，带着苦涩的怨气。' }
        ],
        analysis: 'bitter 是“苦涩、怨恨”。十年过去了，条款还在，怨也还在。',
        wrongFeedback: '你听成“温柔”，还夸她大度，她把合同合上，声音一下冷了，气血 -10。',
        afterCorrect: '沈知夏把水放在桌上：“那就别再签第二次。”姜黎看着她，像是第一次听见有人这么说话。'
      },
      {
        plotDescription: '灯下没有妆，她的脸色比平时白，声音也比平时轻。',
        line: "For the first time, she looked vulnerable.",
        lineCn: '她第一次显得很脆弱。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'easily hurt and unprotected', cn: '脆弱、容易被伤到', correct: true, reason: 'vulnerable 是“没有盔甲”，一碰就会疼，正合此刻的她。' },
          { key: 'B', en: 'extremely powerful', cn: '极其强大、不可撼动', correct: false, reason: '她卸了妆、声音变轻，是相反的状態。' },
          { key: 'C', en: 'quite bored', cn: '相当无聊、没事做', correct: false, reason: '这不是无聊，是把自己露出来了。' }
        ],
        analysis: 'vulnerable 是“脆弱”。影后最贵的东西是盔甲，她第一次在一个人面前脱下来。',
        wrongFeedback: '你听成强大，还说你一个人也能扛，她把脸转开，气血 -10。',
        afterCorrect: '沈知夏没有安慰她，只坐到对面，把杯子往她那边推了推。姜黎伸手握住，指尖是凉的。'
      },
      {
        plotDescription: '她说起那个导演，说当年所有人都劝她忍，忍到现在。',
        line: "She said it was hopeless. I said nothing is.",
        lineCn: '她说这事没指望了，我说不是。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'very promising', cn: '非常有希望、前景很好', correct: false, reason: 'hopeless 是没希望，和 promising 正好相反。' },
          { key: 'B', en: 'a little funny', cn: '有点好笑', correct: false, reason: '她说的是走投无路，不是笑话。' },
          { key: 'C', en: 'with no hope of getting better', cn: '绝望、看不到转机', correct: true, reason: 'hopeless 是“没有出路”，所以她才会说忍到现在。' }
        ],
        analysis: 'hopeless 是“没有指望”。她说的是这行，沈知夏回的是她这个人。',
        wrongFeedback: '你听成好笑，还跟着笑了一下，姜黎抬眼看你，眼里一点光都没有，气血 -10。',
        afterCorrect: '姜黎愣了愣，忽然问：“你凭什么说不是？”沈知夏答：“凭我还坐在这儿。”窗外的天，已经有一点灰白。'
      }
    ],
    completeText: '第十八章结束。天亮之前，两个人谁都没提那句“凭什么”。但杯子一直放在桌子中间，谁都没收走。'
  },
  {
    id: 'df_19',
    index: 19,
    title: '第 19 章 · 一句谢谢说不出口',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那天收工，沈知夏在片场门口等了很久，手里捏着一张写好的纸条。她想说谢谢，又觉得这两个字太轻。姜黎出来时，她只把纸条递了过去，指尖有点抖，谁都没先说话。',
    questions: [
      {
        plotDescription: '纸条上写着两行字，第二行被涂掉了一半。',
        line: "I'm grateful, but I don't want to owe her forever.",
        lineCn: '我很感激，但我不想永远欠着她。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry at someone', cn: '对某人生气', correct: false, reason: '她递纸条的动作，和生气完全搭不上。' },
          { key: 'B', en: 'completely indifferent', cn: '完全无所谓', correct: false, reason: '无所谓的人不会把纸条改三遍。' },
          { key: 'C', en: 'thankful for what someone did', cn: '感激、心里记着别人的好', correct: true, reason: 'grateful 是“记着这份好”，后面那句 but 才是她的难处。' }
        ],
        analysis: 'grateful 是“感激”。真正让她难受的不是欠钱，是欠了一份还不清的情。',
        wrongFeedback: '你听成生气，把纸条收回去，说那就别谢了，她站在原地，眼睛发酸，气血 -10。',
        afterCorrect: '姜黎把纸条看完，折好，放进外套内袋：“那就慢慢还。”她说完就走了，留下沈知夏一个人在门口站着。'
      },
      {
        plotDescription: '回去的路上她说起那间小公寓，说有热水、有窗，就很好了。',
        line: "She said she was content with a small apartment and a warm meal.",
        lineCn: '她说有一间小公寓和一顿热饭，她就满足了。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'very ambitious', cn: '野心很大、还想往上爬', correct: false, reason: 'content 是“够了、不再求”，和野心相反。' },
          { key: 'B', en: 'satisfied and peaceful', cn: '满足、心里安定', correct: true, reason: 'be content with 就是“对现有的感到够了”，不贪多。' },
          { key: 'C', en: 'deeply unhappy', cn: '非常不开心', correct: false, reason: '她说的是一种知足，不是委屈。' }
        ],
        analysis: 'content 是“满足”。不是没有欲望，是欲望终于停在一个够得着的地方。',
        wrongFeedback: '你听成野心大，还劝她别贪心，她笑了一下，没解释，气血 -10。',
        afterCorrect: '沈知夏说：“那不是很好。”姜黎看着窗外：“是很好。只是以前我不敢要。”'
      },
      {
        plotDescription: '那天她第一次从早拍到晚，收工时导演说了句“这条过”。',
        line: "For the first time in years, I felt fulfilled.",
        lineCn: '多年来第一次，我觉得很充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'satisfied because you did something meaningful', cn: '充实、因做了有意义的事而满足', correct: true, reason: 'fulfilled 是“被填满”，指做成了值得做的事之后的那种满足。' },
          { key: 'B', en: 'extremely tired', cn: '非常疲惫', correct: false, reason: '她很累，但这里说的不是累，是心里满了。' },
          { key: 'C', en: 'completely empty', cn: '完全空虚', correct: false, reason: 'fulfilled 和空虚正好相反，是被填满。' }
        ],
        analysis: 'fulfilled 是“充实”。不是有人夸她，是她第一次觉得自己做的事算数。',
        wrongFeedback: '你听成疲惫，还让她赶紧回去睡，她把剧本抱在怀里，气血 -10。',
        afterCorrect: '姜黎在监视器后面看着回放，忽然对导演说：“这条留下来，别剪。”导演问为什么，她只说：“好看。”'
      },
      {
        plotDescription: '夜里经纪人冲进办公室，把采访链接摔在桌上，声音整层楼都听得见。',
        line: "The agent went hysterical when she heard about the interview.",
        lineCn: '经纪人听说那场采访后歇斯底里了。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'very calm', cn: '非常冷静', correct: false, reason: '她摔东西、声音整层楼都听见，和冷静相反。' },
          { key: 'B', en: 'out of control with emotion', cn: '歇斯底里、情绪完全失控', correct: true, reason: 'hysterical 指情绪冲到无法自控，喊叫、摔东西都是表现。' },
          { key: 'C', en: 'a little sleepy', cn: '有点困', correct: false, reason: '这和困倦无关，是情绪爆发。' }
        ],
        analysis: 'hysterical 是“歇斯底里”。不是生气，是理智断了线，只剩下音量。',
        wrongFeedback: '你听成困了，还问要不要给她倒杯水，经纪人当场把水杯扫到地上，气血 -10。',
        afterCorrect: '沈知夏站在门外，没进去。姜黎从另一头走过来，推开门说：“喊完了吗？喊完就坐下谈。”'
      }
    ],
    completeText: '第十九章结束。那张纸条后来被姜黎夹进了剧本第一页。沈知夏再看到时，纸角已经磨软了。'
  },
  {
    id: 'df_20',
    index: 20,
    title: '第 20 章 · 雨里的伞只有一把',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '雨下得很大，公司的人把解约协议摊在桌上，说签了它，姜黎还是影后。姜黎没看协议，只看着窗外那把被风吹翻的伞，忽然笑了。屋里所有人都不敢出声。',
    questions: [
      {
        plotDescription: '对方把笔推过来，说这是为她好，她抬手把笔扫到了地上。',
        line: "She slammed the door in rage.",
        lineCn: '她盛怒之下摔上了门。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'in a great hurry', cn: '非常匆忙地', correct: false, reason: '摔门不是因为赶时间，是气到极点。' },
          { key: 'B', en: 'with violent anger', cn: '暴怒、怒火中烧', correct: true, reason: 'rage 是压不住的暴怒，摔门就是它最直接的样子。' },
          { key: 'C', en: 'in surprise', cn: '惊讶地、没想到', correct: false, reason: '她不是意外，是被逼到了极限。' }
        ],
        analysis: 'rage 是“暴怒”。不是生气，是那种会让人做出动作、事后手还在抖的怒。',
        wrongFeedback: '你听成“匆忙”，还问她要赶去哪，门在面前砰地关上，气血 -10。',
        afterCorrect: '走廊里全是雨声。她站在门口，手还按在门板上，指节一下一下发白。助理不敢靠近，只把伞递了过去。'
      },
      {
        plotDescription: '她转过身时，脸上的怒气已经没了，只剩下很沉的东西。',
        line: "There was sorrow in her eyes, not anger.",
        lineCn: '她眼里是悲伤，不是愤怒。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bright smile', cn: '一个明亮的笑容', correct: false, reason: '她脸上没有笑，只有往下沉的东西。' },
          { key: 'B', en: 'a kind of sleepiness', cn: '一种困意', correct: false, reason: 'sorrow 是情绪，不是身体状态。' },
          { key: 'C', en: 'deep sadness', cn: '深切的悲伤', correct: true, reason: 'sorrow 是安静而深的悲伤，比 anger 更贴近她此刻。' }
        ],
        analysis: 'sorrow 是“悲伤”。怒是往外烧，悲伤是往里沉，她两种都尝过。',
        wrongFeedback: '你听成困了，还让她去休息，她看着窗外的雨，很久没说话，气血 -10。',
        afterCorrect: '沈知夏在楼下等她，伞只有一把。姜黎走下来，站在雨檐下说：“公司要我先放你走。”'
      },
      {
        plotDescription: '两个人挤在一把伞下往外走，雨水打湿了她半边肩膀。',
        line: "When the car turned the corner, she felt a rush of euphoria.",
        lineCn: '车拐过街角时，她涌起一阵极度的愉悦。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep fear', cn: '很深的恐惧', correct: false, reason: '那一瞬间她是轻的，不是怕的。' },
          { key: 'B', en: 'intense happiness and excitement', cn: '极度愉悦、兴奋到发飘', correct: true, reason: 'euphoria 是强烈到不真实的快乐，常出现在重压松开的一刻。' },
          { key: 'C', en: 'complete tiredness', cn: '彻底的疲惫', correct: false, reason: '她身体累，但心里那一刻是往上飞的。' }
        ],
        analysis: 'euphoria 是“极度愉悦”。做了决定之后，人会有一种不合理的轻，像终于不用再演。',
        wrongFeedback: '你听成恐惧，问她是不是后悔了，她摇头，眼里的光一下灭了，气血 -10。',
        afterCorrect: '姜黎在车里忽然笑出声，笑得眼睛都湿了。沈知夏问她笑什么，她说：“我第一次觉得，明天不用照剧本过。”'
      },
      {
        plotDescription: '第二天，骂她的通稿铺满首页，她一条条看过去，脸上没有表情。',
        line: "The insults no longer hurt. She met them with apathy.",
        lineCn: '那些辱骂不再伤人了，她用冷漠面对。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lack of feeling or interest', cn: '冷漠、什么都不在乎', correct: true, reason: 'apathy 是情绪被磨平之后的“无感”，看什么都不起波澜。' },
          { key: 'B', en: 'great curiosity', cn: '强烈的好奇心', correct: false, reason: '她没有兴趣点开更多，只是划过去。' },
          { key: 'C', en: 'sudden anger', cn: '突然涌上的愤怒', correct: false, reason: '她脸上没有表情，怒已经在上一章用完了。' }
        ],
        analysis: 'apathy 是“冷漠”。不是豁达，是伤得太多之后，情绪自己关了机。',
        wrongFeedback: '你听成好奇，还把评论念给她听，她抬手把你的手机按下去，气血 -10。',
        afterCorrect: '沈知夏把手机收起来：“别看。”姜黎说：“我不难受。”她顿了顿，又说：“这才最可怕。”'
      }
    ],
    completeText: '第二十章结束。雨停的时候，两个人共用一把伞走到了路口。伞是歪的，谁都没说自己那边淋湿了。'
  },
  {
    id: 'df_21',
    index: 21,
    title: '第 21 章 · 解约书',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '解约书放在桌上，沈知夏签完最后一笔，手心里全是汗。她走出公司大楼，第一件事是找手机，想告诉姜黎。对话框停在那晚，最后一条是她自己发的，一直没等到回复。',
    questions: [
      {
        plotDescription: '她在输入框里打了又删，最后只留下一句没发出去的话。',
        line: "I think I have a crush on her. That's the problem.",
        lineCn: '我想我暗恋上她了，这才是问题。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strong dislike', cn: '强烈的厌恶', correct: false, reason: 'crush 是心动，不是讨厌；她删了又打，是舍不得。' },
          { key: 'B', en: 'a serious fight', cn: '一次严重的争吵', correct: false, reason: '这里没有吵架，是她一个人的心事。' },
          { key: 'C', en: 'a romantic attraction to someone', cn: '对某人的暗恋、心动', correct: true, reason: 'have a crush on someone 就是“偷偷喜欢上一个人”。' }
        ],
        analysis: 'crush 是“暗恋”。她说这才是问题，因为喜欢一个人会让所有计算都失效。',
        wrongFeedback: '你听成厌恶，还劝她离远点，她把那句话全删了，屏幕暗下去，气血 -10。',
        afterCorrect: '她最终什么都没发，把手机塞回口袋。风从街口灌进来，她第一次觉得“自由”这个词有点冷。'
      },
      {
        plotDescription: '三天里她发了四条消息，对面一条都没回，连已读都没有。',
        line: "She ghosted me for three days after that night.",
        lineCn: '那晚之后她消失三天，一条消息都没有。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'suddenly stopped replying', cn: '突然不回消息、玩消失', correct: true, reason: 'ghost 作动词就是“断联”，明明能回却故意不回。' },
          { key: 'B', en: 'visited me at night', cn: '夜里来看我', correct: false, reason: '她连消息都没有，更没有人来过。' },
          { key: 'C', en: 'sent a long letter', cn: '寄来一封很长的信', correct: false, reason: '这里恰恰是彻底的沉默，不是长信。' }
        ],
        analysis: 'ghost 是“玩消失”。最伤人的不是拒绝，是连一句拒绝都懒得给。',
        wrongFeedback: '你听成“夜里来看我”，还高兴了一场，等到天亮也没人，气血 -10。',
        afterCorrect: '她把聊天框置顶又取消，反复两次，最后关掉了提醒。第四天早上，助理打来电话：“姜老师让你去试镜。”'
      },
      {
        plotDescription: '助理顺口提了一句，姜黎连她试镜穿什么都要过问。',
        line: "The way she controls every interview? That's a red flag.",
        lineCn: '她连每场采访都要控制，这是个危险信号。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a green light to go ahead', cn: '可以放行的绿灯', correct: false, reason: 'red flag 是警告，不是许可，颜色和意思都相反。' },
          { key: 'B', en: 'a warning sign of a problem', cn: '危险信号、警示', correct: true, reason: 'red flag 指关系或局面里值得警惕的信号。' },
          { key: 'C', en: 'a kind of award', cn: '一种奖项', correct: false, reason: '这里没人得奖，助理是在提醒她小心。' }
        ],
        analysis: 'red flag 是“危险信号”。控制听起来像在乎，也可能是另一种牢笼。',
        wrongFeedback: '你听成绿灯，还觉得这是偏爱，助理欲言又止，气血 -10。',
        afterCorrect: '沈知夏沉默了一下：“她只是想帮我。”助理说：“我见过太多人这么想。”说完就走了。'
      },
      {
        plotDescription: '八卦号放出消息，说杀青宴那晚两人同车离开，标题写得很露骨。',
        line: "They hooked up after the wrap party. Everyone saw.",
        lineCn: '杀青宴之后她们勾搭上了，所有人都看见了。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'argued in public', cn: '当众吵了一架', correct: false, reason: '标题写的是暧昧，不是冲突。' },
          { key: 'B', en: 'signed a contract', cn: '签了一份合同', correct: false, reason: 'hook up 和签约无关，这里说的是关系。' },
          { key: 'C', en: 'got romantically involved', cn: '暧昧、勾搭上', correct: true, reason: 'hook up 在口语里指两人发生暧昧或亲密关系，常带八卦意味。' }
        ],
        analysis: 'hook up 是“勾搭上”。真相比标题复杂，但标题从来不需要真相。',
        wrongFeedback: '你听成签合同，还去问签约细节，记者一脸兴奋地记了下来，气血 -10。',
        afterCorrect: '沈知夏把手机倒扣在桌上，忽然明白那三天为什么没有回复。她拿起外套，第一次主动往姜黎的休息室走。'
      }
    ],
    completeText: '第二十一章结束。解约书签了，合同断了，可她发现自己比任何时候都更被一个人牵着。'
  },
  {
    id: 'df_22',
    index: 22,
    title: '第 22 章 · 边界在哪',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '剧组里流言越滚越大，有人说她们已经在一起，有人说只是炒作。姜黎把剧本合上，对助理说从今天起两个人分开走。助理问为什么，她只说了一个词：边界。',
    questions: [
      {
        plotDescription: '化妆间里三个演员凑在一起，声音不大，眼睛却一直往这边瞟。',
        line: "There's too much drama around this film. I want none of it.",
        lineCn: '这部戏周围的抓马太多了，我一点都不想沾。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious art form', cn: '一种严肃的艺术形式', correct: false, reason: '这里说的是人际纠纷，不是舞台上的戏剧艺术。' },
          { key: 'B', en: 'exaggerated emotional conflict', cn: '抓马、夸张的情绪冲突', correct: true, reason: 'drama 在口语里指“戏太多、纠纷不断”，带夸张意味。' },
          { key: 'C', en: 'a kind of music', cn: '一种音乐类型', correct: false, reason: '没人在这谈音乐，她们在传闲话。' }
        ],
        analysis: 'drama 是“抓马”。不是戏，是戏外那些比戏还热闹的事。',
        wrongFeedback: '你听成艺术形式，还夸她们聊得有深度，三个人立刻闭了嘴，气血 -10。',
        afterCorrect: '姜黎没有抬头，把剧本翻到下一页：“谁再传，就换人。”化妆间一下安静了，只剩吹风机的声音。'
      },
      {
        plotDescription: '助理说那姑娘每天收工都在门口等，也不催，就站着。',
        line: "She's not clingy at all. She just... stays.",
        lineCn: '她一点都不黏人，她只是……一直在。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cold and distant', cn: '非常冷淡、疏远', correct: false, reason: 'clingy 是贴得太近，和冷淡正好相反。' },
          { key: 'B', en: 'always late', cn: '总是迟到、不守时', correct: false, reason: '这里说的不是时间观念，是距离感。' },
          { key: 'C', en: 'always needing to be close to you', cn: '黏人、总想贴着你', correct: true, reason: 'clingy 指过度依赖、总想待在身边，她说不黏是替她分辨。' }
        ],
        analysis: 'clingy 是“黏人”。她在替那个人澄清：不是依赖，只是没走。',
        wrongFeedback: '你听成冷淡，还说她真难相处，姜黎合上剧本，语气一下冷了，气血 -10。',
        afterCorrect: '助理问那要不要让她别等了。姜黎沉默了一下：“不用。她等她的，我走我的。”'
      },
      {
        plotDescription: '她让助理把两个人的行程彻底分开，连车都不要同乘。',
        line: "I need boundaries. Work stays at work.",
        lineCn: '我需要边界感，工作留在工作里。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'a list of rules on set', cn: '片场贴的规定清单', correct: false, reason: '她说的是人和人之间的距离，不是墙上的规章。' },
          { key: 'B', en: 'limits between people', cn: '人与人之间的界限、边界感', correct: true, reason: 'boundaries 指情感和关系上的界线，用来保护彼此。' },
          { key: 'C', en: 'a kind of contract', cn: '一份合同', correct: false, reason: '这和工作合约无关，是私人关系里的分寸。' }
        ],
        analysis: 'boundaries 是“边界感”。她划的不是冷漠，是一条让两个人都能站住的线。',
        wrongFeedback: '你听成片场规章，还去问贴在哪儿，助理叹了口气，气血 -10。',
        afterCorrect: '助理把新的行程表发下去。沈知夏收到时只回了两个字：明白。姜黎盯着那两个字，看了很久。'
      },
      {
        plotDescription: '记者会开始前，原定的主持人临时没来，电话也打不通。',
        line: "The host bailed an hour before the event.",
        lineCn: '主持人在活动前一小时放鸽子了。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'cancelled and left', cn: '放鸽子、临时跑掉', correct: true, reason: 'bail 在口语里指临时取消、撂挑子走人。' },
          { key: 'B', en: 'arrived early', cn: '提前到了现场', correct: false, reason: '电话都打不通，显然不是提前到。' },
          { key: 'C', en: 'paid in cash', cn: '用现金结了账', correct: false, reason: '这里说的是人没来，不是付款方式。' }
        ],
        analysis: 'bail 是“放鸽子”。最难的时候走掉的人，往往最清楚哪里最疼。',
        wrongFeedback: '你听成提前到，还让人去门口迎接，台前台后乱成一团，气血 -10。',
        afterCorrect: '姜黎把耳环摘了一只，说：“我来主持。”助理愣住：“流程您没看过。”她答：“那就现场看。”'
      }
    ],
    completeText: '第二十二章结束。那场记者会开得很顺。只是散场时，姜黎在后台站了很久，没人知道她在等谁。'
  },
  {
    id: 'df_23',
    index: 23,
    title: '第 23 章 · 那场饭局',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎的母亲来了剧组，带着一盒点心，也带着一个安排好的饭局。沈知夏被叫去帮忙拎东西，站在包厢门口，听见里面说门当户对四个字，手停在门把上，没有推开。',
    questions: [
      {
        plotDescription: '武替们收工后凑在一起抽烟，谁都不提白天那根断掉的绳子。',
        line: "The stunt guys have a bro code. They never tell on each other.",
        lineCn: '武替之间有兄弟法则，从不互相告发。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written rulebook', cn: '一本写好的规则手册', correct: false, reason: 'bro code 恰恰是不成文的，没人会把它写下来。' },
          { key: 'B', en: 'an unwritten loyalty among friends', cn: '哥们之间不成文的义气', correct: true, reason: 'bro code 指朋友之间默认的忠诚和守口如瓶。' },
          { key: 'C', en: 'a kind of contract', cn: '一种正式合同', correct: false, reason: '这是口头默契，不是任何法律文件。' }
        ],
        analysis: 'bro code 是“兄弟法则”。好的一面是互相护着，坏的一面是护着护着，把危险也护住了。',
        wrongFeedback: '你听成规则手册，还问在哪儿能看，几个人对视一眼，把烟按灭了，气血 -10。',
        afterCorrect: '沈知夏没说话。她知道那根绳子为什么断，也知道他们为什么不说。收工后，她自己去找了道具组。'
      },
      {
        plotDescription: '姜黎的母亲拉着她的手，对邻居说这是自家人。',
        line: "Her mother introduces me as family. Like we're in-laws already.",
        lineCn: '她妈妈把我介绍成家里人，像我们已经是亲家了一样。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'relatives by marriage', cn: '姻亲、配偶那边的亲属', correct: true, reason: 'in-laws 指因婚姻而成为的亲属，这里是半开玩笑的说法。' },
          { key: 'B', en: 'people who live next door', cn: '住在隔壁的邻居', correct: false, reason: '邻居是 neighbor；in-laws 是亲属关系。' },
          { key: 'C', en: 'old classmates', cn: '老同学', correct: false, reason: '这和同学无关，说的是“像一家人”。' }
        ],
        analysis: 'in-laws 是“姻亲”。那句 already 里有玩笑，也有一点不敢接的期待。',
        wrongFeedback: '你听成邻居，还问隔壁姓什么，姜黎的母亲笑容僵了一下，气血 -10。',
        afterCorrect: '姜黎在旁边说：“妈，别乱讲。”她母亲拍拍沈知夏的手：“我乱讲什么了，我说的是实话。”'
      },
      {
        plotDescription: '饭局上，长辈提起给姜黎安排的人，说对方家世清白。',
        line: "Her aunt set up a blind date for me. I didn't go.",
        lineCn: '她姑姑给我安排了一场相亲，我没去。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a date with an old friend', cn: '和老朋友的约会', correct: false, reason: 'blind date 的关键是“没见过”，不是老相识。' },
          { key: 'B', en: 'a business dinner', cn: '一场商务饭局', correct: false, reason: '这里是长辈安排的婚恋见面，不是谈生意。' },
          { key: 'C', en: 'a meeting with someone you never met', cn: '相亲、和陌生人见面', correct: true, reason: 'blind date 指双方没见过面、由别人安排的约会。' }
        ],
        analysis: 'blind date 是“相亲”。她说不去，声音不大，但包厢里每个人都听见了。',
        wrongFeedback: '你听成商务饭局，还问要不要带合同，桌上的人全看向你，气血 -10。',
        afterCorrect: '她母亲放下筷子：“见一面怎么了？”姜黎答：“我不见。”沈知夏站在门口，忽然觉得那三个字比任何台词都好听。'
      },
      {
        plotDescription: '饭后，沈知夏提起经纪人的问题，姜黎却把话岔开了。',
        line: "She has a blind spot when it comes to her manager.",
        lineCn: '一涉及她的经纪人，她就有盲区。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'something you fail to notice', cn: '盲区、自己看不清楚的地方', correct: true, reason: 'blind spot 指明明存在却看不见的弱点，这里是判断上的盲区。' },
          { key: 'B', en: 'a damaged part of the eye', cn: '眼睛受损的部位', correct: false, reason: '这里说的是心理上的看不清，不是眼科问题。' },
          { key: 'C', en: 'a secret plan', cn: '一个秘密计划', correct: false, reason: 'blind spot 是没意识到，不是藏起来的计划。' }
        ],
        analysis: 'blind spot 是“盲区”。她看得清所有人，唯独看不清那个跟了她十年的人。',
        wrongFeedback: '你听成眼睛有问题，还劝她去看医生，她把杯子放下，没再解释，气血 -10。',
        afterCorrect: '沈知夏没再追问。回去的车上，姜黎忽然说：“我知道你看出来了。”她顿了顿，“我只是还没准备好承认。”'
      }
    ],
    completeText: '第二十三章结束。那顿饭之后，姜黎的母亲再没提过相亲。她只是在临走前，多看了沈知夏一眼。'
  },
  {
    id: 'df_24',
    index: 24,
    title: '第 24 章 · 试镜间 3 号',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '试镜间在走廊尽头，门牌上写着 3 号。沈知夏推门进去之前，听见有人叫她的旧名字，回头看见一张很久没见的脸，正举着手机，笑容熟得让人发冷。',
    questions: [
      {
        plotDescription: '那女孩拉着沈知夏的手说想她，眼睛却在看走廊那头有没有人拍。',
        line: "That girl is not your friend. She's a toxic friend.",
        lineCn: '那女孩不是你朋友，她是个会伤你的朋友。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very loyal friend', cn: '非常忠诚的朋友', correct: false, reason: '她举着手机、眼睛找镜头，这不是忠诚，是算计。' },
          { key: 'B', en: 'a friend from childhood', cn: '从小一起长大的朋友', correct: false, reason: 'toxic friend 说的是关系性质，不是认识多久。' },
          { key: 'C', en: 'a friend who harms you', cn: '会消耗、伤害你的朋友', correct: true, reason: 'toxic friend 指表面亲近、实际让你受损的人。' }
        ],
        analysis: 'toxic friend 是“有毒的朋友”。她不打你，只是一次次拿你去换东西。',
        wrongFeedback: '你听成老友，还替她们合了张影，第二天照片上了热搜，气血 -10。',
        afterCorrect: '姜黎走过去，很自然地站到两人中间：“试镜要迟到了。”她的手搭在沈知夏背上，力道不重，却让人没法再靠近。'
      },
      {
        plotDescription: '走廊只剩她们两个人，姜黎看着手里的号牌，忽然开口。',
        line: "After the audition, let's get dinner. Just us. A date.",
        lineCn: '试镜之后一起吃饭，就我们俩，一次约会。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business meeting', cn: '一次商务会面', correct: false, reason: '她说 just us，把工作排除在外了。' },
          { key: 'B', en: 'a romantic meeting with someone', cn: '约会、带暧昧意味的见面', correct: true, reason: 'date 指两人之间带感情意味的见面，不是普通吃饭。' },
          { key: 'C', en: 'a job interview', cn: '一场求职面试', correct: false, reason: '试镜是 audition，date 是另一个约定。' }
        ],
        analysis: 'date 是“约会”。她把这两个字说得很慢，像怕对方听不清，又像怕自己反悔。',
        wrongFeedback: '你听成商务会面，还问要不要带企划书，姜黎把号牌塞给你，转身就走，气血 -10。',
        afterCorrect: '沈知夏捏着号牌，半天才说：“我可能会搞砸。”姜黎回头：“那就搞砸。饭还是要吃。”'
      },
      {
        plotDescription: '等候区里，那个女孩又凑过来，说沈知夏以前的事她全知道。',
        line: "They broke up last month. She's still not over it.",
        lineCn: '她们上个月分手了，她到现在还没走出来。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'ended a romantic relationship', cn: '分手、结束恋爱关系', correct: true, reason: 'break up 指情侣分开，后面 not over it 也印证了这点。' },
          { key: 'B', en: 'started dating', cn: '开始交往', correct: false, reason: '方向正好相反，break up 是结束不是开始。' },
          { key: 'C', en: 'moved to another city', cn: '搬到另一座城市', correct: false, reason: '搬家和感情结束是两件事，这里说的是关系。' }
        ],
        analysis: 'break up 是“分手”。这三个字从别人嘴里说出来，比当事人说更伤人。',
        wrongFeedback: '你听成开始交往，还恭喜了一句，等候区几个人同时抬头，气血 -10。',
        afterCorrect: '沈知夏没接话，只把耳机戴上。里面没有歌，她只是想听不见。姜黎隔着两个座位看她，什么都没说。'
      },
      {
        plotDescription: '那女孩笑着说，出事之后她前任第二天就不见人了。',
        line: "Her ex dumped her right after the accident.",
        lineCn: '她的前任在事故之后就把她甩了。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'picked her up', cn: '开车来接她', correct: false, reason: '这里不是接送，是人不见了，关系断了。' },
          { key: 'B', en: 'comforted her', cn: '安慰了她', correct: false, reason: 'dump 是甩掉，不是安慰，态度完全相反。' },
          { key: 'C', en: 'ended the relationship with her', cn: '把她甩了、单方面结束关系', correct: true, reason: 'dump someone 就是主动甩掉对方，常带不留情面的意味。' }
        ],
        analysis: 'dump 是“甩了”。比分手更冷，是一个人替两个人做了决定。',
        wrongFeedback: '你听成来接她，还问车停哪，那女孩笑出了声，气血 -10。',
        afterCorrect: '姜黎终于开口：“说完了吗？”那女孩一愣。姜黎站起来：“说完就让开，她该进去了。”'
      }
    ],
    completeText: '第二十四章结束。3 号试镜间的门推开时，沈知夏回头看了一眼。姜黎坐在长椅上，冲她点了下头。'
  },
  {
    id: 'df_25',
    index: 25,
    title: '第 25 章 · 黑料铺满热搜',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '黑料铺满热搜的那天，词条一条比一条难听：靠关系、抢角色、踩着影后上位。沈知夏坐在化妆间，把每一条都点开看完了，看到最后手是凉的，镜子里的脸却很平静。',
    questions: [
      {
        plotDescription: '有人把试镜片段剪了三秒，配文说她提前拿到了题目。',
        line: "They say I cheated to get the role. There was no test to cheat on.",
        lineCn: '他们说我作弊才拿到角色，可这根本没有考试。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'told the truth', cn: '说了实话', correct: false, reason: 'cheat 是欺骗，和说实话正好相反。' },
          { key: 'B', en: 'acted dishonestly to win', cn: '作弊、用不正当手段取胜', correct: true, reason: 'cheat 指破坏规则、用不诚实的方式得到好处。' },
          { key: 'C', en: 'worked very hard', cn: '非常努力地付出', correct: false, reason: '努力是努力，作弊是作弊，不能混在一起。' }
        ],
        analysis: 'cheat 是“作弊”。她反驳得很准：没有考试，就没有“作弊”这件事。',
        wrongFeedback: '你听成努力，还夸她实至名归，评论区立刻把这句话截了图，气血 -10。',
        afterCorrect: '她把手机放下，对助理说：“把试镜的完整录像放出去。”助理犹豫：“那会暴露备选演员。”她说：“那就暴露。”'
      },
      {
        plotDescription: '拍对手戏时，男主角靠得太近，台词说完了手还没收回去。',
        line: "The male lead keeps flirting with her between takes.",
        lineCn: '男主角在拍戏间隙一直跟她调情。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'behaving playfully in a romantic way', cn: '调情、带暧昧地撩', correct: true, reason: 'flirt 指带着情意的试探性互动，不是正常对戏。' },
          { key: 'B', en: 'arguing about lines', cn: '为台词争论不休', correct: false, reason: '他不是在争台词，是手没有收回去。' },
          { key: 'C', en: 'practicing stunts', cn: '练习特技动作', correct: false, reason: '这和特技无关，是距离太近。' }
        ],
        analysis: 'flirt 是“调情”。她躲得不明显，但每一次后退半步都是回答。',
        wrongFeedback: '你听成争台词，还去帮他解释，他笑得更放肆了，气血 -10。',
        afterCorrect: '沈知夏往后退了半步，正好退到姜黎的视线里。姜黎没说话，只是让人把下一场的走位改了。'
      },
      {
        plotDescription: '一个陌生号码发来消息，说手里有她以前的事，问她要多少钱。',
        line: "Her ex sold an interview about the accident.",
        lineCn: '她的前任把事故的事卖给了媒体。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'her current partner', cn: '她现在身边的伴侣', correct: false, reason: 'ex 恰恰是“过去的”，不是现在的。' },
          { key: 'B', en: 'her agent', cn: '她的经纪人', correct: false, reason: '经纪人是 agent，这里说的是感情关系里的人。' },
          { key: 'C', en: 'a former romantic partner', cn: '前任、以前的恋人', correct: true, reason: 'ex 就是“前任”，前面那个 ex 前缀表示“以前的”。' }
        ],
        analysis: 'ex 是“前任”。最难看的不是爆料，是爆料的人知道你哪里最疼。',
        wrongFeedback: '你听成经纪人，还去问合约细节，对方发来一张旧照片，气血 -10。',
        afterCorrect: '沈知夏把号码拉黑，又停下来，重新解开。她回了一句：你卖了多少。对面很久没有回。'
      },
      {
        plotDescription: '散场时人群堵住出口，助理从侧面挤过来，一把拉住她。',
        line: "The assistant acted as her wingman and got her out of the crowd.",
        lineCn: '助理当她的僚机，把她从人群里带了出来。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bodyguard', cn: '一名保镖', correct: false, reason: 'wingman 不是职业保镖，是帮忙打配合的人。' },
          { key: 'B', en: 'someone who helps you in social situations', cn: '帮你打配合、当僚机的人', correct: true, reason: 'wingman 原指帮朋友搭讪的人，这里指帮她脱身的搭档。' },
          { key: 'C', en: 'a driver', cn: '开车接送的人', correct: false, reason: '重点在“打配合”，不是开车。' }
        ],
        analysis: 'wingman 是“僚机”。真正靠得住的人，不会站在镜头前，只会在你走不掉的时候出现。',
        wrongFeedback: '你听成保镖，还问他会不会打架，助理拉着你从侧门跑，气血 -10。',
        afterCorrect: '车门关上的那一刻，外面还在喊她的名字。助理喘着气说：“姜老师让我来的。”沈知夏靠在椅背上，闭了眼。'
      }
    ],
    completeText: '第二十五章结束。那段完整试镜录像在午夜放了出来，三分钟，没有剪辑。评论区第一次安静了很久。'
  },
  {
    id: 'df_26',
    index: 26,
    title: '第 26 章 · 她信不信我',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那段三分钟录像之后，风向变了。有人开始说她演得好，也有人说那只是同情分。姜黎在监视器前看完，只说了一句这条不用剪，然后让人把下一场的机位往前推。',
    questions: [
      {
        plotDescription: '沈知夏一进片场，几个场务主动跟她打招呼，连灯都亮得比平时早。',
        line: "The whole set has a different vibe since she came back.",
        lineCn: '她回来之后，整个片场的气氛都不一样了。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bad smell', cn: '一股难闻的气味', correct: false, reason: 'vibe 不是气味，是人能感觉到的整体气氛。' },
          { key: 'B', en: 'the feeling or atmosphere of a place', cn: '氛围、整体感觉', correct: true, reason: 'vibe 指一个地方或一群人的气场、情绪基调。' },
          { key: 'C', en: 'a loud noise', cn: '很大的噪音', correct: false, reason: '这里说的是气氛变好，不是声音大小。' }
        ],
        analysis: 'vibe 是“氛围”。没有人下通知，但所有人都能感觉到空气变了。',
        wrongFeedback: '你听成气味，还问是不是哪里漏水了，场务一脸茫然，气血 -10。',
        afterCorrect: '姜黎从监视器后面抬头：“准备好了就开机。”她的声音不大，片场却一下静了。'
      },
      {
        plotDescription: '收工后两人沿着河走，姜黎忽然说她以前不信这类说法。',
        line: "I don't believe in soulmates. But I believe in her.",
        lineCn: '我不信灵魂伴侣，但我信她。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business partner', cn: '商业上的合伙人', correct: false, reason: '这里谈的是感情，不是生意。' },
          { key: 'B', en: 'a childhood friend', cn: '小时候的朋友', correct: false, reason: 'soulmate 和认识多久无关，指契合的人。' },
          { key: 'C', en: 'a person perfectly suited to you', cn: '灵魂伴侣、天生契合的人', correct: true, reason: 'soulmate 指在精神上高度契合的那个人。' }
        ],
        analysis: 'soulmate 是“灵魂伴侣”。她先否定这个词，再把人单独拎出来，这比承认更重。',
        wrongFeedback: '你听成合伙人，还问要不要签协议，姜黎停下脚步，笑了一下，气血 -10。',
        afterCorrect: '沈知夏低着头走了几步，才说：“那你信错人了。”姜黎答：“我演戏二十年，看人没看错过。”'
      },
      {
        plotDescription: '一场对视的戏，导演喊卡之后，两个人都没有立刻分开。',
        line: "The director says we have chemistry on camera.",
        lineCn: '导演说我们在镜头前很有化学反应。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'a natural connection between people', cn: '人与人之间的化学反应、默契', correct: true, reason: 'chemistry 形容两人之间自然的吸引和配合，尤其在镜头前。' },
          { key: 'B', en: 'a science experiment', cn: '一个科学实验', correct: false, reason: '这里是形容人和人的关系，不是实验室。' },
          { key: 'C', en: 'a kind of medicine', cn: '一种药物', correct: false, reason: '没人在这吃药，导演说的是表演效果。' }
        ],
        analysis: 'chemistry 是“化学反应”。有些东西演不出来，导演一眼就能看见。',
        wrongFeedback: '你听成科学实验，还问要不要准备器材，导演从监视器后面抬起头，气血 -10。',
        afterCorrect: '沈知夏耳朵有点热，转身去拿水。姜黎在她背后说：“他说得没错。”她差点把水瓶拿反。'
      },
      {
        plotDescription: '经纪人递来一份说明，要她公开撇清关系，说这样对两个人都好。',
        line: "She asked me to trust her. That is the hardest part.",
        lineCn: '她让我信她，这才是最难的部分。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'to forget someone', cn: '把一个人忘掉', correct: false, reason: 'trust 是相信，不是忘记，方向不同。' },
          { key: 'B', en: 'to doubt someone', cn: '怀疑某个人', correct: false, reason: 'trust 恰恰是怀疑的反面。' },
          { key: 'C', en: 'to believe someone is honest and reliable', cn: '信任、相信对方靠得住', correct: true, reason: 'trust 是把判断交出去，相信对方不会辜负。' }
        ],
        analysis: 'trust 是“信任”。她不怕被骂，怕的是把心交出去之后，对方先松手。',
        wrongFeedback: '你听成怀疑，还问她是不是在防着你，姜黎把说明折起来，没再说，气血 -10。',
        afterCorrect: '她最终没有签那份说明。姜黎知道后只说了三个字：“我记着。”这三个字，比任何公开声明都管用。'
      }
    ],
    completeText: '第二十六章结束。那晚河边的风很凉。两个人走回停车场的路上，影子第一次靠得那么近。'
  },
  {
    id: 'df_27',
    index: 27,
    title: '第 27 章 · 后台那一眼',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '品牌活动的后台很窄，两个人在同一面镜子前补妆。外面主持人念到姜黎的名字，她却没动，只看着镜子里的人。沈知夏握着口红，忽然不知道该往哪儿看。',
    questions: [
      {
        plotDescription: '工作人员小声议论，说姜黎的助理跟了她十二年，从没换过。',
        line: "Her assistant has been loyal to her for twelve years.",
        lineCn: '她的助理跟了她十二年，一直很忠诚。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'very talkative', cn: '话很多、爱聊天', correct: false, reason: 'loyal 讲的是忠守关系，不是说话多少。' },
          { key: 'B', en: 'always late', cn: '总是迟到、不守时', correct: false, reason: '跟了十二年没换，显然不是这个意思。' },
          { key: 'C', en: 'always supportive and faithful', cn: '忠诚、始终站在她这边', correct: true, reason: 'loyal 指长期不变的忠诚和支持。' }
        ],
        analysis: 'loyal 是“忠诚”。在这个行业，十二年不换人，本身就是一种回答。',
        wrongFeedback: '你听成话多，还笑说难怪后台这么吵，助理听见了，脸色一下冷了，气血 -10。',
        afterCorrect: '姜黎从镜子里看她：“你在紧张什么？”沈知夏说没有。姜黎伸手，把她歪掉的耳夹扶正：“手都在抖。”'
      },
      {
        plotDescription: '主办方递来一份联名邀约，条件很优厚，姜黎扫了一眼就放下了。',
        line: "She rejected the offer without even reading it.",
        lineCn: '她连看都没看就拒绝了那个邀约。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'refused to accept', cn: '拒绝、不接受', correct: true, reason: 'reject 就是明确说不要，而且她连看都没看。' },
          { key: 'B', en: 'accepted happily', cn: '高兴地接受了', correct: false, reason: '她放下了文件，这是拒绝不是接受。' },
          { key: 'C', en: 'asked for more details', cn: '要求更多细节', correct: false, reason: '她没问任何问题，直接推回去了。' }
        ],
        analysis: 'reject 是“拒绝”。她拒绝的不是钱，是那种要把两个人拆开卖的方案。',
        wrongFeedback: '你听成接受，还恭喜她谈成合作，主办方的人愣在原地，气血 -10。',
        afterCorrect: '主办方问理由，姜黎只说：“她的名字要写在我旁边，不然就算了。”后台一下安静。'
      },
      {
        plotDescription: '上场前，沈知夏拉住她的袖子，说有话必须现在说。',
        line: "I need to confess something before the show.",
        lineCn: '演出之前，我得坦白一件事。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'ask a question', cn: '问一个问题', correct: false, reason: 'confess 不是提问，是把藏着的话说出来。' },
          { key: 'B', en: 'admit something you have been hiding', cn: '坦白、说出藏着的心里话', correct: true, reason: 'confess 指承认或吐露一直没说的事。' },
          { key: 'C', en: 'cancel a plan', cn: '取消一个计划', correct: false, reason: '她不是要取消，是有话要说。' }
        ],
        analysis: 'confess 是“坦白”。后台只有三分钟，她选在上台前，说明这句话已经压太久。',
        wrongFeedback: '你听成提问，还让她快点问，她把袖子松开，勇气也散了，气血 -10。',
        afterCorrect: '姜黎转过来，看着她：“说。”沈知夏张了张嘴，外面主持人又叫了一次名字。'
      },
      {
        plotDescription: '姜黎替她把话接了过去，说她不怕爱，怕的是别的东西。',
        line: "She's not afraid of love. She's afraid of commitment.",
        lineCn: '她不怕爱，她怕的是承诺。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious promise to stay', cn: '承诺、长期投入的约定', correct: true, reason: 'commitment 指愿意长期负责、不轻易走开的承诺。' },
          { key: 'B', en: 'a kind of award', cn: '一种奖项', correct: false, reason: '这和领奖无关，说的是关系里的责任。' },
          { key: 'C', en: 'a business plan', cn: '一份商业计划', correct: false, reason: '她在谈感情，不是在谈项目。' }
        ],
        analysis: 'commitment 是“承诺”。爱是一时的，承诺是把以后也交出去。',
        wrongFeedback: '你听成奖项，还问是哪一届，姜黎笑了一下，眼里的东西退回去了，气血 -10。',
        afterCorrect: '沈知夏低声说：“我不是怕。”姜黎替她理好衣领：“那就等你想清楚，再告诉我。”'
      }
    ],
    completeText: '第二十七章结束。那晚她们一起上了台，中间隔着半个身位。照片里，两个人的手都垂着，指尖却离得很近。'
  },
  {
    id: 'df_28',
    index: 28,
    title: '第 28 章 · 镜头外的距离',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那场戏只写了一个动作：靠近。导演说要拍到呼吸，不要拍到脸。姜黎站在标记上，等灯光师调第三遍，才开口说不必这么麻烦，人站对了，光自己会过来。',
    questions: [
      {
        plotDescription: '开拍前，导演把两个人叫到一边，说这场不要演，要有真的东西。',
        line: "The scene needs intimacy, not performance.",
        lineCn: '这场戏需要的是亲密感，不是表演。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loud argument', cn: '一场大声的争吵', correct: false, reason: '这里要的是靠近，不是冲突。' },
          { key: 'B', en: 'a kind of contract', cn: '一种合约关系', correct: false, reason: 'intimacy 是情感距离，不是文件。' },
          { key: 'C', en: 'emotional closeness between people', cn: '亲密感、情感上的贴近', correct: true, reason: 'intimacy 指两个人之间那种放下防备的靠近。' }
        ],
        analysis: 'intimacy 是“亲密”。导演要的不是技巧，是两个人真的愿意靠近一点。',
        wrongFeedback: '你听成争吵，还问要不要加台词，导演看了你一眼，气血 -10。',
        afterCorrect: '姜黎点头：“那就别喊卡太早。”她说完走到标记上，沈知夏站在原地，忽然觉得这一步很难迈。'
      },
      {
        plotDescription: '拍完，姜黎把外套披在她肩上，动作很快，像怕被谁看见。',
        line: "She shows affection in small ways, never in words.",
        lineCn: '她表达在意都靠小事，从不说出口。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'anger and blame', cn: '愤怒和责备', correct: false, reason: '披外套这个动作，和责备没有关系。' },
          { key: 'B', en: 'warmth and tenderness toward someone', cn: '爱慕、温柔的亲昵', correct: true, reason: 'affection 指藏在细节里的温柔和喜欢。' },
          { key: 'C', en: 'cold indifference', cn: '冷淡、毫不在意', correct: false, reason: '她一句话不说，却把外套给了人，这不是冷淡。' }
        ],
        analysis: 'affection 是“爱慕”。她不说，但每一件小事都在说。',
        wrongFeedback: '你听成责备，还替她解释不是故意的，姜黎把手收回去，气血 -10。',
        afterCorrect: '沈知夏把外套往上拉了拉，领口有很淡的味道。她低头闻了一下，又赶紧松开。'
      },
      {
        plotDescription: '收工后姜黎说周五别安排事，语气不像商量。',
        line: "Friday is our date night. No phones, no work.",
        lineCn: '周五是我们的约会之夜，不带手机，不谈工作。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'an evening set aside for a romantic meeting', cn: '专门留给约会的晚上', correct: true, reason: 'date night 指两个人固定留出来、只属于彼此的晚上。' },
          { key: 'B', en: 'a night shift at work', cn: '一个夜班', correct: false, reason: '她说 no work，显然不是加班。' },
          { key: 'C', en: 'a family dinner', cn: '一顿家庭聚餐', correct: false, reason: '这里说的是两个人，不是家庭聚会。' }
        ],
        analysis: 'date night 是“约会之夜”。她说得像在排通告，其实是把一段时间的所有权拿回来。',
        wrongFeedback: '你听成夜班，还问几点打卡，姜黎把手机收起来，气血 -10。',
        afterCorrect: '沈知夏问去哪儿。姜黎说：“我家。我做饭。”她顿了顿，“难吃也得吃完。”'
      },
      {
        plotDescription: '助理看着监视器里的回放，忍不住说了一句。',
        line: "She's completely smitten. She just won't say it.",
        lineCn: '她完全神魂颠倒了，就是不肯说。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常愤怒', correct: false, reason: '回放里的眼神是软的，不是怒火。' },
          { key: 'B', en: 'a little bored', cn: '有点无聊', correct: false, reason: '她盯着回放看了三遍，不是无聊。' },
          { key: 'C', en: 'deeply in love and fascinated', cn: '神魂颠倒、深深着迷', correct: true, reason: 'smitten 指被一个人彻底迷住，常带藏不住的意味。' }
        ],
        analysis: 'smitten 是“神魂颠倒”。她越是不说，越瞒不过镜头。',
        wrongFeedback: '你听成无聊，还问要不要换一场戏，助理把回放关了，气血 -10。',
        afterCorrect: '姜黎从后面走过来：“看什么呢？”助理立刻切了画面。她没追问，只把目光在屏幕上停了两秒。'
      }
    ],
    completeText: '第二十八章结束。周五那顿饭确实不好吃。沈知夏吃完了，还说了一句再来一碗。'
  },
  {
    id: 'df_29',
    index: 29,
    title: '第 29 章 · 隔着一座城',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎的下一部戏在另一座城，开拍前一天，她把钥匙留在桌上。沈知夏站在门口，看着那串钥匙，没有伸手。窗外的高架一直亮着，车流像一条不会停的线。',
    questions: [
      {
        plotDescription: '飞机起飞后，手机安静下来，房间大得有点不像话。',
        line: "The silence after she left felt like heartbreak.",
        lineCn: '她走后的沉默，像心碎一样。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'a moment of great joy', cn: '极度喜悦的一刻', correct: false, reason: '人刚走，房间空了，这不是喜悦。' },
          { key: 'B', en: 'deep emotional pain from loss', cn: '失去带来的深切痛苦、心碎', correct: true, reason: 'heartbreak 指失去重要的人之后那种钝痛。' },
          { key: 'C', en: 'a small misunderstanding', cn: '一个小误会', correct: false, reason: '这里没有误会，是实实在在的分离。' }
        ],
        analysis: 'heartbreak 是“心碎”。不是大吵大闹，是屋子突然安静下来的那种疼。',
        wrongFeedback: '你听成喜悦，还问她是不是很高兴，她把手机扣在桌上，气血 -10。',
        afterCorrect: '她给姜黎发了一条消息：到了说一声。发完又觉得太短，补了一句：路上别喝凉的。'
      },
      {
        plotDescription: '视频里，姜黎的房间背景换成了陌生的窗帘，时差让她那边已经天黑。',
        line: "We're doing long-distance for three months.",
        lineCn: '我们要异地三个月。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a relationship across different cities', cn: '异地恋、分隔两地的关系', correct: true, reason: 'long-distance 指两人不在同一座城，只能靠电话维系。' },
          { key: 'B', en: 'a very short trip', cn: '一次很短的旅行', correct: false, reason: '三个月不是短途，说的也不是旅行。' },
          { key: 'C', en: 'a long phone call', cn: '一通很长的电话', correct: false, reason: '重点在两地分隔，不是通话时长。' }
        ],
        analysis: 'long-distance 是“异地”。三个月不算长，但每一天都要重新决定一次要不要等。',
        wrongFeedback: '你听成短途旅行，还问去哪儿玩，视频那头沉默了两秒，气血 -10。',
        afterCorrect: '姜黎在屏幕里说：“三个月。”沈知夏点头：“我数着。”姜黎笑了一下：“别数，会很难熬。”'
      },
      {
        plotDescription: '新剧本递过来，前几页写得很明白，三个人住在一间屋子里。',
        line: "The script is about polyamory. She turned it down.",
        lineCn: '那个剧本讲的是多边恋，她推掉了。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'a story about one couple', cn: '只讲一对伴侣的故事', correct: false, reason: 'poly 是“多”，正好和“一对”相反。' },
          { key: 'B', en: 'a kind of family law', cn: '一种家庭法律', correct: false, reason: '这是一个关系形态，不是法律条文。' },
          { key: 'C', en: 'having more than one romantic partner', cn: '同时与多人保持恋爱关系', correct: true, reason: 'polyamory 由“多”和“爱”组成，指多边恋爱关系。' }
        ],
        analysis: 'polyamory 是“多边恋”。她推掉的理由很简单：她想要的不是更多选择，是一个确定的人。',
        wrongFeedback: '你听成一对伴侣，还说这题材挺稳，制片人愣了一下，气血 -10。',
        afterCorrect: '沈知夏问为什么推。姜黎答：“我这辈子只想把一件事演好，不想把一个人也演成很多个。”'
      },
      {
        plotDescription: '热搜又起，说某导演婚姻出问题，配图却是姜黎新戏的开机照。',
        line: "The rumor says the director is getting a divorce.",
        lineCn: '传闻说那位导演正在离婚。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a big promotion', cn: '一次很大的升职', correct: false, reason: 'divorce 和职位无关，指婚姻结束。' },
          { key: 'B', en: 'the legal end of a marriage', cn: '离婚、婚姻关系的法律结束', correct: true, reason: 'divorce 指夫妻通过法律程序结束婚姻。' },
          { key: 'C', en: 'a new film project', cn: '一个新的电影项目', correct: false, reason: '配图是开机照，但传闻说的不是新戏。' }
        ],
        analysis: 'divorce 是“离婚”。旧事被翻出来，只为了给新戏添一点噪音。',
        wrongFeedback: '你听成升职，还发消息道喜，姜黎只回了三个字：别掺和，气血 -10。',
        afterCorrect: '沈知夏把手机关掉，第一次没有点开评论。她想起姜黎说过的话：不看，是对自己最省力的保护。'
      }
    ],
    completeText: '第二十九章结束。三个月里她们通了四十七次视频。有一次信号断了，谁都没有挂，就那么黑着屏坐了很久。'
  },
  {
    id: 'df_30',
    index: 30,
    title: '第 30 章 · 谁的牺牲',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '杀青宴散场，酒店走廊只剩保洁车的轮子声。经纪人把一份通稿推到姜黎面前，标题写着“三届影后插足新人恋情”。姜黎看了三秒，把纸折起来，说：发我的名字，别带她。',
    questions: [
      {
        plotDescription: '经纪人愣住了，说这样做等于把刀递给对方。姜黎把折好的纸放进包里，语气很平。',
        line: "They call it an affair. Two women having dinner is an affair now?",
        lineCn: '他们管这叫绯闻。两个女人吃顿饭，现在也算绯闻了？',
        prompt: "根据上下文，选出画线词汇 'affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a formal social event', cn: '正式的社交活动', correct: false, reason: 'affair 确实能指“活动、场合”，但通稿标题里的 affair 是道德指控，不是宴会。' },
          { key: 'B', en: 'a romantic scandal', cn: '绯闻、不正当关系', correct: true, reason: 'affair 在八卦语境里专指“见不得光的男女关系”。这正是通稿想暗示的东西。' },
          { key: 'C', en: 'a business deal', cn: '一笔生意', correct: false, reason: '这里没有交易，只有一张想毁掉人的稿子。affair 与生意无关。' }
        ],
        analysis: 'affair 有两个常用面孔：正式活动，和偷偷摸摸的关系。标题用的是后者，所以姜黎才会反问——她们只是吃了顿饭，凭什么被写成这样。',
        wrongFeedback: '你理解成“活动”，没听出那句反问里的火，姜黎看了你一眼，把话咽了回去，气血 -10。',
        afterCorrect: '姜黎把手机倒扣在桌上，说：“通稿照发，只写我。”经纪人问她图什么，她没答。窗外是凌晨两点的城市，她想起沈知夏在片场睡着时皱着眉的样子——有些名声她已经不想要了，但那个人还要往前走。'
      },
      {
        plotDescription: '回到房间，姜黎没有开灯。她给沈知夏发了条消息，只有一句。',
        line: "I'm not good at romance. I'm good at standing in front of a camera and lying.",
        lineCn: '我不擅长浪漫。我擅长站在镜头前说谎。',
        prompt: "选出 'romance' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'romantic love and gestures', cn: '浪漫、恋爱的那套东西', correct: true, reason: 'romance 指恋爱里的心动与仪式感。她说自己不擅长，是在示弱。' },
          { key: 'B', en: 'a love story novel', cn: '爱情小说', correct: false, reason: 'romance 也能指“爱情小说”这一类型，但这里她在说自己的感情能力。' },
          { key: 'C', en: 'a foreign language', cn: '罗曼语族', correct: false, reason: 'Romance 首字母大写才是语族。此处显然不是语言问题。' }
        ],
        analysis: '姜黎把 romance 和 lying 摆在一起，是在说：我演过那么多爱情，却没有一次是真的。这是她极少露出的坦白。',
        wrongFeedback: '你答成“小说”，没接住那句示弱，沈知夏只收到一句没头没尾的话，气血 -10。',
        afterCorrect: '沈知夏盯着屏幕看了很久，回了四个字：“那就学。”姜黎把手机按在胸口，忽然笑出声。她演了二十年别人写好的台词，第一次觉得，有一句自己想说的话，还没说出口就已经被接住了。'
      },
      {
        plotDescription: '第二天，姜黎推掉了那部大制作的女主，理由是档期。全公司都在传她疯了。',
        line: "People think devotion means giving up. It just means I chose where to stand.",
        lineCn: '别人以为奉献就是放弃。其实只是我选了自己站在哪。',
        prompt: "选出 'devotion' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'strong loyalty and dedication', cn: '忠诚投入、甘愿付出', correct: false, reason: '方向对了，但这里更强调“心之所向的投入”，不是对某个组织的忠诚。' },
          { key: 'B', en: 'a religious prayer', cn: '宗教祈祷', correct: false, reason: 'devotion 在宗教里确是“虔诚”，但片场没有神龛，只有一个人在选站位。' },
          { key: 'C', en: 'willing dedication to someone', cn: '对某个人的甘愿付出', correct: true, reason: '她把“奉献”重新定义了：不是牺牲，而是主动选择留在谁身边。' }
        ],
        analysis: 'devotion 的词根是 devote，“把自己交给某件事或某个人”。姜黎不承认这是牺牲，因为在她看来，能自己选，就不叫放弃。',
        wrongFeedback: '你没听出那句话里的主动权，跟着感慨她好惨，姜黎低头喝了口冷掉的茶，气血 -10。',
        afterCorrect: '经纪人骂她傻，说不值得。姜黎把脚本推回去：“值不值得，是我说了算。”她签下那部小成本文艺片，女二的位置，片酬不到原来的十分之一。有人替她可惜，她只说了一句：这次我想演一个能站在她旁边的人。'
      },
      {
        plotDescription: '夜里对台词，姜黎念完一段，忽然停下来，看着沈知夏。',
        line: "The passion in this scene is real. I don't need to act it.",
        lineCn: '这场戏里的激情是真的。我不用演。',
        prompt: "选出 'passion' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'intense emotion / strong feeling', cn: '强烈的情感、热烈', correct: true, reason: 'passion 指压不住的热度。她说不用演，是因为那热度本来就在。' },
          { key: 'B', en: 'suffering', cn: '受难、苦难', correct: false, reason: 'Passion 首字母大写才指“耶稣受难”。这里讲的是戏里的情绪，不是宗教。' },
          { key: 'C', en: 'a hobby', cn: '爱好', correct: false, reason: 'passion 可以指“热爱的事”，但说“这场戏里的爱好”完全讲不通。' }
        ],
        analysis: 'passion 在这里不是“激情戏”的意思，而是“真实的热度”。姜黎这句话等于承认：她演不出来，因为根本不需要演。',
        wrongFeedback: '你答成“爱好”，把一句近乎告白的话听成了闲聊，姜黎合上剧本，说今晚到这儿，气血 -10。',
        afterCorrect: '沈知夏的耳根一下红了，低头去翻自己的那页台词，翻了半天也没翻到。姜黎没有催她，只是把台灯调暗了一点。房间里很安静，安静到能听见两个人的呼吸在同一个节奏上，谁都没有先动。'
      }
    ],
    completeText: '第三十章结束。姜黎把自己的名字写在了通稿最前面，那部大制作的合同被她锁进抽屉。她没有告诉沈知夏原因，只在片场门口等了四十分钟，手里提着两杯温掉的豆浆。'
  },
  {
    id: 'df_31',
    index: 31,
    title: '第 31 章 · 我决定去问她',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那张片场照片是从内部流出的，角度只有自己人能拍到。沈知夏在保姆车里坐了二十分钟，最后推门下车，直接走进经纪人的办公室。门没有敲。',
    questions: [
      {
        plotDescription: '经纪人正在打电话，看见她进来，随手把屏幕按灭。沈知夏站在桌前，没有坐。',
        line: "I'm not here to talk behind your back. I'm here to confront you.",
        lineCn: '我不是来背后议论的。我是来当面问你的。',
        prompt: "根据上下文，选出画线词汇 'confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'to attack someone', cn: '攻击、动手', correct: false, reason: 'confront 不等于动手。它靠的是把话摆到台面上，不是挥拳头。' },
          { key: 'B', en: 'to face someone directly', cn: '当面对质', correct: true, reason: 'confront 就是“正面迎上”，把问题当着人讲清楚，不绕弯。' },
          { key: 'C', en: 'to comfort someone', cn: '安慰某人', correct: false, reason: '这里的气氛是绷紧的，不是安慰。confront 与 comfort 完全不同。' }
        ],
        analysis: 'confront 的重点在 “con-（对着）+ front（正面）”——面对面把事情摊开。沈知夏这句话的意思是：我不再在背后忍了。',
        wrongFeedback: '你理解成“安慰”，气势一下子散了，经纪人笑着让她坐下，气血 -10。',
        afterCorrect: '经纪人怔了一下，把手机推远：“你想问什么？”沈知夏把照片放在桌上，指着拍摄的角度：“这个位置，只有我们组的人进得去。”她的声音很轻，但一个字都没有退。'
      },
      {
        plotDescription: '经纪人否认了三次，最后叹口气，说这是公司的决定，让她忍一忍。',
        line: "Then I'll cut ties with this company. Today.",
        lineCn: '那我就和这家公司断绝关系。就今天。',
        prompt: "选出 'cut ties' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to end a relationship completely', cn: '彻底断绝关系', correct: true, reason: 'cut ties 就是“剪断牵连”。她说的不是请假，而是结束合作。' },
          { key: 'B', en: 'to cut a rope', cn: '剪断绳子', correct: false, reason: 'tie 有“领带、绳子”的意思，但 cut ties 是固定搭配，指关系断裂。' },
          { key: 'C', en: 'to untie shoelaces', cn: '解开鞋带', correct: false, reason: '这是把短语拆成字面意思了。办公室里没人穿鞋带需要处理。' }
        ],
        analysis: 'cut ties 是商业和人际里都很常用的说法，意思是“不再有任何往来”。沈知夏用这个词，等于把最后一条退路也剪了。',
        wrongFeedback: '你答成“剪绳子”，没说出那句决裂，经纪人还以为她在开玩笑，气血 -10。',
        afterCorrect: '经纪人终于抬头看她，说：“你知道解约要赔多少吗？”沈知夏说知道，然后从包里拿出一张写了数字的纸。那是她这些年当替身攒下的全部，差得很远，但她把纸放下时手很稳。'
      },
      {
        plotDescription: '走出办公室，她给姜黎发消息，说对不起，把你拖下水了。发完就后悔，想撤回，手指却按成了删除。',
        line: "I messed up. I should have kept my distance from the start.",
        lineCn: '是我搞砸了。我一开始就该跟你保持距离。',
        prompt: "选出 'messed up' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'made a mess in a room', cn: '把房间弄乱', correct: false, reason: 'mess 有“messy 乱”的意思，但 mess up 在这里指“把事情办坏了”。' },
          { key: 'B', en: 'ruined something by mistake', cn: '因失误把事情搞坏', correct: false, reason: '方向接近，但 mess up 更口语、更轻，是“我办砸了”，不是彻底毁掉。' },
          { key: 'C', en: 'made a mistake / handled it badly', cn: '犯了错、处理得很糟', correct: true, reason: 'mess up 是日常口语里的“搞砸了”。她在怪自己，不是在描述房间。' }
        ],
        analysis: 'mess up 比 screw up 稍微轻一点，但同样是把责任往自己身上放。沈知夏第一反应不是委屈，而是“我连累了她”。',
        wrongFeedback: '你没读出那句自责，回了一句“没关系”，沈知夏把手机扣在腿上，气血 -10。',
        afterCorrect: '消息发出去不到十秒，电话就响了。姜黎的声音很平静：“距离是我先破的，轮不到你道歉。”沈知夏站在公司楼下的风里，忽然发现自己一直在等这句话，等了很久。'
      },
      {
        plotDescription: '当天下午，公司发声明，把所有责任推给“某位临时演员”。沈知夏看着那份稿子，笑了一下。',
        line: "They're trying to screw up my name so I'll crawl back.",
        lineCn: '他们想把我名声搞臭，好让我爬回去求他们。',
        prompt: "选出 'screw up' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to fasten with screws', cn: '用螺丝固定', correct: false, reason: 'screw 是螺丝，但 screw up 是“弄糟、毁掉”，不是施工动作。' },
          { key: 'B', en: 'to ruin / damage badly', cn: '搞坏、毁掉', correct: true, reason: 'screw up 在这里带恶意：不是失误，是有人故意把她的名声弄烂。' },
          { key: 'C', en: 'to tighten a lid', cn: '拧紧盖子', correct: false, reason: '这是字面拆解。声明针对的是人，不是瓶盖。' }
        ],
        analysis: '同一个 screw up，在 Ch30 是自责，在这里是别人的加害。语境决定它是“我办砸了”还是“他们要毁我”。',
        wrongFeedback: '你听成“拧螺丝”，完全错过了那句清醒的判断，气血 -10。',
        afterCorrect: '沈知夏把声明截图存进相册，命名“证据一”。她没有哭，也没有发长文。她只是回到出租屋，把明天要试镜的剧本摊开，从第一页开始读。她要先让自己站得住，才有力气说话。'
      }
    ],
    completeText: '第三十一章结束。解约书递上去的那天，沈知夏的账户只剩四位数。她把替身时期的所有通告单叠好，放进纸箱，最上面压着那张试镜通知。'
  },
  {
    id: 'df_32',
    index: 32,
    title: '第 32 章 · 化妆间的套话',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '化妆间里，同组的女演员端着咖啡凑过来，笑得很甜。她说听说你和那个替身关系不一般，网上都在传，你就跟我说说嘛，我保证不往外讲。姜黎连眼皮都没抬。',
    questions: [
      {
        plotDescription: '女演员把椅子往前挪了半米，声音压低，一副自己人的样子。',
        line: "Come on, spill the tea. Everyone's already talking.",
        lineCn: '来嘛，爆点料。大家都已经在说了。',
        prompt: "根据上下文，选出画线短语 'spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'to knock over a cup', cn: '把茶打翻', correct: false, reason: 'spill 有“洒出”的意思，但 spill the tea 是固定俚语，和茶杯无关。' },
          { key: 'B', en: 'to make tea for guests', cn: '给客人泡茶', correct: false, reason: '这是把短语按字面拼出来的意思。她想要的是消息，不是一杯茶。' },
          { key: 'C', en: 'to share gossip', cn: '爆料、说八卦', correct: true, reason: 'spill the tea 是网络时代的“吃瓜、抖料”，正是她此行的目的。' }
        ],
        analysis: 'tea 在俚语里指“八卦”。spill 是“洒出来”，所以 spill the tea 就是“把知道的料倒出来”。这句话听着亲热，其实是来挖坑。',
        wrongFeedback: '你答成“泡茶”，姜黎顺势回了句“我不喝”，对方的脸僵在那儿，气血 -10。',
        afterCorrect: '姜黎把口红盖好，转过椅子看她：“那你去问大家，别问我。”女演员的笑容僵了一秒，站起来说开玩笑的。门关上后，姜黎才把手里那支口红放下——她用了很大的力气才没捏断。'
      },
      {
        plotDescription: '对方不死心，说只是想知道真假，还举手做了个发誓的动作。',
        line: "I swear to god, I won't tell a soul.",
        lineCn: '我对天发誓，绝不会说出去。',
        prompt: "选出 'swear to god' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to curse God', cn: '咒骂上帝', correct: false, reason: 'swear 有“咒骂”的意思，但 swear to god 是“发誓”，语气完全相反。' },
          { key: 'B', en: 'to promise very seriously', cn: '郑重发誓、保证', correct: true, reason: '这是在拿最重的东西担保。可惜越是这样说的人，越不会守。' },
          { key: 'C', en: 'to pray in church', cn: '在教堂祈祷', correct: false, reason: '她没有在祈祷，她是在交换条件。语境是化妆间，不是教堂。' }
        ],
        analysis: 'swear to god 是口语里最高级别的保证句式。姜黎听得很清楚——真正会保密的人，不需要发誓。',
        wrongFeedback: '你被那句誓言说服了，把实情漏了半句，第二天通稿满天飞，气血 -10。',
        afterCorrect: '姜黎看了她三秒，说：“那你发吧，我等着看。”她把这句话说得太轻，反而让人后背发凉。女演员讪讪地走了，化妆间的门一关，姜黎才长长吐出一口气。'
      },
      {
        plotDescription: '下午，营销号发出“影后亲口承认”的标题。助理急得团团转，姜黎只扫了一眼。',
        line: "Whatever. They'll write what they want anyway.",
        lineCn: '随便吧。反正他们想写什么就写什么。',
        prompt: "选出 'Whatever' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'anything at all', cn: '任何东西', correct: false, reason: 'whatever 作代词是“任何事物”，但单独成句时是一种态度，不是东西。' },
          { key: 'B', en: "I don't care / it doesn't matter", cn: '随便吧、无所谓', correct: false, reason: '这是最接近的日常义，但此处不是真的无所谓，而是“懒得再争”的疲惫。' },
          { key: 'C', en: 'a dismissive "so what"', cn: '一种不屑的“那又怎样”', correct: true, reason: '这里的 Whatever 带着放弃争辩的意味：你们爱怎么写怎么写。' }
        ],
        analysis: "单独一个 Whatever 是英语里最常见的“结束对话”按钮。姜黎不是不在乎，是知道争了也没用——她已经把力气留给别的地方。",
        wrongFeedback: '你答成“任何东西”，没接住那股疲惫，助理还在旁边追问，气血 -10。',
        afterCorrect: '她把手机推给助理：“不用压，压了更像真的。”然后低头继续看剧本，纸页翻动的声音很轻。助理忽然明白，她不是认输，她是把战场换到了镜头前。'
      },
      {
        plotDescription: '傍晚，沈知夏打来电话，说要不要发个声明。姜黎靠在窗边，反问了一句。',
        line: "Seriously? You think a statement will fix this?",
        lineCn: '你认真的吗？你觉得一份声明能解决这个？',
        prompt: "选出 'Seriously?' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'in a serious manner', cn: '严肃地（副词）', correct: false, reason: 'seriously 作副词是“认真地”，但单独成句加问号，是在质疑对方的话。' },
          { key: 'B', en: 'Are you kidding / are you for real?', cn: '你认真的吗、你在开玩笑吧', correct: true, reason: 'Seriously? 在这里是反问，等于“你居然真这么想？”，不是问态度。' },
          { key: 'C', en: 'Are you sick?', cn: '你病了吗？', correct: false, reason: '形近的 serious 是“严重的”，但 Seriously? 不是在问身体状况。' }
        ],
        analysis: "Seriously? 是英语里最省力的质疑。一个词就把“这想法太天真”说完了。姜黎不是在骂她，是在提醒她别把对手想得太简单。",
        wrongFeedback: '你把她听成关心身体，回了句“我很好”，电话那头沉默了三秒，气血 -10。',
        afterCorrect: '沈知夏在那头静了一会儿，说：“那我不发声明。我去把试镜拿下。”姜黎握着手机，忽然觉得窗外的天色没那么难看了。她轻声说：“对，就这样。”'
      }
    ],
    completeText: '第三十二章结束。姜黎没有回应任何一条热搜。她只是在第二天早上，把自己的行程表发给了沈知夏，末尾写着：下周那场戏，我要求换搭档。'
  },
  {
    id: 'df_33',
    index: 33,
    title: '第 33 章 · 谁把道具换了',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '进组第一天，沈知夏的场记板被人换成了空白的，连拍七条都作废。执行导演当着三十多个人冲她喊，说她连最基本的东西都做不好。她站在原地，手里还捏着那块板。',
    questions: [
      {
        plotDescription: '执行导演把板子摔在监视器旁，声音大得整个棚都能听见。沈知夏走上前，没有低头。',
        line: "Before you yell at me, check who swapped the board.",
        lineCn: '在你冲我吼之前，先查查是谁把板换了。',
        prompt: "根据上下文，选出画线词汇 'yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'to shout loudly', cn: '大声喊、吼', correct: true, reason: 'yell 就是“扯着嗓子喊”。这里带着指责的怒气，不是普通说话。' },
          { key: 'B', en: 'to whisper', cn: '小声耳语', correct: false, reason: 'yell 和 whisper 正好相反，一个是吼，一个是耳语。' },
          { key: 'C', en: 'to laugh', cn: '大笑', correct: false, reason: '现场没人笑得出来。yell 是带情绪的喊叫，不是笑。' }
        ],
        analysis: 'yell at somebody 是“冲某人吼”。沈知夏用这个动作说明她不怕——你可以吼，但先讲道理。',
        wrongFeedback: '你答成“耳语”，没听出那句顶回去的硬气，导演又加了一句，气血 -10。',
        afterCorrect: '导演愣了一下，回头问场务。五分钟后，监控里那段被人动过的画面被调了出来。沈知夏没有再多说一个字，只是把板子重新摆正，站回自己的位置。'
      },
      {
        plotDescription: '人群中有人嘀咕，说是她自己想红，故意演砸博同情。沈知夏听见了。',
        line: "Don't blame me for something you did. I'm not your scapegoat.",
        lineCn: '别把你做过的事赖到我头上。我不是你的替罪羊。',
        prompt: "选出 'blame' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to praise', cn: '表扬', correct: false, reason: 'blame 和表扬毫无关系。这里是往人身上扣责任。' },
          { key: 'B', en: 'to forget', cn: '忘记', correct: false, reason: '她不是在谈记忆，是在谈责任归属。blame 是“怪、问责”。' },
          { key: 'C', en: 'to hold someone responsible', cn: '把责任归到某人身上', correct: true, reason: 'blame somebody for something 就是“因某事怪某人”，这里正是甩锅。' }
        ],
        analysis: 'blame 的核心是“归责”。沈知夏不接这个锅，也不吵，她只是把责任推回该在的地方。',
        wrongFeedback: '你答成“忘记”，那句反驳就变成了软话，对方更来劲，气血 -10。',
        afterCorrect: '她没有回头看那个人，只是把台词本翻开，念了下一场的第一个字。整个棚安静了两秒，然后灯光师按下了开关。那一刻她明白，最好的反驳不是吵，是把戏演对。'
      },
      {
        plotDescription: '收工后，姜黎在停车场等她。沈知夏以为她要劝自己忍。',
        line: "You don't have to argue with them. Just win the scene.",
        lineCn: '你不用跟他们争。把这场戏赢了就行。',
        prompt: "选出 'argue' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to discuss calmly', cn: '平静地讨论', correct: false, reason: 'argue 虽然可以指“论述”，但在这种对峙语境里是“争辩、吵”。' },
          { key: 'B', en: 'to quarrel / debate heatedly', cn: '争吵、据理力争', correct: true, reason: '姜黎说的是“没必要跟他们吵”，argue 是带火气的争辩。' },
          { key: 'C', en: 'to agree', cn: '同意', correct: false, reason: 'argue 是意见相左时的交锋，不是同意。' }
        ],
        analysis: 'argue 有“论证”和“争吵”两张脸。姜黎特意用它，是把沈知夏那股想争一口气的劲，引到表演上去。',
        wrongFeedback: '你答成“同意”，把一句指点听成了附和，姜黎叹了口气，气血 -10。',
        afterCorrect: '沈知夏把包抱在怀里，说：“我不想每次都靠你。”姜黎拉开车门，回头看她：“那就靠你自己赢一次，让我看看。”这句话不像安慰，但沈知夏听懂了，那是一种相信。'
      },
      {
        plotDescription: '第二天重拍，沈知夏一条过。收工时她走到执行导演面前，先开了口。',
        line: "My bad for not checking the board first. My fault, not yours.",
        lineCn: '没先检查板子是我的疏忽。是我的问题，不是你的。',
        prompt: "选出 'My bad' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'I am a bad person', cn: '我是个坏人', correct: false, reason: 'My bad 不是自我评价，是口语里“我的错、我的锅”，语气很轻。' },
          { key: 'B', en: 'Something is wrong with me', cn: '我身体不舒服', correct: false, reason: '这不是身体问题。My bad 是一句道歉，不是症状描述。' },
          { key: 'C', en: "That's my mistake", cn: '那是我的错', correct: true, reason: 'My bad 是英语里最随意的认错方式，等于“我的锅”。' }
        ],
        analysis: 'My bad 的精髓是“认得快、不纠缠”。沈知夏明明是被换的板子，却先认了自己没检查的那部分——这不是软弱，是把台阶递出去，让人下不来台的是对方。',
        wrongFeedback: '你答成“我是坏人”，语气重得吓人，导演反而尴尬地走了，气血 -10。',
        afterCorrect: '执行导演看了她两秒，说：“昨天是我急了。”这是他在这个组第一次向人道谢之外的话。沈知夏点点头，转身去收自己的东西。她知道这场没有真正的赢家，但她至少没有输掉自己。'
      }
    ],
    completeText: '第三十三章结束。那条一条过的镜头被剪进了预告，只有三秒。沈知夏在手机上看完，来回拉了七遍，最后把屏幕按灭，笑得像个傻子。'
  },
  {
    id: 'df_34',
    index: 34,
    title: '第 34 章 · 道歉的价值',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '泄露照片的人在舆论最凶的时候选择了“自首”——那位女演员坐在姜黎的休息室里，眼睛哭得通红，说自己是被公司逼的。姜黎把剧本合上，听她讲完。',
    questions: [
      {
        plotDescription: '女演员第一句话就是“我没有”，说了三遍，声音越来越小。姜黎看着她。',
        line: "You can deny it all you want. The timestamp says otherwise.",
        lineCn: '你想否认多久都行。时间戳不会。',
        prompt: "根据上下文，选出画线词汇 'deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'to refuse to accept the truth', cn: '拒绝接受事实', correct: false, reason: '方向接近，但 deny 更直接：是“说自己没做过”，而不是心理上不接受。' },
          { key: 'B', en: 'to say it is not true', cn: '否认、说不是真的', correct: true, reason: 'deny 就是“矢口否认”。姜黎的意思是：证据摆着，你否认也没用。' },
          { key: 'C', en: 'to give permission', cn: '给予许可', correct: false, reason: 'deny 还有一个义项是“拒绝给予”，但这里不存在许可问题。' }
        ],
        analysis: 'deny 后面常接事实或指控：deny the claim（否认指控）。姜黎没有揭穿，只是把证据放进一句话里。',
        wrongFeedback: '你答成“许可”，这句反问就不成立了，女演员还在辩解，气血 -10。',
        afterCorrect: '女演员的哭声停了一下。姜黎把手机推过去，屏幕上是那张照片的拍摄时间。房间里安静得只剩空调声。姜黎说：“我不是要你承认，我是要你以后别再替别人做这种事。”'
      },
      {
        plotDescription: '女演员低下头，终于说了那三个字。她说完就等着被骂，或者被原谅。',
        line: "I came here to apologize, not to ask for anything.",
        lineCn: '我来是为了道歉，不是来求什么的。',
        prompt: "选出 'apologize' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to say sorry', cn: '道歉、说对不起', correct: true, reason: 'apologize 就是“为做过的事道歉”。她把来意说得很清楚。' },
          { key: 'B', en: 'to explain a reason', cn: '解释原因', correct: false, reason: '解释是 explain。她强调的不是理由，是认错这个动作。' },
          { key: 'C', en: 'to ask for forgiveness', cn: '请求原谅', correct: false, reason: '她特意说“不是来求什么的”。道歉和求原谅在她这里是两件事。' }
        ],
        analysis: 'apologize 是“我承认我错了”，不包含“你必须原谅我”。这句话的重点在后半句：我来道歉，但我不索取。',
        wrongFeedback: '你听成“求原谅”，以为她在讨价还价，姜黎抬了下眉，气血 -10。',
        afterCorrect: '姜黎没有立刻回应。她倒了杯水推过去，说：“道歉我收到了。”女演员抬头，眼里还有点不敢信。姜黎补了一句：“收到，不等于没事。这句话你记住。”'
      },
      {
        plotDescription: '女演员问，那你原谅我吗。姜黎摇了一下头，又点了一下。',
        line: "I can forgive the mistake. I won't forget who made it.",
        lineCn: '错误我可以原谅。但是谁做的，我不会忘。',
        prompt: "选出 'forgive' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to punish someone', cn: '惩罚某人', correct: false, reason: 'forgive 和 punish 是反义。她说的是放下追究，不是施加惩罚。' },
          { key: 'B', en: 'to stop being angry at someone', cn: '不再生某人的气', correct: false, reason: '这是原谅的一部分，但这里更接近“不再追究这件事”，而不是情绪消失。' },
          { key: 'C', en: 'to let go of the wrong done to you', cn: '放下别人对你的伤害、不再追究', correct: true, reason: 'forgive 是“放手不追”。姜黎说可以放下这件事，但记得是谁做的。' }
        ],
        analysis: 'forgive 是“不再拿这件事压你”，不是“我当没发生过”。姜黎把两者分开，是成年人的清醒：原谅是给自己的，记忆是给下一次的。',
        wrongFeedback: '你答成“惩罚”，把一句克制的话听成了威胁，女演员当场站起来，气血 -10。',
        afterCorrect: '女演员愣了很久，说：“我以为你会骂我。”姜黎把剧本重新打开：“骂你太费力气。你还有戏要拍，别把力气花在哭上。”门关上前，她补了一句：“下次有人让你做这种事，先来找我。”'
      },
      {
        plotDescription: '助理事后问她，要不要把这个人彻底封掉。姜黎靠在椅背上，看着天花板。',
        line: "I don't hold a grudge. I just don't hand out trust twice.",
        lineCn: '我不记仇。我只是不会把信任给同一个人两次。',
        prompt: "选出 'grudge' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a long-held resentment', cn: '长期记恨、心结', correct: true, reason: 'grudge 是“揣在怀里不放的恨”。hold a grudge 就是“记仇”。' },
          { key: 'B', en: 'a heavy workload', cn: '沉重的工作量', correct: false, reason: 'grudge 和“工作”无关。它的词感是“怨”。' },
          { key: 'C', en: 'a secret gift', cn: '秘密礼物', correct: false, reason: '这是凭空联想。grudge 只和怨恨有关。' }
        ],
        analysis: 'hold a grudge 是固定搭配，等于“把仇记在心里”。姜黎不记仇，但她也不假装什么都没发生——她把界限画在“信任”上。',
        wrongFeedback: '你答成“工作量”，这句酷话变成了抱怨加班，气血 -10。',
        afterCorrect: '助理没有再劝。姜黎把明天要拍的剧本翻到折角那页，上面有沈知夏的名字。她用笔在旁边画了一条线，很轻，像是怕划破了纸。'
      }
    ],
    completeText: '第三十四章结束。那位女演员后来在采访里说，姜黎是她见过最不好惹也最讲理的人。姜黎看到这条，只回了两个字：无聊。'
  },
  {
    id: 'df_35',
    index: 35,
    title: '第 35 章 · 采访里的人',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那篇爆料的采访里，出现了只有合租过的人才知道的细节：她夜里会开着灯睡，她替身时期每天只吃一顿。沈知夏翻到采访人署名那一行，手指停在屏幕上，很久没有动。',
    questions: [
      {
        plotDescription: '那个名字是她大学室友，也是她把最后一张床让出来的人。沈知夏给她打了电话。',
        line: "I let you sleep on my floor, and you betray me for three thousand yuan?",
        lineCn: '我让你睡我的地板，你为了三千块就出卖我？',
        prompt: "根据上下文，选出画线词汇 'betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'to help secretly', cn: '暗中帮助', correct: false, reason: 'betray 的方向正好相反，是“背弃信任”，不是帮忙。' },
          { key: 'B', en: 'to forget someone', cn: '忘记某人', correct: false, reason: '忘记不构成背叛。betray 的核心是“辜负信任”。' },
          { key: 'C', en: "to break someone's trust", cn: '背叛、辜负信任', correct: true, reason: 'betray 是“把你交给你的信任扔掉”，这里指她出卖了私事。' }
        ],
        analysis: 'betray 比“伤害”更重，因为它预设了信任存在。沈知夏用这个词，是在说：我给你的不是普通的好，是信任。',
        wrongFeedback: '你答成“暗中帮助”，这句质问就变成了感谢，气血 -10。',
        afterCorrect: '电话那头沉默了很久，才说了一句“我也不容易”。沈知夏握着手机，忽然想起那年冬天，两个人挤在一张毯子里分一碗泡面。她发现最难过的不是被卖，是那些记忆现在变得很贵。'
      },
      {
        plotDescription: '对方开始解释，说稿子里的话被改了，她没说过那么难听的。',
        line: "You're a liar. I read every word, and they sound like you.",
        lineCn: '你是个骗子。每个字我都读了，那语气就是你。',
        prompt: "选出 'liar' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a person who tells lies', cn: '说谎的人、骗子', correct: true, reason: 'liar 就是“说假话的人”。沈知夏不是骂人，是在指认。' },
          { key: 'B', en: 'a person who lends money', cn: '借钱的人', correct: false, reason: '形近的 lender 才是“出借方”。liar 和钱无关。' },
          { key: 'C', en: 'a lawyer', cn: '律师', correct: false, reason: '读音有点像，但 liar 和律师毫无关系。' }
        ],
        analysis: 'liar 是很重的词，一旦说出口，关系就回不去了。沈知夏说“每个字我都读了”，意思是：别再骗我第二次。',
        wrongFeedback: '你答成“律师”，一句指控变成了莫名其妙的比喻，气血 -10。',
        afterCorrect: '对方在那头急了，说你怎么能这么说我。沈知夏没有再争，只是把电话挂了。她坐在床边，看着窗外亮着的广告牌，忽然很想知道，自己这些年到底在对谁好。'
      },
      {
        plotDescription: '第二天，那个人出现在片场门口，眼眶红着，说想当面解释。沈知夏看着她。',
        line: "Don't be fake with me now. You weren't crying when you cashed the check.",
        lineCn: '现在别跟我装。你拿钱的时候可没哭。',
        prompt: "选出 'fake' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'not genuine / pretending', cn: '假的、装出来的', correct: true, reason: 'fake 在这里指“虚伪、演的”。她说的不是假货，是假眼泪。' },
          { key: 'B', en: 'a counterfeit product', cn: '仿冒商品', correct: false, reason: 'fake 确实能指假货，但这里形容的是人的态度。' },
          { key: 'C', en: 'very brave', cn: '非常勇敢', correct: false, reason: '这完全是反义。她嫌的是“装”，不是夸人勇敢。' }
        ],
        analysis: 'fake 用来形容人时，等于“假惺惺”。沈知夏不接眼泪，因为她已经看清了顺序：先拿了钱，才来哭。',
        wrongFeedback: '你答成“假货”，这句冷话听起来莫名其妙，气血 -10。',
        afterCorrect: '那人的眼泪停在脸上，忽然说：“你现在红了，当然可以不认我。”沈知夏笑了一下，笑得很轻：“我没红。我只是终于看清了。”她说完就转身进了片场，没有回头。'
      },
      {
        plotDescription: '收工后，姜黎只问了一句：需要我处理吗。沈知夏摇头，说了一句话。',
        line: "She called herself my friend. What a hypocrite.",
        lineCn: '她说自己是我的朋友。真是个伪君子。',
        prompt: "选出 'hypocrite' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a person who says one thing and does another', cn: '说一套做一套的人', correct: false, reason: '方向对了，但 hypocrite 更强调“嘴上讲道德、行为相反”的伪善。' },
          { key: 'B', en: 'a person who is very shy', cn: '非常害羞的人', correct: false, reason: 'hypocrite 和性格内向无关，它说的是道德上的双面。' },
          { key: 'C', en: 'a fake person who pretends to be good', cn: '假装好人、伪善的人', correct: true, reason: 'hypocrite 就是“嘴上讲情义，转身卖你”的那种人。' }
        ],
        analysis: 'hypocrite 来自希腊语“演员”。讽刺的是，沈知夏才是演员，而真正会演的是那个说自己重情义的人。',
        wrongFeedback: '你答成“害羞的人”，这句判断就没力气了，姜黎皱了皱眉，气血 -10。',
        afterCorrect: '姜黎没有评价，只是把一杯热牛奶放到她手里，说：“以后交朋友，先看她在你倒霉的时候站哪边。”沈知夏捧着杯子，忽然觉得这句话比任何安慰都管用。'
      }
    ],
    completeText: '第三十五章结束。沈知夏把那个人从通讯录里删掉，删之前看了三秒。她没有拉黑，也没有发最后一段话——她只是让对方停在了“已删除”这三个字里。'
  },
  {
    id: 'df_36',
    index: 36,
    title: '第 36 章 · 我不当好人',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '解约的风声传出去后，跟了姜黎十二年的经纪人第一次在她面前哭了。她说我为你挡了多少事，你现在为了一个替身要走。姜黎把合约推到桌子中间，说：那我们一笔一笔算。',
    questions: [
      {
        plotDescription: '经纪人说，是我把你捧到今天这个位置的。姜黎把一份旧邮件打印件放下。',
        line: "You weren't protecting me. You were backstabbing me while smiling.",
        lineCn: '你不是在保护我。你是一边笑一边在我背后捅刀。',
        prompt: "根据上下文，选出画线词汇 'backstabbing' 最准确的意思。",
        options: [
          { key: 'A', en: 'attacking from behind physically', cn: '从背后物理攻击', correct: false, reason: 'backstab 有“背后”的字面感，但这里是比喻：趁人不备下黑手。' },
          { key: 'B', en: 'betraying someone who trusts you', cn: '背刺、辜负信任地暗算', correct: true, reason: 'backstab 就是“当面一套、背后一刀”，正是姜黎指控的事。' },
          { key: 'C', en: 'giving a massage', cn: '按摩背部', correct: false, reason: '这是把 stab（刺）完全误读了。此处没有任何身体接触。' }
        ],
        analysis: 'backstab 是 back（背后）+ stab（刺），专指被自己人暗算。姜黎用这个词，是因为刀来自她最信任的位置。',
        wrongFeedback: '你答成“按摩”，这句控诉瞬间失去分量，经纪人还在哭，气血 -10。',
        afterCorrect: '打印件上是一封十二年前的邮件，署名是经纪人，内容是把她推荐给另一家公司换取抽成。姜黎说：“我一直知道。我只是想看看，你能演多久。”房间里的哭声停了。'
      },
      {
        plotDescription: '经纪人改口，说那些都是误会，还说是你自己记错了。姜黎笑了一下。',
        line: "Don't gaslight me. I have the emails, the dates, and the receipts.",
        lineCn: '别对我做心理操控。邮件、日期、凭证我都有。',
        prompt: "选出 'gaslight' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to light a lamp', cn: '点亮煤气灯', correct: false, reason: 'gaslight 源自一部老电影，字面是点灯，但现在只指“让人怀疑自己”。' },
          { key: 'B', en: 'to make someone doubt their own memory', cn: '让人怀疑自己的记忆', correct: false, reason: '这是最接近的定义，但这里还带着“把黑说成白”的操控意味。' },
          { key: 'C', en: 'to twist reality to control someone', cn: '扭曲事实来操控对方', correct: true, reason: 'gaslight 就是“让你怀疑自己疯了”。姜黎直接点破，是不接这套。' }
        ],
        analysis: 'gaslight 是当代英语里很重要的一个词：不是吵架，而是慢慢让你不相信自己的判断。姜黎说“我有证据”，等于把灯重新点亮。',
        wrongFeedback: '你答成“点灯”，这句反击变成了一句古怪的比喻，气血 -10。',
        afterCorrect: '经纪人张了张嘴，没说出话。姜黎把文件按顺序摆好，一份一份，像在摆牌。她说：“你今天可以继续说我记错了。但这些纸上写的东西，不会替我记错。”'
      },
      {
        plotDescription: '经纪人最后说，你离开我什么都不是。姜黎站起来，把椅子推回去。',
        line: "You've manipulated me for twelve years. That ends today.",
        lineCn: '你操控了我十二年。今天到此为止。',
        prompt: "选出 'manipulated' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'controlled me cleverly for your own gain', cn: '为了私利巧妙地操控我', correct: true, reason: 'manipulate 是“在背后摆布”，重点是让对方以为是自己选的。' },
          { key: 'B', en: 'worked with hands', cn: '用手操作', correct: false, reason: 'manipulate 有“手工操作”的义项，但这里对象是人，不是工具。' },
          { key: 'C', en: 'admired me', cn: '欣赏我', correct: false, reason: '这是反义。她说的是被摆布，不是被欣赏。' }
        ],
        analysis: 'manipulate 的可怕之处在于：被操控的人往往还以为自己在做决定。姜黎把它说出口，就是把这层布撕开。',
        wrongFeedback: '你答成“用手操作”，这句控诉变成了技术描述，气血 -10。',
        afterCorrect: '她把笔放在合约上，签了名字。经纪人问她想清楚了吗。姜黎说：“我想了十二年。”签完，她第一次觉得这间办公室这么大，大到可以走出去。'
      },
      {
        plotDescription: '门外，沈知夏在等她，问她怕不怕。姜黎把围巾往上拉了拉。',
        line: "I've been a push over for too long. Not anymore.",
        lineCn: '我当老好人当太久了。不会再有下次。',
        prompt: "选出 'push over' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a person who pushes others', cn: '爱推别人的人', correct: false, reason: 'push over 不是“推人的人”，而是“被一推就倒的人”。' },
          { key: 'B', en: 'an easy person to knock down', cn: '很容易被推倒的东西', correct: false, reason: '字面义接近，但这里形容的是性格：好说话到任人摆布。' },
          { key: 'C', en: 'someone who is too easy to take advantage of', cn: '老好人、任人拿捏的人', correct: true, reason: 'push over 指“一推就倒”的人，也就是不会拒绝、总被占便宜的那种。' }
        ],
        analysis: '标准写法是 pushover，一个词，意思是“好欺负的老好人”。姜黎说自己当够了，是在宣告一种边界的重建。',
        wrongFeedback: '你答成“爱推人的人”，刚好反了，沈知夏愣愣地看着她，气血 -10。',
        afterCorrect: '沈知夏把围巾分了一半给她，两个人挤在风里往前走。姜黎说：“以后有人让你不舒服，你要说出来。”沈知夏问：“那你呢？”姜黎顿了顿：“我在学。”'
      }
    ],
    completeText: '第三十六章结束。解约公告发出的那天晚上，姜黎的手机响了几十次，她一次都没接。她坐在阳台上，把十二年的日程本一页页撕下来，撕到天亮。'
  },
  {
    id: 'df_37',
    index: 37,
    title: '第 37 章 · 轮到我说了',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新剧的发布会临时加了记者提问环节。第一个问题就问她：你是不是靠影后上位。话筒递过来时，她的手心全是汗，台下有几十台机器对着她。',
    questions: [
      {
        plotDescription: '全场安静下来，经纪人已经在台下打手势让她别回答。她握紧话筒，站了起来。',
        line: "I'm here to stand up for myself. Not for anyone else.",
        lineCn: '我站起来是为了替自己说话。不是为了别人。',
        prompt: "根据上下文，选出画线短语 'stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stand in a higher place', cn: '站到更高的地方', correct: false, reason: '这是按字面拆解。stand up for 的重点不是身体位置，是“为谁撑腰”。' },
          { key: 'B', en: 'to support and defend someone or oneself', cn: '为某人或自己挺身而出', correct: true, reason: 'stand up for yourself 就是“为自己说话、维护自己”，正是她此刻做的事。' },
          { key: 'C', en: 'to wait standing up', cn: '站着等待', correct: false, reason: '这里没有任何等待的意思。她是在回应，不是在排队。' }
        ],
        analysis: 'stand up for 是“替被说的人说话”。沈知夏特意加了 myself，是想把这次发声的立场说清楚：不靠谁，替自己。',
        wrongFeedback: '你答成“站高一点”，这句开场就没气势了，台下一片窃笑，气血 -10。',
        afterCorrect: '她把话筒往下压了压，说：“我是从替身做起的。三年，四十七个镜头，没有一次署名。”台下的快门声忽然变密了。她没有看提词器，一个字都没有。'
      },
      {
        plotDescription: '有记者追问，那你对网上的那些照片怎么解释。她吸了一口气。',
        line: "I won't fight back with rumors. I'll fight back with the work.",
        lineCn: '我不会用谣言反击。我要用作品反击。',
        prompt: "选出 'fight back' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to resist and respond to an attack', cn: '反击、回击', correct: true, reason: 'fight back 是“被打之后还手”。她说的是还手的方式，不是打架。' },
          { key: 'B', en: 'to hit someone physically', cn: '动手打人', correct: false, reason: 'fight 有“打架”的意思，但这里是比喻性的“回击”。台下没人动手。' },
          { key: 'C', en: 'to run away', cn: '逃跑', correct: false, reason: 'fight back 和逃跑正好相反。她选择的是正面回应。' }
        ],
        analysis: 'fight back 的重点在 back（还回去）。沈知夏把“还手”的工具换成了作品——这是她唯一拿得出手、也最难被夺走的东西。',
        wrongFeedback: '你答成“打人”，这句话立刻成了负面新闻，气血 -10。',
        afterCorrect: '台下有人笑了一声，很快被旁边的同行看了一眼。沈知夏说：“如果你们想看我怎么还手，可以去看下周的播出。”她把话筒放回架子上，手心还在抖，但没有一个人看出来。'
      },
      {
        plotDescription: '散场时，一个老记者拉住她，低声说：你该找个人替你说话。她摇头。',
        line: "I don't need anyone to defend me. I've learned how to do it myself.",
        lineCn: '我不需要谁来替我辩护。我已经学会自己来了。',
        prompt: "选出 'defend' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to attack first', cn: '先发起攻击', correct: false, reason: 'defend 是“防守、辩护”，不是先动手。' },
          { key: 'B', en: 'to hide someone', cn: '把某人藏起来', correct: false, reason: '这里没有隐藏的意思。她说的是替她说话、挡下来。' },
          { key: 'C', en: 'to speak up in support of someone', cn: '为某人辩护、维护', correct: true, reason: 'defend 在这里是“替人说话、挡住攻击”，不是身体防卫。' }
        ],
        analysis: 'defend 可以是法庭上的“辩护”，也可以是舆论场上的“维护”。她说不需要，是因为过去太多次，都是别人替她定义。',
        wrongFeedback: '你答成“先攻击”，把一句清醒的独立宣言听成了挑衅，气血 -10。',
        afterCorrect: '老记者看了她一会儿，说：“你变了。”沈知夏笑了一下：“我以前也不是不会，是不敢。”她走出会场时，风很大，她忽然想起姜黎说过的那句：把戏演对，就是最好的反驳。'
      },
      {
        plotDescription: '当晚，姜黎发了一条只有十个字的动态，配图是沈知夏的定妆照。营销号立刻炸了。沈知夏打过去问她为什么。',
        line: "Ignore them. I posted it because it's true, not because they're watching.",
        lineCn: '别理他们。我发那条是因为它是真的，不是因为他们在看。',
        prompt: "选出 'Ignore' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to pay no attention to', cn: '不去理会、无视', correct: true, reason: 'ignore 就是“当它不存在”。姜黎让她别把力气花在噪音上。' },
          { key: 'B', en: 'to be angry at', cn: '对……生气', correct: false, reason: 'ignore 是冷处理，不是发火。生气是 be angry。' },
          { key: 'C', en: 'to reply to', cn: '回复', correct: false, reason: 'ignore 恰好是不回复。这里没有任何“回应”的意思。' }
        ],
        analysis: 'ignore 不是逃避，是选择不把注意力交出去。姜黎发那条动态的理由也很清楚：与围观无关，与真假有关。',
        wrongFeedback: '你答成“生气”，把一句安抚听成了抱怨，沈知夏在那头更慌了，气血 -10。',
        afterCorrect: '电话那头很安静，只有她翻东西的声音。过了一会儿，姜黎说：“你去睡觉。明天还有戏。”沈知夏躺下来，把手机放在枕边，第一次觉得热搜上的名字没那么刺眼了。'
      }
    ],
    completeText: '第三十七章结束。那条动态挂了一整夜，评论区吵成一片，姜黎一个字都没再回。第二天清晨，她出现在片场，手里照旧提着两杯豆浆。'
  },
  {
    id: 'df_38',
    index: 38,
    title: '第 38 章 · 沉默的价钱',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '对家公司约在一间没有窗的会议室。对方的负责人把一份“行业联合声明”放在桌上，说只要姜黎点头，沈知夏以后就别想再接到戏。姜黎没有碰那份纸，只是把手机关了静音。',
    questions: [
      {
        plotDescription: '对方说完，等着她开口。姜黎端起水杯，喝了一口，什么也没说。三分钟过去了。',
        line: "Silence is my answer. You'll have to fill it in yourself.",
        lineCn: '沉默就是我的回答。剩下的你自己填吧。',
        prompt: "根据上下文，选出画线词汇 'silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'a quiet room', cn: '安静的房间', correct: false, reason: 'silence 指“无声”这个状态，不是指房间本身。' },
          { key: 'B', en: 'a lack of sound', cn: '没有声音', correct: false, reason: '字面义对，但这里的沉默是一种态度、一种施压手段。' },
          { key: 'C', en: 'refusing to speak as a response', cn: '以不表态作为回应', correct: true, reason: '这里的沉默不是空的，是“我不接你的话”。这就是她的回答。' }
        ],
        analysis: 'Silence is my answer 是谈判里最狠的一句：把压力原封不动退回去。姜黎不解释，对方就得自己猜。',
        wrongFeedback: '你答成“安静的房间”，没读出那份压迫感，对方以为她犹豫了，气血 -10。',
        afterCorrect: '负责人先沉不住气，开始解释声明只是“形式”。姜黎把杯子放下，说：“你刚才说的每一句，我都录了。”会议室里响起空调的风声，那声音忽然变得很大。'
      },
      {
        plotDescription: '对方换了口径，说这不是威胁，只是提醒。姜黎把手机翻过来，屏幕朝上。',
        line: "Don't threaten me. I've been in this industry longer than your company.",
        lineCn: '别威胁我。我在这个行业待的时间比你们公司还长。',
        prompt: "选出 'threaten' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to warn kindly', cn: '善意提醒', correct: false, reason: 'threaten 是“威胁”，重点在于让对方害怕，不是好心提醒。' },
          { key: 'B', en: 'to say you will harm someone', cn: '扬言要伤害对方', correct: true, reason: 'threaten 就是“你敢不答应，我就让你不好过”。' },
          { key: 'C', en: 'to negotiate', cn: '谈判', correct: false, reason: '威胁不是谈判。它取消了对方拒绝的空间。' }
        ],
        analysis: 'threaten 既可以指身体威胁，也可以指职业封杀。对方用的是后者，姜黎直接把这层纸捅破。',
        wrongFeedback: '你答成“善意提醒”，等于替对方把话说软了，气血 -10。',
        afterCorrect: '负责人笑了一下，说姜老师果然厉害。姜黎也笑了，笑意没有到眼睛：“厉害的不是我。是你们敢把这句话写进声明里。”她说完，把那份纸推了回去，纸角正好和桌沿对齐。'
      },
      {
        plotDescription: '对方最后摊牌，说我们可以撤，但你得保证她不出现在今年的评奖季。',
        line: "One post from me can ruin that plan. But I'd rather not spend my credit on you.",
        lineCn: '我一条动态就能让这个计划黄掉。只是我懒得把人情花在你身上。',
        prompt: "选出 'ruin' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to destroy completely / make it fail', cn: '彻底毁掉、让计划失败', correct: true, reason: 'ruin 是“把东西弄到没法要”，这里指让计划彻底失败。' },
          { key: 'B', en: 'to repair', cn: '修复', correct: false, reason: 'ruin 和 repair 是反义。她说的是毁掉，不是修补。' },
          { key: 'C', en: 'to rent', cn: '租用', correct: false, reason: '形近词是 rent。ruin 与租赁毫无关系。' }
        ],
        analysis: 'ruin 比 destroy 更常用来形容“把事情搞黄”。姜黎很克制：她说的不是“我要毁了你”，而是“我能，但我不屑”。',
        wrongFeedback: '你答成“修复”，这句话的锋芒全没了，气血 -10。',
        afterCorrect: '会议室安静了几秒。负责人把笔收起来，说那就当今天没见过。姜黎站起来，走之前说了一句：“声明可以发。但你们要考虑清楚，谁的名字会先被记住。”'
      },
      {
        plotDescription: '回到车上，助理问她要不要反击到底。姜黎看着窗外，摇了摇头，又点了下头。',
        line: "I won't destroy them. I just want them to know I could.",
        lineCn: '我不会摧毁他们。我只想让他们知道，我有这个能力。',
        prompt: "选出 'destroy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to slightly annoy', cn: '稍微惹恼', correct: false, reason: 'destroy 是“彻底毁掉”，程度远远超过惹恼。' },
          { key: 'B', en: 'to wreck completely', cn: '彻底摧毁、毁掉', correct: true, reason: 'destroy 是“让某物不复存在”，比 ruin 更彻底、更重。' },
          { key: 'C', en: 'to discuss', cn: '讨论', correct: false, reason: '这句里没有任何讨论的意思，她说的是摧毁的能力。' }
        ],
        analysis: 'destroy 和 ruin 都表示毁掉，但 destroy 更彻底，常带“无法复原”的意思。姜黎不用它，是她的分寸。',
        wrongFeedback: '你答成“惹恼”，把一句威慑听成了小打小闹，气血 -10。',
        afterCorrect: '助理松了口气。姜黎却说：“把今天的录音存三份，一份给我，一份给律师，一份封起来。”助理问封起来做什么。她看着窗外：“等他们哪天真动手。”'
      }
    ],
    completeText: '第三十八章结束。那份联合声明最后没有发出来。圈内没人知道原因，只在传一句话：姜黎那天什么都没说，却让一整个会议室的人出了一身汗。'
  },
  {
    id: 'df_39',
    index: 39,
    title: '第 39 章 · 我不想变成她',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '律师把一份材料放在她面前：只要公开，那个卖故事的室友会立刻被行业拉黑，连工作都保不住。沈知夏翻了两页，把文件夹合上，推了回去。',
    questions: [
      {
        plotDescription: '律师很意外，问她是不是心软了。她摇头，看着桌面。',
        line: "I don't regret what I did for her. I only regret trusting her.",
        lineCn: '我不后悔为她做过的那些事。我只后悔信了她。',
        prompt: "根据上下文，选出画线词汇 'regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'to feel happy about', cn: '对……感到高兴', correct: false, reason: 'regret 和高兴相反，是“想起来就难受”。' },
          { key: 'B', en: 'to feel sorry about something done', cn: '后悔、为做过的事难过', correct: true, reason: 'regret 是回头看时的“要是没那样就好了”，这里指后悔信错了人。' },
          { key: 'C', en: 'to forget completely', cn: '彻底忘记', correct: false, reason: 'regret 恰恰是忘不掉。她记得，所以才会难受。' }
        ],
        analysis: 'regret 后面接的事，往往是“已经无法更改”的。沈知夏分得很清楚：帮人不后悔，信错人后悔。',
        wrongFeedback: '你答成“高兴”，这句坦白彻底反了，律师愣了一下，气血 -10。',
        afterCorrect: '律师问她要不要再想想。沈知夏说：“我帮她是真的想帮。这份账，我不想算成另一笔。”她把材料推得更远了一点，像在推开一件不属于自己的东西。'
      },
      {
        plotDescription: '律师提醒她，这样的机会只有一次。她笑了笑。',
        line: "I don't want revenge. I want to keep sleeping at night.",
        lineCn: '我不想要复仇。我想晚上还能睡得着。',
        prompt: "选出 'revenge' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to forgive', cn: '原谅', correct: false, reason: 'revenge 和 forgive 是两条相反的路：一个是还手，一个是放手。' },
          { key: 'B', en: 'to forget', cn: '忘记', correct: false, reason: '报复不是忘记。它恰恰是记得太清楚。' },
          { key: 'C', en: 'harm done to get even', cn: '为了扯平而施加的报复', correct: true, reason: 'revenge 是“你伤我，我也要你痛”。她说自己不要这个。' }
        ],
        analysis: 'revenge 的重点是“扯平”。沈知夏放弃的不是胜利，是一种会把她也拖进去的循环。',
        wrongFeedback: '你答成“原谅”，把一份清醒的拒绝说成了心软，气血 -10。',
        afterCorrect: '律师收起文件，说这在业内很少见。沈知夏说：“我不是好人。我只是知道，一旦开始还手，我会停不下来。”她说完低头看了眼手机，屏保是片场的一张空椅子。'
      },
      {
        plotDescription: '晚上，姜黎在她家的阳台上问：那你不难受吗。沈知夏靠着栏杆。',
        line: "I want peace more than I want to win.",
        lineCn: '比起赢，我更想要安宁。',
        prompt: "选出 'peace' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'calmness with no conflict', cn: '没有纷争的平静', correct: true, reason: 'peace 指心里和身边的安宁。她把“赢”放在了它后面。' },
          { key: 'B', en: 'a piece of something', cn: '一块、一片', correct: false, reason: '形近词是 piece。和平和“一块”毫无关系。' },
          { key: 'C', en: 'a legal agreement', cn: '法律协议', correct: false, reason: '这里有“结束对立”的意思，但她讲的不是合同。' }
        ],
        analysis: 'peace 不只是“战争结束”，也可以是“心里不再打仗”。沈知夏说的是后者——她不想再跟自己较劲。',
        wrongFeedback: '你答成“一块”，这句心里话断了，姜黎沉默地看着她，气血 -10。',
        afterCorrect: '姜黎把一杯温水塞进她手里，说：“你有资格生气。”沈知夏说：“我知道。我只是不想把接下来的十年也赔进去。”夜风把她的头发吹到脸上，姜黎伸手替她别到耳后。'
      },
      {
        plotDescription: '第二天，那个室友打来电话，说想当面谈谈。沈知夏答应了，但只肯在片场门口见。',
        line: "Let's call a truce. I'm not doing this because I forgive you.",
        lineCn: '我们停战吧。我这么做不是因为我原谅你了。',
        prompt: "选出 'truce' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a total surrender', cn: '彻底投降', correct: false, reason: 'truce 是双方停手，不是一方认输。' },
          { key: 'B', en: 'a permanent friendship', cn: '永久的友谊', correct: false, reason: '停战不等于和好。她特意说了“不是原谅”。' },
          { key: 'C', en: 'an agreement to stop fighting', cn: '停止对抗的临时协议', correct: true, reason: 'truce 是“先别打了”，时间有限，条件清楚。' }
        ],
        analysis: 'truce 是战争里的词，用在人际里就是“暂时休战”。沈知夏把界限说得很清楚：停火，但没和好。',
        wrongFeedback: '你答成“永久友谊”，把一份克制的边界说成了和解，气血 -10。',
        afterCorrect: '电话那头沉默了一会儿，说了句谢谢。沈知夏说：“不用谢。以后你走你的，我走我的。见面点个头就够了。”她挂了电话，站在片场门口，风把她的外套吹得鼓起来，像终于把什么东西放下了。'
      }
    ],
    completeText: '第三十九章结束。那份材料最后被她锁进了抽屉最底层。她给自己立了个规矩：除非对方再动手，否则一个字都不提。'
  },
  {
    id: 'df_40',
    index: 40,
    title: '第 40 章 · 各退一步',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '她们吵了一架，起因很小：姜黎替她推掉了一个访谈，没有问过她。沈知夏说你还是把我当需要保护的人。姜黎摔门出去，在楼下站了四十分钟，回来时手里提着两份炒面。',
    questions: [
      {
        plotDescription: '门开了一条缝，沈知夏坐在沙发上，眼睛是红的。姜黎把炒面放在桌上。',
        line: "I'm not here to win the argument. I'm here to fix this.",
        lineCn: '我不是来吵赢的。我是来把事情修好的。',
        prompt: "根据上下文，选出画线词汇 'argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a heated disagreement', cn: '争执、争吵', correct: true, reason: 'argument 在这里是“吵起来的那件事”，不是逻辑论证。' },
          { key: 'B', en: 'a logical proof', cn: '逻辑论证', correct: false, reason: 'argument 确实有“论点”的义项，但这里两个人是在吵架。' },
          { key: 'C', en: 'a friendly chat', cn: '友好的聊天', correct: false, reason: '刚才摔了门，没人会觉得那是聊天。' }
        ],
        analysis: 'argument 既是“论点”也是“争吵”，判断靠语境。这里门都摔了，当然是后者。姜黎说“不是来吵赢的”，是把姿态先放下。',
        wrongFeedback: '你答成“逻辑论证”，这句和解的开场白就不成立了，沈知夏把头转开，气血 -10。',
        afterCorrect: '沈知夏没有动，也没有说话。姜黎把一次性筷子拆开，摆到她面前，说：“面要坨了。”这是她能想到的最不擅长的一句软话，但她说得很认真。'
      },
      {
        plotDescription: '沈知夏终于开口，说你从来不问我想要什么。姜黎没有反驳。',
        line: "I admit it. I'd rather fight with you than lose you to silence.",
        lineCn: '我承认。我宁愿跟你吵，也不愿意在沉默里失去你。',
        prompt: "选出 'fight' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to have a physical battle', cn: '身体上的打斗', correct: false, reason: '这里没有动手，fight 指的是“吵、争”。' },
          { key: 'B', en: 'to struggle against', cn: '对抗、抗争', correct: false, reason: '方向接近，但这里不是对外抗争，是两个人之间的争执。' },
          { key: 'C', en: 'to argue intensely with someone close', cn: '与亲近的人激烈争吵', correct: true, reason: 'fight with someone 在亲密关系里常指“吵架”，她宁愿吵也不要冷战。' }
        ],
        analysis: 'fight 的对象是人时，可能是“并肩作战”，也可能是“对着吵”。加了 with you 和 than lose you，意思就很清楚了。',
        wrongFeedback: '你答成“身体打斗”，这句话听起来像要动手，沈知夏往后缩了一下，气血 -10。',
        afterCorrect: '沈知夏看着她，忽然说：“你刚才在楼下站了多久。”姜黎说没多久。她低头拆筷子，耳朵红了。沈知夏伸手，把她的手按住了，说：“四十分钟。我从窗户看见了。”'
      },
      {
        plotDescription: '姜黎说，我以后不替你做决定。沈知夏说，我也不是要你什么都不管。',
        line: "Can we reach a compromise? You tell me what you need, and I listen.",
        lineCn: '我们各退一步行不行？你告诉我你需要什么，我听着。',
        prompt: "选出 'compromise' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a total surrender by one side', cn: '一方彻底让步', correct: false, reason: 'compromise 是双方各让一点，不是一方全输。' },
          { key: 'B', en: 'each side giving up a little', cn: '双方各退一步', correct: true, reason: 'compromise 的核心就是“都放下一点”，所以她说“我们”。' },
          { key: 'C', en: 'a promise never to argue', cn: '保证永远不吵架', correct: false, reason: '妥协不是消灭争执，是争执之后找到中间那一步。' }
        ],
        analysis: 'compromise 不是软弱，是承认对方也有分量。姜黎用“listen”收尾，等于先让出话语权。',
        wrongFeedback: '你答成“一方彻底让步”，把平等谈成了认输，姜黎握着筷子的手停了一下，气血 -10。',
        afterCorrect: '沈知夏想了想，说：“以后要替我拒绝什么，先发消息问我一句。哪怕我在拍戏，我也会回一个字。”姜黎点头，说：“行。那你也答应我一件事——别一个人扛。”'
      },
      {
        plotDescription: '炒面吃到一半，沈知夏忽然说，其实我不怕被黑，我怕你后悔。姜黎放下筷子。',
        line: "Then let me say it once. I won't regret you.",
        lineCn: '那我就说一次。我不会后悔认识你。',
        prompt: "选出 'regret' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to feel sorry about a choice later', cn: '日后为某个选择后悔', correct: true, reason: 'regret 指的是“回头觉得不该这样”。她说的是将来的那种后悔。' },
          { key: 'B', en: 'to complain', cn: '抱怨', correct: false, reason: '后悔是对自己选择的否定，抱怨是对外界发牢骚。' },
          { key: 'C', en: 'to remember', cn: '记得', correct: false, reason: '记得是 remember。regret 带着情绪，是“想起来就难受”。' }
        ],
        analysis: '这一句是对 Ch39 的回应。沈知夏后悔信错了人，姜黎要她相信：有一种选择，不会变成后悔。',
        wrongFeedback: '你答成“抱怨”，这句话的分量就没了，沈知夏低下头吃面，气血 -10。',
        afterCorrect: '房间里安静了几秒。沈知夏把脸埋进面碗的热气里，声音很小：“那你要说话算话。”姜黎说：“我这个人别的不行，说话算话还行。”两个人都笑了，笑得有点难看，但那是这一整年里最松的一口气。'
      }
    ],
    completeText: '第四十章结束。那晚她们把两份炒面吃得干干净净，谁也没提白天吵了什么。临睡前，沈知夏在窗台上看到楼下那盏路灯，忽然明白：有人愿意在冷风里站四十分钟，就为了回来跟她吃一顿面。'
  },
  {
    id: 'df_41',
    index: 41,
    title: '第 41 章 · 两个人的采访',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '双人采访排在下午三点，灯光师调了二十分钟灯。主持人拿出一张卡片，笑着说今天的问题有点直。姜黎靠在椅背上，沈知夏把水杯往她那边推了推。',
    questions: [
      {
        plotDescription: '主持人先问沈知夏：以后要怎么在圈里走。她想了想，说了一句很稳的话。',
        line: "I'm not the most talented, but I'm savvy enough to know what I'm worth.",
        lineCn: '我不是最有天赋的，但我够精明，知道自己的价值。',
        prompt: "根据上下文，选出画线词汇 'savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very emotional', cn: '情绪化的', correct: false, reason: 'savvy 与情绪无关，它讲的是判断力。' },
          { key: 'B', en: 'shrewd and practical', cn: '精明的、懂行的', correct: true, reason: 'savvy 指“懂门道、会算账”，是夸人脑子清楚。' },
          { key: 'C', en: 'silly', cn: '傻乎乎的', correct: false, reason: '这是反义。savvy 是“聪明老练”。' }
        ],
        analysis: 'savvy 常作后缀：tech-savvy（懂技术）、money-savvy（会理财）。沈知夏把它用在“知道自己值多少”上，是在说清醒。',
        wrongFeedback: '你答成“傻乎乎的”，这句自评成了自贬，主持人愣住，气血 -10。',
        afterCorrect: '主持人追问她怎么定义“自己的价值”。沈知夏说：“我以前觉得是别人的评价。现在我觉得，是我愿意为什么东西付出多少。”姜黎在旁边听着，忽然低头笑了一下，笑意很浅。'
      },
      {
        plotDescription: '主持人转向姜黎，问她对网上那些“为了新人自降身价”的说法怎么看。姜黎没有绕。',
        line: "I'll be blunt. I don't do charity, and I don't do favors. I do what makes sense.",
        lineCn: '我直说。我不搞慈善，也不做人情。我只做有道理的事。',
        prompt: "选出 'blunt' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'direct and not gentle', cn: '直白、不绕弯（甚至有点冲）', correct: true, reason: 'blunt 就是“说话不修饰”。她自己先声明，是不想让别人替她美化。' },
          { key: 'B', en: 'not sharp anymore', cn: '钝的、不锋利', correct: false, reason: 'blunt 的本义是“刀钝”，但形容说话是“嘴不留情”。' },
          { key: 'C', en: 'very polite', cn: '非常有礼貌', correct: false, reason: '她恰恰是在拒绝客套。blunt 和委婉相反。' }
        ],
        analysis: 'blunt 用在说话上是“不包糖衣”。姜黎先亮出这个词，等于提前把对方的引导堵回去。',
        wrongFeedback: '你答成“刀钝了”，这句话变成了奇怪的比喻，主持人笑场，气血 -10。',
        afterCorrect: '主持人愣了一下，说姜老师果然直。姜黎说：“我不是直，我是懒。绕一圈还要说一样的话，太累。”沈知夏在旁边忍着笑，把水杯往她手边又推近了一点。'
      },
      {
        plotDescription: '主持人换了个轻松的话题，问她们私下谁比较会照顾人。姜黎看了沈知夏一眼。',
        line: "She's the sassy one. She'll tease you to death and then hand you a coat.",
        lineCn: '她是嘴厉害的那个。能把你怼到没话说，转头又给你递外套。',
        prompt: "选出 'sassy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very shy', cn: '非常害羞', correct: false, reason: 'sassy 和害羞相反，是“敢说、带点俏皮的冲”。' },
          { key: 'B', en: 'rude and mean', cn: '粗鲁刻薄', correct: false, reason: 'sassy 有玩笑的分寸，不带恶意；刻薄是 mean。' },
          { key: 'C', en: 'bold, cheeky and quick with words', cn: '嘴快、带点俏皮的泼辣', correct: true, reason: 'sassy 是“又冲又可爱”，常形容会怼人但不讨人厌。' }
        ],
        analysis: 'sassy 是带笑意的泼辣，不是骂人。姜黎用这个词，其实是在夸——她说的“递外套”才是重点。',
        wrongFeedback: '你答成“害羞”，这句评价完全反了，沈知夏在镜头前瞪了她一眼，气血 -10。',
        afterCorrect: '沈知夏立刻回了一句：“那你呢？你是闷的那个。”姜黎说：“我是负责结账的那个。”主持人笑到拿不住卡片。这一段后来成了预告里最出圈的三秒。'
      },
      {
        plotDescription: '最后一个问题，主持人问她们怎么回应“靠关系上位”的质疑。气氛紧了一下。',
        line: "Their insults are pretty lame. We'll answer with a film.",
        lineCn: '他们那些骂人的话挺没劲的。我们用一部电影回答。',
        prompt: "选出 'lame' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'unable to walk', cn: '腿脚不便', correct: false, reason: 'lame 的本义是“跛的”，但这里形容话语“没劲、拙劣”。' },
          { key: 'B', en: 'weak and unimpressive', cn: '逊、没水平', correct: true, reason: 'lame 形容事物就是“很烂、很没劲”，正好对应“骂人的话”。' },
          { key: 'C', en: 'extremely funny', cn: '非常好笑', correct: false, reason: 'lame 在这里不是好笑，而是“差劲到懒得回应”。' }
        ],
        analysis: 'lame 是年轻人常用的评价词：a lame excuse（烂借口）、a lame joke（烂笑话）。轻，但杀伤力不小。',
        wrongFeedback: '你答成“腿脚不便”，这句话就成了人身攻击，气血 -10。',
        afterCorrect: '采访结束后，姜黎在走廊里说：“你今天答得比我好。”沈知夏说：“因为你在旁边。”姜黎停下脚步看了她一会儿，什么也没说，只是把她散下来的一缕头发别回去。'
      }
    ],
    completeText: '第四十一章结束。那期采访播出后，评论区第一次出现了另一种声音：她们好像真的只是两个在认真工作的人。'
  },
  {
    id: 'df_42',
    index: 42,
    title: '第 42 章 · 一锅失败的汤',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎第一次下厨，煮了一锅看不出是什么的汤。灶台溅得到处是油，围裙系反了，锅盖还在冒泡。沈知夏进门时，愣了三秒，然后很没给面子地笑出了声。',
    questions: [
      {
        plotDescription: '沈知夏尝了一口，眼睛亮起来，说没想到你还有这一手。姜黎不太信。',
        line: "Really? I thought it would be a dope surprise, but I can't taste anything.",
        lineCn: '真的吗？我本来想搞个超酷的惊喜，可我自己什么都尝不出来。',
        prompt: "根据上下文，选出画线词汇 'dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'a drug', cn: '毒品', correct: false, reason: 'dope 确实有“毒品”的义项，但在口语里形容事物是“超棒”。' },
          { key: 'B', en: 'stupid', cn: '愚蠢的', correct: false, reason: '这是老式用法。现代口语里说 a dope surprise 是夸，不是骂。' },
          { key: 'C', en: 'really cool / awesome', cn: '超酷、很棒', correct: true, reason: 'dope 是年轻人常用的夸赞词，等于 cool、awesome。' }
        ],
        analysis: 'dope 有两张脸：一种旧义是“笨蛋”，一种是当代俚语的“酷毙了”。这里她期待的是惊喜，所以是后者。',
        wrongFeedback: '你答成“毒品”，这句期待变成了自曝，沈知夏差点被汤呛到，气血 -10。',
        afterCorrect: '沈知夏说：“你尝不出来，是因为你煮了两小时，鼻子已经废了。”姜黎低头尝了一口，眉毛立刻皱起来，说：“咸。”沈知夏笑得扶着台面，说她就喜欢这个味道。'
      },
      {
        plotDescription: '沈知夏笑她切菜切得大小不一，还有一片姜掉在地上没捡。姜黎有点不好意思。',
        line: "I know it's sloppy. I've never had to cook for anyone before.",
        lineCn: '我知道很随便。我以前从没为谁做过饭。',
        prompt: "选出 'sloppy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'careless and untidy', cn: '马虎、邋遢的', correct: true, reason: 'sloppy 是“做得不精细、乱糟糟”，正指她那锅一塌糊涂的汤。' },
          { key: 'B', en: 'too wet', cn: '太湿了', correct: false, reason: 'sloppy 有“湿软”的义项，但这里说的是做饭的手艺。' },
          { key: 'C', en: 'extremely precise', cn: '非常精确', correct: false, reason: '这完全是反义。她自己在承认做得粗糙。' }
        ],
        analysis: 'sloppy work（马虎的活）、sloppy handwriting（潦草的字），都带“不认真”的评价。姜黎这句话的重点却不是马虎，是“从没为谁做过”。',
        wrongFeedback: '你答成“太湿”，没接住那句藏起来的坦白，气血 -10。',
        afterCorrect: '沈知夏把那片掉在地上的姜捡起来，扔进垃圾桶，说：“那你以后多做几次。”姜黎问：“这么难吃还做？”沈知夏说：“我说的是以后。”然后低头喝了一大口汤，烫得直吸气。'
      },
      {
        plotDescription: '吃饭时，沈知夏一直在看手机，回消息回得很快。姜黎把碗放下，问她在跟谁聊。',
        line: "I know I'm being needy, but I want your attention on me for one hour.",
        lineCn: '我知道我这样有点缺爱，但我想要你专心陪我一个小时。',
        prompt: "选出 'needy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'poor and lacking money', cn: '贫穷、缺钱', correct: false, reason: 'need 是“需要”，但 needy 形容人是“情感上索取太多”，不是缺钱。' },
          { key: 'B', en: 'wanting too much attention', cn: '黏人、过度需要关注', correct: true, reason: 'needy 就是“需要对方不停地给回应”，带一点自我承认的不好意思。' },
          { key: 'C', en: 'in need of food', cn: '需要食物', correct: false, reason: '桌上就有一锅汤，这里缺的是注意力。' }
        ],
        analysis: 'needy 在亲密关系里常带轻微的负面色彩。姜黎主动用这个词，是先承认自己的要求有点多，再把它说出来。',
        wrongFeedback: '你答成“缺钱”，这句示弱变成了哭穷，沈知夏一时没反应过来，气血 -10。',
        afterCorrect: '沈知夏立刻把手机倒扣在桌上，说：“对不起。是剧组的事，我该先跟你说。”姜黎说：“我不是不让你工作。”她顿了顿，“我只是……有点不习惯有人在旁边。”'
      },
      {
        plotDescription: '沈知夏笑着说她这样有点自私。姜黎没有生气，反问了一句。',
        line: "Maybe I'm selfish. But I spent twenty years being generous to strangers.",
        lineCn: '也许我确实自私。但我已经对陌生人慷慨了二十年。',
        prompt: "选出 'selfish' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very generous', cn: '非常慷慨', correct: false, reason: 'selfish 和慷慨是反义。她是在认一个不太好听的评价。' },
          { key: 'B', en: 'thinking only of others', cn: '只想着别人', correct: false, reason: '这也反了。selfish 是只想着自己。' },
          { key: 'C', en: 'putting your own wants first', cn: '只考虑自己的需求', correct: true, reason: 'selfish 就是“先想到自己”。她说这次想为自己要一次。' }
        ],
        analysis: 'selfish 通常带批评，但姜黎把它接了下来，还给它找了理由：二十年都在对别人好，这次想对一个人贪心一点。',
        wrongFeedback: '你答成“只想着别人”，这句自我辩护就失去了锋芒，气血 -10。',
        afterCorrect: '沈知夏没有反驳。她把椅子挪到姜黎旁边，肩膀挨着肩膀，说：“那这一个小时归你。”姜黎低头继续喝汤，喝得很慢，像是要把这一个小时拉长一点。'
      }
    ],
    completeText: '第四十二章结束。那锅汤最后剩了一半，两个人谁也没倒。第二天姜黎又煮了一次，还是咸。沈知夏说比昨天好，姜黎知道她在骗人，但还是把碗喝空了。'
  },
  {
    id: 'df_43',
    index: 43,
    title: '第 43 章 · 红毯之前',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '颁奖礼前一小时，更衣室只剩她们两个人。姜黎换好礼服转过身，沈知夏手里的耳环掉了一颗，滚到地毯上。她蹲下去捡，半天没起来。',
    questions: [
      {
        plotDescription: '姜黎问她怎么了，她站起来，把另一只耳环递过去，声音有点发紧。',
        line: "You look gorgeous. I forgot what I was going to say.",
        lineCn: '你太好看了。我忘了自己要说什么。',
        prompt: "根据上下文，选出画线词汇 'gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely tired', cn: '非常疲惫', correct: false, reason: 'gorgeous 与疲惫无关，它说的是让人移不开眼的漂亮。' },
          { key: 'B', en: 'stunningly beautiful', cn: '美得惊人', correct: true, reason: 'gorgeous 比 pretty 更重，是“美到让人愣住”，正好对应她忘词。' },
          { key: 'C', en: 'very polite', cn: '非常有礼貌', correct: false, reason: '这里夸的是外貌，不是教养。' }
        ],
        analysis: 'gorgeous 是赞美里很高级的一个词，比 beautiful 更有冲击力。沈知夏说不出完整句子，是因为她真的被看见了。',
        wrongFeedback: '你答成“疲惫”，这句夸赞变成了关心，姜黎挑了下眉，气血 -10。',
        afterCorrect: '姜黎把耳环接过去，说：“那我再问一次，你刚才要说什么。”沈知夏说：“我说……你别笑我。”姜黎说：“我尽量。”结果两个人都没忍住，笑得化妆师在门外敲了三下。'
      },
      {
        plotDescription: '化妆师送来一张卡片，说是品牌方给的。沈知夏先接过来，看了一眼，脸色变了。',
        line: "This note is weird. It says 'enjoy your last red carpet'.",
        lineCn: '这张纸条很奇怪。上面写着“享受你最后一次红毯”。',
        prompt: "选出 'weird' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'extremely beautiful', cn: '极美的', correct: false, reason: 'weird 和“美”没有关系，它说的是“不对劲”。' },
          { key: 'B', en: 'fashionable', cn: '时髦的', correct: false, reason: '这里没有任何夸赞。她读到的是威胁。' },
          { key: 'C', en: 'strange and unsettling', cn: '奇怪、让人不舒服的', correct: true, reason: 'weird 是“不对劲”。这句话的内容让人后背发凉，所以她说奇怪。' }
        ],
        analysis: 'weird 的语气比 strange 更口语，带一点“这里有问题”的警觉。她的重点不是纸条怪，是纸条恶毒。',
        wrongFeedback: '你答成“极美的”，这张威胁的卡片被当成了夸奖，气血 -10。',
        afterCorrect: '姜黎接过来看了一眼，把它折成两半，扔进垃圾桶，说：“不要影响你。”沈知夏说：“万一是真的呢。”姜黎说：“那我们就一起走完这条路，让他们看看什么叫最后一次。”'
      },
      {
        plotDescription: '工作人员说，刚才有个不认识的人在走廊里打听她们的化妆间。沈知夏皱起眉。',
        line: "That guy hanging around backstage is sketchy. Don't let him near the door.",
        lineCn: '那个在后台晃的人很可疑。别让他靠近门口。',
        prompt: "选出 'sketchy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'suspicious / possibly dishonest', cn: '可疑、不太靠谱', correct: true, reason: 'sketchy 是口语里“看着就不对劲”的意思，常用于人和场所。' },
          { key: 'B', en: 'good at drawing', cn: '擅长画画的', correct: false, reason: '形近词是 sketch（素描），但 sketchy 在这里是“可疑”。' },
          { key: 'C', en: 'very handsome', cn: '非常帅', correct: false, reason: '这里没人夸长相。她说的是安全。' }
        ],
        analysis: 'sketchy 是很有用的日常词：a sketchy neighborhood（不太安全的街区）、a sketchy deal（看着就不靠谱的交易）。',
        wrongFeedback: '你答成“擅长画画”，这句警告就失效了，气血 -10。',
        afterCorrect: '姜黎叫来保安，把后台通道清了一遍。她做完这些，回头看见沈知夏站在原地，手还在抖。她走过去，把那只手握住，说：“没事。我们还有四十分钟。”'
      },
      {
        plotDescription: '上场前，姜黎忽然说，其实她紧张。沈知夏笑了，说三届影后还紧张。',
        line: "It's bizarre, right? Twenty years in, and my hands still shake.",
        lineCn: '很诡异吧？入行二十年了，我的手还是会抖。',
        prompt: "选出 'bizarre' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very normal', cn: '非常正常', correct: false, reason: 'bizarre 是“反常到让人费解”，和正常相反。' },
          { key: 'B', en: 'strangely odd', cn: '离奇、匪夷所思的', correct: true, reason: 'bizarre 比 weird 更强调“难以理解的怪”，她说自己的紧张很没道理。' },
          { key: 'C', en: 'a type of market', cn: '一种集市', correct: false, reason: '形近词是 bazaar（集市）。bizarre 是形容词，表示怪异。' }
        ],
        analysis: 'bizarre 常用于“不合常理的怪事”。姜黎用它自嘲：一个演了二十年的人，居然还会紧张到发抖。',
        wrongFeedback: '你答成“集市”，这句坦白变成了莫名其妙的比喻，气血 -10。',
        afterCorrect: '沈知夏把她的手包在自己掌心里，说：“那就一起抖。”姜黎愣了一下，笑出来。门外的音乐已经响了，她们深吸一口气，然后推开门，走进了那道光里。'
      }
    ],
    completeText: '第四十三章结束。两个人走上红毯的那一刻，闪光灯亮得看不清路。沈知夏攥着姜黎的手，握得很紧，紧到后来照片里都能看出来。'
  },
  {
    id: 'df_44',
    index: 44,
    title: '第 44 章 · 台上三分钟',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '颁奖礼开场，主办方临时让她们上台说几句。提词器在这一刻黑屏了，台下坐着半个行业的人。沈知夏看了姜黎一眼，姜黎把话筒换到左手。',
    questions: [
      {
        plotDescription: '大屏幕上还停着上一段视频的最后一帧，全场等她们开口。姜黎决定先说话。',
        line: "Well, this is an epic fail for the teleprompter.",
        lineCn: '好吧，提词器这次算是史诗级翻车了。',
        prompt: "根据上下文，选出画线词汇 'epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very long poem', cn: '长篇史诗', correct: false, reason: 'epic 的本义是史诗，但这里形容 fail，意思是“规模巨大”。' },
          { key: 'B', en: 'extremely old', cn: '非常古老', correct: false, reason: 'epic 不等于 old。它说的是分量和规模。' },
          { key: 'C', en: 'huge / on a grand scale', cn: '史诗级的、程度极大的', correct: true, reason: 'epic fail 是网络常用语，意思是“失败得非常彻底、非常有排面”。' }
        ],
        analysis: 'epic 从“史诗”引申为“规模惊人”。epic fail 不是骂人，是一种自嘲式的幽默，用来把尴尬变成笑点。',
        wrongFeedback: '你答成“长篇史诗”，这句自嘲没落地，台下更安静了，气血 -10。',
        afterCorrect: '台下笑了一片。姜黎没有停，接着说：“那我们就说点真的。”沈知夏在旁边悄悄松了口气，手指在裙摆上放松下来。那一刻她忽然明白，所谓台风，就是把意外变成台词。'
      },
      {
        plotDescription: '沈知夏接过话筒，说自己第一次站在这个台上，腿在抖。她说得很坦白。',
        line: "I know this sounds cringe, but I used to watch this show from a rental flat.",
        lineCn: '我知道这话听着有点尬，但我以前是在出租屋里看这个颁奖礼的。',
        prompt: "选出 'cringe' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very emotional and touching', cn: '非常感人', correct: false, reason: 'cringe 不是感动，而是“让人替她尴尬”。她自己先说了，是在拆弹。' },
          { key: 'B', en: 'embarrassing to watch', cn: '让人尴尬到脚趾扣地', correct: true, reason: 'cringe 是“尬”。她说这话听着尬，其实是把真心话先铺一层缓冲。' },
          { key: 'C', en: 'physically painful', cn: '身体疼痛', correct: false, reason: 'cringe 有“缩一下”的本义，但这里说的是情绪上的尴尬。' }
        ],
        analysis: 'cringe 是当代英语里极高频的词。承认“这话有点尬”，反而让真心话更容易被听进去。',
        wrongFeedback: '你答成“感人”，那句坦白少了自嘲的分寸，气血 -10。',
        afterCorrect: '台下没有人笑。有几个人低下了头。沈知夏说：“那时候我想，如果有一天我能站在那里，我一定要说一句——替身也有名字。”她的声音到最后有点抖，但没有断。'
      },
      {
        plotDescription: '轮到她介绍提名影片，她说错了片名。全场静了一秒，她自己也愣住了。',
        line: "That was terrible. Let me start over, and this time I'll get it right.",
        lineCn: '刚才那个太糟了。让我重来一次，这次我会说对。',
        prompt: "选出 'terrible' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good', cn: '极好的', correct: false, reason: 'terrible 是“糟透了”，和好相反。' },
          { key: 'B', en: 'frightening', cn: '可怕的', correct: false, reason: '这里形容的是自己刚才的表现，不是吓人。' },
          { key: 'C', en: 'very bad', cn: '很糟糕', correct: true, reason: 'terrible 是最常用的“很糟”。她大方承认，再重来。' }
        ],
        analysis: 'terrible 是英语里最直白的负面评价。沈知夏没有硬撑，直接认了，反而赢得了掌声。',
        wrongFeedback: '你答成“极好的”，这句道歉就变成了自夸，气血 -10。',
        afterCorrect: '她把片名重新念了一遍，念得很慢很清楚。念完她放下话筒，朝台下鞠了一躬。掌声从后排响起来，一直响到她走回座位。姜黎在座位上看着她，眼睛亮得不太正常。'
      },
      {
        plotDescription: '下台后，姜黎在通道里拉住她，说刚才那段很好。沈知夏还在懊恼。',
        line: "You were fabulous. Stop replaying the one mistake.",
        lineCn: '你表现得极好。别老回放那一个错。',
        prompt: "选出 'fabulous' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good / wonderful', cn: '极好的、出色的', correct: true, reason: 'fabulous 是很高的赞美，比 good 更有情绪，等于“太棒了”。' },
          { key: 'B', en: 'made up / fictional', cn: '虚构的', correct: false, reason: 'fable 才是“寓言”。fabulous 在这里是夸赞。' },
          { key: 'C', en: 'quite average', cn: '普普通通', correct: false, reason: 'fabulous 的程度远高于 average。' }
        ],
        analysis: 'fabulous 常用来夸表现、造型、气氛，带一点夸张的热情。姜黎用它，是想把她从自责里拉出来。',
        wrongFeedback: '你答成“虚构的”，这句安慰变成了否认，沈知夏更难受了，气血 -10。',
        afterCorrect: '沈知夏说：“我说错了片名。”姜黎说：“你说对了那句‘替身也有名字’。”通道里灯光很暗，沈知夏低下头，眼眶忽然热了。姜黎没有再说，只是站在她旁边，等她自己缓过来。'
      }
    ],
    completeText: '第四十四章结束。那段三分钟的视频当晚就被剪了出来，播放量在凌晨破了千万。评论里最多的一句是：原来替身也有名字。'
  },
  {
    id: 'df_45',
    index: 45,
    title: '第 45 章 · 天台上的评价',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '颁奖礼结束后，她们没有去庆功宴，而是躲到酒店天台。风很大，姜黎的高跟鞋被拎在手里，沈知夏的礼服外面套着一件宽大的外套。远处整座城市亮着。',
    questions: [
      {
        plotDescription: '沈知夏问她，圈里这么多人，你觉得我算什么。姜黎想了想。',
        line: "You're a decent person. In this business, that's rarer than talent.",
        lineCn: '你是个正派的人。在这个行业里，这比天赋还稀有。',
        prompt: "根据上下文，选出画线词汇 'decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely rich', cn: '非常有钱', correct: false, reason: 'decent 和财富无关。她说的是人品。' },
          { key: 'B', en: 'honest and morally good', cn: '正派的、为人不错的', correct: true, reason: 'decent 形容人是“人品过得去、靠得住”，是很扎实的夸奖。' },
          { key: 'C', en: 'ordinary and boring', cn: '平庸无趣', correct: false, reason: 'decent 不是贬低。它的语气是肯定，只是不夸张。' }
        ],
        analysis: 'decent 是英语里最实在的褒义词之一：不华丽，但可靠。姜黎说“比天赋还稀有”，是把评价抬到了人品上。',
        wrongFeedback: '你答成“非常有钱”，这句评价就变味了，沈知夏扭头看她，气血 -10。',
        afterCorrect: '沈知夏说：“这算夸我吗。”姜黎说：“这是我今年说过最好的话。”沈知夏笑了一下，把外套的领子往上拉了拉，遮住半张脸。'
      },
      {
        plotDescription: '沈知夏反过来评价她，说她看着冷，其实半夜会起来给人盖被子。',
        line: "You're a weirdo. But you're my kind of weirdo.",
        lineCn: '你是个怪人。不过正好是我这一款的怪人。',
        prompt: "选出 'weirdo' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'an odd person, said fondly', cn: '怪人（这里带亲昵）', correct: true, reason: 'weirdo 常带贬义，但说 my kind of weirdo 时是亲昵的调侃。' },
          { key: 'B', en: 'a genius', cn: '天才', correct: false, reason: '这里没有夸聪明的意思，重点在“怪”。' },
          { key: 'C', en: 'a stranger', cn: '陌生人', correct: false, reason: '他们已经不是陌生人了。weirdo 说的是性格古怪。' }
        ],
        analysis: 'weirdo 是 weird 的名词形式，通常是骂人的“怪胎”。但加上 my kind of，就从贬义翻成了“我们是一类人”。',
        wrongFeedback: '你答成“陌生人”，这句调侃变成了疏远，气血 -10。',
        afterCorrect: '姜黎挑眉，说：“我的怪在哪儿。”沈知夏说：“你煮汤不放盐，还非说自己尝不出来。”姜黎想了想，承认了：“那我明天放盐。”两个人在天台上笑得直不起腰。'
      },
      {
        plotDescription: '风把姜黎的头发吹乱了，她抬手去拢。沈知夏看着她，说了一句很轻的话。',
        line: "You're not just hot. You're the reason I stopped being afraid of the camera.",
        lineCn: '你不只是性感。你是我不再怕镜头的原因。',
        prompt: "选出 'hot' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'high in temperature', cn: '温度很高', correct: false, reason: 'hot 的本义是“热”，但形容人是“性感、有魅力”。' },
          { key: 'B', en: 'spicy', cn: '辣的', correct: false, reason: '这里不是形容食物。天台上也没有辣椒。' },
          { key: 'C', en: 'sexually attractive', cn: '性感、有吸引力', correct: true, reason: 'hot 形容人就是“很性感”。她说完立刻补了后半句，才是重点。' }
        ],
        analysis: 'hot 是日常里最常见的“性感”说法，语气直接。沈知夏用“not just”把它压下去，把重点落在后半句。',
        wrongFeedback: '你答成“温度高”，这句表白成了天气预报，气血 -10。',
        afterCorrect: '姜黎拢头发的手停在半空。她看着沈知夏，过了好几秒才说：“你知不知道你说这种话的时候，特别不像个替身。”沈知夏说：“我本来就不是。”风把这句话吹散了，但两个人都听见了。'
      },
      {
        plotDescription: '沉默了一会儿，姜黎忽然说，其实她第一次见沈知夏，是在替身试镜那天。',
        line: "You were cute back then. You still are, even when you're yelling at me.",
        lineCn: '你那时候挺可爱的。现在也是，连冲我吼的时候都是。',
        prompt: "选出 'cute' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'clever', cn: '机灵的', correct: false, reason: 'cute 在美式口语里确实能指“机灵”，但这里说的是可爱的样子。' },
          { key: 'B', en: 'endearing / charming', cn: '讨人喜欢、可爱', correct: true, reason: 'cute 是“让人心里软一下”的可爱，不是只指长相。' },
          { key: 'C', en: 'small in size', cn: '体积小', correct: false, reason: '这里不涉及身材大小，说的是气质。' }
        ],
        analysis: 'cute 的范围比“可爱”宽：可以说长相、行为、语气，甚至是“凶起来也很可爱”。姜黎用的是最后一种。',
        wrongFeedback: '你答成“体积小”，这句话就变成了奇怪的评价，气血 -10。',
        afterCorrect: '沈知夏说：“我什么时候冲你吼过。”姜黎说：“上次我说你台词念错了。”沈知夏张嘴要反驳，又停住，最后小声说：“那次是我错了。”姜黎笑得很轻，说：“看，就是这种时候。”'
      }
    ],
    completeText: '第四十五章结束。天台上风一直没停，她们坐到凌晨两点。回房间时，姜黎的高跟鞋还拎在手里，沈知夏的外套披在她肩上，谁都没提要还。'
  },
  {
    id: 'df_46',
    index: 46,
    title: '第 46 章 · 普通的一天',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '没有通告的一天，姜黎六点就醒了。她把窗户打开，楼下早餐摊的蒸汽往上飘。沈知夏还睡着，半边脸埋在枕头里。姜黎站在门边看了她一会儿，忽然不知道这一天该怎么过。',
    questions: [
      {
        plotDescription: '沈知夏醒来，发现姜黎已经穿戴整齐，坐在沙发上看她。她打了个哈欠，问几点了。',
        line: "My commute used to be two hours. Now it's ten steps to the kitchen.",
        lineCn: '我以前通勤要两个小时。现在走到厨房只要十步。',
        prompt: "根据上下文，选出画线词汇 'commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'a monthly ticket', cn: '月票', correct: false, reason: 'commute 指“通勤”这件事，不是票。' },
          { key: 'B', en: 'a change of plans', cn: '计划的变更', correct: false, reason: '形近的 commute 与“改变”无关，这里是上班往返。' },
          { key: 'C', en: 'the regular journey to work', cn: '上下班通勤', correct: true, reason: 'commute 就是“每天往返上班的路程”，她拿它跟十步作对比。' }
        ],
        analysis: 'commute 作名词是“通勤路程”，作动词是“通勤”。姜黎这句话的重点不是距离，是“现在的生活很近”。',
        wrongFeedback: '你答成“月票”，这句感慨变成了算账，气血 -10。',
        afterCorrect: '沈知夏笑起来，说：“那你以前怎么不搬近一点。”姜黎说：“以前没理由。”她说完就起身去厨房，背影有点快，像是不想让人看见表情。'
      },
      {
        plotDescription: '吃完早饭，两个人窝在沙发上。沈知夏靠着她的肩，说着说着就没声了。',
        line: "Take a nap. I'll wake you in an hour.",
        lineCn: '睡一会儿吧。一小时后我叫你。',
        prompt: "选出 'nap' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep', cn: '小睡、打盹', correct: true, reason: 'nap 就是“短时间的睡一觉”，通常不超过一小时。' },
          { key: 'B', en: 'a kind of cloth', cn: '一种布料', correct: false, reason: '形近词是 nape 或 cloth。这里的语境是睡觉。' },
          { key: 'C', en: 'a long deep sleep overnight', cn: '整夜长睡', correct: false, reason: 'nap 特指“短睡”，不是过夜。她还说一小时后叫醒。' }
        ],
        analysis: 'take a nap 是最常用的搭配，指白天的小睡。姜黎的语气很轻，像是终于有了一件可以慢慢做的事。',
        wrongFeedback: '你答成“整夜长睡”，那句“一小时后叫你”就矛盾了，气血 -10。',
        afterCorrect: '沈知夏含糊地应了一声，头往下滑，直接枕在她腿上。姜黎僵了一下，然后把手里的书放平，一动不动地坐着。阳光从窗帘缝里进来，落在两个人身上。'
      },
      {
        plotDescription: '中午，姜黎问她要不要出去吃。沈知夏翻了个身，说不想动。',
        line: "Then let's order in. I'll pay, and you pick.",
        lineCn: '那点外卖吧。我付钱，你挑。',
        prompt: "选出 'order in' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to eat at a restaurant', cn: '在餐厅吃', correct: false, reason: 'order in 是“叫到家里来”，和 eat out 正好相反。' },
          { key: 'B', en: 'to have food delivered home', cn: '点外卖、叫到家里', correct: true, reason: 'order in 就是“点外卖在家吃”。她说的是不出门。' },
          { key: 'C', en: 'to order someone around', cn: '命令别人', correct: false, reason: 'order in 在这里和“命令”无关，是点餐。' }
        ],
        analysis: 'order in 与 eat out 是一对：一个在家吃，一个出门吃。in 表示“往里”，所以是送进来。',
        wrongFeedback: '你答成“命令别人”，这句话立刻变味了，气血 -10。',
        afterCorrect: '沈知夏从沙发上抬起头，说：“那我要吃很辣的。”姜黎皱眉：“你胃不好。”沈知夏说：“就要。”姜黎看了她两秒，认命地打开软件，还是点了微辣。'
      },
      {
        plotDescription: '傍晚，姜黎提议出去走走。沈知夏说会不会被拍到。',
        line: "Let's eat out anyway. If they take a photo, they take a photo.",
        lineCn: '还是出去吃吧。他们爱拍就拍。',
        prompt: "选出 'eat out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to eat all the food', cn: '把食物吃光', correct: false, reason: 'eat out 不是“吃光”。重点是“在外面吃”。' },
          { key: 'B', en: 'to eat outdoors in a park', cn: '在公园野餐', correct: false, reason: 'out 指“在外面的店里”，不一定是露天。' },
          { key: 'C', en: 'to eat at a restaurant', cn: '下馆子、在外面吃饭', correct: true, reason: 'eat out 就是“出去吃”，和 order in 相对。' }
        ],
        analysis: 'eat out 是“不在家吃”。姜黎这句“爱拍就拍”，是从躲藏到坦然的一步。',
        wrongFeedback: '你答成“把食物吃光”，这句洒脱就没了，气血 -10。',
        afterCorrect: '沈知夏看着她，说：“你不怕吗。”姜黎把外套递给她，说：“怕。但我不想因为怕，连一顿饭都不敢吃。”她们下楼时手没有牵，肩膀挨着肩膀，走得很慢。'
      }
    ],
    completeText: '第四十六章结束。那顿饭吃了两个小时，老板娘认出了她们，什么都没说，只多送了一碟小菜。走出店门时，沈知夏小声说：“这是我今年吃得最饱的一顿。”'
  },
  {
    id: 'df_47',
    index: 47,
    title: '第 47 章 · 一堆没洗的碗',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '水槽里的碗堆了三天。姜黎站在厨房门口，手里拿着洗碗布，表情像在参加一场严肃的谈判。沈知夏靠在门框上，忍着笑问她要不要帮忙。',
    questions: [
      {
        plotDescription: '姜黎把洗碗布递给她，说分工吧。沈知夏接过布，看了一眼水槽。',
        line: "You cook, I'll do the chores. That was the deal.",
        lineCn: '你做饭，家务我来干。就这么说好了。',
        prompt: "根据上下文，选出画线词汇 'chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'a list of songs', cn: '一串歌曲', correct: false, reason: '形近词是 chorus（副歌）。chores 指的是家务杂事。' },
          { key: 'B', en: 'routine household tasks', cn: '日常家务', correct: true, reason: 'chores 就是洗碗、拖地这类“必须做的小事”。' },
          { key: 'C', en: 'a kind of dessert', cn: '一种甜点', correct: false, reason: '这里没有甜点。她在说洗碗。' }
        ],
        analysis: 'chores 是复数，指一整套日常杂事。do the chores 是固定搭配，等于“干家务”。',
        wrongFeedback: '你答成“歌曲”，这句分工协议就变成了唱歌，气血 -10。',
        afterCorrect: '姜黎说：“那你现在就开始。”沈知夏把袖子挽起来，放了半池水，忽然转头说：“你做饭我洗碗，但你做完饭得把灶台擦了。”姜黎沉默了两秒，说：“可以。”'
      },
      {
        plotDescription: '洗到第五个碗，沈知夏开始看手机。姜黎走过来，把她的手机按在台面上。',
        line: "Stop procrastinating. It's four plates, not a film.",
        lineCn: '别拖了。就四个盘子，又不是一部电影。',
        prompt: "选出 'procrastinating' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'working too fast', cn: '做得太快', correct: false, reason: 'procrastinate 是“往后拖”，和快相反。' },
          { key: 'B', en: 'making things complicated', cn: '把事情复杂化', correct: false, reason: '她没有复杂化，只是在拖时间。' },
          { key: 'C', en: 'putting things off', cn: '拖延、往后推', correct: true, reason: 'procrastinate 就是“该做不做，一直往后拖”。' }
        ],
        analysis: 'procrastinate 是“拖延症”的正式说法。姜黎用电影作对比，是在提醒她别把小事拖成大事。',
        wrongFeedback: '你答成“做得太快”，这句吐槽就说不通了，气血 -10。',
        afterCorrect: '沈知夏抗议：“我在回工作消息。”姜黎说：“那四个盘子等你回完再洗？”沈知夏低头看了看水槽，认命地把手机放下，说：“你以前不是这样的。”姜黎说：“我以前不洗碗。”'
      },
      {
        plotDescription: '洗完碗，两个人窝在沙发上。沈知夏打开一部剧，说只看一集。',
        line: "We binge-watched the whole season last time. One episode, you said.",
        lineCn: '上次我们把整季都刷完了。你说只看一集的。',
        prompt: "选出 'binge-watched' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'watched many episodes in a row', cn: '一口气连刷很多集', correct: true, reason: 'binge-watch 是“连续不断地刷剧”，正是她们上次干的事。' },
          { key: 'B', en: 'watched while eating', cn: '边吃边看', correct: false, reason: 'binge 是“过量”，不是“边吃边看”。' },
          { key: 'C', en: 're-watched an old show', cn: '重看老剧', correct: false, reason: 'binge 的重点不是“重看”，是“停不下来”。' }
        ],
        analysis: 'binge 表示“过量地做某事”：binge-eat（暴食）、binge-drink（狂饮）、binge-watch（刷剧）。',
        wrongFeedback: '你答成“边吃边看”，这句拆穿就没力气了，气血 -10。',
        afterCorrect: '沈知夏说：“这次真的只一集。”姜黎说：“我记着。”三个小时后，进度条停在第九集。沈知夏打了个哈欠，说：“都怪你。”姜黎说：“是我按的播放键吗。”'
      },
      {
        plotDescription: '凌晨一点，姜黎还在刷手机。沈知夏把她的手机抽走。',
        line: "You've been scrolling for an hour. Your eyes are going to hate you.",
        lineCn: '你刷手机刷了一个小时了。你的眼睛会恨你的。',
        prompt: "选出 'scrolling' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'writing with a pen', cn: '用笔书写', correct: false, reason: 'scroll 有“卷轴”的古义，但手机上指“滑动浏览”。' },
          { key: 'B', en: 'moving through content on a screen', cn: '刷手机、滑屏浏览', correct: true, reason: 'scroll 在手机语境里就是“往上滑着看内容”。' },
          { key: 'C', en: 'reading a book', cn: '看书', correct: false, reason: '这里明确是手机。看书一般说 read。' }
        ],
        analysis: 'scroll 原意是“卷轴”，现在最常用的意思是“刷”。名词 doomscrolling 就是“越刷越焦虑地刷”。',
        wrongFeedback: '你答成“用笔书写”，这句关心就不成立了，气血 -10。',
        afterCorrect: '姜黎说：“我在看评论。”沈知夏说：“看什么评论。”姜黎把手机递过去，屏幕上是一条：“她们好像真的挺好的。”沈知夏看完，把手机放在桌上，说：“那就够了。睡觉。”'
      }
    ],
    completeText: '第四十七章结束。第二天早上，水槽里又是空的。姜黎第一次觉得，洗碗这件事没那么讨厌，只要旁边有人一直在说话。'
  },
  {
    id: 'df_48',
    index: 48,
    title: '第 48 章 · 周末的沙发',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '周六下午，阳光把客厅照成一块暖色的布。沈知夏躺在沙发上看手机，脚翘在扶手上。姜黎擦完桌子，站在客厅中间，忽然问：今天要不要见人。',
    questions: [
      {
        plotDescription: '沈知夏头也不抬，说不想接受采访。姜黎走过去，看了一眼她的屏幕。',
        line: "You've been swiping for twenty minutes. What are you even looking for?",
        lineCn: '你滑了二十分钟屏幕了。你到底在看什么？',
        prompt: "根据上下文，选出画线词汇 'swiping' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'cleaning the floor', cn: '拖地', correct: false, reason: '形近词是 sweep。swipe 是手指在屏幕上划。' },
          { key: 'B', en: 'stealing something', cn: '偷东西', correct: false, reason: 'swipe 有“顺手牵羊”的义项，但这里对象是屏幕。' },
          { key: 'C', en: 'sliding a finger across a screen', cn: '在屏幕上滑动', correct: true, reason: 'swipe 在手机语境就是“滑屏”，刷内容或者滑卡片。' }
        ],
        analysis: 'swipe 是现代生活高频词：swipe up（上滑）、swipe right（右滑表示喜欢）。姜黎是在问她刷了这么久在找什么。',
        wrongFeedback: '你答成“偷东西”，这句好奇就变成了指控，气血 -10。',
        afterCorrect: '沈知夏把手机举起来给她看，屏幕上是剧评。她说：“我在看有没有人骂我。”姜黎把手机按下去，说：“看完那一条就够了，别刷了。”'
      },
      {
        plotDescription: '两个小时后，沈知夏在沙发上睡着了，手机滑到地毯上。姜黎把毯子拉过来盖住她。',
        line: "She'll crash on the couch again. I should move her, but she looks peaceful.",
        lineCn: '她又要睡死在沙发上了。我该把她挪走，可她看起来睡得很安心。',
        prompt: "选出 'crash' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to fall asleep quickly', cn: '睡着、睡倒', correct: true, reason: '口语里 crash 常指“累到直接睡过去”，不是撞车。' },
          { key: 'B', en: 'to have a car accident', cn: '出车祸', correct: false, reason: 'crash 确有“撞车”义，但这里对象是沙发。' },
          { key: 'C', en: 'to break into pieces', cn: '碎掉', correct: false, reason: '家里没有东西碎。她只是睡着了。' }
        ],
        analysis: 'crash 在英式/美式口语里都是“睡过去”，尤其是累到不行的时候。比如 I\'m gonna crash（我去睡了）。',
        wrongFeedback: '你答成“出车祸”，这句日常瞬间惊悚，气血 -10。',
        afterCorrect: '姜黎没有动她，只是把毯子掖到肩膀，然后蹲下来把手机捡起来，屏幕还亮着。她按灭屏幕，放回茶几，动作很轻，像怕惊动什么。'
      },
      {
        plotDescription: '沈知夏醒来时，天已经暗了。她揉着眼睛问姜黎在干什么。',
        line: "Nothing. I was waiting for you to wake up so we could hang out.",
        lineCn: '没什么。我在等你醒，好一起待一会儿。',
        prompt: "选出 'hang out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to hang clothes outside', cn: '把衣服晾出去', correct: false, reason: 'hang 是“挂”，但 hang out 是固定短语，指“一起玩、待着”。' },
          { key: 'B', en: 'to spend relaxed time together', cn: '一起消磨时间、玩', correct: true, reason: 'hang out 就是“没干什么正事，只是待在一起”。' },
          { key: 'C', en: 'to go out to work', cn: '出门上班', correct: false, reason: '这里是周末下午，没人上班。hang out 是放松的。' }
        ],
        analysis: 'hang out 是朋友之间最常用的邀约词，重点是“无所事事也很愉快”。姜黎用这个词，等于承认她想跟她待着。',
        wrongFeedback: '你答成“晾衣服”，这句话的柔软全没了，气血 -10。',
        afterCorrect: '沈知夏愣了一下，然后笑起来，说：“那我们现在就待着。”她往旁边挪了挪，空出半张沙发。姜黎坐下时，两个人之间还留着一点距离，谁都没有先靠近。'
      },
      {
        plotDescription: '电视开着，谁也没在看。姜黎把脚收上沙发，长长舒了一口气。',
        line: "This is the first time in years I've just kicked back on a weekend.",
        lineCn: '这是我这些年第一次在周末真正放松下来。',
        prompt: "选出 'kicked back' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'relaxed and did nothing', cn: '放松、什么都不干', correct: true, reason: 'kick back 是“往后一靠，彻底放松”，正是她此刻的状态。' },
          { key: 'B', en: 'kicked something backward', cn: '把东西往后踢', correct: false, reason: '这是把短语拆成字面。这里没有任何踢的动作。' },
          { key: 'C', en: 'refused to work', cn: '拒绝工作', correct: false, reason: 'kick back 是享受休息，不是抗议。' }
        ],
        analysis: 'kick back 和 kick back and relax 都是“彻底松下来”。姜黎用了 in years，说明这种松弛对她有多稀有。',
        wrongFeedback: '你答成“往后踢”，这句感慨变成了动作描述，气血 -10。',
        afterCorrect: '沈知夏把头靠在她肩上，说：“以后每个周末都这样。”姜黎说：“每个周末？”沈知夏说：“每个。”电视里在放一部很旧的黑白片，两个人谁都没换台。'
      }
    ],
    completeText: '第四十八章结束。那天她们什么都没做，只是把一部老电影看到结尾。字幕滚完，姜黎才发现沈知夏又睡着了，头还靠在她肩上。她没有动，一直坐到天黑。'
  },
  {
    id: 'df_49',
    index: 49,
    title: '第 49 章 · 最后一场戏',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '最后一场戏拍完，场记板上写着第 187 场。灯光师把灯一盏一盏关掉，棚里慢慢暗下来。沈知夏站在中央，忽然不想动，像是走了很久的路终于看见尽头。',
    questions: [
      {
        plotDescription: '导演喊完最后一声卡，走过来抱了她一下，说杀青。全场鼓掌。',
        line: "Let's wrap up before midnight. I want everyone home tonight.",
        lineCn: '午夜前收工吧。今晚我想让所有人都回家。',
        prompt: "根据上下文，选出画线短语 'wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to cover something with paper', cn: '用纸包起来', correct: false, reason: 'wrap 是“包”，但 wrap up 在这里是“收尾、结束”。' },
          { key: 'B', en: 'to finish and close the work', cn: '收尾、结束工作', correct: true, reason: 'wrap up 是“把事情了结”，正好对应杀青收工。' },
          { key: 'C', en: 'to wear more clothes', cn: '多穿点衣服', correct: false, reason: '形近的 wrap up warm 才是“穿暖”，这里说的是收工。' }
        ],
        analysis: 'wrap up 在工作和会议里极常用：wrap up the meeting（结束会议）。导演这句话既体贴，也是宣布结束。',
        wrongFeedback: '你答成“用纸包起来”，这句体贴变成了动作指令，气血 -10。',
        afterCorrect: '沈知夏说了声谢谢，声音有点哑。她走到监视器旁边，看着自己最后那条回放。画面里的人穿着戏服，站得笔直。她忽然想起三年前那个连镜头都不敢看的人，觉得像另一个人。'
      },
      {
        plotDescription: '收工后，制片把一摞文件交给她，说合同要重新签，片酬也调了。',
        line: "Take your time. We need to sort out the contract before the premiere.",
        lineCn: '不用急。我们得在首映前把合同理清楚。',
        prompt: "选出 'sort out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to classify by type', cn: '按类型分类', correct: false, reason: 'sort 有“分类”的意思，但 sort out 在这里是“把问题处理好”。' },
          { key: 'B', en: 'to throw away', cn: '扔掉', correct: false, reason: '合同不是垃圾。这里没有丢弃的意思。' },
          { key: 'C', en: 'to resolve and organize', cn: '处理清楚、理顺', correct: true, reason: 'sort out 是“把一团乱的事理明白”，用在这里就是谈妥合同。' }
        ],
        analysis: 'sort out 既能指“整理东西”，也能指“解决麻烦”。制片说“不用急”，反而说明这件事很重要。',
        wrongFeedback: '你答成“扔掉”，把合同丢了可就麻烦了，气血 -10。',
        afterCorrect: '沈知夏把文件接过来，没有立刻翻。她说：“我想先看看条款，不着急签。”制片愣了一下，说好。她抱着那摞纸往回走，忽然觉得，能说“不着急”这三个字，本身就是一种长大。'
      },
      {
        plotDescription: '电梯里，姜黎问她要不要一起去应付记者。沈知夏想了想，摇头。',
        line: "I'll deal with the press myself. You've done enough.",
        lineCn: '记者我自己应付。你已经做得够多了。',
        prompt: "选出 'deal with' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to handle / cope with', cn: '应付、处理', correct: true, reason: 'deal with 是“面对并处理”，这里指自己应付媒体。' },
          { key: 'B', en: 'to make a trade with', cn: '和……做交易', correct: false, reason: 'deal 作名词是“交易”，但 deal with 是“处理”。' },
          { key: 'C', en: 'to share with', cn: '与……分享', correct: false, reason: '这里没有任何分享的意思。她是要独自应对。' }
        ],
        analysis: 'deal with 是英语里最实用的短语之一：deal with a problem（处理问题）、deal with people（应付人）。',
        wrongFeedback: '你答成“做交易”，这句独立宣言变成了商谈，气血 -10。',
        afterCorrect: '姜黎看着她，说：“你确定？”沈知夏说：“以前我总躲在你后面。现在我想试试。”电梯到了，门打开。姜黎先走出去，又回头说：“那我站在你旁边，不开口。”'
      },
      {
        plotDescription: '首映礼结束，两个人回到车上。姜黎把高跟鞋踢掉，靠在椅背上。',
        line: "Finally. Let's chill out for a week. No scripts, no calls.",
        lineCn: '终于结束了。我们放松一周吧。不要剧本，不要电话。',
        prompt: "选出 'chill out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to become cold', cn: '变冷', correct: false, reason: 'chill 有“寒冷”的本义，但 chill out 是“放松下来”。' },
          { key: 'B', en: 'to calm down after being angry', cn: '冷静下来（生气后）', correct: false, reason: '这是 chill out 的另一个用法，但这里没有人生气。' },
          { key: 'C', en: 'to relax and take it easy', cn: '放松、彻底歇着', correct: true, reason: 'chill out 在这里就是“什么正事都不干，歇一周”。' }
        ],
        analysis: 'chill out 有两个常见用法：让人别生气，和真正地放松休息。这里配上一周、不要剧本，显然是后者。',
        wrongFeedback: '你答成“变冷”，这句话就变成了空调问题，气血 -10。',
        afterCorrect: '沈知夏把座椅放低，说：“那去哪儿。”姜黎说：“随便。找个没人认识我们的地方。”沈知夏想了想，说：“我小时候住的那个镇上，有一家面馆。”姜黎闭着眼睛笑了一下：“那就去那儿。”'
      }
    ],
    completeText: '第四十九章结束。首映的第二天，她们没有看票房，也没有看评分。两个人坐了五个小时的车，去了一座小城，在一家开了三十年的面馆里，各自吃了一碗面。'
  },
  {
    id: 'df_50',
    index: 50,
    title: '第 50 章 · 领奖台上的那句话',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那一年的颁奖礼，最佳女主角的两个提名里，有她们两个人的名字。后台的走廊很窄，助理端着水和点心来回跑。姜黎坐在椅子上，第一次觉得手心里全是汗。',
    questions: [
      {
        plotDescription: '沈知夏把一小包饼干塞到她手里，说先吃点东西垫一垫。',
        line: "Have a snack. You can't go up there on an empty stomach.",
        lineCn: '吃点东西吧。你不能空着肚子上台。',
        prompt: "根据上下文，选出画线词汇 'snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a formal dinner', cn: '正式的晚餐', correct: false, reason: 'snack 是“小零食”，不是正餐。' },
          { key: 'B', en: 'a small amount of food between meals', cn: '两餐之间的小零食', correct: true, reason: 'snack 就是“垫一垫的小食”，正是那包饼干。' },
          { key: 'C', en: 'a kind of drink', cn: '一种饮料', correct: false, reason: '这里给的是饼干，不是饮料。' }
        ],
        analysis: 'snack 作名词是“零食、小食”，作动词是“吃点东西”。have a snack 是固定搭配。',
        wrongFeedback: '你答成“正餐”，这句关心就变得隆重又奇怪，气血 -10。',
        afterCorrect: '姜黎看着那包饼干，说：“你什么时候开始随身带这个。”沈知夏说：“从你第一次低血糖开始。”姜黎拆开包装，掰了一半递回去，两个人各吃了一半，谁都没说话。'
      },
      {
        plotDescription: '轮到她们候场，工作人员提醒多喝水。沈知夏把水杯递过去。',
        line: "Hydrate first. You always forget when you're nervous.",
        lineCn: '先喝水。你一紧张就老是忘记。',
        prompt: "选出 'Hydrate' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to take in water / stay watered', cn: '补水、喝水', correct: true, reason: 'hydrate 是“给身体补充水分”，所以是让她喝水。' },
          { key: 'B', en: 'to eat something sweet', cn: '吃点甜的', correct: false, reason: 'hydrate 与水有关，和甜食无关。' },
          { key: 'C', en: 'to sit down and rest', cn: '坐下休息', correct: false, reason: '这里说的是喝水，不是坐下。' }
        ],
        analysis: 'hydrate 的词根是 hydro（水）。名词 hydration 就是“水分”。这句话是极日常的关心。',
        wrongFeedback: '你答成“吃甜的”，水杯尴尬地停在半空，气血 -10。',
        afterCorrect: '姜黎接过水杯，喝了两口，说：“你今天怎么这么像我妈。”沈知夏说：“那你听不听。”姜黎说：“听。”她把剩下的水喝完，把杯子放回她手里。'
      },
      {
        plotDescription: '坐得太久，姜黎站起来活动肩膀。沈知夏也跟着起身。',
        line: "Stretch a little. Your shoulders are up to your ears.",
        lineCn: '伸展一下。你肩膀都耸到耳朵了。',
        prompt: "选出 'Stretch' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to make something longer', cn: '把东西拉长', correct: false, reason: 'stretch 有“拉长”的义项，但这里指身体伸展。' },
          { key: 'B', en: 'to make up a story', cn: '编故事', correct: false, reason: '这是 stretch the truth 的用法，这里和编故事无关。' },
          { key: 'C', en: 'to extend your body', cn: '伸展身体', correct: true, reason: 'stretch 指“伸懒腰、拉伸肌肉”，正对应耸起的肩膀。' }
        ],
        analysis: 'stretch 在健身和日常里都常用：stretch your legs（活动活动腿脚）、stretch before exercise（运动前拉伸）。',
        wrongFeedback: '你答成“编故事”，这句体贴就跑了偏，气血 -10。',
        afterCorrect: '姜黎抬起手臂伸了伸，肩膀果然落下来一点。她看了沈知夏一眼，说：“你也伸。”沈知夏学着她的样子抬手，两个人像两只在同一根线上的风筝，忽然都笑了。'
      },
      {
        plotDescription: '主持人念提名名单，念到最后一个名字时，姜黎忽然听不清了。沈知夏握了一下她的手。',
        line: "Don't zone out now. Whatever they say, I'm right here.",
        lineCn: '现在别走神。不管他们念的是谁，我就在这儿。',
        prompt: "选出 'zone out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'to leave the room', cn: '离开房间', correct: false, reason: 'zone out 不是“走出去”，而是“神游、发呆”。' },
          { key: 'B', en: 'to lose focus and stop paying attention', cn: '走神、注意力飘走', correct: true, reason: 'zone out 就是“脑子放空、听不进去了”，正是她此刻的状态。' },
          { key: 'C', en: 'to get angry', cn: '生气', correct: false, reason: '她没有生气，是紧张到失焦。' }
        ],
        analysis: 'zone out 是“人在原地，心飘走了”。沈知夏握她手，是把她拉回这一刻。',
        wrongFeedback: '你答成“离开房间”，这句安抚就不成立了，气血 -10。',
        afterCorrect: '姜黎回过神，听见台上念的是沈知夏的名字。全场鼓掌，沈知夏却没有站起来，她先转过头看姜黎，眼睛睁得很大，像在问：是我吗。姜黎点头，说：是你。'
      }
    ],
    completeText: '第五十章结束。沈知夏上台领奖，姜黎在台下鼓掌，掌心拍得发红。散场后她在停车场说：我站在你旁边，那是我唯一想站的位置。'
  }
];
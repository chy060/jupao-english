/**
 * 大男主 ·《赘婿归来：从被退婚开始》剧情题库
 * 50 章 × 4 题 = 200 题，词汇按 WORD_BANK id 顺序逐章取用
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.male_lead = [
  {
    id: 'ml_1',
    index: 1,
    title: '第 1 章 · 退婚书上的那一笔',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏家老宅的客厅里，退婚书摊在红木桌上。三年前陈默入赘苏家，今天苏家要把他扫地出门。苏明哲把笔推到他面前，一屋子人都在等这个吃软饭的废物低头。',
    questions: [
      {
        plotDescription: '苏明哲晃着酒杯，故意把话说得很慢，让满屋子人都听得清清楚楚。陈默没有动怒，只是把笔轻轻放下。',
        line: "You keep saying I'm broke. Give me one month, and I'll buy this house.",
        lineCn: '你一口一个我身无分文。给我一个月，这栋房子我买下来。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money at all', cn: '身无分文、没钱', correct: true, reason: '苏明哲一直在骂他穷，broke 在口语里就是“一分钱都没有”。' },
          { key: 'B', en: 'broken or damaged', cn: '坏掉的、破损的', correct: false, reason: '那不是 break 的过去式吗？这里是形容词“没钱”，没人说东西坏了。' },
          { key: 'C', en: 'a bankrupt company', cn: '公司破产', correct: false, reason: 'broke 说的是人身上没钱，公司破产要说 bankrupt。' }
        ],
        analysis: 'broke 是口语里最常用的“没钱”，比 poor 更随便，也更扎人。陈默不解释、不吵架，只丢下一句期限——他不是在辩解，是在下战书。',
        wrongFeedback: '你选错了，满屋子人笑出声，苏明哲把退婚书又往前推了推，陈默的手指在桌沿上慢慢收紧。',
        afterCorrect: '陈默把笔捡起来，在退婚书上签下名字，一笔到底。他抬头看了一眼墙上的钟：“一个月，从今晚开始算。”满屋子的笑声忽然卡住了一半。'
      },
      {
        plotDescription: '苏明哲指着墙上那幅全家福，笑得意味深长，把“白住三年”四个字咬得很重。',
        line: "Three years of free rent, and you still act like we owe you something.",
        lineCn: '白给你住了三年房子，你还一副我们欠你的样子。',
        prompt: "根据上下文，选出画线词汇 'rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'a car rental fee', cn: '租车费', correct: false, reason: '这句说的是在苏家住了三年，付的是房子的钱，不是车。' },
          { key: 'B', en: 'money paid to live in a place', cn: '房租、住房的钱', correct: true, reason: 'free rent 就是“免房租”，他是在算这三年白住的账。' },
          { key: 'C', en: 'a torn opening in cloth', cn: '裂口、破口', correct: false, reason: '拼写像，但“裂口”是 tear 或 rip，这里说的是住的地方。' }
        ],
        analysis: 'free rent 是“不用交房租”。苏明哲把人情的账算成钱，是想让陈默难堪；陈默听懂了，只是他连这笔账都不屑于争。',
        wrongFeedback: '你选错了，苏明哲顺势把“吃白饭”说得更响，几个长辈跟着点头，客厅里的空气又冷了一层。',
        afterCorrect: '陈默笑了一下：“三年房租，我按市价三倍还。”他从旧背包里抽出一张卡放在桌上，“密码六个零，你们先查余额。”'
      },
      {
        plotDescription: '苏振海终于开口，语气像在批一份不合格的报表，连眼皮都没抬起来。',
        line: "There is no budget for a man who brings nothing to this family.",
        lineCn: '这个家没有多余的钱，去养一个什么都带不来的人。',
        prompt: "根据上下文，选出画线词汇 'budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small suitcase', cn: '小行李箱', correct: false, reason: 'budget 跟行李没有半点关系，别被发音带偏，这里说的是钱。' },
          { key: 'B', en: 'a secret plan', cn: '秘密计划', correct: false, reason: 'budget 是钱的安排，不是计划本身，说“预算”才对得上这句。' },
          { key: 'C', en: 'the money planned for spending', cn: '预算、可支配的钱', correct: true, reason: 'no budget for 就是“没有这笔预算”，等于说不打算再养他。' }
        ],
        analysis: 'no budget for somebody 是很冷的一句话：不是没钱，是“这笔钱不该花在你身上”。苏振海用账本的口吻，把三年的情分抹成了一项成本。',
        wrongFeedback: '你选错了，苏振海合上账本，客厅里没有一个人替陈默说话，苏晚的手指在袖口里攥紧了。',
        afterCorrect: '陈默点点头：“那就别花了。”他把椅子推回原位，声音很平，“从这个月起，苏家的账，我一分不沾。”'
      },
      {
        plotDescription: '临出门前，苏晚忽然叫住他，声音很轻，像是怕被客厅里的人听见。',
        line: "In three years you never once splurged on yourself. Not even a pair of shoes.",
        lineCn: '三年了，你一次都没为自己花过钱，连一双鞋都没有。',
        prompt: "根据上下文，选出画线词汇 'splurged' 最准确的意思。",
        options: [
          { key: 'A', en: 'spent a lot on something you wanted', cn: '大手笔花钱、舍得花', correct: true, reason: 'splurge 是“为自己痛快花一笔”，她说的是他从不舍得花钱。' },
          { key: 'B', en: 'complained loudly', cn: '大声抱怨', correct: false, reason: 'splurge 只跟花钱有关，跟抱怨没有关系，别被开头字母骗了。' },
          { key: 'C', en: 'saved every penny', cn: '一分钱都存起来', correct: false, reason: '方向正好相反，splurge 是花，不是省；存钱是 save up。' }
        ],
        analysis: 'splurge on 后面的东西，就是“在某样想要的东西上狠心花一笔”。苏晚这句话不是嘲讽，是三年里第一次认真看他。',
        wrongFeedback: '你选错了，苏晚眼里那点松动又收了回去，她转身走回客厅，只留下高跟鞋敲地板的声音。',
        afterCorrect: '陈默低头看了看自己那双开了口的旧鞋，笑了：“以前是没必要。”他推开门，夜风灌进来，“以后不一样了。”'
      }
    ],
    completeText: '第 1 章结束。退婚书签完，陈默没拿走苏家一分钱，只带走了一个旧背包。走到门口他停了一下，回头看了一眼苏晚——她低着头，一个字也没说。'
  },
  {
    id: 'ml_2',
    index: 2,
    title: '第 2 章 · 三年饭钱，一笔算清',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '退婚书刚签完，苏明哲又拿出一张手写的清单，说这三年陈默在苏家吃了三千多顿饭，得赔。院子里停着一辆黑色迈巴赫，司机老周站在车门边，一直没说话。',
    questions: [
      {
        plotDescription: '苏明哲把清单拍在桌上，一年的伙食费写得比苏氏员工的工资还高，还催着陈默当场认账。',
        line: "Fifty thousand a year for meals? That is a rip-off, and you know it.",
        lineCn: '一年五万的伙食费？这就是宰人，你心里清楚。',
        prompt: "根据上下文，选出画线词汇 'rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very good bargain', cn: '很划算的买卖', correct: false, reason: '正好说反了，rip-off 是“被狠狠宰了一刀”，不是捡便宜。' },
          { key: 'B', en: 'a wildly overpriced deal', cn: '宰人的价、坑钱的买卖', correct: true, reason: 'rip-off 指价格离谱到坑人，用在这张乱写的清单上刚好。' },
          { key: 'C', en: 'a small gift', cn: '小礼物', correct: false, reason: 'rip-off 是钱上的事，跟送礼无关，这里也没人在送礼。' }
        ],
        analysis: 'rip-off 是“贵得离谱、明摆着坑你”。陈默没有砍价，只是把这张纸的性质点破——他不是付不起，是不陪他们演。',
        wrongFeedback: '你选错了，苏明哲立刻加了一句“嫌贵就别吃”，亲戚们跟着笑，陈默把清单折成了两半。',
        afterCorrect: '陈默把那张清单撕成四条，扔进垃圾桶：“按市价算，我三年吃的是你们家的剩饭。”他顿了顿，“要算，就连剩饭的钱一起算。”'
      },
      {
        plotDescription: '苏明哲被噎了一下，转头换了个说法，把“白吃白住”四个字挂在嘴边，还故意看向苏晚。',
        line: "For three years you have been a freeloader in my uncle's house.",
        lineCn: '这三年你就是在我叔叔家里白吃白住的人。',
        prompt: "根据上下文，选出画线词汇 'freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who works too hard', cn: '拼命工作的人', correct: false, reason: '正好相反，freeloader 是白拿好处、不出力的人。' },
          { key: 'B', en: 'a free delivery service', cn: '免费送货服务', correct: false, reason: '别被 free 骗了，这个词说的是人，不是服务。' },
          { key: 'C', en: 'someone who lives off others without paying', cn: '白吃白住、占便宜的人', correct: true, reason: 'freeloader 就是靠别人养、一分不掏的人，正对上他的嘲讽。' }
        ],
        analysis: 'freeloader 由 free 加 load 组成，画面感很强：白拿东西还嫌重。苏明哲用它给陈默定性，是想让苏晚也跟着看不起他。',
        wrongFeedback: '你选错了，苏明哲把这句重复了一遍，声音更大，苏晚的睫毛动了一下，却始终没有抬头。',
        afterCorrect: '陈默看着他，忽然笑了：“白吃白住的人，今天把这三年的饭钱一次付清。”他朝门外抬了抬下巴，“老周，把箱子拿进来。”'
      },
      {
        plotDescription: '苏明哲见势头不对，赶紧抽出一张早就准备好的纸，说只要签字认下这笔债，退婚的事就不再追究。',
        line: "This paper is a scam, and everybody at this table knows it.",
        lineCn: '这张纸就是个骗局，在座每一个人心里都清楚。',
        prompt: "根据上下文，选出画线词汇 'scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a trick to cheat someone out of money', cn: '骗局、坑人的圈套', correct: true, reason: 'scam 就是用假东西骗钱，这张认债书正是这种圈套。' },
          { key: 'B', en: 'a legal contract', cn: '合法合同', correct: false, reason: '如果真是合法合同，就不用偷偷写好逼人签字了。' },
          { key: 'C', en: 'a quick phone call', cn: '一个电话', correct: false, reason: 'scam 和打电话无关，这里是纸上的骗局。' }
        ],
        analysis: 'scam 比 lie 更重，它指一整套骗钱的手法。陈默一句话把台面掀开：这不是家务事，是敲诈。',
        wrongFeedback: '你选错了，苏明哲立刻把纸收回去，嘴上说“不识好歹”，手却在发抖，纸角被捏出了褶。',
        afterCorrect: '陈默拿起那张纸，看都没看，直接撕了。“想让我签字，可以。”他抬眼看苏振海，“先把你们偷税的那本账拿出来。”'
      },
      {
        plotDescription: '客厅里安静下来，苏振海换上一副长辈的口气，说陈默欠苏家的，这辈子都还不完。',
        line: "Write down a number. I will clear every debt your family thinks I owe.",
        lineCn: '写个数字。你们家觉得我欠的每一笔债，我今天全清。',
        prompt: "根据上下文，选出画线词汇 'debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of food', cn: '一种食物', correct: false, reason: 'debt 跟吃的一点关系没有，别和 diet（饮食）搞混了。' },
          { key: 'B', en: 'money that must be paid back', cn: '欠下的债、要还的钱', correct: true, reason: 'clear a debt 就是“把债还清”，正对上他要一次结清的话。' },
          { key: 'C', en: 'a written apology', cn: '书面道歉', correct: false, reason: 'debt 是钱上的亏欠，不是一句道歉，这里说的是账。' }
        ],
        analysis: 'clear a debt 是“结清债务”。陈默把苏家的道德绑架换成一个具体数字——你们要算账，那就按账来。',
        wrongFeedback: '你选错了，苏振海冷笑一声，说“你拿什么清”，亲戚们的目光像针一样扎过来。',
        afterCorrect: '老周这时推门进来，手里拎着一只黑色箱子，放在桌上，扣锁一响。“先生说清，就清得干净。”'
      }
    ],
    completeText: '第 2 章结束。箱子没有打开，苏家也没人敢先伸手。陈默起身告辞，走到院门口时，老周替他拉开了迈巴赫的车门，声音低而稳：“指挥官，兄弟们等您三年了。”'
  },
  {
    id: 'ml_3',
    index: 3,
    title: '第 3 章 · 一张卡，砸在桌上',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏家的家宴还没散，陈默被叫回来“把话说清楚”。老周跟着他进门，黑伞收在门边，雨水顺着伞骨滴在苏家的大理石地面上，没人敢催他擦。',
    questions: [
      {
        plotDescription: '苏明哲看见老周的穿着，立刻提高了嗓门，想用“没正经工作”把陈默重新按回泥里。',
        line: "A man with no paycheck should not be talking about money at this table.",
        lineCn: '一个连工资都没有的人，不该在这张桌子上谈钱。',
        prompt: "根据上下文，选出画线词汇 'paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bank card', cn: '银行卡', correct: false, reason: 'paycheck 不是卡，是发到手里的那笔工资，别和银行卡混了。' },
          { key: 'B', en: 'a monthly bill', cn: '每月的账单', correct: false, reason: '账单是你要付出去的钱，paycheck 是你挣回来的钱。' },
          { key: 'C', en: 'the money you earn from a job', cn: '工资、薪水', correct: true, reason: 'paycheck 原指工资支票，口语里就是“每月挣的那笔钱”。' }
        ],
        analysis: 'paycheck 带着“按月领钱”的画面。苏明哲用它划界限：你连收入都没有，就别上桌。陈默要做的，是把这条界限踩碎。',
        wrongFeedback: '你选错了，苏明哲得意地靠回椅背，还给旁边的人使了个眼色，笑声从桌子那头传过来。',
        afterCorrect: '陈默没接话，只是把一张黑卡放在转盘上，轻轻一推。卡转到苏振海面前时，停住了。“先看余额，再谈谁没工资。”'
      },
      {
        plotDescription: '苏振海盯着那张卡，脸色变了又变，最后把话题扯到苏家替陈默垫付的各种开销上。',
        line: "Put every bill on the table. I will pay them all before midnight.",
        lineCn: '把所有账单都摆到桌上。午夜之前，我全部付清。',
        prompt: "根据上下文，选出画线词汇 'bill' 最准确的意思。",
        options: [
          { key: 'A', en: 'a statement of money you owe', cn: '账单、欠款的单据', correct: true, reason: 'put the bills on the table 就是把该付的账单都摆出来。' },
          { key: 'B', en: 'paper money', cn: '纸币', correct: false, reason: 'bill 在美式英语里确实能指钞票，但这句说的是要付的账。' },
          { key: 'C', en: 'small coins', cn: '硬币', correct: false, reason: '硬币是 coin，bill 在这里不是零钱，是要结的账。' }
        ],
        analysis: 'bill 在这里是“账单”，不是口袋里的钞票。陈默把主动权抢回来：你们不是要算账吗，那就一次算干净。',
        wrongFeedback: '你选错了，苏振海把一叠单据推过来，纸张滑过桌面，声音刺耳，苏晚的眉头皱了一下。',
        afterCorrect: '陈默一张张翻过去，翻到第三张时停住：“这张是你们自己买的补品，也算我头上？”他把单据推回去，“重写。”'
      },
      {
        plotDescription: '老周把箱子放在桌角，问了一句怎么结账，声音不大，却让整桌人都停了筷子。',
        line: "Cash is faster. Bring the case in and open it here.",
        lineCn: '现金最快。把箱子拿进来，就在这儿打开。',
        prompt: "根据上下文，选出画线词汇 'cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'a personal check', cn: '个人支票', correct: false, reason: '支票是 check，cash 是立刻能点清的现钱，两回事。' },
          { key: 'B', en: 'money in notes or coins', cn: '现金', correct: true, reason: 'cash 就是现钞，跟转账、支票相对，所以他说“更快”。' },
          { key: 'C', en: 'a credit limit', cn: '信用额度', correct: false, reason: '信用额度是能刷多少，cash 是手里实实在在的钱。' }
        ],
        analysis: 'cash 强调的是“立刻到手”。老周这句回答看似随意，其实是在告诉苏家：我们不必走你们的流程。',
        wrongFeedback: '你选错了，老周没有动，苏明哲却先笑了，说“装什么装”，笑声在箱扣弹开的那一瞬戛然而止。',
        afterCorrect: '箱盖掀开，一沓沓现金码得整整齐齐。陈默没看钱，只看着苏振海：“数清楚。数完，我们两清。”'
      },
      {
        plotDescription: '苏振海下不来台，转而讥讽陈默连请律师的钱都要借，话里话外都是轻蔑。',
        line: "You will need a loan just to pay for a lawyer, boy.",
        lineCn: '小子，你连请律师的钱都得去贷款。',
        prompt: "根据上下文，选出画线词汇 'loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'a gift with no return', cn: '不用还的礼物', correct: false, reason: 'loan 是要还的，礼物才不用还，这两个差得远。' },
          { key: 'B', en: 'a punishment', cn: '惩罚', correct: false, reason: '贷款是借钱，不是处罚，这里说的是请律师的钱。' },
          { key: 'C', en: 'money borrowed that must be repaid', cn: '贷款、要还的借款', correct: true, reason: 'take out a loan 就是借钱，还得连本带息还回去。' }
        ],
        analysis: 'loan 的核心是“借来还要还”。苏振海以为这是羞辱，陈默却听出了一件事——苏家已经开始怕他打官司了。',
        wrongFeedback: '你选错了，苏振海笑得很响，苏明哲跟着附和，只有苏晚抬头看了陈默一眼，眼神很复杂。',
        afterCorrect: '陈默把箱盖合上：“律师我已经请好了，从京城来的。”他站起身，“明天上午九点，他会带着审计报告上门。”'
      }
    ],
    completeText: '第 3 章结束。苏家的家宴不欢而散。陈默走出大门时，雨停了，老周撑开伞又收起来：“指挥官，苏氏那本账，我们三年前就拿到了。”'
  },
  {
    id: 'ml_4',
    index: 4,
    title: '第 4 章 · 你们赔不起的那件西装',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天，苏氏集团的周年酒会。陈默本来不该出现，是苏老爷子生前留下的一份邀请函把他请了进来。他穿着三年前那套旧西装，站在水晶灯下，像一把收在鞘里的刀。',
    questions: [
      {
        plotDescription: '苏明哲端着红酒走过来，故意撞了他一下，酒全泼在那件旧西装上，然后掏出五百块钱。',
        line: "Here is five hundred. That suit looks cheap anyway.",
        lineCn: '拿着，五百块。反正这西装看着就廉价。',
        prompt: "根据上下文，选出画线词汇 'cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'low in price and poor in quality', cn: '廉价的、不上档次的', correct: true, reason: '他一边赔钱一边贬低衣服，cheap 就是“便宜又没质感”。' },
          { key: 'B', en: 'extremely expensive', cn: '极其昂贵', correct: false, reason: '如果真贵，他就不会只掏五百块，语境正好相反。' },
          { key: 'C', en: 'dirty from the wine', cn: '被酒弄脏的', correct: false, reason: '衣服确实脏了，但 cheap 说的是价钱和档次，不是脏。' }
        ],
        analysis: 'cheap 在口语里既能说“便宜”，也带“掉价、不上台面”的贬义。苏明哲给钱又踩人，是想让全场都看陈默的笑话。',
        wrongFeedback: '你选错了，周围有人低笑，苏明哲把钱塞进陈默口袋，还拍了拍，像在打发一个讨饭的。',
        afterCorrect: '陈默把那五百块抽出来，放回他手里：“这件西装，你十年工资都赔不起。”他抬手指了指袖口的暗纹，“手工缝的，全球三件。”'
      },
      {
        plotDescription: '苏明哲不信，转头招呼几个合作方过来围观，语气夸张，说要看看这“地摊货”值几个钱。',
        line: "You cannot afford this suit. Not with ten years of your salary.",
        lineCn: '你买不起这件西装，十年的工资都不够。',
        prompt: "根据上下文，选出画线词汇 'afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'to repair something', cn: '修理', correct: false, reason: '这句说的是钱够不够，不是修不修，afford 跟修理无关。' },
          { key: 'B', en: 'to have enough money for something', cn: '负担得起、买得起', correct: true, reason: 'can afford 就是“钱够”，所以后面才接十年的工资。' },
          { key: 'C', en: 'to borrow from someone', cn: '向别人借', correct: false, reason: '借是 borrow，afford 说的是自己有没有这个购买力。' }
        ],
        analysis: 'afford 后面常接钱、时间、代价：can not afford 是“承受不起”。陈默这句不是炫富，是把对方的轻视原样扔回去。',
        wrongFeedback: '你选错了，苏明哲笑得更欢，还招呼人拍照，闪光灯一下下打在陈默脸上。',
        afterCorrect: '陈默没有躲镜头，反而站直了：“拍清楚点。”他看向苏明哲，“等你们查完这件的来历，记得把照片删了。”'
      },
      {
        plotDescription: '酒会散场，苏晚在露台上找到他，手里还捏着那杯没喝完的香槟，问的话很轻。',
        line: "Was it worth it? Making enemies of everyone in one night.",
        lineCn: '值得吗？一个晚上把所有人都得罪光。',
        prompt: "根据上下文，选出画线词汇 'worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'very expensive', cn: '非常昂贵', correct: false, reason: '她问的不是价钱，是“这么做划不划算”，别只盯字面。' },
          { key: 'B', en: 'completely pointless', cn: '毫无意义', correct: false, reason: '如果她认定没意义，就不会用问句，也不会专门来找他。' },
          { key: 'C', en: 'good enough to justify the cost', cn: '值了、值得这么做', correct: true, reason: 'be worth it 就是“代价换来了相应的价值”。' }
        ],
        analysis: 'worth it 问的是“付出值不值”。苏晚其实在替他担心：你撕破脸，接下来怎么在苏家待。她还没意识到，他根本不打算待。',
        wrongFeedback: '你选错了，苏晚的眼神暗下去，把香槟放在栏杆上，说了句“随你”，转身就走。',
        afterCorrect: '陈默看着夜景：“三年里我什么都没做，那才叫不值。”他转过头，“今晚至少让他们记住了一个名字。”'
      },
      {
        plotDescription: '苏明哲在背后阴阳怪气，说一个吃软饭的就算有点副业，也翻不了天。',
        line: "Does being a house husband count as a side hustle now?",
        lineCn: '现在当家庭煮夫也算一门副业了？',
        prompt: "根据上下文，选出画线词汇 'side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a second job for extra income', cn: '副业、额外挣钱的门路', correct: true, reason: 'side hustle 就是主业之外的挣钱路子，他是在拿这个嘲笑人。' },
          { key: 'B', en: 'a weekend hobby', cn: '周末爱好', correct: false, reason: 'hobby 是花钱玩的爱好，side hustle 是为了多挣钱。' },
          { key: 'C', en: 'housework at home', cn: '家里的家务', correct: false, reason: '家务是 chores，side hustle 的重点在“挣钱”，不在干活。' }
        ],
        analysis: 'side hustle 这几年很流行，指下班后搞的第二份收入，带着点自嘲也带着点狠劲。苏明哲拿它讽刺，陈默却真有。',
        wrongFeedback: '你选错了，苏明哲笑得很得意，还问旁边的人“听懂没有”，几个人配合地点头。',
        afterCorrect: '陈默理了理被泼湿的袖口：“算。”他顿了顿，“不过我这份副业，一年挣的比苏氏三年利润多。”'
      }
    ],
    completeText: '第 4 章结束。酒会结束时，苏氏的股价忽然被人悄悄扫了一笔。没人知道买家是谁，只有苏振海盯着屏幕，第一次觉得这栋楼不太稳。'
  },
  {
    id: 'ml_5',
    index: 5,
    title: '第 5 章 · 我的工资，比你们全家高',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏家每月一次的家宴，照例要审一遍陈默。今年的话题换了：苏氏效益不好，苏振海说要开源节流，先把“闲人”的开支砍掉。饭桌上十几双眼睛都落在陈默身上。',
    questions: [
      {
        plotDescription: '一个远房亲戚放下筷子，故意问苏晚，你老公现在做什么工作，挣多少钱。',
        line: "What does he even do? Minimum wage jobs, I heard.",
        lineCn: '他到底干什么的？我听说就是最低工资那种活。',
        prompt: "根据上下文，选出画线词汇 'minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the highest salary in a company', cn: '公司里的最高薪', correct: false, reason: '正好反了，minimum 是“最低”，说的是最底层的法定工资。' },
          { key: 'B', en: 'the lowest pay allowed by law', cn: '最低工资', correct: true, reason: 'minimum wage 就是法律规定的工资下限，常用来形容活累钱少。' },
          { key: 'C', en: 'a monthly bonus', cn: '月度奖金', correct: false, reason: '这是奖金，不是工资底线，minimum 和 bonus 意思不搭。' }
        ],
        analysis: 'minimum wage 是“最低工资”，在口语里几乎是“没什么本事、挣得最少”的代名词。亲戚问得很客气，扎人却很准。',
        wrongFeedback: '你选错了，那位亲戚自顾自往下说，把“吃软饭”又讲了一遍，桌上有人笑出声。',
        afterCorrect: '陈默擦了擦手：“我上一份工作，年薪七位数。”他抬眼看过去，“后来不干了，因为太闲。”'
      },
      {
        plotDescription: '苏明哲赶紧接话，说自己这个月刷卡刷爆了，还要替苏家垫付酒会费用，装出一副大出血的样子。',
        line: "My card hit an overdraft just paying for that party.",
        lineCn: '光付那场酒会的钱，我卡就透支了。',
        prompt: "根据上下文，选出画线词汇 'overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a discount on a bill', cn: '账单单上的折扣', correct: false, reason: 'overdraft 是钱不够还硬花，跟“打折”没有关系。' },
          { key: 'B', en: 'money returned to your account', cn: '退回账户的钱', correct: false, reason: '那是退款 refund，overdraft 是账户被刷穿了。' },
          { key: 'C', en: 'spending more than the money in your account', cn: '透支、花超了余额', correct: true, reason: 'hit an overdraft 就是刷到超出余额，还得付透支费。' }
        ],
        analysis: 'overdraft 是银行术语，指账户余额被花穿。苏明哲想用这个卖惨，可他忘了，酒会的钱本来是苏氏出的。',
        wrongFeedback: '你选错了，苏明哲顺势把话题引到“家里开销大”，几个长辈开始数落年轻人不会过日子。',
        afterCorrect: '陈默端起茶：“酒会的账，我看了。”他放下杯子，“三百万的场地费，报成八百万，这透支得挺值。”'
      },
      {
        plotDescription: '苏晚皱起眉，正想岔开话题，陈默却先开了口，语气不重，每个字都落得很稳。',
        line: "I have been saving up for three years. Not for a house — for a company.",
        lineCn: '我攒了三年的钱。不是为了买房，是为了买一家公司。',
        prompt: "根据上下文，选出画线词汇 'saving up' 最准确的意思。",
        options: [
          { key: 'A', en: 'keeping money for later use', cn: '攒钱、存钱', correct: true, reason: 'save up 就是一点点把钱留下来，为将来的事做准备。' },
          { key: 'B', en: 'spending money very fast', cn: '很快把钱花光', correct: false, reason: '方向完全相反，save 是存，不是花。' },
          { key: 'C', en: 'giving money to charity', cn: '把钱捐出去', correct: false, reason: '捐钱是 donate，save up 是把钱攥在自己手里。' }
        ],
        analysis: 'save up for 是“为某件事攒钱”。陈默把三年说得很轻，可这三年他连一双鞋都没换过，这句话的分量全在留白里。',
        wrongFeedback: '你选错了，苏明哲立刻问“攒了多少，够买辆二手车吗”，笑声又一次压过来。',
        afterCorrect: '陈默没回答数字，只说了一句：“明天上午，苏氏会收到一份收购意向书。”他放下筷子，“买家是我。”'
      },
      {
        plotDescription: '苏振海脸色沉下来，说年轻人手里有点钱就乱投，最后血本无归，还不如老老实实上班。',
        line: "The boss does not spend. He invests. There is a difference.",
        lineCn: '老板不花钱，他投资。这两件事不一样。',
        prompt: "根据上下文，选出画线词汇 'invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'to waste money on nothing', cn: '把钱浪费掉', correct: false, reason: 'invest 是为了未来有回报，不是浪费，方向要分清。' },
          { key: 'B', en: 'to put money in to get more back', cn: '投资、投钱求回报', correct: true, reason: 'invest 的核心就是投入资源换回报，正对上这句的对比。' },
          { key: 'C', en: 'to lend money to a friend', cn: '借钱给朋友', correct: false, reason: '借钱收利息才算投资，单说 lend 只是借出去。' }
        ],
        analysis: 'invest 和 spend 的差别，正是这句台词的刀锋：花钱是消费，投资是把钱变成更多的钱。说话的是一直沉默的老周。',
        wrongFeedback: '你选错了，苏振海把“年轻人不懂事”说了一遍，还敲了敲桌子，饭桌上的气氛彻底僵住。',
        afterCorrect: '老周替陈默添了茶，动作很稳：“苏先生，这三年他每天只睡四小时。”他顿了顿，“那不叫乱投，叫布局。”'
      }
    ],
    completeText: '第 5 章结束。这顿饭没人吃好。散席时苏晚站在走廊尽头，看着陈默和老周一前一后下楼，忽然发现自己从来没问过，这三年他到底在做什么。'
  },
  {
    id: 'ml_6',
    index: 6,
    title: '第 6 章 · 收据我留着',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏要请一位重要客户吃饭，苏振海故意让陈默去结账，说是“给个表现的机会”。包厢里一桌人点了最贵的酒，账单送上来时，所有人都在看陈默的脸色。',
    questions: [
      {
        plotDescription: '服务员把账单递过来，苏明哲抢先看了一眼，故意大声念出最后那一行加收的费用。',
        line: "Add the tax. He cannot even do the math anyway.",
        lineCn: '把税也加上。反正他连账都算不明白。',
        prompt: "根据上下文，选出画线词汇 'tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money left for the waiter', cn: '留给服务员的小费', correct: false, reason: '小费是 tip，是自愿给的；tax 是必须交给国家的。' },
          { key: 'B', en: 'a discount for large groups', cn: '大桌客人的折扣', correct: false, reason: '税是往上加的，折扣是往下减的，方向完全不同。' },
          { key: 'C', en: 'money paid to the government', cn: '税、要上缴的钱', correct: true, reason: 'tax 是消费时要额外缴给政府的部分，账单上单列一行。' }
        ],
        analysis: 'tax 是账单上单列的那一笔，跑不掉也砍不掉。苏明哲拿它当众羞辱人，其实是在提醒陈默：这顿饭很贵。',
        wrongFeedback: '你选错了，苏明哲把账单往陈默面前一推，笑着说“慢慢算，别算错了”，满桌人都等着看笑话。',
        afterCorrect: '陈默扫了一眼总额，把卡递过去：“不用算。”他看向苏明哲，“你们点的那两瓶酒，没开。”'
      },
      {
        plotDescription: '陈默把没开封的两瓶酒推回服务员手里，声音不大，但整个包厢都听见了。',
        line: "I want a refund for the two bottles nobody opened.",
        lineCn: '那两瓶没人开的酒，我要退款。',
        prompt: "根据上下文，选出画线词汇 'refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'money given back to you', cn: '退款、退回来的钱', correct: true, reason: '没开的酒退回去，钱返给你，这就是 refund。' },
          { key: 'B', en: 'a second order', cn: '再点一次单', correct: false, reason: '他要的是退钱，不是再买，方向正好相反。' },
          { key: 'C', en: 'a receipt for payment', cn: '付款收据', correct: false, reason: '收据是证明你付过钱，退款是把钱拿回来。' }
        ],
        analysis: 'refund 是“退货退款”。陈默不吵不闹，只把没动过的东西退掉——他每一分钱都花得清楚，谁也别想让他当冤大头。',
        wrongFeedback: '你选错了，苏明哲抢着说“开了开了，都开了”，可桌上那两瓶酒的封口亮得刺眼。',
        afterCorrect: '服务员核实后当场退了钱。陈默把退款单折好，放进内袋：“账单我付，没开的酒我不认。”'
      },
      {
        plotDescription: '经理亲自进来道歉，问要不要开发票，语气恭敬了不少。',
        line: "Sir, do you need the receipt? I can print it right now.",
        lineCn: '先生，您需要收据吗？我现在就能打出来。',
        prompt: "根据上下文，选出画线词汇 'receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a menu with prices', cn: '带价格的菜单', correct: false, reason: '菜单是点菜看的，收据是付完钱拿的凭证。' },
          { key: 'B', en: 'proof that you paid', cn: '收据、付款凭证', correct: true, reason: 'receipt 就是证明这笔钱你付过的单据，所以能打印。' },
          { key: 'C', en: 'a table number', cn: '桌号', correct: false, reason: '桌号是座位编号，receipt 跟钱有关，不是号码。' }
        ],
        analysis: 'receipt 是“付款凭证”。陈默要它不是为了报销，而是因为从今晚起，苏家的每一笔账都会变成证据。',
        wrongFeedback: '你选错了，经理以为他不在意，转身要走，苏明哲趁机说“看吧，连票都不会要”。',
        afterCorrect: '陈默伸手接过那张纸，仔细看了看金额：“留着。”他把收据夹进钱包，“以后有人问这顿饭谁付的，我拿得出证据。”'
      },
      {
        plotDescription: '结完账，苏明哲还在挑刺，说服务也就一般，一分小费都不该给。',
        line: "Keep the change as a tip. You were the only one here who was polite.",
        lineCn: '零头留着当小费。今晚这儿只有你是客气的。',
        prompt: "根据上下文，选出画线词汇 'tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of advice', cn: '建议、提示', correct: false, reason: 'tip 确实有“建议”的意思，但这里给的是钱，不是忠告。' },
          { key: 'B', en: 'a warning about danger', cn: '危险警告', correct: false, reason: '警告是 warning，跟给服务员的钱完全不搭。' },
          { key: 'C', en: 'extra money for good service', cn: '小费', correct: true, reason: 'keep the change as a tip 就是“零头当小费”，标准用法。' }
        ],
        analysis: 'tip 在这里是“小费”，一句话把包厢里的两种人分开了：算计的人和做事的人。陈默给的也不只是钱。',
        wrongFeedback: '你选错了，服务员低着头退出去，苏明哲还在说“惯的”，陈默的脸色终于冷了下来。',
        afterCorrect: '陈默把钱包收好，站起身：“这顿饭我请，但我记住的不是菜。”他看了眼苏明哲，“是你们怎么对一个端盘子的人。”'
      }
    ],
    completeText: '第 6 章结束。回去的车上，老周把那张收据拍照存档：“指挥官，苏氏报销的金额是这桌的三倍。”陈默闭着眼：“记下来，以后一起算。”'
  },
  {
    id: 'ml_7',
    index: 7,
    title: '第 7 章 · 从今天起，我雇人',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏集团年会，苏振海宣布裁员，名单里有跟了苏家二十年的老员工。台下没人敢出声。陈默坐在最后一排，手里捏着那份名单，指节泛白。',
    questions: [
      {
        plotDescription: '苏振海念完名单，说公司要活下去，就得换一批更便宜的人，语气像在换零件。',
        line: "Starting tomorrow, this company will hire people who can actually work.",
        lineCn: '从明天起，这家公司只招真正能干活的人。',
        prompt: "根据上下文，选出画线词汇 'hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to give someone a job', cn: '雇佣、招人进来', correct: true, reason: 'hire 就是把人招进公司给岗位，正对上他要换人的说法。' },
          { key: 'B', en: 'to remove someone from a job', cn: '把人从岗位上撤掉', correct: false, reason: '那是 fire 或 lay off，hire 是招进来，方向相反。' },
          { key: 'C', en: 'to pay a fine', cn: '缴纳罚款', correct: false, reason: 'hire 跟罚款无关，这里说的是招工。' }
        ],
        analysis: 'hire 是“招人、雇人”。苏振海用这个词包装裁员，好像只要换人，公司就能活。台下的人听懂了另一层意思：谁都不安全。',
        wrongFeedback: '你选错了，名单被念到第三页，前排一个老师傅低下了头，手里的笔一直没放下。',
        afterCorrect: '陈默站了起来：“招人可以。”他把名单举起来，“但这十二个人，我雇。”会场一下安静，所有人的目光转了过来。'
      },
      {
        plotDescription: '苏明哲急了，指着陈默喊了一句，让保安把人清出去，声音都劈了。',
        line: "Uncle, fire him. Right now. He is ruining the meeting.",
        lineCn: '叔叔，把他开了。现在，他正在毁掉这场会。',
        prompt: "根据上下文，选出画线词汇 'fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to light a flame', cn: '点火、放火', correct: false, reason: '那是字面意思，这里说的是把人从职位上赶走。' },
          { key: 'B', en: 'to dismiss someone from a job', cn: '解雇、炒掉', correct: true, reason: 'fire somebody 就是把他开掉，后面还有 right now 催着执行。' },
          { key: 'C', en: 'to train a new worker', cn: '培训新人', correct: false, reason: '培训是 train，跟“赶人走”完全相反。' }
        ],
        analysis: 'fire 是“炒人”，是老板对员工的动作。有意思的是，喊这句话的苏明哲并没有这个权力，他只是在替自己慌。',
        wrongFeedback: '你选错了，保安真的往前走了两步，会场里有人倒吸一口气，那位老师傅抬起了头。',
        afterCorrect: '陈默没看保安，只看着苏振海：“你现在开我，明天这十二个人就带着客户走。”他顿了一下，“包括华东那三家。”'
      },
      {
        plotDescription: '苏振海沉默了很久，最后换了个说法，说陈默既然要走，就别再拿苏家的东西。',
        line: "I quit this family three years ago. Tonight I am just collecting my things.",
        lineCn: '三年前我就退出这个家了。今晚我只是来拿回自己的东西。',
        prompt: "根据上下文，选出画线词汇 'quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'to become quiet', cn: '安静下来', correct: false, reason: '安静是 quiet，quit 比它多一个 t，意思却是“退出”。' },
          { key: 'B', en: 'to be promoted', cn: '被提拔', correct: false, reason: '升职是 get a promotion，quit 是主动离开。' },
          { key: 'C', en: 'to leave a job or a position', cn: '退出、主动不干了', correct: true, reason: 'quit 是主动退出，用在这里是“退出这个家”。' }
        ],
        analysis: 'quit 的核心是“主动不干了”。陈默把婚姻、把这三年的身份，用一个 quit 轻轻放下——不是被赶走，是他自己走的。',
        wrongFeedback: '你选错了，苏振海冷笑说“说得好像你随时能走”，台下的老员工交换了一个眼神。',
        afterCorrect: '陈默把工牌放在第一排的桌上，那是苏氏三年前发给他的临时证。“东西我早搬完了。”他转身，“今晚带走的是人。”'
      },
      {
        plotDescription: '散会后，苏晚在地下车库拦住他，说董事会正在讨论她的位置，让他别再添乱。',
        line: "The board is talking about my promotion. Do not make it harder.",
        lineCn: '董事会正在讨论我的升职。别让事情更难办。',
        prompt: "根据上下文，选出画线词汇 'promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a move to a higher position', cn: '升职、提拔', correct: true, reason: '董事会讨论的 promotion，就是把她往上提一级。' },
          { key: 'B', en: 'a cut in pay', cn: '降薪', correct: false, reason: '降薪是 pay cut，promotion 是往上走。' },
          { key: 'C', en: 'a transfer to another city', cn: '调去外地', correct: false, reason: '调岗是 transfer，promotion 强调的是职位升高。' }
        ],
        analysis: 'promotion 是“升职”。苏晚把这句话说得像谈判，其实是在解释自己为什么不能站到他这边——她的位置，也悬着。',
        wrongFeedback: '你选错了，苏晚眼里的疲惫一下子涌上来，她松开手，退后一步，说“当我没说”。',
        afterCorrect: '陈默看着她：“那就让他们讨论。”他拉开车门，“等你坐上那个位置，你会明白今晚我为什么站起来。”'
      }
    ],
    completeText: '第 7 章结束。第二天，十二个老员工集体递了辞呈，跟着陈默走了。苏氏的年会视频被传到网上，评论区吵成一片，没人知道那个站起来的人是谁。'
  },
  {
    id: 'ml_8',
    index: 8,
    title: '第 8 章 · 十分钟，签完这份合同',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏最大的客户要撤单，合同半夜到期。苏晚带着团队守在会议室，改了七版方案，对方始终不接电话。凌晨十一点四十，陈默推门进来，手里只有一张纸。',
    questions: [
      {
        plotDescription: '苏晚的助理小声说，全组人今晚都别想回家了，咖啡已经续到第四轮。',
        line: "Everyone is on overtime tonight. Nobody goes home until it is signed.",
        lineCn: '今晚全员加班。签完字之前，谁也不许回家。',
        prompt: "根据上下文，选出画线词汇 'overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'working fewer hours than usual', cn: '比平时少干几个小时', correct: false, reason: 'overtime 是“超出正常工时”，不是缩短工时。' },
          { key: 'B', en: 'extra hours beyond normal work', cn: '加班、额外的工作时间', correct: true, reason: 'on overtime 就是留下来加班，正好对上“不许回家”。' },
          { key: 'C', en: 'a public holiday', cn: '法定假日', correct: false, reason: '假日是 holiday，这里说的是熬夜干活。' }
        ],
        analysis: 'overtime 指正常工时之外的加班，也指加班费。这句话里全是疲惫：方案改了七版，人还在撑着。',
        wrongFeedback: '你选错了，助理把这句话转达下去，会议室里有人低低叹了口气，键盘声又响起来。',
        afterCorrect: '陈默把那张纸放在桌上：“都回去睡。”他看了眼表，“十分钟，我签完。”苏晚抬起头，眼睛红得厉害。'
      },
      {
        plotDescription: '苏晚说对方公司的法务卡着一条条款不放，时间根本不够，语气里全是无力。',
        line: "The deadline is midnight. We finish before it, or we lose the client.",
        lineCn: '死线是午夜。我们必须赶在之前完成，否则客户就没了。',
        prompt: "根据上下文，选出画线词汇 'deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the start of a meeting', cn: '会议开始的时间', correct: false, reason: 'deadline 是最后期限，不是开始时间，方向正好相反。' },
          { key: 'B', en: 'a fee for paying late', cn: '逾期要交的费用', correct: false, reason: '滞纳金是 late fee，deadline 是那条不能越的时间线。' },
          { key: 'C', en: 'the last time something must be finished', cn: '最后期限、死线', correct: true, reason: 'deadline 就是必须完成的最后时点，所以后面跟着“否则丢客户”。' }
        ],
        analysis: 'deadline 字面是“死亡线”，指不能拖过的最后时点。苏晚怕的不是条款，是十二点之后一切归零。',
        wrongFeedback: '你选错了，苏晚把笔放下，声音很轻：“来不及了。”会议室里没人敢接这句话。',
        afterCorrect: '陈默拿起手机拨了一个号码，只说了一句：“老周，让对方老板听电话。”三分钟后，法务的邮件到了。'
      },
      {
        plotDescription: '电话挂断，苏晚还没反应过来，对方公司的人已经改口，说合同可以按苏氏的版本签。',
        line: "The client asked for you by name. Who are you, Chen Mo?",
        lineCn: '客户点名要你。陈默，你到底是谁？',
        prompt: "根据上下文，选出画线词汇 'client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a customer who pays for a service', cn: '客户、出钱的合作方', correct: true, reason: 'client 就是花钱买服务的一方，这里指那家大公司。' },
          { key: 'B', en: 'a business competitor', cn: '竞争对手', correct: false, reason: '如果是竞争对手，就不会点名要他签合同了。' },
          { key: 'C', en: 'a lawyer hired by the company', cn: '公司请的律师', correct: false, reason: '律师是 lawyer，client 是付钱的那一方。' }
        ],
        analysis: 'client 是“客户”，在商务里比 customer 更正式，常指长期合作方。苏晚这一问，问的是三年都没问出口的事。',
        wrongFeedback: '你选错了，苏晚把问题咽了回去，转身去安排签约，只是背影比刚才僵。',
        afterCorrect: '陈默没有回答，只把签好的合同推过去：“先保住公司。”他站起来，“我的事，等你准备好了再问。”'
      },
      {
        plotDescription: '签完字，苏晚说明早九点还要开复盘会，让他务必到场，语气像在试探。',
        line: "Move the meeting to nine. I have somewhere to be at eight.",
        lineCn: '会议改到九点。八点我还有别的地方要去。',
        prompt: "根据上下文，选出画线词汇 'meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a celebration party', cn: '庆功聚会', correct: false, reason: '这里是要复盘工作，不是庆祝，party 才对。' },
          { key: 'B', en: 'an arranged gathering to discuss business', cn: '会议、碰头商量事情', correct: true, reason: 'meeting 就是约好时间坐下来谈事，改时间正说明它是安排。' },
          { key: 'C', en: 'a phone repair appointment', cn: '手机维修预约', correct: false, reason: '语境是公司复盘，跟修手机没有关系。' }
        ],
        analysis: 'meeting 是可安排、可改期的“会议”。陈默答应得很随意，苏晚却记住了那句“八点还有别的地方”。',
        wrongFeedback: '你选错了，助理把时间改到九点，会议室里的人都松了口气，只有苏晚盯着门口。',
        afterCorrect: '第二天八点，陈默出现在城郊一家小医院。他妹妹陈小满躺在病床上，看见他就笑：“哥，你怎么又瘦了。”'
      }
    ],
    completeText: '第 8 章结束。合同保住了，苏氏的股价止跌。苏晚在会上第一次没有提陈默的名字，散会后才问助理：“帮我查一个人，三年前从哪儿来的。”'
  },
  {
    id: 'ml_9',
    index: 9,
    title: '第 9 章 · 谁才是废物',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏季度会上，苏明哲把陈默牵头救回来的项目写成了自己的名字，还做了一份漂亮的汇报。台下掌声很响，苏振海当场宣布给他升职。',
    questions: [
      {
        plotDescription: '苏明哲站在投影前，指着那页方案，说他跟了三个月，每一个细节都亲自盯。',
        line: "That project was mine. You just signed your name on the last page.",
        lineCn: '那个项目是我的。你只是在最后一页签了个名字。',
        prompt: "根据上下文，选出画线词汇 'project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a paper file', cn: '一份纸质文件', correct: false, reason: '文件只是载体，project 指的是一整套要做完的工作。' },
          { key: 'B', en: 'a promise to someone', cn: '对别人的承诺', correct: false, reason: '承诺是 promise，这里说的是能汇报、能邀功的事。' },
          { key: 'C', en: 'a planned piece of work', cn: '项目、有计划的一摊工作', correct: true, reason: 'project 就是为了某个目标推进的一整套工作。' }
        ],
        analysis: 'project 是“项目”，有时间、有目标、有负责人。苏明哲抢的正是这个“负责人”的身份，而陈默只留了一个签名。',
        wrongFeedback: '你选错了，投影翻到署名页，苏明哲的名字被放得很大，台下又响起一阵掌声。',
        afterCorrect: '陈默没有站起来，只问了一句：“第三版的成本模型，第二页第三行是什么数？”苏明哲的笑容停在脸上。'
      },
      {
        plotDescription: '苏明哲答不上来，索性把话挑明，说陈默这种人留在苏氏一天都是祸害。',
        line: "Say one more word, and you will be fired before sunrise.",
        lineCn: '你再多说一句，天亮之前你就得被炒。',
        prompt: "根据上下文，选出画线词汇 'fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'dismissed from a job', cn: '被解雇、被开掉', correct: true, reason: 'be fired 就是被公司赶走，所以前面才有“天亮之前”。' },
          { key: 'B', en: 'set on fire', cn: '被点着了', correct: false, reason: '字面意思不成立，人不是东西，这里是“被炒”。' },
          { key: 'C', en: 'extremely tired', cn: '累到极点', correct: false, reason: '累是 exhausted，被开掉才是 fired。' }
        ],
        analysis: 'be fired 是“被解雇”，和 quit（主动辞职）刚好相反。苏明哲拿它当威胁，可他忘了自己也只是个打工的。',
        wrongFeedback: '你选错了，苏明哲的声音拔高，苏振海也跟着敲桌子，让陈默“识相点”。',
        afterCorrect: '陈默终于站起来，把一份打印件放在投影仪上：“这是项目的邮件记录，三百二十七封。”他抬了抬下巴，“要数署名吗？”'
      },
      {
        plotDescription: '会议室鸦雀无声。陈默把打印件收好，语气平淡，像在谈一件与己无关的事。',
        line: "This is not personal. This is business. You taught me that.",
        lineCn: '这不是私人恩怨，这是生意。这话是你教我的。',
        prompt: "根据上下文，选出画线词汇 'business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a personal hobby', cn: '个人爱好', correct: false, reason: '他在谈公司里的利益，不是下班后的兴趣。' },
          { key: 'B', en: 'the activity of trading and making money', cn: '生意、商业上的事', correct: true, reason: 'business 在这里就是“生意场上的事”，和 private 相对。' },
          { key: 'C', en: 'a family matter', cn: '家里的私事', correct: false, reason: '正好相反，他说这句就是为了把私事和生意分开。' }
        ],
        analysis: 'This is business 是职场里最冷的一句话：不谈感情，只谈规则。陈默把它还给苏振海，等于宣告自己不再当家人。',
        wrongFeedback: '你选错了，苏振海脸色一变，会议被迫中断，苏明哲站在原地，手里的激光笔还在抖。',
        afterCorrect: '陈默把资料留在桌上：“项目归谁我不在乎。”他走到门口，“但从今天起，你们每拿一次这个项目，就得付我一次授权费。”'
      },
      {
        plotDescription: '苏振海追出来，在走廊上压低声音，说可以谈，问他到底想要什么。',
        line: "Here is the deal: you leave tonight, and I will not sue.",
        lineCn: '条件是这样：你今晚走人，我就不起诉。',
        prompt: "根据上下文，选出画线词汇 'deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'a card game', cn: '一种纸牌游戏', correct: false, reason: '这里是谈判条件，不是打牌，字面义要排除。' },
          { key: 'B', en: 'a meal for two', cn: '两人份的饭', correct: false, reason: 'deal 跟吃饭无关，后面接的是条件和后果。' },
          { key: 'C', en: 'an agreement between two sides', cn: '交易、谈成的条件', correct: true, reason: 'here is the deal 就是“条件是这样”，一种谈判说法。' }
        ],
        analysis: 'Here is the deal 是谈判桌上的固定开场：我把条件摆出来。陈默用它反客为主——现在轮到他提条件了。',
        wrongFeedback: '你选错了，苏振海以为他怕了，语气立刻硬起来，还补了一句“别不识抬举”。',
        afterCorrect: '陈默转过身：“我的条件是，苏明哲今晚走。”他笑了笑，“至于起诉，你可以试试，看谁先坐不住。”'
      }
    ],
    completeText: '第 9 章结束。当晚，苏明哲被停职，苏氏内部炸了锅。陈默回到那间租来的小办公室，老周递上一份文件：“指挥官，第一步，成了。”'
  },
  {
    id: 'ml_10',
    index: 10,
    title: '第 10 章 · 妹妹，别怕，哥在',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '陈默的妹妹陈小满查出需要手术，费用三十万。苏家停了她的医疗卡，理由写得冠冕堂皇：非直系亲属，不予垫付。医院下了最后通知，今晚不交钱就停药。',
    questions: [
      {
        plotDescription: '医院办公室里，苏家的委托人把一份文件推过来，说签了这个，费用就能谈。',
        line: "Read the contract. Every word. Then tell me who the freeloader is.",
        lineCn: '把这份合同读完，一个字一个字读。然后告诉我，谁才是白占便宜的人。',
        prompt: "根据上下文，选出画线词汇 'contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written legal agreement', cn: '合同、有法律效力的约定', correct: true, reason: 'contract 就是双方签字的书面约定，所以要“一个字一个字读”。' },
          { key: 'B', en: 'a business card', cn: '名片', correct: false, reason: '名片只有联系方式，不会需要逐字读完再签字。' },
          { key: 'C', en: 'a payment receipt', cn: '付款收据', correct: false, reason: '收据是付完钱才有的，这里还没付，是拿来签的。' }
        ],
        analysis: 'contract 是“合同”，每一个字都可能埋着陷阱。陈默让它被读完，是为了让对方自己听见里面的条件有多脏。',
        wrongFeedback: '你选错了，委托人笑着把笔递过来，说“签吧，你妹妹等不起”，走廊里传来推车的声响。',
        afterCorrect: '陈默把合同翻到最后一页，指着一行小字：“签了这份，我妹妹的肖像和病例归你们用三年。”他合上文件，“这也叫垫付？”'
      },
      {
        plotDescription: '委托人讪讪收回文件，转头说起医院的难处，说药价年年涨，谁都不容易。',
        line: "You made a profit off a sick girl's medicine. That is the real shame.",
        lineCn: '你们从一个生病女孩的药上赚利润。这才叫丢人。',
        prompt: "根据上下文，选出画线词汇 'profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'a financial loss', cn: '亏损', correct: false, reason: 'profit 是赚到的钱，亏钱是 loss，方向反了。' },
          { key: 'B', en: 'money gained after costs', cn: '利润、赚到的钱', correct: true, reason: 'make a profit 就是赚了钱，这里说的是从药上多赚的部分。' },
          { key: 'C', en: 'a discount for patients', cn: '给病人的折扣', correct: false, reason: '折扣是少收钱，利润是多出来的钱，完全不同。' }
        ],
        analysis: 'make a profit off 是“从……身上赚钱”，后面接人时往往带道德指责。陈默这句话不是骂，是把账摆在明面上。',
        wrongFeedback: '你选错了，委托人脸色一沉，说“医院也要运转”，把停药通知往前推了推。',
        afterCorrect: '陈默拿出手机，把那份药价清单拍下来：“这张单子，明天会出现在卫健委的邮箱里。”对方的手停住了。'
      },
      {
        plotDescription: '缴费窗口前，护士小声说，刚才有人替这位病人补了一笔钱，还多给了值班人员。',
        line: "The hospital staff got a bonus tonight. From him, not from us.",
        lineCn: '今晚医院的人拿了奖金。是他给的，不是我们。',
        prompt: "根据上下文，选出画线词汇 'bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'a punishment for mistakes', cn: '犯错后的处罚', correct: false, reason: 'bonus 是额外给的好处，处罚是 punishment。' },
          { key: 'B', en: 'a bill to be paid', cn: '待付的账单', correct: false, reason: '奖金是给出去的钱，账单是要付的钱。' },
          { key: 'C', en: 'extra money given as a reward', cn: '奖金、额外奖励', correct: true, reason: 'bonus 就是工资之外额外给的奖励，这里指他额外给的钱。' }
        ],
        analysis: 'bonus 是“额外奖励”。陈默没有讲价，也没有闹，他只是让今晚值班的人知道：做对的事有人看见。',
        wrongFeedback: '你选错了，护士低下头继续敲键盘，窗口外的队伍往前挪了一步，没人再说话。',
        afterCorrect: '陈默把缴费单收好，转身对妹妹说：“手术排在下周一。”他蹲下来，平视她的眼睛，“别怕，钱的事哥来解决。”'
      },
      {
        plotDescription: '陈小满抓着他的袖子，问他是不是又在外面受气了，说自己可以不做手术。',
        line: "Keep your salary. I came for my sister, not for your money.",
        lineCn: '你的工资自己留着。我来是为了我妹妹，不是为了你的钱。',
        prompt: "根据上下文，选出画线词汇 'salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed money paid for a job', cn: '薪资、按月发的工资', correct: true, reason: 'salary 是按岗位定期发的工资，所以能说“留着你的”。' },
          { key: 'B', en: 'a bank loan', cn: '银行贷款', correct: false, reason: '贷款要还，工资是干活挣来的，性质不同。' },
          { key: 'C', en: 'a retirement pension', cn: '退休金', correct: false, reason: '退休金是养老的钱，这里说的是在职的工资。' }
        ],
        analysis: 'salary 是“固定薪资”，通常按月发。陈默把苏家递来的钱推回去，是不想让妹妹的手术沾上任何条件。',
        wrongFeedback: '你选错了，陈小满的眼圈红了，把被子往上拉了拉，小声说“哥，我不想拖累你”。',
        afterCorrect: '陈默替她把被角掖好：“三年前我答应过爸妈，会把你养大。”他站起身，“手术做完，哥带你去吃火锅。”'
      }
    ],
    completeText: '第 10 章结束。手术费当天结清。深夜，陈默坐在医院走廊的长椅上，老周发来一条消息：“赵家的人今天去了苏家，谈的是联姻。”他回了两个字：盯住。'
  },
  {
    id: 'ml_11',
    index: 11,
    title: '第 11 章 · 商场门口的第一巴掌',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏看中的那块地，对手是赵家。赵天豪约苏晚在商场谈，谈崩了以后堵在门口，当着几十号人的面说她“嫁了个废物还想做生意”。陈默赶到时，苏晚的手正被人抓着。',
    questions: [
      {
        plotDescription: '赵天豪的手下把苏晚围在中间，嘴里不干不净，说苏家现在连个能出头的男人都没有。',
        line: "I am pissed off, and you will not like me when I am.",
        lineCn: '我现在很火大，而我火大的时候，你不会喜欢那个我。',
        prompt: "根据上下文，选出画线词汇 'pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常火大、气炸了', correct: true, reason: 'pissed off 是口语里最常见的“气炸”，后面还带着警告。' },
          { key: 'B', en: 'slightly confused', cn: '有点困惑', correct: false, reason: '被人堵在门口不会只是困惑，这句话的语气明显是愤怒。' },
          { key: 'C', en: 'very drunk', cn: '喝得很醉', correct: false, reason: 'pissed 在英式里能指喝醉，但 off 加上就是“生气”。' }
        ],
        analysis: 'be pissed off 是“被惹毛了”，语气比 angry 更冲更口语。陈默这句不是虚张声势，是给对方最后一次退场的机会。',
        wrongFeedback: '你选错了，那几个手下笑得更放肆，其中一个人还伸手去拉苏晚的包带。',
        afterCorrect: '陈默走上前，一只手扣住那人的手腕，力道不大，对方却整条胳膊都软了。“我数三个数。”他说，“你们一起走。”'
      },
      {
        plotDescription: '赵天豪退了一步，转头对围观的人喊，说这人是个疯子，让大家别慌。',
        line: "Do not freak out, everyone. He is just a house husband with a temper.",
        lineCn: '大家别慌。他不过是个有点脾气的上门女婿。',
        prompt: "根据上下文，选出画线词汇 'freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'get very excited', cn: '兴奋起来', correct: false, reason: '这里是让人别慌，不是让人别兴奋，情绪方向不对。' },
          { key: 'B', en: 'panic or lose control', cn: '惊慌、情绪失控', correct: true, reason: 'freak out 在冲突现场就是“慌了、乱了”，所以要先安抚。' },
          { key: 'C', en: 'leave the place', cn: '离开这个地方', correct: false, reason: '离开是 leave，freak out 说的是情绪崩掉。' }
        ],
        analysis: 'freak out 在这里是“被吓到、乱起来”。赵天豪嘴上安抚人群，实际是在给陈默扣“疯子”的帽子。',
        wrongFeedback: '你选错了，围观的人真的往后退了半步，赵天豪的嘴角翘起来，像是赢了一局。',
        afterCorrect: '陈默没理他，只把苏晚拉到身后，然后对围观的人说：“该慌的不是你们。”他抬眼看赵天豪，“是他。”'
      },
      {
        plotDescription: '人群散开后，苏晚才发现自己的手在抖，她靠着墙，说了一句“我没事”。',
        line: "You are exhausted. Sit down before you fall down.",
        lineCn: '你已经累到极限了。坐下，别等摔了才坐。',
        prompt: "根据上下文，选出画线词汇 'exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely tired', cn: '精疲力尽、累到极限', correct: true, reason: 'exhausted 是“被榨干了力气”，所以下一句才让她坐下。' },
          { key: 'B', en: 'very excited', cn: '非常兴奋', correct: false, reason: '她手在抖、靠墙站，是脱力，不是兴奋。' },
          { key: 'C', en: 'a little hungry', cn: '有点饿', correct: false, reason: '饿是 hungry，不至于让人站不住。' }
        ],
        analysis: 'exhausted 比 tired 重得多，是“力气被抽干”。苏晚一句“我没事”，反而让这个词更明显。',
        wrongFeedback: '你选错了，苏晚勉强站直，脚下却晃了一下，扶住了旁边的广告牌，脸色白得吓人。',
        afterCorrect: '陈默把她按在长椅上，蹲下来看她：“你一个人扛了三年。”他声音低下去，“从今天起，分我一半。”'
      },
      {
        plotDescription: '第二天，赵天豪派人送来一瓶酒，说是赔罪，还附了句话，说昨晚喝多了。',
        line: "A hangover does not excuse what he did. Send it back.",
        lineCn: '宿醉不能当他所作所为的借口。退回去。',
        prompt: "根据上下文，选出画线词汇 'hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a headache after drinking too much', cn: '宿醉、喝多后的难受', correct: true, reason: 'hangover 就是前一天喝多，第二天头痛难受的状态。' },
          { key: 'B', en: 'a formal apology', cn: '正式的道歉', correct: false, reason: '道歉是 apology，这里说的是喝醉的后果。' },
          { key: 'C', en: 'a gift of wine', cn: '送来的酒', correct: false, reason: '酒是礼物，hangover 是喝酒之后的身体反应。' }
        ],
        analysis: 'hangover 是“宿醉”，常被拿来当挡箭牌。陈默一句顶回去：喝多了不是理由，动手就是动手。',
        wrongFeedback: '你选错了，那瓶酒被留在了前台，赵天豪的人在门口笑，说“苏家还挺好哄”。',
        afterCorrect: '老周把酒原样送回赵氏前台，还附了一张纸：“酒退。人，我们会来找。”当天下午，赵氏的股价开始掉。'
      }
    ],
    completeText: '第 11 章结束。苏晚在办公室坐到很晚，临走时问陈默：“你昨晚为什么来得那么快？”他正在收伞：“因为我一直在楼下。”'
  },
  {
    id: 'ml_12',
    index: 12,
    title: '第 12 章 · 你们的局，我拆了',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵家设局，请了半个商会的人吃饭，说是要“给苏家一个机会”。包厢里摆着九位座，苏晚被安排在末席。陈默推门进去时，赵天豪正举杯，说要谈一桩只赚不赔的买卖。',
    questions: [
      {
        plotDescription: '酒杯一圈圈敬下来，赵天豪的人在每个杯子边都放了同样的合同，说是“合作意向”。',
        line: "This partnership is toxic. It will eat your company from the inside.",
        lineCn: '这个合作是有毒的。它会从里面把你们的公司吃空。',
        prompt: "根据上下文，选出画线词汇 'toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful in a hidden way', cn: '有毒的、暗地里有害的', correct: true, reason: 'toxic 本指有毒，用来形容关系或合作就是“表面好、内里烂”。' },
          { key: 'B', en: 'extremely profitable', cn: '极其赚钱的', correct: false, reason: '他是在警告这笔合作会掏空公司，不是夸它赚钱。' },
          { key: 'C', en: 'legally invalid', cn: '法律上无效的', correct: false, reason: 'toxic 说的是有害，不是无效，无效是 invalid。' }
        ],
        analysis: 'toxic 从“有毒”引申为“慢性伤害”。陈默不说违法，只说有毒——因为这份合同每一页都合法，合起来却要命。',
        wrongFeedback: '你选错了，赵天豪顺势把合同推到苏晚面前，笑着说“签了吧，机会不等人”。',
        afterCorrect: '陈默把合同翻到第七页，指着担保条款：“这一条，等于苏氏替赵氏所有债务兜底。”他把纸转过去，“这也叫只赚不赔？”'
      },
      {
        plotDescription: '包厢里安静了一瞬，赵天豪干笑两声，说陈默不懂规矩，让他别在长辈面前乱说话。',
        line: "It is awkward for everyone when the house husband starts talking business.",
        lineCn: '一个上门女婿开始谈生意，这让在座所有人都挺尴尬。',
        prompt: "根据上下文，选出画线词汇 'awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'funny and entertaining', cn: '好笑、有意思的', correct: false, reason: '他说这话是想让人难堪，不是想逗乐，气氛是僵的。' },
          { key: 'B', en: 'embarrassing and uncomfortable', cn: '尴尬、让人不舒服的', correct: true, reason: 'awkward 就是那种“空气突然安静”的难堪，正对上场面。' },
          { key: 'C', en: 'angry and loud', cn: '愤怒又吵闹的', correct: false, reason: '没人吼叫，恰恰是安静下来，所以才是尴尬。' }
        ],
        analysis: 'awkward 形容“场面僵住、让人不自在”。赵天豪想用这个词把陈默按回“不懂事”的位置，可尴尬的其实是他自己。',
        wrongFeedback: '你选错了，几个人低头喝水，苏晚的手指停在杯沿上，包厢里的空气凝了一层。',
        afterCorrect: '陈默笑了笑：“尴尬的不是我。”他环视一圈，“是签了这份合同的各位。”桌上有人的手抖了一下。'
      },
      {
        plotDescription: '有人不服，说这份合同他们公司法务看过，没问题。陈默只回了一句，全桌都静了。',
        line: "Your legal team is dead wrong. Read clause seven again.",
        lineCn: '你们法务错得离谱。再去读一遍第七条。',
        prompt: "根据上下文，选出画线词汇 'dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely, used for emphasis', cn: '完全地、彻底地（加强语气）', correct: true, reason: 'dead wrong 是“错得彻底”，dead 在这里只是加强语气。' },
          { key: 'B', en: 'no longer alive', cn: '已经死了', correct: false, reason: '法务团队是活人，这里 dead 是在修饰 wrong，不是人。' },
          { key: 'C', en: 'very funny', cn: '非常搞笑', correct: false, reason: '他在指出合同的问题，没有半点开玩笑的意思。' }
        ],
        analysis: 'dead 在口语里能当副词用，表示“完全、绝对”，比如 dead right、dead wrong。这里不是“死了”，是“错得没边”。',
        wrongFeedback: '你选错了，那人翻了两页就把合同合上，额头上开始出汗，赵天豪递过去一个眼神。',
        afterCorrect: '那位老板把合同推到一边，站起来说家里有事，先走了。第二个、第三个跟着起身，包厢一下空了一半。'
      },
      {
        plotDescription: '赵天豪脸上挂不住，把杯子重重放下，说陈默坏了大家的好事，这事没完。',
        line: "I am thrilled you showed your hand tonight. Now everyone knows what you are.",
        lineCn: '我很高兴你今晚把手牌亮出来了。现在所有人都知道你是什么东西了。',
        prompt: "根据上下文，选出画线词汇 'thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely pleased', cn: '欣喜若狂、非常高兴', correct: true, reason: 'thrilled 是“高兴到激动”，这句是反话式的挑衅。' },
          { key: 'B', en: 'deeply worried', cn: '非常担心', correct: false, reason: '他在放狠话，不是示弱，语气里带着得意。' },
          { key: 'C', en: 'a little bored', cn: '有点无聊', correct: false, reason: '这个词跟无聊无关，thrilled 是高分贝的高兴。' }
        ],
        analysis: 'thrilled 是“兴奋、痛快”，这里被赵天豪拿来装镇定。陈默听懂了，回的是一句更狠的。',
        wrongFeedback: '你选错了，赵天豪把酒杯一推，酒洒在桌布上，他起身就走，门被摔得很响。',
        afterCorrect: '陈默替他扶正那把椅子：“我也很高兴。”他声音不大，“今晚之后，没人敢再跟你签第二份合同。”'
      }
    ],
    completeText: '第 12 章结束。那晚的饭局散得很快，商会里传开一句话：赵家的合同不能签。苏晚走出酒店时，第一次主动跟陈默并肩走。'
  },
  {
    id: 'ml_13',
    index: 13,
    title: '第 13 章 · 一夜之间，风向变了',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '拆局之后，苏氏的电话被打爆了。有人来求和，有人来探口风，也有人递来合作意向。苏晚连续三天没回家，办公室的灯一直亮到凌晨。',
    questions: [
      {
        plotDescription: '助理抱着一摞文件进来，说今天又新增了七家合作方，苏晚盯着电脑，半天没说话。',
        line: "You look overwhelmed. Pick three, and let the rest wait.",
        lineCn: '你看着快被压垮了。挑三家，剩下的让他们等。',
        prompt: "根据上下文，选出画线词汇 'overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to cope because there is too much', cn: '被压得喘不过气、应付不过来', correct: true, reason: 'overwhelmed 是“事情多到接不住”，所以下一句才让她只挑三家。' },
          { key: 'B', en: 'very happy about the news', cn: '因为消息而非常开心', correct: false, reason: '她盯着屏幕半天不说话，是撑不住，不是高兴。' },
          { key: 'C', en: 'well organized', cn: '安排得井井有条', correct: false, reason: '正好相反，正因为乱成一团才需要有人帮她筛。' }
        ],
        analysis: 'be overwhelmed 是“被淹没”，主语可以是人，也可以是情绪。陈默没有劝她加油，只是替她把事情砍到能做的数量。',
        wrongFeedback: '你选错了，苏晚又点开一封邮件，手指在键盘上停了很久，最后什么也没回。',
        afterCorrect: '陈默抽走她手里的鼠标：“去睡两个小时。”他把三份文件摆在桌上，“这三家是真想合作的，我盯着。”'
      },
      {
        plotDescription: '苏晚靠在椅背上，闭着眼说，她怕自己一停下来，所有事情就全塌了。',
        line: "Chill. The building will not fall down because you slept for two hours.",
        lineCn: '放松点。你睡两个小时，这栋楼不会塌。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'cool down the room', cn: '把房间降温', correct: false, reason: '这是字面理解，语境是在劝人放松，不是空调。' },
          { key: 'B', en: 'relax and stop worrying', cn: '放松、别那么紧绷', correct: true, reason: '口语里 chill 就是“松一松、别慌”，正对上她的焦虑。' },
          { key: 'C', en: 'work harder', cn: '更努力地干', correct: false, reason: '方向反了，chill 是让人停下来，不是催她加码。' }
        ],
        analysis: 'chill 当动词是“放松下来”，语气很轻，像朋友拍你一下肩膀。陈默用这个词，是把她的紧绷先卸掉。',
        wrongFeedback: '你选错了，苏晚睁开眼，说我不能停，又把文件拉回自己面前，指尖压得发白。',
        afterCorrect: '陈默没再劝，关了她桌上的台灯：“灯我关了。”他走到门口，“你要么睡，要么我陪你熬到天亮。”'
      },
      {
        plotDescription: '凌晨四点，苏晚终于撑不住，趴在桌上睡着了。陈默替她披上外套，自己坐到沙发上。',
        line: "I am drained, but I cannot sleep. Too much is riding on tomorrow.",
        lineCn: '我被掏空了，可就是睡不着。明天压着太多东西。',
        prompt: "根据上下文，选出画线词汇 'drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely emptied of energy', cn: '被掏空、一点力气都不剩', correct: true, reason: 'drained 是“像被抽干”，和后面“睡不着”一起说明她透支了。' },
          { key: 'B', en: 'wet from rain', cn: '被雨淋湿了', correct: false, reason: 'drain 有排水之义，但这里说的是人的精力被抽干。' },
          { key: 'C', en: 'confused about the plan', cn: '对计划感到困惑', correct: false, reason: '她不是不懂计划，是身体和精神都空了。' }
        ],
        analysis: 'drained 形容精力被榨干，比 tired 更深一层。陈默说这句话时，其实自己也是同样的状态——他已经三天没合眼。',
        wrongFeedback: '你选错了，苏晚的声音越来越轻，最后几个字几乎听不见，额头顶在文件上。',
        afterCorrect: '陈默把外套盖在她肩上，自己靠着沙发闭上眼。天快亮时，他忽然睁开眼，手机在震——是韩青。'
      },
      {
        plotDescription: '电话那头，韩青说查到赵家最近在大量收购苏氏的散股，动作很急。',
        line: "I am anxious about one thing: they are buying too fast.",
        lineCn: '我只担心一件事：他们买得太急了。',
        prompt: "根据上下文，选出画线词汇 'anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried about something', cn: '焦虑、为某件事担心', correct: true, reason: 'be anxious about 就是“为某事不安”，后面接的正是担心的事。' },
          { key: 'B', en: 'excited to start', cn: '跃跃欲试', correct: false, reason: '买得太急是危险信号，语气是警觉而不是期待。' },
          { key: 'C', en: 'angry at someone', cn: '对某人生气', correct: false, reason: '这里是心里没底，不是发火，angry 更直接。' }
        ],
        analysis: 'anxious 是“心里悬着”，既可以指担心，也可以指迫切。这里配上 too fast，就是典型的危险预判。',
        wrongFeedback: '你选错了，韩青在电话那头沉默了几秒，说“要不要现在就动手”，陈默却迟迟没有回答。',
        afterCorrect: '陈默走到窗边：“让他们买。”他看着楼下的车流，“买得越多，套得越深。查清楚他们用谁的钱。”'
      }
    ],
    completeText: '第 13 章结束。天亮时苏晚醒来，肩上多了一件外套。桌上放着一份整理好的名单，每一家后面都写着两个字：可靠，或危险。'
  },
  {
    id: 'ml_14',
    index: 14,
    title: '第 14 章 · 他也配姓陈？',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵天豪找了个由头，把苏氏的供应商都请去喝茶，席间放话：谁敢再给苏氏供货，就是跟赵家过不去。三家供应商当晚就退了单，苏氏的产线停了一半。',
    questions: [
      {
        plotDescription: '苏晚把退单函放在桌上，赵天豪的人还在门口等着回话，态度轻慢。',
        line: "I was furious when I read this. Then I realized it is a gift.",
        lineCn: '我看完这份东西的时候狂怒。然后我意识到，这是一份礼物。',
        prompt: "根据上下文，选出画线词汇 'furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '狂怒、气到极点', correct: true, reason: 'furious 是愤怒的最高级，后面“然后我意识到”正是情绪转折。' },
          { key: 'B', en: 'slightly disappointed', cn: '有点失望', correct: false, reason: '失望是 disappointed，不足以形容看到退单函的反应。' },
          { key: 'C', en: 'very fast', cn: '非常快', correct: false, reason: 'furious 和速度无关，那是 fast，这里是情绪。' }
        ],
        analysis: 'furious 是“暴怒”，比 angry 重得多。陈默先承认真实的情绪，再说这是个机会——这句话的层次就在这里。',
        wrongFeedback: '你选错了，苏晚以为他要发作，赶紧说“别冲动”，门口赵家的人笑了一声。',
        afterCorrect: '陈默把三封退单函并排放好：“三家一起退，说明他们早就串通好了。”他抬起头，“证据自己送上门了。”'
      },
      {
        plotDescription: '苏晚问他是不是早就料到，低声说自己这几天几乎没睡好，心里堵得慌。',
        line: "I was depressed for two days, then I stopped waiting for good news.",
        lineCn: '我抑郁了两天，然后我就不再等好消息了。',
        prompt: "根据上下文，选出画线词汇 'depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling very low and hopeless', cn: '情绪低落、抑郁', correct: true, reason: 'depressed 是持续的情绪低迷，和“两天”这种时长搭得上。' },
          { key: 'B', en: 'feeling physically sick', cn: '身体不舒服', correct: false, reason: '这里是情绪状态，不是生病，虽然两者会互相影响。' },
          { key: 'C', en: 'feeling sleepy', cn: '困倦', correct: false, reason: '困是 sleepy，depressed 说的是心情往下沉。' }
        ],
        analysis: 'depressed 指“情绪持续低落”，不只是当下的难过。陈默说的是那两天的状态，也是他决定不再被动等的转折。',
        wrongFeedback: '你选错了，苏晚垂下眼，说自己也是，声音轻得几乎听不见，办公室里安静下来。',
        afterCorrect: '陈默递给她一份名单：“这三家退了单，还会有六家想进来。”他敲了敲纸面，“苏氏不是非他们不可。”'
      },
      {
        plotDescription: '下午，新供应商的代表来了，看完苏氏的订单量，眼睛都亮了，说这买卖值得干。',
        line: "I am hyped about this. Your volume is three times what we expected.",
        lineCn: '我对这事极度兴奋。你们的量是我们预期的三倍。',
        prompt: "根据上下文，选出画线词汇 'hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely excited', cn: '极度兴奋、热血上头', correct: true, reason: 'hyped 是“被点燃了”，正对上他看见订单量时的反应。' },
          { key: 'B', en: 'very doubtful', cn: '非常怀疑', correct: false, reason: '他看到三倍订单量，是兴奋，不是怀疑。' },
          { key: 'C', en: 'slightly tired', cn: '有点累', correct: false, reason: 'hype 是往上抬的情绪，跟疲惫相反。' }
        ],
        analysis: 'hyped 是口语里“超级期待、兴奋”的说法，常和 about / for 连用。赵家封了一家，反而把更好的送到了门口。',
        wrongFeedback: '你选错了，那位代表看看苏晚又看看陈默，把合同收了回去，说“那我们再考虑考虑”。',
        afterCorrect: '陈默把合同推过去：“签吧。但我有一个条件——赵家来找你们，你们得把话原样告诉我。”'
      },
      {
        plotDescription: '送走客人，苏晚靠在门边，说这几天像做了一场很糟的梦，问他是不是早就习惯了这种日子。',
        line: "Those three days were miserable. But I have had worse.",
        lineCn: '那三天惨透了。不过我经历过更糟的。',
        prompt: "根据上下文，选出画线词汇 'miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely unhappy and unpleasant', cn: '惨透了、痛苦难熬', correct: true, reason: 'miserable 形容处境或心情“糟到极点”，正对上那三天的状态。' },
          { key: 'B', en: 'calm and peaceful', cn: '平静安宁', correct: false, reason: '正好相反，miserable 是难熬，不是安宁。' },
          { key: 'C', en: 'busy but productive', cn: '忙碌但有成效', correct: false, reason: '如果是有成效，就不会用“惨”来形容这三天了。' }
        ],
        analysis: 'miserable 是“苦不堪言”，既能形容人，也能形容天气、日子。陈默说“更糟的”，是把这三天的分量悄悄压了下去。',
        wrongFeedback: '你选错了，苏晚看着他，想说什么又停住，最后只说了一句“对不起”。',
        afterCorrect: '陈默摇摇头：“不用对不起。”他看向窗外，“三天停线，换掉一个赵家，很划算。”'
      }
    ],
    completeText: '第 14 章结束。一周之内，苏氏换了四家供应商，产能恢复。赵天豪坐在办公室里，第一次把“陈默”两个字写在了纸上，画了个圈。'
  },
  {
    id: 'ml_15',
    index: 15,
    title: '第 15 章 · 一亿的局，我接了',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵家放出消息，要在一个月内收购苏氏三成股份，报价高得离谱。董事会有人动心，有人害怕。苏振海把陈默叫到老宅，说只要他点头，可以给他一笔钱，让他离开苏晚。',
    questions: [
      {
        plotDescription: '苏振海把一张支票推到桌子中间，说这是他这辈子听过最划算的安排，让陈默别贪心。',
        line: "I am ecstatic about this offer? You must think I am a fool.",
        lineCn: '我对这个提议欣喜若狂？你一定觉得我是傻子。',
        prompt: "根据上下文，选出画线词汇 'ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '欣喜若狂、高兴到极点', correct: true, reason: 'ecstatic 是喜悦的最高档，这里用问句是在反讽。' },
          { key: 'B', en: 'very confused', cn: '非常困惑', correct: false, reason: '他不是困惑，是不屑，后面那句“你觉得我是傻子”说明了态度。' },
          { key: 'C', en: 'slightly interested', cn: '有点感兴趣', correct: false, reason: '如果是有点兴趣，就不会反问，语气明显是讽刺。' }
        ],
        analysis: 'ecstatic 是“狂喜”，比 happy 强很多。陈默故意把话说满，再用反问掀翻，这种反讽比直接拒绝更打脸。',
        wrongFeedback: '你选错了，苏振海以为他嫌少，又加了一个数字，还说“年轻人要知足”。',
        afterCorrect: '陈默把支票推回去：“钱你留着。”他身体前倾，“我只要一句话，苏晚知道这笔交易吗？”'
      },
      {
        plotDescription: '苏振海没有回答，只是端起茶，说苏晚是苏家的人，婚事本来就该由家里做主。',
        line: "Three years of this, and I am numb to your family's talk.",
        lineCn: '三年了，我对你们家这套说辞已经麻木了。',
        prompt: "根据上下文，选出画线词汇 'numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to feel anything anymore', cn: '麻木、已经感觉不到', correct: true, reason: 'be numb to 就是“对……已经没感觉”，正对上三年反复听这些话。' },
          { key: 'B', en: 'physically cold', cn: '身体发冷', correct: false, reason: 'numb 确实可指冻僵，但这里说的是对说辞的反应。' },
          { key: 'C', en: 'very surprised', cn: '非常惊讶', correct: false, reason: '听了三年，不可能还惊讶，麻木才是准确的状态。' }
        ],
        analysis: 'numb 本指“失去知觉”，用来形容情绪就是“麻了、无所谓了”。三个字背后，是三年里被磨掉的期待。',
        wrongFeedback: '你选错了，苏振海把茶杯放下，说“你这是什么态度”，客厅里的佣人都退了出去。',
        afterCorrect: '陈默站起来：“我签退婚书的时候，就没打算再听你们安排。”他走到门口，“股份的事，我会接。”'
      },
      {
        plotDescription: '苏明哲在门外听见了，冲进来质问，说陈默凭什么接这么大的局，是不是想吞掉苏家。',
        line: "You are jealous because nobody ever trusted you with a real deal.",
        lineCn: '你嫉妒，是因为从来没人把真正的生意交到你手上。',
        prompt: "根据上下文，选出画线词汇 'jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry because someone has what you want', cn: '嫉妒、因为别人有而心里不平衡', correct: true, reason: 'jealous 就是因为别人得到了你想要的而难受，正对上他的质问。' },
          { key: 'B', en: 'proud of someone', cn: '为某人感到骄傲', correct: false, reason: '他冲进来质问，是气不过，不是骄傲。' },
          { key: 'C', en: 'confused by the numbers', cn: '被数字搞糊涂了', correct: false, reason: '这里说的是情绪，不是看不懂报表。' }
        ],
        analysis: 'jealous 是“眼红、嫉妒”，常跟 of 连用。陈默一句话戳穿：苏明哲真正恨的不是安排，是轮不到他。',
        wrongFeedback: '你选错了，苏明哲脸涨红了，指着陈默的鼻子骂了一句，被苏振海喝住。',
        afterCorrect: '陈默没有回头：“你要是想接，可以。”他顿了顿，“先把那三百二十七封邮件读一遍。”'
      },
      {
        plotDescription: '车子开出老宅，老周问他要不要现在就动手，陈默看着窗外，说自己有点过意不去。',
        line: "I feel guilty about one thing: I let her carry it alone for three years.",
        lineCn: '我只对一件事内疚：让她一个人扛了三年。',
        prompt: "根据上下文，选出画线词汇 'guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling responsible for something wrong', cn: '内疚、觉得自己有责任', correct: true, reason: 'feel guilty about 就是“为某事心里过不去”，正对上他让苏晚独自承受。' },
          { key: 'B', en: 'feeling proud of himself', cn: '为自己感到自豪', correct: false, reason: '如果自豪，就不会用“过意不去”这种说法。' },
          { key: 'C', en: 'feeling bored', cn: '觉得无聊', correct: false, reason: 'guilty 是道德上的不安，跟无聊没有关系。' }
        ],
        analysis: 'feel guilty about 是“为某事内疚”。这是陈默第一次露出软处——他算得清所有账，唯独这笔算不清。',
        wrongFeedback: '你选错了，老周从后视镜看了他一眼，没有接话，车里的空气沉了下来。',
        afterCorrect: '老周把车停稳：“指挥官，那不怪您。”陈默摇头：“怪。”他推开车门，“所以接下来的局，我得替她赢回来。”'
      }
    ],
    completeText: '第 15 章结束。第二天，陈默以个人名义接下赵家的收购盘，一亿的局，他连眉头都没皱。消息传出去，全城都在问：这个上门女婿，哪来的钱？'
  },
  {
    id: 'ml_16',
    index: 16,
    title: '第 16 章 · 仓库里的那盏灯',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏城郊的仓库被赵家的人围了，说是查消防，其实是要清货。陈默赶到时，门口停着三辆车，仓库里只有一盏灯还亮着，几个老工人死死守着货。',
    questions: [
      {
        plotDescription: '带队的男人把检查单拍在铁门上，说今天必须封库，谁拦就是妨碍执法。',
        line: "I am stressed, and my patience is the first thing to go.",
        lineCn: '我现在压力很大，而我的耐心是最先没的东西。',
        prompt: "根据上下文，选出画线词汇 'stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'under a lot of pressure', cn: '压力大、绷得很紧', correct: true, reason: 'stressed 就是“被压力压着”，所以下一句才说耐心快没了。' },
          { key: 'B', en: 'physically strong', cn: '身体强壮', correct: false, reason: '这个词是心理状态，不是体力，别和 strong 搞混。' },
          { key: 'C', en: 'very relaxed', cn: '非常放松', correct: false, reason: '正好相反，放松的人不会说耐心快用完了。' }
        ],
        analysis: 'stressed 是“压力大”，常和 out 连用。陈默把情绪摆在明面上，是在给对方最后一次机会。',
        wrongFeedback: '你选错了，带队的人挥手让人上前，铁门被拍得砰砰响，里面的老工人往后退了一步。',
        afterCorrect: '陈默走过去，把检查单拿起来看了一眼：“消防检查，需要提前三天通知。”他抬头，“你们的手续呢？”'
      },
      {
        plotDescription: '对方拿不出手续，改口说是“例行抽查”，还催着工人赶紧把货搬出来。',
        line: "Three years in this company, and I am close to burnout. Do not push it.",
        lineCn: '在这家公司三年，我快职业倦怠了。别逼我。',
        prompt: "根据上下文，选出画线词汇 'burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'exhaustion from too much work over time', cn: '长期过劳导致的倦怠', correct: true, reason: 'burnout 是“长期高压耗空”，不是一时的累，所以前面有“三年”。' },
          { key: 'B', en: 'a fire that burns out', cn: '火烧完了', correct: false, reason: '这个词已经引申为“人耗尽”，这里说的是自己的状态。' },
          { key: 'C', en: 'a sudden promotion', cn: '突然升职', correct: false, reason: '升职是好事，burnout 是耗损，意思差得远。' }
        ],
        analysis: 'burnout 指长期高压后的身心耗尽，是“被工作烧空了”。这句话从守夜的工人嘴里说出来，比任何控诉都重。',
        wrongFeedback: '你选错了，那位老工人被推了一下，手里的账本掉在地上，纸页散了一地。',
        afterCorrect: '陈默弯腰把账本捡起来，一页页码好，递回去：“今晚谁也别动这批货。”他转身面向门口，“我说的。”'
      },
      {
        plotDescription: '门外忽然又来了两辆车，下来十几个人，场面一下子紧到极点。老工人脸色都白了。',
        line: "Do not panic. Stay behind me and keep your hands where I can see them.",
        lineCn: '别恐慌。站在我身后，把手放在我能看见的地方。',
        prompt: "根据上下文，选出画线词汇 'panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'sudden uncontrolled fear', cn: '恐慌、突然的失控害怕', correct: true, reason: 'panic 是“突然吓乱了”，所以他才要人别乱、站到身后。' },
          { key: 'B', en: 'a loud argument', cn: '大声争吵', correct: false, reason: '这里还没吵起来，是怕起来，重点是恐惧。' },
          { key: 'C', en: 'a plan for escape', cn: '逃跑计划', correct: false, reason: 'panic 是情绪，不是计划，别按中文“慌”去猜。' }
        ],
        analysis: 'panic 是“突然的、控制不住的恐惧”。陈默一句命令式的安抚，把一群普通工人的情绪先按住。',
        wrongFeedback: '你选错了，有人往后退，撞倒了货架，铁皮倒地的声音让场面彻底乱了。',
        afterCorrect: '那十几个人走到灯下，齐刷刷停住，领头的人摘下帽子，低声说：“指挥官，龙渊一组，到齐。”'
      },
      {
        plotDescription: '危机解除，老工人蹲在地上直喘气，说以为今晚这批货保不住了。',
        line: "Everyone is relieved now. It is over, and nobody got hurt.",
        lineCn: '现在大家都松了口气。结束了，没人受伤。',
        prompt: "根据上下文，选出画线词汇 'relieved' 最相关的意思。",
        options: [
          { key: 'A', en: 'feeling calm after worry is gone', cn: '松了口气、放下心来', correct: true, reason: 'relieved 就是“担心的事过去之后，心里那块石头落下来”的感觉。' },
          { key: 'B', en: 'still terrified', cn: '仍然极度恐惧', correct: false, reason: '事情已经结束，人也说“结束了”，恐惧已经落地。' },
          { key: 'C', en: 'angry at the workers', cn: '对工人们发火', correct: false, reason: '他是在安抚，不是追责，语气已经软下来。' }
        ],
        analysis: 'relieved 是“担心解除后的轻松”。陈默没说安慰的话，只说了三个事实：结束了、没人受伤、可以呼吸。',
        wrongFeedback: '你选错了，老工人还想解释，陈默抬手打断，让他先去喝口水，别再硬撑。',
        afterCorrect: '老工人捧着水杯，手还在抖：“小陈，你到底什么来头？”陈默笑了笑：“先看货，别的以后说。”'
      }
    ],
    completeText: '第 16 章结束。那晚仓库的灯亮到天亮，货一箱没少。老周站在门口抽烟，说了一句：“三年了，终于有人替他们撑腰。”'
  },
  {
    id: 'ml_17',
    index: 17,
    title: '第 17 章 · 旧照片上的肩章',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '仓库的事上了本地新闻，照片里陈默站在灯下，背影笔直。苏晚把照片放大，发现他抬手时，袖口滑出一截旧疤痕，形状像一道军徽。',
    questions: [
      {
        plotDescription: '苏晚把打印出来的照片放在他面前，问他手上那道疤是怎么来的，声音有点抖。',
        line: "I was heartbroken when I thought you were just a nobody. Now I am scared.",
        lineCn: '我以为你只是个无名小卒的时候，心都碎了。现在我害怕。',
        prompt: "根据上下文，选出画线词汇 'heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely sad and hurt', cn: '心碎、难过到极点', correct: true, reason: 'heartbroken 是“心被击碎”，正对上她三年里的失望。' },
          { key: 'B', en: 'physically injured in the chest', cn: '胸口受了伤', correct: false, reason: '字面理解不成立，这里说的是感情上的痛。' },
          { key: 'C', en: 'very confused', cn: '非常困惑', correct: false, reason: '她是难过和害怕，不是单纯想不通。' }
        ],
        analysis: 'heartbroken 是“心碎”，多数时候指感情上的重创。苏晚把这三年的失望说出口，语气比指责更重。',
        wrongFeedback: '你选错了，苏晚把照片收回去，指尖在纸边停了很久，最后只说“当我没问”。',
        afterCorrect: '陈默沉默了一会儿，把袖子往上推了推：“这道疤是三年前留下的。”他抬头，“也是我离开那支队伍的原因。”'
      },
      {
        plotDescription: '苏明哲听说仓库的事，反倒冷笑，说陈默不过是请了几个演员，演了一出戏。',
        line: "He looks so smug for a man who has nothing but a rented suit.",
        lineCn: '一个除了一身租来的西装什么都没有的人，居然这么得意。',
        prompt: "根据上下文，选出画线词汇 'smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'too pleased with himself', cn: '得意忘形、自鸣得意', correct: true, reason: 'smug 是“自我感觉太好”，正对上他看不惯的那副样子。' },
          { key: 'B', en: 'very nervous', cn: '非常紧张', correct: false, reason: '能在这种时候冷笑的人，不是紧张，是自以为占了上风。' },
          { key: 'C', en: 'poorly dressed', cn: '穿得很寒酸', correct: false, reason: '衣服寒酸是前半句的内容，smug 说的是神态。' }
        ],
        analysis: 'smug 专指那种“藏不住的得意”，带贬义。苏明哲用这个词骂人，其实照出的是自己的不甘心。',
        wrongFeedback: '你选错了，苏明哲越说越来劲，还拿出手机翻新闻，说要找人“扒一扒这个骗子”。',
        afterCorrect: '陈默把照片转过去：“你说得对，西装是租的。”他指了指照片里的灯，“那盏灯下站的人，可没租。”'
      },
      {
        plotDescription: '苏晚追问那道疤，陈默只说了一句“以前干过几年活”，她明显不信，眉头一直没松。',
        line: "You are annoyed because I keep giving you half answers.",
        lineCn: '你烦透了，是因为我一直只给你一半的答案。',
        prompt: "根据上下文，选出画线词汇 'annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'a little angry and irritated', cn: '烦、被惹得有点恼火', correct: true, reason: 'annoyed 是“被反复磨到不耐烦”，正对上她追问半天得不到答案。' },
          { key: 'B', en: 'deeply moved', cn: '深受感动', correct: false, reason: '她是在追问和不满，不是被打动。' },
          { key: 'C', en: 'completely calm', cn: '完全平静', correct: false, reason: '眉头一直没松，显然不是平静的状态。' }
        ],
        analysis: 'annoyed 是“被烦到了”，程度比 angry 轻，但持续时间更长。陈默看得清楚，也知道自己该给答案了。',
        wrongFeedback: '你选错了，苏晚把笔往桌上一放，说我问的是你的过去，不是苏氏的事。',
        afterCorrect: '陈默看着她，终于开口：“龙渊特战，代号零。”他停了一下，“三年前那场行动，我丢了七个兄弟。”'
      },
      {
        plotDescription: '苏晚半天没说话，忽然问他，是不是一直有人在盯着苏家，所以他才不走。',
        line: "It is not paranoia if someone really has been watching this house.",
        lineCn: '如果真有人在盯着这栋房子，那就不叫被害妄想。',
        prompt: "根据上下文，选出画线词汇 'paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'a false belief that people are after you', cn: '被害妄想、无端的猜疑', correct: true, reason: 'paranoia 是“总觉得有人要害你”，而这里的关键是“如果真有”。' },
          { key: 'B', en: 'a strong sense of duty', cn: '强烈的责任感', correct: false, reason: '词义完全不对，paranoia 是猜疑，不是责任。' },
          { key: 'C', en: 'a medical test', cn: '一项医学检查', correct: false, reason: '这个词和检查无关，它在说一种心理状态。' }
        ],
        analysis: 'paranoia 指没有根据的猜疑。陈默这句是反转：不是你想多了，是真有人盯着。一句话把她的不安正名了。',
        wrongFeedback: '你选错了，苏晚勉强笑了一下，说我大概是最近太累了，把照片收进了抽屉。',
        afterCorrect: '陈默走到窗边，把窗帘拉开一条缝：“对面七楼，第三扇窗。”他回头，“那台相机，今天下午刚换过位置。”'
      }
    ],
    completeText: '第 17 章结束。苏晚站在窗边，第一次觉得自己这三年住的地方这么陌生。她问：“你留下来，是为了我们，还是为了他们？”陈默没有回答。'
  },
  {
    id: 'ml_18',
    index: 18,
    title: '第 18 章 · 她开始怀疑',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏晚开始翻三年前的旧资料。老爷子临终前那份遗嘱里，有一条被所有人忽略的附加条款：苏家必须留陈默三年，一天都不能少。',
    questions: [
      {
        plotDescription: '深夜的书房里，苏晚一遍遍看那段录像，坐不住，站起来又坐下。',
        line: "I have been restless all night. There is something you are not telling me.",
        lineCn: '我一整晚都坐立不安。有件事你没告诉我。',
        prompt: "根据上下文，选出画线词汇 'restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to stay calm or still', cn: '坐立不安、静不下来', correct: true, reason: 'restless 就是“待不住、心里翻腾”，正对上她反复起身。' },
          { key: 'B', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: '正好相反，她一整晚都没能安坐，更别说睡好。' },
          { key: 'C', en: 'very hungry', cn: '很饿', correct: false, reason: 'restless 是身体和情绪上的不安，不是饥饿。' }
        ],
        analysis: 'restless 是“安静不下来”，既可以指睡不着，也可以指心里有事。苏晚这句不是质问，是被悬着的感觉逼出来的。',
        wrongFeedback: '你选错了，苏晚合上录像，走到门口又停下，手指搭在门把上，一直没有拧下去。',
        afterCorrect: '陈默把遗嘱复印件放在桌上：“这一条，是你爷爷写的。”他指着最后一行，“留我三年，是在保苏家。”'
      },
      {
        plotDescription: '苏晚读完那一行字，忽然笑了一声，说原来这三年她一直恨错了人。',
        line: "I have been bitter about this marriage for three years. It was never your choice.",
        lineCn: '我为这桩婚事怨恨了三年。可这从来都不是你的选择。',
        prompt: "根据上下文，选出画线词汇 'bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'full of resentment over time', cn: '怨恨、心里憋着苦', correct: true, reason: 'bitter about 是“对某事长期耿耿于怀”，正对上三年这两个字。' },
          { key: 'B', en: 'having a sharp taste', cn: '味道发苦', correct: false, reason: '字面义是苦味，但这里说的是情绪，不是咖啡。' },
          { key: 'C', en: 'very grateful', cn: '非常感激', correct: false, reason: '如果是感激，就不会说“恨错了人”。' }
        ],
        analysis: 'bitter 从“苦味”引申为“长期的怨”。苏晚这句是在认错，也是三年来第一次把矛头从陈默身上挪开。',
        wrongFeedback: '你选错了，苏晚把纸折起来，声音发紧，说她需要一个人待一会儿。',
        afterCorrect: '陈默没有拦她：“你恨我没关系。”他把纸往她那边推了推，“但别恨你爷爷，他到死都在替你铺路。”'
      },
      {
        plotDescription: '第二天，苏晚在董事会上第一次替他说话，站出来时，手心里全是汗。',
        line: "For the first time, I feel vulnerable standing in this room. And I am still standing.",
        lineCn: '第一次，我站在这个房间里觉得脆弱。可我还是站着。',
        prompt: "根据上下文，选出画线词汇 'vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'easily hurt and unprotected', cn: '脆弱、容易受伤、没有保护', correct: true, reason: 'vulnerable 是“没有遮挡、容易被击中”，正对上她手心的汗。' },
          { key: 'B', en: 'extremely powerful', cn: '极其强大', correct: false, reason: '这句的重点是“脆弱却仍然站着”，不是强大。' },
          { key: 'C', en: 'very popular', cn: '很受欢迎', correct: false, reason: 'vulnerable 跟受欢迎无关，她是在说自己没有依靠。' }
        ],
        analysis: 'vulnerable 是“暴露在伤害之下”。承认脆弱之后还说“我还是站着”，这句话的力量反而更大。',
        wrongFeedback: '你选错了，她的声音抖了一下，几位董事交换眼神，有人低头去翻文件。',
        afterCorrect: '陈默坐在最后一排，没有说话，只是把手里那支笔放下。苏晚看见了他的动作，忽然把背挺得更直。'
      },
      {
        plotDescription: '会后，苏明哲追出来，说苏晚疯了，居然替一个外人说话，苏家迟早完在他手里。',
        line: "It feels hopeless to you because you have never built anything yourself.",
        lineCn: '你觉得绝望，是因为你自己从来没建成过任何东西。',
        prompt: "根据上下文，选出画线词汇 'hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling that nothing can change', cn: '绝望、看不到出路', correct: true, reason: 'hopeless 是“觉得怎么都没用”，正对上苏明哲的唱衰。' },
          { key: 'B', en: 'very hopeful', cn: '充满希望', correct: false, reason: '这是反义，hopeless 是希望全无。' },
          { key: 'C', en: 'careless about details', cn: '不注重细节', correct: false, reason: '这是 careless，和 hopeless 拼写像但意思不同。' }
        ],
        analysis: 'hopeless 是“看不到希望”。陈默把苏明哲的恐惧原样点出来：你不是担心苏家，你是怕自己一无所有。',
        wrongFeedback: '你选错了，苏明哲气得指着他的鼻子，半天没说出一句完整的话，走廊里有人探头看。',
        afterCorrect: '陈默替他把话说完：“苏家不会完。”他转身往电梯走，“会完的是那些只会等着分东西的人。”'
      }
    ],
    completeText: '第 18 章结束。那天之后，苏晚把遗嘱的复印件锁进了自己抽屉。她开始重新看这三年——那些沉默、那些低头，原来都不是软弱。'
  },
  {
    id: 'ml_19',
    index: 19,
    title: '第 19 章 · 第一桶金，带血',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '陈默的第一桶金来自一场拍卖。城西那块地的持有人急着出手，价格低得反常。老周查了三天，回话说这地底下埋过东西，前任主人一家没走出来。',
    questions: [
      {
        plotDescription: '老周把调查结果放在桌上，说自己这三年能站在这里，全靠陈默当年拉了一把。',
        line: "I am grateful you pulled me out of that place. I never forgot it.",
        lineCn: '我很感激你把我从那个地方拉出来。我从来没忘。',
        prompt: "根据上下文，选出画线词汇 'grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling thankful', cn: '感激、心里记着别人的好', correct: true, reason: 'be grateful 就是“心怀感激”，后面接的正是被救的事。' },
          { key: 'B', en: 'feeling sorry for someone', cn: '为某人感到难过', correct: false, reason: '那是同情，不是感激；他是在谢人，不是在可怜人。' },
          { key: 'C', en: 'feeling bored with the job', cn: '对工作感到厌倦', correct: false, reason: 'grateful 是正向的情绪，跟厌倦无关。' }
        ],
        analysis: 'grateful 是“感激”，比 thanks 更沉一点。老周说这话时没抬头，三年的分量都在这一句里。',
        wrongFeedback: '你选错了，老周把文件推过去就没再说话，办公室里只剩空调的声音。',
        afterCorrect: '陈默把文件翻到最后一页：“那块地，我要。”他抬眼，“但不是为了钱。”'
      },
      {
        plotDescription: '拍卖会的包厢里，赵天豪也在，隔着玻璃朝他们举杯，一副志在必得的样子。',
        line: "I am content to let him bid. The more he spends, the deeper he sinks.",
        lineCn: '我很乐意让他叫价。他花得越多，陷得越深。',
        prompt: "根据上下文，选出画线词汇 'content' 最准确的意思。",
        options: [
          { key: 'A', en: 'satisfied and willing to accept it', cn: '满足、心甘情愿', correct: true, reason: 'be content to do 就是“愿意这样、觉得可以接受”，正对上他不急着抢。' },
          { key: 'B', en: 'the main idea of a book', cn: '书的内容', correct: false, reason: 'content 作名词才是“内容”，这里用的是形容词“满足”。' },
          { key: 'C', en: 'very angry about it', cn: '对此非常生气', correct: false, reason: '他举着杯、语气轻松，显然是乐见其成。' }
        ],
        analysis: 'be content to 是“甘愿、乐得如此”。陈默不抢，是因为他知道那块地的价格里藏着别人的血。',
        wrongFeedback: '你选错了，老周忍不住问“真让他拿走？”，陈默只是把茶杯放下，没有解释。',
        afterCorrect: '价格一路抬到九千万，赵天豪落了槌。陈默站起来鼓掌：“恭喜。”他笑着说，“那块地，我本来就没打算要。”'
      },
      {
        plotDescription: '散场后，苏晚问他为什么放弃，说这明明是苏氏翻身的机会，语气里带着不甘。',
        line: "I feel fulfilled for the first time in three years. I finally did one thing right.",
        lineCn: '三年来我第一次觉得踏实。我终于做对了一件事。',
        prompt: "根据上下文，选出画线词汇 'fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'satisfied because something meaningful is done', cn: '充实、因为做成了有意义的事而满足', correct: true, reason: 'fulfilled 是“被填满了”，指价值感上的满足，不只是高兴。' },
          { key: 'B', en: 'completely exhausted', cn: '彻底累垮了', correct: false, reason: '那是 exhausted，fulfilled 是正向的满足。' },
          { key: 'C', en: 'confused by the result', cn: '对结果感到困惑', correct: false, reason: '他说“做对了一件事”，显然心里很清楚。' }
        ],
        analysis: 'fulfilled 是“价值被满足”，比 happy 深一层。放弃九千万，换来的是三年里第一次觉得自己没白待。',
        wrongFeedback: '你选错了，苏晚皱起眉，说这不是做生意的方式，转身先上了车。',
        afterCorrect: '陈默看着拍卖行的大门：“那块地下面的东西，明天会由警方挖出来。”他轻声说，“赵天豪买的不是地，是案底。”'
      },
      {
        plotDescription: '当晚新闻爆出城西地块发现遗骸，赵氏股价跳水，赵天豪在电话里失控地吼。',
        line: "He is hysterical on the phone. Turn on the news and you will see why.",
        lineCn: '他在电话里歇斯底里。打开新闻，你就知道为什么了。',
        prompt: "根据上下文，选出画线词汇 'hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'wildly out of control emotionally', cn: '歇斯底里、情绪完全失控', correct: true, reason: 'hysterical 是“情绪崩到失控”，所以才会在电话里吼。' },
          { key: 'B', en: 'very calm and quiet', cn: '非常平静安静', correct: false, reason: '正好相反，这个词形容的是失控的激烈状态。' },
          { key: 'C', en: 'extremely funny', cn: '非常好笑', correct: false, reason: '这里是愤怒和崩溃，不是搞笑。' }
        ],
        analysis: 'hysterical 是“情绪失控到极点”，可以指哭、笑、怒。用在赵天豪身上，是他第一次真正慌。',
        wrongFeedback: '你选错了，老周把电视音量调小，屏幕上的红色字幕还在滚。',
        afterCorrect: '陈默靠在沙发上：“第一桶金，到账了。”他闭上眼，“只是这钱上面，有三条人命。”'
      }
    ],
    completeText: '第 19 章结束。苏氏没有参与那块地，却因为提前抽身，被媒体写成“唯一清醒的公司”。苏晚第一次在采访里说：这是我们团队的判断。'
  },
  {
    id: 'ml_20',
    index: 20,
    title: '第 20 章 · 别谢我，记账',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '城西的事让苏氏缓过来了。苏振海破天荒地在家宴上给陈默留了座位，还让人添了一副碗筷。苏晚看着他，等他坐下。',
    questions: [
      {
        plotDescription: '苏振海举杯，说这杯酒算是谢他，语气别别扭扭，眼睛却不看他。',
        line: "Do not thank me. Just remember who stood here when it mattered.",
        lineCn: '别谢我。只要记住，关键时刻是谁站在这里。',
        prompt: "根据上下文，选出画线词汇 'mattered' 最准确的意思。",
        options: [
          { key: 'A', en: 'was important at that moment', cn: '重要、关键', correct: true, reason: 'when it mattered 就是“在要紧的时候”，matter 作动词表示重要。' },
          { key: 'B', en: 'became a physical object', cn: '变成了实物', correct: false, reason: '那是 matter 作名词“物质”，这里是动词“要紧”。' },
          { key: 'C', en: 'turned into a problem', cn: '变成了麻烦', correct: false, reason: '语义不对，这句强调的是关键时刻的分量。' }
        ],
        analysis: 'matter 作动词是“要紧、有关系”。陈默不要一句谢谢，他要的是这份记忆——以后再算账，谁都别装不记得。',
        wrongFeedback: '你选错了，苏振海把杯子放下，说“年轻人别得寸进尺”，气氛又冷了下来。',
        afterCorrect: '陈默端起杯子，只沾了一下唇：“这杯我喝。”他放下杯，“下一杯，等你们把欠的账还清。”'
      },
      {
        plotDescription: '苏明哲坐在角落，阴阳怪气地说有些人翻身了，就忘了自己是从哪张桌子上被赶下去的。',
        line: "I was furious for three years. Now I am just taking notes.",
        lineCn: '我狂怒了三年。现在我只记账。',
        prompt: "根据上下文，选出画线词汇 'furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'violently angry', cn: '暴怒、气得发抖', correct: true, reason: 'furious 是愤怒的顶点，和后面“现在只记账”形成对比。' },
          { key: 'B', en: 'slightly amused', cn: '觉得有点好笑', correct: false, reason: '这句话在讲三年的怒，不是觉得有趣。' },
          { key: 'C', en: 'totally indifferent', cn: '完全无所谓', correct: false, reason: '如果无所谓，就不会有“狂怒”和“记账”的对照。' }
        ],
        analysis: 'furious 比 angry 更烈，接近“暴怒”。陈默把三年的情绪摊开，再收成一本账——这比当场发作更让人发凉。',
        wrongFeedback: '你选错了，苏明哲还想接话，被苏振海一个眼神压住，只能低头夹菜。',
        afterCorrect: '陈默夹了一筷子菜，慢慢吃完：“记账的人不吵。”他放下筷子，“到日子，一次结清。”'
      },
      {
        plotDescription: '饭后，苏晚在院子里追上他，说今天这顿饭，算是苏家第一次正式承认他。',
        line: "I am not hyped about a seat at this table. I sat here for three years without one.",
        lineCn: '我不稀罕这张桌子上的一把椅子。这三年我没椅子也坐在这儿。',
        prompt: "根据上下文，选出画线词汇 'hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited about something', cn: '为某事特别兴奋、上头', correct: true, reason: 'be hyped about 就是“特别期待、兴奋”，这里用否定是在泼冷水。' },
          { key: 'B', en: 'very disappointed', cn: '非常失望', correct: false, reason: '他是不在乎，不是失望；失望是在意之后的情绪。' },
          { key: 'C', en: 'confused about the seating', cn: '对座位安排感到困惑', correct: false, reason: '这里是比喻“被承认的地位”，不是真的座位问题。' }
        ],
        analysis: 'hyped 是“兴奋到上头”，常带一点夸张。陈默用否定句把这顿饭的意义直接抹掉：承认来得太晚，就不值钱了。',
        wrongFeedback: '你选错了，苏晚站在原地，夜风把她的头发吹乱，她说“你就不能好好说一句话吗”。',
        afterCorrect: '陈默回头看她：“能。”他停了一下，“这三年，谢谢你没把我赶出去。”说完他先走了，留下她一个人愣在门口。'
      },
      {
        plotDescription: '深夜，老周在车里汇报：赵家开始查三年前的旧案，已经有人摸到龙渊的线索。',
        line: "Here is what worries me: their apathy about being watched. They are not afraid.",
        lineCn: '让我担心的是这个：他们对被盯着毫不在意。他们不怕。',
        prompt: "根据上下文，选出画线词汇 'apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lack of interest or concern', cn: '冷漠、毫不在意', correct: true, reason: 'apathy 是“完全不关心”，正对上“他们不怕”这种反应。' },
          { key: 'B', en: 'a strong sense of fear', cn: '强烈的恐惧', correct: false, reason: '这里说他们不怕，是缺少恐惧，不是充满恐惧。' },
          { key: 'C', en: 'an urgent request', cn: '紧急请求', correct: false, reason: 'apathy 是态度冷淡，跟请求无关。' }
        ],
        analysis: 'apathy 是“冷漠、无动于衷”，是最危险的一种反应：对手连被监视都不在乎，说明他手里还有牌。',
        wrongFeedback: '你选错了，老周等着他下指令，车里安静了很久，只有雨刷的声音。',
        afterCorrect: '陈默敲了敲车窗：“那就让他们查。”他声音很轻，“查得越深，越会自己走到我面前来。”'
      }
    ],
    completeText: '第 20 章结束。第一幕收尾。苏家的饭桌上终于有了陈默的位置，可他知道，真正的对手还没露面。老周发来最后一条消息：赵家背后的人，姓霍。'
  },
  {
    id: 'ml_21',
    index: 21,
    title: '第 21 章 · 有人在盯着苏家',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '城南的咖啡馆里，苏晚的大学同学周宁回国，约她叙旧。陈默陪着去，坐在角落。周宁一进门就笑着拥抱苏晚，眼神却在陈默身上停了两秒。',
    questions: [
      {
        plotDescription: '周宁坐下就说，自己当年在学校就喜欢苏晚，只是没敢说，现在回来还来得及。',
        line: "I had a huge crush on you back then. Everyone knew it but you.",
        lineCn: '我那时候特别喜欢你。除了你，所有人都看出来了。',
        prompt: "根据上下文，选出画线词汇 'crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strong but quiet romantic liking', cn: '暗恋、悄悄喜欢', correct: true, reason: 'have a crush on 就是“暗恋某人”，正对上他当年没敢说。' },
          { key: 'B', en: 'a serious injury', cn: '严重的伤', correct: false, reason: 'crush 作名词确实有“压伤”，但这里接的是人，指暗恋。' },
          { key: 'C', en: 'a business partner', cn: '生意伙伴', correct: false, reason: '这里的 crush 明显是在讲感情，不是生意上的伙伴。' }
        ],
        analysis: 'have a crush on 是“暗恋某人”，重点在“没说出口”。周宁把这句话摆在陈默面前，是想试探这段婚姻到底有多牢。',
        wrongFeedback: '你选错了，苏晚端着杯子的手停了一下，周宁笑得更自然，把话题往从前带。',
        afterCorrect: '苏晚放下杯子：“我结婚了。”她说得很平静。周宁看了一眼陈默，笑容终于淡了半分：“我知道，所以我只是来道个喜。”'
      },
      {
        plotDescription: '周宁半开玩笑地说，毕业后给苏晚发过很多消息，一条都没回，像是被彻底删掉了。',
        line: "You ghosted me after graduation. Three years, not one reply.",
        lineCn: '毕业后你就对我玩消失。三年，一条回复都没有。',
        prompt: "根据上下文，选出画线词汇 'ghosted' 最准确的意思。",
        options: [
          { key: 'A', en: 'a dead spirit', cn: '鬼魂', correct: false, reason: 'ghost 作名词才是“鬼”，这里加了 ed 是动词“消失”。' },
          { key: 'B', en: 'disappeared without replying', cn: '玩消失、突然不回消息', correct: true, reason: 'ghost 作动词就是“人间蒸发”，正对上三年没回一条。' },
          { key: 'C', en: 'sent a gift', cn: '送了礼物', correct: false, reason: '送礼物是 send a gift，与“不回消息”正好相反。' }
        ],
        analysis: 'ghost 从“鬼魂”引申成“像鬼一样消失”，专指不回消息、突然断联。周宁说得轻，其实是在提醒她：你欠我一个解释。',
        wrongFeedback: '你选错了，苏晚只是笑了笑，说那时候忙。周宁的眼神却越过她，落在陈默脸上，带着点挑衅。',
        afterCorrect: '陈默替她答了：“她那三年在救一家公司。”他放下杯子，“没空回消息的人，通常都在替别人扛事。”'
      },
      {
        plotDescription: '周宁话锋一转，提起赵家最近的动作，说得太熟，连内部报价都报得出来。',
        line: "The way you keep bringing up the Zhao family is a red flag.",
        lineCn: '你一直提赵家，这就是个危险信号。',
        prompt: "根据上下文，选出画线词汇 'red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of red cloth', cn: '一块红布', correct: false, reason: '这是字面拼凑，红布在这里没有任何意义。' },
          { key: 'B', en: 'a warning sign on the road', cn: '路边的红色警示牌', correct: false, reason: '虽然都带警示意味，但这里说的是人的可疑表现。' },
          { key: 'C', en: 'a warning sign of danger', cn: '危险信号、值得警惕的迹象', correct: true, reason: 'red flag 在口语里就是“警讯”，指某人的言行很可疑。' }
        ],
        analysis: 'red flag 是“危险信号”，用来提醒关系或合作里有问题。周宁一句“内部报价”说漏了嘴，等于自己举了旗。',
        wrongFeedback: '你选错了，周宁笑着岔开话题，说自己只是听朋友讲。苏晚的眉头却慢慢皱了起来。',
        afterCorrect: '陈默把手机翻过来，屏幕上是一段录音波形：“你刚才说的报价，赵氏内部只有七个人知道。”他抬眼，“你是第几个？”'
      },
      {
        plotDescription: '周宁脸色变了，站起来说还有事，临走前丢下一句，让他们别把好心当恶意。',
        line: "People say you hooked up with Zhao's people behind Su's back. Is that true?",
        lineCn: '外面都说你背着苏家跟赵家的人勾搭上了。是真的吗？',
        prompt: "根据上下文，选出画线词汇 'hooked up' 最准确的意思。",
        options: [
          { key: 'A', en: 'secretly connected or teamed up with', cn: '暗中搭上线、勾搭在一起', correct: true, reason: 'hook up 在这里指“私下接上关系”，正对上“背着苏家”。' },
          { key: 'B', en: 'hung something on a wall', cn: '把东西挂在墙上', correct: false, reason: '那是 hook 的字面动作，跟人搭关系完全不是一回事。' },
          { key: 'C', en: 'met by pure accident', cn: '纯属偶然碰面', correct: false, reason: '这里说的是暗中合作，不是偶遇，语境里有“背着”。' }
        ],
        analysis: 'hook up 可以指“搭上线”，也可以指暧昧关系，具体看语境。这里加 behind somebody\'s back，就是“私下勾连”。',
        wrongFeedback: '你选错了，苏晚的手在桌下攥紧，周宁把这句话说完，拎起外套就走，门铃响得很刺耳。',
        afterCorrect: '陈默没有追，只把录音保存好：“他不是来叙旧的。”他看向苏晚，“他是来确认，赵家该从哪儿下手。”'
      }
    ],
    completeText: '第 21 章结束。回去的路上苏晚一直没说话，快到公司时才开口：“周宁以前不是这样的人。”陈默看着前方：“人会变，尤其是欠了钱的人。”'
  },
  {
    id: 'ml_22',
    index: 22,
    title: '第 22 章 · 越界的关心',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周宁的录音在公司传开，苏家内部先乱了。苏明哲在家族群里发了一千字长文，把自己写成受害者。第二天一早，他又带着一个助理堵在陈默办公室门口。',
    questions: [
      {
        plotDescription: '苏明哲的长文写得声泪俱下，说有人要害他，家族群里一片安慰，苏晚的眉头越皱越紧。',
        line: "There is too much drama in this family. Bring me facts, not tears.",
        lineCn: '这个家的戏太多了。给我事实，别给我眼泪。',
        prompt: "根据上下文，选出画线词汇 'drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'a stage play', cn: '戏剧、舞台剧', correct: false, reason: '这里没有人演戏，说的是家族群里夸张的闹剧。' },
          { key: 'B', en: 'exaggerated emotional scenes', cn: '抓马、夸张的情绪戏', correct: true, reason: 'drama 在口语里就是“戏多、闹剧”，正对上那篇长文。' },
          { key: 'C', en: 'a serious accident', cn: '严重的事故', correct: false, reason: 'drama 跟事故无关，这里说的是一群人演苦情戏。' }
        ],
        analysis: 'drama 在口语里指“戏精式的闹剧”，重点不是悲伤，而是表演。苏晚一句话把群里的哭声定义成了噪音。',
        wrongFeedback: '你选错了，苏明哲在群里又补了一段，说“有人想把我们赶尽杀绝”，下面一排点赞。',
        afterCorrect: '苏晚在群里回了一条：“从今天起，家族群只发工作。”她把手机扣在桌上，“谁再演，就别怪我清人。”'
      },
      {
        plotDescription: '中午，苏明哲派来的助理一直跟着陈默，从电梯跟到车库，连他去买水都站在三米外。',
        line: "Your assistant is too clingy. Tell him to stop following me.",
        lineCn: '你的助理太黏人了。让他别再跟着我。',
        prompt: "根据上下文，选出画线词汇 'clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'holding on too tightly to someone', cn: '黏人、离了就缠着不放', correct: true, reason: 'clingy 形容人“贴得太紧”，正对上跟到车库的行为。' },
          { key: 'B', en: 'very clean and tidy', cn: '干净整洁', correct: false, reason: '拼写像 clean，但 clingy 说的是缠人，不是干净。' },
          { key: 'C', en: 'easy to talk to', cn: '很好说话', correct: false, reason: '这里是在抱怨被人盯梢，不是在夸性格好。' }
        ],
        analysis: 'clingy 是“过分粘人”，本来是形容恋人的词。陈默把它用在盯梢的助理身上，带一点冷幽默。',
        wrongFeedback: '你选错了，那助理笑了一下，说“苏总让我照顾您”，脚却一步没退。',
        afterCorrect: '陈默停下脚步：“照顾我？”他把车钥匙在手里转了半圈，“那你替我开车门，我正好缺个司机。”'
      },
      {
        plotDescription: '苏明哲听说后赶来，说都是一家人，别分那么清，还说自己的人只是“关心”。',
        line: "I need clear boundaries. Your family does not walk into my office.",
        lineCn: '我需要清楚的边界。你们家的人不能随便进我办公室。',
        prompt: "根据上下文，选出画线词汇 'boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'personal limits that must be respected', cn: '边界感、不能越的界限', correct: true, reason: 'boundaries 指人与人之间的界线，正对上“不能随便进”。' },
          { key: 'B', en: 'walls of a building', cn: '建筑的围墙', correct: false, reason: '这里是比喻人际界线，不是真的砖墙。' },
          { key: 'C', en: 'rules for parking', cn: '停车规定', correct: false, reason: '语境是办公室被闯，不是停车位的问题。' }
        ],
        analysis: 'set boundaries 是“划清界限”，是这几年很常见的心理说法。陈默把它用在生意上：关心可以，越界不行。',
        wrongFeedback: '你选错了，苏明哲立刻说“你这是什么意思”，声音拔高，走廊里的人都看了过来。',
        afterCorrect: '陈默把门推开：“意思很简单。”他指了指门牌，“敲门前先问，进门后别翻。”'
      },
      {
        plotDescription: '下午的供应商会议，苏明哲答应了要来，结果人没出现，电话也不接。',
        line: "He bailed on the meeting again. Do not cover for him this time.",
        lineCn: '他又放会议鸽子了。这次别再替他圆场。',
        prompt: "根据上下文，选出画线词汇 'bailed' 最准确的意思。",
        options: [
          { key: 'A', en: 'jumped out of a plane', cn: '从飞机上跳下来', correct: false, reason: '那是 bail out 的字面义，这里说的是临时不来。' },
          { key: 'B', en: 'failed to show up as promised', cn: '放鸽子、临时不来了', correct: true, reason: 'bail on somebody 就是“答应好的事临时跑掉”。' },
          { key: 'C', en: 'paid the bill', cn: '把账结了', correct: false, reason: '结账是 pay，跟“人没来”正好相反。' }
        ],
        analysis: 'bail on 是“爽约、撂挑子”。陈默特意补一句“别再替他圆场”，是把责任按回该在的人身上。',
        wrongFeedback: '你选错了，苏晚替他说了句“可能堵车”，供应商代表对视一眼，合同又收了回去。',
        afterCorrect: '陈默把会议记录推过去：“他缺席，记录照写。”他签字，“从今天起，苏氏开会只认到场的人。”'
      }
    ],
    completeText: '第 22 章结束。那天之后，家族群里安静了。苏明哲在办公室摔了一个杯子，碎片划破手，没人过去看。'
  },
  {
    id: 'ml_23',
    index: 23,
    title: '第 23 章 · 兄弟们的老规矩',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '老周把雷豹带来了。雷豹个子高，进门时低了一下头，站定后喊了一声“指挥官”，声音哑得像砂纸。他说自己找了三年的队伍，只剩下七个人还活着。',
    questions: [
      {
        plotDescription: '雷豹说起三年前撤退那一夜，有人本来能走，却回头去背伤员，最后没出来。',
        line: "Bro code says we do not leave a brother behind. That is the whole rule.",
        lineCn: '兄弟法则就一句话：不把兄弟丢在后面。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'a law about brothers in court', cn: '关于兄弟的法律条文', correct: false, reason: '这不是法律，是男人之间默认的规矩。' },
          { key: 'B', en: 'a password for a club', cn: '俱乐部的暗号', correct: false, reason: '这里说的是做人底线，不是什么暗号。' },
          { key: 'C', en: 'an unwritten rule among close male friends', cn: '兄弟之间不成文的规矩', correct: true, reason: 'bro code 就是哥们儿之间的默契和底线，正对上那句“不丢下兄弟”。' }
        ],
        analysis: 'bro code 是流行说法，指男性朋友之间那些不用明说的规矩。雷豹把它当军令念出来，比任何誓言都重。',
        wrongFeedback: '你选错了，雷豹把杯子攥得吱响，说“那天我没回头”，声音低得几乎听不见。',
        afterCorrect: '陈默把手放在他肩上：“那天是我下的令。”他停了一下，“要背，也是我背。”'
      },
      {
        plotDescription: '院子外，苏振海的弟弟一家拖着行李上门，说老宅要修，先在苏晚这里住一个月。',
        line: "My in-laws just moved half their family into this house.",
        lineCn: '我的岳家刚把他们家一半人搬进了这栋房子。',
        prompt: "根据上下文，选出画线词汇 'in-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'the family of your husband or wife', cn: '公婆、岳父母一家', correct: true, reason: 'in-laws 指配偶的父母和亲属，正对上“岳家搬进来”。' },
          { key: 'B', en: 'people who break the law', cn: '违法的人', correct: false, reason: '别被 law 骗了，in-laws 是姻亲，不是罪犯。' },
          { key: 'C', en: 'neighbors next door', cn: '隔壁邻居', correct: false, reason: '这里说的是苏晚这边的亲戚，不是邻居。' }
        ],
        analysis: 'in-laws 是“姻亲”，常见搭配是 father-in-law、mother-in-law。陈默用这个词，等于把自己放在“女婿”的位置上，也点明了麻烦的来源。',
        wrongFeedback: '你选错了，苏明哲在门口笑，说“一家人住一起热闹”，行李箱已经推进了客厅。',
        afterCorrect: '陈默把行李箱拦在玄关：“住可以。”他抬手指了指楼上，“三层不许上，书房不许进。”'
      },
      {
        plotDescription: '苏明哲凑过来打圆场，说他已经给苏晚安排好了，周末和赵天豪见一面，算赔个礼。',
        line: "You set up a blind date with Zhao Tianhao and called it an apology?",
        lineCn: '你安排了一场和赵天豪的相亲，还管这叫赔礼？',
        prompt: "根据上下文，选出画线词汇 'blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a meeting with no witnesses', cn: '没有证人的会面', correct: false, reason: 'blind 不是“看不见”，这里指彼此不熟识的相亲。' },
          { key: 'B', en: 'a romantic meeting set up by others', cn: '相亲、被安排的见面', correct: true, reason: 'blind date 就是别人牵线、两人第一次见面的约会。' },
          { key: 'C', en: 'a dinner for business partners', cn: '商务伙伴的饭局', correct: false, reason: '这里明明是和赵天豪单独见面，性质是相亲。' }
        ],
        analysis: 'blind date 指由别人安排、双方不熟的约会。苏明哲把联姻包装成道歉，陈默一句话把遮羞布扯下来。',
        wrongFeedback: '你选错了，苏明哲笑着说“年轻人认识一下嘛”，苏晚站在楼梯上，脸色很难看。',
        afterCorrect: '陈默把请柬扔回桌上：“要道歉，让他来公司。”他抬头，“我太太的周末，不归你们安排。”'
      },
      {
        plotDescription: '夜里，苏晚问他为什么总能提前看穿苏明哲的算盘，语气里有点服气，也有点不安。',
        line: "You have a blind spot when it comes to your uncle. He knows it.",
        lineCn: '你对你的叔叔有盲区。而他自己很清楚这一点。',
        prompt: "根据上下文，选出画线词汇 'blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'a dark spot in the room', cn: '房间里一块暗的地方', correct: false, reason: '这是字面理解，这里说的是看人的盲区。' },
          { key: 'B', en: 'a physical injury in the eye', cn: '眼睛上的伤', correct: false, reason: 'blind spot 在医学上指视野盲点，这里是比喻。' },
          { key: 'C', en: 'something you fail to notice', cn: '盲区、自己看不见的地方', correct: true, reason: 'blind spot 就是“你以为自己看得很清，其实漏掉的地方”。' }
        ],
        analysis: 'blind spot 本指视野里的盲点，引申为“认知上看不见的角落”。陈默点出她对叔叔的心软，也点出了这份心软一直被利用。',
        wrongFeedback: '你选错了，苏晚抿了抿嘴，说他毕竟是我叔叔，声音低下去，像在替谁辩解。',
        afterCorrect: '陈默没有反驳：“所以我替你看。”他把灯关掉，“等你哪天自己能看见，我就不用站在这儿了。”'
      }
    ],
    completeText: '第 23 章结束。那晚院子里停了三辆车，雷豹在车里守到天亮。苏晚起夜时看见楼下的身影，第一次觉得这栋房子其实是有人守着的。'
  },
  {
    id: 'ml_24',
    index: 24,
    title: '第 24 章 · 那场没办成的订婚宴',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏振海真把订婚宴办了，请了半个城的人。苏晚被关在化妆间里，手机被收走。林薇坐在她对面补口红，说这都是为她好。宴会厅的水晶灯下，赵天豪已经举起了第一杯酒。',
    questions: [
      {
        plotDescription: '化妆间里，林薇一边替苏晚整理头纱，一边轻声说陈默配不上她，早点认清现实。',
        line: "Lin Wei is not helping you. She is a toxic friend who enjoys watching you fall.",
        lineCn: '林薇不是在帮你。她是个有毒的朋友，就爱看你摔下去。',
        prompt: "根据上下文，选出画线词汇 'toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who quietly harms you', cn: '有毒的朋友、暗地里消耗你的人', correct: true, reason: 'toxic friend 指表面亲近、实际在拖你下水的人，正对上她的话。' },
          { key: 'B', en: 'a friend who is seriously ill', cn: '病得很重的朋友', correct: false, reason: 'toxic 在这里不是生病，是形容这段关系有害。' },
          { key: 'C', en: 'a friend who pays for everything', cn: '什么都替你买单的朋友', correct: false, reason: '这里说的是精神上的消耗，不是花钱的事。' }
        ],
        analysis: 'toxic friend 是这几年很常见的说法，指那种让你越来越糟的“朋友”。陈默一句话点破：她不是来帮忙的，是来看戏的。',
        wrongFeedback: '你选错了，林薇替苏晚把门推开一半，笑着说“去吧，别让大家等”，苏晚的手在抖。',
        afterCorrect: '陈默走进化妆间，把苏晚的手机放回她手里：“你的朋友在门外收了赵家的红包。”他看向林薇，“要我现在说数字吗？”'
      },
      {
        plotDescription: '赵天豪端着酒走过来，说今晚是他和苏晚的第一次正式约会，还伸手要牵她。',
        line: "This is not a date. This is a business arrangement her family forced on her.",
        lineCn: '这不是约会。这是她家里强加给她的商业安排。',
        prompt: "根据上下文，选出画线词汇 'date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a day on the calendar', cn: '日历上的日期', correct: false, reason: '这里是两个人见面的事，不是几月几号。' },
          { key: 'B', en: 'a romantic meeting between two people', cn: '约会、两人的见面', correct: true, reason: 'date 指有感情意味的见面，所以他要牵手、要敬酒。' },
          { key: 'C', en: 'a signed business contract', cn: '签好的商业合同', correct: false, reason: '合同是 contract，date 在这是“约会”。' }
        ],
        analysis: 'date 作名词是“约会”，可这场饭局从头到尾没人问过苏晚愿不愿意。陈默把“约会”两个字拆开，露出底下的交易。',
        wrongFeedback: '你选错了，赵天豪顺势揽住苏晚的肩，说“感情可以慢慢培养”，闪光灯亮了一片。',
        afterCorrect: '陈默把他的手拿开：“培养感情要两个人都愿意。”他把苏晚拉到身后，“她今晚一步都不会跟你走。”'
      },
      {
        plotDescription: '苏晚忽然从包里掏出一封旧信，纸边发黄，说这是三年前写的，一直没敢给他。',
        line: "I wrote you a letter to break up three years ago. I never sent it.",
        lineCn: '三年前我写过一封跟你分手的信。我一直没寄出去。',
        prompt: "根据上下文，选出画线词汇 'break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to start dating someone', cn: '开始交往', correct: false, reason: '方向正好相反，break up 是结束关系。' },
          { key: 'B', en: 'to get married', cn: '结婚', correct: false, reason: '结婚是 get married，这里是“分开”。' },
          { key: 'C', en: 'to end a romantic relationship', cn: '分手、结束关系', correct: true, reason: 'break up 就是恋人分开，所以才会写信。' }
        ],
        analysis: 'break up 是“分手”，也可指会议散场、信号中断。苏晚把信留了三年，说明那晚她没舍得真的断。',
        wrongFeedback: '你选错了，苏晚把信收回去，指尖发白，说“算了，都过去了”，声音很轻。',
        afterCorrect: '陈默没有接那封信：“你留着。”他顿了一下，“等哪天你想走，我签字；但在那之前，谁也别想替你签。”'
      },
      {
        plotDescription: '苏明哲冲上台抢过话筒，说苏晚早就把陈默甩了，今晚只是补个流程，让宾客别误会。',
        line: "She dumped you in front of the whole city. Why are you still standing here?",
        lineCn: '她当着全城的面把你甩了。你还站在这儿干什么？',
        prompt: "根据上下文，选出画线词汇 'dumped' 最准确的意思。",
        options: [
          { key: 'A', en: 'ended a relationship with someone', cn: '把某人甩了、结束关系', correct: true, reason: 'dump somebody 就是“甩掉对方”，正对上他那句嘲讽。' },
          { key: 'B', en: 'dropped something heavy', cn: '把很重的东西扔下', correct: false, reason: '这是字面义，这里说的是一段关系被扔掉。' },
          { key: 'C', en: 'insulted someone in public', cn: '当众羞辱某人', correct: false, reason: '羞辱不等于甩掉，dump 的重点是结束关系。' }
        ],
        analysis: 'dump 在感情里是“单方面甩掉”，比 break up 更狠。苏明哲拿它当刀子，可陈默手里握着的，是这场宴会的账。',
        wrongFeedback: '你选错了，台下响起一片议论，苏明哲笑得很得意，话筒还没放下。',
        afterCorrect: '陈默走上台，把一份文件放在话筒边：“这场宴会的场地费、酒水费、安保费，都是苏氏垫的。”他抬眼看苏明哲，“现在，谁被甩了？”'
      }
    ],
    completeText: '第 24 章结束。订婚宴没办成。宾客散尽后，苏晚一个人坐在空荡的宴会厅里，陈默把那封旧信放在她手边，什么也没问。'
  },
  {
    id: 'ml_25',
    index: 25,
    title: '第 25 章 · 谁在背后递刀',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '订婚宴的账查下去，牵出了更大的窟窿。苏氏财务总监王坤三年里转走了八百万，签字笔迹和苏明哲的一模一样。审计报告送到陈默桌上时，赵家的车正停在苏氏楼下。',
    questions: [
      {
        plotDescription: '审计师一页页念下去，王坤的账户、空壳公司、转账时间，全对得上。',
        line: "Wang Kun cheated this company out of eight million over three years.",
        lineCn: '王坤三年里从这家公司骗走了八百万。',
        prompt: "根据上下文，选出画线词汇 'cheated' 最准确的意思。",
        options: [
          { key: 'A', en: 'copied answers in an exam', cn: '考试时抄答案', correct: false, reason: 'cheat 在考试里是作弊，但这里接的是公司钱款。' },
          { key: 'B', en: 'took money by deception', cn: '骗取、用欺骗手段拿走（钱财）', correct: true, reason: 'cheat somebody out of money 就是“骗走某人的钱”。' },
          { key: 'C', en: 'had a secret lover', cn: '有地下情人', correct: false, reason: '那是 cheat on somebody，后面接的是人不是钱。' }
        ],
        analysis: 'cheat 的用法看宾语：cheat on 伴侣是出轨，cheat somebody out of 钱是骗钱。这里金额和时间都写死了。',
        wrongFeedback: '你选错了，审计师合上报告，说“还有第二份”，会议室的空气一下沉了下去。',
        afterCorrect: '陈默把报告翻到签字页：“这个笔迹不是王坤的。”他抬头，“去把苏明哲请来，就说账已经对平了。”'
      },
      {
        plotDescription: '酒会上，林薇整晚贴着赵天豪，笑得亲热，手一直搭在他臂上，苏晚就站在三步之外。',
        line: "She was flirting with Zhao all night, right in front of your wife.",
        lineCn: '她整晚都在跟赵调情，就当着你太太的面。',
        prompt: "根据上下文，选出画线词汇 'flirting' 最准确的意思。",
        options: [
          { key: 'A', en: 'arguing loudly with someone', cn: '跟人吵得很凶', correct: false, reason: '两人有说有笑，不是吵架，语气和场面都不对。' },
          { key: 'B', en: 'discussing business details', cn: '谈生意的细节', correct: false, reason: '谈生意不会一直把手搭在别人臂上。' },
          { key: 'C', en: 'showing romantic interest playfully', cn: '调情、有意无意地撩', correct: true, reason: 'flirt 就是带暧昧意味地示好，正对上她的举动。' }
        ],
        analysis: 'flirt 是“带点玩心的示好”，动作和眼神都算。陈默说这句话时没有情绪，只是在给苏晚递一个提醒。',
        wrongFeedback: '你选错了，林薇听见了，端着酒过来敬一杯，说“别误会”，眼睛却看着苏晚。',
        afterCorrect: '苏晚把杯子放下：“我没误会。”她看着林薇，“从大学到现在，你一直这样。”林薇的笑僵在脸上。'
      },
      {
        plotDescription: '记者围上来问周宁到底什么身份，他把手一摊，说自己只是个没赶上的人。',
        line: "I am not her ex. I am just the guy who never got a chance.",
        lineCn: '我不是她的前任。我只是那个从来没得到过机会的人。',
        prompt: "根据上下文，选出画线词汇 'ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'a former romantic partner', cn: '前任（恋人）', correct: true, reason: 'ex 就是“前任”，所以他先否认自己不是。' },
          { key: 'B', en: 'an old teacher', cn: '以前的老师', correct: false, reason: '老师是 teacher，ex 在感情语境里指前任。' },
          { key: 'C', en: 'a former boss', cn: '前老板', correct: false, reason: '老板是 boss，这里说的是恋爱关系。' }
        ],
        analysis: 'ex 是口语里对“前任”的简称，可接 boyfriend、wife 等。周宁这句否认得越轻，越显得他一直在意。',
        wrongFeedback: '你选错了，记者把这句话原样记下来，第二天的标题写得更难听。',
        afterCorrect: '陈默从人群外递过一句话：“机会不是等来的。”他看着周宁，“你替赵家递刀的时候，就已经选好了。”'
      },
      {
        plotDescription: '散场后，雷豹端着两杯酒挤过来，说今晚替他挡人，让他专心去跟苏晚说句话。',
        line: "I will be your wingman tonight. You talk to her, I handle the rest.",
        lineCn: '今晚我给你当僚机。你去跟她说话，剩下的我处理。',
        prompt: "根据上下文，选出画线词汇 'wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a driver waiting outside', cn: '在外面等着的司机', correct: false, reason: '司机是 driver，wingman 是帮忙撮合的朋友。' },
          { key: 'B', en: 'a friend who helps you with romance', cn: '僚机、帮你追人的朋友', correct: true, reason: 'wingman 就是替你在感情上打配合的哥们儿。' },
          { key: 'C', en: 'a bodyguard in a suit', cn: '穿西装的保镖', correct: false, reason: '保镖是 bodyguard，这里明显是玩笑话。' }
        ],
        analysis: 'wingman 原是战斗机僚机，口语里指帮朋友搭话、挡人的那位。雷豹这个糙汉子说出口，反而有点可爱。',
        wrongFeedback: '你选错了，雷豹把两杯酒都自己喝了，说“那我不管了”，转身去找老周。',
        afterCorrect: '陈默接过一杯：“不用挡。”他朝苏晚的方向看了一眼，“今晚我自己说。”'
      }
    ],
    completeText: '第 25 章结束。那晚陈默只说了三句话，苏晚却记住了很久。而苏氏楼下的那辆车，直到凌晨才开走。'
  },
  {
    id: 'ml_26',
    index: 26,
    title: '第 26 章 · 我信的人，不会反手',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '陈默终于决定交底。他约了韩青到办公室，把三年的档案铺了一桌。门被推开时，苏晚站在门口，手里拎着两份宵夜，目光落在那个短发女人身上。',
    questions: [
      {
        plotDescription: '苏晚推门进来，看见一个短发女人坐在陈默对面，桌上摆着两杯还冒热气的茶。',
        line: "The vibe in this room is wrong. Who is she, Chen Mo?",
        lineCn: '这屋里的气氛不对劲。她是谁，陈默？',
        prompt: "根据上下文，选出画线词汇 'vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'a style of music', cn: '一种音乐风格', correct: false, reason: 'vibe 确实能指音乐的感觉，但这里说的是屋里气氛。' },
          { key: 'B', en: 'a shaking of the floor', cn: '地面的震动', correct: false, reason: '不是物理震动，是人和场面给人的感觉。' },
          { key: 'C', en: 'the feeling a place or situation gives', cn: '氛围、场面给人的感觉', correct: true, reason: 'vibe 就是“感觉、气场”，正对上她觉得不对劲。' }
        ],
        analysis: 'vibe 是口语里的“氛围、气场”，可好可坏。苏晚一句“气氛不对”，其实已经把自己的在意说漏了。',
        wrongFeedback: '你选错了，苏晚把宵夜放在门口，说“我打扰了”，转身就要走。',
        afterCorrect: '陈默起身挡住门：“别走。”他指了指韩青，“她叫韩青，龙渊的军医，救过我三次。”'
      },
      {
        plotDescription: '韩青笑着站起来，自我介绍完，还故意把“灵魂伴侣”这个词抛出来，看苏晚的反应。',
        line: "Relax. I am not his soulmate. I am the one who patches him up.",
        lineCn: '放松点。我不是他的灵魂伴侣。我是那个给他缝伤口的人。',
        prompt: "根据上下文，选出画线词汇 'soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person perfectly suited to you', cn: '灵魂伴侣、天生一对的人', correct: true, reason: 'soulmate 指精神上高度契合的伴侣，所以她才特意否认。' },
          { key: 'B', en: 'a close family member', cn: '关系很近的家人', correct: false, reason: '家人是 relative，soulmate 说的是伴侣层面的契合。' },
          { key: 'C', en: 'a business partner', cn: '生意伙伴', correct: false, reason: '这里明显在解释感情关系，不是谈合作。' }
        ],
        analysis: 'soulmate 是“灵魂伴侣”，比男朋友、女朋友更强调精神契合。韩青这句自嘲，既解了围，也把位置让清楚了。',
        wrongFeedback: '你选错了，苏晚的脸色没有缓下来，把宵夜往桌上一放，说“你们聊”。',
        afterCorrect: '韩青收拾好医药箱：“我走了。”她经过苏晚身边时压低声音，“他这三年，没睡过一个整觉。”'
      },
      {
        plotDescription: '韩青走后，苏晚别过头，说他们俩说话的样子，像认识了半辈子。',
        line: "You two have chemistry. I saw it before you did.",
        lineCn: '你们俩很有默契。我比你先看出来。',
        prompt: "根据上下文，选出画线词汇 'chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'a subject about substances', cn: '化学这门学科', correct: false, reason: '这里不是在聊功课，说的是两个人之间的默契。' },
          { key: 'B', en: 'a natural connection between people', cn: '默契、人与人之间的化学反应', correct: true, reason: 'chemistry 在人际里就是“来电、合拍”，正对上他们说话的样子。' },
          { key: 'C', en: 'a medical treatment', cn: '一种医学治疗', correct: false, reason: '治疗是 treatment，chemistry 在这里是比喻。' }
        ],
        analysis: 'chemistry 除了化学，还常用来形容两个人之间的默契或吸引力。苏晚说这话时带酸味，她自己大概也听出来了。',
        wrongFeedback: '你选错了，苏晚把筷子放下，说我先回去了，语气硬得像在赌气。',
        afterCorrect: '陈默把档案推到她面前：“她是战友。”他翻到一页，“这上面七个人，只剩三个还活着。”'
      },
      {
        plotDescription: '苏晚一页页看下去，看到最后停住，问他为什么敢把这些东西交到她手上。',
        line: "Trust is not given. It is built, one hard night at a time.",
        lineCn: '信任不是白给的。它是一个难关一个难关熬出来的。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'money lent to a friend', cn: '借给朋友的钱', correct: false, reason: '那是 loan，跟“信不信一个人”无关。' },
          { key: 'B', en: 'a legal duty', cn: '法律上的义务', correct: false, reason: 'trust 在法律里指信托，但这里说的是人心。' },
          { key: 'C', en: 'the belief that someone is reliable', cn: '信任、相信对方靠得住', correct: true, reason: 'trust 就是“把后背交给对方”的那种相信，正对上交档案。' }
        ],
        analysis: 'trust 是“信任”，强调愿意把重要的东西交出去。陈默把七个人的名字交给她，比任何表白都重。',
        wrongFeedback: '你选错了，苏晚合上档案，说“我不配看这个”，手却一直按在封面上。',
        afterCorrect: '陈默把档案推回去：“你配。”他停了一下，“这三年，你是唯一没拿我换好处的人。”'
      }
    ],
    completeText: '第 26 章结束。那晚办公室的灯亮到两点。苏晚走的时候，把两份宵夜都留在了桌上，还说了一句：明天记得热一下再吃。'
  },
  {
    id: 'ml_27',
    index: 27,
    title: '第 27 章 · 一句承诺，三年',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵家开始挖人，第一个找的是老周，开出三倍薪水，还许了一个副总的位置。老周把合同原样退回，连信封都没拆。苏振海听说后，亲自来问他要什么条件。',
    questions: [
      {
        plotDescription: '苏振海把新合同推过去，说只要点个头，明天就能搬进江边的房子。',
        line: "I have been loyal to one man for twelve years. That will not change for money.",
        lineCn: '我忠于一个人十二年了。这不会因为钱改变。',
        prompt: "根据上下文，选出画线词汇 'loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'always supporting someone', cn: '忠诚、始终站在某人一边', correct: true, reason: 'loyal to 就是“对某人忠诚”，正对上十二年这句话。' },
          { key: 'B', en: 'good at following orders blindly', cn: '盲目听命令', correct: false, reason: '忠诚不等于盲从，这里强调的是选择站在谁那边。' },
          { key: 'C', en: 'polite to strangers', cn: '对陌生人客气', correct: false, reason: 'loyal 说的是长期的关系，不是礼貌。' }
        ],
        analysis: 'loyal 是“忠诚、讲义气”，常用 loyal to somebody。老周一句十二年，把所有的价码都堵死了。',
        wrongFeedback: '你选错了，苏振海以为他嫌少，又加了一句“股份也可以谈”，老周把茶推了回去。',
        afterCorrect: '老周站起来：“苏先生，我开车不是为了钱。”他把椅子归位，“是为了有一天能把他平安送回家。”'
      },
      {
        plotDescription: '苏振海转而找苏晚，把赵家的合作书递过去，说这是苏家最后的机会。',
        line: "I reject their offer, and I reject the reason behind it.",
        lineCn: '我拒绝他们的条件，也拒绝这条件背后的理由。',
        prompt: "根据上下文，选出画线词汇 'reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'to accept gladly', cn: '欣然接受', correct: false, reason: '方向正好相反，reject 是拒绝，不是接受。' },
          { key: 'B', en: 'to refuse to accept', cn: '拒绝、不接受', correct: true, reason: 'reject an offer 就是“拒绝这个条件”，标准搭配。' },
          { key: 'C', en: 'to delay a decision', cn: '把决定往后拖', correct: false, reason: '她当场推回去，是明确拒绝，不是拖延。' }
        ],
        analysis: 'reject 是“明确不接受”，比 refuse 更正式。苏晚拒绝的不只是钱，还有那套“女人该被安排”的逻辑。',
        wrongFeedback: '你选错了，苏振海把合同拍在桌上，说“你会后悔”，声音在书房里回荡。',
        afterCorrect: '苏晚把合同撕成两半：“我后悔的是，三年前没早点说不。”她把纸扔进垃圾桶，“现在不晚。”'
      },
      {
        plotDescription: '车里只有他们两个人，雨刷一下一下扫着，陈默握着方向盘，很久才开口。',
        line: "Before I confess everything, I need you to hear one thing: I never lied to you.",
        lineCn: '在我坦白一切之前，我需要你先听一句话：我从没对你说过谎。',
        prompt: "根据上下文，选出画线词汇 'confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say sorry for something', cn: '为某事道歉', correct: false, reason: '道歉是 apologize，confess 是把藏着的真相说出来。' },
          { key: 'B', en: 'to argue back', cn: '反驳对方', correct: false, reason: '他没有争辩，是要交代过去。' },
          { key: 'C', en: 'to admit the truth', cn: '坦白、把真相说出来', correct: true, reason: 'confess 就是“承认、交代”，后面接的正是“一切”。' }
        ],
        analysis: 'confess 是“坦白”，常带一点沉重，像把压着的东西放下来。陈默先要一句“我没骗过你”，是因为这比真相更重要。',
        wrongFeedback: '你选错了，苏晚转过头看窗外，说“你现在说这个，是怕我不听吗”。',
        afterCorrect: '陈默把车停在路边：“三年前我不是逃出来的，是被送出来的。”他松开方向盘，“有人要我活着，把七条命的事说清楚。”'
      },
      {
        plotDescription: '苏晚沉默了很久，忽然问他，这三年对他来说到底算什么。',
        line: "Three years is a commitment, not a cover story.",
        lineCn: '三年是一份承诺，不是一个用来掩护的借口。',
        prompt: "根据上下文，选出画线词汇 'commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious promise you keep', cn: '承诺、要认真守住的东西', correct: true, reason: 'commitment 是“把自己绑上去的承诺”，正对上“不是借口”。' },
          { key: 'B', en: 'a short holiday', cn: '一个短期休假', correct: false, reason: '这是 vacation，与承诺无关。' },
          { key: 'C', en: 'a legal punishment', cn: '一种法律惩罚', correct: false, reason: 'commitment 在商业里指投入，在感情里指承诺，不是刑罚。' }
        ],
        analysis: 'commitment 是“承诺、投入”，比 promise 更有分量，因为它包含代价。陈默把它放在“三年”后面，等于承认自己也赔进去了。',
        wrongFeedback: '你选错了，苏晚笑了一下，说“承诺”，语气像是在念一个很旧的词。',
        afterCorrect: '陈默转过头看她：“对，承诺。”他顿了很久，“对你爷爷的，也是对你的。”'
      }
    ],
    completeText: '第 27 章结束。那晚的雨下到天亮。苏晚回家时没有开灯，坐在玄关很久，手里攥着那把早就配好的备用钥匙。'
  },
  {
    id: 'ml_28',
    index: 28,
    title: '第 28 章 · 她递来的那杯温水',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '陈默的旧伤发炎，半夜发起烧来。苏晚被客厅的响动惊醒，看见他扶着桌角站着，袖子已经被血浸透。她没说话，转身去拿了医药箱，又倒了一杯温水。',
    questions: [
      {
        plotDescription: '苏晚替他换药，手指擦过那道旧疤，两个人都没说话，屋里只听见纱布拉开的细响。',
        line: "There has never been intimacy between us. Tonight there is something.",
        lineCn: '我们之间从来没有过亲密。今晚有点不一样了。',
        prompt: "根据上下文，选出画线词汇 'intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a formal introduction', cn: '正式的介绍', correct: false, reason: '这里没有人互相介绍，说的是两个人之间的靠近。' },
          { key: 'B', en: 'a close, private emotional connection', cn: '亲密、私底下的亲近', correct: true, reason: 'intimacy 指心理和身体上的亲近，正对上换药这个场景。' },
          { key: 'C', en: 'a business partnership', cn: '商业上的合作', correct: false, reason: '这是婚姻里的词，不是谈生意。' }
        ],
        analysis: 'intimacy 是“亲密”，可以指情感，也可以指身体距离。三年同一个屋檐下，第一次离得这么近，谁都没有退开。',
        wrongFeedback: '你选错了，苏晚的手停了一下，纱布掉在地上，她弯腰去捡，耳根有点红。',
        afterCorrect: '陈默低声说了句“谢谢”。苏晚把纱布重新缠好：“别说话。”她的声音很轻，手上却很稳。'
      },
      {
        plotDescription: '她把温水塞进他手里，转身还替他把半扇窗关上，动作快得像怕被看见。',
        line: "She shows affection in small ways. You just have to look.",
        lineCn: '她表达感情的方式很小。你得仔细看才看得见。',
        prompt: "根据上下文，选出画线词汇 'affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious illness', cn: '严重的病', correct: false, reason: 'affection 和疾病无关，别和 infection（感染）搞混。' },
          { key: 'B', en: 'a loud argument', cn: '大声争吵', correct: false, reason: '她一句话没多说，正相反，是安静的关心。' },
          { key: 'C', en: 'a feeling of liking and caring', cn: '爱意、关心', correct: true, reason: 'affection 就是“喜欢和在乎”，藏在倒水关窗这些小事里。' }
        ],
        analysis: 'affection 是“喜爱、关怀”，往往通过动作表达。陈默看得懂，因为他自己也习惯用做事代替说话。',
        wrongFeedback: '你选错了，苏晚把杯子往他手边推了推，说“喝完再睡”，转身走得很快。',
        afterCorrect: '陈默捧着那杯水，温度刚好。他忽然想起三年前，也是这样一个雨夜，她隔着门缝塞进来一杯水。'
      },
      {
        plotDescription: '第二天，老周把车钥匙放在桌上，说今晚谁都不许加班，位子已经订好。',
        line: "It is your date night. I already booked the table.",
        lineCn: '今晚是你们的约会之夜。位子我已经订好了。',
        prompt: "根据上下文，选出画线词汇 'date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'an evening set aside for a couple', cn: '约会之夜、留给两个人的晚上', correct: true, reason: 'date night 就是伴侣专门留出来的那一晚，所以还订了位子。' },
          { key: 'B', en: 'a night shift at work', cn: '夜班', correct: false, reason: '老周说的是不许加班，正好和夜班相反。' },
          { key: 'C', en: 'a company dinner', cn: '公司聚餐', correct: false, reason: '公司聚餐不会用 date night 这种说法。' }
        ],
        analysis: 'date night 指情侣或夫妻固定留出的“约会之夜”。老周这种安排，比任何劝说都更像长辈。',
        wrongFeedback: '你选错了，苏晚听见了，说“我们不用”，陈默却把钥匙接了过来。',
        afterCorrect: '陈默把钥匙揣进口袋：“订了就去。”他看向苏晚，“吃个饭，不谈公司。”'
      },
      {
        plotDescription: '雷豹在车里笑得快岔气，说从来没见过陈默这个样子，连走路都慢半拍。',
        line: "Look at him. Twelve years in the field, and now he is smitten.",
        lineCn: '看看他。在战场上十二年，现在神魂颠倒。',
        prompt: "根据上下文，选出画线词汇 'smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply asleep', cn: '睡得很沉', correct: false, reason: 'smitten 和睡觉无关，是“被感情击中”的状态。' },
          { key: 'B', en: 'completely in love', cn: '神魂颠倒、被迷住了', correct: true, reason: 'be smitten with 就是“迷上某人”，正对上他那副样子。' },
          { key: 'C', en: 'very angry', cn: '非常生气', correct: false, reason: '如果是生气，雷豹不会笑得这么开心。' }
        ],
        analysis: 'smitten 是“被一击命中”，多指突然陷进去的喜欢。用在陈默身上，反差感就是笑点。',
        wrongFeedback: '你选错了，雷豹这句说出口，苏晚正好拉开车门，车里的空气一下凝固。',
        afterCorrect: '陈默关掉车内音响：“开车。”雷豹忍着笑发动车子，后视镜里，苏晚的耳根红得很明显。'
      }
    ],
    completeText: '第 28 章结束。那顿饭吃了两个小时，谁都没提赵家、没提账、没提三年前。回去的路上苏晚靠在车窗上，第一次没有装睡。'
  },
  {
    id: 'ml_29',
    index: 29,
    title: '第 29 章 · 隔着三千公里的电话',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '边境出了事，韩青的电话在凌晨打来。陈默站在阳台上听完，只说了一句“我明天到”。回屋时苏晚已经醒了，坐在床边看着他收拾行李。',
    questions: [
      {
        plotDescription: '韩青在电话里说，名单上又添了一个名字，声音压得很低，背景里有风声。',
        line: "I have seen a lot of heartbreak, but nothing like a mother hearing that name.",
        lineCn: '我见过很多心碎，但没有哪一种比得上一个母亲听到那个名字。',
        prompt: "根据上下文，选出画线词汇 'heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious head injury', cn: '头部重伤', correct: false, reason: 'heartbreak 是情感上的痛，不是医学上的伤。' },
          { key: 'B', en: 'a machine that stopped working', cn: '坏掉的机器', correct: false, reason: '这里说的是一个母亲的感受，不是设备。' },
          { key: 'C', en: 'deep emotional pain', cn: '心碎、极度的情感痛苦', correct: true, reason: 'heartbreak 就是“心被击碎”，正对上母亲听到噩耗。' }
        ],
        analysis: 'heartbreak 是“极度的情感痛苦”，常和失去有关。韩青是军医，见惯伤口，却说自己最怕听那个名字。',
        wrongFeedback: '你选错了，电话那头沉默了很久，韩青才说“你早点来”，声音有点抖。',
        afterCorrect: '陈默挂了电话，在阳台上站了很久。他记得那七个人的名字，也记得每一个家里还亮着的灯。'
      },
      {
        plotDescription: '苏晚把手机递过来，信号断断续续，窗外正下着雨，她说自己只说两句。',
        line: "Long-distance is hard, but silence is harder.",
        lineCn: '异地很难，但沉默更难。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a relationship between people far apart', cn: '异地恋、相隔很远的关系', correct: true, reason: 'long-distance 常指异地关系，正对上三千公里的电话。' },
          { key: 'B', en: 'a very long phone call', cn: '一通很长的电话', correct: false, reason: '这里说的是两人相隔两地，不是通话时长。' },
          { key: 'C', en: 'a marathon race', cn: '长跑比赛', correct: false, reason: 'long-distance 能修饰比赛，但这句讲的是关系。' }
        ],
        analysis: 'long-distance 是“异地”，常作 long-distance relationship。苏晚这句话不是抱怨距离，是在说：别不联系我。',
        wrongFeedback: '你选错了，苏晚握着手机没再说话，雨声把沉默填满了。',
        afterCorrect: '陈默先开的口：“我每天打一个。”他停了一下，“不管多晚。”苏晚在那头轻轻“嗯”了一声。'
      },
      {
        plotDescription: '第二天的八卦稿写得更离谱，说陈默同时维持多段关系，配图却是三年前的旧照。',
        line: "The article claims he believes in polyamory. There is not one photo to prove it.",
        lineCn: '文章说他还相信多边恋。可一张能证明的照片都没有。',
        prompt: "根据上下文，选出画线词汇 'polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fear of marriage', cn: '婚姻恐惧', correct: false, reason: '那是恐惧，polyamory 说的是关系形式，不是害怕。' },
          { key: 'B', en: 'having more than one romantic partner at once', cn: '多边恋、同时有多位伴侣', correct: true, reason: 'poly 是“多”，amory 是“爱”，指同时维持多段关系。' },
          { key: 'C', en: 'a love of money', cn: '爱钱', correct: false, reason: '别把 amory 当成 money，这个词只跟感情有关。' }
        ],
        analysis: 'polyamory 指公开、同意前提下的多重伴侣关系。这里被八卦媒体拿来当脏水，苏晚一眼看穿：连照片都是旧的。',
        wrongFeedback: '你选错了，苏晚把稿子折起来，说“这种文章也有人信”，语气却有点紧。',
        afterCorrect: '陈默把稿子扔进碎纸机：“让他们写。”他抬头，“等这事完了，我开个发布会，一次说清。”'
      },
      {
        plotDescription: '苏振海把一份文件拍在桌上，说退婚不是儿戏，法律上也得走完手续。',
        line: "You want a divorce? Then say it to her face, not behind a desk.",
        lineCn: '你想离婚？那就当着她的面说，别躲在办公桌后面。',
        prompt: "根据上下文，选出画线词汇 'divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a change of address', cn: '搬家', correct: false, reason: '文件是解除婚姻的，不是换住址。' },
          { key: 'B', en: 'a business merger', cn: '企业合并', correct: false, reason: '这里是家事，不是公司并购。' },
          { key: 'C', en: 'the legal end of a marriage', cn: '离婚、法律上解除婚姻', correct: true, reason: 'divorce 就是正式结束婚姻，正对上“走完手续”。' }
        ],
        analysis: 'divorce 是“离婚”，也可泛指分离。陈默把文件推回去，意思是：要结束，让她自己开口。',
        wrongFeedback: '你选错了，苏振海把笔按在他面前，说“签了它，苏家给你一笔钱”，声音压低。',
        afterCorrect: '陈默把文件推回去：“要签，让她来。”他站起身，“我不替她做决定，你也别替。”'
      }
    ],
    completeText: '第 29 章结束。第二天清晨，陈默登上了飞往边境的航班。登机前他发了一条消息，只有四个字：等我回来。'
  },
  {
    id: 'ml_30',
    index: 30,
    title: '第 30 章 · 有些账，只能用命还',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '边境的夜很冷，营地外烧着一堆火。七个位置，只坐满了四个。韩青把名单递过来，最下面一行是新添的名字。远处有人吹口琴，调子跑得厉害，没人笑。',
    questions: [
      {
        plotDescription: '国内的热搜上，周宁对着镜头暗示，他和苏晚之间“从来不只是同学”。',
        line: "There was never an affair. There was a boy who could not take no for an answer.",
        lineCn: '从来没有什么绯闻。只有一个不肯接受拒绝的男孩。',
        prompt: "根据上下文，选出画线词汇 'affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship', cn: '绯闻、秘密的感情关系', correct: true, reason: 'affair 常指婚外的秘密恋情，正对上他暗示的那层关系。' },
          { key: 'B', en: 'a business deal', cn: '一笔生意', correct: false, reason: '这里说的是男女关系，不是谈生意。' },
          { key: 'C', en: 'a public speech', cn: '一次公开演讲', correct: false, reason: 'affair 不是演讲，法语词源是“事情”，这里指私情。' }
        ],
        analysis: 'affair 在感情语境里几乎专指“见不得光的关系”，比 relationship 更重。陈默把这盆脏水原样泼回去。',
        wrongFeedback: '你选错了，热搜又涨了一波，苏氏公关部的电话响个不停，苏晚却把手机扣在桌上。',
        afterCorrect: '苏晚对着镜头只说了一句：“我先生叫陈默。”她顿了一下，“其他的名字，我不认识。”'
      },
      {
        plotDescription: '记者追问她，这三年婚姻里到底有没有过爱情，她看着镜头停了三秒。',
        line: "There was no romance in this marriage. There was a promise, and I kept it.",
        lineCn: '这段婚姻里没有浪漫。只有一个承诺，而我守住了。',
        prompt: "根据上下文，选出画线词汇 'romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a long novel', cn: '长篇小说', correct: false, reason: 'romance 确实有“爱情小说”的意思，但这里说的是感情。' },
          { key: 'B', en: 'a feeling of love and excitement', cn: '浪漫、爱情的滋味', correct: true, reason: 'romance 指恋爱里的心动和浪漫，正对上“婚姻里没有”。' },
          { key: 'C', en: 'a travel plan', cn: '旅行计划', correct: false, reason: '与旅行无关，她在回答感情问题。' }
        ],
        analysis: 'romance 是“浪漫、恋情”，比 love 更强调氛围和心动。苏晚把“没有”说得很平静，后半句却承认了自己守约。',
        wrongFeedback: '你选错了，记者立刻追问“那为什么不离婚”，苏晚没有回答，只是起身离开。',
        afterCorrect: '这段采访在边境的屏幕上播出来。陈默站在雪地里看完，很久才说：“这三年，是我欠她的。”'
      },
      {
        plotDescription: '营地里，韩青说起老周，十二年没成家，跟着陈默从南到北，连父亲最后一面都没赶上。',
        line: "His devotion is not to me. It is to the men we buried.",
        lineCn: '他的忠诚不是对我。是对我们埋掉的那些人。',
        prompt: "根据上下文，选出画线词汇 'devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a medical prescription', cn: '一张处方', correct: false, reason: 'prescription 才是处方，devotion 说的是投入和忠诚。' },
          { key: 'B', en: 'a short break from work', cn: '工作中的短暂休息', correct: false, reason: '跟休息无关，这里是一份守了十二年的心。' },
          { key: 'C', en: 'deep loyalty and commitment', cn: '忠诚、全身心的投入', correct: true, reason: 'devotion 是“把自己交出去”的投入，正对上十二年。' }
        ],
        analysis: 'devotion 是“奉献、忠诚”，程度比 loyalty 更深。陈默不敢领这份功劳，因为那份忠诚属于死去的人。',
        wrongFeedback: '你选错了，韩青低下头，把手里的名单折了又折，火光照着她的侧脸。',
        afterCorrect: '陈默把一杯酒倒在地上：“敬他们。”他停了一下，“也敬老周，他替我们活着。”'
      },
      {
        plotDescription: '火堆边，陈默说他三年前有阵子什么都不想干，连枪都不想碰。',
        line: "I lost my passion for this work. Then a girl needed a surgery, and it came back.",
        lineCn: '我对这份工作失去过热情。后来有个女孩需要做手术，它又回来了。',
        prompt: "根据上下文，选出画线词汇 'passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'strong feeling and drive', cn: '热情、强烈的动力', correct: true, reason: 'passion 是“让人愿意拼命的劲头”，正对上“又回来了”。' },
          { key: 'B', en: 'a strong flavor', cn: '浓烈的味道', correct: false, reason: '这里是心理状态，不是食物的味道。' },
          { key: 'C', en: 'a serious disagreement', cn: '严重的分歧', correct: false, reason: '分歧是 disagreement，与“热情”无关。' }
        ],
        analysis: 'passion 是“热爱、激情”，可以对人，也可以对一件事。陈默把它和妹妹的手术连在一起，说明他重燃的不是野心，是理由。',
        wrongFeedback: '你选错了，火堆噼啪响了一声，雷豹想问什么，被韩青按住了手。',
        afterCorrect: '陈默抬头看雪：“明天进山。”他站起来，“把该还的账还了，我想回家吃顿饭。”'
      }
    ],
    completeText: '第 30 章结束。第二幕收尾。凌晨三点，七个位置里最后一个也被填上了名字——那是内鬼的代号。陈默把名单投进火里，说了一句：走吧。'
  },
  {
    id: 'ml_31',
    index: 31,
    title: '第 31 章 · 一个电话，七个人',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '进山前，陈默拨了七个电话。四个接通，两个关机，一个在接通后立刻挂断。他把手机收进兜里，说够了。营房外下着雪，车灯在雪里拉出两道白线。',
    questions: [
      {
        plotDescription: '营房里，陈默把一张照片推到老K面前，照片上是三年前那张撤退路线图。',
        line: "I am going to confront him tonight, face to face, with the map in my hand.",
        lineCn: '今晚我要当面跟他对质，手里拿着这张地图。',
        prompt: "根据上下文，选出画线词汇 'confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'to avoid someone quietly', cn: '悄悄躲开某人', correct: false, reason: '正好相反，他要当面把事摊开，不是躲。' },
          { key: 'B', en: 'to face someone directly about a problem', cn: '对质、当面把问题摊开', correct: true, reason: 'confront 就是“正面找他对峙”，后面还有 face to face。' },
          { key: 'C', en: 'to praise someone publicly', cn: '当众表扬某人', correct: false, reason: '这里气氛是审问，不是表扬。' }
        ],
        analysis: 'confront 是“直面、对质”，带压迫感。陈默不搞偷袭，他要的是对方看着地图说不出话。',
        wrongFeedback: '你选错了，老K笑了一下，说“你拿什么对质”，手却在桌下摸手机。',
        afterCorrect: '陈默把他的手按在桌上：“不用打。”他拉开椅子坐下，“人我已经请来了。”'
      },
      {
        plotDescription: '老K否认，陈默没有再问，只让人把他的通讯设备全部收走。',
        line: "If he lied, we cut ties tonight. No second chance.",
        lineCn: '如果他说谎，今晚就断绝关系。没有第二次机会。',
        prompt: "根据上下文，选出画线词汇 'cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'to tie a knot in a rope', cn: '在绳子上打个结', correct: false, reason: '那是字面动作，tie 在这里是“关系”。' },
          { key: 'B', en: 'to sign a new contract', cn: '签一份新合同', correct: false, reason: '这里是断关系，不是建立合作。' },
          { key: 'C', en: 'to end a relationship completely', cn: '断绝关系、彻底断开', correct: true, reason: 'cut ties 就是“把联系切断”，常指与人或组织断交。' }
        ],
        analysis: 'cut ties with 是固定搭配，意思是“断绝往来”。陈默给的不是惩罚，是最后一次机会——但只有一次。',
        wrongFeedback: '你选错了，老K把设备交出来时手在抖，营房里没人看他。',
        afterCorrect: '设备里翻出一条三年前的短信，收件人写着“霍”。陈默看了两秒，把手机递给韩青。'
      },
      {
        plotDescription: '雷豹忽然跪下，说三年前那个缺口是他守的，是他把整队人带进了埋伏。',
        line: "I messed up that night. I have been paying for it ever since.",
        lineCn: '那晚是我搞砸的。从那以后我一直在还这笔债。',
        prompt: "根据上下文，选出画线词汇 'messed up' 最准确的意思。",
        options: [
          { key: 'A', en: 'made a serious mistake', cn: '搞砸、犯了严重的错', correct: true, reason: 'mess up 就是“把事情弄坏”，正对上他自责的那晚。' },
          { key: 'B', en: 'cleaned up a room', cn: '收拾了一间屋子', correct: false, reason: '那是 clean up，和“犯错”不是一回事。' },
          { key: 'C', en: 'arrived exactly on time', cn: '分秒不差地到达', correct: false, reason: '意思完全不对，这里没有准时的意思。' }
        ],
        analysis: 'mess up 是“弄糟、搞砸”，口语里很常用。雷豹把它用在自己身上，是想替所有人背下那一夜。',
        wrongFeedback: '你选错了，雷豹把头埋得更低，肩膀在抖，雪从门缝里灌进来。',
        afterCorrect: '陈默把他从地上拉起来：“那晚的路线是我定的。”他手上用力，“要背，也是我先背。”'
      },
      {
        plotDescription: '陈默说那晚的命令是自己下的，让他别把一辈子搭进去自责。',
        line: "Do not screw up your life blaming yourself for my order.",
        lineCn: '别为了我下的命令，把你自己的人生弄糟。',
        prompt: "根据上下文，选出画线词汇 'screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to fasten something with screws', cn: '用螺丝把东西拧紧', correct: false, reason: '那是字面义，这里接的是 life，指“毁掉”。' },
          { key: 'B', en: 'to ruin something', cn: '弄糟、毁掉', correct: true, reason: 'screw up 在口语里就是“搞坏、毁掉”，正对上人生。' },
          { key: 'C', en: 'to shout at someone', cn: '冲某人大吼', correct: false, reason: 'screw up 不是吼叫，重点是“弄坏”。' }
        ],
        analysis: 'screw up 和 mess up 意思接近，但更口语、更随意。陈默用一个糙词，把雷豹从自责里拽了出来。',
        wrongFeedback: '你选错了，雷豹抹了一把脸，说“那我跟你去”，声音终于稳了一点。',
        afterCorrect: '陈默拍了拍他的肩：“去。”他转身走向雪地，“七个人，一个都不能少。”'
      }
    ],
    completeText: '第 31 章结束。四辆车在雪里出发。老K被留在营房，由两个人看着。车灯消失在白茫茫的山口时，营地里的灯一盏盏灭了。'
  },
  {
    id: 'ml_32',
    index: 32,
    title: '第 32 章 · 有人在说你的名字',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '边境小镇只有一家还亮着灯的酒馆。陈默坐在最里面的位置，桌上摆着两杯没动过的酒。线人是当地人，进门先看了一圈，才在他对面坐下。',
    questions: [
      {
        plotDescription: '线人把杯子推过来，笑着说想听故事可以，但得先看到诚意。',
        line: "You want me to spill the tea? Then put the money on the table.",
        lineCn: '你想让我爆料？那先把钱放到桌上。',
        prompt: "根据上下文，选出画线词汇 'spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'to pour tea into a cup', cn: '把茶倒进杯子里', correct: false, reason: '这是字面拆解，桌上根本没有茶，说的是消息。' },
          { key: 'B', en: 'to clean the table', cn: '把桌子擦干净', correct: false, reason: '线人在谈价钱，不是打扫卫生。' },
          { key: 'C', en: 'to share the latest gossip or secrets', cn: '爆料、说出内幕', correct: true, reason: 'spill the tea 是网络流行语，就是“把知道的八卦倒出来”。' }
        ],
        analysis: 'spill the tea 字面是“把茶洒了”，实际指“说八卦、抖内幕”。线人先谈钱，说明这壶茶很贵。',
        wrongFeedback: '你选错了，线人把杯子收回去，说“那没什么好聊的”，起身要走。',
        afterCorrect: '陈默把一沓钱压在杯底：“说。”他把酒杯往前推了推，“说得值这个价，我再加。”'
      },
      {
        plotDescription: '线人收了钱，还是吞吞吐吐，眼睛一直往门口瞟。陈默把刀轻轻放在桌上。',
        line: "Swear to god you are not lying to me. I will know if you are.",
        lineCn: '你对天发誓没骗我。你要是骗我，我一眼就看出来。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'to promise very seriously', cn: '对天发誓、郑重保证', correct: true, reason: 'swear to god 就是“拿命保证”，常用来逼人立誓。' },
          { key: 'B', en: 'to pray in a church', cn: '在教堂里祈祷', correct: false, reason: '酒馆里没有祈祷，这是让人发誓。' },
          { key: 'C', en: 'to curse at someone', cn: '诅咒某人', correct: false, reason: '这里不是骂人，是要一句保证。' }
        ],
        analysis: 'swear to god 是口语里最重的保证方式，带一点威胁意味。陈默不需要他信神，只需要他不敢赌。',
        wrongFeedback: '你选错了，线人的手抖了一下，酒洒在桌上，他赶紧说“我说的都是真的”。',
        afterCorrect: '线人压低声音：“今晚有一辆车会进镇。”他比了个方向，“不是运货的，是运人的。”'
      },
      {
        plotDescription: '线人絮絮叨叨抱怨规矩多、风险大，陈默敲了敲桌子，只想听重点。',
        line: "Whatever. Just tell me where the truck stops tonight.",
        lineCn: '随便吧。就告诉我今晚那辆卡车停在哪。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'anything at all', cn: '任何东西', correct: false, reason: '那是 whatever 作代词的本义，这里是口语感叹。' },
          { key: 'B', en: 'used to show you do not care', cn: '随便吧、无所谓（表示不在意）', correct: true, reason: '这里的 whatever 是“行了别说了”，表示不想继续这个话题。' },
          { key: 'C', en: 'a strong wish', cn: '一个强烈的愿望', correct: false, reason: '语气是敷衍，不是许愿。' }
        ],
        analysis: 'whatever 单独成句时，是“随便、无所谓”，有时还带点不耐烦。陈默把它当句号，把闲聊直接掐断。',
        wrongFeedback: '你选错了，线人又绕回价钱，陈默把刀往回收了一寸，对方立刻闭嘴。',
        afterCorrect: '线人抓了抓头发：“镇口，面粉厂。”他补了一句，“那地方晚上不该有人。”'
      },
      {
        plotDescription: '线人报出地址，说那里半夜有带枪的守卫，陈默皱起眉，确认了一遍。',
        line: "Seriously? A flour factory with armed guards at midnight?",
        lineCn: '你认真的吗？面粉厂半夜有带枪的守卫？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'in a serious manner', cn: '严肃地、认真地', correct: false, reason: '那是副词用法，这里单独成句，是反问。' },
          { key: 'B', en: 'very quickly', cn: '非常快地', correct: false, reason: '这里不是在说速度，而是在表达难以置信。' },
          { key: 'C', en: 'used to show surprise or doubt', cn: '真的吗？（表示惊讶或怀疑）', correct: true, reason: 'Seriously? 单独用时就是“你在开玩笑吧”，表示惊讶质疑。' }
        ],
        analysis: 'Seriously? 是口语里的高频反问，等于“真的假的”。陈默不是在确认信息，是在判断这地方有多不对劲。',
        wrongFeedback: '你选错了，线人以为他不信，赶紧说“我亲眼看见的”，声音有点急。',
        afterCorrect: '陈默把酒一饮而尽：“面粉厂不囤面粉，囤人。”他站起来，“带路。”'
      }
    ],
    completeText: '第 32 章结束。走出酒馆时雪停了。老周在车里等他，听完地址只说了一句：“那地方三年前也是他们的仓库。”'
  },
  {
    id: 'ml_33',
    index: 33,
    title: '第 33 章 · 边境线上的第一枪',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '面粉厂的围墙比想象中高，探照灯每隔二十秒扫一次。四个人贴着墙根走，雪在脚下发出细碎的响声。雷豹走在最后，忽然停住了。',
    questions: [
      {
        plotDescription: '雷豹踩到一块铁皮，声音在夜里传得很远，守卫的手电筒立刻照了过来。',
        line: "My bad. I stepped on it. Move now, I will cover you.",
        lineCn: '我的锅。我踩到的。快走，我掩护。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my mistake, I am sorry', cn: '我的锅、是我错了', correct: true, reason: 'my bad 是口语里最常用的认错，等于“怪我”。' },
          { key: 'B', en: 'my turn to try', cn: '轮到我试了', correct: false, reason: '这里是认错，不是轮到谁。' },
          { key: 'C', en: 'my close friend', cn: '我的好朋友', correct: false, reason: '句子后面接的是“我踩到了”，明显在认错。' }
        ],
        analysis: 'my bad 是美式口语里非常轻的道歉，通常用在熟人之间。雷豹说完立刻接“我掩护”，认错和补位一气呵成。',
        wrongFeedback: '你选错了，手电筒的光扫过来，四个人只能贴着墙趴下，雪灌进领口。',
        afterCorrect: '陈默没回头，只抬手做了个手势。雷豹就地卧倒，枪口对准了探照灯的方向。'
      },
      {
        plotDescription: '撤到墙后，韩青低声问是谁暴露的，雷豹刚要开口，陈默抬手止住他。',
        line: "Do not blame him. The guard was already walking this way.",
        lineCn: '别怪他。那个守卫本来就在往这边走。',
        prompt: "根据上下文，选出画线词汇 'blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'to praise someone', cn: '表扬某人', correct: false, reason: '这里是在拦着别人追责，不是表扬。' },
          { key: 'B', en: 'to say someone is responsible for something bad', cn: '怪罪、把责任归到某人身上', correct: true, reason: 'blame somebody 就是“怪他”，正对上“别怪他”。' },
          { key: 'C', en: 'to forget something', cn: '忘记某事', correct: false, reason: 'blame 跟记忆无关，是追责。' }
        ],
        analysis: 'blame 是“责怪、归咎”，常用 blame somebody for something。陈默先替雷豹挡下这一句，队伍才不会乱。',
        wrongFeedback: '你选错了，韩青没再说话，但雷豹的头低了下去，握枪的手紧了紧。',
        afterCorrect: '陈默把地图摊在雪地上：“他从那边过来，说明巡逻路线变了。”他点了点厂房后侧，“走这里。”'
      },
      {
        plotDescription: '雷豹和韩青压低声音争了两句，一个说绕后，一个说直接破门。',
        line: "Stop arguing. The vent on the roof is our way in.",
        lineCn: '别争了。屋顶那个通风口是我们的入口。',
        prompt: "根据上下文，选出画线词汇 'arguing' 最准确的意思。",
        options: [
          { key: 'A', en: 'agreeing completely', cn: '完全同意', correct: false, reason: '两个方案不一样，正是在意见相左。' },
          { key: 'B', en: 'laughing at someone', cn: '嘲笑某人', correct: false, reason: '语气很紧，不是开玩笑。' },
          { key: 'C', en: 'disagreeing in words', cn: '争吵、用言语争辩', correct: true, reason: 'argue 就是“你一句我一句地争”，正对上两个方案。' }
        ],
        analysis: 'argue 是“争论”，语气比 discuss 重。陈默一句打断，是因为时间不够他们分对错。',
        wrongFeedback: '你选错了，两个人还在低声争，厂房里的灯又多亮了一盏。',
        afterCorrect: '陈默把地图折起来：“我上屋顶。”他看向雷豹，“你守门。”又看向韩青，“你接人。”'
      },
      {
        plotDescription: '厂房里忽然传出喊声，二楼的灯一盏盏亮起来，守卫正对着对讲机吼。',
        line: "He is yelling into the radio. We have less than a minute.",
        lineCn: '他在对着对讲机大喊。我们只剩不到一分钟。',
        prompt: "根据上下文，选出画线词汇 'yelling' 最准确的意思。",
        options: [
          { key: 'A', en: 'shouting very loudly', cn: '大喊、吼叫', correct: true, reason: 'yell 就是“扯着嗓子喊”，正对上对着对讲机吼。' },
          { key: 'B', en: 'whispering softly', cn: '轻声耳语', correct: false, reason: '正好相反，轻声说话不会惊动整栋楼。' },
          { key: 'C', en: 'singing a song', cn: '唱歌', correct: false, reason: '这里没有音乐，是喊话报警。' }
        ],
        analysis: 'yell 是“大声喊叫”，比 shout 更口语。这一句喊出来，意味着潜入结束，硬仗开始。',
        wrongFeedback: '你选错了，二楼的人已经开始往下跑，铁楼梯被踩得震天响。',
        afterCorrect: '陈默第一个翻上墙：“进去。”他压低声音，“记住，先找人，别恋战。”'
      }
    ],
    completeText: '第 33 章结束。第一枪是雷豹开的，打掉了探照灯。黑暗落下来的那一秒，四个人同时动了。'
  },
  {
    id: 'ml_34',
    index: 34,
    title: '第 34 章 · 我不需要解释',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '厂房二楼堆满了纸箱，箱子里不是面粉，是账本和护照。角落里蹲着十几个人，最小的看着不到十岁。守卫头目被按在地上，脸贴着水泥地。',
    questions: [
      {
        plotDescription: '头目一口咬定自己什么都不知道，说只是个看门的，别的一概不清楚。',
        line: "Deny it all you want. Your name is on the shipping list.",
        lineCn: '你尽管否认。你的名字就在运输清单上。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'to admit everything', cn: '全部承认', correct: false, reason: '正好相反，deny 是“不承认”，他正在抵赖。' },
          { key: 'B', en: 'to say something is not true', cn: '否认、说某事不是真的', correct: true, reason: 'deny 就是“拒不承认”，后面正是他抵赖的话。' },
          { key: 'C', en: 'to explain in great detail', cn: '非常详细地解释', correct: false, reason: '他一句解释都没有，只是否认。' }
        ],
        analysis: 'deny 是“否认”，常接 deny doing something。陈默没跟他辩论，直接把清单摊开——否认在证据面前没有意义。',
        wrongFeedback: '你选错了，头目继续喊冤，声音在空厂房里回荡，纸箱后面有孩子哭了一声。',
        afterCorrect: '陈默把清单拍在他脸边：“三月十七，四十个人，你签的字。”他蹲下来，“现在还想说是看门的？”'
      },
      {
        plotDescription: '头目见瞒不住，忽然改口，说自己也是被逼的，家里也有孩子，求陈默放过他。',
        line: "Apologize to the families, not to me. I am not the one you hurt.",
        lineCn: '去跟那些家属道歉，不是跟我。我不是被你伤害的人。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'to ask for money', cn: '伸手要钱', correct: false, reason: '这里不是要钱，是求饶认错。' },
          { key: 'B', en: 'to threaten someone', cn: '威胁别人', correct: false, reason: '他跪在地上，是求，不是威胁。' },
          { key: 'C', en: 'to say sorry', cn: '道歉、说对不起', correct: true, reason: 'apologize 就是“认错道歉”，后面还指明了该向谁道歉。' }
        ],
        analysis: 'apologize to somebody 是“向某人道歉”。陈默把方向掰正：你该面对的不是我，是那些等不到孩子回家的人。',
        wrongFeedback: '你选错了，头目愣了一下，又开始说自己上有老下有小，声音越来越小。',
        afterCorrect: '陈默站起身，没有再看那个人：“带走。”他转身走向角落，“先看看这些孩子。”'
      },
      {
        plotDescription: '韩青问他这个人怎么处理，陈默翻开账本，看了很久才开口。',
        line: "I can forgive a man who was scared. I cannot forgive a man who sold children.",
        lineCn: '我可以原谅一个害怕的人。我不能原谅一个贩卖孩子的人。',
        prompt: "根据上下文，选出画线词汇 'forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stop being angry and let it go', cn: '原谅、不再追究', correct: true, reason: 'forgive 就是“放下怒气、不再追究”，和后半句形成对比。' },
          { key: 'B', en: 'to punish very severely', cn: '严厉惩罚', correct: false, reason: '原谅和惩罚是两回事，这句正是在区分。' },
          { key: 'C', en: 'to forget a person\'s name', cn: '忘记一个人的名字', correct: false, reason: 'forgive 不是忘记，是有意识地选择不追究。' }
        ],
        analysis: 'forgive 是“原谅”，重点在主动放下。陈默划了一条线：害怕可以理解，卖人不能。',
        wrongFeedback: '你选错了，韩青点了点头，却看见陈默的手在账本边缘压得很紧。',
        afterCorrect: '陈默合上账本：“把证据备份三份。”他抬头，“一份给警方，一份给媒体，一份留给霍先生。”'
      },
      {
        plotDescription: '老K被带进来时还在喊冤，说自己跟了陈默五年，不该被这样对待。',
        line: "He has held a grudge since I rejected his promotion. That is all this is.",
        lineCn: '自从我否掉他的升职，他就一直记着仇。就这么回事。',
        prompt: "根据上下文，选出画线词汇 'grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small gift', cn: '一份小礼物', correct: false, reason: 'grudge 不是礼物，它带着怨气。' },
          { key: 'B', en: 'a long-held anger about a past wrong', cn: '记仇、长期怀恨', correct: true, reason: 'hold a grudge 就是“把旧怨记在心里”，正对上五年。' },
          { key: 'C', en: 'a written record', cn: '一份书面记录', correct: false, reason: '记录是 record，grudge 是心里的怨。' }
        ],
        analysis: 'hold a grudge 是固定搭配，指“记仇”。陈默把它说出来，不是为了解释，是为了让老K知道：原因早就查清了。',
        wrongFeedback: '你选错了，老K的声音顿了一下，随即更大声地喊“我没有”，却没人接话。',
        afterCorrect: '陈默把手里的编号卡翻过来：“升职是我否的。”他顿了顿，“因为那晚的路线，只有你一个人看过全图。”'
      }
    ],
    completeText: '第 34 章结束。孩子们被一个个抱上车。最小的那个抓着韩青的袖子不肯松手，问她是不是来救他们的。韩青说：是。'
  },
  {
    id: 'ml_35',
    index: 35,
    title: '第 35 章 · 队里出了鬼',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '账本最后一页写着一串代号，编号方式只有龙渊内部的人看得懂。陈默把那一页撕下来，放在车灯前照了很久，最后念出一个名字。',
    questions: [
      {
        plotDescription: '车灯下，陈默把那张纸递给韩青，说队里有人把路线卖了出去。',
        line: "Someone in this team betrayed us. The number is right here.",
        lineCn: '队里有个人背叛了我们。编号就在这儿。',
        prompt: "根据上下文，选出画线词汇 'betrayed' 最准确的意思。",
        options: [
          { key: 'A', en: 'helped someone in secret', cn: '暗中帮助了某人', correct: false, reason: '如果是帮忙，就不会有七个人死了。' },
          { key: 'B', en: 'forgot an order', cn: '忘记了一条命令', correct: false, reason: '忘记和背叛完全不同，这里是有意出卖。' },
          { key: 'C', en: 'was disloyal and harmed someone who trusted him', cn: '背叛、辜负信任并伤害对方', correct: true, reason: 'betray 就是“背叛信任”，正对上把路线卖出去。' }
        ],
        analysis: 'betray 是“背叛”，比 cheat 更重，强调辜负信任。陈默说这句话时没有怒，只有一种很冷的确认。',
        wrongFeedback: '你选错了，韩青把纸捏皱了，说“不可能”，声音却已经不稳。',
        afterCorrect: '陈默把纸摊平：“可能不可能，看这个编号。”他指着一行小字，“这是三年前才改的编排方式。”'
      },
      {
        plotDescription: '老K还在解释，说自己只是把路线图“借”出去换情报，从没想过会死人。',
        line: "You are a liar. You sold the route, and seven men died for it.",
        lineCn: '你是个骗子。你把路线卖了，七个人因此死了。',
        prompt: "根据上下文，选出画线词汇 'liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who tells lies', cn: '骗子、说谎的人', correct: true, reason: 'liar 就是“满嘴谎话的人”，后面正是指他卖路线。' },
          { key: 'B', en: 'a careful planner', cn: '谨慎的策划者', correct: false, reason: '这里是在戳穿他，不是夸他会谋划。' },
          { key: 'C', en: 'a brave soldier', cn: '勇敢的士兵', correct: false, reason: '语境是质问，和勇敢完全不搭。' }
        ],
        analysis: 'liar 是“说谎的人”，语气很直接。陈默不跟他争“借”和“卖”的字眼，只把结果摆出来：七个人。',
        wrongFeedback: '你选错了，老K急着辩解，说“我真的不知道会这样”，眼睛却不敢看人。',
        afterCorrect: '陈默把账本扔在他脚边：“你不知道，但他们知道。”他转身，“带走，回去审。”'
      },
      {
        plotDescription: '韩青翻出老K的证件，照片和钢印都对不上，边角还有新裁的痕迹。',
        line: "This ID is fake. The seal is printed, not stamped.",
        lineCn: '这张证件是假的。钢印是印上去的，不是压出来的。',
        prompt: "根据上下文，选出画线词汇 'fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'very expensive', cn: '非常昂贵', correct: false, reason: '这里说的是真假，不是价钱。' },
          { key: 'B', en: 'not genuine, made to deceive', cn: '假的、伪造来骗人的', correct: true, reason: 'fake 就是“假货、伪造”，正对上钢印是印的。' },
          { key: 'C', en: 'newly issued', cn: '刚发下来的', correct: false, reason: '新发的证件不会钢印不对，这里说的是伪造。' }
        ],
        analysis: 'fake 是“伪造的、假的”，可作形容词也可作名词。一张假证件，把五年的信任全部作废。',
        wrongFeedback: '你选错了，老K伸手要抢，被雷豹一把按住，证件掉在雪里。',
        afterCorrect: '陈默捡起证件，看了看照片：“这张脸不是你的。”他抬起眼，“三年前，你是谁？”'
      },
      {
        plotDescription: '老K忽然哭起来，说自己这些年一直在替兄弟们守墓，每年都去。',
        line: "Do not play the grieving brother. You are a hypocrite.",
        lineCn: '别演那个守墓的兄弟了。你是个伪君子。',
        prompt: "根据上下文，选出画线词汇 'hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who is very honest', cn: '非常诚实的人', correct: false, reason: '正好相反，hypocrite 是“说一套做一套”的人。' },
          { key: 'B', en: 'a person who talks too much', cn: '话太多的人', correct: false, reason: '这不是话多的问题，是虚伪。' },
          { key: 'C', en: 'a person who pretends to have good morals', cn: '伪君子、假装高尚的人', correct: true, reason: 'hypocrite 就是“嘴上讲道义、做的却是另一套”的人。' }
        ],
        analysis: 'hypocrite 是“伪君子”，比 fake 更具体：假装有道德。守墓的眼泪和卖路线的钱，放在一起就是这个词。',
        wrongFeedback: '你选错了，老K的哭声停了一下，随即更大声，像是在演给谁看。',
        afterCorrect: '陈默没有再看他：“你有时间去守墓，就没时间去想他们为什么躺在那儿。”'
      }
    ],
    completeText: '第 35 章结束。回程的车上没人说话。韩青开着车，忽然说：“三年前那晚，他本来可以不去。”陈默看着窗外：“所以他去了。”'
  },
  {
    id: 'ml_36',
    index: 36,
    title: '第 36 章 · 谁在替他说话',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '回国第三天，苏氏临时董事会。苏明哲带着律师进场，把一叠材料拍在桌上，说陈默挪用公款。会议室里坐了十几个人，苏晚坐在主位，一直没说话。',
    questions: [
      {
        plotDescription: '苏明哲念完材料，又补了一句，说自己也是被蒙骗的，请董事会给他一个机会。',
        line: "You backstabbed the man who kept your name out of prison. Say that again.",
        lineCn: '你背刺了那个把你名字从牢里捞出来的人。你再说一遍。',
        prompt: "根据上下文，选出画线词汇 'backstabbed' 最准确的意思。",
        options: [
          { key: 'A', en: 'betrayed someone who trusted you', cn: '背刺、从背后捅信任你的人一刀', correct: true, reason: 'backstab 就是“背后捅刀”，正对上他反咬一口。' },
          { key: 'B', en: 'patted someone on the back', cn: '拍了拍某人的背', correct: false, reason: '那是字面动作，这里是比喻背叛。' },
          { key: 'C', en: 'supported someone openly', cn: '公开支持某人', correct: false, reason: '和“背刺”正好相反，他是在反咬。' }
        ],
        analysis: 'backstab 是“背刺”，比 betray 更有画面感：当面笑，背后捅。陈默这句话一出，会议室里的人开始重新看苏明哲。',
        wrongFeedback: '你选错了，苏明哲立刻提高声音，说“你别血口喷人”，手却把材料往自己那边挪。',
        afterCorrect: '陈默把一份转账记录推过去：“这笔钱从你的私人账户出去，又回到你的私人账户。”他顿了顿，“我只帮你挡了三年，没帮你签字。”'
      },
      {
        plotDescription: '苏明哲转头看向苏晚，说那些转账都是陈默逼他做的，还说苏晚只是记错了时间。',
        line: "Do not gaslight her. The emails are time-stamped, and she wrote half of them.",
        lineCn: '别PUA她了。邮件都有时间戳，其中一半还是她写的。',
        prompt: "根据上下文，选出画线词汇 'gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'to light a gas stove', cn: '点燃气灶', correct: false, reason: '这是字面拼合，这里说的是心理操控。' },
          { key: 'B', en: 'to make someone doubt their own memory', cn: 'PUA、让人怀疑自己的记忆', correct: true, reason: 'gaslight 指用话术让对方怀疑现实，正对上他说“你记错了”。' },
          { key: 'C', en: 'to send a long email', cn: '发一封很长的邮件', correct: false, reason: '跟邮件长度无关，这里说的是操控人心。' }
        ],
        analysis: 'gaslight 来自老电影，指“反复否认事实，让对方怀疑自己”。苏明哲正是这么做的，所以他被当场喝止。',
        wrongFeedback: '你选错了，苏晚的手指在桌面上收紧，眼神有一瞬间真的开始动摇。',
        afterCorrect: '苏晚深吸一口气：“时间戳在这里。”她把打印件推出去，“第一封，是我发的。”'
      },
      {
        plotDescription: '陈默把三份材料摊开，说这几年董事会每一次表决，背后都有人在牵线。',
        line: "He manipulated the board for years. Every vote was written before the meeting.",
        lineCn: '他操控董事会好几年了。每一次投票，会议前就写好了。',
        prompt: "根据上下文，选出画线词汇 'manipulated' 最准确的意思。",
        options: [
          { key: 'A', en: 'repaired a machine', cn: '修理了一台机器', correct: false, reason: 'manipulate 有“操作”的意思，但这里接的是董事会。' },
          { key: 'B', en: 'spoke honestly to everyone', cn: '对所有人说实话', correct: false, reason: '正好相反，这里说的是暗中操控。' },
          { key: 'C', en: 'controlled people or things unfairly', cn: '操控、暗中摆布', correct: true, reason: 'manipulate 就是“用手段控制别人”，正对上“会前就写好”。' }
        ],
        analysis: 'manipulate 是“操控”，强调不光彩的手段。陈默把“投票”和“会议前”放在一起，操控的手法就不言自明。',
        wrongFeedback: '你选错了，几位董事开始翻自己面前的表决记录，脸色一个比一个难看。',
        afterCorrect: '陈默把最后一份材料放在苏振海面前：“三年前那笔担保，也是这么通过的。”他收回手，“现在，谁该解释？”'
      },
      {
        plotDescription: '一位老董事出来打圆场，劝苏晚签个字算了，说女人别把事情做绝，退一步大家都好。',
        line: "Do not be a push over. You are the chairwoman, not a guest in this room.",
        lineCn: '别当老好人。你是董事长，不是这间屋子里的客人。',
        prompt: "根据上下文，选出画线词汇 'push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who is easily controlled by others', cn: '老好人、容易被摆布的人', correct: true, reason: 'push over 指“随便一推就让步的人”，正对上劝她退一步。' },
          { key: 'B', en: 'a strong and decisive leader', cn: '强势果断的领导者', correct: false, reason: '正好相反，这里是在劝她别软弱。' },
          { key: 'C', en: 'a person whose job is pushing chairs', cn: '专门推椅子的人', correct: false, reason: '这是字面拼凑，完全不是这个意思。' }
        ],
        analysis: 'push over 指“太好说话、容易被人推着走”的人。陈默这句不是命令，是提醒她别忘了自己坐在主位。',
        wrongFeedback: '你选错了，苏晚真的伸手去拿笔，会议室里有人松了口气。',
        afterCorrect: '苏晚把笔放下了：“今天的会，不签任何东西。”她抬头，“先查账，再谈责任。”'
      }
    ],
    completeText: '第 36 章结束。会议开到傍晚。散场时苏振海一个人坐在空会议室里，面前的材料一份也没动。'
  },
  {
    id: 'ml_37',
    index: 37,
    title: '第 37 章 · 站直了，别低头',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天的董事会继续。苏明哲带了律师和两个记者，摆明了要把水搅浑。苏晚到场时，所有人的目光都落在她身上，她把手里的文件放在桌上，没有坐。',
    questions: [
      {
        plotDescription: '苏晚第一次在董事会上公开表态，声音不大，但没有人打断她。',
        line: "I will stand up for him, because he is the only one here who told the truth.",
        lineCn: '我要为他说话，因为这里只有他说了实话。',
        prompt: "根据上下文，选出画线词汇 'stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'to sit down quietly', cn: '安静地坐下', correct: false, reason: '方向相反，她是站起来替他说话。' },
          { key: 'B', en: 'to support and speak in favor of someone', cn: '捍卫、为某人挺身而出', correct: true, reason: 'stand up for somebody 就是“站出来支持他”，正对上公开表态。' },
          { key: 'C', en: 'to stand in a line', cn: '排队', correct: false, reason: '与排队无关，这里是比喻“站台”。' }
        ],
        analysis: 'stand up for 是“为……挺身而出”，比 support 更有动作感。苏晚站起来的那一刻，等于把自己的位置押了上去。',
        wrongFeedback: '你选错了，她的话被一声冷笑打断，记者们的相机举得更高了。',
        afterCorrect: '苏晚把文件翻开：“这是三年的审计记录。”她环视一圈，“谁想看完，我一份一份发。”'
      },
      {
        plotDescription: '有人拍桌子说她被洗脑了，还说苏氏迟早毁在她手上。',
        line: "You want a fight? Then I will fight back, and I will do it with evidence.",
        lineCn: '想吵？那我就反击，而且用证据反击。',
        prompt: "根据上下文，选出画线词汇 'fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to run away quickly', cn: '赶快逃走', correct: false, reason: '她没有退，反而是回击。' },
          { key: 'B', en: 'to give up the argument', cn: '放弃争论', correct: false, reason: '正好相反，她说的是“那我就反击”。' },
          { key: 'C', en: 'to resist and counterattack', cn: '反击、回击', correct: true, reason: 'fight back 就是“被打压后还手”，正对上用证据反击。' }
        ],
        analysis: 'fight back 是“反击”，可以是动手，也可以是言语。苏晚把它和 evidence 连在一起，说明她不是情绪化。',
        wrongFeedback: '你选错了，那位董事越说越难听，苏晚却没有再看他一眼。',
        afterCorrect: '她把一页纸推过去：“这一笔，是你签的字。”她顿了顿，“现在，还要继续吵吗？”'
      },
      {
        plotDescription: '苏明哲的律师站起来，说这些材料来源不合法，不能作为依据。',
        line: "I will defend this company with every legal tool I have.",
        lineCn: '我会用我手上一切合法手段来捍卫这家公司。',
        prompt: "根据上下文，选出画线词汇 'defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'to protect someone or something from attack', cn: '辩护、保护使其不受攻击', correct: true, reason: 'defend 就是“守住、辩护”，正对上用合法手段保护公司。' },
          { key: 'B', en: 'to attack before anyone else', cn: '抢在别人之前动手', correct: false, reason: '这里是防守和辩护，不是先发制人。' },
          { key: 'C', en: 'to sell the company', cn: '把公司卖掉', correct: false, reason: '如果卖掉，就谈不上捍卫了。' }
        ],
        analysis: 'defend 是“防御、辩护”，法庭和商战里都常用。苏晚说“合法手段”，是把这场仗拉回规则之内。',
        wrongFeedback: '你选错了，律师顺势要求休会，记者们立刻围上去，场面乱成一片。',
        afterCorrect: '苏晚没有退：“材料来源合法，我负全责。”她把名片放在桌上，“有异议，法庭上见。”'
      },
      {
        plotDescription: '散会时，苏明哲在后面骂骂咧咧，说要让陈默身败名裂，让苏家后悔。',
        line: "Ignore him. He is loud because he has nothing left.",
        lineCn: '无视他。他叫得响，是因为手里已经没牌了。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'to listen very carefully', cn: '非常仔细地听', correct: false, reason: '正好相反，ignore 是不理不睬。' },
          { key: 'B', en: 'to pay no attention to', cn: '无视、不当回事', correct: true, reason: 'ignore 就是“不理会”，正对上“叫得响是因为没牌”。' },
          { key: 'C', en: 'to answer politely', cn: '礼貌地回应', correct: false, reason: '陈默根本没有回应。' }
        ],
        analysis: 'ignore 是“故意不理会”，比“没听见”更主动。陈默不接话，是因为回应本身也是一种给面子。',
        wrongFeedback: '你选错了，苏晚回头看了一眼，苏明哲立刻叫得更凶，走廊里全是回声。',
        afterCorrect: '苏晚收回目光：“走吧。”她走在前面，背挺得很直，“明天还有一场硬仗。”'
      }
    ],
    completeText: '第 37 章结束。那天的会议记录被媒体拿到，标题写得很直白：苏氏董事长公开支持丈夫。苏晚看完只说了两个字：挺好。'
  },
  {
    id: 'ml_38',
    index: 38,
    title: '第 38 章 · 你敢动她一下',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '下午四点，学校打来电话：陈小满没回家。半小时后，陈默收到一段视频，女孩被绑在椅子上，镜头外有人笑着说，三天内把东西交出来，否则就撕票。客厅里坐着七个人，没有一个人敢先开口。',
    questions: [
      {
        plotDescription: '视频放到一半，屋里所有人都停下动作，连呼吸都放轻了，等他先说话。',
        line: "I need total silence for one minute. Then I will tell you what we do.",
        lineCn: '我需要一分钟彻底的安静。然后我会告诉你们该做什么。',
        prompt: "根据上下文，选出画线词汇 'silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loud warning alarm', cn: '刺耳的警报声', correct: false, reason: '视频里没有任何警报，他要的是没人出声。' },
          { key: 'B', en: 'an apology for a mistake', cn: '为错误道歉', correct: false, reason: '道歉是 apology，不是 silence。' },
          { key: 'C', en: 'complete quiet, no one speaking', cn: '完全的安静、没人出声', correct: true, reason: 'silence 就是“不出声”，正对上他要所有人闭嘴一分钟。' }
        ],
        analysis: 'silence 是“沉默、无声”。陈默不是要情绪，他要的是安静——因为在这种时候，一句多余的话就能把节奏带乱。',
        wrongFeedback: '你选错了，有人以为他在发火，急着解释，屋里顿时乱成一片，陈默抬眼看过去，全场才重新静下来。',
        afterCorrect: '一分钟里，他只看完了那段视频的帧数、光位、窗外的车声。然后他抬起头：“地址我有了。小满，今晚回来。”'
      },
      {
        plotDescription: '陈默把手机放在桌上，对着电话那头的人说了这一句，语气平静得反常。',
        line: "If you threaten my sister again, I will come for you myself.",
        lineCn: '你要是再威胁我妹妹一次，我会亲自来找你。',
        prompt: "根据上下文，选出画线词汇 'threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'to warn someone that you will harm them', cn: '威胁、扬言要伤害', correct: true, reason: '绑人、提条件，这就是赤裸裸的威胁。' },
          { key: 'B', en: 'to ask someone politely for help', cn: '礼貌地请人帮忙', correct: false, reason: '这里没有人客气，对方在拿人命谈条件。' },
          { key: 'C', en: 'to thank someone publicly', cn: '公开表示感谢', correct: false, reason: '方向和语境都反了，没人会为绑人致谢。' }
        ],
        analysis: 'threaten 是“以伤害相要挟”。陈默把这句还回去，等于告诉对方：你手里那点筹码，我从来不怕。',
        wrongFeedback: '你选错了，对方以为他还在讲道理，笑着又加了一句“那就看谁先眨眼”，陈默的手指没有动。',
        afterCorrect: '电话那头沉默了两秒。陈默继续说：“我给你一个小时准备。一个小时后，我不再打电话了。”'
      },
      {
        plotDescription: '对方笑着说这只是个“提醒”，还说三天后可能发生更糟的事，语气像在谈天气。',
        line: "You want to ruin me? Try. But you will lose everything first.",
        lineCn: '你想搞垮我？可以试试。但你会先失去一切。',
        prompt: "根据上下文，选出画线词汇 'ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'to repair something broken', cn: '修好破损的东西', correct: false, reason: 'ruin 和 repair 正好相反，一个是毁，一个是修。' },
          { key: 'B', en: 'to destroy someone completely', cn: '彻底毁掉、让人一败涂地', correct: true, reason: 'ruin 比 damage 更狠，是“毁到没法翻身”。所以他才说你会先失去一切。' },
          { key: 'C', en: 'to rent a place to live', cn: '租一个住处', correct: false, reason: '租是 rent，和 ruin 只差一个字母，意思完全不同。' }
        ],
        analysis: 'ruin 是“毁掉”，可以毁名声、毁生意、毁一个人。陈默把对方的狠话接住，再翻倍还回去。',
        wrongFeedback: '你选错了，对方听见“修好”两个字，笑得更大声，以为陈默在求和，胆子一下更大了。',
        afterCorrect: '陈默把电话挂了，对老周说：“他以为我在讲狠话。”他站起来，“其实我在做时间表。”'
      },
      {
        plotDescription: '陈默披上外套，转身对老周交代最后一句，老周听完立刻明白这是底线了。',
        line: "Find them. If they touch her, destroy everything they have.",
        lineCn: '找到他们。如果他们碰她一下，就把他们所有的一切都毁掉。',
        prompt: "根据上下文，选出画线词汇 'destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'to build something new', cn: '建造新东西', correct: false, reason: 'destroy 是拆掉、毁掉，和 build 相反。' },
          { key: 'B', en: 'to hide something carefully', cn: '小心地把东西藏起来', correct: false, reason: '这里没有“藏”，只有“毁”。' },
          { key: 'C', en: 'to wreck something completely', cn: '彻底摧毁、毁灭', correct: true, reason: 'destroy 指毁到不留原样，正对上“他们所拥有的一切”。' }
        ],
        analysis: 'destroy 比 ruin 更强调“物理上、结构上的彻底摧毁”。他说的不是吓唬，是执行预案。',
        wrongFeedback: '你选错了，老周以为只是去“藏起证据”，人手带少了，等到仓库门口才发现守了二十多个人。',
        afterCorrect: '老周点了头，转身下楼。陈默把军刀扣在腰后，回头看了一眼墙上的全家福，灯还亮着。'
      }
    ],
    completeText: '第 38 章结束。天黑前，老周的人已经找到了那辆车。陈默坐在后座，把外套脱下来叠好，说了一句：她怕黑，动作要快。'
  },
  {
    id: 'ml_39',
    index: 39,
    title: '第 39 章 · 血债，血偿',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '仓库里七个黑衣人被按在地上，雷豹把名单拍在桌上。陈小满被抱出来时还在抖，却咬着牙说没哭。陈默看完名单没有发火，只蹲下来问角落里那个男人一句：谁开的枪。',
    questions: [
      {
        plotDescription: '那个男人抖着说只是听命令，陈默把枪放在他面前，声音低得几乎听不见。',
        line: "Do you regret it? Not because you were caught. Because she is fifteen.",
        lineCn: '你后悔吗？不是因为被抓，是因为她才十五岁。',
        prompt: "根据上下文，选出画线词汇 'regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'to feel sorry about something you did', cn: '后悔、为做过的事难过', correct: true, reason: '陈默问的不是怕不怕，是有没有为伤一个孩子而难过。' },
          { key: 'B', en: 'to forget a bad memory', cn: '忘掉一段糟糕的记忆', correct: false, reason: 'regret 是记得并且难受，不是忘记。' },
          { key: 'C', en: 'to repeat an action', cn: '把一个动作再做一遍', correct: false, reason: '这里问的是心里有没有悔意。' }
        ],
        analysis: 'regret 是“后悔”，后面常跟动名词。陈默把“听命令”这三个字挡住，逼他自己面对那张脸。',
        wrongFeedback: '你选错了，那男人立刻顺着“听命令”往下说，把自己摘得更干净，陈默却没再看他。',
        afterCorrect: '那男人低着头，半天说了一句“她一直没哭”。陈默站起来：“她没哭，是因为看见我就知道有人会来。”'
      },
      {
        plotDescription: '雷豹问要不要把人送回去换条件，陈默摇头，说了一句话，屋里没人再提“和解”。',
        line: "I do not want revenge. I want them to remember what happens next time.",
        lineCn: '我不是要报复。我要他们记住，下次会是什么下场。',
        prompt: "根据上下文，选出画线词汇 'revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a reward for good behavior', cn: '对好行为的奖励', correct: false, reason: '没有奖励，这里说的是报复的念头。' },
          { key: 'B', en: 'hurting someone back for what they did', cn: '报复、以牙还牙', correct: true, reason: 'revenge 就是“还回去”，所以他否掉的是动机，不是手段。' },
          { key: 'C', en: 'a legal agreement', cn: '一份法律协议', correct: false, reason: '这跟法律文件没关系。' }
        ],
        analysis: 'revenge 是私人性质的“报仇”。陈默要的不是情绪上的痛快，而是让对方从此不敢再动他的家人。',
        wrongFeedback: '你选错了，雷豹以为他要收手，松开了手，人差点从地上爬起来，被按了回去。',
        afterCorrect: '陈默看向那七个人：“记住今天。你们不是输给我，是输给了一个十五岁的女孩没哭。”'
      },
      {
        plotDescription: '苏晚赶到仓库门口，看到陈小满，整个人才慢慢松下来，说这三年第一次觉得安全。',
        line: "For the first time in three years, I feel peace.",
        lineCn: '三年来第一次，我觉得安稳。',
        prompt: "根据上下文，选出画线词汇 'peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of something', cn: '一块、一片（量词）', correct: false, reason: 'piece 才是“一块”，peace 是“平静”。两个词读音像，拼写不同。' },
          { key: 'B', en: 'a loud celebration', cn: '热闹的庆祝', correct: false, reason: '仓库门口没有人庆祝，她是在说心里的感觉。' },
          { key: 'C', en: 'a state of calm with no fighting', cn: '平静、没有争斗的安稳', correct: true, reason: 'peace 就是“安宁”，正对上她三年来第一次放松。' }
        ],
        analysis: 'peace 是“和平、安宁”。她说的不是天下太平，是家里终于没有人在暗处盯着。',
        wrongFeedback: '你选错了，苏晚把话咽回去，只说了句“先带孩子回去”，那点刚露出来的柔软又收了。',
        afterCorrect: '陈默把外套披在她肩上：“还没结束。”他看向仓库深处，“但今晚，她们可以睡了。”'
      },
      {
        plotDescription: '天快亮时，霍先生的人打来电话，说愿意暂时收手，条件是双方都不再动手。',
        line: "I will accept a truce. But the clock only runs until tomorrow noon.",
        lineCn: '我接受停战。但这时钟只走到明天正午。',
        prompt: "根据上下文，选出画线词汇 'truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting for a while', cn: '停战、临时休战', correct: true, reason: 'truce 是“暂时不打了”，所以他特意加了期限。' },
          { key: 'B', en: 'a final surrender', cn: '最终投降', correct: false, reason: '投降是 surrender，truce 只是先停一下。' },
          { key: 'C', en: 'a new business deal', cn: '一笔新的生意', correct: false, reason: '他们不是在谈生意，是在谈什么时候再动手。' }
        ],
        analysis: 'truce 特指“有期限的停战”。陈默接受它，不是示弱，是因为他需要一个上午把妹妹送回家。',
        wrongFeedback: '你选错了，雷豹以为对面认输了，放松了警戒，天亮时对面又摸进来两个人。',
        afterCorrect: '陈默放下电话，看着窗外发白的天：“明天中午，就是他们自己定的时间。”'
      }
    ],
    completeText: '第 39 章结束。清晨六点，陈小满在车上睡着了，手里还攥着陈默的袖口。苏晚替她把外套拉好，轻声问接下来怎么办。陈默说：先吃饭。'
  },
  {
    id: 'ml_40',
    index: 40,
    title: '第 40 章 · 停火线',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '中午十二点，苏振海拄着拐杖进了苏家老宅，把两份文件放在桌上：一份是让陈默净身出户的协议，一份是股权转让书。他说今天只能签一个。苏晚站在门口，没有进来，也没有说话。',
    questions: [
      {
        plotDescription: '苏振海把笔推到陈默面前，说只要他签了，苏家愿意跟他和好，往后还是一家人。',
        line: "You want to reconcile now? You had three years to do that.",
        lineCn: '你现在想和好了？你有三年时间可以做这件事。',
        prompt: "根据上下文，选出画线词汇 'reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'to argue more seriously', cn: '更激烈地争吵', correct: false, reason: 'reconcile 是往和的方向走，不是越吵越凶。' },
          { key: 'B', en: 'to make up and be friendly again', cn: '和解、重新和好', correct: true, reason: '老人拿文件换他低头，这就是在谈“和好”，所以他才反问这三年。' },
          { key: 'C', en: 'to sell a company', cn: '卖掉一家公司', correct: false, reason: '这里谈的不是买卖，是关系。' }
        ],
        analysis: 'reconcile 是“使和解、重修旧好”，也可指“使两件事一致”。陈默这句是把三年的账摆回桌上。',
        wrongFeedback: '你选错了，苏振海以为他动摇了，立刻把协议往他手边又推近一寸，笑容浮上来。',
        afterCorrect: '陈默没有拿笔：“三年前我跪在门口那晚，您说过一句话——苏家不养闲人。”他抬头，“我记住了。”'
      },
      {
        plotDescription: '苏明哲在旁边插话，说陈默不过是想分家产，声音越来越尖，屋里气氛一下绷紧。',
        line: "This is not my argument. This is yours. You started it three years ago.",
        lineCn: '这不是我的争论。这是你的。三年前是你们先开始的。',
        prompt: "根据上下文，选出画线词汇 'argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written contract', cn: '一份书面合同', correct: false, reason: '合同是 contract，这里说的是争吵。' },
          { key: 'B', en: 'a proof of innocence', cn: '清白的证据', correct: false, reason: '他谈的是谁先挑起争端，不是在举证。' },
          { key: 'C', en: 'an angry disagreement between people', cn: '争吵、双方各执一词', correct: true, reason: 'argument 是“争论、争吵”，正对上苏明哲越说越尖的场面。' }
        ],
        analysis: 'argument 既是“争论”，也是“论点、论据”。这里取前一个意思——一场已经吵了三年的架。',
        wrongFeedback: '你选错了，苏明哲立刻接话“你看他自己都承认在吵”，把话头抢过去，苏振海的脸色更难看了。',
        afterCorrect: '陈默不再看他，只对苏振海说：“我今天来，不是为了吵，是为了把一件东西还给您。”'
      },
      {
        plotDescription: '苏振海拍了下桌子，说苏家养了他三年，不许他再带走苏晚一分钱。',
        line: "I am not here to fight. I am here to take her home.",
        lineCn: '我不是来打架的。我是来带她回家的。',
        prompt: "根据上下文，选出画线词汇 'fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'to struggle or battle with someone', cn: '争斗、跟人打起来', correct: true, reason: '拍桌子、抢话，这就是要吵起来的架势，所以他才说自己不是来争的。' },
          { key: 'B', en: 'to cook a meal quickly', cn: '快速地做一顿饭', correct: false, reason: '这里没有任何人在做饭。' },
          { key: 'C', en: 'to sign an agreement', cn: '签一份协议', correct: false, reason: '签协议是 sign，fight 是争、打。' }
        ],
        analysis: 'fight 可指动手，也可指争吵、抗争。陈默把它否掉，是因为他要的结果不是赢一场架。',
        wrongFeedback: '你选错了，苏振海听见“打架”两个字，气得拐杖敲地，说这是要动手威胁老人。',
        afterCorrect: '苏晚在门口终于开口：“爷爷，我跟他走。”她的声音不大，但屋里所有人都听见了。'
      },
      {
        plotDescription: '僵了半分钟后，苏振海退了一步：股权可以留，但陈默必须在三个月内做出成绩。',
        line: "Fine. That is the compromise. Three months, or you both leave.",
        lineCn: '行。这就是折中方案。三个月，做不出来你们一起走。',
        prompt: "根据上下文，选出画线词汇 'compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'a total victory for one side', cn: '一方彻底获胜', correct: false, reason: '双方都退了一步，不是谁全赢。' },
          { key: 'B', en: 'an agreement where both sides give up something', cn: '双方各让一步的折中方案', correct: true, reason: '老人收回“净身出户”，他接下三个月期限，这就是各让一步。' },
          { key: 'C', en: 'a secret plan to cheat', cn: '一个作弊的秘密计划', correct: false, reason: '这里是明着谈条件，不是暗中使坏。' }
        ],
        analysis: 'compromise 是“妥协、折中”。陈默接受了，因为他要的从来不是赢这一桌人，而是拿到三个月的台面。',
        wrongFeedback: '你选错了，陈默把这句话听成“最后通牒”，当场顶了回去，老人把两份文件一起收走。',
        afterCorrect: '陈默伸出手：“三个月。”苏振海看了他很久，才把手放上来，掌心全是老茧。'
      }
    ],
    completeText: '第 40 章结束。走出老宅时，苏晚问他为什么答应。陈默回头看了一眼那扇门：“因为三个月后，我要让他们自己把门打开。”'
  },
  {
    id: 'ml_41',
    index: 41,
    title: '第 41 章 · 龙渊，全员归队',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '城郊废旧体育馆，七个人站成一排，衣服洗得发白，站姿却一点没变。韩青背着药箱，雷豹拎着两个铁箱，老周把一枚旧徽章放在陈默掌心。徽章背面刻着两个字：龙渊。',
    questions: [
      {
        plotDescription: '雷豹一见面就骂他三年不联系，陈默笑了一下，说他早就知道这些人不会散。',
        line: "You are still the most savvy man I know. You knew we would come.",
        lineCn: '你还是我认识的最精的人。你早就知道我们会来。',
        prompt: "根据上下文，选出画线词汇 'savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very tired and weak', cn: '又累又虚弱', correct: false, reason: '这里夸的是脑子，不是体力。' },
          { key: 'B', en: 'extremely rich', cn: '极其富有', correct: false, reason: 'savvy 是“精明”，和钱多钱少没关系。' },
          { key: 'C', en: 'practical and quick to understand', cn: '精明、懂行、看得很透', correct: true, reason: 'savvy 就是“在行、精明”，正对上“你早就知道我们会来”。' }
        ],
        analysis: 'savvy 作形容词是“精明的、懂门道的”，口语里常夸人“懂事、会看人”。雷豹这句是骂里带服。',
        wrongFeedback: '你选错了，雷豹以为他在嫌自己穷，把铁箱往地上一放，脸色沉下来，气氛一下僵了。',
        afterCorrect: '陈默把徽章握紧：“我从不赌人心。”他抬头看向那七个人，“我只是知道，你们没地方可去。”'
      },
      {
        plotDescription: '老周劝他先躲一躲，等风头过去，陈默摇头，说自己这三年已经躲够了。',
        line: "Let me be blunt: hiding is over. From tonight, we move first.",
        lineCn: '我说直白点：躲的日子结束了。从今晚起，我们先动手。',
        prompt: "根据上下文，选出画线词汇 'blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'direct and not polite about it', cn: '直率、不绕弯子', correct: true, reason: '他自己先说了“我说直白点”，blunt 就是不加修饰地讲。' },
          { key: 'B', en: 'not sharp anymore', cn: '不再锋利（指刀刃）', correct: false, reason: 'blunt 确实有“钝”的意思，但这里形容的是说话方式。' },
          { key: 'C', en: 'very polite and careful', cn: '非常客气谨慎', correct: false, reason: '正好相反，blunt 是客气少、直来直去。' }
        ],
        analysis: 'blunt 形容人说话“直、不留情面”。他说得直，是因为对面不会再给他绕弯子的时间。',
        wrongFeedback: '你选错了，老周以为他在说刀钝了，还递上磨刀石，屋里有人没忍住笑了一声。',
        afterCorrect: '老周把地图摊开：“那就别躲了。”他用笔在第七层画了个圈，“这里，他们以为没人敢进。”'
      },
      {
        plotDescription: '韩青把药箱放下，冲霍先生那边派来盯梢的车比了个中指，回头笑着说了句。',
        line: "That was sassy. Now stop showing off and check the gear.",
        lineCn: '嘴挺野的。行了别显摆了，去检查装备。',
        prompt: "根据上下文，选出画线词汇 'sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very sad and quiet', cn: '很难过、很安静', correct: false, reason: '韩青刚比了个中指，绝不是安静难过的状态。' },
          { key: 'B', en: 'bold and cheeky in a playful way', cn: '泼辣、嘴上不饶人、有点皮', correct: true, reason: '对着盯梢的车比中指，这就是 sassy——带点挑衅的俏皮。' },
          { key: 'C', en: 'slow to understand', cn: '反应慢、听不懂', correct: false, reason: '这跟反应速度无关，说的是态度张扬。' }
        ],
        analysis: 'sassy 多形容人“嘴上厉害、带点不服管”，通常是带笑意的评价，不是真骂。',
        wrongFeedback: '你选错了，韩青以为在被训，立刻收了笑，把药箱背好，整队时一句话都没再说。',
        afterCorrect: '韩青耸了耸肩：“三年没动手，嘴总得活动一下。”他打开药箱，里面整齐码着十二支止血针。'
      },
      {
        plotDescription: '有人提议先做套像样的装备再去，陈默看了一眼那堆旧枪，摇头。',
        line: "We do not need fancy gear. That excuse sounds lame, and we both know it.",
        lineCn: '我们不需要花哨的装备。这个借口听着很蹩脚，你我都清楚。',
        prompt: "根据上下文，选出画线词汇 'lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to walk', cn: '走不了路、瘸的', correct: false, reason: 'lame 原义是“瘸”，但这里是评价借口，不是形容腿。' },
          { key: 'B', en: 'shining brightly', cn: '闪闪发光', correct: false, reason: '闪闪发光是 shiny，这里说借口差。' },
          { key: 'C', en: 'weak and not convincing', cn: '蹩脚的、站不住脚的', correct: true, reason: '口语里 lame 就是“烂、没说服力”，正对上“这个借口”。' }
        ],
        analysis: 'lame 从“瘸”引申为“差劲、逊、站不住脚”。陈默不让任何人在开打前给自己找台阶。',
        wrongFeedback: '你选错了，那个队员真以为他在说腿伤，把裤腿撩起来解释，队伍里一阵尴尬的沉默。',
        afterCorrect: '陈默把旧枪递过去：“三年没擦，它还能响。”他拉了一下枪栓，“人也一样。”'
      }
    ],
    completeText: '第 41 章结束。夜里十一点，八个人在体育馆中央围成一圈，手叠在一起。陈默说了最后一句：这次不为国家，只为家里那几盏灯。'
  },
  {
    id: 'ml_42',
    index: 42,
    title: '第 42 章 · 三分钟，破门',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '凌晨两点，八个人贴着墙根摸进写字楼负一层。正门有四个摄像头，货梯的锁已经锈了。雷豹把耳朵贴在门上听了十几秒，比出十一根手指。陈默看了一眼表，说三分钟。',
    questions: [
      {
        plotDescription: '雷豹说这栋楼的安防报告写得很漂亮，陈默翻了两页就丢回给他。',
        line: "Their security looks dope on paper. In reality, half of them are asleep.",
        lineCn: '他们的安防在纸面上看着很牛。实际上，一半人在睡觉。',
        prompt: "根据上下文，选出画线词汇 'dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cool or impressive', cn: '很酷、很厉害', correct: true, reason: '口语里 dope 就是“牛、酷”，正对上“纸面上看着很牛”。' },
          { key: 'B', en: 'a kind of illegal drug', cn: '一种毒品', correct: false, reason: 'dope 确实有“毒品”的旧义，但这里在评价安防报告。' },
          { key: 'C', en: 'a stupid person', cn: '一个蠢人', correct: false, reason: '这里形容的是方案，不是人。' }
        ],
        analysis: 'dope 在年轻人口语里早就是“很棒、很顶”的意思，和 drugs 那层意思要分开看语境。',
        wrongFeedback: '你选错了，雷豹以为他在说楼里有人吸毒，临时改了方案，白耽误了两分钟。',
        afterCorrect: '陈默把报告折起来：“好看的东西最会骗人。”他指了指侧门，“从这儿进，他们连警报都不会响。”'
      },
      {
        plotDescription: '侧门虚掩着，锁舌根本没扣上，雷豹愣了一下，回头看他。',
        line: "Sloppy work. They left the side door open for us.",
        lineCn: '干得太糙了。他们等于替我们把侧门留着。',
        prompt: "根据上下文，选出画线词汇 'sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'very careful and exact', cn: '非常仔细、精准', correct: false, reason: '正好相反，sloppy 是马虎、粗糙。' },
          { key: 'B', en: 'careless and done without enough attention', cn: '马虎、粗糙、不上心', correct: true, reason: '锁都没扣上，这就是工作做得马虎。' },
          { key: 'C', en: 'wet and muddy', cn: '湿漉漉、满是泥', correct: false, reason: 'sloppy 有“湿软”的义项，但这里评价的是做事。' }
        ],
        analysis: 'sloppy 形容人做事“马虎、糊弄”。陈默不领这份情——对手越松，越说明里面有更大的坑。',
        wrongFeedback: '你选错了，雷豹直接推门就进，门轴发出一声长响，走廊尽头的灯亮了一盏。',
        afterCorrect: '陈默拉住他，先往门缝里扔了一枚硬币。硬币落地，没有回声——里面铺着地毯。'
      },
      {
        plotDescription: '监控室里那个保安每隔十分钟就往楼上打一次电话，陈默看了两轮，笑了。',
        line: "A needy guard calls his boss every ten minutes. That is our window.",
        lineCn: '一个没安全感的保安十分钟就要给上司打一次电话。那就是我们的空档。',
        prompt: "根据上下文，选出画线词汇 'needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money', cn: '缺钱、穷', correct: false, reason: 'need 有“需要”，但 needy 形容人时不是“穷”，是“黏人、缺安全感”。' },
          { key: 'B', en: 'very strong and independent', cn: '很强大、很独立', correct: false, reason: '方向相反，needy 是离不开别人。' },
          { key: 'C', en: 'wanting attention or reassurance all the time', cn: '离不开人、总需要确认和安慰', correct: true, reason: '十分钟一个电话求确认，这就是 needy 的典型表现。' }
        ],
        analysis: 'needy 形容人情感上“黏、缺安全感”，需要不断被确认。陈默看到的不是笑话，是节奏。',
        wrongFeedback: '你选错了，陈默把“缺钱”当成了贪财，准备拿钱收买，结果那人根本不接电话。',
        afterCorrect: '陈默掐着表：“他下一次打电话是九分四十秒后。那四十秒，电梯到七楼。”'
      },
      {
        plotDescription: '雷豹问为什么把主力全放在七楼，陈默指了指平面图上的空白区域。',
        line: "Their boss is selfish. He put every guard around himself and left the rest empty.",
        lineCn: '他们老板很自私。他把所有人手都摆在自己身边，其他地方全空着。',
        prompt: "根据上下文，选出画线词汇 'selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'caring only about yourself', cn: '自私、只顾自己', correct: true, reason: '把保命的兵力全堆在自己身边，正是只顾自己。' },
          { key: 'B', en: 'sharing everything with others', cn: '什么都愿意跟人分享', correct: false, reason: '正好相反，selfish 是不分享。' },
          { key: 'C', en: 'afraid of the dark', cn: '怕黑', correct: false, reason: '这里说的是兵力分配，不是怕不怕黑。' }
        ],
        analysis: 'selfish 是“自私的”。这个缺点对陈默来说不是道德问题，是战术缺口。',
        wrongFeedback: '你选错了，陈默把这个判断划掉，队伍只能按最坏的假设硬冲，多花了整整六分钟。',
        afterCorrect: '陈默用笔一圈：“所以二楼到六楼，只有巡逻。”他抬头，“三分钟，够我们上到第七层。”'
      }
    ],
    completeText: '第 42 章结束。货梯在六楼停了一下，门开时走廊空无一人。雷豹回头对陈默比了个手势——三分钟，开始了。'
  },
  {
    id: 'ml_43',
    index: 43,
    title: '第 43 章 · 那栋楼的第七层',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第七层整层被改成私人会所，地毯厚得能吞掉脚步声。墙上挂着霍先生的照片，每一张都笑得很得体。水晶灯亮到刺眼，却一个客人都没有。陈默停在走廊尽头，那扇门后有人正在放音乐。',
    questions: [
      {
        plotDescription: '雷豹一进门就看呆了，低声骂了句这装潢得花多少钱，陈默却没看灯。',
        line: "The place is gorgeous. That is exactly why nobody expects us to walk in.",
        lineCn: '这地方漂亮得过分。也正因如此，没人会想到我们会走进来。',
        prompt: "根据上下文，选出画线词汇 'gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'very dangerous', cn: '非常危险', correct: false, reason: '这里夸的是好看，不是危险。' },
          { key: 'B', en: 'extremely beautiful', cn: '极其漂亮、华丽', correct: true, reason: '水晶灯、厚地毯、照片墙，就是这个意思。' },
          { key: 'C', en: 'very old and broken', cn: '又旧又破', correct: false, reason: '和眼前的场面正相反。' }
        ],
        analysis: 'gorgeous 比 beautiful 更重，带“惊艳”的意思，也能形容人。陈默夸它漂亮，是在说这份漂亮让人松懈。',
        wrongFeedback: '你选错了，雷豹以为他在说这里危险，立刻拔了枪，走廊的感应灯跟着亮了一片。',
        afterCorrect: '陈默按住他的手：“他花这么多钱，是想让人觉得自己惹不起。”他看向那扇门，“可惜他只防外面。”'
      },
      {
        plotDescription: '音乐声从门缝里漏出来，节奏很急，却没有酒杯碰撞的声音，陈默停下脚步。',
        line: "Something is weird. The music is too loud for a meeting.",
        lineCn: '有点不对劲。开会的话，这音乐太吵了。',
        prompt: "根据上下文，选出画线词汇 'weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'very loud', cn: '非常响', correct: false, reason: '响只是表面现象，weird 说的是“反常”。' },
          { key: 'B', en: 'extremely expensive', cn: '极其昂贵', correct: false, reason: '他评价的是气氛，不是价格。' },
          { key: 'C', en: 'strange, not normal', cn: '奇怪、不正常', correct: true, reason: '开会却放这么吵的音乐，而且没人说话，这就是反常。' }
        ],
        analysis: 'weird 是“怪、不对劲”，口语里语气比 strange 更轻，常带“我直觉有问题”的意味。',
        wrongFeedback: '你选错了，队伍以为只是嫌吵，直接把音乐关了，门里面瞬间安静——人被惊动了。',
        afterCorrect: '陈默贴近门缝，听见一个女人的抽气声。他收回手，比了个手势：里面有人被绑着。'
      },
      {
        plotDescription: '走廊尽头那扇门没有把手，门边也没有摄像头，更看不见一个服务生。',
        line: "That door is sketchy. No handle, no camera, no staff. Stay behind me.",
        lineCn: '那扇门很可疑。没把手，没摄像头，也没人守着。跟在我后面。',
        prompt: "根据上下文，选出画线词汇 'sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'suspicious and possibly dangerous', cn: '可疑的、可能有危险', correct: true, reason: '没把手没监控没人守，三样都不合常理，所以可疑。' },
          { key: 'B', en: 'drawn with a pencil', cn: '用铅笔画的', correct: false, reason: 'sketch 是速写，但 sketchy 在这里不是“画出来的”。' },
          { key: 'C', en: 'very clean and bright', cn: '非常干净明亮', correct: false, reason: '这里讲的是异常，不是整洁。' }
        ],
        analysis: 'sketchy 是“可疑的、不太靠得住的”，美剧里常用来说某个地方或某个人看着就不对。',
        wrongFeedback: '你选错了，雷豹以为只是门有问题，一脚踹开，里面的人已经从另一侧按下了警铃。',
        afterCorrect: '陈默把耳朵贴在门板上，数了三秒，然后回头：“门后面两个人，左边那个先动。”'
      },
      {
        plotDescription: '门推开的一瞬，屋里只有音乐、一张桌子和满墙照片，霍先生坐在正中，笑着鼓掌。',
        line: "A party at three in the morning with no guests? That is bizarre.",
        lineCn: '凌晨三点办派对，一个客人都没有？太诡异了。',
        prompt: "根据上下文，选出画线词汇 'bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'very noisy', cn: '非常吵闹', correct: false, reason: 'bizarre 说的是怪到没法解释，不是音量。' },
          { key: 'B', en: 'very strange and hard to explain', cn: '离奇、怪到说不通', correct: true, reason: '凌晨三点、一个人、还放音乐，这就是“说不通”。' },
          { key: 'C', en: 'sad and lonely', cn: '悲伤而孤独', correct: false, reason: '这里是诡异，不是伤感。' }
        ],
        analysis: 'bizarre 比 weird 更重，指“离奇到让人无法理解”。陈默用这个词，说明他已经看出这是圈套。',
        wrongFeedback: '你选错了，陈默把这个词说成“寂寞”，走上前去，正好踩进地毯下那根细线。',
        afterCorrect: '陈默停在门口没动：“你想让我看见你。”他把手电照向墙上的照片，“那我也让你看看，谁在外面。”'
      }
    ],
    completeText: '第 43 章结束。霍先生鼓完掌，抬起手示意音乐停。灯灭了一半，只剩墙上的照片还亮着。他说：你以为你上来，是你赢了？'
  },
  {
    id: 'ml_44',
    index: 44,
    title: '第 44 章 · 这一战，够吹一辈子',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '地毯下面埋着压力线，屋里十一个人同时动了。雷豹撞翻长桌，韩青把被绑的秘书小叶拖到墙后，老周堵住了唯一的门。四十秒后，屋里只剩下喘息声和地上一片碎玻璃。',
    questions: [
      {
        plotDescription: '霍先生被按在椅子上，却还在笑，说今晚这一场够这些人吹十年。',
        line: "This will be epic. Ten years from now, people will still talk about tonight.",
        lineCn: '这一场会成为传奇。十年后人们还会谈起今晚。',
        prompt: "根据上下文，选出画线词汇 'epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'very short and boring', cn: '很短、很无聊', correct: false, reason: '他说的是十年后还有人谈，绝不是无聊。' },
          { key: 'B', en: 'a long poem about heroes', cn: '一首写英雄的长诗', correct: false, reason: 'epic 有“史诗”的本义，但这里是形容一场架。' },
          { key: 'C', en: 'grand and impressive', cn: '史诗级的、极其震撼', correct: true, reason: '口语里 epic 就是“牛到可以写进历史”，正对上“十年后还谈”。' }
        ],
        analysis: 'epic 从“史诗”引申为“极震撼、规模宏大”，年轻人用它夸一场球、一顿饭都可以。霍先生这话是在给自己找体面。',
        wrongFeedback: '你选错了，雷豹真以为他在念诗，愣了一秒，被地上那个人抱住了腿。',
        afterCorrect: '陈默蹲下来：“十年后人们会谈。”他压低声音，“谈你是怎么在自己家里被按住的。”'
      },
      {
        plotDescription: '枪托砸在地板上，那声闷响让站在门口的小叶整个人一抖，抱紧了胳膊。',
        line: "That sound made me cringe. I hate it when bone hits the floor.",
        lineCn: '那声音让我直起鸡皮疙瘩。我最听不得骨头撞地板的声音。',
        prompt: "根据上下文，选出画线词汇 'cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'to feel uncomfortable or embarrassed', cn: '不适、尴尬到缩起来', correct: true, reason: '她整个人一抖、抱住胳膊，这就是 cringe 的反应。' },
          { key: 'B', en: 'to laugh out loud', cn: '大声笑出来', correct: false, reason: '这里没有人觉得好笑。' },
          { key: 'C', en: 'to stand up straight', cn: '站得笔直', correct: false, reason: '她是缩起来，不是挺直。' }
        ],
        analysis: 'cringe 是“因为尴尬、难受而缩一下”。现在网络上也常用来形容“尬到受不了”。',
        wrongFeedback: '你选错了，小叶以为他在开玩笑，勉强笑了一声，笑到一半又僵住了。',
        afterCorrect: '陈默把外套脱下来盖在她肩上：“别看地上。”他挡在她前面，“数到十，我们就走。”'
      },
      {
        plotDescription: '苏晚从楼梯口走进来，外套上还带着夜里的凉气，陈默抬头看了她很久。',
        line: "You look fabulous. Like the first night I saw you, only angrier.",
        lineCn: '你好看得离谱。像我第一次见你那晚，只是更生气了。',
        prompt: "根据上下文，选出画线词汇 'fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'very tired', cn: '非常疲惫', correct: false, reason: '这里是夸，不是心疼她累。' },
          { key: 'B', en: 'extremely good-looking or wonderful', cn: '极美的、极好的', correct: true, reason: '“像我第一次见你那晚”说明他在夸她的样子。' },
          { key: 'C', en: 'made of cloth', cn: '用布做的', correct: false, reason: 'fabric 才是“布料”，fabulous 是“好极了”。' }
        ],
        analysis: 'fabulous 比 great 更夸张，带“惊艳”的味道。陈默在这种场面里说这句，是因为他知道她一路都是自己走上来的。',
        wrongFeedback: '你选错了，苏晚以为他在嫌她衣服旧，低头扯了一下袖口，把话咽了回去。',
        afterCorrect: '苏晚没接话，只走到他面前，抬手把他领口的血擦掉：“先回家。”她说，“剩下的明天算。”'
      },
      {
        plotDescription: '雷豹一边收枪一边抱怨这计划太冒险，陈默点头承认，说确实烂，但成了。',
        line: "The plan was terrible. I know. But it worked, and that is all I care about.",
        lineCn: '这计划很糟。我知道。但它成了，我只在乎这个。',
        prompt: "根据上下文，选出画线词汇 'terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely fast', cn: '极其快速', correct: false, reason: '他谈的是计划好坏，不是速度。' },
          { key: 'B', en: 'very easy to do', cn: '非常容易做', correct: false, reason: '正好相反，他自己说这计划很冒险。' },
          { key: 'C', en: 'very bad', cn: '非常糟糕', correct: true, reason: '他先承认“很糟”，再补一句“但它成了”。' }
        ],
        analysis: 'terrible 是“极坏的”。陈默不美化过程，只认结果——这是他和别人最不一样的地方。',
        wrongFeedback: '你选错了，雷豹以为他在夸计划快，回去照着又打了一次，第二次差点没出来。',
        afterCorrect: '雷豹骂了一句，然后笑了。陈默拍拍他的肩：“下次你写计划，我照做。”'
      }
    ],
    completeText: '第 44 章结束。凌晨四点，八个人从货梯下来，一个不少。小叶抱着账本走在中间，老周把门从里面锁死，说这栋楼今晚不会再开。'
  },
  {
    id: 'ml_45',
    index: 45,
    title: '第 45 章 · 他站在光里',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '天亮时，苏氏大楼门口围了三十多个记者。苏振海站在台阶上，第一次当众把陈默的名字念了出来。闪光灯亮成一片，苏晚站在他右手边，陈小满站在左手边，谁都没有退。',
    questions: [
      {
        plotDescription: '有记者问苏振海为什么改口，老人沉默了几秒，说了这句，声音有点抖。',
        line: "He is a decent man. In this family, that is rarer than talent.",
        lineCn: '他是个正派的人。在这个家里，这比才能更稀缺。',
        prompt: "根据上下文，选出画线词汇 'decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'honest and morally good', cn: '正派的、品行端正的', correct: true, reason: '老人是在给他人品上的评价，所以说“比才能更稀缺”。' },
          { key: 'B', en: 'well dressed', cn: '穿得体面', correct: false, reason: 'decent 可以形容衣着得体，但这里说的是人。' },
          { key: 'C', en: 'extremely clever', cn: '极其聪明', correct: false, reason: '他特意把“正派”和“才能”分开比。' }
        ],
        analysis: 'decent 是“体面的、正派的”，比 good 更克制。老人用这个词，等于把三年的偏见收了回去。',
        wrongFeedback: '你选错了，记者把这句写成“苏家承认他只是个穿得体面的人”，第二天标题全歪了。',
        afterCorrect: '陈默没有鞠躬，只说了一句：“我不需要认可。”他顿了一下，“但苏晚需要。”'
      },
      {
        plotDescription: '散场后，苏明哲在角落里冷笑，说陈默这种人就是个怪胎，从小就不合群。',
        line: "People called me a weirdo for years. I just called it being early.",
        lineCn: '很多人叫了我好几年怪人。我只当那是来得早。',
        prompt: "根据上下文，选出画线词汇 'weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very talented person', cn: '非常有才华的人', correct: false, reason: '这是骂人的称呼，不是夸。' },
          { key: 'B', en: 'a strange or unusual person', cn: '怪人、跟别人不一样的人', correct: true, reason: '前面刚说“不合群”，weirdo 就是“怪胎”。' },
          { key: 'C', en: 'a person who talks too much', cn: '话太多的人', correct: false, reason: '这里说的不是话多，是格格不入。' }
        ],
        analysis: 'weirdo 是口语里的“怪人”，偏贬义，但也可以自嘲。陈默把它接过来，翻成“我只是比你们早看到”。',
        wrongFeedback: '你选错了，苏明哲立刻接话“你看他自己都承认有才”，把这话当成台阶往下踩。',
        afterCorrect: '陈默看了他一眼：“三年前我说赵家的账有问题，全桌人笑我是怪人。现在账本在我手上。”'
      },
      {
        plotDescription: '上车后，苏晚替他理了理领带，忽然说了句让司机都差点踩错刹车的话。',
        line: "You are hot when you are that calm. It is unfair.",
        lineCn: '你那么冷静的时候特别有魅力。太不公平了。',
        prompt: "根据上下文，选出画线词汇 'hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'having a high temperature', cn: '温度很高、很热', correct: false, reason: 'hot 的字面义是“热”，但这里她在夸人。' },
          { key: 'B', en: 'spicy in taste', cn: '味道很辣', correct: false, reason: '车里没有人在吃东西。' },
          { key: 'C', en: 'very attractive', cn: '性感、非常有魅力', correct: true, reason: '“太不公平了”就是被撩到的语气，hot 在这里是夸吸引力。' }
        ],
        analysis: 'hot 形容人是“性感、有魅力”，比 beautiful 更带情绪。她说“不公平”，是在承认自己被打动了。',
        wrongFeedback: '你选错了，陈默真去把空调调低了两度，苏晚看着窗外，一路没再说话。',
        afterCorrect: '陈默把她的手握住：“那以后我多冷静几次。”苏晚抽了一下没抽动，最后任由他握着。'
      },
      {
        plotDescription: '陈小满在后座偷笑，说哥哥耳朵红了，还说自己第一次见他这样。',
        line: "It is cute how you still get nervous around her after three years.",
        lineCn: '都三年了，你一见她还是会紧张，真可爱。',
        prompt: "根据上下文，选出画线词汇 'cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'sweet and endearing', cn: '可爱、让人心里一软的', correct: true, reason: '妹妹是在笑他，带的是亲昵的语气。' },
          { key: 'B', en: 'extremely ugly', cn: '非常丑', correct: false, reason: '正好相反，cute 是褒义。' },
          { key: 'C', en: 'very serious', cn: '非常严肃', correct: false, reason: '车里这个气氛一点都不严肃。' }
        ],
        analysis: 'cute 除了“可爱”，口语里也能说“挺好玩的、挺招人喜欢”。小满这句是亲兄妹之间的打趣。',
        wrongFeedback: '你选错了，陈默当真了，回头板着脸问“哪里丑”，小满笑得趴在后座上。',
        afterCorrect: '陈默咳了一声：“坐好。”小满举手：“报告，我坐好了。”苏晚终于笑出声。'
      }
    ],
    completeText: '第 45 章结束。车开出很远，苏晚才轻声说：其实那天在老宅，我就想跟你走了。陈默没有回头，只说：我知道，所以我才敢来。'
  },
  {
    id: 'ml_46',
    index: 46,
    title: '第 46 章 · 清晨六点的第一班地铁',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '三个月期限到了，苏氏的项目活了。这天早上六点，陈默第一次不用赶时间，却还是站在地铁站台上。苏晚拎着两杯豆浆从台阶上跑下来，说今天不开车，想陪他挤一次早高峰。',
    questions: [
      {
        plotDescription: '站台上全是赶早班的人，苏晚靠在他肩边，看着一趟趟挤不上去的车。',
        line: "I forgot how bad the commute is at six in the morning.",
        lineCn: '我都忘了早上六点通勤有多难受了。',
        prompt: "根据上下文，选出画线词汇 'commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'a short holiday', cn: '一次短假', correct: false, reason: '这里说的是每天上下班的路，不是休假。' },
          { key: 'B', en: 'the regular journey between home and work', cn: '上下班通勤', correct: true, reason: '六点、站台、挤车，这就是通勤。' },
          { key: 'C', en: 'a fine for breaking a rule', cn: '违规罚款', correct: false, reason: 'commute 不是罚款，罚款是 fine。' }
        ],
        analysis: 'commute 作名词是“通勤”，作动词是“通勤往返”。她说“忘了有多难受”，是因为这三年都有人替她开车门。',
        wrongFeedback: '你选错了，苏晚以为他在说罚款，认真地问是不是车被贴条了，气氛一下散了。',
        afterCorrect: '陈默把她的包接过来：“以后想挤，我陪你。”车门开了，他伸手挡在她前面，替她隔出一个位置。'
      },
      {
        plotDescription: '车厢里人贴人，苏晚靠在他肩上打哈欠，说还有四十多分钟才到。',
        line: "You can take a nap on my shoulder. It is forty minutes.",
        lineCn: '你可以靠我肩上眯一会儿。还有四十分钟。',
        prompt: "根据上下文，选出画线词汇 'nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a full night of sleep', cn: '一整晚的睡眠', correct: false, reason: '只有四十分钟，nap 是短时间的盹。' },
          { key: 'B', en: 'a kind of cloth', cn: '一种布料', correct: false, reason: 'nap 有“绒毛”的义项，但这里说的是睡觉。' },
          { key: 'C', en: 'a short sleep', cn: '小睡、打个盹', correct: true, reason: '在肩上、四十分钟，这就是短期打盹。' }
        ],
        analysis: 'nap 专指白天或短时间的“小睡”，比 sleep 轻。这句是整本书里最不像陈默的一句话，所以苏晚笑了一下。',
        wrongFeedback: '你选错了，苏晚以为他在嫌她衣服起球，低头检查了半天袖子，脸都红了。',
        afterCorrect: '她真的闭上了眼睛。陈默保持着一个姿势不动，四十分钟里没换过一次肩膀。'
      },
      {
        plotDescription: '出站时下雨了，两个人躲在便利店檐下，苏晚看了看手机上的外卖软件。',
        line: "Let us order in tonight. Nobody wants to cook in this weather.",
        lineCn: '今晚叫外卖吧。这种天气没人想做饭。',
        prompt: "根据上下文，选出画线词汇 'order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have food delivered to your home', cn: '点外卖、让人送餐到家', correct: true, reason: '下雨、不想做饭、看外卖软件，就是叫外卖。' },
          { key: 'B', en: 'to give a command', cn: '下达命令', correct: false, reason: 'order 有“命令”的意思，但 order in 是“叫餐”。' },
          { key: 'C', en: 'to arrange things neatly', cn: '把东西整理整齐', correct: false, reason: '这里在说吃饭，不是收拾。' }
        ],
        analysis: 'order in 是“叫外卖在家吃”，order out 更偏向“出去买”。这组短语只看一个 in 就能分出方向。',
        wrongFeedback: '你选错了，苏晚当真以为他在下命令，收起手机说“那我听你的，不吃了”。',
        afterCorrect: '陈默补了一句：“点你爱吃的那家。”苏晚抬头看他：“你连我常点哪家都知道？”他没回答。'
      },
      {
        plotDescription: '雨小了些，苏晚指着街角那块旧招牌，说这家她小时候常来。',
        line: "Or we eat out. There is a noodle shop right around the corner.",
        lineCn: '或者我们出去吃。转角就有家面馆。',
        prompt: "根据上下文，选出画线词汇 'eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to eat everything on the plate', cn: '把盘子里的都吃光', correct: false, reason: 'eat out 不是“吃完”，是“在外吃”。' },
          { key: 'B', en: 'to eat at a restaurant instead of at home', cn: '在外面餐馆吃', correct: true, reason: '她说转角有家面馆，就是去外面吃。' },
          { key: 'C', en: 'to feed someone else', cn: '喂别人吃', correct: false, reason: '这里没有喂谁，是两个人一起出去吃。' }
        ],
        analysis: 'eat out 是“下馆子”，和 order in 正好是两种选择。苏晚给出的不是方案，是一个她小时候的记忆。',
        wrongFeedback: '你选错了，苏晚把伞收起来，说“那还是回家吧”，那家面馆她最后没带他去成。',
        afterCorrect: '陈默撑开伞：“走。”苏晚愣了一下：“现在？还没到饭点。”“那就先坐着。”'
      }
    ],
    completeText: '第 46 章结束。面馆只有六张桌子，老板娘认得苏晚，笑着说好久没见。苏晚低头喝汤，陈默看着她，忽然觉得这三个月打得值。'
  },
  {
    id: 'ml_47',
    index: 47,
    title: '第 47 章 · 一屋子的家务',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周六早上，苏晚把一整筐脏衣服搬到客厅中央，说这周谁也别想溜。陈默站在洗衣机前研究了十分钟说明书，陈小满抱着平板窝在沙发上，一动不动。',
    questions: [
      {
        plotDescription: '苏晚把一张纸贴在冰箱上，上面画了三栏，写着三个人的名字。',
        line: "We split the chores. I wash, you fold, she takes out the trash.",
        lineCn: '家务分开做。我洗，你叠，她倒垃圾。',
        prompt: "根据上下文，选出画线词汇 'chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'homework from school', cn: '学校布置的作业', correct: false, reason: '这里是家里的事，不是功课。' },
          { key: 'B', en: 'part-time jobs', cn: '兼职工作', correct: false, reason: '没有工资，也没有雇主。' },
          { key: 'C', en: 'routine household tasks', cn: '日常家务', correct: true, reason: '洗衣、叠衣、倒垃圾，全是家务。' }
        ],
        analysis: 'chore 是“日常琐碎的家务活”，常带一点“不想干但必须干”的味道。苏晚用“分”的方式，是不想一个人扛。',
        wrongFeedback: '你选错了，陈默以为她在安排工作，认真地要了份任务清单和时间节点，苏晚把纸揉了。',
        afterCorrect: '陈默拿起笔，在自己那一栏后面加了一行：“做饭。”苏晚看了一眼，没说话，把纸重新贴平。'
      },
      {
        plotDescription: '衣服在筐里堆到周一又堆到周三，苏晚靠在门框上看着沙发上那个不动的人。',
        line: "Do not procrastinate. That basket has been there since Tuesday.",
        lineCn: '别拖了。那筐衣服从周二就放那儿了。',
        prompt: "根据上下文，选出画线词汇 'procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to delay things you should do', cn: '拖延、把该做的事往后推', correct: true, reason: '一筐衣服从周二堆到周六，就是典型拖延。' },
          { key: 'B', en: 'to finish something early', cn: '提前把事情做完', correct: false, reason: '正好相反，procrastinate 是往后拖。' },
          { key: 'C', en: 'to complain loudly', cn: '大声抱怨', correct: false, reason: '这里说的是不动手，不是嘴上抱怨。' }
        ],
        analysis: 'procrastinate 是“拖延”，比 put off 更书面。陈默被点到名，是因为他能在三分钟内破门，却能三天不叠衣服。',
        wrongFeedback: '你选错了，苏晚以为他在说抱怨，转身就走，那筐衣服在原地又待了两天。',
        afterCorrect: '陈默放下说明书，直接把整筐衣服抱起来：“手动洗。”苏晚挑眉：“会吗？”他说：“学。”'
      },
      {
        plotDescription: '衣服晾完，天已经黑了，苏晚擦着手说如果动作够快还有时间干点别的。',
        line: "If we finish this, we can binge-watch that show tonight.",
        lineCn: '要是把这些做完，今晚我们就能连着把那部剧刷了。',
        prompt: "根据上下文，选出画线词汇 'binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to watch a show while eating', cn: '边吃边看剧', correct: false, reason: 'binge 是“过量”，不是“边吃边看”。' },
          { key: 'B', en: 'to watch many episodes in a row', cn: '一口气连看好几集', correct: true, reason: '“连着刷”正对上 binge-watch 的意思。' },
          { key: 'C', en: 'to watch something twice', cn: '把同一部看两遍', correct: false, reason: '重点是连续看很多集，不是重复看。' }
        ],
        analysis: 'binge 原意是“暴饮暴食”，binge-watch 就是“追剧追到停不下来”。这是苏晚这三年里第一次提“想看剧”。',
        wrongFeedback: '你选错了，苏晚以为他要边吃边看，去厨房端了一整盘水果，剧一集没看成。',
        afterCorrect: '陈默把最后一件衣服挂好：“那就从第一集开始。”苏晚笑了：“你连第一集都没看过？”'
      },
      {
        plotDescription: '陈小满一晚上都缩在沙发角落，手指在屏幕上滑个不停，谁叫都没反应。',
        line: "You have been scrolling for an hour. Put the phone down and come eat.",
        lineCn: '你刷了一个小时了。把手机放下，过来吃饭。',
        prompt: "根据上下文，选出画线词汇 'scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'to write by hand', cn: '手写', correct: false, reason: '她手里是手机，不是纸笔。' },
          { key: 'B', en: 'to make a phone call', cn: '打电话', correct: false, reason: '她没有在通话，一直在滑屏。' },
          { key: 'C', en: 'to move through content on a screen', cn: '刷屏、在屏幕上往下划', correct: true, reason: '手指滑个不停，就是 scroll。' }
        ],
        analysis: 'scroll 原意是“卷轴”，现在是“刷手机、往下滑”。陈默说这句的时候，语气和当年叫妹妹吃饭一模一样。',
        wrongFeedback: '你选错了，小满以为他在让她写字，翻出作业本问写几遍，全桌人都笑了。',
        afterCorrect: '小满把手机一扣：“哥，我在看你的新闻。”她举起屏幕，标题写着：苏氏赘婿，三个月翻盘。'
      }
    ],
    completeText: '第 47 章结束。那晚三个人挤在沙发上看剧，小满在中途睡着了。苏晚把音量调小，陈默把毯子盖到她身上，谁也没有提外面的事。'
  },
  {
    id: 'ml_48',
    index: 48,
    title: '第 48 章 · 谁把日子过成了糖',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周日，陈默第一次把手机的震动关掉。阳光斜进客厅，桌上还放着昨天剩下的半盘水果。苏晚靠在阳台门边问他今天想干什么，楼下陈小满已经在喊他们下去。',
    questions: [
      {
        plotDescription: '楼下新开了一家早餐店，苏晚说今天她请，让陈默别掏钱包。',
        line: "Swipe the card. I am paying today, and I am not taking no for an answer.",
        lineCn: '刷卡吧。今天我请，不接受拒绝。',
        prompt: "根据上下文，选出画线词汇 'swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'to slide a card or a finger across something', cn: '刷卡、用手指划过', correct: true, reason: '早餐店结账，swipe the card 就是刷卡。' },
          { key: 'B', en: 'to clean the floor', cn: '拖地、擦地板', correct: false, reason: '这里是付款动作，不是打扫。' },
          { key: 'C', en: 'to steal something quietly', cn: '偷偷拿走东西', correct: false, reason: '她在付钱，不是偷。' }
        ],
        analysis: 'swipe 原意是“用力划过”，刷卡、滑手机屏都用它。这句是苏晚少见地抢着付账，语气不容商量。',
        wrongFeedback: '你选错了，陈默把 swipe 听成“偷”，一把按住她的手，老板娘愣在原地。',
        afterCorrect: '陈默松开手，退到一边。苏晚刷完卡，把卡收好，很小声地说了一句：“这三年，都是我付。”'
      },
      {
        plotDescription: '回到家，陈默把外套一脱就躺倒在沙发上，说只睡一个小时。',
        line: "I am going to crash on the sofa for an hour. Wake me at noon.",
        lineCn: '我在沙发上躺一小时。中午叫我。',
        prompt: "根据上下文，选出画线词汇 'crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have a car accident', cn: '发生车祸', correct: false, reason: 'crash 有“撞车”的意思，但这里说的是睡觉。' },
          { key: 'B', en: 'to fall asleep quickly, usually anywhere', cn: '倒下就睡、随便找个地方睡', correct: true, reason: '躺沙发、睡一小时，就是 crash 的口语用法。' },
          { key: 'C', en: 'to break into pieces', cn: '碎成一地', correct: false, reason: '沙发没碎，人也只是躺下。' }
        ],
        analysis: 'crash 在口语里常指“累到一沾就睡”。陈默这三个月没睡过一个整觉，这一句其实比任何打斗都更让人心疼。',
        wrongFeedback: '你选错了，苏晚以为他要开车出去，追到门口问是不是出事了，把人硬拉回来。',
        afterCorrect: '结果他一觉睡到下午三点。醒来时身上盖着毯子，茶几上放着一杯还温着的水。'
      },
      {
        plotDescription: '傍晚，小满抱着球从楼下跑上来，问晚上要不要一起出去走走，就他们三个。',
        line: "Do you want to hang out with us tonight? No meetings, no business.",
        lineCn: '今晚想跟我们出去转转吗？不开会，也不谈生意。',
        prompt: "根据上下文，选出画线词汇 'hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to hang clothes outside', cn: '把衣服晾到外面', correct: false, reason: 'hang 是“挂”，但 hang out 是“一起玩”。' },
          { key: 'B', en: 'to wait for someone', cn: '等一个人', correct: false, reason: '这里是提议一起出去，不是等人。' },
          { key: 'C', en: 'to spend time together casually', cn: '一起闲逛、一起玩', correct: true, reason: '“不开会、不谈生意”就是纯玩，正是 hang out。' }
        ],
        analysis: 'hang out 是“随便待在一起”，没有目的性。小满特意补了一句“不谈生意”，是怕哥哥又忙。',
        wrongFeedback: '你选错了，小满以为哥哥在说晾衣服，抱着球跑去阳台，把球晾在了杆上。',
        afterCorrect: '陈默看了苏晚一眼，说：“去。”小满欢呼一声，冲下楼的速度比谁都快。'
      },
      {
        plotDescription: '夜市尽头有条旧长椅，三个人坐下来，苏晚说这一刻什么都不用想。',
        line: "For once, just kick back and let someone else worry about the mess.",
        lineCn: '就这一次，靠下来歇着，让别的去操心那一堆烂事。',
        prompt: "根据上下文，选出画线词汇 'kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to relax and do nothing', cn: '放松、靠下来歇着', correct: true, reason: '坐在长椅上、什么都不用想，就是 kick back。' },
          { key: 'B', en: 'to kick something with your foot', cn: '用脚踢东西', correct: false, reason: '这里没有踢任何东西，是休息。' },
          { key: 'C', en: 'to refuse to pay', cn: '拒绝付钱', correct: false, reason: '这跟钱没关系。' }
        ],
        analysis: 'kick back 是“彻底放松、什么都不干”，比 relax 更有“往后一靠”的画面感。陈默学得很快。',
        wrongFeedback: '你选错了，苏晚以为他在说踢东西，把脚边的易拉罐挪开，三个人都笑了。',
        afterCorrect: '陈默真的往后靠了靠，肩膀松下来。他看着夜市那排灯，说：“原来日子可以这样过。”'
      }
    ],
    completeText: '第 48 章结束。回去的路上，小满走在前面，苏晚在中间，陈默走在最后。路灯把三个影子拉得很长，像终于连成了一条线。'
  },
  {
    id: 'ml_49',
    index: 49,
    title: '第 49 章 · 该收尾的都收尾了',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周一上午，陈默把三份文件并排放在桌上：霍振邦的资产清单、赵家的转账记录、还有苏明哲签过字的单子。老周问他要不要一次全交出去，他摇头，说先分开，一件一件来。',
    questions: [
      {
        plotDescription: '顾长风打来电话，说上面只给一个上午的时间，问他还差多少。',
        line: "Give me two hours. I will wrap up this case before noon.",
        lineCn: '给我两个小时。中午之前我把这个案子收尾。',
        prompt: "根据上下文，选出画线词汇 'wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to cover something with paper', cn: '用纸包起来', correct: false, reason: 'wrap 是“包”，但 wrap up 在这里是“收尾结束”。' },
          { key: 'B', en: 'to finish something completely', cn: '收尾、把事情办完', correct: true, reason: '“中午之前”说明他说的是一个案子的结束时间。' },
          { key: 'C', en: 'to start a new plan', cn: '开始一个新计划', correct: false, reason: '方向相反，这里是结束。' }
        ],
        analysis: 'wrap up 是“把事收尾”，原意是“包好”。用在案子上，就是所有材料归位、人到位。',
        wrongFeedback: '你选错了，顾长风以为他要寄快递，把地址报了一遍，两边都愣了几秒。',
        afterCorrect: '陈默挂了电话，把三份文件按时间顺序排好：“先钱，后人，最后是苏家。”'
      },
      {
        plotDescription: '老周问他为什么不一起交，陈默指着最上面那张转账记录，说了这句。',
        line: "First we sort out the money. It is the only thing everyone understands.",
        lineCn: '先把钱理清楚。那是所有人都看得懂的东西。',
        prompt: "根据上下文，选出画线词汇 'sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to throw things away', cn: '把东西扔掉', correct: false, reason: 'sort out 是整理、理清，不是丢弃。' },
          { key: 'B', en: 'to choose a type of paper', cn: '挑一种纸', correct: false, reason: 'sort 有“分类”，但这里是理清账目。' },
          { key: 'C', en: 'to organize or resolve something messy', cn: '理清、把乱的东西弄明白', correct: true, reason: '一堆转账记录要理清，正是 sort out。' }
        ],
        analysis: 'sort out 既可指“整理物品”，也可指“解决麻烦、把关系理清”。陈默选先动钱，是因为钱最难赖。',
        wrongFeedback: '你选错了，老周把转账记录当成废纸收拾掉一半，陈默花了一上午才重新拼回来。',
        afterCorrect: '中午十一点，赵家的账户被冻结。赵天豪打来电话，第一句就是：“你想要多少？”'
      },
      {
        plotDescription: '赵天豪在电话里开价，说只要放过赵家，数字随便填。陈默看着窗外，说了一句。',
        line: "I will deal with you myself. No lawyers, no middlemen.",
        lineCn: '我亲自来处理你。不要律师，也不要中间人。',
        prompt: "根据上下文，选出画线词汇 'deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'to handle or take care of something', cn: '处理、应对、解决', correct: true, reason: '“不要律师不要中间人”，说明他要自己来处理这件事。' },
          { key: 'B', en: 'to make a business deal', cn: '做一笔生意', correct: false, reason: 'deal 有“交易”的意思，但 deal with 是“处理”。' },
          { key: 'C', en: 'to share something fairly', cn: '公平地分配', correct: false, reason: '这里没有分配，是追责。' }
        ],
        analysis: 'deal with 有两个常见意思：处理问题、对付某人。陈默这句两义都在——他要处理这件事，也要处理这个人。',
        wrongFeedback: '你选错了，赵天豪以为他要谈生意，带着合同来了，会议室里坐着三个记者和两个警察。',
        afterCorrect: '陈默把手机放下，对老周说：“他以为我要钱。”他起身拿外套，“我要的是他在里面待够年头。”'
      },
      {
        plotDescription: '下午，雷豹在楼下喊兄弟们还等着下一步，陈默摆摆手，让大家先回去。',
        line: "Tell your people to chill out. It is over. Go home and sleep.",
        lineCn: '让你的人放松点。结束了。回家睡觉去。',
        prompt: "根据上下文，选出画线词汇 'chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make something cold', cn: '把东西弄凉', correct: false, reason: 'chill 有“冷”的意思，但 chill out 是“放松下来”。' },
          { key: 'B', en: 'to calm down and relax', cn: '放松、别紧张', correct: true, reason: '后面紧接“结束了，回家睡觉”，就是让大家松下来。' },
          { key: 'C', en: 'to leave a place angrily', cn: '生气地离开', correct: false, reason: '这里不是生气，是解散。' }
        ],
        analysis: 'chill out 是“别绷着了、放松”，比 relax 更口语。陈默说完这句，自己先松了一口气。',
        wrongFeedback: '你选错了，雷豹以为要降温，跑去把空调开到最低，八个人在冷风里坐着等指令。',
        afterCorrect: '雷豹骂了一句“早说”，带着人走了。走之前他回头：“明天还来吗？”陈默说：“明天我做饭。”'
      }
    ],
    completeText: '第 49 章结束。傍晚，办公室只剩陈默一个人。他把三份文件锁进抽屉，第一件事不是庆祝，是给苏晚发了一条消息：今晚我回家吃饭。'
  },
  {
    id: 'ml_50',
    index: 50,
    title: '第 50 章 · 落幕之后，是家常',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '半年后的一个傍晚，苏家老宅重新开了门。桌上摆着四菜一汤，苏振海第一次给陈默倒酒。窗外停车的声音一阵接一阵，老周、雷豹、韩青一个不落地都来了。',
    questions: [
      {
        plotDescription: '饭还没开始，小满已经拆开一袋薯片，被苏晚伸手按住。',
        line: "Put the snack down. Dinner is in ten minutes, and you will eat all of it.",
        lineCn: '把零食放下。十分钟就开饭，你得把饭全吃完。',
        prompt: "根据上下文，选出画线词汇 'snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a full formal meal', cn: '一顿正式的饱饭', correct: false, reason: 'snack 是零食、小食，正餐在十分钟后才开始。' },
          { key: 'B', en: 'a kind of drink', cn: '一种饮料', correct: false, reason: '她手里是薯片，是吃的。' },
          { key: 'C', en: 'a small amount of food between meals', cn: '零食、正餐之间的小食', correct: true, reason: '饭前被抓、薯片一袋，这就是 snack。' }
        ],
        analysis: 'snack 是“正餐之间的小食”，作动词还能表示“随便吃点”。苏晚按住它的动作，和三年前按住那封退婚书的手势一模一样。',
        wrongFeedback: '你选错了，小满以为姐姐在夸零食好吃，又拆了一袋，苏晚把两袋一起收走了。',
        afterCorrect: '小满捂着口袋退到一边：“我只吃一片。”陈默从她兜里又摸出一包：“这片有点大。”'
      },
      {
        plotDescription: '雷豹一进门就喊渴，陈默从冰箱里拿出几瓶水丢过去，说了句。',
        line: "Hydrate first. You have been driving for six hours straight.",
        lineCn: '先补水。你已经一口气开了六个小时的车。',
        prompt: "根据上下文，选出画线词汇 'hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to supply water to the body', cn: '补充水分、喝水', correct: true, reason: '开箱拿水、丢过去，正是让人补水。' },
          { key: 'B', en: 'to eat a heavy meal', cn: '吃一顿很饱的饭', correct: false, reason: '这里给的是水，不是饭。' },
          { key: 'C', en: 'to take a long shower', cn: '洗个很久的澡', correct: false, reason: '他刚进门，还没去洗澡。' }
        ],
        analysis: 'hydrate 是“补充水分”，医学和运动场景都常用。这句话原本是韩青的口头禅，现在被陈默学去了。',
        wrongFeedback: '你选错了，雷豹以为要洗澡，直接往浴室走，被韩青拎了回来。',
        afterCorrect: '雷豹灌了半瓶，抹了把嘴：“还是你记得。”陈默说：“你每次跑长途都忘。”'
      },
      {
        plotDescription: '饭前，韩青让大家站起来活动一下，说坐了太久腰都硬了。',
        line: "Stand up and stretch. All of you sit like old men now.",
        lineCn: '站起来伸个懒腰。你们现在坐得跟老头一样。',
        prompt: "根据上下文，选出画线词汇 'stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to eat as much as possible', cn: '尽量吃很多', correct: false, reason: '他说的是站起来动，不是吃。' },
          { key: 'B', en: 'to extend your body or limbs', cn: '伸展身体、拉伸', correct: true, reason: '“坐太久腰硬了”，所以让站起来伸展。' },
          { key: 'C', en: 'to make something longer in time', cn: '把时间拉长', correct: false, reason: 'stretch 有“延长”的义项，但这里是动身体。' }
        ],
        analysis: 'stretch 是“伸展”，既能说拉伸肌肉，也能说“时间、资源被拉长”。这句话是三年前部队里的原话。',
        wrongFeedback: '你选错了，大家以为他说要多待一会儿，全都重新坐下，韩青举着手站在原地。',
        afterCorrect: '八个人真在客厅里站成一排伸胳膊，苏晚端着菜出来，站在门口看了半天，笑出了声。'
      },
      {
        plotDescription: '饭后，苏振海坐在藤椅上打盹，电视还开着，陈默替他盖了条毯子。',
        line: "He is zoning out again. Just let him. He has earned it.",
        lineCn: '他又在发呆了。让他去吧。这是他应得的。',
        prompt: "根据上下文，选出画线词汇 'zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to become very angry', cn: '变得非常生气', correct: false, reason: '老人在打盹，不是发火。' },
          { key: 'B', en: 'to leave the room quietly', cn: '悄悄离开房间', correct: false, reason: '他一直坐在藤椅上，没走。' },
          { key: 'C', en: 'to stop paying attention, to stare blankly', cn: '走神、发呆、注意力放空', correct: true, reason: '电视开着人却不动，就是 zone out。' }
        ],
        analysis: 'zone out 是“放空、走神”，不带贬义。陈默用了“他应得的”这四个字，等于替这三年画了句号。',
        wrongFeedback: '你选错了，苏晚以为爷爷生气了，赶紧过去道歉，老人被叫醒，一脸茫然。',
        afterCorrect: '苏晚把电视音量调小，靠在陈默肩上：“半年前，我以为这个家要散了。”陈默说：“现在呢？”她没有回答，只是没有起身。'
      }
    ],
    completeText: '第 50 章结束。夜里十点，人一个个走了。陈默关灯前回头看了一眼客厅：桌上还留着半盘水果，毯子掉在藤椅边，日子安静得不像真的。'
  }
];
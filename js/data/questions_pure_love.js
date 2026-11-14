window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.pure_love = [
  {
    id: 'pl_1',
    index: 1,
    title: '第 1 章 · 十年后的第一面',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '急诊科凌晨换班，温以宁摘下手套，听见走廊尽头有人叫“周主任”。她抬头，看见白大褂、旧球鞋，还有那双十年没变的眼睛。周叙也停住了，手里还捏着没拆封的咖啡。',
    questions: [
      {
        plotDescription: '交班后周叙随口问她要不要一起吃早饭，温以宁低头看了眼手机余额，笑得有点勉强。',
        line: "Maybe next time. I'm completely broke until payday.",
        lineCn: '下次吧。发工资之前我已经身无分文了。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money', cn: '身无分文', correct: true, reason: '手机余额加上“发工资前”，说的是手头一分钱都没有。' },
          { key: 'B', en: 'injured', cn: '受伤的', correct: false, reason: 'broke 虽可指骨折，但这里她谈的是余额，不是身体。' },
          { key: 'C', en: 'broken', cn: '坏掉的', correct: false, reason: '拼写像 break 的过去式，可形容人时指的是没钱。' }
        ],
        analysis: '温以宁用自嘲挡掉了邀约。broke 形容人时永远指“没钱”，和后半句“发工资”正好对上。',
        wrongFeedback: '她把自己说成“受伤了”，周叙眉头一皱，气氛顿时更僵。',
        afterCorrect: '周叙没笑她，只把手里那杯没拆封的咖啡放到她桌上：“那就先欠着，等发工资再请我。”温以宁低下头，耳尖有点热。'
      },
      {
        plotDescription: '护士站的白板写着这个月的排班，温以宁一边算日子，一边跟同事抱怨住处涨价。',
        line: "My rent went up again. I might have to move closer to the hospital.",
        lineCn: '我的房租又涨了，可能得搬到离医院近一点的地方。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'a car payment', cn: '车贷', correct: false, reason: '她说的是住的地方，和每个月还车钱没有关系。' },
          { key: 'B', en: 'a hospital bill', cn: '医院账单', correct: false, reason: '她正在考虑搬家，不是在看病花钱，语境对不上。' },
          { key: 'C', en: 'money paid monthly for housing', cn: '每月付的房租', correct: true, reason: '涨价、搬家都指向住处，rent 就是租房的钱。' }
        ],
        analysis: '排班表、涨价、搬家三个线索都指向住处开销，rent 在生活口语里几乎只作“房租”讲。',
        wrongFeedback: '她把房租听成了车贷，跟同事越说越乱，最后自己先红了脸。',
        afterCorrect: '周叙在拐角听见了，第二天把一份医院附近的租房信息压在她键盘下，便利贴上只写了两个字：看看。'
      },
      {
        plotDescription: '温以宁把那张租房信息折好收进抽屉，嘴上却说这个月已经不能再花钱了。',
        line: "I can't look at new places. My budget for this month is already gone.",
        lineCn: '我不能再看新房子了，这个月的预算早就花光了。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a plan for how much to spend', cn: '预算', correct: true, reason: '她说“已经花光”，指的是自己事先算好的花销上限。' },
          { key: 'B', en: 'a list of patients', cn: '病人名单', correct: false, reason: '预算和病人名单不是一回事，这里没有名单的语境。' },
          { key: 'C', en: 'a kind of insurance', cn: '一种保险', correct: false, reason: '保险要投保，不会用“花光”来形容，语义不搭。' }
        ],
        analysis: 'budget 指事先算好的花钱上限。她说这个月已经花光，说明那是她给自己定的月度开销计划。',
        wrongFeedback: '她答成“病人名单”，周叙愣了一下，以为她累到说胡话了。',
        afterCorrect: '周叙没拆穿她的逞强，只把食堂的饭卡塞过去：“先借你，利息是一顿晚饭。”'
      },
      {
        plotDescription: '周五发了夜班补贴，温以宁难得没算账，直接在网上下单了一双很贵的跑鞋。',
        line: "I splurged on running shoes. Don't judge me — my feet deserve it.",
        lineCn: '我奢侈了一把，买了双跑鞋。别评判我，我的脚值得。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'saved money carefully', cn: '精打细算', correct: false, reason: '她刚花了一大笔，还叫别人别评判，和节省正相反。' },
          { key: 'B', en: 'spent a lot on a treat', cn: '为心头好大手笔花钱', correct: true, reason: '发补贴、买贵鞋、别评判，都说明她破例挥霍了一次。' },
          { key: 'C', en: 'returned something', cn: '退货', correct: false, reason: '她是在下单买东西，不是把东西退回去。' }
        ],
        analysis: '发补贴、买贵跑鞋、“别评判我”，说明她破例花了笔大钱。splurge 就是偶尔放纵地挥霍一次。',
        wrongFeedback: '她把自己说成“精打细算”，周叙看着她脚上那双新鞋，笑出了声。',
        afterCorrect: '周叙低头看了看鞋盒：“颜色不错。”停了一下又补一句：“下次别一个人去，我帮你挑。”'
      }
    ],
    completeText: '那杯咖啡最后凉在桌上，谁也没喝。温以宁回到值班室，才发现自己一整个早上都在想同一件事：他好像，也没有忘记她。'
  },
  {
    id: 'pl_2',
    index: 2,
    title: '第 2 章 · 白大褂下的旧名字',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '早会上，周叙站在投影前讲新的分诊流程，声音比高中时低了些。温以宁坐在最后一排，盯着他胸牌上的名字，笔尖在纸上戳出一个小洞。散会时他忽然说：“温医生，留一下。”',
    questions: [
      {
        plotDescription: '走廊里，周叙提起医院门口那家咖啡店，说一杯美式卖三十八块。',
        line: "Thirty-eight for an Americano? That's a rip-off.",
        lineCn: '一杯美式三十八？这也太坑了。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a good deal', cn: '划算的买卖', correct: false, reason: '他明明在嫌贵，说“划算”就把语气整个弄反了。' },
          { key: 'B', en: 'a free sample', cn: '免费试喝', correct: false, reason: '三十八块是要付钱的，和免费试喝没有关系。' },
          { key: 'C', en: 'way overpriced', cn: '价格离谱的坑钱货', correct: true, reason: '一杯普通美式卖到三十八，rip-off 就是明摆着坑人。' }
        ],
        analysis: '三十八块一杯美式让他直接吐槽，rip-off 指东西不值这个价、摆明了宰客。',
        wrongFeedback: '他答成“划算”，温以宁忍不住笑：“周主任，你家钱是大风刮来的？”',
        afterCorrect: '温以宁没接话，只从口袋里摸出一张旧会员卡：“那家店，我从来不办卡。”'
      },
      {
        plotDescription: '说起科室里总有人蹭办公室的空调和热水，周叙摇着头笑。',
        line: "That guy's a total freeloader — he's been drinking our coffee for a week.",
        lineCn: '那人就是个纯白嫖的，蹭我们咖啡都蹭一个星期了。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who takes without paying', cn: '白吃白拿的人', correct: true, reason: '白喝一周咖啡不付钱，正是占便宜不出钱的人。' },
          { key: 'B', en: 'a new intern', cn: '新来的实习生', correct: false, reason: '实习生只是身份，这里强调的是白拿不付钱。' },
          { key: 'C', en: 'a coffee supplier', cn: '咖啡供应商', correct: false, reason: '供应商是来送咖啡收钱的，和蹭喝完全相反。' }
        ],
        analysis: '白喝一周咖啡、不付钱，freeloader 专门形容这种占别人便宜、从不掏钱的人。',
        wrongFeedback: '他答成“实习生”，温以宁挑眉：“实习生可没这么理直气壮。”',
        afterCorrect: '周叙被她逗得笑了一下，十年没见，他笑起来还是先弯眼睛。'
      },
      {
        plotDescription: '温以宁提起前几天有人冒充医院人事发短信，收“入职保证金”。',
        line: "It was a total scam. They even used our hospital's logo.",
        lineCn: '那完全是个骗局，他们连我们医院的标志都用了。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a charity event', cn: '慈善活动', correct: false, reason: '慈善不会收入职保证金，更不会盗用医院标志。' },
          { key: 'B', en: 'a trick to steal money', cn: '骗钱的骗局', correct: true, reason: '冒充人事收钱、盗用标志，全都是骗钱的套路。' },
          { key: 'C', en: 'a new policy', cn: '新政策', correct: false, reason: '医院政策不会用私人短信收费，明显是冒充的。' }
        ],
        analysis: '冒充人事、收保证金、盗用院徽，这些都是骗钱的套路，scam 就是骗局。',
        wrongFeedback: '他答成“新政策”，温以宁叹气：“周主任，你这样迟早被骗。”',
        afterCorrect: '周叙收起笑，认真记下那条短信的号码：“发我一份，我去报备。”'
      },
      {
        plotDescription: '说到医学院的学费，周叙难得地沉默了一会儿。',
        line: "I spent my twenties paying off debt. Med school isn't cheap.",
        lineCn: '我二十多岁都在还债。学医可不便宜。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you owe', cn: '欠下的债', correct: true, reason: '学费贵、要还钱，debt 就是欠别人、需要偿还的钱。' },
          { key: 'B', en: 'a scholarship', cn: '奖学金', correct: false, reason: '奖学金是拿到的钱，不会用“还”这个动词。' },
          { key: 'C', en: 'a monthly bonus', cn: '月度奖金', correct: false, reason: '奖金是收入，和“还清”搭配完全说不通。' }
        ],
        analysis: '学费贵、要还钱，debt 指欠别人的钱；pay off debt 就是“还清债务”。',
        wrongFeedback: '他答成“奖学金”，温以宁看了他一眼，没戳破那句“还”。',
        afterCorrect: '温以宁想说“我也是”，话到嘴边，变成了：“那现在，还清了吗？”'
      }
    ],
    completeText: '他点头，又摇头：“还清了钱，没还清别的。”走廊的灯忽然灭了半排，两个人都没动，谁也没去按开关。'
  },
  {
    id: 'pl_3',
    index: 3,
    title: '第 3 章 · 假装不认识',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '医院食堂，两人端着餐盘面对面坐下，像两个被迫拼桌的陌生人。温以宁低头吃饭，周叙忽然问：“高中那个总忘带饭卡的女生，是你吧？”她筷子一顿：“周主任认错人了。”',
    questions: [
      {
        plotDescription: '周叙说请她吃饭，温以宁摆手，说自己的钱还没到账。',
        line: "Let me get this one. My paycheck came in yesterday.",
        lineCn: '这次我请。我昨天刚发薪水。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written prescription', cn: '处方', correct: false, reason: '处方是医生写的药单，和“到账、请客”毫无关系。' },
          { key: 'B', en: 'a work schedule', cn: '排班表', correct: false, reason: '排班表不会“到账”，也不能拿来付饭钱。' },
          { key: 'C', en: 'the money you earn from work', cn: '工作挣的薪水', correct: true, reason: '刚到手、能请客，paycheck 在这里代指发下来的工资。' }
        ],
        analysis: '请客、刚到手，paycheck 本义是工资单，口语里直接代指“发到手的薪水”。',
        wrongFeedback: '她答成“处方”，周叙差点被饭噎到：“你拿处方请我吃饭？”',
        afterCorrect: '温以宁还是被他说得没法拒绝，小声嘟囔：“那我下次还你。”'
      },
      {
        plotDescription: '食堂电视在播水电涨价的新闻，温以宁叹了口气，说这个月开销太多。',
        line: "The bills are piling up again. Electricity, water, and my phone.",
        lineCn: '账单又堆成山了。电费、水费，还有手机费。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'medical records', cn: '病历', correct: false, reason: '电费水费不是病历，这里说的是要付的钱。' },
          { key: 'B', en: 'statements you have to pay', cn: '要付的账单', correct: true, reason: '水电手机三项都是开销，bills 就是该付的账单。' },
          { key: 'C', en: 'hospital beds', cn: '病床', correct: false, reason: '病床不会“堆成山”，也不会连着手机费一起说。' }
        ],
        analysis: '电费水费手机费，piling up 是“越堆越多”，bills 就是一张张等着付的账单。',
        wrongFeedback: '她答成“病历”，周叙看了她一眼：“温医生，你这是职业病。”',
        afterCorrect: '周叙把自己那份汤推过去：“少点外卖，账单就少了。”她没抬头，勺子在汤里转了一圈。'
      },
      {
        plotDescription: '结账时机器坏了，周叙翻遍口袋，只摸出几张皱掉的纸币。',
        line: "The card machine is down. Do you have any cash on you?",
        lineCn: '刷卡机坏了。你身上有现金吗？',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'paper money', cn: '现金', correct: true, reason: '刷卡机坏了才要找另一种付款方式，cash 就是现钞。' },
          { key: 'B', en: 'a bank card', cn: '银行卡', correct: false, reason: '刷卡机都坏了，再问银行卡就没有意义了。' },
          { key: 'C', en: 'a coupon', cn: '优惠券', correct: false, reason: '优惠券不能替代付款，和机器坏了的语境无关。' }
        ],
        analysis: '刷卡机坏了才要找替代的付钱方式，cash 指能直接递出去的实体现金。',
        wrongFeedback: '她答成“银行卡”，周叙无奈地晃了晃手里那几张纸币。',
        afterCorrect: '温以宁从白大褂内袋摸出一张五十，动作熟练得像做过很多次：“我请你。”'
      },
      {
        plotDescription: '走出食堂，周叙接了个电话，挂了以后说自己在办房子的事。',
        line: "The bank approved my loan. I'm buying a place near the hospital.",
        lineCn: '银行批了我的贷款，我要在医院附近买套房。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lease contract', cn: '租约', correct: false, reason: '租来的房子不需要银行审批，买房才要。' },
          { key: 'B', en: 'a savings account', cn: '储蓄账户', correct: false, reason: '储蓄账户是自己存钱，和银行批钱给你相反。' },
          { key: 'C', en: 'money borrowed from a bank', cn: '向银行借的贷款', correct: true, reason: '买房、银行审批，loan 就是借来按月偿还的钱。' }
        ],
        analysis: '买房、银行批款，loan 就是借来的钱，需要按月连本带息还回去。',
        wrongFeedback: '她答成“租约”，周叙顿了顿：“租的房，不用银行批。”',
        afterCorrect: '温以宁“哦”了一声，走了几步才反应过来：他说的是“附近”。'
      }
    ],
    completeText: '回科室的路上，她走得很慢。十年了，她以为自己早就把那个人放进“过去”里，可他一句“附近”，又把她拉回来了。'
  },
  {
    id: 'pl_4',
    index: 4,
    title: '第 4 章 · 急诊科的深夜',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '凌晨两点，救护车一辆接一辆。温以宁连着处理了三个病人，白大褂前襟沾了血。周叙从手术室出来，把一瓶常温水递给她，她仰头灌了半瓶。',
    questions: [
      {
        plotDescription: '休息间隙，温以宁笑他连水都挑最省钱的那种。',
        line: "You always buy the cheap water. You're a department head now.",
        lineCn: '你老买最便宜的水。你现在都是主任了。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'expensive', cn: '昂贵的', correct: false, reason: '她说“都当主任了还这样”，显然是在嫌他买得便宜。' },
          { key: 'B', en: 'low in price', cn: '价格便宜的', correct: true, reason: '她拿主任的身份作对比，说的是水卖得便宜。' },
          { key: 'C', en: 'ice-cold', cn: '冰镇的', correct: false, reason: '那可是常温水，和冰凉不冰凉没有关系。' }
        ],
        analysis: '她在说他买的牌子便宜，不是温度也不是贵。cheap 形容商品时就是“价格低”。',
        wrongFeedback: '他答成“冰镇的”，温以宁举着常温的瓶子看他：“你摸摸，冰吗？”',
        afterCorrect: '周叙拧开自己那瓶：“水而已，能喝就行。”顿了顿，“钱要花在别的地方。”'
      },
      {
        plotDescription: '她说起想报个进修班，看到价格又默默关掉了页面。',
        line: "I really want that course, but I can't afford it right now.",
        lineCn: '我特别想上那个课，但现在负担不起。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'have enough money for', cn: '负担得起', correct: true, reason: '看到价格就关页面，卡住她的是钱，不是时间。' },
          { key: 'B', en: 'find time for', cn: '抽得出时间', correct: false, reason: '她没提排班，只说价格，说明问题不在时间。' },
          { key: 'C', en: 'be qualified for', cn: '有资格', correct: false, reason: '报名资格和钱无关，这里明显是被价格劝退。' }
        ],
        analysis: '看到价格就关掉页面，说明卡在费用上。afford 指经济上承担得起。',
        wrongFeedback: '她答成“抽得出时间”，周叙反问：“那你为什么不报名？”',
        afterCorrect: '周叙没多说，只问了一句课程名字，低头记在了手机备忘录里。'
      },
      {
        plotDescription: '天快亮时，那个车祸少年终于脱离危险，家属在门口哭着道谢。',
        line: "Six hours in there, but seeing him wake up — totally worth it.",
        lineCn: '在里面站了六个小时，可看他醒过来，真的值了。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'too expensive', cn: '太贵了', correct: false, reason: '这句在讲抢救，不是在花钱，跟贵不贵无关。' },
          { key: 'B', en: 'a waste of time', cn: '浪费时间', correct: false, reason: '病人醒了、家属道谢，显然不是白费功夫。' },
          { key: 'C', en: 'deserving the effort', cn: '值得付出的', correct: true, reason: '六小时很累，但人醒了，说明付出得到了回报。' }
        ],
        analysis: '六小时很累，但病人醒了过来，worth it 表示这份付出是值得的。',
        wrongFeedback: '他答成“浪费时间”，温以宁看他一眼：“那六个小时你白站了？”',
        afterCorrect: '周叙靠在墙上闭了闭眼，嘴角是松下来的弧度：“这句话，我十年没听过了。”'
      },
      {
        plotDescription: '温以宁说自己周末在网上给医学生做辅导，赚点额外的钱。',
        line: "It's just a side hustle. I teach med students on weekends.",
        lineCn: '就是个副业，我周末给医学生上课。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a full-time job', cn: '全职工作', correct: false, reason: '她只有周末做，还说“就是个”，显然不是主业。' },
          { key: 'B', en: 'extra work for extra money', cn: '赚外快的副业', correct: true, reason: '周末额外上课、赚点钱，正是主业之外的副业。' },
          { key: 'C', en: 'a hobby', cn: '爱好', correct: false, reason: '她明确说是为了赚钱，不只是图个喜欢。' }
        ],
        analysis: '周末、额外收入，side hustle 指主业之外用来赚钱的第二份活。',
        wrongFeedback: '她答成“全职”，周叙笑：“你哪来的时间全职两份？”',
        afterCorrect: '“教什么？”他问。“解剖。”她说。周叙沉默两秒：“那我当年要是补课，是不是就……”'
      }
    ],
    completeText: '她没让他说完，转身去接新的病人。心跳声太响，她怕他听见。'
  },
  {
    id: 'pl_5',
    index: 5,
    title: '第 5 章 · 同学群里的消息',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '下了夜班，温以宁在更衣室看到高中同学群炸了——有人组织十周年聚会，还@了全班。她盯着那个熟悉的名字看了很久，最后只回了一个“尽量”。',
    questions: [
      {
        plotDescription: '群里有人晒出当年的实习合同，感叹那阵子挣得太少。',
        line: "I worked for minimum wage that whole summer. Never again.",
        lineCn: '那个夏天我拿最低工资干了一整季。再也不干了。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest legal pay', cn: '法定最低工资', correct: true, reason: '干了一夏天、钱少到不想再来，就是最低的那档报酬。' },
          { key: 'B', en: 'a big bonus', cn: '高额奖金', correct: false, reason: '奖金高就不会说“再也不干了”，语气完全相反。' },
          { key: 'C', en: 'unpaid training', cn: '无薪培训', correct: false, reason: '他说的是拿了工资但很低，不是一分钱没有。' }
        ],
        analysis: '干了一夏天、钱少到不想再来，minimum wage 是法律规定的报酬下限。',
        wrongFeedback: '她答成“高额奖金”，群里的话题瞬间被她带歪了。',
        afterCorrect: '温以宁看着屏幕笑了笑，想起自己实习那年，也是靠着最少的钱撑过来的。'
      },
      {
        plotDescription: '有人私聊她借钱，说卡已经刷爆，还欠着一笔费用。',
        line: "I hit an overdraft again. The fee is killing me.",
        lineCn: '我又透支了，手续费快把我压死了。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a salary raise', cn: '涨薪', correct: false, reason: '涨薪是好事，不会让人被手续费压得喘不过气。' },
          { key: 'B', en: 'a savings plan', cn: '储蓄计划', correct: false, reason: '储蓄是存钱，刷爆卡是另一回事，语义相反。' },
          { key: 'C', en: 'spending more than you have', cn: '花超了账户余额', correct: true, reason: '卡刷爆、还要交手续费，正是把账户花成了负数。' }
        ],
        analysis: '卡刷爆、还要交手续费，overdraft 指账户被花超、形成透支。',
        wrongFeedback: '她答成“涨薪”，对方发来一串问号，她赶紧撤回。',
        afterCorrect: '她转了两百过去，附一句：“先吃饭，别硬撑。”'
      },
      {
        plotDescription: '群里聊到聚会AA，温以宁说自己最近能不花就不花。',
        line: "I'm trying to save up for something. Count me out of the fancy dinner.",
        lineCn: '我在攒钱买点东西，那顿贵的就不算我了。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend freely', cn: '随便花', correct: false, reason: '她刚拒绝了贵餐厅，明显是在省，不是随便花。' },
          { key: 'B', en: 'put money aside', cn: '攒钱', correct: true, reason: '不去贵餐厅、要为某件事存钱，正是把钱一点点留下。' },
          { key: 'C', en: 'borrow money', cn: '借钱', correct: false, reason: '攒钱是自己的钱慢慢积累，不是向别人借。' }
        ],
        analysis: '不去贵餐厅、要“攒”，save up 是把钱一点点存起来，为某个目标做准备。',
        wrongFeedback: '她答成“随便花”，群里立刻有人起哄让她请客。',
        afterCorrect: '有人问她攒钱做什么，她打了半天字，最后删掉，只发了个笑脸。'
      },
      {
        plotDescription: '老同学在群里推销理财，说年轻人要早点学会把钱投出去。',
        line: "You should invest in yourself before you invest in stocks.",
        lineCn: '在投股票之前，你该先投资自己。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money into something for return', cn: '投入以换取回报', correct: true, reason: '前后两个 invest 对照，都是把资源投进去换长期回报。' },
          { key: 'B', en: 'spend money on food', cn: '花钱吃饭', correct: false, reason: '投资自己和吃饭不是一回事，句子里也没有食物。' },
          { key: 'C', en: 'give money away', cn: '把钱送人', correct: false, reason: '投资是期待回报，白送出去可没有回报。' }
        ],
        analysis: '前后两个 invest 形成对照，前者是投资自己，指把资源投进去换取长期回报。',
        wrongFeedback: '她答成“把钱送人”，对方半天没回，气氛一度很安静。',
        afterCorrect: '温以宁把这句话截图存了下来，备注写着：那我也算，投资了十年。'
      }
    ],
    completeText: '手机屏幕暗下去，映出她自己的脸。十年，说长不长，说短不短，够一个人把暗恋过成习惯。'
  },
  {
    id: 'pl_6',
    index: 6,
    title: '第 6 章 · 聚会上的空座位',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '聚会定在周六晚上，一家不算贵的餐厅。温以宁到得早，坐在靠窗的位置，右手边空着一把椅子。七点整，门被推开，周叙穿着深灰毛衣走进来，目光在屋里转了一圈，落在她旁边。',
    questions: [
      {
        plotDescription: '点单时有人抱怨这家店加收服务费，还要另外算一笔钱。',
        line: "The price on the menu doesn't include tax. Classic.",
        lineCn: '菜单上的价格不含税。老套路了。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'a service charge', cn: '服务费', correct: false, reason: '句子里已经另说了服务费，tax 是另一笔交给政府的钱。' },
          { key: 'B', en: 'a discount', cn: '折扣', correct: false, reason: '折扣会让价格变低，这里是要额外加钱。' },
          { key: 'C', en: 'money paid to the government', cn: '交给政府的税', correct: true, reason: '菜单价之外另加的那笔钱，就是消费税。' }
        ],
        analysis: '菜单价之外另加的钱是税，tax 和政府征收有关，和服务费、折扣不是一回事。',
        wrongFeedback: '他答成“服务费”，旁边同学笑：“周叙，你留学白去了？”',
        afterCorrect: '温以宁低头抿水，掩住嘴角那点笑——他以前就是这样，认真到有点笨。'
      },
      {
        plotDescription: '上的菜太咸，服务员说可以重做，也可以把钱退回来。',
        line: "If it's that bad, just ask for a refund.",
        lineCn: '要是真那么难吃，就要求退款。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'a free dessert', cn: '免费甜点', correct: false, reason: '他说的是把钱要回来，不是换一份甜点。' },
          { key: 'B', en: 'money back for a bad product', cn: '退回的钱', correct: true, reason: '菜太咸、不想重做，refund 就是把付的钱退回来。' },
          { key: 'C', en: 'a second order', cn: '再点一份', correct: false, reason: '重做和退款是两回事，refund 强调钱回到手里。' }
        ],
        analysis: '菜太咸，可以重做也可以退钱。refund 指把已经付的钱要回来。',
        wrongFeedback: '他答成“免费甜点”，服务员真的端来一份，全场笑成一片。',
        afterCorrect: '温以宁小声说：“你还是这么不会吵架。”周叙侧过头：“那你教教我。”'
      },
      {
        plotDescription: '结账时，组织者让每个人留好小票，回去好分摊。',
        line: "Keep the receipt. We can split it later.",
        lineCn: '把收据留好，回头我们分摊。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'proof of payment', cn: '付款凭证/收据', correct: true, reason: '留着好分摊、好算账，receipt 就是记录付款的凭证。' },
          { key: 'B', en: 'a menu', cn: '菜单', correct: false, reason: '菜单上没有付过的金额，没法用来分摊。' },
          { key: 'C', en: 'a reservation slip', cn: '预订单', correct: false, reason: '预订单是订位用的，结完账要留的是付款凭证。' }
        ],
        analysis: '留着好分摊、报销，receipt 是记录这笔付款的收据，上面有金额和明细。',
        wrongFeedback: '他答成“菜单”，组织者看着他：“菜单能报销吗？”',
        afterCorrect: '周叙把自己那张叠好，顺手也把温以宁的收进了口袋。'
      },
      {
        plotDescription: '服务员全程很周到，临走时大家商量要不要多给一点。',
        line: "She was great tonight. Let's leave a decent tip.",
        lineCn: '她今晚服务很好，我们留点像样的小费吧。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'a complaint', cn: '投诉', correct: false, reason: '服务很好还要投诉，和前半句的夸奖自相矛盾。' },
          { key: 'B', en: 'extra money for good service', cn: '给服务员的赏钱', correct: true, reason: '因为服务好才留钱，tip 就是额外给服务员的小费。' },
          { key: 'C', en: 'a phone number', cn: '电话号码', correct: false, reason: '留号码和感谢服务没关系，语境完全不对。' }
        ],
        analysis: '服务好、额外给钱，tip 就是顾客给服务员的小费，是对服务的额外感谢。',
        wrongFeedback: '他答成“投诉”，温以宁赶紧按住他的手：“别，人家服务挺好的。”',
        afterCorrect: '周叙把钱压在杯底，抬眼问她：“送你回去？”她说：“不用。”脚步却没动。'
      }
    ],
    completeText: '最后是他撑开伞，两个人挤在一把伞下走了半条街。谁都没提十年，谁都没提那把空椅子。'
  },
  {
    id: 'pl_7',
    index: 7,
    title: '第 7 章 · 谁先举的杯',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '聚会上聊起工作，当年的班长已经开了公司，举着杯子说自己今年招了一批新人。有人问周叙怎么从住院医熬到主任，他只说了一句：“熬着。”',
    questions: [
      {
        plotDescription: '班长拍着周叙的肩，说只要他愿意来自己的私立医院，随时都能安排。',
        line: "Say the word and I'll hire you tomorrow. Name your price.",
        lineCn: '你点个头，我明天就雇你。价钱你开。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'give someone a job', cn: '雇用', correct: true, reason: '“明天就来上班、价钱你开”，hire 就是给工作、雇人。' },
          { key: 'B', en: 'fire someone', cn: '解雇', correct: false, reason: '开价请人过去，是招人不是赶人，方向正相反。' },
          { key: 'C', en: 'promote someone', cn: '提拔', correct: false, reason: '提拔是内部升职，这里说的是让他跳槽过来。' }
        ],
        analysis: '“明天就来上班、价钱你开”，hire 是给工作、把某人招进来。',
        wrongFeedback: '她答成“解雇”，一桌人安静了一秒，然后笑得更大声。',
        afterCorrect: '周叙端着杯没接话，只笑：“我走了，急诊科谁值夜班。”'
      },
      {
        plotDescription: '有人说起自己公司裁员，一个老员工因为迟到被直接赶走。',
        line: "They fired him for being late three times. No warning.",
        lineCn: '迟到三次就把他解雇了，连警告都没有。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'promoted him', cn: '提拔了他', correct: false, reason: '迟到三次不可能升职，逻辑上说不通。' },
          { key: 'B', en: 'warned him', cn: '警告了他', correct: false, reason: '后面明说“连警告都没有”，所以不是警告。' },
          { key: 'C', en: 'dismissed him from the job', cn: '把他辞退了', correct: true, reason: '迟到三次、没有警告就直接让人走，fire 就是解雇。' }
        ],
        analysis: '迟到三次直接走人，fire 是雇主辞退员工，比警告严重得多。',
        wrongFeedback: '她答成“提拔”，说这话的人自己都愣住了。',
        afterCorrect: '周叙低声补了一句：“我们科室不这样，我从不拿迟到说事。”'
      },
      {
        plotDescription: '温以宁说起自己差点离开医院，最后还是留在了急诊。',
        line: "I almost quit last winter. Then I remembered why I started.",
        lineCn: '去年冬天我差点辞职，后来想起自己为什么开始。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'got promoted', cn: '升职了', correct: false, reason: '升职是好事，不会用“差点”来形容。' },
          { key: 'B', en: 'left the job', cn: '辞职离开', correct: true, reason: '“差点”加上“为什么开始”，quit 指主动辞掉工作。' },
          { key: 'C', en: 'took a vacation', cn: '休假', correct: false, reason: '休假之后还会回来，和“差点不干”不是一回事。' }
        ],
        analysis: '“差点”加上“为什么开始”，quit 指主动辞掉工作、离开岗位。',
        wrongFeedback: '她答成“休假”，说完自己先笑了：“休一年那种？”',
        afterCorrect: '周叙安静地看着她，过了会儿说：“幸好你没走。”'
      },
      {
        plotDescription: '班长举杯恭喜周叙，说他这么年轻就升了主任。',
        line: "Congrats on the promotion. Youngest department head in years.",
        lineCn: '恭喜升职。这些年最年轻的科室主任。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a move to a higher position', cn: '升职', correct: true, reason: '被恭喜、当上主任，promotion 就是职位往上走。' },
          { key: 'B', en: 'a pay cut', cn: '降薪', correct: false, reason: '降薪不会成为举杯恭喜的理由，语气不合。' },
          { key: 'C', en: 'a transfer to another city', cn: '调去外地', correct: false, reason: '主任是职位，不是地点变化，句中没有调动信息。' }
        ],
        analysis: '恭喜、年轻就当主任，promotion 指职位上的晋升。',
        wrongFeedback: '她答成“降薪”，班长一口酒差点喷出来：“我这是恭喜还是扎心？”',
        afterCorrect: '周叙碰了碰杯，只说：“运气好。”眼睛却越过杯沿，看了温以宁一眼。'
      }
    ],
    completeText: '那一眼很短，短到别人都没看见。温以宁却低头喝完了整杯饮料，喉咙里全是气泡的声音。'
  },
  {
    id: 'pl_8',
    index: 8,
    title: '第 8 章 · 走廊尽头的解释',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '聚会散场后，医院打来电话。一个术后病人血压骤降，周叙和她同时往回赶。出租车上谁也不说话，只有手机屏幕的光，一闪一闪照在车窗上。',
    questions: [
      {
        plotDescription: '车上温以宁接了个电话，是同事问她今晚能不能再顶一班。',
        line: "I'll take the overtime. Tell them I'm on my way.",
        lineCn: '这班加班我接了，跟他们说我在路上。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'a day off', cn: '调休', correct: false, reason: '她正在赶回医院顶班，调休是休息，方向相反。' },
          { key: 'B', en: 'a night shift', cn: '夜班', correct: false, reason: '夜班是班次，这里强调的是正常班之外多干的时间。' },
          { key: 'C', en: 'extra hours beyond normal work', cn: '额外加班', correct: true, reason: '再顶一班、马上到，overtime 指超出正常工作的额外工时。' }
        ],
        analysis: '再顶一班、马上赶回去，overtime 指正常排班之外额外多干的时间。',
        wrongFeedback: '她答成“调休”，周叙在旁边听得皱眉：“你这是往反方向理解。”',
        afterCorrect: '周叙只说了一句：“到了先看病人，剩下的我来。”'
      },
      {
        plotDescription: '病人的家属在门口追问什么时候能出结果，周叙看了眼表。',
        line: "The lab has a deadline. We'll know by four.",
        lineCn: '化验室有截止时间，四点前能出结果。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lunch break', cn: '午休', correct: false, reason: '凌晨四点出结果，和午休时间没有关系。' },
          { key: 'B', en: 'the latest time to finish', cn: '必须完成的最后期限', correct: true, reason: '四点前必须出报告，deadline 就是不可越过的时限。' },
          { key: 'C', en: 'an appointment', cn: '预约', correct: false, reason: '这里是化验室的工作时限，不是病人预约。' }
        ],
        analysis: '四点前必须交出结果，deadline 是不可推迟的最后完成时间。',
        wrongFeedback: '他答成“午休”，温以宁忍不住提醒：“凌晨四点，也没法午休。”',
        afterCorrect: '他站在检验室门口，一直等到四点零三分，报告出来才松了一口气。'
      },
      {
        plotDescription: '天亮后，一家医疗器械公司的销售守在办公室外，说要见他。',
        line: "I have a client waiting. Give me ten minutes.",
        lineCn: '有个客户在等，给我十分钟。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business customer', cn: '客户', correct: true, reason: '器械销售等在门外谈事，client 是业务上的客户。' },
          { key: 'B', en: 'a patient', cn: '病人', correct: false, reason: '病人应该在病房或诊室，不会守在办公室外。' },
          { key: 'C', en: 'a colleague', cn: '同事', correct: false, reason: '同事不必用“客户”来称呼，也不在门外等。' }
        ],
        analysis: '器械公司的销售等在办公室外谈业务，client 指业务往来中的客户。',
        wrongFeedback: '她答成“病人”，周叙纠正：“病人在病房，不在办公室外头。”',
        afterCorrect: '温以宁把病历夹往怀里一抱：“十分钟，超时我就去敲门。”'
      },
      {
        plotDescription: '下午有院感科的会，温以宁被点名必须参加。',
        line: "The meeting starts at two. Don't be late again.",
        lineCn: '会议两点开始。别再迟到了。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'an operation', cn: '手术', correct: false, reason: '手术不会用“两点开始、别迟到”这样的通知方式。' },
          { key: 'B', en: 'a ward round', cn: '查房', correct: false, reason: '查房是逐个看病人，这里说的是院感科组织的会。' },
          { key: 'C', en: 'a formal discussion', cn: '正式会议', correct: true, reason: '被点名参加、有固定时间，meeting 就是正式开会。' }
        ],
        analysis: '两点开始、被点名参加，meeting 指一群人有议题地正式开会。',
        wrongFeedback: '她答成“查房”，周叙无奈：“查房我自己会去。”',
        afterCorrect: '两点整，她推门进去，发现周叙旁边空着的椅子上放着一杯温水。'
      }
    ],
    completeText: '会议很长，她一个字没听进去。只记得他偶尔侧过身，替她把投影的光挡住。'
  },
  {
    id: 'pl_9',
    index: 9,
    title: '第 9 章 · 那件没送出去的礼物',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '科室聚餐，聊到有人创业失败。温以宁想起高三那年，自己攒了三个月的钱，买了一支钢笔，最后没敢送出去，一直放在抽屉最底层。',
    questions: [
      {
        plotDescription: '有人问周叙最近在忙什么，他说在推进创伤中心的事。',
        line: "It's a big project. Two years, maybe longer.",
        lineCn: '是个大项目。两年，可能更久。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of medicine', cn: '一种药', correct: false, reason: '药不会用“两年、可能更久”来描述周期。' },
          { key: 'B', en: 'a planned piece of work', cn: '项目', correct: true, reason: '有周期、要长期推进，project 指有目标的规划性工作。' },
          { key: 'C', en: 'a patient case', cn: '病例', correct: false, reason: '单个病例不会做两年，这里说的是科室建设。' }
        ],
        analysis: '两年周期、要持续推进的事，project 指有明确目标的规划性工作。',
        wrongFeedback: '她答成“病例”，周叙补充：“病例不用两年。”',
        afterCorrect: '温以宁问是什么项目，他说：“抢救室改造。”顿了顿，“想请你一起。”'
      },
      {
        plotDescription: '有人自嘲说上一份工作干砸了，直接被老板赶走。',
        line: "I got fired on my second week. Didn't even get a reason.",
        lineCn: '第二周我就被炒了，连理由都没给。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'lost the job', cn: '被解雇', correct: true, reason: '第二周就走人、还没给理由，显然是被辞退了。' },
          { key: 'B', en: 'got a raise', cn: '涨工资', correct: false, reason: '涨工资是好事，不会被“连理由都没给”地赶走。' },
          { key: 'C', en: 'was praised', cn: '被表扬', correct: false, reason: '第二周被表扬很合理，可这里说的是干砸了。' }
        ],
        analysis: '干砸、第二周就走人，fired 表示被雇主辞退，是 fire 的过去式。',
        wrongFeedback: '她答成“被表扬”，那人苦着脸：“表扬到不用来了？”',
        afterCorrect: '周叙给他倒了杯茶：“至少你知道自己不适合。”'
      },
      {
        plotDescription: '有人问班长公司做得怎么样，他笑说今年行情还行。',
        line: "Business is good this year. Nothing to complain about.",
        lineCn: '今年生意不错，没什么好抱怨的。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a hobby', cn: '爱好', correct: false, reason: ' hobby 不涉及行情好坏，也不会用“生意不错”来说。' },
          { key: 'B', en: 'health condition', cn: '身体状况', correct: false, reason: '“今年行情”说的是公司经营，不是身体好坏。' },
          { key: 'C', en: 'commercial activity', cn: '生意/经营', correct: true, reason: '公司、行情、好与不好，business 指商业经营状况。' }
        ],
        analysis: '说到公司、行情，business 指商业经营活动，而不是个人爱好或身体。',
        wrongFeedback: '她答成“身体状况”，班长笑得直摆手：“我身体也没差。”',
        afterCorrect: '温以宁忽然想起抽屉里那支钢笔，想起它当年花光了她所有的零花钱。'
      },
      {
        plotDescription: '班长半开玩笑，说以后科室的耗材都从他那儿走，算笔好买卖。',
        line: "Let's make a deal. You buy from me, I'll cut the price.",
        lineCn: '我们做笔交易。你从我这儿进货，我给你压价。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'a joke', cn: '玩笑', correct: false, reason: '他连压价条件都提了，显然是在认真谈合作。' },
          { key: 'B', en: 'an agreement between two sides', cn: '双方达成的交易', correct: true, reason: '你买我让利，双方各有条件，deal 就是谈成的交易。' },
          { key: 'C', en: 'a punishment', cn: '惩罚', correct: false, reason: '进货压价是互利，和惩罚没有一点关系。' }
        ],
        analysis: '你买我的货、我给你让价，双方各有让步，deal 指谈成的交易。',
        wrongFeedback: '她答成“玩笑”，班长举杯：“我这可是认真的。”',
        afterCorrect: '周叙没说好也没说不好，只看了温以宁一眼：“耗材的事，得问我们温医生。”'
      }
    ],
    completeText: '她被点名，筷子差点掉下去。十年了，他还是这样，一句话就能把她推到台前。'
  },
  {
    id: 'pl_10',
    index: 10,
    title: '第 10 章 · 没说出口的那个字',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '月底，医院签下一份新的合作协议。签字那天，温以宁站在会议室角落，看见周叙低头写名字，笔尖停顿了一下，像是在确认什么。',
    questions: [
      {
        plotDescription: '签完字，行政把一份厚厚的文件递给他，让他收好。',
        line: "Read it before you sign. A contract is not a formality.",
        lineCn: '签之前先读一遍。合同不是走个形式。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a legal agreement', cn: '具有约束力的合同', correct: true, reason: '签字、条款、要逐条读，contract 是有法律效力的合同。' },
          { key: 'B', en: 'a greeting card', cn: '贺卡', correct: false, reason: '贺卡不需要签字前仔细阅读，也没有条款。' },
          { key: 'C', en: 'a meeting note', cn: '会议记录', correct: false, reason: '会议记录不需要双方签字生效，性质不同。' }
        ],
        analysis: '签字、条款、要“读一遍”，contract 是双方签署、具有约束力的法律文件。',
        wrongFeedback: '她答成“贺卡”，周叙抬头看她：“那我签个祝福给你？”',
        afterCorrect: '温以宁低下头，耳朵却慢慢红了。'
      },
      {
        plotDescription: '会上有人汇报，新合作第一年赚得不多，但值得长期做。',
        line: "The profit is thin this year, but the plan is long-term.",
        lineCn: '今年利润薄，但这是长期计划。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'the total cost', cn: '总成本', correct: false, reason: '成本是花出去的钱，和“赚得薄”正好相反。' },
          { key: 'B', en: 'money left after costs', cn: '利润', correct: true, reason: '和成本相对，今年薄但长期做，profit 是赚到的净收入。' },
          { key: 'C', en: 'the number of staff', cn: '员工人数', correct: false, reason: '人数不会用“薄”来形容，也不涉及赚多赚少。' }
        ],
        analysis: '和成本相对、今年薄但长期做，profit 是收入减去成本后剩下的钱。',
        wrongFeedback: '她答成“总成本”，汇报的人愣了半天。',
        afterCorrect: '周叙记下一句：“长期做。”他说这话的时候，眼睛没有看报表。'
      },
      {
        plotDescription: '项目落地，院里给参与的人发了一笔额外的钱。',
        line: "There's a bonus for everyone on the team. Don't spend it all at once.",
        lineCn: '团队每个人都有奖金。别一下子花光。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money for good work', cn: '额外奖励的奖金', correct: true, reason: '项目落地、团队人人有份，bonus 是工资之外的额外奖励。' },
          { key: 'B', en: 'a fine', cn: '罚款', correct: false, reason: '罚款是往外掏钱，不会说“别一下子花光”。' },
          { key: 'C', en: 'a loan', cn: '贷款', correct: false, reason: '贷款要还，奖励不用还，性质完全不同。' }
        ],
        analysis: '项目落地、团队都有，bonus 是正职薪酬之外额外发放的奖励。',
        wrongFeedback: '她答成“罚款”，周叙笑：“那我发钱，你交钱？”',
        afterCorrect: '温以宁小声问：“那你的呢？”他说：“还没想好。”'
      },
      {
        plotDescription: '有人问她愿不愿意调到新中心，待遇比现在高。',
        line: "The salary is higher, but I like the ER.",
        lineCn: '薪资更高，但我喜欢急诊。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'the work schedule', cn: '排班', correct: false, reason: '她拿“喜欢急诊”作对比，说的是钱，不是班次。' },
          { key: 'B', en: 'the job title', cn: '职位头衔', correct: false, reason: '头衔高低是另一回事，这里明确在比待遇。' },
          { key: 'C', en: 'the money paid for a job', cn: '工作薪资', correct: true, reason: '“待遇更高”和喜欢急诊对举，salary 指固定薪酬。' }
        ],
        analysis: '和“喜欢急诊”做对比，salary 指工作换来的固定薪酬，通常按月发。',
        wrongFeedback: '她答成“排班”，对方还以为她在担心夜班太多。',
        afterCorrect: '周叙在旁边听见了，什么也没说，只把那份调动表轻轻推远了一点。'
      }
    ],
    completeText: '第一幕就这样结束了。他们从“十年没见”走到“每天都能见”，可谁都没有把那个字说出口。'
  },
  {
    id: 'pl_11',
    index: 11,
    title: '第 11 章 · 旧铁盒里的信',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周末温以宁回家收拾旧物，从床底拖出一个生锈的铁盒。里面是十几封没寄出的信，信封上写着同一个名字。她坐在地板上，一封一封拆开，窗外的天慢慢黑透了。',
    questions: [
      {
        plotDescription: '信里写着她被同桌气到，却还是在校门口等到路灯亮。',
        line: "I was so pissed off that day, but I still waited for you after class.",
        lineCn: '那天我气得要命，可放学后还是等了你。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '火大', correct: true, reason: '又气又等，pissed off 是口语里“气炸了”的意思。' },
          { key: 'B', en: 'very sleepy', cn: '很困', correct: false, reason: '信里写的是被气到，跟困不困没有关系。' },
          { key: 'C', en: 'very hungry', cn: '很饿', correct: false, reason: '她在校门口等人，不是在写肚子饿。' }
        ],
        analysis: '信里写她生气却还等他，pissed off 是口语里情绪很重的“火大、气炸”。',
        wrongFeedback: '她答成“很困”，信里的委屈忽然变得可笑，她把纸按在膝盖上。',
        afterCorrect: '下一行写着：“我知道你不会来，可我还是等到路灯亮了。”她盯着那行字，眼眶有点热。'
      },
      {
        plotDescription: '另一封信写到高考前夜，她紧张得手一直在抖。',
        line: "I nearly freaked out before the exam, and you just handed me a bottle of water.",
        lineCn: '考试前我差点崩溃，你只递给我一瓶水。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'fell asleep', cn: '睡着了', correct: false, reason: '考试前她紧张到发抖，不可能一睡过去。' },
          { key: 'B', en: 'laughed out loud', cn: '大笑', correct: false, reason: '手抖和笑是两回事，语境里全是紧张。' },
          { key: 'C', en: 'lost control from panic', cn: '慌到失控', correct: true, reason: '考前紧张到差点撑不住，freak out 就是情绪失控。' }
        ],
        analysis: '高考前紧张到不行，freak out 指情绪突然失控、抓狂，程度比“紧张”更重。',
        wrongFeedback: '她答成“睡着了”，可那晚她明明睁眼到天亮。',
        afterCorrect: '她想起那瓶水是温的，瓶盖已经被他拧松了。十年过去，她居然还记得。'
      },
      {
        plotDescription: '信里写到她看见他值日到很晚，最后什么都没说。',
        line: "You looked exhausted, so I didn't say anything.",
        lineCn: '你看起来累坏了，所以我什么都没说。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited', cn: '很兴奋', correct: false, reason: '值日到很晚是累，不是兴奋得停不下来。' },
          { key: 'B', en: 'completely worn out', cn: '精疲力尽', correct: true, reason: '她因为心疼才把话咽回去，说明他已经累到极点。' },
          { key: 'C', en: 'a little shy', cn: '有点害羞', correct: false, reason: '害羞不能解释她为什么放弃开口。' }
        ],
        analysis: '她因为心疼才没把话说完，exhausted 是累到极点的状态。',
        wrongFeedback: '她答成“很兴奋”，读到这里自己都笑了，哪有人兴奋到黑眼圈。',
        afterCorrect: '那天的信停在这里，后面半页被撕掉了。她翻了很久，也没有找到结尾。'
      },
      {
        plotDescription: '最后一封信写毕业聚会，她喝多了，第二天他来送站。',
        line: "I had a hangover after graduation, and you still came to see me off.",
        lineCn: '毕业聚会后我宿醉，你还是来送我了。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'the sick feeling after drinking', cn: '醉酒后的难受', correct: true, reason: '毕业聚会喝了酒，第二天不舒服，正是宿醉。' },
          { key: 'B', en: 'a headache from studying', cn: '学习累出的头痛', correct: false, reason: '这里提到聚会和喝酒，不是熬夜看书。' },
          { key: 'C', en: 'a feeling of excitement', cn: '兴奋的感觉', correct: false, reason: '她抱着垃圾桶坐了一早上，显然不是兴奋。' }
        ],
        analysis: '毕业聚会喝了酒，第二天难受得厉害，hangover 专指醉酒后的宿醉。',
        wrongFeedback: '她答成“兴奋”，可那天她明明抱着垃圾桶坐了一早上。',
        afterCorrect: '信的最后一句是：“你替我拎着行李，我一句话都没敢说。”她把信折回原样。'
      }
    ],
    completeText: '铁盒最底下压着一张车票，日期是十年前的九月。她忽然明白，自己不是没写过，只是从来没敢寄。'
  },
  {
    id: 'pl_12',
    index: 12,
    title: '第 12 章 · 字迹没变',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周一早上，温以宁抱着一摞病历进办公室，口袋里那封信露出一个角。周叙伸手替她扶住，指尖碰到信纸，动作停了一下。他没有抽出来，只说了句：“你的字，我认得。”',
    questions: [
      {
        plotDescription: '两人聊起高中班上一对分分合合的情侣，周叙摇了摇头。',
        line: "That relationship was toxic. Everyone saw it except her.",
        lineCn: '那段关系是有毒的，除了她所有人都看出来了。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'very romantic', cn: '很浪漫', correct: false, reason: '他摇头、说“只有她没看出来”，显然不是在夸浪漫。' },
          { key: 'B', en: 'very stable', cn: '很稳定', correct: false, reason: '稳定就不会让所有人看出问题。' },
          { key: 'C', en: 'harmful and draining', cn: '有害又消耗人', correct: true, reason: '所有人都看出不对，toxic 形容关系有害、把人耗空。' }
        ],
        analysis: '所有人都看出来有问题，toxic 形容一段关系有害、让人被消耗。',
        wrongFeedback: '他答成“很浪漫”，温以宁抬眼看他：“你当年真这么想的？”',
        afterCorrect: '周叙把病历放下：“所以那时候，我也不敢多说。”'
      },
      {
        plotDescription: '信纸从口袋滑到地上，办公室里忽然安静下来。',
        line: "The silence got awkward, so I pretended I didn't see it.",
        lineCn: '沉默变得很尴尬，所以我装作没看见。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'uncomfortable', cn: '尴尬不自在', correct: true, reason: '信掉出来、两人都不说话，正是让人手足无措的尴尬。' },
          { key: 'B', en: 'peaceful', cn: '安静平和', correct: false, reason: '空气僵得能听见钟表声，谈不上平和。' },
          { key: 'C', en: 'funny', cn: '好笑', correct: false, reason: '他选择假装没看见，说明气氛并不好笑。' }
        ],
        analysis: '信掉出来、两人都不说话，awkward 是那种让人手足无措的尴尬。',
        wrongFeedback: '他答成“平和”，可空气明明僵得能听见钟表声。',
        afterCorrect: '温以宁弯腰去捡，他先一步按住那张纸：“别急，我不看。”'
      },
      {
        plotDescription: '他盯着信封上的字看了一会儿，忽然笑出声。',
        line: "Your handwriting hasn't changed. That little hook on the 'y' is dead funny.",
        lineCn: '你的字一点没变。那个 y 的小钩子笑死人了。',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'almost unreadable', cn: '几乎看不清', correct: false, reason: '他认出了字迹，说明看得清，只是在打趣。' },
          { key: 'B', en: 'extremely funny', cn: '特别好笑', correct: true, reason: 'dead 在口语里起强调作用，dead funny 就是特别好笑。' },
          { key: 'C', en: 'very serious', cn: '很严肃', correct: false, reason: '他刚笑出声，怎么会是严肃。' }
        ],
        analysis: 'dead 在口语里可以当强调词用，dead funny 等于“特别好笑”。',
        wrongFeedback: '他答成“看不清”，温以宁把信抽回去：“那你别看了。”',
        afterCorrect: '她嘴上生气，手却把信往他那边推了推：“只许看信封。”'
      },
      {
        plotDescription: '他说起自己一直以为高中那些细节都是自作多情。',
        line: "I'm thrilled you kept it. I thought I imagined all of it.",
        lineCn: '你还留着，我高兴坏了。我还以为那些都是我瞎想的。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'confused', cn: '困惑', correct: false, reason: '他刚说“高兴坏了”，不是想不明白。' },
          { key: 'B', en: 'nervous', cn: '紧张', correct: false, reason: '信就在眼前，他的情绪是喜悦而不是忐忑。' },
          { key: 'C', en: 'extremely happy', cn: '欣喜若狂', correct: true, reason: '多年猜测被证实，thrilled 表示极强的喜悦。' }
        ],
        analysis: '他以为一切都是自己幻想，如今信在眼前，thrilled 是极强的喜悦。',
        wrongFeedback: '他答成“困惑”，温以宁看着他，忽然不知道该怎么接。',
        afterCorrect: '周叙把信放回桌上，很轻：“那我们现在，从第一封开始读？”'
      }
    ],
    completeText: '她没有点头，也没有拒绝。窗外的阳光落在信纸上，把十年前的字照得发亮。'
  },
  {
    id: 'pl_13',
    index: 13,
    title: '第 13 章 · 一句被听错的话',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '午后，温以宁去楼梯间接水，听见周叙和护士长在说话。护士长笑问：“温医生是不是你女朋友？”他停了两秒，说：“She is just an old classmate.”她端着杯子，站在门后没动。',
    questions: [
      {
        plotDescription: '回到护士站，桌上又多了两摞表格，她连笔都握不稳。',
        line: "I'm overwhelmed with these forms. Can you give me a minute?",
        lineCn: '这些表格压得我喘不过气，能给我一分钟吗？',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'bored with them', cn: '觉得无聊', correct: false, reason: '她是被工作量压住，不是闲得发闷。' },
          { key: 'B', en: 'buried and stressed', cn: '被压得应付不过来', correct: true, reason: '表格堆成山、还要缓一分钟，正是被压得喘不过气。' },
          { key: 'C', en: 'finished with them', cn: '已经做完了', correct: false, reason: '她刚求人给一分钟，不可能已经做完。' }
        ],
        analysis: '表格堆成山、需要缓一分钟，overwhelmed 是被压得应付不过来。',
        wrongFeedback: '她答成“做完了”，同事把一摞新表格放在她桌上，她彻底说不出话。',
        afterCorrect: '她躲进值班室，把那句“old classmate”在脑子里重放了一遍又一遍。'
      },
      {
        plotDescription: '同事看她脸色不好，把椅子拉过来让她先坐下。',
        line: "Just chill. Nobody's blaming you for the delay.",
        lineCn: '放轻松点，没人因为延误怪你。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'relax', cn: '放松下来', correct: true, reason: '同事在安慰她别紧张，chill 就是放轻松。' },
          { key: 'B', en: 'leave', cn: '离开', correct: false, reason: '同事让她坐下，不是让她走。' },
          { key: 'C', en: 'hurry up', cn: '赶快', correct: false, reason: '后半句明确说没人怪她，语气是安抚不是催促。' }
        ],
        analysis: '同事在安慰她别紧张，chill 在这里是“放轻松、别绷着”。',
        wrongFeedback: '她答成“赶紧走”，同事愣住：“我是让你别急。”',
        afterCorrect: '她勉强笑了笑，可手指一直捏着那张没送出去的信。'
      },
      {
        plotDescription: '交完班，她靠着更衣柜坐下，连抬手的力气都没有。',
        line: "After that shift I felt completely drained.",
        lineCn: '那班下来，我觉得自己被彻底掏空了。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'excited', cn: '兴奋', correct: false, reason: '她连抬手都费力，和兴奋完全是两种状态。' },
          { key: 'B', en: 'hungry', cn: '饿', correct: false, reason: '累到没力气不等于饿，这里强调的是精力耗尽。' },
          { key: 'C', en: 'completely worn out', cn: '被掏空', correct: true, reason: '一整班高强度工作后毫无力气，drained 指精力被抽干。' }
        ],
        analysis: '一整班高强度工作后毫无力气，drained 指精力被彻底抽干。',
        wrongFeedback: '她答成“饿”，于是去食堂点了两份饭，一口也吃不下。',
        afterCorrect: '她靠着更衣柜坐下，忽然很想问一句：老同学，到底算什么呢。'
      },
      {
        plotDescription: '夜里她翻来覆去，盯着天花板想他那两秒的停顿。',
        line: "I've been anxious about what he thinks of me.",
        lineCn: '我一直在焦虑他怎么看我。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried', cn: '焦虑不安', correct: true, reason: '反复猜测对方心意、睡不着，anxious 就是心里发紧。' },
          { key: 'B', en: 'curious', cn: '好奇', correct: false, reason: '好奇不会让人翻来覆去到半夜。' },
          { key: 'C', en: 'certain', cn: '确定', correct: false, reason: '她连他一句话的意思都拿不准，谈何确定。' }
        ],
        analysis: '反复猜测对方的心意、心里发紧，anxious 是焦虑不安。',
        wrongFeedback: '她答成“确定”，可她连他一句话的意思都拿不准。',
        afterCorrect: '手机亮了一下，是周叙：“明天夜班，一起？”她盯着那行字看了很久。'
      }
    ],
    completeText: '她最后回了一个“好”。发出去的瞬间，又觉得自己像个十七岁的人。'
  },
  {
    id: 'pl_14',
    index: 14,
    title: '第 14 章 · 冷战第三天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '接下来三天，温以宁只在必须说话时开口，说完就走。周叙把病历翻来覆去想不通，直到护士长提醒他：“那天你说话，她可能听见了。”',
    questions: [
      {
        plotDescription: '护士长说温以宁这两天说话带刺，连水杯都放得很重。',
        line: "She was furious when she heard what I said.",
        lineCn: '她听到我说的话时气坏了。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'relieved', cn: '松了口气', correct: false, reason: '她三天不理人，显然不是放松，而是生气。' },
          { key: 'B', en: 'amused', cn: '觉得好笑', correct: false, reason: '说话带刺、放杯子很重，和觉得好笑相反。' },
          { key: 'C', en: 'extremely angry', cn: '狂怒', correct: true, reason: '三天冷战、处处带刺，furious 是愤怒到极点。' }
        ],
        analysis: '三天不理人、说话带刺，furious 是愤怒到极点的状态。',
        wrongFeedback: '他答成“松了口气”，护士长看他一眼：“你哪只眼睛看见的？”',
        afterCorrect: '周叙捏着笔，第一次觉得那句“老同学”说得太顺口了。'
      },
      {
        plotDescription: '他坐在办公室里，连最爱的手术记录都写不下去。',
        line: "I've been depressed all week and I don't know why.",
        lineCn: '我难受了一个星期，也不知道为什么。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very low and sad', cn: '情绪低落', correct: true, reason: '持续一周提不起劲，depressed 指情绪长期低沉。' },
          { key: 'B', en: 'very busy', cn: '很忙', correct: false, reason: '他连手术都推了两台，忙不是重点。' },
          { key: 'C', en: 'very calm', cn: '很平静', correct: false, reason: '写不下记录、说不出原因，显然不是平静。' }
        ],
        analysis: '持续一周的低落、说不清原因，depressed 指情绪长期低沉。',
        wrongFeedback: '他答成“很忙”，可他那周连手术都推了两台。',
        afterCorrect: '护士长叹气：“周主任，你以前可不这样。”'
      },
      {
        plotDescription: '走廊里，年轻护士们正围着手机抢演唱会门票。',
        line: "Everyone's hyped about the concert, and I'm here sorting files.",
        lineCn: '大家都在为演唱会兴奋，我却在这儿整理文件。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried', cn: '担心', correct: false, reason: '抢票现场很热闹，没人露出担心的样子。' },
          { key: 'B', en: 'very excited', cn: '极度兴奋', correct: true, reason: '和“我在整理文件”对比，hyped 是兴奋到不行的状态。' },
          { key: 'C', en: 'tired', cn: '疲惫', correct: false, reason: '真正疲惫的是他自己，不是那群护士。' }
        ],
        analysis: '和“我在这儿整理文件”对比，hyped 是大家兴奋到不行的状态。',
        wrongFeedback: '他答成“担心”，可走廊里明明有人在讨论抢票。',
        afterCorrect: '他低头继续理文件，理了半天，同一张纸拿起来三次。'
      },
      {
        plotDescription: '交班时他想叫住她，最后只问出一句“今天怎么样”。',
        line: "I had a miserable day. Don't ask.",
        lineCn: '我今天惨透了，别问。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'wonderful', cn: '特别好', correct: false, reason: '她说“别问”，显然不是好得想分享。' },
          { key: 'B', en: 'ordinary', cn: '普通', correct: false, reason: '普通的答案不需要用“别问”来挡。' },
          { key: 'C', en: 'very bad', cn: '糟糕透顶', correct: true, reason: '一句“别问”已经把糟糕写满，miserable 就是惨到不行。' }
        ],
        analysis: '“别问”加上整天的状态，miserable 是糟到不行的意思。',
        wrongFeedback: '他答成“特别好”，温以宁冷笑一声，转身走了。',
        afterCorrect: '他站在原地，忽然明白：有些话不说清楚，比说错还伤人。'
      }
    ],
    completeText: '那天晚上，他坐在办公室里写了一条很长的消息，删到只剩四个字：“我们谈谈。”'
  },
  {
    id: 'pl_15',
    index: 15,
    title: '第 15 章 · 同一个夜班',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '排班表出来，两人被分在同一组。凌晨的急诊安静得反常，温以宁写病历，周叙在旁边看片子。谁都没提那三个字，可谁都没走开。',
    questions: [
      {
        plotDescription: '她盯着排班表看了半天，最后还是没忍住笑。',
        line: "I was ecstatic when I saw the schedule. Don't tell anyone.",
        lineCn: '看到排班表的时候我高兴坏了，别告诉别人。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'surprised', cn: '惊讶', correct: false, reason: '她盯着看了半天才笑，重点是高兴不是意外。' },
          { key: 'B', en: 'extremely happy', cn: '欣喜若狂', correct: true, reason: '看到和他同一班就高兴得藏不住，ecstatic 是极度的喜悦。' },
          { key: 'C', en: 'annoyed', cn: '恼火', correct: false, reason: '她还让人别说出去，显然在偷着乐。' }
        ],
        analysis: '看到和他同一班就高兴，还让保密，ecstatic 是藏不住的极度喜悦。',
        wrongFeedback: '她答成“恼火”，可嘴角一直压不下去，实在不像。',
        afterCorrect: '周叙没抬头：“放心，我也不打算告诉别人。”'
      },
      {
        plotDescription: '一台急诊手术做完，她的手腕僵得放不下来。',
        line: "My hands went numb after holding the retractor for hours.",
        lineCn: '举了几个小时拉钩，我的手都麻了。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'without feeling', cn: '失去知觉', correct: true, reason: '长时间保持一个动作后没感觉，numb 就是麻木。' },
          { key: 'B', en: 'very warm', cn: '很暖', correct: false, reason: '手腕僵住不是发热，暖解决不了问题。' },
          { key: 'C', en: 'shaking', cn: '发抖', correct: false, reason: '她说的是没知觉，而不是在抖。' }
        ],
        analysis: '长时间保持一个姿势后失去感觉，numb 指麻木、没有知觉。',
        wrongFeedback: '她答成“很暖”，周叙看了她一眼：“麻就说麻。”',
        afterCorrect: '他伸手替她揉了揉手腕，动作很自然，好像这十年从没断过。'
      },
      {
        plotDescription: '一位女外科医生笑着拍周叙的肩，还凑近看他的片子。',
        line: "I'm not jealous. I just don't like her standing so close.",
        lineCn: '我没嫉妒，我只是不喜欢她站那么近。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'sleepy', cn: '困', correct: false, reason: '她介意的是距离，不是想打瞌睡。' },
          { key: 'B', en: 'grateful', cn: '感激', correct: false, reason: '她嘴上否认，情绪明显是介意、吃醋。' },
          { key: 'C', en: 'envious and possessive', cn: '吃醋嫉妒', correct: true, reason: '嘴上说没有、又在介意距离，正是吃醋。' }
        ],
        analysis: '嘴上否认、又在介意别人靠近，jealous 就是吃醋、心里不是滋味。',
        wrongFeedback: '她答成“困”，说完自己都圆不回来。',
        afterCorrect: '周叙低头笑了一下：“那下次我离你近一点。”'
      },
      {
        plotDescription: '她想起白天冲他发的那句话，声音低了下去。',
        line: "I felt guilty the second I said it.",
        lineCn: '话一出口我就内疚了。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'sorry for doing wrong', cn: '内疚', correct: true, reason: '刚说出口就后悔，guilty 是做错事后心里过不去。' },
          { key: 'B', en: 'proud', cn: '骄傲', correct: false, reason: '她那句话把自己刺了一下，不是值得骄傲的事。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '她清楚自己错在哪，不是想不明白。' }
        ],
        analysis: '刚说出口就后悔，guilty 是做错事后心里过不去的愧疚。',
        wrongFeedback: '她答成“骄傲”，可那句话明明把她自己刺了一下。',
        afterCorrect: '她小声说了句“对不起”，周叙摇头：“你骂得也不算错。”'
      }
    ],
    completeText: '天快亮时，两个人都靠在椅背上睡着了。中间隔着半米，谁也没有先靠近。'
  },
  {
    id: 'pl_16',
    index: 16,
    title: '第 16 章 · 凌晨三点的便利店',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '夜班中场，两人去楼下便利店。货架只剩最后一盒关东煮，温以宁伸手，周叙也伸手，两只手在塑料盒上碰了一下，同时缩回去。',
    questions: [
      {
        plotDescription: '他看她一直皱着眉，把椅子往她那边踢了踢。',
        line: "You look stressed. Sit down and eat something.",
        lineCn: '你看起来压力很大，坐下吃点东西。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'relaxed', cn: '放松', correct: false, reason: '她眉头一直没松开，和放松相反。' },
          { key: 'B', en: 'bored', cn: '无聊', correct: false, reason: '急诊夜班忙得脚不沾地，谈不上无聊。' },
          { key: 'C', en: 'under pressure', cn: '压力大', correct: true, reason: '连轴转、饭也没吃，stressed 指被压力压着。' }
        ],
        analysis: '她眉头没松开过、饭也没吃，stressed 指被压力压得紧绷。',
        wrongFeedback: '他答成“放松”，温以宁抬头：“你看我像吗？”',
        afterCorrect: '她把盒子推给他：“你先吃，我不饿。”肚子却不合时宜地叫了一声。'
      },
      {
        plotDescription: '她提起这个月已经连着三个夜班，声音有点哑。',
        line: "Three night shifts in a row — that's how burnout starts.",
        lineCn: '连着三个夜班，职业倦怠就是这么来的。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'exhaustion from overwork', cn: '过度劳累后的倦怠', correct: true, reason: '连续夜班把身体和情绪都耗空，正是 burnout。' },
          { key: 'B', en: 'a happy mood', cn: '好心情', correct: false, reason: '连上三个夜班不会是“好心情”的来源。' },
          { key: 'C', en: 'a kind of fever', cn: '一种发烧', correct: false, reason: '这里说的是工作状态，不是生病发烧。' }
        ],
        analysis: '连续夜班、身体和情绪都被消耗，burnout 指过度工作导致的倦怠。',
        wrongFeedback: '他答成“好心情”，温以宁笑：“那你天天好心情？”',
        afterCorrect: '周叙把热汤推过去：“吃完这顿，我给你调班。”'
      },
      {
        plotDescription: '便利店外忽然有人喊救命，一个孩子倒在地上抽搐。',
        line: "Don't panic. We've got him.",
        lineCn: '别慌，我们接住了。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'laugh', cn: '笑', correct: false, reason: '孩子倒在地上，没人笑得出来。' },
          { key: 'B', en: 'sudden fear', cn: '恐慌', correct: true, reason: '家属六神无主，panic 是突然袭来的惊慌。' },
          { key: 'C', en: 'sleep', cn: '睡', correct: false, reason: '这是急救现场，和睡觉毫无关系。' }
        ],
        analysis: '抢救现场家属六神无主，panic 是突然袭来的惊慌失措。',
        wrongFeedback: '他答成“笑”，可家属的眼泪还挂在脸上。',
        afterCorrect: '那句话说完，家属真的安静了一点。温以宁看了他一眼。'
      },
      {
        plotDescription: '孩子被送上车后，监护仪上的数字终于慢慢稳住。',
        line: "I was relieved when his vitals stabilized.",
        lineCn: '他的生命体征稳下来，我才松了口气。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried', cn: '担心', correct: false, reason: '指标已经稳住，担心应该放下了。' },
          { key: 'B', en: 'angry', cn: '生气', correct: false, reason: '抢救成功不是让人愤怒的事。' },
          { key: 'C', en: 'freed from worry', cn: '松了口气', correct: true, reason: '悬着的心落下，relieved 是担忧解除后的轻松。' }
        ],
        analysis: '指标稳定、悬着的心落下，relieved 是担忧解除后的轻松。',
        wrongFeedback: '他答成“担心”，可监护仪明明已经平稳了。',
        afterCorrect: '两个人靠在便利店门口，谁都没说话，肩膀却挨得很近。'
      }
    ],
    completeText: '回医院的路上，她忽然说：“刚才那盒关东煮，其实我想让给你。”他答：“我知道。”'
  },
  {
    id: 'pl_17',
    index: 17,
    title: '第 17 章 · 他递来的热水',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '降温那天，温以宁的手一直冰凉。周叙把自己的保温杯放在她桌上，什么也没说。杯壁还是热的，杯盖上贴着一张便签：“喝完再还我。”',
    questions: [
      {
        plotDescription: '一个老人的抢救没能成功，家属在走廊里哭到站不直。',
        line: "She was heartbroken when the old man passed.",
        lineCn: '老人走的时候，她心都碎了。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply sad', cn: '心碎难过', correct: true, reason: '亲人离世、哭到站不直，heartbroken 是极度的悲伤。' },
          { key: 'B', en: 'a little tired', cn: '有点累', correct: false, reason: '哭到站不直，远不止“有点累”。' },
          { key: 'C', en: 'very angry', cn: '生气', correct: false, reason: '她面对的是失去，不是被谁激怒。' }
        ],
        analysis: '面对病人离世、情绪崩溃，heartbroken 是极度的悲伤。',
        wrongFeedback: '她答成“有点累”，可那姑娘在走廊哭了半个小时。',
        afterCorrect: '周叙站在旁边，很久才说：“我们救不回来的人，会一直记得。”'
      },
      {
        plotDescription: '他凭一个细节发现了别人漏掉的骨折，忍不住挑了下眉。',
        line: "Don't look so smug. You missed it yesterday.",
        lineCn: '别那么得意，你昨天还漏了。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'tired', cn: '累', correct: false, reason: '他刚发现关键线索，精神得很。' },
          { key: 'B', en: 'self-satisfied', cn: '得意忘形', correct: true, reason: '被说“昨天还漏了”却还挑着眉，smug 就是自满。' },
          { key: 'C', en: 'worried', cn: '担心', correct: false, reason: '他的表情是得意，不是发愁。' }
        ],
        analysis: '被说“昨天还漏了”还一脸得意，smug 是自满、自我感觉太好。',
        wrongFeedback: '他答成“累”，温以宁指了指他的嘴角：“累的人不会这么笑。”',
        afterCorrect: '周叙收起笑，认真把片子又看了一遍。'
      },
      {
        plotDescription: '她发现他这两天总绕开她的桌位，连眼神都不肯对上。',
        line: "I'm annoyed by the way he avoids me.",
        lineCn: '他躲着我的样子让我烦透了。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'touched', cn: '感动', correct: false, reason: '被刻意躲开，很难生出感动。' },
          { key: 'B', en: 'amused', cn: '觉得有趣', correct: false, reason: '她连饭都吃得很少，显然不是觉得有趣。' },
          { key: 'C', en: 'irritated', cn: '烦躁不快', correct: true, reason: '对方刻意回避、她心里堵得慌，annoyed 是被惹烦了。' }
        ],
        analysis: '对方刻意回避、她心里堵得慌，annoyed 是被惹得烦躁不快。',
        wrongFeedback: '她答成“感动”，可那几天她连饭都吃得很少。',
        afterCorrect: '话音刚落，周叙从拐角出来，手里还拿着那个保温杯。'
      },
      {
        plotDescription: '她自嘲最近总怀疑别人在背后议论自己。',
        line: "It's not paranoia if they're actually whispering about you.",
        lineCn: '如果她们真的在议论你，那就不算被害妄想了。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious illness', cn: '重病', correct: false, reason: '这里是口语打趣，不是在诊断疾病。' },
          { key: 'B', en: 'false suspicion', cn: '无端的猜疑', correct: true, reason: '句子里用“真的在议论”作对照，paranoia 指没有根据的猜疑。' },
          { key: 'C', en: 'good hearing', cn: '听力好', correct: false, reason: '听力好和怀疑别人议论是两码事。' }
        ],
        analysis: '前后用“真的在议论”作对照，paranoia 指没有根据的猜疑。',
        wrongFeedback: '他答成“重病”，温以宁白他一眼：“你才重病。”',
        afterCorrect: '周叙把杯子往她手边推了推：“那就让她们说。”'
      }
    ],
    completeText: '热水从喉咙一路暖到胃里。她忽然发现，自己好像没那么怕冷了。'
  },
  {
    id: 'pl_18',
    index: 18,
    title: '第 18 章 · 病历本里的糖',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '查房时，周叙翻开一本病历，里面掉出一颗水果糖。糖纸是十年前校门口小卖部的那种。他抬头，温以宁正假装看窗外。',
    questions: [
      {
        plotDescription: '一个术后病人指标反复，他半夜在办公室来回走。',
        line: "I've been restless all night. Something feels off.",
        lineCn: '我一整晚都坐立不安，总觉得哪里不对。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to settle', cn: '焦躁不安', correct: true, reason: '整晚静不下来、预感不对，restless 是坐立难安。' },
          { key: 'B', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: '他一整晚在走，眼下还有青黑，显然没睡。' },
          { key: 'C', en: 'very hungry', cn: '很饿', correct: false, reason: '他在担心病人指标，不是肚子饿。' }
        ],
        analysis: '整晚静不下来、预感不对，restless 是坐立难安、定不下来。',
        wrongFeedback: '他答成“睡得很沉”，可他眼下的青黑骗不了人。',
        afterCorrect: '温以宁把糖推回去：“那就再检查一遍，别凭感觉。”'
      },
      {
        plotDescription: '说到高中那场没解释清的误会，温以宁的语气冷了下来。',
        line: "She is still bitter about what happened in high school.",
        lineCn: '她对高中那件事还是耿耿于怀。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'forgetful', cn: '健忘', correct: false, reason: '她还记着那件事，说明并不健忘。' },
          { key: 'B', en: 'excited', cn: '兴奋', correct: false, reason: '语气冷下来，和兴奋完全不搭。' },
          { key: 'C', en: 'resentful', cn: '怨恨难平', correct: true, reason: '多年过去仍放不下，bitter 指心里存着怨和不甘。' }
        ],
        analysis: '多年过去仍放不下，bitter 指心里存着怨气和不甘。',
        wrongFeedback: '他答成“健忘”，可她把那封信留了十年。',
        afterCorrect: '周叙把糖纸捏平：“有些事，我也没放下。”'
      },
      {
        plotDescription: '她承认自己在他面前总是把话咽回去，怕显得太在意。',
        line: "It's hard to be vulnerable with someone you've liked for ten years.",
        lineCn: '在一个喜欢了十年的人面前示弱，太难了。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'funny', cn: '好笑', correct: false, reason: '她说这话时眼睛都红了，并不是在开玩笑。' },
          { key: 'B', en: 'open and exposed', cn: '脆弱不设防', correct: true, reason: '怕被看见在意、把软处露出来，vulnerable 正是不设防。' },
          { key: 'C', en: 'confident', cn: '自信', correct: false, reason: '她明明在说“太难了”，怎么会是自信。' }
        ],
        analysis: '喜欢太久反而怕受伤，vulnerable 指把软处露出来的不设防。',
        wrongFeedback: '他答成“好笑”，温以宁的眼睛却红了。',
        afterCorrect: '周叙沉默了一会儿，说：“那我们先从一颗糖开始。”'
      },
      {
        plotDescription: '他想起高三那年，自己以为这辈子都不会有机会。',
        line: "It felt hopeless back then. I didn't think I had a chance.",
        lineCn: '那时候觉得没希望，我以为自己一点机会都没有。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'without hope', cn: '绝望没希望', correct: true, reason: '以为没有机会、看不到结果，hopeless 指毫无希望。' },
          { key: 'B', en: 'very easy', cn: '很容易', correct: false, reason: '他说“没机会”，和容易正好相反。' },
          { key: 'C', en: 'certain to succeed', cn: '一定会成功', correct: false, reason: '后半句已经否定了“有机会”，更谈不上必成。' }
        ],
        analysis: '以为没有机会、看不到结果，hopeless 指毫无希望。',
        wrongFeedback: '他答成“一定会成功”，温以宁愣住：“你当年这么自信？”',
        afterCorrect: '他摇头：“不是自信，是不敢想。”'
      }
    ],
    completeText: '那颗糖最后被分成了两半。甜味很淡，可两个人都记了很久。'
  },
  {
    id: 'pl_19',
    index: 19,
    title: '第 19 章 · 心照不宣',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '科室里开始有人打趣他们。温以宁不承认也不否认，只是每次周叙经过，她手里的笔都会停一下。周叙也一样，走到她桌边，脚步总会慢半拍。',
    questions: [
      {
        plotDescription: '那晚她快要撑不住，是他留下来陪她写完了所有记录。',
        line: "I'm grateful you stayed that night.",
        lineCn: '那天晚上你留下来，我很感激。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'surprised', cn: '惊讶', correct: false, reason: '她是在道谢，不是在表示意外。' },
          { key: 'B', en: 'sorry', cn: '抱歉', correct: false, reason: '对方帮了她，她没有理由道歉。' },
          { key: 'C', en: 'thankful', cn: '感激', correct: true, reason: '在她最难的时候被留下，grateful 是由衷的感谢。' }
        ],
        analysis: '对方在她最难的时候留下，grateful 是由衷的感谢。',
        wrongFeedback: '她答成“抱歉”，周叙皱眉：“你道什么歉？”',
        afterCorrect: '温以宁低头整理袖口：“那你也别总一个人扛。”'
      },
      {
        plotDescription: '午后的阳光落在窗台上，她难得没有想接下来的排班。',
        line: "For the first time in years, I feel content.",
        lineCn: '这么多年，我第一次觉得满足。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'anxious', cn: '焦虑', correct: false, reason: '她难得没有想排班，状态是放松的。' },
          { key: 'B', en: 'quietly satisfied', cn: '满足安心', correct: true, reason: '没有大起大落、心里踏实，content 是平静的满足。' },
          { key: 'C', en: 'bored', cn: '无聊', correct: false, reason: '她享受这一刻，不是觉得没意思。' }
        ],
        analysis: '没有大起大落、心里踏实，content 是平静而满足的状态。',
        wrongFeedback: '她答成“焦虑”，可她说这话时正靠在窗边晒太阳。',
        afterCorrect: '周叙站在门口，没舍得打断那一刻。'
      },
      {
        plotDescription: '有人问她要不要调去更轻松的科室，她摇了摇头。',
        line: "I feel fulfilled here, even on the bad days.",
        lineCn: '就算是最糟的日子，我也觉得在这里很充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'having a sense of meaning', cn: '有成就感', correct: true, reason: '再糟也觉得有意义，fulfilled 指内心被价值感填满。' },
          { key: 'B', en: 'empty', cn: '空虚', correct: false, reason: '她拒绝调走，显然不是觉得空虚。' },
          { key: 'C', en: 'tired', cn: '疲惫', correct: false, reason: '她说的是“就算最糟的日子”，重点在值得。' }
        ],
        analysis: '再糟也觉得有意义，fulfilled 指内心被价值感和成就感填满。',
        wrongFeedback: '她答成“空虚”，可她说的是“就算最糟的日子”。',
        afterCorrect: '周叙点头：“我也是。”他顿了顿，“尤其是你在的时候。”'
      },
      {
        plotDescription: '走廊尽头，一位母亲看到受伤的孩子，情绪突然崩了。',
        line: "The mother became hysterical when she saw him.",
        lineCn: '那位母亲看到他的时候，情绪彻底失控了。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm', cn: '平静', correct: false, reason: '走廊里全是她的哭声，谈不上平静。' },
          { key: 'B', en: 'happy', cn: '开心', correct: false, reason: '孩子受了伤，母亲不可能开心。' },
          { key: 'C', en: 'wildly emotional', cn: '歇斯底里', correct: true, reason: '见到孩子伤成那样，情绪彻底崩溃，正是 hysterical。' }
        ],
        analysis: '见到孩子伤成那样，母亲情绪崩了，hysterical 指失控的激烈情绪。',
        wrongFeedback: '她答成“平静”，可走廊里全是她的哭声。',
        afterCorrect: '温以宁蹲下来，握住那位母亲的手，声音很轻：“他还在，我们都在。”'
      }
    ],
    completeText: '那天夜里，她忽然想明白了：喜欢一个人，不只是心跳，也是想和他一起把难的日子过完。'
  },
  {
    id: 'pl_20',
    index: 20,
    title: '第 20 章 · 第二幕落幕',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '月底，一场医闹闹到凌晨。有人推倒了护士站的椅子，周叙挡在温以宁前面。等保安把人带走，他回头第一句是：“你没事吧？”',
    questions: [
      {
        plotDescription: '闹事的人被拦下时还在吼，双手抖得厉害。',
        line: "He was shaking with rage.",
        lineCn: '他气得整个人都在抖。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'fear', cn: '害怕', correct: false, reason: '他在大声吼人，不是退缩求饶。' },
          { key: 'B', en: 'violent anger', cn: '暴怒', correct: true, reason: '情绪激烈到身体发抖，rage 是压不住的暴怒。' },
          { key: 'C', en: 'cold', cn: '冷', correct: false, reason: '发抖在这里是气到发抖，不是气温低。' }
        ],
        analysis: '情绪激烈到身体发抖，rage 是压不住的暴怒。',
        wrongFeedback: '他答成“害怕”，温以宁看着他挡在前面的背影，摇了摇头。',
        afterCorrect: '周叙把椅子扶起来，手还在抖，声音却稳：“报警。”'
      },
      {
        plotDescription: '人被带走后，护士站安静下来，只剩一盏灯亮着。',
        line: "There was a quiet sorrow in the room.",
        lineCn: '房间里有一种安静的悲伤。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep sadness', cn: '悲伤', correct: true, reason: '“安静”修饰的是沉下去的难过，sorrow 是深层悲伤。' },
          { key: 'B', en: 'anger', cn: '愤怒', correct: false, reason: '闹事的人已经走了，剩下的是沉重不是怒火。' },
          { key: 'C', en: 'relief', cn: '轻松', correct: false, reason: '刚经历冲突，气氛并不轻松。' }
        ],
        analysis: '“安静”修饰的是一种沉下去的难过，sorrow 指深层的悲伤。',
        wrongFeedback: '他答成“愤怒”，可那个房间安静得只剩呼吸声。',
        afterCorrect: '他没再说笑，只把窗帘拉开了一点，让天光进来。'
      },
      {
        plotDescription: '混乱里他一直抓着她的手腕，直到人群散开也没松。',
        line: "A wave of euphoria hit me when he didn't let go.",
        lineCn: '他没松手的那一刻，一阵狂喜涌上来。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'panic', cn: '恐慌', correct: false, reason: '他握着她，她感到的是高兴而不是害怕。' },
          { key: 'B', en: 'sleepiness', cn: '困意', correct: false, reason: '心跳加速的时刻不会犯困。' },
          { key: 'C', en: 'intense happiness', cn: '极度愉悦', correct: true, reason: '被握住手、心里发亮，euphoria 是强烈到发晕的幸福。' }
        ],
        analysis: '被握住手、心里发亮，euphoria 是强烈到发晕的幸福感。',
        wrongFeedback: '他答成“恐慌”，温以宁抽回手：“我看起来像害怕？”',
        afterCorrect: '周叙低头看了眼自己的手，慢慢收回去，又停住了。'
      },
      {
        plotDescription: '她想起前几天他一句解释都没有，心里那点凉一直没散。',
        line: "His apathy hurt more than anger would.",
        lineCn: '他的冷漠比生气更伤人。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'kindness', cn: '善意', correct: false, reason: '善意不会“更伤人”，语义自相矛盾。' },
          { key: 'B', en: 'lack of feeling', cn: '冷漠', correct: true, reason: '和“生气”作对比，apathy 是连情绪都懒得给的冷淡。' },
          { key: 'C', en: 'honesty', cn: '诚实', correct: false, reason: '诚实不是这里让她难受的原因。' }
        ],
        analysis: '和“生气”对比，apathy 是连情绪都懒得给的冷淡。',
        wrongFeedback: '他答成“善意”，温以宁笑了一下，那笑比哭还难看。',
        afterCorrect: '周叙沉默很久，说：“我不是不在乎，我是不知道怎么开口。”'
      }
    ],
    completeText: '第二幕到这里收尾。十年的信被翻开，误会也开了口，可那句“喜欢”，还是卡在两个人中间。'
  },
  {
    id: 'pl_21',
    index: 21,
    title: '第 21 章 · 他先开了口',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '夜班结束，周叙把她叫到天台。风很大，他把外套披在她肩上，说了一句她等了十年的话。她愣在原地，第一反应不是回答，而是想跑。',
    questions: [
      {
        plotDescription: '天台上，他看着她，声音被风吹得有点散。',
        line: "I've had a crush on you since high school. You never noticed.",
        lineCn: '我从高中就暗恋你，你从来没发现。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small injury', cn: '小伤', correct: false, reason: '他说的是从高中到现在的感情，不是受伤。' },
          { key: 'B', en: 'a secret love', cn: '偷偷的喜欢', correct: true, reason: '从高中到现在、还问她有没有察觉，crush 指暗恋。' },
          { key: 'C', en: 'a bad habit', cn: '坏习惯', correct: false, reason: '喜欢一个人不是习惯，句中也没有相关线索。' }
        ],
        analysis: '从高中到现在、还问她有没有察觉，crush 指藏在心里、没有说出口的喜欢。',
        wrongFeedback: '她答成“小伤”，天台上的风忽然变得很好笑。',
        afterCorrect: '她张了张嘴，最后只说：“风太大了，我没听清。”'
      },
      {
        plotDescription: '接下来两天，她不回消息，查房也绕着他走。',
        line: "I didn't mean to ghost you. I just didn't know what to say.",
        lineCn: '我不是故意玩消失，我只是不知道说什么。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappear without replying', cn: '不回消息、突然消失', correct: true, reason: '两天不回消息、躲着走，正是 ghost 的动词用法。' },
          { key: 'B', en: 'shout at someone', cn: '冲人喊', correct: false, reason: '她是在躲，不是发脾气。' },
          { key: 'C', en: 'send a gift', cn: '送礼物', correct: false, reason: '不回消息和送礼物是两回事。' }
        ],
        analysis: '不回消息、躲着不见，ghost 作动词指毫无解释地突然玩消失。',
        wrongFeedback: '她答成“送礼物”，周叙看着她：“两天不回消息，算送礼？”',
        afterCorrect: '他站在她办公室门口：“那我等你，等到你会说为止。”'
      },
      {
        plotDescription: '她自嘲一被人表白就想逃，这毛病大概没救了。',
        line: "Running away when someone confesses — that's a red flag.",
        lineCn: '一有人表白就跑，这可是个危险信号。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning sign', cn: '值得警惕的迹象', correct: true, reason: '她拿“危险信号”自嘲自己的逃避，指关系里的警示。' },
          { key: 'B', en: 'a red flag on a pole', cn: '旗杆上的红旗', correct: false, reason: '这里说的是人的行为，不是真的旗子。' },
          { key: 'C', en: 'good news', cn: '好消息', correct: false, reason: '她是在自责，不会把逃避说成好消息。' }
        ],
        analysis: '她用“危险信号”自嘲自己的逃避，red flag 指关系里值得警惕的迹象。',
        wrongFeedback: '她答成“红旗”，自己都笑不出来。',
        afterCorrect: '周叙却认真：“我不觉得。你只是怕。”'
      },
      {
        plotDescription: '第二天，护士站的人围着他们起哄，问昨晚是不是在一起了。',
        line: "We didn't hook up. We just talked on the roof all night.",
        lineCn: '我们没有在一起，只是在天台聊了一整晚。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'get together romantically', cn: '勾搭上、暧昧地在一起', correct: true, reason: '同事在起哄两人关系，hook up 指亲密或暧昧地在一起。' },
          { key: 'B', en: 'have a fight', cn: '吵架', correct: false, reason: '她是在解释关系，不是在说吵架。' },
          { key: 'C', en: 'work overtime', cn: '加班', correct: false, reason: '加班不会引来这种起哄。' }
        ],
        analysis: '同事起哄问他们是不是在一起了，hook up 指暧昧或亲密地在一起。',
        wrongFeedback: '她答成“加班”，同事笑得更厉害。',
        afterCorrect: '她说完才意识到，自己一整晚都在替他解释。'
      }
    ],
    completeText: '天台的门被风吹得直响。她没答应，也没拒绝，只把他的外套抱得更紧了一点。'
  },
  {
    id: 'pl_22',
    index: 22,
    title: '第 22 章 · 我配不上你',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '她开始躲。周叙在值班室堵住她，她把那把钥匙放回他手里，说：“周叙，我配不上你。”他没接，手就停在半空。',
    questions: [
      {
        plotDescription: '他追到楼梯间，声音压得很低，怕被人听见。',
        line: "I don't want any drama. I just want a straight answer.",
        lineCn: '我不想闹得难看，我只想要个直接的答案。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'a stage play', cn: '戏剧', correct: false, reason: '他们在谈感情，不是在演舞台剧。' },
          { key: 'B', en: 'messy emotional fuss', cn: '抓马、纠缠不清的事', correct: true, reason: '他要的是干脆答案，drama 指感情里的拉扯和闹剧。' },
          { key: 'C', en: 'a performance', cn: '表演', correct: false, reason: '这里没有演出，只有两个人的僵持。' }
        ],
        analysis: '他要的是干脆的答案，drama 指感情里那些拉扯、闹剧和情绪消耗。',
        wrongFeedback: '他答成“戏剧”，温以宁疲惫地闭了下眼。',
        afterCorrect: '温以宁盯着那把钥匙：“答案就是，我们不合适。”'
      },
      {
        plotDescription: '她解释自己不是不想靠近，只是怕靠得太近会招人烦。',
        line: "I don't want to be clingy. I just miss you.",
        lineCn: '我不想黏人，我只是想你。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'too dependent and attached', cn: '黏人、过度依赖', correct: true, reason: '她怕自己靠太近招人烦，clingy 指黏着不放。' },
          { key: 'B', en: 'cold and distant', cn: '冷漠疏远', correct: false, reason: '她说的是“想你”，和冷漠正相反。' },
          { key: 'C', en: 'polite', cn: '客气', correct: false, reason: '客气不会和“想你”放在一起。' }
        ],
        analysis: '她怕自己靠得太近招人烦，clingy 指过度依赖、黏着不放。',
        wrongFeedback: '她答成“冷漠”，可她说的是“我想你”。',
        afterCorrect: '周叙把钥匙推回去：“那就黏着，我不怕。”'
      },
      {
        plotDescription: '他把钥匙放在桌上，没有强迫她收下。',
        line: "I'll respect your boundaries. But don't shut the door completely.",
        lineCn: '我会尊重你的边界，但别把门彻底关死。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'personal limits', cn: '底线和分寸', correct: true, reason: '他愿意退一步、不越界，boundaries 指人的界限。' },
          { key: 'B', en: 'medical records', cn: '病历', correct: false, reason: '这是两个人的关系，不是病历。' },
          { key: 'C', en: 'rent payments', cn: '房租', correct: false, reason: '房租和“别把门关死”没有关系。' }
        ],
        analysis: '他愿意退一步、不越界，boundaries 指人与人之间的界限和分寸。',
        wrongFeedback: '他答成“病历”，周叙愣住：“这跟病历有什么关系。”',
        afterCorrect: '她把钥匙收进抽屉，没说好也没说不好。'
      },
      {
        plotDescription: '他提起上周那顿饭，从七点等到餐厅打烊。',
        line: "You bailed on dinner again. I waited two hours.",
        lineCn: '你又放我鸽子，我等了两个小时。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'cancel at the last minute', cn: '临时爽约、放鸽子', correct: true, reason: '等了两小时人没来，bail 指临时不去、撂挑子。' },
          { key: 'B', en: 'pay the bill', cn: '买单', correct: false, reason: '他没有等到人，谈不上买单。' },
          { key: 'C', en: 'arrive late', cn: '迟到', correct: false, reason: '“又”加上等两小时，说明人根本没到。' }
        ],
        analysis: '等了两小时人没来，bail 指临时爽约、把已经约好的事丢下。',
        wrongFeedback: '她答成“买单”，周叙看她：“我等到餐厅打烊。”',
        afterCorrect: '她想说对不起，最后只说：“下次不会了。”'
      }
    ],
    completeText: '那把钥匙在桌上放了一整夜。第二天早上，它被挪到了她的水杯旁边，像是从来没被退回去。'
  },
  {
    id: 'pl_23',
    index: 23,
    title: '第 23 章 · 退回的钥匙',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '温母来城里看病，顺手给她安排了一场相亲。温以宁坐在咖啡馆，脑子里全是周叙那把没收回去的钥匙。',
    questions: [
      {
        plotDescription: '好友听说她在相亲，发来消息打趣周叙。',
        line: "Bro code says I should warn you she's about to run.",
        lineCn: '兄弟法则说我该提醒你，她又要跑了。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'unwritten rules between male friends', cn: '兄弟间默认的规矩', correct: true, reason: '朋友拿“兄弟法则”打趣，指男生之间默认的义气规矩。' },
          { key: 'B', en: 'hospital regulations', cn: '医院规章', correct: false, reason: '这是朋友间的玩笑，不是正式制度。' },
          { key: 'C', en: 'traffic rules', cn: '交通规则', correct: false, reason: '和开车、道路没有关系。' }
        ],
        analysis: '朋友拿“兄弟法则”打趣，bro code 指男生之间默认的义气规矩。',
        wrongFeedback: '她答成“医院规章”，朋友笑得直拍桌。',
        afterCorrect: '周叙没笑：“她要跑，我就追。”'
      },
      {
        plotDescription: '温母在电话里已经开始盘算两家见面的事。',
        line: "My mother already mentioned in-laws. We haven't even had a first date.",
        lineCn: '我妈都提到亲家了，我们连第一次约会都还没有。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'relatives by marriage', cn: '公婆、岳父母等姻亲', correct: true, reason: '谈婚论嫁时提到的双方父母，in-laws 指姻亲。' },
          { key: 'B', en: 'colleagues', cn: '同事', correct: false, reason: '母亲盘算的是两家见面，不是同事关系。' },
          { key: 'C', en: 'neighbors', cn: '邻居', correct: false, reason: '邻居不会出现在这种谈婚论嫁的语境里。' }
        ],
        analysis: '谈婚论嫁时提到的双方父母，in-laws 指因婚姻而结成的姻亲。',
        wrongFeedback: '她答成“同事”，自己都觉得离谱。',
        afterCorrect: '周叙在电话那头沉默两秒：“那先补上第一次约会。”'
      },
      {
        plotDescription: '她压低声音，说对面坐着一个完全陌生的人。',
        line: "She set me up on a blind date. I'm sitting here with a stranger.",
        lineCn: '她给我安排了一场相亲，我正和一个陌生人坐着。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a date with a blind person', cn: '和盲人约会', correct: false, reason: 'blind 在这里不是眼睛看不见，而是事先没见过。' },
          { key: 'B', en: 'a meeting arranged for romance', cn: '相亲', correct: true, reason: '母亲安排、对面是陌生人，正是相亲。' },
          { key: 'C', en: 'a work shift', cn: '加班', correct: false, reason: '她坐在咖啡馆见人，不是在工作。' }
        ],
        analysis: '母亲安排、对面是陌生人，blind date 指双方事先没见过面的相亲。',
        wrongFeedback: '她答成“盲人约会”，对方礼貌地咳了一声。',
        afterCorrect: '她低头回消息：“救我。”'
      },
      {
        plotDescription: '电话里，周叙说别人都能看明白，只有她自己看不清。',
        line: "You're my blind spot. I can't see clearly when it comes to you.",
        lineCn: '你是我的盲区。一遇到你，我就看不清楚了。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'something you fail to see', cn: '看不见、顾不到的盲区', correct: true, reason: '他说自己遇到她就判断不清，blind spot 指看不清的地方。' },
          { key: 'B', en: 'a good quality', cn: '优点', correct: false, reason: '“看不清楚”不是夸奖。' },
          { key: 'C', en: 'a secret', cn: '秘密', correct: false, reason: '这里是判断上的盲区，不是藏起来的事。' }
        ],
        analysis: '他说自己遇到她就判断不清，blind spot 指看不清、容易忽略的盲区。',
        wrongFeedback: '她答成“优点”，心跳却漏了一拍。',
        afterCorrect: '十分钟后，周叙出现在咖啡馆门口。'
      }
    ],
    completeText: '他站在门口，没进来，只朝她抬了抬下巴。温以宁放下咖啡杯，第一次觉得“逃”这个字，也有点舍不得。'
  },
  {
    id: 'pl_24',
    index: 24,
    title: '第 24 章 · 原生家庭的门',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '她跟着周叙回家吃饭，站在老小区楼道里，忽然说起自己父母。那扇门她十年没敢推开，连过年都只送到楼下。',
    questions: [
      {
        plotDescription: '她提起一个总在需要帮忙时才出现的老同学。',
        line: "She's a toxic friend. She only calls when she needs something.",
        lineCn: '她是个有毒的朋友，只有需要帮忙时才找我。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who drains you', cn: '只会消耗你的朋友', correct: true, reason: '只在有事时联系、让人心累，正是消耗型朋友。' },
          { key: 'B', en: 'an old classmate', cn: '老同学', correct: false, reason: '老同学只是身份，句子里强调的是被消耗。' },
          { key: 'C', en: 'a coworker', cn: '同事', correct: false, reason: '这里说的是朋友关系，不是工作关系。' }
        ],
        analysis: '只在有事时才联系、让人心累，toxic friend 指只会消耗你的朋友。',
        wrongFeedback: '她答成“老同学”，周叙问：“老同学会让你每次挂电话都难受？”',
        afterCorrect: '温以宁低头：“我妈也是这样。”'
      },
      {
        plotDescription: '面馆里热气腾腾，她把筷子摆好，忽然认真起来。',
        line: "This is a date, right? Not just two colleagues having noodles.",
        lineCn: '这算约会吧？不只是两个同事吃面。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a calendar day', cn: '日期', correct: false, reason: '她在确认两人的关系，不是在问几月几号。' },
          { key: 'B', en: 'a romantic meeting', cn: '约会', correct: true, reason: '她特意排除“同事吃面”，date 指带感情意味的约会。' },
          { key: 'C', en: 'a work shift', cn: '排班', correct: false, reason: '两人在面馆吃饭，不是排班。' }
        ],
        analysis: '她特意确认“不是同事吃面”，date 指带有感情意味的约会。',
        wrongFeedback: '她答成“日期”，周叙笑：“几月几号？”',
        afterCorrect: '他放下筷子：“是约会。我准备很久了。”'
      },
      {
        plotDescription: '楼道里灯坏了，她站在暗处，声音很轻。',
        line: "My parents broke up when I was twelve. I never learned how to stay.",
        lineCn: '我十二岁那年父母分开了，我一直没学会怎么留下。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'separate, end a relationship', cn: '分开、关系破裂', correct: true, reason: '父母婚姻结束、她因此不会“留下”，break up 指关系破裂。' },
          { key: 'B', en: 'argue loudly', cn: '大声吵架', correct: false, reason: '她说的是分开，不只是吵架。' },
          { key: 'C', en: 'move house', cn: '搬家', correct: false, reason: '搬家无法解释“没学会留下”。' }
        ],
        analysis: '父母婚姻结束、她因此不会“留下”，break up 指关系破裂、分开。',
        wrongFeedback: '她答成“搬家”，可她说的明明是“没学会留下”。',
        afterCorrect: '周叙没有安慰她，只说：“那我们一起学。”'
      },
      {
        plotDescription: '她讲起表姐的婚事，在最后一刻突然散了。',
        line: "He dumped her two weeks before the wedding. Everyone was shocked.",
        lineCn: '他在婚礼前两周把她甩了，所有人都震惊了。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'abandon a partner', cn: '把恋人甩了', correct: true, reason: '婚礼前突然结束关系，dump 在口语里指甩掉恋人。' },
          { key: 'B', en: 'pursue someone', cn: '追求某人', correct: false, reason: '婚礼前两周不会是追求，而是结束。' },
          { key: 'C', en: 'forgive someone', cn: '原谅某人', correct: false, reason: '所有人都震惊，显然不是原谅。' }
        ],
        analysis: '婚礼前突然结束关系，dump 在口语里指把恋人甩掉、抛弃。',
        wrongFeedback: '她答成“追求”，周叙摇头：“婚礼前两周？”',
        afterCorrect: '她忽然明白，自己怕的不是婚姻，是被丢下。'
      }
    ],
    completeText: '那扇门最后还是开了。屋里飘出饭菜味，周叙的母亲在厨房喊他名字，像喊了很多年。'
  },
  {
    id: 'pl_25',
    index: 25,
    title: '第 25 章 · 母亲的电话',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '母亲在电话里哭，说父亲又没回家。温以宁站在阳台上，听了一整夜的风。天亮时，周叙的消息躺在最上面：“今天降温，记得穿厚点。”',
    questions: [
      {
        plotDescription: '她第一次对别人说起家里的事，声音很平。',
        line: "My father cheated. That's why I don't believe in promises.",
        lineCn: '我爸出过轨，所以我不太相信承诺。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'copy in an exam', cn: '考试作弊', correct: false, reason: '她说的是父亲对婚姻的背叛，不是考试。' },
          { key: 'B', en: 'be unfaithful in love', cn: '出轨、背叛感情', correct: true, reason: '父亲的事让她不信承诺，cheat 指感情里的不忠。' },
          { key: 'C', en: 'quarrel', cn: '争吵', correct: false, reason: '争吵不会直接推到“不信承诺”这一步。' }
        ],
        analysis: '她说的是父亲对婚姻的背叛，cheat 指感情里的不忠、出轨。',
        wrongFeedback: '她答成“作弊”，电话那头的母亲沉默了很久。',
        afterCorrect: '周叙只说：“我不是他。”'
      },
      {
        plotDescription: '她自嘲嘴笨，喜欢一个人十年，连句好听的话都说不出。',
        line: "I don't know how to flirt. I just stand there and say nothing.",
        lineCn: '我不会调情，我就站在那儿，什么也说不出来。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'tease romantically', cn: '调情、撩人', correct: true, reason: '她自嘲不会说好听的话，flirt 指带暧昧意味地撩人。' },
          { key: 'B', en: 'argue', cn: '争吵', correct: false, reason: '她说自己“什么也说不出来”，不是吵架。' },
          { key: 'C', en: 'lie', cn: '撒谎', correct: false, reason: '语境里没有欺骗，只有不善表达。' }
        ],
        analysis: '她自嘲不会说好听的话，flirt 指带暧昧意味地撩人、调情。',
        wrongFeedback: '她答成“吵架”，周叙笑了一声：“那你确实不会。”',
        afterCorrect: '他说：“不用会。你站着，我就过来了。”'
      },
      {
        plotDescription: '她忽然发现，自己活了三十年，感情履历一片空白。',
        line: "I don't have an ex. I've only ever liked one person.",
        lineCn: '我没有前任，我只喜欢过一个人。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'a former partner', cn: '前任', correct: true, reason: '和“只喜欢过一个人”对照，ex 指过去交往过的恋人。' },
          { key: 'B', en: 'a boss', cn: '老板', correct: false, reason: '这里谈的是感情经历，不是工作。' },
          { key: 'C', en: 'a classmate', cn: '同学', correct: false, reason: '同学不等于交往过的对象。' }
        ],
        analysis: '和“只喜欢过一个人”对照，ex 指过去交往过的恋人、前任。',
        wrongFeedback: '她答成“老板”，周叙的眼神软下来。',
        afterCorrect: '她说完才发觉，这句话等于把十年交代了。'
      },
      {
        plotDescription: '好友在电话那头恨铁不成钢，让她主动一点。',
        line: "I'll be your wingman. Just go talk to him.",
        lineCn: '我给你当僚机，去跟他说啊。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who helps you connect', cn: '帮忙撮合的朋友', correct: true, reason: '朋友在推她主动开口，wingman 指帮忙搭桥助攻的人。' },
          { key: 'B', en: 'a driver', cn: '司机', correct: false, reason: '这里没有开车，只有撮合。' },
          { key: 'C', en: 'a patient', cn: '病人', correct: false, reason: '电话那头是好友，不是病人。' }
        ],
        analysis: '朋友在推她主动开口，wingman 指帮忙搭桥、在旁边助攻的人。',
        wrongFeedback: '她答成“司机”，朋友翻了个白眼。',
        afterCorrect: '她攥着手机，最后只发了一句：“你睡了吗？”'
      }
    ],
    completeText: '消息几乎是秒回的：“没睡。阳台冷，进去说。”她看着屏幕，忽然不知道是该哭还是该笑。'
  },
  {
    id: 'pl_26',
    index: 26,
    title: '第 26 章 · 那年的冬天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '冬天第一场雪，两人被派去社区义诊。回程的公交上，她靠着窗睡着了，醒来时肩上多了一件外套，车窗外的雪还在下。',
    questions: [
      {
        plotDescription: '他看着窗外，忽然提起很多年前那个天台。',
        line: "The vibe that night, on the rooftop — I still think about it.",
        lineCn: '天台上那晚的氛围，我到现在还会想起。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'atmosphere and feeling', cn: '气氛、感觉', correct: true, reason: '他回忆的是那一晚的整体感觉，vibe 指氛围。' },
          { key: 'B', en: 'weather report', cn: '天气预报', correct: false, reason: '他说的不是温度风力，而是那晚的感觉。' },
          { key: 'C', en: 'a smell', cn: '气味', correct: false, reason: '句中没有任何气味线索。' }
        ],
        analysis: '他回忆的是那一晚的整体感觉，vibe 指氛围、气场。',
        wrongFeedback: '他答成“天气预报”，温以宁摇头：“那天风很大，但我说的是别的。”',
        afterCorrect: '温以宁看着窗外的雪，没接话。'
      },
      {
        plotDescription: '她说自己不太相信命中注定，他点了点头。',
        line: "I don't believe in soulmates. I believe in choosing someone every day.",
        lineCn: '我不信灵魂伴侣，我相信的是每天重新选择一个人。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a perfect person', cn: '完美的人', correct: false, reason: '他把“命中注定”换成“每天选择”，重点不在此。' },
          { key: 'B', en: 'a destined perfect match', cn: '天生契合的灵魂伴侣', correct: true, reason: '和“每天选择”对照，soulmate 指天生一对的人。' },
          { key: 'C', en: 'a coworker', cn: '同事', correct: false, reason: '这里谈的是爱情观，不是工作关系。' }
        ],
        analysis: '他把“命中注定”换成“每天选择”，soulmate 指天生契合的人。',
        wrongFeedback: '她答成“完美的人”，他笑：“没人完美。”',
        afterCorrect: '她轻声问：“那你会选多久？”他说：“十年起步。”'
      },
      {
        plotDescription: '她想起高中时，两人隔着两排座位，却总能同时抬头。',
        line: "We had chemistry before we even spoke. You felt it too, right?",
        lineCn: '我们还没说话就有化学反应了，你也感觉到了吧？',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'a science class', cn: '化学课', correct: false, reason: '两人隔着座位对视，不是在上课。' },
          { key: 'B', en: 'mutual attraction', cn: '彼此间的吸引', correct: true, reason: '还没说话就有感觉，chemistry 指人和人之间的吸引。' },
          { key: 'C', en: 'an argument', cn: '争吵', correct: false, reason: '同时抬头是默契，不是吵架。' }
        ],
        analysis: '两人之间的心动和默契，chemistry 指人和人之间的化学反应。',
        wrongFeedback: '她答成“化学课”，耳根却红了。',
        afterCorrect: '她把外套往上拉了拉，遮住半张脸。'
      },
      {
        plotDescription: '她说起自己为什么总是把人往外推。',
        line: "Trust is the part I'm still learning. Be patient with me.",
        lineCn: '信任是我还在学的事，对我有点耐心。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: "belief that someone won't hurt you", cn: '信任', correct: true, reason: '她说自己还在学，trust 指相信对方不会伤害自己。' },
          { key: 'B', en: 'speed', cn: '速度', correct: false, reason: '“还在学”说的是心理，不是快慢。' },
          { key: 'C', en: 'memory', cn: '记忆', correct: false, reason: '记性和把人推开没有直接关系。' }
        ],
        analysis: '她说自己还在学，trust 指相信对方不会伤害自己的那份信任。',
        wrongFeedback: '她答成“速度”，周叙点头：“好，我不催。”',
        afterCorrect: '他把她的手放进自己口袋里：“慢慢来。”'
      }
    ],
    completeText: '公交车到站时，雪已经积了薄薄一层。她下车，没有立刻抽回手。'
  },
  {
    id: 'pl_27',
    index: 27,
    title: '第 27 章 · 她终于哭了',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '春节前，她终于在他面前哭出来。不是委屈，是十年没敢说的话一起涌上来。周叙没有抱她，只把纸巾一张张递过去。',
    questions: [
      {
        plotDescription: '她擦着眼睛，自嘲这十年活得像一场独角戏。',
        line: "I've been loyal to a feeling for ten years. That's not healthy, is it?",
        lineCn: '我对一种感觉忠诚了十年，这不太健康，对吧？',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'faithful and devoted', cn: '忠诚、专一', correct: true, reason: '十年只守着同一个人，loyal 指感情上的忠诚专一。' },
          { key: 'B', en: 'lucky', cn: '幸运', correct: false, reason: '她是在自嘲辛苦，不是在说自己运气好。' },
          { key: 'C', en: 'calm', cn: '冷静', correct: false, reason: '她正哭着，和冷静相反。' }
        ],
        analysis: '十年只守着同一个人，loyal 指感情上的忠诚、专一和坚持。',
        wrongFeedback: '她答成“幸运”，周叙把纸巾递过去：“不是幸运，是辛苦。”',
        afterCorrect: '他没说“你不健康”，只说“你只是太久没被回应”。'
      },
      {
        plotDescription: '她急着解释，怕他以为自己又一次把人推开。',
        line: "I'm not rejecting you. I'm scared of losing you.",
        lineCn: '我不是在拒绝你，我是怕失去你。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: "refuse someone's feelings", cn: '拒绝', correct: true, reason: '她解释自己不是不接受，reject 指拒绝对方的心意。' },
          { key: 'B', en: 'accept', cn: '接受', correct: false, reason: '句首用了“不是”，正好相反。' },
          { key: 'C', en: 'forget', cn: '忘记', correct: false, reason: '她怕的是失去，不是忘记。' }
        ],
        analysis: '她解释自己不是不接受，reject 指拒绝对方的心意、把人推开。',
        wrongFeedback: '她答成“接受”，周叙轻声说：“那你为什么退钥匙？”',
        afterCorrect: '她哭得更厉害：“因为钥匙一交出去，我就没有退路了。”'
      },
      {
        plotDescription: '他把纸巾盒放在她手边，语气很轻。',
        line: "I confessed first, remember? You don't have to say it back tonight.",
        lineCn: '是我先表白的，记得吗？你今晚不用回应。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'admit a mistake', cn: '承认错误', correct: false, reason: '他指的是天台上说出喜欢，不是认错。' },
          { key: 'B', en: 'reveal romantic feelings', cn: '表白、坦白心意', correct: true, reason: '“先表白”说明是说出喜欢，confess 指坦白心意。' },
          { key: 'C', en: 'complain', cn: '抱怨', correct: false, reason: '他的话是体谅，不是抱怨。' }
        ],
        analysis: '他指的是天台上说出喜欢，confess 指坦白心意、表白。',
        wrongFeedback: '她答成“承认错误”，眼泪还挂在脸上，忍不住笑了一下。',
        afterCorrect: '她吸了吸鼻子：“那你也别催我。”'
      },
      {
        plotDescription: '他说自己想的不是束缚，而是有一个固定的归处。',
        line: "Commitment isn't a cage to me. It's a place to come back to.",
        lineCn: '承诺对我来说不是笼子，是一个可以回来的地方。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'long-term dedication to a relationship', cn: '对关系的承诺与投入', correct: true, reason: '他把承诺说成“可以回去的地方”，commitment 指长期投入。' },
          { key: 'B', en: 'a punishment', cn: '惩罚', correct: false, reason: '“可以回来的地方”是温柔的，不是惩罚。' },
          { key: 'C', en: 'a trip', cn: '旅行', correct: false, reason: '这里谈的是关系，不是出行。' }
        ],
        analysis: '他把承诺说成“可以回去的地方”，commitment 指对关系的长期投入。',
        wrongFeedback: '她答成“惩罚”，可他的话明明是温柔的。',
        afterCorrect: '温以宁看着他，第一次没有往后退。'
      }
    ],
    completeText: '那天她哭到很晚。走的时候，她把那把钥匙从包里拿出来，放进了自己的口袋。'
  },
  {
    id: 'pl_28',
    index: 28,
    title: '第 28 章 · 慢慢来',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他们开始约会，频率不高，一周一次。她学着不逃，他学着不催。科室的人都说，周主任最近看手机的次数变多了。',
    questions: [
      {
        plotDescription: '她承认自己不太会让人靠近，连并肩走都会紧张。',
        line: "Intimacy scares me more than surgery. I'm not joking.",
        lineCn: '亲密比手术更让我害怕，我没开玩笑。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'emotional closeness', cn: '亲密', correct: true, reason: '她拿手术作比较，说的是靠近一个人的害怕。' },
          { key: 'B', en: 'a medical operation', cn: '手术', correct: false, reason: '手术只是她用来对比的事物，不是被问的词。' },
          { key: 'C', en: 'loneliness', cn: '孤独', correct: false, reason: '她怕的是靠近，不是一个人待着。' }
        ],
        analysis: '她拿手术作比较，说的是靠近一个人的害怕，intimacy 指情感上的亲密。',
        wrongFeedback: '她答成“手术”，周叙看她：“你刚说比手术还怕。”',
        afterCorrect: '他没有靠近，只把椅子往旁边挪了一点：“那我坐这儿。”'
      },
      {
        plotDescription: '她发现他的好从来不挂在嘴上，全在琐碎的小事里。',
        line: "He shows affection in small ways — soup, gloves, a warm seat.",
        lineCn: '他的爱意都藏在小事里，一碗汤、一副手套、一个暖好的座位。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'tender love', cn: '爱慕、温柔的情感', correct: true, reason: '他不用嘴说，用细节表达在意，affection 指温柔爱意。' },
          { key: 'B', en: 'anger', cn: '生气', correct: false, reason: '汤是热的、座位是暖的，和生气无关。' },
          { key: 'C', en: 'distance', cn: '距离', correct: false, reason: '这些小事恰恰是在拉近距离。' }
        ],
        analysis: '他不用嘴说，用细节表达在意，affection 指温柔的爱意。',
        wrongFeedback: '她答成“生气”，可汤还是热的。',
        afterCorrect: '温以宁把汤喝完，连碗底都刮干净了。'
      },
      {
        plotDescription: '他们约好每周五不聊工作，只做普通情侣会做的事。',
        line: "Friday is our date night. No hospital talk, no pagers.",
        lineCn: '周五是我们的约会之夜，不许谈医院，不许带呼机。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fixed romantic evening', cn: '约会之夜', correct: true, reason: '固定的周五、只属于两个人，date night 就是约会夜。' },
          { key: 'B', en: 'a night shift', cn: '值班夜', correct: false, reason: '他明确说不许谈医院、不带呼机，显然不是值班。' },
          { key: 'C', en: 'a family dinner', cn: '家庭聚餐', correct: false, reason: '句中只提到两个人，没有家人。' }
        ],
        analysis: '固定的周五、只属于两个人，date night 指情侣之间的约会之夜。',
        wrongFeedback: '她答成“值班夜”，周叙笑：“那我可太亏了。”',
        afterCorrect: '那天她的呼机还是响了，他叹了口气：“走吧，我陪你。”'
      },
      {
        plotDescription: '同事撞见他对着窗户发呆，嘴角还挂着笑。',
        line: "He's totally smitten. Look at him, he's smiling at nothing.",
        lineCn: '他彻底神魂颠倒了，你看他，对着空气都在笑。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely in love', cn: '神魂颠倒', correct: true, reason: '对着空气笑、满眼都是她，smitten 指被爱冲昏头。' },
          { key: 'B', en: 'angry', cn: '生气', correct: false, reason: '他正笑着，和生气相反。' },
          { key: 'C', en: 'tired', cn: '疲倦', correct: false, reason: '发呆的笑不是累出来的。' }
        ],
        analysis: '对着空气笑、满眼都是她，smitten 指被爱冲昏头、神魂颠倒。',
        wrongFeedback: '她答成“生气”，可那人正对着窗户傻笑。',
        afterCorrect: '温以宁低头喝汤，耳朵却红透了。'
      }
    ],
    completeText: '周五的饭吃到一半，两个人同时接到电话。他们对视一眼，一起站起来，谁也没抱怨。'
  },
  {
    id: 'pl_29',
    index: 29,
    title: '第 29 章 · 并肩的雨伞',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '进修通知下来，周叙要去外地一年。那天下着雨，两人挤在一把伞下，谁都没先开口。伞面很小，他的半边肩膀很快就湿了。',
    questions: [
      {
        plotDescription: '她原以为自己会崩溃，结果只是安静地接过伞。',
        line: "The heartbreak I imagined never came. He just held the umbrella lower.",
        lineCn: '我想象中的心碎没有来，他只是把伞压低了一点。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep emotional pain', cn: '心碎', correct: true, reason: '她原以为会受重创，heartbreak 指感情上的巨大痛苦。' },
          { key: 'B', en: 'a pleasant surprise', cn: '惊喜', correct: false, reason: '她要面对分别，不是收到礼物。' },
          { key: 'C', en: 'a misunderstanding', cn: '误会', correct: false, reason: '这里没有误会，只有离别。' }
        ],
        analysis: '她原以为会受重创，heartbreak 指感情上的巨大痛苦、心碎。',
        wrongFeedback: '她答成“惊喜”，可伞明明在往她这边偏。',
        afterCorrect: '雨落在伞面上，她忽然觉得一年也没那么长。'
      },
      {
        plotDescription: '他说一年很快，她低头看着地上的水洼。',
        line: "Long-distance is hard, but I'd rather try than not have you.",
        lineCn: '异地恋很难，但我宁愿试试，也不想没有你。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a long phone call', cn: '长途电话', correct: false, reason: '他去外地一年，重点是两人分隔两地。' },
          { key: 'B', en: 'a relationship across cities', cn: '异地恋', correct: true, reason: '两人要在不同城市一年，long-distance 指异地恋。' },
          { key: 'C', en: 'a long trip', cn: '长途旅行', correct: false, reason: '这不是旅行，而是长期分隔。' }
        ],
        analysis: '他去外地一年、两人分隔两地，long-distance 指异地恋。',
        wrongFeedback: '她答成“长途电话”，周叙轻轻叹气。',
        afterCorrect: '她把伞往他那边推了推：“那你要每天打给我。”'
      },
      {
        plotDescription: '她忽然问他，会不会觉得她这样的人太难靠近。',
        line: "I could never do polyamory. I can only look at one person.",
        lineCn: '我做不来多边恋，我一次只能看一个人。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having several partners', cn: '多边恋', correct: true, reason: '和“一次只能看一个人”对照，指同时与多人交往。' },
          { key: 'B', en: 'being single', cn: '单身', correct: false, reason: '她说的是关系形式，不是单身。' },
          { key: 'C', en: 'remarriage', cn: '复婚', correct: false, reason: '句中没有任何复婚的线索。' }
        ],
        analysis: '和“一次只能看一个人”对照，polyamory 指同时与多人交往的多边恋。',
        wrongFeedback: '她答成“单身”，周叙摇头：“你听我后半句。”',
        afterCorrect: '他说：“我也一样。”声音很轻，被雨盖住了一半。'
      },
      {
        plotDescription: '她说起父母那场分开，自己为什么总想先退一步。',
        line: "My parents' divorce taught me to leave before I get left.",
        lineCn: '我父母的离婚教会我，在被丢下之前先走。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'the legal end of a marriage', cn: '离婚', correct: true, reason: '她讲父母婚姻结束、自己因此怕被丢下。' },
          { key: 'B', en: 'a wedding', cn: '婚礼', correct: false, reason: '婚礼是结合，和“被丢下”相反。' },
          { key: 'C', en: 'moving away', cn: '搬家', correct: false, reason: '搬家不会直接教人“先走”。' }
        ],
        analysis: '她讲父母婚姻结束、自己因此怕被丢下，divorce 指离婚。',
        wrongFeedback: '她答成“婚礼”，话一出口自己都沉默了。',
        afterCorrect: '周叙把伞柄塞进她手里：“这次你先拿着，我不走。”'
      }
    ],
    completeText: '雨停了，伞还举着。她忽然发现，自己已经把“一年”在心里排成了三百六十五天。'
  },
  {
    id: 'pl_30',
    index: 30,
    title: '第 30 章 · 第三幕落幕',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他走前最后一天，科室给他办欢送会。有人喝多了，说外科主任一走，急诊科要冷清一半。温以宁坐在角落，杯子里的饮料一口没动。',
    questions: [
      {
        plotDescription: '有人低声议论他升得快，是靠关系，还说听见了绯闻。',
        line: "The rumor about an affair was fake. Someone just wanted his position.",
        lineCn: '那个出轨传闻是假的，有人只是想要他的位置。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship', cn: '绯闻、私情', correct: true, reason: '传闻指私生活不当，affair 在此指不正当的男女关系。' },
          { key: 'B', en: 'a meeting', cn: '会议', correct: false, reason: '会议不会有“真假”传闻，也不涉及位置之争。' },
          { key: 'C', en: 'a surgery', cn: '手术', correct: false, reason: '手术和“想要他的位置”没有关系。' }
        ],
        analysis: '传闻指私生活不当，affair 在这种语境里指不正当的男女关系。',
        wrongFeedback: '她答成“会议”，说这话的护士都笑了。',
        afterCorrect: '温以宁把杯子放下，第一次当众替他说话：“他不是那种人。”'
      },
      {
        plotDescription: '散场后，她帮他收拾东西，忽然说了句很轻的话。',
        line: "I don't need grand romance. I just need you to come back.",
        lineCn: '我不需要盛大的浪漫，我只需要你回来。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'romantic gestures and feeling', cn: '浪漫', correct: true, reason: '她把“盛大的浪漫”和“回来”对比，romance 指浪漫情调。' },
          { key: 'B', en: 'a gift', cn: '礼物', correct: false, reason: '礼物只是浪漫的一种，不能概括整句。' },
          { key: 'C', en: 'a promise', cn: '承诺', correct: false, reason: '她强调的是形式上的浪漫，不是承诺本身。' }
        ],
        analysis: '她把“盛大的浪漫”和“回来”对比，romance 指浪漫的情调和举动。',
        wrongFeedback: '她答成“礼物”，周叙看她：“比礼物重要。”',
        afterCorrect: '他低声说：“那我把这一年，都攒着回来给你。”'
      },
      {
        plotDescription: '同事羡慕地说，周主任这种人，喜欢谁都藏在行动里。',
        line: "His devotion is in the details. He remembers what I forget.",
        lineCn: '他的深情都在细节里，我忘的他都记得。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep and lasting dedication', cn: '深情、奉献', correct: true, reason: '他长期默默记得她的小事，devotion 指持久的投入。' },
          { key: 'B', en: 'doubt', cn: '怀疑', correct: false, reason: '记住她的药名是投入，不是怀疑。' },
          { key: 'C', en: 'distance', cn: '距离', correct: false, reason: '细节里的照顾恰恰是在靠近。' }
        ],
        analysis: '他长期默默记得她的小事，devotion 指持久的投入与深情。',
        wrongFeedback: '她答成“怀疑”，可他把她的药名都记住了。',
        afterCorrect: '她低头笑了：“你连我不吃香菜都记得。”'
      },
      {
        plotDescription: '有人问她怕不怕一年太长，她想了想。',
        line: "Passion fades. What's left is whether you still choose each other.",
        lineCn: '激情会退，剩下的是你们还选不选彼此。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'intense romantic feeling', cn: '激情', correct: true, reason: '和“还选不选彼此”对照，passion 指热烈的感情冲动。' },
          { key: 'B', en: 'patience', cn: '耐心', correct: false, reason: '她说的是热度和选择，不是忍耐。' },
          { key: 'C', en: 'memory', cn: '记忆', correct: false, reason: '记忆不会“退去”后被选择取代。' }
        ],
        analysis: '和“还选不选彼此”对照，passion 指热烈的感情冲动，会随时间退去。',
        wrongFeedback: '她答成“耐心”，周叙摇头：“不是那个。”',
        afterCorrect: '温以宁看着他，慢慢说：“那我选。”'
      }
    ],
    completeText: '第三幕结束在机场。她站在安检口外，没哭，也没挥手，只在他回头时，轻轻点了下头。'
  },
  {
    id: 'pl_31',
    index: 31,
    title: '第 31 章 · 靠近一点点',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周叙走后，科室里有人传他是靠关系调走。温以宁第一次没有忍，直接在办公室把话问清楚。她发现，替一个人说话，比想象中容易。',
    questions: [
      {
        plotDescription: '她把门关上，走到那个同事桌前，声音很稳。',
        line: "I need to confront her about what she said. I'm not letting it slide.",
        lineCn: '我得去跟她对质，不能就这么算了。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'pretend not to hear', cn: '假装没听见', correct: false, reason: '她已经走到桌前，还要“不让它过去”，不可能装没听见。' },
          { key: 'B', en: 'face and question directly', cn: '当面对质', correct: true, reason: '关上门、当面问清楚，confront 指直接面对并质问。' },
          { key: 'C', en: 'apologize', cn: '道歉', correct: false, reason: '她是去追问造谣的人，没有道歉的理由。' }
        ],
        analysis: '关上门、当面把话问清楚，confront 指正面面对某人、直接质问。',
        wrongFeedback: '她答成“假装没听见”，可那口气怎么也咽不下去。',
        afterCorrect: '她站在办公室门口，声音不大，但每个字都很清楚。'
      },
      {
        plotDescription: '对方不肯认，还笑着说只是玩笑，她把手里的记录本合上。',
        line: "If she keeps doing this, I'll cut ties with her completely.",
        lineCn: '她再这样，我就跟她彻底断交。',
        prompt: "根据上下文，选出画线词汇 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'work together', cn: '合作', correct: false, reason: '对方一再造谣，她不可能选择继续合作。' },
          { key: 'B', en: 'buy her a meal', cn: '请她吃饭', correct: false, reason: '这既不合语境，也解决不了造谣的问题。' },
          { key: 'C', en: 'end the relationship', cn: '断绝关系', correct: true, reason: '她说不愿再往来，cut ties 指彻底切断关系。' }
        ],
        analysis: '对反复造谣的人不再往来，cut ties 指切断关系、断绝联系。',
        wrongFeedback: '她答成“合作”，同事们都愣住了。',
        afterCorrect: '话说完，办公室里安静了几秒，然后有人先低了头。'
      },
      {
        plotDescription: '第二天排班出了错，那位同事却把责任推到了周叙身上。',
        line: "I messed up the schedule, and she blamed you for it.",
        lineCn: '我把排班弄错了，她却把责任推给你。',
        prompt: "根据上下文，选出画线词汇 'Mess up' 最准确的意思。",
        options: [
          { key: 'A', en: 'do something wrong', cn: '搞砸、弄错', correct: true, reason: '排班出了错、还被人甩锅，mess up 指把事情弄糟。' },
          { key: 'B', en: 'organize perfectly', cn: '整理得很好', correct: false, reason: '后面已经说“出了错”，和整理得好相反。' },
          { key: 'C', en: 'save a file', cn: '保存文件', correct: false, reason: '这里说的是排班错误，不是文件操作。' }
        ],
        analysis: '排班出错、还被人甩锅，mess up 指把事情弄糟、做错。',
        wrongFeedback: '她答成“整理好”，对方一脸茫然。',
        afterCorrect: '温以宁把排班表拍在桌上：“那我们把时间线捋一遍。”'
      },
      {
        plotDescription: '她拉住还想再忍的实习生，让她现在就去解释。',
        line: "Don't screw up your chance to explain. Talk to her now.",
        lineCn: '别把解释的机会弄没了，现在就去找她说。',
        prompt: "根据上下文，选出画线词汇 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'cherish', cn: '珍惜', correct: false, reason: '“别”后面接珍惜，语义别扭，也不是原词意思。' },
          { key: 'B', en: 'ruin or spoil', cn: '弄糟、搞坏', correct: true, reason: '机会一旦错过就没了，screw up 指把事情搞坏。' },
          { key: 'C', en: 'give up', cn: '放弃', correct: false, reason: '她是在催对方去说，不是让人放弃。' }
        ],
        analysis: '机会一旦错过就补不回来，screw up 指把事情弄糟、搞坏。',
        wrongFeedback: '她答成“珍惜”，句子读起来别扭，自己先皱了眉。',
        afterCorrect: '她深吸一口气，敲了门。'
      }
    ],
    completeText: '那天之后，科室里再没人拿周叙的事开玩笑。温以宁回到座位，才发现手心全是汗。'
  },
  {
    id: 'pl_32',
    index: 32,
    title: '第 32 章 · 见家长',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '春节，周叙飞回来。温以宁带他回家吃饭，温母在厨房忙了一下午，饭桌上却忽然安静。周叙放下筷子，先开了口。',
    questions: [
      {
        plotDescription: '小姨笑着把椅子往前挪，非要听他们怎么在一起的。',
        line: "Come on, spill the tea. How did you two end up together?",
        lineCn: '快说快说，吃瓜了，你们俩怎么在一起的？',
        prompt: "根据上下文，选出画线词汇 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'pour hot tea', cn: '倒热茶', correct: false, reason: '小姨问的是恋爱经过，不是让人添茶。' },
          { key: 'B', en: 'share the gossip', cn: '爆料、说八卦', correct: true, reason: '一桌人等着听故事，spill the tea 指把八卦说出来。' },
          { key: 'C', en: 'keep quiet', cn: '保持沉默', correct: false, reason: '她正催着人讲，和沉默相反。' }
        ],
        analysis: '亲戚笑着追问恋爱经过，spill the tea 指把八卦、内情说出来。',
        wrongFeedback: '他答成“倒茶”，一桌人笑成一片。',
        afterCorrect: '周叙看了温以宁一眼，慢慢说：“是我先喜欢她的。”'
      },
      {
        plotDescription: '温母半信半疑，他放下杯子，语气认真。',
        line: "I swear to god I didn't plan this. It just happened.",
        lineCn: '我对天发誓，我真没计划，就是自然而然。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'promise solemnly that it is true', cn: '对天发誓、强调是真的', correct: true, reason: '他急着解释不是刻意安排，用这句话强调没撒谎。' },
          { key: 'B', en: 'tell a lie', cn: '撒谎', correct: false, reason: '他正是在证明自己没撒谎，方向相反。' },
          { key: 'C', en: 'pray', cn: '祈祷', correct: false, reason: '饭桌上是在解释，不是在祈祷。' }
        ],
        analysis: '他急着解释不是刻意安排，swear to god 用来强调自己说的是真话。',
        wrongFeedback: '他答成“撒谎”，温母的筷子停在半空。',
        afterCorrect: '温以宁低头扒饭，耳朵却红了。'
      },
      {
        plotDescription: '温母说了几句不太好听的话，他没有反驳，只把碗放下。',
        line: "Whatever. Believe what you want. I know what I feel.",
        lineCn: '随便吧，你爱信不信，我知道自己的感觉。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'no matter what', cn: '无论什么', correct: false, reason: '这里不是连接从句，而是独立的口气词。' },
          { key: 'B', en: 'very angry', cn: '非常生气', correct: false, reason: '他的语气是退让，不是发火。' },
          { key: 'C', en: 'fine, forget it', cn: '随便吧、算了', correct: true, reason: '他不再争辩、把话放下，whatever 表示“随便、算了”。' }
        ],
        analysis: '他懒得再争辩，whatever 在这里表示“随便、算了”的退让语气。',
        wrongFeedback: '他答成“无论什么”，句子完全不通。',
        afterCorrect: '温母看了他很久，忽然叹了口气：“吃饭吧。”'
      },
      {
        plotDescription: '温以宁听说他专程飞回来，筷子都停在半空。',
        line: "Seriously? You flew back just for one dinner?",
        lineCn: '你认真的吗？你飞回来就为了一顿饭？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'in a serious manner', cn: '严肃地', correct: false, reason: '这里是独立的反问，不是修饰动作的副词。' },
          { key: 'B', en: 'are you kidding me?', cn: '你认真的吗', correct: true, reason: '她惊讶他专程飞回，seriously 是难以置信的反问。' },
          { key: 'C', en: 'very good', cn: '真的很好', correct: false, reason: '她是在吃惊，不是在夸好。' }
        ],
        analysis: '她惊讶他专程飞回，seriously 在这里是难以置信的反问“你认真的吗”。',
        wrongFeedback: '他答成“严肃地”，温以宁忍不住笑。',
        afterCorrect: '周叙给她夹了块鱼：“不止一顿。”'
      }
    ],
    completeText: '那顿饭吃到很晚。温母送他到门口，说了句“下次别飞了”，语气却软了。'
  },
  {
    id: 'pl_33',
    index: 33,
    title: '第 33 章 · 父亲的沉默',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '父亲突然出现在医院门口，拎着一袋橘子。温以宁站在原地，十年没叫出口的那个称呼，卡在喉咙里。',
    questions: [
      {
        plotDescription: '他站在风里，先把橘子往前递了递。',
        line: "My bad. I should have called before coming.",
        lineCn: '我的错，我该来之前先打个电话。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my goodness', cn: '我的天', correct: false, reason: '这是感叹，不是认错，后面还接了具体该做的事。' },
          { key: 'B', en: 'my business', cn: '我的事', correct: false, reason: '句子里是在承担责任，不是强调私事。' },
          { key: 'C', en: 'my fault, sorry', cn: '我的锅、我的错', correct: true, reason: '他意识到自己来得唐突，my bad 是口语里的认错。' }
        ],
        analysis: '他意识到自己来得唐突，my bad 是口语里轻描淡写的认错。',
        wrongFeedback: '她答成“我的天”，父亲的表情更僵了。',
        afterCorrect: '她接过橘子，袋子很沉，像是装了别的话。'
      },
      {
        plotDescription: '两人在花坛边坐下，他看着地面，忽然提起从前。',
        line: "Don't blame your mother for everything. Some of it was mine.",
        lineCn: '别把一切都怪在你妈身上，有些是我的错。',
        prompt: "根据上下文，选出画线词汇 'Blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'hold responsible', cn: '责怪、归咎', correct: true, reason: '他在承认自己的责任，blame 指把过错归到别人身上。' },
          { key: 'B', en: 'praise', cn: '表扬', correct: false, reason: '“有些是我的错”明显是在认错，不是表扬。' },
          { key: 'C', en: 'take care of', cn: '照顾', correct: false, reason: '照顾母亲和分担过错是两回事。' }
        ],
        analysis: '他在承认自己的责任，blame 指把过错归到别人身上、责怪。',
        wrongFeedback: '她答成“表扬”，父亲沉默了很久。',
        afterCorrect: '温以宁看着他的手，那双手已经有很多皱纹。'
      },
      {
        plotDescription: '他说起她小时候，家里的声音总是很大。',
        line: "We used to argue every night. You probably heard all of it.",
        lineCn: '我们以前每晚都吵，你大概全听见了。',
        prompt: "根据上下文，选出画线词汇 'Argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'chat happily', cn: '愉快聊天', correct: false, reason: '“声音总是很大”和“每晚”说明不是愉快聊天。' },
          { key: 'B', en: 'quarrel', cn: '争吵', correct: true, reason: '每晚的冲突、孩子都听见，argue 指反复争吵。' },
          { key: 'C', en: 'cook', cn: '做饭', correct: false, reason: '做饭不会让孩子“全听见”还留下阴影。' }
        ],
        analysis: '父母婚姻里的冲突反复发生，argue 指争吵、争执。',
        wrongFeedback: '她答成“聊天”，可她的童年没有那种热闹。',
        afterCorrect: '她低声说：“我戴着耳机，也听得见。”'
      },
      {
        plotDescription: '他停了很久，才把最难的那句说出口。',
        line: "I'm sorry you heard me yell. I was not a good father.",
        lineCn: '对不起让你听见我大喊大叫，我不是个好父亲。',
        prompt: "根据上下文，选出画线词汇 'Yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'sing', cn: '唱歌', correct: false, reason: '“不是个好父亲”说明那声音是伤人的，不是唱歌。' },
          { key: 'B', en: 'apologize', cn: '道歉', correct: false, reason: 'yell 是发出声音的动作，道歉是后面的内容。' },
          { key: 'C', en: 'shout loudly', cn: '大喊大叫', correct: true, reason: '他回忆自己发脾气的方式，yell 指大声吼叫。' }
        ],
        analysis: '他回忆自己发脾气的方式，yell 指大声吼叫、喊叫。',
        wrongFeedback: '她答成“唱歌”，眼眶却先红了。',
        afterCorrect: '她没说话，只把橘子分了一半递回去。'
      }
    ],
    completeText: '父亲走的时候，背影比记忆里矮。她站在门口，第一次没有立刻转身。'
  },
  {
    id: 'pl_34',
    index: 34,
    title: '第 34 章 · 一桌家常菜',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '元宵节，温以宁把父母都请来了。桌上四菜一汤，谁都没提过去。周叙坐在她旁边，替她把鱼刺挑干净。',
    questions: [
      {
        plotDescription: '父亲说起当年的事，一口咬定自己没做错。',
        line: "He denied everything, but his hands were shaking.",
        lineCn: '他什么都否认，可手一直在抖。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'refuse to admit', cn: '否认', correct: true, reason: '嘴上不承认、身体露了馅，deny 指否认事实。' },
          { key: 'B', en: 'admit', cn: '承认', correct: false, reason: '后半句用“可手在抖”转折，说明他并没有承认。' },
          { key: 'C', en: 'agree', cn: '同意', correct: false, reason: '同意和“否认一切”正好相反。' }
        ],
        analysis: '嘴上不承认、身体却露了馅，deny 指否认事实、拒绝承认。',
        wrongFeedback: '他答成“承认”，温以宁看了他一眼。',
        afterCorrect: '周叙没接话，只把汤往她父亲那边推了推。'
      },
      {
        plotDescription: '饭吃到一半，父亲忽然站起来，端着杯子。',
        line: "He finally apologized. It only took twenty years.",
        lineCn: '他终于道歉了，只用了二十年。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'complain', cn: '抱怨', correct: false, reason: '他端着杯子站起来，不是要抱怨。' },
          { key: 'B', en: 'say sorry', cn: '道歉', correct: true, reason: '迟到二十年的那句“对不起”，apologize 指为过错道歉。' },
          { key: 'C', en: 'explain', cn: '解释', correct: false, reason: '“只用了二十年”指向的是一句迟来的道歉。' }
        ],
        analysis: '迟到二十年的“对不起”，apologize 指为自己的过错道歉。',
        wrongFeedback: '他答成“抱怨”，可桌上真的安静了。',
        afterCorrect: '温以宁低头喝汤，汤有点咸。'
      },
      {
        plotDescription: '她放下勺子，说自己还没想好要不要翻篇。',
        line: "I don't know if I can forgive him. But I can listen.",
        lineCn: '我不知道能不能原谅他，但我可以听他说。',
        prompt: "根据上下文，选出画线词汇 'Forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'forget completely', cn: '彻底忘记', correct: false, reason: '她说的是“听”，不是失忆，细节她都记得。' },
          { key: 'B', en: 'blame', cn: '责怪', correct: false, reason: '她已经愿意听，和继续责怪不是一回事。' },
          { key: 'C', en: 'stop blaming and accept', cn: '原谅', correct: true, reason: '她在考虑是否放下怨恨，forgive 指原谅。' }
        ],
        analysis: '她说的是放下怨恨、不再追究，forgive 指原谅。',
        wrongFeedback: '他答成“忘记”，可她连细节都记得。',
        afterCorrect: '周叙轻轻碰了碰她的手背：“那就先听。”'
      },
      {
        plotDescription: '温母整晚没怎么说话，最后却把饭递了过去。',
        line: "She held a grudge for years, but tonight she passed him the rice.",
        lineCn: '她记恨了很多年，可今晚还是把饭递给了他。',
        prompt: "根据上下文，选出画线词汇 'Grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'long-held resentment', cn: '记仇、长期怨恨', correct: true, reason: '多年放不下、与递饭形成对照，grudge 指记恨。' },
          { key: 'B', en: 'gratitude', cn: '感激', correct: false, reason: '她整晚没说话，不是心怀感激的状态。' },
          { key: 'C', en: 'care', cn: '关心', correct: false, reason: '递饭是松动，不是一直关心。' }
        ],
        analysis: '多年放不下的怨，与递饭的动作形成对照，grudge 指记恨、长期怨恨。',
        wrongFeedback: '他答成“感激”，可她说起往事时语气还是硬的。',
        afterCorrect: '那碗饭递过去，桌上所有人都松了一口气。'
      }
    ],
    completeText: '饭后，温母在厨房洗碗，父亲在旁边擦盘子。温以宁站在门口看了很久，没有进去。'
  },
  {
    id: 'pl_35',
    index: 35,
    title: '第 35 章 · 进修通知',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '院里公布进修名单，温以宁拿到了名额，城市正好是周叙所在的那座。她盯着通知单，第一反应还是想找理由拒绝。',
    questions: [
      {
        plotDescription: '她跟同事说，自己走了会拖累大家，说着说着声音低下去。',
        line: "Taking this spot would betray the team. At least that's what I told myself.",
        lineCn: '拿这个名额像是背叛团队，至少我是这么告诉自己的。',
        prompt: "根据上下文，选出画线词汇 'Betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'help', cn: '帮助', correct: false, reason: '她把它当成一种对不起，和帮助相反。' },
          { key: 'B', en: 'thank', cn: '感谢', correct: false, reason: '句中没有任何感谢对象，语气是自责。' },
          { key: 'C', en: 'let down, be disloyal', cn: '背叛、辜负', correct: true, reason: '她担心对不起同事，betray 指辜负信任。' }
        ],
        analysis: '她把离开说成对不起同事，betray 指背叛、辜负他人的信任。',
        wrongFeedback: '她答成“帮助”，可这理由连她自己都说服不了。',
        afterCorrect: '周叙在电话那头说：“你不是在背叛谁，你是在往前走。”'
      },
      {
        plotDescription: '她嘴上说不想去，电话那头的人直接拆穿了她。',
        line: "You're a terrible liar. You want to come. Just say it.",
        lineCn: '你太不会撒谎了，你想来，直接说。',
        prompt: "根据上下文，选出画线词汇 'Liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lawyer', cn: '律师', correct: false, reason: '这里没有法律场景，只有拆穿口是心非。' },
          { key: 'B', en: 'a person who lies', cn: '骗子、撒谎的人', correct: true, reason: '他直接点破她口是心非，liar 指说谎的人。' },
          { key: 'C', en: 'a listener', cn: '听众', correct: false, reason: '听众和“不会撒谎”搭配不上。' }
        ],
        analysis: '他拆穿她的口是心非，liar 指说谎的人。',
        wrongFeedback: '她答成“律师”，忍不住笑出声。',
        afterCorrect: '她咬了下嘴唇：“那我说了，你接住。”'
      },
      {
        plotDescription: '她终于承认，自己这些天一直在硬撑。',
        line: "I'm tired of being fake. I don't want to pretend I'm fine.",
        lineCn: '我厌倦了虚伪，不想再装作没事。',
        prompt: "根据上下文，选出画线词汇 'Fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'not genuine, pretending', cn: '虚伪、装出来的', correct: true, reason: '她不想再演“没事”，fake 指不真实、装出来的样子。' },
          { key: 'B', en: 'sincere', cn: '真诚', correct: false, reason: '她说的是“装”，和真诚相反。' },
          { key: 'C', en: 'brave', cn: '勇敢', correct: false, reason: '硬撑不等于勇敢，句中强调的是假装。' }
        ],
        analysis: '她不想再演“没事”，fake 指不真实、装出来的样子。',
        wrongFeedback: '她答成“真诚”，可她说的是“装”。',
        afterCorrect: '电话那头安静了两秒：“那就别装。”'
      },
      {
        plotDescription: '她提起父亲，说他说自己变了，她一个字都不信。',
        line: "I called him a hypocrite for saying he'd changed.",
        lineCn: '他说自己变了，我骂他是伪君子。',
        prompt: "根据上下文，选出画线词汇 'Hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'a hero', cn: '英雄', correct: false, reason: '她是在骂人，不可能是夸英雄。' },
          { key: 'B', en: 'a patient', cn: '病人', correct: false, reason: '这里说的是父亲的言行，不是病人身份。' },
          { key: 'C', en: 'someone who says one thing but does another', cn: '伪君子', correct: true, reason: '她不信父亲的改变，hypocrite 指说一套做一套的人。' }
        ],
        analysis: '她不信父亲的改变，hypocrite 指嘴上说得好听、做的却是另一套的人。',
        wrongFeedback: '她答成“英雄”，自己都觉得荒唐。',
        afterCorrect: '周叙问：“那如果他是真的变了呢？”'
      }
    ],
    completeText: '报名表交上去那天，她在走廊里站了很久。窗外是春天，树刚发新芽。'
  },
  {
    id: 'pl_36',
    index: 36,
    title: '第 36 章 · 异地第两百天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '异地第两百天，视频通话卡了三次。她值完夜班坐在更衣室，头发乱着，说了一句“我们这样是不是很没意思”。',
    questions: [
      {
        plotDescription: '她说科室里有人为了名额，表面帮她，背后告了她一状。',
        line: "A colleague backstabbed me for the promotion. I saw the email.",
        lineCn: '一个同事为了升职背刺我，我看到了那封邮件。',
        prompt: "根据上下文，选出画线词汇 'Backstab' 最准确的意思。",
        options: [
          { key: 'A', en: 'help quietly', cn: '暗中帮助', correct: false, reason: '告状邮件不是帮助，方向正好相反。' },
          { key: 'B', en: 'betray behind someone’s back', cn: '背后捅刀、背刺', correct: true, reason: '表面同事、背后下手，backstab 指背刺。' },
          { key: 'C', en: 'praise publicly', cn: '公开表扬', correct: false, reason: '她看到的是告状邮件，不是表扬。' }
        ],
        analysis: '表面是同事、背后却下手，backstab 指背地里捅刀、出卖。',
        wrongFeedback: '他答成“帮助”，可那封邮件明明是告状。',
        afterCorrect: '温以宁在那头皱眉：“那你打算怎么办？”'
      },
      {
        plotDescription: '他说起自己也被上级这样对待过，让她别把错揽在身上。',
        line: "Don't let him gaslight you into thinking it's your fault.",
        lineCn: '别让他 PUA 你，让你以为都是你的错。',
        prompt: "根据上下文，选出画线词汇 'Gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'comfort', cn: '安慰', correct: false, reason: '让人怀疑自己是伤害，不是安慰。' },
          { key: 'B', en: 'praise', cn: '表扬', correct: false, reason: '句子里说的是被扭曲认知，不是被夸。' },
          { key: 'C', en: 'psychologically manipulate', cn: '心理操控、PUA', correct: true, reason: '对方让她怀疑自己，gaslight 指用心理手段操控认知。' }
        ],
        analysis: '对方让她怀疑自己、把错全揽下，gaslight 指用心理手段操控他人认知。',
        wrongFeedback: '他答成“安慰”，温以宁冷笑：“这算哪门子安慰。”',
        afterCorrect: '她沉默了一会儿：“我差点真的信了。”'
      },
      {
        plotDescription: '他提醒她，那个上级最擅长的就是先给甜头。',
        line: "He manipulates people by being nice first, then cruel.",
        lineCn: '他先对人好，再翻脸，就是这么操控人的。',
        prompt: "根据上下文，选出画线词汇 'Manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'control others unfairly', cn: '操控', correct: true, reason: '先示好再伤人，一步步控制别人，manipulate 指操控。' },
          { key: 'B', en: 'take care of', cn: '照顾', correct: false, reason: '“再翻脸”说明不是单纯的照顾。' },
          { key: 'C', en: 'forgive', cn: '原谅', correct: false, reason: '这里没有原谅，只有手段。' }
        ],
        analysis: '先示好再伤人，一步步控制别人的判断，manipulate 指操控。',
        wrongFeedback: '他答成“照顾”，可“再翻脸”三个字摆在那里。',
        afterCorrect: '周叙说：“把邮件留下，别自己扛。”'
      },
      {
        plotDescription: '她自嘲太好说话，谁求她帮忙都不会拒绝。',
        line: "You're not a push over. You just don't like fighting.",
        lineCn: '你不是老好人，你只是不喜欢争。',
        prompt: "根据上下文，选出画线词汇 'Push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'a leader', cn: '领导', correct: false, reason: '她自嘲好说话，和领导形象相反。' },
          { key: 'B', en: 'someone easily taken advantage of', cn: '老好人、容易被拿捏', correct: true, reason: '他强调她不是任人拿捏，push over 指好欺负的人。' },
          { key: 'C', en: 'a patient', cn: '病人', correct: false, reason: '这里说的是性格，不是病人。' }
        ],
        analysis: '他强调她不是任人拿捏，push over 指好说话、容易被欺负的老好人。',
        wrongFeedback: '他答成“领导”，她笑了一声：“我要是就好了。”',
        afterCorrect: '她低头，声音轻了：“那你教我怎么争。”'
      }
    ],
    completeText: '视频挂断前，他忽然说：“第两百天了。”她愣了一下，才反应过来他在数日子。'
  },
  {
    id: 'pl_37',
    index: 37,
    title: '第 37 章 · 视频里的手术灯',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '凌晨，他在那头刚下手术，背后是走廊的白灯。她抱着手机坐在值班室，忽然说想看他工作的样子。他把镜头转了一圈。',
    questions: [
      {
        plotDescription: '他提起上次评审会，有人当场质疑她的方案。',
        line: "I stood up for you in that meeting. Some people didn't like it.",
        lineCn: '我在会上替你说话了，有些人不高兴。',
        prompt: "根据上下文，选出画线词汇 'Stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'defend and support', cn: '捍卫、替人说话', correct: true, reason: '她在众人面前维护他，stand up for 指为某人挺身而出。' },
          { key: 'B', en: 'criticize', cn: '批评', correct: false, reason: '“有些人不高兴”说明她是在维护，不是批评。' },
          { key: 'C', en: 'avoid', cn: '躲避', correct: false, reason: '她当场开口，和躲避相反。' }
        ],
        analysis: '她在众人面前维护他，stand up for 指为某人挺身而出、说话。',
        wrongFeedback: '她答成“批评”，周叙笑：“你替我批评我？”',
        afterCorrect: '他看着她：“谢谢。但别把自己搭进去。”'
      },
      {
        plotDescription: '她说自己手里有原始记录，只是一直不敢拿出来。',
        line: "If they push you again, fight back. You have proof.",
        lineCn: '他们再逼你，就反击，你有证据。',
        prompt: "根据上下文，选出画线词汇 'Fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'give in', cn: '退让', correct: false, reason: '他让她别退，和退让相反。' },
          { key: 'B', en: 'stay silent', cn: '保持沉默', correct: false, reason: '手里有证据还沉默，正是他要她改变的做法。' },
          { key: 'C', en: 'resist and strike back', cn: '反击', correct: true, reason: '有证据在手、被逼到墙角，fight back 指回击。' }
        ],
        analysis: '有证据在手、被逼到墙角，fight back 指反击、回击。',
        wrongFeedback: '她答成“退让”，可他说的是“有证据”。',
        afterCorrect: '温以宁捏着手机，第一次觉得“反击”没那么可怕。'
      },
      {
        plotDescription: '她说自己明天要在会上讲清楚，数字一个都不会改。',
        line: "I'll defend my report tomorrow. I'm not changing the numbers.",
        lineCn: '明天我会为我的报告辩护，数字我不会改。',
        prompt: "根据上下文，选出画线词汇 'Defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'submit', cn: '提交', correct: false, reason: '提交只是动作，重点在“不改数字”的维护。' },
          { key: 'B', en: 'argue in support of', cn: '辩护、维护', correct: true, reason: '她要为自己的结论据理力争，defend 指辩护、维护。' },
          { key: 'C', en: 'revise', cn: '修改', correct: false, reason: '她明确说不改数字，和修改相反。' }
        ],
        analysis: '她要为自己的结论据理力争，defend 指辩护、维护。',
        wrongFeedback: '她答成“提交”，可重点在“不改数字”。',
        afterCorrect: '周叙点头：“那今晚早点睡，明天才有力气。”'
      },
      {
        plotDescription: '他让她别被几句闲话牵着走，早点休息。',
        line: "Ignore the noise. They want a reaction.",
        lineCn: '别理那些噪音，他们就想看你反应。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'pay no attention to', cn: '无视、不去理会', correct: true, reason: '对方故意挑事，ignore 指不去理会。' },
          { key: 'B', en: 'listen carefully', cn: '认真倾听', correct: false, reason: '他把那些话称为噪音，显然不是让她听。' },
          { key: 'C', en: 'write down', cn: '记录', correct: false, reason: '记录不是这里的建议。' }
        ],
        analysis: '对方故意挑事，ignore 指不去理会、无视。',
        wrongFeedback: '她答成“认真倾听”，可那些话根本不值得。',
        afterCorrect: '她笑了一下：“你以前可不这么会安慰人。”'
      }
    ],
    completeText: '视频里，他把镜头转向手术室的灯：“每次看到它亮着，我就想，你也在某盏灯下面。”'
  },
  {
    id: 'pl_38',
    index: 38,
    title: '第 38 章 · 沉默的举报信',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '匿名举报信送到院里，说她进修期间违规操作，还扬言要把她的报告撤下来。温以宁把原始数据打印了三份，一份交院办，一份留科室，一份锁进柜子。',
    questions: [
      {
        plotDescription: '评审会上，别人说得很多，她从头到尾没有辩解。',
        line: "Her silence in the meeting said more than any speech.",
        lineCn: '她在会上什么都没说，却比任何发言都有分量。',
        prompt: "根据上下文，选出画线词汇 'Silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'a speech', cn: '发言', correct: false, reason: '句子正把沉默和发言作对比，不能混为一谈。' },
          { key: 'B', en: 'laughter', cn: '笑声', correct: false, reason: '评审会气氛紧张，没有笑声。' },
          { key: 'C', en: 'the state of not speaking', cn: '沉默', correct: true, reason: '她全程不辩解，silence 指沉默。' }
        ],
        analysis: '她全程不辩解、只用行动回应，silence 指沉默。',
        wrongFeedback: '她答成“发言”，可整场会她一个字没说。',
        afterCorrect: '会后，主任把她那份数据留了下来。'
      },
      {
        plotDescription: '有人在楼梯间拦住她，话里带着明显的警告。',
        line: "He threatened to ruin my career if I spoke up.",
        lineCn: '他威胁说，我要是开口就毁了我的职业生涯。',
        prompt: "根据上下文，选出画线词汇 'Threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'encourage', cn: '鼓励', correct: false, reason: '用前途施压不是鼓励，语气完全相反。' },
          { key: 'B', en: 'warn with harm', cn: '威胁', correct: true, reason: '对方用前途施压，threaten 指威胁。' },
          { key: 'C', en: 'thank', cn: '感谢', correct: false, reason: '被人堵在楼梯间警告，没有感谢的理由。' }
        ],
        analysis: '对方用前途施压，threaten 指威胁、以伤害相要挟。',
        wrongFeedback: '她答成“鼓励”，可那句话明明是刀子。',
        afterCorrect: '温以宁把录音存进三个地方，才回了一句：“我知道了。”'
      },
      {
        plotDescription: '她把数据摊在桌上，一页一页翻给调查组看。',
        line: "They wanted to ruin my report, but the data is real.",
        lineCn: '他们想毁掉我的报告，可数据是真的。',
        prompt: "根据上下文，选出画线词汇 'Ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'destroy or spoil', cn: '毁掉、破坏', correct: true, reason: '对方想让她做不成，ruin 指毁掉。' },
          { key: 'B', en: 'publish', cn: '发表', correct: false, reason: '他们是要撤下报告，不是帮她发表。' },
          { key: 'C', en: 'translate', cn: '翻译', correct: false, reason: '这里没有翻译，只有数据真伪之争。' }
        ],
        analysis: '对方想让她做不成、把报告撤下，ruin 指毁掉、破坏。',
        wrongFeedback: '她答成“发表”，语境正好相反。',
        afterCorrect: '周叙在电话里说：“那就让数据自己说话。”'
      },
      {
        plotDescription: '调查组走后，她把报告副本锁进柜子。',
        line: "You can destroy a paper. You can't destroy the truth.",
        lineCn: '你可以毁掉一份文件，但毁不掉事实。',
        prompt: "根据上下文，选出画线词汇 'Destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'copy', cn: '复印', correct: false, reason: '复印是保留，不是毁掉。' },
          { key: 'B', en: 'destroy completely', cn: '摧毁', correct: true, reason: '文件和事实形成对比，destroy 指彻底摧毁。' },
          { key: 'C', en: 'collect', cn: '收藏', correct: false, reason: '收藏和“毁掉一份文件”语境不符。' }
        ],
        analysis: '文件和事实形成对比，destroy 指彻底摧毁、毁掉。',
        wrongFeedback: '她答成“复印”，自己都笑了。',
        afterCorrect: '她把柜子锁好，钥匙放进口袋。'
      }
    ],
    completeText: '举报最后被驳回。院里没有公开道歉，但从那以后，没人再动她的报告。'
  },
  {
    id: 'pl_39',
    index: 39,
    title: '第 39 章 · 三十七张机票',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '事情平息后，她整理抽屉，数出三十七张机票。每一张都是他飞回来又飞走的证明。她把它们摊在床上，忽然觉得异地也可以被数清楚。',
    questions: [
      {
        plotDescription: '她问他飞来飞去累不累，他摇头。',
        line: "I don't regret a single flight. Not one.",
        lineCn: '我一张机票都不后悔，一张都不。',
        prompt: "根据上下文，选出画线词汇 'Regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'forget', cn: '忘记', correct: false, reason: '每一张票他都留着，显然没有忘。' },
          { key: 'B', en: 'feel sorry about', cn: '后悔', correct: true, reason: '他愿意为每次往返付出，regret 指对做过的事后悔。' },
          { key: 'C', en: 'show off', cn: '炫耀', correct: false, reason: '他是在回答累不累，不是在炫耀。' }
        ],
        analysis: '他愿意为每次往返付出、一张都不后悔，regret 指对做过的事感到后悔。',
        wrongFeedback: '她答成“忘记”，可每一张票都被他留着。',
        afterCorrect: '她低头笑：“三十七张，够买一台不错的仪器了。”'
      },
      {
        plotDescription: '她问他要不要追究那些造谣的人，他放下手里的票。',
        line: "I don't want revenge. I want the truth on the record.",
        lineCn: '我不要复仇，我要真相留在记录里。',
        prompt: "根据上下文，选出画线词汇 'Revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'payback, retaliation', cn: '复仇、报复', correct: true, reason: '他把报复和“真相”对举，revenge 指报复。' },
          { key: 'B', en: 'a reward', cn: '奖励', correct: false, reason: '真相留在记录里不是奖励。' },
          { key: 'C', en: 'an apology', cn: '道歉', correct: false, reason: '他要的是记录，不是一句道歉。' }
        ],
        analysis: '他把“报复”和“真相”对举，revenge 指复仇、报复。',
        wrongFeedback: '他答成“奖励”，温以宁看他：“这像奖励吗？”',
        afterCorrect: '他补了一句：“但该道歉的人，一个都不能少。”'
      },
      {
        plotDescription: '她把机票摞好，说以后只想过安稳日子。',
        line: "All I want is peace. A quiet life with you.",
        lineCn: '我只想要平静，和你过安安静静的日子。',
        prompt: "根据上下文，选出画线词汇 'Peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'quarrel', cn: '争吵', correct: false, reason: '她要的是安静日子，和争吵相反。' },
          { key: 'B', en: 'wealth', cn: '财富', correct: false, reason: '句中没有任何关于钱的描述。' },
          { key: 'C', en: 'calm and freedom from conflict', cn: '平静、安宁', correct: true, reason: '和“安静的日子”并列，peace 指内心的安宁。' }
        ],
        analysis: '和“安静的日子”并列，peace 指没有冲突的平静与安宁。',
        wrongFeedback: '他答成“争吵”，她笑：“那你还挺会想。”',
        afterCorrect: '她把机票一张张收好，动作很慢。'
      },
      {
        plotDescription: '旧事说累了，她靠在他肩上，说不想再翻旧账。',
        line: "Can we call a truce? I'm tired of being angry.",
        lineCn: '我们能休战吗？我气累了。',
        prompt: "根据上下文，选出画线词汇 'Truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a pause in conflict', cn: '休战、暂时停火', correct: true, reason: '她想停下争吵，truce 指双方暂时停战。' },
          { key: 'B', en: 'a breakup', cn: '分手', correct: false, reason: '她靠在他肩上，不是要分开。' },
          { key: 'C', en: 'a wedding', cn: '结婚', correct: false, reason: '这里说的是停止争吵，不是婚礼。' }
        ],
        analysis: '她想停下争吵、不再翻旧账，truce 指双方暂时停战。',
        wrongFeedback: '他答成“分手”，她摇头：“我只是不想吵了。”',
        afterCorrect: '周叙沉默了一会儿：“好，休战。”'
      }
    ],
    completeText: '那天夜里，她把机票按日期排好，发现每一张的背面，都写着一个她的名字。'
  },
  {
    id: 'pl_40',
    index: 40,
    title: '第 40 章 · 车站的拥抱',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '进修结束那天，她拖着箱子出站，远远看见周叙站在人群里，手里举着一杯热饮。她走过去，第一次主动抱了他。',
    questions: [
      {
        plotDescription: '她提起父母终于坐下来吃了顿饭，虽然话还是不多。',
        line: "They finally reconciled after years of silence.",
        lineCn: '沉默多年后，他们终于和解了。',
        prompt: "根据上下文，选出画线词汇 'Reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'quarrel again', cn: '再次争吵', correct: false, reason: '“终于”加上一起吃饭，是缓和不是争吵。' },
          { key: 'B', en: 'move away', cn: '搬走', correct: false, reason: '一起吃饭不能推出搬家。' },
          { key: 'C', en: 'make peace after a conflict', cn: '和解', correct: true, reason: '多年不说话后重新和好，reconcile 指和解。' }
        ],
        analysis: '多年不说话后重新和好、能坐在一起吃饭，reconcile 指和解。',
        wrongFeedback: '她答成“再次争吵”，可她说的是“终于”。',
        afterCorrect: '周叙低头看她：“那我们呢，算不算？”'
      },
      {
        plotDescription: '她笑说上次吵架的内容，自己已经想不起来了。',
        line: "Our last argument was about something stupid. I don't even remember.",
        lineCn: '我们上次争吵是为了件小事，我都记不清了。',
        prompt: "根据上下文，选出画线词汇 'Argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a quarrel', cn: '争论、争吵', correct: true, reason: '两人为小事起冲突，argument 指争论。' },
          { key: 'B', en: 'a date', cn: '约会', correct: false, reason: '“为了件小事”说明是冲突，不是约会。' },
          { key: 'C', en: 'a trip', cn: '旅行', correct: false, reason: '句中没有任何出行信息。' }
        ],
        analysis: '两人为小事起冲突、事后都记不清，argument 指争论、争吵。',
        wrongFeedback: '她答成“约会”，周叙笑：“那倒希望是。”',
        afterCorrect: '她说：“以后吵完，别隔夜。”'
      },
      {
        plotDescription: '她承认这一年他们也吵过，但从来没有想过分开。',
        line: "We had a fight, but we never stopped loving each other.",
        lineCn: '我们吵过架，但从来没有不爱对方。',
        prompt: "根据上下文，选出画线词汇 'Fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'a match', cn: '比赛', correct: false, reason: '这里没有输赢和对手，只有两个人的冲突。' },
          { key: 'B', en: 'an angry dispute', cn: '争吵、冲突', correct: true, reason: '和“从没停止爱”并列，fight 指激烈争执。' },
          { key: 'C', en: 'a hug', cn: '拥抱', correct: false, reason: '拥抱不会用“吵过”来修饰。' }
        ],
        analysis: '和“从没停止爱”并列，fight 指激烈的争执、吵架。',
        wrongFeedback: '她答成“比赛”，可这里没有输赢。',
        afterCorrect: '他把她手里的箱子接过去：“那以后少吵。”'
      },
      {
        plotDescription: '她说两个人过日子，不能总让一个人退。',
        line: "A good relationship takes compromise. Both of us, not just you.",
        lineCn: '好的关系需要妥协，是两个人，不只你一个。',
        prompt: "根据上下文，选出画线词汇 'Compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'a command', cn: '命令', correct: false, reason: '“两个人各让一步”不是命令。' },
          { key: 'B', en: 'doubt', cn: '怀疑', correct: false, reason: '这里谈的是相处方式，不是信任问题。' },
          { key: 'C', en: 'each side giving a little', cn: '妥协、各让一步', correct: true, reason: '他强调双方都退一步，compromise 指妥协。' }
        ],
        analysis: '他强调双方都退一步、不能只让一个人扛，compromise 指妥协。',
        wrongFeedback: '她答成“命令”，可他说的是“两个人”。',
        afterCorrect: '她点头：“那这次，我先让一步。”'
      }
    ],
    completeText: '出站口人来人往。她抱着他，忽然发现，十年的距离原来可以缩成一个拥抱那么短。'
  },
  {
    id: 'pl_41',
    index: 41,
    title: '第 41 章 · 平安夜的戒指',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '平安夜，急诊科难得安静。周叙把温以宁叫到天台，说上来看看楼下的灯。他一只手一直揣在大衣口袋里，始终没有拿出来。',
    questions: [
      {
        plotDescription: '她盯着他那只一直不肯拿出来的手，笑意先一步浮上来。',
        line: "You're way too savvy to think I only brought you up here for the lights.",
        lineCn: '你这么精明，不会以为我叫你上来只是为了看灯吧。',
        prompt: "根据上下文，选出画线词汇 'Savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'sharp, quick to notice', cn: '精明、看得很透', correct: true, reason: '他打趣她一眼就能看穿自己的打算，savvy 指机敏、看得透。' },
          { key: 'B', en: 'innocent', cn: '天真的', correct: false, reason: '她恰恰是太看得懂才被他拿来打趣，和天真正好相反。' },
          { key: 'C', en: 'wealthy', cn: '有钱的', correct: false, reason: '这里谈的是眼力，不是钱包，savvy 与财富无关。' }
        ],
        analysis: '他半开玩笑地承认自己藏不住，savvy 在这里是“机敏、一眼看穿”，不是书呆子式的聪明。',
        wrongFeedback: '你把它理解成了“有钱”，他口袋里的手一僵，这点气氛全让你说没了。',
        afterCorrect: '她抱着手臂看他：“那口袋里是什么？”周叙沉默了半秒，终于把手拿出来，指节因为攥得太久有点发白。'
      },
      {
        plotDescription: '她没打算给他留台阶，话直白得让自己都愣了一下。',
        line: "I'll be blunt — if that's a ring, you'd better be sure about me.",
        lineCn: '我直说——如果那是戒指，你最好确定你要的是我。',
        prompt: "根据上下文，选出画线词汇 'Blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'dull, not sharp', cn: '钝的', correct: false, reason: 'blunt 形容刀是“钝”，可她说的是一句话，不是刀。' },
          { key: 'B', en: 'direct, saying it straight', cn: '直截了当、不绕弯子', correct: true, reason: '她声明自己要直说，blunt 指说话不留情面、直截了当。' },
          { key: 'C', en: 'polite', cn: '客气的', correct: false, reason: '她特意说“我直说”，正是省掉了客套，与客气相反。' }
        ],
        analysis: 'blunt 的核心是“不修饰”。她说“我直说”，后面那句不留余地的话，正是它的用法。',
        wrongFeedback: '你答成“钝的”，那句直白的告白被听成了刀，天台的风都凉了一层。',
        afterCorrect: '周叙听完反而松了一口气：“好，那我也直说。”他把口袋里那个丝绒盒子放到手心里，慢慢摊开，指尖在抖。'
      },
      {
        plotDescription: '她抢在他开口之前，先把气氛重新搅热了。',
        line: "Relax. You look like I'm about to bite you. I'm just being sassy.",
        lineCn: '放松点，你看我的眼神像我要咬你。我只是嘴上不饶人。',
        prompt: "根据上下文，选出画线词汇 'Sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'quiet and shy', cn: '安静害羞', correct: false, reason: '她正拿话逗他，安静害羞正好说反了。' },
          { key: 'B', en: 'sad', cn: '难过的', correct: false, reason: '她是在给两个人解围，语调里没有难过。' },
          { key: 'C', en: 'playfully bold in speech', cn: '泼辣、嘴上不饶人', correct: true, reason: '她用自嘲化解紧张，sassy 指俏皮又带点冲的说话方式。' }
        ],
        analysis: 'sassy 是一种带笑意的冒犯：不真伤人，但嘴上绝不吃亏。她用这个词替两个人松了绑。',
        wrongFeedback: '你答成“难过”，他眼里那点紧张没被接住，反倒更不敢说话了。',
        afterCorrect: '他被她逗笑，肩膀终于松下来，把盒子打开一条缝：“行，那我说了，你可别泼我冷水。”她把手背到身后，心跳快得不像话。'
      },
      {
        plotDescription: '他准备的台词实在太笨，她听完直接笑出来。',
        line: "That was a lame speech, Zhou Xu. Try again.",
        lineCn: '这段表白太蹩脚了，周叙。重来。',
        prompt: "根据上下文，选出画线词汇 'Lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'weak, not impressive', cn: '蹩脚、拿不出手', correct: true, reason: '她笑他台词准备得差，lame 指笨拙、不够看。' },
          { key: 'B', en: 'unable to walk', cn: '腿脚不便的', correct: false, reason: 'lame 有“腿脚不便”的意思，但这里评价的是“一段话”。' },
          { key: 'C', en: 'too long', cn: '太长了', correct: false, reason: '她嫌的不是长度，是内容不够好。' }
        ],
        analysis: 'lame 用来评价表现时等于“弱、不够看”。她笑着让他重来，其实是在拖延自己的心跳。',
        wrongFeedback: '你答成“瘸的”，他准备好的第二遍台词卡在喉咙里，张了张嘴没出声。',
        afterCorrect: '周叙耳根通红，把稿子折起来塞回口袋，然后干脆不看纸，只说了一句：“温以宁，我想跟你过完以后的每一年。”'
      }
    ],
    completeText: '雪落在天台的栏杆上。他说完那句话，两个人都没有再说话，只有楼下十字路口的灯一直在换颜色。她忽然想起十年前那个冬天，自己也是这样在灯下，偷偷看他。'
  },
  {
    id: 'pl_42',
    index: 42,
    title: '第 42 章 · 求婚的草稿',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周叙在家写求婚的草稿，写到凌晨，七页删掉了六页。温以宁值完夜班回来，看见他趴在桌上睡着，脚边散着一地揉成团的纸，手边那页只写了半句。',
    questions: [
      {
        plotDescription: '她捡起一张纸，上面的句子让她笑出声，也让她心里一动。',
        line: "Okay, this line is actually dope. I'm keeping it.",
        lineCn: '好吧，这句其实很赞，我要留着。',
        prompt: "根据上下文，选出画线词汇 'Dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'a drug', cn: '毒品', correct: false, reason: 'dope 有“毒品”的旧义，但没人会用它来形容一句话。' },
          { key: 'B', en: 'really cool, great', cn: '很棒、很赞', correct: true, reason: '她夸自己写下的那句台词，dope 在口语里就是“牛、很棒”。' },
          { key: 'C', en: 'stupid', cn: '愚蠢的', correct: false, reason: '她说“要留着”，说明她认可，不是嫌弃。' }
        ],
        analysis: 'dope 是年轻人夸东西好的常用词，比 good 更有情绪。她嘴上嫌弃，手上却把那张纸收了起来。',
        wrongFeedback: '你答成“毒品”，那句好不容易写顺的台词，一下子变得可疑起来。',
        afterCorrect: '她把纸折好，压在自己的值班表下面。周叙醒来时，看见那堆纸团被收进了垃圾桶，只剩最上面那张被抚平了。'
      },
      {
        plotDescription: '她翻着他的草稿，忍不住指出其中的毛病。',
        line: "Your handwriting is so sloppy. I can barely read this part.",
        lineCn: '你字写得太潦草，这一段我几乎认不出来。',
        prompt: "根据上下文，选出画线词汇 'Sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'wet', cn: '湿的', correct: false, reason: '她说的是字，不是纸上的水渍，和潮湿无关。' },
          { key: 'B', en: 'beautiful', cn: '漂亮的', correct: false, reason: '她刚说“几乎认不出来”，显然不是夸他字好看。' },
          { key: 'C', en: 'messy, carelessly written', cn: '潦草、马虎', correct: true, reason: '字形糊成一团让她看不出内容，sloppy 指草率、不工整。' }
        ],
        analysis: 'sloppy 形容字、活、穿着都行，核心是“不用心”。她一边嫌弃，一边把那张纸读了两遍。',
        wrongFeedback: '你答成“湿的”，他赶紧去摸纸，才发现她说的是自己的字，脸有点挂不住。',
        afterCorrect: '他抢过纸重抄一遍，写完还是歪的。她看了半天，说：“算了，你直接跟我说吧，别写了。”'
      },
      {
        plotDescription: '他承认自己这阵子黏人，说得有点不好意思。',
        line: "I know I've been needy this month. I just don't want to lose you.",
        lineCn: '我知道我这个月很黏人，我只是不想失去你。',
        prompt: "根据上下文，选出画线词汇 'Needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'overly clingy, needing constant attention', cn: '过度黏人、总需要陪伴', correct: true, reason: '他自己承认总想找她，needy 指情感上黏人、缺安全感。' },
          { key: 'B', en: 'poor', cn: '贫穷的', correct: false, reason: 'needy 有“贫困”的意思，但这里说的是相处方式，不是钱。' },
          { key: 'C', en: 'busy', cn: '忙碌的', correct: false, reason: '他的话是“总想找你”，不是“没空”。' }
        ],
        analysis: 'needy 在感情里常带一点自嘲：需要被回应的太多。他说出口，其实是把最没底的那部分交出来。',
        wrongFeedback: '你答成“贫穷”，那句难得示弱的话被拐到了钱上，他只好低头笑了一下。',
        afterCorrect: '她把手放在他头发上：“黏就黏吧。”停了停又补一句，“我值夜班的时候，也算黏你。”'
      },
      {
        plotDescription: '她把话说得有点重，说完自己先安静下来，手指扣着杯沿。',
        line: "Ten years without a word — wasn't that a little selfish of you?",
        lineCn: '十年一句话都没有，你是不是有点自私？',
        prompt: "根据上下文，选出画线词汇 'Selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'honest', cn: '诚实的', correct: false, reason: '她是在责怪他，不是夸他坦白。' },
          { key: 'B', en: 'thinking only of oneself', cn: '只想着自己、自私', correct: true, reason: '她质问他把十年一个人扛着、没给她选择，selfish 指只考虑自己。' },
          { key: 'C', en: 'shy', cn: '害羞的', correct: false, reason: '这里是责怪的语气，和害羞无关。' }
        ],
        analysis: '她说他自私，其实是在怪他替她做了决定。selfish 的指责背后，是她想被一起承担。',
        wrongFeedback: '你答成“诚实的”，那句积了十年的委屈没被听懂，她起身去洗碗。',
        afterCorrect: '他没有辩解，只说：“是，我自私。以后不会了，什么都先告诉你。”她把水龙头关小，肩膀终于松下来。'
      }
    ],
    completeText: '那天晚上两个人在厨房站了很久。他把草稿纸全扔了，说不用了，反正要说的都在心里。她背对着他洗碗，水声盖住了一句很轻的“嗯”。'
  },
  {
    id: 'pl_43',
    index: 43,
    title: '第 43 章 · 她说了愿意',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '第二天上班，温以宁在走廊里被同事围住。她左手无名指上多了一圈细细的银光，怎么把袖口往下拉都藏不住，只好笑着认了。整个急诊科一上午都在讨论这件事。',
    questions: [
      {
        plotDescription: '同事抓着她的手翻来覆去地看，感叹得很大声。',
        line: "This ring is gorgeous. He has good taste.",
        lineCn: '这枚戒指太好看了，他品味不错。',
        prompt: "根据上下文，选出画线词汇 'Gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'expensive', cn: '昂贵的', correct: false, reason: '她在夸样子好看，价钱是另一回事，别硬往钱上靠。' },
          { key: 'B', en: 'small', cn: '很小的', correct: false, reason: '句子在夸好看，不是在嫌它小。' },
          { key: 'C', en: 'extremely beautiful', cn: '非常漂亮、美得抓眼', correct: true, reason: '她举着她的手连声赞叹，gorgeous 指极其好看、惊艳。' }
        ],
        analysis: 'gorgeous 比 beautiful 更重，常带一点惊呼感。同事的语气里，惊艳是真的，替她高兴也是真的。',
        wrongFeedback: '你答成“昂贵的”，同事那句赞叹落了地，她自己也只好尴尬地笑。',
        afterCorrect: '温以宁把手指蜷了一下：“他说这个款式简单，适合天天戴。”说完才发现，自己已经在替他解释用心了。'
      },
      {
        plotDescription: '有人提起周叙平时的样子，语气有点促狭。',
        line: "Isn't it weird that he never smiles, but he smiles at you?",
        lineCn: '他从不对别人笑，却对你笑，这不奇怪吗？',
        prompt: "根据上下文，选出画线词汇 'Weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'strange, odd', cn: '奇怪的、反常的', correct: true, reason: '她拿他的反差打趣，weird 指让人意外、不合常理。' },
          { key: 'B', en: 'romantic', cn: '浪漫的', correct: false, reason: '句子的落点是“反常”，不是浪漫，别把赞美塞进去。' },
          { key: 'C', en: 'rude', cn: '无礼的', correct: false, reason: '没有人被冒犯，大家只是觉得惊讶。' }
        ],
        analysis: 'weird 在这句里没有恶意，是一种带笑的“太反常了”。那种反差本身，就是最好的证明。',
        wrongFeedback: '你答成“浪漫的”，那点好玩的促狭全没了，她还得自己把话接回去。',
        afterCorrect: '她低头把袖口拉好：“他本来就不爱笑。”话一说完，整圈人齐声拖长了“哦——”，她耳朵红了。'
      },
      {
        plotDescription: '她替他说了句话，自己也觉得有点好笑。',
        line: "He looks sketchy when he's quiet, but he's just thinking.",
        lineCn: '他安静的时候看起来有点可疑，其实他只是在想事情。',
        prompt: "根据上下文，选出画线词汇 'Sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'handsome', cn: '帅气的', correct: false, reason: '“可疑”和“帅”是两个方向，句子里还用了 but 转折。' },
          { key: 'B', en: 'doubtful, not to be trusted', cn: '可疑的、不太靠谱', correct: true, reason: '她承认他沉默时给人不安感，sketchy 指让人起疑、靠不住的样子。' },
          { key: 'C', en: 'sleepy', cn: '困倦的', correct: false, reason: '“在想事情”不等于犯困，sketchy 也没有困的意思。' }
        ],
        analysis: 'sketchy 形容人或事“看着就不太对”。她用这个词自嘲，其实是在替他解释那份沉默。',
        wrongFeedback: '你答成“帅气的”，她替人辩解的话变成了夸人，同事的笑意更浓了。',
        afterCorrect: '她补了一句：“反正他对我不是。”说完自己先笑起来，走廊尽头的护士站也跟着响了一片。'
      },
      {
        plotDescription: '她想起昨晚那场求婚，忍不住评价了一句。',
        line: "The whole proposal was bizarre. He read from a draft.",
        lineCn: '整场求婚都透着古怪，他居然照着草稿念。',
        prompt: "根据上下文，选出画线词汇 'Bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'perfect', cn: '完美的', correct: false, reason: '她笑他念草稿，这是在吐槽，不是夸完美。' },
          { key: 'B', en: 'quick', cn: '很迅速的', correct: false, reason: '句子的重点是“古怪”，不是快慢。' },
          { key: 'C', en: 'very strange, absurd', cn: '离奇古怪、荒唐', correct: true, reason: '她形容那场求婚不走寻常路，bizarre 指怪异到让人想笑。' }
        ],
        analysis: 'bizarre 比 weird 更重，带一点“简直离谱”。她说得嫌弃，嘴角却一直没压下去。',
        wrongFeedback: '你答成“完美的”，那句好玩的吐槽完全失了味，她也懒得再多说。',
        afterCorrect: '同事追问细节，她只说了句“反正最后我答应了”，然后低下头笑，怎么都收不住，干脆拿病历本挡了一下脸。'
      }
    ],
    completeText: '一整个上午，走廊里都有人往她手上瞟。温以宁第一次觉得，原来一件好事可以被这么多人同时分享。她把手插进白大褂口袋，戒指硌着指节，很轻，却一直在。'
  },
  {
    id: 'pl_44',
    index: 44,
    title: '第 44 章 · 婚纱店的镜子',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周末去试婚纱。周叙坐在婚纱店的沙发上，手里捏着一杯已经凉掉的茶。帘子拉开的那一刻，他准备好的所有话都忘干净了，只剩下一个动作——站起来。',
    questions: [
      {
        plotDescription: '店员在旁边笑着起哄，他自己都不知道说了什么。',
        line: "That's epic. I mean it — you look unreal.",
        lineCn: '太震撼了。我是认真的，你看起来不像真的。',
        prompt: "根据上下文，选出画线词汇 'Epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely impressive', cn: '极其震撼、了不起', correct: true, reason: '他被那一幕正面击中，epic 指宏大、令人惊叹的程度。' },
          { key: 'B', en: 'a long poem', cn: '史诗', correct: false, reason: 'epic 本是“史诗”，但他夸的是眼前的人，不是一本书。' },
          { key: 'C', en: 'embarrassing', cn: '令人尴尬的', correct: false, reason: '他后面还补了“我是认真的”，显然是在夸，不是在嫌。' }
        ],
        analysis: 'epic 在口语里常形容“猛到超出预期”的事。他词穷了，只剩这个词能说出口。',
        wrongFeedback: '你答成“史诗”，那句脱口而出的赞叹变成了文绉绉的比喻，气氛断了一下。',
        afterCorrect: '温以宁站在镜子前，被他盯得有点不自在：“你坐下。”他没有坐，只是走过去，把她的手握住，握得很紧。'
      },
      {
        plotDescription: '她回头看镜子里的自己，先替自己嫌了一句。',
        line: "Don't look at me like that. I'm cringing at myself.",
        lineCn: '别那样看我，我自己都觉得别扭。',
        prompt: "根据上下文，选出画线词汇 'Cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'crying', cn: '哭泣', correct: false, reason: '她不是难过，是害羞到浑身不自在。' },
          { key: 'B', en: 'feeling awkward and embarrassed', cn: '觉得别扭、尴尬得不行', correct: true, reason: '她受不了自己被这样盯着看，cringe 指那种“脚趾抠地”的羞。' },
          { key: 'C', en: 'smiling', cn: '微笑', correct: false, reason: '她正让他别看，笑意并不是重点。' }
        ],
        analysis: 'cringe 是“替自己尴尬”的那种生理反应。她说出来，等于承认自己其实很开心。',
        wrongFeedback: '你答成“哭泣”，他吓得松开手，以为婚纱哪里不合适。',
        afterCorrect: '他笑出声：“那你慢慢习惯。”说完真的往后退了两步，从远处又认认真真地看了一遍，像在记什么。'
      },
      {
        plotDescription: '店员退到一边，他给出了自己的结论。',
        line: "You look fabulous. Pick this one, please.",
        lineCn: '你美极了，就选这件吧。',
        prompt: "根据上下文，选出画线词汇 'Fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'expensive', cn: '贵的', correct: false, reason: '他谈的是好不好看，价钱这家店到最后才报。' },
          { key: 'B', en: 'tired', cn: '疲惫的', correct: false, reason: '他正劝她定下这件，不可能是在说她累。' },
          { key: 'C', en: 'wonderful, stunning', cn: '美极了、好得没话说', correct: true, reason: '他给出最直接的评价，fabulous 指极好、极美。' }
        ],
        analysis: 'fabulous 带情绪，比 good 更热烈。他说“就选这件”，是替这场婚礼先做了个决定。',
        wrongFeedback: '你答成“贵的”，那句赞美变成了心疼钱，她回头瞪了他一眼。',
        afterCorrect: '她对着镜子转了半圈：“那就不试别的了。”话说完，两个人几乎同时松了一口气，店员也跟着笑了。'
      },
      {
        plotDescription: '她低头看裙摆，忽然有点不确定，声音也小了下去。',
        line: "Am I terrible at this? I've never worn anything like it.",
        lineCn: '我是不是很糟？我从没穿过这样的衣服。',
        prompt: "根据上下文，选出画线词汇 'Terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'very bad, doing poorly', cn: '很糟、做得很差', correct: true, reason: '她在怀疑自己撑不起来，terrible 指糟糕透顶。' },
          { key: 'B', en: 'beautiful', cn: '美丽的', correct: false, reason: '她是在自问是不是很糟，不是在自夸。' },
          { key: 'C', en: 'frightening', cn: '可怕的', correct: false, reason: 'terrible 有时指“可怕的”，但这里担心的是自己做不好。' }
        ],
        analysis: 'be terrible at something 就是“某方面特别差”。婚纱把她平时的利落全打乱了，她第一次露出不确定。',
        wrongFeedback: '你答成“美丽的”，她那点不安没有人接住，只好自己低头把裙摆整理好。',
        afterCorrect: '周叙走到她身后，对镜子里的人说：“你不擅长的是这件裙子，不是这件事。”她低着头，把这句话记了很久。'
      }
    ],
    completeText: '从婚纱店出来，天已经黑了。她拎着那件被包好的白裙子，走两步就要看一眼袋子。他走在旁边，一句话没说，只是把手伸过去，让她牵着。'
  },
  {
    id: 'pl_45',
    index: 45,
    title: '第 45 章 · 婚礼彩排',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼前一天彩排。礼堂里椅子摆得整整齐齐，两个人站在台前，司仪一句句念着流程。念到“新郎可以亲吻新娘”时，后排的人先起哄起来，温以宁低下头笑了一下。',
    questions: [
      {
        plotDescription: '她小声评价了一下这场彩排，语气里有满意也有将就。',
        line: "It's decent. Not fancy, but it's ours.",
        lineCn: '还不错，不算奢华，但这是我们的。',
        prompt: "根据上下文，选出画线词汇 'Decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'perfect, without flaws', cn: '完美的、无可挑剔', correct: false, reason: '她自己补了“不算奢华”，说明只是“还行”，不是完美。' },
          { key: 'B', en: 'good enough, acceptable', cn: '还不错、过得去', correct: true, reason: '她觉得够用又踏实，decent 指“体面、够好”。' },
          { key: 'C', en: 'cheap and bad', cn: '廉价又糟糕', correct: false, reason: '她说“这是我们的”，带着珍惜，不是在嫌差。' }
        ],
        analysis: 'decent 停在“及格线之上但不夸张”的位置：不盛大，却踏实。这正是她想要的婚礼。',
        wrongFeedback: '你答成“完美的”，她那句“不算奢华”被吞掉了，原本的分寸全没了。',
        afterCorrect: '周叙侧过头：“以后也这样，好不好？不豪华，但都是我们的。”她点点头，没有让他看见自己的眼睛。'
      },
      {
        plotDescription: '伴娘在旁边打趣他们俩，说得毫不客气。',
        line: "You two are such weirdos. Who memorizes the other's schedule?",
        lineCn: '你们俩真是怪人，谁会去背对方的排班表？',
        prompt: "根据上下文，选出画线词汇 'Weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a stranger', cn: '陌生人', correct: false, reason: '她们是熟人之间打趣，和陌生无关。' },
          { key: 'B', en: 'a genius', cn: '天才', correct: false, reason: '语气是调侃，不是在称赞天才。' },
          { key: 'C', en: 'an odd person', cn: '古怪的人、怪咖', correct: true, reason: '她笑他们太反常，weirdo 指行为有点怪的人，多带善意。' }
        ],
        analysis: 'weirdo 用在朋友之间，多半是又好笑又羡慕。那句“谁会背对方的排班表”，本身就是答案。',
        wrongFeedback: '你答成“陌生人”，一句亲密的调侃被听成了划清界限。',
        afterCorrect: '温以宁很坦然地承认：“我背了。”伴娘愣了两秒，随后整排椅子那边都笑倒了，连司仪都停下来看。'
      },
      {
        plotDescription: '她看向他的方向，顺口说了一句，说完有点后悔。',
        line: "He looks hot in that suit. Yeah, I said it.",
        lineCn: '他穿那身西装很性感。对，我就是说了。',
        prompt: "根据上下文，选出画线词汇 'Hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'very attractive', cn: '很性感、很帅', correct: true, reason: '她直白夸他好看，hot 形容人极有吸引力。' },
          { key: 'B', en: 'warm in temperature', cn: '温度高、热的', correct: false, reason: '这里说的是穿西装的样子，不是天气。' },
          { key: 'C', en: 'angry', cn: '愤怒的', correct: false, reason: '她后面那句“我就是说了”，是害羞，不是生气。' }
        ],
        analysis: 'hot 形容人时特指外形上的吸引。她说完还要补一句承认，等于把自己供出来。',
        wrongFeedback: '你答成“温度高”，那句难得的直白夸赞瞬间变成了一句天气预报。',
        afterCorrect: '周叙在台前听见了，回头看她一眼。她立刻把脸转开，假装在研究花柱的位置，耳朵却先红了。'
      },
      {
        plotDescription: '彩排结束，他走过来，说了一句让她没脾气的话。',
        line: "You're cute when you pretend you didn't say that.",
        lineCn: '你假装自己没说过那句话的时候很可爱。',
        prompt: "根据上下文，选出画线词汇 'Cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'smart', cn: '聪明的', correct: false, reason: '他说的是她否认时的样子，不是脑子好使。' },
          { key: 'B', en: 'sweet, endearing', cn: '可爱、讨人喜欢', correct: true, reason: '他被她那点嘴硬取悦了，cute 指让人觉得可爱。' },
          { key: 'C', en: 'short', cn: '个子矮的', correct: false, reason: 'cute 有“小巧”的用法，但这里指神态讨人喜欢。' }
        ],
        analysis: 'cute 在这里是带着笑意的亲昵。他不是在夸外貌，是在说她那个转身的动作很讨喜。',
        wrongFeedback: '你答成“个子矮”，她立刻反驳：“我一米六八。”',
        afterCorrect: '她愣了两秒，最后只能说：“明天你别说话。”他点头：“好，明天我只看着你。”'
      }
    ],
    completeText: '礼堂的灯一盏盏熄下去，红毯上还留着彩排时踩出的脚印。温以宁走在最后，回头看了一眼明天要站的位置。十七岁那年她连他的侧脸都不敢看，明天却要站在他旁边。'
  },
  {
    id: 'pl_46',
    index: 46,
    title: '第 46 章 · 交换戒指',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼当天，周叙谁都没让送。他一个人挤地铁去酒店，车厢摇摇晃晃，西装被人撞了两下。他握着口袋里的戒指盒，手心一直出汗。',
    questions: [
      {
        plotDescription: '他给温以宁发消息，说路上有点堵。',
        line: "My commute is longer than usual today. I'll still be early.",
        lineCn: '我今天通勤比平时久，不过还是会早到。',
        prompt: "根据上下文，选出画线词汇 'Commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'a phone call', cn: '一通电话', correct: false, reason: '他讲的是路上花的时间，不是打电话。' },
          { key: 'B', en: 'wedding gift', cn: '婚礼礼物', correct: false, reason: '礼物已经在口袋里，这句说的是路况。' },
          { key: 'C', en: 'the daily trip to work', cn: '通勤、上下班的那段路', correct: true, reason: '他在描述从家到酒店的路，commute 指日常往返路程。' }
        ],
        analysis: 'commute 是每天重复的那段路。用在这个早上，就把“平常”和“今天”叠在了一起。',
        wrongFeedback: '你答成“一通电话”，她以为他在通话，只回了句“专心走路”。',
        afterCorrect: '他回了一个“好”，把手机收起来。地铁到站时，他对着玻璃整了整领口，深深吸了一口气。'
      },
      {
        plotDescription: '化妆间里，她困得眼睛都睁不开，妆师只好让她先靠一会儿。',
        line: "Give me ten minutes for a nap. Then I'm yours.",
        lineCn: '给我十分钟打个盹，之后我就是你的了。',
        prompt: "根据上下文，选出画线词汇 'Nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep', cn: '小睡、打个盹', correct: true, reason: '她说只要十分钟，nap 指时间很短的一觉。' },
          { key: 'B', en: 'a walk', cn: '散步', correct: false, reason: '她是困了，不是想出去走走。' },
          { key: 'C', en: 'a meal', cn: '一顿饭', correct: false, reason: '十分钟不可能指吃饭，句子里也没有食物。' }
        ],
        analysis: 'nap 是“白天补的一小觉”。她说只要十分钟，是给今天的自己留最后一点喘息。',
        wrongFeedback: '你答成“散步”，妆师真的去开门了，她只好摆手：“不是那个意思。”',
        afterCorrect: '她靠在椅背上，十分钟不到就睡着了。妆师放轻了动作，把最后一只耳环替她戴好，然后退到一边不再出声。'
      },
      {
        plotDescription: '婚礼结束后，两个人累得谁都不想动。',
        line: "Let's just order in tonight. I don't have the strength to go out.",
        lineCn: '今晚就点外卖吧，我真没力气出门了。',
        prompt: "根据上下文，选出画线词汇 'Order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'go to a restaurant', cn: '去餐厅吃饭', correct: false, reason: '她明说自己没力气出门，正好相反。' },
          { key: 'B', en: 'have food delivered', cn: '点外卖、叫餐上门', correct: true, reason: '她不想出门，于是让饭送过来，order in 指点外卖。' },
          { key: 'C', en: 'cook at home', cn: '在家做饭', correct: false, reason: '她说的是“点”，不是自己做。' }
        ],
        analysis: 'order in 和 eat out 正好相对：一个是叫进来，一个是走出去。婚礼第一晚，他们选了前者。',
        wrongFeedback: '你答成“去餐厅”，她抬起眼睛：“你确定我现在还走得动？”',
        afterCorrect: '他脱掉西装外套，一边点单一边念：“两份汤，一份你上次说想吃的那家。”她愣住，那是半年前的一句话。'
      },
      {
        plotDescription: '第二天中午，他终于把两个人的状态说清楚。',
        line: "We can eat out tomorrow. Today we rest.",
        lineCn: '明天可以出去吃，今天休息。',
        prompt: "根据上下文，选出画线词汇 'Eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'eat outside in the garden', cn: '在院子里吃饭', correct: false, reason: 'eat out 不是指在户外，别按字面拆开。' },
          { key: 'B', en: 'skip the meal', cn: '不吃饭', correct: false, reason: '他说的是换个地方吃，不是不吃。' },
          { key: 'C', en: 'have a meal at a restaurant', cn: '出去吃、下馆子', correct: true, reason: '和“今天休息”对照，eat out 指去外面吃饭。' }
        ],
        analysis: 'eat out 是固定说法，意思是出去吃而不是在家做。他把“明天”留给出门，把“今天”留给她。',
        wrongFeedback: '你答成“在院子里吃饭”，她想了想：“我们家没有院子。”',
        afterCorrect: '她躺回沙发里，把毯子拉到肩上：“那今天就这样。”他坐在另一头，替她把露在外面的脚盖好，两个人都没再说话。'
      }
    ],
    completeText: '戒指戴上的时候，她的手在抖，他的手也在抖。交换完，两个人都忘了下一步该做什么，台下笑成一片。他忽然俯下身，在她耳边说了一句只有她听得见的话。'
  },
  {
    id: 'pl_47',
    index: 47,
    title: '第 47 章 · 敬酒时的告白',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '敬酒到第三桌，有人起哄让周叙讲讲这十年是怎么熬过来的。他端着杯子站起来，说了第一句就停住，继而笑了一下，说那我从最小的事讲起。',
    questions: [
      {
        plotDescription: '他提起住在同一栋楼的那些年，说得格外具体。',
        line: "I did her chores for a year and never told her.",
        lineCn: '我替她做了一年家务，从没告诉过她。',
        prompt: "根据上下文，选出画线词汇 'Chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'everyday household tasks', cn: '日常家务', correct: true, reason: '他讲的是倒垃圾、洗碗这些事，chores 指日常杂活。' },
          { key: 'B', en: 'work meetings', cn: '工作会议', correct: false, reason: '句子说的是住处的事，和会议无关。' },
          { key: 'C', en: 'homework', cn: '学生作业', correct: false, reason: 'chores 是家务，homework 才是作业，两个词别混。' }
        ],
        analysis: 'chores 指不得不做的琐碎家务。他说“做了一年没告诉她”，那些小事就成了十年的证据。',
        wrongFeedback: '你答成“工作会议”，那一桌人先笑，随后又安静下来，本来该是动人的。',
        afterCorrect: '温以宁坐在旁边，手指捏紧了杯子。她忽然想起有一年冬天，垃圾总在她下楼之前就被人拿走了。'
      },
      {
        plotDescription: '他承认自己那几年最擅长的事，语气有点自嘲。',
        line: "I procrastinated for ten years. I kept telling myself there was time.",
        lineCn: '我拖延了十年，一直骗自己还有时间。',
        prompt: "根据上下文，选出画线词汇 'Procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'work too hard', cn: '工作太拼', correct: false, reason: '他是在检讨自己没做的事，与勤奋相反。' },
          { key: 'B', en: 'keep putting things off', cn: '拖延、一拖再拖', correct: true, reason: '“一直骗自己还有时间”正是拖延，procrastinate 指不断往后推。' },
          { key: 'C', en: 'travel a lot', cn: '经常出差', correct: false, reason: '那几年他一直在同一个城市，没跑远。' }
        ],
        analysis: 'procrastinate 强调“明知该做却一直往后拖”。他拖的不是任务，是一句告白。',
        wrongFeedback: '你答成“工作太拼”，他自嘲的忏悔一下子变成了炫耀，桌上有人笑出声。',
        afterCorrect: '他停了一下，转头看向她：“所以今天我不拖了。”温以宁低下头，杯子里的酒轻轻晃了一下。'
      },
      {
        plotDescription: '他讲起两个人最早的共同记忆，声音放软了。',
        line: "We binge-watched a whole season that night and you fell asleep on my arm.",
        lineCn: '那天晚上我们一口气刷完了一整季，你在我胳膊上睡着了。',
        prompt: "根据上下文，选出画线词汇 'Binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'watch a single episode', cn: '只看一集', correct: false, reason: '他说的是“一整季”，不是一集。' },
          { key: 'B', en: 'watch without sound', cn: '静音看', correct: false, reason: 'binge 指连续大量地看，与声音无关。' },
          { key: 'C', en: 'watch many episodes in a row', cn: '连着刷很多集', correct: true, reason: '“一整季”一口气看完，binge-watch 指连续追剧。' }
        ],
        analysis: 'binge-watch 是流媒体时代的高频词：不按集数停。那天晚上，谁都没说“再看一集就睡”。',
        wrongFeedback: '你答成“看一集”，那个“一整季”的分量就没了，故事也跟着变轻。',
        afterCorrect: '她记得那一晚。她其实早就醒了，只是一直不想动，怕他一察觉就会把自己挪开，于是就那样装睡到天亮。'
      },
      {
        plotDescription: '他说到最后，承认自己做过最傻的事。',
        line: "I used to scroll through your photos at three in the morning.",
        lineCn: '我以前会凌晨三点翻你的照片。',
        prompt: "根据上下文，选出画线词汇 'Scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'move through a screen with your finger', cn: '用手指刷屏、往下滑', correct: true, reason: '他翻手机里的照片，scroll 指在屏幕上滑动浏览。' },
          { key: 'B', en: 'print photos out', cn: '把照片打印出来', correct: false, reason: '“凌晨三点”说的是躺着看手机，不是打印。' },
          { key: 'C', en: 'delete photos', cn: '删除照片', correct: false, reason: '他是舍不得，不是要删。' }
        ],
        analysis: 'scroll 指在屏幕上不断往下滑。它把那种没说出口的想念变得很具体：反复滑，反复看。',
        wrongFeedback: '你答成“打印”，那一桌人笑场，他也不好意思地咳了一声。',
        afterCorrect: '她抬起头，眼睛有点红：“你早说一句会怎样？”他把杯子轻轻放下：“会早十年。”整桌人都没有出声。'
      }
    ],
    completeText: '那一桌人没有再起哄。有人低头喝酒，有人悄悄擦了擦眼睛。温以宁一直没说话，直到他坐下，才在桌子底下找到他的手，握住。'
  },
  {
    id: 'pl_48',
    index: 48,
    title: '第 48 章 · 十年的账',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼散场，礼金和账单摊满一桌。两个人坐在酒店房间的地毯上，一份一份对账，对到后来的数字全都对不上，反而笑成一团，她还不忘吐槽他酒喝多了。',
    questions: [
      {
        plotDescription: '她把卡递给他，动作里带着点壮烈。',
        line: "Just swipe the card. We can be broke tomorrow.",
        lineCn: '刷卡吧，明天开始我们可以身无分文。',
        prompt: "根据上下文，选出画线词汇 'Swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'tear the card', cn: '把卡撕了', correct: false, reason: '她要付钱，不是毁卡。' },
          { key: 'B', en: 'slide a card through a reader', cn: '刷卡', correct: true, reason: '付账时的动作，swipe 指把卡在机器上刷一下。' },
          { key: 'C', en: 'hide the card', cn: '把卡藏起来', correct: false, reason: '她说“明天再穷”，是准备花钱，不是藏钱。' }
        ],
        analysis: 'swipe 的本义是“快速滑动”，刷卡正是这个动作。她嘴上说得夸张，手已经把卡递过去了。',
        wrongFeedback: '你答成“把卡撕了”，他赶紧把卡抢回来，还以为她真的喝多了。',
        afterCorrect: '他接过卡，却先把自己那份钱转给她：“AA。”她挑眉：“新婚第一天就AA？”他咳了一声：“我怕你后悔。”'
      },
      {
        plotDescription: '对完最后一笔，两个人几乎同时撑不住了。',
        line: "I'm going to crash. Wake me up in the morning.",
        lineCn: '我要倒头就睡了，早上叫我。',
        prompt: "根据上下文，选出画线词汇 'Crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'have an accident', cn: '撞车、出事故', correct: false, reason: 'crash 有“撞车”的意思，但这里没有人开车，是困到极限。' },
          { key: 'B', en: 'get angry', cn: '发火', correct: false, reason: '他说“早上叫我”，语气是累，不是怒。' },
          { key: 'C', en: 'fall asleep immediately', cn: '累到一下就睡着', correct: true, reason: '婚礼一整天之后只想躺下，crash 指精疲力尽地睡过去。' }
        ],
        analysis: '口语里 crash 常指“累坏了一沾床就睡”。婚礼的红包和账单一起，把他彻底放倒。',
        wrongFeedback: '你答成“撞车”，她吓得坐直：“谁撞了？”他已经在打哈欠。',
        afterCorrect: '她还想再算两笔，转头时他已经睡着了，手里还捏着一张账单。她把纸抽出来，替他盖好了被子。'
      },
      {
        plotDescription: '她翻着礼金簿，忽然想起很久以前的事。',
        line: "Remember when we used to hang out on the roof after school?",
        lineCn: '还记得我们以前放学后总在天台上待着吗？',
        prompt: "根据上下文，选出画线词汇 'Hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend time together casually', cn: '一起消磨时间、待在一起', correct: true, reason: '她问的是放学后那段闲待着的日子，hang out 指没有目的地待在一起。' },
          { key: 'B', en: 'hang clothes outside', cn: '把衣服晾出去', correct: false, reason: 'hang out 有“晾衣服”的意思，但这里说的是天台上的两个人。' },
          { key: 'C', en: 'study hard', cn: '用功读书', correct: false, reason: '她说的是“待着”，不是学习。' }
        ],
        analysis: 'hang out 几乎不带目的性。十年前那段“什么都没做”的时间，反而是他们最靠近的时候。',
        wrongFeedback: '你答成“晾衣服”，她笑出声：“我们那时候是在晾自己。”',
        afterCorrect: '他闭着眼睛应了一声：“记得。你每次都坐那个角，说那里风小。”她愣住了，他连位置都记得。'
      },
      {
        plotDescription: '她把账本合上，往后一靠，做了个决定。',
        line: "Let's kick back for a few days. The rest can wait.",
        lineCn: '我们放松几天吧，剩下的都可以等。',
        prompt: "根据上下文，选出画线词汇 'Kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'kick something away', cn: '把东西踢开', correct: false, reason: 'kick back 不是“踢”，别按字面拆开理解。' },
          { key: 'B', en: 'relax and do nothing much', cn: '放松、歇着', correct: true, reason: '她说“剩下的都可以等”，kick back 指懒散地休息。' },
          { key: 'C', en: 'return the money', cn: '把钱退回去', correct: false, reason: '账已经对完，她说的是休息，不是退款。' }
        ],
        analysis: 'kick back 是彻底的松懈：不做正事，也不内疚。这对她来说，比婚纱和戒指都难。',
        wrongFeedback: '你答成“把东西踢开”，她本来轻轻的一句话被听成了发脾气。',
        afterCorrect: '他睁开一只眼睛：“你确定你能闲着？”她认真想了想：“不能。但我可以学着。”他笑出声，把毯子分她一半。'
      }
    ],
    completeText: '地毯上还散着礼金簿和红包。灯没有关，两个人一个躺着，一个靠着，谁也没有动。十年里他们错过了太多这样的夜晚，从今天起，得慢慢补回来。'
  },
  {
    id: 'pl_49',
    index: 49,
    title: '第 49 章 · 新婚的第一天',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '新婚后第一个白天，家里像被搬空又搬回来。纸箱从门口堆到客厅，衣服分不清是谁的，冰箱里只剩半瓶水。温以宁站在中间，第一次觉得自己该有个计划。',
    questions: [
      {
        plotDescription: '她指着最后一箱没拆的东西，给他派了活。',
        line: "Let's wrap up this room before dinner, okay?",
        lineCn: '晚饭前把这个房间收尾吧，行吗？',
        prompt: "根据上下文，选出画线词汇 'Wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'wrap it as a gift', cn: '把它包成礼物', correct: false, reason: '屋里全是纸箱，没有人要送礼物。' },
          { key: 'B', en: 'cover it with a sheet', cn: '用布把它盖上', correct: false, reason: '“收尾”指的是把活干完，不是盖起来。' },
          { key: 'C', en: 'finish it up', cn: '收尾、把事情做完', correct: true, reason: '她说的是把这间屋子收拾完，wrap up 指结束、完成。' }
        ],
        analysis: 'wrap up 从“包起来”引申为“收尾”。她给它加了个时间点：晚饭前，把乱的东西切成一段段。',
        wrongFeedback: '你答成“包成礼物”，他举起一个纸箱：“那这个送谁？”',
        afterCorrect: '他答应了，蹲下来拆胶带。她站在门口看了一会儿，忽然发现有人一起干活，累这件事就轻了一半。'
      },
      {
        plotDescription: '她蹲在衣服堆前，开始分那些分不清主人的东西。',
        line: "Help me sort out whose clothes are whose.",
        lineCn: '帮我分一下这些衣服到底是谁的。',
        prompt: "根据上下文，选出画线词汇 'Sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'separate and organize', cn: '分类整理、理清楚', correct: true, reason: '她把混在一起的衣服按人分开，sort out 指整理归类。' },
          { key: 'B', en: 'throw away', cn: '扔掉', correct: false, reason: '她只是要分开，并没有说要丢。' },
          { key: 'C', en: 'buy new ones', cn: '买新的', correct: false, reason: '句子里没有购物，只有一堆旧衣服。' }
        ],
        analysis: 'sort out 既指“分类”，也常指“把事情理顺”。她收拾的是衣服，理的是两个人从此住在一起。',
        wrongFeedback: '你答成“扔掉”，他赶紧护住自己那件旧卫衣：“这个不能扔。”',
        afterCorrect: '两件一模一样的黑T恤摆在中间，谁也认不出来。她抬眼看他：“以后买点有颜色的。”'
      },
      {
        plotDescription: '楼下邻居来敲门，说他们家漏水，语气不太好。',
        line: "I'll deal with the neighbor. You keep unpacking.",
        lineCn: '邻居那边我去处理，你继续拆箱子。',
        prompt: "根据上下文，选出画线词汇 'Deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'argue with', cn: '和……吵架', correct: false, reason: '他说的是“我去处理”，还没到吵架这一步。' },
          { key: 'B', en: 'handle, take care of', cn: '处理、应付', correct: true, reason: '他去面对邻居的问题，deal with 指应对、解决。' },
          { key: 'C', en: 'invite in', cn: '请进来', correct: false, reason: '漏水是麻烦，不是要请客。' }
        ],
        analysis: 'deal with 常带“不得不面对的麻烦”。他把麻烦接过去，让她继续做手上那一件。',
        wrongFeedback: '你答成“请进来”，门一开，邻居身后还跟着物业，客厅更乱了。',
        afterCorrect: '他出去不到十分钟就回来了，说已经约好师傅。她抬头：“这么快？”他耸肩：“态度好就行。”'
      },
      {
        plotDescription: '忙到晚上，她还想再擦一遍地，被按在了沙发上。',
        line: "Chill out. The floor will still be there tomorrow.",
        lineCn: '放松点吧，地板明天还在那儿。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'get cold', cn: '变冷', correct: false, reason: 'chill out 不是温度变化，而是让人放松下来。' },
          { key: 'B', en: 'go outside', cn: '到外面去', correct: false, reason: '句子是让她别干活，不是叫她出门。' },
          { key: 'C', en: 'relax, calm down', cn: '放松、别绷着', correct: true, reason: '他让她停下手上的活，chill out 指放轻松。' }
        ],
        analysis: 'chill out 是劝人“别绷着”。对她这种习惯把一切做完的人来说，这句话需要练很久。',
        wrongFeedback: '你答成“变冷”，她愣了一下：“地板怎么会变冷？”',
        afterCorrect: '她终于把抹布放下，靠进沙发里。窗外的灯亮起来的时候，她第一次觉得，这个家已经像家了。'
      }
    ],
    completeText: '纸箱拆完，最后一格柜子空出来，正好放一张两人的合照。她把它摆上去，退后两步看。照片里的他们还在医院走廊，隔着半步，谁都没敢靠得太近。'
  },
  {
    id: 'pl_50',
    index: 50,
    title: '第 50 章 · 十年之后，仍在心动',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '一年后的冬天，温以宁又在急诊科值大夜。凌晨两点，周叙刚下手术，拎着一袋东西站在护士站外，没有出声，只是等她抬头。走廊的灯白得发冷。',
    questions: [
      {
        plotDescription: '他把袋子放在桌上，动作像在做一件很熟练的事。',
        line: "I brought snacks. You skipped dinner again, didn't you?",
        lineCn: '我带了点吃的。你又没吃晚饭吧？',
        prompt: "根据上下文，选出画线词汇 'Snacks' 最准确的意思。",
        options: [
          { key: 'A', en: 'small food between meals', cn: '零食、垫肚子的小食', correct: true, reason: '他带来给她临时吃的东西，snack 指正餐之外的小食。' },
          { key: 'B', en: 'medicine', cn: '药', correct: false, reason: '他问的是“没吃晚饭”，带的是吃的。' },
          { key: 'C', en: 'a report', cn: '一份报告', correct: false, reason: '袋子里是可以吃的东西，不是文件。' }
        ],
        analysis: 'snack 是“随手垫一口”的东西。他知道她忙起来会跳过饭，所以从不空手来。',
        wrongFeedback: '你答成“药”，她愣了一下，以为自己是不是做错了什么。',
        afterCorrect: '她抬起头，先看见那个袋子，再看见他。她笑了一下：“你怎么知道我没吃？”他把椅子拉过来：“十年了。”'
      },
      {
        plotDescription: '她抓起杯子就要灌咖啡，被他按住，推过来一瓶水。',
        line: "Hydrate first. Coffee can wait ten minutes.",
        lineCn: '先补点水，咖啡可以等十分钟。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'eat something', cn: '吃点东西', correct: false, reason: '他递的是水，说的是喝水，不是吃东西。' },
          { key: 'B', en: 'take in water', cn: '补水、喝够水', correct: true, reason: '他拦住咖啡递上水，hydrate 指补充水分。' },
          { key: 'C', en: 'take a break', cn: '休息一下', correct: false, reason: '“休息”是 rest，这里的重点是水。' }
        ],
        analysis: 'hydrate 是医学和健身场景都常用的词。她知道他是对的，只好把水接过来，先喝了一口。',
        wrongFeedback: '你答成“吃点东西”，她张嘴就要说话，被他一句“先喝”堵了回去。',
        afterCorrect: '她仰头喝了几口，才发现自己一整天真的没怎么喝水。他一直盯着，等她喝完才把咖啡推回去。'
      },
      {
        plotDescription: '他站起来活动了一下，顺手也把她从椅子上拉起来。',
        line: "Stand up and stretch. Your neck is going to hurt.",
        lineCn: '站起来伸个懒腰，不然你脖子要疼了。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'exaggerate, stretch the truth', cn: '夸大其词', correct: false, reason: 'stretch 有“夸大”的用法，但这里说的是身体动作。' },
          { key: 'B', en: 'lie down', cn: '躺下', correct: false, reason: '他让她“站起来”，不是躺下。' },
          { key: 'C', en: 'extend your body to relax the muscles', cn: '伸展、活动筋骨', correct: true, reason: '久坐之后脖子疼，stretch 指伸展身体。' }
        ],
        analysis: 'stretch 在这里是具体动作：把绷了一整天的地方拉开。他管得太细，细到像在记录她的习惯。',
        wrongFeedback: '你答成“夸大其词”，她一边站起来一边笑：“我现在没力气夸张。”',
        afterCorrect: '她被拉着站好，双臂举过头顶，肩颈处响了一声。他满意地点头：“这才对。”护士站里有人笑。'
      },
      {
        plotDescription: '她靠着墙，忽然不说话了，眼睛落在远处某个点上。',
        line: "You're zoning out. Go lie down for twenty minutes.",
        lineCn: '你走神了，去躺二十分钟吧。',
        prompt: "根据上下文，选出画线词汇 'Zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'stop paying attention, drift off', cn: '走神、发呆放空', correct: true, reason: '她眼神散掉、不说话，zone out 指注意力飘走。' },
          { key: 'B', en: 'fall asleep deeply', cn: '睡得很沉', correct: false, reason: '她还站着，只是发呆，没到睡着的程度。' },
          { key: 'C', en: 'leave the room', cn: '离开房间', correct: false, reason: '她靠墙站着没动，zone out 是精神上走开了。' }
        ],
        analysis: 'zone out 是“人在，神不在”。他一整晚都在看她的状态，所以她刚一走神，他就发现了。',
        wrongFeedback: '你答成“睡得很沉”，她眨了下眼：“我还站着呢。”',
        afterCorrect: '她被他推进值班室，躺下之前还说了句“十五分钟叫我”。他没有答应，只是把门轻轻带上。'
      }
    ],
    completeText: '很多年后的冬天也许还是这样：她在急诊科忙到忘记吃饭，他在走廊外等她抬头。灯很白，可只要有人抬头，就能看见另一个人站在那里。十年讲完了，往后的每一年还在继续。'
  }
];

/**
 * 原创剧情题库 —— 大女主 ·《穿成假千金后我摆烂了》
 * 50 章 × 4 题 = 200 题，第 k 章使用词汇库第 (k-1)*4+1 ~ k*4 号词
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.female_lead = [
  {
    id: 'fl_1',
    index: 1,
    title: '第 1 章 · 被赶出家门的那个晚上',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '真千金回家的那顿晚饭，苏家客厅的水晶灯亮得刺眼。苏母把一份亲子鉴定推到她面前，说行李已经收拾好了。窗外下着雨，苏晚低头看着那张纸，忽然笑了。',
    questions: [
      {
        plotDescription: '苏母把行李箱推到门口，苏父别过脸不看。全家人都在等她哭着求留下。',
        line: "I'm broke, but I'm not begging. Not tonight, not ever.",
        lineCn: '我是没钱，但我不会求人。今晚不会，以后也不会。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'broken into pieces', cn: '破碎的', correct: false, reason: 'broke 和 broken 长得像，但这里说的是钱包空了，不是东西碎了。' },
          { key: 'B', en: 'having no money at all', cn: '身无分文', correct: true, reason: '她说自己没钱却不肯低头，broke 在口语里就是一分钱都没有。' },
          { key: 'C', en: 'injured and hurting', cn: '受伤的', correct: false, reason: '受伤是 hurt 或 injured，这里没有人在说身体状况。' }
        ],
        analysis: '苏晚被赶出门时说出这句话。broke 不是“破碎”，而是“口袋空了”。她承认窘迫，却把姿态立住了：我可以穷，但我不会跪。',
        wrongFeedback: '你误听了她的底气，苏晚被当成在哭穷，行李箱直接被推出门外，气血 -10。',
        afterCorrect: '苏晚拖着行李箱走进电梯，没有回头。她摸了摸包里的U盘，那里面是她写了半年的创业计划书。电梯门合上前，她轻声说：“用不着你们赶，我自己走。”'
      },
      {
        plotDescription: '中介带她看房，六楼没电梯，墙皮掉了一半。房东抱着胳膊站在门口等答复。',
        line: "The rent is low, but I still need a week to pull it together.",
        lineCn: '房租不贵，但我还是需要一个星期才能凑齐。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid to live in a place', cn: '房租', correct: true, reason: '她正在和房东谈住的房子，rent 就是每月要交的租金。' },
          { key: 'B', en: 'a torn piece of cloth', cn: '破布', correct: false, reason: '“撕破”是 rend，和 rent 拼写相近，但这里说的是要交的钱。' },
          { key: 'C', en: 'a fee for hiring a car', cn: '租车费', correct: false, reason: 'rent 也能指租车，但这句话从头到尾谈的是住处，不是车。' }
        ],
        analysis: '房东在等她的答复。rent 在这个语境里就是每个月交给房东的住房租金，和“撕破”这层意思毫无关系。',
        wrongFeedback: '你答错了，房东以为她在砍价，脸一沉，把钥匙收了回去，气血 -10。',
        afterCorrect: '苏晚数了三遍钱包里的现金，签下自己的名字。钥匙到手那一刻，她站在空荡荡的房间里笑了：这是她二十五年来，第一间完全属于自己的屋子。'
      },
      {
        plotDescription: '她在便利店买了最便宜的挂面和鸡蛋，回屋后把每一笔开销都写进本子。',
        line: "Every yuan goes into the budget. I can't waste a single one.",
        lineCn: '每一块钱都要记进预算里，一分都不能浪费。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a type of cheap car', cn: '一种廉价汽车', correct: false, reason: 'budget 修饰车时才指“便宜的”，这里她记的是账，不是车。' },
          { key: 'B', en: 'an official government report', cn: '政府报告', correct: false, reason: '预算可以是政府文件，但这句话讲的是她自己口袋里的钱。' },
          { key: 'C', en: 'a plan for how to spend money', cn: '收支预算', correct: true, reason: '她把开销一笔笔写下来，budget 就是给钱做分配的计划。' }
        ],
        analysis: '她把每一笔支出都记下来，budget 在这里是“钱的分配计划”，既不是便宜货，也不是官方文件。',
        wrongFeedback: '你误解了她在算什么，苏晚把账本合上，那个月只能啃了十天挂面，气血 -10。',
        afterCorrect: '本子最后一页写着她的目标：三个月攒够第一批货的钱。她关灯前又看了一眼，把“三个月”划掉，改成“两个月”。她一直是这样，逼自己一把才睡得着。'
      },
      {
        plotDescription: '直播首秀前，她想买一支像样的口红撑场面，站在柜台前犹豫了很久。',
        line: "Fine, I'll splurge on one lipstick. Just one.",
        lineCn: '行吧，我就奢侈一回，买一支口红。就一支。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'save money very carefully', cn: '精打细算', correct: false, reason: '那是 save up，splurge 恰恰相反，是忍不住花钱买贵的。' },
          { key: 'B', en: 'spend a lot on something you want', cn: '（为喜欢的东西）挥霍一把', correct: true, reason: '一支口红对她已是奢侈，splurge 就是明知道贵还是买了。' },
          { key: 'C', en: 'return a purchase for money', cn: '退货退款', correct: false, reason: '退货是 refund，这和她站在柜台前下决心买东西的动作不搭。' }
        ],
        analysis: '一支口红对她来说已经是奢侈。splurge 强调“明知道贵，还是忍不住买”，语气里带着一点自我放纵。',
        wrongFeedback: '你答错了，苏晚被解读成要省钱，空手离开柜台，直播时嘴唇干裂，气血 -10。',
        afterCorrect: '她买下那支豆沙色口红，回程公交上一直捏着袋子。当晚直播，镜头里的她涂着那支口红，第一句话是：“今天不卖惨，只卖货。”'
      }
    ],
    completeText: '那一晚，苏晚在六百块的出租屋里支起手机支架，房间只有一盏台灯。她不知道镜头那头有没有人，但她知道，从今晚起，她只能靠自己。'
  },
  {
    id: 'fl_2',
    index: 2,
    title: '第 2 章 · 六百块的出租屋',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '中介带她穿过一条没有路灯的巷子，六楼，没电梯。房东抱着胳膊站在门口，说押一付三，一分不能少。苏晚摸了摸口袋里的现金，抬头看了看那扇掉了漆的门。',
    questions: [
      {
        plotDescription: '她去批发市场拿货，老板报了个高价，还说这是“网红同款”。',
        line: "Eighty for this? That's a rip-off and you know it.",
        lineCn: '这个要八十？这就是坑人，你心里清楚。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a surprisingly good bargain', cn: '划算的买卖', correct: false, reason: 'rip-off 是反过来的意思，指宰客，不是捡到便宜。' },
          { key: 'B', en: 'a package torn open', cn: '被撕开的包装', correct: false, reason: '被撕开是 ripped，rip-off 是名词，说的是价格太黑。' },
          { key: 'C', en: 'something way overpriced', cn: '宰人的高价货', correct: true, reason: '同样的货别家只卖三十，rip-off 就是“贵得离谱”。' }
        ],
        analysis: 'rip-off 是口语里最常用的“太贵了、被坑了”，比 expensive 更冲，带着“你明摆着宰我”的意思。',
        wrongFeedback: '你没听出她在砍价，苏晚原价拿了货，回去一算成本全赔，气血 -10。',
        afterCorrect: '老板被她盯得发毛，最后三十成交。苏晚拎着袋子出门，回头补了一句：“下次别拿我当新客。”她记下了每一家的底价。'
      },
      {
        plotDescription: '合租的隔壁男生又来蹭她的电磁炉，还顺手拿走两包面。',
        line: "You're a freeloader, not a roommate. Buy your own noodles.",
        lineCn: '你是来白嫖的，不是来合租的。自己买面去。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who works too hard', cn: '拼命工作的人', correct: false, reason: 'freeloader 完全相反，指白吃白拿、从不付钱的人。' },
          { key: 'B', en: 'someone who lives off others', cn: '白吃白拿的人', correct: true, reason: '他蹭炉子、拿面、不掏钱，freeloader 说的就是这种人。' },
          { key: 'C', en: 'a food delivery worker', cn: '外卖员', correct: false, reason: '外卖是 delivery，这里说的是他占便宜，不是职业。' }
        ],
        analysis: 'freeloader 由 free 和 loader 组成，专指占别人便宜、从不付钱的人，贬义很明显。',
        wrongFeedback: '你答错了，苏晚没把话说透，那人第二天又来了，还顺走了她的锅，气血 -10。',
        afterCorrect: '男生讪讪地放下筷子。苏晚当晚就在冰箱上贴了张纸：食物共享需付费。她开始明白，边界这东西，你不划，别人就替你划。'
      },
      {
        plotDescription: '有人私信她说能带她上热门，先交九百八的“推广费”。',
        line: "Pay first to get traffic? That's a scam, sweetheart.",
        lineCn: '先交钱才给流量？亲爱的，那是骗局。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a trick to steal your money', cn: '骗钱的局', correct: true, reason: '先收费再承诺流量，对方要的只是她转过去的那笔钱。' },
          { key: 'B', en: 'a fast way to grow', cn: '快速涨粉的捷径', correct: false, reason: '这正是骗子的话术，scam 指的就是这种圈套。' },
          { key: 'C', en: 'a paid advertisement', cn: '付费广告', correct: false, reason: '正规投放有合同有后台，不会让人私下转账。' }
        ],
        analysis: 'scam 指以骗钱为目的的圈套。先收费再承诺流量，是直播间最常见的套路之一。',
        wrongFeedback: '你信了那套话术，苏晚转了钱，对方立刻拉黑她，气血 -10。',
        afterCorrect: '她把聊天记录截了图，发在自己的第一条动态里：“这种私信别信，我替你们试过了。”那条动态，成了她账号第一次被人转发。'
      },
      {
        plotDescription: '她翻出原主留下的账单，信用卡、网贷，还有一笔不知道去向的借款。',
        line: "This debt isn't mine, but it's my name on the paper.",
        lineCn: '这笔债不是我欠的，但纸上写的是我的名字。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a blank sheet of paper', cn: '一张白纸', correct: false, reason: '纸只是载体，debt 指的是写在纸上的那笔欠款。' },
          { key: 'B', en: 'a bad reputation', cn: '坏名声', correct: false, reason: '欠债确实不好听，但 debt 指的是具体的钱，不是名声。' },
          { key: 'C', en: 'money you owe', cn: '欠下的钱', correct: true, reason: '名字在纸上，就意味着这笔钱得由她来还，哪怕不是她借的。' }
        ],
        analysis: 'debt 是“欠款、债务”。名字签在纸上，责任就落到了她头上，这比“坏名声”具体得多。',
        wrongFeedback: '你低估了这张纸的分量，催收电话半夜响起，苏晚一夜没睡，气血 -10。',
        afterCorrect: '苏晚把账单摊在桌上，一笔一笔算。算完她给自己定了规矩：先还利息最高的，剩下的慢慢来。她从不逃账，这是她唯一不肯让步的体面。'
      }
    ],
    completeText: '那晚她算到凌晨三点，账本上还剩一串红字。但她在最底下写了一行：只要人还在，账总能还完。'
  },
  {
    id: 'fl_3',
    index: 3,
    title: '第 3 章 · 衣柜里翻出的创业计划书',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '夜里十一点，她在出租屋整理原主留下的旧衣柜，翻出一个没拆封的U盘。插上电脑，里面是一份写了一半的创业计划书，封面四个字：国货美妆。',
    questions: [
      {
        plotDescription: '她去便利店打零工，店长把工资装进信封递给她，还压了半个月夜班费。',
        line: "My paycheck is short again. Did you forget the night shifts?",
        lineCn: '我的工资又少了。你是不是忘了夜班？',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you earn from a job', cn: '工资、薪水', correct: true, reason: '信封里装的是她上个月干活挣的钱，paycheck 就是到手薪水。' },
          { key: 'B', en: 'a bank check', cn: '银行支票', correct: false, reason: 'paycheck 字面有 check，但口语里指发到手的报酬，不是支票。' },
          { key: 'C', en: 'a shopping receipt', cn: '购物小票', correct: false, reason: '小票是 receipt，老板给她的钱是干活换来的报酬。' }
        ],
        analysis: 'paycheck 指“工资、薪水”，尤其强调到手的那笔钱。她说“又短了”，是在问夜班费去哪了。',
        wrongFeedback: '你没听出她在讨薪，店长糊弄过去，那半个月的夜班白熬了，气血 -10。',
        afterCorrect: '店长支吾半天，补了她两百。苏晚把钱数清楚才走。她在心里记下：以后每班打卡截图，一个都不能少。'
      },
      {
        plotDescription: '手机连着响了三声，都是催缴短信：电费、水费，还有话费。',
        line: "The bills don't care that I'm tired. They just keep coming.",
        lineCn: '账单才不管我累不累，它们只顾着来。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'paper money', cn: '纸币', correct: false, reason: '纸币是 cash 或 notes，bill 在这里指要付的账。' },
          { key: 'B', en: 'laws being passed', cn: '正在通过的法案', correct: false, reason: 'bill 确实有法案的意思，但这里说的是水电费。' },
          { key: 'C', en: 'statements of money you owe', cn: '要付的账单', correct: true, reason: '电费水费话费都是 bills，是每月必须付清的钱。' }
        ],
        analysis: 'bills 复数常指水、电、话费这类日常账单。她说“账单不管我累不累”，把生活压力说得很直白。',
        wrongFeedback: '你答错了，苏晚以为还有缓冲时间，第二天电就被停了，气血 -10。',
        afterCorrect: '她当天就把能省的开销全砍了，只留一盏灯和一张床。关灯前她想：等赚到钱，第一件事就是把账单一次付清。'
      },
      {
        plotDescription: '批发市场的老太太不收款码，只收现金，她翻遍了整个包。',
        line: "Cash only? Give me a second, I've got it somewhere.",
        lineCn: '只收现金？等一下，我包里应该有。',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'a credit card', cn: '信用卡', correct: false, reason: '刷卡和现金是两回事，老太太明确说只收现钱。' },
          { key: 'B', en: 'physical money', cn: '现金', correct: true, reason: '她翻包找的就是纸币和硬币，cash 指实体现金。' },
          { key: 'C', en: 'a discount coupon', cn: '优惠券', correct: false, reason: '券不能当钱收，这里说的是能直接付的现钱。' }
        ],
        analysis: 'cash 指实体现金。老板只收现金时，扫码和刷卡都不算，你得摸出纸币来。',
        wrongFeedback: '你误解了她翻包的动作，苏晚没凑够，货被别人先拿走了，气血 -10。',
        afterCorrect: '她从夹层里摸出几张皱巴巴的纸币，正好够。老太太笑着多送了她两包试用装：“小姑娘，会过日子。”'
      },
      {
        plotDescription: '原主欠的那笔钱，其实是向苏家老管家借的，对方找上门来。',
        line: "I'll pay back the loan, every cent, but I need time.",
        lineCn: '这笔借款我会还，一分不少，但我需要时间。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money borrowed and to be repaid', cn: '借款', correct: true, reason: '老管家借出去的钱要还，loan 就是借来要归还的款。' },
          { key: 'B', en: 'a gift with no return', cn: '不用还的赠予', correct: false, reason: '赠予不用还，loan 的核心恰恰是“必须还”。' },
          { key: 'C', en: 'a bank account', cn: '银行账户', correct: false, reason: '账户是 account，loan 是借出来的那一笔钱。' }
        ],
        analysis: 'loan 是借来要还的钱。她没有否认这笔债，只是要求宽限，这是她做人的底线。',
        wrongFeedback: '你把借款听成了赠予，苏晚没给出还款计划，老管家失望离开，气血 -10。',
        afterCorrect: '她当场写下欠条，写明三个月内还清。老管家收起纸，看了她一眼：“大小姐变了。”苏晚笑了笑：“我不是大小姐了。”'
      }
    ],
    completeText: '那天她送老管家到楼下，回来时路灯刚亮。她抬头看了看六楼那扇小窗，第一次觉得，穷不可怕，赖账才可怕。'
  },
  {
    id: 'fl_4',
    index: 4,
    title: '第 4 章 · 直播间的第一盏灯',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '她花了两天把房间角落收拾成直播间：一面白墙、一盏台灯、一部旧手机。开播前十分钟，她对着黑屏练了七遍开场白，嗓子发干。',
    questions: [
      {
        plotDescription: '供应商拿出一批包装简陋的面膜，说便宜给她，但成分表含糊不清。',
        line: "It's cheap for a reason. I'm not putting this on anyone's face.",
        lineCn: '它便宜是有原因的。我不会把这东西往任何人脸上抹。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'low in price', cn: '价格便宜的', correct: false, reason: '她不是嫌贵，而是在说“便宜到不对劲”，重点在质量。' },
          { key: 'B', en: 'poor in quality', cn: '劣质的、不靠谱的', correct: true, reason: '成分表含糊又便宜得反常，cheap 在这里指质量差。' },
          { key: 'C', en: 'generous with money', cn: '花钱大方的', correct: false, reason: 'cheap 形容人时可指抠门，但绝不是大方，方向反了。' }
        ],
        analysis: 'cheap 不只会说价格，也能说“品质差”。她拒绝的不是便宜，而是“便宜得可疑”。',
        wrongFeedback: '你只理解了价格，苏晚把货收下，粉丝用后过敏，退货堆成山，气血 -10。',
        afterCorrect: '她把那批货推了回去，宁可赔违约金。供应商骂她不懂做生意，她回了一句：“我懂，我只是不想做一次性的生意。”'
      },
      {
        plotDescription: '她想租下隔壁空着的储物间当仓库，房东报的押金让她沉默了几秒。',
        line: "I can't afford the deposit right now, but I can pay in two weeks.",
        lineCn: '我现在付不起押金，但两周后能付。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'have enough money for', cn: '负担得起', correct: true, reason: '她说现在拿不出押金，afford 说的就是钱够不够。' },
          { key: 'B', en: 'be allowed to do something', cn: '被允许做某事', correct: false, reason: 'afford 不是在谈许可，而是在谈经济能力。' },
          { key: 'C', en: 'refuse to accept', cn: '拒绝接受', correct: false, reason: '她没拒绝，她在协商付款时间，说明她想租。' }
        ],
        analysis: 'afford 指经济上负担得起。她坦白现在拿不出，但给出明确期限，反而让对方愿意等。',
        wrongFeedback: '你答错了，房东以为她在推脱，储物间租给了别人，气血 -10。',
        afterCorrect: '房东看她眼神不躲，最后点了头：“两周，我等你。”那间三平米的储物间，后来成了“晚来”的第一个仓库。'
      },
      {
        plotDescription: '她花三百块买了一套补光灯，朋友说太贵，她对着镜头试了试。',
        line: "Three hundred for this light? Honestly, worth it.",
        lineCn: '这灯三百？说实话，值。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'far too expensive', cn: '实在太贵了', correct: false, reason: '她已经说了 worth it，这是认可，不是嫌贵。' },
          { key: 'B', en: 'broken already', cn: '已经坏掉了', correct: false, reason: '她刚试过灯，画面效果好，才说这个价值得。' },
          { key: 'C', en: 'good enough to justify the cost', cn: '值这个价', correct: true, reason: '价格只是铺垫，worth it 表达的是“这钱花得不亏”。' }
        ],
        analysis: 'worth it 是口语高频表达，表示“花这个钱不亏”。前面的价格只是铺垫，重点在最后三个词。',
        wrongFeedback: '你没听懂她的判断，苏晚犹豫着退了灯，直播画面一直发灰，气血 -10。',
        afterCorrect: '那盏灯让她的画面第一次有了“专柜感”。当晚在线人数从七个人涨到六十个，她盯着屏幕，手心全是汗。'
      },
      {
        plotDescription: '白天她在便利店上班，晚上直播，同事问她怎么天天这么熬。',
        line: "This livestream is my side hustle. The store pays the bills.",
        lineCn: '直播是我的副业，便利店那份工资才交得起账单。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a second job for extra money', cn: '副业', correct: true, reason: '她白天上班晚上直播，直播就是主业之外赚钱的第二份工。' },
          { key: 'B', en: 'a hobby with no money in it', cn: '不赚钱的爱好', correct: false, reason: '她做直播是要赚钱的，不是纯玩，副业带拼劲。' },
          { key: 'C', en: 'a full-time career', cn: '全职事业', correct: false, reason: '她明确说店里那份才付账单，直播是副业。' }
        ],
        analysis: 'side hustle 指主业之外用来赚钱的第二职业，带着“我先熬着”的劲头，和随便玩玩完全不同。',
        wrongFeedback: '你答错了，同事以为她只是玩票，又给她排了两个夜班，气血 -10。',
        afterCorrect: '同事愣了一下，说：“那你可真能熬。”苏晚笑了笑没解释。她心里清楚，副业撑到某一天，就会变成唯一的出路。'
      }
    ],
    completeText: '那个月她只睡了不到两百个小时，但账户里第一次有了四位数。她把截图存进相册，命名：起点。'
  },
  {
    id: 'fl_5',
    index: 5,
    title: '第 5 章 · 三小时零单',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '开播三个小时，在线人数最高时只有九个人，成交零单。弹幕里有人问“这是卖什么的”，也有人直接退出去。苏晚一直笑着，直到关播那一刻。',
    questions: [
      {
        plotDescription: '便利店新来的女孩问她工资多少，苏晚把排班表推过去。',
        line: "They pay minimum wage and call it a family.",
        lineCn: '他们给最低工资，还说这是一家人。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very high salary', cn: '很高的薪水', correct: false, reason: 'minimum 是最低，方向正好反了，不是高薪。' },
          { key: 'B', en: 'money paid by the hour', cn: '按小时计的钱', correct: false, reason: '按小时算是 hourly pay，这里强调的是“最低标准”。' },
          { key: 'C', en: 'the lowest legal pay rate', cn: '法定最低工资', correct: true, reason: '她讽刺店长只给法定下限，却张口闭口谈家人。' }
        ],
        analysis: 'minimum wage 是法律规定的工资下限。她说“给最低工资还谈家人”，是典型的打工人反讽。',
        wrongFeedback: '你没听出讽刺，这话被店长听见，苏晚的排班又被砍了一半，气血 -10。',
        afterCorrect: '女孩低头笑了。苏晚补了一句：“别信一家人那套，先把工时记清楚。”她说完自己愣了一下，这话像是说给从前的自己听的。'
      },
      {
        plotDescription: '她刷卡进货，付款时页面弹出一行红字，收银员抬头看她。',
        line: "My card hit an overdraft. Give me a minute, I'll transfer.",
        lineCn: '我卡透支了。等一下，我转钱进来。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a discount on the card', cn: '卡上的折扣', correct: false, reason: 'overdraft 和折扣无关，说的是账户余额被花超了。' },
          { key: 'B', en: 'spending more than your balance', cn: '账户透支', correct: true, reason: '卡里钱不够却仍被扣款，所以她得当场转账补上。' },
          { key: 'C', en: 'a card being frozen', cn: '卡被冻结', correct: false, reason: '冻结是 frozen，透支是余额不足还继续支出。' }
        ],
        analysis: 'overdraft 指账户余额不足还继续支出，往往还会产生手续费。她当场转账，是在补这个窟窿。',
        wrongFeedback: '你没听懂她的窘境，苏晚没及时补款，被扣了手续费，气血 -10。',
        afterCorrect: '她站在收银台边转完账，抬头对后面排队的人说了句抱歉。走出门她才敢喘口气：差一点，货就砸在手里。'
      },
      {
        plotDescription: '房东说要涨租，她连夜算账，把想买的东西一个个划掉。',
        line: "I need to save up for the new warehouse, so no new phone this year.",
        lineCn: '我得攒钱租新仓库，所以今年不换手机了。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money aside over time', cn: '一点点攒钱', correct: true, reason: '她放弃换手机，把钱慢慢存起来租仓库，这就是攒。' },
          { key: 'B', en: 'borrow money from a bank', cn: '向银行借钱', correct: false, reason: '借钱是 loan，save up 是自己慢慢存下来。' },
          { key: 'C', en: 'spend money quickly', cn: '快速花钱', correct: false, reason: '那是 splurge，和“攒”正好相反。' }
        ],
        analysis: 'save up 强调“为某个目标持续存钱”。她把换手机的钱挪去租仓库，是在给生意让路。',
        wrongFeedback: '你答错了，苏晚以为她要借钱扩张，账上多了笔利息，气血 -10。',
        afterCorrect: '她在手机备忘录里列了个清单：仓库、包装、快递面单。每攒够一笔就划掉一行，那一年她划掉了十一行。'
      },
      {
        plotDescription: '一个老客户劝她花钱做品牌设计，别总把钱压在货上。',
        line: "Putting money into the brand is the best way to invest right now.",
        lineCn: '现在把钱投进品牌，是最划算的投资。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend on nothing useful', cn: '乱花钱', correct: false, reason: '对方是在建议她把钱花在刀刃上，不是乱花。' },
          { key: 'B', en: 'borrow more money', cn: '继续借钱', correct: false, reason: 'invest 是投入，不等于借贷，方向不同。' },
          { key: 'C', en: 'put money in for future returns', cn: '投入以求回报', correct: true, reason: '做品牌看似花钱，其实是在攒长期价值，这就是投资。' }
        ],
        analysis: 'invest 的核心是“投入资源换取未来收益”。做品牌设计看似花钱，其实是在攒长期价值。',
        wrongFeedback: '你没听懂建议，苏晚继续压货，包装一直像三无产品，气血 -10。',
        afterCorrect: '她咬牙找了设计师，做出第一款像样的包装。上线那天，评论区第一条是：“这家看着不像小作坊了。”'
      }
    ],
    completeText: '第五章结束时，她的账户只剩三位数，但仓库里堆着第一批像样的货。她坐在纸箱上想：钱要花在能长大的地方。'
  },
  {
    id: 'fl_6',
    index: 6,
    title: '第 6 章 · 假货风波',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '第二批货里混进了几十支假货，是上游发错了。评论区开始出现过敏的照片，一条比一条激烈。苏晚盯着屏幕，手指停在退款按钮上。',
    questions: [
      {
        plotDescription: '第一次月销破十万，她兴奋了半小时，会计发来一张表。',
        line: "Don't celebrate yet. Tax takes a bite before you see the rest.",
        lineCn: '先别庆祝。税会先咬掉一口，剩下的才是你的。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid to the government', cn: '税', correct: true, reason: '会计提醒她，销售额里有一部分要交给国家。' },
          { key: 'B', en: 'a delivery fee', cn: '快递费', correct: false, reason: '快递费是 shipping，税是依法上缴的钱。' },
          { key: 'C', en: 'a staff bonus', cn: '员工奖金', correct: false, reason: '奖金是从利润里发出去的，不是交给税务的。' }
        ],
        analysis: 'tax 指依法缴纳的税款。她第一次知道，销售额不等于到手的钱，中间还隔着一层税。',
        wrongFeedback: '你答错了，苏晚把钱全投进下一批货，报税时差点周转不开，气血 -10。',
        afterCorrect: '她当晚就去补了财税课，把每一笔进出都记清楚。会计说她是自己见过最较真的小老板。'
      },
      {
        plotDescription: '一位顾客说色号不对，要求退钱，还在评论区连发三条。',
        line: "Send it back and I'll give you a full refund, no questions.",
        lineCn: '寄回来，我全额退给你，不追问。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'a replacement product', cn: '换货', correct: false, reason: '换货是 exchange，refund 是把钱退回去。' },
          { key: 'B', en: 'a public apology', cn: '公开道歉', correct: false, reason: '道歉可以另外说，但她这里明确讲的是退钱。' },
          { key: 'C', en: 'money given back', cn: '退款', correct: true, reason: '她说“寄回来就全额退”，退的就是顾客付的钱。' }
        ],
        analysis: 'refund 指把钱退还给买家。她说“不追问”，是把售后做成口碑，而不是争输赢。',
        wrongFeedback: '你没听懂她的处理方式，顾客越吵越凶，评论区彻底沦陷，气血 -10。',
        afterCorrect: '那位顾客收到退款后，反而回来道了歉，还成了老客。苏晚把这条对话置顶了半年。'
      },
      {
        plotDescription: '仓库丢了两箱货，快递公司说没记录，她翻出一叠纸。',
        line: "I keep every receipt. Show me yours, then we'll talk.",
        lineCn: '每张收据我都留着。把你的拿出来，我们再谈。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a product label', cn: '产品标签', correct: false, reason: '标签是 label，收据是收货付款的凭证。' },
          { key: 'B', en: 'proof of a payment', cn: '收据、付款凭证', correct: true, reason: '她留的是每笔收发的凭证，所以才敢让对方拿记录。' },
          { key: 'C', en: 'a delivery address', cn: '收货地址', correct: false, reason: '地址是 address，不能拿来证明货交给了谁。' }
        ],
        analysis: 'receipt 是收付款凭证。她把每一张都留着，所以在扯皮时一句“拿凭证”就占了上风。',
        wrongFeedback: '你答错了，苏晚拿不出凭证，两箱货只能自己认赔，气血 -10。',
        afterCorrect: '快递员翻遍系统，最后低头认了。赔款到账那天，她在仓库贴了张纸：所有单据，留一年。'
      },
      {
        plotDescription: '帮她搬货的邻居小伙忙了两小时，走时她塞了点钱。',
        line: "Take this as a tip. You saved me two hours.",
        lineCn: '这个当小费收着。你帮我省了两个小时。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money for good service', cn: '小费、答谢钱', correct: true, reason: '她往对方手里塞的是钱，用来谢他帮忙搬货。' },
          { key: 'B', en: 'a piece of advice', cn: '一条建议', correct: false, reason: 'tip 确实有“建议”的意思，但这里她递的是钱。' },
          { key: 'C', en: 'a warning signal', cn: '警告', correct: false, reason: '警告是 warning，语境里没有半点提醒的意思。' }
        ],
        analysis: 'tip 在这里是“给服务者的额外酬谢”。她给得不多，但把人情和账分得很清楚。',
        wrongFeedback: '你理解错了她的动作，小伙子以为她只说了句谢谢，转身走了，气血 -10。',
        afterCorrect: '小伙子推了两下还是收下了。第二天他又来，说：“姐，以后搬货叫我，不要钱。”'
      }
    ],
    completeText: '第六章结束，她第一次把售后、税务、单据这些“没劲的事”做全了。她发现，生意真正的门槛，都藏在这些细节里。'
  },
  {
    id: 'fl_7',
    index: 7,
    title: '第 7 章 · 一个人扛下所有退款',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '账号刚有起色，订单从一天三十单涨到三百单。她一个人打包到凌晨，手指被胶带割开三道口子。楼下的便利店还亮着灯，她决定去问问那个兼职的女孩。',
    questions: [
      {
        plotDescription: '订单突然多了三倍，她一个人打包到凌晨，决定找个人帮忙。',
        line: "I need to hire someone before my hands fall off.",
        lineCn: '我得招个人，不然手都要废了。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to dismiss an employee', cn: '解雇员工', correct: false, reason: '那是 fire，hire 是相反的“把人招进来”。' },
          { key: 'B', en: 'to employ someone', cn: '雇人', correct: true, reason: '她打包到凌晨扛不住了，需要招个人来帮忙。' },
          { key: 'C', en: 'to train yourself', cn: '自我训练', correct: false, reason: '她说的是找别人来干活，不是自己练。' }
        ],
        analysis: 'hire 是“雇佣、招人”。她用“手要废了”当理由，是在说自己已经到极限了。',
        wrongFeedback: '你答错了，苏晚没招人，第二天贴错了两百单，气血 -10。',
        afterCorrect: '她招了第一个员工，是楼下便利店的兼职女孩。面试只问了一句：“能吃苦吗？”女孩说能，第二天就来了。'
      },
      {
        plotDescription: '新来的男孩偷拍仓库照片卖给同行，被她当场撞见，手机里还有转账记录。',
        line: "Pack your things. I'm going to fire you, and I'll do it in front of everyone.",
        lineCn: '收拾东西吧。我要当众开了你。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to dismiss from a job', cn: '解雇', correct: true, reason: '她让他收拾东西，fire 在这里就是开除、让人走。' },
          { key: 'B', en: 'to set something on fire', cn: '点火烧掉', correct: false, reason: 'fire 字面是点火，但这里说的是让他丢掉工作。' },
          { key: 'C', en: 'to give a warning', cn: '给予警告', correct: false, reason: '她说了“收拾东西”，显然不是警告这么轻。' }
        ],
        analysis: 'fire 在职场里指“开除”。当众说这句话，是让对方知道这事没有回旋余地。',
        wrongFeedback: '你答错了，苏晚心软留了人，一周后核心配方被抄走，气血 -10。',
        afterCorrect: '男孩脸色发白，还想解释。苏晚把手机转账记录投到墙上：“你卖的不是照片，是别人的饭碗。”'
      },
      {
        plotDescription: '连续熬了一个月，她凌晨在仓库坐了很久，手机里是妈妈发来的消息。',
        line: "Some nights I want to quit, and then I look at the orders.",
        lineCn: '有些晚上我真想不干了，然后我看看订单。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'to work even harder', cn: '更加努力', correct: false, reason: 'quit 是放弃，不是在给自己打鸡血。' },
          { key: 'B', en: 'to take a short break', cn: '休息一下', correct: false, reason: '休息是 take a break，quit 是彻底不干。' },
          { key: 'C', en: 'to give up and stop', cn: '放弃、退出', correct: true, reason: '她说有些晚上想不干了，quit 就是放弃退出。' }
        ],
        analysis: 'quit 是“放弃、辞掉”。她没有掩饰脆弱，但“看看订单”说明她还是选择留下。',
        wrongFeedback: '你答错了，苏晚以为自己只是累了，第二天睡过头错过发货，气血 -10。',
        afterCorrect: '她给自己泡了碗面，吃完继续打包。那晚她在纸箱上写了一个词：再撑一天。后来这三个字贴满了整面墙。'
      },
      {
        plotDescription: '第一个员工干了半年，从打包做到能独立管库存，苏晚把新名片递给她。',
        line: "You've earned this promotion. Starting today, the warehouse is yours.",
        lineCn: '这个升职是你挣来的。从今天起，仓库归你管。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a pay cut', cn: '降薪', correct: false, reason: '升职通常伴随加薪，promotion 是往上走，不是往下。' },
          { key: 'B', en: 'a move to a higher position', cn: '升职', correct: true, reason: '她让员工从打包做到管仓库，这就是职位往上提。' },
          { key: 'C', en: 'a marketing campaign', cn: '推广活动', correct: false, reason: 'promotion 确实有促销的意思，但这里说的是职位。' }
        ],
        analysis: 'promotion 在这句里指职位晋升。她说“是你挣来的”，把功劳明确给了对方。',
        wrongFeedback: '你误解了这句话，员工以为要加活不加钱，当天就辞了，气血 -10。',
        afterCorrect: '女孩红了眼眶，接过名片的手在抖。苏晚拍拍她：“别哭，仓库漏水了得你修。”'
      }
    ],
    completeText: '第七章结束，她的团队从一个人变成三个人。她开始学着把事交出去，也学着接受别人做得没她好。'
  },
  {
    id: 'fl_8',
    index: 8,
    title: '第 8 章 · 隔壁的泡面味',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '大促前一周，三个人挤在三平米的仓库里，纸箱堆到天花板。隔壁飘来泡面味，谁都没说话。苏晚在白板上写下三个数字：库存、单量、截止时间。',
    questions: [
      {
        plotDescription: '大促前夜，仓库灯亮到凌晨四点，三个员工都在贴单，她买了夜宵。',
        line: "Everybody's on overtime tonight. Food's on me.",
        lineCn: '今晚全员加班。吃的我请。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'working fewer hours', cn: '减少工时', correct: false, reason: 'overtime 是超出正常工时，不是缩短工时。' },
          { key: 'B', en: 'a night shift only', cn: '只上夜班', correct: false, reason: '夜班是 night shift，加班指超出正常时长。' },
          { key: 'C', en: 'extra hours beyond normal work', cn: '加班', correct: true, reason: '凌晨四点还在贴单，这明显是超出正常工时的加班。' }
        ],
        analysis: 'overtime 指超出正常工时的工作时间。她说“吃的我请”，是在给团队一个交代。',
        wrongFeedback: '你答错了，大家以为不用加班，八点就散了，货卡在仓库，气血 -10。',
        afterCorrect: '四个人蹲在纸箱上吃炒饭，谁都没说话。凌晨四点最后一批出库，她在群里发了个红包，备注：都去睡。'
      },
      {
        plotDescription: '平台活动报名只剩最后一小时，运营打电话来催。',
        line: "The deadline is in one hour. If we miss it, we wait a whole month.",
        lineCn: '截止时间只剩一小时。错过就得再等一个月。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the start of a project', cn: '项目开始时间', correct: false, reason: 'deadline 是最后期限，不是项目开始的时间。' },
          { key: 'B', en: 'the last moment to finish', cn: '最后期限', correct: true, reason: '错过就要再等一个月，说的是报名不能再拖的时限。' },
          { key: 'C', en: 'a price reduction', cn: '降价', correct: false, reason: '降价是 discount，和报名截止没有关系。' }
        ],
        analysis: 'deadline 是“不可再拖的最后期限”。她用“等一个月”说明代价，逼团队立刻动起来。',
        wrongFeedback: '你答错了，材料晚交十分钟，活动名额没了，气血 -10。',
        afterCorrect: '她们在第五十八分钟提交成功。苏晚瘫在椅子上笑：“以后所有截止时间，提前一天算。”'
      },
      {
        plotDescription: '一家连锁店想订她的货，负责人约在咖啡馆，开口就要独家。',
        line: "The client wants exclusivity, but I'm not signing that today.",
        lineCn: '客户想要独家，但我今天不会签。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a customer who buys your service', cn: '客户', correct: true, reason: '连锁店是来订她的货的，client 就是付钱买货的客户。' },
          { key: 'B', en: 'a competitor', cn: '竞争对手', correct: false, reason: '对方是来下单的，不是来抢生意的同行。' },
          { key: 'C', en: 'a supplier', cn: '供应商', correct: false, reason: '供应商是供货给你的人，这里是要买货的人。' }
        ],
        analysis: 'client 指付钱购买服务或产品的客户。她没被大单冲昏头，先守住了自己的渠道。',
        wrongFeedback: '你答错了，苏晚当场答应独家，其他渠道被迫下架，气血 -10。',
        afterCorrect: '她提出折中方案：先做三个月的限定款。对方想了想，伸手：“苏小姐，你比传闻里难缠。”'
      },
      {
        plotDescription: '周一早上九点，三个人挤在仓库的小桌前，她把白板搬了过来。',
        line: "This meeting is ten minutes. One problem, one solution.",
        lineCn: '这个会只开十分钟。一个问题，一个方案。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a social party', cn: '社交聚会', correct: false, reason: '这里有白板、有议题，是工作会，不是聚会。' },
          { key: 'B', en: 'a job interview', cn: '面试', correct: false, reason: '面试是 interview，参加的人都是她的员工。' },
          { key: 'C', en: 'a work discussion', cn: '工作会议', correct: true, reason: '她搬来白板限时讨论问题，这就是工作例会。' }
        ],
        analysis: 'meeting 指为某个议题开的会。她限定十分钟，是在改掉“开会等于聊天”的毛病。',
        wrongFeedback: '你没听懂她的规则，会开成了两小时吐槽，货没发出去，气血 -10。',
        afterCorrect: '十分钟后白板上多了三行字，每行后面都写着负责人和日期。她合上笔：“散会，去干活。”'
      }
    ],
    completeText: '第八章结束，她的仓库第一次有了“流程”这种东西。虽然只是贴在墙上的三张纸，但每个人都开始按它走。'
  },
  {
    id: 'fl_9',
    index: 9,
    title: '第 9 章 · 第一笔广告费',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '平台发来联名合作的邀请，方案改了七版。与此同时，一条“被豪门扫地出门”的爆料冲上同城热搜，评论区等着看她怎么回应。',
    questions: [
      {
        plotDescription: '平台邀请她做一个联名款，方案改到第七版，设计师快哭了。',
        line: "This project is my baby. I'm not shipping it half-done.",
        lineCn: '这个项目是我的孩子。半成品我不上。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work', cn: '项目', correct: true, reason: '联名款从设计到上线是一整套工作，就是项目。' },
          { key: 'B', en: 'a written contract', cn: '书面合同', correct: false, reason: '合同是 contract，这里指的是一整套要做的事。' },
          { key: 'C', en: 'a type of product', cn: '一种产品', correct: false, reason: '她做的是联名款，但 project 指整件事，不只是货。' }
        ],
        analysis: 'project 指有目标、有周期的一整套工作。她说“我的孩子”，是在表达自己对它的在意。',
        wrongFeedback: '你答错了，苏晚赶着上线，成品粗糙，被骂上热门，气血 -10。',
        afterCorrect: '第八版终于过了。上线当天卖空，设计师在群里发了一排哭脸：“下次别找我。”苏晚回：“下次还找你。”'
      },
      {
        plotDescription: '有人在评论区爆料，说她被苏家“扫地出门”，语气很得意。',
        line: "Yes, I got fired from that family. Best thing that ever happened.",
        lineCn: '对，我被那个家扫地出门了。那是我遇到过最好的事。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'hired for a job', cn: '被录用', correct: false, reason: 'fired 是被炒，和“被录用”正好相反。' },
          { key: 'B', en: 'praised in public', cn: '被公开表扬', correct: false, reason: '语境里是被赶出来，不是被夸。' },
          { key: 'C', en: 'dismissed and forced out', cn: '被解雇、被赶走', correct: true, reason: '她说自己被那个家赶出来，fired 就是被扫地出门。' }
        ],
        analysis: 'fired 是“被开除”。她用“最好的事”反手一转，把羞辱变成了自己的开场白。',
        wrongFeedback: '你没听出她的反击，苏晚沉默不回应，黑料越传越真，气血 -10。',
        afterCorrect: '这条回应被转了两万次。有人在下面留言：“第一次见有人把被赶出门说得这么爽。”'
      },
      {
        plotDescription: '同行嘲讽她只是运气好，说直播卖货不算正经生意。',
        line: "Call it luck if you want. Business is still business.",
        lineCn: '你想叫它运气也行。生意就是生意。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a hobby', cn: '爱好', correct: false, reason: '她是在强调这是一门正经生意，不是消遣。' },
          { key: 'B', en: 'buying and selling for profit', cn: '生意、买卖', correct: true, reason: '她没争运气，只把定义拉回本质：能赚钱就是生意。' },
          { key: 'C', en: 'a charity event', cn: '慈善活动', correct: false, reason: '这里谈的是赚钱和竞争，和慈善无关。' }
        ],
        analysis: 'business 指以盈利为目的的经营。她没争“运气”，只把定义拉回本质：能持续赚钱就是生意。',
        wrongFeedback: '你答错了，苏晚被带进对方的节奏，越解释越像心虚，气血 -10。',
        afterCorrect: '那条评论底下，一群小卖家跟着刷“生意就是生意”。她第一次发现，自己不是一个人在打仗。'
      },
      {
        plotDescription: '陆时砚第一次以投资人身份出现，把一份合作方案推到她面前。',
        line: "I'm not here to save you. I'm here to make a deal.",
        lineCn: '我不是来救你的。我是来谈交易的。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business agreement', cn: '交易、协议', correct: true, reason: '桌上放着合作方案，他说的 deal 就是双方谈的生意。' },
          { key: 'B', en: 'a romantic date', cn: '约会', correct: false, reason: '桌上放着方案，谈的是合作，不是约会。' },
          { key: 'C', en: 'a serious warning', cn: '严厉警告', correct: false, reason: '他是来谈条件的，不是来威胁她的。' }
        ],
        analysis: 'deal 指双方达成的交易或协议。他先把“救”撇清，是为了让这场谈判平等。',
        wrongFeedback: '你误解了他的来意，苏晚把人当成施舍者，谈判没开始就结束了，气血 -10。',
        afterCorrect: '苏晚把方案翻到最后一页，指着分成比例：“这一条改，其他可以谈。”陆时砚挑了下眉：“有意思。”'
      }
    ],
    completeText: '第九章结束，她第一次和资本坐在同一张桌子前。她没答应，也没拒绝，只把自己的底线写在了纸上。'
  },
  {
    id: 'fl_10',
    index: 10,
    title: '第 10 章 · 账号被封的那一夜',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '投资人的车停在仓库门口，西装革履的人踩着纸箱走进来，把一份合同放在她面前。苏晚没急着翻，先问了一句：这上面的每一条，你都能解释吗？',
    questions: [
      {
        plotDescription: '律师把合同摊开，指着一条模糊的违约条款，问她要不要签。',
        line: "I don't sign a contract I don't understand. Explain this line.",
        lineCn: '看不懂的合同我不签。这一条，解释一下。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a verbal promise', cn: '口头承诺', correct: false, reason: 'contract 是白纸黑字的正式文件，不是随口答应。' },
          { key: 'B', en: 'a formal written agreement', cn: '正式合同', correct: true, reason: '律师摊开让她签字，contract 就是有法律效力的协议。' },
          { key: 'C', en: 'a business card', cn: '名片', correct: false, reason: '名片只是联系方式，没有法律约束力。' }
        ],
        analysis: 'contract 是有法律效力的书面协议。她的态度很明确：不懂的条款，绝不签字。',
        wrongFeedback: '你答错了，苏晚糊里糊涂签了字，半年后赔了一大笔违约金，气血 -10。',
        afterCorrect: '律师花了四十分钟逐条解释，最后改掉了两处。她签完字说：“我不怕麻烦，我怕后悔。”'
      },
      {
        plotDescription: '会计把季度报表发来，销售额很漂亮，她直接翻到最后一页。',
        line: "Sales look great, but where's the profit?",
        lineCn: '销售额看着漂亮，可利润在哪？',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'money left after costs', cn: '利润', correct: true, reason: '她跳过漂亮的销售额，只关心扣掉成本后还剩多少。' },
          { key: 'B', en: 'the total amount sold', cn: '销售总额', correct: false, reason: '那是 sales，利润是扣掉成本之后剩下的钱。' },
          { key: 'C', en: 'money owed to suppliers', cn: '欠供应商的钱', correct: false, reason: '那是应付账款，不是真正赚到的利润。' }
        ],
        analysis: 'profit 是收入减去成本后的净赚部分。她不被销售额迷惑，只关心真正剩下了多少。',
        wrongFeedback: '你答错了，苏晚被漂亮的销售额冲昏头，年底一算账几乎没赚，气血 -10。',
        afterCorrect: '会计沉默了几秒，把成本明细发过来。她看了半小时，圈出三项：“这三个，下周开始砍。”'
      },
      {
        plotDescription: '双十一结束，仓库里一片狼藉，她把三个人叫到一起。',
        line: "You hit the target. Your bonus is in the red envelope.",
        lineCn: '目标完成了。奖金在红包里。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'a punishment', cn: '惩罚', correct: false, reason: '完成目标给的是奖励，不是处罚。' },
          { key: 'B', en: 'a basic salary', cn: '基本工资', correct: false, reason: '基本工资是固定的，bonus 是额外给的。' },
          { key: 'C', en: 'extra money for good results', cn: '奖金', correct: true, reason: '她们完成了目标，红包里装的是额外的奖励钱。' }
        ],
        analysis: 'bonus 是因业绩好而额外发放的钱。她用红包发，是想让这份认可更有仪式感。',
        wrongFeedback: '你误解了这句话，员工以为要扣钱，气氛一下冷了，气血 -10。',
        afterCorrect: '三个人拆开红包，数目比说好的多。苏晚背过身去理货，装作没看见她们红掉的眼眶。'
      },
      {
        plotDescription: '有人挖她的运营主管，开出的条件很诱人，主管来跟她坦白。',
        line: "They offered double my salary. I'm telling you because I trust you.",
        lineCn: '他们给我开了双倍薪资。我告诉你，是因为我信你。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'a one-time reward', cn: '一次性奖励', correct: false, reason: '一次性奖励是 bonus，salary 是按月发的固定报酬。' },
          { key: 'B', en: 'fixed pay for a job', cn: '薪资', correct: true, reason: '对方用双倍工资挖人，salary 就是岗位的固定薪酬。' },
          { key: 'C', en: 'company shares', cn: '公司股份', correct: false, reason: '股份是 shares，这里说的是每月领的工资。' }
        ],
        analysis: 'salary 指岗位对应的固定薪酬。对方开双倍，是赤裸裸的挖人，而主管选择先说清楚。',
        wrongFeedback: '你答错了，苏晚以为对方在要挟，两人不欢而散，气血 -10。',
        afterCorrect: '苏晚沉默了一会儿，说：“我给不了双倍，但我能给股份。”主管愣住：“你认真的？”她点头。'
      }
    ],
    completeText: '第十章结束，她第一次开口给股份。那天晚上她在账本上写下：人比钱贵。写完自己笑了，这话要是半年前说，她肯定不信。'
  },
  {
    id: 'fl_11',
    index: 11,
    title: '第 11 章 · 一支口红的逆袭',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '一支豆沙色口红在深夜突然被一个小博主推荐，第二天早上，后台的订单数字开始滚动。苏晚盯着屏幕，手抖着点开库存页面，只剩三百支。',
    questions: [
      {
        plotDescription: '平台临时改了活动规则，她熬了三天的方案全废，运营在电话里骂人。',
        line: "I'm pissed off, but yelling won't fix the listing.",
        lineCn: '我火很大，但吼叫修不好商品链接。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly confused', cn: '有点困惑', correct: false, reason: '她不是没听懂规则，是被临时改规则气到了。' },
          { key: 'B', en: 'very tired', cn: '非常疲惫', correct: false, reason: '熬夜确实累，但这里说的是情绪，不是体力。' },
          { key: 'C', en: 'very angry', cn: '火大、气炸了', correct: true, reason: '方案全废，她在电话里发火，pissed off 就是很生气。' }
        ],
        analysis: 'pissed off 是口语里“火大、气炸了”的意思，比 angry 更随意，也更情绪化。',
        wrongFeedback: '你没听出她的火气，苏晚把气撒在客服身上，链接被降权，气血 -10。',
        afterCorrect: '她挂了电话，深呼吸三次，重新改了标题和主图。凌晨一点链接恢复，她给自己倒了杯凉水：“生气可以，别耽误事。”'
      },
      {
        plotDescription: '直播到一半，后台突然显示库存为零，弹幕开始刷“跑路”。',
        line: "Don't freak out. Check the inventory first, then we talk.",
        lineCn: '别抓狂。先查库存，再说话。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm down and rest', cn: '冷静下来休息', correct: false, reason: '她自己就在让大家别慌，这个词指的是慌乱本身。' },
          { key: 'B', en: 'panic and lose control', cn: '抓狂、情绪失控', correct: true, reason: '库存突然归零，全组都在慌，她让大别再失控。' },
          { key: 'C', en: 'laugh out loud', cn: '放声大笑', correct: false, reason: '弹幕在质疑跑路，现场没人笑得出来。' }
        ],
        analysis: 'freak out 指突然情绪失控、慌乱。她让团队先查数据，是把“慌”按住了。',
        wrongFeedback: '你答错了，团队当场乱成一团，直播被迫中断，气血 -10。',
        afterCorrect: '运营查出是系统同步延迟，库存其实还在。苏晚对着镜头笑：“刚才是系统跟我们开玩笑，货还在。”'
      },
      {
        plotDescription: '连播六小时后，她靠在墙角，妆都花了。',
        line: "I'm exhausted, but the orders keep coming. That's a good problem.",
        lineCn: '我累瘫了，但订单还在来。这是个好问题。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely tired', cn: '精疲力尽', correct: true, reason: '连播六小时靠墙站着，exhausted 就是累到极点。' },
          { key: 'B', en: 'very excited', cn: '非常兴奋', correct: false, reason: '订单多让她高兴，但她说的是自己的身体状态。' },
          { key: 'C', en: 'well rested', cn: '休息得很好', correct: false, reason: '和“靠墙、妆花”完全相反，方向错了。' }
        ],
        analysis: 'exhausted 是“精疲力尽”，比 tired 程度更重。她把累说成“好问题”，是创业者式的自我安慰。',
        wrongFeedback: '你答错了，苏晚硬撑着继续播，嗓子第二天彻底哑了，气血 -10。',
        afterCorrect: '员工把她从墙角拉起来，塞了瓶水。她喝完说：“再撑一小时，破千单我们就收。”'
      },
      {
        plotDescription: '庆功宴上员工起哄让她喝了两杯，第二天早上九点还要开播。',
        line: "I've got a hangover, but the camera doesn't care.",
        lineCn: '我宿醉，但镜头不会心疼我。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a headache from noise', cn: '被吵出来的头痛', correct: false, reason: '她昨晚喝了两杯，不是被噪音吵到。' },
          { key: 'B', en: 'a stomach ache from food', cn: '吃坏肚子', correct: false, reason: '庆功宴的重点是酒，不是吃坏了东西。' },
          { key: 'C', en: 'sickness after drinking', cn: '宿醉', correct: true, reason: '喝了两杯第二天难受，hangover 就是宿醉。' }
        ],
        analysis: 'hangover 指喝酒过量后第二天的头痛恶心。她说“镜头不管”，是知道自己没有休息的资格。',
        wrongFeedback: '你答错了，苏晚以为自己只是没睡好，直播时脸色发白，掉了一半观众，气血 -10。',
        afterCorrect: '她顶着黑眼圈开播，第一句话是：“昨晚庆祝了一下，今天状态不好，价格给你们补回来。”'
      }
    ],
    completeText: '那场直播结束时，单品卖了两千三百支。她关掉手机，坐在地上很久，才想起自己一天没吃饭。'
  },
  {
    id: 'fl_12',
    index: 12,
    title: '第 12 章 · 爆单二十四小时',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '爆单的第三天，真千金发来一条消息：“听说你最近很辛苦，需要帮忙吗？”后面跟着一个微笑表情。苏晚看了三秒，把手机扣在桌上。',
    questions: [
      {
        plotDescription: '真千金发来一条“好意”的问候，句句带刺。',
        line: "That message is toxic. She's not checking on me, she's checking me.",
        lineCn: '那条消息有毒。她不是来关心我，是来查我。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful and draining', cn: '有害的、消耗人的', correct: true, reason: '那句问候表面客气，实际在试探她，toxic 指这种伤人的东西。' },
          { key: 'B', en: 'very sweet', cn: '非常贴心', correct: false, reason: '苏晚一眼看穿用意，这绝不是贴心。' },
          { key: 'C', en: 'poorly written', cn: '写得不通顺', correct: false, reason: '句子没问题，有问题的是背后的动机。' }
        ],
        analysis: 'toxic 原意“有毒的”，形容人或关系时指消耗你、伤害你。她一眼看穿了那句问候的用意。',
        wrongFeedback: '你没听出话里的刺，苏晚回了句谢谢，第二天被截图断章取义，气血 -10。',
        afterCorrect: '她回了四个字：“不用，谢谢。”然后把对方的消息设成免打扰。她不想把力气花在这种地方。'
      },
      {
        plotDescription: '线下活动遇见真千金，两人被安排在同一张桌子。',
        line: "We sat together for twenty minutes. It was so awkward.",
        lineCn: '我们同桌坐了二十分钟。尴尬死了。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'very exciting', cn: '非常刺激', correct: false, reason: '两人一句话没说，气氛僵着，谈不上刺激。' },
          { key: 'B', en: 'completely silent', cn: '完全沉默', correct: false, reason: '沉默只是表现，awkward 说的是那种不自在的尴尬感。' },
          { key: 'C', en: 'embarrassing and uncomfortable', cn: '尴尬、不自在', correct: true, reason: '同桌二十分钟无话可说，awkward 正是这种难熬的尴尬。' }
        ],
        analysis: 'awkward 指让人不自在、尴尬的场面。两人一句话没说，空气都能拧出水。',
        wrongFeedback: '你答错了，苏晚硬找话题，越聊越僵，被拍成短视频，气血 -10。',
        afterCorrect: '最后是真千金先站起来走了。苏晚看着她的背影，忽然觉得这场戏，自己已经不想演了。'
      },
      {
        plotDescription: '评论区有人把她的翻车片段做成鬼畜，她看了三遍笑出声。',
        line: "I watched it three times. I'm dead.",
        lineCn: '我看了三遍。笑死我了。',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'no longer alive', cn: '已经没有生命', correct: false, reason: '她正笑着说话，这里显然不是字面意义。' },
          { key: 'B', en: 'laughing so hard', cn: '笑到不行', correct: true, reason: '连看三遍还笑出声，I am dead 是夸张的“笑死”。' },
          { key: 'C', en: 'very serious', cn: '非常严肃', correct: false, reason: '她笑出声了，和严肃正好相反。' }
        ],
        analysis: '口语里 I am dead 常表示“笑死我了”，是夸张的幽默说法，不是字面意义。',
        wrongFeedback: '你按字面理解了，苏晚被误会成身体不适，直播被迫改期，气血 -10。',
        afterCorrect: '她干脆转发那条视频，配文：“做得好，下次给我加个字幕。”评论区一下热闹起来。'
      },
      {
        plotDescription: '平台通知她上了首页推荐，员工冲进仓库大喊。',
        line: "We're on the front page. I'm thrilled, but let's check the numbers first.",
        lineCn: '我们上首页了。我爽飞了，但先看数据。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '非常兴奋、高兴', correct: true, reason: '上首页是大好消息，thrilled 就是兴奋到不行。' },
          { key: 'B', en: 'slightly worried', cn: '有点担心', correct: false, reason: '她说先看数据是习惯，不是因为担心。' },
          { key: 'C', en: 'totally bored', cn: '完全无聊', correct: false, reason: '上首页让人兴奋，不可能觉得无聊。' }
        ],
        analysis: 'thrilled 表示“非常兴奋、高兴”。她的反应是先高兴一秒，再回到数据，很符合她的性格。',
        wrongFeedback: '你误解了她的情绪，苏晚被当成不在意，团队士气一下低了，气血 -10。',
        afterCorrect: '数据出来，转化率比平时高四倍。她终于笑出声，把手机举起来给所有人看。'
      }
    ],
    completeText: '二十四小时，一万两千单。仓库的电话响到发烫，她第一次觉得，命运好像真的可以被自己拧过来。'
  },
  {
    id: 'fl_13',
    index: 13,
    title: '第 13 章 · 真千金的下午茶',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '真千金约她在市中心最贵的酒店喝下午茶，说要“姐妹叙旧”。苏晚穿着卫衣走进大堂，服务员的目光在她身上停了两秒。',
    questions: [
      {
        plotDescription: '一天之内来了三家电购、五个代理，还有两家媒体要采访。',
        line: "I'm overwhelmed. Give me ten minutes before I answer anyone.",
        lineCn: '我快被压垮了。给我十分钟，我再见人。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely relaxed', cn: '完全放松', correct: false, reason: '她要躲十分钟，显然是应付不过来了。' },
          { key: 'B', en: 'having too much to handle', cn: '压力过载、应付不过来', correct: true, reason: '一天涌来十件事，overwhelmed 就是被压得喘不过气。' },
          { key: 'C', en: 'very confident', cn: '非常自信', correct: false, reason: '她需要缓冲，说明此刻状态并不从容。' }
        ],
        analysis: 'overwhelmed 指被太多事情压得喘不过气。她要十分钟，是给自己留一个缓冲。',
        wrongFeedback: '你答错了，苏晚硬撑着同时接五件事，三份报价全报错，气血 -10。',
        afterCorrect: '十分钟后她从洗手间出来，头发重新扎好，接过第一份合同：“好，从你开始。”'
      },
      {
        plotDescription: '员工第一次上直播，紧张到发抖，她递过去一瓶水。',
        line: "Chill. It's just a livestream, not a surgery.",
        lineCn: '放松点。这只是直播，不是做手术。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'relax and calm down', cn: '放松、冷静', correct: true, reason: '员工紧张到发抖，她递水就是让对方别紧绷。' },
          { key: 'B', en: 'become cold', cn: '变冷', correct: false, reason: 'chill 字面有凉意，但这里是祈使句，意思是放松。' },
          { key: 'C', en: 'hurry up', cn: '快点', correct: false, reason: '她是在减速安抚，不是催人。' }
        ],
        analysis: 'chill 在这里是祈使句，意思是“别紧张、放轻松”。后半句用夸张对比来缓解气氛。',
        wrongFeedback: '你答错了，员工以为她在催，越说越快，开场就念错了价格，气血 -10。',
        afterCorrect: '员工深吸一口气，笑了出来。那场直播她讲得比苏晚还稳，弹幕一直问“这个妹妹是谁”。'
      },
      {
        plotDescription: '连着三天只睡四小时，她在电梯里差点睡着。',
        line: "I feel drained. Even my voice sounds borrowed.",
        lineCn: '我被掏空了。连我的声音听起来都像借来的。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'full of energy', cn: '精力充沛', correct: false, reason: '三天只睡四小时，方向正好相反。' },
          { key: 'B', en: 'very hungry', cn: '非常饿', correct: false, reason: '她说的是精力，不是肚子。' },
          { key: 'C', en: 'completely emptied of energy', cn: '被彻底掏空', correct: true, reason: '连声音都不像自己的，drained 就是精力被抽干。' }
        ],
        analysis: 'drained 原意“被排干”，形容人时指精力被彻底抽空，比 tired 更有画面感。',
        wrongFeedback: '你答错了，苏晚没让自己休息，第二天在会议上说错了数据，气血 -10。',
        afterCorrect: '她当天把所有会推掉，回家睡了十个小时。醒来第一件事是给团队发消息：以后谁也不许连熬三天。'
      },
      {
        plotDescription: '大促前夜，她一遍遍刷新后台数据。',
        line: "I get anxious when the numbers stop moving.",
        lineCn: '数字一不动，我就开始焦虑。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'very proud', cn: '非常自豪', correct: false, reason: '反复刷数据不是自豪，是心里没底。' },
          { key: 'B', en: 'nervous and uneasy', cn: '焦虑、心神不宁', correct: true, reason: '数字停住她就坐不住，anxious 就是这种发慌。' },
          { key: 'C', en: 'sleepy', cn: '困倦', correct: false, reason: '她是在意数据，不是想睡觉。' }
        ],
        analysis: 'anxious 指心里发慌、坐立不安。她反复刷数据，正是这种状态的典型表现。',
        wrongFeedback: '你答错了，苏晚没意识到自己在焦虑，一杯接一杯喝咖啡，心悸到凌晨，气血 -10。',
        afterCorrect: '陆时砚发来一条消息：“数据不会因为你盯着就变快。”她盯着这句话看了很久，把手机扣了过去。'
      }
    ],
    completeText: '那晚她第一次在十二点前躺下。天花板有一道裂缝，她看着看着就睡着了，梦里没有订单。'
  },
  {
    id: 'fl_14',
    index: 14,
    title: '第 14 章 · 仓库里的三十个纸箱',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '第一批线下货做出来，三十个纸箱堆在仓库中央。拆开第三个箱子时，她发现logo印反了，整整一批，全部报废。',
    questions: [
      {
        plotDescription: '供应商把她的设计图卖给了竞争对手，对方的新品几乎一模一样。',
        line: "When I saw the design on their page, I was furious.",
        lineCn: '在他们页面上看到那个设计时，我气炸了。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'a little surprised', cn: '有点惊讶', correct: false, reason: '设计被偷不是小意外，她的反应远不止惊讶。' },
          { key: 'B', en: 'deeply grateful', cn: '非常感激', correct: false, reason: '被抄袭还要感激，逻辑完全反了。' },
          { key: 'C', en: 'extremely angry', cn: '狂怒', correct: true, reason: '设计被卖，她当场压不住火，furious 就是暴怒。' }
        ],
        analysis: 'furious 是“狂怒”，程度比 angry 重得多。设计被偷，她压不住火。',
        wrongFeedback: '你没读出她的愤怒，苏晚忍着没发作，对方抢先上架，气血 -10。',
        afterCorrect: '她截下所有证据，直接打电话给律师：“这次不谈判，直接起诉。”'
      },
      {
        plotDescription: '那周退货率飙到三成，她一个人坐在仓库门口。',
        line: "I was depressed for two days. Then I opened the return reports.",
        lineCn: '我消沉了两天。然后我翻开了退货报告。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cheerful', cn: '非常开心', correct: false, reason: '退货率三成，她坐在门口发呆，不可能开心。' },
          { key: 'B', en: 'very low and sad', cn: '情绪低落、消沉', correct: true, reason: '她低落了两天，depressed 就是这种压抑的难过。' },
          { key: 'C', en: 'extremely busy', cn: '非常忙碌', correct: false, reason: '她坐着不动，说的是心情，不是工作量。' }
        ],
        analysis: 'depressed 指情绪低落、消沉。她没有停在那里，而是去翻报告找原因。',
        wrongFeedback: '你答错了，苏晚以为自己只是心情不好，拖了三天才处理，退货翻倍，气血 -10。',
        afterCorrect: '报告里写着同一句话：颜色和图片差太多。她当晚就重拍了全部主图，一盏灯拍到凌晨。'
      },
      {
        plotDescription: '团队说要给她办个小型庆功会，她本来不想去。',
        line: "Okay, I'm hyped. Let's celebrate for one hour, then back to work.",
        lineCn: '行，我也兴奋起来了。庆祝一小时，然后回去干活。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited', cn: '极度兴奋', correct: true, reason: '她被团队带动起来了，hyped 就是情绪被拉满。' },
          { key: 'B', en: 'very tired', cn: '非常疲惫', correct: false, reason: '她答应庆祝，说明状态是高涨的不是疲惫的。' },
          { key: 'C', en: 'very confused', cn: '非常困惑', correct: false, reason: '她知道要庆祝什么，没有困惑。' }
        ],
        analysis: 'hyped 是口语里“兴奋、期待值拉满”。她答应庆祝，但先把时间限定死。',
        wrongFeedback: '你答错了，苏晚以为大家在客套，庆功会冷场，团队心里不舒服，气血 -10。',
        afterCorrect: '一小时里她笑了很多次。散场时她把蛋糕盒收好：“明天八点，照常开会。”'
      },
      {
        plotDescription: '雨中搬货，纸箱全湿了，她站在雨里笑不出来。',
        line: "That was a miserable night. We lost forty boxes.",
        lineCn: '那是个惨透了的夜晚。我们损失了四十箱。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'a joyful night', cn: '愉快的夜晚', correct: false, reason: '货全湿了，没人会把这晚会说成愉快。' },
          { key: 'B', en: 'a quiet night', cn: '安静的夜晚', correct: false, reason: '他们在雨里抢货，谈不上安静。' },
          { key: 'C', en: 'a wretched, awful night', cn: '惨透了的一夜', correct: true, reason: '四十箱货泡汤，miserable 就是糟到极点。' }
        ],
        analysis: 'miserable 形容处境“惨到极点”。四十箱货泡汤，那一夜确实难熬。',
        wrongFeedback: '你答错了，苏晚没把损失当回事，第二天客户收到湿货，差评刷屏，气血 -10。',
        afterCorrect: '她们在雨里把没湿的箱子一箱箱抬上车。苏晚抹了把脸上的水：“记住今晚，以后仓库必须有雨棚。”'
      }
    ],
    completeText: '第十四章结束时，报废的三十个纸箱还堆在角落。她没扔，说留着提醒自己：省下的每一步，最后都要还。'
  },
  {
    id: 'fl_15',
    index: 15,
    title: '第 15 章 · 被人截胡的供应商',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '谈了两个月的包材厂突然说产能排满，实际上是接了对手的单。苏晚挂了电话，看着仓库里所剩不多的盒子，安静了很久。',
    questions: [
      {
        plotDescription: '品牌第一次登上平台榜单前十，员工在群里刷屏。',
        line: "Number nine on the list. I'm ecstatic.",
        lineCn: '榜单第九。我欣喜若狂。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy', cn: '欣喜若狂', correct: true, reason: '小品牌冲进前十，ecstatic 就是高兴到极点。' },
          { key: 'B', en: 'slightly annoyed', cn: '有点烦躁', correct: false, reason: '这是好消息，她的情绪是正向的。' },
          { key: 'C', en: 'totally indifferent', cn: '完全无所谓', correct: false, reason: '她第一时间在群里发红包，显然很在意。' }
        ],
        analysis: 'ecstatic 表示“欣喜若狂”，是极高兴的状态。榜第九对小品牌来说，是实打实的成绩。',
        wrongFeedback: '你答错了，苏晚没表现出高兴，团队以为名次不重要，士气散了，气血 -10。',
        afterCorrect: '她在群里发了个大红包，然后一个人走到仓库外面，站了很久才把眼泪憋回去。'
      },
      {
        plotDescription: '被人连续骂了三天，她刷到第几百条时已经没有感觉。',
        line: "After three days of hate comments, I just felt numb.",
        lineCn: '被骂了三天之后，我只觉得麻木。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '极度愤怒', correct: false, reason: '她说的恰恰是连愤怒都没有了。' },
          { key: 'B', en: 'very happy', cn: '非常开心', correct: false, reason: '被连续网暴三天，不可能开心。' },
          { key: 'C', en: 'unable to feel anything', cn: '麻木、没有感觉', correct: true, reason: '刷到几百条已经没有反应，numb 就是情绪钝掉了。' }
        ],
        analysis: 'numb 指情绪被磨到没有知觉，既不愤怒也不悲伤，是一种自我保护。',
        wrongFeedback: '你答错了，苏晚以为自己已经放下，其实是在硬扛，第四天情绪彻底崩了，气血 -10。',
        afterCorrect: '员工把她的手机拿走，塞给她一杯热汤。她喝了两口，忽然说：“我今天不想看评论了。”'
      },
      {
        plotDescription: '真千金的品牌拿到了大牌联名，她承认自己心里不舒服。',
        line: "I won't pretend. I'm jealous, and that's fine.",
        lineCn: '我不装。我嫉妒，这没什么。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'proud of herself', cn: '为自己骄傲', correct: false, reason: '她在说对方拿到联名，不是自己的成绩。' },
          { key: 'B', en: 'envious of what others have', cn: '嫉妒别人拥有的', correct: true, reason: '对手拿下大牌，她心里不舒服，这就是嫉妒。' },
          { key: 'C', en: 'completely uninterested', cn: '完全不感兴趣', correct: false, reason: '她说“我不装”，说明她其实很在意。' }
        ],
        analysis: 'jealous 指对别人的拥有感到嫉妒。她坦白承认，反而显得坦荡。',
        wrongFeedback: '你误解了她的坦率，苏晚把情绪压下去，转头对团队发了火，气血 -10。',
        afterCorrect: '她把那份联名方案打印出来，贴在墙上：“看清楚人家做到什么程度，然后追上。”'
      },
      {
        plotDescription: '员工替她背了发货错误的锅，她事后才知道。',
        line: "I felt guilty for letting her take the blame.",
        lineCn: '让她替我背锅，我很内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling responsible for doing wrong', cn: '内疚、觉得自己有错', correct: true, reason: '员工替她挨骂，她觉得自己没护住人。' },
          { key: 'B', en: 'feeling proud', cn: '感到骄傲', correct: false, reason: '让别人背锅，不可能拿来骄傲。' },
          { key: 'C', en: 'feeling bored', cn: '感到无聊', correct: false, reason: '这是道德上的不安，不是无聊。' }
        ],
        analysis: 'guilty 指因为做错事而内疚。她不是怕赔钱，是觉得自己没护住人。',
        wrongFeedback: '你答错了，苏晚把这件事翻过去，员工第二天递了辞呈，气血 -10。',
        afterCorrect: '她当着全组的面道歉，把责任揽回自己身上。那姑娘没走，后来成了客服主管。'
      }
    ],
    completeText: '第十五章结束，她在笔记本上写：嫉妒可以说，内疚必须做。写完合上本子，去谈新的包材厂。'
  },
  {
    id: 'fl_16',
    index: 16,
    title: '第 16 章 · 第一间线下小店',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '商场的铺位签下来那天，她站在空店铺中间，听见自己的回声。二十平米，租金押三付六，装修只剩十五天。',
    questions: [
      {
        plotDescription: '双十一前一周，仓库、客服、物流三头着火。',
        line: "I'm stressed, but I function better under pressure.",
        lineCn: '我压力很大，但我在压力下反而更能干。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely calm', cn: '完全平静', correct: false, reason: '三头着火，她不可能完全平静。' },
          { key: 'B', en: 'under great pressure', cn: '压力很大', correct: true, reason: '仓库客服物流一起出问题，stressed 就是承压状态。' },
          { key: 'C', en: 'very bored', cn: '非常无聊', correct: false, reason: '事情多到做不完，谈不上无聊。' }
        ],
        analysis: 'stressed 指承受很大压力。她说“压力下状态更好”，是给自己打气，也是事实。',
        wrongFeedback: '你答错了，苏晚没意识到自己已经绷紧，开会时突然失声，气血 -10。',
        afterCorrect: '她把三件事写在白板上，一件一件划掉。到晚上十点，最后一项也消失了。'
      },
      {
        plotDescription: '员工连续加班两个月，有人开始出错。',
        line: "This isn't laziness. This is burnout. Give them two days off.",
        lineCn: '这不是懒。这是倦怠。给他们放两天假。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'exhaustion from long-term work', cn: '长期工作造成的倦怠', correct: true, reason: '连续加班两个月后的出错，burnout 就是身心耗尽。' },
          { key: 'B', en: 'a sudden promotion', cn: '突然升职', correct: false, reason: '这里说的是状态下滑，不是职位变化。' },
          { key: 'C', en: 'a lack of skill', cn: '能力不足', correct: false, reason: '她明确说这不是懒，也不是能力问题。' }
        ],
        analysis: 'burnout 指长期高压工作导致的身心耗尽，不是态度问题，是需要休息的信号。',
        wrongFeedback: '你答错了，苏晚把出错当态度问题，扣了奖金，两个人当天辞职，气血 -10。',
        afterCorrect: '她当天排了轮休表，还在群里说：“谁再连上十四天，我亲自送他回家。”'
      },
      {
        plotDescription: '直播前五分钟，主推款链接打不开。',
        line: "Don't panic. Open the backup link.",
        lineCn: '别慌。开备用链接。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'celebrate', cn: '庆祝', correct: false, reason: '链接打不开是事故，不是庆祝的时候。' },
          { key: 'B', en: 'take a nap', cn: '打个盹', correct: false, reason: '开播在即，没人会去睡觉。' },
          { key: 'C', en: 'sudden overwhelming fear', cn: '突如其来的恐慌', correct: true, reason: '开播前五分钟出状况，全场最怕的就是慌。' }
        ],
        analysis: 'panic 指突然袭来的强烈恐慌。她一句“开备用链接”，把情绪直接转成动作。',
        wrongFeedback: '你答错了，团队当场慌作一团，直播延迟二十分钟，气血 -10。',
        afterCorrect: '备用链接三十秒内上线。开播时她笑着说：“刚才有点小状况，现在都好了。”'
      },
      {
        plotDescription: '链接在开播前一分钟恢复。',
        line: "I've never been so relieved to see a page load.",
        lineCn: '我从没因为一个页面加载成功这么松口气。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望', correct: false, reason: '页面恢复是好事，不会失望。' },
          { key: 'B', en: 'glad that worry is gone', cn: '松了口气', correct: true, reason: '悬着的心放下了，relieved 就是这种轻松。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '她知道发生了什么，也不困惑。' }
        ],
        analysis: 'relieved 指悬着的心放下来。页面加载那一下，她的紧张才真正卸掉。',
        wrongFeedback: '你答错了，苏晚以为危机没过去，整场直播都在走神，气血 -10。',
        afterCorrect: '她靠在墙上笑了两秒，然后站直身体，对着镜头说：“欢迎来到晚来的第一场线下店直播。”'
      }
    ],
    completeText: '第十六章结束，店铺的灯装好了，货架也到了。她在门口站了一会儿，把“营业中”的牌子翻了过来。'
  },
  {
    id: 'fl_17',
    index: 17,
    title: '第 17 章 · 开业当天的举报电话',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '开业第一天，门口排了二十多人。上午十点，市监的人走进来，说接到举报，要查产品资质。队伍一下子散了。',
    questions: [
      {
        plotDescription: '跟了半年的老客户被对手挖走，还带走了两个代理。',
        line: "I was heartbroken, then I looked at why she left.",
        lineCn: '我很伤心，然后我去查了她为什么走。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常愤怒', correct: false, reason: '她第一反应是难过，不是发火。' },
          { key: 'B', en: 'very proud', cn: '非常自豪', correct: false, reason: '客户流失，没有可自豪的地方。' },
          { key: 'C', en: 'deeply sad', cn: '心碎、非常难过', correct: true, reason: '跟了半年的客户走了，heartbroken 就是心里被击碎。' }
        ],
        analysis: 'heartbroken 指心里像被击碎一样的难过。她允许自己难过，但很快转去查原因。',
        wrongFeedback: '你答错了，苏晚只顾着难过，没去问原因，代理一个接一个走，气血 -10。',
        afterCorrect: '原因很简单：对方给三个月的账期。她咬牙也给了，然后开始重算自己的现金流。'
      },
      {
        plotDescription: '对手在朋友圈发了一张截图，配文“有些人就是不行”。',
        line: "He looked so smug in that photo. I saved it.",
        lineCn: '照片里他一脸得意。我保存了。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'very humble', cn: '非常谦虚', correct: false, reason: '配文在嘲讽她，不可能谦虚。' },
          { key: 'B', en: 'too pleased with himself', cn: '自鸣得意', correct: true, reason: '发截图嘲讽还配文，smug 就是那种得意的笑。' },
          { key: 'C', en: 'very worried', cn: '非常担心', correct: false, reason: '他是在炫耀，不是在担心。' }
        ],
        analysis: 'smug 指自鸣得意、藏不住的得意劲。她保存截图，是把这口气先记下来。',
        wrongFeedback: '你答错了，苏晚看完就划过去，对方越发嚣张，气血 -10。',
        afterCorrect: '三个月后，那张截图成了她发布会上的一张PPT，底下写着一行字：谢谢激励。'
      },
      {
        plotDescription: '有人在她的直播间刷对手的广告。',
        line: "I'm annoyed, but I'm not banning anyone tonight.",
        lineCn: '我烦透了，但今晚我不封人。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'a bit angry and irritated', cn: '有点恼火、烦', correct: true, reason: '有人跑来刷广告，annoyed 就是被烦到不痛快。' },
          { key: 'B', en: 'very grateful', cn: '非常感激', correct: false, reason: '被刷广告不会感激，方向反了。' },
          { key: 'C', en: 'deeply moved', cn: '深受感动', correct: false, reason: '这是干扰，不是感人场面。' }
        ],
        analysis: 'annoyed 指被烦到、心里不痛快。她选择不封人，是不想把直播间变成战场。',
        wrongFeedback: '你答错了，苏晚当场封了一片人，截图被做成“打压言论”，气血 -10。',
        afterCorrect: '她反而把那条广告念了出来，然后说：“他们的价格我做不到，但我的成分表敢公开。”'
      },
      {
        plotDescription: '仓库连续丢东西，她开始怀疑每一个人。',
        line: "It's not paranoia if the losses are real.",
        lineCn: '如果损失是真的，那就不是被害妄想。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'a clear plan', cn: '清晰的计划', correct: false, reason: '她是在怀疑人，不是在做事。' },
          { key: 'B', en: 'complete trust', cn: '完全的信任', correct: false, reason: '和“怀疑每个人”正好相反。' },
          { key: 'C', en: 'irrational suspicion', cn: '无端的猜疑、被害妄想', correct: true, reason: '她怀疑所有人，paranoia 就是这种没根据的猜忌。' }
        ],
        analysis: 'paranoia 指没有根据的猜疑。她补了一句“损失是真的”，是在给自己的怀疑找依据。',
        wrongFeedback: '你答错了，苏晚谁都不信，团队气氛僵住，两个老员工寒了心，气血 -10。',
        afterCorrect: '她装了监控，第三天就查出来是外包搬运。人清走了，她也向团队道了歉。'
      }
    ],
    completeText: '第十七章结束，店铺重新开门。她在门口贴了一张纸：所有成分、所有资质，随便查。'
  },
  {
    id: 'fl_18',
    index: 18,
    title: '第 18 章 · 城管来了',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '门口的货架摆到了过道上，城管来了两次。第二次，对方说再摆就按规定处理。苏晚站在门口，看着那排货架，没说话。',
    questions: [
      {
        plotDescription: '等平台的审核结果，她在屋里走来走去。',
        line: "I've been restless all day. The result comes at six.",
        lineCn: '我一整天都坐立不安。结果六点出。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to stay calm or still', cn: '坐立不安', correct: true, reason: '她在屋里来回走，restless 就是静不下来。' },
          { key: 'B', en: 'very sleepy', cn: '非常困', correct: false, reason: '她在走动，不是躺着犯困。' },
          { key: 'C', en: 'completely relaxed', cn: '完全放松', correct: false, reason: '等结果等得心慌，谈不上放松。' }
        ],
        analysis: 'restless 指心里不安、坐不住。她在屋里来回走，正是等结果时的典型状态。',
        wrongFeedback: '你答错了，苏晚没让自己停下来，越等越乱，把方案改错了三处，气血 -10。',
        afterCorrect: '六点，审核通过。她盯着那行字看了半分钟，然后给团队发了两个字：过了。'
      },
      {
        plotDescription: '有人提起苏家当年怎么把她赶出来。',
        line: "I'm not bitter about it anymore. I'm just done.",
        lineCn: '我已经不怨恨那件事了。我只是不想再提。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'very grateful', cn: '非常感激', correct: false, reason: '被赶出家门，不可能心怀感激。' },
          { key: 'B', en: 'very happy', cn: '非常开心', correct: false, reason: '她语气很平，但不是开心。' },
          { key: 'C', en: 'resentful and hurt', cn: '心怀怨恨、苦涩', correct: true, reason: '被赶出来这件事，bitter 指积压的怨和苦。' }
        ],
        analysis: 'bitter 指长期积压的怨恨和苦涩。她说“不 bitter 了”，但“done”说明伤还在。',
        wrongFeedback: '你答错了，苏晚以为自己已经释怀，被一句话戳中，当场失态，气血 -10。',
        afterCorrect: '她说完这句就去后仓理货，理了很久。出来时眼睛有点红，但语气很正常。'
      },
      {
        plotDescription: '她在镜头前第一次讲自己被抱错的事。',
        line: "Talking about it makes me feel vulnerable, but someone needs to say it.",
        lineCn: '讲这件事让我觉得脆弱，但总得有人说。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'very powerful', cn: '非常强大', correct: false, reason: '她明确说这让她不舒服，不是强大。' },
          { key: 'B', en: 'exposed and easily hurt', cn: '脆弱、容易被伤到', correct: true, reason: '把私事摊开讲，等于把自己暴露在攻击下。' },
          { key: 'C', en: 'totally indifferent', cn: '完全无所谓', correct: false, reason: '她强调“觉得脆弱”，说明很在意。' }
        ],
        analysis: 'vulnerable 指把自己暴露在可能受伤的位置。她明知会疼，还是选择讲出来。',
        wrongFeedback: '你答错了，苏晚把话咽回去，弹幕开始编造版本，气血 -10。',
        afterCorrect: '那条视频没有煽情，只有平静的陈述。评论区第一条是：“谢谢你没有卖惨。”'
      },
      {
        plotDescription: '银行拒绝了她的贷款，账上只剩两万。',
        line: "For one night, everything felt hopeless.",
        lineCn: '有那么一晚，我觉得一切都完了。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no hope at all', cn: '毫无希望', correct: true, reason: '贷款被拒、账上见底，hopeless 就是看不到出路。' },
          { key: 'B', en: 'full of possibilities', cn: '充满可能', correct: false, reason: '和“一切都完了”正好相反。' },
          { key: 'C', en: 'quite funny', cn: '挺好笑', correct: false, reason: '这是走投无路的时刻，不是笑话。' }
        ],
        analysis: 'hopeless 指看不到任何希望。她说“有那么一晚”，说明那只是其中一晚，不是结局。',
        wrongFeedback: '你答错了，苏晚把这种情绪当成了结论，第二天就解散了团队，气血 -10。',
        afterCorrect: '第二天早上，陆时砚的电话打进来。她接起时声音很哑，只说了三个字：“我需要钱。”'
      }
    ],
    completeText: '第十八章结束，货架搬回了店里。她站在门口数了数，二十平米，刚好放下她所有的野心。'
  },
  {
    id: 'fl_19',
    index: 19,
    title: '第 19 章 · 排队到街角',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '新店开业第二周，门口开始排队。有人从隔壁城市赶来，说刷了她的直播一整年。苏晚站在收银台后面，手一直没停。',
    questions: [
      {
        plotDescription: '员工自己掏钱补了快递差价，没跟她说。',
        line: "I'm grateful, but I'm paying you back tonight.",
        lineCn: '我很感激，但今晚我就把钱还你。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry', cn: '生气', correct: false, reason: '员工是替她垫钱，她不会为这个生气。' },
          { key: 'B', en: 'thankful', cn: '感激', correct: true, reason: '对方自己贴钱补差价，她心里是感谢的。' },
          { key: 'C', en: 'suspicious', cn: '怀疑', correct: false, reason: '她没有怀疑对方的动机。' }
        ],
        analysis: 'grateful 是“感激”。她接受这份好意，但不肯让员工替公司垫钱。',
        wrongFeedback: '你答错了，苏晚没提这件事，员工心里凉了半截，气血 -10。',
        afterCorrect: '当晚她转账过去，还多转了两百。员工退回来，她又转回去：“这是规矩，不是客气。”'
      },
      {
        plotDescription: '小店里坐满了人，她在后厨吃一碗面。',
        line: "For the first time in years, I feel content.",
        lineCn: '这些年第一次，我觉得满足。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'quietly satisfied', cn: '平静地满足', correct: true, reason: '店里坐满人、她吃着一碗面，content 就是这种安稳的满足。' },
          { key: 'B', en: 'extremely rich', cn: '极其富有', correct: false, reason: '她说的是感受，不是财富。' },
          { key: 'C', en: 'very anxious', cn: '非常焦虑', correct: false, reason: '此刻她是放松的，不是焦虑。' }
        ],
        analysis: 'content 指一种平静的满足感，不是狂喜，是“这样就很好”。',
        wrongFeedback: '你答错了，苏晚没让自己停一下，吃完面又扎进报表，气血 -10。',
        afterCorrect: '她把面吃完，汤也喝了。外面还有人在排队，她擦了擦嘴，站起来继续。'
      },
      {
        plotDescription: '有个女孩说用了她的产品，第一次敢素颜出门。',
        line: "That message made me feel fulfilled in a way money never did.",
        lineCn: '那条留言给我的满足感，是钱从来给不了的。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'empty', cn: '空虚', correct: false, reason: '她说这是钱给不了的满足，不是空虚。' },
          { key: 'B', en: 'embarrassed', cn: '尴尬', correct: false, reason: '这是被认可的时刻，没有尴尬。' },
          { key: 'C', en: 'deeply satisfied and meaningful', cn: '充实、有意义的满足', correct: true, reason: '产品真的帮到人，这种价值感就是 fulfilled。' }
        ],
        analysis: 'fulfilled 指因为做成了有意义的事而感到充实，和单纯的开心不同。',
        wrongFeedback: '你答错了，苏晚把这条留言划过去，继续看销量，越看越空，气血 -10。',
        afterCorrect: '她把那条留言截图打印出来，贴在自己办公桌最显眼的位置。'
      },
      {
        plotDescription: '真千金在商场当众失控，指着她大喊。',
        line: "She went hysterical in the middle of the mall.",
        lineCn: '她在商场正中歇斯底里。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'very calm', cn: '非常冷静', correct: false, reason: '当众大喊，和冷静完全相反。' },
          { key: 'B', en: 'out of control with emotion', cn: '情绪失控、歇斯底里', correct: true, reason: '指着人喊叫，hysterical 就是情绪彻底失控。' },
          { key: 'C', en: 'very polite', cn: '非常礼貌', correct: false, reason: '当众大喊谈不上礼貌。' }
        ],
        analysis: 'hysterical 指情绪完全失控、歇斯底里。周围人都在看，苏晚却站着没动。',
        wrongFeedback: '你答错了，苏晚被她的情绪带着走，两人当街吵起来，被拍上网，气血 -10。',
        afterCorrect: '苏晚只是等她喊完，然后说：“你要说的事，我们找律师谈。”'
      }
    ],
    completeText: '第十九章结束，那天的营业额破了纪录。她锁门时回头看了一眼，灯还亮着，像一间真正的小店了。'
  },
  {
    id: 'fl_20',
    index: 20,
    title: '第 20 章 · 她买下了整条货架',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '商场招商部打来电话，说对面那个铺位空出来了，问她要不要。那是真千金曾经开过店的位置，玻璃门上还留着一圈胶印。',
    questions: [
      {
        plotDescription: '看到对手抄袭她的包装，还抢先申请了外观专利。',
        line: "I felt pure rage. Then I called my lawyer.",
        lineCn: '我气到发抖。然后我打给了律师。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep sadness', cn: '深深的悲伤', correct: false, reason: '她是被抄袭激怒，不是难过。' },
          { key: 'B', en: 'great joy', cn: '巨大的喜悦', correct: false, reason: '包装被抄还抢注专利，不可能高兴。' },
          { key: 'C', en: 'violent anger', cn: '暴怒', correct: true, reason: '气到发抖，rage 就是压不住的狂怒。' }
        ],
        analysis: 'rage 是“暴怒”，比 anger 更强烈。她的处理方式是把怒气转成行动。',
        wrongFeedback: '你答错了，苏晚冲去对方店里理论，被反咬一口，气血 -10。',
        afterCorrect: '律师函三天后送到。对方下架了全部产品，赔偿金额她一分没让。'
      },
      {
        plotDescription: '老管家去世，她赶回苏家老宅。',
        line: "There was a quiet sorrow in that house.",
        lineCn: '那栋房子里有一种安静的悲伤。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'loud celebration', cn: '喧闹的庆祝', correct: false, reason: '这是灵堂，不可能有庆祝。' },
          { key: 'B', en: 'deep sadness', cn: '深沉的悲伤', correct: true, reason: '老管家去世，屋子里的安静正是 sorrow。' },
          { key: 'C', en: 'a heated argument', cn: '激烈的争吵', correct: false, reason: '她描述的是气氛沉重，不是争吵。' }
        ],
        analysis: 'sorrow 指深而沉的悲伤，常是安静的。老管家是唯一护过她的人。',
        wrongFeedback: '你答错了，苏晚没进去，转身走了，这件事成了她心里的一根刺，气血 -10。',
        afterCorrect: '她上了香，站了很久，只说了一句：“您交代的事，我做到了。”'
      },
      {
        plotDescription: '线下店排队排到街角，第一天的营业额破了纪录。',
        line: "The first day ended in euphoria. We sold out by seven.",
        lineCn: '第一天在狂喜里结束。我们七点就卖空了。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'intense happiness', cn: '极度愉悦', correct: true, reason: '七点卖空、队伍排到街角，euphoria 就是兴奋到发飘。' },
          { key: 'B', en: 'total exhaustion', cn: '彻底疲惫', correct: false, reason: '累是有的，但这里说的是那种狂喜的情绪。' },
          { key: 'C', en: 'deep regret', cn: '深深的后悔', correct: false, reason: '卖空是好事，没有后悔的理由。' }
        ],
        analysis: 'euphoria 指极度愉悦、兴奋到发飘的状态。卖空的结果让所有人都飘了。',
        wrongFeedback: '你答错了，苏晚压着不让大家庆祝，团队憋着一股劲没处使，气血 -10。',
        afterCorrect: '她请全店吃火锅，吃到一半趴在桌上睡着了。员工给她披了件外套，谁都没叫醒她。'
      },
      {
        plotDescription: '她被骂上热搜，转头发现路人根本不关心真相。',
        line: "What scared me wasn't hate. It was the apathy.",
        lineCn: '让我害怕的不是恨，是那种冷漠。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'strong support', cn: '强烈的支持', correct: false, reason: '她说的是一种让人发凉的态度，不是支持。' },
          { key: 'B', en: 'extreme anger', cn: '极端的愤怒', correct: false, reason: '她明确说让她怕的不是恨，所以不是愤怒。' },
          { key: 'C', en: 'lack of interest or feeling', cn: '冷漠、无动于衷', correct: true, reason: '路人懒得了解真相，apathy 就是这种不在乎。' }
        ],
        analysis: 'apathy 指漠不关心、无动于衷。相比骂声，没人愿意了解真相更让人心凉。',
        wrongFeedback: '你答错了，苏晚以为大家只是没看到，继续解释，越解释越没人理，气血 -10。',
        afterCorrect: '她关掉手机，对团队说：“不用解释了，把货做好。”'
      }
    ],
    completeText: '第二十章结束，她签下了对面那个铺位。装修队进场那天，她站在玻璃门前，把那圈旧胶印一点点刮干净。'
  },
  {
    id: 'fl_21',
    index: 21,
    title: '第 21 章 · 资本递来的橄榄枝',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '陆时砚的基金发来一份投资意向书，数字漂亮得不像真的。第一次见面，他把方案推过来，只说了一句：我不做慈善。',
    questions: [
      {
        plotDescription: '员工八卦她和陆时砚，说老板最近笑得有点多。',
        line: "I don't have a crush on him. I have a crush on his distribution network.",
        lineCn: '我没暗恋他。我暗恋的是他的渠道网络。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a romantic liking for someone', cn: '对某人的暗恋', correct: true, reason: '她嘴上否认喜欢人，说喜欢的其实是渠道，crush 就是心动。' },
          { key: 'B', en: 'a strong dislike', cn: '强烈的厌恶', correct: false, reason: '如果是厌恶，她不会拿“喜欢渠道”来打趣。' },
          { key: 'C', en: 'a detailed business plan', cn: '详细的商业计划', correct: false, reason: 'crush 和商业计划无关，这里是情感上的词。' }
        ],
        analysis: 'crush 在口语里指“暗恋、心动对象”。她拿这个词开玩笑，把话题从人转到了生意上。',
        wrongFeedback: '你没听懂她在打岔，苏晚被员工追问半天，脸都红了，气血 -10。',
        afterCorrect: '员工笑成一团。苏晚敲了敲桌子：“渠道谈下来，我请你们吃饭。”说完自己先低头看文件。'
      },
      {
        plotDescription: '陆时砚发来一条消息后消失三天，第四天忽然出现在仓库。',
        line: "He ghosted me for three days, then showed up with a term sheet.",
        lineCn: '他消失三天不回消息，然后带着一份条款书出现了。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'visited her office quietly', cn: '悄悄来她办公室', correct: false, reason: '那三天他根本没出现，是“消失”。' },
          { key: 'B', en: 'called her every hour', cn: '每小时给她打电话', correct: false, reason: '她等的是消息，不是电话轰炸。' },
          { key: 'C', en: 'disappeared without replying', cn: '不回消息、玩消失', correct: true, reason: '三天不回消息，ghost 就是突然断联、玩消失。' }
        ],
        analysis: 'ghost 原意“鬼”，在网络和恋爱语境里指“突然不理人、玩消失”。她等三天，确实被 ghost 了。',
        wrongFeedback: '你没抓住重点，苏晚以为他只是忙，主动道歉，气势先输了一半，气血 -10。',
        afterCorrect: '她把条款书翻到分成那一页，抬头问：“这三天你在查我？”陆时砚没否认。'
      },
      {
        plotDescription: '律师指着对赌协议里的一条：达不到目标，创始人可以被替换。',
        line: "A clause that lets them replace me is a red flag.",
        lineCn: '一条能让他们换掉我的条款，这是危险信号。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very good sign', cn: '非常好的迹象', correct: false, reason: '能把她换掉的条款，绝不是好兆头。' },
          { key: 'B', en: 'a warning sign of danger', cn: '危险信号', correct: true, reason: '这条款意味着她随时可能被踢出局，是警告。' },
          { key: 'C', en: 'a discount offer', cn: '折扣优惠', correct: false, reason: '合同里没有优惠，只有控制权问题。' }
        ],
        analysis: 'red flag 指值得警惕的危险信号。她一眼看出，这条款不是保护，而是留给资方的后门。',
        wrongFeedback: '你没看出问题，苏晚签了字，半年后差点被换掉，气血 -10。',
        afterCorrect: '她把这一条圈出来，推回去：“这条删掉，其他的我可以谈。”'
      },
      {
        plotDescription: '员工开玩笑说她和陆时砚是不是在一起了。',
        line: "We didn't hook up. We had a two-hour argument about pricing.",
        lineCn: '我们没在一起。我们吵了两个小时的价格。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'get together romantically', cn: '（两人）在一起、产生关系', correct: true, reason: '员工在问八卦，她用 hook up 否认两人有感情关系。' },
          { key: 'B', en: 'set up a meeting', cn: '安排一场会议', correct: false, reason: '约会是 meet，hook up 在这个语境里指情感关系。' },
          { key: 'C', en: 'sign a contract', cn: '签一份合同', correct: false, reason: '签合同是 sign，和这个八卦语境不搭。' }
        ],
        analysis: 'hook up 在口语里常指两人发生恋爱或亲密关系。她用“吵了两小时价格”来把气氛拉回工作。',
        wrongFeedback: '你答错了，苏晚的解释没人信，八卦传到了媒体耳朵里，气血 -10。',
        afterCorrect: '员工一脸“我懂”的表情走了。苏晚低头继续改方案，笔尖在纸上戳出一个洞。'
      }
    ],
    completeText: '第二十一章结束，融资还没定，传闻先飞了一圈。她把手机调成静音，只留下一句：先把货备够。'
  },
  {
    id: 'fl_22',
    index: 22,
    title: '第 22 章 · 对赌协议',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '对赌协议摆在桌上：一年做到三千万，做不到，品牌归他们。苏晚盯了很久，在最后一页签下名字，附加一条：不许换掉我的人。',
    questions: [
      {
        plotDescription: '苏母突然来店里哭诉，说家里现在很难，让她回去看看。',
        line: "I left that house to get away from the drama.",
        lineCn: '我离开那个家，就是为了躲开这些戏。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'a theater play', cn: '一出舞台剧', correct: false, reason: '她说的是家里的纠纷，不是在演戏。' },
          { key: 'B', en: 'messy emotional conflict', cn: '抓马、乱七八糟的情绪冲突', correct: true, reason: '苏母哭诉、家里拉扯，drama 就是这种戏码。' },
          { key: 'C', en: 'a business deal', cn: '一笔生意', correct: false, reason: '这里讲的是家庭情绪，不是交易。' }
        ],
        analysis: 'drama 在口语里指“抓马、戏太多”，形容充满情绪拉扯的场面，不是真的戏剧。',
        wrongFeedback: '你没听懂她的疲惫，苏晚又被拉回苏家演了一出，气血 -10。',
        afterCorrect: '她给苏母倒了杯水，坐在对面听完，然后说：“我可以给钱，但我不回去住。”'
      },
      {
        plotDescription: '苏母每天都来店里，坐在角落不走，等她下班。',
        line: "She's being clingy now that I'm useful.",
        lineCn: '我有用了，她就开始黏上来了。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'too attached and hard to shake off', cn: '太黏人、甩不掉', correct: true, reason: '天天来坐着不走，clingy 就是这种过度依附。' },
          { key: 'B', en: 'very generous', cn: '非常大方', correct: false, reason: '她是来耗时间的，不是来给钱的。' },
          { key: 'C', en: 'extremely polite', cn: '极其客气', correct: false, reason: '赖着不走谈不上客气。' }
        ],
        analysis: 'clingy 指过度黏人、让人有负担。苏晚用了“现在我有用了”，点破了这份亲近的动机。',
        wrongFeedback: '你答错了，苏晚没设界限，苏母开始插手店里的事，气血 -10。',
        afterCorrect: '她让店员把靠窗的位置留给客人，自己只在固定时间见苏母。距离一拉开，话反而好说了。'
      },
      {
        plotDescription: '苏母要进后仓“看看”，苏晚伸手拦住。',
        line: "I had to set boundaries, even if it made me the villain.",
        lineCn: '我必须划清界限，哪怕这让我成了坏人。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'prices', cn: '价格', correct: false, reason: '她拦的是人，不是报价。' },
          { key: 'B', en: 'legal documents', cn: '法律文件', correct: false, reason: '这里说的是人与人之间的分寸。' },
          { key: 'C', en: 'personal limits', cn: '个人界限', correct: true, reason: '不让对方进后仓，就是划出自己不能退的线。' }
        ],
        analysis: 'boundaries 指人际之间的界限。她说“哪怕成了坏人”，是知道设界限一定会被指责。',
        wrongFeedback: '你答错了，苏晚退了一步，苏母进了后仓翻货，气血 -10。',
        afterCorrect: '苏母骂她冷血。苏晚站着没动：“仓库里有别人的饭碗，我不能拿来做人情。”'
      },
      {
        plotDescription: '说好一起见面的投资人临时没来，只发了一条消息。',
        line: "He bailed on the meeting and sent a text instead.",
        lineCn: '他放了会议鸽子，只发了条短信。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'arrived early', cn: '提前到了', correct: false, reason: '他根本没出现，不是早到。' },
          { key: 'B', en: 'backed out at the last minute', cn: '临时放鸽子、退出', correct: true, reason: '说好见面人没来，bail 就是临时撂挑子。' },
          { key: 'C', en: 'paid in full', cn: '全额付款', correct: false, reason: '这里说的是失约，不是付钱。' }
        ],
        analysis: 'bail 在口语里指“临时放鸽子、抽身不干”。一条短信代替一场会，她的时间被白耗了。',
        wrongFeedback: '你答错了，苏晚在原地等了两小时，错过了另一场谈判，气血 -10。',
        afterCorrect: '她把那条短信截图存档，然后打给下一个投资人：“我只有二十分钟，你来不来？”'
      }
    ],
    completeText: '第二十二章结束，协议签了，界限也划了。她在日历上标出一年后的那天，旁边写了两个字：做到。'
  },
  {
    id: 'fl_23',
    index: 23,
    title: '第 23 章 · 被断掉的供应链',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '三家包材厂在同一天婉拒了她，理由一模一样：产能不足。苏晚把三封邮件并排放在桌上，笑了一声——这不是产能，这是有人打了招呼。',
    questions: [
      {
        plotDescription: '两个男投资人私下通气，都不接她的单。',
        line: "They call it bro code. I call it price fixing.",
        lineCn: '他们管这叫兄弟法则。我管这叫串通定价。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written law', cn: '成文法律', correct: false, reason: '这是私下的默契，不是法律条文。' },
          { key: 'B', en: 'a family rule', cn: '家规', correct: false, reason: '这里说的是圈子里男人之间的默契。' },
          { key: 'C', en: 'an unwritten loyalty rule among men', cn: '男人之间心照不宣的义气规则', correct: true, reason: '他们抱团不接她的单，bro code 就是这种潜规则。' }
        ],
        analysis: 'bro code 指男性之间不成文的“兄弟义气”规则。她用“串通定价”点破了这层包装。',
        wrongFeedback: '你没听出讽刺，苏晚按他们的规则去求人，处处碰壁，气血 -10。',
        afterCorrect: '她把三封邮件打包发给律师：“帮我看看，这算不算垄断协议。”'
      },
      {
        plotDescription: '陆时砚带姑姑来店里，介绍时只说“顺路”。',
        line: "Meeting the in-laws before the first date? That's a new one.",
        lineCn: '第一次约会还没有，就先见家长了？这倒是新鲜。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'business partners', cn: '生意伙伴', correct: false, reason: '他介绍的是姑姑，是家里人。' },
          { key: 'B', en: 'the relatives of your spouse', cn: '公婆、岳家亲戚', correct: true, reason: '姑姑属于对方家里的长辈，就是 in-laws 的范围。' },
          { key: 'C', en: 'old classmates', cn: '老同学', correct: false, reason: '介绍时说的是姑姑，不是同学。' }
        ],
        analysis: 'in-laws 指配偶一方的亲属。她用这句话打趣，等于承认两人关系已经不只是合作。',
        wrongFeedback: '你没听懂这层关系，苏晚把姑姑当客户接待，气氛僵了半天，气血 -10。',
        afterCorrect: '姑姑笑着把礼物放下：“我就是来看看，能让他亲自跑一趟的人长什么样。”'
      },
      {
        plotDescription: '苏母给她安排了一场相亲，对方是苏家生意伙伴的儿子。',
        line: "My mother set up a blind date and didn't tell me until I sat down.",
        lineCn: '我妈安排了一场相亲，直到我坐下才告诉我。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a meeting with a stranger to find a partner', cn: '和陌生人相亲', correct: true, reason: '她坐下才发现是相亲，blind date 就是事先没见过的约会。' },
          { key: 'B', en: 'a job interview', cn: '求职面试', correct: false, reason: '对面是生意伙伴的儿子，不是面试官。' },
          { key: 'C', en: 'a surprise party', cn: '惊喜派对', correct: false, reason: '这不是派对，是两个人被安排的见面。' }
        ],
        analysis: 'blind date 指由别人安排、双方事先不了解的相亲。她“坐下才知道”，正是 blind 的地方。',
        wrongFeedback: '你答错了，苏晚坐着陪笑了半小时，错过了一个供应商电话，气血 -10。',
        afterCorrect: '她结了账，站起来说：“抱歉，我对你没兴趣，对你爸的厂子有兴趣。”'
      },
      {
        plotDescription: '财务提醒她，有一笔货款三个月没结，账上已经吃紧。',
        line: "Cash flow was my blind spot. I never saw it coming.",
        lineCn: '现金流是我的盲区。我完全没预见到。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'a great strength', cn: '很大的优势', correct: false, reason: '她说的恰恰是自己没看见的弱点。' },
          { key: 'B', en: 'a legal problem', cn: '法律问题', correct: false, reason: '这里是财务疏忽，不是官司。' },
          { key: 'C', en: 'something you fail to notice', cn: '自己看不见的盲区', correct: true, reason: '货款拖了三个月她才发现，这就是盲区。' }
        ],
        analysis: 'blind spot 指自己意识不到的盲区。她把现金流当盲区，差点被拖垮。',
        wrongFeedback: '你答错了，苏晚没把现金流当回事，月底发不出工资，气血 -10。',
        afterCorrect: '她当晚就改了规矩：所有账期写进表，每周一早上过一遍。'
      }
    ],
    completeText: '第二十三章结束，供应链断了三根，她手里还剩一家小厂。她给对方打电话：“量不大，但我不欠钱。”'
  },
  {
    id: 'fl_24',
    index: 24,
    title: '第 24 章 · 热搜上的黑稿',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '凌晨一点，一篇长文冲上热搜，说她“靠男人上位”“产品是三无”。配图是她和陆时砚在停车场说话的照片，角度暧昧。',
    questions: [
      {
        plotDescription: '她曾经最信任的闺蜜把聊天记录卖给了营销号。',
        line: "She wasn't a friend. She was a toxic friend with a receipt.",
        lineCn: '她不是朋友。她是个拿着聊天记录的毒性朋友。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who harms you', cn: '会伤害你的朋友', correct: true, reason: '卖聊天记录害她被网暴，toxic friend 就是这种人。' },
          { key: 'B', en: 'a loyal partner', cn: '忠诚的伙伴', correct: false, reason: '对方的做法是背叛，不是忠诚。' },
          { key: 'C', en: 'a helpful mentor', cn: '热心的导师', correct: false, reason: '她是在害人，不是指导她。' }
        ],
        analysis: 'toxic friend 指表面是朋友、实际不断消耗和伤害你的人。苏晚用“带着收据”讽刺她留了证据。',
        wrongFeedback: '你没看清这段关系，苏晚又和她见了一面，被套走更多话，气血 -10。',
        afterCorrect: '她把所有聊天记录导出，交给律师：“她想红，我帮她红到底。”'
      },
      {
        plotDescription: '陆时砚在她被全网骂的那天约她吃饭。',
        line: "He asked me on a date the same day everyone else cancelled.",
        lineCn: '所有人都放我鸽子的那天，他约我吃饭。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a work deadline', cn: '工作截止时间', correct: false, reason: '他是约她吃饭，不是交材料。' },
          { key: 'B', en: 'a signed contract', cn: '签好的合同', correct: false, reason: '这里说的是一顿饭，不是合同。' },
          { key: 'C', en: 'a romantic outing', cn: '约会', correct: true, reason: '在所有人都躲着她时约饭，这就是 date。' }
        ],
        analysis: 'date 指带有恋爱意味的约会。她特意点出“所有人都取消的那天”，说明这顿饭的分量。',
        wrongFeedback: '你答错了，苏晚把这次见面当纯谈生意，气氛尴尬了一整晚，气血 -10。',
        afterCorrect: '那顿饭他们没聊舆论，只聊了各自最难的时候。走出餐厅时，她第一次觉得没那么冷。'
      },
      {
        plotDescription: '闺蜜的男友看到聊天记录后和她分了手。',
        line: "Her boyfriend broke up with her the next day.",
        lineCn: '她男朋友第二天就跟她分手了。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'got married', cn: '结婚了', correct: false, reason: '方向反了，这里是关系结束。' },
          { key: 'B', en: 'ended the relationship', cn: '分手', correct: true, reason: '第二天两人就散了，break up 就是结束关系。' },
          { key: 'C', en: 'moved in together', cn: '同居了', correct: false, reason: '这不是关系升级，而是破裂。' }
        ],
        analysis: 'break up 指恋人结束关系。她卖朋友换流量，最后连自己的感情也搭进去。',
        wrongFeedback: '你答错了，苏晚把这件事当八卦讲给媒体，反而被说成落井下石，气血 -10。',
        afterCorrect: '苏晚看到消息时没有笑。她只是把手机放下，说：“这条路，谁都别走。”'
      },
      {
        plotDescription: '闺蜜的经纪公司第二天就和她解约了。',
        line: "Her agency dumped her the same week the post went viral.",
        lineCn: '那篇文爆火的同一周，她的公司就把她甩了。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'abandoned or let go', cn: '抛弃、甩掉', correct: true, reason: '公司直接和她解约，dump 就是毫不留情地甩开。' },
          { key: 'B', en: 'promoted', cn: '提拔', correct: false, reason: '解约不是提拔，方向相反。' },
          { key: 'C', en: 'defended', cn: '出面维护', correct: false, reason: '公司选择了切割，不是保护她。' }
        ],
        analysis: 'dump 原意“倾倒”，口语里指“甩掉、抛弃”。公司用完她的流量，转身就把她扔了。',
        wrongFeedback: '你答错了，苏晚以为对方还有靠山，放松了警惕，第二轮黑稿又来了，气血 -10。',
        afterCorrect: '她关掉那条新闻，转头对团队说：“别学她，也别同情她。我们只做自己的事。”'
      }
    ],
    completeText: '第二十四章结束，热搜挂了三天。第四天，她把完整的聊天记录和合同一起发了出去，风向开始变。'
  },
  {
    id: 'fl_25',
    index: 25,
    title: '第 25 章 · 陆时砚的第一通电话',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '凌晨两点，陆时砚的电话打进来。他没安慰她，只问了一句：你想先解决舆论，还是先解决供应链？苏晚握着手机，忽然笑了。',
    questions: [
      {
        plotDescription: '有人造谣说她靠不正当关系拿到投资。',
        line: "I didn't cheat anyone. I read every page of that contract.",
        lineCn: '我没骗过任何人。那份合同我每一页都看过。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'kissed someone secretly', cn: '偷偷和别人亲吻', correct: false, reason: '她在否认靠关系拿钱，不是在说感情。' },
          { key: 'B', en: 'act dishonestly to gain something', cn: '用不正当手段骗取', correct: true, reason: '谣言说她靠关系上位，cheat 就是不正当获利。' },
          { key: 'C', en: 'work overtime', cn: '加班', correct: false, reason: '她把合同每一页都读了，恰恰说明没偷懒。' }
        ],
        analysis: 'cheat 指用不诚实的手段获取好处。她用“每一页都看过”回应，把话题拉回专业。',
        wrongFeedback: '你答错了，苏晚急着解释私生活，越描越黑，气血 -10。',
        afterCorrect: '那条回应只有两行字，却让评论区安静了半天。有人开始翻她的旧直播。'
      },
      {
        plotDescription: '陆时砚在电话里说“你声音挺好听的”，她愣了一下。',
        line: "Are you flirting with me, or is this a negotiation tactic?",
        lineCn: '你是在跟我调情，还是在用什么谈判套路？',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'behaving as if romantically interested', cn: '调情、示好', correct: true, reason: '他突然夸她声音，她反问他是不是在 flirting。' },
          { key: 'B', en: 'complaining about something', cn: '抱怨某事', correct: false, reason: '夸声音不是抱怨。' },
          { key: 'C', en: 'threatening someone', cn: '威胁别人', correct: false, reason: '这句话语气是打趣，不是威胁。' }
        ],
        analysis: 'flirt 指带有暧昧意味的调情。她一句反问，既没接招，也没把气氛弄僵。',
        wrongFeedback: '你答错了，苏晚认真回答了这个话题，电话两头都沉默了，气血 -10。',
        afterCorrect: '电话那头停了两秒，陆时砚说：“谈判。继续。”苏晚笑出声：“那你输了。”'
      },
      {
        plotDescription: '记者挖出陆时砚的前女友，正是竞争对手的股东。',
        line: "His ex owns shares in the company trying to bury me.",
        lineCn: '他的前女友，持有那家想埋掉我的公司的股份。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'his boss', cn: '他的老板', correct: false, reason: '记者挖的是感情关系，不是职务。' },
          { key: 'B', en: 'his sister', cn: '他的姐姐', correct: false, reason: '亲属不会用 ex 这个说法。' },
          { key: 'C', en: 'a former romantic partner', cn: '前任', correct: true, reason: 'ex 就是前男友或前女友，这里指他的前任。' }
        ],
        analysis: 'ex 是“前任”的简称。这条信息让整场围剿多了一层私人意味，也让苏晚不得不重新判断。',
        wrongFeedback: '你没意识到这条线的分量，苏晚毫无防备，被人从内部捅了一刀，气血 -10。',
        afterCorrect: '她没问陆时砚私事，只问了一句：“这件事你知道吗？”他沉默三秒，说：“现在知道了。”'
      },
      {
        plotDescription: '陆时砚的合伙人跟来饭局，一晚上没谈正事。',
        line: "He brought his partner along as a wingman and then talked business all night.",
        lineCn: '他带合伙人当僚机，结果一晚上都在谈生意。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a driver', cn: '司机', correct: false, reason: '这个人是来帮腔的，不是开车的。' },
          { key: 'B', en: 'someone who helps you in romance', cn: '帮忙撮合的僚机', correct: true, reason: '合伙人跟来是为了给陆时砚帮腔，wingman 就是这种角色。' },
          { key: 'C', en: 'a bodyguard', cn: '保镖', correct: false, reason: '饭局上不需要保镖，这里是撮合的角色。' }
        ],
        analysis: 'wingman 原指僚机，口语里指帮朋友在感情上打配合的人。结果他全程谈生意，反差很好笑。',
        wrongFeedback: '你答错了，苏晚没看懂这层安排，把合伙人当成谈判对手，气血 -10。',
        afterCorrect: '苏晚举杯对那位合伙人说：“下次别当僚机了，你谈生意比他实在。”'
      }
    ],
    completeText: '第二十五章结束，电话挂断前，陆时砚说：“明天九点，我带供应链的人来。”她愣了一下，只回了句：“别迟到。”'
  },
  {
    id: 'fl_26',
    index: 26,
    title: '第 26 章 · 凌晨三点的会议室',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '会议室的白板写满了又擦掉，擦掉又写。凌晨三点，两个人对着一份供应链重构方案，谁都没提回家。',
    questions: [
      {
        plotDescription: '凌晨的会议室里，两个人改方案改到天亮。',
        line: "The vibe in that room was weirdly calm for a crisis.",
        lineCn: '明明是危机，那间屋子里的气氛却出奇地平静。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'the temperature', cn: '温度', correct: false, reason: '她说的是一种感觉，不是空调温度。' },
          { key: 'B', en: 'the lighting', cn: '灯光', correct: false, reason: '灯只是一个细节，vibe 指整体氛围。' },
          { key: 'C', en: 'the overall atmosphere', cn: '整体氛围感', correct: true, reason: '两个人在危机里却安静，vibe 就是那种气场。' }
        ],
        analysis: 'vibe 指一个地方或场面给人的整体感觉。危机中反而平静，这种反差正是她想说的。',
        wrongFeedback: '你没听懂她在描述气氛，苏晚以为空调太冷，起身去调温度，气血 -10。',
        afterCorrect: '陆时砚头也没抬：“别调了，是人心静。”她愣了一下，坐下继续改。'
      },
      {
        plotDescription: '她发现陆时砚记得她提过的一款停产口红。',
        line: "I don't believe in soulmates, but he remembered the same discontinued shade.",
        lineCn: '我不信灵魂伴侣，但他记得同一支停产色号。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business rival', cn: '商业对手', correct: false, reason: '这里说的是默契，不是竞争关系。' },
          { key: 'B', en: 'a person perfectly matched to you', cn: '灵魂伴侣', correct: true, reason: '连停产色号都记得，她说的是那种高度契合的人。' },
          { key: 'C', en: 'a loyal employee', cn: '忠诚的员工', correct: false, reason: '陆时砚是投资人，不是她的员工。' }
        ],
        analysis: 'soulmate 指在精神上高度契合的人。她嘴上说不信，却用这个细节承认了心动。',
        wrongFeedback: '你答错了，苏晚把这句话咽回去，两个人错过了一次坦白，气血 -10。',
        afterCorrect: '她抬头看他，他正在写方案。她把那句“你怎么记得”也咽了回去。'
      },
      {
        plotDescription: '两个人一句话就能接上对方的思路。',
        line: "We finish each other's sentences. The chemistry is undeniable.",
        lineCn: '我们能把对方的话接完。这种化学反应没法否认。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'natural mutual connection', cn: '天然的默契与吸引', correct: true, reason: '互相接话、思路同步，chemistry 就是这种默契。' },
          { key: 'B', en: 'a science experiment', cn: '科学实验', correct: false, reason: '这里说的是人与人之间的感觉，不是实验。' },
          { key: 'C', en: 'a serious conflict', cn: '严重的冲突', correct: false, reason: '他们配合得很好，不是冲突。' }
        ],
        analysis: 'chemistry 原指化学，形容人时指彼此之间的默契和吸引力，既可以是合作，也可以是感情。',
        wrongFeedback: '你答错了，苏晚以为只是工作顺利，没往心里去，气血 -10。',
        afterCorrect: '方案改到第五版时，两个人同时说出同一句话，然后都笑了。'
      },
      {
        plotDescription: '她把公司最机密的成本表推给了陆时砚。',
        line: "I gave him the cost sheet. That's what trust looks like.",
        lineCn: '我把成本表给了他。信任就是这个样子。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'a signed contract', cn: '一份签好的合同', correct: false, reason: '合同是约束，她强调的是主动交出底牌。' },
          { key: 'B', en: 'a suspicion', cn: '一种怀疑', correct: false, reason: '给出机密恰恰是相反的动作。' },
          { key: 'C', en: 'belief that someone is reliable', cn: '信任、相信对方靠得住', correct: true, reason: '成本表是核心机密，敢给出去就是信任。' }
        ],
        analysis: 'trust 指相信对方可靠。她交出的不是一份文件，而是把命门放在对方手里。',
        wrongFeedback: '你答错了，苏晚把表收回去，谈判多耗了两周，气血 -10。',
        afterCorrect: '陆时砚看完，只问了一句：“这个毛利，你还能撑三个月？”她点头。'
      }
    ],
    completeText: '第二十六章结束，天亮时方案定了。她趴在桌上睡了半小时，醒来发现身上多了一件外套。'
  },
  {
    id: 'fl_27',
    index: 27,
    title: '第 27 章 · 一张旧账单',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '旧账单翻到最后一页，夹着一张十年前的收据，付款人是陆时砚的父亲。苏晚盯着那行字，忽然明白这场围剿从很早以前就开始了。',
    questions: [
      {
        plotDescription: '老员工拒绝了对手三倍工资的挖角。',
        line: "She stayed. Not because I pay well, but because she's loyal.",
        lineCn: '她留下来了。不是我给得多，是因为她忠诚。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'faithful and supportive', cn: '忠诚、站在你这边', correct: true, reason: '三倍工资都没挖走，loyal 就是对人而不是对钱。' },
          { key: 'B', en: 'very talented', cn: '非常有才华', correct: false, reason: '她说的是选择留下，不是能力高低。' },
          { key: 'C', en: 'easily bored', cn: '容易厌倦', correct: false, reason: '留下来的人恰恰不是待不住的人。' }
        ],
        analysis: 'loyal 指忠诚、可靠。苏晚特意说“不是因为我给得多”，是在承认这份情义的分量。',
        wrongFeedback: '你低估了这份选择，苏晚只谈钱没谈情，老员工心里凉了，气血 -10。',
        afterCorrect: '她当天给老员工加了薪，还写了一张手写卡片：“以后你的事，就是我的事。”'
      },
      {
        plotDescription: '她拒绝了资本提出的控股要求。',
        line: "I rejected their offer in the meeting, in front of everyone.",
        lineCn: '我在会上当着所有人的面，拒了他们的条件。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'accepted', cn: '接受了', correct: false, reason: '她明确说“拒了”，方向相反。' },
          { key: 'B', en: 'postponed', cn: '推迟了', correct: false, reason: '她不是拖延，是当场回绝。' },
          { key: 'C', en: 'turned down', cn: '拒绝', correct: true, reason: '当着所有人拒掉条件，reject 就是明确回绝。' }
        ],
        analysis: 'reject 指明确拒绝。她选择当众说，是不给对方私下再谈的空间。',
        wrongFeedback: '你答错了，苏晚含糊其辞，对方以为还有余地，第二天又加码施压，气血 -10。',
        afterCorrect: '会议室安静了十秒。对方代表合上文件：“苏总，你会后悔。”她笑了笑：“我等着。”'
      },
      {
        plotDescription: '陆时砚在停车场突然说，他早就看过她的第一场直播。',
        line: "He confessed that he'd watched my first livestream. All three hours.",
        lineCn: '他坦白说，他看过我的第一场直播。整整三个小时。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'admitted a crime', cn: '承认了罪行', correct: false, reason: '看直播不是犯罪，这里是坦白私事。' },
          { key: 'B', en: 'admitted something personal', cn: '坦白私人的事', correct: true, reason: '他把藏了很久的事说出来，confess 就是坦白。' },
          { key: 'C', en: 'lied', cn: '撒了谎', correct: false, reason: '他是在承认，不是在撒谎。' }
        ],
        analysis: 'confess 指坦白、承认。看完整整三个小时无人问津的直播，这句话本身就是表白。',
        wrongFeedback: '你答错了，苏晚没追问下去，两个人又绕回公事，气血 -10。',
        afterCorrect: '苏晚愣了很久，才说：“那场只有九个人看。”他说：“我知道，我是第七个。”'
      },
      {
        plotDescription: '他提出签五年的合作。',
        line: "Five years is a commitment. I don't sign those lightly.",
        lineCn: '五年是一份承诺。我不会随便签。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious promise or obligation', cn: '郑重的承诺与责任', correct: true, reason: '五年长约意味着长期绑定，commitment 就是这种责任。' },
          { key: 'B', en: 'a small favor', cn: '一个顺手的人情', correct: false, reason: '五年合作绝不是顺手的人情。' },
          { key: 'C', en: 'a temporary plan', cn: '临时计划', correct: false, reason: '五年是长期，不是临时。' }
        ],
        analysis: 'commitment 指需要长期承担的责任。她说“不轻易签”，是清楚这份重量。',
        wrongFeedback: '你答错了，苏晚没把长约当回事，后面被绑死，气血 -10。',
        afterCorrect: '她把合同翻到期限那一页，改成三年，又在旁边加了一条：随时可续。'
      }
    ],
    completeText: '第二十七章结束，收据被她锁进抽屉。她给陆时砚发了条消息：你父亲的事，我们当面谈。'
  },
  {
    id: 'fl_28',
    index: 28,
    title: '第 28 章 · 反手一击',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '她把手里的供应链证据整理成一份报告，发给了三家媒体。第二天，围剿她的那家公司股价开始下跌。',
    questions: [
      {
        plotDescription: '她第一次跟人讲自己被抱错那晚的细节。',
        line: "He didn't say anything. That silence was a kind of intimacy.",
        lineCn: '他什么都没说。那种沉默也是一种亲密。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business partnership', cn: '商业合作', correct: false, reason: '这里讲的是两个人的情感距离，不是合作。' },
          { key: 'B', en: 'emotional closeness', cn: '情感上的亲近', correct: true, reason: '他不安慰、不打断，只是听着，这是一种亲近。' },
          { key: 'C', en: 'a formal apology', cn: '正式的道歉', correct: false, reason: '他什么都没说，没有道歉。' }
        ],
        analysis: 'intimacy 指情感上的亲近和私密感。有时候不说话，反而比安慰更靠近。',
        wrongFeedback: '你答错了，苏晚觉得他冷漠，把话收回去了，气血 -10。',
        afterCorrect: '过了很久，他说：“那晚不是你的错。”她低下头，第一次没有反驳。'
      },
      {
        plotDescription: '他记得她不吃香菜，每次都提前跟店家说。',
        line: "He shows affection in small ways, like remembering I hate cilantro.",
        lineCn: '他用小事表达喜欢，比如记得我不吃香菜。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'a feeling of fondness', cn: '喜欢、爱慕', correct: true, reason: '记住她的忌口，affection 就是这种藏在细节里的喜欢。' },
          { key: 'B', en: 'a cold attitude', cn: '冷淡的态度', correct: false, reason: '记得忌口恰恰是上心的表现。' },
          { key: 'C', en: 'a business courtesy', cn: '商务上的客套', correct: false, reason: '点菜时提一句忌口，不是商务礼仪。' }
        ],
        analysis: 'affection 指喜爱、爱慕之情。它不一定轰轰烈烈，常常藏在这种不被说破的小事里。',
        wrongFeedback: '你答错了，苏晚没察觉这份心意，两人之间一直隔着一层，气血 -10。',
        afterCorrect: '她后来也记住了他不吃葱。第一次点菜时，他愣了一下，笑了。'
      },
      {
        plotDescription: '两人约好周四不看报表。',
        line: "Thursday is our date night. No numbers, no investors.",
        lineCn: '周四是我们的约会之夜。不谈数字，不谈投资人。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a work dinner', cn: '工作晚餐', correct: false, reason: '她明确说不谈数字和投资人，不是工作饭。' },
          { key: 'B', en: 'a product launch', cn: '产品发布', correct: false, reason: '这是两个人的固定约会，不是活动。' },
          { key: 'C', en: 'a regular romantic evening', cn: '固定的约会之夜', correct: true, reason: '每周四留给彼此，这就是 date night。' }
        ],
        analysis: 'date night 指伴侣之间固定留出的约会时间。她说“不谈数字”，是把这晚从生意里划出来。',
        wrongFeedback: '你答错了，苏晚把约会开成了复盘会，两个人都不高兴，气血 -10。',
        afterCorrect: '那天他们去吃了路边摊，聊到凌晨。回去的路上，她第一次主动牵了他的手。'
      },
      {
        plotDescription: '员工说他看她的眼神不对。',
        line: "He's completely smitten and everyone knows it but her.",
        lineCn: '他已经神魂颠倒了，除了她，所有人都看出来了。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常生气', correct: false, reason: '员工是在调侃他喜欢她，不是发火。' },
          { key: 'B', en: 'totally in love', cn: '神魂颠倒、深深着迷', correct: true, reason: '看她的眼神、所有人都看出来，smitten 就是陷进去了。' },
          { key: 'C', en: 'deeply bored', cn: '深感无聊', correct: false, reason: '和恋爱的状态完全相反。' }
        ],
        analysis: 'smitten 指被某人迷住、陷入爱里。员工用“除了她所有人都知道”制造了喜剧感。',
        wrongFeedback: '你答错了，苏晚没往那方面想，错过了他的暗示，气血 -10。',
        afterCorrect: '她听完愣了两秒，回头看了一眼。他正在低头看手机，耳朵有点红。'
      }
    ],
    completeText: '第二十八章结束，对手的股价连跌三天。她没开发布会，只在朋友圈发了一张仓库的照片：货还在。'
  },
  {
    id: 'fl_29',
    index: 29,
    title: '第 29 章 · 直播间里的对质',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '真千金突然出现在她的直播间，连麦要求对质。十万人涌进来，弹幕像下雨。苏晚把椅子往前挪了挪，说：你问。',
    questions: [
      {
        plotDescription: '她在直播里念了一条被网暴的女孩的私信。',
        line: "I know that kind of heartbreak. I've had it too.",
        lineCn: '我知道那种心碎。我也经历过。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'great success', cn: '巨大的成功', correct: false, reason: '被网暴是伤害，不是成就。' },
          { key: 'B', en: 'a business loss', cn: '生意上的损失', correct: false, reason: '她讲的是情感上的痛，不是钱。' },
          { key: 'C', en: 'deep emotional pain', cn: '心碎、极深的情感痛苦', correct: true, reason: '被网暴的女孩经历的是情感伤害，heartbreak 正是这种痛。' }
        ],
        analysis: 'heartbreak 指极深的情感痛苦。她说“我也经历过”，是把伤口摊开，换对方的信任。',
        wrongFeedback: '你答错了，苏晚没接住这条私信，女孩删号了，气血 -10。',
        afterCorrect: '那条私信的女孩后来出现在她的线下店，说了一句：“谢谢你替我说了那句话。”'
      },
      {
        plotDescription: '陆时砚要去海外三个月，她说没关系。',
        line: "Long-distance is hard, but so is everything worth doing.",
        lineCn: '异地恋很难，但值得做的事都难。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a long meeting', cn: '很长的会议', correct: false, reason: '他要去海外三个月，说的是两个人的关系。' },
          { key: 'B', en: 'a relationship across distance', cn: '异地恋', correct: true, reason: '一个在国内一个在国外，long-distance 就是异地关系。' },
          { key: 'C', en: 'a delayed shipment', cn: '延迟的发货', correct: false, reason: '这里不是物流问题，是感情问题。' }
        ],
        analysis: 'long-distance 常指异地恋。她用“值得做的事都难”回答，既认清现实，也没退缩。',
        wrongFeedback: '你答错了，苏晚嘴上说没事，心里其实没底，三个月里误会不断，气血 -10。',
        afterCorrect: '他走的那天，她没去送机，只在仓库门口拍了张照发过去：“货给你留着。”'
      },
      {
        plotDescription: '营销号编她同时和三个投资人交往。',
        line: "They accused me of polyamory. I barely have time for one dinner.",
        lineCn: '他们说我同时和好几个人交往。我连吃一顿饭的时间都没有。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having several romantic partners', cn: '同时有多段恋爱关系', correct: true, reason: '营销号编她脚踩三条船，polyamory 就是多角关系。' },
          { key: 'B', en: 'working several jobs', cn: '同时打几份工', correct: false, reason: '谣言讲的是感情，不是工作。' },
          { key: 'C', en: 'owning several brands', cn: '拥有多个品牌', correct: false, reason: '品牌和这个指控没有关系。' }
        ],
        analysis: 'polyamory 指同时与多人保持恋爱关系。她用“连一顿饭都没时间”反讽，弹幕一下笑了。',
        wrongFeedback: '你答错了，苏晚急着自证，越说越像心虚，气血 -10。',
        afterCorrect: '她说完这句，连麦那头的真千金沉默了几秒。弹幕开始刷：这反击有点狠。'
      },
      {
        plotDescription: '苏父苏母当年的事被翻出来，原来早就离了。',
        line: "The divorce was final ten years ago. They just kept playing house.",
        lineCn: '离婚十年前就判了。他们只是一直在演一家人。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a new marriage', cn: '一段新婚', correct: false, reason: '这里说的是婚姻结束，不是开始。' },
          { key: 'B', en: 'a business merger', cn: '企业合并', correct: false, reason: '虽然涉及家族生意，但这里说的是婚姻。' },
          { key: 'C', en: 'the legal end of a marriage', cn: '法律上的离婚', correct: true, reason: '十年前就判了，divorce 就是婚姻关系的正式解除。' }
        ],
        analysis: 'divorce 指法律上解除婚姻关系。她说“一直在演一家人”，比离婚本身更刺人。',
        wrongFeedback: '你答错了，苏晚被这个消息打乱节奏，对质落了下风，气血 -10。',
        afterCorrect: '直播间静了几秒。她看着镜头说：“所以别再拿家这个字压我。”'
      }
    ],
    completeText: '第二十九章结束，直播间的观看人数破了纪录。真千金下线前只说了一句：你赢了。'
  },
  {
    id: 'fl_30',
    index: 30,
    title: '第 30 章 · 资本退场',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '围剿她的公司召开紧急董事会。三天后，对方宣布退出这个赛道。新闻发布会的最后一句是：我们低估了一个人的耐心。',
    questions: [
      {
        plotDescription: '对手老板的婚外情被曝光，公司股价大跌。',
        line: "His affair cost the company more than my entire ad budget.",
        lineCn: '他那段婚外情让公司付出的代价，比我全年广告预算还高。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship', cn: '婚外情、私密恋情', correct: true, reason: '股价因此大跌，affair 在这里指见不得光的感情关系。' },
          { key: 'B', en: 'a business trip', cn: '一次出差', correct: false, reason: '出差不会引发股价暴跌这种丑闻。' },
          { key: 'C', en: 'a lawsuit', cn: '一场诉讼', correct: false, reason: '诉讼是 lawsuit，这里说的是私生活丑闻。' }
        ],
        analysis: 'affair 指秘密的恋爱关系，常带婚外意味。她拿广告预算作比，语气里全是冷幽默。',
        wrongFeedback: '你答错了，苏晚没抓住这条线的价值，反击晚了一周，气血 -10。',
        afterCorrect: '她没转发那条新闻，只在内部会上说：“别人的私事不是我们的武器，别学。”'
      },
      {
        plotDescription: '陆时砚说他不擅长浪漫。',
        line: "I'm bad at romance, so I bought you a warehouse.",
        lineCn: '我不擅长浪漫，所以我给你买了个仓库。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a sad story', cn: '一个悲伤的故事', correct: false, reason: '送仓库是好事，不是悲伤故事。' },
          { key: 'B', en: 'a marketing plan', cn: '一份营销方案', correct: false, reason: '这里说的是感情表达，不是营销。' },
          { key: 'C', en: 'romantic gestures', cn: '浪漫的举动', correct: true, reason: '他说自己不会浪漫，却用买仓库来表达，romance 就是这种心意。' }
        ],
        analysis: 'romance 指浪漫的情调或举动。他承认不会浪漫，却用最务实的方式表达了心意。',
        wrongFeedback: '你答错了，苏晚只看见仓库，没看见心意，气血 -10。',
        afterCorrect: '苏晚看着钥匙笑了半天：“这是我收过最贵的浪漫。”他说：“也是我最便宜的一次。”'
      },
      {
        plotDescription: '老员工跟着她三年，没休过一个完整的假。',
        line: "Three years of devotion, and I never once gave her a proper bonus.",
        lineCn: '三年的付出，我一次都没给过她像样的奖金。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'laziness', cn: '懒惰', correct: false, reason: '三年没休假是付出，不是偷懒。' },
          { key: 'B', en: 'loyal commitment', cn: '忠诚的付出与投入', correct: true, reason: '三年不离不弃，devotion 就是这种长期投入。' },
          { key: 'C', en: 'a complaint', cn: '一句抱怨', correct: false, reason: '她是在说对方的付出，不是在抱怨。' }
        ],
        analysis: 'devotion 指长期的忠诚与投入。她说这句话时是愧疚的，因为这份付出没得到对等回报。',
        wrongFeedback: '你答错了，苏晚没把这份付出当回事，老员工终于提了离职，气血 -10。',
        afterCorrect: '她当晚补了三年奖金，还给了期权。老员工看着数字，半天说不出话。'
      },
      {
        plotDescription: '有人问她为什么不趁高价把品牌卖掉。',
        line: "I still have passion for this. That's why I'm not selling.",
        lineCn: '我对这件事还有热情。这就是我不卖的原因。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'strong enthusiasm', cn: '强烈的热情', correct: true, reason: '她说自己还愿意做下去，passion 就是这股劲。' },
          { key: 'B', en: 'a lot of money', cn: '很多钱', correct: false, reason: '别人跟她谈钱，她回答的是热情。' },
          { key: 'C', en: 'a fear of failure', cn: '对失败的恐惧', correct: false, reason: '不卖是因为还想做，不是因为怕。' }
        ],
        analysis: 'passion 指强烈的热爱和热情。她用这句话回答了所有“为什么不再赚一笔”的问题。',
        wrongFeedback: '你答错了，苏晚被说成矫情，团队也开始动摇，气血 -10。',
        afterCorrect: '提问的人愣了一下，收起名片。她转身回仓库，还有一批货等着发。'
      }
    ],
    completeText: '第三十章结束，围剿落幕。她把对手留下的空白货架租了下来，挂上自己的招牌，写了四个字：晚来一步。'
  },
  {
    id: 'fl_31',
    index: 31,
    title: '第 31 章 · 行业峰会的邀请函',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '峰会邀请函是打印在厚纸上的，烫金的名字排在第六位。后台走廊很长，灯光打在墙上，苏晚攥着那张纸，在尽头看见了当年签字把她赶出家门的人。',
    questions: [
      {
        plotDescription: '苏晚把邀请函折成两半塞进口袋，眼睛盯着走廊尽头那个背影。',
        line: "I'm going to confront him at the panel. In front of everyone.",
        lineCn: '我要在论坛上当面对质他，当着所有人的面。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'argue about nothing', cn: '无谓地争辩', correct: false, reason: '她要的不是吵架，是把事情当面摊开。' },
          { key: 'B', en: 'face someone directly to settle it', cn: '当面对质、正面摊开', correct: true, reason: 'confront 就是带着问题直接面对当事人，不留退路。' },
          { key: 'C', en: 'comfort someone', cn: '安慰某人', correct: false, reason: '这个词和安慰无关，她是要追问一个答案。' }
        ],
        analysis: 'confront 指带着明确问题正面面对对方。她加上 in front of everyone，是要让私下的事变成公开的事，让对方无处回避。',
        wrongFeedback: '你答错了，苏晚把词理解成安慰，一开口就软了，对方笑着离场，气血 -10。',
        afterCorrect: '她走上论坛，把那份旧文件放在桌上，一句话没说先按住了麦克风。台下闪光灯连成一片，有人开始往后退。'
      },
      {
        plotDescription: '峰会开始前，合作方发来消息，说愿意继续合作，只要她公开道歉。',
        line: "We cut ties with them this morning. No more favors, no more excuses.",
        lineCn: '我们今天上午就跟他们断了。不再给方便，也不再听借口。',
        prompt: "根据上下文，选出画线短语 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'end the relationship completely', cn: '彻底断绝关系', correct: true, reason: 'cut ties 就是一刀两断，从此不再往来。' },
          { key: 'B', en: 'tie a knot', cn: '打一个结', correct: false, reason: '这是把 ties 当成绳子的字面误读。' },
          { key: 'C', en: 'delay the meeting', cn: '推迟会议', correct: false, reason: '句中没有任何推迟的意思，说的是合作终止。' }
        ],
        analysis: 'cut ties 是切断关系的固定说法，比停止合作更决绝。她用 this morning 强调这不是威胁，而是已经执行完的决定。',
        wrongFeedback: '你答错了，团队以为只是暂缓合作，第二天对方照旧上门谈条件，气血 -10。',
        afterCorrect: '消息发出去十分钟，对方的电话就打过来了。她没接，把手机反扣在桌上，继续看论坛议程。'
      },
      {
        plotDescription: '上台前十分钟，助理抱着电脑冲进来，说演示文稿的顺序全乱了。',
        line: "I messed up the slides. Give me five minutes and it'll be fine.",
        lineCn: '我把幻灯片弄乱了。给我五分钟，就能修好。',
        prompt: "根据上下文，选出画线短语 'Messed up' 最准确的意思。",
        options: [
          { key: 'A', en: 'dirtied with mud', cn: '用泥弄脏了', correct: false, reason: '这里说的是文件顺序，不是弄脏。' },
          { key: 'B', en: 'printed out', cn: '打印出来了', correct: false, reason: '句中没有任何打印的意思。' },
          { key: 'C', en: 'spoiled or put into disorder', cn: '搞砸了、弄乱了', correct: true, reason: 'mess up 就是把事情弄糟，她要时间补救。' }
        ],
        analysis: 'mess up 比 screw up 稍轻，常指还能补救的小失误。她说五分钟就好，说明事情乱但不致命，也说明她不想让助理背锅。',
        wrongFeedback: '你答错了，没人明白她需要时间，主持人已经上台开场，气血 -10。',
        afterCorrect: '她坐下来，手指飞快地拖动文件。最后一页标题落定的时候，刚好听见主持人念出她的名字。'
      },
      {
        plotDescription: '上台后大屏忽然黑了两秒，全场骚动。她握着话筒，笑着替技术团队解围。',
        line: "Relax. You didn't screw up. The hotel's power did.",
        lineCn: '别紧张。不是你们搞砸的，是酒店的电出了问题。',
        prompt: "根据上下文，选出画线短语 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'fasten with screws', cn: '用螺丝固定', correct: false, reason: '这是把 screw 当名词的死板翻译。' },
          { key: 'B', en: 'make a serious mistake', cn: '搞砸、犯下明显错误', correct: true, reason: 'screw up 指把事情做坏，她是在替团队开脱。' },
          { key: 'C', en: 'become angry', cn: '生气', correct: false, reason: 'screw up 不是情绪词，这里说的是失误。' }
        ],
        analysis: 'screw up 语气比 mess up 重，但她用否定句把责任推开。一句话既稳住了团队，也把尴尬变成了一个可以笑过去的点。',
        wrongFeedback: '你答错了，技术团队以为自己要被问责，脸色全白，气血 -10。',
        afterCorrect: '台下笑了一声。她顺势讲了品牌第一次直播断电的事，气氛反而热了起来。'
      }
    ],
    completeText: '第三十一章结束。论坛散场，她的名字第一次和“敢说”放在一起。有人递来下一场峰会的邀请函，她收下，也收下了对手发来的律师函。'
  },
  {
    id: 'fl_32',
    index: 32,
    title: '第 32 章 · 台上的三分钟',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '圆桌环节，主持人把话题引向小品牌为什么活不下去。台下坐着六个资本方，三台摄像机一直对着苏晚的脸，她面前的矿泉水一口没动。',
    questions: [
      {
        plotDescription: '主持人笑着追问，说网上有传言，问她敢不敢把细节讲出来。',
        line: "You want me to spill the tea? Fine. Here's how they squeeze small brands.",
        lineCn: '你想让我爆料？行。那我就说说他们怎么把小品牌挤死。',
        prompt: "根据上下文，选出画线短语 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'pour out a drink', cn: '倒一杯茶', correct: false, reason: '字面是倒茶，这里是网络口语的引申。' },
          { key: 'B', en: 'stay quiet', cn: '保持沉默', correct: false, reason: '她正好相反，准备把内幕说出来。' },
          { key: 'C', en: 'reveal gossip or inside info', cn: '爆料、说出内幕', correct: true, reason: 'spill the tea 就是把这个瓜说出来。' }
        ],
        analysis: 'spill the tea 是网络口语，指把内幕或八卦讲出来。她回一句 Fine，等于把对方递来的挑衅接成了自己的主场。',
        wrongFeedback: '你答错了，苏晚没听懂这个说法，愣了两秒，主持人顺势把问题收走了，气血 -10。',
        afterCorrect: '她把三个平台的抽成比例一条条念出来，台下的笔同时停了。有人低头看手机，有人开始录音。'
      },
      {
        plotDescription: '一位投资人当场反驳，说她的数据是编的。她看着他，声音很稳。',
        line: "I swear to god, I didn't take a cent from that family.",
        lineCn: '我对天发誓，我没拿过那个家一分钱。',
        prompt: "根据上下文，选出画线短语 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'curse God', cn: '咒骂上天', correct: false, reason: '这里不是诅咒，是用发誓来证明自己说真话。' },
          { key: 'B', en: 'solemnly promise to tell the truth', cn: '对天发誓、郑重保证', correct: true, reason: 'swear to god 是口语里最重的保证方式。' },
          { key: 'C', en: 'pray quietly', cn: '默默祈祷', correct: false, reason: '她是在回应指控，不是在祈祷。' }
        ],
        analysis: 'swear to god 是极强的口头保证，语气近乎发急。她用这句话挡住了“你被苏家收买”的暗示，把话堵回去。',
        wrongFeedback: '你答错了，她的保证被听成心虚，台下有人笑出声，气血 -10。',
        afterCorrect: '会场静了三秒。她把银行流水投到大屏上，收款方那一栏是空的。'
      },
      {
        plotDescription: '对方还想继续，她抬手打断，语气淡得像在聊别人的事。',
        line: "Whatever. Believe what you want, the numbers are public.",
        lineCn: '随便吧。你爱信不信，数据是公开的。',
        prompt: "根据上下文，选出 'Whatever' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'I do not care anymore', cn: '随便吧、我不在乎了', correct: true, reason: '她说爱信不信，whatever 是不再纠缠的态度。' },
          { key: 'B', en: 'anything at all', cn: '任何东西', correct: false, reason: '这是 whatever 的语法用法，这里是态度词。' },
          { key: 'C', en: 'no matter when', cn: '无论何时', correct: false, reason: '句中没有任何时间含义。' }
        ],
        analysis: '句首单用的 Whatever 是口语里的“随便、不奉陪了”。她不是认输，是不愿再花时间说服一个本来就不打算被说服的人。',
        wrongFeedback: '你答错了，苏晚把这句话当成认真讨论，又解释了十分钟，白白让出节奏，气血 -10。',
        afterCorrect: '她把话筒推回桌子中间，喝了口水。镜头还在拍她，她已经不看了。'
      },
      {
        plotDescription: '主持人临时加了一个环节，让她和当年那位真千金同台。',
        line: "Seriously? You want me to share a stage with her after all that?",
        lineCn: '你认真的吗？闹成这样之后，你还想让我跟她同台？',
        prompt: "根据上下文，选出 'Seriously?' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'in a serious manner', cn: '严肃地', correct: false, reason: '这里是反问，不是在描述说话方式。' },
          { key: 'B', en: 'are you joking with me', cn: '你在逗我吗', correct: false, reason: '语气接近，但她质疑的是这个安排是否合理。' },
          { key: 'C', en: 'are you for real', cn: '你认真的吗、这也太离谱了', correct: true, reason: 'Seriously? 单用是强烈质疑，等于“你确定？”' }
        ],
        analysis: 'Seriously? 作独立感叹表示难以置信和不满。她不是问对方严不严肃，而是在质疑主办方凭什么做这个安排。',
        wrongFeedback: '你答错了，苏晚没听出这层质疑，点头答应了同台，气血 -10。',
        afterCorrect: '主持人尴尬地笑了笑，说这是观众投票的结果。她把台本合上：“那我上台，只说我想说的。”'
      }
    ],
    completeText: '第三十二章结束。三分钟发言被剪成短视频，一夜之间冲上热榜。评论区翻出十年前那桩旧事，第一次有人站在她这边。'
  },
  {
    id: 'fl_33',
    index: 33,
    title: '第 33 章 · 旧账重提',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '视频爆了，旧事被翻出来。有媒体找到当年那个司机，说在她离开苏家的那晚，是他开车送她去的医院，后座上全是血。',
    questions: [
      {
        plotDescription: '助理把采访提纲送错了版本，急得满头汗，站在门口不敢进来。',
        line: "My bad. I wrote down the wrong hour, not you.",
        lineCn: '我的锅。是我记错了时间，不是你。',
        prompt: "根据上下文，选出 'My bad' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'it is my fault', cn: '我的错、怪我', correct: true, reason: 'my bad 是口语里最直接的认错方式。' },
          { key: 'B', en: 'I am a bad person', cn: '我是个坏人', correct: false, reason: '这不是在评价人品，是在认一个具体错误。' },
          { key: 'C', en: 'that was terrible', cn: '那太糟了', correct: false, reason: '句中说的是记错时间，不是说事情糟糕。' }
        ],
        analysis: 'My bad 是美式口语里最轻快的认错方式，等于“我的锅”。她主动把责任拦下来，是为了让助理不必自责。',
        wrongFeedback: '你答错了，助理以为要被骂，把提纲抱回去重抄了一遍，气血 -10。',
        afterCorrect: '助理愣了一下，抬头看她，眼圈有点红。她递过去一杯水：“下次错了我也会这么说。”'
      },
      {
        plotDescription: '记者把话头转向苏家，问她是不是自己先做错了什么。',
        line: "Don't blame me for a system I fought against my whole life.",
        lineCn: '别把责任推给我。那套规矩，我反抗了一辈子。',
        prompt: "根据上下文，选出 'Blame' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'praise', cn: '称赞', correct: false, reason: 'blame 和称赞正好相反。' },
          { key: 'B', en: 'forgive', cn: '原谅', correct: false, reason: '她是在拒绝被指责，不是在原谅谁。' },
          { key: 'C', en: 'hold responsible', cn: '归咎、把责任推给', correct: true, reason: 'blame sb for sth 就是把某事怪到某人头上。' }
        ],
        analysis: 'blame 指把责任归到某人身上。她把被赶出去这件事的因果重新摆了一遍：错的不是她，是那套从来不讲道理的规矩。',
        wrongFeedback: '你答错了，苏晚被问得答不上话，第二天通稿全在说她默认了，气血 -10。',
        afterCorrect: '记者停了笔。这段回答后来被引用无数次，是她所有采访里最短也最硬的一句。'
      },
      {
        plotDescription: '经纪人劝她别上那档直播，说旧事重提只会再伤一次。',
        line: "I argued with the organizer for twenty minutes, and I won.",
        lineCn: '我跟主办方争了二十分钟，我赢了。',
        prompt: "根据上下文，选出 'Argued' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'agreed quietly', cn: '安静地同意了', correct: false, reason: '她说自己赢了，显然不是同意。' },
          { key: 'B', en: 'quarreled to persuade', cn: '争论、据理力争', correct: true, reason: 'argue 在这里是带着目的去争，最后说服了对方。' },
          { key: 'C', en: 'apologized', cn: '道歉', correct: false, reason: '没有道歉的意思，她把条件谈下来了。' }
        ],
        analysis: 'argue 不只是吵架，也可以是据理力争。她说我赢了，强调的是结果：条件被她一条一条争了回来，不是发脾气。',
        wrongFeedback: '你答错了，团队以为她只是发了顿火，没有跟进条件，气血 -10。',
        afterCorrect: '她把争来的三条写进合同：不剪接、不打标签、现场提问不预设。经纪人在旁边看着，第一次没劝。'
      },
      {
        plotDescription: '直播当天旧事被提起，弹幕里有人骂她。她隔着屏幕说话，声音不大。',
        line: "He yelled my name from the stage, and the whole room went quiet.",
        lineCn: '他在台上大喊我的名字，整个会场都安静了。',
        prompt: "根据上下文，选出 'Yelled' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'shouted loudly', cn: '大声喊叫', correct: true, reason: 'yell 就是提高音量喊出来。' },
          { key: 'B', en: 'whispered', cn: '低声说', correct: false, reason: '和 whisper 正相反，这里强调声音大。' },
          { key: 'C', en: 'laughed', cn: '大笑', correct: false, reason: '喊名字和笑不是一回事。' }
        ],
        analysis: 'yell 是大声喊，常带情绪。这里不是为了责骂，而是为了让整个会场都听见她的名字，把她从角落里拽出来。',
        wrongFeedback: '你答错了，苏晚把喊理解成笑着叫，语气一软，气场全散了，气血 -10。',
        afterCorrect: '她顿了一下，补了句：“他喊完那句话，我第一次觉得，被赶出去不是我的问题。”'
      }
    ],
    completeText: '第三十三章结束。那场直播有四百万人看。她讲完最后一句，屏幕上的礼物刷成一片，她却先伸手关掉了打赏。'
  },
  {
    id: 'fl_34',
    index: 34,
    title: '第 34 章 · 那年被换掉的手环',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '直播之后，医院一位退休的老护士联系了她，说当年新生儿手环的登记本还在库房。苏家连夜发声明，说那只是同名弄错的一场误会。',
    questions: [
      {
        plotDescription: '记者会上，苏家太太面对档案一直摇头，手却没有碰那几页纸。',
        line: "She denied everything, even with the records in front of her.",
        lineCn: '她什么都否认，哪怕档案就摆在面前。',
        prompt: "根据上下文，选出 'Denied' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'refused to eat', cn: '拒绝进食', correct: false, reason: 'deny 和吃无关，这里是拒绝承认。' },
          { key: 'B', en: 'refused to admit the truth', cn: '否认、拒绝承认', correct: true, reason: 'deny 就是面对事实仍然说没有这回事。' },
          { key: 'C', en: 'explained in detail', cn: '详细解释', correct: false, reason: '她不是解释，是全盘不认。' }
        ],
        analysis: 'deny 指明确否认某件事。档案就在手边，她仍然否认，这个“仍然”才是这句话真正的重量。',
        wrongFeedback: '你答错了，苏晚以为对方会解释，把时间让了出去，气血 -10。',
        afterCorrect: '她把档案复印件推到镜头前，一页一页翻。翻到最后一页时，手停了两秒。'
      },
      {
        plotDescription: '三天后，苏家老爷子一个人来了，没有带律师，也没有带秘书。',
        line: "He apologized in a letter, three pages, no excuses.",
        lineCn: '他写了一封信道歉，三页，一句辩解都没有。',
        prompt: "根据上下文，选出 'Apologized' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'said sorry sincerely', cn: '道歉、表达歉意', correct: true, reason: 'apologize 就是为做错的事说对不起。' },
          { key: 'B', en: 'argued back', cn: '反驳', correct: false, reason: '信里没有辩解，正好相反。' },
          { key: 'C', en: 'asked for money', cn: '开口要钱', correct: false, reason: '道歉和要钱不是一回事。' }
        ],
        analysis: 'apologize 是为过错表达歉意。她特意补上 no excuses，说明这声道歉她等了很久，也听得出里面有没有水分。',
        wrongFeedback: '你答错了，苏晚把这封信当成谈判材料，回了一封冷冰冰的函，气血 -10。',
        afterCorrect: '她把信读了四遍，最后折好放进抽屉。没有回信，也没有扔。'
      },
      {
        plotDescription: '助理问她，会不会就这样算了，毕竟对方已经低头。',
        line: "I can forgive them. I just won't go back.",
        lineCn: '我可以原谅他们。我只是不会再回去了。',
        prompt: "根据上下文，选出 'Forgive' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'forget completely', cn: '彻底忘记', correct: false, reason: '原谅不等于忘记，她记得很清楚。' },
          { key: 'B', en: 'return home', cn: '回家', correct: false, reason: '她说的是不回去，不是回去。' },
          { key: 'C', en: 'stop being angry and let it go', cn: '原谅、放下怨恨', correct: true, reason: 'forgive 是主动放下追究，不等于恢复关系。' }
        ],
        analysis: 'forgive 是放下怨恨，但不代表关系复原。她把这两件事分得很清楚：可以原谅，但不会回头再住进那栋房子。',
        wrongFeedback: '你答错了，助理以为她要和解，把消息放了出去，气血 -10。',
        afterCorrect: '助理点头，没再问。窗外在下雨，她忽然想起被赶出去那晚也是这场雨。'
      },
      {
        plotDescription: '有媒体问她，是不是这几年的每一步都在等这一天。',
        line: "I don't hold a grudge. I just hold receipts.",
        lineCn: '我不记仇。我只是把凭证都留着。',
        prompt: "根据上下文，选出 'Grudge' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a pile of paper', cn: '一叠纸', correct: false, reason: '纸是 receipt，grudge 是情绪。' },
          { key: 'B', en: 'long-lasting resentment', cn: '长期的怨恨、记仇', correct: true, reason: 'hold a grudge 就是心里一直记着仇。' },
          { key: 'C', en: 'a legal case', cn: '一桩官司', correct: false, reason: '她没有说打官司，说的是留证据。' }
        ],
        analysis: 'hold a grudge 是记仇的固定搭配。她用 receipts 和它押了个近音，把情绪上的指控轻轻拨开，只留下事实。',
        wrongFeedback: '你答错了，苏晚被写成一个只懂报复的人，舆论开始往回倒，气血 -10。',
        afterCorrect: '这句话当天上了热搜。有人做了表情包，配文是“我不记仇，我记流水”。'
      }
    ],
    completeText: '第三十四章结束。档案公开，舆论彻底掉头。苏家老宅门口围满记者，而她只是把下一批货的发货单签完了。'
  },
  {
    id: 'fl_35',
    index: 35,
    title: '第 35 章 · 真千金的第一道裂缝',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '舆论压过来，那位真千金的旧合作方忽然反水。他在采访里说，当年那份亲子鉴定，她其实提前就知道结果，还笑着说终于轮到自己了。',
    questions: [
      {
        plotDescription: '合作方在镜头前说，他跟了她五年，最后被推出去顶了所有事。',
        line: "Her own partner betrayed her for a headline.",
        lineCn: '她自己的合伙人为了一个头条，背叛了她。',
        prompt: "根据上下文，选出 'Betrayed' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'helped quietly', cn: '默默帮助', correct: false, reason: '背叛和帮助正好相反。' },
          { key: 'B', en: 'paid a fine', cn: '交了一笔罚款', correct: false, reason: '句中说的是为了头条出卖她，不是交罚款。' },
          { key: 'C', en: 'was disloyal and sold someone out', cn: '背叛、出卖', correct: true, reason: 'betray 指出卖信任自己的人。' }
        ],
        analysis: 'betray 是背弃信任、把对方交出去。这里用 for a headline 点明动机：不是为了仇恨，而是为了流量。',
        wrongFeedback: '你答错了，苏晚没抓住这层反噬，错过了最好的反击时机，气血 -10。',
        afterCorrect: '她转发了那条采访，只写了两个字：“谢谢。”底下评论瞬间炸开。'
      },
      {
        plotDescription: '网友翻出旧视频，那位真千金曾在镜头前哭着说自己从没想过抢谁的人生。',
        line: "She called me a liar for years. Look at her resume now.",
        lineCn: '她骂了我好几年骗子。现在看看她的履历吧。',
        prompt: "根据上下文，选出 'Liar' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a person who tells stories', cn: '会讲故事的人', correct: false, reason: '这不是夸奖，是极重的指控。' },
          { key: 'B', en: 'a person who tells lies', cn: '说谎的人、骗子', correct: true, reason: 'liar 就是惯于撒谎的人。' },
          { key: 'C', en: 'a lawyer', cn: '律师', correct: false, reason: '形近但不相关，她不是在说职业。' }
        ],
        analysis: 'liar 是很重的词，指习惯性说谎的人。她把它原样抛回去：你骂了我这么多年，现在轮到事实说话了。',
        wrongFeedback: '你答错了，苏晚把这句话当成玩笑，气氛一下子轻了，气血 -10。',
        afterCorrect: '那条旧视频的播放量破了千万。评论区最上面一条只有四个字：“履历对不上。”'
      },
      {
        plotDescription: '有人贴出她这些年做公益的账目，捐款日期全挤在同一天。',
        line: "The whole kind-hearted heiress thing was fake.",
        lineCn: '那套“善良千金”的人设，全是假的。',
        prompt: "根据上下文，选出 'Fake' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'not genuine and staged', cn: '假的、做给人看的', correct: true, reason: 'fake 指不真实、专门演给别人看。' },
          { key: 'B', en: 'very expensive', cn: '非常昂贵', correct: false, reason: '这里说的是真假，不是价格。' },
          { key: 'C', en: 'newly built', cn: '新建的', correct: false, reason: '句中没有任何建造的意思。' }
        ],
        analysis: 'fake 指虚假、伪装。她用一个 thing 收尾，是把整套人设当成一件包装来看，语气冷得没有一点温度。',
        wrongFeedback: '你答错了，苏晚说得太含糊，网友以为她在攻击长相，气血 -10。',
        afterCorrect: '账目被做成一张时间轴，转发量比她的新品发布还高。'
      },
      {
        plotDescription: '对方团队发声明，说苏晚才是那个靠同情心赚钱的人。',
        line: "She's a hypocrite, and the card statements prove it.",
        lineCn: '她是个伪君子，信用卡账单就是证据。',
        prompt: "根据上下文，选出 'Hypocrite' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a very honest person', cn: '非常诚实的人', correct: false, reason: '和原意正相反，这是贬义。' },
          { key: 'B', en: 'a shy person', cn: '害羞的人', correct: false, reason: 'hypocrite 和害羞毫无关系。' },
          { key: 'C', en: 'someone who pretends to be good', cn: '伪君子、假装高尚的人', correct: true, reason: 'hypocrite 指说一套做一套的人。' }
        ],
        analysis: 'hypocrite 指嘴上讲道德、行为却相反的人。她配上账单，是要把“说的话”和“花的钱”摆在一起比一比。',
        wrongFeedback: '你答错了，这个词没用出去，对方反倒先开了发布会，气血 -10。',
        afterCorrect: '账单最后一页是一笔五位数的宠物美容费，付款备注写着“公益义卖”。'
      }
    ],
    completeText: '第三十五章结束。裂缝一旦出现就补不上。她的代言一个一个撤掉，而晚来的仓库门口，第一次出现了排队等货的车。'
  },
  {
    id: 'fl_36',
    index: 36,
    title: '第 36 章 · 全网都在等她道歉',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '对方把矛头转向她的团队，说她挖人、说她造假。公司楼下每天都有举牌的人，员工开始不敢看手机，会议室的门整天关着。',
    questions: [
      {
        plotDescription: '一位刚离职的主管上了节目，说苏晚答应过给她股份，转头就反悔。',
        line: "She backstabbed me on live TV, after I signed her severance.",
        lineCn: '我在直播里被她背刺了，就在我签完她的补偿之后。',
        prompt: "根据上下文，选出 'Backstabbed' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'attacked someone who trusted you', cn: '背刺、从背后捅刀', correct: true, reason: 'backstab 指被自己人暗中伤害。' },
          { key: 'B', en: 'praised publicly', cn: '公开表扬', correct: false, reason: '和原意正相反，这是攻击。' },
          { key: 'C', en: 'hugged from behind', cn: '从背后抱住', correct: false, reason: '字面联想，实际是比喻背叛。' }
        ],
        analysis: 'backstab 是比喻，指被信任的人从背后伤害。她强调签完补偿之后，是把时间点变成了最锋利的一把刀。',
        wrongFeedback: '你答错了，苏晚没有立刻回应，这段话被剪成短片反复播放，气血 -10。',
        afterCorrect: '她当天放出了离职协议和转账记录，配文只有一句：“补偿已付，谢谢关心。”'
      },
      {
        plotDescription: '对方在一次连麦里说，苏晚当年是自己要走的，没人赶她。',
        line: "She tried to gaslight me about the night I left that house.",
        lineCn: '她想让我怀疑，被赶出去的那晚其实是我自己要走的。',
        prompt: "根据上下文，选出 'Gaslight' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'turn on a lamp', cn: '点亮一盏灯', correct: false, reason: '这是字面误解，gaslight 早已是心理操控的意思。' },
          { key: 'B', en: 'send her home', cn: '送她回家', correct: false, reason: '句中说的是篡改记忆，不是送人。' },
          { key: 'C', en: 'make someone doubt their own memory', cn: '心理操控、让人怀疑自己的记忆', correct: true, reason: 'gaslight 指扭曲事实让对方自我怀疑。' }
        ],
        analysis: 'gaslight 源自戏剧，指通过否认和扭曲让对方怀疑自己的记忆。她用这个词，把多年的自我怀疑一次说清了。',
        wrongFeedback: '你答错了，苏晚被带偏，开始解释细节，越解释越像心虚，气血 -10。',
        afterCorrect: '她翻出那晚的打车记录，时间、起点、终点全在。她说：“我不需要你相信，我只需要它存在。”'
      },
      {
        plotDescription: '有员工说，对方的粉丝群在组织统一话术，专门攻击她公司的人。',
        line: "She manipulated her fans into attacking my staff.",
        lineCn: '她操控粉丝，让他们去攻击我的员工。',
        prompt: "根据上下文，选出 'Manipulated' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'treated them fairly', cn: '公平对待他们', correct: false, reason: 'manipulate 带有暗中控制的意思，不是公平。' },
          { key: 'B', en: 'controlled them secretly for her own goal', cn: '暗中操控、利用', correct: true, reason: 'manipulate 指用手段让别人照自己的意思行动。' },
          { key: 'C', en: 'thanked them publicly', cn: '公开感谢他们', correct: false, reason: '句中说的是煽动攻击，不是感谢。' }
        ],
        analysis: 'manipulate 强调隐蔽的控制，不是直接下命令。她说我的员工而不说我，是把被攻击的对象从自己挪到了团队。',
        wrongFeedback: '你答错了，团队以为她在指责粉丝，公关方向全跑偏了，气血 -10。',
        afterCorrect: '她把群聊截图交给律师，同时给每个员工发了三个月的心理补贴。'
      },
      {
        plotDescription: '记者问她，骂声这么大，为什么一直不还嘴。',
        line: "They think I'm a push over. I'm just waiting for the right day.",
        lineCn: '他们以为我是老好人。我只是在等一个合适的日子。',
        prompt: "根据上下文，选出 'Push over' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'someone who is easy to take advantage of', cn: '好欺负的老好人', correct: true, reason: 'push over 指一推就倒、不会反抗的人。' },
          { key: 'B', en: 'a strong leader', cn: '强势的领导者', correct: false, reason: '和原意正相反。' },
          { key: 'C', en: 'a physical push', cn: '一次推搡', correct: false, reason: '这里是形容人，不是动作。' }
        ],
        analysis: 'push over 指容易被欺负、不会反抗的人。她用只是在等，把这个带贬意的标签反手变成了一个伏笔。',
        wrongFeedback: '你答错了，记者把这句写成她默认软弱，标题全是她认了，气血 -10。',
        afterCorrect: '三天后，她召开记者会，桌上摆着七份律师函，一份一份念出名字。'
      }
    ],
    completeText: '第三十六章结束。记者会开了四十分钟，没有一句情绪化的词。散场时等在门口的记者，比来时多了一倍。'
  },
  {
    id: 'fl_37',
    index: 37,
    title: '第 37 章 · 她终于跌下神坛',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '律师函发出后，对方阵营开始松动。第一个公开道歉的，是当年替那位真千金写公关稿的文案，他把她写成了一个被冤枉的好人。',
    questions: [
      {
        plotDescription: '记者问她，为什么要替一个已经离职的员工出头。',
        line: "I stood up for my team when no one else would.",
        lineCn: '没人愿意替我的团队说话的时候，我站出来了。',
        prompt: "根据上下文，选出 'Stood up for' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'stood up from a chair', cn: '从椅子上站起来', correct: false, reason: '这是字面动作，这里说的是替人出头。' },
          { key: 'B', en: 'defended and supported', cn: '挺身维护、支持', correct: true, reason: 'stand up for 指为某人或某事站出来。' },
          { key: 'C', en: 'waited for them', cn: '等着他们', correct: false, reason: '句中强调主动站出来，不是等待。' }
        ],
        analysis: 'stand up for 是为被欺负的人出头。她说没人愿意，等于把当时所有人沉默的分量都接了过来，扛在自己肩上。',
        wrongFeedback: '你答错了，记者把这话写成她只是站起来发言，气血 -10。',
        afterCorrect: '那位员工在评论区回了一句：“我离职那天，她送我到电梯口。”'
      },
      {
        plotDescription: '对方开始私下接触她的供应商，想从原料上卡住她。',
        line: "It's time to fight back with lawyers, not tears.",
        lineCn: '是时候反击了，用律师，不用眼泪。',
        prompt: "根据上下文，选出 'Fight back' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'resist and counterattack', cn: '反击、还手', correct: true, reason: 'fight back 指受到攻击后还击。' },
          { key: 'B', en: 'give up completely', cn: '彻底放弃', correct: false, reason: '和原意正相反。' },
          { key: 'C', en: 'start a physical fight', cn: '动手打一架', correct: false, reason: '她明说要靠律师，不是靠拳头。' }
        ],
        analysis: 'fight back 是在被攻击后还手。她补上 with lawyers，说明反击的方式已经换了，不再靠情绪和眼泪。',
        wrongFeedback: '你答错了，团队以为要打价格战，提前抛了库存，气血 -10。',
        afterCorrect: '她约了四家供应商的负责人，一家一家谈，把合同期从一年改成了三年。'
      },
      {
        plotDescription: '供应商大会上，有人当众质疑她的资金链，陆时砚第一次开口。',
        line: "He defended the deal for two hours without a break.",
        lineCn: '他为那笔交易辩护了两个小时，中间没停过。',
        prompt: "根据上下文，选出 'Defended' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'attacked the deal', cn: '抨击这笔交易', correct: false, reason: 'defend 是辩护、维护，不是攻击。' },
          { key: 'B', en: 'canceled it quietly', cn: '悄悄取消', correct: false, reason: '他讲了两小时，显然是坚持，不是取消。' },
          { key: 'C', en: 'spoke in support of it', cn: '为它辩护、支持它', correct: true, reason: 'defend 指为某人或某事说话、挡下质疑。' }
        ],
        analysis: 'defend 是为某人某事辩护。两小时没停过这个细节，比任何一句表白都更能说明他站在哪一边。',
        wrongFeedback: '你答错了，苏晚没听出这份分量，当场改了口径，气血 -10。',
        afterCorrect: '她坐在台下，第一次没有抢话筒。散会后她走过去，说了句：“谢谢，但下次我自己来。”'
      },
      {
        plotDescription: '记者追问，网上骂声那么大，她怎么还能照常开会。',
        line: "I ignore the comments now. My lawyer reads them for me.",
        lineCn: '我现在不看评论了。我的律师替我读。',
        prompt: "根据上下文，选出 'Ignore' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'read carefully', cn: '仔细阅读', correct: false, reason: '和原意正相反。' },
          { key: 'B', en: 'pay no attention to', cn: '无视、不去理会', correct: true, reason: 'ignore 指故意不去看、不去理。' },
          { key: 'C', en: 'reply to everyone', cn: '回复所有人', correct: false, reason: '她说自己不看了，显然不是回复。' }
        ],
        analysis: 'ignore 是有意识地不去理会。她把读评论这件事外包给律师，既是自我保护，也是一种很冷的幽默。',
        wrongFeedback: '你答错了，苏晚还是每天刷到凌晨，第二天开会眼睛是肿的，气血 -10。',
        afterCorrect: '记者笑了。她没笑，补了一句：“律师读完，会告诉我哪几条值得告。”'
      }
    ],
    completeText: '第三十七章结束。神坛松动的第一块砖，是那份自己人写的稿子。舆论开始往回走，而她已经不太在意了。'
  },
  {
    id: 'fl_38',
    index: 38,
    title: '第 38 章 · 苏家的饭桌',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '苏家请她回去吃一顿饭，说是把话说开。老宅还是那个院子，门口那棵树的位置都没变，连佣人端汤的手势都还是从前那一个。',
    questions: [
      {
        plotDescription: '一整桌人坐着，没人先开口。老爷子看了她三次，最后低下头。',
        line: "His silence said more than any apology.",
        lineCn: '他的沉默，比任何一句道歉都说得更多。',
        prompt: "根据上下文，选出 'Silence' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a loud noise', cn: '巨大的噪音', correct: false, reason: '和 silence 正相反。' },
          { key: 'B', en: 'a short speech', cn: '一段简短的发言', correct: false, reason: '正是因为他没说话，才有这句话。' },
          { key: 'C', en: 'the state of saying nothing', cn: '沉默、一言不发', correct: true, reason: 'silence 指不说话的状态。' }
        ],
        analysis: 'silence 是无声，但这里被赋予了表达力。他的沉默比道歉更重，因为它说明他知道错在哪，却没脸把它说出口。',
        wrongFeedback: '你答错了，苏晚把这句当成讽刺直接说出口，饭桌彻底僵了，气血 -10。',
        afterCorrect: '她给自己夹了一筷子菜，说了句“味道没变”。老太太的筷子抖了一下。'
      },
      {
        plotDescription: '谈到股份，对方放话，说如果她再往下查，就把当年的事全捅出去。',
        line: "She threatened to tell the press everything.",
        lineCn: '她威胁说，要把一切都告诉媒体。',
        prompt: "根据上下文，选出 'Threatened' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'promised to help', cn: '承诺帮忙', correct: false, reason: '和原意正相反，这是要挟。' },
          { key: 'B', en: 'warned to do harm unless demands are met', cn: '威胁、以伤害相要挟', correct: true, reason: 'threaten to do 就是放话要做什么来施压。' },
          { key: 'C', en: 'asked politely', cn: '礼貌地询问', correct: false, reason: '语气完全不是请求。' }
        ],
        analysis: 'threaten 是以伤害为筹码施压。说这句话时她还在喝汤，语气越平，威胁反而越重，桌上没人接话。',
        wrongFeedback: '你答错了，苏晚把这句当成玩笑，没有留下录音，气血 -10。',
        afterCorrect: '她把手机放在桌上，屏幕亮着，录音界面正在走。'
      },
      {
        plotDescription: '对方说，她一个帖子就能让整个苏家难看，让她想清楚。',
        line: "One post can ruin ten years of work.",
        lineCn: '一条帖子就能毁掉十年的经营。',
        prompt: "根据上下文，选出 'Ruin' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'destroy or seriously damage', cn: '毁掉、严重破坏', correct: true, reason: 'ruin 指把事物的价值或前程破坏掉。' },
          { key: 'B', en: 'improve greatly', cn: '大幅改善', correct: false, reason: '和原意正相反。' },
          { key: 'C', en: 'explain clearly', cn: '解释清楚', correct: false, reason: '句中说的是毁掉，不是说明。' }
        ],
        analysis: 'ruin 指彻底的毁坏，常用来讲名声和事业。她说十年的经营，是把对方最在意的那件东西直接点了名。',
        wrongFeedback: '你答错了，苏晚低估了这句话的分量，第二天旧料就被放了出去，气血 -10。',
        afterCorrect: '她把手机收起来，说：“那你们最好保证，这十年真的干净。”'
      },
      {
        plotDescription: '老爷子终于开口，把筷子放下，问她到底想要什么。',
        line: "You can try to destroy me. I've already lost everything once.",
        lineCn: '你们可以试着摧毁我。我已经一无所有过一次了。',
        prompt: "根据上下文，选出 'Destroy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'build up slowly', cn: '慢慢建立', correct: false, reason: '和原意正相反。' },
          { key: 'B', en: 'invite someone over', cn: '邀请某人过来', correct: false, reason: '句中没有任何邀请的意思。' },
          { key: 'C', en: 'wreck completely', cn: '彻底摧毁', correct: true, reason: 'destroy 指把某物彻底毁掉，比 damage 更重。' }
        ],
        analysis: 'destroy 是彻底毁灭。她把这句威胁接了下来，用已经失去过一次说明自己身上已经没有可以被夺走的东西。',
        wrongFeedback: '你答错了，苏晚被这句话压住，后面的话全没说出来，气血 -10。',
        afterCorrect: '饭桌安静了很久。老爷子放下筷子，说了句：“那年的事，是我决定的。”'
      }
    ],
    completeText: '第三十八章结束。她走出老宅时没有回头。门口那棵树还在，只是她终于不再觉得那是自己的家。'
  },
  {
    id: 'fl_39',
    index: 39,
    title: '第 39 章 · 一句迟来的对不起',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '老宅那顿饭后，老爷子病了。电话打来的时候，她正在看新一季产品的打样，沉默了几秒，还是去了医院，走廊里全是消毒水的味道。',
    questions: [
      {
        plotDescription: '病房里只有他们两个人，老爷子看着窗外，声音很轻。',
        line: "He said he regrets that night more than anything.",
        lineCn: '他说，那一晚是他这辈子最后悔的事。',
        prompt: "根据上下文，选出 'Regrets' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'feels sorry about the past', cn: '后悔、对过去感到懊悔', correct: true, reason: 'regret 指对已经发生的事感到遗憾。' },
          { key: 'B', en: 'forgets about it', cn: '把这件事忘了', correct: false, reason: '他记得很清楚，所以才后悔。' },
          { key: 'C', en: 'repeats it', cn: '重做一遍', correct: false, reason: '句中说的是懊悔，不是重来。' }
        ],
        analysis: 'regret 是对过去的选择感到懊悔。more than anything 把程度推到顶，可这句话来得太晚，晚到已经改不了任何事。',
        wrongFeedback: '你答错了，苏晚没听出这份分量，只回了句知道了，气血 -10。',
        afterCorrect: '她坐在床边，没说话，把被子往上拉了拉。这个动作她做过很多次，只是从前是替别人。'
      },
      {
        plotDescription: '老爷子问她，是不是这几年一直在等这一天。',
        line: "This was never about revenge. It was about rent.",
        lineCn: '这事从来不是为了复仇。是为了房租。',
        prompt: "根据上下文，选出 'Revenge' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'paying back money', cn: '还钱', correct: false, reason: '句中已经用 rent 讲了房租，revenge 是另一件事。' },
          { key: 'B', en: 'a business plan', cn: '一份商业计划', correct: false, reason: 'revenge 是情绪性的报复，不是计划。' },
          { key: 'C', en: 'hurting someone back for a wrong', cn: '复仇、报复', correct: true, reason: 'revenge 指为了受过的伤害回击对方。' }
        ],
        analysis: 'revenge 是报复。她用 rent 和它对照，把整件事的起点拉回最朴素的那一晚：她只是想活下去，想交得起房租。',
        wrongFeedback: '你答错了，老爷子以为她承认了报复，病房里的气氛彻底冷了，气血 -10。',
        afterCorrect: '老爷子笑了一下，说：“你比你妈硬。”她说：“我妈走得早，没人教我怎么软。”'
      },
      {
        plotDescription: '她走出病房，在走廊上站了很久，助理打来电话问要不要发声明。',
        line: "I just wanted peace, so I stopped talking.",
        lineCn: '我只是想要太平，所以我不说了。',
        prompt: "根据上下文，选出 'Peace' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of paper', cn: '一张纸', correct: false, reason: 'peace 和 piece 同音不同义。' },
          { key: 'B', en: 'a quiet life without conflict', cn: '安宁、没有纷争的状态', correct: true, reason: 'peace 指内心或生活上的平静。' },
          { key: 'C', en: 'a big victory', cn: '一场大胜', correct: false, reason: '她要的是太平，不是赢。' }
        ],
        analysis: 'peace 指没有纷争的安宁。她说所以我不说了，是把沉默解释成一种主动选择，而不是被人按住嘴的软弱。',
        wrongFeedback: '你答错了，助理以为她要撤退，把准备好的稿子全撤了，气血 -10。',
        afterCorrect: '她靠在走廊的墙上，第一次觉得不说话也可以有力量。'
      },
      {
        plotDescription: '第二天，对方发来一条消息，只有一句：能不能先停一停。',
        line: "We called a truce. No more interviews, no more leaks.",
        lineCn: '我们叫了停战。不再接受采访，也不再放料。',
        prompt: "根据上下文，选出 'Truce' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting', cn: '停战、暂时休战', correct: true, reason: 'truce 指双方约定暂停争斗。' },
          { key: 'B', en: 'a final victory', cn: '最终的胜利', correct: false, reason: 'truce 是暂停，不是分出胜负。' },
          { key: 'C', en: 'a new contract', cn: '一份新合同', correct: false, reason: '这里说的是停手，不是合作。' }
        ],
        analysis: 'truce 是暂时停战，并不解决根本问题。她没说那个先字，但两个 no more 已经把这层意思讲明白了。',
        wrongFeedback: '你答错了，苏晚以为彻底和解了，放松了防备，气血 -10。',
        afterCorrect: '她回了两个字：“可以。”然后把手机放下，继续看打样。'
      }
    ],
    completeText: '第三十九章结束。停战不是和解，但至少没人再往她公司门口送花圈了。她把这天记在备忘录里，标题只有两个字：喘气。'
  },
  {
    id: 'fl_40',
    index: 40,
    title: '第 40 章 · 把过去结清',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '停战之后，双方律师约在一间会议室，把能结的账一次结清。窗外是冬天，暖气开得很足，桌上摆着两份厚得像砖头的文件。',
    questions: [
      {
        plotDescription: '律师问她，要不要加一条公开和解的条款，显得体面一些。',
        line: "We never fully reconciled, but we stopped bleeding.",
        lineCn: '我们从来没真正和解，但至少不再流血了。',
        prompt: "根据上下文，选出 'Reconciled' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'signed a contract', cn: '签了一份合同', correct: false, reason: '合同是形式，reconcile 指关系上的和解。' },
          { key: 'B', en: 'made up and restored the relationship', cn: '和解、重归于好', correct: true, reason: 'reconcile 指双方重新恢复关系。' },
          { key: 'C', en: 'moved to another city', cn: '搬到另一个城市', correct: false, reason: '句中说的是关系，不是搬家。' }
        ],
        analysis: 'reconcile 指关系修复。她用 never fully 承认了这份距离，比硬说一句我们和好了要诚实得多，也更像她。',
        wrongFeedback: '你答错了，律师把这条写成已达成和解，第二天被对方拿去当宣传，气血 -10。',
        afterCorrect: '她把那条删了，改成双方终止一切争议。措辞很冷，但准确。'
      },
      {
        plotDescription: '谈到那笔旧账，双方律师争了起来，声音越来越大。',
        line: "We had a huge argument about that money.",
        lineCn: '我们为那笔钱大吵了一架。',
        prompt: "根据上下文，选出 'Argument' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a heated disagreement', cn: '争吵、激烈的争论', correct: true, reason: 'argument 指双方意见激烈对立。' },
          { key: 'B', en: 'a written report', cn: '一份书面报告', correct: false, reason: '这里说的是人吵起来，不是写报告。' },
          { key: 'C', en: 'a friendly chat', cn: '一次友好的闲聊', correct: false, reason: 'huge 已经说明这不是闲聊。' }
        ],
        analysis: 'argument 是双方各执一词的争论。她强调 huge，是想说明这笔账到底有多难算，不是随便几句就能翻页的。',
        wrongFeedback: '你答错了，苏晚把争吵当成谈判技巧，主动退了半步，气血 -10。',
        afterCorrect: '她把账单推过去，一页一页对。吵到最后，数字对上了，人也累了。'
      },
      {
        plotDescription: '那天谈到凌晨三点，最后一条条款怎么都谈不拢。',
        line: "That fight lasted until three in the morning.",
        lineCn: '那场争执一直持续到凌晨三点。',
        prompt: "根据上下文，选出 'Fight' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a physical punch', cn: '一记拳打', correct: false, reason: '这里的 fight 是口舌之争，不是动手。' },
          { key: 'B', en: 'a sports match', cn: '一场体育比赛', correct: false, reason: '场景在会议室，不是赛场。' },
          { key: 'C', en: 'a serious quarrel', cn: '激烈的争执', correct: true, reason: 'fight 在这里指言语上的激烈冲突。' }
        ],
        analysis: 'fight 可以指动手，也可以指激烈的口角。凌晨三点这个时间，说明争的其实不是条款，是这十年的委屈。',
        wrongFeedback: '你答错了，苏晚以为要动手，叫了保安，谈判差点中断，气血 -10。',
        afterCorrect: '最后是老爷子那边先松口。她把笔放下，手抖得连名字都签歪了。'
      },
      {
        plotDescription: '天亮前，双方终于各让一步，把一个数字敲了下来。',
        line: "We reached a compromise: ten percent, no board seat.",
        lineCn: '我们达成了妥协：百分之十，不进董事会。',
        prompt: "根据上下文，选出 'Compromise' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a complete surrender', cn: '彻底投降', correct: false, reason: 'compromise 是双方各让一步，不是一方全输。' },
          { key: 'B', en: 'an agreement where both sides give up something', cn: '妥协、各让一步', correct: true, reason: 'compromise 指双方都退一步达成的方案。' },
          { key: 'C', en: 'a promise to marry', cn: '一个结婚的承诺', correct: false, reason: '场景是谈判，不是求婚。' }
        ],
        analysis: 'compromise 是双方各自让步。她用数字把结果说得很干：拿到了股份，但没有席位，这是退一步换来的东西。',
        wrongFeedback: '你答错了，苏晚把妥协当成胜利，第二天发现自己没有表决权，气血 -10。',
        afterCorrect: '走出会议室时天已经亮了。她在楼下买了两个包子，一个自己吃，一个递给律师。'
      }
    ],
    completeText: '第四十章结束。账结清了，人也散了。她回到公司，把那份协议锁进最底层的抽屉，然后打开电脑，开始写下一年度的计划。'
  },
  {
    id: 'fl_41',
    index: 41,
    title: '第 41 章 · 上市敲钟的清晨',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '上市敲钟的清晨，交易所楼下还没什么人。苏晚站在玻璃门前，穿着自己品牌的第一件白衬衫，袖口洗得有点发软，手里攥着一张折叠过很多次的发言稿。',
    questions: [
      {
        plotDescription: '一个年轻记者拦住她，问她怎么在两年里把一间出租屋做成公司。',
        line: "People call me savvy. I just read every contract twice.",
        lineCn: '别人说我精明。我只是把每份合同都读了两遍。',
        prompt: "根据上下文，选出 'Savvy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'rude and harsh', cn: '粗鲁刻薄的', correct: false, reason: '这是 blunt，说的是嘴毒，不是精明。' },
          { key: 'B', en: 'very lucky', cn: '非常幸运的', correct: false, reason: '她强调读合同，是本事，不是运气。' },
          { key: 'C', en: 'practical and clever about business', cn: '精明的、很懂行的', correct: true, reason: 'savvy 指对实际事务很有一套。' }
        ],
        analysis: 'savvy 指实际层面的精明和敏锐。她把功劳推给读两遍合同，反而更显出那种不靠运气的清醒。',
        wrongFeedback: '你答错了，苏晚把夸奖听成嘲讽，脸一下沉了，采访开头就僵，气血 -10。',
        afterCorrect: '记者笑了，说这答案比任何创业金句都好用。她抬手看了眼时间，钟马上就要敲了。'
      },
      {
        plotDescription: '投资人问她，为什么不愿在招股书里写更漂亮的增长曲线。',
        line: "I'll be blunt: the numbers are real, and I won't dress them up.",
        lineCn: '我说得直白点：数字是真的，我不会给它们化妆。',
        prompt: "根据上下文，选出 'Blunt' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'not sharp anymore', cn: '不再锋利了', correct: false, reason: '这是字面义，这里是形容说话方式。' },
          { key: 'B', en: 'direct and honest to the point of rudeness', cn: '直白、不留情面的', correct: true, reason: 'blunt 指说话直接，不太绕弯子。' },
          { key: 'C', en: 'very polite', cn: '非常有礼貌的', correct: false, reason: '和原意相反，她是在预告自己要说实话。' }
        ],
        analysis: 'blunt 指说话直，甚至有点不顾情面。她先说我说得直白点，等于提前给这句话上了保险。',
        wrongFeedback: '你答错了，投资人以为她在客气，继续追问，会议室气氛一下子紧了，气血 -10。',
        afterCorrect: '会议室安静了两秒，然后有人笑出声。那份招股书最后没改一个数字。'
      },
      {
        plotDescription: '有人问她，上市之后第一件想做的事是什么。',
        line: "Something sassy: I want to buy back the house they threw me out of.",
        lineCn: '说个带刺的愿望：我想把当年赶我出来的那栋房子买回来。',
        prompt: "根据上下文，选出 'Sassy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'bold and a little cheeky', cn: '带刺的、有点嚣张的', correct: true, reason: 'sassy 指说话大胆、带一点俏皮的锐气。' },
          { key: 'B', en: 'sad and quiet', cn: '难过又安静的', correct: false, reason: '和这句话的语气正相反。' },
          { key: 'C', en: 'formal and serious', cn: '正式严肃的', correct: false, reason: '她自己在给这个愿望定调为带刺。' }
        ],
        analysis: 'sassy 是带点冒犯感的俏皮，用来自嘲或反击最合适。她用这个词给愿望定了调：不是复仇，是幽默。',
        wrongFeedback: '你答错了，现场以为她在放狠话，标题全写成复仇宣言，气血 -10。',
        afterCorrect: '台下笑翻了。她补了一句：“买回来改成员工宿舍。”'
      },
      {
        plotDescription: '轮到敲钟，主持人问她要不要说一句励志的话。',
        line: "I know it sounds lame, but I really just wanted to pay rent.",
        lineCn: '我知道这话听着挺逊的，但我真的只是想交得起房租。',
        prompt: "根据上下文，选出 'Lame' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'unable to walk', cn: '走不了路的', correct: false, reason: '这是字面义，这里是口语用法。' },
          { key: 'B', en: 'extremely cool', cn: '超级酷的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'weak and unimpressive', cn: '逊、不够有劲的', correct: true, reason: 'lame 口语里指平淡、拿不出手。' }
        ],
        analysis: 'lame 在口语里指不够酷、拿不出手。她用它来降低期待，反而让这句话听起来比任何口号都真。',
        wrongFeedback: '你答错了，苏晚把这话说得很郑重，全场尴尬，气血 -10。',
        afterCorrect: '钟声响起来的时候，她握着槌子，手心里全是汗。'
      }
    ],
    completeText: '第四十一章结束。钟声落下，屏幕上跳出开盘价。她站在人群中间，第一次没有去算那一串数字能换多少房租。'
  },
  {
    id: 'fl_42',
    index: 42,
    title: '第 42 章 · 敲钟前的最后一次彩排',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '敲钟前的彩排在一间小会议室，投影反复卡顿。设计师把上市纪念礼盒的样稿摊在桌上，问她要不要再改一版，语气里全是自己也没底的那种小心。',
    questions: [
      {
        plotDescription: '设计师小声说，这个包装他自己都觉得有点土。',
        line: "No, this is dope. Keep it exactly like this.",
        lineCn: '不，这个超酷。就照这样，一点都别改。',
        prompt: "根据上下文，选出 'Dope' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very cool', cn: '酷毙了', correct: true, reason: 'dope 口语里表示非常棒、很酷。' },
          { key: 'B', en: 'stupid', cn: '愚蠢的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'a kind of drug', cn: '一种毒品', correct: false, reason: '这是字面义，这里是在赞美。' }
        ],
        analysis: 'dope 在口语里是极高的赞美，和 cool 同义。她连说两遍别改，是为了让设计师相信这不是客套话。',
        wrongFeedback: '你答错了，苏晚没接住设计师的自我怀疑，他连夜又改了一版，气血 -10。',
        afterCorrect: '设计师愣了两秒，把笔放下，说这是自己做这行以来第一次被这样夸。'
      },
      {
        plotDescription: '她翻开一叠打印稿，发现页边对不齐，有几处字号也不统一。',
        line: "This is sloppy. We can't put our name on it.",
        lineCn: '这太糙了。我们不能把名字印在上面。',
        prompt: "根据上下文，选出 'Sloppy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very neat', cn: '非常整齐的', correct: false, reason: '和原意相反。' },
          { key: 'B', en: 'full of water', cn: '湿漉漉的', correct: false, reason: '与句意无关。' },
          { key: 'C', en: 'careless and untidy', cn: '粗糙、马虎的', correct: true, reason: 'sloppy 指做得随便、不整洁。' }
        ],
        analysis: 'sloppy 指做得草率、不讲究。她不是在挑审美，而是知道上市当天每一个细节都会被放大来看。',
        wrongFeedback: '你答错了，团队以为只是风格问题，稿子照原样送印，气血 -10。',
        afterCorrect: '她把每一页都重新排了一遍，改到凌晨两点。'
      },
      {
        plotDescription: '深夜加班，助理第六次问她要不要先回去休息。',
        line: "I'm not being needy, I just don't want to be alone tonight.",
        lineCn: '我不是缺人陪，我只是今晚不想一个人待着。',
        prompt: "根据上下文，选出 'Needy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'in need of money', cn: '缺钱的', correct: false, reason: '这里说的是情感上的需要。' },
          { key: 'B', en: 'too dependent on others for attention', cn: '黏人、缺爱的', correct: true, reason: 'needy 指过度需要别人的关注和陪伴。' },
          { key: 'C', en: 'very hungry', cn: '很饿的', correct: false, reason: '和句意无关。' }
        ],
        analysis: 'needy 指在情感上过度依赖别人的关注。她先否掉这个词，再说出真正的理由，是很苏晚式的坦白。',
        wrongFeedback: '你答错了，助理以为她嫌自己烦，默默退了出去，气血 -10。',
        afterCorrect: '助理没走，拖了把椅子坐在门口，说那我陪你。'
      },
      {
        plotDescription: '陆时砚说她上市之后几乎不回消息，是不是有点太顾自己。',
        line: "Maybe I'm selfish. But I'm not going to apologize for building something.",
        lineCn: '也许我自私。但我不会为做成一件事道歉。',
        prompt: "根据上下文，选出 'Selfish' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'caring only about oneself', cn: '自私、只顾自己', correct: true, reason: 'selfish 指只考虑自己的利益。' },
          { key: 'B', en: 'very generous', cn: '非常大方', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'extremely tired', cn: '极度疲惫', correct: false, reason: '不是这个词的意思。' }
        ],
        analysis: 'selfish 指只顾自己。她承认了这个标签，却拒绝为它道歉，把自私重新定义成一种边界。',
        wrongFeedback: '你答错了，苏晚急着解释，越解释越像心虚，气血 -10。',
        afterCorrect: '他看着她，半天说了句：“我没让你道歉，我是想让你留点时间给我。”'
      }
    ],
    completeText: '第四十二章结束。彩排结束时天已经黑了。走出大楼，他替她按住电梯门，两个人谁都没提刚才那半句话。'
  },
  {
    id: 'fl_43',
    index: 43,
    title: '第 43 章 · 数字背后的代价',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '上市首日，订单涌进来的速度超出了服务器。财务把一叠成本表放在她面前，说这个月的账面不会好看，推广费里还有几笔说不清的旧账。',
    questions: [
      {
        plotDescription: '她翻到第一页，看着那串增长数字，忽然笑了。',
        line: "These numbers are gorgeous, and they cost us a lot.",
        lineCn: '这串数字美得不像话，代价也大得不像话。',
        prompt: "根据上下文，选出 'Gorgeous' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'full of sorrow', cn: '充满悲伤的', correct: false, reason: '这里的语气是赞叹。' },
          { key: 'B', en: 'extremely beautiful or impressive', cn: '美呆了、非常漂亮', correct: true, reason: 'gorgeous 是极高的赞美。' },
          { key: 'C', en: 'hard to read', cn: '难以辨认的', correct: false, reason: '不是这个词的意思。' }
        ],
        analysis: 'gorgeous 是极高的赞美，通常形容人或景物，这里被她挪来形容数字，反差让后半句的代价更重。',
        wrongFeedback: '你答错了，苏晚把赞叹说成了抱怨，财务以为数据出了问题，气血 -10。',
        afterCorrect: '她把那页折了个角，说这份报表留着，以后每年都拿出来看一次。'
      },
      {
        plotDescription: '财务说，有一笔推广费是三年前的，一直没结。',
        line: "That's weird. I never signed anything like that.",
        lineCn: '奇怪。我从没签过这种东西。',
        prompt: "根据上下文，选出 'Weird' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'strange and hard to explain', cn: '奇怪的、说不通的', correct: true, reason: 'weird 指反常、让人费解。' },
          { key: 'B', en: 'very normal', cn: '非常正常的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'extremely expensive', cn: '极其昂贵的', correct: false, reason: '她说的是说不通，不是贵。' }
        ],
        analysis: 'weird 指不合常理。她不是在感慨，而是在第一时间把疑点标出来，这是她这几年练出来的反应。',
        wrongFeedback: '你答错了，苏晚随口带过，这笔账后来被翻出来做了文章，气血 -10。',
        afterCorrect: '她让财务把凭证调出来，一笔一笔对，对到第三页时，她停住了。'
      },
      {
        plotDescription: '那笔费用的收款方是一家没听过的小公司，地址是一间便利店。',
        line: "This company looks sketchy. Don't pay it, check it first.",
        lineCn: '这家公司看着很可疑。先别付，查清楚再说。',
        prompt: "根据上下文，选出 'Sketchy' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'drawn with a pencil', cn: '用铅笔画出来的', correct: false, reason: '这是字面联想。' },
          { key: 'B', en: 'very reliable', cn: '非常可靠的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'doubtful and possibly dishonest', cn: '可疑的、不太干净的', correct: true, reason: 'sketchy 指让人不放心、可能有猫腻。' }
        ],
        analysis: 'sketchy 是口语里常用的词，指某件事或某个人让人不放心。她在这里是把直觉说成了一条明确指令。',
        wrongFeedback: '你答错了，款项照常付出去了，一周后对方公司注销，气血 -10。',
        afterCorrect: '她让法务去查，两天后那边回话：这家公司背后的股东名字，她见过。'
      },
      {
        plotDescription: '财务问她，要不要把这件事写进上市公告。',
        line: "It's bizarre, but we report it. No hiding.",
        lineCn: '是挺离谱的，但我们要报。不藏。',
        prompt: "根据上下文，选出 'Bizarre' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very common', cn: '非常常见的', correct: false, reason: '和原意相反。' },
          { key: 'B', en: 'strange in an odd way', cn: '离奇、诡异的', correct: true, reason: 'bizarre 指怪异到让人难以相信。' },
          { key: 'C', en: 'perfectly legal', cn: '完全合法的', correct: false, reason: '她说的是离谱，不是合法性。' }
        ],
        analysis: 'bizarre 比 weird 更重，指离奇到有点荒谬。她用这个词承认事情的荒唐，却拒绝用荒唐当借口。',
        wrongFeedback: '你答错了，苏晚把这句话说得很轻松，团队以为可以拖，气血 -10。',
        afterCorrect: '公告发出去那天，股价跌了六个点。她没有解释，只把那家公司的名字挂在了官网首页。'
      }
    ],
    completeText: '第四十三章结束。跌的那六个点，三天后涨回来了。有人问她怕不怕，她说怕，但更怕有一天不敢报。'
  },
  {
    id: 'fl_44',
    index: 44,
    title: '第 44 章 · 他递来的那份文件',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '那家公司的股东名单里，出现了一个她熟悉的名字。陆时砚把一份尽调文件放在她桌上，说这件事他早就知道一部分，只是一直没找到合适的时机开口。',
    questions: [
      {
        plotDescription: '她翻开文件，发现对方早在两年前就开始布局，一步一步把她围起来。',
        line: "This is an epic mess, and it started before we even launched.",
        lineCn: '这是一场史诗级的烂摊子，而且在我们上线之前就开始了。',
        prompt: "根据上下文，选出 'Epic' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very short', cn: '非常短暂的', correct: false, reason: '与句意相反。' },
          { key: 'B', en: 'a kind of poem', cn: '一种史诗体裁', correct: false, reason: '这里是形容词用法。' },
          { key: 'C', en: 'huge and remarkable in scale', cn: '史诗级的、规模巨大的', correct: true, reason: 'epic 口语里指规模大到夸张。' }
        ],
        analysis: 'epic 原指史诗，口语里引申为规模大到夸张，可褒可贬。她把它接在 mess 后面，是很标准的自嘲。',
        wrongFeedback: '你答错了，苏晚把 epic 当成褒义，气氛一下子错位，气血 -10。',
        afterCorrect: '她翻到最后一页，用笔在时间轴上画了一条线，说那就从这里往回查。'
      },
      {
        plotDescription: '文件里附了一段她两年前的直播录像，画质很糊，她在镜头前手足无措。',
        line: "Watching this makes me cringe. I was so awkward back then.",
        lineCn: '看这段我脚趾都抠地了。那时候我太不会说话了。',
        prompt: "根据上下文，选出 'Cringe' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'feel very proud', cn: '感到非常自豪', correct: false, reason: '和原意相反。' },
          { key: 'B', en: 'feel embarrassed and uncomfortable', cn: '尴尬到脚趾扣地', correct: true, reason: 'cringe 指因尴尬而想缩起来。' },
          { key: 'C', en: 'laugh out loud', cn: '放声大笑', correct: false, reason: '不是这个词的核心意思。' }
        ],
        analysis: 'cringe 是那种替自己或替别人尴尬到想钻地缝的感觉。她没有删掉这段录像，反而把它当成一个坐标来看。',
        wrongFeedback: '你答错了，苏晚否认那段过去，团队也不敢再提，气血 -10。',
        afterCorrect: '她让助理把这段视频存下来，标了个名字：第一版苏晚。'
      },
      {
        plotDescription: '看完文件，陆时砚问她需不需要他出手。',
        line: "Your timing is fabulous, but this one is mine to finish.",
        lineCn: '你来得正是时候，但这一局得我自己收尾。',
        prompt: "根据上下文，选出 'Fabulous' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'wonderful and excellent', cn: '极好的、太棒了', correct: true, reason: 'fabulous 是口语里的高度赞美。' },
          { key: 'B', en: 'completely useless', cn: '完全没用的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'very expensive', cn: '非常昂贵的', correct: false, reason: '她夸的是时机，不是价钱。' }
        ],
        analysis: 'fabulous 是极好的口语说法。她先夸时机，再拒绝帮忙，这个顺序让那句我自己来听起来不那么伤人。',
        wrongFeedback: '你答错了，苏晚语气太硬，听起来像在赶人，气血 -10。',
        afterCorrect: '他把手插回口袋，退后半步，说那我在这里看着。'
      },
      {
        plotDescription: '她承认，两年前那场首播确实很糟，但她不打算删掉。',
        line: "It was terrible, and it's still the reason people trust me.",
        lineCn: '那场直播很糟，但它到现在还是别人信我的原因。',
        prompt: "根据上下文，选出 'Terrible' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good', cn: '非常好的', correct: false, reason: '和原意相反。' },
          { key: 'B', en: 'very funny', cn: '非常搞笑的', correct: false, reason: '她在说糟糕，不是说好笑。' },
          { key: 'C', en: 'very bad', cn: '糟糕透顶的', correct: true, reason: 'terrible 指糟糕到极点的程度。' }
        ],
        analysis: 'terrible 是纯粹的负面评价。她用“但它还是”把一次失败转成了资产，这个转折是整段话真正的核心。',
        wrongFeedback: '你答错了，苏晚把话说得含糊，团队以为她想删掉旧视频，气血 -10。',
        afterCorrect: '他看着她，说这就是我当初愿意投你的原因。'
      }
    ],
    completeText: '第四十四章结束。文件合上，天已经亮了。她给法务发了一条消息：从两年前那条线开始，一寸一寸查。'
  },
  {
    id: 'fl_45',
    index: 45,
    title: '第 45 章 · 记者会上的一个问题',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '记者会定在下午三点。她提前一小时到，坐在后台的折叠椅上，把要说的三句话在心里过了十遍，手边的水一口没喝，纸杯被捏出了褶。',
    questions: [
      {
        plotDescription: '公关建议她把话说得漂亮一点，她说不用。',
        line: "I'll give them a decent answer, not a perfect one.",
        lineCn: '我会给他们一个像样的回答，不是完美的回答。',
        prompt: "根据上下文，选出 'Decent' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'good enough and respectable', cn: '体面的、还算不错的', correct: true, reason: 'decent 指达到基本标准、拿得出手。' },
          { key: 'B', en: 'extremely bad', cn: '极其糟糕的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'very beautiful', cn: '非常美丽的', correct: false, reason: '这里评价的是回答。' }
        ],
        analysis: 'decent 指够好、拿得出手，比 good 低调。她用 perfect 作对照，是在拒绝那种过分圆滑的公关话术。',
        wrongFeedback: '你答错了，公关以为她答应了完美稿，把提词器全改了，气血 -10。',
        afterCorrect: '她把提词器上的长句划掉，只留下三个短句。'
      },
      {
        plotDescription: '有记者提前放话，说要在现场问她一个很私人的问题。',
        line: "He's a weirdo, but I'll answer it anyway.",
        lineCn: '他是个怪人，不过那问题我还是会答。',
        prompt: "根据上下文，选出 'Weirdo' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a very kind person', cn: '非常善良的人', correct: false, reason: '语气是贬义，不是夸奖。' },
          { key: 'B', en: 'a famous expert', cn: '有名的专家', correct: false, reason: '与句意不符。' },
          { key: 'C', en: 'a strange person', cn: '怪人、怪胎', correct: true, reason: 'weirdo 是 weird 的名词形式，指行为古怪的人。' }
        ],
        analysis: 'weirdo 是口语里带点贬意的怪人。她先说他是怪人，再说我还是会答，反而把主动权拿回自己手上。',
        wrongFeedback: '你答错了，苏晚把这句当成夸奖，现场效果全乱了，气血 -10。',
        afterCorrect: '记者会上，那个问题果然来了。她听完，先笑了一下。'
      },
      {
        plotDescription: '后台屏幕正放着她的新品广告，助理小声吹了句口哨。',
        line: "You were hot up there. Don't let anyone tell you otherwise.",
        lineCn: '你在上面那会儿特别有魅力。别让任何人说你不行。',
        prompt: "根据上下文，选出 'Hot' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'very warm', cn: '很热的', correct: false, reason: '这里是在夸人。' },
          { key: 'B', en: 'attractive and confident', cn: '性感、很有魅力的', correct: true, reason: 'hot 形容人时指有吸引力、有气场。' },
          { key: 'C', en: 'spicy', cn: '辛辣的', correct: false, reason: '与句意无关。' }
        ],
        analysis: 'hot 形容人时指有魅力、有气场。助理用它来夸台上的状态，和苏晚平时那种克制形成了有趣的反差。',
        wrongFeedback: '你答错了，苏晚以为在说空调温度，抬头看了看风口，气血 -10。',
        afterCorrect: '她低头整理袖口，说了句别贫。耳朵却有点红。'
      },
      {
        plotDescription: '上场前，陆时砚替她把歪掉的胸针扶正。',
        line: "That's cute, you fixing my pin like I'm a kid.",
        lineCn: '挺可爱的，你帮我别胸针，像在照顾小孩。',
        prompt: "根据上下文，选出 'Cute' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'endearing and sweet', cn: '可爱的、让人心里一软的', correct: true, reason: 'cute 在这里指举动讨人喜欢。' },
          { key: 'B', en: 'extremely ugly', cn: '极其难看的', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'very serious', cn: '非常严肃的', correct: false, reason: '这里的语气是打趣。' }
        ],
        analysis: 'cute 不只形容外表，也能形容让人心软的举动。她用一个玩笑把气氛放松下来，也默许了这份靠近。',
        wrongFeedback: '你答错了，苏晚把打趣说得像责备，他收回手，气血 -10。',
        afterCorrect: '他没接话，只是把胸针又按紧了一点，说别歪着上台。'
      }
    ],
    completeText: '第四十五章结束。记者会开完，那个私人问题被剪成短视频，标题是她的原话：我怕，但我不躲。'
  },
  {
    id: 'fl_46',
    index: 46,
    title: '第 46 章 · 天台上的风',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '风波过去之后，公司没有想象中那么忙。她第一次在工作日下午六点关掉电脑，站在落地窗前看楼下的车流，风从半开的窗缝里钻进来。',
    questions: [
      {
        plotDescription: '他问她，住在城东，每天来回要多久。',
        line: "My commute is an hour each way. I use it to read contracts.",
        lineCn: '我通勤单程一小时。都用来看合同了。',
        prompt: "根据上下文，选出 'Commute' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a kind of payment', cn: '一种付款方式', correct: false, reason: '和上下班路程无关。' },
          { key: 'B', en: 'the daily trip to and from work', cn: '通勤、上下班路程', correct: true, reason: 'commute 指每天往返工作地点的路程。' },
          { key: 'C', en: 'a business meeting', cn: '一场商务会议', correct: false, reason: '她说的是路上的时间。' }
        ],
        analysis: 'commute 指每天上下班的往返路程。她把这一小时也用来看合同，这个细节比任何自述都更能说明她怎么走到今天。',
        wrongFeedback: '你答错了，他以为她在说加班，话题接不下去，气血 -10。',
        afterCorrect: '他说那太久了。她说不久了，从前连地铁都舍不得坐。'
      },
      {
        plotDescription: '她说完，打了个很短的哈欠，靠在沙发上闭眼。',
        line: "Give me ten minutes for a nap, then we'll talk.",
        lineCn: '给我十分钟打个盹，然后我们再说。',
        prompt: "根据上下文，选出 'Nap' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep', cn: '小睡、打盹', correct: true, reason: 'nap 指白天短时间的睡眠。' },
          { key: 'B', en: 'a long vacation', cn: '一段长假', correct: false, reason: '十分钟不可能是长假。' },
          { key: 'C', en: 'a quick meal', cn: '一顿快餐', correct: false, reason: '她说的是睡，不是吃。' }
        ],
        analysis: 'nap 是白天的小睡。十分钟这个数字很具体，也把她这几年缺的觉说得很轻，轻到不需要别人同情。',
        wrongFeedback: '你答错了，他以为她要吃饭，起身去拿外卖菜单，气血 -10。',
        afterCorrect: '她真的睡着了，头歪在沙发靠背上。他把外套盖在她身上，然后坐在旁边看文件。'
      },
      {
        plotDescription: '醒来时已经八点，她看了眼窗外，说不想出门。',
        line: "Let's order in tonight. I don't want to see anyone else today.",
        lineCn: '今晚点外卖吧。我今天不想再见任何人了。',
        prompt: "根据上下文，选出 'Order in' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'eat at a restaurant', cn: '去餐厅吃', correct: false, reason: '正好相反，那是不出门。' },
          { key: 'B', en: 'cook at home', cn: '在家做饭', correct: false, reason: '点外卖不是自己做饭。' },
          { key: 'C', en: 'have food delivered to home', cn: '点外卖、叫餐到家', correct: true, reason: 'order in 指把餐点叫到家里吃。' }
        ],
        analysis: 'order in 是把饭叫到家里。她说不想再见任何人，这句话里有一种很少见的疲倦，不是累，是社交的电用完了。',
        wrongFeedback: '你答错了，他以为她要下馆子，已经订好了位子，气血 -10。',
        afterCorrect: '他打开手机翻菜单，问她吃不吃辣。她说都行，别太油。'
      },
      {
        plotDescription: '点完单，他忽然说，下周想带她去一个地方。',
        line: "We could eat out for once. Somewhere with no investors.",
        lineCn: '我们也可以下馆子一次。找个没有投资人的地方。',
        prompt: "根据上下文，选出 'Eat out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'order food delivery', cn: '点外卖', correct: false, reason: '和上一题正好相反。' },
          { key: 'B', en: 'have a meal at a restaurant', cn: '下馆子、在外面吃饭', correct: true, reason: 'eat out 指去外面的餐馆吃饭。' },
          { key: 'C', en: 'skip the meal', cn: '不吃饭', correct: false, reason: '与句意无关。' }
        ],
        analysis: 'eat out 是去外面吃饭。Somewhere with no investors 这一句才是他真正想说的话：他想要的是一顿饭，不是一场局。',
        wrongFeedback: '你答错了，苏晚把这句当成商务应酬，开始问对方是谁，气血 -10。',
        afterCorrect: '她愣了一下，说那我要吃很辣的那种。他说行。'
      }
    ],
    completeText: '第四十六章结束。外卖送到的时候已经凉了一半。两个人坐在沙发上吃完，谁都没看手机。'
  },
  {
    id: 'fl_47',
    index: 47,
    title: '第 47 章 · 一句不像告白的告白',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '那顿饭之后，他来的次数多了。周末下午，她的公寓第一次有了两个人的动静：水壶响，洗衣机转，地上摊着没叠的衣服，电视开着没人看。',
    questions: [
      {
        plotDescription: '他站在厨房门口，说这周的家务他包了。',
        line: "You do the chores, I'll do the dishes. Deal?",
        lineCn: '你收拾屋子，我洗碗。成交？',
        prompt: "根据上下文，选出 'Chores' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'work tasks', cn: '工作任务', correct: false, reason: '这里指的是家里的事。' },
          { key: 'B', en: 'fun activities', cn: '有趣的活动', correct: false, reason: '家务不是娱乐。' },
          { key: 'C', en: 'routine household tasks', cn: '家务、日常杂事', correct: true, reason: 'chores 指洗衣做饭打扫这一类琐事。' }
        ],
        analysis: 'chores 指家里那些重复又不起眼的琐事。他主动分掉一半，是把住在一起这件事落到了最具体的地方。',
        wrongFeedback: '你答错了，她以为他在说公司的事，回了一句我这边排期很满，气血 -10。',
        afterCorrect: '她把抹布扔给他，说成交，但碗要冲两遍。'
      },
      {
        plotDescription: '她坐在沙发上，看着那叠文件，一直没动。',
        line: "I keep procrastinating. The report was due yesterday.",
        lineCn: '我一直在拖。报告昨天就该交了。',
        prompt: "根据上下文，选出 'Procrastinating' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'working very hard', cn: '非常努力地工作', correct: false, reason: '和原意相反。' },
          { key: 'B', en: 'putting things off', cn: '拖延、一直往后推', correct: true, reason: 'procrastinate 指明知该做却一直不做。' },
          { key: 'C', en: 'finishing early', cn: '提前完成', correct: false, reason: '她说的是拖到最后。' }
        ],
        analysis: 'procrastinate 是明知要做却一直往后拖。她第一次承认这件事，语气里没有自责，反而有点轻松。',
        wrongFeedback: '你答错了，她把自己说成很努力，他也就没再问，气血 -10。',
        afterCorrect: '他把文件抽走，说那我念，你答。她笑了，说这算作弊。'
      },
      {
        plotDescription: '晚上，她打开电视，说想看点不用动脑的东西。',
        line: "Let's binge-watch that show. I need a night off from thinking.",
        lineCn: '我们刷那部剧吧。我需要一个晚上什么都不想。',
        prompt: "根据上下文，选出 'Binge-watch' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'watch many episodes in a row', cn: '一口气刷剧', correct: true, reason: 'binge-watch 指连续看很多集。' },
          { key: 'B', en: 'watch one short clip', cn: '看一个短片', correct: false, reason: '她说的是整部剧。' },
          { key: 'C', en: 'turn off the TV', cn: '关掉电视', correct: false, reason: '和原意相反。' }
        ],
        analysis: 'binge-watch 是一口气连着看很多集。她说什么都不想，是把刷剧当成一种合法的休息，而不是浪费时间。',
        wrongFeedback: '你答错了，他以为只看一集，播完就关了电视，气血 -10。',
        afterCorrect: '两个人看到第三集，她已经靠在他肩上睡着了。'
      },
      {
        plotDescription: '半夜她醒过来，看见他还在看手机，屏幕的光照在脸上。',
        line: "Stop scrolling. It's two in the morning.",
        lineCn: '别刷手机了。都凌晨两点了。',
        prompt: "根据上下文，选出 'Scrolling' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'reading a book', cn: '看书', correct: false, reason: '屏幕上没有书。' },
          { key: 'B', en: 'writing a message', cn: '写消息', correct: false, reason: '他只是在往下滑。' },
          { key: 'C', en: 'moving through a screen with your finger', cn: '刷手机、划屏幕', correct: true, reason: 'scroll 指在屏幕上不停往下滑。' }
        ],
        analysis: 'scroll 指手指在屏幕上往下滑，常用来指无目的地刷内容。她这句话带着一点生活感，很像真正的同居日常。',
        wrongFeedback: '你答错了，他没听懂，继续往下翻，气血 -10。',
        afterCorrect: '他把手机扣下，说在看评论，有人骂你。她说别看，睡吧。'
      }
    ],
    completeText: '第四十七章结束。第二天她醒来时，手机被放在客厅。他留了张纸条：早饭在锅里，评论我删了。'
  },
  {
    id: 'fl_48',
    index: 48,
    title: '第 48 章 · 婚礼请柬',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '一个周末，他带她去郊外。路上她把请柬从包里拿出来看了两次，那是苏家寄来的，烫金的一个囍字，新人的名字她一个都不认识。',
    questions: [
      {
        plotDescription: '服务区休息时，她拿他的手机想找家店，屏幕停在首页。',
        line: "Just swipe left, the map is on the second page.",
        lineCn: '往左滑一下，地图在第二页。',
        prompt: "根据上下文，选出 'Swipe' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'slide your finger across the screen', cn: '滑屏、划动屏幕', correct: true, reason: 'swipe 指手指在屏幕上滑动。' },
          { key: 'B', en: 'throw something away', cn: '把东西扔掉', correct: false, reason: '与句意无关。' },
          { key: 'C', en: 'take a photo', cn: '拍一张照片', correct: false, reason: '她说的是滑动屏幕。' }
        ],
        analysis: 'swipe 是手指在屏幕上滑动的动作。这个小小的指导让两个人的距离变得很近，比任何情话都自然。',
        wrongFeedback: '你答错了，她点开了相机，两个人在服务区笑了一场，气血 -10。',
        afterCorrect: '她划过去，地图跳出来，定位点正好在请柬上的那个地址附近。'
      },
      {
        plotDescription: '到郊外已经天黑，她连行李都没拆就躺在民宿的床上。',
        line: "I'm going to crash early. Wake me for breakfast.",
        lineCn: '我要早点睡了。早饭的时候叫我。',
        prompt: "根据上下文，选出 'Crash' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'have a car accident', cn: '出车祸', correct: false, reason: '这是字面义，这里是口语用法。' },
          { key: 'B', en: 'start a party', cn: '开一场派对', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'go to sleep quickly', cn: '倒头就睡', correct: true, reason: 'crash 口语里指累到立刻睡着。' }
        ],
        analysis: 'crash 口语里指累到倒头就睡。她说叫我吃早饭，是这几年第一次允许自己睡到自然醒。',
        wrongFeedback: '你答错了，他以为车出了问题，跑出去看了一圈，气血 -10。',
        afterCorrect: '她沾到枕头就睡着了。他在窗边站了一会儿，把窗帘拉严。'
      },
      {
        plotDescription: '第二天早上，他问她想不想去附近走走，不安排任何事。',
        line: "Let's just hang out today. No plans, no meetings.",
        lineCn: '今天我们就在外面随便逛逛。不排计划，不开会。',
        prompt: "根据上下文，选出 'Hang out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'work overtime', cn: '加班', correct: false, reason: '正好相反。' },
          { key: 'B', en: 'spend relaxed time together', cn: '闲逛、一起消磨时间', correct: true, reason: 'hang out 指没有目的性地待在一起。' },
          { key: 'C', en: 'hang clothes outside', cn: '把衣服晾在外面', correct: false, reason: '这是字面误解。' }
        ],
        analysis: 'hang out 是没有目的的相处。她特意补上两个 no，说明不安排对她来说反而需要练习。',
        wrongFeedback: '你答错了，苏晚把这句当成商务安排，开始问对方是谁，气血 -10。',
        afterCorrect: '他们走了两个小时，什么都没买，回来时她的鞋上沾了泥。'
      },
      {
        plotDescription: '下午回到民宿，她把椅子拖到院子里，长长地出了口气。',
        line: "Now this is what I call kicking back.",
        lineCn: '这才叫真正的放松。',
        prompt: "根据上下文，选出 'Kicking back' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'relaxing completely', cn: '彻底放松、瘫着', correct: true, reason: 'kick back 指什么都不干地放松。' },
          { key: 'B', en: 'kicking someone', cn: '踢人', correct: false, reason: '这是字面误解。' },
          { key: 'C', en: 'going back to work', cn: '回去工作', correct: false, reason: '和原意相反。' }
        ],
        analysis: 'kick back 是彻底放松、什么也不做。她用一个现在进行时把这一刻定住，像是在给自己盖章：今天可以休息。',
        wrongFeedback: '你答错了，他以为她要回去，起身去收拾行李，气血 -10。',
        afterCorrect: '他搬了把椅子坐在旁边，两个人看太阳一点一点落下去。'
      }
    ],
    completeText: '第四十八章结束。回城的路上，她把那张请柬放回包里，说我不去。他嗯了一声，没有劝。'
  },
  {
    id: 'fl_49',
    index: 49,
    title: '第 49 章 · 晚来的春天',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '春天来的时候，公司搬进了新的办公楼。她站在空荡的会议区，脚下是刚铺好的地毯，墙上还什么都没挂，回声比人声要大得多。',
    questions: [
      {
        plotDescription: '团队问她，旧办公室那边还有一堆杂事怎么办。',
        line: "Let's wrap up the old office first, then we move everyone.",
        lineCn: '先把旧办公室的事收尾，然后再整体搬过来。',
        prompt: "根据上下文，选出 'Wrap up' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'cover with paper', cn: '用纸包起来', correct: false, reason: '这是字面误解。' },
          { key: 'B', en: 'finish and bring to an end', cn: '收尾、把事做完', correct: true, reason: 'wrap up 指把一件事结掉。' },
          { key: 'C', en: 'start from scratch', cn: '从头开始', correct: false, reason: '和原意相反。' }
        ],
        analysis: 'wrap up 是把事情收尾。她先结旧账再搬新家，这个顺序很像她做事的风格：不留尾巴给别人抓着。',
        wrongFeedback: '你答错了，团队以为要打包物品，把文件箱全封了，气血 -10。',
        afterCorrect: '她把旧办公室的钥匙交出去那天，在门口站了一会儿，才转身下楼。'
      },
      {
        plotDescription: '搬家时，一箱旧资料被翻出来，里面夹着她刚创业时的记账本。',
        line: "I'll sort out these boxes tonight. Some of it I want to keep.",
        lineCn: '这些箱子我今晚整理。有些东西我想留着。',
        prompt: "根据上下文，选出 'Sort out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'organize and deal with things', cn: '整理、理清楚', correct: true, reason: 'sort out 指把杂乱的东西整理明白。' },
          { key: 'B', en: 'throw everything away', cn: '把所有东西扔掉', correct: false, reason: '她说想留一部分。' },
          { key: 'C', en: 'send them to others', cn: '送给别人', correct: false, reason: '与句意无关。' }
        ],
        analysis: 'sort out 可以指整理物品，也可以指解决麻烦。这里两层意思都有：她在整理箱子，也在整理过去那几年。',
        wrongFeedback: '你答错了，她把东西全扔了，第二天想起来又去翻垃圾，气血 -10。',
        afterCorrect: '记账本第一页写着：今天进账八十七块，房租一千二。她看了很久，把它放进了抽屉。'
      },
      {
        plotDescription: '助理说，苏家那边又寄了一份邀请，问她怎么处理。',
        line: "I'll deal with it myself. Don't forward anything from them.",
        lineCn: '这个我自己处理。他们发来的东西别再转给我。',
        prompt: "根据上下文，选出 'Deal with' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'give it to someone else', cn: '转交给别人', correct: false, reason: '她说的是自己来。' },
          { key: 'B', en: 'pretend it never came', cn: '假装没收到', correct: false, reason: '她要处理，不是忽略。' },
          { key: 'C', en: 'handle and take care of it', cn: '处理、应对', correct: true, reason: 'deal with 指把一件事接过来解决。' }
        ],
        analysis: 'deal with 指把事情接过来处理。她说自己来，是把这条线彻底收回到手上，不让别人替她做决定。',
        wrongFeedback: '你答错了，助理以为她要回避，把信直接退回，气血 -10。',
        afterCorrect: '她拆开信，里面只有一张照片：老宅院子里那棵树开花了。'
      },
      {
        plotDescription: '助理看她脸色不对，小心翼翼地问要不要取消晚上的庆功宴。',
        line: "Chill out. It's just a photo. The party's still on.",
        lineCn: '放松点。就是一张照片。庆功宴照常。',
        prompt: "根据上下文，选出 'Chill out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'get colder', cn: '变冷了', correct: false, reason: '这是字面误解。' },
          { key: 'B', en: 'calm down and relax', cn: '放松、冷静下来', correct: true, reason: 'chill out 是劝人别紧张的常用语。' },
          { key: 'C', en: 'leave the room', cn: '离开房间', correct: false, reason: '与句意无关。' }
        ],
        analysis: 'chill out 是让人别紧张。她反过来安慰助理，说明这张照片确实动了她，只是她已经学会不让它动第二次。',
        wrongFeedback: '你答错了，助理以为她生气了，真的去取消了庆功宴，气血 -10。',
        afterCorrect: '晚上庆功宴上，她把那张照片放在桌上，说这棵树我小时候爬过。'
      }
    ],
    completeText: '第四十九章结束。春天的风吹进新办公室，墙上终于挂上了第一块牌子。她把照片压在玻璃下面，没有再提起那个人。'
  },
  {
    id: 'fl_50',
    index: 50,
    title: '第 50 章 · 我叫苏晚，晚来的晚',
    novel: '穿成假千金后我摆烂了',
    speaker: { name: '苏晚', avatar: window.VERSION_AVATARS.female_lead },
    storyText: '最后一个镜头是纪录片摄制组要拍的：清晨六点，她一个人在公司楼下的小店买早饭，然后走三站路去办公室，路上没有人替她拎包。',
    questions: [
      {
        plotDescription: '摄制组问她，上市了还自己买早饭，是不是有点刻意。',
        line: "I still snack on the same crackers. Nothing about that changed.",
        lineCn: '我还是吃那种一样的饼干当零食。这一点没变。',
        prompt: "根据上下文，选出 'Snack' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'cook a full meal', cn: '做一顿正餐', correct: false, reason: '她吃的是饼干。' },
          { key: 'B', en: 'skip eating', cn: '不吃东西', correct: false, reason: '和原意相反。' },
          { key: 'C', en: 'eat a small amount between meals', cn: '吃零食、吃点小东西', correct: true, reason: 'snack 指正餐之外吃点东西。' }
        ],
        analysis: 'snack 是正餐之外吃点东西，也可作名词指零食。她用一包饼干说明自己没变，比任何不忘初心的大话都实在。',
        wrongFeedback: '你答错了，苏晚把 snack 当成正餐，被拍下吃了两碗面，气血 -10。',
        afterCorrect: '她把饼干袋折好放进包里，说这个牌子从我租房那年就在吃。'
      },
      {
        plotDescription: '开拍前，化妆师递来一瓶水，说今天要连着拍到中午。',
        line: "Remind me to hydrate every hour. I forget when I'm talking.",
        lineCn: '提醒我每小时喝水。我一说话就忘。',
        prompt: "根据上下文，选出 'Hydrate' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'eat something sweet', cn: '吃点甜的', correct: false, reason: '她说的是喝水。' },
          { key: 'B', en: 'drink enough water', cn: '补水、喝水', correct: true, reason: 'hydrate 指给身体补充水分。' },
          { key: 'C', en: 'take a short break', cn: '短暂休息', correct: false, reason: '这里说的不是休息。' }
        ],
        analysis: 'hydrate 是补充水分。她需要别人提醒自己喝水，这个细节把她从女老板拉回了一个会忘记照顾自己的普通人。',
        wrongFeedback: '你答错了，化妆师以为她要补妆，一直在补粉，气血 -10。',
        afterCorrect: '拍摄到第三个小时，她真的停下来喝了半瓶。'
      },
      {
        plotDescription: '中场休息，她从椅子上站起来，活动了一下肩。',
        line: "I need to stretch. Sitting for hours makes my back hurt.",
        lineCn: '我得拉伸一下。坐几个小时背就疼。',
        prompt: "根据上下文，选出 'Stretch' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'extend your body to relax muscles', cn: '拉伸、伸展身体', correct: true, reason: 'stretch 指伸展身体放松肌肉。' },
          { key: 'B', en: 'make something longer in time', cn: '拉长时间', correct: false, reason: '这里说的是身体动作。' },
          { key: 'C', en: 'take a nap', cn: '打盹', correct: false, reason: '她说的是活动身体。' }
        ],
        analysis: 'stretch 在这里是伸展身体。这个动作很小，却说明她的生活终于从熬着过，变成了好好过。',
        wrongFeedback: '你答错了，她一直坐着没动，拍到下午肩就僵了，气血 -10。',
        afterCorrect: '她把手举过头顶，骨头响了一声，全组都笑了。'
      },
      {
        plotDescription: '最后一个镜头，导演让她对着镜头说一句话，她想了很久。',
        line: "Sorry, I zoned out for a second. Let's do it again.",
        lineCn: '抱歉，我刚走神了一下。我们再来一次。',
        prompt: "根据上下文，选出 'Zoned out' 在这句话里最准确的意思。",
        options: [
          { key: 'A', en: 'fell asleep deeply', cn: '睡得很沉', correct: false, reason: '她只是走神。' },
          { key: 'B', en: 'got very angry', cn: '非常生气', correct: false, reason: '语气很平静。' },
          { key: 'C', en: 'stopped paying attention', cn: '走神、发呆', correct: true, reason: 'zone out 指注意力飘走、人不在状态。' }
        ],
        analysis: 'zone out 指注意力飘走。她说想重新来一次，是因为她要说的那句话，不想在走神的状态下说出口。',
        wrongFeedback: '你答错了，她说自己睡着了，导演让她先休息，气血 -10。',
        afterCorrect: '她重新看向镜头，说：我叫苏晚，晚来的晚，晚来的晚。'
      }
    ],
    completeText: '第五十章结束。剧终。那棵树开了花，她终于把姓还了回去，把名字留给了自己。'
  }
];

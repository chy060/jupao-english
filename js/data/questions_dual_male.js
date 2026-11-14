/**
 * 原创剧情题库 —— 耽美 ·《顶流和他的私人医生》
 * 50 章 × 4 题 = 200 题
 * 第 k 章使用规格文件第 k 行的 4 个目标词
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.dual_male = [
  {
    id: 'dm_1',
    index: 1,
    title: '第 1 章 · 他在监视器后倒下',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '雨夜的片场，MV 已经拍到第三十六个小时。江予站在监视器后看回放，眼前忽然一黑，整个人顺着折叠椅滑了下去。顾清和赶到时，白大褂上还带着医院消毒水的味道。',
    questions: [
      {
        plotDescription: '顾清和蹲下来照他的瞳孔，第一句话就不客气。',
        line: "I have to confront you about this. You fainted twice this week and told nobody.",
        lineCn: '我必须跟你把这件事摊开说。你这周晕了两次，却谁都没告诉。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'avoid the topic politely', cn: '礼貌地回避话题', correct: false, reason: '回避是把话咽回去，而他一开口就把事情摆到了桌面上。' },
          { key: 'B', en: 'face it and say it directly', cn: '当面提出、直接对质', correct: true, reason: 'confront 指正面把事情挑明，顾清和正是在逼他承认。' },
          { key: 'C', en: 'comfort someone softly', cn: '轻声安慰', correct: false, reason: '他的语气是质问，不是安慰，江予也没有被安慰到。' }
        ],
        analysis: 'confront 的核心是「正面碰上」，不带情绪也可以很锋利。顾清和没有绕弯，直接把晕倒这件事摊开。',
        wrongFeedback: '你选错了，江予顺势把话题岔到天气，顾清和合上病历本，走廊里的空气一下子凉了。气血 -10',
        afterCorrect: '江予盯着他看了两秒，忽然笑了：「顾医生，你管得真宽。」顾清和没笑，只把他的手腕翻过来，数脉搏。'
      },
      {
        plotDescription: '电话响了，经纪人在那头压低声音，说不能让私人医生跟组。',
        line: "My manager wants me to cut ties with you. He says a doctor on set looks bad.",
        lineCn: '我经纪人想让我跟你断绝往来。他说组里跟着个医生，看着不像话。',
        prompt: "根据上下文，选出画线词汇 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'end the relationship completely', cn: '断绝关系、彻底断掉往来', correct: true, reason: 'cut ties 字面是剪断纽带，指把关系彻底切断。' },
          { key: 'B', en: 'renew a contract', cn: '续签合同', correct: false, reason: '续签是把合作延长，和断绝往来正好相反。' },
          { key: 'C', en: 'work more closely', cn: '合作得更紧密', correct: false, reason: '经纪人是在赶人，不是要拉近关系，方向弄反了。' }
        ],
        analysis: 'cut ties 是政治和职场新闻里的高频搭配，意思是彻底终止联系。经纪人怕的不是医生，是「病人」这个标签。',
        wrongFeedback: '你选错了，江予把断绝往来听成了加深合作，电话那头沉默了三秒。气血 -10',
        afterCorrect: '顾清和把听诊器收进包里，声音很轻：「那就断。病历我留一份，你自己看着办。」江予伸手拉住了他的袖口。'
      },
      {
        plotDescription: '江予望着窗外的雨，说这场巡演压着四十个人的饭碗。',
        line: "If I mess up this tour, forty people lose their jobs.",
        lineCn: '如果我把这次巡演搞砸了，四十个人就要失业。',
        prompt: "根据上下文，选出画线词汇 'Mess up' 最准确的意思。",
        options: [
          { key: 'A', en: 'ruin something by a mistake', cn: '搞砸、因失误把事情弄乱', correct: true, reason: 'mess up 强调因为出错而把事情弄乱，正对应他的担心。' },
          { key: 'B', en: 'cancel on purpose', cn: '故意取消', correct: false, reason: '他是怕自己撑不住，不是想故意取消巡演。' },
          { key: 'C', en: 'postpone the schedule', cn: '推迟日程', correct: false, reason: '推迟只是时间往后挪，mess up 说的是把事情弄坏。' }
        ],
        analysis: 'mess up 是口语里最常用的「搞砸」，不一定是故意的。他怕的是身体撑不住，连累整组人。',
        wrongFeedback: '你选错了，江予被理解成要故意取消巡演，脸色一下白了。气血 -10',
        afterCorrect: '顾清和看着他的侧脸：「四十个人重要，你自己就不重要？」江予没回答，雨刷在玻璃上来回刮。'
      },
      {
        plotDescription: '车停在医院门口，江予没有下车，声音低得几乎听不见。',
        line: "I can't screw up again. Last time I almost lost my voice for good.",
        lineCn: '我不能再弄砸一次了。上次我差点永远失去声音。',
        prompt: "根据上下文，选出画线词汇 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'recover quickly', cn: '很快恢复', correct: false, reason: '他不是在说恢复，而是在说自己把身体彻底弄坏了。' },
          { key: 'B', en: 'keep a secret', cn: '保守秘密', correct: false, reason: '这句话里没有任何保密的意思，只有懊悔。' },
          { key: 'C', en: 'ruin something badly, often by your own fault', cn: '彻底弄糟、自己把自己坑了', correct: true, reason: 'screw up 比 mess up 更重，常指自己作死把事弄坏，正合他的失声往事。' }
        ],
        analysis: 'screw up 是重口语的说法，带着「自己把自己坑了」的自责。他说的是当年硬撑导致的失声。',
        wrongFeedback: '你选错了，江予以为你在说很快恢复，苦笑了一下，推门走进雨里。气血 -10',
        afterCorrect: '顾清和跟着下车，把伞举到他头顶：「那就别一个人扛。」伞面很小，两个人的肩膀都湿了一半。'
      }
    ],
    completeText: '第一章结束。他第一次没有把「我没事」说出口，而那句话，被另一个人听见了。'
  },
  {
    id: 'dm_2',
    index: 2,
    title: '第 2 章 · 凌晨三点的急诊室',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '急诊室只开了一排灯。江予坐在观察床上，湿透的衬衫还没换。顾清和把一杯热水塞进他手里，自己靠在墙边，看起来很累。',
    questions: [
      {
        plotDescription: '江予捧着水杯，问他为什么半夜会出现在片场。',
        line: "You want me to spill the tea? Your manager called me four times.",
        lineCn: '你想让我爆料？你经纪人给我打了四个电话。',
        prompt: "根据上下文，选出画线词汇 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'make some tea', cn: '泡点茶', correct: false, reason: '这里是「把内情说出来」，不是真的去泡茶。' },
          { key: 'B', en: 'share the gossip or the inside story', cn: '吃瓜、把内情抖出来', correct: true, reason: 'spill the tea 是网络口语，指把八卦或内幕讲出来，正合他的回答。' },
          { key: 'C', en: 'keep it a secret', cn: '保密', correct: false, reason: '他接下来就把原因说了，和保密恰好相反。' }
        ],
        analysis: 'spill the tea 字面是「把茶洒出来」，实际是「把内情抖出来」。顾清和用这个词，是在半开玩笑地交代原因。',
        wrongFeedback: '你选错了，江予真的以为他要去泡茶，指了指饮水机：「那我要加糖。」气血 -10',
        afterCorrect: '江予笑了一下，笑到一半又收住：「他不该打给你。」顾清和说：「他打的时候在哭。」'
      },
      {
        plotDescription: '江予忽然坐直，把杯子放在床边。',
        line: "Swear to god you won't tell the press about tonight.",
        lineCn: '你对天发誓，今晚的事不告诉媒体。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'tell a small lie', cn: '撒个小谎', correct: false, reason: '他是在求一个承诺，不是在撒谎。' },
          { key: 'B', en: 'make a very serious promise', cn: '对天发誓、郑重承诺', correct: true, reason: 'swear to god 用来强调承诺的分量，正是江予要的保证。' },
          { key: 'C', en: 'ask a question', cn: '问一个问题', correct: false, reason: '这是一句要求对方保证的话，不是提问。' }
        ],
        analysis: 'swear to god 是口语里的加强版承诺，等于「我拿最重的东西担保」。江予怕的不是自己，是外面那群人。',
        wrongFeedback: '你选错了，江予以为你在敷衍，握着杯子的手指节发白。气血 -10',
        afterCorrect: '顾清和举起三根手指，很认真地发了誓。江予看着他，忽然觉得这画面有点傻，又有点好看。'
      },
      {
        plotDescription: '江予追问，那他为什么真的来了。',
        line: "Whatever. Someone had to drag you off that stage.",
        lineCn: '随便吧。总得有人把你从那个台上拖下来。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'absolutely not', cn: '绝对不行', correct: false, reason: '他不是在拒绝，而是在用一句轻描淡写掩饰关心。' },
          { key: 'B', en: 'well done', cn: '干得好', correct: false, reason: '这里没有任何称赞的意思，语气是敷衍。' },
          { key: 'C', en: 'it does not matter, I do not care', cn: '随便吧、无所谓', correct: true, reason: 'whatever 在这里是嘴上敷衍，其实在遮掩自己在乎。' }
        ],
        analysis: 'whatever 常用来结束话题，语气越轻，往往越是在藏情绪。顾清和说完这句，反而暴露了自己为什么来。',
        wrongFeedback: '你选错了，顾清和听见「绝对不行」，愣住，以为自己说错了话。气血 -10',
        afterCorrect: '江予「哦」了一声，把这句话在心里翻来覆去。他忽然发现，被人拖下来这件事，好像也没那么难堪。'
      },
      {
        plotDescription: '临走前，江予叫住他，问明天还来不来。',
        line: "Seriously? You think I would drive across the city for nothing?",
        lineCn: '你认真的？你觉得我会白跑半座城？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'are you for real? (a doubting, slightly annoyed question)', cn: '你认真的吗？', correct: true, reason: 'seriously 在这里是反问，带点好笑和不耐烦。' },
          { key: 'B', en: 'of course not', cn: '当然不是', correct: false, reason: '他其实是说「我当然会来」，不是否认。' },
          { key: 'C', en: 'thank you', cn: '谢谢你', correct: false, reason: '这句话里没有道谢，只有被逗到的反问。' }
        ],
        analysis: 'Seriously? 单独成句时，通常是「你认真的吗」，语气可轻可重。顾清和是在用反问回答「明天还来吗」。',
        wrongFeedback: '你选错了，江予以为你在道谢，很客气地回了一句不客气，气氛一下变得奇怪。气血 -10',
        afterCorrect: '顾清和说完就走了，白大褂的下摆扫过门框。江予盯着那扇门，第一次觉得「明天」这个词有了重量。'
      }
    ],
    completeText: '第二章结束。凌晨的急诊室灯灭了一半，江予坐在原地，把「明天」念了两遍。'
  },
  {
    id: 'dm_3',
    index: 3,
    title: '第 3 章 · 走廊里的第三个人',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '第二天一早，经纪人周哥赶到医院。他看都没看检查单，先指着顾清和，说医生不该多嘴。走廊很窄，护士推着车从他们中间挤过去。',
    questions: [
      {
        plotDescription: '江予站起来，挡在两个人中间。',
        line: "My bad. I called him. He didn't come on his own.",
        lineCn: '我的锅。是我叫他来的，不是他自己跑来。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my turn', cn: '轮到我', correct: false, reason: '他不是在抢顺序，而是在把责任揽到自己身上。' },
          { key: 'B', en: 'my fault, I am sorry', cn: '我的锅、是我的错', correct: true, reason: 'my bad 是口语里最轻的认错方式，正对应他揽责。' },
          { key: 'C', en: 'my pleasure', cn: '我的荣幸', correct: false, reason: '这里没有半点荣幸，只有挡在前面的姿态。' }
        ],
        analysis: 'my bad 比 sorry 更随意，常用来快速认下一个小错。江予用它，是想把火从顾清和身上引开。',
        wrongFeedback: '你选错了，周哥以为江予在说「轮到我了」，火气更大了。气血 -10',
        afterCorrect: '周哥噎了一下，把火转向检查单。江予没退，站得比刚才直。'
      },
      {
        plotDescription: '周哥说医生越界，江予把手插进口袋，声音很平。',
        line: "Don't blame him. I chose to keep working.",
        lineCn: '别把锅甩给他。是我自己选择继续工作。',
        prompt: "根据上下文，选出画线词汇 'Blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'say someone is responsible for something bad', cn: '甩锅、把责任归到某人身上', correct: true, reason: 'blame 就是把过错算到别人头上，江予是在阻止这件事。' },
          { key: 'B', en: 'thank someone', cn: '感谢某人', correct: false, reason: '语气是制止，不是道谢。' },
          { key: 'C', en: 'examine someone', cn: '给某人做检查', correct: false, reason: '这里说的是责任，不是检查身体。' }
        ],
        analysis: 'blame 的重点是「归责」，常用 blame sb for sth。江予一句别怪他，把责任全接了过去。',
        wrongFeedback: '你选错了，江予的话被听成感谢，周哥当场愣住，火气反而更大。气血 -10',
        afterCorrect: '周哥盯着他：「你以前从不顶嘴。」江予说：「以前没人值得我顶。」'
      },
      {
        plotDescription: '顾清和不想在走廊里吵，抬手看了一眼时间。',
        line: "We can argue about the tour later. Sit down first.",
        lineCn: '巡演的事我们可以晚点争。你先坐下。',
        prompt: "根据上下文，选出画线词汇 'Argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'agree completely', cn: '完全同意', correct: false, reason: '他说的是「晚点再争」，说明现在意见并不一致。' },
          { key: 'B', en: 'joke around', cn: '开玩笑', correct: false, reason: '眼下的气氛一点也不轻松，没人有心情开玩笑。' },
          { key: 'C', en: 'quarrel or disagree in a heated way', cn: '争吵、带着情绪争论', correct: true, reason: 'argue 指双方各执一词地争，正合他压着火气的语气。' }
        ],
        analysis: 'argue 既可以指理性辩论，也可以指带着情绪的争吵。这里两人都在压着声音，火却没消。',
        wrongFeedback: '你选错了，江予以为你在说完全同意，立刻要把巡演定下来。气血 -10',
        afterCorrect: '江予坐下了，但没有靠回椅背。他盯着顾清和白大褂袖口的一道旧折痕，忽然问：「你昨晚睡了吗？」'
      },
      {
        plotDescription: '护士来问身份证号，周哥的嗓门一下提起来。',
        line: "He yelled at the nurse. That is why I stepped in.",
        lineCn: '他冲护士大喊。所以我才站出来的。',
        prompt: "根据上下文，选出画线词汇 'Yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'whisper', cn: '小声耳语', correct: false, reason: '如果是耳语，江予就不会站出来制止了。' },
          { key: 'B', en: 'shout loudly', cn: '大喊、吼叫', correct: true, reason: 'yell 指音量很大的喊叫，正是周哥对护士做的事。' },
          { key: 'C', en: 'laugh', cn: '大笑', correct: false, reason: '现场没有人笑，护士被吼得低下了头。' }
        ],
        analysis: 'yell at sb 是「冲某人大喊」，通常带指责意味。江予受不了的不是声音大，是有人被这样对待。',
        wrongFeedback: '你选错了，江予以为你在说大笑，皱着眉看向护士站，气氛更僵了。气血 -10',
        afterCorrect: '顾清和看了他一眼，那一眼里有点意外。江予别开脸：「我只是不喜欢有人被吼。」'
      }
    ],
    completeText: '第三章结束。走廊尽头的窗户被推开，风灌进来，把三个人的影子吹得忽长忽短。'
  },
  {
    id: 'dm_4',
    index: 4,
    title: '第 4 章 · 他不肯承认的那张片子',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '听力检查结果出来那天，江予把那张片子折成两半，塞回信封。顾清和站在门口，看着他做完这一切，没有出声。',
    questions: [
      {
        plotDescription: '顾清和把信封重新抽出来，摊在桌上。',
        line: "I deny it. My ears are fine. The machine is broken.",
        lineCn: '我不承认。我的耳朵没事，是机器坏了。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'refuse to admit something is true', cn: '否认、拒不承认', correct: true, reason: 'deny 就是拒绝承认事实，正对应他反复说耳朵没事。' },
          { key: 'B', en: 'confirm', cn: '确认', correct: false, reason: '他做的是相反的動作，把结果折起来不认。' },
          { key: 'C', en: 'explain in detail', cn: '详细解释', correct: false, reason: '他没有解释片子，只是把结论推给机器。' }
        ],
        analysis: 'deny 后面常接事实或指控，表示「拒不承认」。江予否认的不是一张纸，是自己可能再也唱不了这件事。',
        wrongFeedback: '你选错了，江予听见「确认」两个字，脸色沉下去，把片子又折了一道。气血 -10',
        afterCorrect: '顾清和没有揭穿他，只把片子压在书下：「那就先放着。放一夜不会更坏。」'
      },
      {
        plotDescription: '沉默了很长一段，江予忽然开口。',
        line: "Then let me apologize for what I said last night.",
        lineCn: '那让我为昨晚说的话道歉。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'complain about something', cn: '抱怨某事', correct: false, reason: '他是要认错，不是要抱怨。' },
          { key: 'B', en: 'say sorry', cn: '道歉、说对不起', correct: true, reason: 'apologize for 是为某事道歉，正是他接下来要做的事。' },
          { key: 'C', en: 'make a promise', cn: '作出承诺', correct: false, reason: '他谈的是已经说出口的话，不是未来的保证。' }
        ],
        analysis: 'apologize for sth 是固定搭配，为某件事道歉。江予的道歉很轻，却是他第一次主动低头。',
        wrongFeedback: '你选错了，顾清和把道歉听成抱怨，转身去收器械，背影有点僵。气血 -10',
        afterCorrect: '顾清和背对着他停了两秒：「我接受。不过你真正该道歉的人，是你自己。」'
      },
      {
        plotDescription: '江予愣了一下，问那句话是什么意思。',
        line: "I forgive you. But you have to forgive yourself too.",
        lineCn: '我原谅你。但你也得原谅你自己。',
        prompt: "根据上下文，选出画线词汇 'Forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'stop being angry at someone for what they did', cn: '原谅、不再追究', correct: true, reason: 'forgive 指放下对某人的怒气，正对应他说「我原谅你」。' },
          { key: 'B', en: 'punish', cn: '惩罚', correct: false, reason: '如果他选择惩罚，就不会说「我原谅你」。' },
          { key: 'C', en: 'forget completely', cn: '完全忘记', correct: false, reason: '原谅不等于忘记，伤害还在，只是不再追着要账。' }
        ],
        analysis: 'forgive 是主动放下怒气，和 forget 不同。顾清和的意思是：别再拿当年的事惩罚自己。',
        wrongFeedback: '你选错了，江予把原谅听成惩罚，肩膀一下绷紧。气血 -10',
        afterCorrect: '江予低头看着自己的手：「我原谅不了。那天是我自己签的字，谁也没逼我。」'
      },
      {
        plotDescription: '周哥在门外等电梯，回头看了顾清和一眼。',
        line: "Zhou holds a grudge. He won't forget that you talked back.",
        lineCn: '周哥记仇。你顶嘴这件事他不会忘。',
        prompt: "根据上下文，选出画线词汇 'Grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small favor', cn: '一个小忙', correct: false, reason: '周哥的态度是怨，不是帮忙，语境完全相反。' },
          { key: 'B', en: 'a good memory for details', cn: '记性很好', correct: false, reason: '这里有情绪，不是单纯记得清楚，而是记恨。' },
          { key: 'C', en: 'a lasting resentment kept against someone', cn: '记仇、长期的怨气', correct: true, reason: 'hold a grudge 是固定搭配，指长期记恨某人。' }
        ],
        analysis: 'grudge 是「记仇」，常和 hold 搭配。顾清和提醒的不是周哥记性好，而是他心胸窄。',
        wrongFeedback: '你选错了，江予以为你在夸周哥记性好，第二天就把人又得罪了一遍。气血 -10',
        afterCorrect: '江予无所谓地笑：「让他记。」顾清和却没笑：「记仇的人，往往等得起。」'
      }
    ],
    completeText: '第四章结束。那张被折过的片子一直压在书下，像一个没人敢碰的倒计时。'
  },
  {
    id: 'dm_5',
    index: 5,
    title: '第 5 章 · 病历被卖出去的那天',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '凌晨，营销号放出了江予的听力报告，连医生签名都在。周哥的电话关机，工作室的群里没有人说话。窗外的天刚泛白。',
    questions: [
      {
        plotDescription: '顾清和把手机推过来，屏幕上是一张完整的报告照片。',
        line: "He betrayed me. That report was in his bag.",
        lineCn: '他背叛了我。那份报告本来在他的包里。',
        prompt: "根据上下文，选出画线词汇 'Betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'to break someone\'s trust by harming them', cn: '背叛、辜负信任并伤害对方', correct: true, reason: 'betray 指出卖信任自己的人，正对应报告被泄露这件事。' },
          { key: 'B', en: 'support in secret', cn: '暗中支持', correct: false, reason: '泄露病历是伤害，不可能是支持。' },
          { key: 'C', en: 'forget a promise', cn: '忘记一个承诺', correct: false, reason: '这里不是忘记，而是拿着他的隐私去换钱。' }
        ],
        analysis: 'betray 的核心是「辜负信任并造成伤害」。江予说这三个字时，声音比平时还平。',
        wrongFeedback: '你选错了，江予把背叛当成支持，还替对方找了一个理由。气血 -10',
        afterCorrect: '顾清和看着他：「你可以难过。不用先替别人开脱。」江予把手机关了，屋子里只剩冰箱的响声。'
      },
      {
        plotDescription: '江予拨了三次电话，终于接通，对方说自己弄丢了文件。',
        line: "He looked me in the eye and said he lost it. Liar.",
        lineCn: '他看着我的眼睛说文件丢了。骗子。',
        prompt: "根据上下文，选出画线词汇 'Liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'a careful person', cn: '一个谨慎的人', correct: false, reason: '谨慎不是这里的问题，问题是他当面说了假话。' },
          { key: 'B', en: 'someone who tells lies', cn: '骗子、说谎的人', correct: true, reason: 'liar 直接指说谎的人，正对应那句「文件丢了」。' },
          { key: 'C', en: 'a witness', cn: '证人', correct: false, reason: '他不是旁观的证人，而是说谎的当事人。' }
        ],
        analysis: 'liar 是带指责意味的「骗子」，比说 he lies 更重。江予用这个词，说明最后一点情面也没了。',
        wrongFeedback: '你选错了，江予把骗子听成证人，还问对方愿不愿意出面作证。气血 -10',
        afterCorrect: '电话被挂断。江予握着手机，很久才说：「我以前觉得他至少对我是真的。」'
      },
      {
        plotDescription: '顾清和翻出三年前的合照，照片里两个人在笑。',
        line: "That smile of his was fake from the first day.",
        lineCn: '他那个笑，从第一天起就是假的。',
        prompt: "根据上下文，选出画线词汇 'Fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'warm and real', cn: '温暖而真诚的', correct: false, reason: '他是在否定那份真诚，不是在肯定。' },
          { key: 'B', en: 'shy', cn: '害羞的', correct: false, reason: '照片里的人笑得很自然，不像害羞，江予说的是真假。' },
          { key: 'C', en: 'not genuine, pretended', cn: '假的、装出来的', correct: true, reason: 'fake 指不是真的，正对应他说那个笑从头到尾都在演。' }
        ],
        analysis: 'fake 可以形容人、笑、感情，核心是「不真」。江予否定的不是一张照片，是自己这五年的判断。',
        wrongFeedback: '你选错了，江予以为你在夸那个笑温暖，愣住了，随后把手机关掉。气血 -10',
        afterCorrect: '顾清和把照片扣在桌上：「真假已经不重要了。重要的是你现在还信不信自己。」'
      },
      {
        plotDescription: '营销号的配文里写着「兄弟反目」，江予看了很久。',
        line: "He called himself my brother. What a hypocrite.",
        lineCn: '他一直自称是我哥。真是个伪君子。',
        prompt: "根据上下文，选出画线词汇 'Hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'a generous man', cn: '一个慷慨的人', correct: false, reason: '他是在骂人，不是在称赞，语气完全相反。' },
          { key: 'B', en: 'someone who pretends to have good values', cn: '伪君子、假装高尚的人', correct: true, reason: 'hypocrite 指嘴上讲情义、实际做另一套的人，正合他的愤怒。' },
          { key: 'C', en: 'a strict teacher', cn: '严厉的老师', correct: false, reason: '这里没有任何教导关系，只有被辜负的兄弟情。' }
        ],
        analysis: 'hypocrite 的重点是「假装」，说一套做一套。江予最恨的不是被卖，是那个人还一直自称哥哥。',
        wrongFeedback: '你选错了，江予以为你在夸对方慷慨，笑了一声，笑得很难看。气血 -10',
        afterCorrect: '顾清和把手机拿走：「别看了。」江予说：「我想看。我要记住他长什么样。」'
      }
    ],
    completeText: '第五章结束。天亮的时候，江予第一次主动把那份报告转发给了律师。'
  },
  {
    id: 'dm_6',
    index: 6,
    title: '第 6 章 · 他一直说你记错了',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '江予在诊室里坐到天黑。他说起过去五年，说起那些「你记错了」「没人会信你」的夜晚。诊室的钟走得很慢。',
    questions: [
      {
        plotDescription: '江予把袖子撸上去，手腕上有一道旧疤。',
        line: "He backstabbed me the week I signed with him.",
        lineCn: '我和他签约的那个星期，他就背刺了我。',
        prompt: "根据上下文，选出画线词汇 'Backstab' 最准确的意思。",
        options: [
          { key: 'A', en: 'betray someone who trusts you', cn: '背刺、在背后捅信任自己的人一刀', correct: true, reason: 'backstab 指被信任的人从背后伤害，正对应签约那周的旧事。' },
          { key: 'B', en: 'praise someone publicly', cn: '公开称赞某人', correct: false, reason: '背刺和称赞完全相反，方向弄反了。' },
          { key: 'C', en: 'negotiate a deal', cn: '谈一笔生意', correct: false, reason: '这里说的是伤害，不是谈判。' }
        ],
        analysis: 'backstab 字面是「从背后捅刀」，专指被自己人出卖。江予用它，是因为最疼的永远来自信任的人。',
        wrongFeedback: '你选错了，江予以为你在说公开称赞，冷笑了一下，不再开口。气血 -10',
        afterCorrect: '顾清和没有追问疤的来历，只把袖子轻轻拉回去：「不用给我看证据。」'
      },
      {
        plotDescription: '江予说，那些年他几乎以为自己疯了。',
        line: "He gaslit me for years. I thought I was losing my mind.",
        lineCn: '他操控了我好几年。我一直以为自己疯了。',
        prompt: "根据上下文，选出画线词汇 'Gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm someone down', cn: '安抚某人', correct: false, reason: '安抚是让人安心，而这里的结果是他怀疑自己。' },
          { key: 'B', en: 'manipulate someone into doubting their own reality', cn: 'PUA、让人怀疑自己的记忆和判断', correct: true, reason: 'gaslight 正是让对方怀疑自己是不是疯了，和后一句完全对应。' },
          { key: 'C', en: 'tell the plain truth', cn: '说出最直白的真相', correct: false, reason: '真相会让人清醒，不是让人怀疑自己。' }
        ],
        analysis: 'gaslight 来自舞台剧，指长期否定对方的感受，让对方怀疑现实。江予的「我以为我疯了」就是最典型的后果。',
        wrongFeedback: '你选错了，江予以为你在说安抚，摇着头说：「没人安抚过我。」气血 -10',
        afterCorrect: '顾清和把水杯推近一点：「你没有疯。你只是被一个人反复告诉你有问题。」'
      },
      {
        plotDescription: '江予抬头，问他是不是所有人都能看出来。',
        line: "He manipulated every person around me, one by one.",
        lineCn: '他把我身边的每一个人，一个一个都操控了。',
        prompt: "根据上下文，选出画线词汇 'Manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'introduce people to each other', cn: '给人互相介绍', correct: false, reason: '介绍是建立关系，不是控制别人。' },
          { key: 'B', en: 'protect someone from harm', cn: '保护某人不受伤害', correct: false, reason: '他做的是伤害，不是保护。' },
          { key: 'C', en: 'control someone cleverly and unfairly', cn: '操控、用手段摆布别人', correct: true, reason: 'manipulate 指用隐蔽手段控制他人，正合「一个一个」的说法。' }
        ],
        analysis: 'manipulate 强调的是「暗中摆布」，不是明面上的命令。江予失去的不只是钱，是整张人际网。',
        wrongFeedback: '你选错了，江予以为你在说他保护了所有人，眼里那点光暗下去。气血 -10',
        afterCorrect: '顾清和问：「那现在呢？还有谁是他的人？」江予想了很久，说：「我不知道。这才是最可怕的。」'
      },
      {
        plotDescription: '顾清和把一张纸推过去，上面写着三个字：说不。',
        line: "You are not a push over. Say no to him, once.",
        lineCn: '你不是老好人。对他，说一次不。',
        prompt: "根据上下文，选出画线词汇 'Push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who is easy to take advantage of', cn: '老好人、容易被拿捏的人', correct: true, reason: 'push over 指谁都能推一把的人，正对应顾清和要他别再退让。' },
          { key: 'B', en: 'a strong leader', cn: '强势的领导者', correct: false, reason: '如果他是强势的人，就不需要被这样提醒了。' },
          { key: 'C', en: 'a difficult client', cn: '难缠的客户', correct: false, reason: '这里说的是性格，不是身份。' }
        ],
        analysis: 'push over 指那种别人一推就让的人，也就是老好人。顾清和不是骂他，是要他把边界立起来。',
        wrongFeedback: '你选错了，江予以为你在夸他强势，苦笑：「我要是强势，就不会到今天。」气血 -10',
        afterCorrect: '江予把那张纸折好，放进钱包最里层。他说：「我试试。可能一次只能说不一个字。」'
      }
    ],
    completeText: '第六章结束。走出诊室时，江予把手机里那个备注改回了全名，不再叫哥。'
  },
  {
    id: 'dm_7',
    index: 7,
    title: '第 7 章 · 发布会前十分钟',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '澄清发布会定在下午三点。后台很窄，江予对着镜子，手一直在抖。顾清和把一条深色领带递给他，站在他身后。',
    questions: [
      {
        plotDescription: '顾清和替他压住发抖的手。',
        line: "Stand up for yourself today. I will be in the third row.",
        lineCn: '今天为你自己站出来。我会坐在第三排。',
        prompt: "根据上下文，选出画线词汇 'Stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'stand in a line', cn: '排队站好', correct: false, reason: '这里是「为某人撑腰」，不是排队的意思。' },
          { key: 'B', en: 'defend someone or something you believe in', cn: '捍卫、为某人撑腰', correct: true, reason: 'stand up for 指站出来维护自己或别人，正合今天这场发布会的意义。' },
          { key: 'C', en: 'stand aside and watch', cn: '站到一边旁观', correct: false, reason: '旁观和站出来正好相反，他不是要看戏。' }
        ],
        analysis: 'stand up for 是「为……站出来」，比 defend 更有姿态感。顾清和给他的是底气，不是台词。',
        wrongFeedback: '你选错了，江予以为你要他去排队，茫然地看向后台门口。气血 -10',
        afterCorrect: '江予把领带接过来，系了两次都没系好。顾清和伸手替他系上，指尖离喉结只有一寸。'
      },
      {
        plotDescription: '镜子里，江予看着自己，声音很低。',
        line: "For the first time, I want to fight back.",
        lineCn: '这是第一次，我想反击。',
        prompt: "根据上下文，选出画线词汇 'Fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'run away from trouble', cn: '躲开麻烦', correct: false, reason: '他说的是第一次不想躲，和逃避相反。' },
          { key: 'B', en: 'give in quietly', cn: '安静地让步', correct: false, reason: '让步是退，反击是进。' },
          { key: 'C', en: 'resist and counterattack', cn: '反击、还手', correct: true, reason: 'fight back 指被攻击后反过来还击，正是他要做的事。' }
        ],
        analysis: 'fight back 强调「被打之后还手」，带着被逼到墙角的意味。江予这句说得很轻，却是全章最硬的一句。',
        wrongFeedback: '你选错了，江予以为你在教他躲开，刚聚起来的那口气又散了。气血 -10',
        afterCorrect: '顾清和把领带结推紧：「记住，你不是去求他们原谅。你是去把话说完。」'
      },
      {
        plotDescription: '工作人员探头进来，说记者问到医生的事要不要挡。',
        line: "I will defend you if they ask about the report.",
        lineCn: '如果他们问起那份报告，我会替你辩护。',
        prompt: "根据上下文，选出画线词汇 'Defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'speak in support of someone', cn: '辩护、为某人说话', correct: true, reason: 'defend 指在别人质疑时站出来支持，正对应记者提问的场景。' },
          { key: 'B', en: 'accuse someone publicly', cn: '公开指责某人', correct: false, reason: '指责和辩护是相反的两件事。' },
          { key: 'C', en: 'avoid the question', cn: '回避问题', correct: false, reason: '他要做的是开口，不是绕开。' }
        ],
        analysis: 'defend 不只是武力防御，也可以是为某人辩护。江予不想让顾清和替自己背锅。',
        wrongFeedback: '你选错了，江予以为你要公开指责他，立刻说不用你出面。气血 -10',
        afterCorrect: '江予摇头：「你别说话。你一说，他们就会写你。」顾清和说：「那就写。」'
      },
      {
        plotDescription: '上台前，闪光灯已经在帘子外亮起来。',
        line: "Ignore the flashes. Look at me.",
        lineCn: '别管闪光灯。看着我。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'stare at something', cn: '盯着某样东西看', correct: false, reason: '他恰恰是让江予别去看那些灯。' },
          { key: 'B', en: 'count carefully', cn: '仔细数', correct: false, reason: '这里没有数的动作，只有让他把注意力移开。' },
          { key: 'C', en: 'pay no attention to', cn: '无视、不去理会', correct: true, reason: 'ignore 指故意不去理会，正是对闪光灯该有的态度。' }
        ],
        analysis: 'ignore 是主动把注意力移开，不是看不见。顾清和把自己变成那个可以看的点。',
        wrongFeedback: '你选错了，江予开始数闪光灯的次数，数到第七下就不出声了。气血 -10',
        afterCorrect: '帘子掀开，江予走上台。第一排的灯太亮，他却在第三排找到了那个人。'
      }
    ],
    completeText: '第七章结束。他说完了准备好的每一句话，最后加了一句：我不会再替别人隐瞒我的病。'
  },
  {
    id: 'dm_8',
    index: 8,
    title: '第 8 章 · 他手里还有一段录音',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '发布会结束的当晚，周哥发来一段录音。前半段是江予的声音，后半段是长久的安静。文件只有一分钟。',
    questions: [
      {
        plotDescription: '录音播完，江予按了暂停，屋子里安静得能听见电流声。',
        line: "His silence on the phone was worse than anything he said.",
        lineCn: '他在电话里的沉默，比他说过的任何话都难听。',
        prompt: "根据上下文，选出画线词汇 'Silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'complete quiet, no sound', cn: '沉默、完全的安静', correct: true, reason: 'silence 指没有声音的状态，正对应电话那头一句话都没有。' },
          { key: 'B', en: 'a loud argument', cn: '大声争吵', correct: false, reason: '录音里没有争吵，只有空白。' },
          { key: 'C', en: 'a quick answer', cn: '迅速的答复', correct: false, reason: '恰恰相反，他一个字都没回。' }
        ],
        analysis: 'silence 在这里不是安静，是压迫。对方什么都不说，反而让江予自己把所有最坏的可能想了一遍。',
        wrongFeedback: '你选错了，江予以为录音里在吵架，又倒回去听了一遍空白。气血 -10',
        afterCorrect: '顾清和把录音备份到电脑里：「他沉默，是因为他在等你先开口。」'
      },
      {
        plotDescription: '十分钟后，周哥的短信来了，只有一行字。',
        line: "He threatened to release the whole recording.",
        lineCn: '他威胁要把整段录音放出去。',
        prompt: "根据上下文，选出画线词汇 'Threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'apologize for the past', cn: '为过去道歉', correct: false, reason: '短信是胁迫，不是道歉。' },
          { key: 'B', en: 'say you will harm someone', cn: '威胁、扬言要伤害对方', correct: true, reason: 'threaten 指以伤害相要挟，正合这条短信用来逼他就范。' },
          { key: 'C', en: 'invite someone over', cn: '邀请某人过来', correct: false, reason: '这里没有任何邀请的意思。' }
        ],
        analysis: 'threaten to do sth 是「扬言要做某事」，通常用来施压。对方要的不是钱，是让江予闭嘴。',
        wrongFeedback: '你选错了，江予把威胁当成道歉，回了一句「我接受」，对面立刻加价。气血 -10',
        afterCorrect: '顾清和问：「录音里有什么？」江予沉默了一会儿：「有我签那份合同的全部过程。」'
      },
      {
        plotDescription: '江予走到窗边，把额头贴在玻璃上。',
        line: "He wants to ruin me before the tour starts.",
        lineCn: '他想在巡演开始前毁掉我。',
        prompt: "根据上下文，选出画线词汇 'Ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'help someone succeed', cn: '帮助某人成功', correct: false, reason: '对方做的是相反的事，江予不会误判。' },
          { key: 'B', en: 'copy someone\'s work', cn: '抄袭某人的作品', correct: false, reason: '这里说的是毁掉一个人，不是抄作品。' },
          { key: 'C', en: 'damage something completely', cn: '毁掉、彻底破坏', correct: true, reason: 'ruin 指把事情或人彻底搞坏，正对应对方要在他复出前动手。' }
        ],
        analysis: 'ruin 比 damage 更彻底，常指名声、前途被毁。对方挑的时间点，就是要让他连翻身的机会都没有。',
        wrongFeedback: '你选错了，江予以为对方要抄他的歌，还让律师去查版权。气血 -10',
        afterCorrect: '顾清和把窗帘拉上：「他毁的是你的名声。你的声音还在我这儿。」'
      },
      {
        plotDescription: '顾清和问他，最坏的结果是什么。',
        line: "He can destroy my career. He cannot destroy me.",
        lineCn: '他可以毁掉我的事业。但他毁不掉我。',
        prompt: "根据上下文，选出画线词汇 'Destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'break something completely so it cannot be repaired', cn: '摧毁、彻底毁掉', correct: true, reason: 'destroy 指彻底破坏到无法复原，正和后面那句「毁不掉我」形成对照。' },
          { key: 'B', en: 'delay by a few days', cn: '推迟几天', correct: false, reason: '推迟只是延后，不是摧毁。' },
          { key: 'C', en: 'improve little by little', cn: '一点点改善', correct: false, reason: '这里说的是破坏，与改善相反。' }
        ],
        analysis: 'destroy 强调不可逆的破坏。江予把「事业」和「我」分开，是他第一次真正站稳。',
        wrongFeedback: '你选错了，江予以为你在说推迟，还问那要延到几号。气血 -10',
        afterCorrect: '顾清和看着他，很久才说：「那就让他毁。毁完了，我还在。」江予没回头，肩膀却塌了下来。'
      }
    ],
    completeText: '第八章结束。那晚两个人都没睡，一个在改声明，一个在写手术方案。'
  },
  {
    id: 'dm_9',
    index: 9,
    title: '第 9 章 · 凌晨四点的天台',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '两个人在天台上坐到天亮。城市的灯一层层灭下去，江予的耳朵里又响起那阵嗡鸣。他把外套裹紧，没有说冷。',
    questions: [
      {
        plotDescription: '江予忽然说起签合同那天的天气。',
        line: "I regret trusting him. That is the honest truth.",
        lineCn: '我后悔信了他。这是实话。',
        prompt: "根据上下文，选出画线词汇 'Regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'feel sorry about something you did', cn: '后悔、为做过的事感到懊悔', correct: true, reason: 'regret 指对已经发生的事感到懊悔，正对应他后悔信错了人。' },
          { key: 'B', en: 'celebrate a decision', cn: '为一个决定庆祝', correct: false, reason: '他的语气是懊悔，不是庆祝。' },
          { key: 'C', en: 'forget the past', cn: '忘记过去', correct: false, reason: '他记得清清楚楚，所以才说后悔。' }
        ],
        analysis: 'regret doing sth 是「后悔做过某事」，是英语里最常见的后悔结构。江予后悔的不是被骗，是自己当初愿意相信。',
        wrongFeedback: '你选错了，江予以为你在庆祝，皱着眉问有什么好庆祝的。气血 -10',
        afterCorrect: '顾清和没有安慰他，只说：「后悔说明你看清了。看清了才有下一步。」'
      },
      {
        plotDescription: '江予问他，如果是他会怎么做。',
        line: "Revenge will not fix my ears. I know that.",
        lineCn: '复仇修不好我的耳朵。这一点我知道。',
        prompt: "根据上下文，选出画线词汇 'Revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'forgiveness', cn: '宽恕', correct: false, reason: '这里说的是报复，不是宽恕，两者正好相反。' },
          { key: 'B', en: 'harm done to someone in return for harm they did', cn: '复仇、报复', correct: true, reason: 'revenge 指为了还击而伤害对方，正对应他口中「修不好耳朵」的那件事。' },
          { key: 'C', en: 'a long rest', cn: '长时间的休息', correct: false, reason: '休息治不好耳朵，但也不是他说的那个词。' }
        ],
        analysis: 'revenge 是名词，指报复行为。江予不是在说不想报复，而是说报复解决不了真正的问题。',
        wrongFeedback: '你选错了，江予以为你在说宽恕，点了头，又说自己做不到。气血 -10',
        afterCorrect: '顾清和说：「那就别为了他做任何事。包括恨他。」江予笑了一下：「这句比手术难。」'
      },
      {
        plotDescription: '风大起来，江予把帽子压低。',
        line: "I just want a little peace. One quiet week.",
        lineCn: '我只想要一点安宁。安静的一周就好。',
        prompt: "根据上下文，选出画线词汇 'Peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'fame and attention', cn: '名声和关注', correct: false, reason: '他已经被关注压得喘不过气，不会想要更多。' },
          { key: 'B', en: 'money', cn: '金钱', correct: false, reason: '这一章里他谈的是心境的安静，不是钱。' },
          { key: 'C', en: 'a calm state without trouble', cn: '安宁、没有纷扰的状态', correct: true, reason: 'peace 指内心和生活的平静，正是他此刻最想要的东西。' }
        ],
        analysis: 'peace 在这里不是「和平」，而是「不被打扰的安稳」。对江予来说，安静一周已经是奢侈。',
        wrongFeedback: '你选错了，江予以为你想要名声，愣了一下，说那我把热搜让给你。气血 -10',
        afterCorrect: '顾清和说：「那就一周。手机关机，我陪你。」这是他们认识以来，第一句像约定的话。'
      },
      {
        plotDescription: '天快亮时，江予伸出手。',
        line: "Then let us call a truce. No more fighting tonight.",
        lineCn: '那我们休战吧。今晚别再吵了。',
        prompt: "根据上下文，选出画线词汇 'Truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting for a time', cn: '休战、暂时停战', correct: true, reason: 'truce 指双方约定暂时停止冲突，正合他这句「今晚别再吵」。' },
          { key: 'B', en: 'a new contract', cn: '一份新合同', correct: false, reason: '他们谈的是停战，不是签约。' },
          { key: 'C', en: 'a celebration party', cn: '一场庆功宴', correct: false, reason: '眼下的气氛沉重，没有庆祝的意味。' }
        ],
        analysis: 'truce 是临时的停火约定，不代表问题解决。江予要的只是一晚上不再互相消耗。',
        wrongFeedback: '你选错了，江予以为你要签新合同，问律师在不在。气血 -10',
        afterCorrect: '顾清和握住他的手，掌心很凉：「成交。明天再吵。」天边这时亮了一条缝。'
      }
    ],
    completeText: '第九章结束。天亮之前，他们在天台上靠在一起睡了半个小时，谁也没有松开手。'
  },
  {
    id: 'dm_10',
    index: 10,
    title: '第 10 章 · 手术同意书',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '检查结果比想象中差。顾清和把手术同意书放在桌上，说不能再拖。江予盯着那行字，很久没有签字。窗外的梧桐叶落了一地。',
    questions: [
      {
        plotDescription: '清晨的走廊，两个人都一夜没睡，顾清和先开了口。',
        line: "Let's reconcile before sunrise. Neither of us slept last night.",
        lineCn: '我们在日出前和好吧。昨晚我们俩都没睡。',
        prompt: "根据上下文，选出画线词汇 'Reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'become friendly again after a quarrel', cn: '和解、吵完以后重归于好', correct: true, reason: 'reconcile 指冲突后重新和好，正对应他们吵完一夜之后先开口。' },
          { key: 'B', en: 'separate for good', cn: '彻底分开', correct: false, reason: '他是来和好的，不是来告别的。' },
          { key: 'C', en: 'argue again', cn: '再吵一次', correct: false, reason: '他说的是「和好」，不是重新起冲突。' }
        ],
        analysis: 'reconcile 既可指人和好，也可指矛盾被调和。顾清和选择在天亮之前把话收回来。',
        wrongFeedback: '你选错了，江予以为你要彻底分开，一夜没睡的眼眶更红了。气血 -10',
        afterCorrect: '江予把手里的纸杯递过去：「昨晚我说重了。」顾清和接了：「我也说了。」'
      },
      {
        plotDescription: '江予提起了昨晚在电话里的那场争吵。',
        line: "We had an argument about the surgery, and I said things I did not mean.",
        lineCn: '我们为了手术吵了一架，我说了些不是真心的话。',
        prompt: "根据上下文，选出画线词汇 'Argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a pleasant conversation', cn: '一次愉快的谈话', correct: false, reason: '他自己都说说了不是真心的话，显然不是愉快的聊天。' },
          { key: 'B', en: 'a heated disagreement', cn: '争论、带着火气的争执', correct: true, reason: 'argument 指双方情绪上来的争执，正对应为了手术吵的那一架。' },
          { key: 'C', en: 'a written promise', cn: '一份书面承诺', correct: false, reason: '这里说的是口角，不是文书。' }
        ],
        analysis: 'argument 在日常英语里常指「吵架」，比 discussion 重得多。江予先低头，是因为他知道自己说重了。',
        wrongFeedback: '你选错了，江予以为你在说那晚聊得很好，脸色一下沉了。气血 -10',
        afterCorrect: '顾清和把笔放下：「我记得。我也说了重话。」他停了一下，又补了一句。'
      },
      {
        plotDescription: '顾清和说，他们每次都是这样。',
        line: "We fight, and then we sit down and talk. That is us.",
        lineCn: '我们吵，然后坐下来谈。这就是我们。',
        prompt: "根据上下文，选出画线词汇 'Fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'cooperate smoothly', cn: '顺畅地合作', correct: false, reason: '如果一直合作顺畅，就不需要「吵完再谈」这个流程了。' },
          { key: 'B', en: 'say goodbye forever', cn: '永远告别', correct: false, reason: '他们每次都还坐下来谈，并没有离开。' },
          { key: 'C', en: 'quarrel or struggle with someone', cn: '争吵、起冲突', correct: true, reason: 'fight 在关系语境里指争吵冲突，正对应「吵完再谈」的描述。' }
        ],
        analysis: 'fight 既可以指动手，也可以指激烈争吵。顾清和说这句时没有抱怨，反而像在确认一种关系模式。',
        wrongFeedback: '你选错了，江予以为你要永远告别，手一下抓住了桌沿。气血 -10',
        afterCorrect: '江予低头笑了一声：「这算什么好习惯。」顾清和说：「至少我们还会坐下来。」'
      },
      {
        plotDescription: '江予拿起笔，又停住，说要巡演。',
        line: "So we compromise. Two weeks of rest, then the tour.",
        lineCn: '那我们各让一步。休息两周，然后巡演。',
        prompt: "根据上下文，选出画线词汇 'Compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'refuse to move at all', cn: '一步都不让', correct: false, reason: '他说的是各让一步，和死守立场相反。' },
          { key: 'B', en: 'each side gives up a little', cn: '妥协、双方各让一步', correct: true, reason: 'compromise 指双方各退一点达成一致，正对应休息两周再巡演。' },
          { key: 'C', en: 'cancel everything', cn: '取消所有安排', correct: false, reason: '巡演还在，只是往后推，不是全部取消。' }
        ],
        analysis: 'compromise 的核心是「各让一步」，不是一方全输。两周是顾清和让的，巡演是江予不肯放的。',
        wrongFeedback: '你选错了，江予以为你要一步不让，把笔摔在桌上，说那还谈什么。气血 -10',
        afterCorrect: '顾清和在同意书上写下新的日期，写完抬头看他：「两周。一天都不能少。」江予点头。'
      }
    ],
    completeText: '第十章结束。手术定在两周后。签完字，顾清和把笔放下，掌心一直覆在他的手背上。'
  },
  {
    id: 'dm_11',
    index: 11,
    title: '第 11 章 · 他搬进来的第一晚',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '术后第二周，顾清和搬进了江予家。行李只有两个箱子，一个装衣服，一个装药。江予站在门口，忽然觉得这套房子小得不讲道理。',
    questions: [
      {
        plotDescription: '顾清和把医院账单摊开，一行一行算给他听。',
        line: "You are scary savvy about hospital bills. Did you memorize them?",
        lineCn: '你对医院账单精明得吓人。是不是把它们背下来了？',
        prompt: "根据上下文，选出画线词汇 'Savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'careless with numbers', cn: '对数字很粗心', correct: false, reason: '他能一行行算清楚，显然不是粗心。' },
          { key: 'B', en: 'generous with money', cn: '花钱很大方', correct: false, reason: '这里夸的是懂行、会算，不是大方。' },
          { key: 'C', en: 'practical and clever, hard to fool', cn: '精明、懂行、不容易被糊弄', correct: true, reason: 'savvy 指实际又聪明，正合他算账时的样子。' }
        ],
        analysis: 'savvy 常和 business、tech 等词搭配，指「很懂门道」。江予的惊讶里，其实带一点佩服。',
        wrongFeedback: '你选错了，顾清和以为你在说他粗心，把账单又重算了一遍。气血 -10',
        afterCorrect: '顾清和把笔帽扣上：「我不精明。我只是不想让你再被人多收一分钱。」'
      },
      {
        plotDescription: '江予想自己下楼买水，被叫住。',
        line: "I will be blunt: you cannot live alone this month.",
        lineCn: '我直说了：这个月你不能一个人住。',
        prompt: "根据上下文，选出画线词汇 'Blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'direct, without softening the words', cn: '直白、不加修饰地说', correct: true, reason: 'blunt 指说话直接不绕弯，正对应他那句「我直说了」。' },
          { key: 'B', en: 'polite and indirect', cn: '客气而委婉', correct: false, reason: '他恰恰是先把「直说」摆了出来，不算委婉。' },
          { key: 'C', en: 'confused', cn: '困惑的', correct: false, reason: '他的判断很明确，没有困惑。' }
        ],
        analysis: 'blunt 形容人时是「嘴直」，形容话时是「不客气但实在」。顾清和用这个词，是提前给对方打预防针。',
        wrongFeedback: '你选错了，江予以为你在委婉客气，还等着你绕完那个弯。气血 -10',
        afterCorrect: '江予靠在门框上：「那你算什么？搬进来照顾我，还是看着我？」顾清和说：「都算。」'
      },
      {
        plotDescription: '江予被这句回答噎住，半天才找回话。',
        line: "Sassy. Very sassy. Did they teach you that in medical school?",
        lineCn: '毒舌。真够毒舌的。医学院教你这个？',
        prompt: "根据上下文，选出画线词汇 'Sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'quiet and shy', cn: '安静害羞', correct: false, reason: '这句回答一点也不害羞，反而很敢说。' },
          { key: 'B', en: 'formal and serious', cn: '正式而严肃', correct: false, reason: '语气是打趣，不是正式场合的措辞。' },
          { key: 'C', en: 'bold and cheeky in a playful way', cn: '毒舌、傲娇、带点俏皮的敢说', correct: true, reason: 'sassy 指嘴上不饶人但不失可爱，正合江予半嗔半笑的语气。' }
        ],
        analysis: 'sassy 带一点「顶嘴」的可爱意味，和 rude 不同。江予嘴上嫌弃，心里却被这句话取悦了。',
        wrongFeedback: '你选错了，江予把毒舌听成害羞，还问你是不是不舒服。气血 -10',
        afterCorrect: '顾清和把箱子推进客房：「医学院不教。这是天生。」江予跟进去，站在门口看他铺床。'
      },
      {
        plotDescription: '晚上，江予讲了个冷笑话，屋子里没有人笑。',
        line: "Your joke is lame. Even the cat did not laugh.",
        lineCn: '你的笑话好逊。连猫都没笑。',
        prompt: "根据上下文，选出画线词汇 'Lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'weak, not impressive', cn: '逊、不好笑、不够看', correct: true, reason: 'lame 形容笑话时就是「很冷、很逊」，正对应连猫都没笑。' },
          { key: 'B', en: 'hilarious', cn: '非常好笑', correct: false, reason: '如果真的好笑，猫没笑也说不通。' },
          { key: 'C', en: 'dangerous', cn: '危险的', correct: false, reason: '一个冷笑话谈不上危险。' }
        ],
        analysis: 'lame 在口语里常用来吐槽「太弱了、太逊了」，语气可以很轻。顾清和说这句时，嘴角其实是弯的。',
        wrongFeedback: '你选错了，江予以为你在夸他幽默，又补了两个更冷的。气血 -10',
        afterCorrect: '江予不服气，又讲了一个。顾清和这次笑了，笑的是他讲笑话时认真的样子。'
      }
    ],
    completeText: '第十一章结束。客房的门没关，客厅的灯亮到很晚，两个人隔着一道墙说话。'
  },
  {
    id: 'dm_12',
    index: 12,
    title: '第 12 章 · 沙发上的第三件外套',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '顾清和住进来三天，客厅就变成了灾难现场：外套搭在沙发上，外卖盒堆在茶几，江予抱着抱枕睡在正中间。',
    questions: [
      {
        plotDescription: '江予指着新买的黑胶唱机，眼睛发亮。',
        line: "This little record player is dope. Where did you get it?",
        lineCn: '这台小唱机酷毙了。你从哪儿弄来的？',
        prompt: "根据上下文，选出画线词汇 'Dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cool', cn: '酷毙了、太赞了', correct: true, reason: 'dope 是口语里的「很酷」，正合他眼睛发亮的样子。' },
          { key: 'B', en: 'broken', cn: '坏了的', correct: false, reason: '唱机正在放歌，显然没坏。' },
          { key: 'C', en: 'heavy', cn: '很重的', correct: false, reason: '他赞叹的是酷，不是重量。' }
        ],
        analysis: 'dope 在年轻人口语里几乎是「酷」的同义词。江予的注意力，其实从唱机慢慢挪到了搬唱机的人身上。',
        wrongFeedback: '你选错了，江予以为你说唱机坏了，蹲下去检查插头。气血 -10',
        afterCorrect: '顾清和说：「二手市场。旧的，但不影响听。」江予把唱片放上去，屋子里第一次有了不像医院的声音。'
      },
      {
        plotDescription: '顾清和把第三件外套拎起来，看着他。',
        line: "I know I am sloppy. I will clean it up.",
        lineCn: '我知道我邋遢。我会收拾的。',
        prompt: "根据上下文，选出画线词汇 'Sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'tidy and organized', cn: '整洁有条理的', correct: false, reason: '客厅已经堆成这样，和整洁正好相反。' },
          { key: 'B', en: 'punctual', cn: '守时的', correct: false, reason: '这里说的是生活状态，不是时间观念。' },
          { key: 'C', en: 'messy and careless', cn: '邋遢、随手乱放', correct: true, reason: 'sloppy 指不整洁、做事随意，正对应三件外套堆在沙发上。' }
        ],
        analysis: 'sloppy 形容人时是「生活上不讲究」，形容做事时是「马虎」。江予认得很快，倒是顾清和没料到。',
        wrongFeedback: '你选错了，顾清和以为你在夸他整洁，把外套又挂回了沙发。气血 -10',
        afterCorrect: '江予把外套抱起来，却没往衣柜走：「其实你来了以后，我才觉得这房子有人住。」'
      },
      {
        plotDescription: '夜里，江予跟着他走到厨房，站在灯下不说话。',
        line: "You are needy tonight. What happened?",
        lineCn: '你今晚很缺爱啊。怎么了？',
        prompt: "根据上下文，选出画线词汇 'Needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'wanting a lot of attention and reassurance', cn: '缺爱、黏人、需要被关注', correct: true, reason: 'needy 指情感上很需要别人，正合他跟着人走的举动。' },
          { key: 'B', en: 'independent', cn: '独立的', correct: false, reason: '他一路跟着，显然不是独立的状态。' },
          { key: 'C', en: 'sleepy', cn: '困倦的', correct: false, reason: '困是表象，顾清和问的是他为什么忽然黏人。' }
        ],
        analysis: 'needy 带一点心疼的意味，不一定是贬义。顾清和没有赶他走，反而给他倒了杯温水。',
        wrongFeedback: '你选错了，江予把缺爱听成独立，转身回房间关了门。气血 -10',
        afterCorrect: '江予握着杯子：「手术以后我总怕一睁眼，屋子里又是空的。」顾清和说：「那我把灯留着。」'
      },
      {
        plotDescription: '江予忽然问，自己是不是一直只想着自己。',
        line: "Was I always this selfish?",
        lineCn: '我一直都这么自私吗？',
        prompt: "根据上下文，选出画线词汇 'Selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'thoughtful of others', cn: '体贴别人的', correct: false, reason: '他是在反省自己只顾自己，不是在自我表扬。' },
          { key: 'B', en: 'caring only about yourself', cn: '自私、只顾自己', correct: true, reason: 'selfish 指只考虑自己，正是他这句自我怀疑的内容。' },
          { key: 'C', en: 'brave', cn: '勇敢的', correct: false, reason: '这里没有勇敢与否的判断。' }
        ],
        analysis: 'selfish 是道德评价里很重的一个词。江予问得很轻，是因为他第一次意识到，自己的痛也会压到别人。',
        wrongFeedback: '你选错了，江予以为你在夸他体贴，愣了一下，随后低下头。气血 -10',
        afterCorrect: '顾清和把最后一个外卖盒收进袋子：「你不是自私。你只是太久没被人照顾过。」'
      }
    ],
    completeText: '第十二章结束。那晚客厅被收拾干净，江予第一次睡在自己的床上，没有抱抱枕。'
  },
  {
    id: 'dm_13',
    index: 13,
    title: '第 13 章 · 楼下那辆黑色的车',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '夜里两点，楼下停着一辆黑车，三天没挪过位置。顾清和拉窗帘时，车灯亮了一下。两个人都没有说话。',
    questions: [
      {
        plotDescription: '江予想缓和一下气氛，故意去看顾清和身上的外套。',
        line: "You look gorgeous in that coat, by the way. Very spy movie.",
        lineCn: '顺便说一句，你穿那件外套美呆了。特别像谍战片。',
        prompt: "根据上下文，选出画线词汇 'Gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely beautiful', cn: '美呆了、极其好看', correct: true, reason: 'gorgeous 指惊艳地好看，正对应他这句半开玩笑的夸。' },
          { key: 'B', en: 'ordinary', cn: '普通的', correct: false, reason: '他说的是美呆了，不是普通。' },
          { key: 'C', en: 'tired', cn: '疲惫的', correct: false, reason: '这里夸的是外形，不是在说精神状态。' }
        ],
        analysis: 'gorgeous 比 beautiful 更强，常带一点惊叹。江予用玩笑遮住了自己的紧张，也说出了真心话。',
        wrongFeedback: '你选错了，江予以为你说他疲惫，连忙让你去睡。气血 -10',
        afterCorrect: '顾清和没接这个夸，只把窗帘拉严：「车里有人。别看窗户。」江予的笑意收了一半。'
      },
      {
        plotDescription: '引擎声在楼下一直没停。',
        line: "It is weird that the engine is still running.",
        lineCn: '发动机一直开着，这很奇怪。',
        prompt: "根据上下文，选出画线词汇 'Weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'normal and expected', cn: '正常、在预料之中', correct: false, reason: '他用的词是奇怪，说明这不合常理。' },
          { key: 'B', en: 'strange, hard to explain', cn: '奇怪、不合常理', correct: true, reason: 'weird 指说不通的怪，正对应车停了三天还开着引擎。' },
          { key: 'C', en: 'lucky', cn: '幸运的', correct: false, reason: '这里没有任何好运的意味。' }
        ],
        analysis: 'weird 是口语里最常用的「怪」，语气比 strange 轻。顾清和的职业习惯让他先注意到异常。',
        wrongFeedback: '你选错了，江予以为你说这很正常，回去继续睡了。气血 -10',
        afterCorrect: '顾清和把灯关掉，只留玄关一盏：「三天，同一个位置，不开窗。不是粉丝。」'
      },
      {
        plotDescription: '江予伸手想去开门，被拉住了手腕。',
        line: "That van looks sketchy. Do not go down alone.",
        lineCn: '那辆面包车看起来很可疑。别一个人下去。',
        prompt: "根据上下文，选出画线词汇 'Sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'suspicious, not trustworthy', cn: '可疑的、让人不放心的', correct: true, reason: 'sketchy 指看着就不对劲、不可信，正合他阻止江予下楼。' },
          { key: 'B', en: 'expensive', cn: '昂贵的', correct: false, reason: '他在意的是安全，不是价格。' },
          { key: 'C', en: 'empty', cn: '空的', correct: false, reason: '车里有人，恰恰不是空的。' }
        ],
        analysis: 'sketchy 是口语里形容「来路不明、让人心里发毛」的常用词。顾清和说得很轻，手却没松。',
        wrongFeedback: '你选错了，江予以为你说车很贵，还问是不是限量款。气血 -10',
        afterCorrect: '江予退了半步：「那怎么办？」顾清和掏出手机：「先拍车牌。然后报警，不逞强。」'
      },
      {
        plotDescription: '警察来之前，两个人在黑暗里等着。',
        line: "The whole thing is bizarre. He has been sitting there for three nights.",
        lineCn: '整件事都很诡异。他在那儿坐了三个晚上。',
        prompt: "根据上下文，选出画线词汇 'Bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'simple and clear', cn: '简单明了的', correct: false, reason: '他说的正相反，是让人想不通的怪。' },
          { key: 'B', en: 'boring', cn: '无聊的', correct: false, reason: '这里不是无聊，是透着不对劲。' },
          { key: 'C', en: 'very strange and hard to explain', cn: '诡异、离奇、难以解释', correct: true, reason: 'bizarre 指怪得离谱，正对应三夜不动的车。' }
        ],
        analysis: 'bizarre 比 weird 更重，带「离奇到不像真的」的意味。江予说完这句，忽然想起录音里那段空白。',
        wrongFeedback: '你选错了，江予以为你说这事很简单，松了口气去倒水。气血 -10',
        afterCorrect: '楼下传来车门声。顾清和把他往里屋推了一步，自己站在门边，没有开灯。'
      }
    ],
    completeText: '第十三章结束。警车到时，那辆黑车已经开走了，只在地面留下一道新鲜的油迹。'
  },
  {
    id: 'dm_14',
    index: 14,
    title: '第 14 章 · 他做的第一顿饭',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '江予说要下厨庆祝出院，厨房在二十分钟后冒起了烟。顾清和靠在门边，没有阻止，只把灭火器挪近了一点。',
    questions: [
      {
        plotDescription: '江予系着围裙，举着锅铲宣布。',
        line: "This is going to be epic. Trust me.",
        lineCn: '这会是一顿史诗级的大餐。相信我。',
        prompt: "根据上下文，选出画线词汇 'Epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'grand and impressive, on a huge scale', cn: '史诗级的、气势恢宏的', correct: true, reason: 'epic 指规模大得惊人，正合他夸张的自我宣传。' },
          { key: 'B', en: 'quick and simple', cn: '快手简单的', correct: false, reason: '他要做的不是简单的一顿，而是「史诗级」。' },
          { key: 'C', en: 'cheap', cn: '便宜的', correct: false, reason: '这里说的是气势，不是价格。' }
        ],
        analysis: 'epic 原指史诗，口语里常用来夸张地形容「非常盛大」。他越这么说，顾清和越把灭火器挪近。',
        wrongFeedback: '你选错了，江予以为你说这顿很简单，觉得被小看了，又多加了两道菜。气血 -10',
        afterCorrect: '十分钟后，油锅起了火。顾清和盖上锅盖，动作熟练得像做过一千次。'
      },
      {
        plotDescription: '江予举着手机，想把这一幕拍下来发出去。',
        line: "That caption is cringe. Delete it.",
        lineCn: '那个配文脚趾扣地。删了。',
        prompt: "根据上下文，选出画线词汇 'Cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'romantic and sweet', cn: '浪漫甜蜜的', correct: false, reason: '顾清和的反应是嫌弃，不是被甜到。' },
          { key: 'B', en: 'funny and clever', cn: '幽默机智的', correct: false, reason: '他说的是让人尴尬，不是好笑。' },
          { key: 'C', en: 'so embarrassing it makes you shrink', cn: '让人尴尬到脚趾扣地', correct: true, reason: 'cringe 指尴尬得受不了，正合他要江予删掉配文。' }
        ],
        analysis: 'cringe 是网络上形容「尬」的高频词。江予写的配文大概是「第一次为爱的人下厨」，顾清和看完只说了两个字。',
        wrongFeedback: '你选错了，江予以为你在夸配文甜，又加了一个爱心表情。气血 -10',
        afterCorrect: '江予不服：「哪里尬？」顾清和把手机扣下：「饭做好了再说。」'
      },
      {
        plotDescription: '两个人坐在桌前，尝了第一口汤。',
        line: "The soup is actually fabulous. I am not lying.",
        lineCn: '这汤居然极好喝。我没骗你。',
        prompt: "根据上下文，选出画线词汇 'Fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'wonderful, excellent', cn: '极好的、棒极了', correct: true, reason: 'fabulous 表示非常出色，正对应他喝完之后的那句惊叹。' },
          { key: 'B', en: 'too salty', cn: '太咸了', correct: false, reason: '他是在夸，不是在挑毛病。' },
          { key: 'C', en: 'cold', cn: '凉的', correct: false, reason: '刚出锅的汤，重点也不是温度。' }
        ],
        analysis: 'fabulous 比 good 强得多，带一点夸张的喜悦。江予自己也没想到，这锅汤真能喝。',
        wrongFeedback: '你选错了，江予以为你说汤太咸，赶紧又加了一碗水。气血 -10',
        afterCorrect: '顾清和喝了两碗：「以后可以多做。」江予愣了：「你这是在夸我？」顾清和说：「在邀约。」'
      },
      {
        plotDescription: '吃完，两个人一起看厨房。',
        line: "The kitchen looks terrible. We should call someone.",
        lineCn: '厨房看起来糟透了。我们该叫个人来。',
        prompt: "根据上下文，选出画线词汇 'Terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'clean and new', cn: '干净崭新的', correct: false, reason: '墙上还挂着油烟，显然不是干净。' },
          { key: 'B', en: 'very bad', cn: '糟透了、非常糟糕', correct: true, reason: 'terrible 表示极差，正对应这一片狼藉。' },
          { key: 'C', en: 'modern', cn: '现代化的', correct: false, reason: '这里评价的是惨状，不是装修风格。' }
        ],
        analysis: 'terrible 是最直白的「很糟」。江予做饭的勇气，和厨房的惨状几乎成正比。',
        wrongFeedback: '你选错了，江予以为你在夸厨房干净，还挺得意。气血 -10',
        afterCorrect: '江予看着那口锅：「不叫。我自己收拾。」顾清和把抹布递给他，两个人一起擦到半夜。'
      }
    ],
    completeText: '第十四章结束。厨房最后收拾干净了，冰箱上多了一张纸条：下次少放盐。'
  },
  {
    id: 'dm_15',
    index: 15,
    title: '第 15 章 · 他穿西装的那晚',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '医院年会在周五。顾清和换下白大褂，穿了一身深灰西装，站在玄关系袖扣。江予坐在沙发上，忘了自己本来要说什么。',
    questions: [
      {
        plotDescription: '顾清和问他，这身是不是太正式了。',
        line: "You look decent. More than decent, actually.",
        lineCn: '你看起来挺体面。其实不止体面。',
        prompt: "根据上下文，选出画线词汇 'Decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough, respectable', cn: '体面的、还不错的', correct: true, reason: 'decent 指达到让人满意的程度，正对应他先给的这个评价。' },
          { key: 'B', en: 'shabby', cn: '寒酸的', correct: false, reason: '他后面还说「不止体面」，显然不是寒酸。' },
          { key: 'C', en: 'rude', cn: '无礼的', correct: false, reason: '这里评价的是穿着，不是举止。' }
        ],
        analysis: 'decent 是英式口语里非常常用的「还不错」。江予先压着说体面，下一句就露了底。',
        wrongFeedback: '你选错了，顾清和以为你说他寒酸，回去换了一件更旧的。气血 -10',
        afterCorrect: '江予清了清嗓子：「我是说，好看。」顾清和系好最后一颗扣子：「听见了。」'
      },
      {
        plotDescription: '顾清和被他盯得久了，回过头。',
        line: "Why are you staring? Weirdo.",
        lineCn: '你看什么？怪胎。',
        prompt: "根据上下文，选出画线词汇 'Weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'an odd person, often said fondly', cn: '怪胎、怪人（这里带亲昵）', correct: true, reason: 'weirdo 指行为古怪的人，这里语气是打趣，不是真的骂。' },
          { key: 'B', en: 'a doctor', cn: '医生', correct: false, reason: '他自己就是医生，不会拿这个当调侃。' },
          { key: 'C', en: 'a stranger', cn: '陌生人', correct: false, reason: '两个人都住在一起了，早就不是陌生人。' }
        ],
        analysis: 'weirdo 可以很伤人，也可以很亲昵，全看语气。顾清和说这句时，耳根有一点红。',
        wrongFeedback: '你选错了，江予以为你在赶他走，站起来回了房间。气血 -10',
        afterCorrect: '江予没躲：「看自己人，不行吗？」顾清和的动作停了半秒，才把袖扣扣好。'
      },
      {
        plotDescription: '江予索性把话挑明。',
        line: "You are hot. I said it. Sue me.",
        lineCn: '你很性感。我说了。告我吧。',
        prompt: "根据上下文，选出画线词汇 'Hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'having a fever', cn: '发烧的', correct: false, reason: '这里是夸外貌，不是量体温。' },
          { key: 'B', en: 'sexually attractive', cn: '性感、很有吸引力', correct: true, reason: 'hot 形容人时指很有吸引力，正合他这句破罐破摔的坦白。' },
          { key: 'C', en: 'angry', cn: '生气的', correct: false, reason: '他自己才是那个紧张到嘴硬的人。' }
        ],
        analysis: 'hot 形容人时是「性感」，和 weather 里的「热」完全不同。江予说完就后悔，但没有收回。',
        wrongFeedback: '你选错了，顾清和伸手摸他额头：「发烧了？」江予当场想把自己埋进沙发。气血 -10',
        afterCorrect: '顾清和盯了他两秒，忽然笑了一下：「年会不去了。」江予：“啊？”顾清和：「留下吃饭。」'
      },
      {
        plotDescription: '最后顾清和还是在门口停下，回头看他。',
        line: "You are cute when you are embarrassed.",
        lineCn: '你尴尬的时候挺可爱的。',
        prompt: "根据上下文，选出画线词汇 'Cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'childish', cn: '幼稚的', correct: false, reason: '他说的是让人喜欢，不是幼稚。' },
          { key: 'B', en: 'quiet', cn: '安静的', correct: false, reason: '江予刚才一点也不安静。' },
          { key: 'C', en: 'endearing, charming', cn: '可爱、招人喜欢', correct: true, reason: 'cute 指让人心生喜欢的可爱，正合他说这句时的语气。' }
        ],
        analysis: 'cute 在这里是带着好感的评价，不是「幼稚」。这一晚之后，两个人的距离肉眼可见地变了。',
        wrongFeedback: '你选错了，江予以为你说他幼稚，赌气不吃饭了。气血 -10',
        afterCorrect: '门关上了。江予一个人坐在沙发上，把刚才那句话在脑子里重放了三遍。'
      }
    ],
    completeText: '第十五章结束。年会他没去成，两个人在家吃了一顿很普通的面，却谁都没觉得遗憾。'
  },
  {
    id: 'dm_16',
    index: 16,
    title: '第 16 章 · 地铁上的四十分钟',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '复查那天赶上早高峰。顾清和说打车太堵，江予戴上帽子口罩，跟着他挤进了地铁。车厢里没有人认出他。',
    questions: [
      {
        plotDescription: '车门关上，江予被挤在角落，扶着扶手。',
        line: "I forgot how long the commute is. Forty minutes, standing.",
        lineCn: '我忘了通勤有多久。四十分钟，全程站着。',
        prompt: "根据上下文，选出画线词汇 'Commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'the regular trip between home and work', cn: '通勤、上下班的路程', correct: true, reason: 'commute 指日常往返的路程，正对应他数出来的四十分钟。' },
          { key: 'B', en: 'a holiday trip', cn: '假期旅行', correct: false, reason: '这是去医院复查的日常路，不是旅行。' },
          { key: 'C', en: 'a queue', cn: '排队', correct: false, reason: '他说的是路程长度，不是排队。' }
        ],
        analysis: 'commute 既可以是名词也可以是动词，指每天往返的那段路。江予很久没坐过地铁，才会被四十分钟震到。',
        wrongFeedback: '你选错了，江予以为你在说排队，还问要不要去前面。气血 -10',
        afterCorrect: '顾清和说：「以前我每天这样，来回八十分钟。」江予沉默了一会儿，把自己的位置让给他靠。'
      },
      {
        plotDescription: '江予打了个哈欠，眼睛都睁不开。',
        line: "Wake me up in twenty minutes. I need a nap.",
        lineCn: '二十分钟后叫我。我需要打个盹。',
        prompt: "根据上下文，选出画线词汇 'Nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a full night of sleep', cn: '一整晚的睡眠', correct: false, reason: '他说的是二十分钟，不是一整夜。' },
          { key: 'B', en: 'a short sleep', cn: '打盹、小睡', correct: true, reason: 'nap 指短暂的睡眠，正对应二十分钟这个时长。' },
          { key: 'C', en: 'a shower', cn: '洗个澡', correct: false, reason: '地铁上没有洗澡这回事。' }
        ],
        analysis: 'nap 是白天的短睡，和 sleep 的时长不同。江予靠在他肩上之前，还嘴硬说自己只是闭一会儿眼。',
        wrongFeedback: '你选错了，江予以为你要他睡整晚，急着说还有三站。气血 -10',
        afterCorrect: '顾清和没叫醒他。二十分钟过去，他让江予多睡了整整四站。'
      },
      {
        plotDescription: '从医院出来已经天黑，两个人都懒得做饭。',
        line: "We are both tired. Let us order in tonight.",
        lineCn: '我们都累了。今晚点外卖吧。',
        prompt: "根据上下文，选出画线词汇 'Order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'have food delivered to your home', cn: '点外卖、叫到家里来', correct: true, reason: 'order in 指把餐点叫到家里，正合两个人都不想动的情况。' },
          { key: 'B', en: 'cook at home', cn: '在家做饭', correct: false, reason: '如果做饭就不叫 order in 了。' },
          { key: 'C', en: 'eat at a restaurant', cn: '去餐厅吃', correct: false, reason: '去餐厅是 eat out，和点外卖不同。' }
        ],
        analysis: 'order in 是英式口语里很常见的「叫外卖到家」。和 eat out 正好是一对反义搭配。',
        wrongFeedback: '你选错了，江予听见在家做饭，认命地走向厨房。气血 -10',
        afterCorrect: '江予点了一堆，最后只吃了几口。顾清和把剩下的收好，说明天热一热还能吃。'
      },
      {
        plotDescription: '江予却忽然说，其实想出去吃。',
        line: "Or we could eat out. There is a small place downstairs.",
        lineCn: '或者我们也可以下馆子。楼下有家小店。',
        prompt: "根据上下文，选出画线词汇 'Eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'eat at home', cn: '在家吃', correct: false, reason: '他已经提议过点外卖，这里是在说另一种选择。' },
          { key: 'B', en: 'skip dinner', cn: '不吃晚饭', correct: false, reason: '他说的是去店里吃，不是不吃。' },
          { key: 'C', en: 'eat at a restaurant', cn: '下馆子、在外面吃', correct: true, reason: 'eat out 指在外面餐厅用餐，正对应楼下那家小店。' }
        ],
        analysis: 'eat out 是「出去吃」，和 order in 构成对照。江予想出门，大概是因为在家里待得太久了。',
        wrongFeedback: '你选错了，江予以为你说不吃，把外卖单揉成一团。气血 -10',
        afterCorrect: '楼下的小店只有四张桌子。老板认出了江予，却什么也没问，只多送了一碟小菜。'
      }
    ],
    completeText: '第十六章结束。那顿饭吃到很晚，回家的路只有两百米，他们走了二十分钟。'
  },
  {
    id: 'dm_17',
    index: 17,
    title: '第 17 章 · 周日下午的待办清单',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '周日下午，冰箱上贴着一张清单：洗衣服、换床单、倒垃圾。江予把它拍了张照，然后躺回沙发。',
    questions: [
      {
        plotDescription: '顾清和从房间出来，看见他还在沙发上。',
        line: "I will do the chores later. I promise.",
        lineCn: '家务我晚点做。我保证。',
        prompt: "根据上下文，选出画线词汇 'Chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'routine housework', cn: '家务、日常琐事', correct: true, reason: 'chores 指洗衣服倒垃圾这类日常家务，正对应冰箱上的清单。' },
          { key: 'B', en: 'errands outside the home', cn: '出门办的杂事', correct: false, reason: '清单上的事都在家里，不属于出门办事。' },
          { key: 'C', en: 'physical exercises', cn: '体育锻炼', correct: false, reason: '洗衣服不是锻炼。' }
        ],
        analysis: 'chores 特指家里那些重复性的杂活，常和 do 搭配。江予说「晚点」，通常意味着不会做。',
        wrongFeedback: '你选错了，顾清和以为你要出门办事，把钥匙递给了你。气血 -10',
        afterCorrect: '顾清和没催他，自己把洗衣机打开。江予在沙发上翻了个身，听见水声，忽然有点坐不住。'
      },
      {
        plotDescription: '洗衣机转起来，江予却开始刷手机。',
        line: "I always procrastinate when I am nervous.",
        lineCn: '我一紧张就拖延。',
        prompt: "根据上下文，选出画线词汇 'Procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'work ahead of schedule', cn: '提前完成', correct: false, reason: '他正在把事往后拖，不是提前做。' },
          { key: 'B', en: 'delay things you should do', cn: '拖延、把该做的事往后拖', correct: true, reason: 'procrastinate 指明知该做却一直往后拖，正合他的状态。' },
          { key: 'C', en: 'finish everything early', cn: '很早就做完所有事', correct: false, reason: '和拖延正好相反。' }
        ],
        analysis: 'procrastinate 是「拖延」的正式说法，常出现在心理学文章里。江予拖延的不是家务，是复查后的下一次检查。',
        wrongFeedback: '你选错了，江予以为你在说他勤快，还挺高兴。气血 -10',
        afterCorrect: '顾清和在他旁边坐下：「你在怕下周的复查。」江予的手机停在同一个页面，很久没动。'
      },
      {
        plotDescription: '为了不去想复查，江予打开了电视。',
        line: "Let us binge-watch that drama. All ten episodes.",
        lineCn: '我们把那部剧刷了吧。十集全看完。',
        prompt: "根据上下文，选出画线词汇 'Binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'watch many episodes in a row', cn: '刷剧、一口气连看很多集', correct: true, reason: 'binge-watch 指连续看很多集，正合「十集全看完」。' },
          { key: 'B', en: 'record a show for later', cn: '录下来以后再看', correct: false, reason: '他要现在就看，不是录下来。' },
          { key: 'C', en: 'skip one episode', cn: '跳过一集', correct: false, reason: '他说的是十集全看，不是跳过。' }
        ],
        analysis: 'binge-watch 由 binge（放纵）加 watch 组成，强调「停不下来」。这是江予最擅长的逃避方式。',
        wrongFeedback: '你选错了，江予以为你要录下来，去找遥控器找半天。气血 -10',
        afterCorrect: '顾清和没有反对，只把毯子盖到他腿上。第三集时，江予已经靠在他肩上睡着了。'
      },
      {
        plotDescription: '醒来时天已经黑了，江予发现自己还在刷手机。',
        line: "You have been scrolling for an hour. Put the phone down.",
        lineCn: '你刷手机刷了一个小时了。把手机放下。',
        prompt: "根据上下文，选出画线词汇 'Scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'type quickly with both hands', cn: '双手快速打字', correct: false, reason: '他的动作是往下滑，不是打字。' },
          { key: 'B', en: 'move through a screen with your finger', cn: '刷手机、手指滑动屏幕', correct: true, reason: 'scroll 指用手指在屏幕上滑动，正对应他刷了一个小时。' },
          { key: 'C', en: 'turn the phone off', cn: '把手机关掉', correct: false, reason: '顾清和是让他关手机，说明他还在滑。' }
        ],
        analysis: 'scroll 原意是「滚动」，在手机上就是不断往下滑。江予刷的不是内容，是那段不敢面对的时间。',
        wrongFeedback: '你选错了，江予以为你在夸他打字快，又回了两条消息。气血 -10',
        afterCorrect: '江予把手机扣在桌上：「一停下来，我就会想下周的事。」顾清和说：「那就想。我在这儿。」'
      }
    ],
    completeText: '第十七章结束。那天家务最后只做了一半，但两个人都没有再提清单。'
  },
  {
    id: 'dm_18',
    index: 18,
    title: '第 18 章 · 凌晨两点的沙发',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '剧看到第五集，江予的手机滑到地毯上。屏幕还亮着，一条新消息停在最上面。窗外有车经过，光扫过天花板。',
    questions: [
      {
        plotDescription: '顾清和捡起手机，屏幕上是一个陌生人的头像。',
        line: "Swipe left. That profile is a reporter.",
        lineCn: '往左滑。那个账号是记者。',
        prompt: "根据上下文，选出画线词汇 'Swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'slide your finger across a screen', cn: '滑屏、用手指在屏幕上划', correct: true, reason: 'swipe 指在屏幕上滑动，正对应处理这条消息的动作。' },
          { key: 'B', en: 'tap twice quickly', cn: '连续点两下', correct: false, reason: '这里是滑动，不是双击。' },
          { key: 'C', en: 'press and hold', cn: '长按不放', correct: false, reason: '长按和滑动是两个不同手势。' }
        ],
        analysis: 'swipe 是触屏时代的高频动词，左右滑在交友软件里还有「拒绝/接受」的意思。顾清和一眼认出了那个账号。',
        wrongFeedback: '你选错了，江予双击了那条消息，直接把人加上了。气血 -10',
        afterCorrect: '江予把手机扔到一边：「他怎么找到这个号的。」顾清和说：「你上次采访提过这个昵称。」'
      },
      {
        plotDescription: '江予打了个哈欠，往沙发上一倒。',
        line: "I am going to crash on your couch. Do not wake me.",
        lineCn: '我要在你沙发上昏睡过去了。别叫醒我。',
        prompt: "根据上下文，选出画线词汇 'Crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'fall down suddenly', cn: '突然摔倒', correct: false, reason: '他是主动躺下，不是摔倒。' },
          { key: 'B', en: 'drive home fast', cn: '飞快开车回家', correct: false, reason: '他已经在家里，而且没有要开车。' },
          { key: 'C', en: 'sleep, often suddenly and deeply', cn: '倒头就睡、昏睡过去', correct: true, reason: 'crash 在口语里指累到倒头就睡，正合他往沙发上一倒。' }
        ],
        analysis: 'crash 除了「撞车」，口语里常表示「累到倒头睡」。顾清和没叫醒他，只把电视音量调小。',
        wrongFeedback: '你选错了，顾清和以为你要开车回家，赶紧去拿车钥匙。气血 -10',
        afterCorrect: '半夜江予醒了一次，发现自己身上盖着被子，顾清和坐在旁边的地上，背靠着沙发睡着了。'
      },
      {
        plotDescription: '第二天，江予说想带他去个正常的地方。',
        line: "We should hang out somewhere normal. Like a park.",
        lineCn: '我们该去个正常点的地方闲逛。比如公园。',
        prompt: "根据上下文，选出画线词汇 'Hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend relaxed time together', cn: '一起闲逛、放松地待着', correct: true, reason: 'hang out 指没有目的的一起消磨时间，正对应去公园。' },
          { key: 'B', en: 'work overtime together', cn: '一起加班', correct: false, reason: '公园和加班没有关系。' },
          { key: 'C', en: 'have a serious argument', cn: '严肃地吵一架', correct: false, reason: '他想的是轻松地待着，不是争吵。' }
        ],
        analysis: 'hang out 是朋友之间最常用的「一起玩」，语气很轻。江予说「正常」，是因为他们的相识太不正常了。',
        wrongFeedback: '你选错了，江予以为你要一起加班，把帽子又戴了回去。气血 -10',
        afterCorrect: '公园里没什么人。他们买了两个很贵的冰淇淋，坐在长椅上，像两个普通人。'
      },
      {
        plotDescription: '坐了一会儿，江予把腿伸直，长长吐了口气。',
        line: "Kick back. The tour is over. Nothing is on fire.",
        lineCn: '放松点。巡演结束了。没有哪里在着火。',
        prompt: "根据上下文，选出画线词汇 'Kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'relax and take it easy', cn: '放松、悠闲地歇着', correct: true, reason: 'kick back 指放松休息，正合他让顾清和别紧绷的语境。' },
          { key: 'B', en: 'stand up at once', cn: '立刻站起来', correct: false, reason: '他恰恰是让人放松下来。' },
          { key: 'C', en: 'leave in a hurry', cn: '匆匆离开', correct: false, reason: '他们正坐着，没有要走的意思。' }
        ],
        analysis: 'kick back 和 chill out 意思接近，都指「松弛下来」。这句话更像江予说给自己听的。',
        wrongFeedback: '你选错了，顾清和立刻站起来，以为出了什么事。气血 -10',
        afterCorrect: '顾清和终于靠回椅背。阳光落在他脸上，江予看了很久，没有移开视线。'
      }
    ],
    completeText: '第十八章结束。那天回家，两个人都晒黑了一点，谁也没提那条记者的消息。'
  },
  {
    id: 'dm_19',
    index: 19,
    title: '第 19 章 · 最后一箱行李',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '巡演取消后的第三周，工作室要清空。江予站在仓库里，地上堆着灯牌、应援服和没拆封的礼物。空气里全是纸箱的味道。',
    questions: [
      {
        plotDescription: '搬家公司在门口等，顾清和看了一眼表。',
        line: "Let us wrap up here before six. The truck leaves at seven.",
        lineCn: '我们六点前把这儿收尾。车七点走。',
        prompt: "根据上下文，选出画线词汇 'Wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'finish something', cn: '收尾、把事情做完', correct: true, reason: 'wrap up 指把工作收尾结束，正对应要在六点前弄完。' },
          { key: 'B', en: 'start all over again', cn: '从头再来', correct: false, reason: '他们是在收东西，不是重新开始。' },
          { key: 'C', en: 'take a long break', cn: '长时间休息', correct: false, reason: '时间很紧，不是休息的时候。' }
        ],
        analysis: 'wrap up 原意是「包起来」，引申为「收尾」。江予听见这个词，才发现一个阶段真的要结束了。',
        wrongFeedback: '你选错了，江予以为你要从头再来，把刚封好的箱子又拆开。气血 -10',
        afterCorrect: '江予蹲下去，把一叠灯牌抱起来。最上面那块写着他的名字，边角已经磨白了。'
      },
      {
        plotDescription: '顾清和把他手里的东西分开，问哪些要留。',
        line: "Sort out what you keep. I will handle the rest.",
        lineCn: '把你留的东西理出来。剩下的我来处理。',
        prompt: "根据上下文，选出画线词汇 'Sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'throw everything away', cn: '把所有东西都扔掉', correct: false, reason: '他要先分出留下的，不是全部丢掉。' },
          { key: 'B', en: 'organize or resolve something', cn: '整理、分出个头绪', correct: true, reason: 'sort out 指把混乱的东西理清，正合分拣行李的场景。' },
          { key: 'C', en: 'buy more boxes', cn: '再买些箱子', correct: false, reason: '眼下是整理，不是采购。' }
        ],
        analysis: 'sort out 既是「整理物品」，也是「解决问题」。顾清和说的这句，替江予省掉了一半的难。',
        wrongFeedback: '你选错了，江予以为你要全扔，抱着一箱东西不肯放。气血 -10',
        afterCorrect: '江予最后只留了一个小箱子：几封信、一张旧海报、一个坏掉的耳机。'
      },
      {
        plotDescription: '粉丝群里有人问，工作室是不是真的没了。',
        line: "I cannot deal with the fans today. Not today.",
        lineCn: '我今天没法应付粉丝。今天不行。',
        prompt: "根据上下文，选出画线词汇 'Deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'handle a problem or situation', cn: '处理、应付', correct: true, reason: 'deal with 指应对处理，正对应他今天没有力气面对粉丝。' },
          { key: 'B', en: 'meet someone for the first time', cn: '初次见面', correct: false, reason: '他和粉丝不是初次见面，而是要应付这件事。' },
          { key: 'C', en: 'ignore forever', cn: '永远无视', correct: false, reason: '他说的是今天不行，不是永远不管。' }
        ],
        analysis: 'deal with 强调「处理掉」，带一点负担感。江予不是不在乎粉丝，是今天连解释的力气都没有。',
        wrongFeedback: '你选错了，江予以为你要他去见粉丝，转身就往外走。气血 -10',
        afterCorrect: '顾清和把手机收走：「今天不看。明天我陪你一起回。」江予坐在箱子上，点了点头。'
      },
      {
        plotDescription: '仓库的门要关了，江予还站着不动。',
        line: "Chill out. Breathe. We have time.",
        lineCn: '冷静点。呼吸。我们还有时间。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'hurry up', cn: '快点', correct: false, reason: '他说的正好相反，是让对方慢下来。' },
          { key: 'B', en: 'get angry', cn: '发火', correct: false, reason: '这句是在安抚，不是挑火。' },
          { key: 'C', en: 'calm down and relax', cn: '冷静下来、放松', correct: true, reason: 'chill out 指让人别紧绷，正合他让江予喘口气。' }
        ],
        analysis: 'chill out 是口语里的「别急、放松点」。顾清和说这句时，手一直放在他背上。',
        wrongFeedback: '你选错了，江予以为你在催他，抱箱子的动作更快了。气血 -10',
        afterCorrect: '江予深吸了一口气，把最后一个箱子递给他。仓库的灯灭了，两个人站在路灯下。'
      }
    ],
    completeText: '第十九章结束。搬完最后一件东西，江予回头看了一眼那扇卷帘门，没有拍照。'
  },
  {
    id: 'dm_20',
    index: 20,
    title: '第 20 章 · 深夜的养生局',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '清空工作室的第二天，两个人都病了。顾清和把药、水和一袋坚果摆在茶几上，像在布置一间小病房。',
    questions: [
      {
        plotDescription: '江予伸手去拿药，被按住了。',
        line: "Eat a snack first. You cannot take pills on an empty stomach.",
        lineCn: '先吃点零食。不能空腹吃药。',
        prompt: "根据上下文，选出画线词汇 'Snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a full dinner', cn: '一顿正餐', correct: false, reason: '他给的是一小袋坚果，不是正餐。' },
          { key: 'B', en: 'a small amount of food between meals', cn: '零食、两餐之间的小食', correct: true, reason: 'snack 指少量的垫肚子食物，正对应那袋坚果。' },
          { key: 'C', en: 'a drink', cn: '一杯饮料', correct: false, reason: '他指的是吃的，水是另外一杯。' }
        ],
        analysis: 'snack 指正餐之外的小食，可以作名词也可以作动词。顾清和的医嘱，细到让人没法反驳。',
        wrongFeedback: '你选错了，江予直接吞了药，胃里一阵翻。气血 -10',
        afterCorrect: '江予嚼了两颗坚果，皱着眉：「你连这个都管。」顾清和说：「嗯，都管。」'
      },
      {
        plotDescription: '江予咳了两声，顾清和把水杯推近。',
        line: "Hydrate. Two glasses, then we talk.",
        lineCn: '补水。喝两杯，然后我们再谈。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'take in enough water', cn: '补水、摄入足够水分', correct: true, reason: 'hydrate 指补充水分，正对应他要求喝两杯水。' },
          { key: 'B', en: 'sleep for a while', cn: '睡一会儿', correct: false, reason: '喝水不是睡觉。' },
          { key: 'C', en: 'eat something sweet', cn: '吃点甜的', correct: false, reason: '他推的是水杯，不是糖。' }
        ],
        analysis: 'hydrate 是医学和健身语境里的高频词。顾清和用了最简短的命令句，是怕江予又敷衍过去。',
        wrongFeedback: '你选错了，江予以为你要他睡觉，把被子拉到了头上。气血 -10',
        afterCorrect: '江予喝完两杯，把杯子放下：「谈什么？」顾清和说：「谈你为什么不肯休息。」'
      },
      {
        plotDescription: '江予的脖子僵得转不过来，顾清和让他站起来。',
        line: "Stand up and stretch. Your neck is stiff.",
        lineCn: '站起来拉伸一下。你脖子都僵了。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'sit still without moving', cn: '坐着不动', correct: false, reason: '他让江予站起来，显然不是坐着。' },
          { key: 'B', en: 'run as fast as you can', cn: '尽快跑起来', correct: false, reason: '这里只是活动身体，不是跑步。' },
          { key: 'C', en: 'extend your body to relax the muscles', cn: '拉伸、伸展身体', correct: true, reason: 'stretch 指伸展身体放松肌肉，正对应脖子僵。' }
        ],
        analysis: 'stretch 既可以指伸懒腰，也可以指拉伸训练。江予伸到一半，听见脖子响了一声。',
        wrongFeedback: '你选错了，江予坐着不动，脖子更僵了。气血 -10',
        afterCorrect: '顾清和伸手按了按他的肩：「这里，放松。」江予的呼吸慢了半拍。'
      },
      {
        plotDescription: '按到一半，江予的眼神飘到窗外，没有焦点。',
        line: "You zoned out again. Where did you go?",
        lineCn: '你又走神了。去哪儿了？',
        prompt: "根据上下文，选出画线词汇 'Zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'stop paying attention and stare blankly', cn: '走神、发呆', correct: true, reason: 'zone out 指注意力飘走、发呆，正合他眼神没有焦点。' },
          { key: 'B', en: 'fall into a deep sleep', cn: '陷入深度睡眠', correct: false, reason: '他睁着眼，只是注意力不在了。' },
          { key: 'C', en: 'shout suddenly', cn: '突然大喊', correct: false, reason: '屋子里一直很安静。' }
        ],
        analysis: 'zone out 是「走神」的口语说法，常指短暂地神游。江予走神的方向，顾清和大概猜得到。',
        wrongFeedback: '你选错了，江予以为你在问他睡没睡，说自己不困。气血 -10',
        afterCorrect: '江予回过神：「我在想，如果我不唱了，还能做什么。」顾清和没有立刻回答。'
      }
    ],
    completeText: '第二十章结束。那晚谁也没给出答案，但两个人都没再假装一切都好。'
  },
  {
    id: 'dm_21',
    index: 21,
    title: '第 21 章 · 账户余额只剩四位数',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '停工第四个月，江予第一次认真看自己的账户。数字比他记得的少了一个零，房租下周就到期。他把手机翻过去，扣在桌上。',
    questions: [
      {
        plotDescription: '顾清和端着水进来，看见他盯着屏幕发呆。',
        line: "I am broke. Not almost broke. Broke.",
        lineCn: '我身无分文了。不是快没钱，是没钱。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely busy', cn: '非常忙', correct: false, reason: '他说的是账户里的钱，不是时间安排。' },
          { key: 'B', en: 'having no money at all', cn: '身无分文、一分钱都没有', correct: true, reason: 'broke 在口语里指没钱，正对应账户余额见底。' },
          { key: 'C', en: 'injured', cn: '受伤了', correct: false, reason: '这里谈的是经济状况，不是身体。' }
        ],
        analysis: 'broke 是口语里最常用的「没钱」，比 poor 更直接。江予连说三遍，是在逼自己接受这件事。',
        wrongFeedback: '你选错了，顾清和以为他在说太忙，还问要不要推掉工作。气血 -10',
        afterCorrect: '顾清和在他对面坐下：「差多少？」江予笑了一下：「差到我不好意思说。」'
      },
      {
        plotDescription: '桌上的信封是房东塞进来的。',
        line: "The rent is due next Friday. I checked twice.",
        lineCn: '房租下周五到期。我查了两遍。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you pay regularly to live somewhere', cn: '房租、租金', correct: true, reason: 'rent 指为住处定期支付的租金，正对应房东塞的信封。' },
          { key: 'B', en: 'a government tax', cn: '政府税收', correct: false, reason: '这笔钱交给房东，不是交给政府。' },
          { key: 'C', en: 'a deposit paid once', cn: '一次性押金', correct: false, reason: '押金是入住时交的，这里说的是每月的租金。' }
        ],
        analysis: 'rent 是每月固定要交的住房费用，常和 pay、due 连用。这个数字比任何通告都更逼人。',
        wrongFeedback: '你选错了，江予以为你在说押金，松了口气说那早就交过了。气血 -10',
        afterCorrect: '顾清和把信封拿起来看了看，又放回去：「这个月我来。」江予立刻摇头。'
      },
      {
        plotDescription: '顾清和说，那就把每个月要花的钱列出来。',
        line: "We need a budget. A real one, on paper.",
        lineCn: '我们需要一份预算。真正的，写在纸上的。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a shopping list', cn: '购物清单', correct: false, reason: '购物清单只是要买什么，budget 管的是总共能花多少。' },
          { key: 'B', en: 'a bank card', cn: '一张银行卡', correct: false, reason: '卡是工具，不是花钱的计划。' },
          { key: 'C', en: 'a plan for how much money you can spend', cn: '预算、开销计划', correct: true, reason: 'budget 指预先算好的收支计划，正对应他要在纸上列出来。' }
        ],
        analysis: 'budget 的核心是「先算再花」。江予从前不用算，现在必须面对每一个数字。',
        wrongFeedback: '你选错了，江予以为你要列购物清单，问要不要买点水果。气血 -10',
        afterCorrect: '两个人趴在茶几上算到半夜。最后那行数字还是不够，江予把笔盖扣上，很久没动。'
      },
      {
        plotDescription: '第二天，江予路过一家咖啡店，在门口站了两秒。',
        line: "No splurging this month. Not even coffee.",
        lineCn: '这个月不许挥霍。连咖啡都不行。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'save every coin', cn: '省下每一分钱', correct: false, reason: '他说的是不许乱花，不是要拼命存。' },
          { key: 'B', en: 'borrow money from friends', cn: '向朋友借钱', correct: false, reason: '这里说的是消费，不是借贷。' },
          { key: 'C', en: 'spend a lot on something you want', cn: '挥霍、为想要的东西痛快花钱', correct: true, reason: 'splurge 指为享受花一大笔，正对应他要克制的那杯咖啡。' }
        ],
        analysis: 'splurge 通常带一点「犒劳自己」的意味，常接 on。连咖啡都算挥霍，说明账真的算到了骨头里。',
        wrongFeedback: '你选错了，江予以为你在鼓励存钱，转身就买了两杯。气血 -10',
        afterCorrect: '顾清和把自己那杯递给他：「我请。这不算挥霍。」江予接过去，小声说了句谢谢。'
      }
    ],
    completeText: '第二十一章结束。那张预算表被贴在冰箱上，最下面一行写着：这个月，不借钱。'
  },
  {
    id: 'dm_22',
    index: 22,
    title: '第 22 章 · 那份代言合同',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '有人递来一份代言，报价高得离谱，条件是先交一笔保证金。江予把合同摊在桌上，顾清和看了三分钟。',
    questions: [
      {
        plotDescription: '顾清和翻到报价那一页，皱起眉。',
        line: "Fifty thousand for a logo? That is a rip-off.",
        lineCn: '一个 logo 要五万？这是明抢。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a great bargain', cn: '超值的好价', correct: false, reason: '他是在嫌贵，不是在夸便宜。' },
          { key: 'B', en: 'something far more expensive than it is worth', cn: '坑钱货、宰人的价格', correct: true, reason: 'rip-off 指价格远高于价值，正合他对这个报价的判断。' },
          { key: 'C', en: 'a discount', cn: '折扣', correct: false, reason: '五万一个 logo，和折扣没有关系。' }
        ],
        analysis: 'rip-off 是口语里形容「被宰」的常用词。顾清和看的不是设计费，是这家公司想从江予身上捞多少。',
        wrongFeedback: '你选错了，江予以为你在说这价很值，当场就要签字。气血 -10',
        afterCorrect: '江予把笔放下：「他说这是行业价。」顾清和把合同推回去：「行业不背这个锅。」'
      },
      {
        plotDescription: '合同的联系人一栏，写着一个熟悉的名字。',
        line: "The man is a freeloader. He even asked you to pay his taxi.",
        lineCn: '那人是白嫖怪。他连打车钱都让你付。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who lives off other people', cn: '白嫖怪、长期占别人便宜的人', correct: true, reason: 'freeloader 指自己不付出、靠别人养的人，正对应让人垫打车钱。' },
          { key: 'B', en: 'a rich investor', cn: '有钱的投资人', correct: false, reason: '真正有钱的人不会让合作方付打车钱。' },
          { key: 'C', en: 'a careful accountant', cn: '谨慎的会计', correct: false, reason: '这里说的是占便宜，不是职业。' }
        ],
        analysis: 'freeloader 由 free 加 loader 构成，专指蹭吃蹭喝的人。顾清和提醒得很直接：这种合同不会只坑一次。',
        wrongFeedback: '你选错了，江予以为你在夸对方有钱，还把报价又抬高了一档。气血 -10',
        afterCorrect: '江予沉默了一会儿：「他以前也这样。吃饭从不掏钱，说下次。」顾清和说：「没有下次。」'
      },
      {
        plotDescription: '顾清和按合同上的地址打了电话，对面无人接听。',
        line: "It is a scam. The address does not exist.",
        lineCn: '这是个骗局。那个地址根本不存在。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a legal contract', cn: '一份合法合同', correct: false, reason: '地址都不存在，谈不上合法。' },
          { key: 'B', en: 'a trick to cheat people out of money', cn: '骗局、骗钱的把戏', correct: true, reason: 'scam 指设局骗钱，正对应空地址和保证金。' },
          { key: 'C', en: 'a charity project', cn: '公益项目', correct: false, reason: '公益不会先收保证金。' }
        ],
        analysis: 'scam 可以是名词也可以是动词，核心是「骗钱」。那笔保证金，才是整份合同真正的目的。',
        wrongFeedback: '你选错了，江予以为你说这是合法合同，第二天就去打了款。气血 -10',
        afterCorrect: '江予把合同撕成两半：「我差一点又信了。」顾清和把碎片收走：「差一点，就是没有。」'
      },
      {
        plotDescription: '晚上，江予把所有的欠款写在纸上。',
        line: "I am already in debt. I cannot pay a deposit too.",
        lineCn: '我已经欠着债了。不能再交一笔保证金。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you owe to someone', cn: '债务、欠别人的钱', correct: true, reason: 'debt 指欠款，正对应纸上列出的那些数字。' },
          { key: 'B', en: 'savings in the bank', cn: '银行里的存款', correct: false, reason: '存款是自己的钱，debt 是欠别人的钱。' },
          { key: 'C', en: 'a monthly salary', cn: '每月的薪水', correct: false, reason: '薪水是收入，不是欠款。' }
        ],
        analysis: 'in debt 是固定搭配，表示处于负债状态。江予把数字写下来的时候，手比签手术同意书时还稳。',
        wrongFeedback: '你选错了，江予以为你在说他有存款，去找银行卡找了一晚。气血 -10',
        afterCorrect: '顾清和看着那张纸，没有说我来还，只说：「我们一起把它变短。」'
      }
    ],
    completeText: '第二十二章结束。那张欠款清单被折成小方块，放进了江予的口袋。'
  },
  {
    id: 'dm_23',
    index: 23,
    title: '第 23 章 · 抽屉里的账单',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '月底，抽屉里塞满了账单。江予把现金摊在桌上数了三遍，还是差一截。顾清和坐在对面，安静地等他数完。',
    questions: [
      {
        plotDescription: '江予把最后一张钞票压平，忽然笑了一下。',
        line: "My last paycheck was three months ago. I keep forgetting.",
        lineCn: '我上一笔薪水是三个月前的。我总忘。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'a receipt for a purchase', cn: '购物收据', correct: false, reason: '收据证明你花了钱，paycheck 是你收到的工资。' },
          { key: 'B', en: 'the money you receive for your work', cn: '薪水、工资', correct: true, reason: 'paycheck 指工作所得的报酬，正对应三个月没进账。' },
          { key: 'C', en: 'a yearly bonus', cn: '年终奖金', correct: false, reason: '奖金是额外部分，这里说的是主要收入。' }
        ],
        analysis: 'paycheck 原指工资支票，现在泛指每次发的薪水。三个月这个数字，比任何形容词都更沉。',
        wrongFeedback: '你选错了，江予以为你在说收据，把抽屉里的票据又翻了一遍。气血 -10',
        afterCorrect: '顾清和把自己的卡推过来：「先用这个。」江予没有接：「我想自己撑一次。」'
      },
      {
        plotDescription: '账单一张张摊开，最上面是医院的。',
        line: "The bills do not care that I am famous.",
        lineCn: '账单可不在乎我是不是明星。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'statements showing money you owe', cn: '账单、欠款通知', correct: true, reason: 'bills 指需要付款的单据，正对应桌上这一堆。' },
          { key: 'B', en: 'coins in your pocket', cn: '口袋里的硬币', correct: false, reason: '硬币是现金，不是催缴的单据。' },
          { key: 'C', en: 'work contracts', cn: '工作合同', correct: false, reason: '合同是合作文件，不是要付的钱。' }
        ],
        analysis: 'bill 既是「账单」，也是议会的「法案」，靠语境区分。这句话的无奈在于：名气不能抵账。',
        wrongFeedback: '你选错了，江予以为你在说硬币，把存钱罐倒了出来。气血 -10',
        afterCorrect: '顾清和把医院那张抽出来：「这张我来。不是借，是我该出的。」江予抬头看他。'
      },
      {
        plotDescription: '第二天在便利店，收银台的机器坏了。',
        line: "Do you have cash? The machine is broken.",
        lineCn: '你有现金吗？机器坏了。',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'a credit card', cn: '信用卡', correct: false, reason: '机器坏了，正是因为不能用卡，才问现金。' },
          { key: 'B', en: 'a cheque', cn: '支票', correct: false, reason: '便利店不收支票，这里要的是现钱。' },
          { key: 'C', en: 'money in notes and coins', cn: '现金、现钞', correct: true, reason: 'cash 指手里的纸币和硬币，正对应机器故障的场合。' }
        ],
        analysis: 'cash 是不可数名词，指实体现金。江予翻遍口袋，只找出几张皱掉的纸币。',
        wrongFeedback: '你选错了，江予递过去一张支票，收银员愣在原地。气血 -10',
        afterCorrect: '顾清和替他付了那袋面包。出门后江予说：「下次我还你。」顾清和说：「记着。」'
      },
      {
        plotDescription: '回家路上，江予接到一个电话，说可以借钱给他。',
        line: "I will not take a loan from him. Not from him.",
        lineCn: '我不会向他贷款。绝不向他。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money borrowed and paid back later', cn: '贷款、借款', correct: true, reason: 'loan 指借来要还的钱，正对应电话里提出的借款。' },
          { key: 'B', en: 'a gift with no return', cn: '不用还的礼物', correct: false, reason: '礼物不用还，loan 是要还的，这是关键区别。' },
          { key: 'C', en: 'a fine for breaking rules', cn: '违规罚款', correct: false, reason: '罚款是被处罚，不是借款。' }
        ],
        analysis: 'loan 的核心是「借了要还」。江予拒绝的不是钱，是再次把自己交到那个人手里。',
        wrongFeedback: '你选错了，江予以为那是礼物，还说了声谢谢。气血 -10',
        afterCorrect: '顾清和问：「那如果是我借你？」江予想了很久，说：「那我要写借条。」'
      }
    ],
    completeText: '第二十三章结束。那晚江予第一次主动开口借钱，借的人是顾清和，借条写了两行。'
  },
  {
    id: 'dm_24',
    index: 24,
    title: '第 24 章 · 超市里的两盒草莓',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '超市打烊前一小时，草莓买一送一。江予拿起又放下，顾清和推着车站在旁边，没有催他。',
    questions: [
      {
        plotDescription: '江予把两盒草莓翻过来，看价签。',
        line: "These ones are cheap. The other box is not.",
        lineCn: '这些很便宜。另一盒不是。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'low in price', cn: '便宜的、价格低的', correct: true, reason: 'cheap 指价格低，正对应他在对比价签。' },
          { key: 'B', en: 'fresh', cn: '新鲜的', correct: false, reason: '他在看价格，不是看新鲜程度。' },
          { key: 'C', en: 'sweet', cn: '甜的', correct: false, reason: '这一句里没有尝过，只比较了价钱。' }
        ],
        analysis: 'cheap 形容商品是「便宜」，形容人时却可能是「抠门」，要看语境。这里只是价签上的数字。',
        wrongFeedback: '你选错了，江予以为你在说新鲜，把两盒都放回了货架。气血 -10',
        afterCorrect: '顾清和把贵的那个放进车里：「买这个。」江予伸手要拿回来：「太贵了。」'
      },
      {
        plotDescription: '江予压低声音，说这个月真的不行。',
        line: "I can afford it this week. Really.",
        lineCn: '这周我负担得起。真的。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'deserve something', cn: '值得拥有某物', correct: false, reason: '这里说的是钱够不够，不是值不值得。' },
          { key: 'B', en: 'have enough money for something', cn: '负担得起、买得起', correct: true, reason: 'afford 指经济上能承担，正对应他在算这周的钱。' },
          { key: 'C', en: 'know how to cook', cn: '会做这道菜', correct: false, reason: '这里没有做饭的意思。' }
        ],
        analysis: 'can afford 是「买得起」，常和否定连用。江予说得很用力，像在说服对方，也像在说服自己。',
        wrongFeedback: '你选错了，江予以为你在说他值得，脸一下红了。气血 -10',
        afterCorrect: '顾清和没揭穿他：「那就当是我买的。」江予盯着购物车，最后什么也没说。'
      },
      {
        plotDescription: '结账前，江予又看了一眼那盒贵的。',
        line: "The expensive ones are worth it. Trust me on strawberries.",
        lineCn: '贵的那盒值了。草莓这件事你信我。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'free of charge', cn: '免费', correct: false, reason: '贵的那盒要付钱，不是免费。' },
          { key: 'B', en: 'good enough to justify the money', cn: '值这个价、花得值', correct: true, reason: 'worth it 指价格虽高但值得，正合他劝江予买贵的。' },
          { key: 'C', en: 'too expensive to buy', cn: '贵得买不起', correct: false, reason: '他说的是值，不是买不起。' }
        ],
        analysis: 'worth it 是口语里评价「花得值不值」的固定说法。顾清和用一盒草莓，说的是另一种生活态度。',
        wrongFeedback: '你选错了，江予以为你说免费，直接把两盒都塞进袋子。气血 -10',
        afterCorrect: '回家后，两个人坐在厨房洗草莓。江予吃了一颗，忽然说：「确实值。」'
      },
      {
        plotDescription: '吃到一半，江予说起自己最近在录语音。',
        line: "I started a side hustle. Recording voice notes for a friend.",
        lineCn: '我开始做副业了。帮朋友录语音。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a job you do besides your main one', cn: '副业、主业之外的赚钱方式', correct: true, reason: 'side hustle 指主业之外的收入来源，正对应录语音这份零活。' },
          { key: 'B', en: 'a hobby with no pay', cn: '不给钱的爱好', correct: false, reason: '他说的是赚钱的活，不是纯爱好。' },
          { key: 'C', en: 'a long vacation', cn: '长假', correct: false, reason: '录语音是工作，不是休假。' }
        ],
        analysis: 'side hustle 是近年高频词，强调「用业余时间挣第二份钱」。江予开口说这件事时，有一点不好意思。',
        wrongFeedback: '你选错了，江予以为你在说长假，问你什么时候出发。气血 -10',
        afterCorrect: '顾清和说：「那你的声音还在。」江予低头挑着草莓叶：「至少还能换点钱。」'
      }
    ],
    completeText: '第二十四章结束。那盒草莓最后剩了一半，江予说明天早上吃，结果半夜就没了。'
  },
  {
    id: 'dm_25',
    index: 25,
    title: '第 25 章 · 他实习那年',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '夜里，顾清和说起自己实习那年：一天站十二个小时，工资按最低标准算，月底账户常常是负数。',
    questions: [
      {
        plotDescription: '江予问他，那几年是怎么撑过来的。',
        line: "I lived on minimum wage for two years.",
        lineCn: '我靠最低工资过了两年。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest pay allowed by law', cn: '最低工资、法定最低薪酬', correct: true, reason: 'minimum wage 指法律规定的工资下限，正对应他实习时的收入。' },
          { key: 'B', en: 'a very high salary', cn: '非常高的薪水', correct: false, reason: '他的语气是苦，不是炫耀高薪。' },
          { key: 'C', en: 'a student loan', cn: '学生贷款', correct: false, reason: '这里说的是工资，不是贷款。' }
        ],
        analysis: 'minimum wage 是经济学里的固定说法，指法定最低工资。顾清和说得平淡，江予却听得很认真。',
        wrongFeedback: '你选错了，江予以为你在说高薪，问你当年是不是很风光。气血 -10',
        afterCorrect: '顾清和说：「最穷的时候，一周只吃面包和鸡蛋。」江予问：「后悔吗？」他说：「不后悔。」'
      },
      {
        plotDescription: '顾清和把水杯放下，说起最窘迫的一次。',
        line: "My account hit overdraft twice that winter.",
        lineCn: '那个冬天我的账户透支了两次。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a cash bonus', cn: '现金奖金', correct: false, reason: '奖金是进账，overdraft 是账户被花超了。' },
          { key: 'B', en: 'spending more than your account holds', cn: '透支、账户余额被花穿', correct: true, reason: 'overdraft 指支取超过余额，正对应账户变成负数。' },
          { key: 'C', en: 'a tax refund', cn: '退税', correct: false, reason: '退税是拿回钱，和透支相反。' }
        ],
        analysis: 'overdraft 既是「透支」这个行为，也是银行给的透支额度。那年冬天，他连买双厚袜子都要算。',
        wrongFeedback: '你选错了，江予以为你拿了奖金，还替你高兴。气血 -10',
        afterCorrect: '江予安静了很久，才说：「你从来没跟我提过这些。」顾清和说：「提了也不能改变什么。」'
      },
      {
        plotDescription: '江予问他，那件一直穿到现在的旧大衣就是这么来的吗。',
        line: "I saved up for a year to buy that coat.",
        lineCn: '我攒了一年的钱才买下那件外套。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money aside over time', cn: '存钱、一点点攒起来', correct: true, reason: 'save up 指长期把钱攒起来，正对应攒了一年。' },
          { key: 'B', en: 'spend it all at once', cn: '一次性花光', correct: false, reason: '攒一年才买，和一次性花光相反。' },
          { key: 'C', en: 'borrow from the bank', cn: '向银行借', correct: false, reason: '他是攒钱，不是借钱。' }
        ],
        analysis: 'save up for sth 是「为某物攒钱」。那件外套穿了这么多年，说明它不只是衣服。',
        wrongFeedback: '你选错了，江予以为你一次花光，问你是不是冲动消费。气血 -10',
        afterCorrect: '江予看着那件旧大衣：「怪不得你每年冬天都穿它。」顾清和说：「它是那年唯一像样的东西。」'
      },
      {
        plotDescription: '顾清和忽然反过来问他，现在这笔钱打算怎么用。',
        line: "You should invest in your voice, not in a car.",
        lineCn: '你该把钱投在你的嗓子上，不是买辆车。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'waste money on nothing', cn: '把钱白白浪费', correct: false, reason: '他说的是投入有价值的对方，不是浪费。' },
          { key: 'B', en: 'donate to charity', cn: '捐给慈善机构', correct: false, reason: '这里说的是为自己投入，不是捐赠。' },
          { key: 'C', en: 'put money into something for future benefit', cn: '投资、为长远收益投入', correct: true, reason: 'invest 指为未来回报而投入，正对应把钱用在嗓子上。' }
        ],
        analysis: 'invest in 后面既可以接钱，也可以接时间和精力。顾清和的意思是：先把自己修好，再谈别的。',
        wrongFeedback: '你选错了，江予以为你说捐掉，第二天就联系了公益机构。气血 -10',
        afterCorrect: '江予低下头：「我连下个月的房租都紧。」顾清和说：「那就先投最便宜的那部分，休息。」'
      }
    ],
    completeText: '第二十五章结束。那晚江予第一次主动把复查预约提前了一周。'
  },
  {
    id: 'dm_26',
    index: 26,
    title: '第 26 章 · 一张皱掉的收据',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '四月，报税的单子摊了一桌。江予找不到一张收据，把整个抽屉倒在地上。纸片落了一地，像下了一场雪。',
    questions: [
      {
        plotDescription: '顾清和蹲下来，一张张帮他捡。',
        line: "The tax office does not care about your schedule.",
        lineCn: '税务局可不在乎你的档期。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you must pay to the government', cn: '税、必须上缴政府的钱', correct: true, reason: 'tax 指依法缴纳的税款，正对应报税这件事。' },
          { key: 'B', en: 'a tip for service', cn: '服务小费', correct: false, reason: '小费给服务人员，税交给政府。' },
          { key: 'C', en: 'a fine for lateness', cn: '迟交罚款', correct: false, reason: '罚款是处罚，税是义务，不是一回事。' }
        ],
        analysis: 'tax 是「税」，报税季是 tax season。江予从前只管唱歌，这些数字一直是别人替他处理。',
        wrongFeedback: '你选错了，江予以为你在说小费，问你想要多少。气血 -10',
        afterCorrect: '江予蹲在地上，忽然说：「以前这些事都是别人做的。」顾清和说：「现在是你自己。」'
      },
      {
        plotDescription: '第二天，手机弹出一条到账通知。',
        line: "I got a refund. Two hundred. Let us eat something good.",
        lineCn: '我拿到退款了。两百块。我们去吃点好的。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'money returned to you', cn: '退款、退回来的钱', correct: true, reason: 'refund 指原路退回的钱，正对应到账通知。' },
          { key: 'B', en: 'a debt you owe', cn: '你欠的债', correct: false, reason: '钱是退回来的，不是欠出去。' },
          { key: 'C', en: 'a bill to pay', cn: '要付的账单', correct: false, reason: '到账是收钱，账单是付钱。' }
        ],
        analysis: 'refund 既可作名词也可作动词，指退回款项。两百块不多，却让这一章第一次有了点轻快。',
        wrongFeedback: '你选错了，江予以为你在说又欠了钱，脸一下垮了。气血 -10',
        afterCorrect: '两个人在楼下吃了一碗面。江予把找回来的零钱压在碗底，说这是今天最像样的收入。'
      },
      {
        plotDescription: '吃完面，江予想起那张收据还没找到。',
        line: "Keep the receipt. We may need it.",
        lineCn: '把收据留着。我们可能会用到。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a ticket for a show', cn: '演出门票', correct: false, reason: '这里说的是购物凭证，不是门票。' },
          { key: 'B', en: 'a menu', cn: '菜单', correct: false, reason: '菜单是点菜用的，不证明付过钱。' },
          { key: 'C', en: 'a paper proving you paid', cn: '收据、付款凭证', correct: true, reason: 'receipt 指证明付款的凭证，正对应报税要用。' }
        ],
        analysis: 'receipt 是「收据」，报税时用来证明支出。江予从前嫌它占地方，现在一张都不敢丢。',
        wrongFeedback: '你选错了，江予把菜单收进了文件袋，还说这下应该够了。气血 -10',
        afterCorrect: '江予把那张皱掉的收据抚平，夹进文件夹。纸很薄，他却按了很久。'
      },
      {
        plotDescription: '结账时，江予多放了几张纸币在桌上。',
        line: "Leave a tip. He carried six boxes.",
        lineCn: '留点小费。他搬了六个箱子。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money given for good service', cn: '小费、给服务人员的额外钱', correct: true, reason: 'tip 指额外给服务人员的钱，正对应搬了六个箱子。' },
          { key: 'B', en: 'a government tax', cn: '政府税收', correct: false, reason: '这笔钱给的是服务员，不是政府。' },
          { key: 'C', en: 'a discount on the bill', cn: '账单折扣', correct: false, reason: '他是多给，不是少付。' }
        ],
        analysis: 'tip 在餐厅语境里是小费，也可以指「提示」。江予自己手头紧，却还是多留了一点。',
        wrongFeedback: '你选错了，江予把折扣听成了小费，站在柜台前算不明白。气血 -10',
        afterCorrect: '服务员愣了一下，连声道谢。出门后江予说：「他比我辛苦。」顾清和没有反驳。'
      }
    ],
    completeText: '第二十六章结束。回家的路上，江予把剩下的零钱都投进了便利店门口的捐款箱。'
  },
  {
    id: 'dm_27',
    index: 27,
    title: '第 27 章 · 工作室只剩两个人',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '工作室重新开张，只剩两个人。江予说要招人，顾清和把简历摊开，问他要招几个。窗外的招牌还没换。',
    questions: [
      {
        plotDescription: '江予竖起一根手指。',
        line: "Let us hire one assistant. Not five.",
        lineCn: '我们招一个助理就好。不是五个。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'give someone a job', cn: '雇佣、招人', correct: true, reason: 'hire 指聘用某人工作，正对应招一个助理。' },
          { key: 'B', en: 'fire someone', cn: '解雇某人', correct: false, reason: '他要招人，不是赶人，方向相反。' },
          { key: 'C', en: 'train a new worker', cn: '培训新员工', correct: false, reason: '培训发生在入职之后，这里说还没招。' }
        ],
        analysis: 'hire 是「雇」，和 fire 是一对反义动词。江予的克制，是这四年里学到的最贵的一课。',
        wrongFeedback: '你选错了，江予以为你要解雇人，问是不是又出事了。气血 -10',
        afterCorrect: '顾清和说：「一个人不够。」江予说：「先活下来，再谈够不够。」'
      },
      {
        plotDescription: '简历里有一份，迟到记录写了三次。',
        line: "You cannot fire him for being late once.",
        lineCn: '你不能因为他迟到一次就解雇他。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'hire someone new', cn: '雇一个新人', correct: false, reason: '这里的语境是把人赶走，不是招进来。' },
          { key: 'B', en: 'remove someone from their job', cn: '解雇、开除', correct: true, reason: 'fire 指让人失去工作，正对应迟到记录这份简历。' },
          { key: 'C', en: 'give someone a promotion', cn: '给某人升职', correct: false, reason: '没有人在谈升职。' }
        ],
        analysis: 'fire 在职场里是「开除」，语气比 dismiss 更直接。江予自己被人放弃过，所以格外谨慎。',
        wrongFeedback: '你选错了，江予以为你要招新人，把简历又收了起来。气血 -10',
        afterCorrect: '顾清和把那份简历放在一边：「那就见一面。看看他为什么迟到。」'
      },
      {
        plotDescription: '面试那天，那个人说自己想辞职去读书。',
        line: "If he wants to quit, let him quit.",
        lineCn: '如果他想辞职，就让他辞。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'leave your job by choice', cn: '辞职、主动离开工作', correct: true, reason: 'quit 指自己决定离开岗位，正对应他要去读书。' },
          { key: 'B', en: 'retire after a long career', cn: '工作多年后退休', correct: false, reason: '他是年轻助理，不是到了退休年龄。' },
          { key: 'C', en: 'complain about the job', cn: '抱怨这份工作', correct: false, reason: '抱怨和辞职是两件事。' }
        ],
        analysis: 'quit 强调「主动不干了」，后面可接 job 或直接单独用。江予听见这个决定，没有挽留。',
        wrongFeedback: '你选错了，江予以为他要退休，算起了退休金。气血 -10',
        afterCorrect: '那个人走后，江予说：「他至少知道自己想要什么。」顾清和看着他。'
      },
      {
        plotDescription: '一周后，留下来的人提出了一个要求。',
        line: "He asked for a promotion after three weeks.",
        lineCn: '他来了三周就要求升职。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning about performance', cn: '绩效警告', correct: false, reason: 'promotion 是往上走，警告是往下压。' },
          { key: 'B', en: 'a long holiday', cn: '一段长假', correct: false, reason: '他要的是职位，不是假期。' },
          { key: 'C', en: 'a move to a higher position', cn: '升职、职位提升', correct: true, reason: 'promotion 指升到更高职位，正对应三周就提要求。' }
        ],
        analysis: 'promotion 是「晋升」，和 raise（加薪）不完全一样。江予听完，居然笑了一下。',
        wrongFeedback: '你选错了，江予以为你在说绩效警告，去翻考核表。气血 -10',
        afterCorrect: '江予说：「告诉他，做出成绩再谈。」顾清和说：「你越来越像个老板了。」江予说：「穷出来的。」'
      }
    ],
    completeText: '第二十七章结束。招牌最后换了，新的那块更小，只有四个字：江予工作室。'
  },
  {
    id: 'dm_28',
    index: 28,
    title: '第 28 章 · 通宵的会议室',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '新专辑的预算表改到第九版。会议室的灯亮了一夜，桌上全是冷掉的咖啡。窗外天快亮了。',
    questions: [
      {
        plotDescription: '助理在群里又发了一条加班消息。',
        line: "No overtime this week. I mean it.",
        lineCn: '这周不许加班。我是认真的。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra hours beyond normal working time', cn: '加班、超出正常工时的部分', correct: true, reason: 'overtime 指正常工时之外的加点，正对应他禁止加班。' },
          { key: 'B', en: 'a day off', cn: '调休放假', correct: false, reason: '他是在禁止额外工时，不是安排休假。' },
          { key: 'C', en: 'a lunch break', cn: '午休时间', correct: false, reason: '午休是正常休息，不是加班。' }
        ],
        analysis: 'overtime 既是名词也是副词，work overtime 就是加班。江予自己熬过太多夜，不想再让别人熬。',
        wrongFeedback: '你选错了，江予以为你在说调休，给全组放了一天假。气血 -10',
        afterCorrect: '助理小声说：「可是明天要交。」江予说：「那是我的事，不是你们的。」'
      },
      {
        plotDescription: '顾清和把日历推过来，圈了一个日期。',
        line: "The deadline is Friday. Not next Friday.",
        lineCn: '死线是这周五。不是下周五。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the latest time by which something must be done', cn: '死线、最后期限', correct: true, reason: 'deadline 指必须完成的最后时间，正对应周五这个节点。' },
          { key: 'B', en: 'the starting date of a project', cn: '项目开始日期', correct: false, reason: '这里说的是结束时间，不是开始。' },
          { key: 'C', en: 'a public holiday', cn: '公共假日', correct: false, reason: '周五是交件日，不是假期。' }
        ],
        analysis: 'deadline 字面是「死亡线」，指不可再拖的时限。江予盯着那个红圈，把咖啡一口喝完。',
        wrongFeedback: '你选错了，江予以为你在说开始日期，松了口气。气血 -10',
        afterCorrect: '江予重新打开文档：「那就今晚。」顾清和说：「我陪你。」江予摇头：「你先睡。」'
      },
      {
        plotDescription: '第二天上午，客户临时改了方向。',
        line: "The client changed his mind again.",
        lineCn: '客户又改主意了。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a competitor in the same market', cn: '同行竞争对手', correct: false, reason: '客户是付钱的人，竞争对手是抢生意的人。' },
          { key: 'B', en: 'a colleague in the office', cn: '办公室的同事', correct: false, reason: '同事在内部，客户在外部。' },
          { key: 'C', en: 'a person who pays for a service', cn: '客户、付钱买服务的人', correct: true, reason: 'client 指购买服务的客户，正对应他改需求这件事。' }
        ],
        analysis: 'client 常用于专业服务场景，比 customer 更正式。江予听完只问了一句：改多少。',
        wrongFeedback: '你选错了，江予以为你在说竞争对手，去查对方的新歌。气血 -10',
        afterCorrect: '改的是一整段编曲。江予沉默了几秒，说：「行。但这是最后一次。」'
      },
      {
        plotDescription: '下午三点，所有人被叫进会议室。',
        line: "The meeting is at nine. Do not be late.",
        lineCn: '会议九点开始。别迟到。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned discussion with others', cn: '会议、约好的讨论', correct: true, reason: 'meeting 指安排好的碰头讨论，正对应所有人被叫进会议室。' },
          { key: 'B', en: 'a celebration party', cn: '庆功派对', correct: false, reason: '这是工作会议，不是庆祝。' },
          { key: 'C', en: 'a job interview', cn: '求职面试', correct: false, reason: '在场的人都已经在职。' }
        ],
        analysis: 'meeting 是职场最高频的词之一，可大可小。这一场会只开了二十分钟，却定了整张专辑的方向。',
        wrongFeedback: '你选错了，江予以为你在说派对，问要不要买酒。气血 -10',
        afterCorrect: '会后，江予把新的分工贴在白板上。每个人名下只有一件事，做完就能走。'
      }
    ],
    completeText: '第二十八章结束。那周没有人加班，专辑却按时交了。'
  },
  {
    id: 'dm_29',
    index: 29,
    title: '第 29 章 · 那个被砍掉的项目',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '周五，投资人临时撤资。江予做了半年的企划被划掉，企划部主管当场被解雇。会议室里没有人敢先开口。',
    questions: [
      {
        plotDescription: '白板上的进度条被擦掉了一半。',
        line: "The project is dead. Six months, gone.",
        lineCn: '这个项目完了。六个月，没了。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work with a goal', cn: '项目、有计划的一整套工作', correct: true, reason: 'project 指有计划推进的工作，正对应做了半年的企划。' },
          { key: 'B', en: 'a finished product on sale', cn: '已经上架的成品', correct: false, reason: '还在企划阶段，没有成品。' },
          { key: 'C', en: 'a monthly profit', cn: '每月利润', correct: false, reason: '这里说的是工作本身，不是收益。' }
        ],
        analysis: 'project 强调「有目标、有周期的一摊事」。六个月被一句话抹掉，江予站着没动。',
        wrongFeedback: '你选错了，江予以为你在说成品，问什么时候上架。气血 -10',
        afterCorrect: '江予把白板擦干净，说：「东西还在我脑子里。人还在，就不算全没。」'
      },
      {
        plotDescription: '主管抱着纸箱从办公室出来。',
        line: "He was fired this morning. Security walked him out.",
        lineCn: '他今早被炒了。保安把他送了出去。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'dismissed from a job', cn: '被炒、被解雇', correct: true, reason: 'fired 指被单位开除，正对应保安送人出门。' },
          { key: 'B', en: 'promoted to a higher post', cn: '被提拔', correct: false, reason: '抱着纸箱离开，不是升职。' },
          { key: 'C', en: 'moved to another office', cn: '调到别的办公室', correct: false, reason: '调动不会由保安陪同。' }
        ],
        analysis: 'be fired 是「被解雇」，比 quit 被动。江予看着他走过走廊，想起自己也曾被这样放弃。',
        wrongFeedback: '你选错了，江予以为他升职了，还想去道喜。气血 -10',
        afterCorrect: '江予追出去，在电梯口叫住他，说了句：「不是你的问题。」对方愣了一下，点了点头。'
      },
      {
        plotDescription: '回到会议室，投资人留下一句话：这不是慈善。',
        line: "This is a business, not a charity.",
        lineCn: '这是生意，不是慈善。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a hobby you enjoy', cn: '自己享受的爱好', correct: false, reason: '对方强调的是赚钱，不是兴趣。' },
          { key: 'B', en: 'a close friendship', cn: '亲密的朋友关系', correct: false, reason: '这句话正是在撇开人情。' },
          { key: 'C', en: 'commercial activity or a company', cn: '生意、商业活动', correct: true, reason: 'business 指以营利为目的的经营，正对应投资人撤资的理由。' }
        ],
        analysis: 'business 在这里不是「公司」，而是「做生意这回事」。江予第一次听懂了这句话里的冷。',
        wrongFeedback: '你选错了，江予以为你在说爱好，说那我自己玩。气血 -10',
        afterCorrect: '江予把合同合上：「那就按生意来。我找下一个愿意投的人。」'
      },
      {
        plotDescription: '晚上，顾清和问他手里还剩什么。',
        line: "We still have one deal on the table. One.",
        lineCn: '我们手上还有一个交易。就一个。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'a business agreement', cn: '交易、商业协议', correct: true, reason: 'deal 指谈成的商业合作，正对应桌上还剩下的那一个。' },
          { key: 'B', en: 'a serious quarrel', cn: '一场严重的争吵', correct: false, reason: '这里说的是合作，不是冲突。' },
          { key: 'C', en: 'an unpaid debt', cn: '一笔未还的债', correct: false, reason: '债务是要还的钱，deal 是合作。' }
        ],
        analysis: 'deal 在商务语境里指「成交的合作」，常用 make a deal。一个，也够重新开始。',
        wrongFeedback: '你选错了，江予以为你在说吵架，问是谁惹的事。气血 -10',
        afterCorrect: '江予抬头：「哪一个？」顾清和把一份传真放在桌上：「一家小厂牌。条件不高。」'
      }
    ],
    completeText: '第二十九章结束。那家小厂牌的合同只有六页，江予看到最后一页才敢相信是真的。'
  },
  {
    id: 'dm_30',
    index: 30,
    title: '第 30 章 · 签下去的那一笔',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '新的合同只有八页，比上一份薄了一半。江予一页页翻过去，最后停在分成那一行。桌上放着一支旧钢笔。',
    questions: [
      {
        plotDescription: '顾清和把合同推近一点。',
        line: "Read the contract before you sign it. All eight pages.",
        lineCn: '签之前把合同读完。八页全读。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a receipt for payment', cn: '付款收据', correct: false, reason: '收据证明付过钱，合同约定双方的权利义务。' },
          { key: 'B', en: 'a legal written agreement', cn: '合同、具有法律效力的书面协议', correct: true, reason: 'contract 指双方签署的法律文件，正对应这八页纸。' },
          { key: 'C', en: 'a personal letter', cn: '一封私人信件', correct: false, reason: '这里是商业文件，不是私人书信。' }
        ],
        analysis: 'contract 是「合同」，动词还可以表示「收缩」。江予这次读得很慢，每一条都用笔划了线。',
        wrongFeedback: '你选错了，江予以为你在说收据，直接翻到最后一页签了名。气血 -10',
        afterCorrect: '顾清和把笔按住：「还有一页。」江予笑了一下，把最后那页也读完了。'
      },
      {
        plotDescription: '分成那一栏的数字很小。',
        line: "The profit is small, but it is ours.",
        lineCn: '利润很少，但它是我们自己的。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'money gained after costs are paid', cn: '利润、扣除成本后赚的钱', correct: true, reason: 'profit 指收入减去成本后的净赚，正对应分成那一栏。' },
          { key: 'B', en: 'a loss in business', cn: '生意上的亏损', correct: false, reason: '他说的是少，不是亏。' },
          { key: 'C', en: 'a tax payment', cn: '一笔税款', correct: false, reason: '税是上缴的钱，profit 是赚到的钱。' }
        ],
        analysis: 'profit 是「利润」，和 revenue（营收）不同。数字小，但这是江予第一次真正拿回自己的东西。',
        wrongFeedback: '你选错了，江予以为你在说亏损，脸色一下白了。气血 -10',
        afterCorrect: '江予在分成那一行签了字：「小就小。至少是干净的。」'
      },
      {
        plotDescription: '合同最后附了一条奖金条款。',
        line: "There is a bonus if the album sells.",
        lineCn: '如果专辑卖得好，会有奖金。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fine for breaking a rule', cn: '违规罚款', correct: false, reason: 'bonus 是奖励，罚款是处罚，方向相反。' },
          { key: 'B', en: 'extra money added to your pay', cn: '奖金、额外的钱', correct: true, reason: 'bonus 指工资之外的奖励，正对应卖得好才有。' },
          { key: 'C', en: 'a loan to be repaid', cn: '需要偿还的贷款', correct: false, reason: '奖金不用还，贷款要还。' }
        ],
        analysis: 'bonus 是「额外奖励」，常和 performance 挂钩。顾清和看到这条时，比江予还认真。',
        wrongFeedback: '你选错了，江予以为你在说罚款，问是不是又违规了。气血 -10',
        afterCorrect: '江予把这条读了两遍：「卖得好才有。那就卖好一点。」'
      },
      {
        plotDescription: '签完最后一页，江予忽然问起从前的数字。',
        line: "My salary is lower than my assistant's was. Funny.",
        lineCn: '我的薪水比我助理当年的还低。挺好笑。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'a tip for good service', cn: '优质服务的小费', correct: false, reason: '这里说的是固定工资，不是小费。' },
          { key: 'B', en: 'a refund', cn: '一笔退款', correct: false, reason: '退款是退回的钱，不是薪酬。' },
          { key: 'C', en: 'fixed regular pay for a job', cn: '薪水、固定工资', correct: true, reason: 'salary 指定期发放的固定报酬，正对应他和助理的比较。' }
        ],
        analysis: 'salary 是按月或按年发放的固定薪酬，和按小时算的 wage 不同。江予说好笑，其实是在自嘲。',
        wrongFeedback: '你选错了，江予以为你在说小费，问你想要多少。气血 -10',
        afterCorrect: '顾清和把合同收好：「低一点没关系。这次是你自己签的。」江予握着那支旧钢笔，点了点头。'
      }
    ],
    completeText: '第三十章结束。签完合同，两个人在楼下吃了一顿很贵的饭，谁也没提预算。'
  },
  {
    id: 'dm_31',
    index: 31,
    title: '第 31 章 · 庆功宴上的第三杯',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '专辑上线那晚，工作室的人拉他去庆功。江予喝到第三杯，靠在窗边，话变得很少。顾清和是十一点来接他的。',
    questions: [
      {
        plotDescription: '车上很安静，江予先开口。',
        line: "Are you pissed off that I came home at two?",
        lineCn: '我两点才回家，你火大吗？',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '火大、非常生气', correct: true, reason: 'pissed off 是口语里「很生气」的强烈说法，正合他小心的试探。' },
          { key: 'B', en: 'very pleased', cn: '非常高兴', correct: false, reason: '如果是高兴，就不需要用这种试探的语气了。' },
          { key: 'C', en: 'sleepy', cn: '困了', correct: false, reason: '这里说的是情绪，不是精神状态。' }
        ],
        analysis: 'pissed off 比 angry 更口语、更冲，常出现在朋友之间。江予问得很轻，是因为他知道自己理亏。',
        wrongFeedback: '你选错了，顾清和以为你在问他高不高兴，愣了一下。气血 -10',
        afterCorrect: '顾清和看着前面的路：「我不火你晚归。我火你不接电话。」江予把手机翻出来，屏幕上十几个未接。'
      },
      {
        plotDescription: '到家门口，钥匙拧不动，锁卡住了。',
        line: "Do not freak out. The door is just stuck.",
        lineCn: '别慌。只是门卡住了。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm down slowly', cn: '慢慢冷静下来', correct: false, reason: '他是让对方别慌，而不是描述冷静的过程。' },
          { key: 'B', en: 'suddenly panic or lose control', cn: '崩溃、突然抓狂', correct: true, reason: 'freak out 指突然慌乱失控，正对应他提前安抚的动作。' },
          { key: 'C', en: 'laugh loudly', cn: '大声笑', correct: false, reason: '半夜的走廊里，没有人笑得出来。' }
        ],
        analysis: 'freak out 是口语里「突然炸了、慌了」的说法。顾清和说这句时，江予的手已经在抖。',
        wrongFeedback: '你选错了，江予以为你在让他慢慢冷静，站在门口深呼吸了十次。气血 -10',
        afterCorrect: '顾清和把钥匙接过去，转了两下，门开了。他侧过身，让江予先进。'
      },
      {
        plotDescription: '江予踢掉鞋，直接倒在沙发上。',
        line: "I am exhausted. Not tired. Exhausted.",
        lineCn: '我精疲力尽了。不是累，是耗尽。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'bored', cn: '无聊', correct: false, reason: '他说的是身体的耗空，不是没意思。' },
          { key: 'B', en: 'extremely tired', cn: '精疲力尽、彻底耗尽', correct: true, reason: 'exhausted 表示极度疲惫，正对应他连说两遍的强调。' },
          { key: 'C', en: 'hungry', cn: '饿了', correct: false, reason: '他不是在说饿。' }
        ],
        analysis: 'exhausted 的程度远高于 tired，是「被掏空」。他特意区分这两个词，说明累已经不只是身体层面。',
        wrongFeedback: '你选错了，顾清和去厨房给他热了饭，江予看着碗，一口也吃不下。气血 -10',
        afterCorrect: '顾清和把毯子盖到他身上，蹲下来解他的鞋带。江予闭着眼，说了一句很轻的谢谢。'
      },
      {
        plotDescription: '第二天中午，江予扶着额头坐起来。',
        line: "I have a hangover. Please do not turn on the light.",
        lineCn: '我宿醉。求你别开灯。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fever from a cold', cn: '感冒引起的发烧', correct: false, reason: '他昨晚喝了三杯，和感冒无关。' },
          { key: 'B', en: 'a headache caused by noise', cn: '噪音引起的头痛', correct: false, reason: '原因不是噪音，是酒。' },
          { key: 'C', en: 'the sick feeling after drinking too much', cn: '宿醉、喝多后的难受', correct: true, reason: 'hangover 专指饮酒过量后的不适，正对应昨晚的庆功宴。' }
        ],
        analysis: 'hangover 是「宿醉」，常和 have 搭配。顾清和没开灯，只把水和药放在茶几上。',
        wrongFeedback: '你选错了，江予以为你在说感冒，让你去拿体温计。气血 -10',
        afterCorrect: '江予喝完水，忽然说：「昨晚我没丢人吧。」顾清和说：「你抱着话筒唱了半小时。」'
      }
    ],
    completeText: '第三十一章结束。那天下午，江予把手机里所有未接来电都回了一遍，包括那个不该回的。'
  },
  {
    id: 'dm_32',
    index: 32,
    title: '第 32 章 · 那条被剪掉的采访',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '复出采访播出后，评论区一半在夸，一半在骂。有人翻出三年前的旧事，说他是靠医生上位。江予把手机扣在桌上。',
    questions: [
      {
        plotDescription: '粉丝群里有人贴出了攻击顾清和的截图。',
        line: "That fan group is toxic. Leave it.",
        lineCn: '那个粉丝群有毒。退了吧。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful and unpleasant', cn: '有毒的、充满恶意和伤害的', correct: true, reason: 'toxic 形容环境或关系有害，正对应群里那些攻击。' },
          { key: 'B', en: 'loyal and supportive', cn: '忠诚且支持的', correct: false, reason: '群里在攻击人，显然不是支持。' },
          { key: 'C', en: 'quiet and inactive', cn: '安静不活跃的', correct: false, reason: '截图里全是恶意发言，并不安静。' }
        ],
        analysis: 'toxic 原意是「有毒的」，现在常形容人际关系和网络环境。顾清和说这句时，语气很平静。',
        wrongFeedback: '你选错了，江予以为你在夸群里的粉丝忠诚，还发了一条感谢。气血 -10',
        afterCorrect: '江予退出了那个群，退之前截了一张图。他说：「我要记住他们是怎么骂你的。」'
      },
      {
        plotDescription: '采访里，主持人忽然提起了顾清和的名字。',
        line: "It got awkward when the host mentioned his name.",
        lineCn: '主持人提到他名字的时候，场面一下尴尬了。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'smooth and natural', cn: '顺畅自然的', correct: false, reason: '他说的是尴尬，和顺畅相反。' },
          { key: 'B', en: 'embarrassing and uncomfortable', cn: '尴尬、让人不自在', correct: true, reason: 'awkward 指气氛让人难受，正对应主持人提到敏感名字的瞬间。' },
          { key: 'C', en: 'exciting', cn: '令人兴奋的', correct: false, reason: '现场是僵住，不是兴奋。' }
        ],
        analysis: 'awkward 形容场面是「尬住了」，形容人是「笨拙」。江予当场只笑了一下，没有接话。',
        wrongFeedback: '你选错了，江予以为你在说现场很顺，松了口气。气血 -10',
        afterCorrect: '顾清和说：「你当时应该直接说，他是我的人。」江予抬头：「你确定？」顾清和说：「确定。」'
      },
      {
        plotDescription: '评论区有人留言：这条我能笑一年。',
        line: "I am dead. Did you see that comment?",
        lineCn: '我笑死了。你看到那条评论没有？',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'laughing extremely hard, slang', cn: '笑死我了（网络夸张说法）', correct: true, reason: 'dead 在网络口语里表示笑到不行，正对应后面的评论。' },
          { key: 'B', en: 'unconscious', cn: '失去意识', correct: false, reason: '字面意思在这里说不通，他正在刷评论。' },
          { key: 'C', en: 'bored', cn: '无聊', correct: false, reason: '他笑得不行，不是无聊。' }
        ],
        analysis: 'dead 是网络俚语里表示「笑死」的高频词，和字面「死亡」无关。这一章第一次出现轻松的语气。',
        wrongFeedback: '你选错了，江予立刻去摸你的脉搏，以为你出事了。气血 -10',
        afterCorrect: '江予凑过来看，也笑了。笑完他忽然说：「我很久没这样笑过了。」'
      },
      {
        plotDescription: '助理发来消息，说专辑冲上了榜首。',
        line: "I am thrilled. Really. The album charted.",
        lineCn: '我太激动了。真的。专辑上榜了。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望的', correct: false, reason: '专辑上榜是好事，不会失望。' },
          { key: 'B', en: 'nervous', cn: '紧张的', correct: false, reason: '他说的是激动，不是紧张。' },
          { key: 'C', en: 'extremely pleased and excited', cn: '极度兴奋、欣喜若狂', correct: true, reason: 'thrilled 指非常高兴和激动，正对应专辑上榜。' }
        ],
        analysis: 'thrilled 比 happy 强得多，接近「兴奋到发抖」。顾清和没有喊，只是把江予抱了一下。',
        wrongFeedback: '你选错了，江予以为你失望，连忙说还有下次。气血 -10',
        afterCorrect: '顾清和松开他：「这只是开始。」江予说：「我知道。但这次是真的。」'
      }
    ],
    completeText: '第三十二章结束。那晚他们没有看评论，只把专辑从头到尾听了一遍。'
  },
  {
    id: 'dm_33',
    index: 33,
    title: '第 33 章 · 复出前的一周',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '复出舞台定在下周六。彩排第一天，江予在后台坐了四十分钟，才站起来走向话筒。走廊里全是工作人员的脚步声。',
    questions: [
      {
        plotDescription: '顾清和找到他时，他还坐在化妆镜前。',
        line: "I am overwhelmed. Too many people, too many questions.",
        lineCn: '我压力过载了。太多人，太多问题。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling unable to cope because there is too much', cn: '压力过载、被压得应付不过来', correct: true, reason: 'overwhelmed 指事情太多让人招架不住，正对应他坐了四十分钟。' },
          { key: 'B', en: 'relaxed', cn: '放松的', correct: false, reason: '他连站起来都困难，谈不上放松。' },
          { key: 'C', en: 'confident', cn: '自信的', correct: false, reason: '他的状态恰恰是失去把握。' }
        ],
        analysis: 'overwhelmed 的核心是「被淹没」，不一定是能力不够，而是量太大。顾清和没有催他，先关了门。',
        wrongFeedback: '你选错了，顾清和以为你准备好了，直接把你推上了台。气血 -10',
        afterCorrect: '顾清和在他旁边坐下：「现在只需要做一件事。站起来，走到话筒前。」'
      },
      {
        plotDescription: '江予深吸一口气，手还在抖。',
        line: "Stay chill. We have done this before.",
        lineCn: '保持冷静。我们做过很多次了。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry and tense', cn: '生气紧张', correct: false, reason: '他是在让对方放松，不是让对方更紧。' },
          { key: 'B', en: 'calm and relaxed', cn: '冷静、放松', correct: true, reason: 'chill 指松弛镇定的状态，正对应他在安抚江予。' },
          { key: 'C', en: 'careless', cn: '粗心大意', correct: false, reason: '这里说的是情绪，不是做事态度。' }
        ],
        analysis: 'chill 作形容词是「冷静的、松弛的」，比 calm 更口语。这句话顾清和说得很慢。',
        wrongFeedback: '你选错了，江予以为你在说他粗心，情绪更低。气血 -10',
        afterCorrect: '江予把手放在膝盖上，数到十。站起来的时候，腿还是软的，但没有再坐回去。'
      },
      {
        plotDescription: '两个小时后，江予从台上下来，直接坐在地上。',
        line: "After two hours of rehearsal I am drained.",
        lineCn: '彩排两个小时，我被掏空了。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'refreshed', cn: '神清气爽', correct: false, reason: '他坐在地上，显然不是神清气爽。' },
          { key: 'B', en: 'full of energy', cn: '精力充沛', correct: false, reason: '和「被掏空」正好相反。' },
          { key: 'C', en: 'completely emptied of energy', cn: '被掏空、精力被抽干', correct: true, reason: 'drained 指能量被彻底耗尽，正对应他坐在地上的样子。' }
        ],
        analysis: 'drained 原意是「被排干」，形容人就是「被掏空」。江予这次累，和从前那种硬撑不一样。',
        wrongFeedback: '你选错了，江予以为你说他精神很好，又去加练了一遍。气血 -10',
        afterCorrect: '顾清和把水递给他：「今天到这儿。」江予摇头：「再来一遍。」顾清和说：「不行。」'
      },
      {
        plotDescription: '回程的车上，江予看着窗外。',
        line: "I get anxious before every stage. Every single one.",
        lineCn: '每次上台前我都会焦虑。每一次。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried and uneasy', cn: '焦虑、心里不安', correct: true, reason: 'anxious 指担忧不安，正对应他每次上台前的状态。' },
          { key: 'B', en: 'excited in a happy way', cn: '开心地兴奋', correct: false, reason: '他说的是焦虑，不是愉快的兴奋。' },
          { key: 'C', en: 'sleepy', cn: '困倦', correct: false, reason: '这里说的是情绪，不是睡意。' }
        ],
        analysis: 'anxious 是「焦虑」，常和 about 连用。江予承认这件事，本身就是一种进步。',
        wrongFeedback: '你选错了，顾清和以为你只是困了，让你在车上睡一会儿。气血 -10',
        afterCorrect: '顾清和说：「那我也每一次都在台下。」江予没回头，只把车窗降下一条缝。'
      }
    ],
    completeText: '第三十三章结束。那一周，江予每天都彩排到很晚，顾清和每天都坐在同一个位置。'
  },
  {
    id: 'dm_34',
    index: 34,
    title: '第 34 章 · 彩排被叫停',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '彩排到一半，主办方突然要求换歌。江予站在台上，耳机里全是杂音，握着话筒的手在抖。灯光师停了灯。',
    questions: [
      {
        plotDescription: '后台，江予把耳返摔在桌上。',
        line: "I was furious. They cut the song without asking.",
        lineCn: '我气疯了。他们不打招呼就把歌砍了。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '狂怒、气疯了', correct: true, reason: 'furious 表示极度愤怒，正对应他摔耳返的动作。' },
          { key: 'B', en: 'confused', cn: '困惑的', correct: false, reason: '他知道发生了什么，是愤怒不是困惑。' },
          { key: 'C', en: 'grateful', cn: '感激的', correct: false, reason: '歌被砍了，不可能感激。' }
        ],
        analysis: 'furious 比 angry 重得多，接近「怒不可遏」。顾清和没有劝他别气，只把门关上。',
        wrongFeedback: '你选错了，江予以为你没听懂，又重复了一遍，声音更大。气血 -10',
        afterCorrect: '顾清和说：「气完再谈。现在先别上台。」江予坐下，胸口还在起伏。'
      },
      {
        plotDescription: '第二天，助理说江予一整晚没有回消息。',
        line: "He sounded depressed on the phone. I went over.",
        lineCn: '他电话里的声音很抑郁。我过去了。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very sad and low', cn: '抑郁、情绪极度低落', correct: true, reason: 'depressed 指持续的低落，正对应他连夜赶过去。' },
          { key: 'B', en: 'cheerful', cn: '开朗的', correct: false, reason: '如果真的开朗，就不需要连夜过去了。' },
          { key: 'C', en: 'busy with work', cn: '忙于工作', correct: false, reason: '这里说的是情绪状态，不是工作。' }
        ],
        analysis: 'depressed 比 sad 更沉，带持续性。顾清和用的词很谨慎，没有说「他很难过」。',
        wrongFeedback: '你选错了，顾清和以为他只是忙，没有过去。气血 -10',
        afterCorrect: '江予开门时眼睛是肿的。他没说话，侧身让顾清和进来。'
      },
      {
        plotDescription: '屋子里放着彩排的录像，声音开得很小。',
        line: "The crew is hyped. Look at them.",
        lineCn: '工作人员都很兴奋。你看看他们。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'exhausted', cn: '精疲力尽', correct: false, reason: '录像里的人在跳，不是累倒。' },
          { key: 'B', en: 'very excited', cn: '极度兴奋、情绪高涨', correct: true, reason: 'hyped 指兴奋到高涨，正对应他让江予看那些人的状态。' },
          { key: 'C', en: 'calm', cn: '平静', correct: false, reason: '和兴奋正好相反。' }
        ],
        analysis: 'hyped 常写作 hyped up，指被调动起来的兴奋。江予看着他们，忽然觉得自己格格不入。',
        wrongFeedback: '你选错了，江予以为你说他们累，问要不要放他们回去。气血 -10',
        afterCorrect: '顾清和把录像关掉：「别看了。你现在需要的是安静，不是比较。」'
      },
      {
        plotDescription: '沉默很久，江予把脸埋进手心。',
        line: "I felt miserable for three days. I did not answer anyone.",
        lineCn: '我难受了三天。谁的消息都没回。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely unhappy', cn: '惨透了、极度痛苦', correct: true, reason: 'miserable 指非常难受，正对应他三天不回消息。' },
          { key: 'B', en: 'comfortable', cn: '舒服的', correct: false, reason: '把自己关三天，显然不舒服。' },
          { key: 'C', en: 'proud', cn: '自豪的', correct: false, reason: '这里没有任何自豪。' }
        ],
        analysis: 'miserable 既可指身体难受，也可指心情极差。江予说这句时，声音闷在掌心里。',
        wrongFeedback: '你选错了，顾清和以为你这三天过得很舒服，点了点头。气血 -10',
        afterCorrect: '顾清和蹲下来，把手放在他手背上：「三天够了。第四天，我陪你过。」'
      }
    ],
    completeText: '第三十四章结束。第四天，江予重新走进排练厅，主办方把歌还了回来。'
  },
  {
    id: 'dm_35',
    index: 35,
    title: '第 35 章 · 医院的另一个名字',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演出前一晚，顾清和被医院叫走，说有个年轻医生替他值了整夜的班。江予在后台听见那个名字，笑容停了一下。',
    questions: [
      {
        plotDescription: '电话那头，顾清和的声音难得轻快。',
        line: "He was ecstatic about the surgery. He talked for an hour.",
        lineCn: '那台手术让他欣喜若狂。他讲了一个小时。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy and excited', cn: '欣喜若狂、极度兴奋', correct: true, reason: 'ecstatic 指高兴到极点，正对应他讲了一个小时。' },
          { key: 'B', en: 'worried', cn: '担心的', correct: false, reason: '他的语气是兴奋，不是担忧。' },
          { key: 'C', en: 'silent', cn: '沉默的', correct: false, reason: '讲了一个小时，显然不沉默。' }
        ],
        analysis: 'ecstatic 比 thrilled 还要强，接近「乐疯了」。江予听着，另一只手把手机握紧了。',
        wrongFeedback: '你选错了，江予以为手术出了问题，追问了很久。气血 -10',
        afterCorrect: '顾清和说：「他很有天赋。」江予「嗯」了一声，没有接下去。'
      },
      {
        plotDescription: '后台的镜子很亮，江予看见自己的表情。',
        line: "I went numb when I saw them talking.",
        lineCn: '我看见他们说话的时候，整个人麻了。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'excited', cn: '兴奋的', correct: false, reason: '他形容的是失去感觉，不是兴奋。' },
          { key: 'B', en: 'unable to feel anything', cn: '麻木、失去感觉', correct: true, reason: 'numb 指情绪上麻掉，正对应他看到那一幕的反应。' },
          { key: 'C', en: 'relieved', cn: '松了一口气', correct: false, reason: '这里没有放松，只有僵住。' }
        ],
        analysis: 'numb 既可以是身体麻，也可以是情绪麻。江予形容得很准：不是疼，是暂时什么都感觉不到。',
        wrongFeedback: '你选错了，顾清和以为你很兴奋，还问你要不要打招呼。气血 -10',
        afterCorrect: '顾清和推门进来，看见他的脸色：「你怎么了？」江予说：「没事。」'
      },
      {
        plotDescription: '化妆间里只剩两个人，江予终于开口。',
        line: "I am jealous. It is stupid, but I am.",
        lineCn: '我嫉妒。这很蠢，但我就是嫉妒。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'unhappy because someone has what you want', cn: '嫉妒、因为别人拥有而难受', correct: true, reason: 'jealous 正指这种不平衡的难受，正对应他看到两人说话的心情。' },
          { key: 'B', en: 'proud of someone', cn: '为某人骄傲', correct: false, reason: '他自认这情绪很蠢，显然不是骄傲。' },
          { key: 'C', en: 'bored', cn: '无聊', correct: false, reason: '他的情绪很强烈，不是无聊。' }
        ],
        analysis: 'jealous 是「嫉妒」，和 envious 略有差别，前者更强调失去的恐惧。江予说得很坦白。',
        wrongFeedback: '你选错了，江予以为你在夸他大度，更难受了。气血 -10',
        afterCorrect: '顾清和愣了一下，然后笑了：「那个医生，孩子都两岁了。」江予僵住。'
      },
      {
        plotDescription: '笑完之后，江予低下头。',
        line: "I felt guilty for even thinking it.",
        lineCn: '光是想到这些，我就觉得内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling you have done something wrong', cn: '内疚、觉得自己做错了', correct: true, reason: 'guilty 指因做错事而不安，正对应他为一个念头自责。' },
          { key: 'B', en: 'innocent', cn: '无辜的', correct: false, reason: '他正在自责，不是宣判自己无辜。' },
          { key: 'C', en: 'angry at someone else', cn: '对别人生气', correct: false, reason: '他说的是对自己的感受。' }
        ],
        analysis: 'feel guilty 是「感到内疚」，后面常接 for 或 about。江予的内疚，其实来自太在意。',
        wrongFeedback: '你选错了，顾清和以为你在生他的气，气氛一下冷了。气血 -10',
        afterCorrect: '顾清和说：「喜欢一个人会这样。不用为这个道歉。」江予抬起头。'
      }
    ],
    completeText: '第三十五章结束。演出前一晚，两个人第一次把「喜欢」这个词放进了对话里。'
  },
  {
    id: 'dm_36',
    index: 36,
    title: '第 36 章 · 开场前的三十秒',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '升降台升到一半，江予的耳朵忽然听不见伴奏。台下是一片黑，灯还没亮。他的手按在耳返上，指节发白。',
    questions: [
      {
        plotDescription: '后台通道里，顾清和一直在等。',
        line: "I was stressed all week. I barely slept.",
        lineCn: '我一整周压力都很大。几乎没睡。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'under pressure and tense', cn: '压力大、紧绷', correct: true, reason: 'stressed 指承受压力而紧张，正对应他一整周没睡。' },
          { key: 'B', en: 'relaxed', cn: '放松的', correct: false, reason: '几乎没睡，谈不上放松。' },
          { key: 'C', en: 'bored', cn: '无聊的', correct: false, reason: '这里是压力，不是无聊。' }
        ],
        analysis: 'stressed 是 stress 的形容词形式，口语里极常用。顾清和说这句时，是在承认自己也有扛不住的时候。',
        wrongFeedback: '你选错了，江予以为你说这周很轻松，松了口气。气血 -10',
        afterCorrect: '江予在耳返里听见他的声音：「我在台下。听不见伴奏也没关系，跟着鼓点走。」'
      },
      {
        plotDescription: '后来江予才知道，顾清和已经连着上了三年夜班。',
        line: "Three years of this and you get burnout. It is not laziness.",
        lineCn: '这样干三年就会职业倦怠。这不是懒。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'a promotion after hard work', cn: '努力工作后的升职', correct: false, reason: '这里说的是耗竭，不是奖励。' },
          { key: 'B', en: 'exhaustion caused by long-term stress', cn: '职业倦怠、长期压力造成的耗竭', correct: true, reason: 'burnout 指长期高压后的身心枯竭，正对应三年夜班。' },
          { key: 'C', en: 'a minor cold', cn: '一场小感冒', correct: false, reason: '三年积累的状态，不是小病。' }
        ],
        analysis: 'burnout 是心理学和职场高频词，强调「不是懒，是耗尽了」。这句话是顾清和在替自己解释。',
        wrongFeedback: '你选错了，江予以为你说升职，还替你高兴。气血 -10',
        afterCorrect: '江予在升降台上说：「那你现在也该休息。」顾清和说：「先唱完这一首。」'
      },
      {
        plotDescription: '灯亮前的三秒，江予的呼吸乱了。',
        line: "I felt panic in my chest. Real panic.",
        lineCn: '我胸口一阵恐慌。真正的恐慌。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'sudden overwhelming fear', cn: '恐慌、突然袭来的强烈恐惧', correct: true, reason: 'panic 指突如其来的失控恐惧，正对应他胸口的感觉。' },
          { key: 'B', en: 'joy', cn: '喜悦', correct: false, reason: '他说的是恐慌，不是喜悦。' },
          { key: 'C', en: 'sleepiness', cn: '困意', correct: false, reason: '这一刻他整个人是紧绷的。' }
        ],
        analysis: 'panic 既是名词也是动词，指突然的强烈恐惧。江予在台上第一次承认：他怕。',
        wrongFeedback: '你选错了，江予以为你在说喜悦，硬撑着笑了一下。气血 -10',
        afterCorrect: '他闭上眼，数了三下。灯亮起来的时候，他听见了第一声鼓。'
      },
      {
        plotDescription: '一首唱完，伴奏回来了。',
        line: "Then the monitors came back, and I was relieved.",
        lineCn: '然后监听恢复了，我松了口气。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望的', correct: false, reason: '伴奏恢复是好事，不会失望。' },
          { key: 'B', en: 'free from worry or tension', cn: '松了一口气、放下心来', correct: true, reason: 'relieved 指紧张解除后的轻松，正对应监听恢复。' },
          { key: 'C', en: 'furious', cn: '狂怒的', correct: false, reason: '问题解决了，不是发火。' }
        ],
        analysis: 'relieved 描述的是「负担放下」的那一刻。江予在台上没有停，唱完了整首。',
        wrongFeedback: '你选错了，江予以为你很失望，硬撑着又唱了一首。气血 -10',
        afterCorrect: '下台后，他直接走到第三排，抱住了顾清和。全场都看见了。'
      }
    ],
    completeText: '第三十六章结束。那一晚之后，再没有人问他们是什么关系。'
  },
  {
    id: 'dm_37',
    index: 37,
    title: '第 37 章 · 一张没有发出的照片',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '演出结束后，江予在顾清和的外套口袋里摸到一张照片：医院走廊，两个人站得很近。照片背面没有字。',
    questions: [
      {
        plotDescription: '江予把照片放在桌上，没有先问。',
        line: "I was heartbroken over a photo. Pathetic, right?",
        lineCn: '我因为一张照片心碎。很可悲吧？',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'devastated by sadness', cn: '心碎、被悲伤击垮', correct: true, reason: 'heartbroken 指极度伤心，正对应他因为一张照片而崩。' },
          { key: 'B', en: 'amused', cn: '觉得好笑', correct: false, reason: '他说自己可悲，不是觉得好笑。' },
          { key: 'C', en: 'curious', cn: '好奇', correct: false, reason: '他的情绪远不止好奇。' }
        ],
        analysis: 'heartbroken 通常用于失恋或重大打击，这里带一点自嘲。江予知道自己反应过度，却停不下来。',
        wrongFeedback: '你选错了，江予以为你觉得有趣，脸色更冷。气血 -10',
        afterCorrect: '顾清和看着照片，忽然说：「这是我表姐。」江予愣住。'
      },
      {
        plotDescription: '顾清和解释时，嘴角有一点藏不住的东西。',
        line: "He looked smug when he said it was his sister.",
        lineCn: '他说那是他表姐的时候，一脸得意。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'ashamed', cn: '羞愧的', correct: false, reason: '他是在得意，不是羞愧。' },
          { key: 'B', en: 'too pleased with yourself', cn: '得意忘形、自鸣得意', correct: true, reason: 'smug 指过分得意，正对应他解释时的表情。' },
          { key: 'C', en: 'terrified', cn: '害怕的', correct: false, reason: '这里没有任何恐惧。' }
        ],
        analysis: 'smug 带贬义，但在这里更像恋人之间的调侃。江予最气的，是他确实得意得有理。',
        wrongFeedback: '你选错了，江予以为他在害怕，还安慰了他一句。气血 -10',
        afterCorrect: '江予把照片翻过来：「那为什么不早说？」顾清和说：「我想看你会不会问。」'
      },
      {
        plotDescription: '江予把照片推回去，声音闷闷的。',
        line: "I was annoyed at myself, mostly.",
        lineCn: '我主要是气我自己。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly angry and irritated', cn: '烦、恼火、被惹得不痛快', correct: true, reason: 'annoyed 指轻度的恼火，正对应他主要气自己。' },
          { key: 'B', en: 'delighted', cn: '高兴的', correct: false, reason: '他说的是气，不是高兴。' },
          { key: 'C', en: 'grateful', cn: '感激的', correct: false, reason: '这里没有感激。' }
        ],
        analysis: 'annoyed 的程度比 angry 轻，常指被小事惹烦。江予烦的是自己的反应。',
        wrongFeedback: '你选错了，江予以为你在说我高兴，更说不出话。气血 -10',
        afterCorrect: '顾清和把照片收起来：「以后有事直接问。别自己演一整部剧。」'
      },
      {
        plotDescription: '江予沉默了一会儿，忽然说起从前。',
        line: "It is not paranoia if someone really sold your file.",
        lineCn: '如果有人真的卖了你的资料，那就不叫被害妄想。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'courage in danger', cn: '危险中的勇气', correct: false, reason: '这里说的是怀疑，不是勇气。' },
          { key: 'B', en: 'honesty', cn: '诚实', correct: false, reason: '他谈的是自己的警觉，不是诚实。' },
          { key: 'C', en: 'irrational suspicion of others', cn: '被害妄想、没来由的猜疑', correct: true, reason: 'paranoia 指不合理的猜疑，正对应他拿旧事作对比。' }
        ],
        analysis: 'paranoia 是「偏执、被害妄想」，这里被江予用来为自己辩护。他的警觉不是空穴来风。',
        wrongFeedback: '你选错了，江予以为你在夸他有勇气，苦笑了一下。气血 -10',
        afterCorrect: '顾清和说：「我知道。所以我不怪你问。」江予低下头，把照片还给他。'
      }
    ],
    completeText: '第三十七章结束。那张照片最后被放进了相框，摆在客厅最显眼的位置。'
  },
  {
    id: 'dm_38',
    index: 38,
    title: '第 38 章 · 雨夜的楼梯间',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '误会没说清，两个人在楼梯间站了很久。外面下着雨，声控灯灭了又亮。江予的外套还在滴水。',
    questions: [
      {
        plotDescription: '江予靠着墙，手机在手里翻来覆去。',
        line: "I have been restless all night. I keep checking my phone.",
        lineCn: '我一整晚都坐立不安。一直在看手机。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to stay still or calm', cn: '焦躁、坐立不安', correct: true, reason: 'restless 指静不下来、心里发躁，正对应他反复看手机。' },
          { key: 'B', en: 'sleepy', cn: '困倦', correct: false, reason: '如果真的困，就不会一直看手机。' },
          { key: 'C', en: 'cheerful', cn: '愉快', correct: false, reason: '这一晚的气氛很沉。' }
        ],
        analysis: 'restless 强调「停不下来」，可以是身体也可以是心。江予的等待，全都在这三个字里。',
        wrongFeedback: '你选错了，顾清和以为你困了，让你先回去睡。气血 -10',
        afterCorrect: '顾清和伸手把他的手机拿走：「我在这儿。不用看手机。」'
      },
      {
        plotDescription: '灯灭了一次，江予的声音在黑暗里响起来。',
        line: "His voice sounded bitter. I had never heard that before.",
        lineCn: '他的声音听起来很苦涩。我以前从没听过。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'gentle and soft', cn: '温柔轻柔的', correct: false, reason: '他说的是苦涩，不是温柔。' },
          { key: 'B', en: 'sweet', cn: '甜美的', correct: false, reason: '和苦涩正好相反。' },
          { key: 'C', en: 'resentful and hurt', cn: '苦涩、带着怨和痛', correct: true, reason: 'bitter 形容语气时指含怨带痛，正对应他从没听过的声音。' }
        ],
        analysis: 'bitter 原意是「苦」，形容人时指长期积压的怨。顾清和第一次露出这一面。',
        wrongFeedback: '你选错了，江予以为你在说温柔，反而更靠近了一步。气血 -10',
        afterCorrect: '顾清和说：「因为我一直在忍。忍到自己也信了。」江予没有说话。'
      },
      {
        plotDescription: '雨声变大，江予忽然说了一句很轻的话。',
        line: "I hate being this vulnerable in front of you.",
        lineCn: '我讨厌在你面前这么脆弱。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'exposed and easily hurt', cn: '脆弱、毫无防备、容易受伤', correct: true, reason: 'vulnerable 指把自己暴露出来、容易被伤到，正对应他在对方面前卸下防备。' },
          { key: 'B', en: 'strong and guarded', cn: '坚强且有防备的', correct: false, reason: '他说的正相反，是没有防备。' },
          { key: 'C', en: 'careless', cn: '粗心的', correct: false, reason: '这里说的是情感状态。' }
        ],
        analysis: 'vulnerable 是「脆弱、易受伤」，在情感语境里常指卸下防御。江予讨厌的，是这种失控感。',
        wrongFeedback: '你选错了，江予以为你在说自己很坚强，把外套裹得更紧。气血 -10',
        afterCorrect: '顾清和说：「在我面前不用坚强。」声控灯又灭了，这次谁也没有跺脚。'
      },
      {
        plotDescription: '黑暗里，江予说了最坏的那个念头。',
        line: "For a moment I felt hopeless. Like nothing would work.",
        lineCn: '有一瞬间我觉得绝望。好像什么都行不通。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'confident about the future', cn: '对未来有信心', correct: false, reason: '他说的是绝望，和信心相反。' },
          { key: 'B', en: 'feeling there is no hope at all', cn: '绝望、看不到任何希望', correct: true, reason: 'hopeless 指彻底没有希望，正对应他那句「什么都行不通」。' },
          { key: 'C', en: 'calm and peaceful', cn: '平静安宁的', correct: false, reason: '这里的情绪是往下坠的。' }
        ],
        analysis: 'hopeless 是「绝望」，比 sad 更接近无出路感。江予说出来，反而比憋着好。',
        wrongFeedback: '你选错了，顾清和以为你很乐观，松了口气。气血 -10',
        afterCorrect: '顾清和摸黑找到他的手，握住：「那就先别想以后。想明天早上吃什么。」'
      }
    ],
    completeText: '第三十八章结束。雨停的时候，两个人还站在楼梯间，谁也没有先上楼。'
  },
  {
    id: 'dm_39',
    index: 39,
    title: '第 39 章 · 那句迟到的解释',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '凌晨，顾清和把手机递给他：照片里的人是表姐，那天在走廊是交代家里的病情。江予看完，很久没说话。',
    questions: [
      {
        plotDescription: '江予把手机还回去，声音有点哑。',
        line: "I am grateful. I do not say it enough.",
        lineCn: '我很感激。我说得太少了。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling thankful', cn: '感激、心存感谢', correct: true, reason: 'grateful 指真心感谢，正对应他这句迟来的话。' },
          { key: 'B', en: 'resentful', cn: '心怀怨气的', correct: false, reason: '这里没有怨，只有感谢。' },
          { key: 'C', en: 'indifferent', cn: '无所谓的', correct: false, reason: '他特意说出来，说明并非无所谓。' }
        ],
        analysis: 'grateful 比 thankful 更常用于日常表达感谢。江予不擅长说这种话，所以说得很慢。',
        wrongFeedback: '你选错了，顾清和以为你还在生气，把手机收了回去。气血 -10',
        afterCorrect: '顾清和说：「不用谢我。你只是需要有人把话说清楚。」'
      },
      {
        plotDescription: '天快亮了，两个人坐在窗边。',
        line: "Sitting here with you, I feel content.",
        lineCn: '和你坐在这里，我觉得满足。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'anxious and uneasy', cn: '焦虑不安的', correct: false, reason: '这一刻的气氛是安稳的。' },
          { key: 'B', en: 'quietly satisfied', cn: '满足、安稳地知足', correct: true, reason: 'content 指不张扬的满足，正对应这句话的平静。' },
          { key: 'C', en: 'ambitious', cn: '野心勃勃的', correct: false, reason: '这里说的是心境，不是志向。' }
        ],
        analysis: 'content 作形容词是「满足的」，和 satisfied 接近但更安静。这一章第一次没有争吵。',
        wrongFeedback: '你选错了，江予以为你在说焦虑，问是不是还有事没解决。气血 -10',
        afterCorrect: '顾清和没有回答，只把肩膀往他那边靠了一点。窗外的天从深蓝变成浅灰。'
      },
      {
        plotDescription: '江予说起刚出道那几年，一直在追一个数字。',
        line: "For the first time in years, I feel fulfilled.",
        lineCn: '这么多年，我第一次觉得充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'empty inside', cn: '内心空虚', correct: false, reason: '他说的是充实，和空虚相反。' },
          { key: 'B', en: 'guilty about the past', cn: '为过去内疚', correct: false, reason: '这一句没有内疚的意味。' },
          { key: 'C', en: 'satisfied because your needs are truly met', cn: '充实、真正被满足', correct: true, reason: 'fulfilled 指深处被填满的满足，正对应他追了多年的数字终于放下。' }
        ],
        analysis: 'fulfilled 比 content 更深，指自我价值被实现。江予终于不再用榜单衡量自己。',
        wrongFeedback: '你选错了，顾清和以为你内心空虚，把话题岔开了。气血 -10',
        afterCorrect: '顾清和说：「那就别再追那个数字了。」江予点头：「不追了。」'
      },
      {
        plotDescription: '说到这里，江予忽然笑得停不下来。',
        line: "I laughed until I was hysterical. Three in the morning, on the stairs.",
        lineCn: '我笑到歇斯底里。凌晨三点，在楼梯上。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'wildly emotional, out of control', cn: '歇斯底里、情绪失控', correct: true, reason: 'hysterical 指情绪强烈到失控，正对应他笑到停不下来。' },
          { key: 'B', en: 'calm and polite', cn: '平静有礼的', correct: false, reason: '凌晨三点笑到停不下来，显然不平静。' },
          { key: 'C', en: 'sleepy', cn: '困倦的', correct: false, reason: '他正在大笑，不是要睡。' }
        ],
        analysis: 'hysterical 可以指崩溃，也可以指笑到失控。这里的笑，是紧绷太久之后的松开。',
        wrongFeedback: '你选错了，江予以为你困了，把笑声憋了回去。气血 -10',
        afterCorrect: '顾清和也跟着笑了。两个人坐在楼梯上，笑到邻居开门看了一眼。'
      }
    ],
    completeText: '第三十九章结束。天完全亮的时候，两个人终于上楼，谁也没有提昨晚的雨。'
  },
  {
    id: 'dm_40',
    index: 40,
    title: '第 40 章 · 台上台下',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '安可的时候，江予站在舞台中央，看着台下那片灯。他忽然想起四个月前，自己在监视器后倒下的那个雨夜。',
    questions: [
      {
        plotDescription: '演出后的采访里，记者问起旧经纪人。',
        line: "There was rage in his voice when he talked about the old manager.",
        lineCn: '他谈起那个旧经纪人的时候，声音里有暴怒。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'violent, uncontrolled anger', cn: '暴怒、压不住的怒火', correct: true, reason: 'rage 指猛烈到失控的愤怒，正对应他声音里的那层东西。' },
          { key: 'B', en: 'sadness', cn: '悲伤', correct: false, reason: '记者说的是怒，不是悲伤。' },
          { key: 'C', en: 'fear', cn: '恐惧', correct: false, reason: '这里没有害怕的成分。' }
        ],
        analysis: 'rage 比 anger 更猛烈，接近「压不住的火」。江予没有骂人，但每个字都很重。',
        wrongFeedback: '你选错了，顾清和以为你在说难过，递了张纸巾。气血 -10',
        afterCorrect: '采访结束后，江予说：「我以为我已经不恨他了。」顾清和说：「恨不用急着放下。」'
      },
      {
        plotDescription: '回酒店的路上，车里放着新专辑的最后一首。',
        line: "The song is about sorrow, not about love.",
        lineCn: '这首歌写的是悲伤，不是爱情。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'joy', cn: '喜悦', correct: false, reason: '他说的是悲伤，和喜悦相反。' },
          { key: 'B', en: 'deep sadness', cn: '悲伤、深切的哀痛', correct: true, reason: 'sorrow 指深层的悲伤，正对应他纠正记者时的语气。' },
          { key: 'C', en: 'anger', cn: '愤怒', correct: false, reason: '他明确区分了悲伤和别的情绪。' }
        ],
        analysis: 'sorrow 比 sadness 更文学、更深。江予写这首歌的时候，还没有遇见顾清和。',
        wrongFeedback: '你选错了，江予以为你说这歌写的是喜悦，把音量调小了。气血 -10',
        afterCorrect: '顾清和说：「现在呢？」江予想了想：「现在也还是悲伤。但里面有别的了。」'
      },
      {
        plotDescription: '演唱会最后一首唱完，全场灯亮成一片海。',
        line: "The crowd hit a kind of euphoria I cannot describe.",
        lineCn: '人群爆发出一种我说不出的极度愉悦。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'extreme happiness and excitement', cn: '极度愉悦、狂喜', correct: true, reason: 'euphoria 指强烈到不真实的幸福感，正对应全场灯海的那一刻。' },
          { key: 'B', en: 'panic', cn: '恐慌', correct: false, reason: '演唱会的顶点不会是恐慌。' },
          { key: 'C', en: 'boredom', cn: '无聊', correct: false, reason: '全场都在尖叫，不是无聊。' }
        ],
        analysis: 'euphoria 是「狂喜」，常形容集体性的高潮。江予站在中央，却比任何时候都清醒。',
        wrongFeedback: '你选错了，顾清和以为现场出了事故，站了起来。气血 -10',
        afterCorrect: '江予在台上说：「最后一首，送给一个人。他知道是谁。」台下的灯晃了一下。'
      },
      {
        plotDescription: '散场后，后台只剩下两个人。',
        line: "What scares me is apathy. Not hate.",
        lineCn: '让我害怕的是冷漠。不是恨。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'hatred', cn: '憎恨', correct: false, reason: '他明确说不是恨，而是另一种东西。' },
          { key: 'B', en: 'love', cn: '爱', correct: false, reason: '这里说的是一种缺失。' },
          { key: 'C', en: 'a lack of interest or feeling', cn: '冷漠、什么都不在乎', correct: true, reason: 'apathy 指彻底的无感，正对应他说的「不是恨」。' }
        ],
        analysis: 'apathy 是「冷漠、无感」，比恨更空。江予怕的是有一天连恨都懒得恨了。',
        wrongFeedback: '你选错了，江予以为你在说爱，愣住了。气血 -10',
        afterCorrect: '顾清和说：「那你就一直有感觉。哪怕是恨。」江予摇头：「不。我想留点别的。」'
      }
    ],
    completeText: '第四十章结束。那晚江予没有喝庆功酒，他提前离场，和顾清和一起回了家。'
  },
  {
    id: 'dm_41',
    index: 41,
    title: '第 41 章 · 他第几次忘了回消息',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '巡演结束后的第一个月，两个人的日程表彻底错开了。江予发出去的消息，常常要等到凌晨才收到一句「在手术」。',
    questions: [
      {
        plotDescription: '顾清和值完夜班，在走廊撞见江予靠在墙边等他。',
        line: "Don't look at me like that. I've had a crush on you since the night you called me out in that hospital room.",
        lineCn: '别那样看我。从那晚你在病房里把我叫住开始，我就一直暗恋你。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a sudden accident', cn: '一场突发事故', correct: false, reason: 'crush 在这里不是事故，他说的是感情。' },
          { key: 'B', en: 'a secret romantic feeling for someone', cn: '暗恋、偷偷喜欢一个人', correct: true, reason: 'crush 作名词指藏起来的喜欢，正对应他说的「从那晚开始」。' },
          { key: 'C', en: 'a loud argument', cn: '一场激烈的争吵', correct: false, reason: '他说这话时声音很低，不是在吵架。' }
        ],
        analysis: 'crush 作动词是「压碎」，作名词是「暗恋」。这里取后者。江予第一次把心里那句话摆到了台面上。',
        wrongFeedback: '你选错了，江予等了一个晚上的答案没等来，转身走了，走廊的灯随后灭掉。气血 -10',
        afterCorrect: '顾清和没有回答。他只是抬手，把江予外套的领子翻好，说：「先回去睡。」'
      },
      {
        plotDescription: '那之后整整一周，顾清和没有再出现。',
        line: "Are you ghosting me? Seven days, no calls, no replies.",
        lineCn: '你是在跟我玩消失吗？七天，没电话，没回复。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'telling someone the whole truth', cn: '把真相全说出来', correct: false, reason: '他要的不是实话，是一个回复。' },
          { key: 'B', en: 'haunting someone like a spirit', cn: '像鬼一样缠着人', correct: false, reason: '那是字面义。口语里的 ghost 指突然断联。' },
          { key: 'C', en: 'cutting off all contact without a word', cn: '玩消失、一声不吭地断联', correct: true, reason: 'ghost 作动词就是「玩消失」，七天不回消息正是这个意思。' }
        ],
        analysis: 'ghost 原义是「鬼」，网络口语里指「突然不再回复、彻底断联」。江予用的是最锋利的那层意思。',
        wrongFeedback: '你选错了，顾清和以为他在讲恐怖片，还笑了一下，江予的脸彻底冷了。气血 -10',
        afterCorrect: '顾清和把手机放到桌上：「手术排到了凌晨三点。我每天只睡四小时。」'
      },
      {
        plotDescription: '江予听着，忽然说出了自己最怕的那句话。',
        line: "Maybe you leaving without a word is a red flag I should have seen.",
        lineCn: '也许你一声不吭就走，是我早该看出来的危险信号。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning sign of trouble', cn: '危险信号、需要警惕的征兆', correct: true, reason: 'red flag 指警示信号，他说的正是这段关系里让他不安的地方。' },
          { key: 'B', en: 'a red cloth used in traffic', cn: '交通用的红布', correct: false, reason: '那是字面义，这里是比喻。' },
          { key: 'C', en: 'a sign of good luck', cn: '好兆头', correct: false, reason: '他说的是「警戒」，不是好事。' }
        ],
        analysis: 'red flag 字面是红旗，比喻「危险信号」。江予把对方的失联当成了一个预警。',
        wrongFeedback: '你选错了，顾清和皱眉：「我救过你的命，这就是你说的红旗？」气血 -10',
        afterCorrect: '江予没接话。他知道自己说的是气话，可怕的是，他好像真的信了。'
      },
      {
        plotDescription: '临走前，顾清和停住脚，回头看他。',
        line: "I'm not asking to hook up. I'm asking to stay.",
        lineCn: '我不是想跟你随便勾搭一下。我是想留下来。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to hang a coat on a hook', cn: '把外套挂在钩子上', correct: false, reason: 'hook 是钩子，但 hook up 是一个固定说法。' },
          { key: 'B', en: 'start a casual romantic or sexual relationship', cn: '勾搭、随便在一起', correct: true, reason: 'hook up 指随意的暧昧关系，他特意否认的正是这个。' },
          { key: 'C', en: 'to give someone a nickname', cn: '给人起外号', correct: false, reason: '跟外号毫无关系。' }
        ],
        analysis: 'hook up 在口语里指「随便的暧昧、非正式的在一起」。顾清和用否定句划清界限，他要的是留下。',
        wrongFeedback: '你选错了，江予冷笑：「那你留下来做什么？」门被他关上了。气血 -10',
        afterCorrect: '江予让开半步，门没关。顾清和走了进来，把外套挂在了玄关的钩子上。'
      }
    ],
    completeText: '第四十一章结束。那件外套在钩子上挂了整整一夜，两个人都没提要走。'
  },
  {
    id: 'dm_42',
    index: 42,
    title: '第 42 章 · 谁先动的心',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '住到一起以后，江予才发现顾清和工作时冷静得像一把刀，生活里却黏人得让人没办法。',
    questions: [
      {
        plotDescription: '江予只是晚回家两小时，开门就看见沙发上的人抱着抱枕。',
        line: "Why the drama? I just went to the studio.",
        lineCn: '干嘛这么抓马？我只是去了一趟录音棚。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'exaggerated, attention-seeking behavior', cn: '小题大做、戏剧化的表现', correct: true, reason: 'drama 在这里指夸张的情绪反应，正对应沙发上那一脸委屈。' },
          { key: 'B', en: 'a serious illness', cn: '严重的疾病', correct: false, reason: '家里没有人生病。' },
          { key: 'C', en: 'a long formal speech', cn: '一段长篇讲话', correct: false, reason: '他指的是情绪，不是话多。' }
        ],
        analysis: 'drama 原义是「戏剧」，口语里指「夸张、戏多」。江予一句话就点破了顾清和那点表演。',
        wrongFeedback: '你选错了，顾清和抱着抱枕扭过头去，说自己是「诚实地表达情绪」。气血 -10',
        afterCorrect: '顾清和说：「我不是抓马。我是七点做了饭，等到现在。」'
      },
      {
        plotDescription: '江予换了鞋走过去，被他一把拽住袖子。',
        line: "You are so clingy for a doctor.",
        lineCn: '你一个医生，怎么这么黏人。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'bad at keeping things clean', cn: '不爱干净', correct: false, reason: '这里说的是距离感，不是卫生。' },
          { key: 'B', en: 'cold and distant', cn: '冷淡疏远', correct: false, reason: '恰恰相反，他离得太近了。' },
          { key: 'C', en: 'too attached, wanting constant closeness', cn: '黏人、过分依赖', correct: true, reason: 'clingy 指总要贴着人，正对应他拽袖子的动作。' }
        ],
        analysis: 'cling 是「黏住」，clingy 就是「黏人」。江予嘴上嫌，手却没收回去。',
        wrongFeedback: '你选错了，顾清和以为在骂他懒，松开了手，气氛一下僵了。气血 -10',
        afterCorrect: '顾清和没松手：「黏着怎么了。我一年三千台手术，就这点时间能黏人。」'
      },
      {
        plotDescription: '江予看着手机里经纪人连发的十几条消息，皱起眉。',
        line: "You need boundaries. She can't call you twelve times a night.",
        lineCn: '你得有边界感。她不能一晚上给你打十二个电话。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'good manners', cn: '礼貌', correct: false, reason: '这是界限问题，不是礼数。' },
          { key: 'B', en: 'limits about what others may do to you', cn: '边界、别人的可为与不可为', correct: true, reason: 'boundaries 指人际的界限，他说的是经纪人的越界。' },
          { key: 'C', en: 'a very large house', cn: '很大的房子', correct: false, reason: 'boundary 有「围墙」的义，但这里不是指房子。' }
        ],
        analysis: 'boundary 指界线，引申为「人际边界感」。顾清和是在教他怎么保护自己。',
        wrongFeedback: '你选错了，江予真的把手机递了过去，说「那你帮我回」。气血 -10',
        afterCorrect: '江予把手机扣在桌上：「我要是划了线，她明天就能把这条线卖给媒体。」'
      },
      {
        plotDescription: '第二天，约好的一起吃早饭，顾清和没能来。',
        line: "You bailed on me again. Third time this week.",
        lineCn: '你又放我鸽子了。这周第三次。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'cancel plans and leave someone waiting', cn: '放鸽子、临时爽约', correct: true, reason: 'bail on someone 指爽约，正对应他说的「这周第三次」。' },
          { key: 'B', en: 'to throw a ball', cn: '扔球', correct: false, reason: '跟球没有任何关系。' },
          { key: 'C', en: 'to pay money to release someone from jail', cn: '交钱保释', correct: false, reason: 'bail 确实有「保释」的义，但这里是爽约的口语说法。' }
        ],
        analysis: 'bail 原义是「保释」，口语 bail on someone 是「放某人鸽子」。江予这次真的有点火。',
        wrongFeedback: '你选错了，顾清和没听懂，问「什么叫三次」，江予把勺子放下了。气血 -10',
        afterCorrect: '顾清和把手机递过来，屏幕上是一台通了八个小时的急诊手术。江予看了一眼，把气咽了回去。'
      }
    ],
    completeText: '第四十二章结束。那天早上他们谁也没吃成，江予把两个冷掉的包子塞进了包里。'
  },
  {
    id: 'dm_43',
    index: 43,
    title: '第 43 章 · 他妹妹的电话',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '顾清和的妹妹顾清宁从老家来了，进门第一句话就是：「我哥是不是在跟你住？」',
    questions: [
      {
        plotDescription: '江予的朋友老周在电话里骂了他半小时。',
        line: "Bro code says I should warn you, not cheer you on.",
        lineCn: '兄弟法则说我该提醒你，而不是给你叫好。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'the unwritten rules between close male friends', cn: '兄弟之间不成文的规矩', correct: true, reason: 'bro code 指男性朋友间的默契规矩，正对应他说的「该提醒你」。' },
          { key: 'B', en: 'a law passed by the government', cn: '政府通过的法律', correct: false, reason: 'code 有「法典」义，但这是朋友间的默契，不是法律。' },
          { key: 'C', en: 'a secret handshake', cn: '暗号手势', correct: false, reason: '他说的是规矩，不是动作。' }
        ],
        analysis: 'bro code 是「兄弟法则」，指朋友之间该做与不该做的不成文约定。老周是在尽朋友的义务。',
        wrongFeedback: '你选错了，老周在电话那头叹气：「行吧，反正我劝不动你。」气血 -10',
        afterCorrect: '江予说：「那你提醒我什么？」老周说：「提醒你别把人当成救命稻草。」'
      },
      {
        plotDescription: '顾清宁坐在沙发上，眼睛在他俩之间来回扫。',
        line: "So are you two already at the in-laws stage, or am I reading too much?",
        lineCn: '所以你俩已经到见家长这一步了，还是我想多了？',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'lawyers and judges', cn: '律师和法官', correct: false, reason: '跟职业完全无关。' },
          { key: 'B', en: 'the family of your spouse or partner', cn: '公婆、岳父母，伴侣的家人', correct: true, reason: 'in-laws 指伴侣那边的家人，她说的是见家长。' },
          { key: 'C', en: 'people who break the law', cn: '犯法的人', correct: false, reason: 'law 是法律，in-laws 却是姻亲。' }
        ],
        analysis: 'in-laws 是「姻亲」，口语里常指「公婆/岳父母」。顾清宁一句话就把两个人都噎住了。',
        wrongFeedback: '你选错了，顾清宁笑得更大声：「你连这个词都要想？」气血 -10',
        afterCorrect: '顾清和把茶放下：「别乱说，她只是我妹妹。」顾清宁说：「我只是问。」'
      },
      {
        plotDescription: '顾清宁翻出一个号码，说是妈让带的。',
        line: "Mom set up a blind date for me back home. I said I was too busy.",
        lineCn: '妈在老家给我安排了一场相亲。我说我太忙了。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a date where you can see nothing', cn: '什么都看不见的约会', correct: false, reason: 'blind 是「盲」，不是真的看不见东西。' },
          { key: 'B', en: 'a meeting set up by others for two strangers', cn: '相亲、由别人安排的初次见面', correct: true, reason: 'blind date 指素未谋面的两人被安排见面，正对应「妈安排的」。' },
          { key: 'C', en: 'a date with a blind person', cn: '跟盲人约会', correct: false, reason: '这是字面误读，blind date 与视力无关。' }
        ],
        analysis: 'blind date 是「相亲」，由第三方安排的初次见面。顾清宁在替妈妈催他。',
        wrongFeedback: '你选错了，顾清宁愣了：「谁跟盲人约会？」江予在厨房忍不住笑出声。气血 -10',
        afterCorrect: '顾清宁收了手机，忽然说：「其实妈知道。她只是想听你自己说。」'
      },
      {
        plotDescription: '临走前，顾清宁站在门口，说了句很轻的话。',
        line: "Everyone else can see it. Love is your blind spot.",
        lineCn: '别人都看得出来。爱是你唯一的盲区。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'a place you cannot see clearly', cn: '看不清的地方', correct: false, reason: '那是字面义，这里说的是认知上的盲。' },
          { key: 'B', en: 'something you fail to notice about yourself', cn: '看不清的盲区、自己意识不到的地方', correct: true, reason: 'blind spot 引申为「自我认知的盲点」，她说的是他看不见自己的心。' },
          { key: 'C', en: 'a dark room', cn: '一间黑屋子', correct: false, reason: '跟房间无关。' }
        ],
        analysis: 'blind spot 指「盲点」，既能指视野，也能指人看不清的自己。顾清宁这句话像一根针。',
        wrongFeedback: '你选错了，顾清宁没再说，拎着包下楼，鞋跟声一直响到楼下。气血 -10',
        afterCorrect: '楼道里安静下来。江予靠在门边问：「她说你什么盲区？」顾清和没有回答。'
      }
    ],
    completeText: '第四十三章结束。那晚顾清和在客厅坐到很晚，手机屏幕亮了又暗。'
  },
  {
    id: 'dm_44',
    index: 44,
    title: '第 44 章 · 一句试探的话',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '江予的前队友程野突然出现在楼下，说是来道歉的。',
    questions: [
      {
        plotDescription: '顾清和看着楼下那个人，脸色沉了。',
        line: "That guy is a toxic friend. He only shows up when you have something to give.",
        lineCn: '那人是那种有毒的朋友。只在你身上有东西可取时才出现。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who is very shy', cn: '很害羞的朋友', correct: false, reason: '跟性格内向无关。' },
          { key: 'B', en: 'a friend who drains or hurts you', cn: '有毒的朋友、只会消耗伤害你的人', correct: true, reason: 'toxic friend 指带来伤害与消耗的所谓朋友，正对应他的判断。' },
          { key: 'C', en: 'a friend who is physically sick', cn: '生病的朋友', correct: false, reason: 'toxic 不是「生病」，而是「有毒」。' }
        ],
        analysis: 'toxic 原义是「有毒的」，引申为「消耗人、伤人」。顾清和一句话就把程野的性质说清了。',
        wrongFeedback: '你选错了，江予以为他在说程野感冒了，问「严重吗」。气血 -10',
        afterCorrect: '江予却说：「他陪我熬过最难的那年。」顾清和没再说话。'
      },
      {
        plotDescription: '程野约他单独吃饭，用的还是以前的语气。',
        line: "It's not a date. We're just two old teammates eating.",
        lineCn: '这不叫约会。就是两个老队友吃个饭。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a specific day on the calendar', cn: '某个具体的日子', correct: false, reason: 'date 确实有「日期」义，但这里说的是关系。' },
          { key: 'B', en: 'a romantic outing with someone', cn: '约会、带感情意味的见面', correct: true, reason: 'date 指略带浪漫意味的两人会面，他特地否认的正是这个。' },
          { key: 'C', en: 'a business contract', cn: '一份商业合同', correct: false, reason: '跟合同无关。' }
        ],
        analysis: 'date 有两层：日期 / 约会。这里江予在用力撇清第二层，说明他心里其实清楚。',
        wrongFeedback: '你选错了，程野笑了：「你看，你自己都先解释了。」气血 -10',
        afterCorrect: '饭吃到一半，程野忽然说：「听说你跟那个医生住一起？」'
      },
      {
        plotDescription: '程野放下筷子，语气忽然变得很轻。',
        line: "When we broke up, you didn't even cry. That's what I never got.",
        lineCn: '我们分手的时候，你连哭都没哭。这是我一直没搞懂的。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'end a relationship with someone', cn: '分手、结束一段关系', correct: true, reason: 'break up 指关系结束，这里说的是他们当年。' },
          { key: 'B', en: 'to break something into pieces', cn: '把东西打碎', correct: false, reason: '那是字面义，这里说的是感情。' },
          { key: 'C', en: 'to wake up early', cn: '起得很早', correct: false, reason: '跟作息无关。' }
        ],
        analysis: 'break up 是「分手」。江予这才明白，程野是来翻旧账的。',
        wrongFeedback: '你选错了，江予以为他在说打碎了杯子，还看了一眼桌角。气血 -10',
        afterCorrect: '江予说：「因为我们没在一起过。你自己记错了。」'
      },
      {
        plotDescription: '程野的脸终于变了。',
        line: "You dumped me in front of everyone, and now you say it never happened?",
        lineCn: '你当着所有人的面甩了我，现在又说根本没这回事？',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'to throw away rubbish', cn: '倒垃圾', correct: false, reason: 'dump 有「倾倒」义，但这里说的是甩人。' },
          { key: 'B', en: 'end a relationship with someone, often abruptly', cn: '甩了、突然结束关系', correct: true, reason: 'dump 在感情语境里就是「甩人」，正对应他说的当众。' },
          { key: 'C', en: 'to copy computer data', cn: '复制电脑数据', correct: false, reason: '跟电脑操作无关。' }
        ],
        analysis: 'dump 有「倾倒、抛弃」的意思，感情里就是「甩了」。两个人对同一件事的记忆完全不同。',
        wrongFeedback: '你选错了，程野站起来，椅子在地上刮出很长的声音。气血 -10',
        afterCorrect: '江予掏出手机，翻出一条三年前的语音，按下播放。里面是程野自己说的：「我们从来没在一起。」'
      }
    ],
    completeText: '第四十四章结束。程野走了，那顿饭江予一口没吃，回去时把打包盒放在了门口。'
  },
  {
    id: 'dm_45',
    index: 45,
    title: '第 45 章 · 那个前任',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '第二天，程野在采访里提起了江予的「旧事」，热搜挂了整整一个上午。',
    questions: [
      {
        plotDescription: '新闻推送跳出来的时候，江予正在喝粥。',
        line: "He's saying I cheated on him. That's a lie.",
        lineCn: '他在说我当年背叛了他。那是谎话。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'to copy answers in an exam', cn: '考试作弊', correct: false, reason: 'cheat 有「作弊」义，但这里说的是感情里的背叛。' },
          { key: 'B', en: 'be unfaithful or disloyal to a partner', cn: '出轨、背叛伴侣', correct: true, reason: 'cheat 在感情里指不忠，正对应他否认的那句。' },
          { key: 'C', en: 'to win a game unfairly', cn: '不公平地赢下比赛', correct: false, reason: '这里不是比赛。' }
        ],
        analysis: 'cheat 有两条常见义：作弊 / 出轨。这里是后者，江予必须否掉。',
        wrongFeedback: '你选错了，助理以为他在说打游戏，问「什么作弊」。气血 -10',
        afterCorrect: '顾清和把手机按掉：「我去跟他们说。」江予拉住了他。'
      },
      {
        plotDescription: '程野在节目里笑着说，江予当年总爱跟他闹。',
        line: "He used to flirt with me on set. Everyone saw it.",
        lineCn: '他以前在片场总跟我调情。所有人都看见了。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'to complain loudly', cn: '大声抱怨', correct: false, reason: '闹脾气不是调情。' },
          { key: 'B', en: 'behave playfully in a romantic or sexual way', cn: '调情、带暧昧地逗人', correct: true, reason: 'flirt 指带感情意味的逗弄，正对应他说的「所有人都看见」。' },
          { key: 'C', en: 'to fight seriously', cn: '认真地打架', correct: false, reason: '跟动手无关。' }
        ],
        analysis: 'flirt 是「调情」，介于玩笑与示好之间。程野把旧日的玩笑重新包装了一遍。',
        wrongFeedback: '你选错了，弹幕开始刷「支持」，江予的指节按白了。气血 -10',
        afterCorrect: '顾清和忽然笑了：「他那是在逗你。你没看出来吗。」'
      },
      {
        plotDescription: '记者在楼下堵住了江予，话筒伸到他脸上。',
        line: "He's not my ex. There is no ex.",
        lineCn: '他不是我的前任。我没有前任。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'a former partner in a relationship', cn: '前任、以前的伴侣', correct: true, reason: 'ex 就是「前任」，他否认的正是这个词。' },
          { key: 'B', en: 'an extra person', cn: '多出来的一个人', correct: false, reason: 'extra 才是多余的，ex 是「前」的前缀。' },
          { key: 'C', en: 'a close colleague', cn: '关系很近的同事', correct: false, reason: '这里说的是感情关系，不是工作关系。' }
        ],
        analysis: 'ex 是「前任」，感情语境里的标准说法。江予把话说得很干净。',
        wrongFeedback: '你选错了，记者立刻追问「那那位医生呢」，江予沉默了。气血 -10',
        afterCorrect: '那天晚上，顾清和问他：「你为什么不说。」江予说：「说了你就成了我的软肋。」'
      },
      {
        plotDescription: '老周发来消息，问要不要他出面。',
        line: "I'll be your wingman. Let me tell them the truth on air.",
        lineCn: '我来当你的僚机。让我在直播里把真相说出来。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who helps a friend in romance', cn: '僚机、在旁边帮朋友的人', correct: true, reason: 'wingman 指在一旁帮朋友说话的人，这里他要替江予开口。' },
          { key: 'B', en: 'a pilot', cn: '飞行员', correct: false, reason: 'wing 是翅膀，但 wingman 在口语里不是飞行员。' },
          { key: 'C', en: 'a bodyguard', cn: '保镖', correct: false, reason: '他要动的是嘴，不是拳头。' }
        ],
        analysis: 'wingman 原指僚机飞行员，口语里指「帮朋友助攻的人」。老周这次终于站到了该站的位置。',
        wrongFeedback: '你选错了，老周在电话那头沉默：「那我就不去了。」气血 -10',
        afterCorrect: '江予说：「不用。这件事我自己说。」'
      }
    ],
    completeText: '第四十五章结束。第二天上午，江予的账号发出了一条只有十个字的声明。'
  },
  {
    id: 'dm_46',
    index: 46,
    title: '第 46 章 · 天台上的一句话',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '声明发出后，风向慢慢转了。深夜的天台上，两个人第一次把话说到最里面。',
    questions: [
      {
        plotDescription: '风很大，顾清和把外套披在他肩上。',
        line: "This place has a weird vibe. Like something is about to change.",
        lineCn: '这地方的气氛有点怪。像有什么要变了。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'a vibration in the ground', cn: '地面的震动', correct: false, reason: '那是字面义，这里说的是气氛。' },
          { key: 'B', en: 'the feeling or atmosphere of a place or person', cn: '氛围感、整体的感觉', correct: true, reason: 'vibe 指整体的感觉与气氛，正对应他说的「要变了」。' },
          { key: 'C', en: 'a very loud noise', cn: '很大的噪音', correct: false, reason: '他说的是感受，不是声音。' }
        ],
        analysis: 'vibe 是 vibration 的口语缩短形式，指「氛围感」。天台上的风把两个人的话都吹轻了。',
        wrongFeedback: '你选错了，顾清和抬头看天：「我没听见什么声音。」气血 -10',
        afterCorrect: '江予笑了一下：「我也觉得。像二十岁那年一样。」'
      },
      {
        plotDescription: '沉默了很久，顾清和才开口。',
        line: "I don't believe in soulmates. But I believe in you.",
        lineCn: '我不相信灵魂伴侣。但我相信你。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person you are destined to be with', cn: '灵魂伴侣、命中注定的那个人', correct: true, reason: 'soulmate 指灵魂层面契合的人，他正在否定这个词。' },
          { key: 'B', en: 'a roommate', cn: '室友', correct: false, reason: 'mate 是伙伴，但不是室友。' },
          { key: 'C', en: 'a teacher', cn: '老师', correct: false, reason: '跟师生无关。' }
        ],
        analysis: 'soulmate 是「灵魂伴侣」，常带宿命色彩。顾清和先否掉这个概念，再给出更重的一句。',
        wrongFeedback: '你选错了，江予以为他在说舍友，问「你大学室友怎么了」。气血 -10',
        afterCorrect: '江予说：「那你信我什么。」顾清和说：「信你不会骗我。这是我唯一会的。」'
      },
      {
        plotDescription: '江予转过身，正对着他。',
        line: "The chemistry was there from the first night. You can't fake that.",
        lineCn: '从第一晚开始就有那种化学反应。那个是装不出来的。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'the science of substances', cn: '化学这门科学', correct: false, reason: '那是字面义，这里说的是人和人之间的吸引。' },
          { key: 'B', en: 'a natural mutual attraction between people', cn: '化学反应、彼此之间的吸引', correct: true, reason: 'chemistry 引申指两人之间的默契与吸引，正对应「装不出来」。' },
          { key: 'C', en: 'a medical test', cn: '一项医学检查', correct: false, reason: '跟检查无关。' }
        ],
        analysis: 'chemistry 除了「化学」，还指人与人之间「天然的吸引」。江予说的是他们之间早就有的东西。',
        wrongFeedback: '你选错了，顾清和认真地说：「我大学化学挂过科。」气血 -10',
        afterCorrect: '顾清和笑了。这是他第一次在这里笑。'
      },
      {
        plotDescription: '江予伸出手，掌心朝上。',
        line: "Trust is the only thing I have left to give. Don't break it.",
        lineCn: '信任是我最后能给出的东西了。别弄碎它。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'money lent to someone', cn: '借出去的钱', correct: false, reason: '跟钱无关。' },
          { key: 'B', en: 'a legal document', cn: '一份法律文件', correct: false, reason: '这里说的是感情里的东西。' },
          { key: 'C', en: 'firm belief that someone is honest and reliable', cn: '信任、相信对方不会伤害自己', correct: true, reason: 'trust 指对人的信赖，正对应他说的「最后能给的」。' }
        ],
        analysis: 'trust 是「信任」，比喜欢更难给。江予把手伸出去，是把最后一点底牌交了出去。',
        wrongFeedback: '你选错了，江予把手收了回来，插回口袋，风把话吹散了。气血 -10',
        afterCorrect: '顾清和把手放上去。两只手都很凉，握了一会儿才有一点温度。'
      }
    ],
    completeText: '第四十六章结束。下楼时，江予走在前面，没有回头，但走得很慢。'
  },
  {
    id: 'dm_47',
    index: 47,
    title: '第 47 章 · 他说出来的那三个字',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '一周后，江予要去外地录节目。行李箱已经拉到门口，顾清和把他叫住了。',
    questions: [
      {
        plotDescription: '顾清和站在玄关，说了一句很直的话。',
        line: "I'm loyal to one person at a time. That's not a choice, it's how I'm built.",
        lineCn: '我一次只对一个人忠诚。这不是选择，是我本来的样子。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'faithful and devoted to someone', cn: '忠诚、始终如一', correct: true, reason: 'loyal 指对一个人始终不变，正对应他说的「一次只对一个人」。' },
          { key: 'B', en: 'polite to everyone', cn: '对谁都客气', correct: false, reason: '客气是对外的礼貌，不是忠诚。' },
          { key: 'C', en: 'obedient to a boss', cn: '对上司服从', correct: false, reason: '这里说的是感情，不是职场。' }
        ],
        analysis: 'loyal 是「忠诚」，强调不背叛、不变心。顾清和这句话说得极重。',
        wrongFeedback: '你选错了，江予笑着问：「那你对公司呢？」气氛散了。气血 -10',
        afterCorrect: '江予的行李箱停在门口，没动。'
      },
      {
        plotDescription: '江予试探着说，要不这次他就不去了。',
        line: "If you ask me to stay, I'll reject the whole schedule.",
        lineCn: '你要是让我留下，我就把整个行程都推了。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'to accept something happily', cn: '欣然接受', correct: false, reason: '恰恰相反。' },
          { key: 'B', en: 'refuse to accept something', cn: '拒绝、一口回绝', correct: true, reason: 'reject 指明确拒绝，他要推掉整个行程。' },
          { key: 'C', en: 'to delay something', cn: '把某事推迟', correct: false, reason: '推迟是缓一缓，他说的是一口回绝。' }
        ],
        analysis: 'reject 是「拒绝」，语气比 refuse 更硬。江予是在用最贵的东西试探。',
        wrongFeedback: '你选错了，江予真以为他答应了，转身就去打电话。气血 -10',
        afterCorrect: '顾清和摇头：「不用。你去。我在这儿等。」'
      },
      {
        plotDescription: '江予忽然明白了什么，把箱子推到一边。',
        line: "Then let me confess properly. I've wanted to say this for two years.",
        lineCn: '那让我正式表白。这句话我想说两年了。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'to admit a mistake', cn: '承认错误', correct: false, reason: 'confess 有「认错」义，但这里是表白。' },
          { key: 'B', en: 'to tell secrets to a priest', cn: '向神父忏悔', correct: false, reason: '那是宗教语境，这里不是。' },
          { key: 'C', en: 'admit your romantic feelings to someone', cn: '表白、把喜欢说出来', correct: true, reason: 'confess 在感情里就是「表白」，正对应他说两年了。' }
        ],
        analysis: 'confess 的核心是「把心里的话承认出来」：承认错误、承认喜欢，都是这个动作。',
        wrongFeedback: '你选错了，顾清和问：「你错哪了？」江予张了张嘴，没说出来。气血 -10',
        afterCorrect: '江予说：「我喜欢你。不是那种临时的。」'
      },
      {
        plotDescription: '顾清和听完，很久没有说话。',
        line: "I don't want a promise. I want a commitment.",
        lineCn: '我不要一句承诺。我要一个交代。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a promise made in words only', cn: '只是嘴上说说的保证', correct: false, reason: '他明确说不要「口头承诺」，要的是更实的东西。' },
          { key: 'B', en: 'a serious decision to stay and follow through', cn: '坚定投入、愿意持续兑现的决定', correct: true, reason: 'commitment 指愿意长期投入的决定，比 promise 更重。' },
          { key: 'C', en: 'a wedding ring', cn: '一枚婚戒', correct: false, reason: '戒指是形式，他说的是态度。' }
        ],
        analysis: 'commitment 的核心是「投入并持续」，不只是说一句。顾清和要的是能兑现的那种。',
        wrongFeedback: '你选错了，江予掏出手机要下单买戒指，被按住了手。气血 -10',
        afterCorrect: '江予说：「好。那我不走了。」他退了机票，改成了第二天清晨的班次。'
      }
    ],
    completeText: '第四十七章结束。改签多花了三百块，江予说这是他今年花得最值的一笔。'
  },
  {
    id: 'dm_48',
    index: 48,
    title: '第 48 章 · 第一次约会',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '节目录完回来，江予说，要补一个正式的第一次。',
    questions: [
      {
        plotDescription: '电影散场，路灯很暗，两个人走得比平时近。',
        line: "I like this kind of intimacy more than anything loud.",
        lineCn: '比起任何热闹的东西，我更喜欢这种亲密。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loud party', cn: '喧闹的派对', correct: false, reason: '他明确说「不要热闹」。' },
          { key: 'B', en: 'close, private emotional or physical closeness', cn: '亲密、私密而贴近的关系', correct: true, reason: 'intimacy 指贴近而私密的关系，正对应他说的这一种。' },
          { key: 'C', en: 'a formal introduction', cn: '正式的介绍', correct: false, reason: '跟介绍无关。' }
        ],
        analysis: 'intimacy 指「亲密」，可以是情感也可以是身体，但都带私密感。江予要的就是这种安静。',
        wrongFeedback: '你选错了，顾清和以为他要去喝酒，已经在看附近的店。气血 -10',
        afterCorrect: '顾清和把他的手扣住，一起插进了自己的口袋。'
      },
      {
        plotDescription: '路过一家店，橱窗里摆着两只很丑的杯子。',
        line: "There's real affection in the way you look at ugly cups.",
        lineCn: '你看那些丑杯子的样子，是真的有爱。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'a disease', cn: '一种疾病', correct: false, reason: '医学里有相近的词根，但这里不是。' },
          { key: 'B', en: 'a formal greeting', cn: '正式的问候', correct: false, reason: '跟打招呼无关。' },
          { key: 'C', en: 'a gentle feeling of liking or love', cn: '爱慕、温和的喜爱', correct: true, reason: 'affection 指温柔持久的喜欢，正对应他看杯子的眼神。' }
        ],
        analysis: 'affection 是「喜爱、爱慕」，比 love 更温和。江予连看杯子都带这种温度。',
        wrongFeedback: '你选错了，顾清和认真看了看杯子，说「确实很丑」。气血 -10',
        afterCorrect: '江予买了那两只。一只放在家里，一只放在他办公室。'
      },
      {
        plotDescription: '回到家，江予把灯调暗，把外卖倒进盘子里。',
        line: "This is our first real date night. Don't laugh at me.",
        lineCn: '这是我们第一次真正的约会之夜。别笑我。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a night shift at work', cn: '一个夜班', correct: false, reason: '跟工作无关。' },
          { key: 'B', en: 'an evening set aside for a romantic outing', cn: '约会之夜、专门留给两人的晚上', correct: true, reason: 'date night 指专门留出的浪漫夜晚，正对应他的布置。' },
          { key: 'C', en: 'a night of studying', cn: '一个学习的夜晚', correct: false, reason: '桌上没有书。' }
        ],
        analysis: 'date night 是固定搭配，指「特意留出来的两人夜晚」。江予把它弄得很郑重。',
        wrongFeedback: '你选错了，顾清和以为他要去上夜班，问他几点走。气血 -10',
        afterCorrect: '顾清和没笑。他把那两只丑杯子拿出来，倒了两杯水。'
      },
      {
        plotDescription: '吃完饭，顾清和看着他收拾碗筷，忽然说了一句。',
        line: "I think I'm completely smitten. This is embarrassing.",
        lineCn: '我觉得我彻底沦陷了。这有点丢人。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry', cn: '非常生气', correct: false, reason: '他的表情是软的，不是怒。' },
          { key: 'B', en: 'deeply and suddenly in love', cn: '神魂颠倒、深深着迷', correct: true, reason: 'smitten 指被感情击中，正对应他说的「彻底」。' },
          { key: 'C', en: 'slightly tired', cn: '有点累', correct: false, reason: '累不是着迷。' }
        ],
        analysis: 'smite 原意是「重击」，smitten 就是「被击中」，形容突然而彻底地爱上。',
        wrongFeedback: '你选错了，江予停下洗碗的手，问：「你哪里不舒服？」气血 -10',
        afterCorrect: '江予把碗放下，说：「那我比你早。我两年前就沦陷了。」'
      }
    ],
    completeText: '第四十八章结束。那天晚上，两只丑杯子并排放在窗台上，一直没有收起来。'
  },
  {
    id: 'dm_49',
    index: 49,
    title: '第 49 章 · 一个朋友的离婚',
    novel: '顶流和他的私人医生',
    speaker: { name: '顾清和', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '冬天的时候，老周打来电话，说自己要离婚了。江予听完，很久没说话。',
    questions: [
      {
        plotDescription: '电话那头，老周的声音沙哑得不像他。',
        line: "I thought I knew heartbreak. I didn't.",
        lineCn: '我以为我知道什么叫心碎。我不知道。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'a physical injury to the heart', cn: '心脏的物理损伤', correct: false, reason: '那是字面义，这里是比喻。' },
          { key: 'B', en: 'deep emotional pain after love fails', cn: '心碎、感情破裂后的剧痛', correct: true, reason: 'heartbreak 指感情上的巨大痛苦，正对应他沙哑的声音。' },
          { key: 'C', en: 'a kind of dessert', cn: '一种甜点', correct: false, reason: '跟甜点无关。' }
        ],
        analysis: 'heartbreak 是「心碎」，指感情失败带来的剧痛。老周说的是一句很重的实话。',
        wrongFeedback: '你选错了，江予问「你心脏怎么了」，电话那头沉默了很久。气血 -10',
        afterCorrect: '江予握着手机没说话，顾清和在旁边把手放在了他背上。'
      },
      {
        plotDescription: '老周说，其实他们分开住已经两年了。',
        line: "Long-distance didn't kill it. We did.",
        lineCn: '不是异地恋毁了我们。是我们自己。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very long phone call', cn: '一通很长的电话', correct: false, reason: '跟通话时长无关。' },
          { key: 'B', en: 'a relationship between people in different cities', cn: '异地恋、相隔两地的关系', correct: true, reason: 'long-distance 指两地分隔的关系，正对应他们分开住。' },
          { key: 'C', en: 'a long journey by train', cn: '一趟长途火车', correct: false, reason: '旅程不是关系本身。' }
        ],
        analysis: 'long-distance 是 long-distance relationship 的省略，指「异地恋」。老周把责任放回了自己身上。',
        wrongFeedback: '你选错了，江予问「你们跑了很远吗」，老周苦笑了一声。气血 -10',
        afterCorrect: '江予说：「那你打算怎么办。」老周说：「离。」'
      },
      {
        plotDescription: '聊到最后，老周忽然问了一句不太客气的话。',
        line: "I tried polyamory once. It's not for me, and it's not for you either.",
        lineCn: '我试过多边恋一次。那不适合我，也不适合你。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having many friends', cn: '有很多朋友', correct: false, reason: 'poly 是「多」，amor 是「爱」，跟朋友数量无关。' },
          { key: 'B', en: 'having more than one romantic partner at a time', cn: '多边恋、同时拥有多个伴侣', correct: true, reason: 'polyamory 指同时与多人建立亲密关系，正对应他说的「不适合」。' },
          { key: 'C', en: 'living with your parents', cn: '和父母同住', correct: false, reason: '跟居住方式无关。' }
        ],
        analysis: 'polyamory 由 poly（多）+ amor（爱）构成，指「多边恋」。老周是在借自己的经验劝他。',
        wrongFeedback: '你选错了，江予认真地说：「我没有很多朋友啊。」顾清和别过头笑了。气血 -10',
        afterCorrect: '江予说：「你不用担心我。」他说这话时，看了一眼厨房里的人。'
      },
      {
        plotDescription: '挂电话前，老周说了一件还没告诉别人的事。',
        line: "The divorce papers come next week. I'm signing them.",
        lineCn: '离婚协议下周到。我打算签。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a wedding invitation', cn: '一份婚礼请柬', correct: false, reason: '恰恰相反。' },
          { key: 'B', en: 'the legal end of a marriage', cn: '离婚、婚姻的法定终止', correct: true, reason: 'divorce 指婚姻的法律结束，正对应他要签的文件。' },
          { key: 'C', en: 'a business merger', cn: '一次商业合并', correct: false, reason: '跟生意无关。' }
        ],
        analysis: 'divorce 是「离婚」，指婚姻关系的法定终止。老周说得很平静，江予却听出了疲惫。',
        wrongFeedback: '你选错了，江予问「你们公司要合并？」电话那头笑了，笑得很难听。气血 -10',
        afterCorrect: '挂了电话，江予在沙发上坐了很久，然后说：「我们别变成那样。」'
      }
    ],
    completeText: '第四十九章结束。那晚顾清和没有回答，只是把他抱住了，抱得很紧。'
  },
  {
    id: 'dm_50',
    index: 50,
    title: '第 50 章 · 他在镜头前牵住了他',
    novel: '顶流和他的私人医生',
    speaker: { name: '江予', avatar: window.VERSION_AVATARS.dual_male },
    storyText: '开春，江予的复出演唱会定在体育馆。谢幕之前，他做了一件所有人都没想到的事。',
    questions: [
      {
        plotDescription: '演出前一天，有媒体又把「绯闻」翻了出来。',
        line: "They're calling it an affair. Two people living together is not an affair.",
        lineCn: '他们把这叫绯闻。两个人住在一起，那不叫绯闻。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious illness', cn: '一场重病', correct: false, reason: '跟病情无关。' },
          { key: 'B', en: 'a secret romantic relationship, often involving cheating', cn: '绯闻、隐秘的感情关系', correct: true, reason: 'affair 指隐秘的感情关系，常带负面色彩，正对应媒体的说法。' },
          { key: 'C', en: 'a formal event', cn: '一场正式活动', correct: false, reason: '跟场合无关。' }
        ],
        analysis: 'affair 有两个常见义：事务 / 绯闻。这里取后者，江予在反抗这个词带的那点脏。',
        wrongFeedback: '你选错了，助理以为他说「一场活动」，问他几点入场。气血 -10',
        afterCorrect: '顾清和在旁边说：「随他们说。」江予说：「不。这次我要自己说。」'
      },
      {
        plotDescription: '演唱会最后一首歌之前，江予站在话筒前。',
        line: "I owe you all the truth. And I owe him a romance that isn't hidden.",
        lineCn: '我欠你们一个真相。也欠他一场不必藏起来的浪漫。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a type of novel only', cn: '只是某种小说类型', correct: false, reason: 'romance 是小说类型，但这里指的是现实里的东西。' },
          { key: 'B', en: 'a loving relationship full of feeling and gestures', cn: '浪漫、充满情感的恋爱关系', correct: true, reason: 'romance 指恋爱中的浪漫，正对应他说的「不必藏起来」。' },
          { key: 'C', en: 'a long speech', cn: '一篇长篇演说', correct: false, reason: '他讲的话很短。' }
        ],
        analysis: 'romance 既是「浪漫小说」的体裁，也指现实里「浪漫的恋爱」。江予要的是后一种，而且要能公开。',
        wrongFeedback: '你选错了，台下以为他在介绍新书，竟然有人鼓掌。气血 -10',
        afterCorrect: '台下的灯海晃了一下，然后安静下来。'
      },
      {
        plotDescription: '他把话筒放低，看向侧幕。',
        line: "What I have for him is devotion, not excitement.",
        lineCn: '我对他的是长久的专注与投入，不是一阵兴奋。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a brief interest', cn: '一时的兴趣', correct: false, reason: '他明确说不是「一阵兴奋」。' },
          { key: 'B', en: 'deep, steady love and dedication', cn: '专注而持久的爱与投入', correct: true, reason: 'devotion 指深沉稳定的投入，正对应他说的「不是兴奋」。' },
          { key: 'C', en: 'a legal duty', cn: '一项法律义务', correct: false, reason: '这里说的是感情。' }
        ],
        analysis: 'devotion 的核心是「把自己稳定地交出去」，比 passion 更久。江予把这两个词对得很清。',
        wrongFeedback: '你选错了，江予停了半秒，接着说「你们可能听不懂」，台下笑了。气血 -10',
        afterCorrect: '侧幕后面，顾清和站着，一动没动。'
      },
      {
        plotDescription: '说完，他走下了台。',
        line: "Passion burns out. But I'd rather burn with you than stay cold.",
        lineCn: '激情会烧完。但我宁愿跟你一起烧，也不想待着发冷。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'suffering and pain', cn: '痛苦与受难', correct: false, reason: 'passion 的词源与此有关，但现代口语里说的是强烈的热情。' },
          { key: 'B', en: 'a formal speech', cn: '一段正式演讲', correct: false, reason: '跟演讲无关。' },
          { key: 'C', en: 'intense, burning emotion or desire', cn: '激情、强烈到灼热的热情', correct: true, reason: 'passion 指强烈到灼热的情绪，正对应他说的「一起烧」。' }
        ],
        analysis: 'passion 是「激情」，炽烈但易逝。江予承认它会烧完，却仍然选了这个。',
        wrongFeedback: '你选错了，台下以为他在说火灾，前排有人回头看。气血 -10',
        afterCorrect: '江予走到侧幕，在几万人的目光和无数镜头前，牵起了顾清和的手。全场安静了一秒，然后炸开。'
      }
    ],
    completeText: '第五十章结束。后来有人问江予，那一刻怕不怕。他说：「怕。但他的手是热的。」'
  }
];

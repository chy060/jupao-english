/**
 * 原创剧情题库 —— 大男主 ·《赘婿归来：从被退婚开始》
 * 50 章 × 4 题 = 200 题
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.male_lead = [
  {
    id: 'ml_1',
    index: 1,
    title: '第 1 章 · 退婚书上的那一笔',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏家老宅的客厅里，退婚书摊在红木桌上。陈默昨晚在小酒馆喝到天亮，太阳穴一跳一跳地疼。苏明哲把笔推到他面前，一屋子人都在等这个入赘三年的废物低头。',
    questions: [
      {
        plotDescription: '苏明哲晃着茶杯，故意把话说得很慢，让满屋子人都听得清清楚楚。',
        line: "You look pissed off. Good. A man with nothing should at least know how to be angry.",
        lineCn: '你看着挺火大的。很好，一个一无所有的男人，至少该知道怎么生气。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry and annoyed', cn: '火大、憋着一肚子气', correct: true, reason: '他被人当众羞辱，pissed off 正是口语里的「火大」。' },
          { key: 'B', en: 'a little sleepy', cn: '有点困', correct: false, reason: '他确实没睡好，但这句话说的是怒气，不是困意。' },
          { key: 'C', en: 'calm and polite', cn: '冷静又有礼貌', correct: false, reason: '满屋子都在等他发火，这句是挑衅，不是夸他冷静。' }
        ],
        analysis: 'pissed off 是很口语的「火大」，比 angry 更冲。陈默没有拍桌子，只是把笔拿起来——他的火不往外烧，往心里压。',
        wrongFeedback: '你选错了，满屋子人笑出声，苏明哲把退婚书又往前推了推，陈默的手指在桌沿上慢慢收紧。气血 -10',
        afterCorrect: '陈默在退婚书上签下名字，一笔到底。他抬头看了看墙上的钟：「一个月，从今晚开始算。」客厅里的笑声忽然卡住了一半。'
      },
      {
        plotDescription: '听到「一个月」三个字，苏明哲脸上的笑僵住了，声音一下拔高。',
        line: "Don't freak out, cousin. I'm only telling you the facts.",
        lineCn: '别抓狂，表哥。我只是在说事实。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to panic and lose control', cn: '崩溃、抓狂、情绪失控', correct: true, reason: '苏明哲脸色都变了，freak out 就是情绪一下炸开。' },
          { key: 'B', en: 'to laugh out loud', cn: '放声大笑', correct: false, reason: '这里没人笑，他是被一句话噎住之后的失态。' },
          { key: 'C', en: 'to walk away quietly', cn: '安静地走开', correct: false, reason: 'freak out 是情绪炸开，他还站在原地追问。' }
        ],
        analysis: 'freak out 强调的是情绪瞬间崩掉。陈默用这个词，是在提醒对方：先失控的人不是我。',
        wrongFeedback: '你选错了，苏明哲抓住话头继续嘲讽，客厅里又响起一阵附和的轻笑。气血 -10',
        afterCorrect: '苏明哲把茶杯重重放下：「一个月？你拿什么买？」陈默没回答，只是把签好的退婚书推了回去。'
      },
      {
        plotDescription: '签完字，陈默站起来，眼下的青黑藏不住，扶着桌沿缓了一下才站稳。',
        line: "I'm exhausted, but I'm not done here yet.",
        lineCn: '我已经精疲力尽了，但我还没打算就这么走。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely out of energy', cn: '精疲力尽、累到极点', correct: true, reason: '他宿醉未醒又熬了一夜，exhausted 就是身体被抽干。' },
          { key: 'B', en: 'very hungry', cn: '非常饿', correct: false, reason: '这里说的是累，不是饿，他连桌上的茶都没碰。' },
          { key: 'C', en: 'slightly bored', cn: '有点无聊', correct: false, reason: '他面对的是退婚和羞辱，跟无聊没有关系。' }
        ],
        analysis: 'exhausted 比 tired 重得多，是「一点力气都不剩」。他明明站不稳，却还是把话说完了。',
        wrongFeedback: '你选错了，你没读出他硬撑的那口气，苏明哲顺势又刺了一句。气血 -10',
        afterCorrect: '他松开桌沿，把背挺直。苏晚站在门口，第一次没有躲开他的视线。'
      },
      {
        plotDescription: '苏晚送他到门口，闻到他身上那股酒味，眉头皱了起来。',
        line: "You came here with a hangover? You could barely stand straight.",
        lineCn: '你就顶着宿醉来了？你差点连站都站不直。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'the sick feeling after drinking too much', cn: '宿醉、喝多之后第二天的难受', correct: true, reason: '她闻到了酒味，hangover 就是喝酒过量后的不适。' },
          { key: 'B', en: 'a headache from lack of sleep', cn: '缺觉引起的头痛', correct: false, reason: '头痛只是症状，hangover 的起因是前一晚喝酒。' },
          { key: 'C', en: 'a strong smell of perfume', cn: '很浓的香水味', correct: false, reason: '她闻到的是酒味，不是香水。' }
        ],
        analysis: 'hangover 特指喝酒过量后第二天的难受。陈默昨晚喝到天亮，今天却还是来了——他不是来求，是来结账。',
        wrongFeedback: '你选错了，苏晚眼里那点松动收了回去，转身走回客厅。气血 -10',
        afterCorrect: '陈默笑了一下：「喝酒是为了记住今天。」他把旧背包甩到肩上，走进了院子里的夜风。'
      }
    ],
    completeText: '第 1 章结束。退婚书签完，陈默没拿走苏家一分钱，只带走一个旧背包。走到门口他回头看了一眼——苏晚低着头，一个字也没说。'
  },
  {
    id: 'ml_2',
    index: 2,
    title: '第 2 章 · 三年饭钱，一笔算清',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天一早，苏家把三年「饭钱」列成清单送到陈默的旧公寓。楼道里停着一辆黑色迈巴赫，一位穿灰色西装的老者站在门口，已经等了两个小时。',
    questions: [
      {
        plotDescription: '老者扫了一眼那张清单，又看了看陈默住了三年的旧公寓，声音很轻。',
        line: "This house is toxic, young master. You should have left three years ago.",
        lineCn: '这个家是有毒的，少爷。你三年前就该走了。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'poisonous and harmful', cn: '有毒的、会慢慢把人耗坏的', correct: true, reason: '他说的是这个家的气氛在腐蚀人，toxic 正是这个意思。' },
          { key: 'B', en: 'very noisy and crowded', cn: '很吵很挤', correct: false, reason: '老宅并不吵，toxic 说的是伤害性，不是热闹。' },
          { key: 'C', en: 'extremely expensive', cn: '非常贵', correct: false, reason: '钱不是这里的重点，他说的是人。' }
        ],
        analysis: 'toxic 原本指「有毒的」，现在常形容一段关系或环境在慢慢消耗人。老周一句话，把三年的忍耐说透了。',
        wrongFeedback: '你选错了，老周没再说第二遍，只是把那张清单折好放进口袋。气血 -10',
        afterCorrect: '陈默把清单撕成两半：「他们连剩饭都算钱。」老周躬身：「那我们就按三倍还。」'
      },
      {
        plotDescription: '苏明哲带人追到楼道，正撞上老周替陈默拉开车门，场面一下僵住。',
        line: "Well, this is awkward. Since when does a loser have a driver?",
        lineCn: '这场面可真尴尬。一个废物什么时候配司机了？',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'uncomfortable and embarrassing', cn: '尴尬、让人下不来台', correct: true, reason: '他本来气势汹汹，结果撞见迈巴赫，气氛立刻变得难堪。' },
          { key: 'B', en: 'very exciting', cn: '非常刺激', correct: false, reason: '这里没人觉得刺激，只有措手不及的难堪。' },
          { key: 'C', en: 'totally normal', cn: '完全正常', correct: false, reason: '正因为觉得不正常，他才脱口而出这句话。' }
        ],
        analysis: 'awkward 形容场面突然变得不好收场。苏明哲想羞辱人，却先被这辆车羞辱了。',
        wrongFeedback: '你选错了，苏明哲抓住机会冷笑一声，楼道里的人都跟着看热闹。气血 -10',
        afterCorrect: '老周替陈默拉开车门：「少爷，老爷等您三年了。」苏明哲的脸一点点白下去。'
      },
      {
        plotDescription: '跟来的表弟盯着那张黑色卡片，笑得停不下来，觉得这是个笑话。',
        line: "I'm dead. You expect me to believe a card can fix three years?",
        lineCn: '笑死我了。你觉得我会信一张卡能抵三年？',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: "used to say something is hilarious", cn: '笑死我了、笑到不行（俚语）', correct: true, reason: '这里的 dead 不是真死，是年轻人说「太好笑了」。' },
          { key: 'B', en: 'actually dead', cn: '真的死了', correct: false, reason: '他站在这儿说话，dead 只是夸张的俚语。' },
          { key: 'C', en: 'deeply serious', cn: '非常严肃', correct: false, reason: '他明明在笑，语气是嘲讽不是严肃。' }
        ],
        analysis: '口语里 I am dead 表示「笑死我了」。表弟以为抓到了笑话，其实他笑的是自己看不清的东西。',
        wrongFeedback: '你选错了，表弟笑得更响，老周没有反驳，只是把卡片放在他手里。气血 -10',
        afterCorrect: '老周替他刷开闸机：「余额自己看。」表弟低头看了一眼，笑声当场断在喉咙里。'
      },
      {
        plotDescription: '车上，老周拨通一个电话，把手机递到陈默耳边。',
        line: "Your grandfather will be thrilled. He has been waiting three years.",
        lineCn: '老爷子会高兴坏的。他已经等了三年。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely pleased', cn: '欣喜若狂、高兴坏了', correct: true, reason: '老人等孙子回家三年，thrilled 是压不住的欢喜。' },
          { key: 'B', en: 'a little worried', cn: '有点担心', correct: false, reason: '这里说的是高兴，担心的话不会用 thrilled。' },
          { key: 'C', en: 'very angry', cn: '非常生气', correct: false, reason: '意思正好相反，thrilled 是极度的开心。' }
        ],
        analysis: 'thrilled 比 happy 强得多，是「高兴到心跳加快」。这一头是老人的等待，另一头是陈默三年没回的家。',
        wrongFeedback: '你选错了，电话那头沉默了几秒，老周轻轻叹了口气。气血 -10',
        afterCorrect: '陈默握着手机，很久才开口：「爷爷，我回来了。」车窗外的苏家老宅一点点退到后面。'
      }
    ],
    completeText: '第 2 章结束。车子驶出老城区，陈默把那张清单的碎片从口袋里掏出来，扔进了路边的垃圾桶。'
  },
  {
    id: 'ml_3',
    index: 3,
    title: '第 3 章 · 顶层的那间办公室',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '车子停在江城最高的那栋楼前。顶层的会议室里，天枢资本的十二个负责人已经站了三个小时。老周把一份股权文件放在陈默面前——三年里，这家公司一直在等他签字。',
    questions: [
      {
        plotDescription: '会议室的门一开，十几个人同时鞠躬，陈默站在门口，手指停在文件封面上。',
        line: "I'm a little overwhelmed. Give me five minutes alone.",
        lineCn: '我有点被压住了。给我五分钟，一个人待会儿。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to deal with too much at once', cn: '压力过载、一下子被压住', correct: true, reason: '三年隐忍之后突然要接管一切，信息量把他压得喘不过气。' },
          { key: 'B', en: 'extremely bored', cn: '极其无聊', correct: false, reason: '他不是无聊，是一下子接不住这么多东西。' },
          { key: 'C', en: 'very confident', cn: '非常自信', correct: false, reason: '手指停在封面上，说明他心里并不轻松。' }
        ],
        analysis: 'overwhelmed 是「事情太多太重，一时招架不住」。他没有硬撑，直接要了五分钟——这才是能扛事的人。',
        wrongFeedback: '你选错了，你没读懂他的停顿，会议室里的空气更紧了。气血 -10',
        afterCorrect: '五分钟后他推门出来，把文件翻到最后一页，签下名字：「从今天起，天枢不再等任何人。」'
      },
      {
        plotDescription: '散会后，老周问他要不要立刻开会，陈默靠在窗边，看着楼下的车流。',
        line: "Let the others panic. I'd rather stay chill for one hour.",
        lineCn: '让别人去慌吧。我宁愿先躺平一个小时。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm and relaxed', cn: '放松、躺平、不着急', correct: true, reason: '他要在开战前先把自己稳住，chill 就是这个状态。' },
          { key: 'B', en: 'cold and unfriendly', cn: '冷淡、不友好', correct: false, reason: 'chill 在这里说的是放松，不是冷漠。' },
          { key: 'C', en: 'ready to fight', cn: '准备开打', correct: false, reason: '他恰恰是在开打之前让自己慢下来。' }
        ],
        analysis: 'chill 作形容词是「松弛、不慌」。三年里他一直在忍，现在他学会先把节奏握在自己手里。',
        wrongFeedback: '你选错了，老周把行程表又翻了一页，你还是没抓住他的节奏。气血 -10',
        afterCorrect: '他给自己倒了杯温水，坐了整整一小时。一小时后，他按下内线：「把苏氏的资料全部调出来。」'
      },
      {
        plotDescription: '深夜十一点，最后一份报表合上，陈默靠在椅背上，眼睛闭了很久。',
        line: "Three years of pretending took everything. I'm drained.",
        lineCn: '三年的装傻，把什么都耗光了。我被掏空了。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely used up', cn: '被掏空、精力耗尽', correct: true, reason: '他不是累了一天，是三年的隐忍一次结算。' },
          { key: 'B', en: 'well rested', cn: '休息得很好', correct: false, reason: '正好相反，他连眼睛都快睁不开。' },
          { key: 'C', en: 'quite satisfied', cn: '挺满足', correct: false, reason: '这句话的语气是空，不是满足。' }
        ],
        analysis: 'drained 是「被抽干」，比 tired 更彻底。他把情绪关掉太久，一松手就整个人空下来。',
        wrongFeedback: '你选错了，你忽略了那几秒闭眼的重量。气血 -10',
        afterCorrect: '他睁开眼，把台灯调亮：「空了好，空了才能装新的东西。」'
      },
      {
        plotDescription: '凌晨，老周送来一份名单，上面是这三年来打压过陈家的所有名字，第一个就是赵家。',
        line: "I'm not anxious about them. I'm anxious about what I'll become.",
        lineCn: '我不为他们焦虑。我焦虑的是，我会变成什么样的人。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'worried and uneasy', cn: '焦虑、心里不踏实', correct: true, reason: '他怕的不是对手，是自己会被仇恨改造成另一个人。' },
          { key: 'B', en: 'excited about the future', cn: '对未来很兴奋', correct: false, reason: '这句话分明是担心，不是兴奋。' },
          { key: 'C', en: 'angry at the list', cn: '对名单很生气', correct: false, reason: '他明确说了「不是为他们」。' }
        ],
        analysis: 'anxious 是那种说不清、放不下的不安。名单在手，他却先问自己——这是陈默和赵天佑最大的区别。',
        wrongFeedback: '你选错了，老周收回名单，没有再多说一句。气血 -10',
        afterCorrect: '陈默把名单压在台灯下：「先查苏氏。他们撑不过这个月。」'
      }
    ],
    completeText: '第 3 章结束。这一夜，天枢顶层的灯亮到天亮。陈默签了十七份文件，只留下一个名字没动——苏晚。'
  },
  {
    id: 'ml_4',
    index: 4,
    title: '第 4 章 · 雨里的那把伞',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '三天后，苏氏被银行抽贷的消息传遍江城。苏振海在董事会上摔了杯子，苏明哲连夜找人借钱，没有一家肯接电话。',
    questions: [
      {
        plotDescription: '陈默看着手里的资料，指节一点点收紧——三年前让苏氏抽贷的，正是赵家。',
        line: "I was furious when I saw the file. They planned this three years ago.",
        lineCn: '我看到文件的时候是狂怒的。他们三年前就布好了局。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '狂怒、怒到极点', correct: true, reason: '三年前的局间接害死了他父亲，furious 是压不住的火。' },
          { key: 'B', en: 'a bit confused', cn: '有点困惑', correct: false, reason: '资料写得很清楚，他不是看不懂，是看懂了才怒。' },
          { key: 'C', en: 'very pleased', cn: '非常满意', correct: false, reason: '意思完全相反。' }
        ],
        analysis: 'furious 比 angry 更重，是「怒火冲到头顶」。他没有砸东西，只是把资料合上——那是在压。',
        wrongFeedback: '你选错了，老周看见他手背上的青筋，默默把门带上。气血 -10',
        afterCorrect: '他把资料锁进抽屉：「赵家想看着苏氏死，那我就让它活给他们看。」'
      },
      {
        plotDescription: '同一晚，苏晚一个人坐在苏氏楼下的台阶上，手机屏幕亮了又暗。',
        line: "She sounded depressed on the phone. I've never heard her like that.",
        lineCn: '她在电话里听起来很抑郁。我从没听过她那样说话。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very sad and without hope', cn: '抑郁、低落得看不到头', correct: true, reason: '苏氏要垮，她一个人扛着，情绪已经沉到底。' },
          { key: 'B', en: 'extremely cheerful', cn: '非常开心', correct: false, reason: '正好相反，她的声音已经低下去。' },
          { key: 'C', en: 'just a little tired', cn: '只是有点累', correct: false, reason: 'depressed 比累重得多，是一种看不到出路的低落。' }
        ],
        analysis: 'depressed 描述的是持续往下沉的低落。陈默三年没听过她这样的声音，这一句让他停住了。',
        wrongFeedback: '你选错了，你没听出那通电话里的重量。气血 -10',
        afterCorrect: '陈默站在落地窗前，看了很久的江面：「老周，备车。」'
      },
      {
        plotDescription: '车里，韩野从外地赶回来，一上车就把外套甩到后座，眼睛发亮。',
        line: "I'm so hyped. We're finally going to take them down.",
        lineCn: '我太兴奋了。我们终于要动手了。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely excited', cn: '极度兴奋、热血上头', correct: true, reason: '韩野等了三年就等这一仗，hyped 正是这个状态。' },
          { key: 'B', en: 'deeply worried', cn: '非常担心', correct: false, reason: '他拍着座椅、眼睛发亮，是兴奋不是担心。' },
          { key: 'C', en: 'totally calm', cn: '完全平静', correct: false, reason: '他的动作和语气都不平静。' }
        ],
        analysis: 'hyped 是「被点着了」，年轻人的战前兴奋。陈默没有跟着热起来，只问了一句：人呢。',
        wrongFeedback: '你选错了，韩野的兴奋被浇了一半，声音低下去。气血 -10',
        afterCorrect: '陈默只问：「人齐了吗？」韩野立刻收起笑：「齐了，一个都没少。」'
      },
      {
        plotDescription: '苏家门口，苏晚一个人站在雨里，看见车灯亮起，抬起头。',
        line: "She looked miserable, standing there in the rain with no umbrella.",
        lineCn: '她看起来惨透了，站在雨里连把伞都没有。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely unhappy and pitiful', cn: '惨透了、又狼狈又难受', correct: true, reason: '淋着雨、家要垮、没人帮她，miserable 就是这个画面。' },
          { key: 'B', en: 'fashionable and elegant', cn: '时髦又优雅', correct: false, reason: '雨里的狼狈和优雅没有关系。' },
          { key: 'C', en: 'very determined', cn: '非常坚定', correct: false, reason: '她此刻更多是撑不住了，不是坚定。' }
        ],
        analysis: 'miserable 是「身心都惨」。陈默在车里看了她三秒才开门——他要救苏氏，但不想让她以为这是心软。',
        wrongFeedback: '你选错了，车没有停，直接开进了苏家院子。气血 -10',
        afterCorrect: '陈默下车，把伞递给她，声音很平：「上车。谈的是生意，不是旧情。」'
      }
    ],
    completeText: '第 4 章结束。苏晚握着那把伞，指节发白。她上了车，两个人一路没有说一句话。'
  },
  {
    id: 'ml_5',
    index: 5,
    title: '第 5 章 · 三亿的价码',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏家会议室里，天枢资本的三亿注资协议摆在桌上。条款只有一条：苏家当众承认三年前那份退婚书作废。',
    questions: [
      {
        plotDescription: '苏振海看完协议，手抖了一下，抬头看陈默的眼神完全变了。苏明哲在旁边小声补了一句。',
        line: "My father was ecstatic when he heard the offer. He couldn't sit still.",
        lineCn: '我爸听到这个条件时欣喜若狂，坐都坐不住。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy and excited', cn: '欣喜若狂', correct: true, reason: '三亿能救苏氏，苏振海当然喜出望外。' },
          { key: 'B', en: 'deeply ashamed', cn: '深感羞耻', correct: false, reason: '他先想到的是活下来，羞耻是后面的事。' },
          { key: 'C', en: 'slightly relieved', cn: '稍微松了口气', correct: false, reason: 'ecstatic 是极度的喜，不是轻微松口气。' }
        ],
        analysis: 'ecstatic 是「喜到失态」。同一个苏振海，三天前还在摔杯子，今天已经开始算怎么把话说得体面。',
        wrongFeedback: '你选错了，苏振海的脸僵了一下，会议室安静得能听见空调声。气血 -10',
        afterCorrect: '陈默把笔推过去：「签字前，我要苏明哲当众念一遍那份退婚书。」'
      },
      {
        plotDescription: '苏晚坐在长桌另一端，从头到尾没有表情，直到听见自己的名字。',
        line: "I felt numb when he read my name out loud. I didn't feel anything.",
        lineCn: '他念到我的名字时，我是麻木的。什么都没感觉到。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to feel anything', cn: '麻木、什么都感觉不到', correct: true, reason: '退婚书被当众念出来，她已经没有力气再难过。' },
          { key: 'B', en: 'extremely happy', cn: '非常开心', correct: false, reason: '她坐在那儿一动不动，不是开心。' },
          { key: 'C', en: 'very angry', cn: '非常愤怒', correct: false, reason: '她的状态是空的，不是烧起来的怒。' }
        ],
        analysis: 'numb 是「感觉被关掉了」。三年里她一直沉默，此刻连羞耻都感觉不到，才最让人心里发沉。',
        wrongFeedback: '你选错了，苏晚垂下眼，没有再看任何人。气血 -10',
        afterCorrect: '陈默合上协议：「钱今天到账。」他起身，从她椅背旁走过，没有停。'
      },
      {
        plotDescription: '散会后，苏明哲在走廊里拦住苏晚，压低声音，眼睛却盯着会议室的方向。',
        line: "You think he's doing this for you? I've never been more jealous of a loser.",
        lineCn: '你以为他是为了你？我从没这么嫉妒过一个废物。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'unhappy because someone has what you want', cn: '嫉妒、眼红', correct: true, reason: '他嫉妒的是陈默如今的位置和钱，不是别的。' },
          { key: 'B', en: 'grateful', cn: '感激', correct: false, reason: '他的语气是咬牙切齿，不是感谢。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '他很清楚自己在嫉妒，说的是气话。' }
        ],
        analysis: 'jealous 是「别人有而我没有」的酸。苏明哲越骂废物，越说明他心里的账已经算反了。',
        wrongFeedback: '你选错了，苏晚绕过他走了，走廊里只剩他一个人。气血 -10',
        afterCorrect: '苏晚停在电梯口，回头说了一句：「他从来没为自己争过一句。」'
      },
      {
        plotDescription: '车里，陈默看着窗外，忽然开口，声音很轻。',
        line: "I used her family's collapse to get what I wanted. I feel guilty about that.",
        lineCn: '我利用她家的崩盘拿到了我想要的。我对此感到内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling you did something wrong', cn: '内疚、心里过不去', correct: true, reason: '他清楚自己把苏晚的处境当成了筹码。' },
          { key: 'B', en: 'proud of himself', cn: '为自己骄傲', correct: false, reason: '他说话的语气是低的，不是得意。' },
          { key: 'C', en: 'completely innocent', cn: '完全无辜', correct: false, reason: 'guilty 恰恰是承认自己有责任。' }
        ],
        analysis: 'feel guilty 是「心里有愧」。他可以赢，但他不想用这种方式赢——这句自省，是他和赵天佑的分界线。',
        wrongFeedback: '你选错了，韩野从后视镜看了他一眼，没有接话。气血 -10',
        afterCorrect: '韩野沉默了一会儿：「那你打算怎么还？」陈默说：「把她想要的东西，一样一样买回来。」'
      }
    ],
    completeText: '第 5 章结束。三亿到账那天，苏氏的股价止跌。同一天，赵天佑在朋友圈发了一张江城夜景，只写了四个字：好戏开场。'
  },
  {
    id: 'ml_6',
    index: 6,
    title: '第 6 章 · 十四个小时的会议室',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '债务重组的第一周，苏氏七家子公司同时伸手要钱。陈默把天枢的团队直接搬进苏氏大楼，会议室的白板写了擦、擦了写，已经三天没关过灯。',
    questions: [
      {
        plotDescription: '第七家子公司的负责人刚走，陈默揉着眉心，对韩野说了一句实话。',
        line: "I'm stressed, but I can't show it in front of them.",
        lineCn: '我压力很大，但不能在他们面前露出来。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'under a lot of pressure', cn: '压力大、绷得很紧', correct: true, reason: '七家子公司同时要钱，全压在他一个人身上。' },
          { key: 'B', en: 'completely relaxed', cn: '完全放松', correct: false, reason: '正好相反，他连眉心都松不开。' },
          { key: 'C', en: 'a little disappointed', cn: '有点失望', correct: false, reason: '这里说的是压力，不是失望。' }
        ],
        analysis: 'stressed 是「被压力绷住」。他可以对韩野说实话，却不能对下面的人露出来——领头的人一慌，队伍就散了。',
        wrongFeedback: '你选错了，韩野看了他一眼，把话咽了回去。气血 -10',
        afterCorrect: '陈默把白板上的第七个名字划掉：「先保工资，再谈债。顺序不能错。」'
      },
      {
        plotDescription: '凌晨一点，韩野推门进来，脸色很差，说有两个同事已经连着三天没回家。',
        line: "Two of my guys hit burnout in the first week. I can't lose them.",
        lineCn: '我手底下两个人第一周就职业倦怠了。我不能失去他们。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'extreme tiredness from too much work', cn: '职业倦怠、长期高压耗到熄火', correct: true, reason: '连轴转三天不回家，burnout 正是这种耗到空的状态。' },
          { key: 'B', en: 'a sudden promotion', cn: '突然升职', correct: false, reason: '没有人因为升职三天不回家还脸色发白。' },
          { key: 'C', en: 'a small mistake', cn: '一个小失误', correct: false, reason: 'burnout 说的是人被工作烧空，不是差错。' }
        ],
        analysis: 'burnout 是长期高压之后「烧到熄火」，不是一两天的累。陈默听完沉默了几秒，第一件事是让所有人轮班。',
        wrongFeedback: '你选错了，韩野没再说话，门关得很轻。气血 -10',
        afterCorrect: '陈默当场改了三班表：「十点以后不许留人。人没了，项目也活不了。」'
      },
      {
        plotDescription: '凌晨两点，银行那边突然来电，说放款流程要往后拖一周。',
        line: "For ten minutes I thought we'd panic. Then the money landed.",
        lineCn: '有那么十分钟我以为我们要慌了。然后钱到账了。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'sudden overwhelming fear', cn: '恐慌、一下子慌了神', correct: true, reason: '钱一拖，工资就发不出，那十分钟所有人都在崩边上。' },
          { key: 'B', en: 'celebrate loudly', cn: '大声庆祝', correct: false, reason: '钱还没到，没有任何人想庆祝。' },
          { key: 'C', en: 'take a short break', cn: '短暂休息', correct: false, reason: 'panic 是情绪失控，不是休息。' }
        ],
        analysis: 'panic 是「突然被恐惧抓住」。陈默没让会议室乱起来，他只是把手机扣在桌上，等那十分钟过去。',
        wrongFeedback: '你选错了，会议室里有人开始收拾东西，陈默没有再解释。气血 -10',
        afterCorrect: '到账短信亮起时，没人喊。陈默只说了一句：「继续。」'
      },
      {
        plotDescription: '天快亮时，陈默靠在椅背上，手机屏幕上那条到账短信还没关。',
        line: "I've never been so relieved to see a bank notification.",
        lineCn: '我从没因为一条银行通知这么松过一口气。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'glad that a worry is gone', cn: '松了口气、悬着的心放下来', correct: true, reason: '钱到了，工资能发了，那口气才落下去。' },
          { key: 'B', en: 'still worried', cn: '仍然担心', correct: false, reason: '他说的是松一口气，不是继续担心。' },
          { key: 'C', en: 'extremely angry', cn: '极其愤怒', correct: false, reason: '这条短信救了他，不可能让他愤怒。' }
        ],
        analysis: 'relieved 是「悬着的东西终于放下」。他没有笑，只是把手机扣过来，闭了两分钟眼。',
        wrongFeedback: '你选错了，你把他的安静当成了冷漠。气血 -10',
        afterCorrect: '他睁开眼，对韩野说：「睡四个小时。八点，我们谈城南那个项目。」'
      }
    ],
    completeText: '第 6 章结束。苏氏撑过了第一周。而城南那个项目，赵天佑已经盯了半年。'
  },
  {
    id: 'ml_7',
    index: 7,
    title: '第 7 章 · 城南项目易主',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '城南新能源的项目招标会上，赵天佑带着六个人提前半小时进场。开标结果出来，天枢以零点三分之差落败。散场时，赵天佑特意走到陈默面前。',
    questions: [
      {
        plotDescription: '回程车里，老周提起三年前陈默父亲出殡那晚的事，说起苏晚在殡仪馆外站了一整夜。',
        line: "I was heartbroken when I heard what she did that night.",
        lineCn: '听到她那晚做的事，我心都碎了。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply hurt emotionally', cn: '心碎、难受得说不出话', correct: true, reason: '他三年不知道她在门外站了一夜，这份迟到的知情让他心里裂开。' },
          { key: 'B', en: 'very hungry', cn: '非常饿', correct: false, reason: '这是情绪上的痛，跟身体无关。' },
          { key: 'C', en: 'slightly curious', cn: '有点好奇', correct: false, reason: '他的反应远不止好奇。' }
        ],
        analysis: 'heartbroken 是「心被撕开」的痛。陈默三年里以为她冷眼旁观，原来那一夜她一直在门外。',
        wrongFeedback: '你选错了，你没有接住这句话，车里的空气冷了下来。气血 -10',
        afterCorrect: '陈默很久没说话，最后只问：「她后来为什么一个字都不提？」'
      },
      {
        plotDescription: '招标会门口，赵天佑把中标文件卷在手里，笑着拍了拍陈默的肩。',
        line: "He looked so smug when he took the project. I wanted to break something.",
        lineCn: '他抢下项目时那副得意忘形的样子，我真想砸点东西。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'too pleased with yourself', cn: '得意忘形、自鸣得意', correct: true, reason: '赵天佑故意来拍肩，就是那副「我赢了」的得意。' },
          { key: 'B', en: 'very humble', cn: '非常谦虚', correct: false, reason: '他特意走过来炫耀，跟谦虚正相反。' },
          { key: 'C', en: 'deeply sorry', cn: '非常抱歉', correct: false, reason: '他没有半点歉意，只有得意。' }
        ],
        analysis: 'smug 是那种招人烦的「我就知道我会赢」。陈默没动手，他把这口气记住了。',
        wrongFeedback: '你选错了，全场都看见了那份难堪，赵天佑笑得更开。气血 -10',
        afterCorrect: '陈默把手插回口袋：「恭喜。希望三个月后你还笑得出来。」'
      },
      {
        plotDescription: '当晚，苏明哲的电话一个接一个打进来，语气一次比一次刻薄。',
        line: "He keeps calling me. I'm annoyed, but I pick up every time.",
        lineCn: '他一个劲儿打给我。我烦透了，但每次都接。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly angry and bothered', cn: '烦透了、被搅得心烦', correct: true, reason: '电话一个接一个，还全是讽刺，annoyed 正合适。' },
          { key: 'B', en: 'deeply moved', cn: '深受感动', correct: false, reason: '苏明哲的话没有一句值得感动。' },
          { key: 'C', en: 'totally indifferent', cn: '完全无所谓', correct: false, reason: '他每次都接，说明这通电话确实搅到了他。' }
        ],
        analysis: 'annoyed 是「被反复搅扰之后的烦躁」，比 angry 轻。他每通都接，是因为他在等对方说漏嘴。',
        wrongFeedback: '你选错了，韩野替你按了静音，你却还是把电话接了回来。气血 -10',
        afterCorrect: '他听完最后一句，只回了一个字：「嗯。」挂断后，他把号码存进了证据文件夹。'
      },
      {
        plotDescription: '深夜，老周拿着检测仪在办公室走了一圈，最后从茶几底下摸出一个小东西。',
        line: "Maybe it's paranoia, but someone has been in my office.",
        lineCn: '也许是我想多了，但有人进过我的办公室。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'the feeling that others are out to get you', cn: '被害妄想、总觉得有人要害自己', correct: true, reason: '他嘴上说也许是自己多疑，其实窃听器就在手里。' },
          { key: 'B', en: 'a strong memory', cn: '清晰的记忆', correct: false, reason: 'paranoia 是一种怀疑，不是记忆。' },
          { key: 'C', en: 'a sleeping problem', cn: '睡眠问题', correct: false, reason: '这里说的是「总觉得有人盯着」，跟睡眠无关。' }
        ],
        analysis: 'paranoia 指没有根据也觉得被人针对。陈默先自嘲了一句 paranoia，然后把手里的东西放到桌上——他不是多疑，他是被证实了。',
        wrongFeedback: '你选错了，老周把东西收进口袋，没有再说一句。气血 -10',
        afterCorrect: '陈默看着那个小黑点：「从今天起，重要的话只在车上说。」'
      }
    ],
    completeText: '第 7 章结束。城南项目丢了，办公室还被装了东西。陈默把所有文件搬回那间旧公寓——三年前他一无所有的地方，现在成了最安全的地方。'
  },
  {
    id: 'ml_8',
    index: 8,
    title: '第 8 章 · 最黑的那三夜',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '城南项目易主后，江城的媒体一夜之间全倒向赵家。三篇稿子把天枢写成「靠资本硬撑的空壳」，两家银行同时要求追加担保。',
    questions: [
      {
        plotDescription: '第三个失眠的夜里，陈默在客厅来回走，凌晨三点开车绕了半座城。',
        line: "I've been restless for three nights. I can't sit still.",
        lineCn: '我已经连着三晚焦躁得睡不着。坐都坐不住。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to relax or stay still', cn: '焦躁、静不下来', correct: true, reason: '连睡三晚都坐不住，restless 就是这种状态。' },
          { key: 'B', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: '他根本睡不着，正好相反。' },
          { key: 'C', en: 'very energetic', cn: '精力充沛', correct: false, reason: '这不是精力，是压不住的躁。' }
        ],
        analysis: 'restless 是「身体停下来，心还在跑」。三夜没睡，他不是在想怎么赢，是在想哪一步走错了。',
        wrongFeedback: '你选错了，你只看见他还在开车，没看见他已经三天没合眼。气血 -10',
        afterCorrect: '天快亮时他把车停在江边，给韩野发了条消息：「把城南的底稿全部找出来。」'
      },
      {
        plotDescription: '韩野把那三篇稿子的转载数据放到桌上，陈默看得很慢。',
        line: "I'm not bitter about losing. I'm bitter about how they won.",
        lineCn: '我不是输不起。我是恨他们赢的方式。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry and resentful about unfair treatment', cn: '苦涩、怨恨、咽不下这口气', correct: true, reason: '他不是输不起，是咽不下被做局的那口气。' },
          { key: 'B', en: 'sweet and pleasant', cn: '甜美愉快的', correct: false, reason: '情绪完全相反。' },
          { key: 'C', en: 'completely calm', cn: '完全平静', correct: false, reason: '他说的是「恨」，不是平静。' }
        ],
        analysis: 'bitter 是「苦到了心里」，带着不甘和怨。陈默承认自己 bitter，比假装大度更有力量。',
        wrongFeedback: '你选错了，韩野把稿子收起来，屋里没人说话。气血 -10',
        afterCorrect: '他点了点那三篇稿子：「查转载源。同一批账号，不可能只做这一次。」'
      },
      {
        plotDescription: '半夜，苏晚提着一袋粥站在旧公寓门口，看见他开门时的样子，愣住了。',
        line: "I don't let people see me like this. Right now I'm vulnerable.",
        lineCn: '我不让人看见我这个样子。现在我很脆弱。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'easily hurt and unprotected', cn: '脆弱、没有防备', correct: true, reason: '他三天没睡、胡子没刮，第一次在人前卸下那层壳。' },
          { key: 'B', en: 'extremely strong', cn: '极其强大', correct: false, reason: '他明确说的是自己此刻不设防。' },
          { key: 'C', en: 'very polite', cn: '非常有礼貌', correct: false, reason: 'vulnerable 说的是心理状态，不是礼貌。' }
        ],
        analysis: 'vulnerable 是「把软的地方露出来」。他让苏晚进门，等于承认自己也会撑不住。',
        wrongFeedback: '你选错了，门在你手里停了一下，最后还是关上了。气血 -10',
        afterCorrect: '苏晚把粥放在桌上，没有问项目，只说：「先吃。凉了就不能吃了。」'
      },
      {
        plotDescription: '第二天，赵天佑在采访里放话，说天枢撑不过这个季度。韩野把视频递过来时，声音都哑了。',
        line: "For the first time in three years, I felt hopeless.",
        lineCn: '三年来第一次，我觉得没指望了。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling there is no way out', cn: '绝望、看不到出路', correct: true, reason: '银行追保、媒体围剿、项目又丢了，他确实走到了最低处。' },
          { key: 'B', en: 'full of hope', cn: '充满希望', correct: false, reason: '正好相反。' },
          { key: 'C', en: 'a little curious', cn: '有点好奇', correct: false, reason: '这句话是低谷的自白，不是好奇。' }
        ],
        analysis: 'hopeless 是「看不见出口」。允许自己承认这一刻的绝望，才有力气走下一步。',
        wrongFeedback: '你选错了，韩野把视频关了，房间里只剩下电脑的风扇声。气血 -10',
        afterCorrect: '陈默把视频看完，忽然笑了一下：「他急了。急了就会出错。」'
      }
    ],
    completeText: '第 8 章结束。这一夜陈默睡了四个小时，是三天来最长的一觉。醒来时，桌上那碗粥已经凉了，旁边压着一张便签：别一个人扛。'
  },
  {
    id: 'ml_9',
    index: 9,
    title: '第 9 章 · 存折与一碗面',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天上午，老周把一个旧存折放在陈默桌上，说自己这些年攒的退休金，可以先填进去。同一天，韩野带回了那批账号的转账记录。',
    questions: [
      {
        plotDescription: '陈默把存折推回去，老周却按住不松手。',
        line: "I'm grateful, but I can't take your retirement money.",
        lineCn: '我很感激，但我不能拿你的养老钱。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'thankful for what someone did', cn: '感激、心里记着这份情', correct: true, reason: '老周愿意掏出养老钱，他当然心里发热。' },
          { key: 'B', en: 'angry at the offer', cn: '对这个提议很生气', correct: false, reason: '他说的是感激，随后才是拒绝。' },
          { key: 'C', en: 'totally uninterested', cn: '完全不感兴趣', correct: false, reason: '他把存折推回去，是因为珍重，不是无所谓。' }
        ],
        analysis: 'grateful 是「记得别人为你做过什么」。陈默拒绝的不是这份心，是不能再让老人替他冒险。',
        wrongFeedback: '你选错了，老周的手停在半空，很久才收回去。气血 -10',
        afterCorrect: '陈默把存折塞回他口袋：「等这事完了，我给您换个带院子的房子。」'
      },
      {
        plotDescription: '晚上回到旧公寓，苏晚在小小的厨房里煮面，锅里的水正好开。',
        line: "For the first time in years, I feel content.",
        lineCn: '这么多年，我第一次觉得满足。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'quietly satisfied', cn: '满足、心里踏实', correct: true, reason: '一碗面、一盏灯，他这三年的紧绷第一次松开。' },
          { key: 'B', en: 'the main part of something', cn: '内容、主体', correct: false, reason: '这里用的是形容词「满足」，不是名词「内容」。' },
          { key: 'C', en: 'extremely excited', cn: '极度兴奋', correct: false, reason: 'content 是安静的满足，不是兴奋。' }
        ],
        analysis: 'content 作形容词是「不多不少，刚刚好」。他刚打完一场败仗，却在这一碗面前觉得值。',
        wrongFeedback: '你选错了，苏晚把面推到他面前，你却还在想别的。气血 -10',
        afterCorrect: '陈默吃了两口，忽然说：「等我把这事办完，你教我煮这个。」'
      },
      {
        plotDescription: '韩野推门进来，把转账记录拍在桌上——三篇稿子的钱，来自同一家空壳公司。',
        line: "Seeing them cheer made me feel fulfilled.",
        lineCn: '看到他们欢呼，我觉得这一切都值了、特别充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply satisfied because something matters', cn: '充实、觉得做的事有意义', correct: true, reason: '团队熬了半个月终于抓到线头，这种满足不是钱能给的。' },
          { key: 'B', en: 'completely empty', cn: '彻底空虚', correct: false, reason: '意思正好相反。' },
          { key: 'C', en: 'slightly tired', cn: '有点累', correct: false, reason: '累是真的，但这句话说的是值。' }
        ],
        analysis: 'fulfilled 是「被意义填满」。陈默要的从来不只是赢，是这群人愿意跟他一起熬。',
        wrongFeedback: '你选错了，韩野的笑容僵了一下，把记录收了回去。气血 -10',
        afterCorrect: '陈默把记录看了三遍，抬头说：「明天开董事会。该让一些人下来了。」'
      },
      {
        plotDescription: '第二天董事会刚开始，苏明哲就冲了进来，领带歪着，声音尖得不像他。',
        line: "Su Mingzhe burst in, hysterical, screaming that I ruined him.",
        lineCn: '苏明哲冲了进来，歇斯底里地喊着说我毁了他。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'wildly out of control with emotion', cn: '歇斯底里、情绪彻底失控', correct: true, reason: '他领带歪着、声音发尖地喊，就是彻底失控。' },
          { key: 'B', en: 'very calm and polite', cn: '非常冷静有礼', correct: false, reason: '他冲进会议室大喊，跟冷静相反。' },
          { key: 'C', en: 'a little shy', cn: '有点害羞', correct: false, reason: 'hysterical 是情绪爆炸，不是害羞。' }
        ],
        analysis: 'hysterical 是「情绪冲到无法自控」。真正毁掉苏明哲的不是陈默，是他自己签过的那些字。',
        wrongFeedback: '你选错了，保安把他拦在门口，会议室里的人都不敢抬头。气血 -10',
        afterCorrect: '陈默把一叠文件推到他面前：「这些签字，哪一个是我逼你的？」'
      }
    ],
    completeText: '第 9 章结束。董事会投票结果出来，苏明哲被免去一切职务。他走的时候回头看了一眼，陈默没有抬头。'
  },
  {
    id: 'ml_10',
    index: 10,
    title: '第 10 章 · 决战前夜',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '深夜，老周把最后一份资料放在桌上——三年前陈默父亲的公司被做局的全部证据，最后一页是一张伪造的债务确认书，签名是赵家的老爷子。',
    questions: [
      {
        plotDescription: '陈默一页一页翻完，翻到最后一页时，手停住了。',
        line: "When I read the last page, I felt pure rage.",
        lineCn: '读到最后一页的时候，我心里只剩下纯粹的暴怒。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'violent, uncontrollable anger', cn: '暴怒、怒到发抖', correct: true, reason: '父亲是被这一纸伪造的确认书逼死的，这已经不是生气。' },
          { key: 'B', en: 'mild annoyance', cn: '轻微的不快', correct: false, reason: 'rage 是极端的怒，不是一点点烦。' },
          { key: 'C', en: 'deep sadness', cn: '深深的悲伤', correct: false, reason: '悲伤是后面的事，这一页先点着的是怒。' }
        ],
        analysis: 'rage 是「烧起来、压不住的暴怒」。他没有摔东西，只是把那一页按在桌上，指节全白。',
        wrongFeedback: '你选错了，老周伸手想收走文件，被他按住了。气血 -10',
        afterCorrect: '他闭上眼数到十，才开口：「还有谁知道这份东西？」'
      },
      {
        plotDescription: '天亮前，陈默一个人去了城郊的墓园。',
        line: "The rage passed. What was left was sorrow.",
        lineCn: '怒气过去了，剩下的是悲伤。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep sadness', cn: '悲伤、心里发沉', correct: true, reason: '站在父亲墓前，怒烧完了，只剩下沉到底的难过。' },
          { key: 'B', en: 'great joy', cn: '巨大的喜悦', correct: false, reason: '墓园里不可能有喜悦。' },
          { key: 'C', en: 'a feeling of hunger', cn: '饥饿感', correct: false, reason: '这是情绪，不是生理感觉。' }
        ],
        analysis: 'sorrow 比 sad 更沉，是长时间压在心里的悲。他在墓前站了半小时，只说了三个字：我来了。',
        wrongFeedback: '你选错了，你把这一刻的安静读成了空白。气血 -10',
        afterCorrect: '他把那份资料的复印件烧了：「爸，剩下的我用手办，不用纸。」'
      },
      {
        plotDescription: '上午十点，韩野打来电话，声音在抖——赵家海外账户的流水，全部拿到了。',
        line: "The whole room felt euphoria when the file came through.",
        lineCn: '文件传过来的那一刻，整个房间都陷入了狂喜。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'intense happiness and excitement', cn: '极度愉悦、狂喜', correct: true, reason: '熬了半个月，最关键的证据到手，所有人都炸了。' },
          { key: 'B', en: 'deep despair', cn: '深深的绝望', correct: false, reason: '正好相反，这是赢的那一刻。' },
          { key: 'C', en: 'a quiet boredom', cn: '淡淡的无聊', correct: false, reason: '房间里在欢呼，不是无聊。' }
        ],
        analysis: 'euphoria 是「兴奋到飘起来」的极度愉悦。陈默站在欢呼里，却没有跟着笑——他知道最难的一步还在后面。',
        wrongFeedback: '你选错了，韩野的声音在电话那头停住了。气血 -10',
        afterCorrect: '陈默只说了一句：「先别发。等我见完一个人。」'
      },
      {
        plotDescription: '下午，赵天佑约他在江边见面。对方说了很多，从合作说到求和，最后说到「别做得太绝」。',
        line: "He begged for a meeting. I felt nothing but apathy.",
        lineCn: '他求着要见面。我心里只有冷漠。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a total lack of interest or feeling', cn: '冷漠、什么都感觉不到', correct: true, reason: '三年前他父亲被逼死时，赵家没有半点迟疑，此刻他也提不起任何情绪。' },
          { key: 'B', en: 'strong sympathy', cn: '强烈的同情', correct: false, reason: '他说的是「什么都不想给」，不是同情。' },
          { key: 'C', en: 'great curiosity', cn: '强烈的好奇', correct: false, reason: 'apathy 是彻底的无感。' }
        ],
        analysis: 'apathy 是「连恨都懒得给」。最重的报复不是怒吼，是把对方当成一件无关的事。',
        wrongFeedback: '你选错了，赵天佑还在说，江风把你的回答吹散了。气血 -10',
        afterCorrect: '陈默站起来：「三年前你也没给他机会。」他把杯子留在桌上，转身走了。'
      }
    ],
    completeText: '第 10 章结束。那一夜，陈默把所有证据锁进保险柜，一份都没发。他给苏晚发了条消息：明天开始，我要做一件很脏的事。'
  },
  {
    id: 'ml_11',
    index: 11,
    title: '第 11 章 · 三天没回的消息',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '证据递上去的第三天，赵家的两家公司被查封。同一时间，陈默却开始躲着苏晚——她发来的消息，他一条都没回。',
    questions: [
      {
        plotDescription: '韩野把手机推到陈默面前，上面是苏晚发来的第十条消息，只有一句：他是不是出事了。',
        line: "She's had a crush on you since college. You can't tell me you never noticed.",
        lineCn: '她从大学就暗恋你。你别告诉我你一直没看出来。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strong but secret liking for someone', cn: '暗恋、偷偷喜欢一个人', correct: true, reason: '说的是她从大学就喜欢他，crush 正是这种心思。' },
          { key: 'B', en: 'a serious injury', cn: '严重的压伤', correct: false, reason: 'crush 确实有「压伤」的意思，但这里讲的是感情。' },
          { key: 'C', en: 'a big argument', cn: '一场大吵', correct: false, reason: '从大学到现在，他们并没有一直吵架。' }
        ],
        analysis: 'crush 作名词是「偷偷喜欢一个人」。韩野这一句，把苏晚守了三年的沉默翻了出来。',
        wrongFeedback: '你选错了，韩野把手机收回去，摇了摇头。气血 -10',
        afterCorrect: '陈默盯着那行字看了很久，最后还是把手机扣在桌上：「现在不能见她。」'
      },
      {
        plotDescription: '三天了，陈默连一个标点都没回。韩野把椅子拉到他面前坐下。',
        line: "You can't just ghost her after that night. She deserves a sentence.",
        lineCn: '那晚之后你不能就这么玩消失。她至少该得到一句话。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'to disappear and stop replying to someone', cn: '玩消失、不回消息', correct: true, reason: '三天一条不回，这就是恋爱里说的 ghost。' },
          { key: 'B', en: 'to visit someone at midnight', cn: '半夜去拜访某人', correct: false, reason: '他一次都没去，恰好是没出现。' },
          { key: 'C', en: 'to send a very long message', cn: '发一条很长的消息', correct: false, reason: '正相反，他一个字都没发。' }
        ],
        analysis: 'ghost 作动词是「突然消失、把对方晾着」。陈默不是不在乎，他是怕自己一开口就收不住。',
        wrongFeedback: '你选错了，韩野把手机塞进他手里，转身走到窗边。气血 -10',
        afterCorrect: '陈默打了三行字，删了三行，最后只发出两个字：「没事。」'
      },
      {
        plotDescription: '韩野越说越急，索性站起来，椅子在地上刮出一声。',
        line: "Disappearing when things get hard is a red flag, and you know it.",
        lineCn: '一遇到难处就消失，这是危险信号，你自己也清楚。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning sign of a problem', cn: '危险信号、该警惕的征兆', correct: true, reason: '在感情里突然消失，是典型的警示信号。' },
          { key: 'B', en: 'a red banner at a ceremony', cn: '典礼上的红旗', correct: false, reason: '这里不是实物，是比喻的警示。' },
          { key: 'C', en: 'a sign of good luck', cn: '好运的兆头', correct: false, reason: '意思正好相反，red flag 是坏兆头。' }
        ],
        analysis: 'red flag 是「值得警惕的信号」。韩野骂得不客气，是因为他见过太多人毁在这种沉默里。',
        wrongFeedback: '你选错了，韩野不再说了，屋里的空气沉下去。气血 -10',
        afterCorrect: '陈默站起来：「等我把赵家按下去，我会去跟她把话说清楚。」'
      },
      {
        plotDescription: '同一晚，苏明哲在酒吧里端着酒，对一桌人说得眉飞色舞。',
        line: "Half the club thinks they hooked up that night. I'll make sure everyone believes it.",
        lineCn: '半个酒吧都觉得他们那晚勾搭上了。我会让所有人都信。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to get together with someone romantically', cn: '勾搭上、有了暧昧关系', correct: true, reason: '他要造的就是两人有私情的谣，hook up 正是这个意思。' },
          { key: 'B', en: 'to hang a picture on the wall', cn: '把画挂到墙上', correct: false, reason: '这里的 hook up 说的是人，不是挂东西。' },
          { key: 'C', en: 'to hold a business meeting', cn: '开一场商务会议', correct: false, reason: '酒吧里的传闻跟开会无关。' }
        ],
        analysis: 'hook up 在口语里指「勾搭上、发展出暧昧或亲密关系」。苏明哲把它当刀子，捅的是苏晚的名声。',
        wrongFeedback: '你选错了，那桌人笑成一片，话越传越难听。气血 -10',
        afterCorrect: '陈默在门口站了两秒，走过去把酒杯从他手里拿走：「造谣的账，我另算。」'
      }
    ],
    completeText: '第 11 章结束。那一晚陈默第一次主动打电话给苏晚，只响了一声就被接起。两个人都没说话，听着彼此的呼吸，过了很久。'
  },
  {
    id: 'ml_12',
    index: 12,
    title: '第 12 章 · 大厅里的那场哭',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天上午，苏明哲的母亲带着两个亲戚冲进苏氏大厅，往地上一坐就开始哭，说陈默抢了苏家的产业。前台不敢拦，员工全围了过来。',
    questions: [
      {
        plotDescription: '前台打来电话，声音发抖。陈默看着监控画面，没有站起来。',
        line: "Let her have her drama. The cameras are already on.",
        lineCn: '让她演吧。摄像头早就开着。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'over-the-top emotional scenes', cn: '抓马、夸张的戏码', correct: true, reason: '坐在地上哭闹给全楼看，这就是一场戏。' },
          { key: 'B', en: 'a serious legal case', cn: '严肃的法律案件', correct: false, reason: '地板上哭一场不是案件，是表演。' },
          { key: 'C', en: 'a stage play with actors', cn: '有演员的话剧', correct: false, reason: '这里是比喻的说法，不是真的演出。' }
        ],
        analysis: 'drama 在口语里指「夸张的情绪戏」。陈默不劝不拦，只让人把录像留好——戏演得越大，证据越足。',
        wrongFeedback: '你选错了，大厅里的人越围越多，喊声传上了楼。气血 -10',
        afterCorrect: '他给保安部打了电话：「不要碰她。把每一分钟都录下来。」'
      },
      {
        plotDescription: '下午，苏晚坐在他办公室里，手机每隔几分钟就响一次，她一次都没接。',
        line: "Your mother has been clingy since the divorce talk started. She calls twenty times a day.",
        lineCn: '从提离婚那件事开始，你妈就变得特别黏人。她一天打二十个电话。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'always needing to be close to someone', cn: '黏人、一刻都离不开', correct: true, reason: '一天二十个电话，就是不肯松手的状态。' },
          { key: 'B', en: 'very independent', cn: '非常独立', correct: false, reason: '正好相反。' },
          { key: 'C', en: 'easy to talk to', cn: '很好说话', correct: false, reason: 'clingy 说的是依赖性，不是好沟通。' }
        ],
        analysis: 'clingy 形容一个人抓得太紧、让人透不过气。苏母不是爱女儿，是怕失去控制。',
        wrongFeedback: '你选错了，苏晚把手机翻过来扣在桌上，眼睛红了。气血 -10',
        afterCorrect: '陈默把她的手机拿过去，按下静音：「今天你不用接任何一个。」'
      },
      {
        plotDescription: '苏晚抬头看他，问了一句：我是不是太软弱了。',
        line: "You're not weak. But I need boundaries, and so do you.",
        lineCn: '你不软弱。但我需要边界，你也需要。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'limits on what you will accept', cn: '边界感、能接受和不能接受的界线', correct: true, reason: '他要的是把「哪些事可以被干涉」划清楚。' },
          { key: 'B', en: 'the walls of a building', cn: '建筑的围墙', correct: false, reason: '这里说的不是实物，是人和人之间的界线。' },
          { key: 'C', en: 'long travel plans', cn: '长途旅行计划', correct: false, reason: '跟旅行没有关系。' }
        ],
        analysis: 'boundaries 在关系里指「界线」。陈默不是在指责她，是在告诉她：不设界线，谁都会被拖进去。',
        wrongFeedback: '你选错了，苏晚低下头，把没说完的话咽了回去。气血 -10',
        afterCorrect: '苏晚沉默了一会儿，拿起手机，第一次按下了拒接。'
      },
      {
        plotDescription: '第三天，听证会开始。苏明哲的名字在证人名单上，位置一直空着。',
        line: "He promised to show up, then he bailed at the last minute.",
        lineCn: '他说好一定到场，结果最后一刻放鸽子跑了。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'to cancel or run away at the last minute', cn: '放鸽子、临阵跑路', correct: true, reason: '名字在名单上，人却没来，正是临时跑掉。' },
          { key: 'B', en: 'to arrive very early', cn: '很早就到', correct: false, reason: '他根本没出现，跟早到相反。' },
          { key: 'C', en: 'to pay money for a ticket', cn: '花钱买票', correct: false, reason: 'bail 在这里是「放人鸽子」，不是买票。' }
        ],
        analysis: 'bail 在口语里是「临时不来、撂挑子」。苏明哲到最后一刻才敢跑，说明他连谎都编不圆。',
        wrongFeedback: '你选错了，听证席上有人交换了一个眼神。气血 -10',
        afterCorrect: '陈默把那份空着的证人席写进记录：「缺席，也是一种证词。」'
      }
    ],
    completeText: '第 12 章结束。苏明哲缺席的第二天，赵家主动撤了两项诉讼。风向开始变了。'
  },
  {
    id: 'ml_13',
    index: 13,
    title: '第 13 章 · 两箱啤酒和一条兄弟规矩',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '听证会前夜，韩野从楼下拎了两箱啤酒上来，说要按「兄弟的老规矩」把话说清楚。楼下大厅，苏晚的父母提着一锅汤，已经等了一个小时。',
    questions: [
      {
        plotDescription: '韩野开了两瓶酒，把一瓶推到陈默面前，表情难得正经。',
        line: "Bro code says I have to tell you the truth, even when it hurts.",
        lineCn: '兄弟法则规定我必须跟你说实话，哪怕这话很难听。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'the unofficial rules between close male friends', cn: '兄弟法则、哥们之间不成文的规矩', correct: true, reason: '他拎着酒上门说真话，正是这条不成文的规矩。' },
          { key: 'B', en: 'a computer programming language', cn: '一种计算机编程语言', correct: false, reason: 'code 有代码的意思，但 bro code 说的是兄弟间的规矩。' },
          { key: 'C', en: 'a secret company policy', cn: '公司的保密制度', correct: false, reason: '这里是两个朋友之间的约定，不是公司制度。' }
        ],
        analysis: 'bro code 是男性朋友之间那套「必须讲义气、必须说实话」的默契。韩野把它搬出来，是因为接下来的话不好听。',
        wrongFeedback: '你选错了，韩野把瓶盖按在桌上，没有再说下去。气血 -10',
        afterCorrect: '陈默拿起酒瓶碰了一下：「说吧。说轻了我还不习惯。」'
      },
      {
        plotDescription: '话说到一半，前台来电，说苏晚的父母在大厅等着，手里还提着保温桶。',
        line: "Your future in-laws are downstairs with soup. They've been waiting an hour.",
        lineCn: '你未来的岳父母在楼下提着汤。他们已经等了一个小时。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'the family of your husband or wife', cn: '公婆、岳父母、姻亲', correct: true, reason: '苏晚的父母就是他的岳父母，属于 in-laws。' },
          { key: 'B', en: 'laws passed by the government', cn: '政府制定的法律', correct: false, reason: 'law 是法律，in-laws 指的是姻亲。' },
          { key: 'C', en: 'people who work in a court', cn: '在法院工作的人', correct: false, reason: '提着汤在楼下等的是长辈，不是法院的人。' }
        ],
        analysis: 'in-laws 专指因婚姻产生的亲属。三年前他们没替他说过一句话，今天却提着汤来了。',
        wrongFeedback: '你选错了，前台又打了一次，你让她把人请回去。气血 -10',
        afterCorrect: '陈默下楼，接过那锅汤，只说了一句：「汤我收下。话，等官司完了再谈。」'
      },
      {
        plotDescription: '回到楼上，苏晚打来电话，声音很累，说母亲又给她安排了一场见面。',
        line: "She set up a blind date for me. I didn't agree to any of it.",
        lineCn: '她给我安排了一场相亲。我一句都没答应。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a meeting with someone you have never met', cn: '相亲、和没见过的人约会', correct: true, reason: '母亲安排、她没答应，正是相亲的场面。' },
          { key: 'B', en: 'a date where you wear a blindfold', cn: '蒙着眼睛的约会', correct: false, reason: 'blind 在这里是「事先没见过」，不是真的蒙眼。' },
          { key: 'C', en: 'a meeting with a doctor', cn: '和医生见面', correct: false, reason: '母亲安排的是相亲对象，不是医生。' }
        ],
        analysis: 'blind date 是「双方没见过面、由别人安排的约会」。陈默听到这句，手里的笔停了。',
        wrongFeedback: '你选错了，电话那头安静了几秒，苏晚轻轻叹了口气。气血 -10',
        afterCorrect: '陈默说：「明天我去。我坐你旁边那桌。」苏晚笑了一声，很轻。'
      },
      {
        plotDescription: '挂了电话，韩野靠在门边，看了他半天。',
        line: "You can read a balance sheet in ten minutes, but Su Wan is your blind spot.",
        lineCn: '你十分钟就能看穿一张资产负债表，可苏晚是你的盲区。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'something you fail to see clearly', cn: '盲区、看不清楚的地方', correct: true, reason: '他能算清所有账，唯独看不透自己的心。' },
          { key: 'B', en: 'a spot on the wall', cn: '墙上的一个斑点', correct: false, reason: '这里说的是认知上的盲区，不是墙上的点。' },
          { key: 'C', en: 'a very bright light', cn: '一盏很亮的灯', correct: false, reason: '跟照明无关。' }
        ],
        analysis: 'blind spot 是「自己看不见的那一块」。韩野这句话不是嘲笑，是提醒：再强的人也有绕不过去的地方。',
        wrongFeedback: '你选错了，韩野把最后一瓶酒放回箱子，没有再问。气血 -10',
        afterCorrect: '陈默沉默了很久：「所以明天那场，我得去。」'
      }
    ],
    completeText: '第 13 章结束。第二天下午三点，陈默坐在咖啡厅靠窗的位置，隔着一张桌子，看着苏晚走进那场相亲。'
  },
  {
    id: 'ml_14',
    index: 14,
    title: '第 14 章 · 隔一张桌子的约会',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '相亲对象是个家世不错的律师，开口就聊房产和股权。苏晚坐在对面，一直低头搅咖啡。陈默在隔壁桌，把整杯水喝完了。',
    questions: [
      {
        plotDescription: '前一晚，苏晚的闺蜜林薇从上海回来，一坐下就说了半小时陈默的坏话。',
        line: "Lin Wei is a toxic friend. She only calls when she needs something.",
        lineCn: '林薇是个有毒的朋友。她只在需要帮忙的时候才打电话。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who drains or harms you', cn: '有毒的朋友、会消耗和伤害你的人', correct: true, reason: '三年不联系，一回来就挑拨，正是这种朋友。' },
          { key: 'B', en: 'a friend who is a doctor', cn: '当医生的朋友', correct: false, reason: 'toxic 说的是关系的伤害性，不是职业。' },
          { key: 'C', en: 'a friend who lives far away', cn: '住得很远的朋友', correct: false, reason: '距离不是重点，重点是她在消耗苏晚。' }
        ],
        analysis: 'toxic friend 指那种表面亲近、实际不断消耗你的人。苏晚听完只回了一句：我知道。',
        wrongFeedback: '你选错了，苏晚把杯子放下，没有再解释。气血 -10',
        afterCorrect: '苏晚把林薇的号码从置顶里删了，动作很轻，但没有犹豫。'
      },
      {
        plotDescription: '相亲结束后，陈默在咖啡厅门口拦住苏晚，把手插在口袋里。',
        line: "I'm asking you on a real date. Not a business meeting, not a favor.",
        lineCn: '我是在正式约你。不是谈生意，也不是还人情。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a romantic meeting with someone', cn: '约会', correct: true, reason: '他特意说不是谈生意，就是要把这场见面定性为约会。' },
          { key: 'B', en: 'a specific day on a calendar', cn: '日历上的日期', correct: false, reason: '这里不是指某一天，而是指两个人见面这件事。' },
          { key: 'C', en: 'a business appointment', cn: '商务预约', correct: false, reason: '他明确排除了「谈生意」。' }
        ],
        analysis: 'date 作名词是「约会」。陈默把话说得很直，因为他不想再让这段关系被当成交易。',
        wrongFeedback: '你选错了，苏晚的眼睛垂下去，那句「好」没能说出口。气血 -10',
        afterCorrect: '苏晚抬起头：「那你请我吃什么？」陈默说：「楼下那家面馆。我只会请你吃这个。」'
      },
      {
        plotDescription: '面馆里，苏晚忽然放下筷子，问他是不是还想退婚。',
        line: "If you want to break up, say it to my face. Don't make it a rumor.",
        lineCn: '你要是想分手，就当面跟我说。别把它变成一句谣言。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to end a romantic relationship', cn: '分手、结束恋爱关系', correct: true, reason: '她问的就是两个人要不要结束这段关系。' },
          { key: 'B', en: 'to break something into pieces', cn: '把东西打碎', correct: false, reason: 'break 是打碎，break up 在这里是分手。' },
          { key: 'C', en: 'to stop a meeting', cn: '中止一场会议', correct: false, reason: '面馆里的两个人不是在开会。' }
        ],
        analysis: 'break up 是「结束一段感情」。陈默没有立刻回答，他把碗里的面吃完了才开口。',
        wrongFeedback: '你选错了，苏晚站起来，椅子在地上响了一声。气血 -10',
        afterCorrect: '陈默放下筷子：「三年前那份退婚书，我签的时候就没打算认。」'
      },
      {
        plotDescription: '当晚，苏晚在楼下给那位律师打了电话，说了不到两分钟。',
        line: "I dumped him on the phone ten minutes ago. It's over.",
        lineCn: '我十分钟前在电话里把他甩了。结束了。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'to end a relationship with someone', cn: '甩掉、跟某人分手', correct: true, reason: '她在电话里把相亲对象结束掉，正是这个用法。' },
          { key: 'B', en: 'to throw away rubbish', cn: '倒垃圾', correct: false, reason: 'dump 有倒垃圾的意思，但这里说的是人。' },
          { key: 'C', en: 'to accept an offer', cn: '接受一个提议', correct: false, reason: '她拒绝了他，不是接受。' }
        ],
        analysis: 'dump 作动词是「把恋人甩了」，语气比 break up 更干脆。苏晚这一次没有拖。',
        wrongFeedback: '你选错了，陈默在楼上听见了半句，站在楼梯口没动。气血 -10',
        afterCorrect: '她挂了电话，抬头看见他站在楼梯上，两个人都笑了。'
      }
    ],
    completeText: '第 14 章结束。那一晚，苏晚第一次走进他那间旧公寓，没有带汤，也没有带文件。'
  },
  {
    id: 'ml_15',
    index: 15,
    title: '第 15 章 · 酒会上的那叠照片',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏氏年中酒会上，赵天佑带着一叠照片出现，说拍到苏晚在伦敦跟一个男人吃饭。他把照片一张张摆到桌上，等着看陈默的脸色。',
    questions: [
      {
        plotDescription: '陈默把照片看完，一张张推回去，声音很平。',
        line: "If she wanted to cheat, she wouldn't need to fly to another country.",
        lineCn: '如果她想出轨，根本不用飞到另一个国家。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'to be unfaithful to a partner', cn: '出轨、对伴侣不忠', correct: true, reason: '赵天佑拿照片暗示的就是这个，陈默正面回击。' },
          { key: 'B', en: 'to copy in an exam', cn: '考试作弊', correct: false, reason: 'cheat 有作弊的意思，但这里说的是感情。' },
          { key: 'C', en: 'to win by luck', cn: '靠运气赢', correct: false, reason: '语境是照片和婚姻，不是比赛。' }
        ],
        analysis: 'cheat 在感情语境里就是「出轨」。陈默没有解释照片，他直接拆掉了对方的逻辑。',
        wrongFeedback: '你选错了，赵天佑笑意更深，把照片又摆了回来。气血 -10',
        afterCorrect: '陈默把照片拢成一叠，递回给他：「下次拍清楚点，别浪费我的时间。」'
      },
      {
        plotDescription: '半场时，一位合作方的女负责人端着酒走过来，站得很近，说话时手一直没离开他的袖口。',
        line: "That woman has been flirting with you for twenty minutes. Do something.",
        lineCn: '那个女人已经跟你调情二十分钟了。你倒是做点什么。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'to behave in a way that shows romantic interest', cn: '调情、暧昧地示好', correct: true, reason: '站得很近、手不离袖口，正是调情的动作。' },
          { key: 'B', en: 'to argue about business', cn: '争论业务', correct: false, reason: '他们聊的不是合同条款。' },
          { key: 'C', en: 'to refuse politely', cn: '礼貌地拒绝', correct: false, reason: '正好相反，她在主动靠近。' }
        ],
        analysis: 'flirt 是「带着好感的试探」。苏晚站在三米外，把这句话说得不高不低，刚好让他听见。',
        wrongFeedback: '你选错了，苏晚转身去拿酒，脚步有点快。气血 -10',
        afterCorrect: '陈默往后退了半步，把名片递过去：「合作的事，明天办公室谈。」'
      },
      {
        plotDescription: '门口，一个穿深灰西装的男人站了很久，视线一直落在苏晚身上。',
        line: "Her ex is standing by the door. He's been staring at her all night.",
        lineCn: '她的前任站在门口。他整晚都在盯着她。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'a former partner', cn: '前任', correct: true, reason: '站在门口盯着苏晚的那个人，就是她以前的恋人。' },
          { key: 'B', en: 'a stranger who looks familiar', cn: '看起来很眼熟的陌生人', correct: false, reason: '这里明确指的是有旧情的人。' },
          { key: 'C', en: 'an old business partner', cn: '旧商业伙伴', correct: false, reason: '语境说的是感情，不是生意。' }
        ],
        analysis: 'ex 是「前任」的口语说法。陈默看了一眼，只看了一眼，然后把杯子放到了苏晚手边。',
        wrongFeedback: '你选错了，那个男人往前走了半步，苏晚却没有回头。气血 -10',
        afterCorrect: '顾言走过来，伸出手：「好久不见。」陈默握住他的手：「是挺久了。」'
      },
      {
        plotDescription: '韩野不知从哪儿冒出来，一把拦住还想再靠近的那位女负责人。',
        line: "I'll be your wingman tonight. Go talk to her.",
        lineCn: '今晚我给你当僚机。去跟她说话。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who helps you with romance', cn: '僚机、帮你追人的朋友', correct: true, reason: '韩野替他挡住别人，让他能去找苏晚，正是僚机的活。' },
          { key: 'B', en: 'a pilot in a plane', cn: '飞机上的僚机飞行员', correct: false, reason: '原义是战斗机僚机，这里指的是帮忙的朋友。' },
          { key: 'C', en: 'a security guard', cn: '保安', correct: false, reason: '他不是在执行安保，是在帮忙。' }
        ],
        analysis: 'wingman 本来是空战里的「僚机」，口语里指帮朋友打配合的人。韩野这晚干得相当称职。',
        wrongFeedback: '你选错了，韩野挡在你前面，你却没往前走。气血 -10',
        afterCorrect: '陈默走过去，站在苏晚身侧，对顾言说：「她今晚跟我来的。」'
      }
    ],
    completeText: '第 15 章结束。顾言笑了笑，把名片放在桌上就走了。苏晚看着那张名片，忽然说：你刚才那句话，说得太晚了三年。'
  },
  {
    id: 'ml_16',
    index: 16,
    title: '第 16 章 · 天台上的三个小时',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '酒会散场后，苏晚没有回家。陈默把车开到苏氏大楼顶层，两个人坐在天台的台阶上，从十一点坐到凌晨两点。',
    questions: [
      {
        plotDescription: '风把苏晚的头发吹乱了，她抬头看了看四周，忽然笑了。',
        line: "This rooftop has a good vibe. I used to come here when I had nothing.",
        lineCn: '这个天台的氛围很好。我一无所有的时候常来这儿。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'the feeling a place or person gives you', cn: '氛围感、给人的感觉', correct: true, reason: '他说的是这个天台让人放松的感觉。' },
          { key: 'B', en: 'a loud noise', cn: '很大的噪音', correct: false, reason: '天台上很安静，说的是气氛不是声音。' },
          { key: 'C', en: 'a strong wind', cn: '一阵强风', correct: false, reason: '风只是背景，vibe 指的是氛围。' }
        ],
        analysis: 'vibe 是「一个地方或一个人给你的整体感觉」。三年前他在这里坐着看别人的灯，现在灯下面有他的名字。',
        wrongFeedback: '你选错了，苏晚裹紧了外套，没有再说下去。气血 -10',
        afterCorrect: '陈默指了指远处那栋旧楼：「那时候我在那儿当过三个月保安。」'
      },
      {
        plotDescription: '苏晚安静地听完，把头靠在栏杆上，声音很轻。',
        line: "I don't believe in soulmates. But I believe you know me better than anyone.",
        lineCn: '我不信灵魂伴侣。但我相信，你比任何人都懂我。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person perfectly suited to you', cn: '灵魂伴侣、天生契合的人', correct: true, reason: '她嘴上说不信，说的正是这个词本身。' },
          { key: 'B', en: 'a close business partner', cn: '亲密的商业伙伴', correct: false, reason: '这里说的是感情上的契合，不是合作。' },
          { key: 'C', en: 'a classmate from school', cn: '学校里的同学', correct: false, reason: '他们不是同学，soulmate 也不是同学。' }
        ],
        analysis: 'soulmate 是「天生契合的那个人」。她说不信，却把最重的一句给了陈默。',
        wrongFeedback: '你选错了，苏晚把头偏开，风把这句话吹散了一半。气血 -10',
        afterCorrect: '陈默沉默了几秒：「那你就当我信。反正我比你固执。」'
      },
      {
        plotDescription: '下楼时，韩野在车里等着，看他们并肩走出来，忍不住摇头。',
        line: "Anyone can see the chemistry between you two. It's embarrassing.",
        lineCn: '谁都看得出来你们之间的化学反应。真是看不下去了。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strong mutual attraction', cn: '化学反应、两个人之间的吸引力', correct: true, reason: '韩野说的不是实验室，是两人之间的火花。' },
          { key: 'B', en: 'a school subject about substances', cn: '化学这门学科', correct: false, reason: '这里是比喻，指两个人合不合拍。' },
          { key: 'C', en: 'a serious disagreement', cn: '严重的分歧', correct: false, reason: '他们并没有在吵，是别人看着难受。' }
        ],
        analysis: 'chemistry 用来形容两个人之间「说不清的吸引」。韩野嘴上嫌烦，其实替他们高兴。',
        wrongFeedback: '你选错了，韩野把车钥匙扔过来，没再说话。气血 -10',
        afterCorrect: '陈默接住钥匙：「开车。明天还有一场硬仗。」'
      },
      {
        plotDescription: '回到公寓，陈默从抽屉里拿出一把钥匙，放在苏晚手心。',
        line: "I don't give this key to anyone. This is about trust.",
        lineCn: '这把钥匙我不给任何人。这关乎信任。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'belief that someone is honest and reliable', cn: '信任、相信对方靠得住', correct: true, reason: '交出一把私人钥匙，就是把自己交出去。' },
          { key: 'B', en: 'a legal document', cn: '一份法律文件', correct: false, reason: '他递的是一把钥匙，不是文件。' },
          { key: 'C', en: 'a feeling of doubt', cn: '怀疑的感觉', correct: false, reason: '正好相反，trust 是相信。' }
        ],
        analysis: 'trust 是「把自己交出去也不怕」。陈默这三年谁都不信，这把钥匙比任何一句表白都重。',
        wrongFeedback: '你选错了，苏晚的手停在半空，没有接住那把钥匙。气血 -10',
        afterCorrect: '苏晚把钥匙收进包里，很轻地说：「我不会弄丢它。」'
      }
    ],
    completeText: '第 16 章结束。那一夜两个人都没睡好，但都没有发消息。有些话已经不用再说了。'
  },
  {
    id: 'ml_17',
    index: 17,
    title: '第 17 章 · 三倍年薪的挖角',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵家开始反扑：三倍年薪挖韩野，五倍价格买陈默的核心团队，还派人带着合同去找苏晚，要她做赵氏在苏氏的「内线」。',
    questions: [
      {
        plotDescription: '韩野把那份合同拍在桌上，合同上的数字能让任何人动心。',
        line: "I'm loyal to you, not to the money. Put that thing away.",
        lineCn: '我忠于你，不是忠于钱。把那玩意儿收起来。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'always supporting someone you believe in', cn: '忠诚、始终站在对方这边', correct: true, reason: '三倍年薪摆在面前，他还是选择留下。' },
          { key: 'B', en: 'greedy for more money', cn: '贪图更多的钱', correct: false, reason: '他恰恰是把钱推开了。' },
          { key: 'C', en: 'afraid of change', cn: '害怕改变', correct: false, reason: '他不是怕，是认定要跟这个人。' }
        ],
        analysis: 'loyal 是「认定了就不换」。韩野把合同推回去的动作，比任何誓言都硬。',
        wrongFeedback: '你选错了，韩野把合同撕成两半，扔进垃圾桶。气血 -10',
        afterCorrect: '陈默看着他，忽然说了一句三年没说过的话：「谢了，兄弟。」'
      },
      {
        plotDescription: '同一天下午，苏晚一个人去了赵氏，四十分钟后出来，把那份合同留在了会议桌上。',
        line: "I went there to reject their offer in person.",
        lineCn: '我去那儿，是当面拒绝他们的条件。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'to refuse to accept something', cn: '拒绝、不接受', correct: true, reason: '她去了，却把合同留在桌上，就是当面拒绝。' },
          { key: 'B', en: 'to accept with conditions', cn: '有条件地接受', correct: false, reason: '她把合同留下了，说明没有接受。' },
          { key: 'C', en: 'to discuss in detail', cn: '详细讨论', correct: false, reason: '四十分钟后她走出来，留下的是合同。' }
        ],
        analysis: 'reject 是「明确说不」。苏晚这一次没有让任何人替她开口。',
        wrongFeedback: '你选错了，苏晚看着你，等你说点什么，你却什么都没说。气血 -10',
        afterCorrect: '陈默问：「他们说了什么？」苏晚说：「说我如果不签，就让你一无所有。」'
      },
      {
        plotDescription: '当晚，陈默把车停在江边，关了发动机，很久没有说话。',
        line: "I've wanted to confess this for three years. I'm not good at it, so I'll be quick.",
        lineCn: '这句话我想表白想了三年。我不擅长这个，所以我快点说。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'to admit a feeling you have kept hidden', cn: '表白、把藏着的心里话说出来', correct: true, reason: '藏了三年的话终于要说出口。' },
          { key: 'B', en: 'to admit a crime', cn: '承认罪行', correct: false, reason: 'confess 有认罪的意思，但这里是表白。' },
          { key: 'C', en: 'to refuse to speak', cn: '拒绝开口', correct: false, reason: '他正要开口，不是不说。' }
        ],
        analysis: 'confess 是「把藏了很久的事说出来」。他说自己不擅长，却准备了三年。',
        wrongFeedback: '你选错了，苏晚低下头，江面上的灯晃了一下。气血 -10',
        afterCorrect: '陈默说：「三年前我进苏家，不是为了苏家的钱。」他停了一下，「是为了你。」'
      },
      {
        plotDescription: '苏晚没有立刻回答。她看着江面，手指在膝盖上收紧又松开。',
        line: "What I want is a commitment, not a promise made at midnight.",
        lineCn: '我要的是一个承诺，不是半夜里说说的情话。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious promise to stay and try', cn: '承诺、愿意长期负责的决心', correct: true, reason: '她要的不是一句情话，是能落地的决心。' },
          { key: 'B', en: 'a short holiday plan', cn: '一个短期度假计划', correct: false, reason: '这跟旅行无关。' },
          { key: 'C', en: 'a business contract', cn: '一份商业合同', correct: false, reason: '她说的是感情上的承担。' }
        ],
        analysis: 'commitment 是「愿意把自己绑在这件事上」。苏晚要的从来不是浪漫，是别再被丢下。',
        wrongFeedback: '你选错了，苏晚推开车门，夜风一下灌了进来。气血 -10',
        afterCorrect: '陈默说：「那我不说。我做给你看。」苏晚停在车门口，没有下车。'
      }
    ],
    completeText: '第 17 章结束。那一夜苏晚没有走。凌晨的时候，她靠着车窗睡着了，陈默把外套盖在她身上，坐到天亮。'
  },
  {
    id: 'ml_18',
    index: 18,
    title: '第 18 章 · 第一个月的甜',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '在一起后的第一个月，陈默把会议压缩到六点前结束，把周五晚上空出来。韩野说这是他认识陈默以来最不正常的一个月。',
    questions: [
      {
        plotDescription: '第一个周末，苏晚在他公寓里待到很晚，两个人一句话都没说，只是各看各的东西。',
        line: "I'm not good at intimacy. I've been alone for too long.",
        lineCn: '我不太会亲近人。我一个人待得太久了。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'closeness and emotional openness', cn: '亲密、愿意向对方敞开', correct: true, reason: '他说的是自己不会和人靠得太近。' },
          { key: 'B', en: 'a formal introduction', cn: '正式的介绍', correct: false, reason: '这里说的是情感距离，不是介绍。' },
          { key: 'C', en: 'a large social event', cn: '大型社交活动', correct: false, reason: '屋里只有两个人，安安静静。' }
        ],
        analysis: 'intimacy 是「靠得很近也不设防」。陈默把这句话说出来，本身就是一次靠近。',
        wrongFeedback: '你选错了，苏晚合上书，站起来去倒水。气血 -10',
        afterCorrect: '苏晚把水放在他手边：「那我们慢慢来。我不着急。」'
      },
      {
        plotDescription: '周一早上出门前，苏晚踮起脚，替他把歪掉的领带重新系好。',
        line: "She does it with such affection that I forget what to say.",
        lineCn: '她做这件事时满是温柔，我一时忘了要说什么。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'a gentle feeling of love', cn: '爱慕、温柔的情意', correct: true, reason: '系领带这个动作里是藏不住的温柔。' },
          { key: 'B', en: 'a serious illness', cn: '一种严重的疾病', correct: false, reason: 'affection 有「病症」的旧义，但这里是爱意。' },
          { key: 'C', en: 'a formal greeting', cn: '正式的问候', correct: false, reason: '这不是客套，是亲近。' }
        ],
        analysis: 'affection 是「带着温度的爱意」，比 love 轻，但更日常。陈默站着没动，怕破坏这个瞬间。',
        wrongFeedback: '你选错了，苏晚的手停在领口，往后退了半步。气血 -10',
        afterCorrect: '陈默低头看她：「以后每天都要这样。」苏晚说：「想得美。」'
      },
      {
        plotDescription: '周五下午，韩野抱着一摞文件进办公室，发现陈默已经在收东西了。',
        line: "Friday is our date night. No phones, no files, no excuses.",
        lineCn: '周五是我们的约会之夜。不带手机，不带文件，不许找借口。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a regular evening set aside for romance', cn: '约会之夜、固定留给两个人的晚上', correct: true, reason: '他把周五整晚空出来，就是固定的约会时间。' },
          { key: 'B', en: 'the night before an exam', cn: '考试前夜', correct: false, reason: '这里跟考试无关。' },
          { key: 'C', en: 'a night shift at work', cn: '上夜班', correct: false, reason: '他恰恰是不加班了。' }
        ],
        analysis: 'date night 是「固定留给伴侣的晚上」。对陈默这种把时间当武器的人来说，这比送礼重得多。',
        wrongFeedback: '你选错了，韩野把文件往桌上一放，你还是坐回了椅子上。气血 -10',
        afterCorrect: '陈默把手机扔进抽屉：「天塌了也明天再说。」'
      },
      {
        plotDescription: '面馆老板把两碗面端上来，看着他们笑，说这是他见过最黏的一对。韩野在门口探头。',
        line: "Look at you. You're completely smitten, and you don't even know it.",
        lineCn: '看看你。你已经神魂颠倒了，自己还不知道。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely in love', cn: '神魂颠倒、被爱冲昏头', correct: true, reason: '他一边看文件一边笑，谁都能看出来。' },
          { key: 'B', en: 'deeply annoyed', cn: '非常恼火', correct: false, reason: '他的表情完全不是恼火。' },
          { key: 'C', en: 'slightly ill', cn: '有点不舒服', correct: false, reason: 'smite 有打击的意思，但 smitten 在这里是着迷。' }
        ],
        analysis: 'smitten 是「被爱情击中、完全沦陷」。陈默自己没察觉，旁观的人全看明白了。',
        wrongFeedback: '你选错了，韩野在门口笑得直不起腰。气血 -10',
        afterCorrect: '陈默把筷子放下：「吃完这碗，我送你回去。」苏晚说：「再坐十分钟。」'
      }
    ],
    completeText: '第 18 章结束。那个月是陈默三年来第一次觉得日子有味道。月底，伦敦分公司出事的电话来了。'
  },
  {
    id: 'ml_19',
    index: 19,
    title: '第 19 章 · 伦敦的九十天',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '伦敦分公司被查出账目问题，苏晚必须过去接手三个月。同一天，苏振海与妻子的离婚手续被媒体曝光，苏家的股价又跌了一截。',
    questions: [
      {
        plotDescription: '机场安检口，苏晚把围巾往上拉了拉，眼睛有点红。',
        line: "The first month of long distance was pure heartbreak.",
        lineCn: '异地恋的第一个月，纯粹就是心碎。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep emotional pain after losing someone', cn: '心碎、失去带来的剧痛', correct: true, reason: '分开一个月，两个人都熬得难受。' },
          { key: 'B', en: 'a small misunderstanding', cn: '一场小误会', correct: false, reason: '没有误会，只是分隔两地。' },
          { key: 'C', en: 'a broken machine', cn: '一台坏掉的机器', correct: false, reason: 'heartbreak 是情绪上的痛。' }
        ],
        analysis: 'heartbreak 是「心被分开这件事撕开」。陈默从不说想她，只是把伦敦的天气预报加进了手机。',
        wrongFeedback: '你选错了，苏晚转身进了安检口，没有回头。气血 -10',
        afterCorrect: '陈默站在原地，直到看不见她，才掏出手机订了下个月飞伦敦的机票。'
      },
      {
        plotDescription: '第二个月，两个人隔着七个小时的时差，只能在她睡前说十分钟话。',
        line: "Long-distance is harder than I thought. I keep waking up at four to talk to you.",
        lineCn: '异地恋比我想的难。我总在凌晨四点醒来跟你说话。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a relationship between people far apart', cn: '异地恋、相隔很远的感情关系', correct: true, reason: '七个小时时差、隔着两个国家，正是异地恋。' },
          { key: 'B', en: 'a long phone call', cn: '一通很长的电话', correct: false, reason: '这里说的是关系状态，不是通话时长。' },
          { key: 'C', en: 'a long business trip', cn: '一次长期出差', correct: false, reason: 'long-distance 在这句里指两个人的关系。' }
        ],
        analysis: 'long-distance 是「隔着距离谈恋爱」。凌晨四点的电话，是这段关系里最笨也最真的部分。',
        wrongFeedback: '你选错了，电话那头安静了一会儿，苏晚说她要睡了。气血 -10',
        afterCorrect: '陈默把航班改到了周五晚上，没有告诉她。'
      },
      {
        plotDescription: '国内一家八卦杂志把他们的关系写成了「开放式关系」，配了一张拼凑的照片。',
        line: "A magazine called our relationship polyamory. She laughed, then got angry.",
        lineCn: '一本杂志把我们的关系写成了多边恋。她先是笑，然后就生气了。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having more than one romantic partner at a time', cn: '多边恋、同时与多人交往', correct: true, reason: '杂志造的就是「两人各自有别人」的谣。' },
          { key: 'B', en: 'a marriage between two families', cn: '两个家族之间的联姻', correct: false, reason: '这是政治联姻的概念，不是多边恋。' },
          { key: 'C', en: 'a very public wedding', cn: '一场盛大的婚礼', correct: false, reason: '他们没有办婚礼，重点是「同时有多人」。' }
        ],
        analysis: 'polyamory 指「多边恋」，即同时维持多段亲密关系。这个词被拿来当脏水，苏晚笑完就火了。',
        wrongFeedback: '你选错了，杂志的转载量又涨了一轮。气血 -10',
        afterCorrect: '陈默让法务把稿子全部取证：「一家一家告。一个都不放过。」'
      },
      {
        plotDescription: '同一周，苏振海与妻子三十年的婚姻正式结束，离婚协议被拍到了网上。',
        line: "My father-in-law's divorce is on every front page. Su Wan won't say a word about it.",
        lineCn: '我岳父的离婚案上了所有头条。苏晚一个字都不肯说。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'the legal end of a marriage', cn: '离婚、婚姻的法律终结', correct: true, reason: '三十年的婚姻正式结束，就是离婚。' },
          { key: 'B', en: 'a business partnership ending', cn: '商业合作终止', correct: false, reason: '这里的对象是夫妻，不是公司。' },
          { key: 'C', en: 'a family reunion', cn: '一次家庭团聚', correct: false, reason: '意思相反，是家庭解体。' }
        ],
        analysis: 'divorce 是「婚姻的解体」。陈默知道苏晚不说，是因为她怕自己一开口就撑不住。',
        wrongFeedback: '你选错了，电话打了三次都没人接。气血 -10',
        afterCorrect: '陈默给她发了条消息：不想说就不说。我明天到。'
      }
    ],
    completeText: '第 19 章结束。第二天下午，陈默出现在伦敦那栋办公楼门口。苏晚走出来，看见他，站在原地没动。'
  },
  {
    id: 'ml_20',
    index: 20,
    title: '第 20 章 · 希思罗的拥抱',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '陈默在伦敦待了三天。回国的前一天，赵天佑放出一张照片，说陈默与女助理同住一间酒店，标题用了「婚内出轨」。',
    questions: [
      {
        plotDescription: '韩野打来电话，语气难得有点急，说国内已经传开了。',
        line: "The rumor says I'm having an affair with my assistant. She booked two rooms, and I have the receipts.",
        lineCn: '传闻说我跟助理有婚外情。她订的是两间房，收据在我手上。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship outside a marriage', cn: '婚外情、绯闻', correct: true, reason: '标题说的就是这种不忠的关系。' },
          { key: 'B', en: 'a business event', cn: '一场商务活动', correct: false, reason: 'affair 有「事务」的意思，但这里是绯闻。' },
          { key: 'C', en: 'a family dinner', cn: '一顿家庭晚餐', correct: false, reason: '传闻说的不是吃饭。' }
        ],
        analysis: 'affair 在感情语境里特指「婚外情」。陈默懒得辩解，他直接拿出了两间房的收据。',
        wrongFeedback: '你选错了，韩野在电话那头骂了一句。气血 -10',
        afterCorrect: '陈默说：「把收据发给每一家转载的媒体。附一句：造谣的，法庭见。」'
      },
      {
        plotDescription: '希思罗机场的咖啡厅里，苏晚把手机推到他面前，屏幕上是一篇写得很酸的报道。',
        line: "You're not good at romance, but you always show up. That's enough for me.",
        lineCn: '你不擅长浪漫，但你每次都出现。这对我来说就够了。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'the feeling and gestures of love', cn: '浪漫、恋爱里的情调', correct: true, reason: '她说的是他不会说甜话、不会制造惊喜。' },
          { key: 'B', en: 'a long novel about love', cn: '一部长篇爱情小说', correct: false, reason: '这里说的是现实里的浪漫，不是小说。' },
          { key: 'C', en: 'a formal marriage ceremony', cn: '正式的婚礼仪式', correct: false, reason: '他们还没办婚礼。' }
        ],
        analysis: 'romance 是恋爱里的情调与仪式感。苏晚把这句说出口，等于承认自己要的从来不是这些。',
        wrongFeedback: '你选错了，苏晚把手机收回去，低头喝了一口咖啡。气血 -10',
        afterCorrect: '陈默沉默了一下：「那我以后每个周五都出现。」'
      },
      {
        plotDescription: '临走前，苏晚把一叠文件交给他——是这三个月她整理的伦敦公司账目，每一页都有她的批注。',
        line: "Three years of devotion, and I never once said thank you.",
        lineCn: '三年的付出，我一次都没说过谢谢。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep love shown through steady effort', cn: '奉献、长久的付出', correct: true, reason: '三个月十八小时工作制，一页页批注，这就是付出。' },
          { key: 'B', en: 'a short holiday', cn: '一次短暂的假期', correct: false, reason: '她不是来度假的。' },
          { key: 'C', en: 'a strong disagreement', cn: '强烈的分歧', correct: false, reason: '这是付出，不是争执。' }
        ],
        analysis: 'devotion 是「用行动一直守在旁边」。陈默翻着那些批注，很久没有说话。',
        wrongFeedback: '你选错了，苏晚把文件收了回去，说算了。气血 -10',
        afterCorrect: '陈默把文件按在桌上：「这些我都要。人也一样。」'
      },
      {
        plotDescription: '登机口前，韩野的视频电话打过来，背景是国内的办公室，一群人挤在镜头前。',
        line: "There's still passion between you two. Don't waste it on paperwork.",
        lineCn: '你们之间还有激情。别把它浪费在文件上。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'intense feeling and desire', cn: '激情、强烈的感情', correct: true, reason: '他说的是两个人之间还没熄灭的火。' },
          { key: 'B', en: 'a slow and boring job', cn: '一份缓慢无聊的工作', correct: false, reason: '意思完全相反。' },
          { key: 'C', en: 'a quiet agreement', cn: '一个平静的共识', correct: false, reason: 'passion 是强烈的情绪，不是平静。' }
        ],
        analysis: 'passion 是「烧得很旺的感情」。韩野说完就把电话挂了，留他们两个人在登机口。',
        wrongFeedback: '你选错了，视频那头一片起哄，你却只看着手机。气血 -10',
        afterCorrect: '陈默把手机收起来，回头对苏晚说：「下个月，我再来。」'
      }
    ],
    completeText: '第 20 章结束。飞机起飞时，苏晚还站在玻璃后面。陈默把那张两间房的收据夹进了护照里，一直到落地都没扔。'
  },
  {
    id: 'ml_21',
    index: 21,
    title: '第 21 章 · 老宅里的最后一场谈话',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏晚留在伦敦收尾，陈默先回国。苏振海把他叫回老宅，开门见山：把苏氏卖给赵家，换一条活路，也换苏家上下平安。',
    questions: [
      {
        plotDescription: '陈默把茶推回去，没有坐，站在那张红木桌前。',
        line: "I came here to confront you, not to negotiate. You sold my father out three years ago.",
        lineCn: '我来是对质，不是来谈判。三年前是你把我父亲卖了。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'to face someone directly about a problem', cn: '对质、当面把问题摊开', correct: true, reason: '他专程上门，就是要把三年前的事当面说清。' },
          { key: 'B', en: 'to avoid someone politely', cn: '礼貌地避开某人', correct: false, reason: '他站在桌前，一步都没退。' },
          { key: 'C', en: 'to negotiate a better price', cn: '谈一个更好的价钱', correct: false, reason: '他开口就说了「不是来谈判」。' }
        ],
        analysis: 'confront 是「当面把话摊开」。陈默没有带律师，也没有带文件，他带的是三年的账。',
        wrongFeedback: '你选错了，苏振海把茶杯放下，声音也沉了下去。气血 -10',
        afterCorrect: '苏振海沉默了很久，只说了一句：「你父亲当年，也不肯签。」'
      },
      {
        plotDescription: '走出老宅时，苏明哲追出来，说要跟他「重新谈条件」。',
        line: "From tonight, I cut ties with this family. Every debt is settled.",
        lineCn: '从今晚起，我跟这个家断绝关系。所有账，一笔勾销。',
        prompt: "根据上下文，选出画线词汇 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'to end a relationship completely', cn: '断绝关系、彻底切开联系', correct: true, reason: '他说的是从今晚起不再有任何往来。' },
          { key: 'B', en: 'to untie a rope', cn: '把绳子解开', correct: false, reason: '这里是比喻，指人和人的关系。' },
          { key: 'C', en: 'to reduce a price', cn: '降低价格', correct: false, reason: '跟钱无关，他说的是关系。' }
        ],
        analysis: 'cut ties 是「一刀两断」。陈默说完没有回头，因为他知道一回头就会心软。',
        wrongFeedback: '你选错了，苏明哲还在后面喊，声音越来越远。气血 -10',
        afterCorrect: '车开出巷子，他才发现手心全是汗。老周没有问，只把空调调低了一点。'
      },
      {
        plotDescription: '同一晚，韩野打来电话，声音发紧，说有一份报价单发错了邮箱。',
        line: "I messed up. I sent the file to the wrong address.",
        lineCn: '我搞砸了。我把文件发错了地址。',
        prompt: "根据上下文，选出画线词汇 'Mess up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make a mistake that causes trouble', cn: '搞砸、弄出错', correct: true, reason: '发错地址导致报价外泄，正是闯了祸。' },
          { key: 'B', en: 'to clean a room', cn: '把房间弄乱再打扫', correct: false, reason: 'mess 有乱的意思，但这里是「办错事」。' },
          { key: 'C', en: 'to finish early', cn: '提前完成', correct: false, reason: '他的语气是认错，不是报喜。' }
        ],
        analysis: 'mess up 是「把事情弄糟」。陈默在车里闭了两秒眼，问的第一句是：发给了谁。',
        wrongFeedback: '你选错了，电话那头韩野的声音更低了下去。气血 -10',
        afterCorrect: '陈默说：「别慌。把发送记录截图给我，一条都别删。」'
      },
      {
        plotDescription: '第二天上午，竞标结果出来，天枢的底价被对方压着打，输得干干净净。',
        line: "We screwed up once, and it cost us the bid. It won't happen twice.",
        lineCn: '我们弄糟了一次，代价是这个标。不会有第二次。',
        prompt: "根据上下文，选出画线词汇 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to do something badly and ruin it', cn: '弄糟、把事办砸', correct: true, reason: '底价外泄，标直接丢了，这就是办砸。' },
          { key: 'B', en: 'to tighten a screw', cn: '把螺丝拧紧', correct: false, reason: '这里不是动手，是比喻把事情搞坏。' },
          { key: 'C', en: 'to win by a small margin', cn: '以微弱优势赢下', correct: false, reason: '他们输了，不是赢。' }
        ],
        analysis: 'screw up 和 mess up 意思接近，但更口语、更带自嘲。陈默把这句话说给全组听，没有点任何人的名字。',
        wrongFeedback: '你选错了，会议室里没人敢出声。气血 -10',
        afterCorrect: '他把白板翻过来，重新写下四个字：内鬼，报价。'
      }
    ],
    completeText: '第 21 章结束。那天下午，陈默让技术部调出了报价单的每一次转发记录。转发链的尽头，是一个他熟悉得不能再熟悉的账号。'
  },
  {
    id: 'ml_22',
    index: 22,
    title: '第 22 章 · 会议室里的那段录音',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '三天后，苏氏召开家族会议。长桌两侧坐了十九个人，陈默把一支录音笔放在桌子中央。苏晚从伦敦赶回来，站在门口，没有坐下。',
    questions: [
      {
        plotDescription: '会议开始前，韩野凑到他耳边，眼睛发亮。',
        line: "Come on, spill the tea. What did the old man say last night?",
        lineCn: '快说快说，爆点料。老爷子昨晚到底说了什么？',
        prompt: "根据上下文，选出画线词汇 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'to share the latest gossip or secrets', cn: '吃瓜、爆料、把内幕说出来', correct: true, reason: '韩野要听的就是昨晚谈话的内幕。' },
          { key: 'B', en: 'to pour a cup of tea', cn: '倒一杯茶', correct: false, reason: '这里不是真的倒茶，是「说内幕」。' },
          { key: 'C', en: 'to keep a secret', cn: '保守秘密', correct: false, reason: '正好相反，是让对方说出来。' }
        ],
        analysis: 'spill the tea 是网络口语「爆料、吃瓜」。会议室里的气氛紧得像弦，只有韩野还有心思问这个。',
        wrongFeedback: '你选错了，韩野撇了撇嘴，退到墙边。气血 -10',
        afterCorrect: '陈默没回答，只把录音笔按下了播放键。'
      },
      {
        plotDescription: '录音放到第三分钟，苏振海的手开始抖。陈默把录音停住，看着他。',
        line: "Swear to god you never saw that document. Say it in front of everyone.",
        lineCn: '你对天发誓你没见过那份文件。当着所有人的面说。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'to promise very seriously', cn: '对天发誓、把话说死', correct: true, reason: '他要的是最重的一种保证，让对方没有退路。' },
          { key: 'B', en: 'to curse at God', cn: '对着神骂人', correct: false, reason: '这里不是咒骂，是起誓。' },
          { key: 'C', en: 'to mention something casually', cn: '随口提一句', correct: false, reason: '这句话的重量恰恰在于不能随口。' }
        ],
        analysis: 'swear to god 是「拿最重的东西担保」。陈默把这句话递过去，等于把最后一条退路堵死了。',
        wrongFeedback: '你选错了，会议室里有人低下了头。气血 -10',
        afterCorrect: '苏振海张了张嘴，一个字都没说出来。'
      },
      {
        plotDescription: '苏明哲忽然站起来，把椅子往后一推，脸上挂着笑。',
        line: "Whatever. Nobody in this city will believe a loser like you.",
        lineCn: '随便吧。这城里没人会信你这种废物。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'used to show you do not care', cn: '随便吧、无所谓（表示不在乎）', correct: true, reason: '他知道自己站不住脚，只能用「随便」撑场面。' },
          { key: 'B', en: 'anything at all', cn: '任何东西', correct: false, reason: 'whatever 有「无论什么」的意思，但这里是不在乎。' },
          { key: 'C', en: 'definitely yes', cn: '当然是', correct: false, reason: '他的语气是敷衍，不是肯定。' }
        ],
        analysis: 'whatever 在这里是「我懒得跟你争」的敷衍。越是心虚的人，越爱用这个词。',
        wrongFeedback: '你选错了，苏明哲笑得更响，会议室变得更乱。气血 -10',
        afterCorrect: '陈默把一叠打印件推过去：「不信我，那就信你自己的签字。」'
      },
      {
        plotDescription: '门口，苏晚终于开口。她走进来，把护照放在桌上。',
        line: "Seriously? You're still lying with the whole room watching?",
        lineCn: '你认真的吗？全屋子人看着，你还在撒谎？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'used to show disbelief', cn: '你认真的吗？真的假的？（表示难以置信）', correct: true, reason: '证据摆在桌上，对方还在否认，她实在难以相信。' },
          { key: 'B', en: 'in a serious manner', cn: '以严肃的方式', correct: false, reason: 'serious 是严肃，但这里是一个反问，表示不敢相信。' },
          { key: 'C', en: 'please continue', cn: '请继续', correct: false, reason: '她不是在鼓励对方，是在质问。' }
        ],
        analysis: 'Seriously? 单独成句时是「你认真的吗」，带着难以置信。苏晚这句一出口，会议室彻底静了。',
        wrongFeedback: '你选错了，苏晚没有再看他，转身走到陈默身边。气血 -10',
        afterCorrect: '她把护照放在录音笔旁边：「我从伦敦飞回来，不是为了听你说随便。」'
      }
    ],
    completeText: '第 22 章结束。会议记录签完，苏振海当场辞去董事长职务。散场时他经过陈默身边，停了半秒，什么都没说。'
  },
  {
    id: 'ml_23',
    index: 23,
    title: '第 23 章 · 办公室里那场火',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '会议结束后，韩野在办公室里承认，那份报价是他发给苏明哲的——对方只说「帮你老板一个忙」。陈默第一次对他发了火。',
    questions: [
      {
        plotDescription: '韩野站在桌前，没有找任何借口，先把话说了。',
        line: "My bad. I should have checked the address twice before I hit send.",
        lineCn: '我的锅。按下发送之前我该核对两遍地址。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my mistake, I am sorry', cn: '我的锅、是我的错', correct: true, reason: '他直接认下这件事，没有推给别人。' },
          { key: 'B', en: 'my turn', cn: '轮到我了', correct: false, reason: '这里不是轮次，是认错。' },
          { key: 'C', en: 'my luck', cn: '我的运气', correct: false, reason: '他没有把责任推给运气。' }
        ],
        analysis: 'my bad 是很口语的认错方式，不隆重，但干脆。韩野选这句话，是因为他知道解释没有用。',
        wrongFeedback: '你选错了，韩野把头低下去，手一直没离开桌沿。气血 -10',
        afterCorrect: '陈默看着他，火气反而降了一半：「坐下。把事情从头说一遍。」'
      },
      {
        plotDescription: '陈默在窗边站了很久，转过身时，声音很平。',
        line: "I'm not going to blame you. I want to know who gave you the address.",
        lineCn: '我不会甩锅给你。我要知道是谁给你的地址。',
        prompt: "根据上下文，选出画线词汇 'Blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say someone is responsible for a fault', cn: '甩锅、把错归到某人头上', correct: true, reason: '他明确说不把责任推给韩野，要追的是源头。' },
          { key: 'B', en: 'to praise someone', cn: '表扬某人', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to forget about it', cn: '把这件事忘掉', correct: false, reason: '他没有忘，只是不打算怪错人。' }
        ],
        analysis: 'blame 是「把责任算在谁头上」。一个团队真正开始散，往往是从找人背锅那一刻起。',
        wrongFeedback: '你选错了，韩野抬起头，眼睛有点红。气血 -10',
        afterCorrect: '韩野说出了那个名字。陈默听完，只回了一句：「果然。」'
      },
      {
        plotDescription: '回忆那通电话时，韩野说他们吵了一个小时，谁也不让谁。',
        line: "We argued for an hour, and neither of us was completely wrong.",
        lineCn: '我们吵了一个小时，谁都不算完全错。',
        prompt: "根据上下文，选出画线词汇 'Argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'to disagree angrily with someone', cn: '争吵、争辩', correct: true, reason: '两个人各说各的，谁也不让，正是 argue。' },
          { key: 'B', en: 'to agree quietly', cn: '安静地同意', correct: false, reason: '他们吵了一小时，不是同意。' },
          { key: 'C', en: 'to write a report', cn: '写一份报告', correct: false, reason: '这里说的是口头争执。' }
        ],
        analysis: 'argue 是「各执一词地争」。韩野这句不是辩解，是在承认自己当时也有问题。',
        wrongFeedback: '你选错了，韩野把话咽了回去。气血 -10',
        afterCorrect: '陈默说：「吵完还记得他说了什么吗？」韩野点头：「记得，一字不差。」'
      },
      {
        plotDescription: '傍晚，陈默一个人在会议室里坐下，给苏晚发了条消息，说自己今天发了火。',
        line: "I yelled at him. Then I apologized, because he was the only one who told me the truth.",
        lineCn: '我对他大喊了一通。后来我道了歉，因为他是唯一跟我说实话的人。',
        prompt: "根据上下文，选出画线词汇 'Yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'to shout loudly', cn: '大喊、吼叫', correct: true, reason: '他说自己当时没控制住音量。' },
          { key: 'B', en: 'to whisper', cn: '低声耳语', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to laugh', cn: '大笑', correct: false, reason: '场合和情绪都不对。' }
        ],
        analysis: 'yell 是「大声吼」。陈默会道歉，是因为他终于学会：发火可以，但要认。',
        wrongFeedback: '你选错了，苏晚的回复只有三个字：辛苦了。气血 -10',
        afterCorrect: '他盯着那三个字看了很久，然后把手机收起来，重新打开了那份报价单。'
      }
    ],
    completeText: '第 23 章结束。那一夜，陈默和韩野在办公室里把三年前的每一笔交易重新对了一遍。天亮时，白板上多了一条完整的资金链。'
  },
  {
    id: 'ml_24',
    index: 24,
    title: '第 24 章 · 门口的保温桶',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二天，苏明哲在家族群里连发十几条消息，否认一切，说录音是伪造的。中午，苏母提着保温桶站在公司门口，说要替儿子道歉。',
    questions: [
      {
        plotDescription: '韩野把手机递过来，群里的话一条比一条难听。',
        line: "He denied everything, even the signature on the paper.",
        lineCn: '他什么都否认，连纸上那个签名都否认。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say something is not true', cn: '否认、说某件事不是真的', correct: true, reason: '他连自己签的字都不认，正是 deny。' },
          { key: 'B', en: 'to admit everything', cn: '全部承认', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to explain in detail', cn: '详细解释', correct: false, reason: '他不是解释，是直接不认。' }
        ],
        analysis: 'deny 是「一口咬定没这回事」。可签字是有笔迹鉴定的，否认只会让后面更难收场。',
        wrongFeedback: '你选错了，群里又跳出一条新消息。气血 -10',
        afterCorrect: '陈默看完了，把手机还回去：「不用回。让鉴定报告说话。」'
      },
      {
        plotDescription: '楼下，苏母把保温桶放在前台，双手交叠，站得很直。',
        line: "I came to apologize for my son. He won't come himself.",
        lineCn: '我是来替我儿子道歉的。他自己不肯来。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say sorry for something you did', cn: '道歉、说对不起', correct: true, reason: '她专程来替儿子低头。' },
          { key: 'B', en: 'to demand an explanation', cn: '要求一个解释', correct: false, reason: '她提着汤来，是来认错的。' },
          { key: 'C', en: 'to celebrate good news', cn: '庆祝好消息', correct: false, reason: '这个场合没有喜事。' }
        ],
        analysis: 'apologize 是「为做过的事说对不起」。苏母这一低头，比苏明哲那十几条消息都重。',
        wrongFeedback: '你选错了，苏母把保温桶往前推了推。气血 -10',
        afterCorrect: '陈默下楼，接过保温桶：「汤我收。歉，让他自己来道。」'
      },
      {
        plotDescription: '办公室里，苏晚问他要不要就这样算了。陈默看着窗外，很久才开口。',
        line: "I can forgive the money. I can't forgive what he did to her.",
        lineCn: '钱我可以原谅。他对她做的那些事，我不能原谅。',
        prompt: "根据上下文，选出画线词汇 'Forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stop being angry at someone', cn: '原谅、不再记恨', correct: true, reason: '他说钱可以放过去，这是原谅的范围。' },
          { key: 'B', en: 'to punish severely', cn: '严厉惩罚', correct: false, reason: '意思相反，他说的是放下。' },
          { key: 'C', en: 'to forget completely', cn: '彻底忘记', correct: false, reason: '原谅不等于忘记，他记得很清楚。' }
        ],
        analysis: 'forgive 是「放过对方，也放过自己」。陈默划了一条线：钱可以让，人被欺负不行。',
        wrongFeedback: '你选错了，苏晚低下头，没有再问。气血 -10',
        afterCorrect: '他转过身：「但我也不会再用他的错来罚我自己。」'
      },
      {
        plotDescription: '一周后，老周提起苏母近况，说她还是不肯跟陈默同桌吃饭。',
        line: "She still holds a grudge about the divorce. She blames you for all of it.",
        lineCn: '她还在为离婚的事记仇。她把一切都算在你头上。',
        prompt: "根据上下文，选出画线词汇 'Grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lasting feeling of anger toward someone', cn: '记仇、长久咽不下的怨', correct: true, reason: '她不肯同桌吃饭，说明这口气一直没消。' },
          { key: 'B', en: 'a small gift', cn: '一份小礼物', correct: false, reason: '跟送礼无关。' },
          { key: 'C', en: 'a happy memory', cn: '一段愉快的回忆', correct: false, reason: '这是怨，不是回忆。' }
        ],
        analysis: 'grudge 是「记很久的仇」。陈默听完没有生气，只说：给她时间。',
        wrongFeedback: '你选错了，老周把话停在这里，没有再说下去。气血 -10',
        afterCorrect: '陈默说：「她只有一个儿子。等她明白过来，就晚了。」'
      }
    ],
    completeText: '第 24 章结束。苏明哲始终没有出现。第三天，审计组进驻苏氏，带走了他办公室的两台电脑。'
  },
  {
    id: 'ml_25',
    index: 25,
    title: '第 25 章 · 电视里的那张脸',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '审计结果出来：报价单的泄露源头，正是苏明哲的账号，前后一共转发过十一次。同一时间，赵天佑在电视上接受采访，说自己「从不做局」。',
    questions: [
      {
        plotDescription: '韩野把审计报告放在桌上，最后一页是转发记录。',
        line: "He betrayed the only person who still called him family.",
        lineCn: '他背叛了唯一还把他当家人的人。',
        prompt: "根据上下文，选出画线词汇 'Betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'to be disloyal to someone who trusted you', cn: '背叛、辜负信任', correct: true, reason: '他卖了苏氏，也卖了还护着他的母亲。' },
          { key: 'B', en: 'to support someone quietly', cn: '默默支持某人', correct: false, reason: '意思正好相反。' },
          { key: 'C', en: 'to report a crime', cn: '举报一桩罪行', correct: false, reason: '他泄露的是商业机密，不是举报。' }
        ],
        analysis: 'betray 是「把信任当筹码卖掉」。陈默翻到最后一页时，没有意外，只有一种冷掉的疲惫。',
        wrongFeedback: '你选错了，韩野把报告合上，推到一边。气血 -10',
        afterCorrect: '陈默说：「材料交给经侦。该走的程序，一个都不省。」'
      },
      {
        plotDescription: '电视里，赵天佑穿着深色西装，语速很慢，说自己是被冤枉的。',
        line: "He's a liar. Every sentence he said on TV was written by a PR team.",
        lineCn: '他是个骗子。他在电视上说的每一句，都是公关团队写好的。',
        prompt: "根据上下文，选出画线词汇 'Liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who tells lies', cn: '骗子、说谎的人', correct: true, reason: '每一句都是稿子，说的又是假话。' },
          { key: 'B', en: 'a lawyer', cn: '律师', correct: false, reason: 'liar 和 lawyer 发音有点像，但这里是说谎的人。' },
          { key: 'C', en: 'a very honest person', cn: '非常诚实的人', correct: false, reason: '意思相反。' }
        ],
        analysis: 'liar 是「惯于说谎的人」。陈默关掉电视，是因为再看下去只会让自己变脏。',
        wrongFeedback: '你选错了，电视里的声音还在继续。气血 -10',
        afterCorrect: '他按下遥控器：「说得好听没用。账本不会撒谎。」'
      },
      {
        plotDescription: '记者会现场，赵天佑对着镜头笑，抬起手做了一个承诺的手势。',
        line: "That smile is fake. Watch his hands — they never stop moving.",
        lineCn: '那个笑是假的。看他的手，一直没停过。',
        prompt: "根据上下文，选出画线词汇 'Fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'not real or genuine', cn: '虚伪的、假的', correct: true, reason: '笑得体面，手却一直不安，说明是装出来的。' },
          { key: 'B', en: 'very warm and sincere', cn: '非常温暖真诚', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'extremely tired', cn: '极度疲惫', correct: false, reason: '这里说的是真假，不是累。' }
        ],
        analysis: 'fake 是「装出来的」。老周看人看了几十年，一眼就能分辨笑到不到眼底。',
        wrongFeedback: '你选错了，镜头又给了那张笑脸一个特写。气血 -10',
        afterCorrect: '老周说：「少爷，他撑不住了。」陈默点头：「那就再推一把。」'
      },
      {
        plotDescription: '采访最后，赵天佑说自己这些年捐了多少学校，从没亏过任何人。',
        line: "He calls himself a philanthropist. What a hypocrite.",
        lineCn: '他自称慈善家。真是个伪君子。',
        prompt: "根据上下文，选出画线词汇 'Hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who pretends to have good morals', cn: '伪君子、嘴上讲道德实际相反的人', correct: true, reason: '一边捐学校一边做局害人，正是伪君子。' },
          { key: 'B', en: 'a generous donor', cn: '慷慨的捐赠者', correct: false, reason: '他嘴上像，实际不是。' },
          { key: 'C', en: 'a medical doctor', cn: '医生', correct: false, reason: '跟职业无关。' }
        ],
        analysis: 'hypocrite 是「说一套做一套的人」。陈默没有骂回去，他把赵家捐学校的那笔钱也列进了调查表。',
        wrongFeedback: '你选错了，采访还在继续，弹幕里一片叫好。气血 -10',
        afterCorrect: '陈默在纸上写了一行字：查捐款去向。然后合上了笔帽。'
      }
    ],
    completeText: '第 25 章结束。三天后，苏明哲被带走协助调查。同一天，赵氏的三家子公司收到税务稽查通知。'
  },
  {
    id: 'ml_26',
    index: 26,
    title: '第 26 章 · 镜头前的那场戏',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏明哲被带走后第三天，赵天佑安排了一场「受害者」采访，让苏明哲的母亲出镜，说陈默三年前就图谋苏家产业。同一天，他约苏晚单独见面。',
    questions: [
      {
        plotDescription: '韩野把采访视频投到墙上，画面里那张脸哭得很用力。',
        line: "He took your money and then backstabbed you on camera. That's the thanks you get.",
        lineCn: '他拿了你的钱，然后在镜头前背刺你。这就是他给你的感谢。',
        prompt: "根据上下文，选出画线词汇 'Backstab' 最准确的意思。",
        options: [
          { key: 'A', en: 'to betray someone who trusts you', cn: '背刺、在背后捅信任你的人一刀', correct: true, reason: '苏明哲拿了钱还反咬一口，正是背刺。' },
          { key: 'B', en: 'to praise someone in public', cn: '公开表扬某人', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to give someone a gift', cn: '送某人一份礼物', correct: false, reason: '镜头前是造谣，不是送礼。' }
        ],
        analysis: 'backstab 是「被信任的人从背后捅一刀」。陈默看着视频，脸上没有任何表情。',
        wrongFeedback: '你选错了，视频里的话越说越狠。气血 -10',
        afterCorrect: '陈默说：「把三年前的流水调出来。让她看看谁给谁钱。」'
      },
      {
        plotDescription: '傍晚，苏晚从赵氏回来，坐在沙发上很久没动，手一直在发抖。',
        line: "He kept telling me I imagined things. That's gaslighting, and I know it now.",
        lineCn: '他一直说我是在胡思乱想。这就是 PUA，我现在知道了。',
        prompt: "根据上下文，选出画线词汇 'Gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make someone doubt their own memory or sanity', cn: '心理操控、让人怀疑自己', correct: true, reason: '他反复说「是你想多了」，就是典型的心理操控。' },
          { key: 'B', en: 'to light a room with gas', cn: '用煤气灯照亮房间', correct: false, reason: '这是这个词的字面来源，但这里说的是操控。' },
          { key: 'C', en: 'to comfort someone gently', cn: '温柔地安慰某人', correct: false, reason: '他不是安慰，是让她怀疑自己。' }
        ],
        analysis: 'gaslight 来自一部老电影，指「让对方怀疑自己的记忆和判断」。苏晚能 naming 它，就已经走出来了。',
        wrongFeedback: '你选错了，苏晚把手缩回袖子里，没有再说。气血 -10',
        afterCorrect: '陈默蹲下来，和她平视：「你没想多。一个字都没有。」'
      },
      {
        plotDescription: '第二天，苏氏三位老董事联名要求开临时股东会，议题只有一条：卖掉公司。',
        line: "He manipulated the board into voting for the sale. Every one of them owes him money.",
        lineCn: '他操控董事会投票同意出售。每一个人都欠他的钱。',
        prompt: "根据上下文，选出画线词汇 'Manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to control someone unfairly', cn: '操控、不正当手段影响别人', correct: true, reason: '拿人情和欠款逼人投票，就是操控。' },
          { key: 'B', en: 'to operate a machine', cn: '操作一台机器', correct: false, reason: 'manipulate 有操作的意思，但这里对象是人。' },
          { key: 'C', en: 'to explain the rules', cn: '解释规则', correct: false, reason: '他不是在讲规则，是在绕规则。' }
        ],
        analysis: 'manipulate 是「把人当成工具来操纵」。陈默没有立刻反击，他在等这些人自己站到台前。',
        wrongFeedback: '你选错了，三位董事的联名信已经发到了媒体。气血 -10',
        afterCorrect: '陈默给法务打电话：「查他们的授信。一笔一笔查。」'
      },
      {
        plotDescription: '深夜，陈默站在阳台上，苏晚问他还撑不撑得住。',
        line: "For three years I let them treat me like a push over. Not anymore.",
        lineCn: '三年里我任由他们把我当老好人。以后不会了。',
        prompt: "根据上下文，选出画线词汇 'Push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who is easy to take advantage of', cn: '老好人、容易被拿捏的人', correct: true, reason: '三年里他从不还嘴，谁都能推他一把。' },
          { key: 'B', en: 'to push something until it falls', cn: '把东西推倒', correct: false, reason: '这里是形容人，不是动作。' },
          { key: 'C', en: 'a very stubborn person', cn: '非常固执的人', correct: false, reason: '意思相反，他当时太好说话。' }
        ],
        analysis: 'push over 指「一推就倒的人」，也就是好拿捏。陈默承认这一点，比任何狠话都更像转变。',
        wrongFeedback: '你选错了，苏晚把外套披在他肩上，没有说话。气血 -10',
        afterCorrect: '他说：「明天股东会，我一个人去。你在家等消息。」'
      }
    ],
    completeText: '第 26 章结束。股东会开了四个小时。散场时，三位老董事没有一个人接受采访。'
  },
  {
    id: 'ml_27',
    index: 27,
    title: '第 27 章 · 她第一次站起来',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '采访播出后，苏氏几位老董事要求陈默「为了大局」退出。股东会上，苏晚第一次站起来说话，声音不大，但整间屋子都听见了。',
    questions: [
      {
        plotDescription: '散会后，苏晚在走廊里追上他，表情有点紧。',
        line: "I stood up for you in that room. Don't make me regret it.",
        lineCn: '我在那间屋子里替你说话了。别让我后悔。',
        prompt: "根据上下文，选出画线词汇 'Stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'to defend someone or something you believe in', cn: '捍卫、站出来替某人说话', correct: true, reason: '她当着所有董事的面替他说话，正是这个意思。' },
          { key: 'B', en: 'to stand up from a chair', cn: '从椅子上站起来', correct: false, reason: '她确实站起来了，但这句话的重点是「替他说话」。' },
          { key: 'C', en: 'to give up on someone', cn: '放弃某人', correct: false, reason: '意思相反。' }
        ],
        analysis: 'stand up for 是「站出来护住」。三年前她一个字都不敢说，这一次她把话说在了所有人前面。',
        wrongFeedback: '你选错了，苏晚的手垂下去，转身走了。气血 -10',
        afterCorrect: '陈默拉住她的手腕：「我记住了。这次不会让你白站。」'
      },
      {
        plotDescription: '办公室里，韩野问要不要先避一避风头，陈默把手机反过来扣在桌上。',
        line: "If they hit us in public, we fight back in court. Not on the internet.",
        lineCn: '他们在公开场合打我们，我们就在法庭上反击。不在网上骂。',
        prompt: "根据上下文，选出画线词汇 'Fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to resist or attack after being attacked', cn: '反击、被打之后还手', correct: true, reason: '对方先动手，他选择在法庭上还手。' },
          { key: 'B', en: 'to run away from a fight', cn: '从打斗中逃走', correct: false, reason: '他不是要跑，是要反击。' },
          { key: 'C', en: 'to apologize publicly', cn: '公开道歉', correct: false, reason: '他没有道歉的打算。' }
        ],
        analysis: 'fight back 是「被打之后还手」。陈默把战场从舆论挪到法庭，是他这三年学到的最重要一课。',
        wrongFeedback: '你选错了，韩野把手机放下，不再劝了。气血 -10',
        afterCorrect: '他给律师发了条消息：明天上午，起诉第一批造谣账号。'
      },
      {
        plotDescription: '律师看完材料，摘下眼镜，说了一句让陈默沉默的话。',
        line: "I can defend the company, but I can't defend your temper in that meeting.",
        lineCn: '我可以为公司辩护，但我没法为你在那场会上的脾气辩护。',
        prompt: "根据上下文，选出画线词汇 'Defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'to protect someone from attack or criticism', cn: '辩护、保护某人不受攻击', correct: true, reason: '他说的是在法庭和舆论上护住公司。' },
          { key: 'B', en: 'to attack someone first', cn: '先发制人攻击对方', correct: false, reason: 'defend 是防守，不是先攻。' },
          { key: 'C', en: 'to sign a contract', cn: '签一份合同', correct: false, reason: '语境是应诉，不是签约。' }
        ],
        analysis: 'defend 是「替人挡住攻击」。律师这句话很客气，意思却很直：外面我能挡，里面你自己收着点。',
        wrongFeedback: '你选错了，律师把材料合上，等你回答。气血 -10',
        afterCorrect: '陈默点头：「那场会，我一句废话都不说。」'
      },
      {
        plotDescription: '当晚，韩野问他为什么这几年一直不还手，陈默看着楼下。',
        line: "I ignored him for three years. That was my mistake, not his victory.",
        lineCn: '我无视了他三年。那是我的错，不是他的胜利。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'to pay no attention to someone', cn: '无视、不予理会', correct: true, reason: '三年里他对苏明哲的挑衅一概不回应。' },
          { key: 'B', en: 'to study carefully', cn: '仔细研究', correct: false, reason: '他不是在研究对方，是不理。' },
          { key: 'C', en: 'to forgive completely', cn: '完全原谅', correct: false, reason: '不回应不等于原谅。' }
        ],
        analysis: 'ignore 是「当它不存在」。陈默承认这不是大度，是一种逃避。',
        wrongFeedback: '你选错了，韩野靠在门框上，没有接话。气血 -10',
        afterCorrect: '他关掉楼下的灯：「从现在起，他说的每一句，我都记账。」'
      }
    ],
    completeText: '第 27 章结束。第一批起诉立案的当天，两家媒体撤稿道歉。赵天佑第一次没有出现在公开场合。'
  },
  {
    id: 'ml_28',
    index: 28,
    title: '第 28 章 · 地下停车场的十分钟',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵天佑约陈默在地下车场见面，只带了两个人。他开门见山：收手，否则苏晚三年前的就诊记录会被放到网上。',
    questions: [
      {
        plotDescription: '陈默没有坐下，也没有说话，就那么看着他，整整一分钟。',
        line: "I sat there in silence for a full minute, and he started talking.",
        lineCn: '我在那儿沉默着坐了整整一分钟，他就自己开始说了。',
        prompt: "根据上下文，选出画线词汇 'Silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'complete quiet, with no sound or speech', cn: '沉默、一句话都不说', correct: true, reason: '他一句话不说，对方反而先慌了。' },
          { key: 'B', en: 'a loud argument', cn: '一场大声争吵', correct: false, reason: '正好相反，他一个字都没说。' },
          { key: 'C', en: 'a written statement', cn: '一份书面声明', correct: false, reason: '这里说的是不出声。' }
        ],
        analysis: 'silence 在这里是武器。谁先沉不住气，谁就先交出底牌。',
        wrongFeedback: '你选错了，赵天佑笑了笑，把话又绕了回去。气血 -10',
        afterCorrect: '等对方说完，陈默才开口：「你说完了？那我说两句。」'
      },
      {
        plotDescription: '赵天佑把一份打印件推过来，上面是苏晚三年前的住院记录。',
        line: "He threatened to release her medical records if I didn't back off.",
        lineCn: '他威胁说如果我不收手，就把她的病历公开。',
        prompt: "根据上下文，选出画线词汇 'Threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say you will harm someone', cn: '威胁、扬言要伤害对方', correct: true, reason: '拿别人的病历当筹码，就是威胁。' },
          { key: 'B', en: 'to warn someone kindly', cn: '善意地提醒', correct: false, reason: '这不是提醒，是拿隐私做刀。' },
          { key: 'C', en: 'to ask for help', cn: '请求帮助', correct: false, reason: '他的语气是逼迫，不是求助。' }
        ],
        analysis: 'threaten 是「用伤害来逼对方就范」。陈默把那张纸拿起来，看都没看就撕了。',
        wrongFeedback: '你选错了，赵天佑把另一份推了过来。气血 -10',
        afterCorrect: '陈默把碎片放回他面前：「原件在你手上？那更好。敲诈勒索，量刑更重。」'
      },
      {
        plotDescription: '赵天佑站起来，整理袖口，说了一句很轻的话。',
        line: "He said he could ruin me in a week. I gave him two.",
        lineCn: '他说一周就能毁掉我。我给了他两周。',
        prompt: "根据上下文，选出画线词汇 'Ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'to destroy someone and their success', cn: '毁掉、让某人身败名裂', correct: true, reason: '他扬言一周之内让陈默彻底垮掉。' },
          { key: 'B', en: 'to help someone succeed', cn: '帮助某人成功', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to repair a building', cn: '修缮一栋建筑', correct: false, reason: '这里是毁掉名声，不是修房子。' }
        ],
        analysis: 'ruin 是「毁到没法翻身」。陈默回的那句「我给了他两周」，比任何狠话都冷。',
        wrongFeedback: '你选错了，赵天佑的脚步停了一下。气血 -10',
        afterCorrect: '陈默看着他的背影：「两周之后，你连这条通道都进不来。」'
      },
      {
        plotDescription: '回到车上，韩野问他要不要一次性把赵家掀翻。',
        line: "I don't need to destroy him. I just need the truth on record.",
        lineCn: '我不需要摧毁他。我只需要把真相留在案卷里。',
        prompt: "根据上下文，选出画线词汇 'Destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'to damage something so badly it cannot continue', cn: '摧毁、彻底破坏', correct: true, reason: '韩野说的是把赵家彻底打垮。' },
          { key: 'B', en: 'to build something new', cn: '建造新的东西', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'to hide something', cn: '把东西藏起来', correct: false, reason: '他要的是留档，不是藏。' }
        ],
        analysis: 'destroy 是「毁到不能再用」。陈默不打算做赵天佑那种人，他要的是判决书，不是废墟。',
        wrongFeedback: '你选错了，韩野把车钥匙攥紧，没再问。气血 -10',
        afterCorrect: '陈默说：「开庭那天，你坐第一排。看完就走，不许笑。」'
      }
    ],
    completeText: '第 28 章结束。两周后，赵氏被正式立案，赵天佑被限制出境。消息出来那天，陈默在父亲的墓前坐了一下午。'
  },
  {
    id: 'ml_29',
    index: 29,
    title: '第 29 章 · 墓前的那个下午',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵氏被立案两个月后，赵天佑的父亲中风入院。赵家托人带话，说想谈一谈。陈默没有立刻回答，先去了墓园。',
    questions: [
      {
        plotDescription: '老周转述赵天佑在讯问室里说的话，语气很平。',
        line: "He sat in that room and said he regretted nothing. Not one thing.",
        lineCn: '他坐在那间屋子里，说自己什么都不后悔。一件都不后悔。',
        prompt: "根据上下文，选出画线词汇 'Regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'to feel sorry about something you did', cn: '后悔、为做过的事难受', correct: true, reason: '他说自己一件都不后悔，正用到这个词。' },
          { key: 'B', en: 'to feel proud of a decision', cn: '为自己的决定骄傲', correct: false, reason: 'regret 是懊悔，不是骄傲。' },
          { key: 'C', en: 'to forget a promise', cn: '忘记一个承诺', correct: false, reason: '跟承诺无关，是对做过的事的态度。' }
        ],
        analysis: 'regret 是「回头觉得不该那样做」。赵天佑一句不悔，让这场胜利少了一半快感。',
        wrongFeedback: '你选错了，老周停下来，等你说话。气血 -10',
        afterCorrect: '陈默把香放在碑前：「那他就带着不悔，慢慢过完下半辈子。」'
      },
      {
        plotDescription: '下山时，苏晚问他现在算不算报仇了。',
        line: "For three years I called it revenge. It was just grief with a schedule.",
        lineCn: '三年里我把这叫复仇。其实只是给悲伤排了个时间表。',
        prompt: "根据上下文，选出画线词汇 'Revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'harm done to someone who hurt you', cn: '复仇、对伤害你的人还手', correct: true, reason: '他把这三年的目标称作复仇。' },
          { key: 'B', en: 'a business negotiation', cn: '一场商业谈判', correct: false, reason: '这里说的不是谈生意。' },
          { key: 'C', en: 'a formal apology', cn: '一次正式道歉', correct: false, reason: '意思相反。' }
        ],
        analysis: 'revenge 是「讨回那口气」。陈默这句自嘲，是整本书里他对自己最诚实的一次。',
        wrongFeedback: '你选错了，苏晚把手放进他掌心，没有追问。气血 -10',
        afterCorrect: '他说：「我爸大概不想看我把后半辈子也搭进去。」'
      },
      {
        plotDescription: '墓园门口，苏晚停下来，看着远处的江。',
        line: "You can stop now. There's no peace waiting for you at the end of this.",
        lineCn: '你可以停下来了。这条路的尽头没有和平在等你。',
        prompt: "根据上下文，选出画线词汇 'Peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'a calm state without conflict', cn: '和平、内心安宁', correct: true, reason: '她说的是把仇报完之后，心里也不会安静。' },
          { key: 'B', en: 'a piece of land', cn: '一块土地', correct: false, reason: 'peace 和 piece 同音不同义，这里是安宁。' },
          { key: 'C', en: 'a large amount of money', cn: '一大笔钱', correct: false, reason: '这句劝的是心，不是钱。' }
        ],
        analysis: 'peace 是「没有仗要打的安静」。苏晚不是在劝他放手，是在提醒他别把自己也埋进去。',
        wrongFeedback: '你选错了，苏晚看着江面，很久没再说话。气血 -10',
        afterCorrect: '陈默说：「我知道。所以我不打算把赵家连根拔。」'
      },
      {
        plotDescription: '三天后，赵家派人送来一份文件，希望双方先停手，等老人病情稳定再说。',
        line: "The Zhao family asked for a truce before the hearing. I said yes.",
        lineCn: '赵家在开庭前请求休战。我答应了。',
        prompt: "根据上下文，选出画线词汇 'Truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting for a time', cn: '休战、暂时停手', correct: true, reason: '赵家求的是开庭前暂停，正是休战。' },
          { key: 'B', en: 'a final judgment', cn: '最终判决', correct: false, reason: '他们求的是停手，不是判决。' },
          { key: 'C', en: 'a business merger', cn: '一次商业合并', correct: false, reason: '文件是停手协议，不是合并。' }
        ],
        analysis: 'truce 是「暂时不打」。陈默答应，不是因为心软，是因为他不想赢在一个病人身上。',
        wrongFeedback: '你选错了，送文件的人站在门口，一直没有走。气血 -10',
        afterCorrect: '他签了字：「停两周。开庭照旧。」'
      }
    ],
    completeText: '第 29 章结束。休战的两周里，陈默一次都没有看赵家的资料。他陪苏晚回了趟老宅，把那棵院子里的树修了修。'
  },
  {
    id: 'ml_30',
    index: 30,
    title: '第 30 章 · 医院走廊的一小时',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '苏振海做手术的前一晚，在走廊里等了陈默两个小时。同一天下午，韩野因为一笔投资跟他吵到掀了桌子。',
    questions: [
      {
        plotDescription: '走廊尽头的长椅上，苏振海站起来，手里捏着一份股权转让书。',
        line: "He wanted to reconcile before the surgery. I listened for an hour.",
        lineCn: '他想在手术前和解。我听他讲了一个小时。',
        prompt: "根据上下文，选出画线词汇 'Reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'to become friendly again after a conflict', cn: '和解、冲突之后重新和好', correct: true, reason: '手术前把话说开，就是想和解。' },
          { key: 'B', en: 'to argue again', cn: '再吵一次', correct: false, reason: '他听了一个小时，没有吵。' },
          { key: 'C', en: 'to sign a new contract', cn: '签一份新合同', correct: false, reason: '股权书只是由头，重点是和解。' }
        ],
        analysis: 'reconcile 是「把断掉的关系接回来」。陈默没有答应，也没有拒绝，他只是听完了。',
        wrongFeedback: '你选错了，苏振海把文件收回口袋，坐了回去。气血 -10',
        afterCorrect: '临走前陈默说：「手术我会安排人。别的，等你出来再谈。」'
      },
      {
        plotDescription: '下午的会议上，韩野坚持要投那个项目，陈默不同意。两个人从讨论变成了争执。',
        line: "We had an argument about the same thing we always argue about: how fast to move.",
        lineCn: '我们又为同一件事争论：到底要多快。',
        prompt: "根据上下文，选出画线词汇 'Argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'an angry disagreement', cn: '争论、带着火气的分歧', correct: true, reason: '两个人从讨论变成争执，就是 argument。' },
          { key: 'B', en: 'a logical proof', cn: '一个逻辑论证', correct: false, reason: 'argument 有论证的意思，但这里是吵架。' },
          { key: 'C', en: 'a friendly joke', cn: '一个友好的玩笑', correct: false, reason: '气氛已经很僵了。' }
        ],
        analysis: 'argument 是「各说各的、越说越急」。他们争的从来不是项目，是节奏。',
        wrongFeedback: '你选错了，韩野把笔摔在桌上。气血 -10',
        afterCorrect: '陈默说：「你要快，我要稳。我们今天谁都别说赢。」'
      },
      {
        plotDescription: '散会后，两个人在停车场又碰上，话说得比会上更冲。',
        line: "We almost got into a fight in the parking lot. Ten years, and that was the closest.",
        lineCn: '我们差点在停车场打起来。十年了，这是最接近的一次。',
        prompt: "根据上下文，选出画线词汇 'Fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'a physical or angry conflict', cn: '打架、冲突', correct: true, reason: '他说的是差点动手。' },
          { key: 'B', en: 'a formal debate', cn: '一场正式辩论', correct: false, reason: '停车场里不是辩论赛。' },
          { key: 'C', en: 'a business deal', cn: '一笔生意', correct: false, reason: '这里说的是冲突。' }
        ],
        analysis: 'fight 可以指打架，也可以指激烈的冲突。十年兄弟第一次走到这一步，是因为都在乎。',
        wrongFeedback: '你选错了，韩野拉开车门，重重地关上。气血 -10',
        afterCorrect: '陈默在原地站了一会儿，给他发了条消息：明天早上，一起吃面。'
      },
      {
        plotDescription: '第二天早上，面馆里，两个人都没提昨天的事。吃到一半，韩野先开口。',
        line: "In the end we reached a compromise: he stays in charge of execution, I decide the pace.",
        lineCn: '最后我们达成了妥协：执行归他管，节奏由我定。',
        prompt: "根据上下文，选出画线词汇 'Compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement where both sides give up something', cn: '妥协、双方各让一步', correct: true, reason: '一个管执行、一个定节奏，就是各让一步。' },
          { key: 'B', en: 'a total victory for one side', cn: '一方全胜', correct: false, reason: '两个人都让了，不是一边赢。' },
          { key: 'C', en: 'a broken promise', cn: '一个被打破的承诺', correct: false, reason: '这里是达成一致，不是失信。' }
        ],
        analysis: 'compromise 是「各退一步换一个能走下去的方案」。这碗面吃完，两个人才算真的和好。',
        wrongFeedback: '你选错了，韩野把筷子放下，等你改口。气血 -10',
        afterCorrect: '陈默把最后一口汤喝完：「就这么定。再吵，还来这家。」'
      }
    ],
    completeText: '第 30 章结束。苏振海的手术很顺利。推出手术室时，他抓着陈默的手说了一句：苏家欠你的，我认。'
  },
  {
    id: 'ml_31',
    index: 31,
    title: '第 31 章 · 庆功宴上的点评',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '赵家退场后，苏氏重新办了一场庆功宴。韩野喝到第三杯，开始挨个点评在场的人，声音不小，邻桌都听得见。',
    questions: [
      {
        plotDescription: '韩野指了指不远处正在跟董事说话的苏晚。',
        line: "Su Wan is savvy. She saw the trap before any of us did.",
        lineCn: '苏晚很精明。她比我们任何人都早看出那个陷阱。',
        prompt: "根据上下文，选出画线词汇 'Savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'smart and quick to understand situations', cn: '精明、很懂行、脑子快', correct: true, reason: '她比所有人先看出陷阱，正是 savvy。' },
          { key: 'B', en: 'very shy', cn: '非常害羞', correct: false, reason: '她当场把话说清楚，不是害羞。' },
          { key: 'C', en: 'easily confused', cn: '容易被搞糊涂', correct: false, reason: '意思相反。' }
        ],
        analysis: 'savvy 是「看得懂局、反应快」。韩野这句夸得不轻，苏晚听见了，只抬了抬杯子。',
        wrongFeedback: '你选错了，韩野把酒放下，笑得意味深长。气血 -10',
        afterCorrect: '陈默说：「她三年前就看出来了。只是没说。」'
      },
      {
        plotDescription: '轮到点评陈默时，韩野一点都不客气。',
        line: "I'll be blunt: your speech was too long, and the last line was unnecessary.",
        lineCn: '我直说了：你那段讲话太长，最后一句完全多余。',
        prompt: "根据上下文，选出画线词汇 'Blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'direct and honest, sometimes rude', cn: '直白、嘴不绕弯（有时显得不客气）', correct: true, reason: '他开场就说「我直说了」，正是这个意思。' },
          { key: 'B', en: 'sharp and pointed', cn: '钝的、不锋利的', correct: false, reason: 'blunt 有「钝」的意思，但形容说话是不绕弯。' },
          { key: 'C', en: 'very polite', cn: '非常客气', correct: false, reason: '他这番话一点都不客气。' }
        ],
        analysis: 'blunt 形容说话「直得有点扎人」。陈默听完没有生气，只问了一句：那最后一句该怎么改。',
        wrongFeedback: '你选错了，韩野挑起眉，等着看你翻脸。气血 -10',
        afterCorrect: '陈默拿过他的酒杯：「明天你写稿，我念。」'
      },
      {
        plotDescription: '邻桌有人凑过来敬酒，话说得轻浮，苏晚放下杯子，笑着回了两句。',
        line: "She gave him a sassy answer and walked off. The whole table laughed.",
        lineCn: '她回了那人一句毒舌的话就走了。整桌人都笑了。',
        prompt: "根据上下文，选出画线词汇 'Sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'confidently rude in a playful way', cn: '毒舌、傲娇、嘴上不饶人', correct: true, reason: '她笑着把人噎回去，正是 sassy。' },
          { key: 'B', en: 'very quiet and obedient', cn: '安静听话', correct: false, reason: '她恰恰是把人顶了回去。' },
          { key: 'C', en: 'extremely sad', cn: '非常难过', correct: false, reason: '整桌人都笑了，气氛并不悲伤。' }
        ],
        analysis: 'sassy 是「嘴上带刺但不失分寸」。三年前她只会低头，现在她知道什么时候该还一句。',
        wrongFeedback: '你选错了，那人尴尬地站了一会儿，自己走了。气血 -10',
        afterCorrect: '陈默看着她走回来，低声说：「这一句，比我讲八分钟有用。」'
      },
      {
        plotDescription: '有人提起苏明哲前几天发的道歉视频，桌上安静了一瞬。',
        line: "His apology video was lame. Nobody bought it for a second.",
        lineCn: '他那个道歉视频逊毙了。没人信他一秒。',
        prompt: "根据上下文，选出画线词汇 'Lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'weak and not impressive', cn: '逊毙了、很没水准', correct: true, reason: '视频里念稿子、掉眼泪，谁都不信。' },
          { key: 'B', en: 'unable to walk', cn: '腿脚不方便', correct: false, reason: 'lame 有「跛」的本义，但这里是「很差劲」。' },
          { key: 'C', en: 'extremely moving', cn: '非常感人', correct: false, reason: '意思相反，大家都觉得假。' }
        ],
        analysis: 'lame 在口语里是「太弱了、拿不出手」。陈默没有评价，他只说：让他继续发。',
        wrongFeedback: '你选错了，桌上的人交换了一个眼神。气血 -10',
        afterCorrect: '陈默说：「发得越多，越像在演。等他自己演不下去。」'
      }
    ],
    completeText: '第 31 章结束。庆功宴散场时，苏晚在门口等他，说了一句：你今晚笑得比过去三年都多。'
  },
  {
    id: 'ml_32',
    index: 32,
    title: '第 32 章 · 新来的助理',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '新助理小周第一天上班，穿了一件很潮的外套，办公桌上却堆着七个没拆的快递。韩野站在门口看了半天。',
    questions: [
      {
        plotDescription: '韩野绕着小周转了一圈，最后指着那件外套。',
        line: "That jacket is dope. Where did you get it?",
        lineCn: '那件外套酷毙了。你在哪儿买的？',
        prompt: "根据上下文，选出画线词汇 'Dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cool', cn: '酷毙了、很潮', correct: true, reason: '他绕着人看了一圈才问，明显是觉得好看。' },
          { key: 'B', en: 'a harmful drug', cn: '毒品', correct: false, reason: 'dope 有毒品的意思，但这里是夸衣服酷。' },
          { key: 'C', en: 'very expensive', cn: '非常贵', correct: false, reason: '他问的是在哪买的，不是价格。' }
        ],
        analysis: 'dope 在口语里是「太酷了」。小周愣了一下才反应过来，这是老板的朋友在夸他。',
        wrongFeedback: '你选错了，小周把外套往里收了收。气血 -10',
        afterCorrect: '韩野拍了拍他肩膀：「穿得不错。桌上这些，先收进去。」'
      },
      {
        plotDescription: '中午，陈默翻了一遍小周做的会议纪要，把它放在桌上。',
        line: "The work is sloppy. Three typos on the first page, and the numbers don't match.",
        lineCn: '这活做得太毛躁。第一页三个错字，数字还对不上。',
        prompt: "根据上下文，选出画线词汇 'Sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'careless and untidy', cn: '邋遢、做得马虎', correct: true, reason: '错字和数字对不上，都是马虎造成的。' },
          { key: 'B', en: 'extremely careful', cn: '极其仔细', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'very fast', cn: '非常快', correct: false, reason: 'sloppy 说的是质量，不是速度。' }
        ],
        analysis: 'sloppy 是「做得潦草」。陈默没有骂人，只把纪要推回去，让他重做一遍。',
        wrongFeedback: '你选错了，小周站在原地，脸涨得通红。气血 -10',
        afterCorrect: '陈默说：「我不要求你快。我要求你交上来的东西，我不用再看第二遍。」'
      },
      {
        plotDescription: '下午，苏母打来电话，说苏明哲一天打了十一个电话要钱。',
        line: "He gets needy when he has no money. He called her eleven times before noon.",
        lineCn: '他一没钱就特别黏人。中午之前给她打了十一个电话。',
        prompt: "根据上下文，选出画线词汇 'Needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'needing too much attention or help', cn: '缺爱、过度依赖别人', correct: true, reason: '一天十一个电话要钱，就是过度依赖。' },
          { key: 'B', en: 'having a lot of money', cn: '很有钱', correct: false, reason: '他恰恰是没钱。' },
          { key: 'C', en: 'very independent', cn: '非常独立', correct: false, reason: '意思相反。' }
        ],
        analysis: 'needy 是「总要从别人那里拿点什么才安心」。陈默听完只说：别接。',
        wrongFeedback: '你选错了，电话那头苏母的声音更低了下去。气血 -10',
        afterCorrect: '陈默接过电话：「阿姨，钱我可以给。但只给一次，写借条。」'
      },
      {
        plotDescription: '挂了电话，苏晚问他会不会觉得自己太狠。',
        line: "I was selfish for three years. I only thought about my own plan, not what it did to you.",
        lineCn: '我自私了三年。我只想着自己的计划，没想过那对你意味着什么。',
        prompt: "根据上下文，选出画线词汇 'Selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'caring only about yourself', cn: '自私、只想着自己', correct: true, reason: '他承认三年里只顾自己的复仇计划。' },
          { key: 'B', en: 'generous to everyone', cn: '对所有人慷慨', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'very shy', cn: '非常害羞', correct: false, reason: '这里说的是只顾自己，不是害羞。' }
        ],
        analysis: 'selfish 是「只看得见自己那点事」。陈默说这句时没有辩解，这是他欠她的那句实话。',
        wrongFeedback: '你选错了，苏晚把杯子转了半圈，没有接话。气血 -10',
        afterCorrect: '苏晚说：「那你以后自私一点，先想你自己。」'
      }
    ],
    completeText: '第 32 章结束。小周重做的纪要在下班前交了上来，一个错字都没有。陈默在末尾批了两个字：可以。'
  },
  {
    id: 'ml_33',
    index: 33,
    title: '第 33 章 · 墨绿色长裙',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '慈善晚宴在江边酒店举行。苏晚穿了一条墨绿色长裙，从楼梯上走下来时，楼下说话的声音小了一半。角落里，一个陌生男人一直没动。',
    questions: [
      {
        plotDescription: '陈默站在楼梯口，手还扶在栏杆上，忘了往下走。',
        line: "You look gorgeous. I forgot what I was going to say.",
        lineCn: '你美呆了。我忘了自己要说什么。',
        prompt: "根据上下文，选出画线词汇 'Gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely beautiful', cn: '美呆了、惊艳', correct: true, reason: '他站在楼梯口忘了走路，正是被惊艳到。' },
          { key: 'B', en: 'very tired', cn: '非常疲惫', correct: false, reason: '这里夸的是外形，不是状态。' },
          { key: 'C', en: 'poorly dressed', cn: '穿得很随便', correct: false, reason: '意思相反。' }
        ],
        analysis: 'gorgeous 是「美到让人失语」。陈默这种人忘词，比任何情话都管用。',
        wrongFeedback: '你选错了，苏晚扶着栏杆，笑了一下。气血 -10',
        afterCorrect: '苏晚走到他面前：「想好了再说。我不急。」'
      },
      {
        plotDescription: '进场后，韩野凑过来，朝角落抬了抬下巴。',
        line: "Something is weird about that man. He hasn't touched his drink all night.",
        lineCn: '那个男的有哪里不对劲。他一整晚都没碰过自己的酒。',
        prompt: "根据上下文，选出画线词汇 'Weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'strange and unusual', cn: '奇怪、不对劲', correct: true, reason: '来参加晚宴却一口酒都不喝，确实反常。' },
          { key: 'B', en: 'completely normal', cn: '完全正常', correct: false, reason: '韩野正是觉得不正常才说。' },
          { key: 'C', en: 'very friendly', cn: '非常友好', correct: false, reason: '那人一直站着不动，谈不上友好。' }
        ],
        analysis: 'weird 是「说不上来的怪」。陈默看了一眼，记住了那个人站的位置。',
        wrongFeedback: '你选错了，韩野把酒杯放下，不再提。气血 -10',
        afterCorrect: '陈默低声说：「让人查一下签到名单。别惊动他。」'
      },
      {
        plotDescription: '中场时，陈默要去后门接个电话，苏晚拉住他的袖子。',
        line: "That back exit looks sketchy. Don't go alone.",
        lineCn: '那个后门看着可疑。别一个人去。',
        prompt: "根据上下文，选出画线词汇 'Sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'suspicious and possibly dangerous', cn: '可疑的、让人不放心', correct: true, reason: '后门没灯、又有人守着，确实让人不放心。' },
          { key: 'B', en: 'newly painted', cn: '刚刷过漆', correct: false, reason: '她担心的是安全，不是装修。' },
          { key: 'C', en: 'well lit and safe', cn: '灯光明亮又安全', correct: false, reason: '意思相反。' }
        ],
        analysis: 'sketchy 是「看着就不对劲」。陈默停下脚步，把手机收了回去。',
        wrongFeedback: '你选错了，苏晚的手还拉着他袖子。气血 -10',
        afterCorrect: '陈默说：「那你跟我一起。站我后面三步。」'
      },
      {
        plotDescription: '十分钟后，那个陌生男人在走廊里拦住他们，准确说出了苏晚小时候住的街道。',
        line: "The whole thing was bizarre. He knew her childhood address, down to the door number.",
        lineCn: '整件事诡异得离谱。他知道她小时候的地址，连门牌号都对。',
        prompt: "根据上下文，选出画线词汇 'Bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'very strange, hard to believe', cn: '诡异的、离奇到难以置信', correct: true, reason: '陌生人报出一个老门牌号，确实离奇。' },
          { key: 'B', en: 'very ordinary', cn: '非常普通', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'a little boring', cn: '有点无聊', correct: false, reason: '这件事让人后背发凉，不是无聊。' }
        ],
        analysis: 'bizarre 是「怪到不合常理」。陈默把苏晚往身后带了半步，这是本能。',
        wrongFeedback: '你选错了，那人又往前走了半步。气血 -10',
        afterCorrect: '陈默挡在中间：「你是谁派来的？」那人笑了笑，把名片放在他胸口。'
      }
    ],
    completeText: '第 33 章结束。名片上只有一行字：赵氏资产管理。陈默把名片折好，放进了口袋。'
  },
  {
    id: 'ml_34',
    index: 34,
    title: '第 34 章 · 那场八分钟的发布',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '默行科技的第一场产品发布会在旧厂房改的展厅里举行。开场前十分钟，主屏幕黑了两次。陈默站在侧幕，手里没有稿子。',
    questions: [
      {
        plotDescription: '发布会结束后，后台的人挤在一起，韩野把手机举得老高。',
        line: "That launch was epic. We hit every number we set.",
        lineCn: '那场发布是史诗级的。我们定的每个数都达到了。',
        prompt: "根据上下文，选出画线词汇 'Epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely impressive', cn: '史诗级的、极其震撼', correct: true, reason: '目标全部达成，现场反响炸裂。' },
          { key: 'B', en: 'a long poem', cn: '一部长篇史诗', correct: false, reason: 'epic 有史诗的意思，但这里是夸张的「太猛了」。' },
          { key: 'C', en: 'a complete failure', cn: '彻底的失败', correct: false, reason: '意思相反。' }
        ],
        analysis: 'epic 在口语里是「大到夸张、太牛了」。韩野喊这句时，嗓子已经哑了。',
        wrongFeedback: '你选错了，韩野把手机收回去，笑声停了。气血 -10',
        afterCorrect: '陈默说：「别急着庆功。明天开始，交付才是真正的战场。」'
      },
      {
        plotDescription: '回办公室的路上，陈默忽然开口，说自己上台时讲了个笑话。',
        line: "My opening joke was cringe. I could feel the room freeze.",
        lineCn: '我开场那个笑话太脚趾扣地了。我能感觉到全场僵住。',
        prompt: "根据上下文，选出画线词汇 'Cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'embarrassing', cn: '令人尴尬、脚趾扣地', correct: true, reason: '全场僵住，就是被尬到了。' },
          { key: 'B', en: 'extremely funny', cn: '非常搞笑', correct: false, reason: '如果好笑，屋子不会僵住。' },
          { key: 'C', en: 'very serious', cn: '非常严肃', correct: false, reason: '这里说的是尴尬，不是严肃。' }
        ],
        analysis: 'cringe 是「替人尴尬到缩起来」。陈默自己承认这一点，反而显得没那么尴尬了。',
        wrongFeedback: '你选错了，韩野把脸埋进手掌里，肩膀在抖。气血 -10',
        afterCorrect: '韩野笑了半天：「下次别讲笑话。你就讲数字。」'
      },
      {
        plotDescription: '苏晚从后排走过来，把一瓶水递给他。',
        line: "You were fabulous up there. Don't let it go to your head.",
        lineCn: '你在台上表现极好。别因此飘了。',
        prompt: "根据上下文，选出画线词汇 'Fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good', cn: '极好的、棒极了', correct: true, reason: '她先夸，再提醒他别飘。' },
          { key: 'B', en: 'a famous story', cn: '一个著名的故事', correct: false, reason: 'fable 才是寓言，fabulous 是「极好」。' },
          { key: 'C', en: 'barely acceptable', cn: '勉强可以', correct: false, reason: '她说的是「极好」，不是勉强。' }
        ],
        analysis: 'fabulous 是很高的夸奖。苏晚后面那句「别飘」，才是她真正想说的。',
        wrongFeedback: '你选错了，苏晚把水放在他手里，转身走了。气血 -10',
        afterCorrect: '陈默拧开瓶盖：「我飘不起来。屏幕黑的那两次，我到现在还记着。」'
      },
      {
        plotDescription: '提到那两次黑屏，技术负责人低着头，站在门口不敢进来。',
        line: "The first demo was terrible. The screen went black twice in front of three hundred people.",
        lineCn: '第一次演示糟糕透顶。三百个人面前，屏幕黑了两次。',
        prompt: "根据上下文，选出画线词汇 'Terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'very bad', cn: '糟糕透顶、非常差', correct: true, reason: '三百人面前黑屏两次，确实是重大失误。' },
          { key: 'B', en: 'extremely good', cn: '极其出色', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'a little slow', cn: '有点慢', correct: false, reason: '黑屏不是慢，是故障。' }
        ],
        analysis: 'terrible 是「差到不能再差」。陈默没有当场追责，他把人叫进来，问的是原因。',
        wrongFeedback: '你选错了，技术负责人把门推开了半扇。气血 -10',
        afterCorrect: '陈默说：「黑屏的原因写成一页纸。明天早上放我桌上。」'
      }
    ],
    completeText: '第 34 章结束。发布会视频当晚播放量破了三百万。评论区吵成一片，但所有人都在讨论那个产品。'
  },
  {
    id: 'ml_35',
    index: 35,
    title: '第 35 章 · 一顿家宴',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '发布会后，苏晚带他回家吃饭。苏母第一次给他盛了汤，饭桌上却摆着一张照片——「朋友家的女儿」，说是给苏晚介绍的。',
    questions: [
      {
        plotDescription: '苏母把照片往苏晚那边推，嘴里还在夸照片上的人。',
        line: "He's a decent guy. Boring, but decent.",
        lineCn: '他是个体面的人。无聊是无聊，但人还算正派。',
        prompt: "根据上下文，选出画线词汇 'Decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough and honest', cn: '体面的、还算正派', correct: true, reason: '她先承认无聊，再肯定人品，正是 decent。' },
          { key: 'B', en: 'extremely wealthy', cn: '极其富有', correct: false, reason: '她夸的是人品，不是钱。' },
          { key: 'C', en: 'completely unsuitable', cn: '完全不合适', correct: false, reason: '她正想把这个人介绍出去。' }
        ],
        analysis: 'decent 是「不算惊艳，但靠得住」。苏母这句话说得很客气，意思却很明显。',
        wrongFeedback: '你选错了，苏母把照片又往前推了推。气血 -10',
        afterCorrect: '苏晚把照片推回去：「妈，我有人了。您见过。」'
      },
      {
        plotDescription: '苏母转头看韩野，看了半天，摇了摇头。',
        line: "Your friend is a weirdo, but he's a loyal one. I'll give him that.",
        lineCn: '你那个朋友是个怪人，但人挺讲义气。这点我承认。',
        prompt: "根据上下文，选出画线词汇 'Weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strange person', cn: '怪人、行为古怪的人', correct: true, reason: '韩野在饭桌上大声点评菜，确实像个怪人。' },
          { key: 'B', en: 'a very polite guest', cn: '非常有礼貌的客人', correct: false, reason: '她前面先说了「怪人」，不是夸礼貌。' },
          { key: 'C', en: 'a professional chef', cn: '专业厨师', correct: false, reason: '跟职业无关。' }
        ],
        analysis: 'weirdo 是「行为古怪的人」，带点嫌弃也带点亲近。苏母这句评价，已经是她能给的最好评价。',
        wrongFeedback: '你选错了，韩野在厨房里打了个喷嚏。气血 -10',
        afterCorrect: '陈默忍着笑：「阿姨，他要是听见，能高兴一晚上。」'
      },
      {
        plotDescription: '饭后，苏晚在阳台上看着他收拾碗筷，忽然开口。',
        line: "You look hot in that shirt. Don't get used to hearing it.",
        lineCn: '你穿这件衬衫挺性感的。别习惯听这种话。',
        prompt: "根据上下文，选出画线词汇 'Hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'physically attractive', cn: '性感、外形很吸引人', correct: true, reason: '她在夸他穿衬衫好看。' },
          { key: 'B', en: 'high in temperature', cn: '温度很高', correct: false, reason: 'hot 有热的意思，但这里是夸人。' },
          { key: 'C', en: 'very angry', cn: '非常生气', correct: false, reason: '她的语气是玩笑，不是发火。' }
        ],
        analysis: 'hot 用来形容人，是「外形很吸引人」。陈默愣了一下，碗差点没端稳。',
        wrongFeedback: '你选错了，苏晚笑了一声，走回屋里。气血 -10',
        afterCorrect: '陈默把碗放进水池：「那你也别习惯。我明天换一件。」'
      },
      {
        plotDescription: '离开前，苏母站在门口，看着沙发上睡着的陈默，小声对苏晚说了一句。',
        line: "He fell asleep on the couch with his shoes half off. It was cute.",
        lineCn: '他在沙发上睡着了，鞋脱了一半。那样子挺可爱的。',
        prompt: "根据上下文，选出画线词汇 'Cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'endearing and sweet', cn: '可爱、让人心里一软', correct: true, reason: '累到鞋脱一半就睡着，确实让人心里一软。' },
          { key: 'B', en: 'extremely ugly', cn: '非常难看', correct: false, reason: '意思相反。' },
          { key: 'C', en: 'very dangerous', cn: '非常危险', correct: false, reason: '这里说的是可爱，不是危险。' }
        ],
        analysis: 'cute 是「小地方让人觉得可爱」。苏母说完自己愣了一下，像是没料到自己会这么说。',
        wrongFeedback: '你选错了，苏母把门轻轻带上。气血 -10',
        afterCorrect: '苏晚给他盖了条毯子，回了一句：「他这三年，没睡过一个整觉。」'
      }
    ],
    completeText: '第 35 章结束。那晚之后，苏母再没提过相亲的事。她把那张照片收进了抽屉最底下。'
  },
  {
    id: 'ml_36',
    index: 36,
    title: '第 36 章 · 早高峰的那节车厢',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '搬出苏家老宅的第三天，两个人在城东租了一套两居室。房子不大，窗台正对一条高架。清晨六点半，楼下的早点摊冒着白汽，苏晚站在玄关看他换鞋。',
    questions: [
      {
        plotDescription: '苏晚把保温杯塞进他包里，朝窗外的高架抬了抬下巴。',
        line: "You could take the car. A two-hour commute is insane when you run the company.",
        lineCn: '你明明可以坐车。自己开公司的人，花两个小时通勤，太离谱了。',
        prompt: "根据上下文，选出画线词汇 'Commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'the regular journey between home and work', cn: '上下班往返通勤', correct: true, reason: '他每天往返公司和家，这段路程就是 commute。' },
          { key: 'B', en: 'a company car', cn: '公司配的专车', correct: false, reason: '她说的是每天两个小时的路程，不是那辆车。' },
          { key: 'C', en: 'a business trip abroad', cn: '出国出差', correct: false, reason: '出差是去外地，这里说的是每天往返。' }
        ],
        analysis: 'commute 指每天从家到公司的往返路程。陈默不坐那辆黑色轿车，他想自己重新走一遍这座城市。',
        wrongFeedback: '你选错了，苏晚把保温杯往他手里一按：「别逞强，地铁上也能睡。」陈默低头笑了一下。气血 -10',
        afterCorrect: '陈默挤上早高峰的地铁，站了四十分钟。他在人群里看见一个穿着工装、脑袋一点一点打瞌睡的中年男人，忽然想起三年前的自己。'
      },
      {
        plotDescription: '午休时，苏晚推开他办公室的门，看见他趴在桌上。',
        line: "Take a nap. You have twenty minutes before the client calls.",
        lineCn: '打个盹吧。客户电话之前你还有二十分钟。',
        prompt: "根据上下文，选出画线词汇 'Nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep, especially during the day', cn: '小睡、打盹', correct: true, reason: '二十分钟的白天短睡，正是 nap。' },
          { key: 'B', en: 'a full night of sleep', cn: '整整一夜的睡眠', correct: false, reason: '只有二十分钟，不可能是整夜。' },
          { key: 'C', en: 'a coffee break', cn: '喝杯咖啡歇一下', correct: false, reason: '她让他睡，不是让他喝咖啡。' }
        ],
        analysis: 'nap 是白天的短暂小睡。办公室那张旧沙发，是陈默这半年唯一能睡踏实的地方。',
        wrongFeedback: '你选错了，苏晚把百叶窗拉下来一半：「我不是在跟你商量。」陈默这才把眼镜摘了。气血 -10',
        afterCorrect: '陈默睡了十七分钟，醒来时桌上多了一杯温水。他看了看表，正好赶上客户的电话。'
      },
      {
        plotDescription: '晚上九点，两个人趴在茶几上翻手机，谁也不想动。',
        line: "I am too tired to cook. Let us order in and call it a night.",
        lineCn: '我累得不想做饭了。点个外卖，今天就到这儿吧。',
        prompt: "根据上下文，选出画线词汇 'Order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have food delivered to your home', cn: '点外卖送到家里', correct: true, reason: '她不想做饭，让人把饭送上门，就是 order in。' },
          { key: 'B', en: 'to book a table at a restaurant', cn: '在餐厅订位子', correct: false, reason: '她不想出门，订位子不符合语境。' },
          { key: 'C', en: 'to pack leftovers to go', cn: '把剩菜打包带走', correct: false, reason: '家里没有剩菜，也没有店可以去。' }
        ],
        analysis: 'order in 是把饭菜叫到家里。苏晚翻着菜单，忽然问他还记不记得苏家厨房那口熬了三年的汤锅。',
        wrongFeedback: '你选错了，苏晚把手机推过来：「你自己选，别又点那家辣的。」气血 -10',
        afterCorrect: '外卖送到时下起了雨。两个人挤在小餐桌前吃一份水煮鱼，谁也没提过去的日子。'
      },
      {
        plotDescription: '周末傍晚，苏晚换上外套站在门口，手里拎着包。',
        line: "I do not want to cook on my birthday. Let us eat out for once.",
        lineCn: '生日我不想做饭。就这一次，我们下馆子吧。',
        prompt: "根据上下文，选出画线词汇 'Eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to eat at a restaurant instead of at home', cn: '下馆子、在外面餐厅吃', correct: true, reason: '生日不想做饭，去外面吃，就是 eat out。' },
          { key: 'B', en: 'to eat standing on the street', cn: '在街边站着吃', correct: false, reason: '她换好外套拎着包，是要正经吃饭。' },
          { key: 'C', en: 'to eat far too much', cn: '吃太多', correct: false, reason: 'eat out 说的是在哪里吃，不是吃多少。' }
        ],
        analysis: 'eat out 是去外面的餐厅吃饭。陈默手上还捏着刚签的文件，听见这句，把外套拿起来就走。',
        wrongFeedback: '你选错了，苏晚抱着手臂看他：「你是不是又想说省钱？」气血 -10',
        afterCorrect: '那家小馆子只有六张桌子。陈默提前订了靠窗的位置，桌上摆着一支很便宜的红玫瑰。苏晚坐下时愣了很久。'
      }
    ],
    completeText: '第 36 章结束。那顿饭吃到打烊，苏晚一直没把那支玫瑰放下。回去的路上她说：「明年别买花了，太贵。」'
  },
  {
    id: 'ml_37',
    index: 37,
    title: '第 37 章 · 水槽里堆了两天的碗',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周日早上八点，水槽里的碗堆了两天。陈默坐在沙发上盯着手机，屏幕的光照着他没睡好的脸。苏晚披着头发从卧室出来，绕开地上两个没拆的快递盒。',
    questions: [
      {
        plotDescription: '苏晚用脚尖踢了踢纸箱，把抹布扔到他腿上。',
        line: "These chores are not going to do themselves. You take the kitchen, I take the bathroom.",
        lineCn: '这些家务不会自己做完。厨房归你，卫生间归我。',
        prompt: "根据上下文，选出画线词汇 'Chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'small regular jobs around the house', cn: '家里的日常杂活、家务', correct: true, reason: '洗碗、刷卫生间，都是家里的日常活，就是 chores。' },
          { key: 'B', en: 'office paperwork', cn: '办公室的文件工作', correct: false, reason: '这里说的是厨房和卫生间，不是公司。' },
          { key: 'C', en: 'shopping lists', cn: '购物清单', correct: false, reason: '她分配的是干活，不是列清单。' }
        ],
        analysis: 'chores 是家里那些琐碎但必须做的活。陈默在苏家当了三年「废物」，从没碰过扫把。',
        wrongFeedback: '你选错了，苏晚把抹布往他怀里一塞：「你在苏家什么都不干，现在不一样了。」气血 -10',
        afterCorrect: '陈默把袖子卷到肘上，第一次认真洗完一池碗。苏晚靠在卫生间门口看着他，一直没出声。'
      },
      {
        plotDescription: '陈默点开邮箱，立刻又划走，端着水杯在屋子里绕了一圈。',
        line: "Stop procrastinating. That report was due yesterday.",
        lineCn: '别拖了。那份报告昨天就该交了。',
        prompt: "根据上下文，选出画线词汇 'Procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to keep delaying something you should do', cn: '拖延、一直往后推', correct: true, reason: '报告该交了，他还在屋里转圈，这就是在拖。' },
          { key: 'B', en: 'to finish something ahead of time', cn: '提前把事情做完', correct: false, reason: '报告已经逾期，正好相反。' },
          { key: 'C', en: 'to complain about work', cn: '抱怨工作', correct: false, reason: '他不是在抱怨，是在躲着不动手。' }
        ],
        analysis: 'procrastinate 是明明该做却一直往后推。这份报告，是他创业以来第一次不敢下笔的东西。',
        wrongFeedback: '你选错了，苏晚把他的椅子转向书桌：「你现在的对手不是赵天佑，是你自己。」气血 -10',
        afterCorrect: '陈默在书桌前坐了三个小时。报告写完时窗外已经黑了，苏晚趴在旁边睡着了，手里还捏着笔。'
      },
      {
        plotDescription: '晚上，苏晚把笔记本搬到床上，拍了拍身边的位置。',
        line: "Let us binge-watch the whole season tonight. No work, no calls.",
        lineCn: '今晚我们把这季一口气刷完。不谈工作，不接电话。',
        prompt: "根据上下文，选出画线词汇 'Binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to watch many episodes in one go', cn: '一口气连刷很多集', correct: true, reason: '把一整季连着看完，就是 binge-watch。' },
          { key: 'B', en: 'to watch a movie at the cinema', cn: '去电影院看电影', correct: false, reason: '她把电脑搬到了床上。' },
          { key: 'C', en: 'to watch something twice', cn: '把片子看两遍', correct: false, reason: '她强调的是连着刷完一整季。' }
        ],
        analysis: 'binge-watch 是连着刷很多集。这是苏晚第一次在他面前说「不接电话」——她还记得他曾经三天不回消息。',
        wrongFeedback: '你选错了，苏晚把电脑一合：「那我自己看。」陈默赶紧按住屏幕。气血 -10',
        afterCorrect: '那一季六集，他们看到凌晨一点。苏晚靠在他肩上睡着，陈默把音量调到最小，一直没关。'
      },
      {
        plotDescription: '灯关了，苏晚发现他还在被子里看手机。',
        line: "Stop scrolling. You have been on that phone for an hour.",
        lineCn: '别刷了。你抱着手机看了一个小时了。',
        prompt: "根据上下文，选出画线词汇 'Scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'to move through content on a screen', cn: '在屏幕上下滑、刷手机', correct: true, reason: '他躲在被子里一直看手机，就是 scroll。' },
          { key: 'B', en: 'to write a long message', cn: '写一条很长的消息', correct: false, reason: '她只说他在看，不是在打字。' },
          { key: 'C', en: 'to make a phone call', cn: '打电话', correct: false, reason: '他在滑屏幕，不是在通话。' }
        ],
        analysis: 'scroll 本义是「滚动」，在手机上就是不断往下滑。陈默看的是赵氏集团昨天的新闻。',
        wrongFeedback: '你选错了，苏晚把手机从他手里抽走：「明天再看。它跑不了。」气血 -10',
        afterCorrect: '陈默躺下，盯着天花板。苏晚背对着他，忽然说了一句：「赵天佑跑不了，你也别把自己熬坏。」'
      }
    ],
    completeText: '第 37 章结束。第二天早上，苏晚醒来时发现自己的手机里多了一条备忘录：明天我洗碗。'
  },
  {
    id: 'ml_38',
    index: 38,
    title: '第 38 章 · 周六下午的沙发',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '连着加了半个月的班，这个周六陈默什么也没安排。窗帘没拉开，屋子里暗得像傍晚。苏晚洗完澡出来，头发还在滴水。',
    questions: [
      {
        plotDescription: '苏晚擦着头发，看见他窝在沙发上低头滑手机。',
        line: "What are you swiping through? You look like a teenager.",
        lineCn: '你在滑什么？看着跟个高中生似的。',
        prompt: "根据上下文，选出画线词汇 'Swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'to move your finger across a touchscreen', cn: '在触屏上滑动、滑屏', correct: true, reason: '他一直低头滑屏幕，正是 swipe。' },
          { key: 'B', en: 'to turn the pages of a book', cn: '翻书页', correct: false, reason: '他手里拿的是手机，不是书。' },
          { key: 'C', en: 'to shut the phone off', cn: '把手机关机', correct: false, reason: '她问他在滑什么，手机明明是开着的。' }
        ],
        analysis: 'swipe 是在触屏上滑动。他滑的是招聘软件——默行科技的第二个员工，还没招到。',
        wrongFeedback: '你选错了，苏晚凑过来看了一眼：「招人？你连自己都照顾不好。」气血 -10',
        afterCorrect: '陈默把手机倒扣在茶几上：「走吧，今天不看了。」'
      },
      {
        plotDescription: '下午三点，苏晚端着水果从厨房出来，发现他已经躺在沙发上没了声音。',
        line: "He just crashed. Let him sleep, he has not rested in weeks.",
        lineCn: '他直接累晕过去了。让他睡吧，他好几周没好好休息了。',
        prompt: "根据上下文，选出画线词汇 'Crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'to fall asleep from deep tiredness', cn: '累到直接睡死过去', correct: true, reason: '他躺下就没了声音，是累到倒下睡着。' },
          { key: 'B', en: 'to fall off the sofa', cn: '从沙发上摔下来', correct: false, reason: '他还好好躺在沙发上。' },
          { key: 'C', en: 'to break something', cn: '把东西弄坏', correct: false, reason: '这里说的是人，不是物件。' }
        ],
        analysis: 'crash 口语里常指「累到直接倒下睡」。苏晚给他盖上毯子，把他露在外面的脚也塞了进去。',
        wrongFeedback: '你选错了，苏晚自己小声补了一句：「算了，我自己跟自己说。」气血 -10',
        afterCorrect: '陈默一觉睡到五点。醒来时屋里开着暖灯，苏晚在阳台浇花，回头看他一眼：「醒了？」'
      },
      {
        plotDescription: '傍晚，苏晚拉着他出门，说楼下新开了一家旧书店。',
        line: "Come on, let us just hang out for an hour. No plans.",
        lineCn: '走吧，我们就闲逛一个小时。不做计划。',
        prompt: "根据上下文，选出画线词汇 'Hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to spend relaxed time with someone', cn: '一起闲逛、消磨时间', correct: true, reason: '没有计划地一起待一小时，就是 hang out。' },
          { key: 'B', en: 'to hang the clothes outside', cn: '把衣服晾到外面', correct: false, reason: '她是要出门，不是晾衣服。' },
          { key: 'C', en: 'to wait for someone', cn: '等某个人', correct: false, reason: '两个人一起走，不存在等谁。' }
        ],
        analysis: 'hang out 是没有目的的一起待着。陈默的日程表精确到十分钟，他已经很久没「没有计划」过了。',
        wrongFeedback: '你选错了，苏晚自己先往楼下走：「那你留在家里跟文件过周末吧。」气血 -10',
        afterCorrect: '旧书店只有半间铺面。陈默在角落翻到一本旧英语词典，扉页上有人用钢笔写着自己的名字。'
      },
      {
        plotDescription: '晚上回到家，苏晚把鞋一脱，整个人瘫进沙发。',
        line: "Finally. Time to kick back and do absolutely nothing.",
        lineCn: '终于。可以彻底放松，什么都不干了。',
        prompt: "根据上下文，选出画线词汇 'Kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to relax and enjoy doing nothing', cn: '彻底放松、歇着', correct: true, reason: '她把鞋一脱瘫进沙发，就是 kick back。' },
          { key: 'B', en: 'to kick something with your foot', cn: '用脚踢东西', correct: false, reason: '字面拆开的意思，这里不是。' },
          { key: 'C', en: 'to go back home early', cn: '早点回家', correct: false, reason: '已经到家了。' }
        ],
        analysis: 'kick back 是彻底松弛下来。这两个字，苏晚在苏家那三年从没说过。',
        wrongFeedback: '你选错了，苏晚把抱枕砸到他身上：「你也躺下，别站着。」气血 -10',
        afterCorrect: '两个人并排躺着，谁也没说话。楼下的高架上，车灯一辆接一辆地过去。'
      }
    ],
    completeText: '第 38 章结束。那天他们什么也没做成。苏晚后来说，那是搬出来以后最像家的一个下午。'
  },
  {
    id: 'ml_39',
    index: 39,
    title: '第 39 章 · 周日晚上十点',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周日晚十点，茶几上摊着三份合同、一叠发票和一台开着的笔记本。明天上午，默行科技第一次跟供应商谈价。',
    questions: [
      {
        plotDescription: '苏晚把最后一页合同对齐，敲了敲桌面。',
        line: "Let us wrap up this part. We can finish the rest tomorrow.",
        lineCn: '这部分先收尾吧。剩下的明天再弄。',
        prompt: "根据上下文，选出画线词汇 'Wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to finish or complete something', cn: '收尾、把事情结束掉', correct: true, reason: '她要把这一部分结束掉，剩下的留到明天。' },
          { key: 'B', en: 'to wrap a gift', cn: '把礼物包起来', correct: false, reason: '桌上放的是合同，不是礼物。' },
          { key: 'C', en: 'to start a new task', cn: '开始一项新任务', correct: false, reason: '她是要结束，不是开始。' }
        ],
        analysis: 'wrap up 是把一件事收到尾声。陈默原本想通宵，被她一句话按住了。',
        wrongFeedback: '你选错了，苏晚把合同合上：「你熬到三点，明天照样出错。」气血 -10',
        afterCorrect: '他们把合同按顺序夹好。陈默写了三行谈判要点，字比平时小了一半。'
      },
      {
        plotDescription: '苏晚把一叠发票摊开，按日期分成三堆。',
        line: "Help me sort out these receipts. I cannot tell which one is which.",
        lineCn: '帮我理一下这些收据。我分不清哪张是哪张。',
        prompt: "根据上下文，选出画线词汇 'Sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to organize or resolve something', cn: '整理清楚、把问题理顺', correct: true, reason: '她把发票按日期分堆，就是在整理。' },
          { key: 'B', en: 'to throw things away', cn: '把东西扔掉', correct: false, reason: '她是在分类，不是丢弃。' },
          { key: 'C', en: 'to sort letters by name', cn: '按姓名给信件归类', correct: false, reason: '桌上没有信件，只有发票。' }
        ],
        analysis: 'sort out 既是「整理」，也是「把问题弄清楚」。这些发票背后，是默行科技的第一个月。',
        wrongFeedback: '你选错了，苏晚把发票推到他面前：「这是你的公司，不是我的。」气血 -10',
        afterCorrect: '两个人按日期排到十二点。最后一堆只有七张，加起来不到两千块。'
      },
      {
        plotDescription: '陈默看着手机里供应商的报价，眉头慢慢压下来。',
        line: "I will deal with the supplier myself tomorrow morning.",
        lineCn: '明天早上我亲自去处理供应商的事。',
        prompt: "根据上下文，选出画线词汇 'Deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'to handle or take care of a problem', cn: '处理、应对麻烦', correct: true, reason: '他要去解决供应商的问题，就是 deal with。' },
          { key: 'B', en: 'to make a business deal with someone', cn: '跟人达成一笔交易', correct: false, reason: '他说的是应付这件事，不是已经谈成。' },
          { key: 'C', en: 'to share something with someone', cn: '与人分享东西', correct: false, reason: '跟分享无关。' }
        ],
        analysis: 'deal with 是处理麻烦，不等于「做交易」。陈默要面对的不只是价格，还有对方眼里的轻视。',
        wrongFeedback: '你选错了，苏晚看着他：「你可以带我一起去。他们看不起的，不止你一个。」气血 -10',
        afterCorrect: '陈默沉默了几秒，点头：「好。明天九点，你坐我旁边。」'
      },
      {
        plotDescription: '收拾完已经十一点半，苏晚看见他还站在窗边，手一直插在口袋里。',
        line: "Chill out. You have done everything you can tonight.",
        lineCn: '放松点。今晚能做的你都做完了。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to relax and stop worrying', cn: '冷静下来、别紧绷着', correct: true, reason: '她让他别再想，就是 chill out。' },
          { key: 'B', en: 'to go outside into the cold', cn: '到外面去凉快', correct: false, reason: '她不是让他出门。' },
          { key: 'C', en: 'to force someone to calm down', cn: '强行让人冷静', correct: false, reason: '她是劝，不是强迫。' }
        ],
        analysis: 'chill out 是叫人别绷着。陈默的肩膀一直没松下来，直到她把手放在他背上。',
        wrongFeedback: '你选错了，苏晚把手收了回去：「行，你自己想。」气血 -10',
        afterCorrect: '陈默关掉台灯。黑暗里他说了一句：「明天谈完，不管成不成，我请你吃饭。」'
      }
    ],
    completeText: '第 39 章结束。那晚陈默睡了六个小时，是这一个月里最长的一觉。'
  },
  {
    id: 'ml_40',
    index: 40,
    title: '第 40 章 · 谈判前的那一夜',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '周一凌晨一点，默行科技的小办公室里还亮着灯。陈默把供应商的资料翻到第三遍，桌上摊着一包开了口的饼干，旁边是三个空咖啡杯。',
    questions: [
      {
        plotDescription: '苏晚推门进来，把一杯热牛奶放在他手边，顺手捏了块饼干。',
        line: "You skipped dinner again. At least have a snack.",
        lineCn: '你又没吃晚饭。好歹吃点零食垫垫。',
        prompt: "根据上下文，选出画线词汇 'Snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small amount of food between meals', cn: '零食、两餐之间垫一口', correct: true, reason: '晚饭没吃，用饼干垫一垫，就是 snack。' },
          { key: 'B', en: 'a full dinner', cn: '一顿正餐', correct: false, reason: '她说的是「垫一垫」，不是正经吃饭。' },
          { key: 'C', en: 'a kind of drink', cn: '一种饮料', correct: false, reason: '饼干是吃的，不是喝的。' }
        ],
        analysis: 'snack 是正餐之间的少量食物。陈默从下午到现在，只喝了三杯黑咖啡。',
        wrongFeedback: '你选错了，苏晚把饼干袋直接收走：「那就什么都别吃。」气血 -10',
        afterCorrect: '陈默吃了两块饼干，把牛奶也喝了。胃里有点热，脑子才慢慢转起来。'
      },
      {
        plotDescription: '苏晚看了一眼那三个空咖啡杯，把水杯推到他面前。',
        line: "Hydrate first. Coffee is not water.",
        lineCn: '先喝水。咖啡不算水。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to take in enough water', cn: '补充水分、喝水', correct: true, reason: '她让他先喝水，就是 hydrate。' },
          { key: 'B', en: 'to drink something sweet', cn: '喝点甜的', correct: false, reason: '她推出的是白开水。' },
          { key: 'C', en: 'to take medicine', cn: '吃药', correct: false, reason: '桌上没有药。' }
        ],
        analysis: 'hydrate 是给身体补水分。她说的不是养生，是怕他在谈判桌上手抖。',
        wrongFeedback: '你选错了，苏晚把水杯往他嘴边递了递：「喝。」气血 -10',
        afterCorrect: '陈默喝完了一整杯。苏晚又倒满，放在他伸手就能碰到的地方。'
      },
      {
        plotDescription: '凌晨两点，陈默站起来，活动了一下僵住的脖子。',
        line: "Stand up and stretch. Your back is going to lock up.",
        lineCn: '站起来拉伸一下。你的背要僵住了。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to extend your body to relax muscles', cn: '拉伸、舒展身体', correct: true, reason: '他活动僵住的脖子，就是在 stretch。' },
          { key: 'B', en: 'to walk around the block', cn: '出去绕一圈', correct: false, reason: '她让他站起来动一动，不是出门。' },
          { key: 'C', en: 'to make something longer', cn: '把东西拉长', correct: false, reason: '这里说的是身体，不是物件。' }
        ],
        analysis: 'stretch 是舒展身体。这个动作，是他当赘婿那三年每天在厨房里偷偷做的。',
        wrongFeedback: '你选错了，苏晚把他的椅子往后拉：「站起来。就一分钟。」气血 -10',
        afterCorrect: '两个人在小办公室里伸了个懒腰。苏晚忽然笑出声：「像两只老猫。」'
      },
      {
        plotDescription: '陈默盯着资料第三页，眼神慢慢空了，笔停在半空。',
        line: "Hey. You zoned out again. Read that line to me.",
        lineCn: '嘿。你又走神了。把那行念给我听。',
        prompt: "根据上下文，选出画线词汇 'Zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stop paying attention and stare blankly', cn: '走神、发呆', correct: true, reason: '他眼神空了、笔停在半空，就是走神。' },
          { key: 'B', en: 'to fall into a deep sleep', cn: '陷入深度睡眠', correct: false, reason: '他还坐着，眼睛是睁着的。' },
          { key: 'C', en: 'to leave the room', cn: '离开房间', correct: false, reason: '他一直没动。' }
        ],
        analysis: 'zone out 是注意力飘走、眼神发直。他不是不认真，是连续二十天没睡够。',
        wrongFeedback: '你选错了，苏晚把资料抽走：「去洗把脸。回来我陪你过一遍。」气血 -10',
        afterCorrect: '陈默在洗手间用冷水冲了脸。镜子里的人眼下发青，但眼神回来了。'
      }
    ],
    completeText: '第 40 章结束。第二天上午九点，陈默推开会议室的门。供应商看了他身边坐着的苏晚一眼，笑容僵了一下。'
  },
  {
    id: 'ml_41',
    index: 41,
    title: '第 41 章 · 账户里剩下的四位数',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '把天枢的股份全部交回陈家那天，陈默只在协议上签了字，什么也没带走。默行科技的办公室从写字楼搬进旧厂房改造的园区，三张桌子，一台二手打印机。月底，房东站在门口翻收据本。',
    questions: [
      {
        plotDescription: '苏晚把手机递过来，屏幕上是银行卡余额，四位数。',
        line: "We are officially broke. That number is not going to cover rent.",
        lineCn: '我们正式身无分文了。这个数连房租都不够。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money at all', cn: '身无分文、一分钱没有', correct: true, reason: '余额只剩四位数，连房租都不够，正是 broke。' },
          { key: 'B', en: 'broken — physically damaged', cn: '坏掉了、破损的', correct: false, reason: 'broke 和 broken 长得像，但这里说的是没钱，不是东西坏了。' },
          { key: 'C', en: 'declared bankrupt by a court', cn: '被法院宣告破产', correct: false, reason: '他们只是没钱，还没到法律破产那一步。' }
        ],
        analysis: 'broke 是口语里的「没钱了」。它不是 broken「坏了」，也不等于法律意义上的破产。',
        wrongFeedback: '你选错了，苏晚把手机收回去：「我没在开玩笑。」陈默这才抬起头。气血 -10',
        afterCorrect: '陈默看了三秒屏幕，打开电脑：「先算一遍，能撑几周。」'
      },
      {
        plotDescription: '房东站在门口，收据本捏在手里，眼睛在屋里扫了一圈。',
        line: "Rent is due on Friday. I am not running a charity here.",
        lineCn: '房租周五到期。我这儿不是做慈善的。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you pay regularly to use a place', cn: '房租、租金', correct: true, reason: '房东上门要的是这间办公室的租金。' },
          { key: 'B', en: 'a loan from a bank', cn: '向银行借的贷款', correct: false, reason: '收租的是房东，不是银行。' },
          { key: 'C', en: 'the price of buying the apartment', cn: '买下这套房子的价钱', correct: false, reason: '他们是租的，不是买。' }
        ],
        analysis: 'rent 是按期付的租金。陈默每个月的第一天都会先算这一笔，这次算不出来。',
        wrongFeedback: '你选错了，房东把本子一合：「周五，别让我再来一趟。」气血 -10',
        afterCorrect: '门关上后，陈默把日历翻到周五，用红笔圈了一圈。'
      },
      {
        plotDescription: '晚上，苏晚把一张纸摊在桌上，左边写收入，右边写支出。',
        line: "We need a budget. Every yuan gets a name.",
        lineCn: '我们得做个预算。每一块钱都要有去处。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a plan for how to spend your money', cn: '预算、用钱计划', correct: true, reason: '她在纸上列收入支出，就是在做预算。' },
          { key: 'B', en: 'a list of people you owe money to', cn: '欠钱名单', correct: false, reason: '纸上写的是收支，不是债主。' },
          { key: 'C', en: 'a bank statement', cn: '银行流水单', correct: false, reason: '这是她手写的计划表，不是银行出的。' }
        ],
        analysis: 'budget 是提前安排好钱怎么花。那张纸最后只剩两行：房租、工资。',
        wrongFeedback: '你选错了，苏晚把笔塞给他：「你也写。别全让我一个人算。」气血 -10',
        afterCorrect: '「咖啡」那一栏，苏晚画了个叉。陈默看着那个叉，没说话。'
      },
      {
        plotDescription: '苏晚在商场橱窗前站了很久，最后把手从玻璃上收了回来。',
        line: "I almost splurged on that dress. Then I remembered the rent.",
        lineCn: '我差点就为那条裙子挥霍一次。然后我想起了房租。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'to spend a lot of money on something you want', cn: '挥霍、忍不住大手大脚买', correct: true, reason: '她差点买下那条很贵的裙子，就是 splurge。' },
          { key: 'B', en: 'to save money very carefully', cn: '精打细算地省钱', correct: false, reason: '她差点花钱，不是省钱。' },
          { key: 'C', en: 'to return something to the store', cn: '把东西退回店里', correct: false, reason: '她没买，谈不上退。' }
        ],
        analysis: 'splurge 是明知不该花，还是为喜欢的东西花了一大笔。她在橱窗前站了五分钟，陈默一直在对面看着。',
        wrongFeedback: '你选错了，苏晚笑了一下：「你紧张什么，我又没买。」气血 -10',
        afterCorrect: '陈默走过去牵住她的手：「等这个月过去，我买给你。」苏晚说：「不用。我自己买。」'
      }
    ],
    completeText: '第 41 章结束。周五那天，房租一分不少地转了过去。陈默在转账备注里只写了两个字：谢谢。'
  },
  {
    id: 'ml_42',
    index: 42,
    title: '第 42 章 · 报价单上的那一行',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '新办公室要隔出一间会议室。韩野找来一支装修队，报价八万，工期十天。到第三天，工地上只来了两个人，刷了一半的墙停在那里。',
    questions: [
      {
        plotDescription: '韩野把报价单拍在桌上，指着中间那一行。',
        line: "Twenty thousand for paint? That is a total rip-off.",
        lineCn: '刷个漆要两万？这完全是坑钱。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'something that costs far more than it is worth', cn: '坑钱货、宰人的价格', correct: true, reason: '刷漆报两万，远高于正常价，就是 rip-off。' },
          { key: 'B', en: 'a surprisingly good bargain', cn: '意外划算的好价', correct: false, reason: '韩野是在骂贵，不是在夸便宜。' },
          { key: 'C', en: 'a written receipt', cn: '一张收据', correct: false, reason: '他指的是价格，不是单据。' }
        ],
        analysis: 'rip-off 是「被宰了、不值这个价」。韩野当场把施工头叫了过来。',
        wrongFeedback: '你选错了，韩野把报价单揉成一团，又慢慢展开。气血 -10',
        afterCorrect: '装修队退了四万，剩下的活干到一半就撤了。韩野自己拎起油漆桶上了梯子。'
      },
      {
        plotDescription: '韩野带来一个自称做投资的朋友，那人一坐下就点外卖，还问能不能免费用办公室。',
        line: "He has been a freeloader since college. He never pays for anything.",
        lineCn: '他大学起就是个白嫖怪。什么钱都不出。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who takes things without paying', cn: '白嫖怪、白吃白拿的人', correct: true, reason: '免费蹭办公室还点外卖不付钱，正是 freeloader。' },
          { key: 'B', en: 'a freelance worker', cn: '自由职业者', correct: false, reason: 'freeloader 和 freelance 长得像，意思完全不同。' },
          { key: 'C', en: 'a generous investor', cn: '出手大方的投资人', correct: false, reason: '他一分钱都没出，和「大方」正好相反。' }
        ],
        analysis: 'freeloader 是白吃白拿、专占便宜的人。韩野说完，自己也觉得脸上发烫。',
        wrongFeedback: '你选错了，那人还在翻外卖软件，问要不要加两个菜。气血 -10',
        afterCorrect: '陈默把那人请出了办公室。韩野追到楼下，回来时耳朵是红的。'
      },
      {
        plotDescription: '一周后，那人发来一份投资意向书，最后一行写着：先交五万保证金。',
        line: "This is a scam. Real investors never ask you to pay first.",
        lineCn: '这是骗局。真正的投资人从不让你先交钱。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a dishonest plan to take your money', cn: '骗局、诈骗', correct: true, reason: '先交保证金才给投资，是典型骗钱套路。' },
          { key: 'B', en: 'a very strict contract', cn: '一份很严格的合同', correct: false, reason: '问题不在严格，而在于要你先掏钱。' },
          { key: 'C', en: 'a government subsidy', cn: '政府补贴', correct: false, reason: '补贴是给钱，不是收钱。' }
        ],
        analysis: 'scam 是骗钱的手段。陈默把那份意向书打印出来，贴在了办公室的墙上。',
        wrongFeedback: '你选错了，韩野低声说：「我打给他。」陈默按住他的手。气血 -10',
        afterCorrect: '韩野在那张纸前面站了十分钟，最后说了一句：「我欠你一次。」'
      },
      {
        plotDescription: '月底，供应商的催款单第三次寄到办公室，纸角已经被翻得起了毛。',
        line: "We still owe them forty thousand. Debt does not wait for a good mood.",
        lineCn: '我们还欠他们四万。债务不会等你心情好。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money that you owe to someone', cn: '债务、欠款', correct: true, reason: '还欠供应商四万，这就是 debt。' },
          { key: 'B', en: 'a discount you get from a supplier', cn: '供应商给的折扣', correct: false, reason: '催款单是要钱，不是优惠。' },
          { key: 'C', en: 'a bonus you receive at work', cn: '工作拿到的奖金', correct: false, reason: '他们不但没有进账，还欠着钱。' }
        ],
        analysis: 'debt 是欠别人的钱。陈默在还款计划表上写下第一笔日期，手很稳。',
        wrongFeedback: '你选错了，苏晚把催款单收走：「我来算，你别看了。」气血 -10',
        afterCorrect: '他把手表摘下来放在桌上：「下周先还两万。剩下的我来想办法。」'
      }
    ],
    completeText: '第 42 章结束。那两万还上以后，催款单没有再寄来。墙上那张假意向书，一直贴到办公室搬走。'
  },
  {
    id: 'ml_43',
    index: 43,
    title: '第 43 章 · 第一笔回款',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第一笔回款到账是在一个下雨的下午，十二万七。陈默盯着银行短信看了很久，办公室里谁都没有说话，只听见雨打在铁皮棚顶上。',
    questions: [
      {
        plotDescription: '韩野把工资表打印出来，一张一张发到每个人手上。',
        line: "First paycheck in three months. I almost forgot what this feels like.",
        lineCn: '三个月来第一笔薪水。我差点忘了这是什么感觉。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you receive for your work', cn: '薪水、工资', correct: true, reason: '三个月没发工资，现在发的是工作报酬，就是 paycheck。' },
          { key: 'B', en: 'a bill you have to pay', cn: '需要付的账单', correct: false, reason: '这是发出去的钱，不是收账单。' },
          { key: 'C', en: 'a tax form', cn: '一张税务表格', correct: false, reason: '手里拿的是现金和工资条，不是表格。' }
        ],
        analysis: 'paycheck 是工作换来的报酬。三个人的工资加起来，正好花掉回款的一半。',
        wrongFeedback: '你选错了，韩野把工资条收回去：「那我先替你保管。」气血 -10',
        afterCorrect: '韩野把那张纸折好，放进上衣口袋，拍了拍，什么也没说。'
      },
      {
        plotDescription: '苏晚把一叠单子摊在桌上：水电、物业、宽带，还有办公室的网费。',
        line: "Pay the bills first. Everything else can wait.",
        lineCn: '先付账单。其他都能等。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you must pay for services you use', cn: '账单、各项应付费用', correct: true, reason: '水电物业网络，都是到期要付的账单。' },
          { key: 'B', en: 'paper money in your pocket', cn: '口袋里的纸币', correct: false, reason: '那是 cash，不是 bills 在这里的意思。' },
          { key: 'C', en: 'small advertisements', cn: '小广告传单', correct: false, reason: '桌上的单子是要付钱的，不是广告。' }
        ],
        analysis: 'bills 是要按期支付的费用单。苏晚把每一张都按到期日排好，最上面那张是水电。',
        wrongFeedback: '你选错了，苏晚把单子按日期重排了一遍：「顺序不能错。」气血 -10',
        afterCorrect: '七张账单付完，回款只剩下四万三。她在那张纸的右下角写了个小数。'
      },
      {
        plotDescription: '装修队只收现钞，韩野从银行取了一沓回来。',
        line: "They only take cash. No transfer, no card.",
        lineCn: '他们只收现金。不转账，不刷卡。',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'money in coins or notes', cn: '现金、现钞', correct: true, reason: '韩野从银行取回来的一沓纸币，就是 cash。' },
          { key: 'B', en: 'money sitting in a bank account', cn: '银行账户里的钱', correct: false, reason: '对方明确说不转账，要的是现钞。' },
          { key: 'C', en: 'a credit card', cn: '信用卡', correct: false, reason: '他取的是纸币，不是卡。' }
        ],
        analysis: 'cash 是实实在在的钞票。韩野把那一沓钱摊在桌上，数了三遍。',
        wrongFeedback: '你选错了，韩野把钱重新扎好：「数错了要出事的。」气血 -10',
        afterCorrect: '钱递出去的时候，他的手停了半秒，还是递了过去。'
      },
      {
        plotDescription: '回款不够发下个月工资，陈默在银行坐了一个下午，出来时天已经黑了。',
        line: "The bank approved a small loan. Enough for two months.",
        lineCn: '银行批了一笔小额贷款。够撑两个月。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you borrow and must pay back', cn: '贷款、借款', correct: true, reason: '向银行借、以后要还的钱，就是 loan。' },
          { key: 'B', en: 'money the bank gives you for free', cn: '银行白给的钱', correct: false, reason: '贷款是要还本付息的，不是白给。' },
          { key: 'C', en: 'a fine you must pay', cn: '必须缴的罚款', correct: false, reason: '这是主动借来的资金，不是罚款。' }
        ],
        analysis: 'loan 是借来的、要还的钱。签字之前，陈默把利率看了三遍。',
        wrongFeedback: '你选错了，柜员把合同又推回来：「先生，这里还要签一个名。」气血 -10',
        afterCorrect: '走出银行，他给苏晚发消息：够了。她回了两个字：回家。'
      }
    ],
    completeText: '第 43 章结束。那晚苏晚煮了两碗面，卧了两个蛋。她说：「等公司赚了钱，我要吃一次很贵的日料。」'
  },
  {
    id: 'ml_44',
    index: 44,
    title: '第 44 章 · 旧货市场拉回来的桌子',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '为了省下装修钱，办公室的桌子是从旧货市场拉回来的。苏晚蹲在地上擦桌面，袖口沾了一层灰。韩野站在旁边，拍着那张掉漆的桌子。',
    questions: [
      {
        plotDescription: '韩野一掌拍在桌面上，桌子晃了一下，没倒。',
        line: "Three tables for six hundred. Cheap and solid.",
        lineCn: '三张桌子六百块。便宜还结实。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'costing little money', cn: '便宜的、花不了多少钱', correct: true, reason: '三张桌子六百块，价格很低，就是 cheap。' },
          { key: 'B', en: 'badly made and useless', cn: '做工差又没法用', correct: false, reason: '他后面还补了「结实」，说明能用。' },
          { key: 'C', en: 'extremely expensive', cn: '贵得离谱', correct: false, reason: '六百块三张，明显是便宜。' }
        ],
        analysis: 'cheap 首先指「价格低」。它也能说人「抠门」，但这里说的是桌子。',
        wrongFeedback: '你选错了，韩野把桌子又拍了一下：「你看，一点事没有。」气血 -10',
        afterCorrect: '陈默把电脑放上去，试了试，桌子没有晃。'
      },
      {
        plotDescription: '苏晚站在一台新打印机前面看了很久，最后把手收了回来。',
        line: "We cannot afford it yet. Give me one more month.",
        lineCn: '现在还买不起。再给我一个月。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have enough money for something', cn: '负担得起、钱够买', correct: true, reason: '她说的是钱还没到那个数，就是 afford 的问题。' },
          { key: 'B', en: 'to refuse to buy something', cn: '拒绝购买', correct: false, reason: '她不是不想要，是钱不够。' },
          { key: 'C', en: 'to borrow something from someone', cn: '向别人借东西', correct: false, reason: '这台打印机他们没有借，是想买。' }
        ],
        analysis: 'afford 是「钱够不够」。陈默说的是钱，不是不想要。',
        wrongFeedback: '你选错了，苏晚把手机收起来：「一个月，我记着了。」气血 -10',
        afterCorrect: '她把打印机的型号记在手机备忘录里，后面标了一个日期。'
      },
      {
        plotDescription: '韩野花三百块买了一把人体工学椅，坐上去转了一圈。',
        line: "Three hundred for this chair? Totally worth it.",
        lineCn: '这椅子三百块？太值了。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough to justify the money', cn: '值了、这个钱花得不亏', correct: true, reason: '他坐上去很满意，觉得三百块不亏，就是 worth it。' },
          { key: 'B', en: 'a total waste of money', cn: '完全浪费钱', correct: false, reason: '他的语气是满意，不是后悔。' },
          { key: 'C', en: 'too expensive to buy', cn: '贵得买不起', correct: false, reason: '他已经买下来了。' }
        ],
        analysis: 'worth it 是「花这个钱不亏」。韩野以前在工地上站十二个小时，腰一直不好。',
        wrongFeedback: '你选错了，韩野从椅子上站起来：「你不懂，这腰值三百。」气血 -10',
        afterCorrect: '陈默看了那把椅子一眼。第二天，他给苏晚也买了一把。'
      },
      {
        plotDescription: '晚上回家，苏晚打开电脑，接了一个品牌文案的私活。',
        line: "I started a side hustle. It pays more than my old salary.",
        lineCn: '我搞了个副业。赚得比我以前的工资还多。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra work you do besides your main job', cn: '副业、主业之外的额外活儿', correct: true, reason: '她下班后接文案私活，就是 side hustle。' },
          { key: 'B', en: 'a hobby that costs a lot of money', cn: '花钱很多的爱好', correct: false, reason: '她是在赚钱，不是在花钱。' },
          { key: 'C', en: 'a second full-time job', cn: '第二份全职工作', correct: false, reason: '这是下班后接的活，不是全职。' }
        ],
        analysis: 'side hustle 是主业之外的额外收入。她曾经是苏氏集团的总裁，现在在给别人的品牌写文案。',
        wrongFeedback: '你选错了，苏晚头也没抬：「别站着看，去把碗洗了。」气血 -10',
        afterCorrect: '陈默站在门口看了一会儿，把她的杯子续满了热水。'
      }
    ],
    completeText: '第 44 章结束。那个月苏晚的副业赚了九千。她把钱转进公司账户，备注写着：投资方。'
  },
  {
    id: 'ml_45',
    index: 45,
    title: '第 45 章 · 余额三百二十七',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二个月底，默行科技的账户余额是三百二十七块。离发工资还有五天。新来的实习生站在他桌前，手指绞着衣角。',
    questions: [
      {
        plotDescription: '实习生小声问他，试用期的工资能不能再高一点。',
        line: "I used to work for minimum wage. I know exactly what that number means.",
        lineCn: '我以前拿过最低工资。我很清楚这个数意味着什么。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest pay allowed by law', cn: '最低工资、法定最低报酬', correct: true, reason: '他说自己曾经拿的是法律允许的最低那档工资。' },
          { key: 'B', en: 'a very high salary', cn: '非常高的薪水', correct: false, reason: 'minimum 是「最低」，不是最高。' },
          { key: 'C', en: 'unpaid training', cn: '没有报酬的培训', correct: false, reason: 'wage 就是工资，不是白干。' }
        ],
        analysis: 'minimum wage 是法律允许的最低报酬。陈默被赶出陈家那年端过盘子，一天八十。',
        wrongFeedback: '你选错了，实习生低下头：「那我再看看别的机会。」气血 -10',
        afterCorrect: '陈默给他加了五百，然后在自己的工资栏里划掉了一半。'
      },
      {
        plotDescription: '银行短信弹出来：余额不足，已发生透支。',
        line: "The account went into overdraft. We spent money we did not have.",
        lineCn: '账户透支了。我们花了本来没有的钱。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'spending more than your account holds', cn: '透支、账户支出超过余额', correct: true, reason: '余额不足还发生了支出，就是 overdraft。' },
          { key: 'B', en: 'a large deposit into the account', cn: '往账户里存入一大笔钱', correct: false, reason: '短信说的是余额不足，不是进账。' },
          { key: 'C', en: 'a transfer to another account', cn: '向另一个账户转账', correct: false, reason: '这里说的是花超了，不是转账。' }
        ],
        analysis: 'overdraft 是花超了账户里的钱。这条短信来的时候，苏晚正在厨房煮面。',
        wrongFeedback: '你选错了，苏晚把手机拿过去看了一眼，又放回桌上。气血 -10',
        afterCorrect: '她把面端出来，看了他一眼，什么也没问。'
      },
      {
        plotDescription: '韩野把一张存单拍在桌上，上面写着三万。',
        line: "I saved up for a year. Take it, pay the wages.",
        lineCn: '我存了一年。拿去，发工资。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to keep money for a future use', cn: '攒钱、一点点存下来', correct: true, reason: '这三万是他一年攒下来的，就是 save up。' },
          { key: 'B', en: 'to spend money very quickly', cn: '很快把钱花掉', correct: false, reason: '他说的是存了一年，不是花。' },
          { key: 'C', en: 'to lend money to a bank', cn: '把钱借给银行', correct: false, reason: '他把钱拿出来给公司，不是存进银行。' }
        ],
        analysis: 'save up 是一点一点攒。韩野这一年没买过一件新衣服。',
        wrongFeedback: '你选错了，韩野把存单按住：「你别跟我客气。」气血 -10',
        afterCorrect: '陈默没有马上接。韩野把存单又往前推了推：「兄弟法则，记得吗？」'
      },
      {
        plotDescription: '一周后，一个做硬件的老板约他喝咖啡，说想投默行科技。',
        line: "I want to invest in you, not in the product.",
        lineCn: '我想投的是你这个人，不是这个产品。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'to put money into something to make a profit', cn: '投资、投钱进去期待回报', correct: true, reason: '他要往公司里投钱，就是 invest。' },
          { key: 'B', en: 'to borrow money from someone', cn: '向别人借钱', correct: false, reason: '投资是给钱，借钱是拿钱，方向相反。' },
          { key: 'C', en: 'to sell a company', cn: '把公司卖掉', correct: false, reason: '他要投钱进来，不是买走。' }
        ],
        analysis: 'invest 是把钱投进去，期待以后有回报。那位老板说完，陈默没有立刻回答。',
        wrongFeedback: '你选错了，老板把咖啡杯放下：「你可以慢慢想。」气血 -10',
        afterCorrect: '陈默问了一句：「如果三年不赚钱呢？」对方笑了：「那我就再等三年。」'
      }
    ],
    completeText: '第 45 章结束。那笔钱到账的那天，陈默在办公室门口站了一会儿，才推门进去。'
  },
  {
    id: 'ml_46',
    index: 46,
    title: '第 46 章 · 一叠薄薄的票据',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第一年结束，会计抱来一摞票据。默行科技第一次要做完整的账，第一次要交税。苏晚把台灯往桌边挪了挪，两个人在灯下坐到半夜。',
    questions: [
      {
        plotDescription: '会计把一份表推过来，指着最后一栏。',
        line: "This is the tax you owe for last quarter. It is not optional.",
        lineCn: '这是你们上季度该交的税。这不是可选项。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you must pay to the government', cn: '税、必须交给政府的钱', correct: true, reason: '表格最后一栏是上季度应缴的税款，就是 tax。' },
          { key: 'B', en: 'a tip for good service', cn: '给好服务的小费', correct: false, reason: '小费是自愿给的，不是交给政府的。' },
          { key: 'C', en: 'a discount on a purchase', cn: '购物折扣', correct: false, reason: '这是要交出去的钱，不是折扣。' }
        ],
        analysis: 'tax 是依法要缴给政府的钱。陈默看了一眼数字，把它记在了本子上。',
        wrongFeedback: '你选错了，会计把笔递过来：「这里签个字。」气血 -10',
        afterCorrect: '签完字，陈默把那张表夹进文件夹，放在最上面一格。'
      },
      {
        plotDescription: '两个月后，会计打来电话，说多缴的那部分批下来了。',
        line: "Good news. The refund came through this morning.",
        lineCn: '好消息。退款今天上午到账了。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid back to you', cn: '退款、退回的钱', correct: true, reason: '多缴的部分被退回，就是 refund。' },
          { key: 'B', en: 'an extra charge you must pay', cn: '需要额外支付的费用', correct: false, reason: '方向相反，这是退回来的钱。' },
          { key: 'C', en: 'a fine for paying late', cn: '迟缴的罚款', correct: false, reason: '电话里说的是好消息，不是罚款。' }
        ],
        analysis: 'refund 是把多收的钱退回来。那笔钱不多，但刚好够买一台新的打印机。',
        wrongFeedback: '你选错了，会计在电话那头停了一下：「您还在听吗？」气血 -10',
        afterCorrect: '陈默挂了电话，对苏晚说：「打印机能买了。」苏晚从椅子上站起来。'
      },
      {
        plotDescription: '买完打印机，店员问他要不要小票。',
        line: "Keep the receipt. We need it for the books.",
        lineCn: '把收据留着。做账要用。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a piece of paper proving you paid', cn: '收据、付款凭证', correct: true, reason: '买东西后店员给小票，就是 receipt，做账要留。' },
          { key: 'B', en: 'a recipe for cooking', cn: '做菜的食谱', correct: false, reason: 'receipt 和 recipe 长得像，这里不是菜谱。' },
          { key: 'C', en: 'a warranty card', cn: '保修卡', correct: false, reason: '店员给的是付款凭证。' }
        ],
        analysis: 'receipt 是证明你付过钱的单据。苏晚把它折好，放进一个专门的铁盒里。',
        wrongFeedback: '你选错了，店员又把小票递了一遍：「给您。」气血 -10',
        afterCorrect: '那个铁盒里现在有三十七张收据，是默行科技的一整年。'
      },
      {
        plotDescription: '加班到晚上十点，外卖送到，陈默从钱包里多拿了一张纸币。',
        line: "Here is a tip. Sorry we made you come up six floors.",
        lineCn: '这是小费。抱歉让你爬了六层楼。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money you give for good service', cn: '小费、给服务人员的额外钱', correct: true, reason: '他多给的这张纸币，是给送餐员的小费。' },
          { key: 'B', en: 'a piece of advice', cn: '一条建议', correct: false, reason: 'tip 也有建议的意思，但这里给的是钱。' },
          { key: 'C', en: 'the total price of the meal', cn: '这顿饭的总价', correct: false, reason: '饭钱已经付过了，这是额外的。' }
        ],
        analysis: 'tip 在这里是给服务人员的额外钱。送餐员愣了一下，说了声谢谢，转身下楼。',
        wrongFeedback: '你选错了，送餐员摆摆手：「不用不用。」陈默把钱塞进他手里。气血 -10',
        afterCorrect: '门关上后，苏晚说：「你以前连一块钱都要算。」陈默说：「以前没人给我送过饭。」'
      }
    ],
    completeText: '第 46 章结束。那年年底，默行科技第一次没有欠款。陈默把那本账合上，长长地出了一口气。'
  },
  {
    id: 'ml_47',
    index: 47,
    title: '第 47 章 · 三十七个人的公司',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '第二年春天，默行科技从三张桌子变成三十七个人。陈默的办公室搬到了走廊尽头，门口贴着一张还在往上加名字的员工表。',
    questions: [
      {
        plotDescription: '人事把一份简历放在他桌上，说这个人下周就能来。',
        line: "Let us hire him. He is the best engineer we have seen this year.",
        lineCn: '就雇他吧。他是我们今年见过最好的工程师。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to give someone a job', cn: '雇用、招进来工作', correct: true, reason: '人事推荐这个人入职，就是 hire。' },
          { key: 'B', en: 'to dismiss someone from a job', cn: '把人辞退', correct: false, reason: '方向相反，这是招人不是开人。' },
          { key: 'C', en: 'to rent an office', cn: '租一间办公室', correct: false, reason: '这里说的是招人，不是租房子。' }
        ],
        analysis: 'hire 是雇人。陈默在简历上写了一个「见」，然后补了一句：工资按他开的给。',
        wrongFeedback: '你选错了，人事愣了一下：「您不再看看别人？」气血 -10',
        afterCorrect: '那个人入职那天，把自己的工位擦了三遍。'
      },
      {
        plotDescription: '一个月后，采购的账对不上，陈默把那个小伙子叫进了办公室。',
        line: "You took money from the supplier. I have to fire you.",
        lineCn: '你收了供应商的钱。我必须开除你。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to dismiss someone from their job', cn: '解雇、开除', correct: true, reason: '他收了回扣，陈默要把他辞掉，就是 fire。' },
          { key: 'B', en: 'to light something on fire', cn: '点火烧东西', correct: false, reason: 'fire 本义是火，但这里说的是开除人。' },
          { key: 'C', en: 'to give someone a warning', cn: '给某人一个警告', correct: false, reason: '他说的是「必须」，已经是决定，不只是警告。' }
        ],
        analysis: 'fire 在这里是「开除」。小伙子低着头，一句话也没说。',
        wrongFeedback: '你选错了，小伙子抬起头：「陈总，我家里……」陈默打断了他：「账对不上的时候，你怎么不想家里。」气血 -10',
        afterCorrect: '人走的那天，陈默让财务把他的工资结到了月底，一分没少。'
      },
      {
        plotDescription: '同一周，带了两年项目的老员工递上一封信。',
        line: "I am going to quit. My father is sick and I have to go home.",
        lineCn: '我要辞职。我爸病了，我得回老家。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'to leave your job voluntarily', cn: '辞职、主动离开工作', correct: true, reason: '他自己递信要走，是主动离职，就是 quit。' },
          { key: 'B', en: 'to be dismissed by the company', cn: '被公司辞退', correct: false, reason: '他是自己提的，不是被开除。' },
          { key: 'C', en: 'to take a short holiday', cn: '请一个短假', correct: false, reason: '他递的是辞职信，不是请假单。' }
        ],
        analysis: 'quit 是自己主动辞职。陈默看完信，问了一句：「回去的车票买了吗？」',
        wrongFeedback: '你选错了，老员工把信又往前推了推：「陈总，我想好了。」气血 -10',
        afterCorrect: '陈默批了，另外给他多发了三个月工资，说是「项目奖金」。'
      },
      {
        plotDescription: '月底的会上，陈默把一份任命书放在韩野面前。',
        line: "Congratulations. This promotion makes you head of operations.",
        lineCn: '恭喜。这次升职，你就是运营负责人了。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a move to a higher position at work', cn: '升职、职位提升', correct: true, reason: '任命书把他提到了更高的位置，就是 promotion。' },
          { key: 'B', en: 'a discount on a product', cn: '产品的促销折扣', correct: false, reason: 'promotion 也有促销的意思，但这里说的是职位。' },
          { key: 'C', en: 'a warning about poor work', cn: '对工作不佳的警告', correct: false, reason: '这是任命书，不是警告。' }
        ],
        analysis: 'promotion 是升职。韩野拿着那张纸，看了很久，最后只说了一句：「我尽力。」',
        wrongFeedback: '你选错了，韩野把任命书放下：「你是不是搞错了？」气血 -10',
        afterCorrect: '散会后，韩野一个人在楼道里站了十分钟，给家里打了个电话。'
      }
    ],
    completeText: '第 47 章结束。那天晚上，员工表上又多了三个名字。陈默站在走廊尽头看了一会儿，把灯关了。'
  },
  {
    id: 'ml_48',
    index: 48,
    title: '第 48 章 · 十八天',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '公司接到成立以来最大的一次竞标邀请，对方是华东最大的连锁商场。方案要在十八天内交上去，晚一天就作废。',
    questions: [
      {
        plotDescription: '晚上十一点，办公区只剩下一半的灯还亮着，苏晚抱着一摞资料走过来。',
        line: "Everyone is on overtime tonight. I ordered dinner for all of us.",
        lineCn: '今晚所有人加班。我给大家订了饭。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra hours worked beyond normal hours', cn: '加班、超出正常工时', correct: true, reason: '晚上十一点还在干活，就是加班，overtime。' },
          { key: 'B', en: 'time spent travelling for work', cn: '出差的路上时间', correct: false, reason: '他们都在办公区，不是在路上。' },
          { key: 'C', en: 'a break during working hours', cn: '工作期间的休息', correct: false, reason: '这是接着干，不是休息。' }
        ],
        analysis: 'overtime 是超出正常工时的加班。这是默行科技第一次全公司一起熬。',
        wrongFeedback: '你选错了，苏晚把资料放下：「你再说一遍不加，我就自己干。」气血 -10',
        afterCorrect: '外卖到的时候，三十七个人挤在会议室里吃。有人笑，有人靠墙睡着了。'
      },
      {
        plotDescription: '白板上写着倒计时，韩野拿笔把数字划掉，改成十七。',
        line: "The deadline is next Friday. We cannot miss it.",
        lineCn: '死线是下周五。我们不能错过。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the final time by which something must be done', cn: '截止时间、死线', correct: true, reason: '下周五是方案必须交的最后期限，就是 deadline。' },
          { key: 'B', en: 'the start of a new project', cn: '新项目的开始', correct: false, reason: '这是终点，不是起点。' },
          { key: 'C', en: 'a line on a map', cn: '地图上的一条线', correct: false, reason: '字面拆开是这个意思，但这里指时间期限。' }
        ],
        analysis: 'deadline 是必须完成的最后期限。白板上那个数字，每天都要划掉一个。',
        wrongFeedback: '你选错了，韩野把笔一扔：「你别不当回事。」气血 -10',
        afterCorrect: '陈默在白板底下加了一行小字：还差十一版。'
      },
      {
        plotDescription: '第三天，商场那边的负责人打来电话，语气很客气，也很硬。',
        line: "Our client wants the whole plan in Chinese and English.",
        lineCn: '我们的客户要整份方案中英文都有。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person or company that pays for your service', cn: '客户、出钱买你服务的一方', correct: true, reason: '商场那边是出钱买方案的甲方，就是 client。' },
          { key: 'B', en: 'a competitor in the same market', cn: '同市场的竞争对手', correct: false, reason: '对方是甲方，不是对手。' },
          { key: 'C', en: 'an employee of your company', cn: '自己公司的员工', correct: false, reason: '打电话的是外部合作方。' }
        ],
        analysis: 'client 是付钱买你服务的客户。陈默把电话放下，转身在白板上又写了一行英文字。',
        wrongFeedback: '你选错了，苏晚在旁边小声说：「翻译我来。」气血 -10',
        afterCorrect: '那一晚，她和陈默一人一半，把四十六页方案翻成了英文。'
      },
      {
        plotDescription: '第五天早上九点，会议室里坐了十二个人，投影仪刚打开。',
        line: "This meeting decides whether we get the project.",
        lineCn: '这场会议决定我们能不能拿到这个项目。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'an organised gathering to discuss something', cn: '会议、为讨论而聚在一起', correct: true, reason: '十二个人坐在会议室讨论方案，就是 meeting。' },
          { key: 'B', en: 'a casual chat between friends', cn: '朋友之间的闲聊', correct: false, reason: '这是正式的会，不是闲聊。' },
          { key: 'C', en: 'a sports competition', cn: '体育比赛', correct: false, reason: 'meeting 也有运动会的意思，但这里是开会。' }
        ],
        analysis: 'meeting 是正式的会议。投影仪亮起来的那一刻，屋子里所有声音都停了。',
        wrongFeedback: '你选错了，韩野把投影笔递过来：「你来讲。」气血 -10',
        afterCorrect: '会开到中午。散会时，商场负责人在门口停了一下，回头说：「方案不错。」'
      }
    ],
    completeText: '第 48 章结束。那天下午，倒计时还剩十三天。所有人都没走，会议室里又亮起了灯。'
  },
  {
    id: 'ml_49',
    index: 49,
    title: '第 49 章 · 竞标那天',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '竞标那天，会场在大厦顶层。陈默带着团队到得最早，把设备又检查了一遍。九点整，门口的电梯开了，苏明哲带着赵氏的人走了进来。',
    questions: [
      {
        plotDescription: '苏明哲把方案书往桌上一放，故意从陈默身边走过。',
        line: "This project is ours. A small company like yours should not even be here.",
        lineCn: '这个项目是我们的。你们这种小公司根本不该来。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work with a goal', cn: '项目、有计划的一整件事', correct: true, reason: '他们要竞标的是商场那整件事，就是 project。' },
          { key: 'B', en: 'a written contract', cn: '一份书面合同', correct: false, reason: '现在还在竞标，合同还没签。' },
          { key: 'C', en: 'a monthly salary payment', cn: '每月的工资发放', correct: false, reason: '这里说的是要做的项目，不是发工资。' }
        ],
        analysis: 'project 是有目标、有计划的一整件工作。陈默没有回头，只把方案书的边角压平。',
        wrongFeedback: '你选错了，苏明哲笑了一声，坐到第一排。气血 -10',
        afterCorrect: '陈默低声对韩野说：「把我们那版改过的数据调出来。」'
      },
      {
        plotDescription: '轮到赵氏陈述，苏明哲打开投影，第一页就出了错。',
        line: "He used last year's numbers. He is going to get fired for this.",
        lineCn: '他用了去年的数据。这一下他要被炒了。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'dismissed from your job', cn: '被解雇、被炒鱿鱼', correct: true, reason: '用错数据搞砸竞标，后果就是被公司开除。' },
          { key: 'B', en: 'praised by the leadership', cn: '被领导表扬', correct: false, reason: '出了这种错，不可能是表扬。' },
          { key: 'C', en: 'given a new project', cn: '被分配一个新项目', correct: false, reason: '这里说的是丢工作，不是接新活。' }
        ],
        analysis: 'fired 是被开除。台下有人开始小声说话，苏明哲的手在翻页键上停住了。',
        wrongFeedback: '你选错了，韩野压低声音：「别说话，看着就行。」气血 -10',
        afterCorrect: '赵氏的陈述在第七分钟被主持人打断。苏明哲站在台上，脸白得像纸。'
      },
      {
        plotDescription: '中场休息，商场负责人走到陈默面前，伸出手。',
        line: "We want to do business with people who check their numbers twice.",
        lineCn: '我们想跟会把数字核对两遍的人做生意。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'the activity of buying and selling', cn: '生意、商业往来', correct: true, reason: '他要跟陈默合作做生意，就是 do business。' },
          { key: 'B', en: 'a private family matter', cn: '私人的家事', correct: false, reason: '这里是公开的商业合作。' },
          { key: 'C', en: 'a kind of office furniture', cn: '一种办公家具', correct: false, reason: '跟家具无关。' }
        ],
        analysis: 'business 是买卖与合作的商业活动。陈默握住那只手，用了点力。',
        wrongFeedback: '你选错了，负责人收回手，转身要走。气血 -10',
        afterCorrect: '陈默只说了一句：「我们的数字，每一页都能对上。」'
      },
      {
        plotDescription: '下午三点，主持人宣布结果，会场安静得能听见空调声。',
        line: "Congratulations. We have a deal.",
        lineCn: '恭喜。我们成交了。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement between two sides', cn: '交易、双方达成的协议', correct: true, reason: '主持人宣布合作达成，就是 a deal。' },
          { key: 'B', en: 'a problem that needs solving', cn: '一个需要解决的问题', correct: false, reason: 'deal 也有「处理」的意思，但这里是成交。' },
          { key: 'C', en: 'a large amount of money', cn: '一大笔钱', correct: false, reason: '这里说的是协议，不是金额。' }
        ],
        analysis: 'deal 是双方谈成的协议。陈默站起来，先回头看了一眼自己的团队。',
        wrongFeedback: '你选错了，主持人已经转身离开讲台。气血 -10',
        afterCorrect: '三十七个人在会场后排站了起来鼓掌。韩野喊得最大声，苏晚没有出声，只是笑。'
      }
    ],
    completeText: '第 49 章结束。散场时，苏明哲在电梯口拦住陈默。陈默只说了一句：「数据要自己核。」电梯门关上了。'
  },
  {
    id: 'ml_50',
    index: 50,
    title: '第 50 章 · 签字的那支笔',
    novel: '赘婿归来：从被退婚开始',
    speaker: { name: '陈默', avatar: window.VERSION_AVATARS.male_lead },
    storyText: '签约仪式定在周五下午。默行科技第一次把公司名字印在红色的背景板上。苏晚站在台下第二排，手里捏着一支旧钢笔。',
    questions: [
      {
        plotDescription: '商场负责人在长桌前坐下，把文件翻到最后一页。',
        line: "Read it carefully. Once you sign this contract, it is binding.",
        lineCn: '仔细看一遍。这份合同一签就有约束力。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a formal written agreement', cn: '合同、正式的书面协议', correct: true, reason: '长桌上那份要签的文件，就是 contract。' },
          { key: 'B', en: 'an informal verbal promise', cn: '非正式的口头承诺', correct: false, reason: '它是书面的、有约束力的，不是口头承诺。' },
          { key: 'C', en: 'a list of company rules', cn: '一份公司规章清单', correct: false, reason: '这是双方的协议，不是内部规章。' }
        ],
        analysis: 'contract 是具有约束力的正式书面协议。陈默把每一页都翻了一遍，连小字也没放过。',
        wrongFeedback: '你选错了，负责人把文件收回去：「那再给你十分钟。」气血 -10',
        afterCorrect: '他翻到最后一页，停了两秒，然后签下自己的名字。'
      },
      {
        plotDescription: '仪式结束，财务在后台小声报了第一个季度的数字。',
        line: "First quarter profit is triple what we projected.",
        lineCn: '第一季度的利润是预计的三倍。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you gain after costs are paid', cn: '利润、扣掉成本后赚的钱', correct: true, reason: '收入减去成本后剩下的钱，就是 profit。' },
          { key: 'B', en: 'the total money taken in before costs', cn: '扣除成本前的总收入', correct: false, reason: '那是营收，不是利润。' },
          { key: 'C', en: 'a loan from the bank', cn: '向银行借的钱', correct: false, reason: '这是赚到的钱，不是借的。' }
        ],
        analysis: 'profit 是扣掉成本之后真正赚到的钱。陈默听见这个数，第一反应是看了一眼苏晚。',
        wrongFeedback: '你选错了，财务把报表合上：「那我先放着。」气血 -10',
        afterCorrect: '那天晚上，他让财务把这个数字发给了每一个员工。'
      },
      {
        plotDescription: '周一早上，陈默在全员会上宣布了一件事。',
        line: "Everyone gets a bonus this quarter. Six months of pay.",
        lineCn: '这一季每个人都有奖金。相当于六个月工资。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money given on top of normal pay', cn: '奖金、工资之外的额外钱', correct: true, reason: '在正常工资之外额外发的钱，就是 bonus。' },
          { key: 'B', en: 'your regular monthly salary', cn: '正常的月薪', correct: false, reason: '它是在工资之外额外给的。' },
          { key: 'C', en: 'a fine for breaking a rule', cn: '违规的罚款', correct: false, reason: '这是发钱，不是罚钱。' }
        ],
        analysis: 'bonus 是工资之外的额外奖励。会议室里先是安静了一秒，然后炸开。',
        wrongFeedback: '你选错了，韩野站起来：「你再说一遍？」气血 -10',
        afterCorrect: '陈默把名单投到屏幕上，第一个名字是那个被多发三个月工资的老员工。'
      },
      {
        plotDescription: '散会后，苏晚在走廊尽头等他，手里还捏着那支旧钢笔。',
        line: "You are finally earning a real salary. Does it feel different?",
        lineCn: '你终于拿一份真正的薪水了。感觉不一样吗？',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed regular pay for a job', cn: '薪水、固定的工资', correct: true, reason: '她问的是他每个月固定拿到的那份钱，就是 salary。' },
          { key: 'B', en: 'a one-time gift of money', cn: '一次性给的一笔钱', correct: false, reason: 'salary 是按期固定发的，不是一次性。' },
          { key: 'C', en: 'money earned from investments', cn: '投资赚到的钱', correct: false, reason: '这里说的是工作报酬，不是投资收益。' }
        ],
        analysis: 'salary 是按期发放的固定工资。陈默想了想，说：「不一样。这次是我自己挣的。」',
        wrongFeedback: '你选错了，苏晚把钢笔递给他：「签你的名字去。」气血 -10',
        afterCorrect: '陈默接过那支笔。笔身上刻着三个字：陈默的。那是三年前她偷偷刻的。'
      }
    ],
    completeText: '第 50 章结束。签约的第二年，默行科技搬进了自己的楼。楼下那家只有六张桌子的小馆子还在，靠窗的位置常年空着。'
  }
];

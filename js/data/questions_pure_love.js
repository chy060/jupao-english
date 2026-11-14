/**
 * 原创剧情题库 —— 纯爱 ·《暗恋你第十年》
 * 50 章 × 4 题 = 200 题
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.pure_love = [
  {
    id: 'pl_1',
    index: 1,
    title: '第 1 章 · 十年后的第一面',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '急诊科凌晨换班，温以宁摘下手套，听见走廊尽头有人叫「周主任」。她抬头，看见白大褂、旧球鞋，还有那双十年没变的眼睛。周叙也停住了，手里还捏着没拆封的咖啡。',
    questions: [
      {
        plotDescription: '护士长压低声音提醒她，新来的主任眼睛很毒，排班表上一点小动作都瞒不过。',
        line: "Word is, the new director is savvy — he checks every shift swap himself.",
        lineCn: '听说新主任很精明，每一个换班申请都亲自核对。',
        prompt: "根据上下文，选出画线词汇 'Savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'generous with money', cn: '出手大方', correct: false, reason: '这里说的是他核对排班的能力，和花钱大方没有关系。' },
          { key: 'B', en: 'sharp and hard to fool', cn: '精明的，很难糊弄', correct: true, reason: '亲自核对每个换班申请，正说明他看得很准、不容易被骗。' },
          { key: 'C', en: 'slow to notice details', cn: '对细节很迟钝', correct: false, reason: '他连换班都逐一核对，恰恰和迟钝相反。' }
        ],
        analysis: '护士长的提醒落在「亲自核对」上，savvy 形容一个人脑子快、眼光准，在生活里常用来夸人精明。',
        wrongFeedback: '你把「精明」听成了「大方」，护士长看了你一眼，把排班表收了回去。气血 -10',
        afterCorrect: '温以宁低头看排班表，自己那一栏被人用铅笔改过两次。她抬头时，周叙正站在走廊尽头，朝她点了下头。'
      },
      {
        plotDescription: '交班记录上有一处时间写错，周叙当着全科室的面直接指了出来。',
        line: "He's blunt, but he's fair — he says the problem right to your face.",
        lineCn: '他说话很直，但很公道，有问题当面就说。',
        prompt: "根据上下文，选出画线词汇 'Blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'direct, even when it stings', cn: '直白的，哪怕听着扎人', correct: true, reason: '当面指出错误、不留情面，正是 blunt 的直白。' },
          { key: 'B', en: 'polite and indirect', cn: '客气而委婉', correct: false, reason: '他是当着所有人直接说的，一点都不委婉。' },
          { key: 'C', en: 'always joking', cn: '总在开玩笑', correct: false, reason: '指出交班错误是严肃的事，不是在开玩笑。' }
        ],
        analysis: 'blunt 指说话不绕弯子，甚至有点嘴毒，但因为「fair」，这种直白并不带恶意。',
        wrongFeedback: '你把他答成「委婉」，旁边的小护士差点笑出声：他刚才可一点都没绕弯。气血 -10',
        afterCorrect: '温以宁在记录本上改掉那个时间，笔尖顿了顿。十年前他也是这样，做题错了就当面说，从不给她留面子。'
      },
      {
        plotDescription: '温以宁被点名，笑着回了一句更狠的，抱着病历转身就走。',
        line: "She gave him a sassy answer and walked off with the chart.",
        lineCn: '她回了句又冲又俏皮的话，抱着病历转身就走。',
        prompt: "根据上下文，选出画线词汇 'Sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'shy and quiet', cn: '害羞又安静', correct: false, reason: '她当场回嘴还转身就走，一点也不害羞。' },
          { key: 'B', en: 'cheeky and bold', cn: '毒舌又大胆的', correct: true, reason: '敢顶回去、语气带刺又不失俏皮，正是 sassy。' },
          { key: 'C', en: 'cold and formal', cn: '冷淡而正式', correct: false, reason: '她的回答带着玩笑的锋利，不是公事公办的冷淡。' }
        ],
        analysis: 'sassy 多形容女孩子嘴快、敢怼人，还带一点可爱的傲气，和单纯的没礼貌不同。',
        wrongFeedback: '你答成「冷淡」，可她那句话明明带着笑，走廊里的人都听出来了。气血 -10',
        afterCorrect: '周叙站在原地，看着她的背影笑了一下。十年了，她怼人的语速一点没变。'
      },
      {
        plotDescription: '周叙追上来，说她当年找的借口比现在还没说服力。',
        line: "Your excuse is lame — you used the same one in senior year.",
        lineCn: '你这借口太逊了，高三用的就是这一套。',
        prompt: "根据上下文，选出画线词汇 'Lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'funny and clever', cn: '好笑又机灵', correct: false, reason: '他说的是「高三用过同一套」，重点是借口站不住脚，不是好笑。' },
          { key: 'B', en: 'serious and formal', cn: '严肃正式的', correct: false, reason: '一个临时找的借口不会用「严肃正式」来形容。' },
          { key: 'C', en: 'weak and unconvincing', cn: '逊毙了，站不住脚', correct: true, reason: '同一个借口用了十年，当然又弱又没说服力。' }
        ],
        analysis: 'lame 本义是瘸的，口语里常用来形容借口、理由「太弱了、太逊了」。',
        wrongFeedback: '你把这句听成了夸奖，周叙挑了下眉：「看来你当年也是这么蒙混过去的。」气血 -10',
        afterCorrect: '温以宁咬着嘴唇没接话。走廊尽头的灯闪了一下，她忽然发现，十年过去，她还是接不住他一句话。'
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
    storyText: '早会上，周叙站在投影前讲新的分诊流程，声音比高中时低了些。温以宁坐在最后一排，盯着他胸牌上的名字，笔尖在纸上戳出一个小洞。散会时他忽然说：「温医生，留一下。」',
    questions: [
      {
        plotDescription: '他带她去看休息室新添的咖啡机，语气难得有点得意。',
        line: "This machine is dope — it grinds the beans fresh every time.",
        lineCn: '这机器酷毙了，每次都现磨豆子。',
        prompt: "根据上下文，选出画线词汇 'Dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'broken and useless', cn: '坏掉没用的', correct: false, reason: '他明明是带着炫耀的语气，机器刚添置，不可能坏了。' },
          { key: 'B', en: 'really cool', cn: '酷毙了，很棒', correct: true, reason: '现磨豆子还特意带她来看，dope 在这里是夸东西很棒。' },
          { key: 'C', en: 'too expensive to use', cn: '贵得用不起', correct: false, reason: '他只提了现磨，没有任何嫌贵的意思。' }
        ],
        analysis: 'dope 在口语里常作形容词，表示「太酷了、太棒了」，和药物本义完全无关。',
        wrongFeedback: '你把「酷毙了」听成「坏了」，还伸手去检查插头，周叙愣在原地。气血 -10',
        afterCorrect: '温以宁接过他递来的杯子，指尖碰到杯壁，热的。她低声说：「你以前不喝咖啡。」他顿了一下：「后来值夜班，学的。」'
      },
      {
        plotDescription: '温以宁打开他的储物柜找交班本，里面的东西塌了出来。',
        line: "You're still sloppy — your locker looks like a storm hit it.",
        lineCn: '你还是这么邋遢，柜子像被台风刮过。',
        prompt: "根据上下文，选出画线词汇 'Sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'messy and careless', cn: '邋遢的，不修边幅的', correct: true, reason: '柜子乱得像被台风刮过，正是 sloppy 的凌乱随意。' },
          { key: 'B', en: 'neat and organized', cn: '整洁有条理的', correct: false, reason: '东西都塌出来了，显然和整洁相反。' },
          { key: 'C', en: 'empty and clean', cn: '空空荡荡很干净', correct: false, reason: '柜子里塞满东西才会塌出来，不是空的。' }
        ],
        analysis: 'sloppy 形容人做事随意、东西乱放，也可以说工作马虎。这里指生活习惯上的邋遢。',
        wrongFeedback: '你答成「整洁」，可脚边还堆着从柜子里掉出来的两本旧杂志。气血 -10',
        afterCorrect: '周叙蹲下去捡，耳朵有点红：「一个人住久了，就懒得收。」温以宁没说话，顺手把杂志按大小码好。'
      },
      {
        plotDescription: '他解释自己每天给母亲打电话，怕她一个人在家。',
        line: "I'm not needy; I just call my mom once a day.",
        lineCn: '我不是缺爱，我只是每天给我妈打个电话。',
        prompt: "根据上下文，选出画线词汇 'Needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'independent and tough', cn: '独立坚强的', correct: false, reason: '他是在为自己辩解，怕被说成太黏人，不是强调独立。' },
          { key: 'B', en: 'wanting too much attention', cn: '缺爱的，过分需要陪伴', correct: true, reason: '他特意否认，说明 needy 指的是过度需要别人关注和陪伴。' },
          { key: 'C', en: 'generous with money', cn: '花钱大方的', correct: false, reason: '打电话和花钱毫无关系，这里谈的是情感需求。' }
        ],
        analysis: 'needy 在感情语境里带点贬义，指一个人过度依赖、总需要被关注，所以他急着否认。',
        wrongFeedback: '你听成「独立」，还夸了他一句，他的表情更尴尬了。气血 -10',
        afterCorrect: '温以宁「嗯」了一声，说：「我妈走后，我也每天给我爸打。」周叙抬头看她，那一眼很长。'
      },
      {
        plotDescription: '他说起高三那年，只顾自己复习，没发现她家里出了事。',
        line: "I was selfish back then. I only saw my own grades.",
        lineCn: '那时候我太自私了，眼里只有自己的成绩。',
        prompt: "根据上下文，选出画线词汇 'Selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'selfless and caring', cn: '无私又体贴的', correct: false, reason: '他说自己「眼里只有成绩」，这是自责，不是自夸无私。' },
          { key: 'B', en: 'careless about rules', cn: '不守规矩的', correct: false, reason: '他谈的是只顾自己，不是违反规定。' },
          { key: 'C', en: 'caring only about yourself', cn: '自私的，只顾自己', correct: true, reason: '只看得见自己的成绩、忽略别人的处境，正是 selfish。' }
        ],
        analysis: 'selfish 指只考虑自己、不顾他人。他这句话是迟到了十年的道歉。',
        wrongFeedback: '你答成「无私」，他苦笑了一下，把没说完的话咽了回去。气血 -10',
        afterCorrect: '温以宁把交班本合上，轻声说：「你不是自私，你只是那时候什么都不知道。」'
      }
    ],
    completeText: '散会后走廊空了下来。周叙站在窗边，忽然问：「那年你家里的事，为什么一个字都没跟我说？」'
  },
  {
    id: 'pl_3',
    index: 3,
    title: '第 3 章 · 假装不认识',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '医院食堂，两人端着餐盘面对面坐下，像两个被迫拼桌的陌生人。温以宁低头吃饭，周叙忽然问：「高中那个总忘带饭卡的女生，是你吧？」她筷子一顿：「周主任认错人了。」',
    questions: [
      {
        plotDescription: '邻桌几个实习生一直在偷偷往这边看，压低声音议论。',
        line: "The new resident is gorgeous — half the nurses found a reason to walk past.",
        lineCn: '新来的住院医美呆了，半个科室的护士都找借口从这儿走过。',
        prompt: "根据上下文，选出画线词汇 'Gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'rude and unfriendly', cn: '粗鲁不友善的', correct: false, reason: '大家特意绕过来看，显然是被外貌吸引，不是因为他没礼貌。' },
          { key: 'B', en: 'ordinary-looking', cn: '长相普通的', correct: false, reason: '如果只是普通，就不会有半个科室的人找借口经过。' },
          { key: 'C', en: 'extremely beautiful', cn: '美呆了，非常好看', correct: true, reason: '护士们特意绕路来看，说明他长得非常出众。' }
        ],
        analysis: 'gorgeous 比 beautiful 语气更强，形容人时可以指「美得让人挪不开眼」。',
        wrongFeedback: '你答成「普通」，可邻桌的实习生还在偷看第三眼。气血 -10',
        afterCorrect: '周叙顺着她的目光回头，那几个实习生立刻低头喝汤。他转回来，很轻地说：「你以前也这样看我。」'
      },
      {
        plotDescription: '为了打破沉默，她提起了食堂的旧菜单。',
        line: "It's weird, but I still remember what you ordered in the school canteen.",
        lineCn: '说来奇怪，我到现在还记得你在学校食堂点什么。',
        prompt: "根据上下文，选出画线词汇 'Weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'strange', cn: '奇怪的，说不上来的', correct: true, reason: '十年后还记得一顿饭，连她自己都觉得不可思议。' },
          { key: 'B', en: 'completely normal', cn: '完全正常的', correct: false, reason: '她说「说来奇怪」，本身就承认这件事有点反常。' },
          { key: 'C', en: 'delicious', cn: '好吃的', correct: false, reason: '这里形容的是「记得」这件事，不是菜的味道。' }
        ],
        analysis: 'weird 表示「奇怪的、反常的」，语气比 strange 更口语，常用来引出自己都觉得意外的事。',
        wrongFeedback: '你把它听成「正常」，她愣了一下，那句藏了十年的话就这样滑过去了。气血 -10',
        afterCorrect: '周叙放下筷子：「你点的番茄鸡蛋面，加两个蛋。」他答得太快，两个人都安静了。'
      },
      {
        plotDescription: '她忽然注意到门口有个男人，站了快一个小时，一直盯着药房。',
        line: "That man by the pharmacy looks sketchy — he's been watching the door for an hour.",
        lineCn: '药房边那个男的很可疑，盯着门口都一个小时了。',
        prompt: "根据上下文，选出画线词汇 'Sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'lost and asking for help', cn: '迷路在求助的', correct: false, reason: '他只是站着盯门，没有向任何人问路。' },
          { key: 'B', en: 'friendly and talkative', cn: '友善又健谈的', correct: false, reason: '盯了一个小时不吭声，一点也不像友善健谈。' },
          { key: 'C', en: 'suspicious', cn: '可疑的，让人不放心的', correct: true, reason: '长时间徘徊又盯着门口，正是让人起疑的行为。' }
        ],
        analysis: 'sketchy 是口语里形容人或事「不太对劲、可疑」的常用词，暗示可能有问题。',
        wrongFeedback: '你答成「迷路」，温以宁已经站起来往护士站走了。气血 -10',
        afterCorrect: '周叙比她更快，起身时把她往身后带了半步：「你先坐着，我去问。」'
      },
      {
        plotDescription: '保安过去一问，那人居然准确说出了温以宁的名字和科室。',
        line: "The whole thing was bizarre: he knew my name before I said it.",
        lineCn: '整件事诡异得很，我还没开口他就知道我的名字。',
        prompt: "根据上下文，选出画线词汇 'Bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'very strange and hard to explain', cn: '诡异的，难以解释的', correct: true, reason: '素未谋面却知道她的名字，确实反常到无法解释。' },
          { key: 'B', en: 'completely ordinary', cn: '平平无奇的', correct: false, reason: '陌生人知道她名字，这件事一点都不普通。' },
          { key: 'C', en: 'funny and relaxing', cn: '好笑又轻松的', correct: false, reason: '当时的氛围是紧张，不是好笑。' }
        ],
        analysis: 'bizarre 比 weird 更强烈，强调离奇、荒诞、超出常理，常形容难以解释的怪事。',
        wrongFeedback: '你说「挺普通的」，温以宁看了你一眼，后背还有点凉。气血 -10',
        afterCorrect: '那人被保安带走时，回头看了她一眼。周叙不动声色地把椅子往她那边挪了半寸。'
      }
    ],
    completeText: '食堂的广播响起午间提示音。温以宁低头扒饭，听见周叙说：「下次有人问你的名字，先让我站到你前面。」'
  },
  {
    id: 'pl_4',
    index: 4,
    title: '第 4 章 · 急诊科的深夜',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '凌晨两点，急诊终于安静下来。两人坐在休息室分一盒凉掉的饺子，聊起高中文艺汇演，温以宁忽然把脸埋进掌心。',
    questions: [
      {
        plotDescription: '他说起那年班级话剧，全校都在传。',
        line: "Our class play was epic — the whole school talked about it for a month.",
        lineCn: '我们班那场话剧是史诗级的，全校聊了整整一个月。',
        prompt: "根据上下文，选出画线词汇 'Epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'short and boring', cn: '又短又无聊的', correct: false, reason: '全校聊了一个月，显然不是无聊的短剧。' },
          { key: 'B', en: 'cancelled at the last minute', cn: '临开场被取消的', correct: false, reason: '如果取消了，就没有「全校聊了一个月」这回事。' },
          { key: 'C', en: 'amazing and unforgettable', cn: '史诗级的，难忘的', correct: true, reason: '被全校讨论一个月，说明这场演出极其出彩。' }
        ],
        analysis: 'epic 本义是史诗，口语里夸张地形容某件事「超级震撼、值得记一辈子」。',
        wrongFeedback: '你答成「又短又无聊」，他挑了挑眉：「那你当年为什么坐在第一排？」气血 -10',
        afterCorrect: '温以宁的手还捂着脸，从指缝里说：「那是因为礼堂没别的位置。」'
      },
      {
        plotDescription: '温以宁翻出当年的录像，只看三秒就关掉了。',
        line: "Watching that video now is pure cringe — I can't believe I wore that.",
        lineCn: '现在看那段录像简直脚趾扣地，我居然穿过那种衣服。',
        prompt: "根据上下文，选出画线词汇 'Cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply embarrassing', cn: '尴尬到脚趾扣地的', correct: true, reason: '看三秒就关掉、不敢相信自己的穿着，正是强烈的尴尬。' },
          { key: 'B', en: 'relaxing and pleasant', cn: '放松愉快的', correct: false, reason: '她立刻关掉视频，显然不是愉快的体验。' },
          { key: 'C', en: 'award-winning', cn: '拿过大奖的', correct: false, reason: '这里说的是观看时的感受，不是作品有没有获奖。' }
        ],
        analysis: 'cringe 在网络上常指「让人替自己或别人尴尬到缩起来」的感觉，作名词也很常见。',
        wrongFeedback: '你答成「放松愉快」，可她已经把手机倒扣在桌上了。气血 -10',
        afterCorrect: '周叙把视频又点开，音量调小：「别关，我还没看完。」'
      },
      {
        plotDescription: '他却说她在台上一点都不怯场，连忘词都忘得很漂亮。',
        line: "You were fabulous on stage. I forgot my lines staring at you.",
        lineCn: '你在台上太棒了，我光顾着看你，把自己的台词都忘了。',
        prompt: "根据上下文，选出画线词汇 'Fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'terrible and embarrassing', cn: '糟糕又丢脸的', correct: false, reason: '他说自己忘词是因为看她，语气是赞美，不是贬低。' },
          { key: 'B', en: 'nervous and shaky', cn: '紧张发抖的', correct: false, reason: '他夸的是她台上的状态，紧张发抖和赞美矛盾。' },
          { key: 'C', en: 'wonderful', cn: '极好的，太出色了', correct: true, reason: '他看得忘了台词，正说明她在台上非常耀眼。' }
        ],
        analysis: 'fabulous 表示「极好的、令人赞叹的」，比 good 语气强烈得多。',
        wrongFeedback: '你答成「糟糕」，他停了一下：「我夸人的时候，你能不能别往坏处想。」气血 -10',
        afterCorrect: '温以宁把脸从掌心抬起来，眼睛有点亮。她小声说：「那你后来补上台词了吗？」'
      },
      {
        plotDescription: '她笑着提醒他，自己唱歌那一段才是全场灾难。',
        line: "My singing was terrible, but you clapped the loudest.",
        lineCn: '我唱得糟糕透了，可你鼓掌鼓得最响。',
        prompt: "根据上下文，选出画线词汇 'Terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'perfect and moving', cn: '完美又动人的', correct: false, reason: '她自己说那是「全场灾难」，不可能用完美形容。' },
          { key: 'B', en: 'very bad', cn: '糟糕透顶的', correct: true, reason: '和「全场灾难」对应，terrible 就是非常糟。' },
          { key: 'C', en: 'quiet and soft', cn: '安静轻柔的', correct: false, reason: '这里评价的是唱得好不好，不是音量大小。' }
        ],
        analysis: 'terrible 表示「非常糟糕」，和 bad 同向但语气更重，常用来吐槽自己的黑历史。',
        wrongFeedback: '你答成「完美」，她笑了一声：「你比周叙还会哄人。」气血 -10',
        afterCorrect: '饺子吃完了，谁也没提要走。走廊的钟走到三点，周叙忽然说：「那天我准备了台词，一句都没说出口。」'
      }
    ],
    completeText: '休息室的灯管嗡嗡响。温以宁没有追问那句没出口的台词，只把空盒子叠好，说：「留着吧，反正我们都还记得。」'
  },
  {
    id: 'pl_5',
    index: 5,
    title: '第 5 章 · 同学群里的消息',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '同学群里突然翻出十年前的合照，消息一条接一条。温以宁盯着屏幕，看见自己站在最边上，而周叙站在她身后半步的位置。',
    questions: [
      {
        plotDescription: '群里有人提起当年最爱出风头的男生，说他现在完全变了。',
        line: "He turned out pretty decent — not the show-off I remembered.",
        lineCn: '他现在挺体面的，不是我记得的那个爱显摆的人了。',
        prompt: "根据上下文，选出画线词汇 'Decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'good and respectable', cn: '体面的，像样的', correct: true, reason: '和「爱显摆」形成对比，说明他现在为人不错、让人看得起。' },
          { key: 'B', en: 'rude and arrogant', cn: '粗鲁又傲慢的', correct: false, reason: '句子里特意说他不再是当年那个样子，rude 与之相反。' },
          { key: 'C', en: 'extremely rich', cn: '非常有钱的', correct: false, reason: '这里评价的是为人，不是财富。' }
        ],
        analysis: 'decent 形容人时是「还不错的、正派的」，比 good 含蓄，是成年人常用的稳妥夸奖。',
        wrongFeedback: '你答成「傲慢」，群里的气氛一下子冷了半截。气血 -10',
        afterCorrect: '温以宁往上翻聊天记录，翻到那张合照。拍照的人手抖，只有周叙站得笔直，像在替谁挡风。'
      },
      {
        plotDescription: '她自嘲当年总一个人躲在楼梯间看书，被同学起了外号。',
        line: "Everyone called me a weirdo because I read in the stairwell.",
        lineCn: '大家都叫我怪胎，因为我总在楼梯间看书。',
        prompt: "根据上下文，选出画线词汇 'Weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a top student', cn: '优等生', correct: false, reason: '外号来自她躲起来看书的行为，不是成绩排名。' },
          { key: 'B', en: 'a class monitor', cn: '班长', correct: false, reason: '她没提过任何职务，这个外号和行为无关。' },
          { key: 'C', en: 'an odd person', cn: '怪胎，行为古怪的人', correct: true, reason: '总一个人躲楼梯间，在同学眼里就成了古怪的人。' }
        ],
        analysis: 'weirdo 是名词，指行为古怪、和别人不太一样的人，语气可轻可重，这里带有自嘲。',
        wrongFeedback: '你答成「优等生」，她笑了一下：「那他们可没这么客气。」气血 -10',
        afterCorrect: '屏幕上方弹出周叙的私聊：「楼梯间第三层，靠窗那格。我路过过很多次。」'
      },
      {
        plotDescription: '群里忽然开始刷屏，说新来的体育老师长得好看。',
        line: "Half the group chat says the new gym teacher is hot.",
        lineCn: '群里一半人都在说新来的体育老师很性感。',
        prompt: "根据上下文，选出画线词汇 'Hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'sweaty after exercise', cn: '运动后满头汗的', correct: false, reason: '大家在讨论长相，不是他刚运动完的状态。' },
          { key: 'B', en: 'very attractive', cn: '性感好看的', correct: true, reason: '群里刷屏讨论的显然是外貌吸引力。' },
          { key: 'C', en: 'strict with students', cn: '对学生很严格的', correct: false, reason: '刷屏的理由是长相，不是教学风格。' }
        ],
        analysis: 'hot 形容人时是口语里的「性感、有魅力」，和温度无关。',
        wrongFeedback: '你答成「严格」，群里已经有人开始发表情包了。气血 -10',
        afterCorrect: '温以宁把手机往桌上一扣，觉得自己有点无聊。她起身去倒水，路过镜子时多看了自己一眼。'
      },
      {
        plotDescription: '周叙私聊她，说照片里她的旧发型很有意思。',
        line: "Your old haircut was cute — you looked like a lost puppy.",
        lineCn: '你以前的发型很可爱，像只迷路的小狗。',
        prompt: "根据上下文，选出画线词汇 'Cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'ugly and strange', cn: '难看又奇怪的', correct: false, reason: '他用了「像迷路的小狗」，是带着喜欢的形容，不是嫌难看。' },
          { key: 'B', en: 'expensive to maintain', cn: '打理起来很贵的', correct: false, reason: '这里说的是看起来的感觉，和花费无关。' },
          { key: 'C', en: 'endearing and sweet', cn: '可爱的，招人喜欢的', correct: true, reason: '把旧照片里的她说成迷路小狗，是亲昵的可爱。' }
        ],
        analysis: 'cute 不只指外表可爱，也常用来表达一种让人心软的喜欢。',
        wrongFeedback: '你答成「难看」，他隔了很久才回：「我不是那个意思。」气血 -10',
        afterCorrect: '她回了三个句号，又删掉，最后只发了一个「哦」。半分钟后，周叙发来一张截图：照片里他的手，正虚虚扶在她背后。'
      }
    ],
    completeText: '她把那张截图存了下来，藏在相册最深处。窗外天亮了，她忽然很想问一句：当年你站得那么近，到底在看谁。'
  },
  {
    id: 'pl_6',
    index: 6,
    title: '第 6 章 · 聚会上的空座位',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '同学聚会定在城西，周叙开车，温以宁坐在副驾。一路上红灯很多，车里放着十年前的歌。到了饭店，靠窗的位置空着一个。',
    questions: [
      {
        plotDescription: '他抱怨自己每天上下班要花两个小时。',
        line: "My commute takes an hour each way, so I sleep on the bus.",
        lineCn: '我上下班单程一小时，所以在公交上睡觉。',
        prompt: "根据上下文，选出画线词汇 'Commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'the daily trip to and from work', cn: '通勤，每天上下班的路程', correct: true, reason: '单程一小时、在公交上睡，说的正是每天往返的路。' },
          { key: 'B', en: 'a hospital shift', cn: '医院的一班岗', correct: false, reason: '班次是工作时段，不会用「单程」来计算。' },
          { key: 'C', en: 'a business trip', cn: '出差', correct: false, reason: '每天往返、坐公交，是日常通勤，不是出差。' }
        ],
        analysis: 'commute 作名词指每天上下班的路程，作动词就是「通勤」。',
        wrongFeedback: '你答成「出差」，他笑：「天天出差，我早就住饭店了。」气血 -10',
        afterCorrect: '温以宁看着窗外：「我以前坐 17 路，会经过你们学校后门。」红灯亮起，周叙的手指在方向盘上停了一下。'
      },
      {
        plotDescription: '她打了个哈欠，说昨晚值夜几乎没睡。',
        line: "I need a nap before dinner, or I'll fall asleep in the soup.",
        lineCn: '饭前我得打个盹，不然会一头栽进汤里。',
        prompt: "根据上下文，选出画线词汇 'Nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a shower', cn: '洗个澡', correct: false, reason: '她说的是困，不是身上脏。' },
          { key: 'B', en: 'a short sleep', cn: '打盹，小睡一会儿', correct: true, reason: '值夜没睡、怕栽进汤里，需要的是一小觉。' },
          { key: 'C', en: 'a snack', cn: '吃点零食', correct: false, reason: '她怕的是睡着，不是饿。' }
        ],
        analysis: 'nap 特指白天或饭前的短时间小睡，和正式的 sleep 不一样。',
        wrongFeedback: '你答成「零食」，她打了个哈欠：「我现在只想闭眼。」气血 -10',
        afterCorrect: '周叙把车停稳，没急着下车：「睡十分钟，我叫你。」她真的闭上了眼睛，呼吸很快平稳下来。'
      },
      {
        plotDescription: '到了饭店，几个人嫌外面冷，提议干脆不出门了。',
        line: "Nobody wants to go out. Let's just order in tonight.",
        lineCn: '没人想出门，今晚干脆点外卖吧。',
        prompt: "根据上下文，选出画线词汇 'Order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'have food delivered to you', cn: '点外卖，让人送上门', correct: true, reason: '不想出门又要吃饭，order in 就是把餐点叫到家里。' },
          { key: 'B', en: 'eat at the restaurant', cn: '在饭店里吃', correct: false, reason: '大家都说不想出门了，正好和去饭店相反。' },
          { key: 'C', en: 'cook together', cn: '一起做饭', correct: false, reason: 'order 是点单，不是自己下厨。' }
        ],
        analysis: 'order in 和 eat out 正好相反：一个是叫外卖到家，一个是出去吃。',
        wrongFeedback: '你答成「一起做饭」，可冰箱里连鸡蛋都没有。气血 -10',
        afterCorrect: '温以宁却坚持说一年才聚一次，还是该好好吃一顿。最后他们还是出了门，冷风一吹，她清醒了大半。'
      },
      {
        plotDescription: '她坚持说该好好吃一顿，指了指楼下那家小面馆。',
        line: "We could eat out for once — there's a noodle place downstairs.",
        lineCn: '难得出去吃一次吧，楼下就有家面馆。',
        prompt: "根据上下文，选出画线词汇 'Eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'buy groceries and cook', cn: '买菜自己做', correct: false, reason: '她指的是楼下那家面馆，是去店里吃。' },
          { key: 'B', en: 'skip dinner', cn: '不吃晚饭', correct: false, reason: '她说「好好吃一顿」，不是跳过。' },
          { key: 'C', en: 'have a meal at a restaurant', cn: '下馆子，在外面吃饭', correct: true, reason: '楼下有面馆、难得一次，都是在外面用餐。' }
        ],
        analysis: 'eat out 指出门去餐馆吃饭，和 order in 是一对常见的生活口语搭配。',
        wrongFeedback: '你答成「自己做」，她指了指自己空空的冰箱，笑得很无奈。气血 -10',
        afterCorrect: '空着的那个位置没人坐，服务员来收了三次碗筷。温以宁小声问：「那是给谁留的？」周叙说：「一个没来的人。」'
      }
    ],
    completeText: '面端上来的时候，热气挡住了两个人的脸。周叙把碗往她那边推了推：「多吃点，你最近瘦了。」她低头，没让他看见自己笑。'
  },
  {
    id: 'pl_7',
    index: 7,
    title: '第 7 章 · 谁先举的杯',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '聚会散得很晚，周叙送她回家，进门才发现她家客厅堆着没拆的纸箱。她不好意思地把沙发上的衣服抱走：「最近太忙了。」',
    questions: [
      {
        plotDescription: '他挽起袖子，问拖把放在哪。',
        line: "You still have chores? Laundry, dishes, and a fridge that smells like a science project.",
        lineCn: '你还有一堆家务没做？衣服、碗，还有一台味道像实验课作业的冰箱。',
        prompt: "根据上下文，选出画线词汇 'Chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'routine household tasks', cn: '家务，日常杂活', correct: true, reason: '洗衣、洗碗、清理冰箱，都是家里日常要做的事。' },
          { key: 'B', en: 'errands at work', cn: '工作上的差事', correct: false, reason: '场景是在她家，说的是生活琐事不是工作。' },
          { key: 'C', en: 'medical duties', cn: '医疗职责', correct: false, reason: '洗衣洗碗和医院职责没有关系。' }
        ],
        analysis: 'chores 指家里那些重复、琐碎但必须做的活，语气偏日常。',
        wrongFeedback: '你答成「工作差事」，周叙已经拿起她沙发上的脏衣服了。气血 -10',
        afterCorrect: '温以宁抢过衣服：「别动，那是我明天要穿的。」他看了眼那堆衣服，很认真地说：「明天你穿哪件都不合适。」'
      },
      {
        plotDescription: '她坦白自己总把事拖到最后一刻。',
        line: "I procrastinate all weekend, then panic on Sunday night.",
        lineCn: '整个周末我都在拖，然后周日晚上开始抓狂。',
        prompt: "根据上下文，选出画线词汇 'Procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'finish things early', cn: '提前把事情做完', correct: false, reason: '周日晚上才抓狂，说明一直在拖，不是提前完成。' },
          { key: 'B', en: 'keep putting things off', cn: '拖延，一直往后拖', correct: true, reason: '周末拖着不做、最后才慌，正是 procrastinate。' },
          { key: 'C', en: 'plan everything carefully', cn: '把一切都计划好', correct: false, reason: '她的问题是没计划，拖到最后一刻。' }
        ],
        analysis: 'procrastinate 是「拖延」的正式说法，强调明知该做却一再往后推。',
        wrongFeedback: '你答成「计划得好」，她笑了一声：「我也想啊。」气血 -10',
        afterCorrect: '周叙把垃圾袋系好：「那就从今天开始，别等周日。」她靠在门框上看他，忽然觉得这个画面有点熟悉。'
      },
      {
        plotDescription: '他打开她的电视，发现播放记录停在同一部剧。',
        line: "You binge-watched the whole season in one night, didn't you?",
        lineCn: '你一晚上把整季都刷完了，对吧？',
        prompt: "根据上下文，选出画线词汇 'Binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'watch many episodes in a row', cn: '一口气连刷很多集', correct: true, reason: '一晚上看完一整季，正是连续狂刷。' },
          { key: 'B', en: 'record and save', cn: '录下来存着', correct: false, reason: '播放记录停在同一部剧，是看过了，不是录下来没看。' },
          { key: 'C', en: 'skip episodes', cn: '跳过几集', correct: false, reason: '她看的是一整季，不是跳过。' }
        ],
        analysis: 'binge-watch 指不休息地连续追剧，和 binge-eat（暴食）结构类似。',
        wrongFeedback: '你答成「录下来」，他指着进度条：「这可不是没看过的样子。」气血 -10',
        afterCorrect: '她抢过遥控器：「睡前看一集而已。」他挑眉：「一整季也叫一集？」'
      },
      {
        plotDescription: '她辩解自己只是睡前看会儿手机。',
        line: "I scroll in bed until my eyes hurt. That's my real hobby.",
        lineCn: '我躺床上刷手机刷到眼睛疼，这才是我真正的爱好。',
        prompt: "根据上下文，选出画线词汇 'Scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'read paper books', cn: '读纸质书', correct: false, reason: '她说的是在床上看手机，不是读书。' },
          { key: 'B', en: 'call friends', cn: '给朋友打电话', correct: false, reason: '刷到眼睛疼，显然不是通话。' },
          { key: 'C', en: 'move through content on a screen', cn: '刷屏，上下滑动屏幕看内容', correct: true, reason: '躺床上看手机看到眼睛疼，正是不断滑动屏幕。' }
        ],
        analysis: 'scroll 原指滚动，在手机上就是「刷」——不断上下滑动看内容。',
        wrongFeedback: '你答成「读书」，她晃了晃手机：「书哪有这么亮。」气血 -10',
        afterCorrect: '周叙把最后一袋垃圾拎到门口，站了一会儿才说：「你这里缺的不是时间。」她没问缺什么，只把楼道的灯留到了很晚。'
      }
    ],
    completeText: '门关上以后，屋里安静得能听见冰箱的声音。温以宁站在客厅中央，忽然发现沙发被整理过，靠垫摆得整整齐齐。'
  },
  {
    id: 'pl_8',
    index: 8,
    title: '第 8 章 · 走廊尽头的解释',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '连着下了三天雨，急诊走廊的地面一直是湿的。温以宁在护士站打了个盹，醒来发现肩上多了一件外套。',
    questions: [
      {
        plotDescription: '他提醒她戴着手套别乱碰屏幕，刚才差点挂断电话。',
        line: "Don't swipe the screen with gloves on — you'll hang up on the patient.",
        lineCn: '戴着手套别乱滑屏幕，你刚才差点把病人的电话挂了。',
        prompt: "根据上下文，选出画线词汇 'Swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'slide your finger across a screen', cn: '滑屏，用手指在屏幕上滑动', correct: true, reason: '戴手套误触挂断电话，正是滑动屏幕造成的。' },
          { key: 'B', en: 'press the power button', cn: '按电源键', correct: false, reason: '挂断电话是滑动的结果，不是按电源键。' },
          { key: 'C', en: 'wipe the screen clean', cn: '把屏幕擦干净', correct: false, reason: '这里说的是操作手机，不是清洁屏幕。' }
        ],
        analysis: 'swipe 在触屏时代特指手指在屏幕上滑动，接电话、解锁都用得到。',
        wrongFeedback: '你答成「擦屏幕」，他看了一眼你手套上的水：「难怪刚才挂断了。」气血 -10',
        afterCorrect: '温以宁把外套往上拉了拉，闻到一点消毒水和洗衣液混在一起的味道。她没问是谁的。'
      },
      {
        plotDescription: '她说自己还能撑，他让她去值班室躺一会儿。',
        line: "I'll crash on the couch for two hours. Wake me if anything changes.",
        lineCn: '我在沙发上睡两个小时，有情况就叫我。',
        prompt: "根据上下文，选出画线词汇 'Crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'fall down suddenly', cn: '突然摔倒', correct: false, reason: '他说的是在沙发上睡，不是摔倒。' },
          { key: 'B', en: 'stay awake all night', cn: '整夜不睡', correct: false, reason: '他明确说了睡两个小时，和熬夜相反。' },
          { key: 'C', en: 'sleep deeply for a while', cn: '倒头睡一觉', correct: true, reason: '在沙发上睡两小时、让人有情况叫他，正是补觉。' }
        ],
        analysis: 'crash 在口语里可以表示「累到倒头就睡」，也可以指借宿一晚。',
        wrongFeedback: '你答成「摔倒」，她看了看那张窄沙发，觉得确实有点像。气血 -10',
        afterCorrect: '两个小时后他醒过来，外套已经叠好放在桌角，上面压着一杯还温的水。'
      },
      {
        plotDescription: '换班后，他问她要是不困，要不要一起待会儿。',
        line: "Do you want to hang out after the shift? Just coffee, nothing loud.",
        lineCn: '下班后要不要一起待会儿？就喝杯咖啡，不去吵的地方。',
        prompt: "根据上下文，选出画线词汇 'Hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend time together casually', cn: '一起消磨时间，随便待会儿', correct: true, reason: '喝杯咖啡、不去吵的地方，就是轻松地一起待着。' },
          { key: 'B', en: 'work overtime together', cn: '一起加班', correct: false, reason: '他特意说下班后，不是继续工作。' },
          { key: 'C', en: 'go home separately', cn: '各回各家', correct: false, reason: '他是在发出一起待着的邀请。' }
        ],
        analysis: 'hang out 指没有明确目的、轻松地一起待着，是朋友或暧昧对象之间最常见的邀约。',
        wrongFeedback: '你答成「加班」，他沉默了两秒：「我看起来这么不会约人？」气血 -10',
        afterCorrect: '温以宁说自己不困。其实她很困，只是不想那么快回到一个人的房间。'
      },
      {
        plotDescription: '她指了指空下来的休息室，说终于能歇一会儿。',
        line: "Kick back for ten minutes. The ward is quiet.",
        lineCn: '放松十分钟吧，病房现在很安静。',
        prompt: "根据上下文，选出画线词汇 'Kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'stand guard at the door', cn: '站在门口守着', correct: false, reason: '他说病房安静、歇十分钟，是让人放松。' },
          { key: 'B', en: 'run errands quickly', cn: '赶紧去跑腿', correct: false, reason: '和「歇一会儿」正好相反。' },
          { key: 'C', en: 'relax', cn: '放松，歇着', correct: true, reason: '病房安静、只有十分钟，正是让人放松一会儿。' }
        ],
        analysis: 'kick back 是口语里的「放松、歇着」，比 relax 更随意。',
        wrongFeedback: '你答成「守着门」，他笑：「门不用你守，你先坐下。」气血 -10',
        afterCorrect: '雨小了一点。两个人坐在窗边，谁都没说话，咖啡的热气把玻璃糊白了一小块。'
      }
    ],
    completeText: '窗外有辆车驶过，灯光扫过他的侧脸。温以宁忽然想起高三那场雨，他也是这样，把外套搭在她肩上，然后装作什么都没发生。'
  },
  {
    id: 'pl_9',
    index: 9,
    title: '第 9 章 · 那件没送出去的礼物',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '月底的交接夜，桌上堆着一摞没处理的表格。周叙搬了把椅子坐到她对面，把袖子挽到手肘。',
    questions: [
      {
        plotDescription: '她看了眼时间，说先把交接做完。',
        line: "Let's wrap up the handover before midnight.",
        lineCn: '我们在十二点前把交接收尾吧。',
        prompt: "根据上下文，选出画线词汇 'Wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'finish', cn: '收尾，把事做完', correct: true, reason: '十二点前要完成交接，正是把工作收个尾。' },
          { key: 'B', en: 'start over from the beginning', cn: '从头再来', correct: false, reason: '表格已经处理了一半，她是要做完不是重来。' },
          { key: 'C', en: 'delay until tomorrow', cn: '拖到明天', correct: false, reason: '她特意提了「十二点前」，是要今天完成。' }
        ],
        analysis: 'wrap up 是「收尾、结束」的常用短语，工作、会议、项目都能用。',
        wrongFeedback: '你答成「从头再来」，她看着那摞表格，脸色白了一下。气血 -10',
        afterCorrect: '周叙抽走一半：「你念，我写。这样快。」'
      },
      {
        plotDescription: '他说保险那部分交给他。',
        line: "I'll sort out the insurance forms before Friday.",
        lineCn: '周五之前我会把保险表格处理好。',
        prompt: "根据上下文，选出画线词汇 'Sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'throw away', cn: '扔掉', correct: false, reason: '保险表格是要提交的材料，不可能扔掉。' },
          { key: 'B', en: 'copy by hand', cn: '手抄一份', correct: false, reason: '他说的处理是把事情理顺，不是抄写。' },
          { key: 'C', en: 'deal with and organize', cn: '处理并整理好', correct: true, reason: '把一堆表格在周五前弄明白，正是整理解决。' }
        ],
        analysis: 'sort out 强调把混乱的事情理清楚、处理好，常接问题、文件、误会。',
        wrongFeedback: '你答成「扔掉」，他赶紧把那叠表格往自己这边拉。气血 -10',
        afterCorrect: '温以宁看着他写字，忽然说：「你以前字很难看。」他头也没抬：「现在也难看，只是你不好意思说。」'
      },
      {
        plotDescription: '她指着另一叠，说家属那边得有人去沟通。',
        line: "You deal with the family; I'll handle the paperwork.",
        lineCn: '你去处理家属那边，我来管这些文书。',
        prompt: "根据上下文，选出画线词汇 'Deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'handle', cn: '处理，应对', correct: true, reason: '和后面的 handle the paperwork 并列，都是把事情接过去处理。' },
          { key: 'B', en: 'avoid completely', cn: '完全避开', correct: false, reason: '她是分工，不是让谁躲开家属。' },
          { key: 'C', en: 'interview for a job', cn: '面试', correct: false, reason: '这里是医院场景，和求职无关。' }
        ],
        analysis: 'deal with 是最常用的「处理、应对」，对象可以是人、问题或麻烦。',
        wrongFeedback: '你答成「避开」，她抬头看你：「家属那边总得有人去。」气血 -10',
        afterCorrect: '周叙起身前停了一下：「家属要是哭，你别硬撑。」她说：「我知道。」声音很轻。'
      },
      {
        plotDescription: '他看她越写越急，伸手按住她的笔。',
        line: "Hey, chill out. Nobody is blaming you.",
        lineCn: '嘿，冷静点，没人怪你。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'hurry up', cn: '快点', correct: false, reason: '她已经在着急了，他是在让她慢下来。' },
          { key: 'B', en: 'get angry', cn: '发火', correct: false, reason: '他按住她的笔，是安抚不是挑火。' },
          { key: 'C', en: 'calm down', cn: '冷静下来，放松点', correct: true, reason: '「没人怪你」正是在劝她别那么紧绷。' }
        ],
        analysis: 'chill out 是「冷静、别紧张」的口语说法，也可以指放松休息。',
        wrongFeedback: '你答成「发火」，他愣了一下，把手收了回去。气血 -10',
        afterCorrect: '十二点差五分，表格终于理完了。她靠着椅背，说了一句：「其实我一直想送你件东西，到现在还没送出去。」'
      }
    ],
    completeText: '周叙没有问是什么。他只是把最后一盏灯关掉，说：「那就别送了，你留着。」'
  },
  {
    id: 'pl_10',
    index: 10,
    title: '第 10 章 · 没说出口的那个字',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '她说完那句就没再开口，低头收拾桌面。周叙把自己那份表格压在下面，没让她收走。',
    questions: [
      {
        plotDescription: '他看她晚饭又没吃，从口袋里摸出一块巧克力。',
        line: "Keep a snack in your pocket; you skipped lunch again.",
        lineCn: '口袋里放点零食，你午饭又没吃。',
        prompt: "根据上下文，选出画线词汇 'Snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small amount of food between meals', cn: '零食，两餐之间垫肚子的东西', correct: true, reason: '口袋里放一块巧克力垫肚子，正是 snack。' },
          { key: 'B', en: 'a full meal', cn: '一顿正餐', correct: false, reason: '一块巧克力不是正餐，他自己也说「垫一垫」。' },
          { key: 'C', en: 'a hot drink', cn: '一杯热饮', correct: false, reason: '他递的是巧克力，不是饮料。' }
        ],
        analysis: 'snack 指正餐之外的小份食物，作动词就是「吃零食」。',
        wrongFeedback: '你答成「正餐」，他看了看那块巧克力，又看了看你。气血 -10',
        afterCorrect: '温以宁剥开糖纸，掰了一半递回去。他愣了一下，接过来的时候指尖碰到她的。'
      },
      {
        plotDescription: '她嘴唇干得起了皮，他把水杯推过去。',
        line: "You need to hydrate — your lips are cracked.",
        lineCn: '你得喝点水，嘴唇都裂了。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'sleep enough', cn: '睡够觉', correct: false, reason: '嘴唇干裂指向缺水，不是睡眠。' },
          { key: 'B', en: 'drink enough water', cn: '补水，喝够水', correct: true, reason: '嘴唇裂了还递水杯，正是提醒她补充水分。' },
          { key: 'C', en: 'eat more salt', cn: '多吃点盐', correct: false, reason: '吃盐只会更渴，和补水相反。' }
        ],
        analysis: 'hydrate 是「补充水分」，医学和日常语境都常用，名词形式是 hydration。',
        wrongFeedback: '你答成「多睡觉」，她舔了舔干裂的嘴唇，还是没喝水。气血 -10',
        afterCorrect: '她接过杯子喝了一口，忽然说：「你以前也总这样，盯着我喝水。」他说：「你以前也总不喝。」'
      },
      {
        plotDescription: '她坐得太久，站起来时腰响了一声。',
        line: "Stand up and stretch before the next patient.",
        lineCn: '下一个病人来之前，起来拉伸一下。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'extend and move your body', cn: '拉伸，舒展身体', correct: true, reason: '坐久了腰响，站起来活动身体正是 stretch。' },
          { key: 'B', en: 'sit still', cn: '坐着不动', correct: false, reason: '她刚坐太久，他让她起来，不是继续坐着。' },
          { key: 'C', en: 'take medicine', cn: '吃药', correct: false, reason: '他给的是动作建议，不是用药。' }
        ],
        analysis: 'stretch 指伸展身体、拉筋，久坐之后最常见。',
        wrongFeedback: '你答成「坐着别动」，她扶着腰，表情更僵了。气血 -10',
        afterCorrect: '她扶着桌沿伸了个懒腰，白大褂下摆提起来一点。周叙移开视线，去开窗。'
      },
      {
        plotDescription: '她应了一声，眼神却飘到窗外。',
        line: "I zoned out for a second and missed the blood pressure reading.",
        lineCn: '我走神了一秒，血压读数就错过了。',
        prompt: "根据上下文，选出画线词汇 'Zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'fall asleep', cn: '睡着', correct: false, reason: '她说的是「一秒」，是注意力飘走，不是睡着。' },
          { key: 'B', en: 'lose focus', cn: '走神，注意力飘走', correct: true, reason: '眼神飘到窗外、错过读数，正是短暂失去专注。' },
          { key: 'C', en: 'get angry suddenly', cn: '突然生气', correct: false, reason: '她的语气是懊恼，不是发火。' }
        ],
        analysis: 'zone out 指人还在原地，注意力却飘走了，常发生在疲惫或发呆的时候。',
        wrongFeedback: '你答成「睡着」，她摇头：「睡着就不止一秒了。」气血 -10',
        afterCorrect: '周叙伸手在她眼前晃了一下。温以宁回过神，忽然说：「高三那年，我在礼堂后门等过你。」他的手停在半空。'
      }
    ],
    completeText: '走廊的自动灯灭了一盏。周叙很久才开口：「我知道。」温以宁怔住，而他没有再解释，只把窗关小了一点。'
  },
  {
    id: 'pl_11',
    index: 11,
    title: '第 11 章 · 旧铁盒里的信',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '那晚之后，周叙没再解释。温以宁请了半天假搬家，从床底拖出一个旧铁盒，里面是高中时的车票、褪色的收据，还有一封没寄出去的信。房东的消息同时弹了出来：下个月涨租。',
    questions: [
      {
        plotDescription: '她蹲在纸箱中间算账，最后把外卖软件卸载了。',
        line: "I'm broke until payday, so I'm moving to a cheaper place.",
        lineCn: '发工资前我身无分文，只能搬到便宜点的地方。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money', cn: '身无分文，没钱了', correct: true, reason: '要等发工资、还要搬去便宜的地方，说明手头确实没钱。' },
          { key: 'B', en: 'injured', cn: '受伤的', correct: false, reason: 'broke 虽可指骨折，但这里说的是账户余额。' },
          { key: 'C', en: 'broken', cn: '坏掉的', correct: false, reason: '她说的是自己没钱，不是东西坏了。' }
        ],
        analysis: 'broke 形容人时只表示「一分钱都没有」，和 break 的过去式没有关系。',
        wrongFeedback: '你答成「受伤」，她低头看了看自己的手，觉得这误会比没钱还难受。气血 -10',
        afterCorrect: '她把铁盒放进纸箱最上层，动作很轻。盒子底部有一道旧划痕，是高三那年摔的。'
      },
      {
        plotDescription: '房东在电话里说得很客气，涨的钱却一点不含糊。',
        line: "My rent is going up by eight hundred next month.",
        lineCn: '我的房租下个月要涨八百。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'a car payment', cn: '车贷', correct: false, reason: '她和房东谈的是住的地方，不是车。' },
          { key: 'B', en: 'money paid monthly for housing', cn: '房租，每月付的住房钱', correct: true, reason: '房东通知涨价，涨的自然是房租。' },
          { key: 'C', en: 'a hospital bill', cn: '医院账单', correct: false, reason: '电话那头是房东，不是医院收费处。' }
        ],
        analysis: 'rent 指租房子每月付的钱，作动词就是「租」。',
        wrongFeedback: '你答成「车贷」，她看了一眼窗外那辆共享单车，笑不出来。气血 -10',
        afterCorrect: '新房子离医院更远，但便宜。她在纸上写下「早起四十分钟」，写完又划掉了。'
      },
      {
        plotDescription: '她撕下一个信封的背面，把每月的开销一条条列出来。',
        line: "I wrote a new budget on the back of an envelope.",
        lineCn: '我在信封背面重新写了一份预算。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a plan for how much to spend', cn: '预算，开销计划', correct: true, reason: '把每月开销一条条列出来，正是做预算。' },
          { key: 'B', en: 'a list of patients', cn: '病人名单', correct: false, reason: '信封背面写的是钱，不是病人。' },
          { key: 'C', en: 'a kind of insurance', cn: '一种保险', correct: false, reason: '保险要投保，不会一条条列水电饭钱。' }
        ],
        analysis: 'budget 是事先算好的花钱计划，可以很正式，也可以写在信封背面。',
        wrongFeedback: '你答成「病人名单」，她看了看信封，忽然觉得自己的确累糊涂了。气血 -10',
        afterCorrect: '算到最后一行，她把笔停下。这个月唯一超支的，是那盒很贵的草莓。'
      },
      {
        plotDescription: '她打开冰箱，看见自己上周买的那盒草莓，只剩空盒。',
        line: "The only thing I splurged on this month was that box of strawberries.",
        lineCn: '这个月我唯一挥霍的一次，就是那盒草莓。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'saved money carefully', cn: '精打细算', correct: false, reason: '她说那是「唯一超支」的东西，和节省相反。' },
          { key: 'B', en: 'returned something', cn: '退货', correct: false, reason: '草莓已经吃完了，不是退回去。' },
          { key: 'C', en: 'spend a lot on a treat', cn: '挥霍，为心头好大手笔花钱', correct: true, reason: '预算那么紧还买贵草莓，正是偶尔放纵一次。' }
        ],
        analysis: 'splurge 指明知不便宜还是买了，带一点自我纵容的甜。',
        wrongFeedback: '你答成「精打细算」，她看着空盒，觉得自己那点甜也被说没了。气血 -10',
        afterCorrect: '铁盒里的信滑了出来，信封上没写收件人，只写着日期。十年前的六月，正是毕业那天。'
      }
    ],
    completeText: '她没有拆信，只把它压在预算表下面。手机亮了一下，周叙发来一句：「搬哪？我去帮忙。」'
  },
  {
    id: 'pl_12',
    index: 12,
    title: '第 12 章 · 字迹没变',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '信还没拆，手机先响了。一个自称医院人事的人要温以宁交「入职保证金」，说名额只剩最后一个。周叙刚好站在门口，听到一半就把电话接了过去。',
    questions: [
      {
        plotDescription: '对方说制服和培训要三千块，先转账再安排岗位。',
        line: "Three thousand for a uniform? That's a rip-off.",
        lineCn: '一套制服三千？这明摆着是坑钱。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'a good deal', cn: '划算的买卖', correct: false, reason: '他语气里全是不信，说「划算」正好弄反。' },
          { key: 'B', en: 'a free sample', cn: '免费试用品', correct: false, reason: '对方要三千块，和免费完全相反。' },
          { key: 'C', en: 'way overpriced', cn: '坑钱货，价格离谱', correct: true, reason: '一套制服要三千，rip-off 就是明摆着宰人。' }
        ],
        analysis: 'rip-off 指价格远超价值的东西，也可以指一场明目张胆的骗钱。',
        wrongFeedback: '你答成「划算」，周叙已经把免提打开了，让对方再说一遍。气血 -10',
        afterCorrect: '温以宁站在旁边，听见他说话的语气一点点冷下来，像换了个人。'
      },
      {
        plotDescription: '对方说不出科室，也说不清院长姓什么，只反复催转账。',
        line: "That so-called agent is just a freeloader — he wants our money for nothing.",
        lineCn: '那个所谓的代理就是个白嫖怪，什么活都不干就想拿钱。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who takes without paying', cn: '白吃白拿、占便宜的人', correct: true, reason: '不干活只想要钱，正是 freeloader 的核心。' },
          { key: 'B', en: 'a new intern', cn: '新来的实习生', correct: false, reason: '实习生是要干活的，和「什么都不干」相反。' },
          { key: 'C', en: 'a paying customer', cn: '付钱的客户', correct: false, reason: '他是想拿钱的一方，不是付钱的一方。' }
        ],
        analysis: 'freeloader 形容总占别人便宜、从不付出的人，语气很不客气。',
        wrongFeedback: '你答成「实习生」，周叙摇头：「实习生可不敢这么理直气壮。」气血 -10',
        afterCorrect: '他挂了电话，把号码记在纸上：「这种电话以后直接给我。」'
      },
      {
        plotDescription: '温以宁这才后知后觉，对方连她的科室都说错了。',
        line: "It's a scam. The hospital never asks for money by phone.",
        lineCn: '这是骗局。医院从来不会打电话要钱。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a charity event', cn: '慈善活动', correct: false, reason: '慈善不会收「入职保证金」。' },
          { key: 'B', en: 'a trick to steal money', cn: '骗局，骗钱的套路', correct: true, reason: '冒充人事、催转账、说不清科室，全是骗钱手法。' },
          { key: 'C', en: 'a new hospital policy', cn: '医院的新政策', correct: false, reason: '正规政策不会用私人电话催转账。' }
        ],
        analysis: 'scam 作名词是「骗局」，作动词是「诈骗」，是这类电话最准确的定性。',
        wrongFeedback: '你答成「新政策」，她捏着手机，后颈还有点凉。气血 -10',
        afterCorrect: '周叙把那张纸折好放进口袋，忽然说：「你刚才第一反应是信他。」她没反驳，因为她确实信了。'
      },
      {
        plotDescription: '她问他为什么一眼就看出来，他沉默了一会儿。',
        line: "I know about debt. I spent my twenties paying off med school loans.",
        lineCn: '我懂债务的滋味。二十多岁那几年，我都在还医学院的贷款。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you owe', cn: '欠下的债', correct: true, reason: '还医学院的贷款，debt 就是欠着、需要偿还的钱。' },
          { key: 'B', en: 'a scholarship', cn: '奖学金', correct: false, reason: '奖学金是拿到的钱，不会用「还清」来说。' },
          { key: 'C', en: 'a monthly bonus', cn: '每月奖金', correct: false, reason: '奖金是收入，和还债的方向相反。' }
        ],
        analysis: 'debt 指欠别人的钱，pay off debt 就是「还清债务」。',
        wrongFeedback: '你答成「奖学金」，他看了你一眼，没解释那句「还」。气血 -10',
        afterCorrect: '温以宁想说「我也是」，话到嘴边，变成了：「那现在，还清了吗？」'
      }
    ],
    completeText: '他点头，又摇头：「钱还清了，别的没有。」桌上的信还压在那里，信封上的字迹和他胸牌上的签名一模一样。'
  },
  {
    id: 'pl_13',
    index: 13,
    title: '第 13 章 · 一句被听错的话',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '为了谢他，温以宁请他去楼下吃面。结账时刷卡机坏了，周叙翻遍口袋，只摸出几张皱掉的纸币。面馆的电视正在播水电涨价的新闻。',
    questions: [
      {
        plotDescription: '她伸手要付，他先一步把钱压在桌上。',
        line: "My paycheck came in yesterday, so dinner is on me.",
        lineCn: '我昨天刚发薪水，这顿我请。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'a written prescription', cn: '处方', correct: false, reason: '处方不会到账，也不能拿来请客。' },
          { key: 'B', en: 'the money you earn from work', cn: '薪水，工作挣的钱', correct: true, reason: '刚到手、能请客，paycheck 在这里代指发下来的工资。' },
          { key: 'C', en: 'a work schedule', cn: '排班表', correct: false, reason: '排班表不会「到账」，也付不了面钱。' }
        ],
        analysis: 'paycheck 本义是工资单，口语里常直接代指「发到手的薪水」。',
        wrongFeedback: '你答成「处方」，他差点被面汤呛到：「你拿处方请我吃面？」气血 -10',
        afterCorrect: '温以宁没抢过他，只好说：「那下次我请。」他低头吃面，耳朵有点红。'
      },
      {
        plotDescription: '电视里念着水电和燃气调价，她叹了口气。',
        line: "The bills are piling up again — electricity, water, and my phone.",
        lineCn: '账单又堆成山了，电费、水费，还有手机费。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'medical records', cn: '病历', correct: false, reason: '电费水费不是病历，这里说的是要付的钱。' },
          { key: 'B', en: 'hospital beds', cn: '病床', correct: false, reason: '病床不会连着手机费一起「堆成山」。' },
          { key: 'C', en: 'statements you have to pay', cn: '账单，该付的钱', correct: true, reason: '水电手机三项都是每月要付的开销。' }
        ],
        analysis: 'bills 指一张张等着付的账单，piling up 就是越积越多。',
        wrongFeedback: '你答成「病历」，他抬眼：「温医生，职业病又犯了。」气血 -10',
        afterCorrect: '他把自己的汤推过去：「少点外卖，账单就少了。」她没抬头，勺子在汤里转了一圈。'
      },
      {
        plotDescription: '结账时机器坏了，老板说只能收现金。',
        line: "The card machine is down. Do you have any cash on you?",
        lineCn: '刷卡机坏了，你身上有现金吗？',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'paper money', cn: '现金，现钞', correct: true, reason: '刷卡机坏了才要找另一种付款方式，cash 就是实体现金。' },
          { key: 'B', en: 'a bank card', cn: '银行卡', correct: false, reason: '刷卡机都坏了，再问银行卡就没有意义了。' },
          { key: 'C', en: 'a coupon', cn: '优惠券', correct: false, reason: '优惠券不能替代付款，和机器坏了的语境无关。' }
        ],
        analysis: 'cash 指能直接递出去的现金，和刷卡、转账相对。',
        wrongFeedback: '你答成「银行卡」，老板无奈地晃了晃手里那几张纸币。气血 -10',
        afterCorrect: '温以宁从包里摸出一张五十，动作熟练得像做过很多次：「我请你。」'
      },
      {
        plotDescription: '走出面馆，他接了个电话，挂了以后说自己在办房子的事。',
        line: "The bank approved my loan. I'm buying a place near the hospital.",
        lineCn: '银行批了我的贷款，我要在医院附近买套房。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lease contract', cn: '租约', correct: false, reason: '租来的房子不需要银行审批，买房才要。' },
          { key: 'B', en: 'money borrowed from a bank', cn: '贷款，向银行借的钱', correct: true, reason: '买房、银行批款，loan 就是借来按月偿还的钱。' },
          { key: 'C', en: 'a savings account', cn: '储蓄账户', correct: false, reason: '储蓄账户是自己存钱，和银行批钱给你相反。' }
        ],
        analysis: 'loan 指借来的钱，需要连本带息还回去，房贷是最常见的用法之一。',
        wrongFeedback: '你答成「租约」，他顿了顿：「租的房，不用银行批。」气血 -10',
        afterCorrect: '温以宁「哦」了一声，走了几步才反应过来：他说的是「医院附近」。'
      }
    ],
    completeText: '她忽然停下：「你刚才说，医院附近？」周叙也停下，路灯把两个人的影子拉得很近：「嗯。走路十分钟。」'
  },
  {
    id: 'pl_14',
    index: 14,
    title: '第 14 章 · 冷战第三天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '温以宁坚持这顿面要 AA，周叙说不用，她当场把零钱数好放在他桌上。第二天开始，两个人说话都客气了三分，走廊里碰见只点头。',
    questions: [
      {
        plotDescription: '同事问她为什么连一杯咖啡都要算清楚。',
        line: "I'm not cheap — I just don't like wasting money.",
        lineCn: '我不是抠门，我只是不喜欢乱花钱。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'unwilling to spend money', cn: '抠门的，舍不得花钱', correct: true, reason: '她急着否认的正是「舍不得花钱」这个评价。' },
          { key: 'B', en: 'low in price', cn: '价格便宜的', correct: false, reason: '这里说的是人对待钱的态度，不是商品价格。' },
          { key: 'C', en: 'generous', cn: '大方的', correct: false, reason: '她说「不是」，后面又补「不喜欢乱花」，显然不是大方。' }
        ],
        analysis: 'cheap 形容人时是贬义，指小气、舍不得花钱；形容东西时才是「便宜」。',
        wrongFeedback: '你答成「大方」，她笑了一下，那笑有点凉。气血 -10',
        afterCorrect: '她把零钱一枚枚塞回钱包，忽然觉得自己昨晚数的不是钱，是分寸。'
      },
      {
        plotDescription: '路过商场橱窗，她看见一支钢笔，价格让她停住脚。',
        line: "I can't afford that pen, but I can afford dinner.",
        lineCn: '那支笔我买不起，但一顿饭还是请得起的。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'have enough money for', cn: '负担得起，买得起', correct: true, reason: '她对比了笔和饭的价格，说的是钱够不够。' },
          { key: 'B', en: 'deserve something', cn: '配得上某物', correct: false, reason: '这里谈的是钱够不够，不是配不配。' },
          { key: 'C', en: 'repair something', cn: '修理某物', correct: false, reason: '她只是在看价格，没有修东西的意思。' }
        ],
        analysis: 'afford 表示经济上负担得起，常和 can、can not 连用。',
        wrongFeedback: '你答成「配得上」，她看着橱窗里的笔，眼神暗了一下。气血 -10',
        afterCorrect: '她没进去。走了两步，又回头看了一眼那支笔，像在记住一个暂时够不到的东西。'
      },
      {
        plotDescription: '周叙不知什么时候站在她旁边，说那支笔其实很耐用。',
        line: "It's expensive, but it's worth it — you'll use it every day.",
        lineCn: '是有点贵，但值了，你会天天用到它。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'worth the money', cn: '值了，这个钱花得值', correct: true, reason: '虽然贵，但天天用，说明他认为价值对得起价格。' },
          { key: 'B', en: 'a waste of money', cn: '浪费钱', correct: false, reason: '他用了「值了」，和浪费正好相反。' },
          { key: 'C', en: 'too cheap to trust', cn: '便宜得不可靠', correct: false, reason: '他先说了 expensive，不是便宜。' }
        ],
        analysis: 'worth it 表示某样东西的价值对得起你付出的钱或代价。',
        wrongFeedback: '你答成「浪费钱」，他看了你一眼，把话咽了回去。气血 -10',
        afterCorrect: '温以宁说：「你怎么知道我会天天用。」他说：「你写字的时候，笔总没水。」'
      },
      {
        plotDescription: '她后来才知道，他最近晚上还在给别人写报告。',
        line: "He pays for it with a side hustle — writing reports at night.",
        lineCn: '他靠副业付的钱，晚上给人写报告。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'a main full-time job', cn: '全职主业', correct: false, reason: '写报告是晚上额外做的，不是主业。' },
          { key: 'B', en: 'a hobby that costs money', cn: '花钱的爱好', correct: false, reason: '写报告是挣钱，不是花钱的爱好。' },
          { key: 'C', en: 'extra work for extra income', cn: '副业，主业之外的赚钱活', correct: true, reason: '白天上班、晚上写报告挣钱，正是副业。' }
        ],
        analysis: 'side hustle 指主业之外的赚钱方式，比 part-time job 更强调个人经营。',
        wrongFeedback: '你答成「花钱的爱好」，她沉默了很久。气血 -10',
        afterCorrect: '冷战第三天，周叙把一支钢笔放在她桌上，笔帽上还有店里没撕干净的价签。'
      }
    ],
    completeText: '温以宁拿起笔，看见价签下面压着一张小票，日期是昨天。她忽然明白，他不是不在乎，只是从来不会说。'
  },
  {
    id: 'pl_15',
    index: 15,
    title: '第 15 章 · 同一个夜班',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '排班表把两个人排进了同一个夜班。凌晨收了一个年轻病人，为了省钱连挂号都犹豫。温以宁给他处理伤口时，听见他说自己打两份工。',
    questions: [
      {
        plotDescription: '年轻人说两份工加起来，也只够在这座城市活着。',
        line: "He works two jobs at minimum wage and still can't pay the rent.",
        lineCn: '他打两份工，拿最低工资，还是付不起房租。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest legal pay', cn: '最低工资，法定最低报酬', correct: true, reason: '两份工、仍付不起房租，强调的就是收入处在法定下限。' },
          { key: 'B', en: 'a high salary', cn: '高薪', correct: false, reason: '如果高薪，就不会两份工还付不起房租。' },
          { key: 'C', en: 'unpaid overtime', cn: '无偿加班', correct: false, reason: '这里说的是每小时的报酬标准，不是加班有没有钱。' }
        ],
        analysis: 'minimum wage 是法律规定的每小时最低工资，常用来讨论底层收入困境。',
        wrongFeedback: '你答成「高薪」，病人苦笑了一下，把袖子放了下来。气血 -10',
        afterCorrect: '温以宁给他开了最便宜的药，又在单子上多写了一句「按时吃饭」。'
      },
      {
        plotDescription: '缴费时，年轻人的卡刷了两次都被拒。',
        line: "My account went into overdraft again this month.",
        lineCn: '我这个月账户又透支了。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'a savings plan', cn: '储蓄计划', correct: false, reason: '卡被拒、账户透支，是钱不够，不是存钱计划。' },
          { key: 'B', en: 'spending more than you have', cn: '透支，花超了账户里的钱', correct: true, reason: '刷卡被拒、账户见底，正是透支的状态。' },
          { key: 'C', en: 'a bank bonus', cn: '银行奖励', correct: false, reason: '奖励不会让卡刷不出来。' }
        ],
        analysis: 'overdraft 指账户余额不足却仍被扣款，形成负数，也就是「透支」。',
        wrongFeedback: '你答成「储蓄计划」，年轻人低下头，手指抠着卡边。气血 -10',
        afterCorrect: '周叙没说话，直接把自己的卡递过去。温以宁按住他的手：「我来。」'
      },
      {
        plotDescription: '交完费，两个人在走廊尽头站着，她说起自己刚工作那两年。',
        line: "I saved up for two years just to pay off my dad's hospital bills.",
        lineCn: '我攒了两年钱，只为了还清我爸的住院费。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money aside over time', cn: '攒钱，一点点存起来', correct: true, reason: '两年才凑够，正是长期把钱存下来。' },
          { key: 'B', en: 'borrow money from a bank', cn: '向银行借钱', correct: false, reason: '她说的是攒，不是借。' },
          { key: 'C', en: 'spend it all at once', cn: '一次性花光', correct: false, reason: '攒两年和一次花光是相反的。' }
        ],
        analysis: 'save up 强调为了某个目标持续存钱，和 save 单独用相比更侧重过程。',
        wrongFeedback: '你答成「向银行借」，她笑了一下：「那时候没人肯借给我。」气血 -10',
        afterCorrect: '周叙看着走廊尽头：「我那时候在还贷款，什么都不知道。」她说：「现在知道了。」'
      },
      {
        plotDescription: '她忽然问他，为什么学医。',
        line: "I wanted to invest in something that lasts — even if it takes years.",
        lineCn: '我想投资在能长久的东西上，哪怕要花很多年。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'put money or effort into future gain', cn: '投资，为将来的回报投入', correct: true, reason: '学医要花很多年，是把时间和钱投进长远的事。' },
          { key: 'B', en: 'waste time on nothing', cn: '把时间浪费在没意义的事上', correct: false, reason: '他说「能长久的东西」，显然认为值得，不是浪费。' },
          { key: 'C', en: 'give everything away', cn: '把一切送人', correct: false, reason: '投资是投入以求得回报，不是无条件送出去。' }
        ],
        analysis: 'invest 不只是金钱投资，也可以指投入时间、精力去换长远的回报。',
        wrongFeedback: '你答成「浪费时间」，他摇头：「那我这十年也太亏了。」气血 -10',
        afterCorrect: '温以宁没接话。走廊的钟走到四点，她忽然觉得，这个夜班没有那么长了。'
      }
    ],
    completeText: '天快亮时，年轻人出院了，临走前朝他们鞠了一躬。周叙把值班室的门推开，说：「睡一会儿吧，我守着。」'
  },
  {
    id: 'pl_16',
    index: 16,
    title: '第 16 章 · 凌晨三点的便利店',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '下班后两个人都没回家，拐进医院对面的便利店。关东煮的热气糊住玻璃，收银台边贴着一张手写的告示：小本生意，恕不赊账。',
    questions: [
      {
        plotDescription: '他看着货架上的标价，说这座城市什么都在涨。',
        line: "Everything costs more after tax in this city.",
        lineCn: '在这座城市，什么东西加上税都更贵。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid to the government', cn: '税，交给政府的钱', correct: true, reason: '标价之外还要加的那部分，就是税。' },
          { key: 'B', en: 'a discount', cn: '折扣', correct: false, reason: '加税让价格更高，和折扣相反。' },
          { key: 'C', en: 'a delivery fee', cn: '配送费', correct: false, reason: '在店里买东西不涉及配送费。' }
        ],
        analysis: 'tax 是政府向个人或商品征收的钱，价格里常标「不含税」。',
        wrongFeedback: '你答成「折扣」，他举了举手里那瓶水：「要是有折扣就好了。」气血 -10',
        afterCorrect: '温以宁拿了两串关东煮，又放回去一串。他看见了，没说什么，结账时多拿了一串。'
      },
      {
        plotDescription: '她说今年退了一笔钱，算这个月唯一的惊喜。',
        line: "I got a tax refund, so tonight is my treat.",
        lineCn: '我拿到一笔退税，今晚我请。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you owe', cn: '欠的钱', correct: false, reason: '她说这是「惊喜」，欠钱不会是惊喜。' },
          { key: 'B', en: 'money returned to you', cn: '退款，退回来的钱', correct: true, reason: '多缴的税退回来，正是 refund。' },
          { key: 'C', en: 'a fine you pay', cn: '要交的罚款', correct: false, reason: '罚款是往外付，退税是收回来。' }
        ],
        analysis: 'refund 指多付或取消交易后退回的钱，tax refund 就是退税。',
        wrongFeedback: '你答成「欠的钱」，她把钱包合上：「那我可请不起。」气血 -10',
        afterCorrect: '周叙笑她：「一笔退税就高兴成这样。」她说：「你不懂，这叫意外之财。」'
      },
      {
        plotDescription: '结账时他把小票折好，放进外套内袋。',
        line: "Keep the receipt — we might need to return it.",
        lineCn: '把小票留着，说不定要退货。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a shopping list', cn: '购物清单', correct: false, reason: '结账后打出来的是付款凭证，不是清单。' },
          { key: 'B', en: 'a coupon', cn: '优惠券', correct: false, reason: '小票不能当优惠券用，这里是退换货的凭据。' },
          { key: 'C', en: 'proof of payment', cn: '收据，付款凭证', correct: true, reason: '要退货就需要证明在这里买过，正是 receipt。' }
        ],
        analysis: 'receipt 是交易凭证，退货、报销都靠它，注意 p 不发音。',
        wrongFeedback: '你答成「购物清单」，他展开那张纸，上面只有金额和时间。气血 -10',
        afterCorrect: '温以宁瞥见内袋里还塞着别的小票，最上面那张，是那家钢笔店的。'
      },
      {
        plotDescription: '临走时，他把找零放进柜台上的小费罐。',
        line: "The old man at the noodle shop never takes a tip.",
        lineCn: '面馆那位老人从来不肯收小费。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'advice', cn: '建议', correct: false, reason: '放进罐子里的找零是钱，不是建议。' },
          { key: 'B', en: 'extra money for good service', cn: '小费，给服务人员的额外钱', correct: true, reason: '把找零留给店员，就是给服务的小费。' },
          { key: 'C', en: 'a small mistake', cn: '小错误', correct: false, reason: '这里说的是钱，不是差错。' }
        ],
        analysis: 'tip 作名词可以指小费，也可以指建议、诀窍，要看语境。',
        wrongFeedback: '你答成「建议」，他看着那个罐子：「建议可装不进去。」气血 -10',
        afterCorrect: '走出便利店，天边已经发白。温以宁忽然说：「你那条小票，是钢笔店的吧。」他脚步慢了半拍。'
      }
    ],
    completeText: '他没有否认，只说：「本来想等你生日。」她低头看着脚下的路，觉得自己这十年，好像一直在错过同一句话。'
  },
  {
    id: 'pl_17',
    index: 17,
    title: '第 17 章 · 一张人事通知',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '早交班时，公告栏上贴出新的人事通知。科室要扩编，也要清退外包人员。温以宁站在人群后面，看见周叙的名字出现在拟任名单第一行。',
    questions: [
      {
        plotDescription: '护士长说夜班终于要加人了。',
        line: "They're going to hire two more nurses for the night shift.",
        lineCn: '夜班要再招两个护士。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'employ someone', cn: '雇用，招人', correct: true, reason: '夜班缺人、要加两个，正是招人进来。' },
          { key: 'B', en: 'dismiss someone', cn: '把某人辞退', correct: false, reason: '招人补夜班和辞退正好相反。' },
          { key: 'C', en: 'train someone for free', cn: '免费培训某人', correct: false, reason: '公告说的是增加岗位，不是培训。' }
        ],
        analysis: 'hire 是「雇用、招聘」，和 fire（解雇）是一对反义动作。',
        wrongFeedback: '你答成「辞退」，护士长看了你一眼：「那我们夜班更没人了。」气血 -10',
        afterCorrect: '温以宁松了口气。至少下个月，她不用一个人守整层楼。'
      },
      {
        plotDescription: '通知后面附了一段说明，说外包公司伪造了发票。',
        line: "They fired the supplier after the fake invoice.",
        lineCn: '伪造发票的事出来以后，他们把供应商解雇了。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'light a flame', cn: '点火', correct: false, reason: '这里是处理供应商，不是真的放火。' },
          { key: 'B', en: 'dismiss from a job', cn: '解雇，开除', correct: true, reason: '伪造发票后终止合作、让其走人，正是解雇。' },
          { key: 'C', en: 'give a warning', cn: '给个警告', correct: false, reason: '通知里已经终止合作，不只是警告。' }
        ],
        analysis: 'fire 作动词在职场里是「解雇、开除」，语气比 lay off 更直接。',
        wrongFeedback: '你答成「点火」，旁边的实习生差点笑出来。气血 -10',
        afterCorrect: '她忽然想起那通诈骗电话，原来不是巧合。有人早就知道科室在换人。'
      },
      {
        plotDescription: '午休时，她跟周叙说自己动过离开的念头。',
        line: "I thought about quitting, but then you showed up.",
        lineCn: '我想过辞职，结果你就出现了。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'leave a job voluntarily', cn: '辞职，主动离开工作', correct: true, reason: '她说的是自己动过离开的念头，正是主动辞职。' },
          { key: 'B', en: 'be promoted', cn: '被升职', correct: false, reason: '「离开」和升职是两回事。' },
          { key: 'C', en: 'take a short break', cn: '短暂休息', correct: false, reason: 'quit 是彻底离开岗位，不是休息一下。' }
        ],
        analysis: 'quit 指主动辞去工作，也可以指戒掉某个习惯。',
        wrongFeedback: '你答成「升职」，她笑：「我要是升职，还用得着犹豫？」气血 -10',
        afterCorrect: '周叙停下筷子：「那你现在还想走吗？」她没回答，只把汤喝完了。'
      },
      {
        plotDescription: '下午的会上，主任宣布了拟任名单。',
        line: "He got a promotion, and he didn't even tell me.",
        lineCn: '他升职了，居然一个字都没跟我说。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a move to a higher position', cn: '升职，职位提升', correct: true, reason: '名单第一行、主任宣布，说的是职位晋升。' },
          { key: 'B', en: 'a pay cut', cn: '降薪', correct: false, reason: '拟任名单第一行是好事，不是降薪。' },
          { key: 'C', en: 'a transfer to another city', cn: '调去外地', correct: false, reason: '通知里说的是职位，不是地点。' }
        ],
        analysis: 'promotion 指职位晋升，也可以指促销活动，这里显然是前者。',
        wrongFeedback: '你答成「降薪」，她皱眉：「那他怎么还笑得出来。」气血 -10',
        afterCorrect: '散会后她走过去，把通知单放在他面前：「周主任，恭喜。」他看着她：「你生气了。」'
      }
    ],
    completeText: '她说不生气。可回到座位，她还是把那支钢笔从抽屉里拿出来，放进了包里最深的夹层。'
  },
  {
    id: 'pl_18',
    index: 18,
    title: '第 18 章 · 病历本里的糖',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '升职以后，周叙的会越来越多。温以宁连着三天在走廊里只看见他的背影。第四天，她在自己的病历本里摸到一颗糖，糖纸被压得很平。',
    questions: [
      {
        plotDescription: '她值完夜班又接了白班，眼睛下面一片青。',
        line: "I've been doing overtime every night this week.",
        lineCn: '这周我每天晚上都在加班。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra hours beyond normal work', cn: '加班，正常工时之外的时间', correct: true, reason: '夜班后又接白班，正是超出正常工时的部分。' },
          { key: 'B', en: 'a day off', cn: '调休', correct: false, reason: '她一直在上班，没有休息。' },
          { key: 'C', en: 'a night shift only', cn: '只上夜班', correct: false, reason: '她夜班之后还接了白班，不止夜班。' }
        ],
        analysis: 'overtime 指超出正常工作时间的那部分，可以拿加班费或调休。',
        wrongFeedback: '你答成「调休」，她揉了揉眼睛：「我也想啊。」气血 -10',
        afterCorrect: '她把糖放进嘴里，橘子味的。十年前他抽屉里也总有这个味道。'
      },
      {
        plotDescription: '主任催一份质量报告，说明天早上就要。',
        line: "The deadline is Friday, and the report isn't half done.",
        lineCn: '截止时间是周五，报告连一半都没写完。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the final time to finish', cn: '截止时间，死线', correct: true, reason: '周五必须交、报告还没写完，正是最后期限。' },
          { key: 'B', en: 'the start of a project', cn: '项目的开始', correct: false, reason: '报告已经写到一半，这里说的是结束期限。' },
          { key: 'C', en: 'a break between shifts', cn: '班次之间的休息', correct: false, reason: '和报告提交时间没有关系。' }
        ],
        analysis: 'deadline 是必须完成某事的最后时间，口语里常说「赶死线」。',
        wrongFeedback: '你答成「项目开始」，她看了眼日历，觉得更绝望了。气血 -10',
        afterCorrect: '周叙把自己的电脑推过来：「一半我写。你别熬到三点。」'
      },
      {
        plotDescription: '报告是给一家合作机构做的，对方要求改第三版。',
        line: "The client wants everything changed by Monday.",
        lineCn: '客户要求周一之前全部改掉。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a customer who pays for a service', cn: '客户，付费买服务的人', correct: true, reason: '提出修改要求、约定时间的合作方，正是 client。' },
          { key: 'B', en: 'a patient in the ER', cn: '急诊病人', correct: false, reason: '这里谈的是报告和修改，不是来就诊的人。' },
          { key: 'C', en: 'a new employee', cn: '新员工', correct: false, reason: '提出要求的是外部合作方，不是同事。' }
        ],
        analysis: 'client 指购买专业服务的客户，和 customer 相近，但更常用于服务、咨询场景。',
        wrongFeedback: '你答成「急诊病人」，她笑了一声：「这个病人还挺会提要求。」气血 -10',
        afterCorrect: '两个人并排改到深夜，谁也没提那颗糖。窗外有清洁车经过，灯一闪一闪。'
      },
      {
        plotDescription: '凌晨一点，她提醒他早上还有会。',
        line: "The meeting ran two hours over last time.",
        lineCn: '上次那个会开了两个多小时。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned discussion', cn: '会议，约好的讨论', correct: true, reason: '开到凌晨、还超时两小时，说的就是会议。' },
          { key: 'B', en: 'a chance encounter', cn: '偶遇', correct: false, reason: '会议是有安排、有时长的，不是偶遇。' },
          { key: 'C', en: 'a surgery', cn: '手术', correct: false, reason: '这里说的是开会，不是上手术台。' }
        ],
        analysis: 'meeting 是事先安排的会议、碰面，run over 表示超时。',
        wrongFeedback: '你答成「偶遇」，他看了眼日程表：「这偶遇还挺长。」气血 -10',
        afterCorrect: '周叙合上电脑：「那这次我早点结束。」停了一下，他又说：「结束以后，我有话跟你说。」'
      }
    ],
    completeText: '温以宁「嗯」了一声，把那颗糖纸展平，夹进病历本。她忽然有点怕，又有点期待。'
  },
  {
    id: 'pl_19',
    index: 19,
    title: '第 19 章 · 心照不宣',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '分诊流程改造做成了一个小项目，运行一个月，急诊的拥堵少了一半。庆功的盒饭摆在会议室，周叙却被人叫去了人事科。',
    questions: [
      {
        plotDescription: '会上有人提起这一个月的变化。',
        line: "The new triage project is finally working.",
        lineCn: '新的分诊项目终于见效了。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work', cn: '项目，有计划的一项工作', correct: true, reason: '改造流程、运行一个月，正是有目标有计划的项目。' },
          { key: 'B', en: 'a quick chat', cn: '随便聊两句', correct: false, reason: '运行一个月、减少拥堵，显然不是随便聊聊。' },
          { key: 'C', en: 'a personal favor', cn: '私人帮忙', correct: false, reason: '这是科室层面的工作，不是私人人情。' }
        ],
        analysis: 'project 指有明确目标和周期的一项工作，可大可小。',
        wrongFeedback: '你答成「随便聊聊」，护士长看了看投影上的数据，没说话。气血 -10',
        afterCorrect: '温以宁坐在角落吃饭，听见有人小声说：「这次改造，周主任压了不少人。」'
      },
      {
        plotDescription: '散会后，消息传开：当初伪造记录的那个住院医被处理了。',
        line: "The resident who forged the records was fired.",
        lineCn: '那个伪造记录的住院医被开除了。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'dismissed from a job', cn: '被开除、被解雇', correct: true, reason: '伪造记录后被处理，正是被单位开除。' },
          { key: 'B', en: 'praised publicly', cn: '被公开表扬', correct: false, reason: '伪造记录是严重问题，不可能被表扬。' },
          { key: 'C', en: 'moved to another department', cn: '被调到别的科室', correct: false, reason: '这里的处理是终止工作，不是平级调动。' }
        ],
        analysis: 'fired 是 fire 的过去分词，职场里表示「被解雇」。',
        wrongFeedback: '你答成「被表扬」，旁边的人看了你一眼，把声音压得更低。气血 -10',
        afterCorrect: '温以宁放下筷子。她记得那个住院医，也记得他曾经替周叙挡过一次投诉。'
      },
      {
        plotDescription: '她忍不住问护士长，医院到底是怎么想的。',
        line: "The hospital is not a business — people aren't numbers.",
        lineCn: '医院不是一门生意，人不是数字。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'a company or commercial activity', cn: '生意，商业活动', correct: true, reason: '和「人不是数字」对照，business 指追求利润的商业运作。' },
          { key: 'B', en: 'a charity', cn: '慈善机构', correct: false, reason: '她说「不是生意」，不是说它是慈善机构。' },
          { key: 'C', en: 'a government office', cn: '政府机关', correct: false, reason: '这里对比的是逐利行为，不是机构性质。' }
        ],
        analysis: 'business 可以指生意、公司，也可以指「关我什么事」，这里取商业运作之意。',
        wrongFeedback: '你答成「慈善机构」，护士长叹了口气：「要真是就好了。」气血 -10',
        afterCorrect: '护士长说：「上面要的是数字，周主任要的是人。你说他得罪谁？」'
      },
      {
        plotDescription: '晚上，周叙回来了，脸色很平静，只说事情已经谈好。',
        line: "We made a deal: I keep the project, and they keep their hands off my team.",
        lineCn: '我们谈成了一笔交易：项目归我，他们别碰我的团队。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement', cn: '交易，达成的协议', correct: true, reason: '双方各让一步、谈成条件，正是达成协议。' },
          { key: 'B', en: 'a serious illness', cn: '重病', correct: false, reason: '这里说的是谈判结果，和疾病无关。' },
          { key: 'C', en: 'a written prescription', cn: '处方', correct: false, reason: '处方不会涉及项目和团队。' }
        ],
        analysis: 'deal 在口语里常指「交易、协议」，make a deal 就是谈成条件。',
        wrongFeedback: '你答成「重病」，他愣了一下：「我看起来像病了？」气血 -10',
        afterCorrect: '温以宁看着他，忽然说：「你把自己搭进去了。」他说：「本来就该有人搭。」'
      }
    ],
    completeText: '那天晚上，两个人在空掉的会议室坐了很久。谁都没提「有话要说」，但好像都已经知道了。'
  },
  {
    id: 'pl_20',
    index: 20,
    title: '第 20 章 · 第二幕落幕',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '六月，科室所有人的合同一起到期。人事把续签材料发下来，走廊里到处是低声讨论。温以宁在名单最后看见自己的名字，后面跟着一行小字：待定。',
    questions: [
      {
        plotDescription: '护士长问她续不续，她盯着那张纸。',
        line: "My contract ends in June. I don't know if they'll renew it.",
        lineCn: '我的合同六月到期，不知道他们会不会续。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a formal work agreement', cn: '合同，正式的工作协议', correct: true, reason: '到期、续签，说的正是工作合同。' },
          { key: 'B', en: 'a patient file', cn: '病人档案', correct: false, reason: '档案不存在「续签」这回事。' },
          { key: 'C', en: 'a shift schedule', cn: '排班表', correct: false, reason: '排班表每月重排，不会说「到期续不续」。' }
        ],
        analysis: 'contract 指具有约束力的正式协议，工作合同是最常见的场景。',
        wrongFeedback: '你答成「排班表」，她摇头：「排班表可没这么要命。」气血 -10',
        afterCorrect: '她把材料折好放进包里，和那支钢笔放在一起。'
      },
      {
        plotDescription: '有人在会上提出，把急诊的夜间值班外包出去更省钱。',
        line: "The private clinic cares about profit, not patients.",
        lineCn: '那家私立机构只在乎利润，不在乎病人。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'money gained after costs', cn: '利润，扣除成本后赚的钱', correct: true, reason: '为了省钱、外包值班，指向的正是利润。' },
          { key: 'B', en: 'the number of patients', cn: '病人数量', correct: false, reason: '句子里明确说「不是病人」，所以不是数量。' },
          { key: 'C', en: "a doctor license", cn: '医师执照', correct: false, reason: '执照和赚钱多少没有直接关系。' }
        ],
        analysis: 'profit 指收入减去成本后的盈余，常被用来批评只看钱不看人的做法。',
        wrongFeedback: '你答成「病人数量」，她苦笑：「他们连数量都不看。」气血 -10',
        afterCorrect: '周叙在会上直接反对。散会时他脸色不好，却还是先去看了留观的病人。'
      },
      {
        plotDescription: '月底发钱时，工资条上多了一栏。',
        line: "We got a bonus for the extra shifts.",
        lineCn: '我们加了班，拿到一笔奖金。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money on top of salary', cn: '奖金，工资之外的额外收入', correct: true, reason: '工资条上多出来的一栏，正是额外奖励。' },
          { key: 'B', en: 'a deduction', cn: '扣款', correct: false, reason: '多出来的一栏是加钱，不是扣钱。' },
          { key: 'C', en: 'a tax', cn: '税款', correct: false, reason: '税是从工资里扣的，不是额外给的。' }
        ],
        analysis: 'bonus 指正常薪资之外的奖励，通常和业绩、加班或项目挂钩。',
        wrongFeedback: '你答成「扣款」，她指着那栏数字：「这扣得也太客气了。」气血 -10',
        afterCorrect: '温以宁看着那笔钱，刚好够买那支笔。她笑了一下，把钱转进了另一个账户。'
      },
      {
        plotDescription: '同一天，她无意中听见人事在核对薪资。',
        line: "My salary is the same as three years ago.",
        lineCn: '我的薪资和三年前一样。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed monthly pay', cn: '薪资，固定的月薪', correct: true, reason: '和三年前对比、按月发放，正是 salary。' },
          { key: 'B', en: 'a one-time gift', cn: '一次性礼物', correct: false, reason: '一次性礼物不会拿来和三年前比。' },
          { key: 'C', en: 'a travel allowance', cn: '出差补贴', correct: false, reason: '这里说的是整体工资，不是单项补贴。' }
        ],
        analysis: 'salary 指按月固定发放的薪资，和按小时计算的 wage 不同。',
        wrongFeedback: '你答成「一次性礼物」，她笑不出来：「要是礼物就好了。」气血 -10',
        afterCorrect: '她把续签材料放在桌上，迟迟没签字。窗外的蝉开始叫，六月真的来了。'
      }
    ],
    completeText: '第二幕到这里结束。温以宁在「是否续签」那一栏停了很久，最后写下两个字：留下。'
  },
  {
    id: 'pl_21',
    index: 21,
    title: '第 21 章 · 他先开了口',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '分诊流程通过验收那晚，科室在楼下火锅店包了两桌。温以宁只喝了两杯就上脸，周叙被几个年轻医生轮着灌。散场时她扶他下台阶，他忽然停下来，说了一句谁都没听清的话。',
    questions: [
      {
        plotDescription: '有人提起周叙高中时的外号，他笑着，笑意却没到眼睛里。',
        line: "He looked pissed off when they brought up his old nickname.",
        lineCn: '他们提起他高中时的外号时，他明显火大了。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry and offended', cn: '火大，被惹毛了', correct: true, reason: '笑意没到眼睛里，说明他被戳到了，正是火大。' },
          { key: 'B', en: 'a little sleepy', cn: '有点困', correct: false, reason: '他刚被灌了酒，但这里写的是笑不出来，不是犯困。' },
          { key: 'C', en: 'pleasantly surprised', cn: '又惊又喜', correct: false, reason: '旧外号不是惊喜，是旧伤。' }
        ],
        analysis: 'pissed off 是口语里非常常用的「火大、被惹毛」，语气比 annoyed 重，比 furious 生活化。',
        wrongFeedback: '你答成「又惊又喜」，可桌上那一瞬的安静，不是惊喜该有的样子。气血 -10',
        afterCorrect: '温以宁替他接了下一杯，说：「他酒量不行，我替他。」周叙侧过头看她，眼神有点晃。'
      },
      {
        plotDescription: '她手一抖，半杯红酒全洒在他的白衬衫上。他先低头看了看，然后笑了。',
        line: "Don't freak out — it's just a shirt, I have five more.",
        lineCn: '别抓狂，就是件衬衫，我还有五件。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'calm down completely', cn: '彻底冷静下来', correct: false, reason: '他说的是「别 freak out」，是叫人别失控，不是叫人冷静这个动作。' },
          { key: 'B', en: 'panic and lose control', cn: '抓狂，情绪失控', correct: true, reason: '衬衫被洒了酒，他反而先劝她别崩溃，freak out 正是这个意思。' },
          { key: 'C', en: 'take the shirt off', cn: '把衬衫脱下来', correct: false, reason: 'freak out 和脱衣服没有关系。' }
        ],
        analysis: 'freak out 指因为小事突然情绪失控、抓狂，常出现在「别慌」这种安慰里。',
        wrongFeedback: '你答成「把衬衫脱下来」，她愣了一下，把纸巾按得更用力了。气血 -10',
        afterCorrect: '她拿纸巾按在他胸口，按了两下才发现手在抖。他说：「温以宁，你这样我更像个病人了。」'
      },
      {
        plotDescription: '散场后两个人坐在店门口的台阶上，街灯把地面的油光映得发亮。',
        line: "I'm exhausted — I've been on my feet for sixteen hours.",
        lineCn: '我精疲力尽了，站了整整十六个小时。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely worn out', cn: '精疲力尽，被榨干', correct: true, reason: '站了十六个小时，说的正是身体的耗尽。' },
          { key: 'B', en: 'a little drunk', cn: '有点喝多了', correct: false, reason: '句子给的理由是站了十六小时，不是喝了多少。' },
          { key: 'C', en: 'very hungry', cn: '很饿', correct: false, reason: '刚吃完火锅，饿不成立。' }
        ],
        analysis: 'exhausted 表示体力或精力被彻底耗尽，比 tired 更重。',
        wrongFeedback: '你答成「很饿」，她把手里打包的酥肉递过去：「那你怎么不吃？」气血 -10',
        afterCorrect: '她把外套脱下来搭在他肩上，他忽然说：「温以宁，今天谢谢你。」'
      },
      {
        plotDescription: '第二天早上九点，她给他发消息，问他还活着吗。',
        line: "Do you have a hangover? You drank a lot last night.",
        lineCn: '你宿醉了吗？昨晚你喝了不少。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'a headache and nausea after drinking', cn: '宿醉，酒后的头痛恶心', correct: true, reason: '昨晚喝多了、今天难受，正是 hangover。' },
          { key: 'B', en: 'a happy memory of last night', cn: '昨晚的美好回忆', correct: false, reason: '句子在问他身体难不难受，不是在聊回忆。' },
          { key: 'C', en: 'an empty stomach', cn: '空腹', correct: false, reason: '空腹是喝酒前的事，hangover 是喝完之后。' }
        ],
        analysis: 'hangover 特指饮酒过量后第二天的不适，和「还没醒酒」是两件事。',
        wrongFeedback: '你答成「空腹」，她回了个省略号：他昨天可一点没空着。气血 -10',
        afterCorrect: '他回得很快：还行。隔了半分钟又补一句：昨晚我说的话，你别当真。'
      }
    ],
    completeText: '她盯着那句「你别当真」看了很久，最后只回了一个「嗯」。放下手机，她才发现自己手心全是汗。'
  },
  {
    id: 'pl_22',
    index: 22,
    title: '第 22 章 · 我配不上你',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '夜班结束，周叙在楼梯间坐到天亮。两个年轻医生从上面下来，压着声音说：温医生明明能留在省院，为什么回这儿来。他捏着那杯凉透的咖啡，没出声。',
    questions: [
      {
        plotDescription: '他终于对一个老同学说起从前那段关系，说得很少。',
        line: "That relationship was toxic — we made each other worse.",
        lineCn: '那段关系是有毒的，我们让彼此都变得更糟。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful and draining', cn: '有毒的，互相消耗的', correct: true, reason: '让彼此变得更糟，正是 toxic 的核心。' },
          { key: 'B', en: 'sweet but short', cn: '甜蜜但短暂', correct: false, reason: '让人变糟的关系，谈不上甜蜜。' },
          { key: 'C', en: 'long and boring', cn: '漫长又无聊', correct: false, reason: '句子说的是伤害，不是无聊。' }
        ],
        analysis: 'toxic 本义有毒，口语里形容关系、环境让人被消耗、被伤害。',
        wrongFeedback: '你答成「甜蜜但短暂」，老同学沉默了一下：「你听完整句了吗？」气血 -10',
        afterCorrect: '他把咖啡放下，忽然想到：这十年，他好像一直在重复同一种关系。'
      },
      {
        plotDescription: '电梯在两层之间停了十几秒，门没开，两个人谁也没说话。',
        line: "It got awkward when the elevator stopped and neither of us spoke.",
        lineCn: '电梯停下、谁都不说话的时候，气氛尴尬死了。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'uncomfortable and embarrassing', cn: '尴尬，令人不自在', correct: true, reason: '门不开、没人说话，正是尴尬的沉默。' },
          { key: 'B', en: 'dangerous', cn: '危险的', correct: false, reason: '电梯只是停了一下，句子强调的是沉默带来的不自在。' },
          { key: 'C', en: 'exciting', cn: '令人兴奋的', correct: false, reason: '十几秒的沉默不像兴奋。' }
        ],
        analysis: 'awkward 形容场面、对话让人不自在，和「危险」无关。',
        wrongFeedback: '你答成「危险的」，她低声说：「你倒是一点都不觉得尴尬。」气血 -10',
        afterCorrect: '门开了，他先迈出去，走了两步又停住，等她走上来。'
      },
      {
        plotDescription: '他把老同学那句话复述给温以宁：我这十年，像在候诊室排队。',
        line: "He called his love life a waiting room — I'm dead.",
        lineCn: '他形容自己的感情生活像候诊室，笑死我了。',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'dying of laughter', cn: '笑死我了', correct: true, reason: '她把这句话当段子转述，正是被逗到不行。' },
          { key: 'B', en: 'actually dead', cn: '真的死了', correct: false, reason: '这是口语夸张，不是字面死亡。' },
          { key: 'C', en: 'completely exhausted', cn: '累到极点', correct: false, reason: '句子里是笑，不是累。' }
        ],
        analysis: 'dead 在网络口语里常表示「笑死我了」，情绪上是极度好笑。',
        wrongFeedback: '你答成「累到极点」，她笑得更厉害：「我说的是好笑。」气血 -10',
        afterCorrect: '他看着她笑，忽然说：「我没在开玩笑。」她的笑停在一半。'
      },
      {
        plotDescription: '她把签好的续签合同拍下来发给他，只写了两个字：留下。',
        line: "I'm thrilled you're staying — really, I am.",
        lineCn: '你要留下来，我太高兴了，真的。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'a little relieved', cn: '有点放心', correct: false, reason: 'relieved 只是松口气，thrilled 是高兴到不行。' },
          { key: 'B', en: 'extremely happy', cn: '爽飞了，极度高兴', correct: true, reason: '连说两遍 really，说明情绪强烈。' },
          { key: 'C', en: 'not surprised at all', cn: '一点也不意外', correct: false, reason: '不意外是平静，thrilled 是激动。' }
        ],
        analysis: 'thrilled 比 happy 强烈得多，常用来表达「太棒了、太高兴了」。',
        wrongFeedback: '你答成「一点也不意外」，他盯着屏幕，把打好的长句一个字一个字删掉了。气血 -10',
        afterCorrect: '他最后只回了两个字：真好。然后把手机放回口袋，又拿出来看了一遍。'
      }
    ],
    completeText: '天亮时他去洗了把脸，镜子里的自己眼下发青，却难得在笑。他想，三十岁这年，好像才刚开头。'
  },
  {
    id: 'pl_23',
    index: 23,
    title: '第 23 章 · 退回的钥匙',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '连着三个大夜，加上母亲复查的报告还没出，温以宁在更衣室坐了很久。排班表上的名字密密麻麻，她看了半天，一个也没记住。',
    questions: [
      {
        plotDescription: '护士长推门进来，看见她一个人对着排班表发呆。',
        line: "I'm overwhelmed — there's too much on my plate this week.",
        lineCn: '我压力过载了，这周要处理的事太多了。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'relaxed and free', cn: '轻松自在', correct: false, reason: '事情堆在一起，正好相反。' },
          { key: 'B', en: 'having too much to handle', cn: '压力过载，应付不过来', correct: true, reason: 'on my plate 指手上的事，太多就是被压住。' },
          { key: 'C', en: 'slightly bored', cn: '有点无聊', correct: false, reason: '她不是没事做，是事太多。' }
        ],
        analysis: 'overwhelmed 指被事情、情绪淹没，超出能承受的范围。',
        wrongFeedback: '你答成「轻松自在」，她抬起头，眼下两团青黑。气血 -10',
        afterCorrect: '护士长把排班表抽走，说：「今晚你休息，我顶。」她张了张嘴，最后只说了句谢谢。'
      },
      {
        plotDescription: '周叙敲了敲更衣室的门，说今晚什么都别做。',
        line: "Let's just chill tonight — no charts, no phones.",
        lineCn: '今晚就躺平放松吧，不看病历，不看手机。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'get cold', cn: '觉得冷', correct: false, reason: 'chill 在这里是动词，指放松，不是温度。' },
          { key: 'B', en: 'work harder', cn: '更努力一点', correct: false, reason: '他说不看病历，显然不是继续干活。' },
          { key: 'C', en: 'relax and do nothing', cn: '躺平，彻底放松', correct: true, reason: '不看病历不看手机，就是什么都不做。' }
        ],
        analysis: 'chill 作动词是「放松、躺平」，作名词还可以指「凉意」，要看上下文。',
        wrongFeedback: '你答成「觉得冷」，他把外套递过来：「我说的不是空调。」气血 -10',
        afterCorrect: '她跟着他上了天台。风很大，谁都没提工作，也谁都没提那把钥匙。'
      },
      {
        plotDescription: '抢救结束，她贴着墙慢慢滑下去，声音很轻。',
        line: "After that code, I felt completely drained.",
        lineCn: '那次抢救之后，我觉得自己被彻底掏空了。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'refreshed', cn: '神清气爽', correct: false, reason: '抢救之后不可能神清气爽。' },
          { key: 'B', en: 'emptied out', cn: '被掏空，精力耗尽', correct: true, reason: '贴着墙滑下去，正是被抽干的样子。' },
          { key: 'C', en: 'angry with the team', cn: '对团队发火', correct: false, reason: '她在说自己累，不是在生气。' }
        ],
        analysis: 'drained 原意是「被排干」，形容人时指精力、情绪被彻底抽走。',
        wrongFeedback: '你答成「神清气爽」，她闭着眼笑了一下，连反驳的力气都没有。气血 -10',
        afterCorrect: '周叙把一瓶水放在她手边，蹲下来和她视线齐平，什么也没说。'
      },
      {
        plotDescription: '复查报告说下午三点出，她从两点五十开始看手机。',
        line: "I'm anxious about the results — I keep checking my phone.",
        lineCn: '结果没出来，我焦虑得一直看手机。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'confident about the outcome', cn: '对结果很有信心', correct: false, reason: '一直看手机是放不下心，不是有把握。' },
          { key: 'B', en: 'completely indifferent', cn: '完全无所谓', correct: false, reason: '无所谓就不会反复看手机。' },
          { key: 'C', en: 'worried and uneasy', cn: '焦虑，坐立不安', correct: true, reason: '反复查看手机，是典型的焦虑。' }
        ],
        analysis: 'anxious 指对还没发生的事感到不安，身体上常表现为坐不住。',
        wrongFeedback: '你答成「完全无所谓」，她已经把手机解锁了第七次。气血 -10',
        afterCorrect: '三点零七分，报告出来了。她盯着那行「良性」看了三遍，才敢往下滑。'
      }
    ],
    completeText: '天台上风很大，周叙什么也没问，只把外套披到她肩上。她忽然发现，原来被人陪着的时候，可以什么都不用解释。'
  },
  {
    id: 'pl_24',
    index: 24,
    title: '第 24 章 · 原生家庭的门',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他父亲出现在住院部走廊，手里拎着一袋水果，说来看「老同事」。周叙站在护士站后面，一动不动。十年了，他还是那副样子：说话很轻，刀很钝。',
    questions: [
      {
        plotDescription: '父亲说起他母亲，语气像在讲别人的事。',
        line: "I was furious — he said it like it was nothing.",
        lineCn: '我狂怒了，他说得好像那不算什么。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'violently angry', cn: '狂怒，怒到极点', correct: true, reason: '把旧伤说得云淡风轻，正是最让人暴怒的地方。' },
          { key: 'B', en: 'mildly annoyed', cn: '稍微有点烦', correct: false, reason: '程度差太远，他当时手都在抖。' },
          { key: 'C', en: 'amused', cn: '觉得有趣', correct: false, reason: '这种场合不可能觉得有趣。' }
        ],
        analysis: 'furious 表示愤怒到极点，比 angry 强烈得多。',
        wrongFeedback: '你答成「稍微有点烦」，他的手在护士站下面握成了拳。气血 -10',
        afterCorrect: '他没有上前打招呼，转身进了处置室，把门轻轻带上。'
      },
      {
        plotDescription: '他回到值班室，把门反锁，坐在地上。',
        line: "Some nights I still feel depressed for no clear reason.",
        lineCn: '有些晚上我还是会莫名其妙地抑郁。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'cheerful and light', cn: '心情轻松愉快', correct: false, reason: '坐在反锁的房间里，不是轻松的状态。' },
          { key: 'B', en: 'very focused on work', cn: '非常专注工作', correct: false, reason: '句子说的是情绪低落，和专注无关。' },
          { key: 'C', en: 'deeply low', cn: '抑郁，情绪极度低落', correct: true, reason: '没有明确原因却持续低落，正是 depressed。' }
        ],
        analysis: 'depressed 指持续时间较长的情绪低落，不只是「今天不开心」。',
        wrongFeedback: '你答成「非常专注」，可那晚他一份病历都没翻开。气血 -10',
        afterCorrect: '手机在口袋里震了两下，是温以宁：你在哪？他没回，过了十分钟又拿起手机。'
      },
      {
        plotDescription: '但一说到急诊改造方案，他整个人都不一样了。',
        line: "He gets all hyped about the new triage plan.",
        lineCn: '一说到新的分诊方案，他就极度兴奋。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely excited', cn: '极度兴奋，热血上头', correct: true, reason: '整个人都不一样了，正是被点燃的状态。' },
          { key: 'B', en: 'indifferent', cn: '毫无兴趣', correct: false, reason: '完全相反。' },
          { key: 'C', en: 'worried about it', cn: '为此担忧', correct: false, reason: '句子强调他的兴奋，不是担心。' }
        ],
        analysis: 'hyped 是口语里「兴奋、期待值拉满」，常和 about 连用。',
        wrongFeedback: '你答成「毫无兴趣」，可他说方案时眼睛是亮的。气血 -10',
        afterCorrect: '他说到一半忽然停下，因为她正站在门口，手里拎着两份盒饭。'
      },
      {
        plotDescription: '温以宁问他高三那年过得怎么样。他想了很久。',
        line: "Honestly, I was miserable in senior year.",
        lineCn: '说实话，我高三那年惨透了。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'very popular', cn: '很受欢迎', correct: false, reason: '受欢迎和「惨」是两回事。' },
          { key: 'B', en: 'extremely unhappy', cn: '惨透了，非常痛苦', correct: true, reason: '想很久才开口，说的正是那段难熬的日子。' },
          { key: 'C', en: 'busy but fine', cn: '很忙但还好', correct: false, reason: '如果只是忙，他不会停顿那么久。' }
        ],
        analysis: 'miserable 形容处境或情绪糟糕到极点，常用来回忆难熬的阶段。',
        wrongFeedback: '你答成「很忙但还好」，他笑了一下：「要真只是忙就好了。」气血 -10',
        afterCorrect: '他说到一半停下来：「算了，太长了。」她说：「我有时间。」'
      }
    ],
    completeText: '走廊尽头，他父亲还站在那里，水果袋放在长椅上。周叙走过去，没有叫爸，只说了一句：「她不是不懂事，她只是撑不住了。」'
  },
  {
    id: 'pl_25',
    index: 25,
    title: '第 25 章 · 母亲的电话',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '下午三点，母亲的活检结果出来了：良性。温以宁在走廊里蹲下去，蹲了足足一分钟，才想起来要给人打电话。',
    questions: [
      {
        plotDescription: '电话接通，她第一句话就破了音。',
        line: "I'm ecstatic — the biopsy came back clean.",
        lineCn: '我欣喜若狂，活检结果是好的。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'relieved but calm', cn: '松了口气，但很平静', correct: false, reason: 'relieved 偏平静，她当时是破音喊出来的。' },
          { key: 'B', en: 'confused by the result', cn: '对结果感到困惑', correct: false, reason: '结果是良性，她听得懂。' },
          { key: 'C', en: 'beyond happy', cn: '欣喜若狂，高兴到极点', correct: true, reason: '蹲在地上、声音发抖，正是高兴到极点。' }
        ],
        analysis: 'ecstatic 是情绪强度的顶点，比 happy、glad、relieved 都强烈。',
        wrongFeedback: '你答成「松了口气但很平静」，可全走廊都听见她那一句。气血 -10',
        afterCorrect: '电话那头沉默了两秒，然后她听见周叙很轻地笑了一声。'
      },
      {
        plotDescription: '挂了电话，她坐在长椅上，哭不出来，也笑不出来。',
        line: "For a minute I just felt numb — I couldn't cry or smile.",
        lineCn: '有那么一分钟我整个人是麻木的，哭不出来也笑不出来。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to feel anything', cn: '麻木，什么都感觉不到', correct: true, reason: '哭不出也笑不出，正是情绪的暂时关闭。' },
          { key: 'B', en: 'extremely happy', cn: '极度开心', correct: false, reason: '她明确说自己笑不出来。' },
          { key: 'C', en: 'very sleepy', cn: '非常困', correct: false, reason: '不是困，是情绪一下子空了。' }
        ],
        analysis: 'numb 指感觉麻木、情绪暂时失灵，常在巨大冲击之后出现。',
        wrongFeedback: '你答成「极度开心」，可她自己说哭不出来。气血 -10',
        afterCorrect: '她低头看自己的手，指甲缝里还有早上洗手液的味道。'
      },
      {
        plotDescription: '隔壁床的女儿每天来，削水果、擦身、讲笑话。',
        line: "I know it's silly, but I'm jealous of that family.",
        lineCn: '我知道这很傻，但我嫉妒那一家人。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'angry at them', cn: '生他们的气', correct: false, reason: '她不是生气，是羡慕。' },
          { key: 'B', en: 'envious of what they have', cn: '嫉妒，羡慕别人拥有的', correct: true, reason: '对方天天来，她半年只回两次家，这是羡慕。' },
          { key: 'C', en: 'grateful to them', cn: '对他们心存感激', correct: false, reason: '句子前面已经说了「很傻」，是自嘲的羡慕。' }
        ],
        analysis: 'jealous 指因为别人拥有自己没有的东西而心里不平衡，可以是善意的羡慕。',
        wrongFeedback: '你答成「生他们的气」，她把削了一半的苹果放下，没再说话。气血 -10',
        afterCorrect: '母亲说：「那姑娘也不容易，天天请假。」她嗯了一声。'
      },
      {
        plotDescription: '她算了一下，这半年回家的次数。',
        line: "I feel guilty for not coming home more often.",
        lineCn: '我因为没多回家而内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'proud of herself', cn: '为自己骄傲', correct: false, reason: '回家次数少，不可能骄傲。' },
          { key: 'B', en: 'innocent', cn: '清白无辜', correct: false, reason: '这里说的是自责，不是清白。' },
          { key: 'C', en: 'feeling you did something wrong', cn: '内疚，觉得自己没做好', correct: true, reason: '算次数就是自我清算，正是内疚。' }
        ],
        analysis: 'guilty 指因为觉得自己亏欠、做错而不安，是道德层面的不适。',
        wrongFeedback: '你答成「清白无辜」，她低声说：「我要是真无辜就好了。」气血 -10',
        afterCorrect: '她走进病房，把报告举给母亲看。母亲看了很久，只说：「那今晚，你回家吃饭吧。」'
      }
    ],
    completeText: '她给母亲削苹果，削得坑坑洼洼，皮断了好几次。母亲看着她的手说：「你现在这样，比以前好。」她没听懂，也没问。'
  },
  {
    id: 'pl_26',
    index: 26,
    title: '第 26 章 · 那年的冬天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '流感高峰，急诊走廊加了三张床。周叙连着四十小时没合眼，白大褂下摆蹭到了碘伏，泛着一块黄。',
    questions: [
      {
        plotDescription: '护士站的白板上写着排班，今晚缺两个人。',
        line: "Everyone's stressed — we're two nurses short tonight.",
        lineCn: '所有人都压力很大，今晚少两个护士。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'under a lot of pressure', cn: '压力大，绷得很紧', correct: true, reason: '人手不足、工作量翻倍，正是压力的来源。' },
          { key: 'B', en: 'well paid', cn: '待遇很好', correct: false, reason: '句子讲的是人手，不是钱。' },
          { key: 'C', en: 'completely relaxed', cn: '完全放松', correct: false, reason: '少两个护士不可能放松。' }
        ],
        analysis: 'stressed 指因为压力而紧绷，是当代口语里最高频的情绪词之一。',
        wrongFeedback: '你答成「完全放松」，她指了指走廊里的加床。气血 -10',
        afterCorrect: '他把自己的名字写进夜班栏，护士长说：「你昨天也在这儿。」'
      },
      {
        plotDescription: '一个月里，科里走了三个人。有人在群里说是「吃不了苦」。',
        line: "Three people quit last month — it's burnout, not laziness.",
        lineCn: '上个月走了三个人，那是职业倦怠，不是懒。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small careless mistake', cn: '粗心的小失误', correct: false, reason: '走人不是失误。' },
          { key: 'B', en: 'exhaustion from long-term overwork', cn: '长期过劳带来的职业倦怠', correct: true, reason: '连着多少人辞职，指向的是被耗尽，而非态度问题。' },
          { key: 'C', en: 'a disease only patients get', cn: '只有病人才会得的病', correct: false, reason: '这里说的是工作状态，不限于病人。' }
        ],
        analysis: 'burnout 指长期高压工作后情绪与体力的彻底枯竭，不是简单的累。',
        wrongFeedback: '你答成「粗心的小失误」，他抬起头：「辞职是失误？」气血 -10',
        afterCorrect: '他退出了那个群。退群之前，他在输入框里打了一行字，又删掉了。'
      },
      {
        plotDescription: '走廊那头突然有人喊「孩子抽了」，家属的声音都变了。',
        line: "Don't panic — bring me the oxygen, now.",
        lineCn: '别慌，把氧气给我拿过来，马上。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'lose control from fear', cn: '恐慌，因害怕而失控', correct: true, reason: '家属喊到变声，他先稳住场面，正是让人别慌。' },
          { key: 'B', en: 'shout angrily', cn: '生气地大喊', correct: false, reason: '他要的是氧气，不是在骂人。' },
          { key: 'C', en: 'run away', cn: '赶紧跑开', correct: false, reason: '正好相反，大家都往孩子那边跑。' }
        ],
        analysis: 'panic 指被恐惧接管、失去行动条理；急救场合最怕的就是它。',
        wrongFeedback: '你答成「生气地大喊」，可他那句是压着声音说的。气血 -10',
        afterCorrect: '孩子被推进抢救室。他戴上手套，声音反而更低了：「准备建立通道。」'
      },
      {
        plotDescription: '孩子哇地哭出来，他靠在墙边，闭了下眼。',
        line: "I was relieved when the boy started crying — crying means breathing.",
        lineCn: '孩子哭出来的那一刻我松了口气，能哭说明能呼吸。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'disappointed', cn: '失望', correct: false, reason: '孩子救回来了，不可能失望。' },
          { key: 'B', en: 'still worried', cn: '仍然担心', correct: false, reason: '他说的是那口气松下来了。' },
          { key: 'C', en: 'worry gone', cn: '松了口气，悬着的心放下', correct: true, reason: '靠墙闭眼，正是紧绷之后的松弛。' }
        ],
        analysis: 'relieved 指压在心里的担忧突然解除，往往伴随着身体的放松。',
        wrongFeedback: '你答成「仍然担心」，可他靠着墙，肩膀已经塌下去了。气血 -10',
        afterCorrect: '他把手套脱下来，才发现手指被碘伏泡得发白。凌晨四点，走廊终于安静。'
      }
    ],
    completeText: '他在值班室的镜子前站了会儿，看见自己袖口磨破了一块。他想，该换了。然后拿出手机，给温以宁发了句：今天很累，但还好。'
  },
  {
    id: 'pl_27',
    index: 27,
    title: '第 27 章 · 她终于哭了',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '她去主任办公室送材料，抽屉半开着，里面露出一张旧照片的一角。照片上是二十几岁的周叙，旁边站着一个女孩。她没敢抽出来看全。',
    questions: [
      {
        plotDescription: '她给闺蜜打电话，声音平静得不像自己。',
        line: "I was heartbroken over something that wasn't even real.",
        lineCn: '我为一件根本不存在的事心碎了。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'full of grief', cn: '心碎，难过到极点', correct: true, reason: '一张没看清的照片就让她整晚没睡，正是心碎。' },
          { key: 'B', en: 'a little bored', cn: '有点无聊', correct: false, reason: '她声音平静得反常，是在硬撑。' },
          { key: 'C', en: 'embarrassed', cn: '尴尬', correct: false, reason: '重点是难过，不是尴尬。' }
        ],
        analysis: 'heartbroken 指因为失去或误解而遭受的剧烈情感打击，常用来形容感情上的痛。',
        wrongFeedback: '你答成「有点无聊」，闺蜜在电话那头叹了口气：「你骗谁呢。」气血 -10',
        afterCorrect: '她把那晚的电话挂了，坐在床边，眼泪一直没下来。'
      },
      {
        plotDescription: '第二天真相大白：那是同事的旧照片，周叙只是帮忙收拾抽屉。闺蜜在电话里一脸得意。',
        line: "Don't look so smug — you were wrong too.",
        lineCn: '别那么得意忘形，你也猜错了。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'sad and quiet', cn: '难过又沉默', correct: false, reason: '她猜对了，正在得意。' },
          { key: 'B', en: 'too pleased with yourself', cn: '得意忘形，自满', correct: true, reason: '「你也猜错了」这种回击，正对着对方那副得意。' },
          { key: 'C', en: 'humble', cn: '谦逊', correct: false, reason: '和「得意」正相反。' }
        ],
        analysis: 'smug 指因为自己正确或聪明而露出让人有点不爽的得意。',
        wrongFeedback: '你答成「谦逊」，闺蜜笑出声：「我什么时候谦逊过。」气血 -10',
        afterCorrect: '她挂了电话，回头看见周叙站在门口，手里拿着那份材料。'
      },
      {
        plotDescription: '周叙听她解释完，只问了一句：「你就为这个躲我三天？」',
        line: "I'm annoyed, but mostly at myself.",
        lineCn: '我挺烦的，但主要是气我自己。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'delighted', cn: '非常开心', correct: false, reason: '躲了三天，谈不上开心。' },
          { key: 'B', en: 'terrified', cn: '非常害怕', correct: false, reason: '她烦的是自己的反应，不是害怕。' },
          { key: 'C', en: 'bothered and irritated', cn: '烦透了，心里不痛快', correct: true, reason: '后半句「气我自己」说明了这种烦躁的来源。' }
        ],
        analysis: 'annoyed 指被小事持续打扰而产生的不快，程度比 angry 轻。',
        wrongFeedback: '你答成「非常开心」，她低下头，把病历抱得更紧了。气血 -10',
        afterCorrect: '他说：「下次想知道什么，直接问我。」她点头，眼泪这才掉下来。'
      },
      {
        plotDescription: '闺蜜最后总结了一句。',
        line: "That's not intuition, that's paranoia.",
        lineCn: '那不叫直觉，那叫被害妄想。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'unreasonable suspicion', cn: '被害妄想，无端的猜疑', correct: true, reason: '凭一张没看完的照片就断定一切，正是无端猜疑。' },
          { key: 'B', en: 'careful planning', cn: '周密的计划', correct: false, reason: '她什么都没计划，只是胡思乱想。' },
          { key: 'C', en: 'deep insight', cn: '深刻的洞察', correct: false, reason: '闺蜜明确否定了「直觉」，更不会是洞察。' }
        ],
        analysis: 'paranoia 指没有依据却坚信自己被针对、被背叛，是不合理的猜疑。',
        wrongFeedback: '你答成「深刻的洞察」，闺蜜说：「你要真这么准，就不会猜错。」气血 -10',
        afterCorrect: '她把照片放回抽屉，出门时才发现背面有一行小字：2014，实习第一天。那一年，她也在那家医院。'
      }
    ],
    completeText: '她站在走廊里，忽然明白自己错过了什么。有些话如果十年前问出口，也许整件事都不一样。'
  },
  {
    id: 'pl_28',
    index: 28,
    title: '第 28 章 · 慢慢来',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '误会解开的那晚，他在她家楼下停了车，坐了很久才熄火。仪表盘的光暗下去，整条街只剩路灯。',
    questions: [
      {
        plotDescription: '他说这半个月几乎没睡好。',
        line: "I've been restless — I wake up at three every night.",
        lineCn: '我一直很焦躁，每天三点就醒。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'sleeping deeply', cn: '睡得很沉', correct: false, reason: '三点就醒，正好相反。' },
          { key: 'B', en: 'energetic and lively', cn: '精力充沛', correct: false, reason: '每天三点醒的人不会精力充沛。' },
          { key: 'C', en: 'unable to settle', cn: '焦躁不安，静不下来', correct: true, reason: '夜里反复醒来、白天坐不住，正是 restless。' }
        ],
        analysis: 'restless 指身体或心静不下来，既可以是睡不着，也可以是坐立不安。',
        wrongFeedback: '你答成「睡得很沉」，他笑了一下：「要是能睡沉就好了。」气血 -10',
        afterCorrect: '她说：「那你今晚别开车回去。」他愣了两秒，才说：「好。」'
      },
      {
        plotDescription: '他说起这十年，语气很平。',
        line: "I'm not bitter about it anymore. I just wish I'd said something.",
        lineCn: '我已经不怨了，只是后悔当时什么都没说。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'resentful and sour', cn: '苦涩怨恨，心里有气', correct: true, reason: '「不再」二字说明曾经怨过，bitter 正是那种苦。' },
          { key: 'B', en: 'sweet and warm', cn: '甜蜜温暖', correct: false, reason: '和「怨不怨」这个语境不搭。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '他很清楚自己在说什么。' }
        ],
        analysis: 'bitter 形容因长期委屈而生的怨气，也指经历留下的苦味。',
        wrongFeedback: '你答成「甜蜜温暖」，他沉默了一会儿：「你听漏了一个词。」气血 -10',
        afterCorrect: '她把手放在他手背上，他没有抽开。'
      },
      {
        plotDescription: '他说这句话的时候没看她，手指在方向盘上敲了两下。',
        line: "This is me being vulnerable — please don't laugh.",
        lineCn: '我现在是在你面前示弱，别笑我。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'strong and confident', cn: '强大又自信', correct: false, reason: '他不敢看她，显然不是自信。' },
          { key: 'B', en: 'open and easily hurt', cn: '脆弱，把软肋露出来', correct: true, reason: '提前说「别笑我」，正是把软肋递出去。' },
          { key: 'C', en: 'joking around', cn: '在开玩笑', correct: false, reason: '他明确说了不是在开玩笑。' }
        ],
        analysis: 'vulnerable 指把自己不设防的一面暴露出来，因此容易被伤到。',
        wrongFeedback: '你答成「强大又自信」，他把手从方向盘上收了回去。气血 -10',
        afterCorrect: '她说：「周叙，你在我这儿不用那么硬。」他低下头，很久没说话。'
      },
      {
        plotDescription: '她问他，那几年有没有想过放弃。',
        line: "For a long time I felt hopeless about us.",
        lineCn: '有很长一段时间，我对我们之间感到绝望。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'full of hope', cn: '充满希望', correct: false, reason: 'hopeless 正好相反。' },
          { key: 'B', en: 'curious but calm', cn: '好奇但平静', correct: false, reason: '句子说的是看不到出路。' },
          { key: 'C', en: 'believing nothing will change', cn: '绝望，觉得不会再有转机', correct: true, reason: '十年没有回应，正是看不到任何可能。' }
        ],
        analysis: 'hopeless 指对未来不抱任何期待，是情绪里最沉的一种。',
        wrongFeedback: '你答成「充满希望」，他说：「那十年，我要是有一点希望就好了。」气血 -10',
        afterCorrect: '她把他手里那杯凉透的水拿过来喝了一口。他说：「那杯是我的。」她说：「我知道。」'
      }
    ],
    completeText: '车里安静了一会儿，他忽然说：「温以宁，我们慢慢来，好不好。」她点头的时候，路灯正好换成绿灯。'
  },
  {
    id: 'pl_29',
    index: 29,
    title: '第 29 章 · 并肩的雨伞',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '母亲出院那天，周叙请了半天假，跑上跑下办手续、搬东西。电梯口，母亲忽然停下来，认真地问：「小周，你今年多大了？」',
    questions: [
      {
        plotDescription: '她把住院押金单收好，对他说。',
        line: "I'm grateful — you didn't have to do any of this.",
        lineCn: '我很感激，这些你本来都不用做的。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'sorry for the trouble', cn: '为添麻烦而抱歉', correct: false, reason: '她是在道谢，不是在道歉。' },
          { key: 'B', en: 'thankful', cn: '感激，真心谢谢', correct: true, reason: '「本来不用做」正是把对方的付出看在眼里。' },
          { key: 'C', en: 'surprised by him', cn: '对他感到意外', correct: false, reason: '她并不意外，她只是想说谢谢。' }
        ],
        analysis: 'grateful 指因为别人为自己付出而心存感谢，比 thanks 更正式、更重。',
        wrongFeedback: '你答成「为添麻烦而抱歉」，他把单子接过去：「我又不是外人。」气血 -10',
        afterCorrect: '她说不出下一句。他把单子叠好放进包里，动作很轻。'
      },
      {
        plotDescription: '两个人在医院楼下的长椅上坐着，等车来。',
        line: "Sitting here with you, I feel content.",
        lineCn: '和你坐在这儿，我就很满足。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'quietly satisfied', cn: '满足，心里踏实', correct: true, reason: '没有大事发生，只是坐着，正是 content 的安稳。' },
          { key: 'B', en: 'extremely excited', cn: '极其兴奋', correct: false, reason: '坐着等车，谈不上兴奋。' },
          { key: 'C', en: 'restless and impatient', cn: '坐立不安', correct: false, reason: '她说的是满足，不是着急。' }
        ],
        analysis: 'content 指不需要更多东西的满足感，语气平静而踏实。',
        wrongFeedback: '你答成「极其兴奋」，她侧头看你一眼，笑了。气血 -10',
        afterCorrect: '她把头靠在椅背上，第一次觉得等人的时间并不难熬。'
      },
      {
        plotDescription: '母亲坐在车上说，这半年是她这些年最踏实的日子。',
        line: "For the first time in years, I feel fulfilled.",
        lineCn: '这么多年，我第一次觉得充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'tired and empty', cn: '又累又空', correct: false, reason: '「踏实」和「空」正相反。' },
          { key: 'B', en: 'life feels complete', cn: '充实，觉得人生有着落', correct: true, reason: '第一次觉得踏实，正是被填满的感觉。' },
          { key: 'C', en: 'bored with everything', cn: '对一切都没兴趣', correct: false, reason: '她是在说满足，不是厌倦。' }
        ],
        analysis: 'fulfilled 指因为生活有意义、有依靠而感到充实，比 happy 更深。',
        wrongFeedback: '你答成「又累又空」，母亲在后座摇了摇头。气血 -10',
        afterCorrect: '母亲接着说：「你要是有人照顾，我就更踏实了。」'
      },
      {
        plotDescription: '母亲紧接着问：「那你打算什么时候娶她？」周叙一本正经地回答了日期。温以宁笑到蹲在地上。',
        line: "She laughed until she was hysterical — the whole floor heard her.",
        lineCn: '她笑到歇斯底里，整层楼都听见了。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'crying uncontrollably', cn: '控制不住地哭', correct: false, reason: '上下文是她笑到蹲下，不是哭。' },
          { key: 'B', en: 'angry and shouting', cn: '生气地大喊', correct: false, reason: '她在笑，不是在发火。' },
          { key: 'C', en: 'laughing wildly out of control', cn: '歇斯底里，笑到失控', correct: true, reason: '笑到蹲在地上、整层楼都听见，正是情绪失控。' }
        ],
        analysis: 'hysterical 指情绪强烈到无法控制，可以是狂笑，也可以是崩溃大哭，要看上下文。',
        wrongFeedback: '你答成「控制不住地哭」，可她的眼泪是笑出来的。气血 -10',
        afterCorrect: '母亲上车前握了握她的手：「这孩子不错。」她说：「妈，我们还没——」母亲说：「我知道。」'
      }
    ],
    completeText: '车开走以后，周叙还站在原地，耳朵是红的。她第一次觉得，把他介绍给谁，好像都不算难。'
  },
  {
    id: 'pl_30',
    index: 30,
    title: '第 30 章 · 第三幕落幕',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '第三幕的最后一晚，他把所有事都说了：十年前她突然转学，是因为他母亲去学校找过她。他一直不知道，直到去年整理旧物，看见母亲留下的一封信。',
    questions: [
      {
        plotDescription: '说到这里，他停下来，杯子在手里转了半圈。',
        line: "I felt pure rage when I found out.",
        lineCn: '知道真相的那一刻，我只觉得纯粹的暴怒。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'violent anger', cn: '暴怒，怒火冲天', correct: true, reason: '十年被瞒着，pure rage 说明怒到极处。' },
          { key: 'B', en: 'mild annoyance', cn: '轻微的不快', correct: false, reason: '程度完全不对。' },
          { key: 'C', en: 'fear of his mother', cn: '对母亲的恐惧', correct: false, reason: '句子说的是怒，不是怕。' }
        ],
        analysis: 'rage 是强度极高的愤怒，常指压不住、会爆发的怒。',
        wrongFeedback: '你答成「轻微的不快」，他把杯子放下，杯底磕出一声。气血 -10',
        afterCorrect: '她说：「那封信，你还留着吗？」他说：「烧了。」'
      },
      {
        plotDescription: '但怒过之后，剩下的东西更重。',
        line: "Later it turned into sorrow — for both of us.",
        lineCn: '后来那种情绪变成了悲伤，为我们两个人。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'relief', cn: '轻松', correct: false, reason: '他明确说「更重」，不是轻松。' },
          { key: 'B', en: 'deep sadness', cn: '悲伤，深深的哀痛', correct: true, reason: '为两个人难过，正是深层的悲。' },
          { key: 'C', en: 'excitement', cn: '激动', correct: false, reason: '这个语境不可能激动。' }
        ],
        analysis: 'sorrow 比 sad 更沉、更久，常指为失去的东西而哀伤。',
        wrongFeedback: '你答成「轻松」，他抬起头：「我一点都不轻松。」气血 -10',
        afterCorrect: '他说：「那十年，我们都被人替着做了决定。」'
      },
      {
        plotDescription: '可说完之后，他反而觉得身上轻了。',
        line: "There was a strange euphoria after I finally told you.",
        lineCn: '终于告诉你之后，我有一种奇怪的极度愉悦。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'guilt for talking too much', cn: '说太多之后的内疚', correct: false, reason: '他说的是轻了，不是后悔。' },
          { key: 'B', en: 'confusion about the past', cn: '对过去的困惑', correct: false, reason: '说开之后反而清楚，不是困惑。' },
          { key: 'C', en: 'intense happiness', cn: '极度愉悦，兴奋到飘起来', correct: true, reason: 'strange 加上「终于」，正是压久了之后的释放。' }
        ],
        analysis: 'euphoria 指异常强烈、几乎不真实的幸福感，常出现在压力释放之后。',
        wrongFeedback: '你答成「内疚」，他说：「我十年没这么轻松过。」气血 -10',
        afterCorrect: '她把手伸过去，和他十指扣在一起：「那现在开始，我们自己决定。」'
      },
      {
        plotDescription: '他承认，中间有几年，他什么都不在乎。',
        line: "For a while I felt nothing but apathy.",
        lineCn: '有一段时间，我心里只有冷漠，什么都不在乎。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'no interest or feeling at all', cn: '冷漠，彻底无感', correct: true, reason: 'nothing but 强调只剩这一种状态。' },
          { key: 'B', en: 'deep love for you', cn: '对你深深的爱', correct: false, reason: '句子说的是什么都不在乎。' },
          { key: 'C', en: 'strong anger', cn: '强烈的愤怒', correct: false, reason: '他说的是无感，不是怒。' }
        ],
        analysis: 'apathy 指对什么都提不起兴趣、没有情绪反应的状态，比「冷淡」更彻底。',
        wrongFeedback: '你答成「深深的爱」，他低下头：「那几年，我连自己都不在乎。」气血 -10',
        afterCorrect: '话说到这里，第三幕结束了。温以宁看着他，忽然开口：「周叙，那天你妈妈跟我说的最后一句话，我要不要告诉你？」'
      }
    ],
    completeText: '他愣住。窗外天快亮了，第四幕，从这里开始。'
  },
  {
    id: 'pl_31',
    index: 31,
    title: '第 31 章 · 靠近一点点',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '第四幕开场，温以宁开始注意到一些很小的事：他记得她咖啡不加糖，知道她怕冷，会把走廊里的窗关上。她一边提醒自己别多想，一边数着他今天看了她几眼。',
    questions: [
      {
        plotDescription: '闺蜜在电话里问她，到底怎么想的。',
        line: "I think I have a crush on him — and I've had it for ten years.",
        lineCn: '我好像是暗恋他，而且已经十年了。',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'a strong liking for someone', cn: '暗恋，对某人心动', correct: true, reason: '「十年」是时间的证据，说的正是长期的心动。' },
          { key: 'B', en: 'a sudden anger', cn: '突然的愤怒', correct: false, reason: '她说的是喜欢，不是生气。' },
          { key: 'C', en: 'a small injury', cn: '小伤', correct: false, reason: 'crush 作名词还有「压伤」的意思，但这里说的是人。' }
        ],
        analysis: 'crush 指对某人心动、暗恋，常用 have a crush on somebody。',
        wrongFeedback: '你答成「小伤」，闺蜜在电话那头笑：「这伤还挺久的。」气血 -10',
        afterCorrect: '闺蜜说：「十年？你怎么不去考个证。」她把脸埋进枕头里。'
      },
      {
        plotDescription: '有一次他连着七天没回消息，她以为自己被删了。',
        line: "He ghosted me for a week — then showed up with soup.",
        lineCn: '他消失了一周，然后拎着汤出现了。',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'called every single day', cn: '每天都打电话', correct: false, reason: '句子说的是没回消息，正好相反。' },
          { key: 'B', en: 'disappeared without a word', cn: '玩消失，一声不吭地断联', correct: true, reason: '七天不回消息、她以为被删了，正是 ghost。' },
          { key: 'C', en: 'sent a gift', cn: '送了礼物', correct: false, reason: '礼物是他出现时带的汤，不是消失的方式。' }
        ],
        analysis: 'ghost 在感情语境里指突然断联、不回消息，像人间蒸发。',
        wrongFeedback: '你答成「每天都打电话」，可那七天她的手机一次都没响。气血 -10',
        afterCorrect: '她问：「你去哪了？」他说：「我父亲住院，手机丢了。」她一下说不出话。'
      },
      {
        plotDescription: '她把他的问题一条一条列给闺蜜听。',
        line: "Working eighty hours a week is a red flag, isn't it?",
        lineCn: '一周工作八十个小时，这算危险信号吧？',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a warning sign', cn: '危险信号，值得警惕的迹象', correct: true, reason: '她在列「问题」，问的正是这段关系里该不该警惕。' },
          { key: 'B', en: 'a good quality', cn: '一个优点', correct: false, reason: '用「危险」来形容，显然不是优点。' },
          { key: 'C', en: 'a red uniform', cn: '红色的制服', correct: false, reason: 'red flag 在这里是比喻，不是衣服。' }
        ],
        analysis: 'red flag 原指红旗，口语里指关系或处境里值得警惕的信号。',
        wrongFeedback: '你答成「一个优点」，闺蜜说：「你要是这么想，我就不劝了。」气血 -10',
        afterCorrect: '闺蜜补了一句：「那他对你十年没变心，算什么？」'
      },
      {
        plotDescription: '闺蜜最后问得直白。',
        line: "So you two finally hooked up after ten years?",
        lineCn: '所以你们俩十年了，终于在一起了？',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'broken up', cn: '分手了', correct: false, reason: '句子说「终于」，是开始，不是结束。' },
          { key: 'B', en: 'hung up the phone', cn: '挂了电话', correct: false, reason: 'hook up 和挂电话没有关系。' },
          { key: 'C', en: 'got together', cn: '勾搭上了，在一起了', correct: true, reason: 'finally 加上 ten years，说的正是终于走到一起。' }
        ],
        analysis: 'hook up 口语里指两个人走到一起，可以是暧昧、约会，也可以是更进一步。',
        wrongFeedback: '你答成「挂了电话」，闺蜜说：「我问的可不是这个。」气血 -10',
        afterCorrect: '她说：「没有。」闺蜜安静了三秒：「那你打算等到第几个十年？」'
      }
    ],
    completeText: '挂了电话，她看见周叙发来一张照片：走廊窗户关好了，配文「今天降温」。她回了两个字：知道。'
  },
  {
    id: 'pl_32',
    index: 32,
    title: '第 32 章 · 见家长',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他带她回家吃饭。老房子，圆桌，表姐一家也在。菜刚上齐，话题就从「你们医院忙不忙」拐到了十年前的旧账。',
    questions: [
      {
        plotDescription: '表姐一说起当年，桌上就安静了。',
        line: "There's always drama at my family dinners.",
        lineCn: '我家每次聚餐都要上演一出抓马。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'dramatic conflict and scenes', cn: '抓马，戏剧化的冲突场面', correct: true, reason: '一说旧账桌上就安静，正是家里那套戏码。' },
          { key: 'B', en: 'a quiet and peaceful meal', cn: '安静平和的一顿饭', correct: false, reason: '和「always」加旧账的语境相反。' },
          { key: 'C', en: 'a formal ceremony', cn: '正式的仪式', correct: false, reason: '这是家常饭，不是仪式。' }
        ],
        analysis: 'drama 在口语里指小题大做、充满冲突的场面，常带吐槽意味。',
        wrongFeedback: '你答成「安静平和的一顿饭」，表姐正把筷子往桌上一放。气血 -10',
        afterCorrect: '他给她夹了一筷子菜，低声说：「吃你的，别听。」'
      },
      {
        plotDescription: '表姐翻出他小时候的事，笑得很开心。',
        line: "He was so clingy as a kid — he followed me everywhere.",
        lineCn: '他小时候特别黏人，我走哪他跟哪。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'independent', cn: '很独立', correct: false, reason: '走哪跟哪，显然不独立。' },
          { key: 'B', en: 'too attached', cn: '黏人，过分依赖', correct: true, reason: '跟着人到处走，正是黏人。' },
          { key: 'C', en: 'shy and silent', cn: '害羞又沉默', correct: false, reason: '他是一路跟着，不是躲着。' }
        ],
        analysis: 'clingy 形容人过分依赖、总要贴着别人，常带一点亲昵的抱怨。',
        wrongFeedback: '你答成「很独立」，表姐笑得更大声了。气血 -10',
        afterCorrect: '温以宁侧头看他，他耳朵红了，把碗里的汤喝得一干二净。'
      },
      {
        plotDescription: '说到他父亲，温以宁替他接了一句。',
        line: "He's learned to set boundaries with his father.",
        lineCn: '他已经学会和父亲划清界限了。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'physical walls', cn: '实体的墙', correct: false, reason: '这里说的是人和人之间的相处方式，不是墙。' },
          { key: 'B', en: 'house rules', cn: '家里的规矩', correct: false, reason: 'boundaries 是他自己划的线，不是家规。' },
          { key: 'C', en: 'limits on what he accepts', cn: '边界感，能接受什么的底线', correct: true, reason: '和父亲「划清」，正是设置相处的底线。' }
        ],
        analysis: 'boundaries 在人际关系里指情绪与责任的界线，也就是常说的「边界感」。',
        wrongFeedback: '你答成「家里的规矩」，桌上没人接话，她自己把话补完了。气血 -10',
        afterCorrect: '表姐愣了一下，然后说：「这倒是，他以前一句都不敢回。」'
      },
      {
        plotDescription: '饭吃到一半，他的手机响了。他看了一眼，站起来拿外套。',
        line: "Sorry, I have to bail — there's an emergency.",
        lineCn: '抱歉，我得先撤了，有急诊。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'pay the bill', cn: '买单', correct: false, reason: '他拿的是外套，不是钱包。' },
          { key: 'B', en: 'leave suddenly', cn: '临时撤了，先走一步', correct: true, reason: '急诊电话一来就得走，正是临时离场。' },
          { key: 'C', en: 'stay longer', cn: '多待一会儿', correct: false, reason: '正好相反。' }
        ],
        analysis: 'bail 口语里指临时取消、抽身离开，也可以指「放人鸽子」。',
        wrongFeedback: '你答成「买单」，他已经把外套穿上了：「下次我请。」气血 -10',
        afterCorrect: '她跟着站起来：「我跟你一起。」表姐在后面喊：「汤还没喝呢！」'
      }
    ],
    completeText: '车上他一直在道歉。她说：「你不用道歉，你刚才在饭桌上替我说话的时候，我挺高兴的。」'
  },
  {
    id: 'pl_33',
    index: 33,
    title: '第 33 章 · 父亲的沉默',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他父亲在住院部楼下坐了一整晚。第二天早上温以宁下楼买早餐，看见他还坐在那儿，脚边是一袋没拆的水果。',
    questions: [
      {
        plotDescription: '周叙的朋友劝他别再瞒着她。',
        line: "There's a bro code about this, but I'm telling you anyway.",
        lineCn: '这事儿本来有兄弟法则，但我还是告诉你。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'a law about brothers', cn: '关于兄弟的法律', correct: false, reason: '这不是法律条文，是朋友之间默认的规矩。' },
          { key: 'B', en: 'unwritten rules among male friends', cn: '兄弟法则，男性朋友间的默契规矩', correct: true, reason: '「但我还是告诉你」说明他破了那条默认规矩。' },
          { key: 'C', en: 'a hospital rule', cn: '医院的规定', correct: false, reason: 'bro code 和朋友有关，和医院无关。' }
        ],
        analysis: 'bro code 指男性朋友之间不成文的规矩，比如不抢兄弟的对象、不替兄弟瞒大事。',
        wrongFeedback: '你答成「关于兄弟的法律」，他把手机收起来：「那我白说了。」气血 -10',
        afterCorrect: '她听完只说了句「谢谢」，然后转身往楼下走。'
      },
      {
        plotDescription: '护士站的人问她，那位老先生是谁。',
        line: "Dealing with in-laws is harder than surgery.",
        lineCn: '应付公婆岳父母比做手术还难。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'your partner family', cn: '公婆、岳父母等姻亲', correct: true, reason: '楼下那位是周叙的父亲，正是要面对的姻亲。' },
          { key: 'B', en: 'your own children', cn: '自己的孩子', correct: false, reason: '孩子不是 in-laws。' },
          { key: 'C', en: 'work colleagues', cn: '同事', correct: false, reason: '句子拿它和手术对比，说的是家里人。' }
        ],
        analysis: 'in-laws 指因婚姻而来的亲属，包括公婆、岳父母、姻亲。',
        wrongFeedback: '你答成「自己的孩子」，护士笑：「你还没孩子呢。」气血 -10',
        afterCorrect: '她在楼梯口停了一下，还是走过去，在他旁边坐下。'
      },
      {
        plotDescription: '老人先开的口，说当年给儿子安排过饭局。',
        line: "I set him up on a blind date once. He didn't go.",
        lineCn: '我给他安排过一次相亲，他没去。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a date arranged by others', cn: '相亲，别人安排的见面', correct: true, reason: '「我安排的」加上「他没去」，正是相亲。' },
          { key: 'B', en: 'a date with a blind person', cn: '和盲人约会', correct: false, reason: 'blind 在这里是「事先不知道对方是谁」，不是看不见。' },
          { key: 'C', en: 'a group dinner', cn: '集体聚餐', correct: false, reason: 'blind date 是两个人被安排的见面。' }
        ],
        analysis: 'blind date 指由别人撮合、双方事先不了解的相亲约会。',
        wrongFeedback: '你答成「和盲人约会」，老人愣了一下，没再往下说。气血 -10',
        afterCorrect: '她问：「他为什么不去？」老人说：「他说他在等人。」'
      },
      {
        plotDescription: '老人忽然说了一句让她心里一沉的话。',
        line: "His blind spot is that he thinks he doesn't deserve anything good.",
        lineCn: '他的盲区在于，他觉得自己不配得到任何好东西。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'an eye problem', cn: '眼睛的毛病', correct: false, reason: '这里说的是他看不见自己的问题，不是视力。' },
          { key: 'B', en: 'a place with no light', cn: '没有光的地方', correct: false, reason: 'blind spot 这里是比喻。' },
          { key: 'C', en: 'something you can not see about yourself', cn: '盲区，自己看不见的认知死角', correct: true, reason: '「他觉得自己不配」正是他自己看不见的那部分。' }
        ],
        analysis: 'blind spot 原指视野里看不见的区域，引申为一个人意识不到的自身问题。',
        wrongFeedback: '你答成「眼睛的毛病」，老人摇了摇头：「他眼睛好得很。」气血 -10',
        afterCorrect: '她站起来，把那袋水果拎起来：「叔叔，上去吧，他在楼上。」'
      }
    ],
    completeText: '老人跟她上了楼。走到病房门口，他停下来，说了句「我不太会说话」。她说：「他也不会。」'
  },
  {
    id: 'pl_34',
    index: 34,
    title: '第 34 章 · 一桌家常菜',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '老同学组局，桌上八个人。有个叫陈默的从坐下就开始讲周叙的糗事，讲到最后，连服务员都听出不对味了。',
    questions: [
      {
        plotDescription: '温以宁在桌下碰了碰他的手。',
        line: "That guy is a toxic friend — he only calls when he needs something.",
        lineCn: '那人是那种有毒的朋友，只有需要你的时候才打电话。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who harms you', cn: '有毒的朋友，只会消耗你', correct: true, reason: '当面贬低、只在有求时出现，正是消耗型的朋友。' },
          { key: 'B', en: 'a friend who cooks for you', cn: '会给你做饭的朋友', correct: false, reason: 'toxin 和做饭没关系。' },
          { key: 'C', en: 'a friend who is sick', cn: '生病的朋友', correct: false, reason: 'toxic 是比喻，不是真的生病。' }
        ],
        analysis: 'toxic friend 指长期贬低你、索取你，让你越来越糟的朋友。',
        wrongFeedback: '你答成「会给你做饭的朋友」，她把手收了回去。气血 -10',
        afterCorrect: '他放下筷子，笑着对陈默说：「这顿我请，你下次别叫我了。」'
      },
      {
        plotDescription: '散场后两个人走在路上，他忽然问了一句。',
        line: "Is this a date, or are we just two doctors eating noodles?",
        lineCn: '这算约会，还是两个医生在吃面？',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a calendar day', cn: '日历上的日期', correct: false, reason: '他在问这顿饭的性质，不是问几号。' },
          { key: 'B', en: 'a romantic outing', cn: '约会，两人的浪漫出行', correct: true, reason: '「还是两个医生在吃面」正是在区分约会和普通吃饭。' },
          { key: 'C', en: 'a work meeting', cn: '工作会议', correct: false, reason: '他恰恰是在排开「同事吃饭」这个可能。' }
        ],
        analysis: 'date 除了日期，还指带有浪漫意味的两人约会。',
        wrongFeedback: '你答成「工作会议」，她停下脚步：「你开会会问这种问题吗？」气血 -10',
        afterCorrect: '她说：「你想让它算什么？」他说：「我想让它算约会。」'
      },
      {
        plotDescription: '陈默在饭桌上又提起他的前任。',
        line: "They broke up years ago — why does he keep bringing it up?",
        lineCn: '他们几年前就分手了，他为什么老提这事？',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'ended the relationship', cn: '分手，结束恋爱关系', correct: true, reason: '「几年前」加「前任」，说的正是关系结束。' },
          { key: 'B', en: 'fixed a problem', cn: '解决了一个问题', correct: false, reason: '和「前任」这个语境不搭。' },
          { key: 'C', en: 'split the bill', cn: '分摊账单', correct: false, reason: 'break up 在饭桌上也可能指散场，但这里接的是前任。' }
        ],
        analysis: 'break up 指恋爱关系结束，也可以指解散、散场，要看宾语。',
        wrongFeedback: '你答成「分摊账单」，她低声说：「他提的是人，不是钱。」气血 -10',
        afterCorrect: '他说：「因为那是他唯一赢过我的一次。」'
      },
      {
        plotDescription: '温以宁听不下去了，替他说了一句。',
        line: "She dumped him, not the other way around.",
        lineCn: '是她甩了他，不是他甩了人家。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'threw away the trash', cn: '倒垃圾', correct: false, reason: '句子的宾语是人，不是垃圾。' },
          { key: 'B', en: 'left a message', cn: '留了个言', correct: false, reason: 'dumped 在这里是结束关系。' },
          { key: 'C', en: 'end it with someone', cn: '甩了对方，主动结束关系', correct: true, reason: '「不是他甩了人家」把主语说得很清楚。' }
        ],
        analysis: 'dump 口语里指单方面甩掉恋人，语气比较直接。',
        wrongFeedback: '你答成「留了个言」，桌上有人没忍住笑了一声。气血 -10',
        afterCorrect: '陈默的脸僵了一下。周叙低头吃面，肩膀却在轻轻抖。'
      }
    ],
    completeText: '回家的路上他一直笑。她说：「你笑什么。」他说：「笑我第一次被人替着说话。」'
  },
  {
    id: 'pl_35',
    index: 35,
    title: '第 35 章 · 进修通知',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '进修名额下来了，半年，外省。主任把通知放在她桌上，说这是个好机会。她拿着那张纸，在走廊里站了很久。',
    questions: [
      {
        plotDescription: '她主动提起那件事，说得很直接。',
        line: "I'm not going to cheat on you — that's not who I am.",
        lineCn: '我不会出轨的，我不是那种人。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'copy answers in an exam', cn: '考试作弊', correct: false, reason: 'cheat 确实有作弊的意思，但这里说的是两个人之间的忠诚。' },
          { key: 'B', en: 'be unfaithful', cn: '出轨，对伴侣不忠', correct: true, reason: '「我不是那种人」是在承诺感情上的忠诚。' },
          { key: 'C', en: 'tell a small lie', cn: '撒个小谎', correct: false, reason: '句子谈的是半年异地，不是撒谎。' }
        ],
        analysis: 'cheat 在感情语境里指背叛伴侣，和考试作弊是同一个词的两个方向。',
        wrongFeedback: '你答成「考试作弊」，他愣了一下：「我又不考你。」气血 -10',
        afterCorrect: '他说：「我知道。」停了两秒又说：「我怕的不是这个。」'
      },
      {
        plotDescription: '她提起那边医院的一个熟人。',
        line: "He still flirts with me like we just met.",
        lineCn: '他还像刚认识那样跟我调情。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'playfully show attraction', cn: '调情，带玩笑地示好', correct: true, reason: '「像刚认识那样」正是那种试探性的示好。' },
          { key: 'B', en: 'argue about work', cn: '为工作争吵', correct: false, reason: '句子说的是示好，不是争吵。' },
          { key: 'C', en: 'ignore completely', cn: '完全无视', correct: false, reason: '正好相反。' }
        ],
        analysis: 'flirt 指用玩笑、眼神、话语表达好感，通常不带承诺。',
        wrongFeedback: '你答成「完全无视」，他挑了下眉：「那他挺会无视人的。」气血 -10',
        afterCorrect: '她说：「我拒绝了。」他说：「我没问。」她说：「我知道。」'
      },
      {
        plotDescription: '她解释自己为什么犹豫。',
        line: "My ex is in that hospital — but that's not why I'm hesitating.",
        lineCn: '我前任在那家医院，但那不是我犹豫的原因。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'an extra shift', cn: '额外的一班', correct: false, reason: 'extra 才是加班，ex 指的是人。' },
          { key: 'B', en: 'an expensive machine', cn: '昂贵的机器', correct: false, reason: '句子里说的是「在那家医院」，是人。' },
          { key: 'C', en: 'a former partner', cn: '前任，以前的伴侣', correct: true, reason: '能被称作 ex 又在那家医院的，正是前任。' }
        ],
        analysis: 'ex 是 ex-boyfriend、ex-husband 的简称，指前任伴侣。',
        wrongFeedback: '你答成「额外的一班」，他说：「那你犹豫什么？」气血 -10',
        afterCorrect: '他说：「那你去。」她说：「半年。」他说：「我知道。」'
      },
      {
        plotDescription: '他的朋友听说后，自告奋勇要帮忙看着。',
        line: "He was my wingman for ten years and never once got me a date.",
        lineCn: '他给我当了十年僚机，一次约会都没帮我约到。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a pilot', cn: '飞行员', correct: false, reason: 'wingman 原义是僚机飞行员，这里是引申用法。' },
          { key: 'B', en: 'a friend who helps with romance', cn: '僚机，帮朋友追人的那个人', correct: true, reason: '「帮我约到约会」正是僚机干的事。' },
          { key: 'C', en: 'a driver', cn: '司机', correct: false, reason: '他没提开车，提的是约会。' }
        ],
        analysis: 'wingman 引申为在感情上帮朋友助攻的人，也就是中文里的「僚机」。',
        wrongFeedback: '你答成「飞行员」，他朋友说：「我倒是想开飞机。」气血 -10',
        afterCorrect: '她笑了。那天晚上她填了申请表，签名时手很稳。'
      }
    ],
    completeText: '出发前一晚，他把一个信封塞进她包里。她上高铁才打开：里面是三十七张便利贴，每张写着一句话和一个日期。'
  },
  {
    id: 'pl_36',
    index: 36,
    title: '第 36 章 · 异地第两百天',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '异地第两百天。视频接通时，她那边是凌晨，他这边刚下夜班。两个人对着屏幕吃同一款泡面，谁都没说话，却谁也不肯挂。',
    questions: [
      {
        plotDescription: '她说那边医院和这里完全不一样。',
        line: "The vibe in that hospital is completely different from ours.",
        lineCn: '那家医院的氛围和我们这儿完全不一样。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'the atmosphere and feeling', cn: '氛围感，整体的感觉', correct: true, reason: '「完全不一样」说的是整体气氛，正是 vibe。' },
          { key: 'B', en: 'a kind of medicine', cn: '一种药', correct: false, reason: '医院之间对比的是气氛，不是药品。' },
          { key: 'C', en: 'a machine vibration', cn: '机器的震动', correct: false, reason: 'vibe 原义有震动，但这里说的是人的感受。' }
        ],
        analysis: 'vibe 是口语里的「氛围、感觉」，常用来形容一个地方或一个人的气场。',
        wrongFeedback: '你答成「一种药」，她笑：「你上班上傻了。」气血 -10',
        afterCorrect: '他问：「那你什么时候回来？」她看了眼日历，没答。'
      },
      {
        plotDescription: '她忽然想起高中时的一件事。',
        line: "You finished my sentence again — are you my soulmate or my colleague?",
        lineCn: '你又把我话接完了，你是我灵魂伴侣还是我同事？',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a roommate', cn: '室友', correct: false, reason: '能接完一句话和住不住一起没关系。' },
          { key: 'B', en: 'a teacher', cn: '老师', correct: false, reason: '她拿它和「同事」并列，是在开玩笑说关系。' },
          { key: 'C', en: 'a person perfectly matched to you', cn: '灵魂伴侣，天生契合的人', correct: true, reason: '话被接完，正是那种「不用说也懂」的契合。' }
        ],
        analysis: 'soulmate 指在精神上高度契合、像天生一对的人。',
        wrongFeedback: '你答成「室友」，他说：「那室友费我就不交了。」气血 -10',
        afterCorrect: '他说：「高中就这样。你每次说到一半，我就知道下半句。」'
      },
      {
        plotDescription: '她提起高三那年第一次说话。',
        line: "We had chemistry from the first day of senior year.",
        lineCn: '高三第一天起，我们就有化学反应。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'mutual attraction and connection', cn: '化学反应，彼此来电的默契', correct: true, reason: '「第一天起」说的是两个人之间的感觉。' },
          { key: 'B', en: 'a science experiment', cn: '化学实验', correct: false, reason: '他们不是在实验室，是在说关系。' },
          { key: 'C', en: 'a medical test', cn: '医学化验', correct: false, reason: '化验不会从第一天开始算。' }
        ],
        analysis: 'chemistry 在人际语境里指两个人之间的吸引力和默契，常说 have chemistry。',
        wrongFeedback: '你答成「化学实验」，她说：「你当年化学也不怎么样。」气血 -10',
        afterCorrect: '他沉默了一下，说：「我以为只有我一个人觉得。」'
      },
      {
        plotDescription: '视频卡了两秒，她认真起来。',
        line: "Long-distance only works with trust.",
        lineCn: '异地恋只有靠信任才能走下去。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'money', cn: '钱', correct: false, reason: '视频里两个人都没提钱。' },
          { key: 'B', en: 'belief in each other', cn: '信任，相信对方', correct: true, reason: '异地最难的就是看不见，只能靠相信。' },
          { key: 'C', en: 'a written contract', cn: '书面合同', correct: false, reason: '感情不是靠合同维系的。' }
        ],
        analysis: 'trust 指相信对方的为人与选择，是长期关系里最基础的东西。',
        wrongFeedback: '你答成「钱」，她说：「那我这半年白省了。」气血 -10',
        afterCorrect: '他说：「那你信我吗？」她把摄像头转向窗外：「你看，我这边天亮了。」'
      }
    ],
    completeText: '视频挂断前，他忽然说：「第两百天，还剩一百六十五天。」她愣了一下，才发现他在数。'
  },
  {
    id: 'pl_37',
    index: 37,
    title: '第 37 章 · 视频里的手术灯',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '视频接通时，他背后的手术灯还亮着。他说刚下台，又说有件事要报告：有人给他介绍对象。',
    questions: [
      {
        plotDescription: '他说得很慢，像在交代什么。',
        line: "I've been loyal to someone who didn't even know it for ten years.",
        lineCn: '我对一个人忠诚了十年，而她根本不知道。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'faithful', cn: '忠诚，始终如一', correct: true, reason: '十年没变、对方还不知情，正是忠诚。' },
          { key: 'B', en: 'popular with everyone', cn: '很受欢迎', correct: false, reason: '受欢迎是被很多人喜欢，不是对一个人忠。' },
          { key: 'C', en: 'honest about his mistakes', cn: '坦率承认错误', correct: false, reason: 'loyal 强调的是对某人的忠实，不是坦白。' }
        ],
        analysis: 'loyal 指对人或承诺保持忠实，不因时间、距离而改变。',
        wrongFeedback: '你答成「很受欢迎」，她说：「你这话说得可一点都不像。」气血 -10',
        afterCorrect: '她握着手机，指节有点发白，说：「然后呢。」'
      },
      {
        plotDescription: '他说完了处理方式。',
        line: "I rejected her offer, politely.",
        lineCn: '我礼貌地拒绝了她的提议。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'accepted it', cn: '接受了', correct: false, reason: 'polite 不等于接受。' },
          { key: 'B', en: 'delayed it', cn: '推迟了', correct: false, reason: '推迟是还没决定，他是已经回绝。' },
          { key: 'C', en: 'refused', cn: '拒绝，回绝', correct: true, reason: '前面交代「有人介绍对象」，这里说不。' }
        ],
        analysis: 'reject 指明确不接受某人或某提议，比 refuse 更正式一些。',
        wrongFeedback: '你答成「接受了」，她挑了下眉：「那你报告什么？」气血 -10',
        afterCorrect: '她说：「为什么告诉我。」他说：「因为我不想让你从别人嘴里听到。」'
      },
      {
        plotDescription: '他说起高三那年的事。',
        line: "I never had the nerve to confess in high school.",
        lineCn: '高中时我一直没胆量表白。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'admit a crime', cn: '认罪', correct: false, reason: 'confess 有认罪的意思，但这里说的是高中喜欢的人。' },
          { key: 'B', en: 'tell someone your feelings', cn: '表白，说出心意', correct: true, reason: '「没胆量」正是喜欢却不敢说的那种心情。' },
          { key: 'C', en: 'apologize', cn: '道歉', correct: false, reason: '句子里没有需要道歉的事。' }
        ],
        analysis: 'confess 在感情里指表白、坦白心意，和「认罪」是同一动作的不同对象。',
        wrongFeedback: '你答成「认罪」，她笑出声：「你高中犯什么事了。」气血 -10',
        afterCorrect: '她说：「那现在呢。」他说：「现在也没胆量，但我有耐心。」'
      },
      {
        plotDescription: '她问，异地半年靠什么撑。',
        line: "A relationship takes commitment, not just feeling.",
        lineCn: '一段关系靠的是承诺和投入，不只是感觉。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a quick decision', cn: '一个快速的决定', correct: false, reason: '句子把它和「感觉」对比，指的是长期的投入。' },
          { key: 'B', en: 'long-term dedication', cn: '承诺，长期的投入与坚守', correct: true, reason: '和「不只是感觉」并列，正是要长期做下去的东西。' },
          { key: 'C', en: 'a legal document', cn: '一份法律文件', correct: false, reason: '他们还没到那一步，说的是态度。' }
        ],
        analysis: 'commitment 指愿意为一段关系长期负责、持续投入，而不是一时心动。',
        wrongFeedback: '你答成「一份法律文件」，她说：「那我还得找律师。」气血 -10',
        afterCorrect: '他说：「我签过最长的合同是三年。这次我想签久一点。」'
      }
    ],
    completeText: '视频那头手术灯灭了。他说：「我得去洗手。」她说：「周叙。」他回头：「嗯？」她说：「我也是。」'
  },
  {
    id: 'pl_38',
    index: 38,
    title: '第 38 章 · 视频里的约会',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '周五晚上，两个人隔着八百公里吃同一家的面。她那边下雨，他这边刮风。屏幕里两碗面都在冒气，像坐在同一张桌上。',
    questions: [
      {
        plotDescription: '她忽然不说话了，只是看着他吃。',
        line: "Sharing a silent meal on video — that's a kind of intimacy.",
        lineCn: '隔着屏幕安静地吃一顿饭，那也是一种亲密。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'closeness between two people', cn: '亲密，彼此靠近的感觉', correct: true, reason: '不说话也不尴尬，正是关系里的亲近。' },
          { key: 'B', en: 'formal politeness', cn: '客套的礼貌', correct: false, reason: '客套不会让人安静地陪着吃饭。' },
          { key: 'C', en: 'loneliness', cn: '孤独', correct: false, reason: '她说的是两个人之间的东西。' }
        ],
        analysis: 'intimacy 指情感上的亲近与不设防，不一定和身体有关。',
        wrongFeedback: '你答成「客套的礼貌」，他把面放下：「我们什么时候客气过。」气血 -10',
        afterCorrect: '她笑了一下，继续低头吃面。屏幕里两双筷子同时抬起来。'
      },
      {
        plotDescription: '她说起他记住的那些小事。',
        line: "He shows affection in small ways, like remembering how I take my coffee.",
        lineCn: '他用很小的方式表达爱慕，比如记得我咖啡怎么喝。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'anger', cn: '愤怒', correct: false, reason: '记住咖啡口味不可能是愤怒。' },
          { key: 'B', en: 'fondness and love', cn: '爱慕，温柔的喜欢', correct: true, reason: '在小事上在意，正是 affection 的表达方式。' },
          { key: 'C', en: 'respect for elders', cn: '对长辈的尊敬', correct: false, reason: '这里说的是恋人之间的在意。' }
        ],
        analysis: 'affection 指温柔持久的喜爱，常通过细节表现，比 love 更轻更暖。',
        wrongFeedback: '你答成「愤怒」，她笑：「你这理解能力，病人敢找你吗。」气血 -10',
        afterCorrect: '他说：「你上次说过一次，不加糖。」她说：「一次就记住了？」'
      },
      {
        plotDescription: '她把周五空出来，写在排班表上。',
        line: "Friday is our date night, even if it's over the phone.",
        lineCn: '周五是我们的约会之夜，哪怕是在电话里。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a night shift', cn: '夜班', correct: false, reason: '她特意把周五空出来，正好相反。' },
          { key: 'B', en: 'a deadline', cn: '截止期限', correct: false, reason: '这是两个人定的约会，不是工作。' },
          { key: 'C', en: 'a set evening for a romantic date', cn: '约会之夜，固定的浪漫时段', correct: true, reason: '写进排班表、每周固定，正是 date night。' }
        ],
        analysis: 'date night 指伴侣之间固定留出的约会时间，形式可以很随意。',
        wrongFeedback: '你答成「夜班」，她说：「那我这半年白排了。」气血 -10',
        afterCorrect: '他真的在自己的排班表上写了三个字：不排班。'
      },
      {
        plotDescription: '护士路过，看见他对着手机笑。',
        line: "He's completely smitten — he keeps smiling at his phone.",
        lineCn: '他彻底神魂颠倒了，一直对着手机笑。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply in love', cn: '神魂颠倒，被爱冲昏头', correct: true, reason: '对着手机傻笑，正是陷进去的样子。' },
          { key: 'B', en: 'annoyed', cn: '烦躁', correct: false, reason: '烦躁的人不会一直笑。' },
          { key: 'C', en: 'confused', cn: '困惑', correct: false, reason: '他清楚自己在看谁。' }
        ],
        analysis: 'smitten 指被爱情击中、完全沉迷于某人，常带一点好笑的意味。',
        wrongFeedback: '你答成「烦躁」，护士说：「他这烦躁得也太甜了。」气血 -10',
        afterCorrect: '他抬头，正好对上护士的眼神，立刻把手机扣在桌上。'
      }
    ],
    completeText: '那晚挂断前，她说：「我发现一件事。」他问什么。她说：「隔着屏幕，我还是会紧张。」'
  },
  {
    id: 'pl_39',
    index: 39,
    title: '第 39 章 · 三十七张机票',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '她收拾行李准备回去，从抽屉里倒出一叠登机牌。数了两遍，三十七张。半年，三十七次往返，她把它们一张张摊在床上。',
    questions: [
      {
        plotDescription: '室友看着那堆登机牌，问她值不值。',
        line: "Long-distance isn't always heartbreak — sometimes it's just tired.",
        lineCn: '异地恋不总是心碎，有时候只是累。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'a cheap flight', cn: '廉价的航班', correct: false, reason: '这里说的是感情里的痛，不是机票。' },
          { key: 'B', en: 'deep emotional pain', cn: '心碎，深切的情感之痛', correct: true, reason: '和「只是累」对比，指的正是那种撕裂的痛。' },
          { key: 'C', en: 'a broken bone', cn: '骨折', correct: false, reason: 'heart 是心，不是骨头。' }
        ],
        analysis: 'heartbreak 指感情破裂或失望带来的剧烈痛苦，比 sad 重得多。',
        wrongFeedback: '你答成「廉价的航班」，室友说：「你这三十七张可不便宜。」气血 -10',
        afterCorrect: '她说：「值。」然后把登机牌按日期排好，一张都没舍得扔。'
      },
      {
        plotDescription: '室友问她，这样跑累不累。',
        line: "Long-distance is expensive, but we made it work.",
        lineCn: '异地恋很花钱，但我们撑下来了。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a relationship across cities', cn: '异地恋，分隔两地的关系', correct: true, reason: '三十七张登机牌，正是两地往返的代价。' },
          { key: 'B', en: 'a very long phone call', cn: '一次很长的通话', correct: false, reason: '花掉的是机票钱，不是话费。' },
          { key: 'C', en: 'a long journey', cn: '一段长途旅行', correct: false, reason: '这里说的是关系状态，不是单次旅行。' }
        ],
        analysis: 'long-distance 常作 long-distance relationship 的简称，指异地恋。',
        wrongFeedback: '你答成「一次很长的通话」，室友笑：「那你话费挺贵。」气血 -10',
        afterCorrect: '她算了算这半年的花销，忽然明白他为什么那几个月总吃食堂。'
      },
      {
        plotDescription: '室友开玩笑，说你们这么忙，怎么不出轨。',
        line: "He joked that we're too busy for polyamory.",
        lineCn: '他开玩笑说，我们忙得连多边恋都没时间搞。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having several partners at once', cn: '多边恋，同时拥有多个伴侣', correct: true, reason: '和「忙得没时间」并列，说的正是同时谈多段关系。' },
          { key: 'B', en: 'having many friends', cn: '朋友很多', correct: false, reason: 'poly 是「多」，但这里接的是伴侣。' },
          { key: 'C', en: 'working several jobs', cn: '同时打几份工', correct: false, reason: '句子说的是感情关系。' }
        ],
        analysis: 'polyamory 指在知情同意的前提下同时拥有多个亲密关系。',
        wrongFeedback: '你答成「同时打几份工」，室友说：「那他可真够忙的。」气血 -10',
        afterCorrect: '她笑完，忽然说：「其实我们连一个都顾不上。」'
      },
      {
        plotDescription: '室友说起自己家里的事。',
        line: "Her parents went through a divorce when she was twelve.",
        lineCn: '她十二岁那年，父母离婚了。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a family trip', cn: '一次家庭旅行', correct: false, reason: 'go through 加十二岁的时间点，不是旅行。' },
          { key: 'B', en: 'a serious argument', cn: '一场严重争吵', correct: false, reason: '吵架不等于离婚，divorce 是法律上的结束。' },
          { key: 'C', en: 'legal end of a marriage', cn: '离婚，婚姻关系的法律终结', correct: true, reason: '父母「went through」的正是这道程序。' }
        ],
        analysis: 'divorce 指婚姻在法律上正式解除，和单纯的分居、争吵不同。',
        wrongFeedback: '你答成「一场严重争吵」，室友低下头：「要是只是吵架就好了。」气血 -10',
        afterCorrect: '她想起自己母亲那句「你现在这样，比以前好」，忽然有点明白了。'
      }
    ],
    completeText: '临走前她把三十七张登机牌塞进包里。她想，回去以后要给他看，让他知道这半年不只是他在数日子。'
  },
  {
    id: 'pl_40',
    index: 40,
    title: '第 40 章 · 车站的拥抱',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '高铁到站，人潮往外涌。周叙站在出站口最前面，手里没拿花，只拿了一件外套。她拖着箱子出来，两个人在人群里站了两秒，然后抱在一起。',
    questions: [
      {
        plotDescription: '旁边的护士后来打趣他们。',
        line: "The nurse thought we were having an affair.",
        lineCn: '那个护士还以为我们在搞婚外情。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship', cn: '绯闻、地下情，秘密的感情关系', correct: true, reason: '被人误会成偷偷摸摸的关系，正是 affair。' },
          { key: 'B', en: 'a business deal', cn: '一笔生意', correct: false, reason: 'affair 有事务的意思，但这里说的是两个人。' },
          { key: 'C', en: 'a party', cn: '一场派对', correct: false, reason: '没有派对，只有出站口的拥抱。' }
        ],
        analysis: 'affair 常指隐秘的恋情或婚外情，也可以泛指「事情」。',
        wrongFeedback: '你答成「一笔生意」，她笑：「我们这生意做得挺亏。」气血 -10',
        afterCorrect: '他说：「那你怎么解释？」她说：「我说是我男朋友。」'
      },
      {
        plotDescription: '她笑他从来不会准备惊喜。',
        line: "He says he doesn't know anything about romance.",
        lineCn: '他说自己对浪漫一窍不通。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'love and romantic gestures', cn: '浪漫，爱情里的心动与仪式感', correct: true, reason: '「一窍不通」说的正是制造惊喜这类事。' },
          { key: 'B', en: 'a novel', cn: '一本小说', correct: false, reason: 'romance 可以指言情小说，但这里说的是他的行为。' },
          { key: 'C', en: 'a kind of music', cn: '一种音乐', correct: false, reason: '句子谈的是惊喜，不是音乐。' }
        ],
        analysis: 'romance 指爱情中的浪漫氛围与举动，也可指爱情故事。',
        wrongFeedback: '你答成「一本小说」，她说：「他要真写过书，我第一个买。」气血 -10',
        afterCorrect: '她说：「那你包里那三十七张便利贴是什么？」他别过脸：「不算什么。」'
      },
      {
        plotDescription: '她数了数他这半年做的事。',
        line: "Ten years of showing up — that's devotion.",
        lineCn: '十年如一日地出现，那是深情。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a duty shift', cn: '一次值班', correct: false, reason: '十年不是一班岗。' },
          { key: 'B', en: 'deep loyalty and care', cn: '深情，长久的忠诚与付出', correct: true, reason: '十年一直出现，正是持续不断的在意。' },
          { key: 'C', en: 'an obligation to family', cn: '对家庭的义务', correct: false, reason: '这里说的是他主动的选择，不是义务。' }
        ],
        analysis: 'devotion 指长期、专注的付出与忠诚，带感情色彩。',
        wrongFeedback: '你答成「一次值班」，她说：「这班值了十年。」气血 -10',
        afterCorrect: '他拎起她的箱子，说：「走吧，我请你吃面。」她说：「你怎么知道我想吃面。」'
      },
      {
        plotDescription: '车上她问他，还喜欢急诊吗。',
        line: "There's still passion there — you can hear it when he talks about the ER.",
        lineCn: '那份激情还在，他说起急诊时你听得出来。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a fruit', cn: '一种水果', correct: false, reason: 'passion fruit 是百香果，但这里说的是他的状态。' },
          { key: 'B', en: 'physical pain', cn: '身体的疼痛', correct: false, reason: 'passion 和疼痛无关。' },
          { key: 'C', en: 'intense feeling and enthusiasm', cn: '激情，强烈的热爱', correct: true, reason: '一说起急诊就听得出来，正是那种热爱。' }
        ],
        analysis: 'passion 指强烈的情感或热爱，可以是爱情，也可以是对事业的热忱。',
        wrongFeedback: '你答成「一种水果」，她笑得靠在他肩上：「你真是。」气血 -10',
        afterCorrect: '他说：「喜欢。」停了一下又说：「但今年开始，我更喜欢下班。」'
      }
    ],
    completeText: '第四幕过了一半。那天晚上他送她到楼下，没有立刻走，说：「温以宁，有件事我一直没告诉你。」'
  },
  {
    id: 'pl_41',
    index: 41,
    title: '第 41 章 · 平安夜的戒指',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '平安夜，急诊难得安静。周叙的母亲站在护士站外面，手里捧着一个旧铁盒，盒盖上的漆掉了一半。温以宁认出那盒子，十年前她见过一次。',
    questions: [
      {
        plotDescription: '她走过去，没有绕开。',
        line: "I finally confronted her — I asked why she did it.",
        lineCn: '我终于当面问了她，问她为什么要那样做。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'face it directly', cn: '对质，当面把话摊开', correct: true, reason: '走过去、直接问，正是 confront 的动作。' },
          { key: 'B', en: 'avoid the person', cn: '躲开那个人', correct: false, reason: '她「没有绕开」，正好相反。' },
          { key: 'C', en: 'forgive quietly', cn: '默默原谅', correct: false, reason: '她开口是问原因，不是原谅。' }
        ],
        analysis: 'confront 指主动面对冲突、把问题摊开来讲，语气比 ask 重得多。',
        wrongFeedback: '你答成「躲开那个人」，可她已经走到对方面前了。气血 -10',
        afterCorrect: '老人把铁盒放在台面上，说：「我知道你恨我。」她说：「我不恨，我只是想知道。」'
      },
      {
        plotDescription: '老人说，周叙知道真相后，有两年没回过家。',
        line: "He cut ties with his family for two years.",
        lineCn: '他和家里断了两年联系。',
        prompt: "根据上下文，选出画线词汇 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'ended all contact', cn: '断绝关系，彻底断了联系', correct: true, reason: '两年没回家，正是把关系剪断。' },
          { key: 'B', en: 'moved to another city', cn: '搬到另一个城市', correct: false, reason: '搬家不等于断联系。' },
          { key: 'C', en: 'tied a knot', cn: '打了个结', correct: false, reason: 'tie 是系上，cut ties 是剪断，意思正好相反。' }
        ],
        analysis: 'cut ties 指正式断绝往来，常用于家庭、朋友或机构之间。',
        wrongFeedback: '你答成「打了个结」，老人低头看着盒子：「他连电话都不接。」气血 -10',
        afterCorrect: '温以宁想起那两年他总是独自值除夕的班。'
      },
      {
        plotDescription: '老人打开盒子，里面是一枚旧戒指，压着一张折过的纸。',
        line: "I messed up the timing — I should have said it earlier.",
        lineCn: '我把时机搞砸了，本该早点说出这些。',
        prompt: "根据上下文，选出画线词汇 'Mess up' 最准确的意思。",
        options: [
          { key: 'A', en: 'made a mistake', cn: '搞砸了，弄错了', correct: true, reason: '「本该早点说」正是承认自己弄错了时机。' },
          { key: 'B', en: 'cleaned everything up', cn: '收拾干净了', correct: false, reason: 'mess up 和收拾干净正好相反。' },
          { key: 'C', en: 'arranged it perfectly', cn: '安排得很完美', correct: false, reason: '她说的是「本该早点」，显然不完美。' }
        ],
        analysis: 'mess up 口语里指把事情弄糟、弄出错，是很常用的自嘲说法。',
        wrongFeedback: '你答成「安排得很完美」，老人抬起头，眼睛红了。气血 -10',
        afterCorrect: '纸上是一行字：等你三十岁，如果还没结婚，就把这个给她。落款是十年前的日期。'
      },
      {
        plotDescription: '温以宁问，这戒指是谁的。',
        line: "We both screwed up, and we both kept quiet about it.",
        lineCn: '我们两个都弄糟了，又都对此保持沉默。',
        prompt: "根据上下文，选出画线词汇 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed it perfectly', cn: '完美地修好了', correct: false, reason: '后面接的是「保持沉默」，不是在修补。' },
          { key: 'B', en: 'ruined it', cn: '弄糟了，把事情搞坏', correct: true, reason: '两个人都不说话，正是把事弄坏了还不肯讲。' },
          { key: 'C', en: 'apologized to each other', cn: '互相道歉了', correct: false, reason: '句子说的是沉默，不是道歉。' }
        ],
        analysis: 'screw up 和 mess up 意思接近，都指把事弄糟，语气更口语。',
        wrongFeedback: '你答成「互相道歉了」，老人摇头：「要是道过歉就好了。」气血 -10',
        afterCorrect: '她拿起那枚戒指，很轻，像一片叶子。她忽然明白周叙为什么总说「我不配」。'
      }
    ],
    completeText: '她把戒指放回盒子，说：「阿姨，这个我不能收。要收，也得他自己给我。」老人笑了，那是她第一次看见她笑。'
  },
  {
    id: 'pl_42',
    index: 42,
    title: '第 42 章 · 求婚的草稿',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '他手机落在她桌上，屏幕亮了一下，弹出一份备忘录的提醒：十二月三十一日，念给她听。她没点开。晚上他自己招了。',
    questions: [
      {
        plotDescription: '朋友在群里连发三条消息。',
        line: "Come on, spill the tea — what did you write in that note?",
        lineCn: '快说，爆料一下，你那张纸上到底写了什么？',
        prompt: "根据上下文，选出画线词汇 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'make a cup of tea', cn: '泡一杯茶', correct: false, reason: '这里要的是内容，不是饮料。' },
          { key: 'B', en: 'keep it a secret', cn: '保守秘密', correct: false, reason: '「快说」正好是让秘密说出来。' },
          { key: 'C', en: 'share the gossip', cn: '爆料，把内情说出来', correct: true, reason: '群里追问纸上写了什么，正是让他抖出来。' }
        ],
        analysis: 'spill the tea 是网络口语，指把八卦、内幕说出来，tea 就是「料」。',
        wrongFeedback: '你答成「泡一杯茶」，群里立刻刷了一排问号。气血 -10',
        afterCorrect: '他打了三个字又删掉，最后只回：没什么。'
      },
      {
        plotDescription: '他对着她，手一直在摸后颈。',
        line: "Swear to god, I didn't mean for you to see that.",
        lineCn: '我对天发誓，我不是故意让你看到的。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'seriously promise', cn: '对天发誓，非常认真地保证', correct: true, reason: '他紧张到摸后颈，这句是加重语气的保证。' },
          { key: 'B', en: 'curse at God', cn: '咒骂上帝', correct: false, reason: 'swear 有骂人的意思，但 to god 是发誓。' },
          { key: 'C', en: 'pray silently', cn: '默默祈祷', correct: false, reason: '他是在解释，不是在祈祷。' }
        ],
        analysis: 'swear to god 用于强调自己说的是真的，相当于「我发誓」。',
        wrongFeedback: '你答成「咒骂上帝」，他被口水呛了一下。气血 -10',
        afterCorrect: '她说：「我一个字都没看到。」他说：「那我更亏了。」'
      },
      {
        plotDescription: '她说算了，不逼他念。',
        line: "Whatever — I'm not going to make you say it.",
        lineCn: '算了，我不逼你说。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'anything at all', cn: '任何东西', correct: false, reason: '这里单独成句，是让步的语气。' },
          { key: 'B', en: 'never mind', cn: '算了，随便吧', correct: true, reason: '后面一句「不逼你」说明她已经放弃追问。' },
          { key: 'C', en: 'for sure', cn: '当然', correct: false, reason: '语气不对，这里是退让不是肯定。' }
        ],
        analysis: 'whatever 单独使用时表示「随便吧、算了」，常带一点无奈。',
        wrongFeedback: '你答成「当然」，他愣了一下：「什么叫当然？」气血 -10',
        afterCorrect: '他沉默了很久，说：「那你听一半吧。」'
      },
      {
        plotDescription: '他说，那份草稿是六月写的。',
        line: "You wrote that in June? Seriously?",
        lineCn: '你六月就写了？你认真的吗？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'are you for real', cn: '你认真的吗，当真？', correct: true, reason: '她重复时间、再追问一句，正是确认他是否当真。' },
          { key: 'B', en: 'in a very serious voice', cn: '用很严肃的语气', correct: false, reason: '这里单独成句，是在确认对方的态度，不是形容语气。' },
          { key: 'C', en: 'immediately', cn: '立刻', correct: false, reason: 'seriously 没有「立刻」的意思。' }
        ],
        analysis: 'seriously 单独作问句时，表示难以置信的确认，相当于「你说真的？」',
        wrongFeedback: '你答成「用很严肃的语气」，他反问：「我哪句话不严肃？」气血 -10',
        afterCorrect: '他说：「六月。你签续签那天。」'
      }
    ],
    completeText: '她忽然想起六月那个下午，她写下「留下」两个字。原来同一天，他也写下了一份草稿。'
  },
  {
    id: 'pl_43',
    index: 43,
    title: '第 43 章 · 她说了愿意',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '十二月三十一日，医院天台。他准备了两周，气球、热饮、一台旧音响。结果戒指盒落在了车里，音响也接不上电。',
    questions: [
      {
        plotDescription: '他跑上来时满头是汗，第一句话就是认错。',
        line: "My bad — I left the ring in the car.",
        lineCn: '我的锅，戒指落车里了。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'my fault', cn: '我的锅，是我的错', correct: true, reason: '跑上来就认错，正是 my bad 的用法。' },
          { key: 'B', en: 'my gift to you', cn: '给你的礼物', correct: false, reason: '他在道歉，不是在送礼。' },
          { key: 'C', en: 'my turn', cn: '轮到我了', correct: false, reason: 'my turn 是轮流，这里没有轮次。' }
        ],
        analysis: 'my bad 是非常口语的认错方式，语气轻，适合小事。',
        wrongFeedback: '你答成「给你的礼物」，她笑：「这礼物还得你自己去拿。」气血 -10',
        afterCorrect: '她说：「那你还不快去。」他转身就跑，跑到一半又回头：「你别走。」'
      },
      {
        plotDescription: '楼下保安拦住他，问怎么回事。',
        line: "Don't blame him — I forgot to remind him.",
        lineCn: '别怪他，是我忘了提醒他。',
        prompt: "根据上下文，选出画线词汇 'Blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'hold someone responsible', cn: '责怪，把责任算到别人头上', correct: true, reason: '「别怪他」正是让人别把责任推给他。' },
          { key: 'B', en: 'praise him', cn: '表扬他', correct: false, reason: '和「忘了提醒」这个语境不搭。' },
          { key: 'C', en: 'thank him', cn: '感谢他', correct: false, reason: '她在替他开脱，不是在道谢。' }
        ],
        analysis: 'blame 指认为某人该为某事负责，常带指责意味。',
        wrongFeedback: '你答成「表扬他」，保安看了看两个人，把门打开了。气血 -10',
        afterCorrect: '他跑回来时喘得说不出话，把盒子举得高高的。'
      },
      {
        plotDescription: '后来两个人在楼道里吵了两句。',
        line: "We argued for ten minutes about which floor to go to.",
        lineCn: '我们为了上几楼争了十分钟。',
        prompt: "根据上下文，选出画线词汇 'Argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'agreed with each other', cn: '彼此同意', correct: false, reason: '争了十分钟，显然没同意。' },
          { key: 'B', en: 'quarrel over something', cn: '争吵，为某件事争起来', correct: true, reason: '为了楼层争十分钟，正是 argue。' },
          { key: 'C', en: 'laughed together', cn: '一起笑', correct: false, reason: '他们是在争，不是在笑。' }
        ],
        analysis: 'argue 指因为意见不同而争执，可以很轻，也可以很激烈。',
        wrongFeedback: '你答成「彼此同意」，她说：「那十分钟我们在干嘛？」气血 -10',
        afterCorrect: '最后是他说：「顶楼吧，那里能看见整个院区。」'
      },
      {
        plotDescription: '她站在天台边上，听见楼下有人喊她的名字。',
        line: "He yelled my name from the parking lot.",
        lineCn: '他在停车场大喊我的名字。',
        prompt: "根据上下文，选出画线词汇 'Yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'whispered softly', cn: '轻轻地低语', correct: false, reason: '隔着停车场低声说话听不见。' },
          { key: 'B', en: 'sang a song', cn: '唱了一首歌', correct: false, reason: '他喊的是名字。' },
          { key: 'C', en: 'shout loudly', cn: '大喊，高声叫', correct: true, reason: '从停车场传到天台，只能是喊。' }
        ],
        analysis: 'yell 指因距离或情绪而高声喊叫。',
        wrongFeedback: '你答成「轻轻地低语」，可整栋楼都听见了。气血 -10',
        afterCorrect: '她趴在栏杆上往下看，他举着那个小盒子，像个傻子一样挥手。'
      }
    ],
    completeText: '她说了愿意。没有音乐，没有气球升空，只有两个人在天台上冻得发抖，笑得停不下来。'
  },
  {
    id: 'pl_44',
    index: 44,
    title: '第 44 章 · 婚纱店的镜子',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚纱店里，暖黄的灯，三面镜子。她进去换衣服，他坐在外面，忽然想起母亲铁盒里压着的那张旧照片——也是这样的镜子，也是这样的白。',
    questions: [
      {
        plotDescription: '他提了一次当年的事。',
        line: "She still denies writing that letter.",
        lineCn: '她至今否认写过那封信。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'say it is not true', cn: '否认，说那不是真的', correct: true, reason: '「至今」加「那封信」，正是她不承认。' },
          { key: 'B', en: 'admit it', cn: '承认了', correct: false, reason: 'deny 和 admit 正好相反。' },
          { key: 'C', en: 'forget about it', cn: '忘掉了', correct: false, reason: '不记得和否认是两件事。' }
        ],
        analysis: 'deny 指否认某件事的真实性，也指拒绝给予。',
        wrongFeedback: '你答成「承认了」，他说：「要是她承认，我反而好受点。」气血 -10',
        afterCorrect: '她换好衣服出来，正好听见最后一句。她没说话，只是站到镜子前。'
      },
      {
        plotDescription: '他迟到了十五分钟，进门先对着店员鞠躬。',
        line: "He apologized to her mother for being late.",
        lineCn: '他为迟到向她母亲道了歉。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'complain about the traffic', cn: '抱怨堵车', correct: false, reason: '鞠躬是道歉，不是抱怨。' },
          { key: 'B', en: 'explain the reason', cn: '解释原因', correct: false, reason: '这里是先认错，解释是之后的事。' },
          { key: 'C', en: 'say sorry', cn: '道歉，说对不起', correct: true, reason: '迟到十五分钟、进门先鞠躬，正是道歉。' }
        ],
        analysis: 'apologize 指为自己造成的问题向对方表示歉意。',
        wrongFeedback: '你答成「解释原因」，她母亲说：「我又没问你为什么。」气血 -10',
        afterCorrect: '她母亲看了他一眼，说：「下次早点出门。」他连点了三下头。'
      },
      {
        plotDescription: '她试完衣服，站在镜子前很久。',
        line: "I don't know if I can forgive her yet.",
        lineCn: '我还不知道能不能原谅她。',
        prompt: "根据上下文，选出画线词汇 'Forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'stop being angry about it', cn: '原谅，放下那份怒', correct: true, reason: '「还不知道能不能」说的正是要不要放下。' },
          { key: 'B', en: 'forget it completely', cn: '彻底忘记', correct: false, reason: '原谅不等于忘记，她记得很清楚。' },
          { key: 'C', en: 'trust her again', cn: '重新信任她', correct: false, reason: '原谅是先放下怒，信任是更后面的事。' }
        ],
        analysis: 'forgive 指不再因某件事怨恨对方，是单方面的放下，不等于和好。',
        wrongFeedback: '你答成「重新信任她」，她说：「信任比原谅难多了。」气血 -10',
        afterCorrect: '他说：「那我陪你慢慢来。」她说：「你先把你妈那盒子拿回来。」'
      },
      {
        plotDescription: '说起那年，他停了一下。',
        line: "He held a grudge for years, then let it go.",
        lineCn: '他记了很多年的仇，后来放下了。',
        prompt: "根据上下文，选出画线词汇 'Grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a gift', cn: '一件礼物', correct: false, reason: 'grudge 和礼物没有关系。' },
          { key: 'B', en: 'a heavy bag', cn: '一个重包', correct: false, reason: 'hold a grudge 是心里憋着气，不是提东西。' },
          { key: 'C', en: 'long-held resentment', cn: '记仇，长期憋着的怨气', correct: true, reason: '憋了很多年又放下，正是 grudge。' }
        ],
        analysis: 'grudge 指因过去的伤害而长期怀有的怨恨，常用 hold a grudge。',
        wrongFeedback: '你答成「一个重包」，她说：「这包他背了十年。」气血 -10',
        afterCorrect: '镜子里她穿着那身白，他忽然站起来，说：「很好看。」'
      }
    ],
    completeText: '她转过身，裙摆扫过地面。她说：「周叙，我不需要你把过去都摆平，我只要你以后别再一个人扛。」'
  },
  {
    id: 'pl_45',
    index: 45,
    title: '第 45 章 · 沉默的举报信',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼前一周，医院的纪检收到一封匿名举报信，说周叙收受器械商回扣。信里提到的两次饭局、一个牌子的缝合线，只有科里几个人知道。',
    questions: [
      {
        plotDescription: '她看完信，第一反应不是怀疑。',
        line: "Someone betrayed him — the details in that letter were private.",
        lineCn: '有人背叛了他，信里的细节本来是私下的。',
        prompt: "根据上下文，选出画线词汇 'Betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'break someone trust', cn: '背叛，辜负信任', correct: true, reason: '只有熟人知道的细节被写进信里，正是信任被卖。' },
          { key: 'B', en: 'supported him', cn: '支持了他', correct: false, reason: '匿名举报不是支持。' },
          { key: 'C', en: 'protected him', cn: '保护了他', correct: false, reason: '这封信是要把他拉下来。' }
        ],
        analysis: 'betray 指辜负信任、做出背叛对方的事，是关系里最重的指控之一。',
        wrongFeedback: '你答成「支持了他」，她把信纸攥出了褶。气血 -10',
        afterCorrect: '她把信复印了一份，锁进自己的抽屉。'
      },
      {
        plotDescription: '有人在背后议论，她当着所有人的面回了一句。',
        line: "He's not a liar — I've seen every version of him.",
        lineCn: '他不是骗子，他什么样子我都见过。',
        prompt: "根据上下文，选出画线词汇 'Liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who lies', cn: '骗子，说谎的人', correct: true, reason: '「不是」加「什么样子我都见过」，正是在否掉这个指控。' },
          { key: 'B', en: 'a lawyer', cn: '律师', correct: false, reason: 'liar 和 lawyer 发音像，但意思完全不同。' },
          { key: 'C', en: 'a leader', cn: '领导', correct: false, reason: '她在说他的人品，不是在说职位。' }
        ],
        analysis: 'liar 指习惯性说谎的人，是很有攻击性的词。',
        wrongFeedback: '你答成「律师」，走廊里有人没忍住笑了一声。气血 -10',
        afterCorrect: '她说：「你们要查就查，但别在背后说。」'
      },
      {
        plotDescription: '她仔细看了那封信的落款。',
        line: "The letter looked real, but the signature was fake.",
        lineCn: '信看起来是真的，但签名是假的。',
        prompt: "根据上下文，选出画线词汇 'Fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'expensive', cn: '昂贵的', correct: false, reason: '签名没有价格。' },
          { key: 'B', en: 'not genuine', cn: '假的，伪造的', correct: true, reason: '和「看起来是真的」对比，正是伪造。' },
          { key: 'C', en: 'handwritten', cn: '手写的', correct: false, reason: '手写和真假是两回事。' }
        ],
        analysis: 'fake 指伪造的、不真实的，可形容物品，也可形容人的情感。',
        wrongFeedback: '你答成「手写的」，她把信举到灯下，笔画确实断了。气血 -10',
        afterCorrect: '签名是器械商的名字，但那个人上个月已经出国了。'
      },
      {
        plotDescription: '她终于知道信是谁写的。',
        line: "He called himself my friend — what a hypocrite.",
        lineCn: '他还自称是我朋友，真是个伪君子。',
        prompt: "根据上下文，选出画线词汇 'Hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'says one thing, does another', cn: '伪君子，说一套做一套', correct: true, reason: '嘴上叫朋友、背后写举报信，正是伪君子。' },
          { key: 'B', en: 'a hero', cn: '英雄', correct: false, reason: '写匿名信的人不会被称作英雄。' },
          { key: 'C', en: 'a stranger', cn: '陌生人', correct: false, reason: '句子说的是「自称朋友」，不是陌生人。' }
        ],
        analysis: 'hypocrite 指嘴上讲道德、实际做出相反行为的人。',
        wrongFeedback: '你答成「英雄」，他说：「那我宁愿没有这种英雄。」气血 -10',
        afterCorrect: '她说：「是陈默。」他闭了一下眼睛，很久才说：「我知道。」'
      }
    ],
    completeText: '婚礼请柬已经发出去了。他把那张请柬从桌上拿起来，看了很久，最后放回原处，没有撕。'
  },
  {
    id: 'pl_46',
    index: 46,
    title: '第 46 章 · 举报信之后',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '陈默来了，站在办公室门口，说他是来「解释」的。他说那封信是为周叙好，怕他走错路。周叙给他倒了杯水，请他坐下。',
    questions: [
      {
        plotDescription: '温以宁在门外听完，忍不住开口。',
        line: "That's a backstab, not advice.",
        lineCn: '那是背刺，不是什么忠告。',
        prompt: "根据上下文，选出画线词汇 'Backstab' 最准确的意思。",
        options: [
          { key: 'A', en: 'betray behind someone back', cn: '背刺，在背后捅刀', correct: true, reason: '匿名举报加「为你好」的说法，正是背刺。' },
          { key: 'B', en: 'a joke', cn: '一个玩笑', correct: false, reason: '纪检调查不是玩笑。' },
          { key: 'C', en: 'a friendly warning', cn: '善意的提醒', correct: false, reason: '提醒会当面说，不会写匿名信。' }
        ],
        analysis: 'backstab 指在对方背后做出伤害他的事，比 betray 更形象、更口语。',
        wrongFeedback: '你答成「善意的提醒」，她推门进来：「提醒需要匿名吗？」气血 -10',
        afterCorrect: '陈默的脸白了一下，说：「你们不懂。」'
      },
      {
        plotDescription: '陈默开始说「你自己也有问题」。',
        line: "Don't let him gaslight you — he's the one who wrote it.",
        lineCn: '别让他 PUA 你，信是他写的。',
        prompt: "根据上下文，选出画线词汇 'Gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'flatter someone', cn: '奉承某人', correct: false, reason: '把责任推到对方身上，不是奉承。' },
          { key: 'B', en: 'make someone doubt their own mind', cn: '心理操控，让人怀疑自己', correct: true, reason: '让对方觉得「你也有问题」，正是 gaslight 的手法。' },
          { key: 'C', en: 'pay for dinner', cn: '请吃饭', correct: false, reason: 'gas 是煤气，但 gaslight 是心理操控。' }
        ],
        analysis: 'gaslight 源于电影，指通过否认、扭曲事实让对方怀疑自己的判断。',
        wrongFeedback: '你答成「请吃饭」，她说：「他倒是想请。」气血 -10',
        afterCorrect: '周叙一直没说话，直到陈默停下来，他才开口：「说完了吗。」'
      },
      {
        plotDescription: '她后来才知道，陈默在科里说了很多话。',
        line: "He manipulated the whole department into doubting me.",
        lineCn: '他操控了整个科室，让他们都怀疑我。',
        prompt: "根据上下文，选出画线词汇 'Manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'control unfairly', cn: '操控，不正当地影响别人', correct: true, reason: '让整个科室都起疑，正是背后的操控。' },
          { key: 'B', en: 'taught them patiently', cn: '耐心地教他们', correct: false, reason: '结果是「怀疑」，不是学到东西。' },
          { key: 'C', en: 'entertained them', cn: '娱乐了大家', correct: false, reason: '这不是娱乐，是伤害。' }
        ],
        analysis: 'manipulate 指用不正当手段影响、控制他人，让人按自己的意思行事。',
        wrongFeedback: '你答成「耐心地教他们」，她把水杯放下：「教他们怀疑我？」气血 -10',
        afterCorrect: '他说：「我不怪他们。人在不确定的时候，都会信声音大的那个。」'
      },
      {
        plotDescription: '陈默最后说，你这个人就是太好说话。',
        line: "Everyone thinks he's a push over, so they keep asking him for favors.",
        lineCn: '所有人都觉得他是老好人，所以总找他帮忙。',
        prompt: "根据上下文，选出画线词汇 'Push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'very strong and firm', cn: '非常强硬', correct: false, reason: '被当成好说话的人，正好相反。' },
          { key: 'B', en: 'a physical push', cn: '一次推搡', correct: false, reason: 'push over 这里是比喻，指人好欺负。' },
          { key: 'C', en: 'too easy to take advantage of', cn: '老好人，好拿捏', correct: true, reason: '总被找帮忙、不会拒绝，正是这个意思。' }
        ],
        analysis: 'push over（也写 pushover）指容易被说服、被占便宜的人。',
        wrongFeedback: '你答成「非常强硬」，陈默笑了一下：「他自己知道。」气血 -10',
        afterCorrect: '周叙站起来，把门打开：「帮忙可以，背刺不行。你走吧。」'
      }
    ],
    completeText: '门关上以后，他站在窗边很久。温以宁走过去，没有抱他，只是站在他旁边，一起看楼下的车灯。'
  },
  {
    id: 'pl_47',
    index: 47,
    title: '第 47 章 · 她站到他前面',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '调查说明会在示教室开。长桌，六个人，一台投影。周叙坐在最边上，手放在膝盖上不动。主持人刚说完「请当事人回避」，她先站了起来。',
    questions: [
      {
        plotDescription: '她开口时，声音比预想的稳。',
        line: "I stood up for him in front of the whole committee.",
        lineCn: '我在整个委员会面前替他说话。',
        prompt: "根据上下文，选出画线词汇 'Stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'stand up from a chair', cn: '从椅子上站起来', correct: false, reason: 'stand up for 的重点是「替谁说话」，不是起身的动作。' },
          { key: 'B', en: 'defend someone publicly', cn: '站出来捍卫某人', correct: true, reason: '当着委员会开口维护他，正是这个短语。' },
          { key: 'C', en: 'give up on him', cn: '放弃他', correct: false, reason: '她恰恰是没有放弃。' }
        ],
        analysis: 'stand up for somebody 指在别人质疑、攻击时站出来支持他。',
        wrongFeedback: '你答成「从椅子上站起来」，主持人愣了一下：「你可以坐下说。」气血 -10',
        afterCorrect: '她把那封信的复印件放在桌上，说：「签名是假的，人已经出国了。」'
      },
      {
        plotDescription: '有人问周叙为什么不解释。',
        line: "He finally fought back and asked for the evidence.",
        lineCn: '他终于反击了，要求拿出证据。',
        prompt: "根据上下文，选出画线词汇 'Fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'resist and respond', cn: '反击，回击', correct: true, reason: '被人质疑后要求证据，正是回击。' },
          { key: 'B', en: 'run away from it', cn: '逃避', correct: false, reason: '他开口了，不是逃。' },
          { key: 'C', en: 'give in quietly', cn: '默默让步', correct: false, reason: '要求证据不是让步。' }
        ],
        analysis: 'fight back 指受到攻击后反击，可以是言语，也可以是行动。',
        wrongFeedback: '你答成「逃避」，可他那天一句都没退。气血 -10',
        afterCorrect: '会议室安静了几秒。有人翻开了材料。'
      },
      {
        plotDescription: '她说完，坐回他旁边。',
        line: "I'll defend him as long as I know the truth.",
        lineCn: '只要我知道真相，我就会为他辩护。',
        prompt: "根据上下文，选出画线词汇 'Defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'attack him', cn: '攻击他', correct: false, reason: 'defend 和 attack 正好相反。' },
          { key: 'B', en: 'suspect him', cn: '怀疑他', correct: false, reason: '她明确站在他这边。' },
          { key: 'C', en: 'speak in support of', cn: '辩护，为他说话', correct: true, reason: '「只要我知道真相」说明她是在为他撑住。' }
        ],
        analysis: 'defend 指为某人或某观点辩护，抵御指责。',
        wrongFeedback: '你答成「攻击他」，她说：「我要是想攻击，就不用坐这儿了。」气血 -10',
        afterCorrect: '他在桌下握住她的手，很用力，指节都白了。'
      },
      {
        plotDescription: '散会后有人在走廊里传话。',
        line: "Don't ignore the rumor — it will grow.",
        lineCn: '别无视那些传言，它会越长越大。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'pay no attention to', cn: '无视，不去理会', correct: true, reason: '「会长大」正是对「不理它」的警告。' },
          { key: 'B', en: 'spread it widely', cn: '到处传播', correct: false, reason: '句子是劝人别不理，不是去传。' },
          { key: 'C', en: 'write it down', cn: '记下来', correct: false, reason: 'ignore 和记录无关。' }
        ],
        analysis: 'ignore 指故意不去理会，常和 warning 搭配表示「别不当回事」。',
        wrongFeedback: '你答成「到处传播」，她说：「我像是在传播的人吗。」气血 -10',
        afterCorrect: '她当天下午写了一份情况说明，交到了纪检。'
      }
    ],
    completeText: '一周后，调查结论出来了：举报不实。她把那张纸折好，放进包里，和那支钢笔放在一起。'
  },
  {
    id: 'pl_48',
    index: 48,
    title: '第 48 章 · 婚礼前夜',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼前一夜，酒店房间。手机亮了一下，是陈默：明天我会到场，把十年前的事讲清楚。后面跟着一句：你猜大家会信谁。',
    questions: [
      {
        plotDescription: '他盯着那条消息，没有回复。',
        line: "His silence was worse than any threat.",
        lineCn: '他的沉默比任何威胁都难受。',
        prompt: "根据上下文，选出画线词汇 'Silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'saying nothing at all', cn: '沉默，一句话都不说', correct: true, reason: '盯着消息不回，正是那种沉默。' },
          { key: 'B', en: 'a loud argument', cn: '大声争吵', correct: false, reason: '他一个字都没发。' },
          { key: 'C', en: 'a phone call', cn: '一通电话', correct: false, reason: '消息是文字，不是通话。' }
        ],
        analysis: 'silence 指向外界传达出的「不说话」，在关系里常被理解为一种压力。',
        wrongFeedback: '你答成「大声争吵」，可屏幕上只有那条消息。气血 -10',
        afterCorrect: '他把手机扣在桌上，又翻过来，打了两个字：随你。'
      },
      {
        plotDescription: '温以宁看完消息，问他要不要报警。',
        line: "He threatened to tell everyone at the wedding.",
        lineCn: '他威胁要在婚礼上告诉所有人。',
        prompt: "根据上下文，选出画线词汇 'Threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'invite everyone', cn: '邀请所有人', correct: false, reason: '「告诉所有人」在这里是威胁，不是邀请。' },
          { key: 'B', en: 'warn of harm', cn: '威胁，扬言要做伤害人的事', correct: true, reason: '要在婚礼上揭旧事，正是拿这件事压人。' },
          { key: 'C', en: 'promise a gift', cn: '承诺送礼物', correct: false, reason: '没有礼物，只有条件。' }
        ],
        analysis: 'threaten 指扬言要做出对对方不利的事，用来施压。',
        wrongFeedback: '你答成「邀请所有人」，她说：「他可不是来喝喜酒的。」气血 -10',
        afterCorrect: '他说：「不用报警。他想说，就让他说。」'
      },
      {
        plotDescription: '她问他怕不怕。',
        line: "He wanted to ruin the day for both of us.",
        lineCn: '他就是想毁掉我们两个的这一天。',
        prompt: "根据上下文，选出画线词汇 'Ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'improve it', cn: '让它变得更好', correct: false, reason: '和「想毁掉」正好相反。' },
          { key: 'B', en: 'plan it carefully', cn: '仔细地安排', correct: false, reason: 'ruin 是破坏，不是安排。' },
          { key: 'C', en: 'spoil completely', cn: '毁掉，彻底搞坏', correct: true, reason: '在婚礼上揭旧事，目的就是让这一天毁掉。' }
        ],
        analysis: 'ruin 指把原本好的事物彻底破坏，常指机会、心情、场合。',
        wrongFeedback: '你答成「仔细地安排」，她说：「他倒是真精心。」气血 -10',
        afterCorrect: '他说：「那我更不能怕。」'
      },
      {
        plotDescription: '她想起白天母亲说的话。',
        line: "One sentence can destroy ten years of trust.",
        lineCn: '一句话就能摧毁十年的信任。',
        prompt: "根据上下文，选出画线词汇 'Destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'damage beyond repair', cn: '摧毁，破坏到无法修复', correct: true, reason: '和「十年的信任」搭配，指的正是不可逆的破坏。' },
          { key: 'B', en: 'build up slowly', cn: '慢慢建立', correct: false, reason: 'destroy 和 build 正好相反。' },
          { key: 'C', en: 'measure exactly', cn: '精确测量', correct: false, reason: 'trust 不能被测量。' }
        ],
        analysis: 'destroy 指彻底毁坏，比 damage 更重，常带不可挽回的意味。',
        wrongFeedback: '你答成「慢慢建立」，她说：「我们现在缺的恰恰是这个。」气血 -10',
        afterCorrect: '他把那件熨好的衬衫挂起来，说：「明天穿这件。」'
      }
    ],
    completeText: '那一晚两个人都没怎么睡。凌晨三点，他给她发了句：明天不管他说什么，你站我旁边就行。她回：我一直都在。'
  },
  {
    id: 'pl_49',
    index: 49,
    title: '第 49 章 · 十年的账',
    novel: '暗恋你第十年',
    speaker: { name: '温以宁', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼当天早上，酒店休息室。他父亲来了，身后跟着陈默。老人把那个铁盒放在桌上，说：「今天这账，我来算。」',
    questions: [
      {
        plotDescription: '老人先开口，声音很低。',
        line: "My biggest regret is that I never asked you why.",
        lineCn: '我最后悔的，是从来没问过你为什么。',
        prompt: "根据上下文，选出画线词汇 'Regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling sorry about the past', cn: '后悔，为过去的事懊悔', correct: true, reason: '「从来没问过」正是回头看的懊悔。' },
          { key: 'B', en: 'a plan for the future', cn: '对未来的计划', correct: false, reason: '句子说的是回头看的事。' },
          { key: 'C', en: 'a happy memory', cn: '一段快乐的回忆', correct: false, reason: '「最后悔」不可能是快乐。' }
        ],
        analysis: 'regret 指对已经发生或没做的事感到后悔，是可数名词也可作动词。',
        wrongFeedback: '你答成「对未来的计划」，老人低下头：「我没有未来了。」气血 -10',
        afterCorrect: '周叙没有接话，只是把手放在桌上，慢慢握成拳。'
      },
      {
        plotDescription: '陈默说他是被逼的。',
        line: "He didn't want revenge — he wanted to be seen.",
        lineCn: '他不是想复仇，他只是想被人看见。',
        prompt: "根据上下文，选出画线词汇 'Revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'hurting someone back', cn: '复仇，回击伤害过自己的人', correct: true, reason: '写举报信、放话要揭旧事，正是报复的动作。' },
          { key: 'B', en: 'forgiveness', cn: '原谅', correct: false, reason: '和「复仇」正好相反。' },
          { key: 'C', en: 'money', cn: '金钱', correct: false, reason: '句子里说的是「被看见」，不是钱。' }
        ],
        analysis: 'revenge 指为了所受的伤害而回击对方，常带情绪上的执念。',
        wrongFeedback: '你答成「原谅」，陈默抬起头，眼睛是红的。气血 -10',
        afterCorrect: '老人说：「我当年也没看见他。这是我的错。」'
      },
      {
        plotDescription: '话说开之后，房间里安静下来。',
        line: "For the first time in ten years, I felt peace.",
        lineCn: '十年来我第一次觉得平静。',
        prompt: "根据上下文，选出画线词汇 'Peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'excitement', cn: '兴奋', correct: false, reason: '房间安静下来，不是兴奋的场面。' },
          { key: 'B', en: 'calm and quiet', cn: '平静，心里安稳', correct: true, reason: '账算清了、话说开了，正是那种安静。' },
          { key: 'C', en: 'fear', cn: '恐惧', correct: false, reason: '她用的是「第一次」，是松下来。' }
        ],
        analysis: 'peace 指没有冲突、内心安宁的状态，比 quiet 更偏心理层面。',
        wrongFeedback: '你答成「恐惧」，可她站着，肩膀已经松了。气血 -10',
        afterCorrect: '她把茶推到陈默面前，说：「喝口水。等会儿还有仪式。」'
      },
      {
        plotDescription: '老人提议，今天先停战。',
        line: "They called a truce for one day — just for the wedding.",
        lineCn: '他们说好休战一天，就为了这场婚礼。',
        prompt: "根据上下文，选出画线词汇 'Truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'a wedding gift', cn: '一份结婚礼物', correct: false, reason: 'truce 是停战约定，不是礼物。' },
          { key: 'B', en: 'a long trip', cn: '一段长途旅行', correct: false, reason: '句子说的是「一天」，不是旅行。' },
          { key: 'C', en: 'an agreement to stop fighting', cn: '休战，暂时停止冲突的约定', correct: true, reason: '「就为了婚礼」加「一天」，正是暂时停战。' }
        ],
        analysis: 'truce 指双方约定暂时停止争斗，通常是有限期的。',
        wrongFeedback: '你答成「一份结婚礼物」，老人说：「这个我可送不起。」气血 -10',
        afterCorrect: '陈默点了下头，站起来，走到门口又回头：「对不起。」'
      }
    ],
    completeText: '门关上。老人把铁盒推到周叙面前：「这本来该十年前给你。」周叙打开，里面除了戒指，还有一张他小时候的照片。'
  },
  {
    id: 'pl_50',
    index: 50,
    title: '第 50 章 · 十年之后，仍在心动',
    novel: '暗恋你第十年',
    speaker: { name: '周叙', avatar: window.VERSION_AVATARS.pure_love },
    storyText: '婚礼后第十年，同一家医院，同一个天台。风还是那么大，栏杆新刷过一遍漆。温以宁值完夜班上来，他已经在上面了，手里两杯热豆浆。',
    questions: [
      {
        plotDescription: '他说起这十年。',
        line: "It took us ten years to reconcile with the past.",
        lineCn: '我们花了十年才和过去和解。',
        prompt: "根据上下文，选出画线词汇 'Reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'make peace with', cn: '和解，与过去讲和', correct: true, reason: '「花了十年」加「和过去」，正是慢慢放下、重新相处。' },
          { key: 'B', en: 'forget everything', cn: '把一切忘掉', correct: false, reason: '和解不等于忘记，他们记得很清楚。' },
          { key: 'C', en: 'argue again', cn: '再吵一次', correct: false, reason: '花了十年才做到的事，不可能是再吵。' }
        ],
        analysis: 'reconcile 指在分歧之后重新和好，也可指接受无法改变的事。',
        wrongFeedback: '你答成「把一切忘掉」，她把豆浆递回去：「我可一句都没忘。」气血 -10',
        afterCorrect: '他说：「我也没忘。我连你那天穿的鞋都记得。」'
      },
      {
        plotDescription: '她说他们现在也会吵。',
        line: "We still have an argument every month about whose turn it is to cook.",
        lineCn: '我们每个月还会为谁做饭争一次。',
        prompt: "根据上下文，选出画线词汇 'Argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a love letter', cn: '一封情书', correct: false, reason: '为做饭争执，不是情书。' },
          { key: 'B', en: 'a disagreement', cn: '争论，意见不合', correct: true, reason: '「为谁做饭」加「每个月」，正是日常的小争执。' },
          { key: 'C', en: 'a medical case', cn: '一个病例', correct: false, reason: '和做饭无关。' }
        ],
        analysis: 'argument 指意见不同引发的争论，可大可小，日常小事也常用。',
        wrongFeedback: '你答成「一封情书」，她说：「这情书写得挺凶。」气血 -10',
        afterCorrect: '他说：「每次都是我赢。」她说：「你赢是因为我懒得说。」'
      },
      {
        plotDescription: '她问他，现在还打架吗。',
        line: "We don't fight anymore — we just talk too long.",
        lineCn: '我们不吵了，就是话说得太久。',
        prompt: "根据上下文，选出画线词汇 'Fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'a loud or physical quarrel', cn: '打架、激烈争吵', correct: true, reason: '和「只是话说得久」对比，指的正是那种激烈的冲突。' },
          { key: 'B', en: 'hug each other', cn: '互相拥抱', correct: false, reason: '和「不再」连用，说的是冲突。' },
          { key: 'C', en: 'work overtime', cn: '加班', correct: false, reason: '句子说的是两个人的相处。' }
        ],
        analysis: 'fight 可指肢体冲突，也可指激烈的争吵，要看上下文。',
        wrongFeedback: '你答成「互相拥抱」，她说：「那倒也是，抱得挺多。」气血 -10',
        afterCorrect: '他笑了一下，说：「主要是你话多。」她说：「你现在敢说了。」'
      },
      {
        plotDescription: '风把她的头发吹到脸上，他伸手替她拨开。',
        line: "Marriage is mostly compromise — and remembering to buy milk.",
        lineCn: '婚姻大部分是妥协，还有记得买牛奶。',
        prompt: "根据上下文，选出画线词汇 'Compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'winning every time', cn: '每次都赢', correct: false, reason: '妥协不是每次赢。' },
          { key: 'B', en: 'silence', cn: '沉默', correct: false, reason: '他把妥协和「买牛奶」并列，是日常的让步。' },
          { key: 'C', en: 'both sides give a little', cn: '妥协，各让一步', correct: true, reason: '日常琐事里各退一点，正是 compromise。' }
        ],
        analysis: 'compromise 指双方各自让步、达成都能接受的方案。',
        wrongFeedback: '你答成「每次都赢」，她说：「那你今天做饭。」他立刻改口：「我妥协。」气血 -10',
        afterCorrect: '她靠在他肩上，说：「周叙，你知道吗，我到现在还是会心跳快。」'
      }
    ],
    completeText: '他低头看她，眼睛还是十年前那双。他说：「我也是。」风从走廊那头吹过来，天亮了。十年前她在这里错过他一次，十年后，她还站在这里。'
  }
];

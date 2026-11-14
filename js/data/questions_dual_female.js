/**
 * 原创剧情题库 —— 百合 ·《影后她的小替身》
 * 50 章 × 4 题 = 200 题
 */
window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || {};
window.NOVEL_CHAPTERS.dual_female = [
  {
    id: 'df_1',
    index: 1,
    title: '第 1 章 · 替身站在光外面',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '杀青宴的第二天，沈知夏才敢承认：她答应做姜黎的替身，不只是为了钱。十七岁那年在电影院，她就把这个名字记在了本子上。现在她们隔着一张化妆台，姜黎正在卸妆，镜子里的人抬眼看了她一下。',
    questions: [
      {
        plotDescription: '姜黎问她为什么总盯着自己看，她握着水杯，指节都白了。',
        line: "Fine. I've had a crush on you since I was seventeen. Happy now?",
        lineCn: '行吧。我十七岁就暗恋你了。满意了吗？',
        prompt: "根据上下文，选出画线词汇 'Crush' 最准确的意思。",
        options: [
          { key: 'A', en: 'to press something until it breaks', cn: '把东西压碎、压扁', correct: false, reason: 'crush 作动词确实是「压碎」，但 have a crush on 说的是心里的喜欢，不是手上的力气。' },
          { key: 'B', en: 'a strong liking for someone you dare not tell', cn: '暗恋、偷偷喜欢一个人', correct: true, reason: 'have a crush on somebody 固定表示「暗恋某人」，重点在藏在心里。' },
          { key: 'C', en: 'a sudden feeling of anger', cn: '突然的一阵怒火', correct: false, reason: '生气是 anger 或 rage；crush 在这里是心动，不是发火。' }
        ],
        analysis: 'have a crush on somebody 就是「暗恋」。这句话她憋了七年，说出口时反而像在认罪。',
        wrongFeedback: '你把暗恋听成了发火，声音一下拔高，姜黎以为你在吵架，卸妆棉都被捏皱了，气血 -10。',
        afterCorrect: '姜黎没有笑她，也没有说谢谢。她只是把镜子转向沈知夏：「那你现在可以光明正大地看了。」沈知夏耳根烧起来，第一次觉得地下室也没那么冷。'
      },
      {
        plotDescription: '第二天她发消息道谢，对话框显示已读，却一直没有回音。第三天、第四天也一样。',
        line: "She ghosted me for four days and then liked my post at 2 a.m. What does that even mean?",
        lineCn: '她消失四天，然后在凌晨两点给我点了个赞。这算什么？',
        prompt: "根据上下文，选出画线词汇 'Ghost' 最准确的意思。",
        options: [
          { key: 'A', en: 'to appear suddenly without any warning', cn: '毫无预兆地突然出现', correct: false, reason: 'ghost 本义是「鬼」，但 ghost someone 是突然消失、不回消息，方向正好相反。' },
          { key: 'B', en: 'to disappear and stop answering', cn: '玩消失、一声不响地不理人', correct: true, reason: '网络口语里 ghost 作动词就是「断联、已读不回」。' },
          { key: 'C', en: 'to speak in a very low voice', cn: '用很小的声音说话', correct: false, reason: '低声说话是 whisper；ghost 讲的是人不见了、消息不回。' }
        ],
        analysis: 'ghost 作动词是「突然断联」。她不是没看见，是选择不出现，而那个点赞又把门留了一条缝。',
        wrongFeedback: '你把它听成「突然出现」，高高兴兴等了一整晚，手机始终没亮，气血 -10。',
        afterCorrect: '第五天中午，姜黎的助理出现在片场门口，递来一杯热咖啡：「她说她不习惯打字，但今天想请你吃顿饭。」沈知夏盯着那杯咖啡，半天才说：「她连解释都让别人代劳。」'
      },
      {
        plotDescription: '助理走后，同组的老演员把她拉到一边，压低声音。',
        line: "She let her manager do the talking? Honey, that's a red flag.",
        lineCn: '连话都让经纪人代说？亲爱的，这可是个危险信号。',
        prompt: "根据上下文，选出画线词汇 'Red flag' 最准确的意思。",
        options: [
          { key: 'A', en: 'a sign that something is wrong or dangerous', cn: '危险信号、要出问题的征兆', correct: true, reason: 'red flag 在关系里就是「快跑」的提醒，说明这段关系有隐患。' },
          { key: 'B', en: 'a red flag used to stop traffic', cn: '用来拦车的红旗', correct: false, reason: '字面义是交通红旗，但这里说的是关系里的警示，不是路上的旗子。' },
          { key: 'C', en: 'a small gift given to say sorry', cn: '道歉用的小礼物', correct: false, reason: '没有这个意思；red flag 是提醒你警惕，不是示好。' }
        ],
        analysis: 'red flag 是「危险信号」。老演员不是挑拨，是提醒她：连基本沟通都不肯本人来，这段关系一开始就不对等。',
        wrongFeedback: '你把它当成示好的小礼物，回了一条很长的感谢，对方已读不回，气血 -10。',
        afterCorrect: '沈知夏嘴上说「我知道」，回家还是把那条裙子熨了三遍。她告诉自己：只是吃顿饭，不算什么。'
      },
      {
        plotDescription: '饭局散得晚，剧组群里开始有人起哄，说她们俩昨晚进了同一辆车。',
        line: "We shared a cab, that's all. We did not hook up.",
        lineCn: '我们只是拼了辆车，就这样。我们没有勾搭。',
        prompt: "根据上下文，选出画线词汇 'Hook up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to hang a picture on the wall', cn: '把画挂到墙上', correct: false, reason: 'hook 作动词有「挂」的意思，但 hook up 用在两个人身上是「勾搭上」。' },
          { key: 'B', en: 'to kiss or spend the night together', cn: '勾搭上、在一起过夜', correct: true, reason: 'hook up 是口语里的暧昧关系，可以只是接吻，也可能更进一步。' },
          { key: 'C', en: 'to connect a machine to the power supply', cn: '把电器接上电源', correct: false, reason: '这是 hook up 的另一个义项，但主语是人时，说的是暧昧。' }
        ],
        analysis: 'hook up 是口语里的「勾搭、搞到一起」。她急着否认，其实是在护着那点还没说出口的心思。',
        wrongFeedback: '你把勾搭听成接电源，一本正经解释了半小时电路，群里笑得更凶，气血 -10。',
        afterCorrect: '群里安静了两秒，然后有人发了个「懂了」的表情。沈知夏关掉手机，才发现姜黎单独给她发了一条：「谢谢你说清楚。」'
      }
    ],
    completeText: '第一章结束。那天夜里她第一次没有梦见片场，梦见的是镜子转过来的那一秒。'
  },
  {
    id: 'df_2',
    index: 2,
    title: '第 2 章 · 一天三百块的命',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '进组第十天，剧组彻底乱了：投资方临时换人，通告单改到凌晨三点，两个女配在化妆间摔了粉盒。姜黎坐在走廊尽头背台词，听见沈知夏在楼梯间打电话，声音压得很低，一句都不让。',
    questions: [
      {
        plotDescription: '走廊另一头又有人在哭，化妆师抱着粉盒来回跑，导演把剧本摔在椅子上。',
        line: "There's so much drama on this set. Someone's crying in the makeup room again.",
        lineCn: '这剧组真是太多抓马了，化妆间又有人在哭。',
        prompt: "根据上下文，选出画线词汇 'Drama' 最准确的意思。",
        options: [
          { key: 'A', en: 'a serious play performed on stage', cn: '舞台上演的严肃戏剧', correct: false, reason: 'drama 本义是戏剧，但 there is drama 在口语里指一堆闹剧、抓马场面。' },
          { key: 'B', en: 'a lot of messy and exciting situations', cn: '抓马、一堆闹剧场面', correct: true, reason: '口语里的 drama 指人际之间的混乱与戏精时刻，常带夸张感。' },
          { key: 'C', en: 'a kind of music with strong feelings', cn: '一种情绪强烈的音乐', correct: false, reason: '音乐类型里没有这种说法；drama 用在这里说的是人际闹剧。' }
        ],
        analysis: '口语里的 drama 指「抓马、闹剧」。她一句话说清了剧组的混乱，也把自己划在了外面。',
        wrongFeedback: '你以为是有人在排舞台剧，还搬了把椅子去看，结果正好被拉去劝架，气血 -10。',
        afterCorrect: '沈知夏挂了电话走回来，看见姜黎，脚步顿了一下：「我不是在吵，我是在讲道理。」姜黎合上剧本：「在这儿，讲道理也算抓马。」'
      },
      {
        plotDescription: '制片人的女儿几乎天天来片场，一直跟在姜黎身后，连她补妆都站在旁边。',
        line: "She's sweet, but kind of clingy. She even waits outside the bathroom.",
        lineCn: '她人挺好的，就是有点黏人，连洗手间外面都要等。',
        prompt: "根据上下文，选出画线词汇 'Clingy' 最准确的意思。",
        options: [
          { key: 'A', en: 'staying too close and needing constant attention', cn: '黏人、离不开人、总需要关注', correct: true, reason: 'clingy 形容一个人贴得太近、过度依赖别人的陪伴。' },
          { key: 'B', en: 'unwilling to spend money', cn: '不肯花钱、抠门', correct: false, reason: '抠门是 cheap 或 stingy；clingy 讲的是黏着人不放。' },
          { key: 'C', en: 'easily frightened by small things', cn: '容易被小事吓到、胆小', correct: false, reason: '胆小是 timid；clingy 的重点是过度依赖。' }
        ],
        analysis: 'clingy 形容人「黏」。姜黎说得客气，但「连洗手间外面都要等」已经把不舒服说清楚了。',
        wrongFeedback: '你把她的话听成「抠门」，还替那姑娘解释家里不容易，姜黎笑了一下就没再说话，气血 -10。',
        afterCorrect: '沈知夏看了一眼走廊尽头那个抱着保温杯的身影：「那你为什么不直接告诉她？」姜黎愣了半秒：「因为没人教过我怎么拒绝。」'
      },
      {
        plotDescription: '晚饭时，沈知夏第一次当着组里的人划了线。',
        line: "I need boundaries. After eight, work calls go to voicemail.",
        lineCn: '我需要边界感。八点以后，工作电话只进语音信箱。',
        prompt: "根据上下文，选出画线词汇 'Boundaries' 最准确的意思。",
        options: [
          { key: 'A', en: 'the edge of a country or an area', cn: '国界、地区的边界', correct: false, reason: 'boundary 有「地界」的字面义，但这里说的是人与人之间该有的分寸。' },
          { key: 'B', en: 'the limits you set with other people', cn: '边界感、与人相处划的底线', correct: true, reason: 'boundaries 用在人际里，就是哪些可以、哪些到这儿为止。' },
          { key: 'C', en: 'a list of rules written on paper', cn: '写在纸上的规则清单', correct: false, reason: '规则清单是 rules；boundaries 是心里那条线，不一定写下来。' }
        ],
        analysis: 'boundaries 用在人际里就是「边界感」。她说得很平，但桌上没人敢接话。',
        wrongFeedback: '你听成「国界」，还问她是不是要出国，整桌突然安静，气血 -10。',
        afterCorrect: '姜黎放下筷子，第一次主动接了话：「八点以后我也关机。」助理抬头看她，像听见了什么新鲜事。'
      },
      {
        plotDescription: '第二天约好一起读本，姜黎没来，只让助理发来一句「临时有事」。',
        line: "She said she'd be here at seven. Then she bailed on me.",
        lineCn: '她说七点到，结果放了我鸽子。',
        prompt: "根据上下文，选出画线词汇 'Bail' 最准确的意思。",
        options: [
          { key: 'A', en: 'to jump out of a plane with a parachute', cn: '背着降落伞从飞机上跳下', correct: false, reason: 'bail 有跳伞的用法，但 bail on someone 是放人鸽子、临时跑路。' },
          { key: 'B', en: 'canceled and never showed up', cn: '放鸽子、临时不来', correct: true, reason: 'bail on somebody 是口语固定搭配，指答应好的事临时反悔。' },
          { key: 'C', en: 'to pay money to get out of jail', cn: '交保释金出狱', correct: false, reason: '这是 bail 的法律义；这里没有人被抓，只有人没来。' }
        ],
        analysis: 'bail on somebody 是「临时放你鸽子」。她不是迟到，是根本没打算出现。',
        wrongFeedback: '你以为她跳伞去了，还祝她玩得开心，助理的表情一言难尽，气血 -10。',
        afterCorrect: '沈知夏一个人把四页台词读完，读到第三遍时门被推开。姜黎站在那儿，头发上还带着雨：「对不起，我妈来了。」'
      }
    ],
    completeText: '第二章结束。她学会了两件事：说不，以及，等一个值得的人。'
  },
  {
    id: 'df_3',
    index: 3,
    title: '第 3 章 · 未来的岳母',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎的母亲突然出现在片场，穿着考究，眼神像在验货。同组的陆晨凑到她耳边说：「你先别露馅。」沈知夏还没明白露什么馅，就听见那位母亲开口：「小姜，周六那个男孩子，你见不见？」',
    questions: [
      {
        plotDescription: '陆晨把她拽到一边，一脸正色。',
        line: "Relax, I won't say a word. Bro code — I don't out my friend's crush.",
        lineCn: '放心，我一个字都不会说。兄弟法则——我不会把朋友的心事捅出去。',
        prompt: "根据上下文，选出画线词汇 'Bro code' 最准确的意思。",
        options: [
          { key: 'A', en: 'an unwritten rule among close friends', cn: '兄弟法则、朋友之间不成文的规矩', correct: true, reason: 'bro code 指的是朋友之间不必明说也要守的义气与规矩。' },
          { key: 'B', en: 'a code used to open a safe', cn: '开保险箱用的密码', correct: false, reason: 'code 有「密码」义，但 bro code 说的是朋友之间那套潜规则。' },
          { key: 'C', en: 'a rule that only real brothers in a family follow', cn: '只有亲兄弟才遵守的家规', correct: false, reason: 'bro code 不是血缘家规，是朋友圈里默认的义气。' }
        ],
        analysis: 'bro code 是「兄弟法则」，指朋友之间不必明说也要守的规矩。陆晨这句，是替她把秘密按住了。',
        wrongFeedback: '你听成保险箱密码，认真问他密码是几位数，他一脸绝望，气血 -10。',
        afterCorrect: '沈知夏松了半口气，转头看见姜黎正对着母亲摇头。她说：「妈，我不去相亲。」声音不大，但整个片场都听见了。'
      },
      {
        plotDescription: '母亲走后，姜黎靠着墙，突然笑了一下。',
        line: "So those were the future in-laws? She looked at me like a bad investment.",
        lineCn: '所以那就算是未来的岳母了？她看我的眼神像在看一笔亏本投资。',
        prompt: "根据上下文，选出画线词汇 'In-laws' 最准确的意思。",
        options: [
          { key: 'A', en: 'your partner\'s parents and close family', cn: '公婆、岳父母等姻亲', correct: true, reason: 'in-laws 指因为婚姻成为一家人的亲属，最常见就是伴侣的父母。' },
          { key: 'B', en: 'laws that are made inside a family', cn: '家族内部制定的家法', correct: false, reason: 'in-laws 和法律无关，是姻亲关系，这是最常见的望文生义。' },
          { key: 'C', en: 'people whose job is to practice law', cn: '从事律师工作的人', correct: false, reason: 'lawyer 才是律师；in-laws 说的是亲属。' }
        ],
        analysis: 'in-laws 是「姻亲」。「未来的」三个字挂在前面，就是姜黎在故意逗她。',
        wrongFeedback: '你把它当成家法，认真问是哪一条，姜黎笑到咳嗽，气血 -10。',
        afterCorrect: '姜黎没否认「未来的」三个字，只说：「她看谁都像亏本投资，除了我。」停了一下又补，「现在多一个你。」'
      },
      {
        plotDescription: '回地下室的路上，她刷到姜黎母亲发的朋友圈，配图是一张餐厅订位。',
        line: "Her mother really set up a blind date for Saturday. She's not even hiding it.",
        lineCn: '她妈真的给她安排了周六相亲，连藏都不藏。',
        prompt: "根据上下文，选出画线词汇 'Blind date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a first meeting arranged by other people', cn: '相亲、被他人安排的初次见面', correct: true, reason: 'blind date 的关键是双方事先没见过，由别人牵线。' },
          { key: 'B', en: 'a date you cannot see because you are blind', cn: '眼睛看不见时的约会', correct: false, reason: 'blind 在这里不是「瞎」，是「事先没见过面」。' },
          { key: 'C', en: 'a date that has been canceled', cn: '被取消的约会', correct: false, reason: '取消是 canceled；blind date 的重点是两个人不认识。' }
        ],
        analysis: 'blind date 是「相亲」。她盯着那张照片，第一次觉得长辈这两个字有重量。',
        wrongFeedback: '你以为约会取消了，安心睡了一觉，第二天才想起周六就是今天，气血 -10。',
        afterCorrect: '周六她还是去了那家餐厅，坐在隔壁桌，点了最便宜的沙拉。她告诉自己只是路过，可姜黎一进门，她就再也移不开眼。'
      },
      {
        plotDescription: '姜黎坐下后没有看菜单，先看向她这一桌。',
        line: "You think nobody can tell, but that's your blind spot — you stare.",
        lineCn: '你以为没人看得出来，但这就是你的盲区——你会盯着看。',
        prompt: "根据上下文，选出画线词汇 'Blind spot' 最准确的意思。",
        options: [
          { key: 'A', en: 'something about yourself you fail to notice', cn: '盲区、自己看不见的地方', correct: true, reason: 'blind spot 可以指视野里看不到的那块，也可以指自己察觉不到的问题。' },
          { key: 'B', en: 'a spot on the floor that is dirty', cn: '地上一块脏掉的斑点', correct: false, reason: 'spot 有「斑点」义，但 blind spot 说的是看不见的地方，不是污渍。' },
          { key: 'C', en: 'a place where the light is too bright', cn: '光线太强的地方', correct: false, reason: '没有这个意思；blind spot 与亮度无关，与察觉不到有关。' }
        ],
        analysis: 'blind spot 是「盲区」。她的毛病就是——看人时忘了藏。',
        wrongFeedback: '你以为是脏点，低头擦了半天桌角，姜黎在对面笑出声，气血 -10。',
        afterCorrect: '相亲对象还在讲自己的房子和车，姜黎起身走到她桌边：「不好意思，我朋友来了。」然后把手伸给了沈知夏。'
      }
    ],
    completeText: '第三章结束。她握住那只手的瞬间，听见自己心跳的声音，比片场任何一次打板都响。'
  },
  {
    id: 'df_4',
    index: 4,
    title: '第 4 章 · 只有我们两个',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那晚之后，姜黎的旧友林薇开始频繁出现。林薇说话总带笑，笑完总要补一句「我这是为你好」。姜黎没反驳，只是每次散场后都要一个人坐很久。',
    questions: [
      {
        plotDescription: '林薇当着众人的面说她「过气了还挑剧本」，说完又亲热地拍她的肩。',
        line: "She calls herself my friend, but she's a toxic friend — she only feels good when I feel bad.",
        lineCn: '她自称是我朋友，可她是个有毒的朋友——只有我难受的时候她才舒服。',
        prompt: "根据上下文，选出画线词汇 'Toxic friend' 最准确的意思。",
        options: [
          { key: 'A', en: 'a friend who is poisonous in a literal way', cn: '字面意义上带毒的朋友', correct: false, reason: 'toxic 本义是「有毒物质」，形容人时指关系里持续消耗你。' },
          { key: 'B', en: 'someone who keeps hurting you and calls it care', cn: '有毒的朋友、以关心为名持续伤害你的人', correct: true, reason: 'toxic friend 的重点是让你越来越糟，而不是偶尔吵架。' },
          { key: 'C', en: 'a friend who is extremely busy', cn: '特别忙的朋友', correct: false, reason: '忙是 busy；toxic friend 说的是消耗你的关系。' }
        ],
        analysis: 'toxic 形容人或关系，是「有毒的、不断消耗你的」。那句「为你好」，正是最典型的开场。',
        wrongFeedback: '你以为只是说她忙，还帮她解释了两句，林薇笑得更亲切了，气血 -10。',
        afterCorrect: '沈知夏在旁边听完，只说了一句：「她说完你，你为什么还要笑？」姜黎握着杯子的手停住了，半天才说：「因为我怕没人了。」'
      },
      {
        plotDescription: '第二天，沈知夏把一张纸条塞进她手里，上面写着时间和地址。',
        line: "One date. No manager, no mother, no cameras. Just us.",
        lineCn: '就一次约会。没有经纪人，没有我妈，没有镜头。只有我们。',
        prompt: "根据上下文，选出画线词汇 'Date' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small sweet fruit that grows on palm trees', cn: '一种长在棕榈树上的甜果（椰枣）', correct: false, reason: 'date 确实有椰枣这个义项，但 one date 在两个人之间是一次约会。' },
          { key: 'B', en: 'a planned time you spend with someone you like', cn: '约会、和喜欢的人约好的一段时间', correct: true, reason: 'date 作名词就是约会，重点在两个人特意留出的相处时间。' },
          { key: 'C', en: 'an exact day on a calendar', cn: '日历上的某个日期', correct: false, reason: '这是 date 的日期义；这里说的是两个人见面这件事。' }
        ],
        analysis: 'date 在这里是名词「约会」。她特意列出三个「没有」，是想让这次见面只属于她们两个。',
        wrongFeedback: '你以为她说的是椰枣，还问要不要买一斤，姜黎捏着纸条笑到肩膀发抖，气血 -10。',
        afterCorrect: '那天她们去了海边，吃了两串烤鱿鱼，风把头发吹得乱七八糟。回程的车上，姜黎靠着车窗说：「这是我今年第一次觉得，活着不累。」'
      },
      {
        plotDescription: '热搜在凌晨爆了：姜黎与某男星的恋情实锤，配图是三年前的旧照。',
        line: "My manager wants me to break up with someone I never dated. Explain that to me.",
        lineCn: '我经纪人要我跟我根本没交往过的人分手。你来给我解释一下。',
        prompt: "根据上下文，选出画线词汇 'Break up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to end a romantic relationship', cn: '分手、结束一段恋爱关系', correct: true, reason: 'break up 用在感情里就是结束关系，往往指正式分开。' },
          { key: 'B', en: 'to break something into small pieces', cn: '把东西打碎成小块', correct: false, reason: 'break up 有打碎的字面义，但用于感情时就是分手。' },
          { key: 'C', en: 'to stop working, like a machine', cn: '机器坏掉、停止运转', correct: false, reason: '机器坏是 break down；break up 用在人身上指关系结束。' }
        ],
        analysis: 'break up 指「分手」。荒谬的是：她们连开始都没有，却要按别人写好的剧本结束。',
        wrongFeedback: '你把它听成打碎东西，问她摔了谁的杯子，她直接挂了电话，气血 -10。',
        afterCorrect: '沈知夏赶到她家时，门没锁。姜黎坐在地板上，手机屏幕还亮着，她说：「我不想澄清，我想先听你说一句话。」'
      },
      {
        plotDescription: '沈知夏蹲下来，与她平视，抬手把她脸上的头发拨开。',
        line: "If you want to dump me, do it to my face. Don't let a statement do it.",
        lineCn: '你要是想甩了我，就当面说。别让一纸声明替你甩。',
        prompt: "根据上下文，选出画线词汇 'Dump' 最准确的意思。",
        options: [
          { key: 'A', en: 'to throw rubbish somewhere', cn: '把垃圾扔在某处', correct: false, reason: 'dump 有倾倒垃圾的意思，但 dump someone 是把某人甩了。' },
          { key: 'B', en: 'to end a relationship with them', cn: '甩了某人、单方面结束关系', correct: true, reason: 'dump 比 break up 更单向：一个人决定，另一个人被动接受。' },
          { key: 'C', en: 'to copy data onto a computer', cn: '把数据导出到电脑里', correct: false, reason: '这是技术用语；用在人身上是甩人。' }
        ],
        analysis: 'dump 是「甩」。她说「当面」，其实是在要一个被尊重的资格。',
        wrongFeedback: '你听成倒垃圾，还问她垃圾站在哪儿，她红着眼睛笑了，气血 -10。',
        afterCorrect: '姜黎看着她，很久，忽然伸手抱住她：「那你别走。」沈知夏把下巴放在她肩上：「我不走。声明我去发。」'
      }
    ],
    completeText: '第四章结束。有些关系是从谣言里开始的，但她们决定，让它从一句话开始。'
  },
  {
    id: 'df_5',
    index: 5,
    title: '第 5 章 · 三年前的那个人',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '声明发出去那天，评论区吵成一锅粥。有人说她们炒作，有人翻出姜黎三年前的旧照，照片里还有个女孩。当天下午，那个女孩真的来了片场。',
    questions: [
      {
        plotDescription: '旧照被解读成恋爱期间劈腿，助理急得直转圈。',
        line: "She didn't cheat. That photo is from a film, not from my life.",
        lineCn: '她没有出轨。那张照片是电影里的，不是她的人生。',
        prompt: "根据上下文，选出画线词汇 'Cheat' 最准确的意思。",
        options: [
          { key: 'A', en: 'to be unfaithful, or to act dishonestly to win', cn: '出轨；作弊', correct: true, reason: 'cheat 在感情里是不忠，在规则里是作弊，核心都是不诚实。' },
          { key: 'B', en: 'to cook a meal quickly', cn: '很快地做一顿饭', correct: false, reason: '做饭是 cook；cheat 和不忠、不老实有关。' },
          { key: 'C', en: 'to talk about someone behind their back', cn: '背后议论别人', correct: false, reason: '背后议论是 gossip；cheat 指违背承诺的欺骗。' }
        ],
        analysis: 'cheat 在感情里是「出轨」。她强调那是戏，因为这种指控一旦成立就洗不掉。',
        wrongFeedback: '你听成「做饭」，还问她什么时候学的厨艺，助理当场扶住额头，气血 -10。',
        afterCorrect: '那个女孩走过来，先笑了一下：「我叫周雨。三年前我们在一起过，是我先走的。」她说得很平静，像在讲别人的事。'
      },
      {
        plotDescription: '周雨说话时习惯凑得很近，笑起来眼睛弯着。',
        line: "She flirts with everyone. Don't take it personally.",
        lineCn: '她跟谁都会调情，别往心里去。',
        prompt: "根据上下文，选出画线词汇 'Flirt' 最准确的意思。",
        options: [
          { key: 'A', en: 'to move quickly and lightly', cn: '轻快地移动', correct: false, reason: 'flirt 有轻快摆动的字面义，但 flirt with someone 是调情。' },
          { key: 'B', en: 'to say things that show you are attracted, half joking', cn: '调情、带点玩笑地撩拨', correct: true, reason: 'flirt 指言语或举动里带暧昧，但不一定认真。' },
          { key: 'C', en: 'to have a serious talk about feelings', cn: '认真地谈一次感受', correct: false, reason: '认真谈是 have a talk；flirt 恰恰是那种不认真的撩。' }
        ],
        analysis: 'flirt 是「调情」。沈知夏嘴上这么说，手却把杯子握得很紧。',
        wrongFeedback: '你理解成「快速移动」，还夸她跑得快，气氛一下没了，气血 -10。',
        afterCorrect: '周雨看了她一眼，笑得意味深长：「你是她现在的谁？这么护着。」沈知夏没答，身后传来姜黎的声音：「她是我请来的人。」'
      },
      {
        plotDescription: '收工后，三个人在同一个电梯口站着，数字一格一格往上跳。',
        line: "She's my ex. We ended it three years ago, and I've told you everything.",
        lineCn: '她是我前任。三年前就结束了，我什么都告诉过你。',
        prompt: "根据上下文，选出画线词汇 'Ex' 最准确的意思。",
        options: [
          { key: 'A', en: 'a former partner you were once with', cn: '前任、曾经交往过的人', correct: true, reason: 'ex 来自表示「曾经」的前缀，指过去的关系。' },
          { key: 'B', en: 'a letter used as an unknown number in math', cn: '数学里代表未知数的字母 x', correct: false, reason: 'ex 在数学里是未知数，用在人身上是前任。' },
          { key: 'C', en: 'the person standing next in a line', cn: '排在后面的那个人', correct: false, reason: '没有这个意思；ex 指的是过去的关系。' }
        ],
        analysis: 'ex 是「前任」。她说「我都告诉过你」，是在提醒沈知夏：隐瞒的不是她。',
        wrongFeedback: '你把它当成数学里的 x，开始算电梯上升速度，姜黎的表情一言难尽，气血 -10。',
        afterCorrect: '电梯到了，周雨先出去，回头说了一句：「她当年是被我丢下的。这次别再让她被丢下。」门合上，姜黎的脸白了。'
      },
      {
        plotDescription: '第二天，陆晨特地从另一个组赶过来，站在沈知夏身边。',
        line: "I'm here as your wingman. You talk, I'll handle the awkward silences.",
        lineCn: '我是来当你的僚机的。你说话，尴尬的沉默我负责。',
        prompt: "根据上下文，选出画线词汇 'Wingman' 最准确的意思。",
        options: [
          { key: 'A', en: 'a pilot who flies beside the main pilot', cn: '在主机旁边飞行的飞行员', correct: false, reason: 'wingman 本义是僚机飞行员，但口语里指帮你追人的人。' },
          { key: 'B', en: 'a friend who helps you get close to someone you like', cn: '僚机、帮你接近喜欢的人的朋友', correct: true, reason: 'wingman 从空军术语变成了恋爱用语，指在旁边打配合的人。' },
          { key: 'C', en: 'a person who repairs your car', cn: '帮你修车的人', correct: false, reason: '修车的是 mechanic；wingman 的战场是感情。' }
        ],
        analysis: 'wingman 是「僚机」。陆晨这句，是来还 bro code 的人情。',
        wrongFeedback: '你以为是修车的，还真把车钥匙给了他，他在停车场喊你的名字，气血 -10。',
        afterCorrect: '陆晨端着两杯饮料过去，成功让周雨聊起了天气。沈知夏走到姜黎身边，把口袋里的东西掏出来——是一张折叠过很多次的电影票。'
      }
    ],
    completeText: '第五章结束。那张票是七年前的，座位很偏，她一直留着。'
  },
  {
    id: 'df_6',
    index: 6,
    title: '第 6 章 · 隔了六排的座位',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '电影票被摊在桌上，边角已经磨毛。姜黎盯着那个日期看了很久，忽然起身去拿自己的票根盒。里面也有一张，同一天，同一场，隔了六排。',
    questions: [
      {
        plotDescription: '两个人对着两张票根，谁都没说话，窗外开始下起小雨。',
        line: "This whole night has a weird vibe — like we were supposed to meet.",
        lineCn: '今晚整个氛围都很奇怪，好像我们本来就该遇上。',
        prompt: "根据上下文，选出画线词汇 'Vibe' 最准确的意思。",
        options: [
          { key: 'A', en: 'the feeling a place or moment gives you', cn: '氛围、某一刻给人的感觉', correct: true, reason: 'the vibe of a night 说的就是那晚空气里的情绪与气氛。' },
          { key: 'B', en: 'a tool that vibrates to clean things', cn: '靠震动清洁东西的工具', correct: false, reason: 'vibe 可以指震动，但这里说的是气氛。' },
          { key: 'C', en: 'a loud noise made by a machine', cn: '机器发出的噪音', correct: false, reason: '噪音是 noise；vibe 是心里感觉到的那股气。' }
        ],
        analysis: 'vibe 是口语里的「氛围感」。她说「像注定」，就是把这两张票根读成了伏笔。',
        wrongFeedback: '你听成清洁工具，还问她要不要拿去擦地板，她把票根收回去，气血 -10。',
        afterCorrect: '沈知夏笑：「我那年攒了三个月零花钱才买上这张票。」姜黎抬头：「我那天是一个人去的，第一次觉得电影院那么空。」'
      },
      {
        plotDescription: '屋里只开了一盏灯，雨声把窗户敲得很轻。',
        line: "I don't believe in soulmates. But sitting here, I'm not so sure.",
        lineCn: '我不相信灵魂伴侣。可坐在这儿，我又不太确定了。',
        prompt: "根据上下文，选出画线词汇 'Soulmate' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who seems made for you', cn: '灵魂伴侣、像天生为你而造的人', correct: true, reason: 'soulmate 强调的是精神上的极度契合。' },
          { key: 'B', en: 'a friend who lives in the same room', cn: '住在同一个房间的朋友', correct: false, reason: '室友是 roommate；soulmate 说的是灵魂层面的懂。' },
          { key: 'C', en: 'a person you meet only once in your life', cn: '一生只见一次的人', correct: false, reason: '见几次和 soulmate 无关，重点是彼此明白。' }
        ],
        analysis: 'soulmate 是「灵魂伴侣」。她说「不相信」，却没说「不是」。',
        wrongFeedback: '你答成室友，还问她房间空不空，她把灯关了，气血 -10。',
        afterCorrect: '沈知夏把两张票根并排放好，轻声说：「我也没信过。但我不介意，从今天开始信。」雨声大起来，盖住了她后半句。'
      },
      {
        plotDescription: '第二天她们补拍一场对手戏，导演连着喊了三次再来一次。',
        line: "You two have real chemistry. Again — and this time don't blink.",
        lineCn: '你们俩是真的有化学反应。再来一次，这次别眨眼。',
        prompt: "根据上下文，选出画线词汇 'Chemistry' 最准确的意思。",
        options: [
          { key: 'A', en: 'the science of substances and how they react', cn: '研究物质及其反应的化学', correct: false, reason: 'chemistry 本义是化学，但人和人之间是指来电、有火花。' },
          { key: 'B', en: 'a natural spark between two people', cn: '化学反应、两人之间天然的来电感', correct: true, reason: '用在演员或恋人之间，chemistry 指那种藏不住的默契。' },
          { key: 'C', en: 'a kind of medicine taken for a cold', cn: '治感冒的一种药', correct: false, reason: '药物是 medicine；chemistry 在这里是火花。' }
        ],
        analysis: 'chemistry 用在人身上，指「彼此来电、配合得刚刚好」。导演要的不是台词，是那点藏不住的东西。',
        wrongFeedback: '你以为是化学课，认真讲起了元素周期表，导演当场喊停，气血 -10。',
        afterCorrect: '那一条过了之后，全场鼓掌。姜黎站在原地没动，小声说：「刚才我不是在演。」沈知夏回：「我也不是。」'
      },
      {
        plotDescription: '晚上，姜黎把手机递给她，屏幕停在备忘录上。',
        line: "I've never let anyone read this. Trust me enough to take it.",
        lineCn: '我从没让任何人看过这个。信我一次，拿着。',
        prompt: "根据上下文，选出画线词汇 'Trust' 最准确的意思。",
        options: [
          { key: 'A', en: 'to believe someone will not hurt or deceive you', cn: '信任、相信对方不会伤害或欺骗你', correct: true, reason: 'trust 作动词就是把软肋交出去，并相信对方不会用它伤你。' },
          { key: 'B', en: 'a group of companies that work together', cn: '合作经营的一组公司（信托）', correct: false, reason: '信托是商业概念；这里 trust 是动词「信我」。' },
          { key: 'C', en: 'to clean something with great care', cn: '非常仔细地清洁某物', correct: false, reason: '没有这个意思；trust 和相信有关。' }
        ],
        analysis: 'trust 在这里是动词。这一步比告白更难。',
        wrongFeedback: '你听成「清洁」，拿着手机擦了两下屏幕，她的手指缩了回去，气血 -10。',
        afterCorrect: '备忘录里是一条条日期，最早那条写着：「今天在片场看到一个人替我摔下马，疼得发抖还笑。我想认识她。」'
      }
    ],
    completeText: '第六章结束。原来她不是先动心的那个，也不是唯一一个。'
  },
  {
    id: 'df_7',
    index: 7,
    title: '第 7 章 · 先说的那个人',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '消息传出去的速度比剧组的车还快。第二天公司派人来谈：要么断掉私人关系，要么放弃这部戏的女主。会议室里，有人把合同推到她面前。',
    questions: [
      {
        plotDescription: '姜黎看都没看合同，先问了对面一句。',
        line: "Say what you want about me, but I stay loyal to the people who stay.",
        lineCn: '你们想怎么说我都可以，但谁留下来，我就对谁忠诚。',
        prompt: "根据上下文，选出画线词汇 'Loyal' 最准确的意思。",
        options: [
          { key: 'A', en: 'always supporting someone you care about', cn: '忠诚、始终站在你在乎的人这边', correct: true, reason: 'loyal 的核心是不因为代价而改变立场。' },
          { key: 'B', en: 'loyal only to the king of a country', cn: '只对国王效忠', correct: false, reason: '有「效忠」的意思，但这里说的是她对身边人的态度，不是君主。' },
          { key: 'C', en: 'being faithful to a brand you buy', cn: '对某个品牌专一', correct: false, reason: '对品牌忠诚是营销说法；这里 loyalty 的对象是人。' }
        ],
        analysis: 'loyal 是「忠诚」。她这句，等于当场拒绝了公司给的台阶。',
        wrongFeedback: '你理解成对品牌专一，还问她喜欢哪个牌子，会议室安静得可怕，气血 -10。',
        afterCorrect: '对面的人把笔收起来：「你再考虑三天。」姜黎站起来：「不用三天，今天就能答复。」她转头看沈知夏，「你先出去等我。」'
      },
      {
        plotDescription: '走廊里，沈知夏的手机也在响，是另一家公司递来的高薪替身合约。',
        line: "They offered me triple. I rejected it before they finished the sentence.",
        lineCn: '他们给我三倍的价。话还没说完我就拒了。',
        prompt: "根据上下文，选出画线词汇 'Reject' 最准确的意思。",
        options: [
          { key: 'A', en: 'to refuse to accept something', cn: '拒绝、不接受', correct: true, reason: 'reject 是明确地说不要，态度比 decline 更直接。' },
          { key: 'B', en: 'to accept something with thanks', cn: '道谢之后接受', correct: false, reason: '那是 accept；reject 正好相反。' },
          { key: 'C', en: 'to think about an offer carefully', cn: '仔细考虑一个提议', correct: false, reason: '考虑是 consider；reject 是已经说了不要。' }
        ],
        analysis: 'reject 是「明确拒绝」。三倍的钱是真的，她拒绝也是真的。',
        wrongFeedback: '你听成接受，还恭喜她涨了工资，电话那头沉默了很久，气血 -10。',
        afterCorrect: '姜黎从会议室出来，脸色不好，但走路很稳。她说：「他们要我发一条单身声明。」停了两秒，「我拒绝了。」'
      },
      {
        plotDescription: '两个人站在消防通道里，楼道灯一闪一闪。',
        line: "Then let me confess first, so you don't have to carry it alone.",
        lineCn: '那让我先表白吧，这样你就不用一个人扛。',
        prompt: "根据上下文，选出画线词汇 'Confess' 最准确的意思。",
        options: [
          { key: 'A', en: 'to admit your feelings out loud', cn: '表白、把心意说出来', correct: true, reason: 'confess 可以是认错，也可以是认心，这里指说出喜欢。' },
          { key: 'B', en: 'to admit to the police that you did wrong', cn: '向警察承认自己做了错事', correct: false, reason: 'confess 有认罪义，但这里是表白。' },
          { key: 'C', en: 'to talk to a priest about your sins', cn: '向神父忏悔', correct: false, reason: '这是宗教语境；她面对的是一个人，不是神。' }
        ],
        analysis: 'confess 是「坦白」。她把顺序抢过来，是因为知道对方已经扛了太久。',
        wrongFeedback: '你以为她要认罪，还安慰她「坦白从宽」，她笑出眼泪，气血 -10。',
        afterCorrect: '姜黎深吸一口气：「沈知夏，我喜欢你。不是戏里的，不是替身的。」楼道灯灭了又亮，沈知夏听见自己说：「那刚好，我也是。」'
      },
      {
        plotDescription: '第二天，姜黎在社交平台发了一张照片，两个影子被路灯拉得很长。',
        line: "This isn't a fling. I'm making a commitment, in public.",
        lineCn: '这不是玩玩而已。我在公开给一个承诺。',
        prompt: "根据上下文，选出画线词汇 'Commitment' 最准确的意思。",
        options: [
          { key: 'A', en: 'a promise you fully intend to keep', cn: '承诺、决心要一直守住的约定', correct: true, reason: 'commitment 不只是说出口，还带着我会一直做下去的分量。' },
          { key: 'B', en: 'a promise to pay money back', cn: '还钱的承诺', correct: false, reason: '还钱是 repayment；commitment 的范围更广，这里是感情上的。' },
          { key: 'C', en: 'a decision made by a company', cn: '公司做出的决定', correct: false, reason: '公司决定是 decision；这个词强调个人的投入。' }
        ],
        analysis: 'commitment 是「承诺」，也是「投入」。她说公开，就是先把自己的退路关掉。',
        wrongFeedback: '你把它理解成还钱，认真问她欠了谁，她低头笑了很久，气血 -10。',
        afterCorrect: '那条动态下面，第一条评论是陆晨的：「bro code 升级了。」第二条是周雨：「这次别再丢下她。」'
      }
    ],
    completeText: '第七章结束。她们没有赢过谁，只是终于不再躲。'
  },
  {
    id: 'df_8',
    index: 8,
    title: '第 8 章 · 一盏一直亮着的灯',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '公开之后的日子没有想象中热闹，反而安静。她们搬进一间朝南的小公寓，阳台上晾着两件同款衬衫。第一周的每个晚上，姜黎都在学怎么把生活过成生活。',
    questions: [
      {
        plotDescription: '夜里停电，两个人挤在沙发上，只有一支蜡烛。',
        line: "I used to think intimacy meant the big things. It's this — you, in the dark, not going anywhere.",
        lineCn: '我以前以为亲密是那些大事。其实是这个——你在黑暗里，没有走。',
        prompt: "根据上下文，选出画线词汇 'Intimacy' 最准确的意思。",
        options: [
          { key: 'A', en: 'a close, private closeness with someone', cn: '亲密、私密而贴近的关系', correct: true, reason: 'intimacy 可以是身体上的，也可以是「我在你面前不用装」。' },
          { key: 'B', en: 'the act of making something public', cn: '把某事公开的行为', correct: false, reason: '公开是 publicity；intimacy 恰恰是只有两个人知道的部分。' },
          { key: 'C', en: 'a formal meeting between leaders', cn: '领导人之间的正式会晤', correct: false, reason: '那是 summit；intimacy 是私人之间的贴近。' }
        ],
        analysis: 'intimacy 是「亲密」。她把蜡烛往前推了推，说这句话时没看对方。',
        wrongFeedback: '你答成领导人会晤，还问她要不要准备茶水，蜡烛晃了一下，气血 -10。',
        afterCorrect: '沈知夏把毯子往她那边拉了拉：「那我以后每天都留下来。」姜黎闭上眼：「好。每天都留。」'
      },
      {
        plotDescription: '第二天早上，沈知夏在她包里塞了一张便签。',
        line: "You show affection in weird ways — like hiding notes in my script.",
        lineCn: '你表达爱意的方式很奇怪，比如把便条藏在我的剧本里。',
        prompt: "根据上下文，选出画线词汇 'Affection' 最准确的意思。",
        options: [
          { key: 'A', en: 'a gentle feeling of liking or love', cn: '爱慕、温柔的好感', correct: true, reason: 'affection 比 love 轻一点，也更日常，常指细小的关心。' },
          { key: 'B', en: 'an infection inside your body', cn: '身体里的一种感染', correct: false, reason: '感染是 infection，和 affection 只差一个字母，意思完全不同。' },
          { key: 'C', en: 'a strong feeling of dislike', cn: '强烈的厌恶', correct: false, reason: '厌恶是 dislike；affection 是喜欢。' }
        ],
        analysis: 'affection 是「爱意」。藏在剧本里的便条，就是她说不出口的那部分。',
        wrongFeedback: '你听成感染，还问她要不要吃药，她把便签揉成团，气血 -10。',
        afterCorrect: '沈知夏脸红：「我不会说好听的。字丑，你别笑。」姜黎把那张纸折好放进票根盒，压在七年前那两张票上面。'
      },
      {
        plotDescription: '周五，姜黎把日历上那一格圈了起来。',
        line: "Friday is date night. Phones off, no scripts, no excuses.",
        lineCn: '周五是约会之夜。关手机，不聊剧本，不许找借口。',
        prompt: "根据上下文，选出画线词汇 'Date night' 最准确的意思。",
        options: [
          { key: 'A', en: 'a regular evening kept just for the two of you', cn: '约会之夜、固定留给两个人的一晚', correct: true, reason: 'date night 的重点在固定：不是有空才见，而是先空出时间。' },
          { key: 'B', en: 'the night before an important exam', cn: '重要考试的前一晚', correct: false, reason: '那是 exam eve；date night 是留给伴侣的夜晚。' },
          { key: 'C', en: 'a night when you must work late', cn: '必须加班到很晚的那晚', correct: false, reason: '加班是 overtime；date night 恰恰不许工作。' }
        ],
        analysis: 'date night 是固定的「约会夜」。她把三个不许说出来，是认真在护这段关系。',
        wrongFeedback: '你以为是考试前夜，还给她准备了复习资料，她把手机收了，气血 -10。',
        afterCorrect: '那晚她们没去餐厅，只在家煮了面，看完一部很老的电影。姜黎靠着她的肩睡着了，面汤凉了也没人动。'
      },
      {
        plotDescription: '陆晨来串门，看见姜黎在厨房里哼歌，回头对沈知夏挤了挤眼。',
        line: "Look at her. You're completely smitten, and everybody can see it.",
        lineCn: '看看她。你彻底神魂颠倒了，谁都看得出来。',
        prompt: "根据上下文，选出画线词汇 'Smitten' 最准确的意思。",
        options: [
          { key: 'A', en: 'so in love that you can hardly think straight', cn: '神魂颠倒、被爱冲昏了头', correct: true, reason: 'smitten 现在几乎只表示被某人迷住，常和 with 连用。' },
          { key: 'B', en: 'hit very hard by someone', cn: '被人狠狠打了一下', correct: false, reason: 'smite 有重击的古义，但 smitten 现在说的是被迷住。' },
          { key: 'C', en: 'extremely tired after work', cn: '下班后极度疲惫', correct: false, reason: '累是 exhausted；smitten 是恋爱脑的状态。' }
        ],
        analysis: 'smitten 是「神魂颠倒」。沈知夏想反驳，结果姜黎一回头，她话就忘了。',
        wrongFeedback: '你以为是挨打，还撸起袖子问谁动的手，陆晨笑到蹲下，气血 -10。',
        afterCorrect: '姜黎端着两碗面出来：「笑什么？」沈知夏接过碗：「没什么。就是觉得，这个家有点像家了。」'
      }
    ],
    completeText: '第八章结束。她们把日子过成了一盏一直亮着的灯。'
  },
  {
    id: 'df_9',
    index: 9,
    title: '第 9 章 · 四个月与九千公里',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '秋天，姜黎接到一部海外片约，要去冰岛拍四个月。同一个月，她们共同的朋友苏念在群里说，她和伴侣决定分开，房子归她，狗归对方。群聊安静了很久。',
    questions: [
      {
        plotDescription: '送机那天，安检口排了很长一队，谁都没提四个月这三个字。',
        line: "This isn't heartbreak. It's just four months. Don't look at me like that.",
        lineCn: '这不是心碎。只是四个月。别那样看我。',
        prompt: "根据上下文，选出画线词汇 'Heartbreak' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep sadness after love goes wrong', cn: '心碎、感情受挫后的巨大悲伤', correct: true, reason: 'heartbreak 讲的是失去或分离带来的那种疼，和心脏器官无关。' },
          { key: 'B', en: 'a heart problem that needs a doctor', cn: '需要看医生的心脏疾病', correct: false, reason: '心脏病是 heart disease；heartbreak 是情绪上的。' },
          { key: 'C', en: 'a short break you take at work', cn: '工作中短暂的休息', correct: false, reason: '休息是 break；heartbreak 里没有一点轻松。' }
        ],
        analysis: 'heartbreak 是「心碎」。她嘴上否认，手却一直没松开。',
        wrongFeedback: '你听成心脏疾病，当场问她要不要挂急诊，她红着眼眶笑出来，气血 -10。',
        afterCorrect: '安检的喇叭开始催。姜黎退后一步，又上前抱了她一下：「每天视频。哪怕只有五分钟。」'
      },
      {
        plotDescription: '第一个月，时差把两个人的白天和黑夜切成了两半。',
        line: "Long-distance is harder than I thought. I keep waking up at 3 a.m. just to hear your voice.",
        lineCn: '异地恋比我想的难。我总在凌晨三点醒来，就为了听你说话。',
        prompt: "根据上下文，选出画线词汇 'Long-distance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a phone call made over a long distance', cn: '长途电话', correct: false, reason: '那是 long-distance call；这里说的是异地恋这种关系。' },
          { key: 'B', en: 'a relationship kept across far places', cn: '异地恋、隔着很远维持的关系', correct: true, reason: 'long-distance 单独用时常指异地关系。' },
          { key: 'C', en: 'a race that covers many kilometers', cn: '长距离赛跑', correct: false, reason: '长跑是 long-distance race；这里没有人在跑。' }
        ],
        analysis: 'long-distance 指「异地」。她说难，是因为难的不是距离，是时差里那些没人在的时刻。',
        wrongFeedback: '你以为是长途电话费贵，还给她推荐了套餐，她沉默了两秒，气血 -10。',
        afterCorrect: '沈知夏把手机架在枕边，开着视频睡。第二天醒来，屏幕里是冰岛的雪，和一张写着早安的纸。'
      },
      {
        plotDescription: '苏念来家里吃饭，聊起分开的原因，说得很平静。',
        line: "We tried polyamory for a year. It wasn't jealousy that broke us — it was honesty.",
        lineCn: '我们试了一年多边恋。拆散我们的不是嫉妒，是坦诚。',
        prompt: "根据上下文，选出画线词汇 'Polyamory' 最准确的意思。",
        options: [
          { key: 'A', en: 'having more than one loving relationship at once, openly', cn: '多边恋、公开地同时拥有多段亲密关系', correct: true, reason: 'poly 表示多，amor 表示爱，核心是公开且各方知情。' },
          { key: 'B', en: 'a deep fear of being alone', cn: '对独处的深深恐惧', correct: false, reason: '那是 fear of being alone；polyamory 讲的是关系形式。' },
          { key: 'C', en: 'a marriage arranged by parents', cn: '父母包办的婚姻', correct: false, reason: '包办婚姻是 arranged marriage，两者完全不同。' }
        ],
        analysis: 'polyamory 是「多边恋」。苏念的重点落在后半句：形式救不了不坦诚。',
        wrongFeedback: '你答成害怕独处，还安慰她多出去走走，苏念愣了一下，气血 -10。',
        afterCorrect: '姜黎一直没说话，等苏念走了才开口：「我不行。我这个人贪心，只想被一个人这样看着。」沈知夏转头看她，心跳漏了一拍。'
      },
      {
        plotDescription: '苏念临走前，从包里拿出一份文件，请沈知夏帮忙看看格式。',
        line: "The divorce papers came today. I read them twice and still felt nothing.",
        lineCn: '离婚文件今天到了。我看了两遍，还是没什么感觉。',
        prompt: "根据上下文，选出画线词汇 'Divorce' 最准确的意思。",
        options: [
          { key: 'A', en: 'the legal ending of a marriage', cn: '离婚、婚姻在法律上结束', correct: true, reason: 'divorce 是法律层面的关系终止，也可以引申为彻底分开。' },
          { key: 'B', en: 'a disagreement between two coworkers', cn: '同事之间的分歧', correct: false, reason: '分歧是 disagreement；divorce 专指婚姻的解除。' },
          { key: 'C', en: 'a decision to move to another city', cn: '决定搬到另一个城市', correct: false, reason: '搬家是 move；divorce 是法律关系的终结。' }
        ],
        analysis: 'divorce 是「离婚」。她说没感觉，不是冷漠，是那种疼已经过了峰值。',
        wrongFeedback: '你以为她要搬家，还帮她查了搬家公司，苏念看着她叹气，气血 -10。',
        afterCorrect: '送走苏念，沈知夏给冰岛打了个电话，那边是深夜。姜黎接起来，第一句是：「怎么了？」她说：「你回来以后，我们别分开住了。」'
      }
    ],
    completeText: '第九章结束。有人分开是为了自由，有人靠近是为了不再失去。'
  },
  {
    id: 'df_10',
    index: 10,
    title: '第 10 章 · 凌晨两点的绯闻',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '冰岛的戏拍到第三个月，国内突然爆出姜黎与导演深夜同框的照片。标题写得很暧昧，配文用了 affair 这个词。沈知夏是在便利店门口看到推送的。',
    questions: [
      {
        plotDescription: '助理的电话先打过来，声音都在抖。',
        line: "There's no affair. We were blocking a scene at 2 a.m. — with nine other people in the room.",
        lineCn: '没有什么绯闻。我们凌晨两点在走位，屋里还有另外九个人。',
        prompt: "根据上下文，选出画线词汇 'Affair' 最准确的意思。",
        options: [
          { key: 'A', en: 'a secret romantic relationship, often with someone already taken', cn: '绯闻、私情（常指偷偷的、不光彩的关系）', correct: true, reason: '在八卦语境里 affair 几乎固定指私情，一旦沾上就很难洗。' },
          { key: 'B', en: 'a big party with many guests', cn: '有很多客人的大型派对', correct: false, reason: '派对是 party；这里的 affair 用的是私情那一层。' },
          { key: 'C', en: 'a company event held for its staff', cn: '公司为员工办的活动', correct: false, reason: 'affair 有「事务、活动」义，但标题用的是私情。' }
        ],
        analysis: 'affair 在八卦里就是「私情」。她一字一句拆时间线，是因为知道这种词洗不掉。',
        wrongFeedback: '你理解成派对，还问她是不是很好玩，助理在那头差点哭出来，气血 -10。',
        afterCorrect: '沈知夏听完，只问了一句：「你累不累？」电话那头静了一下：「累。但我更怕你信了。」'
      },
      {
        plotDescription: '第二天导演组临时放假，姜黎一个人去了海边。',
        line: "There's no romance in a 2 a.m. shoot. But there is romance in this — the sea, and your voice.",
        lineCn: '凌晨两点的拍摄没有浪漫。但这里有——这片海，和你的声音。',
        prompt: "根据上下文，选出画线词汇 'Romance' 最准确的意思。",
        options: [
          { key: 'A', en: 'a feeling of love and beauty in a moment', cn: '浪漫、爱与美的氛围', correct: true, reason: 'romance 既是恋情，也是那种让人心软的浪漫感。' },
          { key: 'B', en: 'a story about knights in the Middle Ages', cn: '中世纪骑士的故事（传奇）', correct: false, reason: 'romance 有传奇的古义，但这里说的是浪漫的感觉。' },
          { key: 'C', en: 'a language spoken in France', cn: '在法国讲的一种语言', correct: false, reason: '那指罗曼语；这里谈的是感情里的浪漫。' }
        ],
        analysis: 'romance 是「浪漫」。她把海和声音放在一起，是在说浪漫不在场景里，在人。',
        wrongFeedback: '你答成中世纪骑士，还问她有没有龙，她笑得蹲在礁石上，气血 -10。',
        afterCorrect: '沈知夏把手机举高，让风声传过去：「那你听，风也是我的。」姜黎说：「那我大概要在这里多站一会儿。」'
      },
      {
        plotDescription: '剧组的人说，姜黎拍那场冰湖戏，在零度的水里站了四十分钟。',
        line: "People call it devotion to the craft. I call it not wanting to go home empty.",
        lineCn: '别人说这是对表演的奉献。我说，这是不想空着手回去。',
        prompt: "根据上下文，选出画线词汇 'Devotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'great love and effort given to something', cn: '奉献、把爱与力气都投进去', correct: true, reason: 'devotion 指持续的投入，强调长期而专注。' },
          { key: 'B', en: 'a strong feeling of anger', cn: '强烈的愤怒', correct: false, reason: '愤怒是 anger 或 fury；devotion 是投入。' },
          { key: 'C', en: 'a promise made in a church', cn: '在教堂里立的誓言', correct: false, reason: '誓约是 vow；devotion 指持续的付出。' }
        ],
        analysis: 'devotion 是「奉献」。她说得轻，但零度的水不会说谎。',
        wrongFeedback: '你听成愤怒，还问她是不是跟导演吵架了，她咳了两声，气血 -10。',
        afterCorrect: '那天晚上她发烧到三十九度。沈知夏在视频里看她裹着毯子，忽然说：「我明天飞过去。」姜黎说：「别闹。」她说：「我不是在闹。」'
      },
      {
        plotDescription: '三天后，沈知夏出现在冰岛的片场门口，手里拎着一袋药。',
        line: "You flew nine thousand kilometers for this? That's passion, not sense.",
        lineCn: '你飞了九千公里就为这个？这叫激情，不叫理智。',
        prompt: "根据上下文，选出画线词汇 'Passion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a very strong feeling that drives you to act', cn: '激情、强烈到推着你行动的感情', correct: true, reason: 'passion 可以是热爱，也可以是让人不顾一切的冲动。' },
          { key: 'B', en: 'a sweet fruit full of seeds', cn: '一种甜而多籽的水果（百香果）', correct: false, reason: 'passion fruit 才是百香果；单说 passion 是强烈的情感。' },
          { key: 'C', en: 'a slow and careful plan', cn: '缓慢而周密的计划', correct: false, reason: '计划是 plan；passion 恰恰是不算计。' }
        ],
        analysis: 'passion 是「激情」。她说「不叫理智」，可眼眶是红的，她比谁都清楚这份冲动的分量。',
        wrongFeedback: '你以为是百香果，还问她带了几斤，她把药袋抱得更紧，气血 -10。',
        afterCorrect: '沈知夏把药塞进她手里：「我没带理智来。」姜黎低头笑，笑到一半咳起来，还是伸手抱住了她。'
      }
    ],
    completeText: '第十章结束。九千公里之外，她第一次觉得，有人为自己不讲道理地赶来，是件好事。'
  },
  {
    id: 'df_11',
    index: 11,
    title: '第 11 章 · 录音的来路',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '回国后她们查了三天，最后查到营销号的素材来自一段内部通话录音。那段录音只有一个人拿得到——姜黎的前经纪人陈屿。姜黎把手机屏幕扣在桌上，很久没有说话。',
    questions: [
      {
        plotDescription: '姜黎穿上外套，把车钥匙拿在手里。',
        line: "I'm going to confront him. Face to face, no lawyer, no PR.",
        lineCn: '我要去当面对质。不带律师，不带公关。',
        prompt: "根据上下文，选出画线词汇 'Confront' 最准确的意思。",
        options: [
          { key: 'A', en: 'to face someone directly about a problem', cn: '当面对质、正面应对某人', correct: true, reason: 'confront 强调把问题摆到台面上，直接面对当事人。' },
          { key: 'B', en: 'to compare two things side by side', cn: '把两个东西并排比较', correct: false, reason: '比较是 compare；confront 是面对面把事情说清。' },
          { key: 'C', en: 'to make someone feel comfortable', cn: '让某人感到舒服', correct: false, reason: '那是 comfort；confront 是带着冲突走上前。' }
        ],
        analysis: 'confront 是「对质」。她要的不是赢，是让对方看着她把话说完。',
        wrongFeedback: '你听成「比较」，还问她要比哪两样东西，她握着钥匙的手更紧了，气血 -10。',
        afterCorrect: '沈知夏跟到门口：「我陪你去。」姜黎回头看她，眼神终于有了一点温度：「好。但你站我后面。」'
      },
      {
        plotDescription: '在陈屿公司楼下，姜黎先拨了一个电话。',
        line: "If he did this, I cut ties. No notice, no goodbye.",
        lineCn: '如果真是他干的，我就断绝关系。不打招呼，不告别。',
        prompt: "根据上下文，选出画线词汇 'Cut ties' 最准确的意思。",
        options: [
          { key: 'A', en: 'to end all contact with someone', cn: '断绝关系、彻底不再来往', correct: true, reason: 'cut ties 指主动切断联系，不带回头。' },
          { key: 'B', en: 'to cut a piece of string', cn: '剪断一根绳子', correct: false, reason: '字面义是剪绳结，但 cut ties 用在人之间是断交。' },
          { key: 'C', en: 'to tie a knot more tightly', cn: '把结系得更紧', correct: false, reason: '那是 tie，方向正好相反；cut ties 是切断。' }
        ],
        analysis: 'cut ties 是「断绝关系」。她说得干脆，是在给自己下决心。',
        wrongFeedback: '你以为是剪绳子，还问她要不要找把剪刀，她笑不出来，气血 -10。',
        afterCorrect: '电梯到十八楼，门开的时候，陈屿正端着咖啡站在走廊里。他看见她们，脸上没有一丝意外。'
      },
      {
        plotDescription: '咖啡杯放在桌上，热气一点点散掉。',
        line: "I messed up. I trusted the wrong person for eight years.",
        lineCn: '我搞砸了。我信错了人，信了八年。',
        prompt: "根据上下文，选出画线词汇 'Mess up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make a mistake or handle something badly', cn: '搞砸、把事情做坏', correct: true, reason: 'mess up 是口语里最常用的「弄糟」，可以是事，也可以是人生。' },
          { key: 'B', en: 'to clean a room thoroughly', cn: '把房间彻底打扫干净', correct: false, reason: '打扫是 clean up；mess up 是弄乱、弄坏。' },
          { key: 'C', en: 'to eat a meal very quickly', cn: '很快地吃完一顿饭', correct: false, reason: '和吃饭速度无关；mess up 讲的是结果变糟。' }
        ],
        analysis: 'mess up 是「搞砸」。她把责任先揽到自己身上，比指责更狠。',
        wrongFeedback: '你听成「打扫」，还问她要不要借吸尘器，陈屿笑了一声，气血 -10。',
        afterCorrect: '陈屿放下杯子：「你搞砸的不是这件事，是你自己。」姜黎没有躲开他的视线：「那我们谈谈，谁先动的手。」'
      },
      {
        plotDescription: '走出大楼时，天已经黑了，姜黎在路边停下。',
        line: "And then I screwed up again by not telling you.",
        lineCn: '然后我又弄糟了一次——我没告诉你。',
        prompt: "根据上下文，选出画线词汇 'Screw up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make a serious mistake', cn: '弄糟、犯下不小的错', correct: true, reason: 'screw up 比 mess up 语气更重，常指让自己后悔的错误。' },
          { key: 'B', en: 'to tighten a screw with a tool', cn: '用工具把螺丝拧紧', correct: false, reason: '字面义是拧螺丝，但口语里是搞砸。' },
          { key: 'C', en: 'to fold a piece of paper', cn: '把一张纸折起来', correct: false, reason: '折纸是 fold；screw up 是弄坏局面。' }
        ],
        analysis: 'screw up 是「弄糟」。她承认的是隐瞒，而隐瞒才是最难补的那一刀。',
        wrongFeedback: '你听成拧螺丝，还问她要不要工具箱，她低下头，气血 -10。',
        afterCorrect: '沈知夏伸手把她的围巾拉正：「那这次我们一起弄。弄砸了也一起。」姜黎眼睛红了，却笑了一下：「行。」'
      }
    ],
    completeText: '第十一章结束。她们知道，这只是开始。'
  },
  {
    id: 'df_12',
    index: 12,
    title: '第 12 章 · 直播间里的一句话',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '第二天下午有一场直播采访，主题是「女性电影人」。姜黎照常去了，妆化到一半，主持人临时加了一个问题：关于那段录音。陆晨在监视器后面冲她比了个手势。',
    questions: [
      {
        plotDescription: '主持人笑着凑近，问她知不知道录音是谁放出来的。',
        line: "Okay, spill the tea — who leaked it? Everyone online is guessing.",
        lineCn: '行吧，爆料吧——是谁放出来的？网上都在猜。',
        prompt: "根据上下文，选出画线词汇 'Spill the tea' 最准确的意思。",
        options: [
          { key: 'A', en: 'to share the latest gossip', cn: '吃瓜、把八卦内情说出来', correct: true, reason: 'spill the tea 就是网络口语里的「爆料、说点内幕」。' },
          { key: 'B', en: 'to pour tea on the floor by accident', cn: '不小心把茶洒在地上', correct: false, reason: '字面是洒茶，但这句话里说的是「说八卦」。' },
          { key: 'C', en: 'to make tea for the guests', cn: '给客人泡茶', correct: false, reason: '泡茶是 make tea；spill the tea 是爆料。' }
        ],
        analysis: 'spill the tea 是「爆料」。主持人在逼她开口，笑着，但一步不退。',
        wrongFeedback: '你理解成洒了茶，还低头去看地板，镜头把这一幕全拍了下来，气血 -10。',
        afterCorrect: '姜黎也笑：「我不猜。我只说我知道的。」她转头看向镜头，「录音是真的，但剪辑不是。」'
      },
      {
        plotDescription: '主持人追问她有没有证据，语气忽然尖锐起来。',
        line: "I swear to god, I have the full recording. I'm not bluffing on live TV.",
        lineCn: '我对天发誓，我手里有完整录音。我不是在直播里虚张声势。',
        prompt: "根据上下文，选出画线词汇 'Swear to god' 最准确的意思。",
        options: [
          { key: 'A', en: 'to promise something very seriously', cn: '对天发誓、极认真地保证', correct: true, reason: 'swear to god 是用最重的方式保证自己说的是真的。' },
          { key: 'B', en: 'to curse at God in anger', cn: '愤怒地咒骂上天', correct: false, reason: 'swear 有骂人的意思，但 swear to god 是发誓。' },
          { key: 'C', en: 'to say a prayer before eating', cn: '吃饭前做祷告', correct: false, reason: '饭前祷告是 say grace；这里是在保证。' }
        ],
        analysis: 'swear to god 是「对天发誓」。她把最重的话放在直播里说，是不给自己留退路。',
        wrongFeedback: '你听成在骂人，还担心直播事故，她却已经把话说完了，气血 -10。',
        afterCorrect: '弹幕刷得飞快。主持人愣了一下，笑着说：「那我们等完整版。」姜黎点头：「会有的。」'
      },
      {
        plotDescription: '采访结束后，公关冲过来，说必须马上发一条模糊的声明。',
        line: "Whatever. I'm done letting other people write my sentences.",
        lineCn: '随便吧。我不想再让别人替我写句子了。',
        prompt: "根据上下文，选出画线词汇 'Whatever' 最准确的意思。",
        options: [
          { key: 'A', en: 'a careless way of saying you do not care', cn: '随便吧、无所谓（带敷衍感）', correct: true, reason: 'whatever 单独用，常表示「我不在乎了」，语气偏冷。' },
          { key: 'B', en: 'anything at all that exists', cn: '任何存在的东西', correct: false, reason: 'whatever 有「无论什么」的义，但这里是一句敷衍的回应。' },
          { key: 'C', en: 'a question asking which one', cn: '询问是哪一个的疑问词', correct: false, reason: '疑问词是 which；whatever 在这里是放弃争辩。' }
        ],
        analysis: 'whatever 是口语里的「随便吧」。她不是没意见，是懒得再对着这套流程解释。',
        wrongFeedback: '你以为她在问「哪一个」，还认真列了三个选项，公关当场无语，气血 -10。',
        afterCorrect: '公关还想说什么，姜黎已经站起来，把话筒放回架子上。她说：「我自己写。」'
      },
      {
        plotDescription: '晚上回到公寓，沈知夏看着她，眉头一直没松。',
        line: "You said all that on live TV? Seriously?",
        lineCn: '你在直播里说了那些？你认真的吗？',
        prompt: "根据上下文，选出画线词汇 'Seriously?' 最准确的意思。",
        options: [
          { key: 'A', en: 'used to show you can hardly believe what you heard', cn: '你认真的吗？表示难以置信', correct: true, reason: 'seriously 单独成句常表示震惊或不满，不是问「严不严肃」。' },
          { key: 'B', en: 'in a serious and careful manner', cn: '以严肃认真的方式', correct: false, reason: '这是副词用法；加问号单独说时，是「真的假的」。' },
          { key: 'C', en: 'asking whether someone is ill', cn: '询问对方是不是生病了', correct: false, reason: '生病是 sick；seriously 在这里表示不敢相信。' }
        ],
        analysis: 'Seriously? 是「你认真的吗」。她担心的不是直播，是那个人又把自己推到风口上。',
        wrongFeedback: '你以为她在问病情，还伸手去探她额头，姜黎一把抓住她的手，气血 -10。',
        afterCorrect: '姜黎握住她的手，声音很低：「我不想再躲了。」沈知夏看着她，半天才说：「那我们说清楚。从头说。」'
      }
    ],
    completeText: '第十二章结束。那一夜，她们第一次把八年的旧账全部摊开。'
  },
  {
    id: 'df_13',
    index: 13,
    title: '第 13 章 · 谁先动的手',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '客厅的灯开得很亮，桌上摊着几张打印出来的旧合同。话说到第三轮，声音都高了起来。姜黎说她不该把自己当外人，沈知夏说她根本没把自己当自己人。',
    questions: [
      {
        plotDescription: '她把合同推到桌角，纸边划出一道白痕。',
        line: "My bad. I read the date wrong and started all of this.",
        lineCn: '我的锅。我看错了日期，才把这一切闹起来。',
        prompt: "根据上下文，选出画线词汇 'My bad' 最准确的意思。",
        options: [
          { key: 'A', en: 'a casual way to say it was my mistake', cn: '我的锅、是我的错（口语）', correct: true, reason: 'my bad 是轻松认错的说法，适合熟人和朋友之间。' },
          { key: 'B', en: 'my body is in bad condition', cn: '我的身体状态很糟', correct: false, reason: 'bad 是「坏」，但 my bad 整句是认错，不是讲身体。' },
          { key: 'C', en: 'my things are of poor quality', cn: '我的东西质量很差', correct: false, reason: '没有这个用法；my bad 是固定口语。' }
        ],
        analysis: 'my bad 是「我的锅」。她说得很轻，但认错这件事本身很重。',
        wrongFeedback: '你听成抱怨身体，还问她要不要去医院，她把手收了回去，气血 -10。',
        afterCorrect: '姜黎没接这句，只把另一张纸翻过来：「那你告诉我，这一栏为什么写着别人的名字。」'
      },
      {
        plotDescription: '窗外有车经过，灯光在墙上一闪。',
        line: "Don't blame me for something you hid from me first.",
        lineCn: '别把你自己先瞒着我的事，甩锅到我头上。',
        prompt: "根据上下文，选出画线词汇 'Blame' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say someone else is responsible for a problem', cn: '甩锅、把责任归到别人身上', correct: true, reason: 'blame 是把过错算在某人头上，重点在归责。' },
          { key: 'B', en: 'to praise someone for good work', cn: '表扬某人做得好', correct: false, reason: '表扬是 praise，方向相反。' },
          { key: 'C', en: 'to forget something important', cn: '忘记重要的事', correct: false, reason: '忘记是 forget；blame 是追责。' }
        ],
        analysis: 'blame 是「责怪、甩锅」。两个人都想讲道理，可道理落到对方身上就成了刀。',
        wrongFeedback: '你听成表扬，还说了句谢谢，她愣在原地，气血 -10。',
        afterCorrect: '沈知夏的声音也上来了：「我瞒你，是因为你从来没让我站在你旁边过。」这句话说完，屋里静了。'
      },
      {
        plotDescription: '两个人站在桌子两边，中间隔着那几张纸。',
        line: "We've been arguing for an hour and we still haven't said the real thing.",
        lineCn: '我们吵了一个小时，还是没说真正的那句。',
        prompt: "根据上下文，选出画线词汇 'Argue' 最准确的意思。",
        options: [
          { key: 'A', en: 'to disagree with someone using words', cn: '争吵、用言语争辩', correct: true, reason: 'argue 是有来有往地说服对方，未必是喊。' },
          { key: 'B', en: 'to agree with someone completely', cn: '完全同意某人', correct: false, reason: '同意是 agree，只差一个字母，意思相反。' },
          { key: 'C', en: 'to explain a rule in a book', cn: '解释书里的一条规则', correct: false, reason: '那是 explain；argue 带有对抗。' }
        ],
        analysis: 'argue 是「争吵、争辩」。她忽然意识到，吵了一小时也没说到怕。',
        wrongFeedback: '你听成同意，还点头说「我完全赞成」，她气得笑出来，气血 -10。',
        afterCorrect: '姜黎先坐下，声音哑了：「我怕的是，你哪天觉得我不值得。」沈知夏也坐下，隔着一张桌子，第一次没有反驳。'
      },
      {
        plotDescription: '门外忽然有人敲门，是邻居来提醒小声一点。',
        line: "We were yelling. Sorry — we'll keep it down.",
        lineCn: '我们刚才在大喊。抱歉，我们会小声点。',
        prompt: "根据上下文，选出画线词汇 'Yell' 最准确的意思。",
        options: [
          { key: 'A', en: 'to shout very loudly', cn: '大喊、高声叫嚷', correct: true, reason: 'yell 强调的是音量大，往往带着情绪。' },
          { key: 'B', en: 'to whisper so nobody hears', cn: '小声到没人听见地说话', correct: false, reason: '耳语是 whisper，正好相反。' },
          { key: 'C', en: 'to laugh quietly', cn: '轻轻地笑', correct: false, reason: '轻笑是 chuckle；yell 是喊。' }
        ],
        analysis: 'yell 是「大喊」。被邻居提醒的那一刻，两个人都有点难堪。',
        wrongFeedback: '你听成「轻轻笑」，还真的笑了一声，邻居的表情更难看了，气血 -10。',
        afterCorrect: '门关上后，姜黎忽然低声说：「对不起。」沈知夏看着她，也说了同样三个字。'
      }
    ],
    completeText: '第十三章结束。吵到最后，她们发现要赢的从来不是对方。'
  },
  {
    id: 'df_14',
    index: 14,
    title: '第 14 章 · 三个字的重量',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '第二天谁都没提早上的争吵。沈知夏做了两碗面，姜黎把碗端到阳台，风把热气吹散。手机在桌上震了三次，是陈屿。她们都没看。',
    questions: [
      {
        plotDescription: '陈屿的短信说她「忘恩负义」，姜黎看完就把手机放下了。',
        line: "He denies everything. Of course he does.",
        lineCn: '他什么都否认。他当然会否认。',
        prompt: "根据上下文，选出画线词汇 'Deny' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say that something is not true', cn: '否认、说某事不是真的', correct: true, reason: 'deny 是明确表示「没有这回事」。' },
          { key: 'B', en: 'to accept that you did it', cn: '承认是自己做的', correct: false, reason: '承认是 admit，正好相反。' },
          { key: 'C', en: 'to refuse to give someone a chance', cn: '拒绝给某人机会', correct: false, reason: 'deny 有「拒绝给予」的义，但这里说的是否认事实。' }
        ],
        analysis: 'deny 是「否认」。她一点都不意外，因为这套反应她看了八年。',
        wrongFeedback: '你听成承认，还说「他终于认了」，她放下筷子，气血 -10。',
        afterCorrect: '沈知夏把手机拿过来，翻到那条短信的最后一行：「他说，你会后悔的。」姜黎笑了一下：「我已经后悔了，后悔没早点走。」'
      },
      {
        plotDescription: '面吃到一半，沈知夏站起来，走到她面前。',
        line: "I'm sorry. I should apologize for what I said last night.",
        lineCn: '对不起。昨晚那些话，我该道歉。',
        prompt: "根据上下文，选出画线词汇 'Apologize' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say sorry for something you did', cn: '道歉、为自己做的事说对不起', correct: true, reason: 'apologize 是正式的「道歉」动词，后面常接 for。' },
          { key: 'B', en: 'to explain why you were right', cn: '解释自己为什么是对的', correct: false, reason: '解释是 explain；道歉不辩解。' },
          { key: 'C', en: 'to ask someone for a favor', cn: '请别人帮个忙', correct: false, reason: '那是 ask a favor；apologize 是认错。' }
        ],
        analysis: 'apologize 是「道歉」。她要道的不只是昨晚，还有那一整段沉默。',
        wrongFeedback: '你听成在解释，还回了一句「你本来就没错」，她张了张嘴，气血 -10。',
        afterCorrect: '姜黎放下筷子，认真看着她：「我也道歉。我把你挡在外面，还怪你不进来。」'
      },
      {
        plotDescription: '风把阳台的帘子吹起来，两个人都没动。',
        line: "I forgive you. I forgave you before I even finished being angry.",
        lineCn: '我原谅你。我还没生完气就已经原谅你了。',
        prompt: "根据上下文，选出画线词汇 'Forgive' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stop being angry at someone for what they did', cn: '原谅、不再为某人的过错生气', correct: true, reason: 'forgive 是放下怒气，不代表忘记。' },
          { key: 'B', en: 'to forget something completely', cn: '彻底把某事忘掉', correct: false, reason: '忘记是 forget，只差一个字母；原谅不等于忘记。' },
          { key: 'C', en: 'to punish someone for a mistake', cn: '因为错误惩罚某人', correct: false, reason: '惩罚是 punish，方向正好相反。' }
        ],
        analysis: 'forgive 是「原谅」。她说还没生完气就原谅了，这才是真的。',
        wrongFeedback: '你听成「忘记」，还问她是不是记性不好，她把面碗推远，气血 -10。',
        afterCorrect: '沈知夏低头笑，眼睛有点红：「那你能不能，别一个人扛。」姜黎说：「可以。但你得先答应我一件事。」'
      },
      {
        plotDescription: '沈知夏问是什么事，姜黎看着窗外。',
        line: "No grudge against yourself either. That one lasts the longest.",
        lineCn: '也别记恨你自己。那种仇记得最久。',
        prompt: "根据上下文，选出画线词汇 'Grudge' 最准确的意思。",
        options: [
          { key: 'A', en: 'a lasting bad feeling you keep against someone', cn: '记仇、长期憋着的怨气', correct: true, reason: 'grudge 强调的是「一直不放」的怨。' },
          { key: 'B', en: 'a small amount of money owed', cn: '欠下的一小笔钱', correct: false, reason: '欠钱是 debt；grudge 是心里的怨。' },
          { key: 'C', en: 'a heavy load you carry', cn: '需要扛的重物', correct: false, reason: '重物是 load；grudge 是情绪上的积怨。' }
        ],
        analysis: 'grudge 是「记仇」。她最清楚，对自己记的仇最难消。',
        wrongFeedback: '你听成欠钱，还问欠了多少，她把帘子拉上，气血 -10。',
        afterCorrect: '沈知夏点头：「好。那我们一起，不记自己的仇。」姜黎伸出手，两个人隔着面碗握了一下，谁都没松开。'
      }
    ],
    completeText: '第十四章结束。原谅不是翻篇，是把那页留着，但不再反复读。'
  },
  {
    id: 'df_15',
    index: 15,
    title: '第 15 章 · 恩人的样子',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '第三天，陈屿接受了一家媒体的专访。镜头里他穿着深色衬衫，说自己带了姜黎八年，说她红了就不要旧人。视频最后，他叹了口气，说年轻人不懂感恩。',
    questions: [
      {
        plotDescription: '视频播到一半，姜黎把音量调小了。',
        line: "He betrayed me the day he sold that recording. The rest is just acting.",
        lineCn: '他把录音卖掉的那天就背叛了我。剩下的都只是表演。',
        prompt: "根据上下文，选出画线词汇 'Betray' 最准确的意思。",
        options: [
          { key: 'A', en: 'to break the trust of someone who relied on you', cn: '背叛、辜负别人的信任', correct: true, reason: 'betray 的核心是「你信任他，他反过来伤你」。' },
          { key: 'B', en: 'to leave a place quietly', cn: '悄悄地离开一个地方', correct: false, reason: '离开是 leave；betray 是信任被打破。' },
          { key: 'C', en: 'to give someone a gift they did not expect', cn: '送对方一份没预料到的礼物', correct: false, reason: '没有这个意思；betray 带强烈的道德指责。' }
        ],
        analysis: 'betray 是「背叛」。她说得平静，因为这件事在她心里已经判决完了。',
        wrongFeedback: '你听成悄悄离开，还问他去哪儿了，她把遥控器放下，气血 -10。',
        afterCorrect: '沈知夏把视频倒回开头，暂停在他叹气的那个画面：「他演得真好。」姜黎说：「他一直是好演员，只是没红。」'
      },
      {
        plotDescription: '陆晨在群里发来一句：这人嘴里没一句真的。',
        line: "He's a liar. Everything he said about the eight years is made up.",
        lineCn: '他是个骗子。他讲的那八年，全是编的。',
        prompt: "根据上下文，选出画线词汇 'Liar' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who tells lies', cn: '骗子、说谎的人', correct: true, reason: 'liar 直接指习惯性说谎的人，语气很重。' },
          { key: 'B', en: 'someone who studies law', cn: '学法律的人', correct: false, reason: '那是 lawyer，拼写接近但完全不同。' },
          { key: 'C', en: 'someone who tells funny stories', cn: '讲搞笑故事的人', correct: false, reason: '讲故事是 storyteller；liar 是贬义。' }
        ],
        analysis: 'liar 是「骗子」。一个词就把八年的体面撕开了。',
        wrongFeedback: '你把它当成律师，还问要不要请一个，陆晨发来一个无语的表情，气血 -10。',
        afterCorrect: '姜黎盯着那两个字母看了很久，忽然说：「我以前觉得他至少是真的关心我。」沈知夏没接话，只把她的手握住。'
      },
      {
        plotDescription: '采访的后半段，陈屿说起自己如何「一手捧红」姜黎，眼里还带了泪。',
        line: "That smile, that voice — it's all fake. I've never seen him cry once.",
        lineCn: '那个笑，那个语气，全是假的。我从来没见过他哭。',
        prompt: "根据上下文，选出画线词汇 'Fake' 最准确的意思。",
        options: [
          { key: 'A', en: 'not real, only pretending', cn: '假的、装出来的', correct: true, reason: 'fake 可以指假货，也可以指装出来的情绪。' },
          { key: 'B', en: 'very sincere and honest', cn: '非常真诚老实', correct: false, reason: '真诚是 sincere，正好相反。' },
          { key: 'C', en: 'extremely expensive', cn: '非常昂贵', correct: false, reason: '昂贵是 expensive；fake 讲的是真假。' }
        ],
        analysis: 'fake 是「假的」。看惯了的人，一眼就能认出哪一滴眼泪是拧出来的。',
        wrongFeedback: '你听成真诚，还说他看着挺感人，姜黎关了视频，气血 -10。',
        afterCorrect: '沈知夏忽然说：「那我们就不解释。」姜黎看她：「什么意思？」她说：「让真的东西自己站出来。」'
      },
      {
        plotDescription: '视频最后，陈屿说了一句：我从来不为钱，我只是心寒。',
        line: "A hypocrite. He takes the money and then talks about being hurt.",
        lineCn: '伪君子。钱他收了，伤心的也是他。',
        prompt: "根据上下文，选出画线词汇 'Hypocrite' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who says one thing but does the opposite', cn: '伪君子、说一套做一套的人', correct: true, reason: 'hypocrite 的重点是言行不一，还常带着道德表演。' },
          { key: 'B', en: 'a doctor who treats skin problems', cn: '治皮肤病的医生', correct: false, reason: '发音有点像，但那是 dermatologist 之类；hypocrite 是伪君子。' },
          { key: 'C', en: 'a person who always tells the truth', cn: '永远说真话的人', correct: false, reason: '说真话的是 honest person，正好相反。' }
        ],
        analysis: 'hypocrite 是「伪君子」。钱和眼泪同时出现的时候，答案就很清楚了。',
        wrongFeedback: '你听成医生，还问他看哪个科，陆晨在那头笑出声，气血 -10。',
        afterCorrect: '姜黎把手机翻过来扣在桌上，说：「明天开发布会。」沈知夏抬头：「你想好了？」她答：「想好了。这次我自己说。」'
      }
    ],
    completeText: '第十五章结束。她们终于明白，有些人不是被误解，是被看穿。'
  },
  {
    id: 'df_16',
    index: 16,
    title: '第 16 章 · 他说你想多了',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '发布会前一晚，陈屿约沈知夏单独见面。他说得很客气，先夸她演技有灵气，再慢慢把话绕到姜黎身上：说她情绪不稳，说她需要人管，说这些年都是他在替她收拾。',
    questions: [
      {
        plotDescription: '咖啡厅的角落，他把一张支票推过来，压低了声音。',
        line: "You're nothing without her. And she'll drop you — that's a backstab waiting to happen.",
        lineCn: '没有她你什么都不是。她迟早会甩了你——那就是一场等着发生的背刺。',
        prompt: "根据上下文，选出画线词汇 'Backstab' 最准确的意思。",
        options: [
          { key: 'A', en: 'to hurt someone who trusts you, behind their back', cn: '背刺、在背后伤害信任你的人', correct: true, reason: 'backstab 的关键是「背后」和「信任你的人」两个条件。' },
          { key: 'B', en: 'to stab someone in the front by accident', cn: '不小心从正面刺到人', correct: false, reason: '字面有「刺」，但 backstab 是比喻，指背后捅刀。' },
          { key: 'C', en: 'to give someone a massage on the back', cn: '给对方按背', correct: false, reason: '按摩是 massage；backstab 是伤害。' }
        ],
        analysis: 'backstab 是「背刺」。他把威胁说成提醒，这就是最典型的做法。',
        wrongFeedback: '你听成按摩，还问他手法怎么样，他的笑僵在脸上，气血 -10。',
        afterCorrect: '沈知夏没有碰那张支票，只问：「你说完了吗？」他愣了一下，她已经站起来了。'
      },
      {
        plotDescription: '他追出来，在门口拦下她，语气忽然温和。',
        line: "Don't twist my words. You're gaslighting yourself if you think I'm the bad guy.",
        lineCn: '别曲解我的话。你要是觉得我是坏人，那是你自己在骗自己。',
        prompt: "根据上下文，选出画线词汇 'Gaslight' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make someone doubt their own memory or judgment', cn: 'PUA、心理操控、让人怀疑自己的判断', correct: true, reason: 'gaslight 指用否认和扭曲让受害者怀疑自己，是最典型的心理操控。' },
          { key: 'B', en: 'to turn on a gas lamp', cn: '点亮一盏煤气灯', correct: false, reason: '字面义来自煤气灯，但现代用法是心理操控。' },
          { key: 'C', en: 'to explain something very clearly', cn: '把事情解释得非常清楚', correct: false, reason: '解释清楚是 clarify；gaslight 恰恰是搅乱认知。' }
        ],
        analysis: 'gaslight 是「心理操控」。他一边威胁，一边说她记错了，这就是那套手法。',
        wrongFeedback: '你以为是开灯，还伸手去找开关，他愣了两秒，气血 -10。',
        afterCorrect: '沈知夏看着他，第一次没有退：「我没有记错。你说的每一句，我都记着。」他的脸终于沉了下来。'
      },
      {
        plotDescription: '回车上，她把录音笔按了停止，手还在抖。',
        line: "He's been trying to manipulate me for eight years. I just never had the words.",
        lineCn: '他操控了我八年。我只是以前不知道这叫什么。',
        prompt: "根据上下文，选出画线词汇 'Manipulate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to control someone cleverly and unfairly', cn: '操控、用手段影响别人的选择', correct: true, reason: 'manipulate 强调用隐蔽手段让别人按你的意思走。' },
          { key: 'B', en: 'to operate a machine with your hands', cn: '用手操作一台机器', correct: false, reason: 'manipulate 有操作机器的义，但用在人身上是操控。' },
          { key: 'C', en: 'to teach someone a new skill', cn: '教别人一项新技能', correct: false, reason: '教是 teach；manipulate 带贬义。' }
        ],
        analysis: 'manipulate 是「操控」。知道名字之后，那些年才终于有了形状。',
        wrongFeedback: '你听成操作机器，还问她是什么型号，她把录音笔攥紧了，气血 -10。',
        afterCorrect: '沈知夏把录音笔放进包里：「这段明天用得上。」姜黎看着她：「你什么时候录的？」她说：「从他说第一句夸奖开始。」'
      },
      {
        plotDescription: '当晚姜黎听完录音，沉默了很久，忽然问了一句。',
        line: "You didn't sign anything, did you? Please don't be a push over with him.",
        lineCn: '你没签什么吧？别在他面前当老好人。',
        prompt: "根据上下文，选出画线词汇 'Push over' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who is too easy to persuade or push around', cn: '老好人、太好说话、容易被人推着走', correct: true, reason: 'push over 在这里是名词用法，指被人一推就让步的人。' },
          { key: 'B', en: 'to make something fall down by pushing it', cn: '把东西推倒', correct: false, reason: '字面义是推倒，但形容人时指「太好欺负」。' },
          { key: 'C', en: 'to send a parcel to someone', cn: '给某人寄一个包裹', correct: false, reason: '寄包裹是 send over；push over 与让步有关。' }
        ],
        analysis: 'push over 在这里是「老好人」。她怕的不是签约，是沈知夏又一次替别人退让。',
        wrongFeedback: '你听成推倒东西，还回头看了看有没有倒下的椅子，她叹了口气，气血 -10。',
        afterCorrect: '沈知夏摇头：「我什么都没签。我就问了他一句话——你敢不敢当着镜头说。」姜黎看着她，忽然笑了。'
      }
    ],
    completeText: '第十六章结束。这一次，被围住的人不是她。'
  },
  {
    id: 'df_17',
    index: 17,
    title: '第 17 章 · 我自己说',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '发布会在一间不大的会议室，来了四十多家媒体。长桌上摆着两支话筒，姜黎坐在中间，沈知夏坐在她右后方半步的位置。门关上之前，有人低声说了一句：今天有戏。',
    questions: [
      {
        plotDescription: '第一个问题就冲着沈知夏来：一个替身，凭什么站在这里。',
        line: "I'm here to stand up for her. She doesn't need me to, but I will.",
        lineCn: '我是来替她说话的。她不需要，但我还是要。',
        prompt: "根据上下文，选出画线词汇 'Stand up for' 最准确的意思。",
        options: [
          { key: 'A', en: 'to speak in support of someone or something', cn: '捍卫、站出来支持某人', correct: true, reason: 'stand up for somebody 是公开为某人说话、撑住他。' },
          { key: 'B', en: 'to stand up from a chair', cn: '从椅子上站起来', correct: false, reason: '字面是起身，但 stand up for 是「为某人出头」。' },
          { key: 'C', en: 'to wait for someone standing', cn: '站着等某人', correct: false, reason: '那是 stand waiting；stand up for 的重点是支持。' }
        ],
        analysis: 'stand up for 是「捍卫、为某人出头」。她把「不需要」也说了，是不想让这份支持变成负担。',
        wrongFeedback: '你理解成站起来，真的从椅子上起身，全场快门响成一片，气血 -10。',
        afterCorrect: '姜黎侧头看了她一眼，没有阻止。台下安静了两秒，第二个问题换了个方向。'
      },
      {
        plotDescription: '有记者问姜黎，为什么不早点澄清，是不是心虚。',
        line: "I fought back the only way I knew — with evidence, not with tears.",
        lineCn: '我用我唯一会的方式反击——拿证据，不拿眼泪。',
        prompt: "根据上下文，选出画线词汇 'Fight back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to defend yourself against an attack', cn: '反击、遭到攻击时还手', correct: true, reason: 'fight back 是被攻击之后的还击，可以是言语也可以是行动。' },
          { key: 'B', en: 'to run away from a fight', cn: '从打斗中逃跑', correct: false, reason: '逃跑是 run away，正好相反。' },
          { key: 'C', en: 'to hold back your tears', cn: '忍住眼泪', correct: false, reason: '忍住是 hold back；fight back 是反击。' }
        ],
        analysis: 'fight back 是「反击」。她没有哭，是因为知道眼泪会被剪成另一种证据。',
        wrongFeedback: '你听成逃跑，还问她是不是怕了，台下的闪光灯停了一瞬，气血 -10。',
        afterCorrect: '她把录音笔放在桌上，按下播放。会议室里只剩陈屿的声音，说着那句「你会后悔的」。'
      },
      {
        plotDescription: '录音放完，有人问沈知夏，是不是在替姜黎辩护。',
        line: "I'm not here to defend her. The recording already did that.",
        lineCn: '我不是来替她辩护的。录音已经替她说完了。',
        prompt: "根据上下文，选出画线词汇 'Defend' 最准确的意思。",
        options: [
          { key: 'A', en: 'to protect someone from criticism or attack', cn: '辩护、为某人挡住指责', correct: true, reason: 'defend 是为某人说话、挡住攻击，不一定靠武力。' },
          { key: 'B', en: 'to attack someone first', cn: '先动手攻击别人', correct: false, reason: '攻击是 attack，方向相反。' },
          { key: 'C', en: 'to decide whether someone is guilty', cn: '判定某人是否有罪', correct: false, reason: '那是 judge；defend 是辩护。' }
        ],
        analysis: 'defend 是「辩护」。她把功劳推给证据，这一步走得很稳。',
        wrongFeedback: '你听成先动手，还担心现场打起来，话筒被碰倒了一个，气血 -10。',
        afterCorrect: '台下第一次有人鼓掌。姜黎低头调整了一下话筒，抬起头时，眼睛是亮的。'
      },
      {
        plotDescription: '最后一个问题很尖：网上那些骂声，你们打算怎么办。',
        line: "We read some of it, then we ignore the rest. We have work to do.",
        lineCn: '我们看了一部分，剩下的就无视。我们还有事要做。',
        prompt: "根据上下文，选出画线词汇 'Ignore' 最准确的意思。",
        options: [
          { key: 'A', en: 'to pay no attention to something', cn: '无视、不去理会', correct: true, reason: 'ignore 是主动选择不回应，不是没看见。' },
          { key: 'B', en: 'to read something very carefully', cn: '非常仔细地阅读', correct: false, reason: '仔细读是 read closely；ignore 是不理。' },
          { key: 'C', en: 'to argue with every comment', cn: '逐条和评论争论', correct: false, reason: '那是 argue；ignore 恰恰是不吵。' }
        ],
        analysis: 'ignore 是「无视」。她说得很轻，但这句「我们还有事要做」把整个局面收了回来。',
        wrongFeedback: '你听成仔细阅读，还建议大家多看看评论，姜黎在桌下按住你的手，气血 -10。',
        afterCorrect: '发布会结束，走廊里挤满人。她们从侧门出去，谁都没说话，直到进了电梯，姜黎才靠在她肩上说：「刚才谢谢你。」'
      }
    ],
    completeText: '第十七章结束。她们没有洗白什么，只是把真话说完。'
  },
  {
    id: 'df_18',
    index: 18,
    title: '第 18 章 · 沉默的那通电话',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '发布会之后，风向变了。第三天夜里，姜黎接到陈屿的电话。她没有开免提，只把手机贴在耳边，站在阳台上，一句话都没说。沈知夏隔着玻璃看她，看了整整六分钟。',
    questions: [
      {
        plotDescription: '电话挂断后，她回到客厅，坐下，双手放在膝盖上。',
        line: "He talked for six minutes and I gave him silence. That's the only answer left.",
        lineCn: '他说了六分钟，我给了他沉默。这是唯一剩下的回答。',
        prompt: "根据上下文，选出画线词汇 'Silence' 最准确的意思。",
        options: [
          { key: 'A', en: 'the state of saying nothing at all', cn: '沉默、一句话都不说', correct: true, reason: 'silence 在这里不是没声音，而是她选择不回应。' },
          { key: 'B', en: 'a very loud argument', cn: '非常激烈的争吵', correct: false, reason: '争吵是 argument，正好相反。' },
          { key: 'C', en: 'a short pause in a song', cn: '歌曲里的短暂停顿', correct: false, reason: '音乐里是 rest；这里是她的态度。' }
        ],
        analysis: 'silence 是「沉默」。她把最有力的回答留在不说话里。',
        wrongFeedback: '你听成激烈争吵，还问她吵赢了没有，她抬眼看你，气血 -10。',
        afterCorrect: '沈知夏坐到她旁边，没有问电话内容。过了一会儿，姜黎自己开口：「他说，他手里还有东西。」'
      },
      {
        plotDescription: '她说完这句，把手机推到桌子中间。',
        line: "He threatened to release my old contract. Every page of it.",
        lineCn: '他威胁要把我的旧合同放出去，一页不落。',
        prompt: "根据上下文，选出画线词汇 'Threaten' 最准确的意思。",
        options: [
          { key: 'A', en: 'to say you will harm someone if they do not obey', cn: '威胁、扬言要伤害对方', correct: true, reason: 'threaten 是用「我会做某事」来逼对方让步。' },
          { key: 'B', en: 'to promise someone a gift', cn: '答应送某人礼物', correct: false, reason: '答应送礼是 promise a gift；threaten 是威胁。' },
          { key: 'C', en: 'to warn someone about the weather', cn: '提醒天气情况', correct: false, reason: '提醒是 warn，语气轻；threaten 带伤害的意图。' }
        ],
        analysis: 'threaten 是「威胁」。她转述得很平，可手指一直按在桌沿上。',
        wrongFeedback: '你听成送礼物，还问是什么好东西，她的肩膀垮了一下，气血 -10。',
        afterCorrect: '沈知夏把手机拿过来，翻了两页就放下了：「那些条款里有三条是无效的。」姜黎抬头：「你怎么知道？」「我拍戏前做过两年助理。」'
      },
      {
        plotDescription: '两个人在灯下把合同从头看到尾，看到第四十页时，姜黎忽然笑了。',
        line: "He wanted to ruin me with these. He forgot I signed them at nineteen.",
        lineCn: '他想用这些毁了我。他忘了，我签这些的时候才十九岁。',
        prompt: "根据上下文，选出画线词汇 'Ruin' 最准确的意思。",
        options: [
          { key: 'A', en: 'to spoil or destroy something completely', cn: '毁掉、彻底弄坏', correct: true, reason: 'ruin 强调把原本好的东西弄到无法挽回。' },
          { key: 'B', en: 'to improve something greatly', cn: '大幅改善某物', correct: false, reason: '改善是 improve，正好相反。' },
          { key: 'C', en: 'to rent something for a short time', cn: '短期租用某物', correct: false, reason: '租用是 rent，只差一个字母；ruin 是毁掉。' }
        ],
        analysis: 'ruin 是「毁掉」。十九岁签的字，如今成了别人手里的刀，也成了她的证据。',
        wrongFeedback: '你听成「租用」，还问她租金多少，她把合同合上了，气血 -10。',
        afterCorrect: '沈知夏把其中一页拍下来发给律师。姜黎靠在沙发背上，忽然说：「他其实早就毁不了我了。他只是还想试试。」'
      },
      {
        plotDescription: '凌晨两点，律师回了消息，说这些合同里的漏洞足够反制。',
        line: "He can't destroy what he never built. Everything I have, I built myself.",
        lineCn: '他毁不掉他从来没建成的东西。我有的每一样，都是我自己建的。',
        prompt: "根据上下文，选出画线词汇 'Destroy' 最准确的意思。",
        options: [
          { key: 'A', en: 'to damage something so badly that it no longer exists', cn: '摧毁、破坏到不存在', correct: true, reason: 'destroy 的程度比 damage 更彻底，常指彻底摧毁。' },
          { key: 'B', en: 'to build something from scratch', cn: '从零开始建造某物', correct: false, reason: '建造是 build，正好相反。' },
          { key: 'C', en: 'to describe something in detail', cn: '详细描述某件事', correct: false, reason: '描述是 describe；destroy 是摧毁。' }
        ],
        analysis: 'destroy 是「摧毁」。她说这句时很稳，因为这不是反击，是事实。',
        wrongFeedback: '你听成「建造」，还夸她真能干，她把手机放下，气血 -10。',
        afterCorrect: '窗外天快亮了。姜黎把头靠在沈知夏肩上，说：「明天我想睡到中午。」沈知夏笑：「行。我守门。」'
      }
    ],
    completeText: '第十八章结束。有些人靠毁掉别人活着，而她们决定好好活着。'
  },
  {
    id: 'df_19',
    index: 19,
    title: '第 19 章 · 停战协议',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '律师建议反诉，索赔金额写得很高。沈知夏看完材料，一个人在阳台上站了很久。她想起自己十七岁在电影院里看到的那个背影，也想起这些年被人踩过的那些日子。',
    questions: [
      {
        plotDescription: '姜黎端着两杯热水出来，站在她旁边。',
        line: "I regret trusting him. But I don't regret leaving.",
        lineCn: '我后悔信过他。但我不后悔离开。',
        prompt: "根据上下文，选出画线词汇 'Regret' 最准确的意思。",
        options: [
          { key: 'A', en: 'to feel sorry about something you did or did not do', cn: '后悔、为做过或没做的事感到遗憾', correct: true, reason: 'regret 是对已发生的事感到遗憾，常带「要是当初」的意味。' },
          { key: 'B', en: 'to look forward to something', cn: '期待某件事发生', correct: false, reason: '期待是 look forward to，时间方向相反。' },
          { key: 'C', en: 'to repeat something exactly', cn: '一模一样地重复某事', correct: false, reason: '重复是 repeat；regret 是后悔。' }
        ],
        analysis: 'regret 是「后悔」。她把后悔切成了两半：信错人可以后悔，离开绝不。',
        wrongFeedback: '你听成期待，还问她期待什么，她握着杯子没说话，气血 -10。',
        afterCorrect: '沈知夏看着她：「我这两天一直在想一件事。」姜黎问是什么。「报复他。」'
      },
      {
        plotDescription: '她说出这个词的时候，声音很轻，像怕被自己听见。',
        line: "I wanted revenge at first. I wanted him to lose everything, publicly.",
        lineCn: '一开始我想复仇。我想让他当众失去一切。',
        prompt: "根据上下文，选出画线词汇 'Revenge' 最准确的意思。",
        options: [
          { key: 'A', en: 'harm done to someone to get back at them', cn: '复仇、为了还击而进行的报复', correct: true, reason: 'revenge 是为了「讨回来」而施加的伤害。' },
          { key: 'B', en: 'a feeling of thanks for help', cn: '因受到帮助而产生的感激', correct: false, reason: '感激是 gratitude，方向相反。' },
          { key: 'C', en: 'a fair decision made in court', cn: '法庭上做出的公正判决', correct: false, reason: '判决是 verdict；revenge 是私人报复。' }
        ],
        analysis: 'revenge 是「复仇」。她说得很坦白，坦白到让人心疼。',
        wrongFeedback: '你听成感激，还问她要不要写封感谢信，她把水杯放在栏杆上，气血 -10。',
        afterCorrect: '姜黎没有劝她，只问：「然后呢？」沈知夏想了很久，说：「然后我发现，我不想变成他。」'
      },
      {
        plotDescription: '夜风把楼下的树吹得沙沙响。',
        line: "I want peace more than I want him to lose. That's new for me.",
        lineCn: '我想要平静，多过想让他输。这对我来说是新的。',
        prompt: "根据上下文，选出画线词汇 'Peace' 最准确的意思。",
        options: [
          { key: 'A', en: 'a state of calm with no conflict', cn: '平静、没有冲突的状态', correct: true, reason: 'peace 既指没有战争，也指内心的安宁。' },
          { key: 'B', en: 'a piece of something broken', cn: '某样东西的一块碎片', correct: false, reason: '碎片是 piece，发音相同、拼写不同。' },
          { key: 'C', en: 'a very busy schedule', cn: '非常繁忙的日程', correct: false, reason: '繁忙和 peace 正好相反。' }
        ],
        analysis: 'peace 是「平静」。她第一次承认，自己更想要的是不再被这件事占满。',
        wrongFeedback: '你听成碎片，还问她碎的是什么，她把杯子往你这边推了推，气血 -10。',
        afterCorrect: '姜黎点头：「那我们不发诉状。」停了一下，又说，「但我想要一个 truce，正式的。」'
      },
      {
        plotDescription: '第二天，律师把一份简短的协议发给对方：互不提及，互不追诉。',
        line: "We offered him a truce. He has forty-eight hours to sign it.",
        lineCn: '我们给了他一份休战协议。他有四十八小时签字。',
        prompt: "根据上下文，选出画线词汇 'Truce' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement to stop fighting for a period of time', cn: '休战、暂时停止争斗的约定', correct: true, reason: 'truce 是双方约定的停火，不一定是永久和平。' },
          { key: 'B', en: 'a truck used to carry goods', cn: '运货的卡车', correct: false, reason: '卡车是 truck，只差一个字母；truce 是休战。' },
          { key: 'C', en: 'a truth that nobody can deny', cn: '无人能否认的事实', correct: false, reason: '事实是 truth；truce 是停战约定。' }
        ],
        analysis: 'truce 是「休战」。她们没有原谅，只是决定不再把时间交给这场仗。',
        wrongFeedback: '你听成卡车，还问要运什么货，律师愣住了，气血 -10。',
        afterCorrect: '四十七小时后，对方签了字。姜黎看着那份文件，长长地呼出一口气，像把八年一起呼了出去。'
      }
    ],
    completeText: '第十九章结束。停战不是认输，是把枪放下，去过自己的日子。'
  },
  {
    id: 'df_20',
    index: 20,
    title: '第 20 章 · 各让一步',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '签完协议的周末，她们为了搬家的事吵了一架。姜黎想留在市中心，离公司近；沈知夏想搬到海边，说那里安静。两个人站在客厅里，纸箱堆到腰那么高。',
    questions: [
      {
        plotDescription: '姜黎把一张房源图拍在纸箱上。',
        line: "I'm not saying you're wrong. I'm saying we need to reconcile two plans, not pick a winner.",
        lineCn: '我不是说你错了。我是说我们得让两个计划和解，而不是选出一个赢家。',
        prompt: "根据上下文，选出画线词汇 'Reconcile' 最准确的意思。",
        options: [
          { key: 'A', en: 'to make two things exist together, or become friends again', cn: '调和、让两者共存；也指和好', correct: true, reason: 'reconcile 既可以是「让两个矛盾的东西共存」，也可以是「吵架后和好」。' },
          { key: 'B', en: 'to write down an account of money', cn: '记账、核对账目', correct: false, reason: '对账是 reconcile accounts，但这里是调和两个计划。' },
          { key: 'C', en: 'to take back something you said', cn: '收回自己说过的话', correct: false, reason: '收回话是 take back；reconcile 是让两边靠拢。' }
        ],
        analysis: 'reconcile 是「调和」。她第一次没有把「谁对」放在最前面。',
        wrongFeedback: '你听成记账，还翻出计算器，她看着你手里的计算器叹气，气血 -10。',
        afterCorrect: '沈知夏靠着纸箱坐下：「那你告诉我，你的计划是什么。」姜黎也坐下，两个人中间隔着一只装满书的箱子。'
      },
      {
        plotDescription: '说到第三轮，声音又高了起来。',
        line: "This isn't an argument about the sea. It's about you deciding alone again.",
        lineCn: '这根本不是关于海的争论。这是关于你又一个人做决定。',
        prompt: "根据上下文，选出画线词汇 'Argument' 最准确的意思。",
        options: [
          { key: 'A', en: 'a disagreement expressed in words', cn: '争论、言语上的分歧', correct: true, reason: 'argument 指双方各说各话的争执，比 fight 更偏言语。' },
          { key: 'B', en: 'a piece of evidence in a court case', cn: '法庭上的一份证据', correct: false, reason: 'argument 有「论点」的义，但这里是争吵。' },
          { key: 'C', en: 'a friendly conversation', cn: '一次友好的交谈', correct: false, reason: '友好交谈是 conversation；argument 带冲突。' }
        ],
        analysis: 'argument 是「争论」。她把话从「海」拉回到「你又一个人决定」，这才是真问题。',
        wrongFeedback: '你听成友好交谈，还笑着说聊得不错，她的脸色更沉了，气血 -10。',
        afterCorrect: '沈知夏沉默了几秒，说：「我以为你会喜欢海边。」姜黎说：「我喜欢的是你问我一句。」'
      },
      {
        plotDescription: '空气僵了两分钟，沈知夏忽然想起剧组里那场戏。',
        line: "We're not going to fight. Not like that. Not over a postcode.",
        lineCn: '我们不会打架。不会那样。不会为了一个邮编。',
        prompt: "根据上下文，选出画线词汇 'Fight' 最准确的意思。",
        options: [
          { key: 'A', en: 'to struggle against someone, with words or hands', cn: '打架、争斗（也可以是激烈争吵）', correct: true, reason: 'fight 的范围比 argument 广，可以是动手，也可以是激烈对抗。' },
          { key: 'B', en: 'to make peace with someone', cn: '与某人讲和', correct: false, reason: '讲和是和好的意思，方向相反。' },
          { key: 'C', en: 'to fly in an airplane', cn: '坐飞机飞行', correct: false, reason: '飞行是 fly；fight 是争斗。' }
        ],
        analysis: 'fight 是「争斗」。她说不会为了一个邮编开战，是把火先降下来。',
        wrongFeedback: '你听成坐飞机，还问她要去哪里，她愣了一下笑出来，气血 -10。',
        afterCorrect: '两个人对视了一会儿，都笑了。姜黎说：「那你先说你想要什么，我认真听。」'
      },
      {
        plotDescription: '沈知夏想了想，把纸箱上的房源图翻过来，画了一条线。',
        line: "Okay, compromise: we live between the two. Twenty minutes from both.",
        lineCn: '好，妥协一下：我们住在中间。到两边都二十分钟。',
        prompt: "根据上下文，选出画线词汇 'Compromise' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement where both sides give up a little', cn: '妥协、双方各让一步的折中方案', correct: true, reason: 'compromise 的关键是两边都有让步，不是一方全输。' },
          { key: 'B', en: 'a promise that cannot be broken', cn: '不能打破的承诺', correct: false, reason: '承诺是 promise，拼写相近但意思不同。' },
          { key: 'C', en: 'a competition to win first place', cn: '争夺第一名的比赛', correct: false, reason: '比赛是 competition；compromise 是折中。' }
        ],
        analysis: 'compromise 是「妥协」。她画的那条线，其实是在说：我愿意为你挪一点。',
        wrongFeedback: '你听成比赛，还问要不要报名，姜黎拿过笔在图上画了个圈，气血 -10。',
        afterCorrect: '姜黎看了那条线一会儿，把笔接过去，在中间画了个小房子：「就这儿。阳台朝南。」沈知夏说：「行。你负责挑窗帘。」'
      }
    ],
    completeText: '第二十章结束。她们学会了一件事：赢不是目的，一起住下去才是。'
  },
  {
    id: 'df_21',
    index: 21,
    title: '第 21 章 · 敢问就来',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新家安顿好之后，她们接了一档双人访谈综艺。主持人以敢问出名，第一个问题就是：你们谁先动心。姜黎刚要开口，沈知夏先举了手。',
    questions: [
      {
        plotDescription: '主持人笑着转向姜黎，问她怎么在圈里活到今天。',
        line: "She's savvy — she reads a contract faster than her lawyer does.",
        lineCn: '她很精明——看合同比她的律师还快。',
        prompt: "根据上下文，选出画线词汇 'Savvy' 最准确的意思。",
        options: [
          { key: 'A', en: 'smart and quick to understand practical things', cn: '精明、对实务很懂很敏锐', correct: true, reason: 'savvy 强调的是「实际事务上的聪明」，常指很会看人看事。' },
          { key: 'B', en: 'having a lot of money', cn: '很有钱', correct: false, reason: '有钱是 wealthy；savvy 讲的是脑子，不是存款。' },
          { key: 'C', en: 'speaking very softly', cn: '说话非常轻柔', correct: false, reason: '说话轻是 soft-spoken；savvy 与音量无关。' }
        ],
        analysis: 'savvy 是「精明、内行」。沈知夏夸得不客气，也是在说她这些年是怎么熬过来的。',
        wrongFeedback: '你听成「很有钱」，还替她解释说钱不多，姜黎在桌下踢了你一脚，气血 -10。',
        afterCorrect: '姜黎笑着补了一句：「比律师快，是因为我付不起那么多次咨询费。」全场笑出声，气氛松了。'
      },
      {
        plotDescription: '主持人放出一段旧采访，说姜黎当年「不敬业」，问她怎么回应。',
        line: "I'll be blunt: that interview was cut to make me look bad.",
        lineCn: '我直说：那段采访是被剪过的，就为了让我难看。',
        prompt: "根据上下文，选出画线词汇 'Blunt' 最准确的意思。",
        options: [
          { key: 'A', en: 'saying things directly, without softening them', cn: '直白、说话不绕弯（甚至有点嘴毒）', correct: true, reason: 'blunt 是直接说，不管对方爱不爱听。' },
          { key: 'B', en: 'not sharp, like an old knife', cn: '不锋利，像把旧刀', correct: false, reason: 'blunt 本义是刀钝，但形容人说话是不客气。' },
          { key: 'C', en: 'very shy and quiet', cn: '非常害羞安静', correct: false, reason: '害羞是 shy；blunt 恰恰是把话说得很直。' }
        ],
        analysis: 'blunt 是「直白」。她先把态度摆出来，接下来的话就没人能说她含糊。',
        wrongFeedback: '你以为是刀钝，还问她要不要磨刀，主持人的笑停在半空，气血 -10。',
        afterCorrect: '她把那段采访的原片时间线讲了一遍，讲得清楚又冷静。主持人点头：「这次是我准备不够。」'
      },
      {
        plotDescription: '主持人又问她，紧张的时候会有什么小动作。',
        line: "She gets sassy when she's nervous. That's how I know she's scared.",
        lineCn: '她一紧张就毒舌。我就是这么知道她怕了的。',
        prompt: "根据上下文，选出画线词汇 'Sassy' 最准确的意思。",
        options: [
          { key: 'A', en: 'bold and a little cheeky in the way you speak', cn: '毒舌、傲娇、嘴上带刺又有点俏皮', correct: true, reason: 'sassy 指的是带着机灵劲的顶嘴，不一定有恶意。' },
          { key: 'B', en: 'sad and about to cry', cn: '难过到快要哭出来', correct: false, reason: '难过是 sad；sassy 是嘴上有劲。' },
          { key: 'C', en: 'very polite and formal', cn: '非常客气正式', correct: false, reason: '客气是 polite；sassy 恰恰是没大没小那种可爱。' }
        ],
        analysis: 'sassy 是「毒舌、傲娇」。她把这句说出来，等于当着镜头承认自己看得多仔细。',
        wrongFeedback: '你答成快哭了，还伸手递纸巾，姜黎一脸无语地看着你，气血 -10。',
        afterCorrect: '姜黎没有否认，只是挑眉：「那你现在知道我在怕什么吗？」沈知夏看着她的眼睛，说：「知道。你在怕我说太多。」'
      },
      {
        plotDescription: '主持人问第一次约会在哪儿，沈知夏老实回答了。',
        line: "Home, two bowls of noodles, an old movie. I know it's lame.",
        lineCn: '家里，两碗面，一部老电影。我知道这很逊。',
        prompt: "根据上下文，选出画线词汇 'Lame' 最准确的意思。",
        options: [
          { key: 'A', en: 'boring, dull, not cool at all', cn: '逊毙了、无聊又不酷', correct: true, reason: 'lame 用于评价事情时，就是「没劲、不酷」。' },
          { key: 'B', en: 'unable to walk properly', cn: '腿脚不便、走不好路', correct: false, reason: 'lame 本义是跛的，但形容约会时是「太逊」。' },
          { key: 'C', en: 'extremely romantic and exciting', cn: '极其浪漫又刺激', correct: false, reason: '那是 exciting；lame 正好相反，带自嘲。' }
        ],
        analysis: 'lame 是「逊」。她说得自嘲，可姜黎的表情分明在说：那晚一点都不逊。',
        wrongFeedback: '你听成腿脚不便，还关心她是不是扭到了，姜黎扶住额头，气血 -10。',
        afterCorrect: '姜黎接过话筒：「那碗面是我这几年吃过最好的一顿。」停了停，「因为有人把鸡腿留给了我。」'
      }
    ],
    completeText: '第二十一章结束。节目播出后，弹幕里最多的一句是：这两个人真会过日子。'
  },
  {
    id: 'df_22',
    index: 22,
    title: '第 22 章 · 二手家具与一盏灯',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新家第一周，家具全是二手的。姜黎拆箱子拆到凌晨，沈知夏瘫在地上，手里还攥着一把螺丝刀。陆晨扛着一盏旧吊灯进门的时候，两个人都没力气站起来。',
    questions: [
      {
        plotDescription: '陆晨把吊灯往桌上一放，拍了拍手。',
        line: "This lamp is dope. Where did you even find it?",
        lineCn: '这灯酷毙了。你到底在哪儿淘到的？',
        prompt: "根据上下文，选出画线词汇 'Dope' 最准确的意思。",
        options: [
          { key: 'A', en: 'very cool or excellent', cn: '酷毙了、非常棒', correct: true, reason: '口语里的 dope 是夸东西很酷，和毒品的意思完全无关。' },
          { key: 'B', en: 'a illegal drug', cn: '一种违禁药物', correct: false, reason: 'dope 有毒品义，但夸一盏灯时是「太酷了」。' },
          { key: 'C', en: 'broken and useless', cn: '坏掉没用的', correct: false, reason: '坏了是 broken；dope 是称赞。' }
        ],
        analysis: 'dope 在年轻人口语里就是「酷」。他一进门先夸灯，其实是在夸这两个人把日子过起来了。',
        wrongFeedback: '你听成违禁药物，还劝他别碰，陆晨举着灯愣在原地，气血 -10。',
        afterCorrect: '沈知夏指了指楼下：「楼下修车的老周送的，说放着也是放着。」陆晨咂嘴：「你们这运气，绝了。」'
      },
      {
        plotDescription: '装到一半，地上已经散了一圈螺丝。',
        line: "You're sloppy with a toolbox — there are screws everywhere.",
        lineCn: '你用工具箱太邋遢了，到处都是螺丝。',
        prompt: "根据上下文，选出画线词汇 'Sloppy' 最准确的意思。",
        options: [
          { key: 'A', en: 'careless and messy', cn: '邋遢、马虎、做得乱七八糟', correct: true, reason: 'sloppy 既指不整洁，也指做事不仔细。' },
          { key: 'B', en: 'very precise and careful', cn: '非常精确仔细', correct: false, reason: '精确是 precise，正好相反。' },
          { key: 'C', en: 'wet and full of water', cn: '湿漉漉的、全是水', correct: false, reason: '湿是 wet；sloppy 指马虎。' }
        ],
        analysis: 'sloppy 是「马虎、邋遢」。姜黎嘴上嫌弃，其实在笑。',
        wrongFeedback: '你听成「湿透了」，还去找抹布擦地，她站在螺丝堆里笑得直不起腰，气血 -10。',
        afterCorrect: '沈知夏把螺丝一颗颗捡起来：「我负责装，你负责验收。这样总行了吧。」姜黎蹲下来跟她一起捡。'
      },
      {
        plotDescription: '灯装好之后，姜黎坐在沙发上，忽然说了一句。',
        line: "I get needy when you're away. I know it's not cute.",
        lineCn: '你不在的时候我会很缺爱。我知道这一点都不可爱。',
        prompt: "根据上下文，选出画线词汇 'Needy' 最准确的意思。",
        options: [
          { key: 'A', en: 'wanting a lot of attention and reassurance', cn: '缺爱、特别需要陪伴和安慰', correct: true, reason: 'needy 指情感上需求很多，常带一点自我嫌弃。' },
          { key: 'B', en: 'having very little money', cn: '非常缺钱', correct: false, reason: '缺钱是 broke；needy 缺的是陪伴。' },
          { key: 'C', en: 'in need of repair', cn: '需要修理', correct: false, reason: '需要修是 need fixing；needy 形容人。' }
        ],
        analysis: 'needy 是「缺爱」。她说得很小声，因为承认需要别人，对她从来不容易。',
        wrongFeedback: '你听成没钱，还问她这个月差多少，她把抱枕抱紧了，气血 -10。',
        afterCorrect: '沈知夏把灯调亮一点：「那我以后出门前，先把你的水杯灌满，把灯打开。」姜黎说：「这算什么？」「算我尽量不在。」'
      },
      {
        plotDescription: '第二天早上，沈知夏把最后一箱书搬进书房，顺手把门关上了。',
        line: "I need two hours alone. That's not selfish, that's survival.",
        lineCn: '我需要两个小时独处。这不是自私，是活下去的必需品。',
        prompt: "根据上下文，选出画线词汇 'Selfish' 最准确的意思。",
        options: [
          { key: 'A', en: 'caring only about yourself and not others', cn: '自私、只顾自己', correct: true, reason: 'selfish 是把好处都往自己身上收，不管别人。' },
          { key: 'B', en: 'thinking deeply about yourself', cn: '深入地思考自己', correct: false, reason: '自省是 self-reflection，不带贬义。' },
          { key: 'C', en: 'feeling calm and safe', cn: '感到平静安全', correct: false, reason: '安心是 safe；selfish 是贬义。' }
        ],
        analysis: 'selfish 是「自私」。她说“不是自私”，是在给自己争取一个不被指责的空间。',
        wrongFeedback: '你听成自省，还夸她最近很爱思考，她把门又关紧了一点，气血 -10。',
        afterCorrect: '姜黎在门外应了一声：「好。两点我来敲门。」沈知夏靠在门后笑了一下，第一次觉得被允许独处是件温柔的事。'
      }
    ],
    completeText: '第二十二章结束。她们学着把「我需要」说出口，而不是等对方猜。'
  },
  {
    id: 'df_23',
    index: 23,
    title: '第 23 章 · 楼下的黑帽子',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '第三天夜里，沈知夏下楼扔垃圾，看见同一辆白色车停在路灯下。车窗里的人戴着黑帽子，手机举着，镜头朝着她们的窗户。她站了两秒，转身快步上楼。',
    questions: [
      {
        plotDescription: '姜黎刚洗完澡，头发还湿着。',
        line: "You look gorgeous in that old sweater, and you know it.",
        lineCn: '你穿那件旧毛衣美呆了，你自己也知道。',
        prompt: "根据上下文，选出画线词汇 'Gorgeous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely beautiful', cn: '美呆了、极其漂亮', correct: true, reason: 'gorgeous 的语气比 pretty 强，是「非常美」。' },
          { key: 'B', en: 'very angry and loud', cn: '非常愤怒又大声', correct: false, reason: '愤怒是 furious；gorgeous 只夸外貌。' },
          { key: 'C', en: 'extremely tired', cn: '累到极点', correct: false, reason: '累是 exhausted；gorgeous 是美。' }
        ],
        analysis: 'gorgeous 是「美呆了」。她说这句时语气太轻，反而让姜黎停下手里的毛巾。',
        wrongFeedback: '你听成愤怒，还问她是不是在生气，她低头看了看毛衣，气血 -10。',
        afterCorrect: '姜黎没接这句夸奖，反而走过来：「你脸色不对。楼下怎么了？」沈知夏把窗帘拉开一条缝。'
      },
      {
        plotDescription: '两个人躲在窗帘后，看着那辆车。',
        line: "It's weird that the same car has been out there for three nights.",
        lineCn: '同一辆车连着三晚停在楼下，这很奇怪。',
        prompt: "根据上下文，选出画线词汇 'Weird' 最准确的意思。",
        options: [
          { key: 'A', en: 'strange and hard to explain', cn: '奇怪、说不通的', correct: true, reason: 'weird 是最日常的「怪」，不一定可怕，但不对劲。' },
          { key: 'B', en: 'completely normal', cn: '完全正常', correct: false, reason: '正常是 normal，正好相反。' },
          { key: 'C', en: 'very expensive', cn: '非常昂贵', correct: false, reason: '昂贵是 expensive；weird 讲的是奇怪。' }
        ],
        analysis: 'weird 是「奇怪」。她说得很克制，但手已经把窗帘拉严了。',
        wrongFeedback: '你听成正常，还说那可能就是邻居的车，姜黎看着你没说话，气血 -10。',
        afterCorrect: '姜黎数了数：「三晚，同一个位置，同一个角度。」她拿起手机，「我打给物业。」'
      },
      {
        plotDescription: '物业的人上来之前，那辆车忽然发动了，慢慢往前挪了一段。',
        line: "A man in a black cap taking photos of our door? That's sketchy.",
        lineCn: '一个戴黑帽子的男人在拍我们的门？那太可疑了。',
        prompt: "根据上下文，选出画线词汇 'Sketchy' 最准确的意思。",
        options: [
          { key: 'A', en: 'suspicious and probably not honest', cn: '可疑的、让人不放心', correct: true, reason: 'sketchy 指行为或地方让人觉得「不太对劲、靠不住」。' },
          { key: 'B', en: 'drawn with a pencil', cn: '用铅笔画出来的', correct: false, reason: 'sketch 是素描；sketchy 形容人时可疑。' },
          { key: 'C', en: 'extremely polite', cn: '非常有礼貌', correct: false, reason: '有礼貌是 polite；sketchy 是可疑。' }
        ],
        analysis: 'sketchy 是「可疑」。这个词一出口，事情就从「奇怪」变成了「需要处理」。',
        wrongFeedback: '你听成素描，还问是不是有人来写生，姜黎已经拨通了电话，气血 -10。',
        afterCorrect: '物业的人来了，那辆车却拐出小区，车牌被泥糊住了一半。姜黎只拍到一个模糊的背影。'
      },
      {
        plotDescription: '第二天中午，那个人竟提着水果站在门口，说自己是这栋楼的老住户。',
        line: "The whole thing is bizarre — he says he's a fan of the building.",
        lineCn: '整件事诡异得很——他说他是这栋楼的粉丝。',
        prompt: "根据上下文，选出画线词汇 'Bizarre' 最准确的意思。",
        options: [
          { key: 'A', en: 'very strange, almost unbelievable', cn: '诡异、离奇到难以置信', correct: true, reason: 'bizarre 比 weird 更重，强调离奇到不合常理。' },
          { key: 'B', en: 'a market where things are sold', cn: '卖东西的集市', correct: false, reason: '集市是 bazaar，只差一个字母；bizarre 是离奇。' },
          { key: 'C', en: 'simple and easy to understand', cn: '简单易懂', correct: false, reason: '简单是 simple，正好相反。' }
        ],
        analysis: 'bizarre 是「离奇」。一个跟踪的人说自己是楼的粉丝，荒诞到像剧本。',
        wrongFeedback: '你听成集市，还问他卖什么，那人笑了一下，姜黎把门关上了，气血 -10。',
        afterCorrect: '门关上后，姜黎靠着门板说：「搬家第一周就遇上这个。」沈知夏握住她的手：「别怕。我今晚不出门。」'
      }
    ],
    completeText: '第二十三章结束。有些不安不是错觉，她们决定不再假装没看见。'
  },
  {
    id: 'df_24',
    index: 24,
    title: '第 24 章 · 一条红毯',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '年底的颁奖礼，姜黎入围最佳女主角，沈知夏被邀做颁奖嘉宾。走红毯前，造型师给她们各挑了一套黑色礼服，站在镜子前，两个人都不太习惯这样被看。',
    questions: [
      {
        plotDescription: '车门打开，闪光灯连成一片，尖叫声从红毯尽头涌过来。',
        line: "That entrance was epic — the whole room stood up.",
        lineCn: '那个登场是史诗级的，全场都站起来了。',
        prompt: "根据上下文，选出画线词汇 'Epic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely impressive or grand', cn: '史诗级的、气派到让人震撼', correct: true, reason: '口语里的 epic 是夸张的赞美，表示场面大到惊人。' },
          { key: 'B', en: 'a long poem about heroes', cn: '讲述英雄的长篇史诗', correct: false, reason: 'epic 本义是史诗，但这里形容登场「太震撼」。' },
          { key: 'C', en: 'short and unimportant', cn: '短暂又不重要的', correct: false, reason: '不重要是 trivial，正好相反。' }
        ],
        analysis: 'epic 是「史诗级」。这一晚她等了很多年，连沈知夏都觉得脚下发飘。',
        wrongFeedback: '你听成长篇史诗，还问她要不要念两句，闪光灯正好拍到你的表情，气血 -10。',
        afterCorrect: '姜黎走在她前面半步，回头伸手。沈知夏愣了一下，把手放上去，快门声更密了。'
      },
      {
        plotDescription: '姜黎上台领奖，说完感谢名单，最后停了三秒。',
        line: "My speech was cringe. I said um eleven times and forgot your name.",
        lineCn: '我的致辞脚趾扣地。我讲了十一次「嗯」，还把你们的名字忘了。',
        prompt: "根据上下文，选出画线词汇 'Cringe' 最准确的意思。",
        options: [
          { key: 'A', en: 'so awkward that you want to hide', cn: '尴尬到脚趾扣地、让人想躲起来', correct: true, reason: 'cringe 形容那种替别人或替自己难受到想缩起来的感觉。' },
          { key: 'B', en: 'to move back in fear', cn: '害怕地往后退缩', correct: false, reason: 'cringe 本义是畏缩，但口语里多指「尬」。' },
          { key: 'C', en: 'perfect and smooth', cn: '完美流畅', correct: false, reason: '完美是 flawless，正好相反。' }
        ],
        analysis: 'cringe 是「尬到扣地」。她一边自嘲一边笑，台下的沈知夏却在摇头。',
        wrongFeedback: '你听成退缩，还问她是不是被吓到了，她把奖杯往你手里一塞，气血 -10。',
        afterCorrect: '沈知夏接过奖杯，认真地说：「你忘了名字，但你没忘那两碗面。」姜黎低头笑了。'
      },
      {
        plotDescription: '回后台，造型师冲过来检查裙摆，一边紧张地打量她们。',
        line: "You look fabulous. I'm not just saying that because I'm paid to.",
        lineCn: '你们好看极了。我这么说可不是因为拿了钱。',
        prompt: "根据上下文，选出画线词汇 'Fabulous' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely good or beautiful', cn: '极好的、美得惊人', correct: true, reason: 'fabulous 用于夸人时，语气比 nice 强得多。' },
          { key: 'B', en: 'made up of a story that is not true', cn: '由虚构的故事编成的', correct: false, reason: 'fable 是寓言；fabulous 在这里是夸奖。' },
          { key: 'C', en: 'ordinary and forgettable', cn: '普通到记不住', correct: false, reason: '普通是 ordinary，正好相反。' }
        ],
        analysis: 'fabulous 是「极好的」。她特意补了一句「不是因为拿钱」，反而是最像真的。',
        wrongFeedback: '你听成虚构故事，还问她编了什么，造型师拿着别针的手停在半空，气血 -10。',
        afterCorrect: '姜黎对着镜子整理耳环，忽然说：「我以前觉得这种场合很假。」沈知夏问：「现在呢？」「现在有人一起假。」'
      },
      {
        plotDescription: '散场时下起雨，工作人员催他们从侧门走，现场一片混乱。',
        line: "The lighting was terrible, but nobody was looking at the lights.",
        lineCn: '灯光糟透了，但没人在看灯。',
        prompt: "根据上下文，选出画线词汇 'Terrible' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely bad', cn: '糟糕的、非常差', correct: true, reason: 'terrible 是最常用的「很差」，语气强于 bad。' },
          { key: 'B', en: 'extremely beautiful', cn: '美到极点', correct: false, reason: '那是 gorgeous，正好相反。' },
          { key: 'C', en: 'full of terror and fear', cn: '充满恐惧的', correct: false, reason: 'terrible 有「可怕」义，但这里说的是灯光很差。' }
        ],
        analysis: 'terrible 是「糟透了」。她把这句说得像玩笑，其实是在说：今晚我只看见你。',
        wrongFeedback: '你以为现场出了恐怖事件，还护着她往外跑，工作人员一脸茫然，气血 -10。',
        afterCorrect: '雨很大，两个人挤在一把伞下，礼服都湿了。姜黎忽然说：「今天这个奖，我想分你一半。」'
      }
    ],
    completeText: '第二十四章结束。掌声会停，但有人愿意陪你淋雨。'
  },
  {
    id: 'df_25',
    index: 25,
    title: '第 25 章 · 你们是什么关系',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '颁奖礼之后的采访区，记者把她们拦住。有人问姜黎对同组男演员的评价，有人问沈知夏接下来接什么戏。最后有个年轻记者举手，问了一个别人都不敢问的问题。',
    questions: [
      {
        plotDescription: '记者问她，怎么看那位合作过三次的男演员。',
        line: "He's a decent guy. Boring, but decent.",
        lineCn: '他是个体面的人。无聊，但体面。',
        prompt: "根据上下文，选出画线词汇 'Decent' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough, respectable', cn: '体面的、还算不错的', correct: true, reason: 'decent 是「过得去的、人品端正的」，不是惊艳。' },
          { key: 'B', en: 'extremely rich', cn: '极其富有', correct: false, reason: '富是 rich；decent 指人品或水平尚可。' },
          { key: 'C', en: 'rude and unpleasant', cn: '粗鲁又让人不舒服', correct: false, reason: '粗鲁是 rude，正好相反。' }
        ],
        analysis: 'decent 是「体面」。她把「无聊」跟在后面，就是不肯多给一分。',
        wrongFeedback: '你听成粗鲁，还替对方道歉，记者们的笔停了一下，气血 -10。',
        afterCorrect: '姜黎说完就笑了，补了一句：「体面这个词，我最近用得很小心。」台下一片轻笑。'
      },
      {
        plotDescription: '那位年轻记者问，圈里人怎么看她们。',
        line: "In this industry, being called a weirdo is almost a compliment.",
        lineCn: '在这个圈子里，被叫怪胎几乎是种夸奖。',
        prompt: "根据上下文，选出画线词汇 'Weirdo' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person who is strange in an odd way', cn: '怪胎、行为古怪的人', correct: true, reason: 'weirdo 是名词，带调侃甚至贬义，看语境。' },
          { key: 'B', en: 'a person who writes for a living', cn: '靠写字为生的人', correct: false, reason: '作家是 writer；weirdo 是怪人。' },
          { key: 'C', en: 'a very ordinary person', cn: '非常普通的人', correct: false, reason: '普通人是 ordinary person，正好相反。' }
        ],
        analysis: 'weirdo 是「怪胎」。她说这个词时带着笑意，把它变成了勋章。',
        wrongFeedback: '你听成作家，还问她写过什么书，提问的记者笑了，气血 -10。',
        afterCorrect: '沈知夏接话：「而且在这里，怪一点比较安全。」姜黎侧头看她，眼里有笑。'
      },
      {
        plotDescription: '记者笑了笑，话锋一转，问起她对姜黎的第一印象。',
        line: "She's hot. I'm not blind, and I'm not going to pretend otherwise.",
        lineCn: '她很性感。我又不瞎，不打算假装不是。',
        prompt: "根据上下文，选出画线词汇 'Hot' 最准确的意思。",
        options: [
          { key: 'A', en: 'very attractive and sexy', cn: '性感、非常有吸引力', correct: true, reason: '形容人时 hot 是「很辣、很性感」，不是温度。' },
          { key: 'B', en: 'having a high temperature', cn: '温度很高、很烫', correct: false, reason: '热的字面义；形容人时是性感。' },
          { key: 'C', en: 'famous and successful', cn: '有名又成功', correct: false, reason: '有名是 famous；hot 讲的是吸引力。' }
        ],
        analysis: 'hot 是「性感」。她答得太直，记者都愣了一下。',
        wrongFeedback: '你听成天气热，还说今天确实不冷，姜黎忍笑忍得很辛苦，气血 -10。',
        afterCorrect: '姜黎在旁边补了一句：「她第一次见我，说的是我摔马的样子很帅。」沈知夏反驳：「那不是一回事。」'
      },
      {
        plotDescription: '最后，年轻记者问：你们算什么关系。',
        line: "You're cute when you're pretending not to be nervous.",
        lineCn: '你假装不紧张的样子很可爱。',
        prompt: "根据上下文，选出画线词汇 'Cute' 最准确的意思。",
        options: [
          { key: 'A', en: 'sweet and pleasing in a lovely way', cn: '可爱、招人喜欢', correct: true, reason: 'cute 用来形容人时，常带亲近和宠溺。' },
          { key: 'B', en: 'clever and good at solving problems', cn: '聪明、擅长解决问题', correct: false, reason: '聪明是 clever；cute 是可爱。' },
          { key: 'C', en: 'boring and ordinary', cn: '无聊又普通', correct: false, reason: '无聊是 boring；cute 是讨喜。' }
        ],
        analysis: 'cute 是「可爱」。她没有回答问题，只用一句话把现场变成了两个人的。',
        wrongFeedback: '你听成聪明，还认真道谢说她也很聪明，全场安静了一秒，气血 -10。',
        afterCorrect: '沈知夏愣了两秒，转头对记者说：「算家人。」姜黎握着话筒的手紧了紧，没有否认。'
      }
    ],
    completeText: '第二十五章结束。她们第一次用一个词，把彼此的位置说清楚。'
  },
  {
    id: 'df_26',
    index: 26,
    title: '第 26 章 · 九十分钟的路',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新家离沈知夏的新片场很远。第一天开工，她五点二十出门，晚上十点才进门，鞋都没换就坐在地板上。桌上放着一份已经凉透的外卖。',
    questions: [
      {
        plotDescription: '姜黎把拖鞋推到她脚边，蹲下来看她。',
        line: "My commute is ninety minutes each way. I read scripts on the bus.",
        lineCn: '我单程通勤九十分钟。在公交上看剧本。',
        prompt: "根据上下文，选出画线词汇 'Commute' 最准确的意思。",
        options: [
          { key: 'A', en: 'the regular journey between home and work', cn: '通勤、上下班往返的路程', correct: true, reason: 'commute 就是每天在住处和工作地之间往返。' },
          { key: 'B', en: 'to change a punishment into a lighter one', cn: '把刑罚改轻（减刑）', correct: false, reason: 'commute 有减刑义，但这里说的是通勤。' },
          { key: 'C', en: 'a long holiday abroad', cn: '一次海外长假', correct: false, reason: '度假是 vacation；commute 是每日往返。' }
        ],
        analysis: 'commute 是「通勤」。九十分钟单程，是每天都要还的一笔时间债。',
        wrongFeedback: '你听成减刑，还问她是不是犯了什么事，她把拖鞋往你脚边又推了推，气血 -10。',
        afterCorrect: '姜黎皱起眉：「明天开始，我送你去。」沈知夏摇头：「你也忙。」她说：「我早起半小时的事。」'
      },
      {
        plotDescription: '吃完饭，沈知夏靠在沙发上，眼睛已经闭上了一半。',
        line: "I need a nap, or I'll fall asleep standing up on set.",
        lineCn: '我得打会儿盹，不然在片场会站着睡着。',
        prompt: "根据上下文，选出画线词汇 'Nap' 最准确的意思。",
        options: [
          { key: 'A', en: 'a short sleep, especially during the day', cn: '打盹、白天的小睡', correct: true, reason: 'nap 强调时间短，常在白天。' },
          { key: 'B', en: 'a long deep sleep at night', cn: '夜里长时间的深睡', correct: false, reason: '长睡是 deep sleep；nap 是短的。' },
          { key: 'C', en: 'a type of cloth with a soft surface', cn: '表面柔软的一种布料', correct: false, reason: 'nap 确实有绒面义，但这里说的是小睡。' }
        ],
        analysis: 'nap 是「打盹」。她说得随意，其实已经困到不行。',
        wrongFeedback: '你听成布料，还问她是什么材质，她把脸埋进靠垫里，气血 -10。',
        afterCorrect: '姜黎把毯子盖到她身上，关了客厅的顶灯，只留一盏小的。她坐在旁边翻剧本，翻得很轻。'
      },
      {
        plotDescription: '醒来已经十一点，厨房什么都没有。',
        line: "Let's order in tonight. I'm too tired to even boil water.",
        lineCn: '今晚点外卖吧。我累到连水都烧不动了。',
        prompt: "根据上下文，选出画线词汇 'Order in' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have food delivered to your home', cn: '点外卖、叫吃的送到家', correct: true, reason: 'order in 指让餐厅把食物送到家里，不外出。' },
          { key: 'B', en: 'to arrange things in a neat line', cn: '把东西排整齐', correct: false, reason: 'order 有排序义，但 order in 是点外卖。' },
          { key: 'C', en: 'to give an order to a soldier', cn: '向士兵下命令', correct: false, reason: '下命令是 give orders；order in 是叫餐。' }
        ],
        analysis: 'order in 是「点外卖」。她们累到连锅都不想碰，这已经是最温柔的分工。',
        wrongFeedback: '你听成排整齐，还开始收拾茶几，姜黎按住你的手，气血 -10。',
        afterCorrect: '两个人坐在地板上吃炒饭，筷子碰到一起。姜黎忽然说：「周末我们出去吃一次吧，正式一点。」'
      },
      {
        plotDescription: '周末，姜黎提前三天订了位，还写了备忘录。',
        line: "We eat out once a month. It's the one rule we never break.",
        lineCn: '我们每月出去吃一次。这是我们唯一不破的规矩。',
        prompt: "根据上下文，选出画线词汇 'Eat out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have a meal at a restaurant', cn: '下馆子、在外面吃饭', correct: true, reason: 'eat out 是外出就餐，和在家吃相对。' },
          { key: 'B', en: 'to eat everything on the plate', cn: '把盘子里的东西吃光', correct: false, reason: '吃光是 finish；eat out 是在外面吃。' },
          { key: 'C', en: 'to eat outside in the rain', cn: '在雨里吃饭', correct: false, reason: '那只是 outdoor eating；eat out 指去餐厅。' }
        ],
        analysis: 'eat out 是「下馆子」。她们把这件事定成规矩，是因为日子太忙，得留一个仪式。',
        wrongFeedback: '你听成吃光，还把盘子刮得很干净，姜黎看着空盘子笑，气血 -10。',
        afterCorrect: '那家小馆子只有六张桌子，老板娘认识她们了，每次都留靠窗那桌。姜黎说：「这就是我们的餐厅了。」'
      }
    ],
    completeText: '第二十六章结束。忙到只剩晚饭的时间，那就把晚饭过得认真一点。'
  },
  {
    id: 'df_27',
    index: 27,
    title: '第 27 章 · 谁洗碗',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '住到一起的第二个月，家务成了新战场。沈知夏把碗泡在水池里就去背台词，姜黎把吸尘器推到她脚边，两个人站在客厅中央，像在对戏。',
    questions: [
      {
        plotDescription: '姜黎把一张纸贴在冰箱上，上面画着表格。',
        line: "We split the chores. I cook, you clean, and neither of us pretends to forget.",
        lineCn: '我们分家务。我做饭，你洗碗，谁都不许假装忘记。',
        prompt: "根据上下文，选出画线词汇 'Chores' 最准确的意思。",
        options: [
          { key: 'A', en: 'small regular jobs around the home', cn: '家务、日常琐碎的家事', correct: true, reason: 'chores 指洗碗、拖地这类重复的日常杂事。' },
          { key: 'B', en: 'large tasks at work', cn: '工作上的大任务', correct: false, reason: '工作任务是 tasks；chores 是家里的小事。' },
          { key: 'C', en: 'songs sung by a group', cn: '一群人唱的合唱曲', correct: false, reason: '合唱是 chorus，拼写很像但意思不同。' }
        ],
        analysis: 'chores 是「家务」。她把它做成表格，是把爱里最容易积怨的部分摊开。',
        wrongFeedback: '你听成合唱，还问她什么时候排练，她拿着笔的手停在纸上，气血 -10。',
        afterCorrect: '沈知夏看着表格笑：「行。但我洗碗的时候，你得在旁边说话。」姜黎问为什么，她说：「不然太安静。」'
      },
      {
        plotDescription: '碗在水池里泡到第二天早上，沈知夏端着咖啡从旁边走过。',
        line: "I procrastinate until the night before, then panic. It's a system.",
        lineCn: '我总拖到最后一晚，然后崩溃。这是一套系统。',
        prompt: "根据上下文，选出画线词汇 'Procrastinate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to keep delaying something you should do', cn: '拖延、一直往后推', correct: true, reason: 'procrastinate 的重点是明知该做却一直拖。' },
          { key: 'B', en: 'to finish something ahead of time', cn: '提前把事做完', correct: false, reason: '提前完成是 finish early，正好相反。' },
          { key: 'C', en: 'to say something very loudly', cn: '大声说出某事', correct: false, reason: '大声说是 proclaim，发音接近但意思不同。' }
        ],
        analysis: 'procrastinate 是「拖延」。她把拖延说成系统，是给自己找台阶，也是在撒娇。',
        wrongFeedback: '你听成提前完成，还夸她效率高，她指着水池里的碗，气血 -10。',
        afterCorrect: '姜黎把洗碗布递到她手里：「系统升级一下，从今天开始。」沈知夏接过来，认命地卷起袖子。'
      },
      {
        plotDescription: '晚上十点，姜黎打开投影，说只看一集。',
        line: "We binge-watched the whole season in one night. Again.",
        lineCn: '我们一晚上把整季刷完了。又一次。',
        prompt: "根据上下文，选出画线词汇 'Binge-watch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to watch many episodes in one go', cn: '刷剧、一口气连看很多集', correct: true, reason: 'binge-watch 的核心是「不中断地连着看」。' },
          { key: 'B', en: 'to watch a match in a stadium', cn: '在体育场看比赛', correct: false, reason: '那是 watch a game；binge-watch 是连刷。' },
          { key: 'C', en: 'to stop watching halfway', cn: '看到一半停下来', correct: false, reason: '中途停下正好相反。' }
        ],
        analysis: 'binge-watch 是「刷剧」。说好只看一集，是这类夜晚最常见的开场。',
        wrongFeedback: '你听成去体育场，还问要不要带应援牌，她已经点开了下一集，气血 -10。',
        afterCorrect: '片尾曲响起来的时候，两个人都没动。姜黎说：「明天洗碗。」沈知夏说：「明天。」'
      },
      {
        plotDescription: '凌晨一点，姜黎还侧躺着看手机，屏幕的光照在脸上。',
        line: "You scroll for an hour and call it resting. That's not resting.",
        lineCn: '你刷手机刷一小时，还说这是在休息。那不叫休息。',
        prompt: "根据上下文，选出画线词汇 'Scroll' 最准确的意思。",
        options: [
          { key: 'A', en: 'to move through content on a screen', cn: '刷手机、在屏幕上滑动浏览', correct: true, reason: 'scroll 原指卷轴，现在最常指滑屏浏览。' },
          { key: 'B', en: 'to write something by hand', cn: '用手写东西', correct: false, reason: '手写是 write；scroll 是滑屏。' },
          { key: 'C', en: 'to cook food slowly', cn: '慢慢炖煮食物', correct: false, reason: '炖是 stew；scroll 是滑动屏幕。' }
        ],
        analysis: 'scroll 是「刷手机」。她一句话把「假休息」拆穿了。',
        wrongFeedback: '你听成写字，还去找纸笔，她把手机举给你看，气血 -10。',
        afterCorrect: '沈知夏把手机扣在床头：「那你说，怎么才算休息。」姜黎拍拍枕头：「闭眼。我数三下。」'
      }
    ],
    completeText: '第二十七章结束。家务和手机都不能替代拥抱，她们慢慢在学。'
  },
  {
    id: 'df_28',
    index: 28,
    title: '第 28 章 · 什么都不做的周日',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '难得的周日，两个人什么都没安排。早上九点，姜黎在阳台上晒太阳，沈知夏还缩在被子里。手机在枕边不停地震，是工作群。',
    questions: [
      {
        plotDescription: '沈知夏半睁着眼，手指在屏幕上划了一下。',
        line: "Don't just swipe past it. That message is from your director.",
        lineCn: '别一划就过去。那条是你导演发的。',
        prompt: "根据上下文，选出画线词汇 'Swipe' 最准确的意思。",
        options: [
          { key: 'A', en: 'to slide your finger across a screen', cn: '滑屏、用手指在屏幕上划', correct: true, reason: 'swipe 指手指在触摸屏上滑动，也指刷卡。' },
          { key: 'B', en: 'to steal something quickly', cn: '快速偷走某物', correct: false, reason: '偷是 steal；swipe 有「顺手拿走」的义，但这里是滑屏。' },
          { key: 'C', en: 'to clean the floor with water', cn: '用水拖地', correct: false, reason: '拖地是 mop；swipe 是滑动。' }
        ],
        analysis: 'swipe 是「滑屏」。她一句话，把休假从工作群里抢了回来。',
        wrongFeedback: '你听成偷东西，还问家里丢了什么，姜黎把手机从你手里拿走，气血 -10。',
        afterCorrect: '姜黎替她回了一句：「今天休息，明天一早回复。」然后把手机放到了客厅。'
      },
      {
        plotDescription: '中午吃完饭，沈知夏躺在沙发上，说只闭眼五分钟。',
        line: "I crashed at nine last night and didn't even take my makeup off.",
        lineCn: '我昨晚九点就昏睡过去了，连妆都没卸。',
        prompt: "根据上下文，选出画线词汇 'Crash' 最准确的意思。",
        options: [
          { key: 'A', en: 'to fall asleep from total exhaustion', cn: '累到直接睡着、昏睡过去', correct: true, reason: '口语里 crash 常指「撑不住倒头就睡」。' },
          { key: 'B', en: 'to have a car accident', cn: '发生车祸', correct: false, reason: '车祸也是 crash，但这里说的是睡着。' },
          { key: 'C', en: 'to make a loud noise with pans', cn: '用锅敲出巨响', correct: false, reason: '那是 clatter；crash 在这里是瘫睡。' }
        ],
        analysis: 'crash 是「倒头就睡」。连妆都没卸，才是真的累。',
        wrongFeedback: '你听成车祸，还紧张地问她伤到哪里，她困得说不出话，气血 -10。',
        afterCorrect: '姜黎拿了卸妆棉过来，坐在沙发边上给她擦脸：「闭眼。五分钟我给你看着。」'
      },
      {
        plotDescription: '下午三点，阳光移到地毯上，姜黎忽然问她要不要出门。',
        line: "Do you want to hang out? No plan, no cameras, just walk around.",
        lineCn: '你想不想一起出去逛逛？没计划，没镜头，就是走走。',
        prompt: "根据上下文，选出画线词汇 'Hang out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to spend relaxed time with someone', cn: '一起闲逛、放松地待着', correct: true, reason: 'hang out 强调没有明确目的的相处。' },
          { key: 'B', en: 'to hang clothes outside to dry', cn: '把衣服挂到外面晾', correct: false, reason: '晾衣服是 hang up；hang out 是人一起玩。' },
          { key: 'C', en: 'to give up on something', cn: '放弃某件事', correct: false, reason: '放弃是 give up；hang out 是相聚。' }
        ],
        analysis: 'hang out 是「闲逛」。她说没有计划，是想把这一天空出来给彼此。',
        wrongFeedback: '你听成晾衣服，还去拿衣架，她看着你手里的衣架笑出声，气血 -10。',
        afterCorrect: '她们沿着河边走了两公里，买了一杯热豆浆分着喝。没人认出来，也没人举手机。'
      },
      {
        plotDescription: '傍晚回到家，姜黎把鞋一脱，直接躺到地毯上。',
        line: "Kick back. The noodles are coming in twenty minutes.",
        lineCn: '放松躺着吧。面二十分钟就到。',
        prompt: "根据上下文，选出画线词汇 'Kick back' 最准确的意思。",
        options: [
          { key: 'A', en: 'to relax and enjoy doing nothing', cn: '放松、躺着享受空闲', correct: true, reason: 'kick back 是彻底放松下来的口语说法。' },
          { key: 'B', en: 'to kick something backwards with your foot', cn: '用脚把东西往后踢', correct: false, reason: '字面义是往后踢，但口语里是放松。' },
          { key: 'C', en: 'to refuse an offer angrily', cn: '愤怒地拒绝一个提议', correct: false, reason: '拒绝是 refuse；kick back 是休息。' }
        ],
        analysis: 'kick back 是「放松」。这一整天都没做什么，却像是补回了一整年。',
        wrongFeedback: '你听成往后踢，还抬脚比划了一下，她笑得捂住脸，气血 -10。',
        afterCorrect: '面到了，两个人还是坐在地毯上吃。姜黎说：「这样的周日，一个月要有两次。」沈知夏说：「我记在表格上。」'
      }
    ],
    completeText: '第二十八章结束。她们开始懂得，休息也是一种要一起练习的本事。'
  },
  {
    id: 'df_29',
    index: 29,
    title: '第 29 章 · 收尾的人',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新戏杀青前一周，事情全堆在一起：补拍、采访、还有一屋子没拆的纸箱。沈知夏的手机备忘录里有十九条待办，姜黎的那份只有三条，但每一条都很大。',
    questions: [
      {
        plotDescription: '导演看了看天，说再拍一条就得收工。',
        line: "Let's wrap up this scene before the light goes.",
        lineCn: '趁光还没走，我们把这场收尾。',
        prompt: "根据上下文，选出画线词汇 'Wrap up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to finish something completely', cn: '收尾、把事情做完', correct: true, reason: 'wrap up 指把最后部分处理完，常用于会议、拍摄。' },
          { key: 'B', en: 'to cover something with paper', cn: '用纸把东西包起来', correct: false, reason: '包起来是 wrap，加上 up 表示「结束」。' },
          { key: 'C', en: 'to start something from the beginning', cn: '从头开始一件事', correct: false, reason: '开始是 start，正好相反。' }
        ],
        analysis: 'wrap up 是「收尾」。这句话一出，整个片场都松了口气。',
        wrongFeedback: '你听成包东西，还真去找包装纸，副导演一脸茫然，气血 -10。',
        afterCorrect: '最后一条过了。沈知夏摘下护具，姜黎站在监视器后面，冲她举了举手里的保温杯。'
      },
      {
        plotDescription: '回到家，客厅里还堆着六个纸箱，上面写着「杂物」。',
        line: "We'll sort out the boxes this weekend. I promise.",
        lineCn: '这周末我们把箱子整理好。我保证。',
        prompt: "根据上下文，选出画线词汇 'Sort out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to organize or solve something', cn: '整理清楚、把事情解决', correct: true, reason: 'sort out 既可以是整理物品，也可以是解决麻烦。' },
          { key: 'B', en: 'to put things in alphabetical order only', cn: '只按字母顺序排列', correct: false, reason: '那是 alphabetize；sort out 范围更广。' },
          { key: 'C', en: 'to throw everything away', cn: '把所有东西都扔掉', correct: false, reason: '扔掉是 throw away；sort out 是分类整理。' }
        ],
        analysis: 'sort out 是「整理、解决」。她说得笃定，是因为知道再不整理就要吵第二架。',
        wrongFeedback: '你听成全部扔掉，还拎起一个箱子往门口走，她一把拉住你，气血 -10。',
        afterCorrect: '周六上午，两个人真的拆了四个箱子。翻出一叠旧照片，最上面那张是七年前的电影票。'
      },
      {
        plotDescription: '房东忽然发消息，说楼下漏水，要上来检查。',
        line: "I'll deal with the landlord. You finish your script.",
        lineCn: '房东我来处理。你把剧本弄完。',
        prompt: "根据上下文，选出画线词汇 'Deal with' 最准确的意思。",
        options: [
          { key: 'A', en: 'to handle a problem or situation', cn: '处理、应付（麻烦或人）', correct: true, reason: 'deal with 强调把麻烦接过来处理掉。' },
          { key: 'B', en: 'to make a business agreement', cn: '达成一笔商业交易', correct: false, reason: '交易是 make a deal，不是 deal with。' },
          { key: 'C', en: 'to share something equally', cn: '平均分配某物', correct: false, reason: '平分是 share；deal with 是应对。' }
        ],
        analysis: 'deal with 是「处理」。她把这句接过去，是把对方从杂事里捞出来。',
        wrongFeedback: '你听成谈生意，还问要不要准备合同，房东在门口咳了一声，气血 -10。',
        afterCorrect: '房东检查完走了，姜黎回来时手里拎着两袋水果：「处理完了。」沈知夏抬头：「你连水果都顺手买了？」'
      },
      {
        plotDescription: '十四小时后，剧本终于改完，沈知夏把电脑合上，长出一口气。',
        line: "Chill out. It's just one note from the director, not the end of the world.",
        lineCn: '冷静点。那只是导演的一条意见，不是世界末日。',
        prompt: "根据上下文，选出画线词汇 'Chill out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to calm down and stop worrying', cn: '冷静下来、放松别紧张', correct: true, reason: 'chill out 是叫人别急、别上头的口语说法。' },
          { key: 'B', en: 'to become very cold', cn: '变得非常冷', correct: false, reason: '变冷是 get cold；chill out 是情绪。' },
          { key: 'C', en: 'to go outside for fresh air', cn: '到外面换换空气', correct: false, reason: '出门透气是 get some air；chill out 是冷静。' }
        ],
        analysis: 'chill out 是「冷静」。她一句轻话，把对方从自我审判里拉出来。',
        wrongFeedback: '你听成变冷，还去关窗加衣服，姜黎看着你抱着外套，气血 -10。',
        afterCorrect: '沈知夏坐下，忽然说：「我发现我改剧本的时候，特别怕你说话。」姜黎问为什么。「因为你会说对。」'
      }
    ],
    completeText: '第二十九章结束。她们一个擅长收尾，一个擅长把人从深渊边拉回来。'
  },
  {
    id: 'df_30',
    index: 30,
    title: '第 30 章 · 你先喝水',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '连着三天，沈知夏都在客厅改剧本，从早到晚没离开过那张桌子。姜黎把水杯放在她手边，过两小时再看，杯子还是满的。',
    questions: [
      {
        plotDescription: '下午四点，姜黎端来一小盘切好的苹果。',
        line: "There's a snack in my bag. Take it before you start again.",
        lineCn: '我包里有吃的。重新开工前先吃点。',
        prompt: "根据上下文，选出画线词汇 'Snack' 最准确的意思。",
        options: [
          { key: 'A', en: 'a small amount of food between meals', cn: '零食、正餐之间吃的小东西', correct: true, reason: 'snack 指两餐之间垫一下的少量食物。' },
          { key: 'B', en: 'a full formal dinner', cn: '一顿正式的正餐', correct: false, reason: '正餐是 dinner；snack 是垫肚子的小份。' },
          { key: 'C', en: 'a kind of medicine taken after meals', cn: '饭后服用的一种药', correct: false, reason: '药是 medicine；snack 是吃的。' }
        ],
        analysis: 'snack 是「零食」。她把东西塞过去，是因为知道对方一忙起来就不吃。',
        wrongFeedback: '你听成正餐，还说吃不下那么多，她把苹果盘往你手边又推近了一点，气血 -10。',
        afterCorrect: '沈知夏咬了一口，才发现自己确实饿了。姜黎在旁边坐下：「每天四点，我送一次。」'
      },
      {
        plotDescription: '第五天晚上，沈知夏的声音有点哑，还在讲电话。',
        line: "Drink water. Hydrate first, then you can go back to arguing with the producer.",
        lineCn: '先喝水。补上水，再回去跟制片人吵。',
        prompt: "根据上下文，选出画线词汇 'Hydrate' 最准确的意思。",
        options: [
          { key: 'A', en: 'to take in water and keep your body supplied', cn: '补水、让身体保持水分', correct: true, reason: 'hydrate 是给身体补充水分，常被健身房和医生挂在嘴边。' },
          { key: 'B', en: 'to eat a heavy meal', cn: '吃一顿很重的饭', correct: false, reason: '吃饭是 eat；hydrate 只讲水。' },
          { key: 'C', en: 'to dry something completely', cn: '把东西彻底弄干', correct: false, reason: '弄干是 dehydrate 的反向，正好相反。' }
        ],
        analysis: 'hydrate 是「补水」。她一句话把关心说成了命令，才有人肯照做。',
        wrongFeedback: '你听成彻底弄干，还去拿吹风机，姜黎把水瓶塞进你手里，气血 -10。',
        afterCorrect: '沈知夏喝了大半瓶，嗓子里那股火才压下去。她说：「你怎么知道我三天没喝水。」姜黎说：「我看杯子。」'
      },
      {
        plotDescription: '挂掉电话，姜黎站在她身后，把手按在她肩上。',
        line: "Stretch your back. You've been sitting for six hours.",
        lineCn: '拉伸一下背。你已经坐了六个小时。',
        prompt: "根据上下文，选出画线词汇 'Stretch' 最准确的意思。",
        options: [
          { key: 'A', en: 'to extend your body or arms to relax the muscles', cn: '拉伸、伸展身体放松肌肉', correct: true, reason: 'stretch 指把身体伸展开，坐久了最需要。' },
          { key: 'B', en: 'to make something smaller', cn: '把某物缩小', correct: false, reason: '缩小是 shrink；stretch 是伸展。' },
          { key: 'C', en: 'to lie down on the floor', cn: '躺到地板上', correct: false, reason: '躺下是 lie down；stretch 是伸展。' }
        ],
        analysis: 'stretch 是「拉伸」。她的手按上去的时候，沈知夏才发现肩膀已经硬了。',
        wrongFeedback: '你听成缩小，还问她要不要换小一号的椅子，她轻轻按了你一下，气血 -10。',
        afterCorrect: '沈知夏站起来，真的伸了个懒腰，骨头响了两声。姜黎说：「明天开始，每小时起来一次。」'
      },
      {
        plotDescription: '夜里十一点，沈知夏盯着屏幕，眼神却已经散了。',
        line: "You zoned out again. Come on, bed.",
        lineCn: '你又走神了。走吧，睡觉。',
        prompt: "根据上下文，选出画线词汇 'Zone out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to stop paying attention and stare blankly', cn: '走神、发呆放空', correct: true, reason: 'zone out 是注意力忽然掉线的状态。' },
          { key: 'B', en: 'to mark an area on a map', cn: '在地图上划出一个区域', correct: false, reason: 'zone 有区域义，但 zone out 是人放空。' },
          { key: 'C', en: 'to turn up the volume', cn: '把音量调大', correct: false, reason: '调大音量是 turn up；zone out 是走神。' }
        ],
        analysis: 'zone out 是「走神」。她自己都没察觉，光标在屏幕上停了十分钟。',
        wrongFeedback: '你听成划区域，还去拿地图，她已经靠在椅背上闭上了眼，气血 -10。',
        afterCorrect: '姜黎把电脑合上，把她从椅子上拉起来。沈知夏半梦半醒地说：「我还没写完。」她说：「明天写。今天到这儿。」'
      }
    ],
    completeText: '第三十章结束。有人盯着你的水杯，就是有人在认真爱你。'
  },
  {
    id: 'df_31',
    index: 31,
    title: '第 31 章 · 两颗鸡蛋',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '替身的合约到期，新戏还没开机，收入一下断了。房租在五天后到期，冰箱里只剩两颗鸡蛋和半袋米。姜黎把冰箱门关上时，两个人都没说话。',
    questions: [
      {
        plotDescription: '沈知夏把米袋立起来，抖了抖，倒出最后一把。',
        line: "I'm broke again. Two eggs and half a bag of rice — that's the whole kitchen.",
        lineCn: '我又身无分文了。两颗鸡蛋、半袋米，就是整个厨房。',
        prompt: "根据上下文，选出画线词汇 'Broke' 最准确的意思。",
        options: [
          { key: 'A', en: 'having no money at all', cn: '身无分文、一分钱都没有', correct: true, reason: 'be broke 是固定口语，表示没钱了，与身体状况无关。' },
          { key: 'B', en: 'injured and unable to move', cn: '受伤了、动不了', correct: false, reason: 'broke 虽是 break 的过去式，但 I am broke 说的是钱包。' },
          { key: 'C', en: 'extremely tired', cn: '累到脱力', correct: false, reason: '累是 exhausted；broke 讲的是经济状态。' }
        ],
        analysis: 'broke 放在 be 动词后形容人，就是「没钱」。她说得很轻，因为这话她说过太多次。',
        wrongFeedback: '你把没钱听成受伤，姜黎以为你要请病假，赶紧去拿药箱，气血 -10。',
        afterCorrect: '姜黎把鸡蛋拿在手里看了两秒，说：「那就炒饭，两颗蛋也够两个人吃。」沈知夏想笑，喉咙却有点紧。'
      },
      {
        plotDescription: '晚上，房东的短信跳出来，后面还跟了一条涨价通知。',
        line: "The rent is due in five days, and it went up by eight hundred.",
        lineCn: '房租五天后到期，还涨了八百。',
        prompt: "根据上下文，选出画线词汇 'Rent' 最准确的意思。",
        options: [
          { key: 'A', en: 'money paid regularly for a place to live', cn: '房租、住房的租金', correct: true, reason: 'rent 就是按月付给房东的住房钱，是最固定的开销。' },
          { key: 'B', en: 'money borrowed from a bank', cn: '向银行借的钱', correct: false, reason: '贷款是 loan；rent 是住房子要付的钱。' },
          { key: 'C', en: 'a fee paid to enter a studio', cn: '进摄影棚要交的费用', correct: false, reason: '进片场不用付 rent，这个词只和居住有关。' }
        ],
        analysis: 'rent 是「房租」。涨价八百，等于把她刚接到的一个小角色白演了。',
        wrongFeedback: '你把房租听成贷款，还问是不是要还利息，姜黎看着短信没说话，气血 -10。',
        afterCorrect: '沈知夏把手机翻过来：「我明天去问副导演，看能不能先支一部分。」姜黎说：「我也可以接商演。」'
      },
      {
        plotDescription: '第二天早上，桌上摊着一张纸，中间画了两条线。',
        line: "We need a budget. A real one, written down, not in our heads.",
        lineCn: '我们需要一份预算。真的写下来，不是装在脑子里。',
        prompt: "根据上下文，选出画线词汇 'Budget' 最准确的意思。",
        options: [
          { key: 'A', en: 'a plan for how much you can spend', cn: '预算、花钱的计划', correct: true, reason: 'budget 是提前定好的支出计划，重点在「能花多少」。' },
          { key: 'B', en: 'a type of insurance', cn: '一种保险', correct: false, reason: '保险是 insurance；预算管的是钱怎么花。' },
          { key: 'C', en: 'a list of working hours', cn: '一张排班表', correct: false, reason: '排班是 schedule；budget 只和钱有关。' }
        ],
        analysis: 'budget 是「预算」。两个人第一次把钱摊开算，反而比吵架轻松。',
        wrongFeedback: '你以为是排班表，还真排了两个人的班，姜黎把纸推回你面前，气血 -10。',
        afterCorrect: '两个小时后，纸上写满了数字。最后一行是：「不点外卖，不买衣服，不打车。」沈知夏在下面补了一句：「可以买两颗鸡蛋。」'
      },
      {
        plotDescription: '商场橱窗里挂着一件米色大衣，姜黎在玻璃前站了很久。',
        line: "Let me splurge once. One coat, and I'll stop looking at it.",
        lineCn: '让我挥霍一次。就一件大衣，买完我就不看了。',
        prompt: "根据上下文，选出画线词汇 'Splurge' 最准确的意思。",
        options: [
          { key: 'A', en: 'spend a lot on something nice, just this once', cn: '挥霍、舍得花钱享受一次', correct: true, reason: 'splurge 指偶尔大手大脚花一次，常带「就这一次」的意味。' },
          { key: 'B', en: 'to eat too fast', cn: '吃得太急', correct: false, reason: 'splurge 与速度无关，它讲的是花钱。' },
          { key: 'C', en: 'to complain loudly', cn: '大声抱怨', correct: false, reason: '抱怨是 complain；splurge 的对象是钱。' }
        ],
        analysis: 'splurge 是「挥霍一次」。她说得很克制，可那件大衣的价格够两个月房租。',
        wrongFeedback: '你把挥霍理解成吃太快，还问她是不是噎到了，她转身就走，气血 -10。',
        afterCorrect: '沈知夏没拦她，只说：「买吧。但回家得让我也穿一次。」姜黎笑出声，把手从玻璃上收了回来：「算了。等戏开了机再买。」'
      }
    ],
    completeText: '第三十一章结束。穷不是不爱，只是爱要算着花。'
  },
  {
    id: 'df_32',
    index: 32,
    title: '第 32 章 · 太便宜的排练厅',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '为了省钱，她们想找一个便宜的小排练厅。网上刷到一间，月租低得离谱，照片却很漂亮。沈知夏盯着那条房源看了十分钟，忽然说：「这个价格，这栋楼，不可能。」',
    questions: [
      {
        plotDescription: '她们按地址找过去，地下室没有窗，墙皮一块块往下掉。',
        line: "Eight thousand a month for this? That's a rip-off.",
        lineCn: '这种地方一个月八千？这简直是坑钱。',
        prompt: "根据上下文，选出画线词汇 'Rip-off' 最准确的意思。",
        options: [
          { key: 'A', en: 'something that charges far too much', cn: '坑钱的东西、宰人的价', correct: true, reason: 'rip-off 指价格离谱、明摆着占你便宜。' },
          { key: 'B', en: 'a very good bargain', cn: '非常划算的买卖', correct: false, reason: 'rip-off 是「被宰」，和划算正好相反。' },
          { key: 'C', en: 'a sudden accident', cn: '一场突发的意外', correct: false, reason: '这里说的是价钱不合理，不是有人摔倒。' }
        ],
        analysis: 'rip-off 是「坑钱」。她们不是嫌贵，是嫌这个价配不上这个地方。',
        wrongFeedback: '你把它当成便宜，还说「那不挺好」，姜黎看着墙皮掉下来，气血 -10。',
        afterCorrect: '中介还在讲「地段好」，沈知夏已经往外走了。姜黎跟上来，低声说：「你刚才那个表情，很像我第一次见你。」'
      },
      {
        plotDescription: '回到公寓，沙发上还躺着一个人，是姜黎的旧同行。',
        line: "He's been on our sofa for three weeks and paid for nothing. Total freeloader.",
        lineCn: '他在我们沙发上躺了三周，一分钱没出。标准的白嫖怪。',
        prompt: "根据上下文，选出画线词汇 'Freeloader' 最准确的意思。",
        options: [
          { key: 'A', en: 'someone who takes things without paying', cn: '白吃白拿、长期蹭别人的人', correct: true, reason: 'freeloader 指占别人便宜却不肯掏钱的人，重点在「白拿」。' },
          { key: 'B', en: 'someone who works for free', cn: '免费出力打工的人', correct: false, reason: '免费干活是 volunteer；freeloader 是白拿好处。' },
          { key: 'C', en: 'a very generous person', cn: '特别大方的人', correct: false, reason: '这词是骂人的，和「大方」完全相反。' }
        ],
        analysis: 'freeloader 是「白嫖怪」。他吃的是她们的饭，也是她们的忍耐。',
        wrongFeedback: '你听成免费打工，还替他辩了两句，他当天又打包了两份饭，气血 -10。',
        afterCorrect: '姜黎把话说得很客气：「下周我们要用客厅排练。」那人愣了一下，第二天就搬走了。'
      },
      {
        plotDescription: '夜里，沈知夏在手机上填那间房的预订信息，页面跳出一个陌生的付款链接。',
        line: "The deposit link goes to a personal account. This is a scam.",
        lineCn: '定金链接指向一个私人账户。这是个骗局。',
        prompt: "根据上下文，选出画线词汇 'Scam' 最准确的意思。",
        options: [
          { key: 'A', en: 'a trick to steal your money', cn: '骗局、骗钱的套路', correct: true, reason: 'scam 指用欺骗手段拿走你的钱，越像机会越可能是坑。' },
          { key: 'B', en: 'a very hard exam', cn: '一场很难的考试', correct: false, reason: 'scam 不是考试，它只要你掏钱。' },
          { key: 'C', en: 'a special discount for new users', cn: '给新用户的特别折扣', correct: false, reason: '折扣让你少付钱，scam 让你白付钱。' }
        ],
        analysis: 'scam 是「骗局」。她太熟悉这套话术：先给你希望，再让你先付钱。',
        wrongFeedback: '你信了那是折扣，差点点了确认，姜黎一把按住你的手机，气血 -10。',
        afterCorrect: '她关了页面，报了警。回身看见沈知夏的手还在抖，就把她的手包在自己手心里。'
      },
      {
        plotDescription: '第二天，银行短信来了：上个月分期的最低还款还没结清。',
        line: "We're already in debt from that deposit. We can't lose another cent.",
        lineCn: '那笔定金已经让我们背上债务了。一分钱都不能再丢。',
        prompt: "根据上下文，选出画线词汇 'Debt' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you owe and must pay back', cn: '债务、欠下要还的钱', correct: true, reason: 'debt 是欠款，可以是借的钱，也可以是分期。' },
          { key: 'B', en: 'a small mistake in work', cn: '工作上的一个小错误', correct: false, reason: '错误是 mistake；debt 指的是欠的钱。' },
          { key: 'C', en: 'an agreement to meet someone', cn: '和别人见面的约定', correct: false, reason: '约定是 appointment；debt 是财务上的亏欠。' }
        ],
        analysis: 'debt 是「债务」。她说得很稳，可「不能丢一分钱」这句话本身就是压力。',
        wrongFeedback: '你听成小错误，还说改过来就好，她把银行短信举给你看，气血 -10。',
        afterCorrect: '沈知夏吸了口气：「那我去接配音的活，一天一条也行。」姜黎说：「我陪你。两个人快一点。」'
      }
    ],
    completeText: '第三十二章结束。踩过一个坑之后，她们学会先看合同，再看照片。'
  },
  {
    id: 'df_33',
    index: 33,
    title: '第 33 章 · 第一笔真的钱',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '姜黎的新片尾款拖了两个月，终于在周四到账。那天晚上，两个人把账单摊在餐桌上，一张一张对。这是她们第一次一起看钱。',
    questions: [
      {
        plotDescription: '手机屏幕上跳出一条入账提醒，姜黎看了很久。',
        line: "My paycheck came in. First time in four months it looks like a real number.",
        lineCn: '我的薪水到账了。四个月来第一次像个真的数字。',
        prompt: "根据上下文，选出画线词汇 'Paycheck' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money you receive for your work', cn: '薪水、工资（到手的那笔钱）', correct: true, reason: 'paycheck 指发到手的工资，常带「终于有钱了」的语气。' },
          { key: 'B', en: 'a check used to pay in a shop', cn: '在商店付款用的支票', correct: false, reason: '付款支票是 cheque；paycheck 是薪水。' },
          { key: 'C', en: 'a fine you must pay for breaking a rule', cn: '违规要交的罚款', correct: false, reason: '罚款是 fine；paycheck 是收入。' }
        ],
        analysis: 'paycheck 是「薪水」。四个月三个字，比数字本身更重。',
        wrongFeedback: '你听成罚款，还问她犯了什么事，她把手机扣在桌上，气血 -10。',
        afterCorrect: '沈知夏把计算器推过来：「先算什么？」姜黎说：「先算必须付的。」'
      },
      {
        plotDescription: '桌上摊着水费、电费、网费，还有一张物业的单子。',
        line: "Bills first, then food, then everything else. That's the only order that works.",
        lineCn: '先付账单，再买吃的，剩下的才轮别的。只有这个顺序管用。',
        prompt: "根据上下文，选出画线词汇 'Bills' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you must pay for services like water and power', cn: '账单、水电等必须付的费用', correct: true, reason: 'bills 就是每月要交的水电、网络等费用单。' },
          { key: 'B', en: 'paper money in your pocket', cn: '口袋里的纸币', correct: false, reason: '纸币是 cash；bills 是待付的账。' },
          { key: 'C', en: 'proposals for new laws', cn: '新的法律提案', correct: false, reason: 'bill 有议案义，但这里说的是生活账单。' }
        ],
        analysis: 'bills 是「账单」。先把必须付的划掉，剩下的数字才让人敢看。',
        wrongFeedback: '你听成法律提案，还问她要不要投票，她把水费单推到你面前，气血 -10。',
        afterCorrect: '两个人一笔一笔勾掉。最后剩下两千一，姜黎在纸上写：「可以买一件大衣了。」沈知夏笑了。'
      },
      {
        plotDescription: '第二天，楼下的小面馆只收现金，老板娘抱歉地笑。',
        line: "Some places only take cash. Keep two hundred in the drawer.",
        lineCn: '有些地方只收现金。抽屉里留两百。',
        prompt: "根据上下文，选出画线词汇 'Cash' 最准确的意思。",
        options: [
          { key: 'A', en: 'money in coins and notes', cn: '现金、纸币和硬币', correct: true, reason: 'cash 是能直接递到手里的实物钱，与转账相对。' },
          { key: 'B', en: 'money in a bank account', cn: '银行账户里的钱', correct: false, reason: '那是 balance；cash 是现金。' },
          { key: 'C', en: 'a credit card limit', cn: '信用卡额度', correct: false, reason: '额度是 limit；cash 是现钱。' }
        ],
        analysis: 'cash 是「现金」。她连这种小事都想到了，说明真的开始过日子。',
        wrongFeedback: '你听成账户余额，还说我查一下，老板娘在柜台后面笑，气血 -10。',
        afterCorrect: '沈知夏从抽屉里数出两张，塞进外套内袋。姜黎说：「别全花完。」她说：「留着买面。」'
      },
      {
        plotDescription: '临走前，姜黎接到一个电话，是银行的贷款推销。',
        line: "We're not taking a loan for a sofa. Absolutely not.",
        lineCn: '我们不会为了一个沙发去贷款。绝对不行。',
        prompt: "根据上下文，选出画线词汇 'Loan' 最准确的意思。",
        options: [
          { key: 'A', en: 'money borrowed that you must pay back', cn: '贷款、借来要还的钱', correct: true, reason: 'loan 是借来的钱，通常带利息和还款期限。' },
          { key: 'B', en: 'money you receive for work', cn: '工作得到的钱', correct: false, reason: '工资是 salary；loan 是要还的。' },
          { key: 'C', en: 'a gift that never has to be returned', cn: '不用还的礼物', correct: false, reason: '礼物是 gift；loan 必须还。' }
        ],
        analysis: 'loan 是「贷款」。为一个沙发背上债，是她们都不肯点头的事。',
        wrongFeedback: '你听成礼物，还问是谁送的，她按下挂断键，气血 -10。',
        afterCorrect: '挂了电话，她看着那张空落落的客厅角落，说：「先坐地板。等我们攒够了再买。」'
      }
    ],
    completeText: '第三十三章结束。钱不多，但每一笔都清楚，这让她们睡得踏实。'
  },
  {
    id: 'df_34',
    index: 34,
    title: '第 34 章 · 值不值得',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '入冬前，姜黎开始记账，连一颗白菜都写。沈知夏起初笑她抠，直到看见那个本子最后一页写着一行字：「阳台，朝南，明年春天。」',
    questions: [
      {
        plotDescription: '超市里，姜黎拿着两包咖啡比了很久，最后放回了贵的那包。',
        line: "I'm not cheap. I'm careful. There's a difference.",
        lineCn: '我不是抠门。我是谨慎。这不一样。',
        prompt: "根据上下文，选出画线词汇 'Cheap' 最准确的意思。",
        options: [
          { key: 'A', en: 'unwilling to spend money', cn: '抠门、舍不得花钱', correct: true, reason: '形容人时 cheap 是「小气」，不只是价格便宜。' },
          { key: 'B', en: 'low in price and good value', cn: '价格便宜、很划算', correct: false, reason: '这是 cheap 形容商品的义，但形容人是「抠」。' },
          { key: 'C', en: 'poor in quality', cn: '质量低劣', correct: false, reason: '质量差是 cheaply made；这里说的是人舍不得花钱。' }
        ],
        analysis: 'cheap 形容人是「抠门」。她急着分辨，因为省钱和省自己不是一回事。',
        wrongFeedback: '你听成价格便宜，还夸她会买东西，她把咖啡放回货架，气血 -10。',
        afterCorrect: '沈知夏把贵的那包又拿下来，放进篮子：「这个我付。」姜黎看她：「你哪来的钱？」「配音的尾款。」'
      },
      {
        plotDescription: '结账时，沈知夏看着总额，手指在屏幕上算了算。',
        line: "We can't afford it this month, but we can afford it next month.",
        lineCn: '这个月我们负担不起，但下个月可以。',
        prompt: "根据上下文，选出画线词汇 'Afford' 最准确的意思。",
        options: [
          { key: 'A', en: 'to have enough money for something', cn: '负担得起、有钱支付', correct: true, reason: 'afford 强调的是「钱够不够」，不是想不想。' },
          { key: 'B', en: 'to avoid something unpleasant', cn: '避开不愉快的事', correct: false, reason: '避开是 avoid，拼写很像但意思不同。' },
          { key: 'C', en: 'to borrow something from a friend', cn: '向朋友借东西', correct: false, reason: '借是 borrow；afford 是自己付得起。' }
        ],
        analysis: 'afford 是「负担得起」。她把「这个月」和「下个月」分得很清楚，这是成年人的诚实。',
        wrongFeedback: '你听成避开，还问她在躲什么，收银员等着扫码，气血 -10。',
        afterCorrect: '姜黎点头，把东西放回去两样，只留下咖啡。她说：「下个月买。说好了。」'
      },
      {
        plotDescription: '回到家，沈知夏把新买的床垫铺开，往上一躺。',
        line: "Three hundred for a decent mattress? Worth it. My back says thank you.",
        lineCn: '三百块买个像样的床垫？值了。我的背在谢谢你。',
        prompt: "根据上下文，选出画线词汇 'Worth it' 最准确的意思。",
        options: [
          { key: 'A', en: 'good enough to justify the money or effort', cn: '值了、花的钱或力气不亏', correct: true, reason: 'worth it 表示付出的代价换来了足够的回报。' },
          { key: 'B', en: 'too expensive to buy', cn: '贵到买不起', correct: false, reason: '太贵是 overpriced；worth it 恰恰是「值」。' },
          { key: 'C', en: 'free of charge', cn: '免费', correct: false, reason: '免费是 free；worth it 表示值得付这个钱。' }
        ],
        analysis: 'worth it 是「值了」。三百块换个能睡好的背，是她们算得最清楚的一笔账。',
        wrongFeedback: '你听成太贵，还说那我们退了吧，她躺在床上不想动，气血 -10。',
        afterCorrect: '姜黎也躺下来，两个人并排看着天花板。她说：「这个可以写进账本，标一个星。」'
      },
      {
        plotDescription: '月底，沈知夏拿回一份配音合同，说以后每周有两天要去录音棚。',
        line: "I picked up a side hustle. Dubbing ads pays better than falling off a horse.",
        lineCn: '我接了个副业。配广告比从马上摔下来赚得多。',
        prompt: "根据上下文，选出画线词汇 'Side hustle' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra work you do besides your main job', cn: '副业、主业之外接的活', correct: true, reason: 'side hustle 指为多赚点钱而做的第二份工作。' },
          { key: 'B', en: 'a hobby that costs money', cn: '花钱的爱好', correct: false, reason: '爱好是 hobby；side hustle 是为了赚钱。' },
          { key: 'C', en: 'a quick walk around the block', cn: '在街区里快走一圈', correct: false, reason: '散步是 walk；hustle 在这里指营生。' }
        ],
        analysis: 'side hustle 是「副业」。她把它说得像玩笑，其实是想替这个家多扛一点。',
        wrongFeedback: '你听成散步，还问要不要一起走，她把合同拍在你手里，气血 -10。',
        afterCorrect: '姜黎翻开合同看了两页，抬头说：「这个价格，他们占你便宜了。」沈知夏笑：「你怎么什么都知道。」'
      }
    ],
    completeText: '第三十四章结束。她们开始算得清每一块钱，也开始算得清什么值得。'
  },
  {
    id: 'df_35',
    index: 35,
    title: '第 35 章 · 存钱是为了什么',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '年底，两个人第一次坐下来谈「以后」。姜黎把账本翻到最后，写了一行「存款」，数字很小，后面画了个圈。沈知夏看着那个圈，忽然想起自己十九岁那年的工资条。',
    questions: [
      {
        plotDescription: '她说起自己刚入行时的那两年。',
        line: "I worked for minimum wage for two years. I still count every note I spend.",
        lineCn: '我拿最低工资干了两年。现在每花一张钱我都要数。',
        prompt: "根据上下文，选出画线词汇 'Minimum wage' 最准确的意思。",
        options: [
          { key: 'A', en: 'the lowest pay allowed by law', cn: '最低工资、法律规定的工资下限', correct: true, reason: 'minimum wage 是法定最低报酬，常指很辛苦却赚很少。' },
          { key: 'B', en: 'the highest pay in a company', cn: '公司里最高的工资', correct: false, reason: '最高是 maximum；minimum 正好相反。' },
          { key: 'C', en: 'a wage paid only once a year', cn: '一年只发一次的工资', correct: false, reason: '年薪是 annual salary；minimum wage 是工资标准。' }
        ],
        analysis: 'minimum wage 是「最低工资」。她说这句话时没有抱怨，只是把过去摆出来。',
        wrongFeedback: '你听成最高工资，还夸她那两年赚得多，她把账本合上了，气血 -10。',
        afterCorrect: '姜黎拿起笔，在「存款」那一行下面写：「不是为了省，是为了能选。」'
      },
      {
        plotDescription: '第二天，银行 App 弹出一条提醒，红色的。',
        line: "My account hit overdraft again. Nine yuan short. Nine.",
        lineCn: '我的账户又透支了。差九块。就九块。',
        prompt: "根据上下文，选出画线词汇 'Overdraft' 最准确的意思。",
        options: [
          { key: 'A', en: 'spending more than your account holds', cn: '透支、花超了账户余额', correct: true, reason: 'overdraft 指账户余额不足还继续扣款，会欠银行钱。' },
          { key: 'B', en: 'a sudden increase in salary', cn: '工资突然上涨', correct: false, reason: '涨薪是 raise；overdraft 是透支。' },
          { key: 'C', en: 'a draft of a document', cn: '文件的一份草稿', correct: false, reason: '草稿是 draft；overdraft 是账户透支。' }
        ],
        analysis: 'overdraft 是「透支」。差九块这句话，比差九百还难说出口。',
        wrongFeedback: '你听成涨工资，还说恭喜，她把手机屏幕转向你，气血 -10。',
        afterCorrect: '沈知夏转了十块过去，备注写「买颗糖」。姜黎看着那行字，笑了很久。'
      },
      {
        plotDescription: '周末，两个人去看了一间带阳台的房子，站在空屋里没说话。',
        line: "We're saving up for this. Six months, maybe eight. But this one.",
        lineCn: '我们在为这个存钱。六个月，也许八个月。但就是这一间。',
        prompt: "根据上下文，选出画线词汇 'Save up' 最准确的意思。",
        options: [
          { key: 'A', en: 'to keep money over time for something you want', cn: '存钱、一点点攒起来', correct: true, reason: 'save up 强调为某个目标慢慢积累。' },
          { key: 'B', en: 'to spend money quickly', cn: '快速把钱花掉', correct: false, reason: '花掉是 spend，正好相反。' },
          { key: 'C', en: 'to put a file on a computer', cn: '把文件存到电脑里', correct: false, reason: '保存文件是 save a file；save up 是攒钱。' }
        ],
        analysis: 'save up 是「存钱」。她说「就是这一间」，是把模糊的未来钉成了具体的目标。',
        wrongFeedback: '你听成存文件，还问存在哪个盘，她扶着阳台栏杆叹气，气血 -10。',
        afterCorrect: '沈知夏站在阳台中间，比了一下：「这里能放两把椅子。」姜黎说：「还能放一盆花。」'
      },
      {
        plotDescription: '回家的地铁上，姜黎忽然说起一个提议。',
        line: "Instead of a coat, let's invest in the studio. It pays back longer.",
        lineCn: '别买大衣了，我们投资工作室吧。它回报得更久。',
        prompt: "根据上下文，选出画线词汇 'Invest' 最准确的意思。",
        options: [
          { key: 'A', en: 'to put money into something to get more later', cn: '投资、把钱投进去换取未来的回报', correct: true, reason: 'invest 的核心是「现在投入，将来获益」。' },
          { key: 'B', en: 'to spend money on something you will never use', cn: '把钱花在永远用不上的东西上', correct: false, reason: '那是浪费；invest 是有回报预期的。' },
          { key: 'C', en: 'to borrow money from a bank', cn: '向银行借钱', correct: false, reason: '借钱是 borrow；invest 是投入自己的钱。' }
        ],
        analysis: 'invest 是「投资」。她把大衣换成一个工作室，是把眼光放到了更远的地方。',
        wrongFeedback: '你听成浪费，还劝她别乱花钱，她把手机里的计划表翻给你看，气血 -10。',
        afterCorrect: '沈知夏看着那份计划表，第一行写着「工作室：一间，两台机器，一个人」。她说：「那个人是我吗？」姜黎说：「你愿意的话。」'
      }
    ],
    completeText: '第三十五章结束。存钱不是为了攒数字，是为了攒一个能自己决定的生活。'
  },
  {
    id: 'df_36',
    index: 36,
    title: '第 36 章 · 一张收据',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '三月，工作室的账要报了。沈知夏抱着一摞单据坐在地板上，一张张摊开，像在拼一副没有图的拼图。姜黎端着茶过来，看见她眉头皱成一团。',
    questions: [
      {
        plotDescription: '她翻到一张税单，看了很久，忽然笑了一下。',
        line: "Freelancers pay tax too. Nobody tells you that when you're nineteen.",
        lineCn: '自由职业者也要交税。十九岁的时候没人告诉你这些。',
        prompt: "根据上下文，选出画线词汇 'Tax' 最准确的意思。",
        options: [
          { key: 'A', en: 'money you must pay to the government', cn: '税、必须交给政府的钱', correct: true, reason: 'tax 是按收入或消费向政府缴纳的钱。' },
          { key: 'B', en: 'a tip given to a waiter', cn: '给服务员的小费', correct: false, reason: '小费是 tip；tax 是交给政府的。' },
          { key: 'C', en: 'a discount on a train ticket', cn: '火车票的折扣', correct: false, reason: '折扣是 discount；tax 是必须缴的。' }
        ],
        analysis: 'tax 是「税」。十九岁那年没人教她这些，现在她自己学会了。',
        wrongFeedback: '你听成小费，还问给谁，她把税单举到你眼前，气血 -10。',
        afterCorrect: '姜黎坐下，把另一摞单据推过来：「我算这边的。」两个人一左一右，像在拆一个共同的难题。'
      },
      {
        plotDescription: '报完税的第三周，手机弹出一条入账。',
        line: "The refund came. Six hundred and forty. I checked it twice.",
        lineCn: '退款到了。六百四十。我查了两遍。',
        prompt: "根据上下文，选出画线词汇 'Refund' 最准确的意思。",
        options: [
          { key: 'A', en: 'money given back to you', cn: '退款、退回给你的钱', correct: true, reason: 'refund 是付多了或退货之后退回的钱。' },
          { key: 'B', en: 'money you owe the government', cn: '你欠政府的钱', correct: false, reason: '欠税是 tax owed；refund 是退回。' },
          { key: 'C', en: 'a payment for extra work', cn: '额外工作的报酬', correct: false, reason: '那是 bonus；refund 是退回的钱。' }
        ],
        analysis: 'refund 是「退款」。六百四十不算多，但那是她们一张张收据换来的。',
        wrongFeedback: '你听成欠税，还紧张地问要补多少，她把入账截图给你看，气血 -10。',
        afterCorrect: '沈知夏看着那个数字，说：「刚好够买工作室的第二台机器。」姜黎说：「那就不算意外之财了。」'
      },
      {
        plotDescription: '买机器那天，店员问要不要发票，沈知夏立刻点头。',
        line: "Keep the receipt. We need it for the studio's books.",
        lineCn: '把收据留好。工作室的账要用。',
        prompt: "根据上下文，选出画线词汇 'Receipt' 最准确的意思。",
        options: [
          { key: 'A', en: 'a paper proving you paid', cn: '收据、付款凭证', correct: true, reason: 'receipt 就是买东西后拿到的付款证明。' },
          { key: 'B', en: 'a recipe for cooking', cn: '做菜的食谱', correct: false, reason: '食谱是 recipe，拼写接近但不同。' },
          { key: 'C', en: 'a message saying thank you', cn: '一封道谢的信息', correct: false, reason: '道谢是 thanks；receipt 是凭证。' }
        ],
        analysis: 'receipt 是「收据」。她把它折好放进文件夹，动作比谁都熟练。',
        wrongFeedback: '你听成食谱，还问这道菜怎么做，店员忍着笑，气血 -10。',
        afterCorrect: '回程的路上，姜黎说：「你以前连发票都懒得拿。」沈知夏说：「以前我一个人，账算不清也没人问。」'
      },
      {
        plotDescription: '晚上点外卖，雨下得很大，送餐的人浑身湿透。',
        line: "Tip him well. It's raining and he came up six floors.",
        lineCn: '多给他点小费。下这么大雨，还爬了六层楼。',
        prompt: "根据上下文，选出画线词汇 'Tip' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money given for good service', cn: '小费、因服务好多给的钱', correct: true, reason: 'tip 是顾客额外给服务人员的钱。' },
          { key: 'B', en: 'a piece of advice', cn: '一条建议', correct: false, reason: 'tip 有建议义，但这里是给小费。' },
          { key: 'C', en: 'the end of a pointed object', cn: '尖东西的末端', correct: false, reason: '那是 tip 的字面义；这里谈的是钱。' }
        ],
        analysis: 'tip 是「小费」。她记得自己也曾浑身湿透地站在别人门口。',
        wrongFeedback: '你听成建议，还认真请教他送餐技巧，姜黎把零钱塞进你手里，气血 -10。',
        afterCorrect: '送餐的人连说了三声谢谢。门关上后，姜黎说：「我们以后有钱了，也要记得这个。」'
      }
    ],
    completeText: '第三十六章结束。钱的事终于不再可怕，因为有人一起算。'
  },
  {
    id: 'df_37',
    index: 37,
    title: '第 37 章 · 第一个员工',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '春天，工作室真的租下来了，二十平米，一扇朝南的窗。第一个来应聘的是陆晨，简历只有一页，最后一行写着：什么都能干，不挑活。姜黎看完，把简历递给沈知夏。',
    questions: [
      {
        plotDescription: '沈知夏把简历放在桌上，笔尖停在签名栏。',
        line: "Let's hire him. He's the only one who never asked for a title.",
        lineCn: '雇他吧。他是唯一一个从没问过职位的人。',
        prompt: "根据上下文，选出画线词汇 'Hire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to give someone a job', cn: '雇用、给人一份工作', correct: true, reason: 'hire 是雇主把某人招进来工作。' },
          { key: 'B', en: 'to pay someone for a service you used', cn: '为用过的服务付钱', correct: false, reason: '那是 pay；hire 是招人。' },
          { key: 'C', en: 'to rent a car for a day', cn: '短租一天汽车', correct: false, reason: '租车是 rent；hire 在英式里有租用义，但这里指雇人。' }
        ],
        analysis: 'hire 是「雇用」。她签下名字的时候，手比签自己的合同还稳。',
        wrongFeedback: '你听成付钱，还问该给他多少，陆晨在门外等得直搓手，气血 -10。',
        afterCorrect: '门一开，陆晨第一句就问：「有没有试用期？」姜黎说：「三个月。」他说：「行，那我先干活。」'
      },
      {
        plotDescription: '第二个月，一个兼职的剪辑交片拖了十天，还改了别人的文件。',
        line: "We may have to fire someone. I hate that word, but I hate late work more.",
        lineCn: '我们可能得解雇一个人。我讨厌这个词，但我更讨厌拖片。',
        prompt: "根据上下文，选出画线词汇 'Fire' 最准确的意思。",
        options: [
          { key: 'A', en: 'to remove someone from their job', cn: '解雇、炒掉某人', correct: true, reason: 'fire 是雇主主动让人离开岗位，语气比 dismiss 更口语。' },
          { key: 'B', en: 'to burn something with flames', cn: '用火烧东西', correct: false, reason: 'fire 本义是火，但用在人身上是解雇。' },
          { key: 'C', en: 'to start a machine', cn: '启动一台机器', correct: false, reason: '启动是 start；fire someone 是炒人。' }
        ],
        analysis: 'fire 是「解雇」。她说「我讨厌这个词」，说明她知道自己手里握着别人的生活。',
        wrongFeedback: '你听成点火，还去找打火机，姜黎把文件合上了，气血 -10。',
        afterCorrect: '最后她们没有当场辞退，而是谈了一次。那人自己说：「我不适合。」走的时候，把工位收拾得很干净。'
      },
      {
        plotDescription: '同一个月，另一个女孩辞掉了原来的经纪公司，来投简历。',
        line: "She quit her agency job to join us. That's a real bet on two people.",
        lineCn: '她辞了经纪公司的工作来加入我们。这是真的把赌注押在两个人身上。',
        prompt: "根据上下文，选出画线词汇 'Quit' 最准确的意思。",
        options: [
          { key: 'A', en: 'to leave a job or stop doing something', cn: '辞职、主动停止做某事', correct: true, reason: 'quit 是自己主动离开，和义务无关。' },
          { key: 'B', en: 'to be forced to leave by the boss', cn: '被老板强制要求离开', correct: false, reason: '那是 fire；quit 是主动走。' },
          { key: 'C', en: 'to take a short break from work', cn: '工作中短暂休息', correct: false, reason: '休息是 take a break；quit 是辞职。' }
        ],
        analysis: 'quit 是「辞职」。别人把稳定交出来，她们更不敢敷衍。',
        wrongFeedback: '你听成被开除，还去问她做错了什么，她把简历收回去了，气血 -10。',
        afterCorrect: '姜黎看完简历，问了唯一一个问题：「如果这里半年发不出工资，你怎么办？」女孩说：「那我先做别的，等你们缓过来。」'
      },
      {
        plotDescription: '半年后，工作室第一次开会，桌上放着一张新的岗位表。',
        line: "A promotion isn't a reward. It's more work and less sleep.",
        lineCn: '升职不是奖励。是更多的活、更少的睡眠。',
        prompt: "根据上下文，选出画线词汇 'Promotion' 最准确的意思。",
        options: [
          { key: 'A', en: 'a move to a higher position at work', cn: '升职、被提到更高的职位', correct: true, reason: 'promotion 是职位上升，通常也带来更多责任。' },
          { key: 'B', en: 'a discount on a product', cn: '商品的促销折扣', correct: false, reason: '促销也叫 promotion，但这里说的是职位。' },
          { key: 'C', en: 'a speech to advertise a film', cn: '为电影做的宣传演讲', correct: false, reason: '宣传也是 promotion；这里指的是升职。' }
        ],
        analysis: 'promotion 是「升职」。她把话说得很白，是不想让任何人误以为这是一份礼物。',
        wrongFeedback: '你听成打折促销，还问打几折，会议室里几个人低头笑，气血 -10。',
        afterCorrect: '陆晨举手：「那我升不升？」姜黎说：「你升。从今天起你管钱。」他一下坐直了：「这个我不敢。」'
      }
    ],
    completeText: '第三十七章结束。二十平米的小屋，开始装下别人的饭碗。'
  },
  {
    id: 'df_38',
    index: 38,
    title: '第 38 章 · 周五的死线',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '工作室接了一个品牌的短片，客户要求多，时间短。连着两周，灯都亮到凌晨。沈知夏的桌上摆着三杯冷掉的咖啡，姜黎的椅子上搭着一条毯子。',
    questions: [
      {
        plotDescription: '凌晨一点，沈知夏揉着眼睛从剪辑台前站起来。',
        line: "Three weeks of overtime. I'm not proud of it, but I'm not sorry either.",
        lineCn: '连了三周加班。我不骄傲，但也不后悔。',
        prompt: "根据上下文，选出画线词汇 'Overtime' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra hours worked beyond normal time', cn: '加班、超出正常工时的工作', correct: true, reason: 'overtime 指在正常工作时间之外继续工作。' },
          { key: 'B', en: 'time spent on holiday', cn: '度假的时间', correct: false, reason: '假期是 holiday；overtime 是加班。' },
          { key: 'C', en: 'a clock that runs too fast', cn: '走得过快的一只钟', correct: false, reason: '没有这个意思；overtime 与工时有关。' }
        ],
        analysis: 'overtime 是「加班」。她说不骄傲也不后悔，是因为这单活救了工作室。',
        wrongFeedback: '你听成度假，还问去哪儿玩，她指着满桌的素材，气血 -10。',
        afterCorrect: '姜黎把毯子披到她肩上：「再两天。交完这一版，我们放一天假。」'
      },
      {
        plotDescription: '客户的助理第三次打来电话，说交片时间要提前。',
        line: "The deadline is Friday, and the client just moved it up twice.",
        lineCn: '死线是周五，客户刚把它往前挪了两次。',
        prompt: "根据上下文，选出画线词汇 'Deadline' 最准确的意思。",
        options: [
          { key: 'A', en: 'the latest time by which work must be finished', cn: '死线、必须完成的最后期限', correct: true, reason: 'deadline 是不可再拖的截止时间。' },
          { key: 'B', en: 'a line drawn across a page', cn: '在纸上画的一条线', correct: false, reason: '字面是「死线」，但实际指截止期限。' },
          { key: 'C', en: 'the end of a person\'s life', cn: '一个人生命的终点', correct: false, reason: 'death 才是死亡；deadline 是工作期限。' }
        ],
        analysis: 'deadline 是「死线」。挪两次，等于把两个通宵又压成一夜。',
        wrongFeedback: '你听成画线，还问画在哪儿，助理在电话那头叹气，气血 -10。',
        afterCorrect: '姜黎挂了电话，只说：「那就不睡。」沈知夏看了她一眼，把咖啡换成了热水。'
      },
      {
        plotDescription: '第二天下午，客户在群里发来一长串修改意见。',
        line: "The client wants a rewrite. The client always wants a rewrite.",
        lineCn: '客户要重写。客户永远要重写。',
        prompt: "根据上下文，选出画线词汇 'Client' 最准确的意思。",
        options: [
          { key: 'A', en: 'a person or company that pays for your work', cn: '客户、出钱的委托方', correct: true, reason: 'client 是购买服务的人，和 customer 类似但更偏专业服务。' },
          { key: 'B', en: 'a close friend who helps you', cn: '帮你的好朋友', correct: false, reason: '朋友是 friend；client 是付钱的委托方。' },
          { key: 'C', en: 'a person who sells you food', cn: '卖给你食物的人', correct: false, reason: '那是 seller；client 是买方。' }
        ],
        analysis: 'client 是「客户」。重复一遍这句话，已经是最克制的抱怨。',
        wrongFeedback: '你听成朋友，还问要不要请他来吃饭，姜黎把手机递给你，气血 -10。',
        afterCorrect: '沈知夏把意见打印出来，一条条标号。她说：「第三条和第七条是冲突的。」姜黎说：「那就问。」'
      },
      {
        plotDescription: '晚上八点，两个人站在会议室门口，手里各拿一杯咖啡。',
        line: "The meeting is at eight. Bring coffee, not opinions.",
        lineCn: '会议八点开始。带咖啡，别带意见。',
        prompt: "根据上下文，选出画线词汇 'Meeting' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned time when people come together to talk', cn: '会议、约好一起谈事', correct: true, reason: 'meeting 是事先安排好的碰面与讨论。' },
          { key: 'B', en: 'a place where two roads cross', cn: '两条路交叉的地方', correct: false, reason: '那是 junction；meeting 是会议。' },
          { key: 'C', en: 'a sports competition', cn: '一场体育比赛', correct: false, reason: '比赛是 match；meeting 是开会。' }
        ],
        analysis: 'meeting 是「会议」。她说别带意见，其实是让沈知夏先听完再开口。',
        wrongFeedback: '你听成路口，还问在哪个十字路口，姜黎推开门先进去了，气血 -10。',
        afterCorrect: '会议开了四十分钟。最后客户说：「你们比我们更懂这个片子。」那一刻，两个人都没笑，只是互相看了一眼。'
      }
    ],
    completeText: '第三十八章结束。她们熬过的夜，最后都变成了别人嘴里的一句「专业」。'
  },
  {
    id: 'df_39',
    index: 39,
    title: '第 39 章 · 一单生意',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '那支短片上线后，播放量比预期高三倍。找上门的合作多了起来，也有人来挖人。工作室第一次面临选择：接大单，还是守住自己做的东西。',
    questions: [
      {
        plotDescription: '桌上摊着三份提案，最厚的那份预算最高。',
        line: "This project could keep us alive for a year. It could also eat us alive.",
        lineCn: '这个项目能养活我们一年。也能把我们整个吞掉。',
        prompt: "根据上下文，选出画线词汇 'Project' 最准确的意思。",
        options: [
          { key: 'A', en: 'a planned piece of work with a goal', cn: '项目、有目标的计划性工作', correct: true, reason: 'project 指有明确目标和期限的一项工作。' },
          { key: 'B', en: 'a machine that shows films on a wall', cn: '把影像投到墙上的机器', correct: false, reason: '投影仪是 projector；project 是项目。' },
          { key: 'C', en: 'a sudden increase in price', cn: '价格的突然上涨', correct: false, reason: '上涨是 rise；project 是工作项目。' }
        ],
        analysis: 'project 是「项目」。她说「吞掉」，是因为知道大单也会反过来控制人。',
        wrongFeedback: '你听成投影仪，还问要不要买一台，姜黎把那摞提案推到你面前，气血 -10。',
        afterCorrect: '两个人花了两个晚上把三份提案读完。最后姜黎说：「选第二份。钱少，但不用改我们的东西。」'
      },
      {
        plotDescription: '另一件事更麻烦：合作方临时换掉了男主，已经拍的素材全废。',
        line: "The actor got fired mid-shoot. We lost two weeks and all our coverage.",
        lineCn: '那个演员拍到一半被炒了。我们丢了两周，还有全部素材。',
        prompt: "根据上下文，选出画线词汇 'Fired' 最准确的意思。",
        options: [
          { key: 'A', en: 'removed from a job by the employer', cn: '被炒、被雇主解雇', correct: true, reason: 'be fired 是被动语态，指被公司辞退。' },
          { key: 'B', en: 'shot with a gun', cn: '被枪击中', correct: false, reason: 'fired 有开枪义，但 mid-shoot 里说的是被解雇。' },
          { key: 'C', en: 'given a warm welcome', cn: '受到热情欢迎', correct: false, reason: '欢迎是 welcomed；fired 是解雇。' }
        ],
        analysis: 'fired 是「被炒」。这次不是她做决定，而是别人一句话废掉了她们两周。',
        wrongFeedback: '你听成被枪打，还问伤得重不重，制片人在旁边一脸茫然，气血 -10。',
        afterCorrect: '沈知夏沉默了一会儿，说：「那就重拍。反正我们年轻。」姜黎抬头：「这句话很贵。」「我知道。」'
      },
      {
        plotDescription: '凌晨，两个人坐在楼梯口，谁都没上楼。',
        line: "Business is not about being liked. I learned that the slow way.",
        lineCn: '做生意不是为了让别人喜欢你。这一点我学得很慢。',
        prompt: "根据上下文，选出画线词汇 'Business' 最准确的意思。",
        options: [
          { key: 'A', en: 'the activity of making and selling things', cn: '生意、商业活动', correct: true, reason: 'business 指经营买卖、提供服务的活动。' },
          { key: 'B', en: 'a busy schedule', cn: '繁忙的日程', correct: false, reason: '忙是 busy；business 是生意。' },
          { key: 'C', en: 'a personal matter that is private', cn: '私人的事情', correct: false, reason: 'business 有「事情」义，但这里说的是经营。' }
        ],
        analysis: 'business 是「生意」。她学会了不讨好，也学会了为这个决定负责。',
        wrongFeedback: '你听成日程满，还问她明天几点开会，她把外套裹紧了，气血 -10。',
        afterCorrect: '沈知夏靠在她肩上：「那你现在还怕别人不喜欢你吗？」姜黎想了想：「怕。但我更怕我们自己不喜欢自己。」'
      },
      {
        plotDescription: '一周后，对方约在茶室谈最终条款，桌上放着一支笔。',
        line: "If they sign today, we have a deal. If not, we walk and keep the footage.",
        lineCn: '如果他们今天签，我们就成交。不签我们就走，素材留着。',
        prompt: "根据上下文，选出画线词汇 'Deal' 最准确的意思。",
        options: [
          { key: 'A', en: 'an agreement between two sides', cn: '交易、双方达成的协议', correct: true, reason: 'a deal 指双方谈成的合作条件。' },
          { key: 'B', en: 'a large amount of something', cn: '大量的某物', correct: false, reason: 'a great deal 才是「大量」；这里是一笔交易。' },
          { key: 'C', en: 'the way cards are given out in a game', cn: '牌局里发牌的动作', correct: false, reason: '发牌是 deal 的字面义；这里是成交。' }
        ],
        analysis: 'deal 是「交易」。她把退路也想好了，这才是能坐下来的底气。',
        wrongFeedback: '你听成发牌，还问要不要拿扑克，对方的手停在笔上，气血 -10。',
        afterCorrect: '对方看了她们很久，最后把笔推过来：「签吧。就按你们说的。」姜黎先看沈知夏，才伸手。'
      }
    ],
    completeText: '第三十九章结束。她们第一次不是被挑，而是被选择。'
  },
  {
    id: 'df_40',
    index: 40,
    title: '第 40 章 · 第一年的利润',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '年底，会计发来一份表：工作室第一年，扣掉所有开支，利润一万一千。数字小得可笑，但沈知夏把它打印出来，贴在了墙上。',
    questions: [
      {
        plotDescription: '会计在电话里提醒她，第九页有一条容易被忽略的条款。',
        line: "Read the contract. All of it. Even page nine, especially page nine.",
        lineCn: '把合同读完。全部读完。第九页也要看，尤其是第九页。',
        prompt: "根据上下文，选出画线词汇 'Contract' 最准确的意思。",
        options: [
          { key: 'A', en: 'a legal agreement between people or companies', cn: '合同、双方签的法律协议', correct: true, reason: 'contract 是具有法律效力的书面约定。' },
          { key: 'B', en: 'to make something smaller', cn: '使某物收缩变小', correct: false, reason: 'contract 有收缩义，但这里是合同。' },
          { key: 'C', en: 'a person you hire for a short time', cn: '短期雇佣的人', correct: false, reason: '那是 contractor；contract 是合同。' }
        ],
        analysis: 'contract 是「合同」。她吃过第九页的亏，所以这次先提醒别人。',
        wrongFeedback: '你听成收缩，还问什么东西变小了，会计在电话那头沉默，气血 -10。',
        afterCorrect: '沈知夏把第九页放大打印了一份，用红笔圈出两行。姜黎在旁边写：「这一条，当年没人告诉我。」'
      },
      {
        plotDescription: '下午，会计把年度报表发过来，最后一行用粗体标着。',
        line: "First year profit: eleven thousand. I'm framing this number.",
        lineCn: '第一年利润：一万一千。我要把这个数字裱起来。',
        prompt: "根据上下文，选出画线词汇 'Profit' 最准确的意思。",
        options: [
          { key: 'A', en: 'the money left after all costs are paid', cn: '利润、扣掉成本后剩下的钱', correct: true, reason: 'profit 是收入减掉所有支出之后的净额。' },
          { key: 'B', en: 'the total money received before costs', cn: '还没扣成本的总收入', correct: false, reason: '那是 revenue；profit 是净利润。' },
          { key: 'C', en: 'a plan for future growth', cn: '未来的增长计划', correct: false, reason: '计划是 plan；profit 是赚到的钱。' }
        ],
        analysis: 'profit 是「利润」。一万一千不多，但它是从零开始赚出来的。',
        wrongFeedback: '你听成总收入，还夸她们赚得多，会计在邮件里纠正了你，气血 -10。',
        afterCorrect: '姜黎看着墙上那张纸，忽然说：「我想把这笔钱分了。」沈知夏问：「怎么分？」「给干活的人。」'
      },
      {
        plotDescription: '发钱那天，陆晨看到自己卡上的数字，愣了三秒。',
        line: "The bonus goes to the crew. All of it. We'll eat noodles this month.",
        lineCn: '奖金给团队。全给。这个月我们吃面。',
        prompt: "根据上下文，选出画线词汇 'Bonus' 最准确的意思。",
        options: [
          { key: 'A', en: 'extra money given on top of normal pay', cn: '奖金、正常工资之外多给的钱', correct: true, reason: 'bonus 是额外的奖励性收入，常与业绩相关。' },
          { key: 'B', en: 'a tax you must pay', cn: '必须缴的税', correct: false, reason: '税是 tax；bonus 是多给的。' },
          { key: 'C', en: 'a fine for being late', cn: '迟到要交的罚款', correct: false, reason: '罚款是 fine；bonus 是奖励。' }
        ],
        analysis: 'bonus 是「奖金」。全给出去，是她们对「一起熬过夜」这件事的交代。',
        wrongFeedback: '你听成罚款，还问谁迟到了，陆晨举着手机一脸困惑，气血 -10。',
        afterCorrect: '陆晨说：「太多了。」姜黎说：「不多。你三个月没休过一天。」他低头，把手机放进口袋。'
      },
      {
        plotDescription: '晚上，两个人在小馆子吃面，姜黎说起明年的打算。',
        line: "I'll take a smaller salary so the team keeps theirs. That's the whole plan.",
        lineCn: '我拿少一点的薪资，让团队保住他们的。就这个计划。',
        prompt: "根据上下文，选出画线词汇 'Salary' 最准确的意思。",
        options: [
          { key: 'A', en: 'fixed money paid for a job, usually monthly', cn: '薪资、按月发的固定工资', correct: true, reason: 'salary 是按固定周期发的工资，和按小时算的 wage 不同。' },
          { key: 'B', en: 'money paid for a single task', cn: '完成一件活得到的单笔钱', correct: false, reason: '那是 fee；salary 是固定月薪。' },
          { key: 'C', en: 'a loan from the company', cn: '公司给的借款', correct: false, reason: '借款是 loan；salary 是劳动报酬。' }
        ],
        analysis: 'salary 是「薪资」。她把自己那份让出来，是把「我们」放在了「我」前面。',
        wrongFeedback: '你听成借款，还问要不要还利息，她把面推到你面前，气血 -10。',
        afterCorrect: '沈知夏放下筷子：「那我跟你一样。」姜黎摇头：「不用。」她说：「不是为你。是为这个工作室。」'
      }
    ],
    completeText: '第四十章结束。第一年，她们没赚到钱，赚到了一个能站住的地方。'
  },
  {
    id: 'df_41',
    index: 41,
    title: '第 41 章 · 庆功宴之后的早上',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '庆功宴散在凌晨三点。第二天早上八点，姜黎顶着宿醉坐在会议室里，面前摆着一份要通宵改完的排期。沈知夏推门进来，把一杯温水放在她手边。',
    questions: [
      {
        plotDescription: '沈知夏把水放下，声音平静得不正常。',
        line: "I'm not pissed off that you drank. I'm pissed off that you didn't call me.",
        lineCn: '我不是气你喝酒。我气的是你没给我打电话。',
        prompt: "根据上下文，选出画线词汇 'Pissed off' 最准确的意思。",
        options: [
          { key: 'A', en: 'very angry or annoyed about something', cn: '火大、非常生气', correct: true, reason: 'pissed off 是口语里很强的生气，语气比 annoyed 重得多。' },
          { key: 'B', en: 'slightly confused about what happened', cn: '对发生的事有点困惑', correct: false, reason: '困惑是 confused；这里她明确在发火。' },
          { key: 'C', en: 'a little drunk after a party', cn: '聚会后有点醉', correct: false, reason: '微醺是 tipsy；pissed off 和酒无关。' }
        ],
        analysis: 'pissed off 是「火大」。她说了两遍，第一遍否定酒，第二遍才是真正的原因——不是喝酒，是不被通知。',
        wrongFeedback: '你把她的话听成「有点醉」，还体贴地递上蜂蜜水，她盯着你看了三秒，气血 -10。',
        afterCorrect: '姜黎揉着太阳穴说：「我怕你骂我。」沈知夏说：「我更怕你倒在路上，没人知道。」'
      },
      {
        plotDescription: '姜黎解释昨晚为什么没打电话。',
        line: "I didn't call because I knew you'd freak out, and I couldn't handle that at 3 a.m.",
        lineCn: '我没打，是因为我知道你会抓狂，而凌晨三点我扛不住。',
        prompt: "根据上下文，选出画线词汇 'Freak out' 最准确的意思。",
        options: [
          { key: 'A', en: 'to suddenly panic or lose control', cn: '突然崩溃、抓狂', correct: true, reason: 'freak out 指情绪突然失控，慌乱或发火。' },
          { key: 'B', en: 'to leave quietly without telling anyone', cn: '不打招呼悄悄离开', correct: false, reason: '悄悄离开是 slip away；freak out 是情绪爆发。' },
          { key: 'C', en: 'to fall asleep very fast', cn: '很快睡着', correct: false, reason: '秒睡是 pass out；和抓狂完全是两回事。' }
        ],
        analysis: 'freak out 是「抓狂」。她说的是自己凌晨三点承受不了对方的情绪，而不是嫌对方多事。',
        wrongFeedback: '你听成她是「悄悄走了」，还追问她走去哪了，她宿醉的脸又白了一层，气血 -10。',
        afterCorrect: '沈知夏沉默了一会儿：「那下次你先发一个字，哪怕只发个句号。」'
      },
      {
        plotDescription: '会开到一半，姜黎的手在桌下发抖，笔尖在纸上划歪了。',
        line: "You're exhausted. You can't even hold the pen straight.",
        lineCn: '你精疲力尽了。连笔都拿不稳。',
        prompt: "根据上下文，选出画线词汇 'Exhausted' 最准确的意思。",
        options: [
          { key: 'A', en: 'completely tired, with no energy left', cn: '精疲力尽、一点力气都没有', correct: true, reason: 'exhausted 是 tired 的极限版，指体力精力耗尽。' },
          { key: 'B', en: 'a little bored with the meeting', cn: '对会议有点无聊', correct: false, reason: '无聊是 bored；这里说的是身体撑不住。' },
          { key: 'C', en: 'very hungry before lunch', cn: '午饭前很饿', correct: false, reason: '很饿是 starving；和精疲力尽不同。' }
        ],
        analysis: 'exhausted 是「精疲力尽」。手抖不是演出来的，是身体先替她说了实话。',
        wrongFeedback: '你听成她「有点无聊」，还提议换个话题，她连反驳的力气都没有，气血 -10。',
        afterCorrect: '姜黎想说没事，话到嘴边变成：「就闭一会儿眼，五分钟。」'
      },
      {
        plotDescription: '沈知夏伸手探她的额头，被她轻轻拍开。',
        line: "It's not a fever. It's a hangover. I drank for the whole team last night.",
        lineCn: '不是发烧，是宿醉。昨晚我替整个团队喝了。',
        prompt: "根据上下文，选出画线词汇 'Hangover' 最准确的意思。",
        options: [
          { key: 'A', en: 'the sick feeling you get after drinking too much', cn: '宿醉、喝多之后的难受', correct: true, reason: 'hangover 专指饮酒过量后第二天的头痛恶心。' },
          { key: 'B', en: 'a headache caused by too little sleep', cn: '睡眠不足引起的头痛', correct: false, reason: '缺觉的头痛不会叫 hangover，这个词和酒精绑定。' },
          { key: 'C', en: 'a cold you catch in winter', cn: '冬天得的感冒', correct: false, reason: '感冒是 cold；她额头并不烫。' }
        ],
        analysis: 'hangover 是「宿醉」。她说「替整个团队喝」，把一场庆功变成了一个人的账单。',
        wrongFeedback: '你听成她感冒了，翻出感冒药，她看着那盒药笑了一下，气血 -10。',
        afterCorrect: '沈知夏把药收回去：「会我来讲。你回家睡。」姜黎这次没争。'
      }
    ],
    completeText: '第四十一章结束。庆功宴的代价在第二天早上结算，账单是两杯温水和一个不再争辩的人。'
  },
  {
    id: 'df_42',
    index: 42,
    title: '第 42 章 · 后台与评论区',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '她们一起上了档综艺。后台人来人往，主持人刚问完那句「你们到底是什么关系」，镜头还亮着红灯。',
    questions: [
      {
        plotDescription: '一个制作人笑着走过来，寒暄里带着刺。',
        line: "She's toxic. She feeds on other people's drama and calls it content.",
        lineCn: '她有毒。靠别人的抓马活着，还管那叫内容。',
        prompt: "根据上下文，选出画线词汇 'Toxic' 最准确的意思。",
        options: [
          { key: 'A', en: 'harmful to be around, poisonous in a social way', cn: '有毒的、相处起来会伤人的', correct: true, reason: '形容人 toxic，指关系里的消耗与伤害，不是褒义。' },
          { key: 'B', en: 'talented and full of ambition', cn: '有才华、野心勃勃', correct: false, reason: '这是褒义评价；她说的是这个人在消耗别人。' },
          { key: 'C', en: 'shy and quiet in groups', cn: '在人群里害羞安静', correct: false, reason: '害羞是 shy；toxic 是带毒的相处方式。' }
        ],
        analysis: 'toxic 是「有毒」。判断标准不是这个人多厉害，而是靠近她之后你会不会慢慢失血。',
        wrongFeedback: '你听成她在夸对方「有才华」，还点头附和，姜黎放下咖啡杯的力气大了一点，气血 -10。',
        afterCorrect: '沈知夏低声说：「那我们离远点。」姜黎说：「已经远了。她的话我不接。」'
      },
      {
        plotDescription: '主持人追问第二遍，全场安静下来。',
        line: "It got awkward when the host asked if we're a couple. I just laughed.",
        lineCn: '主持人问我们是不是一对的时候，场面尴尬死了。我只能笑。',
        prompt: "根据上下文，选出画线词汇 'Awkward' 最准确的意思。",
        options: [
          { key: 'A', en: 'uncomfortable and hard to handle', cn: '尴尬、让人不自在', correct: true, reason: 'awkward 描述那种不知道手往哪放的难堪。' },
          { key: 'B', en: 'funny and relaxing', cn: '好笑又让人放松', correct: false, reason: '那是 hilarious；她当时只想逃。' },
          { key: 'C', en: 'dangerous and violent', cn: '危险且暴力的', correct: false, reason: '危险是 dangerous；这里只是气氛难堪。' }
        ],
        analysis: 'awkward 是「尴尬」。笑不代表轻松，有时候笑是唯一能撑住场面的动作。',
        wrongFeedback: '你听成「很好笑」，还说当时自己也想笑，她无奈地看了你一眼，气血 -10。',
        afterCorrect: '沈知夏说：「你笑的时候，我在想怎么回答。」姜黎问：「那你想好了吗？」'
      },
      {
        plotDescription: '回程车上，沈知夏把手机递过来。',
        line: "I'm dead. This comment says our eye contact lasted eleven seconds.",
        lineCn: '笑死我了。这条评论说我们对视了十一秒。',
        prompt: "根据上下文，选出画线词汇 'Dead' 最准确的意思。",
        options: [
          { key: 'A', en: 'used to mean laughing extremely hard', cn: '笑死了（网络夸张说法）', correct: true, reason: '口语里 I am dead 常表示笑到不行，不是说真的死了。' },
          { key: 'B', en: 'actually no longer alive', cn: '真的已经死了', correct: false, reason: '字面义；此处是夸张的网络用法。' },
          { key: 'C', en: 'too tired to speak', cn: '累得说不出话', correct: false, reason: '累到不行是 exhausted；她明明在笑。' }
        ],
        analysis: 'dead 是「笑死了」。一个夸张的网络词，装的是那种忍不住又不想承认的开心。',
        wrongFeedback: '你按字面理解，认真问谁死了，她把手机收了回去，气血 -10。',
        afterCorrect: '姜黎小声说：「她数得挺准。」沈知夏看着窗外：「我数的是十二秒。」'
      },
      {
        plotDescription: '到家后，姜黎刷到一条写得很长的评论。',
        line: "I'm thrilled that people saw us the way we actually are.",
        lineCn: '大家看到的是真实的我们，我爽飞了。',
        prompt: "根据上下文，选出画线词汇 'Thrilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely pleased and excited', cn: '爽飞了、非常高兴', correct: true, reason: 'thrilled 是开心加激动的强表达。' },
          { key: 'B', en: 'worried about what strangers think', cn: '担心陌生人怎么想', correct: false, reason: '担心是 anxious；她的情绪方向完全相反。' },
          { key: 'C', en: 'surprised in a bad way', cn: '被吓到、受到冲击', correct: false, reason: '受惊是 shocked；这里是被认同后的兴奋。' }
        ],
        analysis: 'thrilled 是「爽飞了」。被看见这件事，比被夸好看更让她高兴。',
        wrongFeedback: '你听成她「很担心」，还问要不要联系平台删评论，她笑着摇头，气血 -10。',
        afterCorrect: '沈知夏从厨房探出头：「那明天还上节目吗？」姜黎说：「上。我们自己说。」'
      }
    ],
    completeText: '第四十二章结束。别人替她们数了十一秒，她们决定自己说出下一句。'
  },
  {
    id: 'df_43',
    index: 43,
    title: '第 43 章 · 三个项目和一个她',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '工作室一口气接了三个项目。排期表贴满整面墙，姜黎的咖啡从早上放到凉，杯口结了一层膜。',
    questions: [
      {
        plotDescription: '姜黎盯着三份排期，笔停在半空。',
        line: "I'm overwhelmed. Three projects, one me, and a week that has five Mondays.",
        lineCn: '我压力过载了。三个项目，一个我，还有一周五个周一。',
        prompt: "根据上下文，选出画线词汇 'Overwhelmed' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to cope because there is too much', cn: '压力过载、应付不过来', correct: true, reason: 'overwhelmed 强调事情多到超过承受能力。' },
          { key: 'B', en: 'very excited about the new work', cn: '对新工作非常兴奋', correct: false, reason: '兴奋是 excited；她的表情是撑不住。' },
          { key: 'C', en: 'completely uninterested in the job', cn: '对这份工作完全没兴趣', correct: false, reason: '没兴趣是 indifferent；她只是被压垮了。' }
        ],
        analysis: 'overwhelmed 是「压力过载」。不是不想做，是再多一件就会塌。',
        wrongFeedback: '你听成她「很兴奋」，还说那就加油，她把笔放下没接话，气血 -10。',
        afterCorrect: '沈知夏走过去，把最上面那份排期抽走：「这个我接。」'
      },
      {
        plotDescription: '沈知夏注意到，手机每响一次，她的肩就绷一下。',
        line: "You get anxious when the phone rings. I've watched it happen six times today.",
        lineCn: '手机一响你就焦虑。今天我已经看了六次。',
        prompt: "根据上下文，选出画线词汇 'Anxious' 最准确的意思。",
        options: [
          { key: 'A', en: 'nervous and uneasy about what may happen', cn: '焦虑、心里不踏实', correct: true, reason: 'anxious 指对还没发生的事持续不安。' },
          { key: 'B', en: 'sleepy after a big lunch', cn: '午饭后犯困', correct: false, reason: '犯困是 sleepy；她的反应是紧绷。' },
          { key: 'C', en: 'angry at whoever is calling', cn: '对打电话的人生气', correct: false, reason: '生气是 angry；她怕的是内容，不是人。' }
        ],
        analysis: 'anxious 是「焦虑」。身体先学会了条件反射，铃声一响就收紧了。',
        wrongFeedback: '你听成她「困了」，劝她早点睡，她捏着手机笑不出来，气血 -10。',
        afterCorrect: '姜黎说：「我怕又是改稿。」沈知夏说：「那我们把通知关掉两个小时。」'
      },
      {
        plotDescription: '夜里十一点，姜黎靠在沙发上，眼睛睁着却不聚焦。',
        line: "I'm drained. Not tired — drained. There's nothing left to pour out.",
        lineCn: '我被掏空了。不是累，是被掏空。已经没有东西可以倒出来。',
        prompt: "根据上下文，选出画线词汇 'Drained' 最准确的意思。",
        options: [
          { key: 'A', en: 'emotionally and physically used up', cn: '被掏空、身心都被耗尽', correct: true, reason: 'drained 指能量被抽干，比 tired 更深一层。' },
          { key: 'B', en: 'wet through from the rain', cn: '被雨淋透了', correct: false, reason: '字面义；她说的是精神状态。' },
          { key: 'C', en: 'full of energy and ready to work', cn: '精力充沛、随时能开工', correct: false, reason: '正好相反，energy 满格是 energetic。' }
        ],
        analysis: 'drained 是「被掏空」。累还能睡一觉补回来，被掏空是连情绪都流不出来了。',
        wrongFeedback: '你听成她被雨淋湿了，起身去找毛巾，她笑了一下，很轻，气血 -10。',
        afterCorrect: '沈知夏关掉客厅的灯，只留一盏：「今晚什么都不做。」'
      },
      {
        plotDescription: '第二天早上，沈知夏把她的电脑合上。',
        line: "You need to chill. One day. No phone, no schedule, no more edits.",
        lineCn: '你得躺平一天。不碰手机，不看日程，不再改片。',
        prompt: "根据上下文，选出画线词汇 'Chill' 最准确的意思。",
        options: [
          { key: 'A', en: 'to relax and stop worrying', cn: '躺平、放松下来', correct: true, reason: 'chill 作动词是放松，不给自己加压。' },
          { key: 'B', en: 'to feel cold in the room', cn: '觉得房间冷', correct: false, reason: '字面义；这里不是温度。' },
          { key: 'C', en: 'to work faster and finish early', cn: '干得更快、早点完工', correct: false, reason: '那是 hurry up；和放松正相反。' }
        ],
        analysis: 'chill 是「躺平」。她把休息说成一种安排，才让姜黎愿意接受。',
        wrongFeedback: '你听成她说冷了，还去关空调，姜黎终于笑出声，气血 -10。',
        afterCorrect: '姜黎看了看被合上的电脑：「一天，就一天。」沈知夏点头：「我陪你躺。」'
      }
    ],
    completeText: '第四十三章结束。她们第一次把「忙完再说」改成「现在停下」。'
  },
  {
    id: 'df_44',
    index: 44,
    title: '第 44 章 · 撤资那天',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '开拍前一晚，投资方的电话打进来。第二天早上，原定的片场空着，灯架还靠在墙边。',
    questions: [
      {
        plotDescription: '姜黎挂掉电话，手背上的青筋还没消。',
        line: "I'm furious. They pulled the money at midnight and didn't even send a message.",
        lineCn: '我狂怒。半夜撤资，连条消息都不发。',
        prompt: "根据上下文，选出画线词汇 'Furious' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely angry', cn: '狂怒、怒到极点', correct: true, reason: 'furious 是 angry 的最强版本。' },
          { key: 'B', en: 'a little disappointed', cn: '有点失望', correct: false, reason: '失望是 disappointed，语气轻得多。' },
          { key: 'C', en: 'confused about the contract terms', cn: '对合同条款感到困惑', correct: false, reason: '困惑是 confused；她手里还有那份预算。' }
        ],
        analysis: 'furious 是「狂怒」。她怒的不是钱，是那种连通知都懒得给的轻慢。',
        wrongFeedback: '你听成她只是「有点失望」，还说没关系下次再来，她把手机扣在桌上，气血 -10。',
        afterCorrect: '沈知夏没有劝。她只是坐下来，把那份预算重新打开。'
      },
      {
        plotDescription: '三天后，沈知夏才承认那几天的状态。',
        line: "I was depressed for a week. I won't pretend I handled it well.",
        lineCn: '我抑郁了一个星期。我不打算假装自己处理得很好。',
        prompt: "根据上下文，选出画线词汇 'Depressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'very sad and unable to feel interest for a long time', cn: '抑郁、长时间低落提不起劲', correct: true, reason: 'depressed 指持续的情绪低落，不只是当下不开心。' },
          { key: 'B', en: 'a bit annoyed for an hour', cn: '烦了一个小时', correct: false, reason: 'annoyed 是短时的烦；她说的是整整一周。' },
          { key: 'C', en: 'pressed flat by something heavy', cn: '被重物压平', correct: false, reason: '字面义；这里是情绪状态。' }
        ],
        analysis: 'depressed 是「抑郁」。承认它，比装作没事更需要力气。',
        wrongFeedback: '你听成她「被压平了」，还问她是不是搬东西扭到背，她愣了一下，气血 -10。',
        afterCorrect: '姜黎说：「我知道。你那周没吃饭。」沈知夏说：「你也一样。」'
      },
      {
        plotDescription: '一个月后，片子用另一种方式做完了。首映前，工作群炸开。',
        line: "The crew is hyped. They've been sharing the trailer since six this morning.",
        lineCn: '团队都极度兴奋。从早上六点就开始转预告片。',
        prompt: "根据上下文，选出画线词汇 'Hyped' 最准确的意思。",
        options: [
          { key: 'A', en: 'very excited and full of energy about something', cn: '极度兴奋、上头了', correct: true, reason: 'hyped 是口语里形容期待和兴奋的词。' },
          { key: 'B', en: 'disappointed with the final result', cn: '对成片结果失望', correct: false, reason: '失望是 disappointed；他们在刷庆祝表情。' },
          { key: 'C', en: 'paid far too much for something', cn: '买东西被宰了', correct: false, reason: '被宰是 ripped off；和兴奋无关。' }
        ],
        analysis: 'hyped 是「极度兴奋」。团队比她俩更早相信这个片子能成。',
        wrongFeedback: '你听成他们对结果失望，还准备去安慰，群里已经在刷庆祝表情，气血 -10。',
        afterCorrect: '姜黎看着屏幕：「他们比我们信得早。」沈知夏说：「所以我们不能停。」'
      },
      {
        plotDescription: '首映散场，一个演员站在门口抽烟。',
        line: "He looked miserable at the premiere. Nobody clapped for him.",
        lineCn: '首映上他惨透了。没人给他鼓掌。',
        prompt: "根据上下文，选出画线词汇 'Miserable' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely unhappy and uncomfortable', cn: '惨透了、非常难受', correct: true, reason: 'miserable 形容处境和心情都糟到极点。' },
          { key: 'B', en: 'very funny and entertaining', cn: '非常好笑、很有娱乐性', correct: false, reason: '好笑是 funny；没人鼓掌的人笑不出来。' },
          { key: 'C', en: 'extremely proud of himself', cn: '对自己非常骄傲', correct: false, reason: '骄傲是 proud；他低着头。' }
        ],
        analysis: 'miserable 是「惨透了」。站在灯下的那个人，等的可能只是一声掌声。',
        wrongFeedback: '你听成他「非常骄傲」，还过去道贺，他的脸色更难看了，气血 -10。',
        afterCorrect: '姜黎说：「他演得不差。是那场戏被剪了。」沈知夏说：「那他该气的不是观众。」'
      }
    ],
    completeText: '第四十四章结束。钱走了，片子留下了；有人哭，有人笑，有人被剪掉了一整场戏。'
  },
  {
    id: 'df_45',
    index: 45,
    title: '第 45 章 · 拿奖的晚上',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '短片拿了一个不大不小的奖。颁奖礼在一间旧剧院，椅子还吱呀响，灯光忽明忽暗。',
    questions: [
      {
        plotDescription: '名字被念出来的那一秒，姜黎抓住了沈知夏的手臂。',
        line: "I was ecstatic. I screamed so loud in the bathroom the cleaner knocked.",
        lineCn: '我欣喜若狂。在洗手间叫得太大声，保洁都来敲门了。',
        prompt: "根据上下文，选出画线词汇 'Ecstatic' 最准确的意思。",
        options: [
          { key: 'A', en: 'extremely happy and excited', cn: '欣喜若狂、高兴到极点', correct: true, reason: 'ecstatic 是 happy 的顶级强度。' },
          { key: 'B', en: 'calm and quietly satisfied', cn: '平静且淡淡满足', correct: false, reason: '平静是 calm；她刚在洗手间尖叫。' },
          { key: 'C', en: 'nervous about the result', cn: '对结果紧张', correct: false, reason: '紧张是 nervous；名字已经念出来了。' }
        ],
        analysis: 'ecstatic 是「欣喜若狂」。真正的狂喜通常发生在没人的地方，比如洗手间。',
        wrongFeedback: '你听成她很「平静」，还夸她稳，她手臂上的指印还在，气血 -10。',
        afterCorrect: '沈知夏说：「我没叫。」姜黎说：「你只是把我的手捏青了。」'
      },
      {
        plotDescription: '回酒店的路上，沈知夏一直没说话。',
        line: "I felt numb. It didn't land until the next morning, when I saw the trophy on the desk.",
        lineCn: '我麻木了。直到第二天早上看见桌上的奖杯，才真的反应过来。',
        prompt: "根据上下文，选出画线词汇 'Numb' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to feel anything, emotionally frozen', cn: '麻木、情绪冻住了', correct: true, reason: 'numb 指感受不到情绪或身体知觉。' },
          { key: 'B', en: 'a sharp pain in the hand', cn: '手上的一阵刺痛', correct: false, reason: '字面义；这里说的是情绪。' },
          { key: 'C', en: 'extremely proud and talkative', cn: '极度骄傲且滔滔不绝', correct: false, reason: '她一路没说话，正好相反。' }
        ],
        analysis: 'numb 是「麻木」。巨大的好消息有时不会当场落地，要隔一夜才砸下来。',
        wrongFeedback: '你听成她手疼，把奖杯接过去让她揉手，她笑了，气血 -10。',
        afterCorrect: '姜黎说：「你当时表情像在开会。」沈知夏说：「我在忍着不哭。」'
      },
      {
        plotDescription: '庆功宴上，一个旧面孔端着酒走过来。',
        line: "I'm not proud of it. I was jealous for about ten seconds.",
        lineCn: '我不为此骄傲。我嫉妒了大概十秒。',
        prompt: "根据上下文，选出画线词汇 'Jealous' 最准确的意思。",
        options: [
          { key: 'A', en: 'unhappy because someone has something or someone you want', cn: '嫉妒、因别人拥有而难受', correct: true, reason: 'jealous 就是那种带酸的情绪。' },
          { key: 'B', en: 'very happy for someone else', cn: '为别人感到非常高兴', correct: false, reason: '那是 happy for；她自己说这不是骄傲的事。' },
          { key: 'C', en: 'completely indifferent to the situation', cn: '对这件事完全无所谓', correct: false, reason: '无所谓是 indifferent；她明明在意。' }
        ],
        analysis: 'jealous 是「嫉妒」。十秒也是真的，承认它反而让这十秒过去了。',
        wrongFeedback: '你听成她为对方高兴，还夸她大度，她把杯里的酒喝完了，气血 -10。',
        afterCorrect: '沈知夏说：「周雨现在做发行。」姜黎说：「我知道。我只是不想她先跟你说话。」'
      },
      {
        plotDescription: '回房后，沈知夏在门口停下。',
        line: "I felt guilty for talking to her for ten minutes without telling you.",
        lineCn: '和她聊了十分钟却没告诉你，我内疚。',
        prompt: "根据上下文，选出画线词汇 'Guilty' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling that you have done something wrong', cn: '内疚、觉得自己做错了', correct: true, reason: 'guilty 是做了亏心事之后的那种难受。' },
          { key: 'B', en: 'completely innocent of any wrongdoing', cn: '完全清白无辜', correct: false, reason: 'innocent 是这里情绪的反面；她主动认了。' },
          { key: 'C', en: 'angry at being accused', cn: '被指责而生气', correct: false, reason: '生气是 angry；没人指责她。' }
        ],
        analysis: 'guilty 是「内疚」。真正让她难受的不是那十分钟，是那十分钟里她没想起要说一声。',
        wrongFeedback: '你听成她「清白无辜」，还说你信她，她反而更难受了，气血 -10。',
        afterCorrect: '姜黎说：「我没生气。我只是需要你说一声。」沈知夏说：「以后我第一个告诉你。」'
      }
    ],
    completeText: '第四十五章结束。奖杯放在桌上，嫉妒和内疚也一起放上来，谁都没藏。'
  },
  {
    id: 'df_46',
    index: 46,
    title: '第 46 章 · 片场晕倒',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '新项目开机第三天，姜黎从监视器前站起来，往前走了两步，然后整个人往下滑。',
    questions: [
      {
        plotDescription: '医院走廊上，沈知夏对着陆晨说话，声音发干。',
        line: "She's been stressed since March. I just didn't see it because she hides it well.",
        lineCn: '她从三月就一直压力很大。我没看出来，因为她藏得太好。',
        prompt: "根据上下文，选出画线词汇 'Stressed' 最准确的意思。",
        options: [
          { key: 'A', en: 'under a lot of pressure', cn: '压力大、承受重压', correct: true, reason: 'stressed 指被压力压着，常长期存在。' },
          { key: 'B', en: 'relaxed and well rested', cn: '放松且休息得很好', correct: false, reason: 'relaxed 正好相反。' },
          { key: 'C', en: 'physically injured in an accident', cn: '事故中身体受伤', correct: false, reason: '受伤是 injured；医生还没下结论。' }
        ],
        analysis: 'stressed 是「压力大」。她说「藏得好」，说明这半年不是没人看见，是没人愿意细看。',
        wrongFeedback: '你听成她「身体受伤了」，急着问伤到哪，医生还没开口，气血 -10。',
        afterCorrect: '陆晨说：「她上个月每天只睡四个小时。」沈知夏闭上眼：「我知道。我假装不知道。」'
      },
      {
        plotDescription: '医生把报告递过来，用了一个她没准备好的词。',
        line: "The doctor didn't say sick. She said burnout. That's a different kind of broken.",
        lineCn: '医生没说「生病」。她说的是职业倦怠。那是另一种坏掉。',
        prompt: "根据上下文，选出画线词汇 'Burnout' 最准确的意思。",
        options: [
          { key: 'A', en: 'total exhaustion from long-term stress or overwork', cn: '职业倦怠、长期高压导致的彻底耗竭', correct: true, reason: 'burnout 是长期过劳后的身心熄火，不是普通疲惫。' },
          { key: 'B', en: 'a small burn on the skin', cn: '皮肤上的小烫伤', correct: false, reason: '字面义；这里说的是工作状态。' },
          { key: 'C', en: 'a cold that comes on suddenly', cn: '突然发作的感冒', correct: false, reason: '感冒是 cold；医生特意说不是生病。' }
        ],
        analysis: 'burnout 是「职业倦怠」。它像一根蜡烛两头烧，烧到最后不是灭了，是整根塌了。',
        wrongFeedback: '你听成她「被烫伤了」，还去掀她袖子，她虚弱地笑了一下，气血 -10。',
        afterCorrect: '沈知夏把报告折好放进口袋：「那接下来三个月，你只做一件事——休息。」'
      },
      {
        plotDescription: '说起当时的情景，她的手指还在无意识地扣着椅面。',
        line: "I panicked. I couldn't remember the emergency number, and I've had it for ten years.",
        lineCn: '我恐慌了。连急救号码都想不起来，那个号码我用了十年。',
        prompt: "根据上下文，选出画线词汇 'Panic' 最准确的意思。",
        options: [
          { key: 'A', en: 'sudden strong fear that stops clear thinking', cn: '恐慌、慌到脑子空白', correct: true, reason: 'panic 是来势很猛的恐惧，会让人失去判断。' },
          { key: 'B', en: 'a quiet, lasting sadness', cn: '安静而持久的悲伤', correct: false, reason: '悲伤是 sorrow；她是当下的惊惶。' },
          { key: 'C', en: 'a small mistake in a form', cn: '表格里的小错误', correct: false, reason: '小错是 mistake；不是这个意思。' }
        ],
        analysis: 'panic 是「恐慌」。连用了十年的号码都想不起来，这才是最让她后怕的地方。',
        wrongFeedback: '你听成她「犯了个小错」，连说没事没事，她的手还在扣椅子，气血 -10。',
        afterCorrect: '姜黎握住她的手：「你做得对。你喊了人。」'
      },
      {
        plotDescription: '第二天她醒来，第一句话是嫌粥难喝。',
        line: "I was relieved. She opened her eyes and complained about the hospital food.",
        lineCn: '我松了口气。她睁开眼第一件事是嫌医院的饭难吃。',
        prompt: "根据上下文，选出画线词汇 'Relieved' 最准确的意思。",
        options: [
          { key: 'A', en: 'glad that a worry or problem has gone away', cn: '松了口气、放下心来', correct: true, reason: 'relieved 是压在身上的担心被拿走了。' },
          { key: 'B', en: 'still very worried about her', cn: '仍然非常担心她', correct: false, reason: '担心是 worried；现在人是醒着的。' },
          { key: 'C', en: 'angry with the doctor', cn: '对医生感到生气', correct: false, reason: '生气是 angry；她此刻只想笑。' }
        ],
        analysis: 'relieved 是「松了口气」。会抱怨粥难喝，是这一天最好的消息。',
        wrongFeedback: '你听成她「还在担心」，又跑去问医生要不要再查一遍，气血 -10。',
        afterCorrect: '沈知夏说：「你再说一句难吃，我就把这碗全喝了。」姜黎说：「那你喝。」'
      }
    ],
    completeText: '第四十六章结束。停工通知贴上日程表，整面墙第一次空了下来。'
  },
  {
    id: 'df_47',
    index: 47,
    title: '第 47 章 · 一条不该看到的截图',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '停工的第三周，姜黎在沈知夏的手机里看到一条消息，接着又收到一个同行转来的截图。',
    questions: [
      {
        plotDescription: '姜黎把手机推过来，屏幕停在一条暧昧的晚安上。',
        line: "I was heartbroken over a text that wasn't even from a rival. That's the worst part.",
        lineCn: '一条根本不算情敌发来的消息，就把我心碎成那样。这才是最糟的。',
        prompt: "根据上下文，选出画线词汇 'Heartbroken' 最准确的意思。",
        options: [
          { key: 'A', en: 'deeply hurt emotionally, as if your heart is broken', cn: '心碎、被伤到极深处', correct: true, reason: 'heartbroken 是情感层面的重创。' },
          { key: 'B', en: 'having an injury in the chest', cn: '胸口受了伤', correct: false, reason: '字面义；她身体没事。' },
          { key: 'C', en: 'slightly unsure about something', cn: '对某件事有点不确定', correct: false, reason: '不确定是 unsure；她很清楚自己难过。' }
        ],
        analysis: 'heartbroken 是「心碎」。最糟的是那个人根本不算对手，痛却一点没少。',
        wrongFeedback: '你听成她「胸口受伤」，还去开窗通风，她把头扭向一边，气血 -10。',
        afterCorrect: '沈知夏说：「那是我表妹。」姜黎说：「我知道。我看了名字。可我还是难受。」'
      },
      {
        plotDescription: '那个同行发来截图，后面跟着一个笑脸。',
        line: "She looked smug when she sent me the screenshot. She wanted me to hurt.",
        lineCn: '她发截图的时候一脸得意。她想让我难受。',
        prompt: "根据上下文，选出画线词汇 'Smug' 最准确的意思。",
        options: [
          { key: 'A', en: 'too pleased with yourself, in an annoying way', cn: '得意忘形、自鸣得意到让人不适', correct: true, reason: 'smug 带有「你凭什么得意」的贬义。' },
          { key: 'B', en: 'deeply sorry for what happened', cn: '为发生的事深感抱歉', correct: false, reason: '抱歉是 sorry；配上笑脸就不可能是道歉。' },
          { key: 'C', en: 'confused and lost', cn: '困惑迷茫', correct: false, reason: '困惑是 confused；她目的很明确。' }
        ],
        analysis: 'smug 是「得意」。一个笑脸就把意图写清楚了：她不是来告诉你的，是来看你难受的。',
        wrongFeedback: '你听成她「深感抱歉」，还说那人还不错，姜黎把手机反扣在桌上，气血 -10。',
        afterCorrect: '沈知夏拿过手机，只回了三个字：「不用了。」然后拉黑。'
      },
      {
        plotDescription: '晚上，两个人把这件事摊开说。',
        line: "I was annoyed that she went through my phone, and I was annoyed at myself for minding.",
        lineCn: '她翻我手机让我烦，更烦的是我自己居然在意。',
        prompt: "根据上下文，选出画线词汇 'Annoyed' 最准确的意思。",
        options: [
          { key: 'A', en: 'slightly angry about something that bothers you', cn: '烦、被惹到有点生气', correct: true, reason: 'annoyed 是程度中等的不满。' },
          { key: 'B', en: 'happy about all the attention', cn: '因为被关注而高兴', correct: false, reason: '高兴是 pleased；她说的是在意得烦。' },
          { key: 'C', en: 'curious to know more details', cn: '好奇想知道更多细节', correct: false, reason: '好奇是 curious；她并不想再听。' }
        ],
        analysis: 'annoyed 是「烦」。她烦的是两件事：被翻手机，以及自己居然会计较。',
        wrongFeedback: '你听成她「好奇想知道更多」，还想继续讲细节，她抬手压住了话头，气血 -10。',
        afterCorrect: '姜黎说：「我翻你手机不对。」沈知夏说：「我生气也不对。扯平。」'
      },
      {
        plotDescription: '姜黎自己先笑了，笑得很勉强。',
        line: "It wasn't instinct. It was paranoia. I made a story out of one text.",
        lineCn: '那不是直觉，是妄想。我把一条消息编成了一个故事。',
        prompt: "根据上下文，选出画线词汇 'Paranoia' 最准确的意思。",
        options: [
          { key: 'A', en: 'unreasonable fear that people are against you', cn: '被害妄想、毫无根据地觉得别人针对自己', correct: true, reason: 'paranoia 的特征就是没有依据的猜疑。' },
          { key: 'B', en: 'sharp intuition that is always right', cn: '永远准确的敏锐直觉', correct: false, reason: '直觉是 intuition，中性；她自己否定了这一点。' },
          { key: 'C', en: 'a calm and rational judgment', cn: '冷静理性的判断', correct: false, reason: '反义；她承认自己当时不理性。' }
        ],
        analysis: 'paranoia 是「被害妄想」。把一条晚安扩展成一整部剧，这是她自己给自己的判决书。',
        wrongFeedback: '你听成她「直觉很准」，还问她预感到什么了，她笑不下去了，气血 -10。',
        afterCorrect: '沈知夏说：「那我们定个规矩：有怀疑，先问，不猜。」姜黎说：「好。先问。」'
      }
    ],
    completeText: '第四十七章结束。她们学会把「我觉得」换成「我问你」。'
  },
  {
    id: 'df_48',
    index: 48,
    title: '第 48 章 · 现金流见底的那个月',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '停工第三个月，账上只剩够发一次工资的钱。楼下那盏路灯一直亮到天亮，谁都没睡好。',
    questions: [
      {
        plotDescription: '凌晨四点，沈知夏还在客厅里走来走去。',
        line: "I can't sleep. I'm restless all night, and the ceiling has become very interesting.",
        lineCn: '我睡不着。整晚都坐立不安，天花板都被我看出花来了。',
        prompt: "根据上下文，选出画线词汇 'Restless' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to stay still or relax', cn: '焦躁、坐立不安', correct: true, reason: 'restless 指身体和心都停不下来。' },
          { key: 'B', en: 'sleeping deeply and peacefully', cn: '睡得很沉很安稳', correct: false, reason: '反义；她说自己睡不着。' },
          { key: 'C', en: 'completely calm in a crisis', cn: '危机中完全冷静', correct: false, reason: '冷静是 calm；她在客厅转圈。' }
        ],
        analysis: 'restless 是「焦躁」。绕着客厅走，是身体在替脑子承受那份没处放的压力。',
        wrongFeedback: '你听成她「睡得很沉」，还说那挺好，她停下脚步看着你，气血 -10。',
        afterCorrect: '姜黎说：「坐下。」沈知夏坐下，两条腿还在抖。'
      },
      {
        plotDescription: '她说起这几个月为什么不接电话。',
        line: "I got bitter. I stopped answering calls from anyone in this industry.",
        lineCn: '我变得苦涩怨恨。这个行业里的人打来，我都不接。',
        prompt: "根据上下文，选出画线词汇 'Bitter' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling angry and hurt about unfair treatment over time', cn: '苦涩怨恨、长期受委屈后的怨气', correct: true, reason: 'bitter 形容被长期不公磨出来的情绪。' },
          { key: 'B', en: 'a strong taste, like dark coffee', cn: '像黑咖啡那样的苦味', correct: false, reason: '字面义；这里说的是心境。' },
          { key: 'C', en: 'sweet and gentle toward people', cn: '对人甜美温柔', correct: false, reason: '反义；她连电话都不接。' }
        ],
        analysis: 'bitter 是「苦涩」。怨气不是一天长出来的，是每次被挂断的电话一点点堆起来的。',
        wrongFeedback: '你听成她在说咖啡苦，还问要不要加糖，她闭上了眼睛，气血 -10。',
        afterCorrect: '沈知夏说：「那你现在愿意接谁的？」姜黎说：「你的。」'
      },
      {
        plotDescription: '凌晨三点，姜黎终于说了那句一直没说的话。',
        line: "I only let myself be vulnerable at three in the morning. That's not strength. That's hiding.",
        lineCn: '我只在凌晨三点让自己脆弱。那不是坚强，那是躲。',
        prompt: "根据上下文，选出画线词汇 'Vulnerable' 最准确的意思。",
        options: [
          { key: 'A', en: 'open to being hurt, emotionally exposed', cn: '脆弱、把软处露出来', correct: true, reason: 'vulnerable 是卸下防备、允许被看见。' },
          { key: 'B', en: 'strong and impossible to break', cn: '坚强到无法被击垮', correct: false, reason: '反义；她说这不是坚强。' },
          { key: 'C', en: 'very popular with everyone', cn: '受所有人欢迎', correct: false, reason: '受欢迎是 popular；和脆弱无关。' }
        ],
        analysis: 'vulnerable 是「脆弱」。只在凌晨三点允许自己软下来，说明白天一直在硬撑。',
        wrongFeedback: '你听成她「很受欢迎」，还问谁又夸她了，她把脸埋进抱枕，气血 -10。',
        afterCorrect: '沈知夏说：「那我们把三点改到下午三点。」姜黎笑了一下，眼睛红了。'
      },
      {
        plotDescription: '最糟的那一晚，她第一次说了实话。',
        line: "For two weeks, I felt hopeless. I'm telling you that honestly, not for comfort.",
        lineCn: '有两周，我感到绝望。我如实告诉你，不是为了要安慰。',
        prompt: "根据上下文，选出画线词汇 'Hopeless' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling that nothing good can happen', cn: '绝望、看不到任何转机', correct: true, reason: 'hopeless 是完全失去希望的状态。' },
          { key: 'B', en: 'full of hope and plans', cn: '充满希望和计划', correct: false, reason: '反义；她说的是最糟的那两周。' },
          { key: 'C', en: 'without a phone or signal', cn: '没手机没信号', correct: false, reason: '字面义；这里与设备无关。' }
        ],
        analysis: 'hopeless 是「绝望」。她说「不是为了要安慰」，是想让这件事被准确地听见一次。',
        wrongFeedback: '你听成她「手机没电了」，说了句那就充电啊，她安静了很久，气血 -10。',
        afterCorrect: '沈知夏没有说「会好的」。她说：「我在。三点我也在。」'
      }
    ],
    completeText: '第四十八章结束。最黑的那个月，她们没解决任何问题，只是谁都没有走开。'
  },
  {
    id: 'df_49',
    index: 49,
    title: '第 49 章 · 又走回那条街',
    novel: '影后她的小替身',
    speaker: { name: '沈知夏', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '一年后，工作室活了下来。她们回到最初那个旧剧组所在的街，路边的小馆子居然还在。',
    questions: [
      {
        plotDescription: '沈知夏站在街口，看着那扇熟悉的铁门。',
        line: "I'm grateful for the year nobody clapped for us. It taught me what I actually want.",
        lineCn: '我感激那个没人给我们鼓掌的年头。它让我知道了我真正想要什么。',
        prompt: "根据上下文，选出画线词汇 'Grateful' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling thankful for something', cn: '感激、心怀感谢', correct: true, reason: 'grateful 是对得到的东西真心说谢谢。' },
          { key: 'B', en: 'full of regret about the past', cn: '对过去充满后悔', correct: false, reason: '后悔是 regretful；她说的是感激。' },
          { key: 'C', en: 'surprised by an unexpected gift', cn: '被意外礼物惊到', correct: false, reason: '惊讶是 surprised；没有礼物。' }
        ],
        analysis: 'grateful 是「感激」。感激那一年，是因为那一年没有掌声，反而听得清自己要什么。',
        wrongFeedback: '你听成她「很后悔」，说都过去了别想，她看着铁门摇头，气血 -10。',
        afterCorrect: '姜黎说：「那年我们吃了一个月的面。」沈知夏说：「你煮的面其实不错。」'
      },
      {
        plotDescription: '两个人在小馆子坐下，老板居然还认得她们。',
        line: "I'm content. I don't need a bigger studio or a better car than this table.",
        lineCn: '我满足了。我不需要比这张桌子更大的工作室，或者更好的车。',
        prompt: "根据上下文，选出画线词汇 'Content' 最准确的意思。",
        options: [
          { key: 'A', en: 'quietly satisfied with what you have', cn: '满足、安稳地觉得够了', correct: true, reason: 'content 作形容词是「知足的」，语气比 happy 更静。' },
          { key: 'B', en: 'the things inside a box or a book', cn: '盒子或书里的内容', correct: false, reason: '字面义；这里作形容词用。' },
          { key: 'C', en: 'bored and restless', cn: '无聊又焦躁', correct: false, reason: '反义；她正坐得很舒服。' }
        ],
        analysis: 'content 是「满足」。她要的不是更大的地方，是同一张桌子还坐得下两个人。',
        wrongFeedback: '你听成她在说「盒子的内容」，还问什么盒子，她笑着把菜单推给你，气血 -10。',
        afterCorrect: '沈知夏说：「那明年呢？」姜黎说：「明年还坐这张桌子。」'
      },
      {
        plotDescription: '吃完面，她们沿着街慢慢走。',
        line: "I feel fulfilled for the first time. Not successful — fulfilled.",
        lineCn: '我第一次觉得充实。不是成功，是充实。',
        prompt: "根据上下文，选出画线词汇 'Fulfilled' 最准确的意思。",
        options: [
          { key: 'A', en: 'feeling that your life has meaning and you have done enough', cn: '充实、觉得人生有意义且足够', correct: true, reason: 'fulfilled 是关于意义感的满足。' },
          { key: 'B', en: 'a promise that has been kept', cn: '被履行了的承诺', correct: false, reason: '字面义；这里作形容词。' },
          { key: 'C', en: 'empty and lost inside', cn: '内心空虚迷茫', correct: false, reason: '反义；她说的是充实。' }
        ],
        analysis: 'fulfilled 是「充实」。她特意否定了成功，因为成功是别人给的评分，充实是自己知道的。',
        wrongFeedback: '你听成她「履行了承诺」，还问谁跟谁承诺，她把手伸过来，气血 -10。',
        afterCorrect: '沈知夏握住她的手：「那我也一样。」'
      },
      {
        plotDescription: '走到路口，姜黎忽然停下来。',
        line: "She got hysterical — laughing and crying at the same time, right there on the street.",
        lineCn: '她歇斯底里了——就在街上，又笑又哭。',
        prompt: "根据上下文，选出画线词汇 'Hysterical' 最准确的意思。",
        options: [
          { key: 'A', en: 'unable to control your emotions, laughing or crying wildly', cn: '歇斯底里、情绪失控地又笑又哭', correct: true, reason: 'hysterical 指情绪极端到无法自控。' },
          { key: 'B', en: 'extremely calm and fully controlled', cn: '极其冷静、完全自控', correct: false, reason: '反义；她正在街边又笑又哭。' },
          { key: 'C', en: 'a serious physical illness', cn: '一种严重的身体疾病', correct: false, reason: '疾病是 illness；这里说的是情绪。' }
        ],
        analysis: 'hysterical 是「歇斯底里」。这笑和哭里没有失控的狼狈，是撑了太久之后的泄洪。',
        wrongFeedback: '你听成她「生病了」，急着要叫车，她一边哭一边笑地拉住你，气血 -10。',
        afterCorrect: '姜黎抹了把脸，说：「姜黎工作室，还开着。」沈知夏说：「还开着。」'
      }
    ],
    completeText: '第四十九章结束。她们没变成谁仰望的人，只变成了自己想成为的人。'
  },
  {
    id: 'df_50',
    index: 50,
    title: '第 50 章 · 阳台朝南',
    novel: '影后她的小替身',
    speaker: { name: '姜黎', avatar: window.VERSION_AVATARS.dual_female },
    storyText: '最后一年的春天，她们搬进了一间带阳台的旧房子。阳台朝南，刚刚放得下两把椅子。',
    questions: [
      {
        plotDescription: '沈知夏望着楼下，忽然提起很多年前的事。',
        line: "I still feel rage when I think about that year. Not at them. At how long I stayed quiet.",
        lineCn: '想起那一年我仍然暴怒。不是对他们，是对我自己沉默了那么久。',
        prompt: "根据上下文，选出画线词汇 'Rage' 最准确的意思。",
        options: [
          { key: 'A', en: 'very strong anger you can hardly control', cn: '暴怒、难以压住的愤怒', correct: true, reason: 'rage 是愤怒的极端形态，常带失控感。' },
          { key: 'B', en: 'a fashionable trend in clothing', cn: '服装上的一种时尚潮流', correct: false, reason: '字面义；这里说的是愤怒。' },
          { key: 'C', en: 'mild amusement about the past', cn: '对过去觉得有点好笑', correct: false, reason: '好笑是 amusement；她的情绪重得多。' }
        ],
        analysis: 'rage 是「暴怒」。她怒的不是当年那些人，是自己在那一年里把嘴闭上了太久。',
        wrongFeedback: '你听成她在说「时尚潮流」，还问是哪一年的款，她转过头看你，气血 -10。',
        afterCorrect: '姜黎说：「你后来没沉默。」沈知夏说：「因为你在旁边一直吵。」'
      },
      {
        plotDescription: '风把晾着的衣服吹起来，两个人都安静了一会儿。',
        line: "There's sorrow in it too. We lost people we thought would stay.",
        lineCn: '里面也有悲伤。我们失去了以为会留下的人。',
        prompt: "根据上下文，选出画线词汇 'Sorrow' 最准确的意思。",
        options: [
          { key: 'A', en: 'deep sadness, often lasting a long time', cn: '悲伤、常持续很久的深切难过', correct: true, reason: 'sorrow 比 sad 更沉、更持久。' },
          { key: 'B', en: 'a kind of bird in old stories', cn: '旧故事里的一种鸟', correct: false, reason: '字面义；这里说的是情绪。' },
          { key: 'C', en: 'relief after hard work', cn: '辛苦之后的轻松', correct: false, reason: '轻松是 relief；这里方向相反。' }
        ],
        analysis: 'sorrow 是「悲伤」。重看这条路，不能只数赢下来的，也要数走散的那些人。',
        wrongFeedback: '你听成她在说「一种鸟」，还抬头往天上看，她也跟着抬头，气血 -10。',
        afterCorrect: '姜黎说：「留下的也不少。」她指了指屋里：「陆晨今天还来蹭饭。」'
      },
      {
        plotDescription: '太阳慢慢移到阳台中间，正好落在两把椅子之间。',
        line: "This — sitting here with you, doing nothing — is euphoria. The quiet kind.",
        lineCn: '这个——和你坐在这里什么都不做——就是极度愉悦。安静的那种。',
        prompt: "根据上下文，选出画线词汇 'Euphoria' 最准确的意思。",
        options: [
          { key: 'A', en: 'a feeling of intense happiness and excitement', cn: '极度愉悦、幸福感爆棚', correct: true, reason: 'euphoria 是强烈而充盈的快乐。' },
          { key: 'B', en: 'a medical condition with high fever', cn: '一种高烧的病症', correct: false, reason: '字面义的旧用法；这里指情绪。' },
          { key: 'C', en: 'total boredom with everything', cn: '对一切彻底无聊', correct: false, reason: '无聊是 boredom；她正笑着说这句话。' }
        ],
        analysis: 'euphoria 是「极度愉悦」。她说「安静的那种」，因为最响的快乐，往往是最静的。',
        wrongFeedback: '你听成她「发烧了」，伸手去探她额头，她顺势靠了过来，气血 -10。',
        afterCorrect: '沈知夏说：「那明天也这样。」姜黎说：「明天我要去片场。」沈知夏说：「那后天。」'
      },
      {
        plotDescription: '手机在屋里响了一下，两个人都没动。',
        line: "And apathy for everything they said about us. I just don't care anymore.",
        lineCn: '对他们说过的那些，我只有冷漠。我已经不在乎了。',
        prompt: "根据上下文，选出画线词汇 'Apathy' 最准确的意思。",
        options: [
          { key: 'A', en: 'lack of interest, feeling or concern', cn: '冷漠、不再关心', correct: true, reason: 'apathy 是情绪上的不投入、不在意。' },
          { key: 'B', en: 'strong sympathy for other people', cn: '对他人的强烈同情', correct: false, reason: '同情是 sympathy；她说的正好相反。' },
          { key: 'C', en: 'a sudden burst of anger', cn: '突然爆发的一阵愤怒', correct: false, reason: '愤怒是 anger；她说已经不在乎了。' }
        ],
        analysis: 'apathy 是「冷漠」。最后的冷漠不是麻木，是把那些声音从自己的生活里彻底请了出去。',
        wrongFeedback: '你听成她「很有同情心」，还夸她善良，她笑了一下，把手机翻过去，气血 -10。',
        afterCorrect: '姜黎把两杯茶放在椅子扶手上，说：「朝南。」沈知夏说：「冬天也晒得到。」'
      }
    ],
    completeText: '第五十章结束。阳台朝南，两把椅子，一把晒太阳，一把留给对方。'
  }
];

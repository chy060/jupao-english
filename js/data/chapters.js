/**
 * 小说章节库 NovelChapters —— 答题与剧情彻底绑定
 *
 * 结构：
 *   window.NOVEL_CHAPTERS[versionId] = [
 *     {
 *       id, index, title, novel,
 *       speaker: { name, avatar: { url, emoji, bg } },   // 人物头像（每版本不同，拟人真人感）
 *       storyText,                                      // ① 场景设定（进入章节即展示）
 *       questions: [
 *         {
 *           plotDescription,  // ② 剧情描述
 *           line,             // ③ 英文原声（含目标词）
 *           lineCn,           //    英文原声的中文翻译
 *           prompt,           // ④ 提问
 *           options: [{ key, en, cn, note, correct, reason }],
 *           analysis,         // 语境解析
 *           wrongFeedback,    // 答错后的剧情化反馈
 *           vocab,            // 词汇拓展
 *           afterCorrect      // 答对后的 100 字续写剧情
 *         }
 *       ],
 *       completeText   // 本章 3 题全对后的收尾
 *     }
 *   ]
 *
 * 规则：只有答对（选 correct:true 的选项）才推进章节进度，3 题全对解锁下一章。
 */
window.VERSION_AVATARS = {
  female_lead: {
    url: 'assets/avatars/anime_female_lead.jpg',
    emoji: '👑',
    bg: 'linear-gradient(135deg,#ff5f9e,#ffb199)'
  },
  male_lead: {
    url: 'assets/avatars/anime_male_lead.jpg',
    emoji: '⚔️',
    bg: 'linear-gradient(135deg,#4a7cff,#22d3ee)'
  },
  dual_female: {
    url: 'assets/avatars/anime_dual_female.jpg',
    emoji: '🌸',
    bg: 'linear-gradient(135deg,#a855f7,#f472b6)'
  },
  dual_male: {
    url: 'assets/avatars/anime_oliver.jpg',
    emoji: '🌙',
    bg: 'linear-gradient(135deg,#f59e0b,#ef4444)'
  },
  pure_love: {
    url: 'assets/avatars/anime_pure_love.jpg',
    emoji: '💌',
    bg: 'linear-gradient(135deg,#fb7185,#fda4af)'
  }
};

window.NOVEL_CHAPTERS = {

  // ==================== 大女主 ·《穿普拉达的女王》 ====================
  female_lead: [
    {
      id: 'prada_1',
      index: 1,
      title: '第一章 · 凌晨一点的校样',
      novel: '穿普拉达的女王',
      speaker: {
        name: 'Miranda',
        avatar: window.VERSION_AVATARS.female_lead
      },
      storyText: '凌晨一点，曼哈顿下着雨，杂志社整层楼只剩会议室还亮着灯。Andy 把刚买的咖啡放在桌角，Miranda 没有抬头，只是把一叠校样推到她面前。这是这周第三次通宵，而明早八点还有一场不能出错的拍摄会。',
      questions: [
        {
          plotDescription: 'Miranda 的语气平静得像在聊天气，但每个字都压得人喘不过气。Andy 盯着那叠校样，手指还停在咖啡杯上。',
          line: 'This issue is a nightmare. Fix it before I wake up.',
          lineCn: '这期杂志简直是一场噩梦。在我醒来之前把它修好。',
          prompt: "根据上下文，选出画线词汇 'nightmare' 最准确的意思。",
          options: [
            { key: 'A', en: 'bad dream', cn: '噩梦（字面意思）', note: '错误的死板翻译', correct: false,
              reason: 'nightmare 的字面义确实是“噩梦”，但 Miranda 不是在讲她昨晚做的梦，她说的是这期杂志。' },
            { key: 'B', en: 'a total disaster to deal with', cn: '一团糟、极难处理的烂摊子', note: '正确的语境理解', correct: true,
              reason: '口语里 nightmare 常用来形容“难搞到让人崩溃的事”。This is a nightmare 就是“这简直是灾难”。' },
            { key: 'C', en: 'a horror movie', cn: '恐怖片', note: '错误的联想', correct: false,
              reason: 'nightmare 有“吓人”的联想，但它不能拿来指一部电影，这里也没人在聊电影。' }
          ],
          analysis: 'Miranda 从不解释自己。nightmare 在这里不是梦，而是“让人头疼到极点的麻烦”。整句意思是：这期杂志简直是一场灾难，在我醒来之前修好它。潜台词是——我没有时间等你慢慢来。',
          wrongFeedback: '你选错了，Andy 没听懂 Miranda 的催促，还站在原地等她解释。会议室安静得只剩雨声，气血 -10。',
          vocab: 'nightmare 高频搭配：have a nightmare（做噩梦）、a logistical nightmare（后勤上的噩梦）、This is a nightmare（这简直要命）。职场里说某件事 a nightmare，几乎等于说“这事难到离谱”。',
          afterCorrect: 'Andy 没有辩解，只是把校样抱起来，说了句“我今晚改完”。她走出会议室时，玻璃上映出自己发红的眼睛。电梯往下走，她忽然想起刚入职那天说的那句“我想要这份工作”——现在她终于明白，想要和配得上，是两件事。'
        },
        {
          plotDescription: 'Miranda 把眼镜摘下来，第一次正眼看 Andy。她说这句话时没有怒气，反而像在陈述一个事实。',
          line: "If you're going to quit every time it gets hard, you'll never make it here.",
          lineCn: '如果你每次遇到难处就想退出，你永远在这里待不下去。',
          prompt: "选出 'quit' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'be quiet', cn: '安静下来', note: '错误的形近词混淆', correct: false,
              reason: 'quiet 才是“安静”，quit 是“退出、辞掉”。两个词拼写只差一个字母，意思却毫无关系。' },
            { key: 'B', en: 'give up / resign', cn: '放弃、辞职退出', note: '正确的语境理解', correct: true,
              reason: 'quit 的核心就是“主动不干了”。Miranda 说的是：一遇到难处就退出的人，在这里活不下来。' },
            { key: 'C', en: 'be fired', cn: '被解雇', note: '错误的方向理解', correct: false,
              reason: 'quit 是主动离开，被解雇是 be fired——方向正好相反。Miranda 是在说 Andy 自己放弃，而不是公司赶她走。' }
          ],
          analysis: 'quit 是“主动退出、放弃”。Miranda 这句话其实是一种别扭的挽留：她把“你会不会走”摆到台面上，逼 Andy 自己回答。',
          wrongFeedback: '你选错了，Andy 把一句“别轻易放弃”听成了“你随时会被开掉”，脸一下子白了，气血 -10。',
          vocab: 'quit / resign / be fired 别混：quit 是自己主动不干（偏口语），resign 是正式递交辞呈，be fired 是被公司开掉。',
          afterCorrect: 'Andy 咬了咬嘴唇，说：“我不是来 quit 的。”Miranda 看了她两秒，重新戴上眼镜：“那就别让我听见这两个字。”那天之后，Andy 开始在包里常备一双平底鞋——她决定跑得比所有人都快。'
        },
        {
          plotDescription: 'Andy 抱着三杯咖啡冲进电梯，头发被雨打湿。Miranda 扫了她一眼，说完这句话就转身走进会议室。',
          line: "Don't look overwhelmed. Everyone here is drowning; the ones who survive just don't show it.",
          lineCn: '别一副被压垮的样子。这里每个人都在溺水，活下来的只是不表现出来而已。',
          prompt: "选出 'overwhelmed' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'very tired', cn: '非常疲惫', note: '错误的语境理解', correct: false,
              reason: '她确实很累，但 overwhelmed 强调的不是累，而是“事情多到接不住”的那种被压住的感觉。' },
            { key: 'B', en: 'swamped / unable to cope', cn: '被压得喘不过气、应付不过来', note: '正确的语境理解', correct: true,
              reason: 'overwhelm 的核心是“被大量的东西淹没”。be overwhelmed 就是被工作、情绪压到接不住。' },
            { key: 'C', en: 'overcome', cn: '克服', note: '错误的形近词混淆', correct: false,
              reason: 'overcome 是“战胜、克服”，而 overwhelmed 是被动的——不是战胜，而是被打败。' }
          ],
          analysis: '这句话是 Miranda 式的“安慰”：她不说“辛苦了”，而是说“这里每个人都在溺水”。overwhelmed 是被淹没的状态，不是简单的“累”。',
          wrongFeedback: '你选错了，Andy 只听出了“累”，没听出那句别扭的鼓励，低头说了句“对不起”，气血 -10。',
          vocab: 'overwhelm 三连：be overwhelmed by work（被工作压垮）、feel overwhelmed（不知所措）、overwhelming（铺天盖地的、压倒性的）。',
          afterCorrect: 'Andy 把咖啡一杯杯放好，深吸一口气，再抬头时眼睛已经稳了。Miranda 转身前丢下一句：“八点的拍摄，你跟我去。”那是 Andy 进公司以来第一次被带进现场，她在心里默念：别被淹没，游起来。'
        }
      ],
      completeText: '第一章完成。凌晨三点的办公室终于安静下来，Andy 把改完的校样放在 Miranda 桌上，第一次没有发抖。她还不确定自己能不能留下，但她确定了一件事——她不想再被这栋楼吓到。'
    }
  ],

  // ==================== 大男主 ·《火星救援》 ====================
  male_lead: [
    {
      id: 'martian_1',
      index: 1,
      title: '第一章 · 基地警报',
      novel: '火星救援',
      speaker: {
        name: 'Mark',
        avatar: window.VERSION_AVATARS.male_lead
      },
      storyText: '火星基地的氧气警报在凌晨响起，红色的灯一遍遍扫过舱壁。补给舱被沙暴撕开一个口子，通讯天线也断了。距离下一次地球窗口还有四百多天，而舱里只剩下三个人和不到一半的食物。',
      questions: [
        {
          plotDescription: '警报声里，有人已经开始发抖。Mark 把手按在控制台上，努力让声音听起来像平时一样稳。',
          line: "Everybody, don't freak out. We've got air, we've got water, and we've got a plan.",
          lineCn: '大家别慌。我们有空气，有水，也有计划。',
          prompt: "选出 'freak out' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'get very excited', cn: '兴奋起来', note: '错误的语境理解', correct: false,
              reason: 'freak out 确实也能表示“兴奋到失控”，但氧气警报里没人是兴奋的，大家是恐惧。' },
            { key: 'B', en: 'panic / lose control of emotions', cn: '惊慌失措、情绪失控', note: '正确的语境理解', correct: true,
              reason: 'freak out 在危机场景里就是“慌了、崩了”。Mark 说的是：谁都先别慌。' },
            { key: 'C', en: 'freak', cn: '怪人', note: '错误的词性混淆', correct: false,
              reason: 'freak 作名词是“怪人”，freak out 是动词短语，表示情绪爆发。' }
          ],
          analysis: 'Mark 的这句话是在给全队定调：先别乱，再谈办法。freak out 不是“兴奋”，是“被情绪吞掉”。',
          wrongFeedback: '你选错了，Mark 的镇定没有传达到位，舱里有人开始抢氧气面罩，混乱中他必须先按住人，气血 -10。',
          vocab: 'freak out 是美剧高频短语：Don\'t freak out（别慌）、She freaked out（她崩溃了）。同义替换：panic、lose it。',
          afterCorrect: 'Mark 把氧气阀一点点拧回安全区，警报声终于低了下去。他转过身，看着两张发白的脸，说：“我们活。现在开始算。”那一刻他其实也怕，只是他知道，怕不能让三个人多活一天。'
        },
        {
          plotDescription: '沙暴过去后，Mark 一个人检查破损的舱门。他在全队频道里开口，声音很低。',
          line: "I screwed up. I trusted the weather report. That's on me.",
          lineCn: '是我搞砸了。我信了那份天气报告。这事算我的。',
          prompt: "选出 'screwed up' 在这里最准确的意思。",
          options: [
            { key: 'A', en: 'fastened with screws', cn: '用螺丝拧紧的', note: '错误的死板翻译', correct: false,
              reason: 'screw 作名词是“螺丝”，但 screw up 是固定短语，和拧螺丝毫无关系。' },
            { key: 'B', en: 'made a serious mistake', cn: '搞砸了、犯了严重错误', note: '正确的语境理解', correct: true,
              reason: 'screw up 就是“把事情弄糟”。Mark 在认错，而不是在讲舱门怎么装的。' },
            { key: 'C', en: 'was cheated by someone', cn: '被人骗了', note: '错误的语境理解', correct: false,
              reason: '这里没有人骗他，是他自己的判断出了问题。' }
          ],
          analysis: "That's on me 是“这事我担”。Mark 没有把责任推给天气报告，他先把自己的那份认下来——这是队伍还能听他的原因。",
          wrongFeedback: '你选错了，队友以为 Mark 在推卸责任，频道里静得可怕，气血 -10。',
          vocab: 'screw up（搞砸）、mess up（弄乱）、own it（认下责任）。职场里承认 screw up 的人，反而更容易被信任。',
          afterCorrect: '频道里没人说话。过了几秒，队里最年长的那位才开口：“行，那我们算算怎么补。”Mark 蹲在舱门口，把坏掉的零件一件件摆开。承认错误不会让氧气变多，但会让人愿意留下来一起想办法。'
        },
        {
          plotDescription: '食物只够吃两百天。Mark 蹲在储物舱里，捧着一袋土豆，忽然笑了一下。',
          line: "Give me a week. I'll figure out how to grow potatoes in here.",
          lineCn: '给我一周。我会想出在这里种土豆的办法。',
          prompt: "选出 'figure out' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'calculate a number', cn: '算出一个数字', note: '错误的窄化理解', correct: false,
              reason: 'figure 有“数字”的意思，但 figure out 不是算数，是想通一件很难的事。' },
            { key: 'B', en: 'work out a solution', cn: '想出办法、弄明白', note: '正确的语境理解', correct: true,
              reason: 'figure out 是“经过琢磨找到答案”。他想出来的不是数字，是一个能活下去的方案。' },
            { key: 'C', en: 'draw a human figure', cn: '画一个人形', note: '错误的死板翻译', correct: false,
              reason: 'figure 单独作名词可以指“人形”，但 figure out 是动词短语，和画图无关。' }
          ],
          analysis: 'Mark 把“等死”换成了“解题”。figure out 的底色是相信问题有答案——这也是大男主最硬的地方。',
          wrongFeedback: '你选错了，队友以为他只是在算数字，没人相信计划可行，刚提起来的士气又低了一截，气血 -10。',
          vocab: 'figure out（想通、解决）、work out（算出/锻炼）、come up with（想出点子）。三个都能表达“想出办法”，语气依次更主动。',
          afterCorrect: '当天夜里，Mark 把储物舱的灯全打开了，用胶带在地上贴出一块矩形：“这是第一个农场。”另外两个人站在门口，先是愣住，然后有人笑出了声。在火星上种土豆听起来像个笑话，但那晚，是三个月来基地第一次有人笑。'
        }
      ],
      completeText: '第一章完成。氧气、水和一小块“农场”成了他们全部的底牌。Mark 在日志里写下第一行字：今天很难，但还没有结束。第二天早上，他照常起了床。'
    }
  ],

  // ==================== 百合 ·《伊芙琳·雨果的七个丈夫》 ====================
  dual_female: [
    {
      id: 'evelyn_1',
      index: 1,
      title: '第一章 · 片场外的雨',
      novel: '伊芙琳·雨果的七个丈夫',
      speaker: {
        name: 'Evelyn',
        avatar: window.VERSION_AVATARS.dual_female
      },
      storyText: '洛杉矶的雨夜，片场外的保姆车还亮着一盏小灯。Evelyn 刚拍完最后一场戏，妆还没卸，Celia 就坐在她对面，手里捏着两杯已经凉掉的咖啡。她们已经三个月没有单独说过话了。',
      questions: [
        {
          plotDescription: 'Celia 把咖啡放下，声音不大，但每个字都落得很稳。Evelyn 看着她，第一次没有立刻露出那种得体的笑。',
          line: 'You ghosted me for three months, Evelyn. Three months.',
          lineCn: '你对我玩消失了三个月，Evelyn。整整三个月。',
          prompt: "选出 'ghosted' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'haunted me like a ghost', cn: '像鬼一样缠着我', note: '错误的死板翻译', correct: false,
              reason: 'ghost 作名词确实是“鬼”，但 ghost 作动词是“突然断联”，跟鬼魂没有关系。' },
            { key: 'B', en: 'disappeared on me / stopped replying', cn: '突然消失、不回消息', note: '正确的语境理解', correct: true,
              reason: 'get ghosted 是恋爱里最伤人的词：对方什么也不说，就这样从你的生活里消失。' },
            { key: 'C', en: 'forgot about me', cn: '把我忘了', note: '错误的语境理解', correct: false,
              reason: '忘了只是没想起来，ghost 是明明能回、却故意不回。Celia 在意的是后者。' }
          ],
          analysis: 'ghost 作动词，是“突然断联、不回消息”。Celia 这句不是撒娇，是把三个月的沉默摆到桌面上，要一个说法。',
          wrongFeedback: '你选错了，Evelyn 把“玩消失”听成了“忘了”，轻描淡写地说了句“我没有忘”，Celia 眼里的光暗了下去，气血 -10。',
          vocab: 'ghost 作动词：ghost someone（突然对某人断联）、get ghosted（被玩消失）。名词 a ghost 才是鬼魂。',
          afterCorrect: 'Evelyn 没有马上回答，伸手把 Celia 那杯凉咖啡拿过来，握在手里。过了一会儿她才说：“我没有不回你，我是怕一开口，就说出不该说的话。”雨敲在车顶上，Celia 忽然不知道，这句话算不算一种回答。'
        },
        {
          plotDescription: 'Evelyn 把车窗摇下一条缝，雨声涌进来。她说这句话时，像是在说服 Celia，也像是在说服自己。',
          line: "I'm not going to settle for a life someone else wrote for me.",
          lineCn: '我不会将就着去过别人替我写好的人生。',
          prompt: "选出 'settle for' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'live somewhere permanently', cn: '定居下来', note: '错误的短语混淆', correct: false,
              reason: 'settle down 才是“安定下来、定居”，settle for 的意思完全不同。' },
            { key: 'B', en: 'accept something less than you want', cn: '将就、退而求其次', note: '正确的语境理解', correct: true,
              reason: 'settle for 是“明知道不够好，还是接受了”。她要的不是将就的人生。' },
            { key: 'C', en: 'calm down', cn: '冷静下来', note: '错误的语境理解', correct: false,
              reason: 'settle 确实有“平息”的意思，但那需要搭配 down，而且这里根本不是情绪问题。' }
          ],
          analysis: 'settle for 的核心是“妥协式接受”。Evelyn 这句是在拒绝被安排：她不要一个别人写好剧本的人生——包括别人替她定义的爱情。',
          wrongFeedback: '你选错了，Celia 以为她说的是“搬家”，笑了一下问“那你去哪”，两个人又错开了，气血 -10。',
          vocab: 'settle for（将就）、settle down（安定下来/定居）、settle a dispute（解决争端）。介词不同，人生状态完全不同。',
          afterCorrect: 'Celia 看着她，很久才说：“那我呢？我是你写的人生，还是别人写的？”Evelyn 的手停在车窗上，雨声一下子变得很大。她第一次发现，自己准备了那么多漂亮的台词，却没有一句能回答这个问题。'
        },
        {
          plotDescription: '闪光灯在雨里亮了一下。Evelyn 没有松开车门把手，反而握得更紧。',
          line: "They'll call it a scandal. Let them. I'm done hiding you.",
          lineCn: '他们会说这是丑闻。随他们说。我不想再藏着你。',
          prompt: "选出 'scandal' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'a shocking piece of gossip', cn: '丑闻、轰动性的八卦', note: '正确的语境理解', correct: true,
              reason: 'scandal 指“让人震惊、被大肆议论的事”。在好莱坞，这通常意味着头版和小报。' },
            { key: 'B', en: 'a loud noise', cn: '一声巨响', note: '错误的形近联想', correct: false,
              reason: 'scandal 听起来像有动静，但它不是声音，是“事情本身引起的舆论风波”。' },
            { key: 'C', en: 'a formal agreement', cn: '一份正式协议', note: '错误的词义混淆', correct: false,
              reason: '没有人在谈签约，她说的是媒体会怎么给她们的关系定性。' }
          ],
          analysis: 'scandal 的关键不在“真假”，而在“会被议论”。Evelyn 很清楚明天报纸会怎么写，但她还是说了这句话——这就是她最珍贵的一次不体面。',
          wrongFeedback: '你选错了，Evelyn 没接住“我不想再藏着你”这句话的分量，Celia 收回手说“现在别说这种话”，雨声盖过了所有解释，气血 -10。',
          vocab: 'scandal 相关：a scandal broke（丑闻曝光）、scandalous（骇人听闻的）、tabloid scandal（小报丑闻）。',
          afterCorrect: 'Celia 怔了几秒，忽然笑出来，眼睛却红了：“你知道这句话会毁掉什么吗？”Evelyn 拉开后座的门，把伞递给她：“我知道。所以这一次，让我先下车。”雨里，两个人第一次并肩走进闪光灯。'
        }
      ],
      completeText: '第一章完成。第二天的头条果然很难听，但 Celia 把报纸折起来，只留下那张两个人共撑一把伞的照片。Evelyn 说她这辈子演过那么多角色，只有这一场没有剧本。'
    }
  ],

  // ==================== 耽美 ·《请以你的名字呼唤我》 ====================
  dual_male: [
    {
      id: 'cmbyn_1',
      index: 1,
      title: '第一章 · 泳池边的傍晚',
      novel: '请以你的名字呼唤我',
      speaker: {
        name: 'Oliver',
        avatar: window.VERSION_AVATARS.dual_male
      },
      storyText: '夏日傍晚，别墅后面的泳池被夕阳染成橘色，水面上浮着一层暖光，蝉声还没停。Elio 抱着两条毛巾跑过来时，Oliver 已经在水里泡了很久——他们下午说好一起去镇上，Elio 却把这件事忘得干干净净。',
      questions: [
        {
          plotDescription: 'Oliver 又一次忘记了他们下午的约定，无奈地笑着对 Elio 说了一句话。',
          line: 'Seriously? You forgot again? Just bail on me.',
          lineCn: '说真的？你又忘了？你又要放我鸽子。',
          prompt: "请根据上下文，选出画线词汇 'bail' 最准确的意思。",
          options: [
            { key: 'A', en: 'chill', cn: '放松', note: '错误的语境理解', correct: false,
              reason: 'chill 可以表示放松、冷静，但 Oliver 不是在说“放松”，他的语气里全是无奈和抱怨。' },
            { key: 'B', en: 'bail on me', cn: '抛下我 / 放鸽子', note: '正确的情绪回应', correct: true,
              reason: 'bail on someone 是美剧里极其高频的俚语：临时放某人鸽子、把烂摊子丢下不管。' },
            { key: 'C', en: 'bro code', cn: '兄弟法则', note: '错误的死板联想', correct: false,
              reason: '双男主之间确实常讲 bro code，但 bail 这个词本身和兄弟法则毫无关系。' }
          ],
          analysis: 'Oliver 又一次被放了鸽子，他没有真的发火，只是又气又好笑。bail on someone = 放某人鸽子、临阵脱逃。他的原话可以翻成：说真的？你又忘了？你又要放我鸽子。',
          wrongFeedback: '你选错了，Elio 没有理解 Oliver 的意思，两人陷入了尴尬的冷战，气血 -10。',
          vocab: '在《无耻之徒》等剧里，bail 最常见的本义是“保释”（bail out of jail），后来引申为“把某人从困境里捞出来”（bail someone out）。记住：当有人说 Don\'t bail on me，意思就是“别丢下我 / 别放我鸽子”。',
          afterCorrect: 'Elio 张了张嘴，最后只挤出一句“我没有”。Oliver 从水里抬起手，水珠甩到他脚边，笑了一下：“那就下来。”夕阳落在两个人之间的水面上，Elio 忽然觉得，这个夏天好像从这一刻才真正开始。'
        },
        {
          plotDescription: 'Oliver 不相信 Elio 的解释，语气里带着一点被磨平的火气。',
          line: "I'm not buying it. You always have a million excuses.",
          lineCn: '我不信。你总有成百上千个借口。',
          prompt: "选出 'excuses' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'apologies', cn: '道歉', note: '错误的语境理解', correct: false,
              reason: 'Oliver 要的不是道歉，而是不相信 Elio 的理由——他已经听腻了。' },
            { key: 'B', en: 'excuses', cn: '借口 / 托词', note: '正确的语境理解', correct: true,
              reason: 'excuse 作名词时最常见的含义就是“借口”，a million excuses 指“成百上千的借口”。' },
            { key: 'C', en: 'excuse me', cn: '打扰一下', note: '错误的死板记忆', correct: false,
              reason: 'excuse me 是“打扰一下”的固定说法，但这里的 excuses 是复数名词，和这个短语无关。' }
          ],
          analysis: 'buy it 在口语里是“相信”，不是“买它”；excuses 在这里是“借口”。Oliver 的意思很直接：我不信，你总有说不完的借口。',
          wrongFeedback: '你选错了，Elio 越解释越像在狡辩，泳池边安静得只剩下水声，气血 -10。',
          vocab: '口语高频：I don\'t buy it（我不信）、I don\'t buy your story（我不信你这套说辞）。听懂 buy it，比背十个单词都实用。',
          afterCorrect: 'Oliver 说完就低下头，手指在水面上划了一下。Elio 想解释，又觉得任何解释听起来都像借口。他索性脱了鞋，坐在池边，把脚伸进水里，轻轻碰了碰 Oliver 的胳膊。'
        },
        {
          plotDescription: 'Oliver 不再绕弯子，直视着 Elio，把话挑明。',
          line: "Just admit it. You didn't want to come in the first place.",
          lineCn: '承认吧。你从一开始就不想来。',
          prompt: "选出 'admit' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'allow to enter', cn: '准许进入', note: '错误的死板翻译', correct: false,
              reason: 'admit 确实有“准许进入”的意思（admit to a hospital），但放进这句话里完全不通。' },
            { key: 'B', en: 'invite', cn: '邀请', note: '错误的语境理解', correct: false,
              reason: 'invite 是“邀请”，而 Oliver 是在逼 Elio 承认一件事，不是约他来。' },
            { key: 'C', en: 'admit', cn: '承认', note: '正确的语境理解', correct: true,
              reason: 'admit 在对话里最常表示“承认”，admit it 就是“承认吧”。' }
          ],
          analysis: 'Oliver 要的不是解释，而是 Elio 承认自己没把约定当回事。admit it 三个字，比任何争吵都更戳人。',
          wrongFeedback: '你选错了，Oliver 等的不是解释，而是一句承认。沉默把两个人推得更远，气血 -10。',
          vocab: 'admit 的两个高频用法：admit doing something（承认做过某事）、admit that...（承认……）。作“准许进入”时多用于正式场合或医院。',
          afterCorrect: 'Elio 沉默了几秒，然后说：“不是不想来。是我怕来了以后，就不想走。”Oliver 看着他，没有接话，只是把手从水里伸了过来。'
        }
      ],
      completeText: '第一章完成。泳池的水慢慢凉下来，两个人谁都没有先上岸。这个夏天还很长，而有些话一旦说出口，就再也收不回去了。'
    }
  ],

  // ==================== 纯爱 ·《遇见你之前》 ====================
  pure_love: [
    {
      id: 'mebeforeyou_1',
      index: 1,
      title: '第一章 · 六个月的合同',
      novel: '遇见你之前',
      speaker: {
        name: 'Lou',
        avatar: window.VERSION_AVATARS.pure_love
      },
      storyText: '英格兰小镇的冬天，城堡改成的康复中心里暖气开得很足。Lou 穿着那件米色针织衫，抱着一份六个月的合同站在门口。房间里，Will 坐在轮椅上望着窗外，一直没有回头。',
      questions: [
        {
          plotDescription: 'Will 的语气很淡，像是在说一件和自己无关的事。Lou 攥着合同，没有立刻接话。',
          line: "We're broke, Lou. Not poor. Broke. There's a difference.",
          lineCn: '我们是没钱了，Lou。不是穷。是身无分文，这不一样。',
          prompt: "选出 'broke' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'broken', cn: '破碎的', note: '错误的形近词混淆', correct: false,
              reason: 'broken 才是“破碎的、坏掉的”。broke 在这里跟东西坏没坏没有关系。' },
            { key: 'B', en: 'having no money at all', cn: '身无分文、一分钱都没有', note: '正确的语境理解', correct: true,
              reason: 'broke 作形容词是口语里的“没钱的”。He is broke 就是“他身无分文”。' },
            { key: 'C', en: 'out of order', cn: '出故障了', note: '错误的语境理解', correct: false,
              reason: '“出故障”是 broken，而且 Will 说的是家里的钱，不是某台机器。' }
          ],
          analysis: 'broke 和 poor 都是“没钱”，但 broke 更强调当下“手头一分钱没有”的窘迫，poor 则是长期的贫困状态。Will 在意的就是这个区别。',
          wrongFeedback: '你选错了，Lou 以为他说的是“哪里坏了”，下意识问了一句“坏在哪”，Will 沉默了很久，气血 -10。',
          vocab: 'broke（身无分文，口语）、go broke（破产）、flat broke（一分钱都没有）。注意 broken 才是“破碎的”。',
          afterCorrect: 'Lou 把合同放在桌上，认真地说：“那就先不管钱。”Will 终于转过头，看了她一眼，那眼神像是在确认她是不是在开玩笑。她没笑，于是他也第一次没有反驳。'
        },
        {
          plotDescription: 'Will 终于转过头看着她。窗外的雪落在玻璃上，一层层化开。',
          line: "Everyone's already given up on me. Don't you dare do the same.",
          lineCn: '所有人都已经放弃我了。你不许也这样。',
          prompt: "选出 'given up on' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'stopped believing in', cn: '不再对……抱有希望、放弃', note: '正确的语境理解', correct: true,
              reason: 'give up on someone 是“对某人失望透顶、不再指望他”，是这句话最痛的落点。' },
            { key: 'B', en: 'handed something in', cn: '把东西交上去', note: '错误的死板翻译', correct: false,
              reason: 'hand in 才是“上交”，give up 后面接 on 的时候，对象是人，不是物品。' },
            { key: 'C', en: 'given a gift', cn: '送了礼物', note: '错误的语义联想', correct: false,
              reason: 'give 是“给”，但 give up on 是固定短语，和礼物没有关系。' }
          ],
          analysis: 'give up on someone 和 give up 完全不同：后者是自己放弃，前者是“对某个人不再抱希望”。Will 说的其实是一句求助。',
          wrongFeedback: '你选错了，Lou 听见“give”就以为是“给”，轻轻应了一声“好”，Will 眼里的光彻底熄了，气血 -10。',
          vocab: 'give up on someone（对某人失望、放弃某人）vs give up（自己放弃）。差一个 on，意思差别很大。',
          afterCorrect: 'Lou 走到窗边，把窗帘拉开一点，让雪光落进房间：“我不会。”她说得很轻，但没有躲开他的眼睛。Will 别过脸去，喉结动了一下，很久才说：“那就别把我当病人。”'
        },
        {
          plotDescription: '那天晚上，Lou 留下来陪他看完了一整部老电影。片尾字幕升起时，Will 忽然开口。',
          line: "You matter to me. That's the whole thing, Lou.",
          lineCn: '你对我很重要。就是这样，Lou。',
          prompt: "选出 'matter' 在这句话里最准确的意思。",
          options: [
            { key: 'A', en: 'be important', cn: '重要、有意义', note: '正确的语境理解', correct: true,
              reason: 'matter 作动词就是“要紧、重要”。You matter to me = 你对我很重要。' },
            { key: 'B', en: 'a physical substance', cn: '物质', note: '错误的死板翻译', correct: false,
              reason: 'matter 作名词可以指“物质”，但这里它是动词，后面还跟着 to me。' },
            { key: 'C', en: 'a problem to solve', cn: '一个要解决的问题', note: '错误的短语混淆', correct: false,
              reason: 'What\'s the matter? 才是“怎么了”，而这句话里没有 the matter 这个结构。' }
          ],
          analysis: 'matter 作动词的意思是“重要”。Will 用最简单的三个词说了最重的一句话——不是“我喜欢你”，而是“你对我有意义”。',
          wrongFeedback: '你选错了，Lou 把“你对我很重要”听成了“你有什么事”，认真地追问“怎么了”，Will 笑不出来，气血 -10。',
          vocab: 'matter 三用：It matters（这很重要）、What\'s the matter?（怎么了）、as a matter of fact（事实上）。',
          afterCorrect: 'Lou 抱着毯子坐在原地，屏幕的光还停在她脸上。她想说点什么，最后只说了一句：“你也是。”Will 没接话，但那天她离开时，他第一次说了“明天见”。'
        }
      ],
      completeText: '第一章完成。雪还在下，六个月的合同被 Lou 贴在了冰箱上。她原先只是想做好一份工作，现在却开始希望，这六个月能慢一点。'
    }
  ]
};

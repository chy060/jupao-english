/**
 * 剧情模板库 Templates —— 独立于主逻辑
 *
 * 题目结构（小说式对白题）：
 *   title       中文标题 = 目标词的释义，如「边界感」
 *   scene       剧情对白 [{ who: 说话人, en: 英文台词, cn: 中文翻译 }]
 *   options     3 个英文回复 [{ en, cn, correct }]，顺序固定（解析按 A/B/C 引用）
 *               —— 正确选项自然用上目标词，另外两个分别是讨好/极端/逃避
 *   explanation 选完后的中文逻辑解析
 *
 * 查找优先级：
 *   1. specific[versionId][wordId]  版本专属剧情
 *   2. byWord[wordId]               通用剧情（所有版本共用）
 *   3. generic                      兜底（待补充剧情的词）
 */
window.TEMPLATES = {

  // ==================== 版本专属剧情 ====================
  specific: {

    // ---------- 大女主 ----------
    female_lead: {
      87: [{ // Boundaries 边界感
        title: '边界感',
        scene: [
          { who: 'Client', en: 'Hey, I need you to come in today. The subtitle timing is a mess.', cn: '嘿，今天需要你来上班，字幕时间轴乱成一团。' },
          { who: 'Client', en: 'You know, young people need to work harder.', cn: '你知道的，年轻人就该更拼一点。' }
        ],
        options: [
          { en: "Okay, I will be there in an hour. I'm a bit exhausted, but work is work.", cn: '好，我一小时后到。虽然有点累，但工作就是工作。', correct: false },
          { en: "Are you crazy? It's Saturday! You're a freeloader trying to steal my weekend!", cn: '你疯了吗？今天是周六！你这个白嫖怪想抢走我的周末！', correct: false },
          { en: "Sorry, I can't make it today. I need to set some boundaries between my work and my personal life. Let's fix it on Monday.", cn: '抱歉，今天不行。我需要在工作和生活之间划清边界，周一再处理吧。', correct: true }
        ],
        explanation: 'A 是典型的讨好型内耗，选了自己憋屈；B 虽然解气，但用词过于极端，不够体面；只有 C 用 set some boundaries 礼貌而坚定地拒绝了无理要求——既守住了周末，也没撕破脸，这才是大女主的边界感。'
      }],
      1: [{ // Broke 身无分文
        title: '身无分文',
        scene: [
          { who: 'Bestie', en: 'My card was declined again. I am completely broke.', cn: '我的卡又被拒了。我彻底身无分文了。' },
          { who: 'Bestie', en: 'Look at us, eating instant noodles on the sidewalk.', cn: '看看我们，蹲在人行道上吃泡面。' }
        ],
        options: [
          { en: 'Yeah... life is so unfair to us.', cn: '是啊……生活对我们太不公平了。', correct: false },
          { en: "So what? I'm broke, not broken. Tomorrow I start a side hustle.", cn: '那又怎样？我只是身无分文，不是完蛋了。明天我就去搞副业。', correct: true },
          { en: 'Maybe we should just call our parents for money.', cn: '要不我们找爸妈要点钱吧。', correct: false }
        ],
        explanation: 'A 是卖惨，越说越丧；C 是伸手，把处境交给了别人；B 用 broke 承认现实，却立刻转向搞钱计划——承认穷，但不接受穷，这就是大女主的野心。'
      }],
      82: [{ // Ghost 玩消失
        title: '玩消失',
        scene: [
          { who: 'Him', en: '(After two weeks of silence) Hey, been busy. Miss me?', cn: '（消失两周后）嘿，最近挺忙的。想我了吗？' }
        ],
        options: [
          { en: 'I missed you so much! Let us meet up.', cn: '我好想你！我们见一面吧。', correct: false },
          { en: "You ghosted me for two weeks, and now you text me like nothing happened? Don't contact me again.", cn: '你玩消失两周，现在像没事人一样发消息？别再联系我了。', correct: true },
          { en: "It's okay, I understand. You must have been really busy.", cn: '没关系，我理解，你肯定真的很忙。', correct: false }
        ],
        explanation: 'A 是倒贴，把主动权全交出去；C 是无底线体谅，只会让对方下次继续消失；B 用 ghosted 直接点破他的行为，并且干脆切断——大女主的时间很贵，不陪玩消失的人。'
      }]
    },

    // ---------- 大男主 ----------
    male_lead: {
      1: [{ // Broke 身无分文
        title: '身无分文',
        scene: [
          { who: 'Friend', en: 'The office is empty and your company is gone. You are broke. Give it up.', cn: '办公室空了，公司也没了。你身无分文，放弃吧。' }
        ],
        options: [
          { en: "You're right. Maybe I should just quit.", cn: '你说得对，也许我该放弃了。', correct: false },
          { en: "Broke is a chapter, not the ending. Give me a year.", cn: '身无分文只是一个章节，不是结局。给我一年。', correct: true },
          { en: 'Can you lend me some money to survive first?', cn: '你能先借我点钱活下去吗？', correct: false }
        ],
        explanation: 'A 是自我否定，气势先输了；C 是把希望寄托在别人身上；B 用 broke 直面处境，却把它定义成"一个章节"——大男主的字典里没有认输。'
      }],
      87: [{ // Boundaries 边界感
        title: '边界感',
        scene: [
          { who: 'Cousin', en: 'Lend me fifty thousand. Family helps family, right?', cn: '借我五万。一家人不就该互相帮吗？' },
          { who: 'Cousin', en: "You wouldn't say no to family, would you?", cn: '你不会拒绝家人吧？' }
        ],
        options: [
          { en: 'Fine, take the money. Just stop making a scene.', cn: '行，钱拿去。别闹了。', correct: false },
          { en: 'Family? You are robbing me and calling it love!', cn: '家人？你这是在抢我，还管这叫爱！', correct: false },
          { en: "I need to set some boundaries. My money is not your emergency fund.", cn: '我得设立边界了。我的钱不是你的备用金。', correct: true }
        ],
        explanation: 'A 是被道德绑架，一次妥协就有下一次；B 情绪爆炸，反而显得你理亏；C 用 boundaries 平静地把"钱"和"情"分开——守得住底线，才护得住自己。'
      }],
      82: [{ // Ghost 玩消失
        title: '玩消失',
        scene: [
          { who: 'Partner', en: 'Long time no see, huh? How have you been?', cn: '好久不见啊，最近怎么样？' },
          { who: 'Partner', en: '(He vanished for months right when the deal fell apart.)', cn: '（在合作崩盘的关键时刻，他消失了几个月。）' }
        ],
        options: [
          { en: 'Where were you? I was worried sick about you.', cn: '你去哪了？我担心死了。', correct: false },
          { en: 'You ghosted me when it mattered most. We are done.', cn: '最关键的时候你玩消失。我们到此为止。', correct: true },
          { en: 'Welcome back, brother. Let us forget the past.', cn: '欢迎回来，兄弟。过去的事就翻篇吧。', correct: false }
        ],
        explanation: 'A 是把自己的担心摆在第一位，格局小了；C 是一句"翻篇"把背叛轻轻放过；B 用 ghosted 点破他的临阵脱逃，并当场切割——这才是大男主的杀伐果断。'
      }]
    },

    // ---------- 百合 ----------
    dual_female: {
      1: [{ // Broke 身无分文
        title: '身无分文',
        scene: [
          { who: 'Her', en: "We're broke, aren't we? One bowl of noodles for two people.", cn: '我们身无分文了吧？一碗面两个人分。' },
          { who: 'Her', en: 'Maybe you should just go home to your family.', cn: '也许你该回你自己家去。' }
        ],
        options: [
          { en: 'Maybe you are right. I will go home tomorrow.', cn: '也许你说得对。我明天就回家。', correct: false },
          { en: "Even if we're broke, we still have each other. That's not nothing.", cn: '就算身无分文，我们还有彼此。这不算一无所有。', correct: true },
          { en: 'Who says I am poor? I can find work tomorrow.', cn: '谁说我穷了？我明天就去找工作。', correct: false }
        ],
        explanation: 'A 是被她的丧气推着走，等于放弃这段关系；C 只顾嘴硬，没接住她的情绪；B 用 broke 承认现实，却把"彼此"放在了钱前面——百合线最动人的就是这句"我们还有彼此"。'
      }],
      87: [{ // Boundaries 边界感
        title: '边界感',
        scene: [
          { who: 'Her', en: 'Why is your phone face down? We shouldn\'t have secrets.', cn: '你的手机为什么扣着放？我们之间不该有秘密。' },
          { who: 'Her', en: 'Let me see your messages. If you love me, you will.', cn: '让我看看你的消息。你爱我就会给我看。' }
        ],
        options: [
          { en: 'Okay, take it. Look at whatever you want.', cn: '好，拿去吧，你想看什么就看。', correct: false },
          { en: 'You are insane! Are you spying on me now?', cn: '你疯了吧！你现在是在监视我吗？', correct: false },
          { en: 'I love you, but I need some boundaries. Trust does not mean no privacy.', cn: '我爱你，但我需要边界感。信任不等于没有隐私。', correct: true }
        ],
        explanation: 'A 是彻底让渡自己，换来的只会是更多索取；B 把问题升级成吵架，伤人伤己；C 用 boundaries 温柔而坚定地划了线——爱你，但不等于把自我交出去。'
      }],
      82: [{ // Ghost 玩消失
        title: '玩消失',
        scene: [
          { who: 'Her', en: 'Sorry I did not reply. My phone died... for a week.', cn: '抱歉没回你。我手机坏了……坏了一整个星期。' },
          { who: 'Her', en: '(But her stories were updated every single day.)', cn: '（可她的朋友圈每天都在更新。）' }
        ],
        options: [
          { en: "It's okay. I will wait for you.", cn: '没关系，我等你。', correct: false },
          { en: 'You ghosted me while posting stories every day. Explain that.', cn: '你一边对我玩消失，一边天天发动态。解释一下。', correct: true },
          { en: 'Maybe we should take a break from each other.', cn: '也许我们该冷静一段时间。', correct: false }
        ],
        explanation: 'A 是自我感动式的等待；C 是在替她找台阶，问题被回避；B 用 ghosted 把事实摆到桌面上——被消失的人，有资格要一个解释。'
      }]
    },

    // ---------- 耽美 ----------
    dual_male: {
      1: [{ // Broke 身无分文
        title: '身无分文',
        scene: [
          { who: 'Him', en: 'The tank is empty and so are our pockets. Looks like we are broke.', cn: '油箱空了，口袋也空了。看来我们身无分文了。' },
          { who: 'Him', en: 'If we split up, maybe one of us makes it.', cn: '如果分开走，也许还能活一个。' }
        ],
        options: [
          { en: 'I can find us some money. Stay here and wait.', cn: '我去弄点钱。你在这等我。', correct: false },
          { en: "Broke or not, I'm not leaving you behind.", cn: '身无分文又怎样，我不会丢下你。', correct: true },
          { en: 'You are right. We move faster alone.', cn: '你说得对。一个人跑得更快。', correct: false }
        ],
        explanation: 'A 是把他留在原地，等于松开手；C 是理性但凉薄，没有接住那句试探；B 用 broke 接住了"一无所有"的处境，却给出了"不丢下你"的答案——这就是耽美线的宿命感。'
      }],
      87: [{ // Boundaries 边界感
        title: '边界感',
        scene: [
          { who: 'Him', en: 'I already turned down that job for you. You would have hated it.', cn: '我已经替你推掉那份工作了。你肯定不喜欢。' },
          { who: 'Him', en: "See? I always know what's best for you.", cn: '看吧？我总是最懂什么对你最好。' }
        ],
        options: [
          { en: "You're right. Thanks for taking care of me.", cn: '你说得对。谢谢你照顾我。', correct: false },
          { en: 'Who do you think you are? Stay out of my life!', cn: '你以为你是谁？别插手我的生活！', correct: false },
          { en: 'I need to set some boundaries. Ask me before you decide for me.', cn: '我需要边界感。替我做决定之前，先问我。', correct: true }
        ],
        explanation: 'A 是把人生交到别人手里；B 是直接开战，把边界谈成了决裂；C 用 boundaries 平静地要回决定权——爱一个人，不等于让他替你做人生选择。'
      }],
      82: [{ // Ghost 玩消失
        title: '玩消失',
        scene: [
          { who: 'Him', en: 'I am back. Did you miss me?', cn: '我回来了。想我了吗？' },
          { who: 'Him', en: '(Years ago, he vanished the night the mission failed.)', cn: '（多年前任务失败的那一夜，他不告而别。）' }
        ],
        options: [
          { en: 'I thought you were dead. You ghosted me for years.', cn: '我以为你死了。你玩消失了好几年。', correct: true },
          { en: 'Welcome back, brother. The past is the past.', cn: '欢迎回来，兄弟。过去就过去了。', correct: false },
          { en: 'I do not want to see you again. Leave.', cn: '我不想再见到你。滚。', correct: false }
        ],
        explanation: 'B 是一句"过去了"把多年的空白轻轻抹掉；C 是情绪先行，把重逢变成驱逐；A 用 ghosted 说出这些年的等待与愤怒——爱恨都藏在那一句"我以为你死了"里。'
      }]
    },

    // ---------- 纯爱 ----------
    pure_love: {
      1: [{ // Broke 身无分文
        title: '身无分文',
        scene: [
          { who: 'Him', en: 'Sorry about the food stall. I am a bit broke this month.', cn: '抱歉只能请你吃大排档。我这个月有点身无分文。' },
          { who: 'Him', en: 'You deserve somewhere much nicer.', cn: '你值得更好的地方。' }
        ],
        options: [
          { en: 'Then treat me somewhere nice next time.', cn: '那下次你请我去好一点的地方。', correct: false },
          { en: "I don't care if you're broke. I just want to be with you.", cn: '我不在乎你身无分文。我只想和你在一起。', correct: true },
          { en: "It's fine, I'll pay for everything tonight.", cn: '没事，今晚我全包了。', correct: false }
        ],
        explanation: 'A 是温柔里带刺，让他更窘迫；C 是用钱解围，反而拉开了距离；B 用 broke 接住他的话，把重点落在"和你在一起"——纯爱的温柔，是不让对方因为穷而自卑。'
      }],
      87: [{ // Boundaries 边界感
        title: '边界感',
        scene: [
          { who: 'Him', en: 'Show me your chats. We love each other, so there should be no secrets.', cn: '把你聊天记录给我看。我们相爱，就不该有秘密。' }
        ],
        options: [
          { en: 'Okay, take my phone. Look at whatever you want.', cn: '好，手机给你，随便看。', correct: false },
          { en: "If you loved me, you wouldn't even ask for this.", cn: '如果你爱我，根本不会提这种要求。', correct: false },
          { en: 'I love you, but I still have my boundaries. Let us talk about trust instead.', cn: '我爱你，但我也有边界感。我们该聊的是信任。', correct: true }
        ],
        explanation: 'A 是把自己交出去，边界一旦破了就再也立不起来；B 是指责，把沟通变成了审判；C 用 boundaries 守住自己，同时把话题拉回"信任"——好的爱情，是两个完整的人在一起。'
      }],
      82: [{ // Ghost 玩消失
        title: '玩消失',
        scene: [
          { who: 'Him', en: 'Sorry, I have just been really busy lately.', cn: '抱歉，我最近真的太忙了。' },
          { who: 'Him', en: '(It has been a whole week of silence.)', cn: '（整整一周，他一句话都没有。）' }
        ],
        options: [
          { en: "It's okay. I understand you're busy.", cn: '没事，我理解你很忙。', correct: false },
          { en: 'You ghosted me for a whole week. Do you know how that felt?', cn: '你对我玩消失整整一周。你知道那是什么感觉吗？', correct: true },
          { en: 'Let us meet up. I miss you so much.', cn: '我们见一面吧，我好想你。', correct: false }
        ],
        explanation: 'A 是把委屈咽下去，他永远不知道你有多难过；C 是用撒娇掩盖问题，下次还会重演；B 用 ghosted 说出真实感受——温柔不等于沉默，委屈也要被看见。'
      }]
    }
  },

  // ==================== 通用剧情（所有版本共用） ====================
  byWord: {

    2: [{ // Rent 房租
      title: '房租',
      scene: [
        { who: 'Landlord', en: "Rent's due tomorrow. I have been patient with you.", cn: '房租明天到期。我已经很宽容了。' }
      ],
      options: [
        { en: 'Can you wait one more month? I will figure something out.', cn: '能再等一个月吗？我会想办法的。', correct: false },
        { en: "Here's your rent. Count it twice.", cn: '你的房租，点两遍。', correct: true },
        { en: "Stop chasing me. Everyone is so greedy.", cn: '别催了。人人都这么贪。', correct: false }
      ],
      explanation: 'A 是拖延，问题只会越来越大；C 是情绪化迁怒，还显得理亏；B 直接用 rent 把钱结清——不废话、不欠人情，这是最体面的处理方式。'
    }],

    7: [{ // Scam 骗局
      title: '骗局',
      scene: [
        { who: 'Friend', en: 'This crypto thing doubles your money in a week. Trust me.', cn: '这个加密货币一周就能翻倍。信我。' }
      ],
      options: [
        { en: 'Count me in! Let us get rich!', cn: '算我一个！一起发财！', correct: false },
        { en: "That's a scam. Nobody doubles money in a week.", cn: '那是骗局。没人能一周翻倍。', correct: true },
        { en: 'Whatever, I am not interested.', cn: '随便吧，我没兴趣。', correct: false }
      ],
      explanation: 'A 是被煽动，冲进去就是被收割；C 是懒得争辩，但也没提醒朋友；B 用 scam 一针见血，既保护自己也点醒了对方。'
    }],

    42: [{ // Freak out 崩溃/抓狂
      title: '崩溃抓狂',
      scene: [
        { who: 'Mom', en: 'Your cat knocked over the fish tank! Water is everywhere!', cn: '你的猫把鱼缸撞翻了！到处都是水！' }
      ],
      options: [
        { en: "Don't freak out, Mom. I'll clean it up right now.", cn: '别崩溃，妈。我马上收拾。', correct: true },
        { en: "It's just water. Why are you so dramatic?", cn: '不就是水吗？你至于这么夸张吗？', correct: false },
        { en: 'Not my problem. Deal with it yourself.', cn: '不关我的事。你自己处理。', correct: false }
      ],
      explanation: 'B 是在否定她的情绪，火上浇油；C 是甩锅，最伤人；A 用 freak out 接住了妈妈的崩溃，先安抚再解决——情绪稳的人，才控得住场。'
    }],

    83: [{ // Red flag 危险信号
      title: '危险信号',
      scene: [
        { who: 'Bestie', en: 'He checks my phone every night. But he says he loves me.', cn: '他每晚都查我手机。但他说他爱我。' }
      ],
      options: [
        { en: "That's a red flag. Love doesn't check your phone.", cn: '这是危险信号。爱不是查手机。', correct: true },
        { en: 'He loves you. Stop overthinking it.', cn: '他爱你。别多想了。', correct: false },
        { en: 'Maybe you are just too sensitive.', cn: '也许你就是太敏感了。', correct: false }
      ],
      explanation: 'B 是在替对方开脱；C 是受害者有罪论，会让她更不敢说；A 用 red flag 直接点出问题——真正的朋友，不会在你被控制时劝你懂事。'
    }],

    145: [{ // Stand up for 捍卫
      title: '捍卫',
      scene: [
        { who: 'Coworker', en: 'The manager blamed you for his mistake again. In front of everyone.', cn: '经理又把他自己的错推给你了，当着所有人的面。' }
      ],
      options: [
        { en: "I'll talk to him and stand up for myself.", cn: '我会去找他谈，为自己说话。', correct: true },
        { en: "It's fine. I don't want any trouble.", cn: '算了，我不想惹麻烦。', correct: false },
        { en: 'Whatever. Everyone knows he is like that.', cn: '随便吧。大家都知道他就那样。', correct: false }
      ],
      explanation: 'B 是忍气吞声，下次还会被甩锅；C 是假装看开，其实放弃了改变；A 用 stand up for 表明态度——捍卫自己，不需要别人批准。'
    }],

    186: [{ // Procrastinate 拖延
      title: '拖延',
      scene: [
        { who: 'Roommate', en: 'Did you start the essay? It is due tomorrow morning.', cn: '你的论文开始写了吗？明早就要交了。' }
      ],
      options: [
        { en: 'I keep procrastinating. Sit with me and force me to start.', cn: '我一直在拖延。陪我坐着，逼我开始。', correct: true },
        { en: 'I will start now. I can finish it tonight.', cn: '我现在就开始，今晚能写完。', correct: false },
        { en: 'Stop checking on me. I know my own business.', cn: '别管我。我自己的事我清楚。', correct: false }
      ],
      explanation: 'B 听起来积极，但没有正视"拖延"这个毛病，多半今晚还是拖；C 是防御性发火；A 用 procrastinate 承认问题，还主动找人监督——承认它，才改得掉它。'
    }]
  },

  // ==================== 兜底模板（待补充剧情的词） ====================
  generic: {
    questionTemplate: '下面哪句话的意思最接近「{meaning}」？'
  }
};

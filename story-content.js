// ============================================================
// WATER COLOUR EXHIBITION — Full Story Content
// Drop this into your <script> block, replace the STORY constant
// Usage: STORY[state.lang][chapter][branch]
// branch: 'main' | 'a' | 'b'
// ============================================================

const STORY = {

  // ─────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────
  en: {

    chapter1: {
      title: "CHAPTER 1 — THE MORNING",
      branch: "main", // no choice, linear
      text: `The water here has always been this colour.

Not quite blue. Not quite green. Something in between — the kind of colour that only exists when sunlight filters through mangrove roots and comes out the other side changed.

You've lived here your whole life. You know which currents run warm in the afternoon. You know which roots shelter the smallest fish. You know the sound of Lung Prasert's boat — that particular knock of the engine — before it even rounds the headland.

This morning is the same as every morning. The tide pulls back. The mudflats breathe. Somewhere above the water, a heron waits.

Nothing has happened yet. Everything is still whole.`,
      buttonText: "Keep going →"
    },

    chapter2: {
      title: "CHAPTER 2 — THE RUMOUR",
      branch: "main",
      text: `It starts as a sound more than a word.

The older ones gather near the surface more than usual. The fishermen's voices carry differently — lower, slower. A phrase keeps appearing in their conversations, rising and sinking like something caught in a current.

สะพานบก. Land bridge.

A corridor, they say. Ninety kilometres of road and rail, slicing across the peninsula from the Andaman to the Gulf. Two new deep-sea ports. Millions of containers. Thousands of jobs.

Someone says: *think of what it will bring.*
Someone else says nothing. Just looks at the water.`,
      choicePrompt: "What do you do?",
      choiceA: "🔍 I swim closer. I need to understand.",
      choiceB: "🌊 I dive deeper. I don't want to know yet."
    },

    chapter3: {
      title: "CHAPTER 3 — THE CHANGE",

      a: {
        intro: `You listen. You learn.

The maps show a line — clean, confident, red on white. It cuts through 8,000 hectares of mangrove. Not around. Through.

The reports use words like *unavoidable impact* and *acceptable loss*. They talk about compensation for fishing communities. Resettlement. New livelihoods.

What they don't say: the mangroves took three hundred years to become what they are. They are not just trees. They are nursery, shelter, filter, memory. Every creature you have ever known was born somewhere inside their roots.`,
        text: `Months pass. The water changes before anything else does.

Silt clouds the shallows. The light that used to filter green-gold through the roots now struggles to reach the bottom. You notice the small fish moving — not playfully, but urgently, searching for something that used to be there.

Lung Prasert's boat comes home earlier than it used to. And with less.

He sits at the bow for a long time after he ties up. He doesn't say anything. His grandson sits next to him, learning to read the water the way Lung Prasert learned from his father.

The boy doesn't know yet that what he's learning may not apply to the sea he inherits.`
      },

      b: {
        intro: `You go deep. You feel it before you understand it.

The water changes slowly at first — the way a room changes when someone you love has left it. Nothing you can point to. Just a quality of the light. A gap in the sound.

Then faster.`,
        text: `The current shifts. The mangrove roots that used to hold the sediment steady start to release it. The water that was clear in the afternoon turns murky by midday.

You find yourself swimming in circles, searching for something you can't name.

It's the smell. The water used to smell like earth and salt and something alive. Now it just smells like water.

Lung Prasert's grandson asks his grandfather why the fish are smaller than in the photographs on the wall. Lung Prasert doesn't answer right away.

*The sea is tired*, he finally says. *Same as me.*`
      },

      buttonText: "Continue →"
    },

    chapter4: {
      title: "CHAPTER 4 — THE QUESTION",
      branch: "main", // paths converge here
      text: `Here is the thing no one wants to say out loud:

There are families in the Northeast who are hungry now. Families whose children leave for Bangkok at seventeen and don't come back. Families for whom the land bridge means a road to something other than this.

And there are three hundred families along this coast whose grandparents are buried in view of the water. Whose knowledge of the tides is so deep it lives in their bodies. Who have no Plan B because the sea was never supposed to need one.

The bridge will feed some people and displace others.
The question is not whether this is true.
The question is what we do with that truth.`,
      choicePrompt: "What do you believe?",
      choiceA: "⚖️ Progress has to cost something. That's always been true.",
      choiceB: "🌿 Some costs can't be repaid. Some things shouldn't be lost."
    },

    chapter5: {
      title: "CHAPTER 5 — THE WATER REMEMBERS",

      a: {
        text: `Maybe you're right.

Every road was once a forest. Every city was once a field. The world has always moved forward by leaving something behind. Maybe this is just the next chapter in a story that has always been written this way.

But you stay in the water a little longer than you need to.

You watch Lung Prasert's grandson trace his hand through the current, the way the old man taught him. The boy doesn't know why he does it. It's just something his grandfather showed him. A way of reading the water that has no name.

You wonder if he'll teach it to his own children.

You wonder if there will still be water worth reading.`
      },

      b: {
        text: `Maybe you're right.

There are things that, once broken, do not reassemble. The mangroves that took three centuries to grow. The knowledge that lives only in the hands of people who learned it from people who are now old. The particular colour of this water at this hour.

You don't know what comes next. Neither does the sea.

But you are still here. And the water still moves the way it always has — in and out, in and out — like something breathing. Like something that hasn't given up yet.

Lung Prasert's grandson is still learning to read the tide.

Maybe that's enough to hold onto.`
      },

      bowlText: {
        a: `<strong>{name}</strong>, you chose to keep moving forward.\n\nSo did everyone else in this bowl. But you all got here differently — and maybe that's the point.`,
        b: `<strong>{name}</strong>, you chose to hold on to what matters.\n\nEvery creature in this bowl heard the same story. Some chose like you. Some didn't. The water holds all of you the same.`
      }
    }
  },

  // ─────────────────────────────────────────────
  // ภาษาไทย
  // ─────────────────────────────────────────────
  th: {

    chapter1: {
      title: "บทที่ 1 — เช้าวันนั้น",
      branch: "main",
      text: `น้ำแถวนี้เป็นสีนี้มาตลอด

ไม่ฟ้า ไม่เขียว แต่เป็นอะไรบางอย่างระหว่างนั้น สีแบบที่มีได้เฉพาะตอนแสงแดดลอดผ่านรากโกงกาง แล้วออกมาอีกด้านในแบบที่เปลี่ยนไปนิดหน่อย

คุณอยู่ที่นี่มาทั้งชีวิต รู้ว่าช่วงบ่ายกระแสน้ำตรงไหนอุ่น รู้ว่ารากไหนเป็นที่หลบของปลาตัวเล็ก รู้แม้กระทั่งเสียงเครื่องเรือของลุงประเสริฐ — เสียงเคาะแบบนั้น — ก่อนที่เรือจะโผล่พ้นแหลมมาด้วยซ้ำ

เช้าวันนี้ก็เหมือนทุกเช้า น้ำลด หาดโคลนเหมือนกำลังหายใจ นกกระสาตัวหนึ่งยืนนิ่งอยู่เหนือน้ำ

ยังไม่มีอะไรเกิดขึ้น ทุกอย่างยังสมบูรณ์อยู่`,
      buttonText: "อ่านต่อ →"
    },

    chapter2: {
      title: "บทที่ 2 — ข่าวลือ",
      branch: "main",
      text: `มันเริ่มจากเสียง มากกว่าจะเป็นคำพูด

ปลาแก่ ๆ ลอยขึ้นมาใกล้ผิวน้ำบ่อยกว่าปกติ เสียงชาวประมงฟังดูเปลี่ยนไป ต่ำลง ช้าลง แล้วก็มีคำคำหนึ่งที่โผล่ขึ้นมาเรื่อย ๆ ในบทสนทนา ลอยขึ้นแล้วจมหาย เหมือนอะไรบางอย่างที่ติดอยู่ในกระแสน้ำ

แลนด์บริดจ์

ทางสัญจร เขาว่ากัน ยาวเก้าสิบกิโล ตัดข้ามคาบสมุทรจากฝั่งอันดามันไปอ่าวไทย มีท่าเรือน้ำลึกสองแห่ง ตู้สินค้าหลายล้านตู้ งานอีกเป็นหมื่นตำแหน่ง

ใครบางคนพูดว่า "ลองคิดดูสิว่ามันจะพาอะไรเข้ามา"

อีกคนไม่พูดอะไรเลย แค่มองลงไปในน้ำ`,
      choicePrompt: "คุณจะทำยังไง?",
      choiceA: "🔍 ว่ายเข้าไปใกล้ขึ้น อยากรู้ว่ามันคืออะไร",
      choiceB: "🌊 ดำลึกลงไป ยังไม่อยากรับรู้ตอนนี้"
    },

    chapter3: {
      title: "บทที่ 3 — ความเปลี่ยนแปลง",

      a: {
        intro: `คุณฟัง คุณค่อย ๆ เข้าใจ

แผนที่แสดงเส้นตรงสีแดง เส้นที่ดูมั่นใจ หนักแน่น พาดผ่านป่าโกงกางกว่าแปดพันเฮกตาร์ ไม่ได้อ้อม แต่ตัดผ่านตรง ๆ

รายงานใช้คำอย่าง "ผลกระทบที่หลีกเลี่ยงไม่ได้" และ "ความสูญเสียที่ยอมรับได้" พูดถึงเงินชดเชย การย้ายถิ่น อาชีพใหม่สำหรับชุมชนประมง

แต่สิ่งที่ไม่มีอยู่ในรายงาน คือป่าโกงกางพวกนี้ใช้เวลาสามร้อยปีกว่าจะเติบโตมาเป็นแบบทุกวันนี้ มันไม่ใช่แค่ต้นไม้ แต่มันคือที่กำเนิด ที่หลบภัย ตัวกรอง และความทรงจำของทุกชีวิตที่เคยเติบโตในรากเหล่านั้น`,

        text: `หลายเดือนผ่านไป สิ่งแรกที่เปลี่ยนคือน้ำ

ตะกอนเริ่มขุ่นอยู่ตามน้ำตื้น แสงที่เคยลอดผ่านรากโกงกางเป็นสีทองอมเขียว ตอนนี้แทบลงไปไม่ถึงพื้น

ปลาตัวเล็ก ๆ เริ่มย้ายถิ่น ไม่ได้ว่ายเล่นเหมือนเดิม แต่เหมือนกำลังรีบหาบางอย่างที่เคยอยู่ตรงนั้น

เรือลุงประเสริฐกลับเข้าฝั่งเร็วกว่าเมื่อก่อน และได้ปลาน้อยลงกว่าเดิม

หลังผูกเรือเสร็จ แกนั่งเงียบอยู่ตรงหัวเรือนานมาก หลานชายนั่งอยู่ข้าง ๆ กำลังเรียนรู้วิธีอ่านกระแสน้ำ แบบเดียวกับที่ลุงประเสริฐเคยเรียนจากพ่อของตัวเอง

เด็กคนนั้นยังไม่รู้เลยว่าสิ่งที่กำลังเรียน อาจใช้ไม่ได้กับทะเลที่เขาจะเติบโตมาอยู่ด้วย`
      },

      b: {
        intro: `คุณดำลึกลงไป รู้สึกถึงบางอย่างก่อนจะเข้าใจมันจริง ๆ

ตอนแรกน้ำเปลี่ยนช้ามาก เหมือนห้องที่เปลี่ยนไปหลังจากใครบางคนที่คุณรักจากไป ไม่มีอะไรชัดเจน แค่แสงบางอย่างที่หายไป หรือเสียงบางอย่างที่เงียบลง

แล้วทุกอย่างก็เริ่มเร็วขึ้น`,

        text: `กระแสน้ำเปลี่ยนไป รากโกงกางที่เคยยึดตะกอนไว้เริ่มปล่อยมันออกมา

น้ำที่เคยใสในช่วงบ่าย เริ่มขุ่นตั้งแต่เที่ยงวัน

คุณว่ายวนไปมา เหมือนกำลังหาบางสิ่งที่อธิบายไม่ถูก

มันคือกลิ่น

เมื่อก่อนน้ำแถวนี้มีกลิ่นดิน กลิ่นเกลือ แล้วก็กลิ่นบางอย่างที่มีชีวิต

ตอนนี้มันเหลือแค่กลิ่นน้ำ

หลานลุงประเสริฐถามว่าทำไมปลาถึงตัวเล็กกว่าที่เห็นในรูปเก่า ๆ บนผนัง

ลุงประเสริฐเงียบไปพักหนึ่ง ก่อนจะตอบเบา ๆ

"ทะเลมันเหนื่อยแล้ว"

"เหมือนลุงนั่นแหละ"`
      },

      buttonText: "อ่านต่อ →"
    },

    chapter4: {
      title: "บทที่ 4 — คำถาม",
      branch: "main",
      text: `มีบางอย่างที่ไม่มีใครอยากพูดออกมาดัง ๆ

มีครอบครัวในภาคอีสานที่ยังลำบากอยู่ตอนนี้ มีเด็กหลายคนที่ออกจากบ้านไปกรุงเทพตั้งแต่อายุสิบเจ็ด แล้วไม่เคยกลับมาอีก

สำหรับบางคน สะพานบกอาจหมายถึงโอกาสที่จะได้มีชีวิตอีกแบบ

แต่ในขณะเดียวกัน ก็มีสามร้อยครอบครัวตามแนวชายฝั่งนี้ ที่ปู่ย่าตายายถูกฝังอยู่ในระยะที่มองเห็นทะเล

คนที่รู้เรื่องน้ำขึ้นน้ำลงจนมันกลายเป็นสัญชาตญาณในร่างกาย

คนที่ไม่เคยมีแผนสำรอง เพราะทะเลไม่เคยจำเป็นต้องมีมัน

สะพานบกจะทำให้บางคนอยู่รอด และทำให้อีกบางคนต้องจากไป

คำถามไม่ใช่ว่านี่จริงไหม

คำถามคือ เราจะอยู่กับความจริงนั้นยังไง`,
      choicePrompt: "คุณคิดยังไง?",
      choiceA: "⚖️ ความก้าวหน้ามันต้องแลกกับบางอย่างเสมอ",
      choiceB: "🌿 มีบางอย่างที่เสียไปแล้ว เอาคืนไม่ได้"
    },

    chapter5: {
      title: "บทที่ 5 — น้ำยังจำ",

      a: {
        text: `บางทีคุณอาจพูดถูก

ทุกถนนเคยเป็นป่า ทุกเมืองเคยเป็นทุ่ง โลกเดินหน้ามาตลอดด้วยการทิ้งบางอย่างไว้ข้างหลัง

บางทีนี่อาจเป็นแค่อีกบทหนึ่งของเรื่องเดิมที่มนุษย์เขียนซ้ำมาตลอด

แต่คุณยังลอยอยู่ในน้ำนานกว่าที่จำเป็น

คุณมองหลานลุงประเสริฐลากมือตามกระแสน้ำ แบบเดียวกับที่ผู้เฒ่าเคยสอนเขา

เด็กคนนั้นไม่ได้รู้หรอกว่าทำไปเพื่ออะไร มันก็แค่สิ่งที่ปู่เคยชี้ให้ดู วิธีอ่านน้ำที่ไม่มีชื่อเรียก

คุณสงสัยว่าโตขึ้นเขาจะสอนมันให้ลูกตัวเองไหม

แล้วก็สงสัยว่า ตอนนั้นจะยังมีน้ำที่ควรค่าแก่การอ่านอยู่หรือเปล่า`
      },

      b: {
        text: `บางทีคุณอาจพูดถูก

มีบางสิ่งที่พอแตกไปแล้ว ก็ไม่มีวันกลับมาเหมือนเดิม

ป่าโกงกางที่ใช้เวลาสามศตวรรษเติบโต

ความรู้ที่อยู่ในมือของคนแก่ ซึ่งเรียนต่อกันมาจากคนรุ่นก่อน

หรือแม้แต่สีของน้ำในเวลานี้

คุณไม่รู้ว่าอะไรจะเกิดขึ้นต่อไป

ทะเลเองก็คงไม่รู้เหมือนกัน

แต่คุณยังอยู่ตรงนี้ และน้ำก็ยังเคลื่อนไหวเหมือนเดิม — เข้าออก เข้าออก — เหมือนกำลังหายใจ

เหมือนมันยังไม่ยอมแพ้

หลานลุงประเสริฐยังคงเรียนรู้วิธีอ่านน้ำขึ้นน้ำลง

บางที แค่นั้นก็มากพอแล้วสำหรับการยึดไว้`
      },

      bowlText: {
        a: `<strong>{name}</strong> เลือกที่จะเดินหน้าต่อ

สัตว์ทุกตัวในอ่างนี้ก็เลือกเหมือนกัน เพียงแต่แต่ละตัวมาถึงตรงนี้ด้วยเส้นทางที่ต่างกัน — และบางที นั่นอาจเป็นสิ่งสำคัญที่สุด`,

        b: `<strong>{name}</strong> เลือกที่จะไม่ลืม

ทุกชีวิตในอ่างนี้ได้ฟังเรื่องเดียวกัน บางตัวเลือกเหมือนคุณ บางตัวไม่ใช่

แต่น้ำก็ยังโอบรับทุกชีวิตไว้เหมือนกัน`
      }
    }
  }
};

// ─────────────────────────────────────────────
// HOW TO USE IN YOUR CODE
// ─────────────────────────────────────────────
//
// 1. Replace your STORY constant with this object
//
// 2. Track branch in state:
//    state = { lang, username, creature, creatureName, choice2, choice4 }
//    choice2: 'a' | 'b'  (Chapter 2 choice)
//    choice4: 'a' | 'b'  (Chapter 4 choice)
//
// 3. Render chapter text like this:
//    const lang = state.lang // 'en' | 'th'
//
//    // Chapter 1 (linear)
//    renderText(STORY[lang].chapter1.text)
//
//    // Chapter 3 (branched by choice2)
//    const ch3 = STORY[lang].chapter3[state.choice2]
//    renderText(ch3.intro + '\n\n' + ch3.text)
//
//    // Chapter 5 (branched by choice4)
//    const ch5 = STORY[lang].chapter5[state.choice4]
//    renderText(ch5.text)
//
// 4. Fish bowl result message:
//    const bowlMsg = STORY[lang].chapter5.bowlText[state.choice4]
//      .replace('{name}', state.username)
//
// ─────────────────────────────────────────────
// CHAPTER FLOW SUMMARY
// ─────────────────────────────────────────────
//
//  ch1 (main) → ch2 choice [A|B] → ch3 [A|B] → ch4 choice [A|B] → ch5 [A|B] → bowl
//
//  Total paths: 4
//  A→A : listened, chose progress
//  A→B : listened, chose to grieve
//  B→A : felt it, chose progress
//  B→B : felt it, chose to grieve
//
// Each path creates a meaningfully different emotional journey
// while arriving at the same bowl — together.

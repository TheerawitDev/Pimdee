export type Difficulty = 'starter' | 'elementary' | 'intermediate' | 'advanced' | 'master';
export type Language = 'english' | 'thai';

export const dictionaries: Record<Language, Record<Difficulty, string[]>> = {
    english: {
        starter: [ // Level 1: Very basic (3-4 letters)
            "ant", "bat", "cat", "dog", "egg", "fan", "gun", "hat", "ice", "jar",
            "key", "log", "man", "net", "owl", "pen", "rat", "sun", "top", "run",
            "sky", "box", "car", "bus", "cup", "bed", "fox", "gem", "hen", "ink"
        ],
        elementary: [ // Level 2: Common daily words
            "apple", "bread", "chair", "dance", "earth", "fruit", "grass", "house", "image", "juice",
            "knife", "lemon", "money", "night", "ocean", "paper", "queen", "river", "sugar", "table",
            "uncle", "video", "water", "zebra", "cloud", "dream", "funny", "happy", "light", "music"
        ],
        intermediate: [ // Level 3: Standard mixed
            "airport", "battery", "captain", "diamond", "economy", "factory", "gallery", "history", "journey", "kitchen",
            "library", "morning", "natural", "opinion", "picture", "quality", "regular", "station", "teacher", "uniform",
            "village", "weather", "yellow", "behave", "camera", "danger", "energy", "family", "garden", "health"
        ],
        advanced: [ // Level 4: Complex/Longer
            "absolutely", "basketball", "candidate", "depression", "experience", "foundation", "generation", "helicopter", "impossible", "journalist",
            "laboratory", "management", "negotiation", "opportunity", "percentage", "reputation", "scientific", "television", "university", "vocabulary",
            "wonderfully", "yesterday", "background", "challenges", "department", "everything", "friendship", "government", "historical", "literature"
        ],
        master: [ // Level 5: Technical/Academic/Obscure
            "acquaintance", "benevolent", "cacophony", "debilitating", "eccentricity", "fastidious", "grandiloquent", "hypothetical", "idiosyncrasy", "juxtaposition",
            "kaleidoscope", "lugubrious", "magnanimous", "nonchalant", "obfuscation", "paraphernalia", "quintessential", "recalcitrant", "schadenfreude", "theoretical",
            "ubiquitous", "verisimilitude", "whimsical", "xenophobic", "yielding", "zealousness", "bureaucracy", "consciousness", "disproportionate", "entrepreneurial"
        ]
    },
    thai: {
        starter: [ // Level 1: Basic words, no complex vowels
            "กา", "ตา", "มา", "งู", "ปู", "ดู", "ดี", "ตี", "มี", "รู",
            "นา", "ลา", "พา", "ชา", "ยา", "ขา", "ทา", "หา", "อา", "ปี",
            "ใจ", "ใน", "ใบ", "ใส", "ไป", "ไว", "ไร", "ไถ", "ไต", "ไฟ"
        ],
        elementary: [ // Level 2: Common words, simple tones
            "บ้าน", "ร้าน", "ช้าง", "ม้า", "ข้าว", "น้ำ", "ไม้", "มือ", "เท้า", "ปาก",
            "ผม", "ลม", "ฝน", "ฟ้า", "ดิน", "หิน", "ทราย", "ดวง", "ดาว", "เดือน",
            "แม่", "พ่อ", "พี่", "น้อง", "ป้า", "ลุง", "ย่า", "ยาย", "ตา", "ปู่"
        ],
        intermediate: [ // Level 3: Mixed difficulty
            "โรงเรียน", "หนังสือ", "ปากกา", "ดินสอ", "ยางลบ", "กระเป๋า", "รองเท้า", "ถุงเท้า", "เสื้อผ้า", "นาดฬิกา",
            "อาหาร", "ผลไม้", "ผักสด", "ขนม", "น้ำดื่ม", "กาแฟ", "ชาเย็น", "นมสด", "ก๋วยเตี๋ยว", "ข้าวผัด",
            "สมุด", "บัญชี", "ธนาคาร", "เงิน", "ทอง", "ราคา", "ขาย", "ซื้อ", "ตลาด", "ห้าง"
        ],
        advanced: [ // Level 4: Complex spelling/tones
            "กาลเทศะ", "ขะมักเขม้น", "ธรรมชาติ", "วัฒนธรรม", "ประเพณี", "สัญลักษณ์", "มหาวิทยาลัย", "วิทยาศาสตร์", "คณิตศาสตร์", "ประวัติศาสตร์",
            "ภูมิศาสตร์", "สังคมศึกษา", "ศาสนา", "ศีลธรรม", "จริยธรรม", "พลศึกษา", "สุขศึกษา", "ศิลปะ", "ดนตรี", "นาฏศิลป์",
            "ภาพยนตร์", "โทรทัศน์", "วิทยุ", "หนังสือพิมพ์", "อินเทอร์เน็ต", "คอมพิวเตอร์", "เทคโนโลยี", "นวัตกรรม", "เศรษฐกิจ", "การเมือง"
        ],
        master: [ // Level 5: Academic/Royal/Rare
            "กิตติมศักดิ์", "โกศล", "ขวนขวาย", "คณาจารย์", "งบประมาณ", "จินตนาการ", "ฉรรพรรณรังสี", "ชลประทาน", "ณัฏฐ์", "ดุษฎีนิพนธ์",
            "ตรรกศาสตร์", "ถาวรวัตถุ", "ทฤษฎีบท", "ธรณีวิทยา", "นิทรรศการ", "บรรณารักษ์", "ปฏิสัมพันธ์", "พฤติกรรมศาสตร์", "ภราดรภาพ", "มลภาวะ",
            "ยุทธศาสตร์", "รัตนโกสินทร์", "วรรณกรรม", "ศตวรรษ", "สถาปัตยกรรม", "หัตถกรรม", "อนารยชน", "อุตสาหกรรม", "อาชญากรรม", "เอกลักษณ์"
        ]
    }
};

export const documents: Record<Language, string[]> = {
    english: [
        "The quick brown fox jumps over the lazy dog. This is a classic pangram containing every letter of the alphabet. Typing fast is a skill that requires practice and patience.",
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them.",
        "Technology is constantly evolving, changing the way we live and work. From artificial intelligence to renewable energy, the future holds endless possibilities for innovation."
    ],
    thai: [
        "การพิมพ์สัมผัสเป็นทักษะที่มีประโยชน์มากในยุคดิจิทัล ช่วยให้เราทำงานได้รวดเร็วและมีประสิทธิภาพมากขึ้น การฝึกฝนอย่างสม่ำเสมอจะช่วยพัฒนาความแม่นยำและความเร็ว",
        "ประเทศไทยมีสถานที่ท่องเที่ยวที่สวยงามมากมาย ทั้งภูเขา ทะเล และวัดวาอาราม วัฒนธรรมไทยมีความเป็นเอกลักษณ์และน่าสนใจ อาหารไทยก็มีชื่อเสียงไปทั่วโลก",
        "การเรียนรู้ตลอดชีวิตเป็นสิ่งสำคัญ การอ่านหนังสือและการแสวงหาความรู้ใหม่ๆ จะช่วยเปิดโลกทัศน์และพัฒนาตนเองให้ทันต่อการเปลี่ยนแปลงของโลก"
    ]
};

export const getRandomWords = (lang: Language, difficulty: Difficulty, count: number): string[] => {
    const wordList = dictionaries[lang][difficulty];
    const words: string[] = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        words.push(wordList[randomIndex]);
    }
    return words;
};

export const getRandomDocument = (lang: Language): string => {
    const docList = documents[lang];
    const randomIndex = Math.floor(Math.random() * docList.length);
    return docList[randomIndex];
};

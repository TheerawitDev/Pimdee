export type Difficulty = 'starter' | 'normal' | 'expert';
export type Language = 'english' | 'thai';

export const dictionaries: Record<Language, Record<Difficulty, string[]>> = {
    english: {
        starter: [
            "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
            "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
            "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
            "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
            "cat", "dog", "run", "eat", "play", "sleep", "walk", "book", "pen", "home"
        ],
        normal: [
            "about", "search", "other", "information", "time", "service", "people", "year", "see",
            "first", "new", "work", "part", "take", "get", "place", "made", "live", "where",
            "after", "back", "little", "only", "round", "man", "year", "came", "show", "every",
            "good", "me", "give", "our", "under", "name", "very", "through", "just", "form",
            "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause",
            "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "she"
        ],
        expert: [
            "phenomenon", "conscientious", "definitely", "embarrassment", "florescent", "government",
            "harass", "interrupt", "millennium", "pharaoh", "publicly", "separate", "successful",
            "tomorrow", "weird", "accommodate", "bureaucracy", "cemetery", "discipline", "exhilarate",
            "grateful", "humorous", "judgment", "license", "maintenance", "necessary", "parliament",
            "privilege", "questionnaire", "rhythm", "sovereign", "unforeseen", "vocabulary", "xenophobia"
        ]
    },
    thai: {
        starter: [
            "กิน", "นอน", "เล่น", "เดิน", "ไป", "มา", "ดี", "ใจ", "รัก", "แมว",
            "หมา", "นก", "ปลา", "บ้าน", "รถ", "ยา", "ตา", "หู", "มือ", "ดู"
        ],
        normal: [
            "ทำงาน", "หนังสือ", "โรงเรียน", "อาหาร", "เพื่อน", "ครอบครัว", "ความสุข", "เวลา", "ชีวิต", "วันนี้",
            "พรุ่งนี้", "เมื่อวาน", "เดือน", "ปี", "ประเทศไทย", "ภาษา", "เรียน", "เขียน", "อ่าน", "ฟัง",
            "ดนตรี", "กีฬา", "ท่องเที่ยว", "ธรรมชาติ", "ภูเขา", "ทะเล", "ท้องฟ้า", "สายลม", "แสงแดด", "ดอกไม้"
        ],
        expert: [
            "กาลเทศะ", "ขะมักเขม้น", "จินตนาการ", "ฉรรพรรณรังสี", "ทรัพยากร", "ธรรมเนียม", "บรรณารักษ์",
            "ประพฤติ", "พฤติกรรม", "มหาวิทยาลัย", "ยุทธศาสตร์", "รัฐธรรมนูญ", "วัฒนธรรม", "ศตวรรษ", "สัญลักษณ์",
            "อุตสาหกรรม", "ปรากฏการณ์", "พิจารณา", "วิวัฒนาการ", "สมรรถภาพ", "อารยธรรม", "อิทธิพล", "เอกลักษณ์"
        ]
    }
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

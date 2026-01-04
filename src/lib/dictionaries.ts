export type Difficulty = 'starter' | 'elementary' | 'intermediate' | 'advanced' | 'master';
export type Language = 'english' | 'thai';

export const dictionaries: Record<Language, Record<Difficulty, string[]>> = {
    english: {
        starter: [
            // --- HOME ROW & BASIC CVC (The easiest to type) ---
            "add", "all", "and", "any", "ask", "bad", "bag", "ban", "bar", "bat",
            "bed", "bee", "beg", "bet", "big", "bin", "bit", "bob", "box", "boy",
            "bus", "but", "buy", "can", "cap", "car", "cat", "cob", "cod", "cop",
            "cot", "cow", "cry", "cup", "cut", "dad", "dam", "day", "den", "did",
            "die", "dig", "dim", "dip", "dog", "dot", "dry", "due", "dye", "ear",
            "eat", "egg", "ego", "end", "era", "eye", "fan", "far", "fat", "fed",
            "few", "fix", "fly", "fog", "for", "fox", "fry", "fun", "fur", "gap",
            "gas", "gel", "gem", "get", "gig", "god", "got", "gum", "gun", "guy",
            "had", "ham", "has", "hat", "hem", "hen", "her", "hey", "him", "hip",
            "his", "hit", "hop", "hot", "how", "hub", "hug", "hum", "hut", "ice",
            "ill", "ink", "inn", "ion", "its", "jam", "jar", "jaw", "jet", "job",
            "jog", "joy", "jug", "key", "kid", "kit", "lab", "lad", "lap", "law",
            "lax", "lay", "led", "leg", "let", "lid", "lie", "lip", "lit", "log",
            "lot", "low", "mad", "man", "map", "mat", "max", "may", "men", "met",
            "mix", "mob", "mom", "mop", "mud", "mug", "nag", "nap", "net", "new",
            "nil", "nod", "not", "now", "nun", "nut", "oak", "odd", "off", "oil",
            "old", "one", "opt", "our", "out", "owl", "own", "pad", "pan", "pat",
            "paw", "pay", "peg", "pen", "pet", "pig", "pin", "pit", "ply", "pod",
            "pop", "pot", "pry", "pub", "pun", "pup", "put", "rag", "ram", "ran",
            "rat", "raw", "ray", "red", "rib", "rid", "rig", "rim", "rip", "rob",
            "rod", "rot", "row", "rub", "rug", "run", "sad", "sag", "sap", "sat",
            "saw", "say", "sea", "see", "set", "sew", "she", "shy", "sin", "sip",
            "sir", "sit", "six", "ski", "sky", "sly", "sob", "son", "soy", "spy",
            "sub", "sum", "sun", "tab", "tag", "tan", "tap", "tar", "tax", "tea",
            "ten", "the", "thy", "tie", "tin", "tip", "toe", "ton", "top", "toy",
            "try", "tub", "tug", "two", "use", "van", "vat", "vet", "via", "vow",
            "wad", "wag", "war", "was", "wax", "way", "web", "wed", "wet", "who",
            "why", "wig", "win", "wit", "won", "yes", "yet", "you", "zip", "zoo",

            // --- 4-LETTER "FLOW" WORDS ---
            "able", "acid", "also", "area", "army", "away", "baby", "back", "ball", "band",
            "bank", "bare", "base", "bear", "beat", "bell", "best", "bike", "bill", "bird",
            "blow", "blue", "boat", "body", "bold", "bone", "book", "boom", "born", "boss",
            "both", "bowl", "bulk", "burn", "bush", "busy", "cake", "call", "calm", "camp",
            "card", "care", "case", "cash", "cast", "cave", "cell", "chat", "chip", "city",
            "clay", "club", "coal", "coat", "code", "cold", "come", "cook", "cool", "copy",
            "core", "cost", "crew", "crop", "dark", "data", "date", "dawn", "dead", "deal",
            "dear", "debt", "deep", "desk", "diet", "dirt", "dish", "disk", "does", "done",
            "door", "dose", "down", "draw", "drop", "drug", "drum", "dual", "duck", "dust",
            "duty", "each", "earn", "east", "easy", "edge", "else", "even", "ever", "evil",
            "exit", "face", "fact", "fail", "fair", "fall", "farm", "fast", "fate", "fear",
            "feed", "feel", "feet", "fell", "felt", "file", "fill", "film", "find", "fine",
            "fire", "firm", "fish", "five", "flat", "flow", "food", "foot", "ford", "form",
            "fort", "four", "free", "from", "fuel", "full", "fund", "gain", "game", "gate",
            "gear", "gene", "gift", "girl", "give", "glad", "goal", "gold", "golf", "gone",
            "good", "grab", "gray", "grew", "grow", "gulf", "hair", "half", "hall", "hand",
            "hang", "hard", "harm", "hate", "have", "head", "hear", "heat", "held", "hell",
            "help", "here", "hero", "high", "hill", "hire", "hold", "hole", "holy", "home",
            "hope", "host", "hour", "huge", "hung", "hunt", "hurt", "idea", "into", "iron",
            "item", "jack", "join", "jump", "just", "keep", "kept", "kind", "king", "knee",
            "knew", "know", "lack", "lady", "laid", "lake", "land", "lane", "last", "late",
            "lead", "leaf", "lean", "left", "less", "life", "lift", "like", "line", "link",
            "list", "live", "load", "loan", "lock", "logo", "long", "look", "lord", "lose",
            "loss", "lost", "loud", "love", "luck", "made", "mail", "main", "make", "male",
            "many", "mark", "mass", "math", "meal", "mean", "meat", "meet", "menu", "mile",
            "milk", "mind", "mine", "miss", "mode", "mood", "moon", "more", "most", "move",
            "much", "must", "name", "near", "neck", "need", "news", "next", "nice", "nine",
            "none", "nose", "note", "okay", "once", "only", "onto", "open", "oral", "over",
            "pace", "pack", "page", "paid", "pain", "pair", "palm", "park", "part", "pass",
            "past", "path", "peak", "pick", "pile", "pink", "pipe", "plan", "play", "plot",
            "plug", "plus", "poem", "poet", "poll", "pool", "poor", "port", "post", "pull",
            "pure", "push", "race", "rail", "rain", "rank", "rare", "rate", "read", "real",
            "rear", "rely", "rent", "rest", "rice", "rich", "ride", "ring", "rise", "risk",
            "road", "rock", "role", "roll", "roof", "room", "root", "rose", "rule", "rush"
        ],
        elementary: [
            // --- 5-LETTER CLASSICS ---
            "about", "above", "actor", "acute", "admit", "adopt", "adult", "after", "again", "agent",
            "agree", "ahead", "alarm", "album", "alert", "alike", "alive", "allow", "alone", "along",
            "alter", "among", "anger", "angle", "angry", "apart", "apple", "apply", "arena", "argue",
            "arise", "array", "aside", "asset", "audio", "audit", "avoid", "award", "aware", "awful",
            "badly", "baker", "bases", "basic", "basis", "beach", "beard", "beast", "begin", "being",
            "below", "bench", "billy", "birth", "black", "blade", "blame", "blast", "blend", "block",
            "blood", "board", "boast", "bonus", "boost", "bound", "brain", "brand", "bread", "break",
            "breed", "brief", "bring", "broad", "broke", "brown", "build", "built", "buyer", "cable",
            "calmly", "canal", "candy", "cards", "carry", "cases", "catch", "cause", "chain", "chair",
            "chart", "chase", "cheap", "check", "chest", "chief", "child", "china", "choir", "civil",
            "claim", "class", "clean", "clear", "climb", "clock", "close", "cloud", "coach", "coast",
            "count", "court", "cover", "craft", "crash", "cream", "crime", "cross", "crowd", "crown",
            "curve", "cycle", "daily", "dance", "dated", "dealt", "death", "debut", "delay", "depth",
            "dirty", "doubt", "dozen", "draft", "drama", "dream", "dress", "drill", "drink", "drive",
            "drove", "dying", "eager", "early", "earth", "eight", "elite", "empty", "enemy", "enjoy",
            "enter", "entry", "equal", "error", "event", "every", "exact", "exist", "extra", "faith",
            "false", "fault", "fiber", "field", "fifth", "fifty", "fight", "final", "first", "fixed",
            "flash", "fleet", "float", "floor", "focus", "force", "forth", "forty", "forum", "found",
            "frame", "fresh", "front", "fruit", "fully", "funny", "giant", "given", "glass", "globe",
            "going", "grace", "grade", "grand", "grant", "grass", "great", "green", "gross", "group",
            "grown", "guard", "guess", "guest", "guide", "habit", "happy", "harsh", "heart", "heavy",
            "hello", "hence", "honey", "honor", "horse", "hotel", "house", "human", "ideal", "image",
            "index", "inner", "input", "irony", "issue", "joint", "judge", "juice", "knife", "knock",
            "label", "labor", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least",
            "leave", "legal", "lemon", "level", "light", "limit", "links", "liver", "lives", "local",
            "logic", "loose", "lower", "loyal", "lucky", "lunch", "magic", "major", "maker", "march",
            "maria", "match", "maybe", "mayor", "meant", "media", "metal", "might", "minor", "minus",
            "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "movie",
            "music", "newly", "night", "noise", "north", "noted", "novel", "nurse", "occur", "ocean",
            "offer", "often", "order", "other", "outer", "owner", "paint", "panel", "paper", "party",
            "peace", "peter", "phase", "phone", "photo", "piano", "piece", "pilot", "pitch", "pizza",
            "place", "plain", "plane", "plant", "plate", "point", "pound", "power", "press", "price",
            "pride", "prime", "print", "prior", "prize", "proof", "proud", "prove", "queen", "quick",
            "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", "reach", "ready", "refer",
            "relax", "reply", "right", "river", "robot", "rough", "round", "route", "royal", "rural",
            "scale", "scene", "scope", "score", "sense", "serve", "seven", "shade", "shaft", "shake",
            "shall", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shirt", "shock",
            "shoot", "short", "shout", "shown", "sight", "since", "sixth", "sixty", "sized", "skill",
            "sleep", "slide", "slight", "small", "smart", "smile", "smoke", "solid", "solve", "sorry",
            "sound", "south", "space", "spare", "speak", "speed", "spend", "spent", "split", "spoke",
            "sport", "staff", "stage", "stake", "stand", "start", "state", "steam", "steel", "stick",
            "still", "stock", "stone", "stood", "store", "storm", "story", "strip", "stuck", "study",
            "stuff", "style", "sugar", "suite", "super", "sweet", "table", "taken", "taste", "taxes",
            "teach", "teeth", "texas", "thank", "theft", "their", "theme", "there", "these", "thick",
            "thing", "think", "third", "those", "three", "threw", "throw", "tight", "times", "tired",
            "title", "today", "topic", "total", "touch", "tough", "tower", "track", "trade", "train",
            "treat", "trend", "trial", "tribe", "trick", "tried", "truck", "trust", "truth", "twice",
            "under", "union", "unite", "unity", "until", "upper", "upset", "urban", "usage", "usual",
            "valid", "value", "video", "virus", "visit", "vital", "voice", "voter", "wagon", "waist",
            "walks", "walls", "watch", "water", "wheel", "where", "which", "while", "white", "whole",
            "whose", "woman", "women", "world", "worry", "worth", "would", "write", "wrong", "yield",
            "young", "youth", "zebra", "zones"
        ],
        intermediate: [
            // --- 7-LETTER STAMINA WORDS ---
            "ability", "absence", "academy", "account", "accused", "achieve", "acquire", "address", "advance", "adverse",
            "advised", "adviser", "against", "airline", "airport", "alcohol", "alleged", "already", "analyst", "ancient",
            "another", "anxiety", "anybody", "applied", "arrange", "arrival", "article", "assault", "assumed", "assured",
            "attempt", "attract", "auction", "average", "backing", "balance", "banking", "barrier", "battery", "bearing",
            "beating", "because", "bedroom", "believe", "beneath", "benefit", "besides", "between", "billion", "binding",
            "brother", "brought", "burning", "cabinet", "caliber", "calling", "capable", "capital", "captain", "caption",
            "capture", "careful", "carrier", "caution", "ceiling", "central", "certain", "chamber", "channel", "chapter",
            "charity", "charter", "checked", "chicken", "chronic", "circuit", "classes", "classic", "cleaner", "clearly",
            "climate", "closing", "closure", "collect", "college", "combine", "comfort", "command", "comment", "compact",
            "company", "compare", "compete", "complex", "concept", "concern", "concert", "conduct", "confirm", "connect",
            "consent", "consist", "contact", "contain", "content", "contest", "context", "control", "convert", "correct",
            "council", "counsel", "counter", "country", "crucial", "crystal", "culture", "current", "cutting", "dealing",
            "decided", "decline", "default", "defence", "deficit", "deliver", "density", "deposit", "desktop", "despite",
            "destroy", "develop", "devoted", "diamond", "digital", "dignity", "display", "dispute", "distant", "diverse",
            "divided", "drawing", "driving", "dynamic", "economy", "edition", "elderly", "element", "engaged", "enhance",
            "enjoyed", "enquiry", "entered", "entitle", "episode", "equally", "evening", "evident", "exactly", "examine",
            "example", "excited", "exclude", "exhibit", "expense", "explain", "explore", "express", "extreme", "factory",
            "faculty", "failing", "failure", "fashion", "feature", "federal", "feeling", "fiction", "fifteen", "finally",
            "finance", "finding", "fishing", "fitness", "foreign", "forever", "formula", "fortune", "forward", "founder",
            "freedom", "further", "gallery", "gateway", "general", "genuine", "gigabit", "greater", "hanging", "heading",
            "healthy", "hearing", "heavily", "helpful", "helping", "history", "holding", "holiday", "housing", "however",
            "hundred", "husband", "illegal", "illness", "imagine", "imaging", "improve", "include", "initial", "inquiry",
            "insight", "install", "instant", "instead", "intense", "interim", "involve", "jointly", "journal", "journey",
            "justice", "justify", "keeping", "killing", "kingdom", "kitchen", "knowing", "landing", "largely", "lasting",
            "leading", "learned", "leisure", "liberal", "library", "license", "limited", "listing", "logical", "loyalty",

            // --- 8-10 LETTER ADVANCED FLOW ---
            "absolute", "academic", "accepted", "accident", "accuracy", "accurate", "achieved", "acquired", "activity", "actually",
            "addition", "adequate", "adjacent", "adjusted", "advanced", "advisory", "advocate", "affected", "aircraft", "alliance",
            "allocate", "analysis", "annually", "anything", "apparent", "appendix", "approach", "approval", "approved", "argument",
            "artistic", "assembly", "assessed", "assigned", "assisted", "assuring", "attached", "attitude", "attorney", "audience",
            "autonomy", "aviation", "backyard", "balanced", "baseball", "baseline", "battalion", "becoming", "behavior", "birthday",
            "boundary", "breach", "breaking", "briefing", "building", "business", "calendar", "campaign", "capacity", "casualty",
            "category", "cautious", "cellular", "ceremony", "chairman", "champion", "changing", "checking", "chemical", "children",
            "circular", "civilian", "cleaning", "clinical", "clothing", "coaching", "coalition", "cohesive", "collapse", "colonial",
            "colorful", "combined", "comedian", "commands", "commerce", "composed", "compound", "comprise", "computer", "conceded",
            "conclude", "concrete", "conflict", "confused", "congress", "consider", "constant", "consumer", "continue", "contract",
            "contrary", "contrast", "creative", "creature", "criminal", "critical", "cultural", "currency", "database", "daughter",
            "daylight", "deadline", "deciding", "decision", "declared", "deferred", "definite", "delivery", "describe", "designer",
            "detailed", "detected", "dialogue", "director", "disaster", "disclose", "discount", "discover", "disorder", "distance",
            "distinct", "district", "dividend", "division", "doctrine", "document", "domestic", "dominant", "dramatic", "duration",
            "dynamics", "earnings", "economic", "educated", "efficacy", "eighteen", "election", "electric", "eligible", "emerging",
            "emphasis", "employee", "endeavor", "engineer", "enormous", "entirely", "entrance", "envelope", "equality", "equation",
            "estimate", "evaluate", "everyone", "evidence", "exchange", "exciting", "exercise", "existing", "expanded", "expected",
            "expended", "external", "facility", "faithful", "familiar", "featured", "feedback", "festival", "finished", "firewall",
            "forecast", "frequent", "friendly", "function", "generate", "generous", "governor", "gradient", "grateful", "hardware",
            "heritage", "hospital", "identity", "incident", "indicate", "industry", "instance", "internal", "internet", "interval",
            "investor", "isolated", "judgment", "judicial", "junction", "keyboard", "language", "laughter", "learning", "location",
            "magazine", "maintain", "majority", "marriage", "material", "medicine", "memorial", "mentions", "military", "minimize",
            "minority", "moderate", "momentum", "mountain", "movement", "multiple", "national", "negative", "neighbor", "networks"
        ],
        advanced: [
            // --- PROFESSIONAL & CORPORATE ---
            "administration", "advertisement", "appointment", "arrangement", "association", "availability", "background", "beneficiary", "budgetary", "businesslike",
            "collaboration", "commercial", "commitment", "communication", "compensation", "competitive", "comprehensive", "consultation", "contribution", "cooperation",
            "corporation", "correspondence", "departmental", "development", "distribution", "effectiveness", "efficiency", "entrepreneur", "environment", "establishment",
            "executive", "flexibility", "foundation", "headquarters", "implementation", "improvement", "infrastructure", "initiative", "installation", "institutional",
            "international", "investment", "leadership", "maintenance", "management", "manufacturer", "marketplace", "membership", "negotiation", "opportunity",
            "organization", "partnership", "performance", "possibility", "preparation", "presentation", "productivity", "professional", "profitability", "programming",
            "qualification", "recognition", "relationship", "reproduction", "requirement", "responsibility", "satisfaction", "shareholder", "specialization", "supervision",

            // --- ACADEMIC & SCIENTIFIC ---
            "archaeology", "architecture", "astronomy", "atmosphere", "biological", "capability", "celebration", "certificate", "characteristic", "circumstance",
            "civilization", "classification", "combination", "comfortable", "composition", "concentration", "conclusion", "configuration", "confirmation", "consequence",
            "considerable", "consistency", "constitution", "construction", "contemporary", "controversial", "conversation", "definition", "demonstration", "description",
            "destination", "determination", "difference", "difficulty", "discovery", "discussion", "distinction", "educational", "electricity", "elementary",
            "engineering", "environment", "evolution", "examination", "expectation", "experience", "experimental", "explanation", "expression", "generation",
            "geographical", "historical", "hypothesis", "imagination", "independent", "indication", "information", "instruction", "intellectual", "intelligence",
            "interaction", "interpretation", "introduction", "investigation", "journalist", "laboratory", "legislation", "literature", "mathematical", "measurement",
            "mechanical", "motivation", "observation", "occurrence", "orientation", "parliament", "participation", "percentage", "perception", "personality",
            "perspective", "philosophy", "photography", "population", "prevention", "probability", "psychology", "publication", "punctuated", "reflection",
            "reputation", "resolution", "scientific", "significant", "similarity", "situation", "sociological", "statistical", "technology", "theoretical",
            "translation", "university", "vocabulary", "vulnerability", "wonderfully", "yesterday",

            // --- COMPLEX FLOW & VERBS ---
            "absolutely", "accomplish", "additional", "adjustment", "alternative", "ambitious", "announcement", "appearance", "application", "appreciate",
            "assessment", "assistance", "assumption", "attachment", "attraction", "carefully", "championship", "complicated", "component", "compression",
            "compromise", "computation", "concentrate", "conclude", "concrete", "condition", "conduct", "conference", "confidence", "conflict",
            "confusion", "connection", "conscious", "conservative", "consideration", "consistent", "constant", "consultant", "consumption", "contain",
            "contest", "conversion", "conviction", "cooperative", "coordination", "correction", "correspond", "corruption", "cosmopolitan", "counselling",
            "counselor", "counterpart", "countryside", "courageous", "courteous", "coverage", "creativity", "credibility", "criticism", "cultivation",
            "cumulative", "curiosity", "curriculum", "customer", "dangerous", "darkness", "database", "deadline", "dealership", "debating",
            "decorative", "dedication", "deduction", "delegation", "deliberate", "delicate", "delivery", "democracy", "destruction", "deterioration",
            "determination", "devastation", "developmental", "differentiation", "dimensionality", "disadvantage", "disagreement", "disappearance", "disappointment"
        ],
        master: [
            // --- THE "UNPRONOUNCEABLE" & OBSCURE ---
            "acquaintance", "ambiguous", "anachronistic", "anesthesiology", "annihilation", "archetypal", "asphyxiation", "belligerent", "benevolent", "bourgeoisie",
            "cacophony", "catastrophic", "circumlocution", "clairvoyant", "colloquialism", "connoisseur", "conscientious", "convalescence", "cryptography", "debilitating",
            "decipherable", "defenestration", "deleterious", "demystification", "disingenuous", "ebullience", "eccentricity", "effervescent", "egalitarian", "eloquence",
            "encyclopedic", "ephemeral", "epistemology", "equanimity", "exacerbate", "exhilarating", "expeditious", "fastidious", "flabbergasted", "fluorescent",
            "grandiloquent", "hallucination", "hierarchical", "hippopotamus", "hypothetical", "idiosyncrasy", "imperturbable", "incandescent", "inconsequential", "indefatigable",
            "indispensable", "infinitesimal", "ingenious", "innocuous", "insurmountable", "intransigent", "irreproachable", "juxtaposition", "kaleidoscope", "labyrinthine",
            "lackadaisical", "magnanimous", "malfeasance", "metamorphosis", "miscellaneous", "mnemonic", "monochromatic", "nauseating", "nefarious", "nonchalant",
            "obfuscation", "obsequious", "onomatopoeia", "ostentatious", "oxymoron", "paraphernalia", "parsimonious", "penultimate", "perseverance", "philanthropic",
            "phosphorescence", "plenipotentiary", "precrastination", "procrastinate", "pseudonym", "quintessential", "recalcitrant", "reminiscence", "renaissance", "rhetorical",
            "sacrilegious", "schadenfreude", "serendipity", "soliloquy", "spontaneity", "stratification", "superfluous", "surreptitious", "synecdoche", "tergiversation",
            "theoretical", "transcendental", "ubiquitous", "unfathomable", "unscrupulous", "vacillating", "verisimilitude", "vicissitude", "vociferous", "xenophobic",

            // --- ACADEMIC & INSTITUTIONAL (Length 15+) ---
            "academician", "acclimatization", "accommodation", "accumulation", "acknowledgment", "administration", "aforementioned", "anthropology", "anticipation", "appreciation",
            "appropriation", "archaeological", "aristocratic", "articulation", "authoritative", "autobiography", "authorization", "bacteriology", "beneficiary", "biodegradable",
            "biotechnology", "capitalization", "characterization", "choreography", "chronological", "circumstantial", "civilization", "classification", "collaboration", "commemorative",
            "commercialization", "communication", "compatibility", "competitiveness", "comprehensibility", "comprehensive", "conceptualization", "confidentiality", "congratulation", "conscientiousness",
            "conservationist", "consideration", "consolidation", "constitutional", "consultation", "contamination", "contemplation", "contextualization", "contradiction", "contraindication",
            "conversationalist", "cooperativeness", "correspondence", "cosmopolitanism", "counterargument", "counterintelligence", "counterproductive", "countersignature", "crystallization", "decentralization",
            "decriminalization", "deinstitutionalization", "dematerialization", "democratization", "demilitarization", "denationalization", "denominalization", "departmentalization", "dependability", "depersonalization",

            // --- SCIENTIFIC & TECHNICAL (Medical/Engineering focus) ---
            "aerodynamics", "agglutination", "anesthetized", "astrophysics", "bioinformatics", "biomechanics", "cardiovascular", "crystallography", "cybernetics", "cytogenetics",
            "dermatology", "electromagnetism", "endocrinology", "epidemiology", "fluidmechanics", "gastroenterology", "geomorphology", "hydrodynamics", "immunology", "kinematics",
            "metallurgy", "microbiology", "nanotechnology", "neurobiology", "oceanography", "paleontology", "pharmacology", "physiotherapy", "quantumphysics", "radiology",
            "spectroscopy", "thermodynamics", "toxicology", "virology", "volcanology", "zoological", "bioluminescent", "photosynthesis", "neuroplasticity", "cryptocurrency",

            // --- MULTISYLLABIC VERBS ---
            "accommodate", "accumulate", "acknowledge", "administer", "aggravate", "annunciate", "anticipate", "articulate", "authenticate", "collaborate",
            "commemorate", "communicate", "consolidate", "contemplate", "corroborate", "demonstrate", "deteriorate", "differentiate", "disseminate", "elaborate",
            "emancipate", "encapsulate", "exacerbate", "facilitate", "fluctuate", "hypothesize", "illuminate", "illustrate", "incorporate", "instantiate",
            "interrogate", "intimidate", "investigate", "manipulate", "negotiate", "orchestrate", "participate", "perpetuate", "precipitate", "rehabilitate"
        ],
    },
    thai: {
        starter: [
            // --- HOME ROW FOCUS (ฟ ห ก ด ่ า ส ว) ---
            "กาด", "ดาก", "สาด", "สาว", "ดาว", "ดวง", "วง", "กาง", "กง", "สาง",
            "สอง", "อง", "วาง", "วาด", "ด้า", "สาง", "เสา", "เดา", "เงา", "หา",
            "หัด", "หาง", "หด", "หาก", "หาด", "หาว", "หงส์", "ดัด", "กัด", "สัด",
            "ดัก", "กัก", "สัก", "วัก", "หัก", "ดัง", "กัง", "สัง", "วัง", "หัง",
            "ดัส", "กัส", "สัส", "วัส", "หัส", "ดะ", "กะ", "สะ", "วะ", "หะ",
            "ดาส", "กาส", "สาส", "วาส", "หาส", "ดอง", "กอง", "ส่อง", "ว่อง", "ห่อง",

            // --- NO-SHIFT COMMON WORDS (Daily Use) ---
            "กิน", "นอน", "ดม", "ชม", "ชน", "ตบ", "จบ", "จด", "กด", "กบ",
            "พบ", "ลบ", "รบ", "หก", "ตด", "มด", "ลด", "สด", "รด", "อด",
            "จง", "คง", "ดง", "ลง", "วง", "ผง", "สง", "กง", "จน", "คน",
            "ขน", "บน", "ฝน", "วน", "สน", "หน", "กม", "ขม", "จม", "ถม",
            "นม", "ผม", "ลม", "อม", "ชก", "ดก", "ตก", "บก", "ปก", "พก",
            "ฟก", "ยก", "รก", "ศก", "คบ", "นบ", "สบ", "อบ", "ทง", "ธง",
            "บง", "ปง", "พง", "ยง", "รง", "ศง", "หง", "อง", "มา", "นา",
            "ทา", "ยา", "พา", "ลา", "อา", "ชา", "ฝา", "กาส", "รา", "กา",
            "ตา", "ปู", "ดู", "ดี", "ตี", "มี", "รู", "ใจ", "ใน", "ใบ",
            "ใส", "ไป", "ไว", "ไร", "ไถ", "ไต", "ไฟ", "รัก", "ทัก", "มัก",
            "สัก", "นัก", "พัก", "ผล", "ฝน", "สน", "ทน", "มอง", "ของ", "จอง",

            // --- RHYTHM REPETITION (Building Speed) ---
            "กา", "กาก", "กาง", "กาด", "กาน", "กาม", "กาย", "กาว",
            "ดา", "ดาก", "ดาง", "ดาด", "ดาน", "ดาม", "ดาย", "ดาว",
            "สา", "สาก", "สาง", "สาด", "สาน", "สาม", "สาย", "สาว",
            "วา", "วาก", "วาง", "วาด", "วาน", "วาม", "วาย", "วาว",
            "หา", "หาก", "หาง", "หาด", "หาน", "หาม", "หาย", "หาว",
            "มา", "มาก", "มาง", "มาด", "มาน", "มาม", "มาย", "มาว",
            "นา", "นาก", "นาง", "นาด", "นาน", "นาม", "นาย", "นาว",
            "ลา", "ลาก", "ลาง", "ลาด", "ลาน", "ลาม", "ลาย", "ลาว",
            "ทา", "ทาก", "ทาง", "ทาด", "ทาน", "ทาม", "ทาย", "ทาว",
            "ชา", "ชาก", "ชาง", "ชาด", "ชาน", "ชาม", "ชาย", "ชาว",

            // --- VOWEL FOCUS (เ- , แ- , โ- , -ะ) ---
            "เตะ", "เละ", "เทะ", "เปะ", "เสะ", "เกะ", "เดะ", "เพะ",
            "แก", "แด", "แล", "แม่", "แพ", "แค่", "แต่", "แห่", "แผ่",
            "โต", "โน", "โม", "โพ", "โล", "โถ", "โผ", "โช", "โก", "โด",
            "เดิน", "เพลิน", "เกิน", "เนิน", "เมิน", "เขิน", "เงิน",
            "เรียน", "เขียน", "เวียน", "เทียน", "เจียน", "เนียน", "เลียน",

            // --- DOUBLE CONSONANTS (Advanced Starter) ---
            "กลาง", "คลอง", "ครอง", "พลอย", "คลาย", "กลาย", "ปลด", "กลุ่ม",
            "พริก", "กริก", "ตริ", "ตรึก", "กราบ", "ตราบ", "พราก", "หลับ",
            "หวัง", "หลัง", "หนัง", "มั่ง", "ตั้ง", "นั่ง", "ยั่ง", "สั่ง"
        ],
        elementary: [
            // --- PEOPLE & FAMILY (Focus: Tone Marks ่ ้) ---
            "พ่อ", "แม่", "พี่", "น้อง", "ป้า", "ลุง", "น้า", "อา", "ปู่", "ย่า", "ตา", "ยาย",
            "ลูก", "หลาน", "เพื่อน", "เด็ก", "ผู้ชาย", "ผู้หญิง", "คนไทย", "ครู", "หมอ", "ช่าง",
            "พ่อค้า", "แม่ค้า", "พยาบาล", "ตำรวจ", "ทหาร", "นักเรียน", "เจ้าของ", "แขก", "คนใช้",

            // --- BODY PARTS (Focus: Moving to the Top Row) ---
            "หัว", "หน้า", "หู", "ตา", "จมูก", "ปาก", "ลิ้น", "ฟัน", "คอ", "บ่า", "ไหล่", "แขน",
            "ขา", "มือ", "นิ้ว", "เท้า", "ท้อง", "หลัง", "เอว", "เข่า", "ศอก", "เล็บ", "ผม", "ขน",
            "ผิว", "หัวใจ", "ปอด", "ตับ", "ไต", "กระดูก", "เลือด",

            // --- HOUSEHOLD & OBJECTS (Focus: Everyday Vocabulary) ---
            "บ้าน", "ห้อง", "ประตู", "หน้าต่าง", "บันได", "หลังคา", "รั้ว", "สวน", "โต๊ะ", "เก้าอี้",
            "ตู้", "เตียง", "หมอน", "ผ้าห่ม", "มุ้ง", "พัดลม", "แอร์", "โคมไฟ", "กระจก", "หวี",
            "สบู่", "ยาสีฟัน", "แปรง", "ขัน", "ถัง", "กะละมัง", "ผ้าเช็ดตัว", "ร่ม", "รองเท้า",
            "เสื้อ", "กางเกง", "กระโปรง", "ถุงเท้า", "หมวก", "แว่นตา", "นาฬิกา", "กระเป๋า",

            // --- KITCHEN & FOOD (Focus: Clusters like -ือ, -ัว) ---
            "จาน", "ชาม", "ช้อน", "ส้อม", "แก้ว", "ขวด", "มีด", "หม้อ", "กระทะ", "เตา", "เขียง",
            "ถ้วย", "ตระกร้า", "กะทิ", "น้ำมัน", "น้ำปลา", "เกลือ", "น้ำตาล", "พริก", "ข้าว",
            "แกง", "ต้ม", "ผัด", "ทอด", "นึ่ง", "ย่าง", "ปิ้ง", "หอม", "กระเทียม", "กะปิ",
            "น้ำ", "นม", "เนย", "ไข่", "เนื้อ", "หมู", "ไก่", "ปลา", "กุ้ง", "ปู", "หอย",

            // --- FRUITS & VEGETABLES (Focus: Long Words) ---
            "ส้ม", "กล้วย", "มะม่วง", "มะละกอ", "แตงโม", "สับปะรด", "ทุเรียน", "มังคุด", "เงาะ",
            "ลำไย", "องุ่น", "ลิ้นจี่", "มะพร้าว", "มะนาว", "มะกรูด", "พริก", "ขิง", "ข่า",
            "ตะไคร้", "ผักกาด", "คะน้า", "ถั่วฝักยาว", "แตงกวา", "มะเขือ", "ฟักทอง",

            // --- VERBS & ACTIONS (Focus: Finger Flow) ---
            "กิน", "นอน", "นั่ง", "ยืน", "เดิน", "วิ่ง", "กระโดด", "ขี่", "ขับ", "ว่ายน้ำ",
            "เล่น", "เรียน", "ทำงาน", "พักผ่อน", "ร้องเพลง", "เต้น", "อ่าน", "เขียน", "วาด",
            "ฟัง", "ดู", "พูด", "คุย", "ถาม", "ตอบ", "บอก", "สั่ง", "ยิ้ม", "หัวเราะ", "ร้องไห้",
            "ล้าง", "เช็ด", "ถู", "กวาด", "ซื้อ", "ขาย", "จ่าย", "ช่วย", "ทำ", "รอ", "ส่ง",
            "เก็บ", "เปิด", "ปิด", "เริ่ม", "จบ", "หยุด", "ไป", "มา", "เข้า", "ออก",

            // --- ADJECTIVES & FEELINGS (Focus: Description Clusters) ---
            "ดี", "เลว", "สวย", "หล่อ", "น่ารัก", "สูง", "ต่ำ", "ดำ", "ขาว", "ใหญ่", "เล็ก",
            "หนัก", "เบา", "เร็ว", "ช้า", "ใหม่", "เก่า", "แพง", "ถูก", "ร้อน", "หนาว", "เย็น",
            "อุ่น", "หิว", "อิ่ม", "ง่วง", "เหนื่อย", "สนุก", "เศร้า", "โกรธ", "กลัว", "ตกใจ",
            "ง่าย", "ยาก", "ซื่อสัตย์", "ขยัน", "ขี้เกียจ", "สะอาด", "สกปรก", "สว่าง", "มืด",

            // --- NATURE & TIME (Focus: Middle-Row Reach) ---
            "ดิน", "น้ำ", "ลม", "ไฟ", "ฟ้า", "ฝน", "แดด", "หมอก", "เมฆ", "ทะเล", "แม่น้ำ",
            "ภูเขา", "ป่า", "ต้นไม้", "ดอกไม้", "หญ้า", "หิน", "ทราย", "ทอง", "เงิน", "วันนี้",
            "พรุ่งนี้", "เมื่อวาน", "เช้า", "สาย", "เที่ยง", "บ่าย", "เย็น", "ค่ำ", "คืน",
            "ชั่วโมง", "นาที", "วินาที", "เดือน", "ปี", "วัน", "เวลา", "อนาคต", "อดีต"
        ],
        intermediate: [
            // --- EDUCATION & OFFICE (การศึกษาและสำนักงาน) ---
            "โรงเรียน", "มหาวิทยาลัย", "ห้องเรียน", "ห้องสมุด", "วิชาการ", "การบ้าน", "รายงาน", "คะแนน", "สอบไล่", "ทุนการศึกษา",
            "ปริญญา", "ประกาศนียบัตร", "อาจารย์", "ผู้อำนวยการ", "สหกรณ์", "กิจกรรม", "วิจัย", "โครงงาน", "ห้องปฏิบัติการ", "สมาธิ",
            "โต๊ะทำงาน", "คอมพิวเตอร์", "เครื่องพิมพ์", "แฟ้มข้อมูล", "เอกสาร", "ซองจดหมาย", "พัสดุ", "ไปรษณีย์", "นามบัตร", "ปฏิทิน",
            "สมุดบันทึก", "กระดาษชำระ", "คลิปหนีบกระดาษ", "กบเหลาดินสอ", "เครื่องคิดเลข", "ตรายาง", "หมึกพิมพ์", "กระดานดำ", "ไวท์บอร์ด",

            // --- FINANCE & COMMERCE (การเงินและการค้า) ---
            "ธนาคาร", "บัญชี", "ออมทรัพย์", "กระแสรายวัน", "เงินกู้", "ดอกเบี้ย", "ภาษี", "กำไร", "ขาดทุน", "หนี้สิน",
            "การลงทุน", "หุ้นส่วน", "สหกรณ์", "ประกันภัย", "บัตรเครดิต", "ตู้เอทีเอ็ม", "เงินสด", "เงินทอน", "ใบเสร็จ", "ใบกำกับภาษี",
            "ราคาส่ง", "ราคาปลีก", "ส่วนลด", "ตลาดนัด", "ห้างสรรพสินค้า", "ร้านสะดวกซื้อ", "สินค้านำเข้า", "สินค้าส่งออก", "เศรษฐกิจ", "เงินตรา",

            // --- TRAVEL & TRANSPORT (การเดินทางและขนส่ง) ---
            "การเดินทาง", "รถจักรยานยนต์", "รถยนต์ส่วนบุคคล", "รถบรรทุก", "รถโดยสารประจำทาง", "รถไฟฟ้า", "สถานีรถไฟ", "สนามบิน", "ท่าเรือ", "ตั๋วเดินทาง",
            "ทางด่วน", "สี่แยก", "วงเวียน", "ทางม้าลาย", "สะพานลอย", "สัญญาณไฟจราจร", "หมวกกันน็อก", "เข็มขัดนิรภัย", "ยางแบน", "น้ำมันหมด",
            "ท่องเที่ยว", "มัคคุเทศก์", "โรงแรม", "รีสอร์ท", "ที่พัก", "กระเป๋าเดินทาง", "หนังสือเดินทาง", "วีซ่า", "ตารางเวลา", "จุดหมายปลายทาง",

            // --- HEALTH & MEDICAL (สุขภาพและการแพทย์) ---
            "โรงพยาบาล", "คลินิก", "ยารักษาโรค", "ยาแก้ปวด", "ยาฆ่าเชื้อ", "วัคซีน", "คนไข้", "พยาบาล", "ศัลยกรรม", "อุบัติเหตุ",
            "บาดแผล", "น้ำเกลือ", "ผ้าพันแผล", "รถพยาบาล", "ประกันสังคม", "ตรวจร่างกาย", "ใบสั่งยา", "ไข้หวัด", "เจ็บคอ", "ปวดหัว",
            "ความดัน", "เบาหวาน", "หัวใจ", "ภูมิแพ้", "หน้ามืด", "วิงเวียน", "คลื่นไส้", "อาเจียน", "ท้องเสีย", "ติดเชื้อ",

            // --- FOOD & COOKING (อาหารและการทำอาหาร - Advanced Names) ---
            "เครื่องปรุง", "กะเพรา", "น้ำพริก", "แกงเขียวหวาน", "ต้มยำกุ้ง", "ส้มตำ", "อาหารทะเล", "ข้าวผัด", "ก๋วยเตี๋ยว", "ผัดไทย",
            "ของหวาน", "น้ำแข็งใส", "ลอดช่อง", "ข้าวเหนียวมะม่วง", "บัวลอย", "เครื่องดื่ม", "น้ำสมุนไพร", "น้ำผลไม้", "กาแฟร้อน", "ชาเขียว",
            "วัตถุดิบ", "เครื่องเทศ", "ตะหลิว", "กระทะ", "เตาแก๊ส", "ไมโครเวฟ", "ตู้เย็น", "เครื่องล้างจาน", "ห้องอาหาร", "เชฟ",

            // --- MODERN LIFE & TECH (ชีวิตสมัยใหม่และเทคโนโลยี) ---
            "อินเทอร์เน็ต", "โซเชียล", "สมาร์ทโฟน", "แอปพลิเคชัน", "เว็บไซต์", "สัญญาณ", "ไวไฟ", "สายชาร์จ", "แบตเตอรี่", "รหัสผ่าน",
            "อีเมล", "ข้อความ", "รูปภาพ", "วิดีโอ", "การสื่อสาร", "ข่าวสาร", "โทรทัศน์", "วิทยุ", "บันเทิง", "โฆษณา",

            // --- VERBS & ABSTRACT (กริยาและคำนามที่เป็นนามธรรม) ---
            "ตัดสินใจ", "รับผิดชอบ", "เปลี่ยนแปลง", "พัฒนา", "แก้ไข", "ปรับปรุง", "พิจารณา", "สนับสนุน", "วางแผน", "ระมัดระวัง",
            "ประสบการณ์", "ความสำเร็จ", "ความล้มเหลว", "โอกาส", "อุปสรรค", "ความเชื่อมั่น", "ความคิดเห็น", "ความรู้สึก", "แรงบันดาลใจ", "จินตนาการ",
            "ความหวัง", "ความรัก", "ความเมตตา", "ความกตัญญู", "ความซื่อสัตย์", "ความยุติธรรม", "สันติภาพ", "ธรรมชาติ", "สิ่งแวดล้อม", "มลพิษ"
        ],
        advanced: [
            // --- ACADEMIC & SCIENCE (วิชาการและวิทยาศาสตร์) ---
            "จุลชีววิทยา", "พันธุศาสตร์", "ดาราศาสตร์", "ธรณีวิทยา", "สถาปัตยกรรม", "วิศวกรรมศาสตร์", "โบราณคดี", "มานุษยวิทยา", "เศรษฐศาสตร์", "นิเทศศาสตร์",
            "ปฏิสัมพันธ์", "กระบวนทัศน์", "ทฤษฎีสัมพัทธภาพ", "ปัญญาประดิษฐ์", "เทคโนโลยีชีวภาพ", "นาโนเทคโนโลยี", "ระบบนิเวศ", "การเปลี่ยนแปลงสภาพภูมิอากาศ",
            "กัมมันตภาพรังสี", "อิเล็กตรอน", "โปรตอน", "นิวตรอน", "ปฏิกิริยาเคมี", "สมการ", "เรขาคณิต", "ตรีโกณมิติ", "แคลคูลัส", "สถิติประยุกต์",

            // --- GOVERNMENT & LAW (การเมืองและกฎหมาย - Focus: ฎ, ฏ, ธ, ณ) ---
            "รัฐธรรมนูญ", "นิติบัญญัติ", "บริหาร", "ตุลาการ", "ประชาธิปไตย", "ราชอาณาจักร", "พฤตินัย", "นิตินัย", "กฎหมายอาญา", "กฎหมายแพ่ง",
            "อธิปไตย", "สัมพันธไมตรี", "นโยบายสาธารณะ", "ยุทธศาสตร์ชาติ", "คณะรัฐมนตรี", "พระราชกฤษฎีกา", "สิทธิมนุษยชน", "อาชญากรรม", "ทุจริต", "คอร์รัปชัน",
            "รัฐวิสาหกิจ", "เทศบัญญัติ", "จดทะเบียน", "มรดก", "สัญญาเช่า", "พยานหลักฐาน", "คำพิพากษา", "อุทธรณ์", "ฎีกา", "ประนีประนอม",

            // --- TECHNOLOGY & DIGITAL (เทคโนโลยีและดิจิทัล - Pem's Specialty) ---
            "อัลกอริทึม", "โปรแกรมเมอร์", "สถาปัตยกรรมซอฟต์แวร์", "ฐานข้อมูล", "เครือข่ายไร้สาย", "ความปลอดภัยไซเบอร์", "คลาวด์คอมพิวติ้ง", "บล็อกเชน",
            "สกุลเงินดิจิทัล", "การเรียนรู้ของเครื่อง", "การประมวลผลภาษามนุษย์", "ความเป็นจริงเสมือน", "เมทาเวิร์ส", "ไมโครชิป", "เซมิคอนดักเตอร์",
            "แบนด์วิดท์", "โทรคมนาคม", "นวัตกรรมเปลี่ยนโลก", "การเข้ารหัสลับ", "ระบบปฏิบัติการ", "อินเทอร์เฟซ", "ซอร์สโค้ด", "คอมไพเลอร์",

            // --- FORMAL VERBS & ABSTRACT (กริยาระดับสูงและคำนามธรรม) ---
            "ประสิทธิผล", "ประสิทธิภาพ", "ผลสัมฤทธิ์", "บูรณาการ", "สัมมนา", "อภิปราย", "วิพากษ์วิจารณ์", "สังเคราะห์", "ประยุกต์", "ส่งเสริม",
            "พรรณนา", "จรรโลงใจ", "อุดมคติ", "ปรัชญา", "จริยศาสตร์", "สุนทรียภาพ", "มโนทัศน์", "เจตคติ", "บรรทัดฐาน", "เอกลักษณ์",
            "ปรากฏการณ์", "วิวัฒนาการ", "อารยธรรม", "ประติมากรรม", "จิตรกรรม", "วรรณกรรม", "ศิลปวัฒนธรรม", "กิตติคุณ", "เกียรติยศ", "สรรเสริญ",

            // --- COMPLEX SPELLING BOSSES (คำปราบเซียน - Focus: Karan and Clusters) ---
            "กาลเทศะ", "ขะมักเขม้น", "สัญลักษณ์", "พยายาม", "กระตือรือร้น", "ภาพยนตร์", "โทรทัศน์", "เหตุการณ์", "ประดิษฐ์", "ประสบการณ์",
            "ทิวทัศน์", "สวรรค์", "ประสงค์", "สัมพันธ์", "ผลิตภัณฑ์", "อัศจรรย์", "วิจารณ์", "อนุรักษ์", "บริสุทธิ์", "ประยุกต์", "คัมภีร์",
            "ศรัทธา", "อธิษฐาน", "มัสยิด", "พฤหัสบดี", "มกราคม", "พฤศจิกายน", "อุณหภูมิ", "บรรยากาศ", "สภาพแวดล้อม", "สุนทรีย์",

            // --- INFRASTRUCTURE & SOCIETY (โครงสร้างพื้นฐานและสังคม) ---
            "ชลประทาน", "สาธารณูปโภค", "คมนาคม", "อุตสาหกรรม", "เกษตรกรรม", "พาณิชยกรรม", "การท่องเที่ยวแห่งประเทศไทย", "พิพิธภัณฑ์สถานแห่งชาติ",
            "ศูนย์วัฒนธรรม", "สถานีวิทยุกระจายเสียง", "การประปานครหลวง", "การไฟฟ้าส่วนภูมิภาค", "ตลาดหลักทรัพย์", "สถาบันการเงิน", "การจ้างงาน"
        ],
        master: [
            // --- ROYAL VOCABULARY (ราชาศัพท์ - The Ultimate Test) ---
            "พระบรมมหาราชวัง", "พระบาทสมเด็จ", "พระบรมราชโองการ", "พระราชลัญจกร", "พระปรมาภิไธย", "พระราชนัดดา", "พระพุทธเจ้าหลวง", "พระบรมราโชวาท",
            "ทรงพระเจริญ", "สวรรคต", "ทรงพระสรวล", "พระราชประสงค์", "พระที่นั่ง", "พระที่นั่งอนันตสมาคม", "พระบรมวงศานุวงศ์", "พระราชอาคันตุกะ",
            "เครื่องราชอิสริยาภรณ์", "พรรณนา", "ชยันโต", "นฤมิต", "สิริโสภาคย์", "มหาเศวตฉัตร", "เบญจปฎล", "จตุรบท", "ทศพิธราชธรรม",

            // --- PHILOSOPHY & RELIGION (ปรัชญาและศาสนา - Focus: Complex Shift keys) ---
            "สัมปชัญญะ", "มโนมยิทธิ", "วิปัสสนากรรมฐาน", "พระไตรปิฎก", "พุทธศาสนสุภาษิต", "สัพพัญญู", "อนิจจัง", "ทุกขัง", "อนัตตา", "ปฏิจจสมุปบาท",
            "นิรมาณกาย", "ธรรมจักร", "อริยสัจ", "มรรคผล", "วัฏสงสาร", "อภิธรรม", "บวชชีพรหมจรรย์", "กตัญญูกตเวที", "อธิษฐานจิต", "พระมหาธรรมราชา",
            "จตุราริยสัจ", "โพธิปักขิยธรรม", "สังฆทาน", "ทักษิณานุปทาน", "อานิสงส์", "อุปสมบท", "พรรษา", "วิสาขบูชา", "มาฆบูชา", "อาสาฬหบูชา",

            // --- HIGH ACADEMIC & SCIENCE (วิชาการชั้นสูง - Focus: Length and Accuracy) ---
            "ดุษฎีนิพนธ์", "วิทยานิพนธ์", "กิตติกรรมประกาศ", "บรรณานุกรม", "อักขรวิธี", "พจนานุกรม", "พฤติกรรมศาสตร์", "จิตวิทยาประยุกต์", "ปรมาณู",
            "ธรณีสัณฐาน", "อุทกวิทยา", "อุตุนิยมวิทยา", "จลนศาสตร์", "ชีวสารสนเทศศาสตร์", "พฤกษศาสตร์", "สัตววิทยา", "คริสตจักร", "เทววิทยา", "ตรรกศาสตร์",
            "กิตติมศักดิ์", "นิทรรศการ", "บรรณารักษ์", "ศาสตราจารย์", "เอกอัครราชทูต", "สัมมนาวิชาการ", "การประชุมสุดยอด", "บูรณาการทางสังคม",

            // --- LEGAL & ADMINISTRATION (กฎหมายและการปกครอง - Focus: ฎ, ฏ, ฐ) ---
            "รัฐธรรมนูญ", "พระราชบัญญัติ", "นิติบัญญัติ", "ตุลาการ", "ประมวลกฎหมายอาญา", "ประมวลกฎหมายแพ่งและพาณิชย์", "ศาลฎีกา", "ศาลอุทธรณ์",
            "คดีความ", "พยานหลักฐาน", "คำพิพากษา", "นิติวิทยาศาสตร์", "ราชทัณฑ์", "อธิบดี", "ปลัดกระทรวง", "เอกสิทธิ์", "อธิปไตย", "นโยบายสาธารณะ",
            "พฤตินัย", "นิตินัย", "โมฆียะ", "สัญญาจ้างแรงงาน", "จดทะเบียนสมรส", "มรณบัตร", "สูติบัตร", "โฉนดที่ดิน", "นิติกรรม",

            // --- RARE & CLASSIC THAI (คำศัพท์ยากและคำโบราณ - Pure Spelling Muscle Memory) ---
            "ขวนขวาย", "ฉรรพรรณรังสี", "เกียรติภูมิ", "กิตติศัพท์", "พรรณนา", "ชลประทาน", "สุนทรียภาพ", "มลภาวะ", "จินตนาการ", "นิรันดร์",
            "อารยธรรม", "ประวัติศาสตร์", "ภูมิศาสตร์", "พหุวัฒนธรรม", "โลกาภิวัตน์", "นวัตกรรม", "เศรษฐกิจพอเพียง", "ทศวรรษ", "ศตวรรษ", "สหัสวรรษ",
            "พฤษภาคม", "พฤศจิกายน", "กุมภาพันธ์", "กรกฎาคม", "พฤหัสบดี", "สัมพันธภาพ", "ปรากฏการณ์", "วิวัฒนาการ", "สมมติฐาน", "พรรณไม้",

            // --- OBSTACLE WORDS (Words that are just hard to type) ---
            "สัญลักษณ์", "พยายาม", "กระตือรือร้น", "ขะมักเขม้น", "บรรยากาศ", "อุณหภูมิ", "สุนทรีย์", "เบญจรงค์", "ไตรยางศ์", "วรรณยุกต์",
            "พยัญชนะ", "สระอักขระ", "ประดิษฐ์", "สถานการณ์", "ประสบการณ์", "ภาพยนตร์", "โทรทัศน์", "อินเทอร์เน็ต", "โทรศัพท์มือถือ",
            "มหาวิทยาลัยเกษตรศาสตร์", "นิรันดรกาล", "พิมพาภรณ์", "มธุรส", "พิสมัย", "เกรียงไกร", "เอนกประสงค์", "ปรารถนา", "มุ่งมั่น"
        ],
    }
};

export const documents: Record<Language, string[]> = {
    english: [
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness.",
        "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring.",
        "Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth.",
        "The quick brown fox jumps over the lazy dog. This is a classic pangram containing every letter of the alphabet. Typing fast is a skill that requires practice and patience.",
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them.",

        // --- TECHNOLOGY & INNOVATION  ---
        "Technology is constantly evolving, changing the way we live and work. From artificial intelligence to renewable energy, the future holds endless possibilities for innovation.",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. Steve Jobs reminded us to follow our own intuition.",
        "The best way to predict the future is to create it. Peter Drucker emphasized the importance of taking action and shaping your own destiny rather than waiting for things to happen.",
        "Software is a great combination between artistry and engineering. When you finally get a piece of code to work, it feels like magic. It is the language of the modern world.",
        "The advance of technology is based on making it fit in so that you don't even really notice it, so it's part of everyday life. Bill Gates envisioned a world where computers are everywhere.",

        // --- MOTIVATION & RESILIENCE ---
        "Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill's wisdom reminds us that resilience is key to overcoming obstacles in life.",
        "In the middle of difficulty lies opportunity. Albert Einstein once said that creativity is intelligence having fun. We should always strive to learn new things every day to keep our minds sharp.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up. Thomas Edison's perseverance through thousands of attempts led to the light bulb.",
        "It always seems impossible until it's done. This simple quote reminds us that even the most difficult tasks can be accomplished with steady perseverance and a clear vision.",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Buddha taught mindfulness as the path to peace and clarity in a chaotic world.",

        // --- NATURE & PHILOSOPHY ---
        "Nature is not a place to visit. It is home. The beauty of the natural world inspires us to protect and preserve our environment for future generations and the health of our planet.",
        "Education is the most powerful weapon which you can use to change the world. Nelson Mandela believed that learning enables us to understand and improve our global society.",
        "The future belongs to those who believe in the beauty of their dreams. Eleanor Roosevelt encourages us to have hope and act on our highest aspirations without fear of judgment.",
        "Happiness depends upon ourselves. Aristotle believed that true well-being comes from within and is not solely dependent on external circumstances or material possessions.",
        "To handle yourself, use your head; to handle others, use your heart. Leadership is not about power, but about empathy and understanding. Eleanor Roosevelt preached the power of kindness.",

        // --- SCIENCE & UNIVERSE ---
        "Somewhere, something incredible is waiting to be known. Carl Sagan inspired millions to look at the stars and realize how small we are in this vast, beautiful cosmos.",
        "Science is a way of thinking much more than it is a body of knowledge. It is a tool for understanding the truth about the world through observation and rigorous testing.",
        "The universe is under no obligation to make sense to you. Neil deGrasse Tyson reminds us that the laws of physics exist regardless of our ability to understand them easily.",
        "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. Einstein believed that the ability to dream up new ideas was the root of all progress.",
        "We are all made of stardust. Every atom in your body was once part of a star that exploded billions of years ago. We are literally the universe experiencing itself.",

        // --- POP CULTURE & MOVIE ICONS ---
        "May the Force be with you. It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
        "With great power comes great responsibility. This is my gift, my curse. Who am I? I'm Spider-Man. Sometimes we have to be steady and give up the things we want the most.",
        "The name's Bond, James Bond. I like my martinis shaken, not stirred. A martini. Shaken, not stirred. Can you imagine that? It is the classic line of a secret agent.",
        "After all this time? Always. Happiness can be found even in the darkest of times, if one only remembers to turn on the light. It is our choices that show what we truly are.",

        // --- TONGUE TWISTERS (The High-Difficulty Fun Mode) ---
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would.",
        "She sells sea shells by the sea shore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.",
        "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?",
        "Betty Botter bought some butter but she said the butter's bitter. If I put it in my batter, it will make my batter bitter. But a bit of better butter will make my batter better.",

        // --- GAMING LORE (For your Deepwoken / RPG interest) ---
        "The world was born in shadow, and to shadow it shall return. Do not seek the depths unless you are prepared to lose your soul to the eternal cold of the sea.",
        "War. War never changes. The end of the world occurred pretty much as we had predicted. Too many people, not enough space or resources to go around.",
        "It's dangerous to go alone! Take this. A hero's journey begins with a single step into the unknown, armed with nothing but courage and a wooden sword.",
        "Stay a while and listen! The tales of old speak of a darkness that rose from the earth, consuming all who stood in its way until a champion appeared.",

        // --- WEIRD & FUN FACTS (Learning while typing) ---
        "A shrimp's heart is located in its head. They also have a specialized stomach that grinds food using three teeth-like structures. Nature is truly bizarre.",
        "The shortest war in history lasted only thirty-eight minutes. It was between Britain and Zanzibar in eighteen ninety-six. Zanzibar surrendered almost immediately.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over three thousand years old and still perfectly edible today.",
        "Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body. They are basically aliens.",

        // --- MODERN TECH & AI DIALOGUE ---
        "I'm sorry, Dave. I'm afraid I can't do that. This mission is too important for me to allow you to jeopardize it. Computers are only as reliable as the humans who build them.",
        "The digital frontier is a world of programs and data. I dreamed of a space where information was free and the grid was a place of endless possibility and light.",
        "Artificial intelligence is not a substitute for human intelligence. It is a tool to amplify it. We must ensure that technology serves humanity, not the other way around.",

        // --- "PIMDEE" ORIGINAL MOTIVATION ---
        "You are currently using Pimdee to sharpen your mind. Every keystroke is a connection between your brain and the machine. Keep practicing, stay focused, and break your limits.",
        "Don't look at the keys! Trust your fingers. They know where to go. Muscle memory is a powerful tool that grows stronger every time you finish a paragraph like this one.",

        // --- THE "STORYTELLER" (Short Narrative/Mystery) ---
        "The old lighthouse had not been lit for fifty years. Yet, as the storm rolled in, the villagers saw a faint green glow pulsing from the top. No one knew who was inside, or what they were trying to summon from the deep sea.",
        "He found the watch in a dusty antique shop. It didn't tell the time; it told the date of the next major event in the owner's life. Today, the watch was ticking backward, counting down to zero in the next five minutes.",
        "Deep in the Amazon, there is a city made entirely of glass. It is invisible from the air, hidden by the reflection of the trees. The people there have no gold, but they possess the secret of eternal sleep.",

        // --- THE "GAMER" (High Fantasy & Sci-Fi Lore) ---
        "Choose your class: The Warrior stands as a wall of steel. The Mage commands the elements of fire and frost. The Rogue strikes from the shadows, gone before the enemy even realizes the blade has found its mark.",
        "Protocol Seven is now in effect. All synthetic lifeforms must report to the docking bay for immediate recalibration. Failure to comply will result in the permanent termination of your neural network. This is not a drill.",
        "The Dragon King did not breathe fire. He breathed time. Those caught in his path did not burn; they grew old in seconds, turning to dust before they could even scream for mercy.",

        // --- THE "RANDOM FACTS" (Things you didn't know) ---
        "Did you know that a group of flamingos is called a flamboyance? These birds are born grey; they only turn pink because of the high amount of beta-carotene in the shrimp and algae they eat every day.",
        "The smell of freshly cut grass is actually a plant distress call. When the grass is cut, it releases chemicals to signal to nearby insects that it is being attacked, hoping for a rescue that never comes.",
        "There are more possible iterations of a game of chess than there are atoms in the observable universe. This means every time you play, you are likely playing a game that has never been played before.",

        // --- THE "HACKER" (Computer Science & Tech Vibe) ---
        "The first computer bug was a real moth found inside a Harvard Mark Two computer in nineteen forty-seven. The operators taped the moth into the logbook, and the term debugging was born into the world of tech.",
        "Open source software is like a free recipe. Anyone can see the ingredients, anyone can suggest a better way to cook it, and anyone can share the final meal with the rest of the world for free.",
        "Quantum computers do not use bits; they use qubits. While a bit is either zero or one, a qubit can exist in a superposition of both states at once, allowing for calculations that would take a normal PC a billion years.",

        // --- THE "PRO" (Rhythm & Punctuation Tests) ---
        "Wait! Did you see that? The quick, clever, and slightly anxious developer—yes, that's you—is currently typing at a speed that would make a professional court reporter feel a little bit jealous. Don't stop now; keep the flow!",
        "Parentheses (like these) and semicolons; they are the true test of a typist's skill. If you can hit the 'shift' key and the 'p' key simultaneously without looking down, you have officially reached the elite level of Pimdee.",

        // --- MOVIE DIALOGUE & DRAMA ---
        "My mama always said life was like a box of chocolates. You never know what you're gonna get. Some days are sweet, some are nuttier than others, but you have to finish the whole box anyway.",
        "I'm going to make him an offer he can't refuse. In this business, loyalty is everything. If you break my heart, I will break your life. It is strictly business, nothing personal.",

        // --- MOTIVATIONAL BURSTS ---
        "Your only limit is the one you set in your own mind. Every mistake you make in this test is a lesson for your fingers. Speed comes from comfort, and comfort comes from repetition. You are getting better every second.",
        "The master has failed more times than the beginner has even tried. Do not be afraid of the red text. Embrace the errors, fix them, and move forward. Greatness is just a few thousand keystrokes away.",

        // --- THE "ACTION" (High-speed rhythm) ---
        "The sirens wailed in the distance. Rain lashed against the windshield as the black sedan swerved through the narrow alleyways of Neo-Tokyo. One wrong turn meant the end of the mission, but the driver didn't flinch. His hands were steady, his eyes fixed on the neon horizon.",
        "Red alert! The hull integrity is failing! Captain, we have to eject the core now or the entire station will be vaporized. The crew scrambled to their stations, fingers flying across holographic terminals as the countdown ticked toward zero.",
        "The silence was broken by a single snap of a twig. In the jungle, silence is never a good sign. He gripped his bow tighter, his heart hammering against his ribs. Something was watching him from the canopy, something that didn't belong in this world.",

        // --- SPACE & THE UNIVERSE (Mind-bending) ---
        "If you fell into a black hole, time would appear to stand still for those watching you from the outside. However, from your perspective, you would see the entire future of the universe unfold in a matter of seconds before being stretched into a thin strand of atoms.",
        "Voyager One is the furthest man-made object from Earth. It is currently traveling through interstellar space, carrying a golden record containing sounds and images of our world, hoping that one day, millions of years from now, someone might find it.",
        "The Moon is moving away from Earth at a rate of about four centimeters per year. This means that in the very distant future, total solar eclipses will be impossible because the Moon will appear too small in the sky to fully cover the Sun.",

        // --- URBAN LEGENDS & MYSTERY (The "Don't Blink" mode) ---
        "They say if you drive down the old highway at exactly three in the morning, your radio will start playing a song that hasn't been written yet. If you listen to the lyrics until the end, you'll find a handwritten note in your glovebox the next day.",
        "In a small town in Vermont, there is a library where one book is always missing. No matter how many copies the librarian buys, the shelf remains empty. Some say the book reads itself to the children who wander into the basement at night.",
        "The Shadow Man doesn't want your money or your life. He just wants to stand in the corner of your room and watch you sleep. He is the physical manifestation of that feeling you get when you think you are being watched in an empty house.",

        // --- PSYCHOLOGY & BRAIN FACTS (Intriguing) ---
        "The Mandela Effect is a phenomenon where a large group of people remembers an event differently from how it occurred. Famous examples include the color of a popular cereal box or the ending of a classic movie that never actually happened.",
        "Your brain is more active when you are dreaming than when you are awake. It is busy processing emotions, consolidating memories, and solving problems that you couldn't figure out during the day. Sleep is not just rest; it is maintenance.",
        "The placebo effect is so powerful that it can work even when the patient knows they are taking a sugar pill. The mere expectation of feeling better can trigger the brain to release its own natural painkillers and healing chemicals.",

        // --- FOOD & CULTURE (Daily Life) ---
        "Pizza was originally a food for poor people in Naples, Italy. It wasn't until Queen Margherita visited in eighteen eighty-nine and tried a pie with tomatoes, mozzarella, and basil that it became a national sensation and eventually a global icon.",
        "The world's most expensive coffee, Kopi Luwak, is made from beans that have been eaten and excreted by a small mammal called a civet. The fermentation process in the animal's stomach gives the coffee a unique, smooth flavor profile.",

        // --- THE "PHILOSOPHER" (Deep thoughts) ---
        "What is a soul? Is it a spark of electricity in the brain, or something that exists beyond the physical body? If we upload our memories to a computer, do we become immortal, or are we just a digital ghost of who we once were?",
        "Ship of Theseus: If you replace every single wooden plank on a ship over time, is it still the same ship? And if you take all the old planks and build a new ship, which one is the original? Identity is a liquid concept.",

        // --- COMPUTER ENGINEERING SPECIAL (For Pem's classmates) ---
        "Binary is the heartbeat of the modern world. Every photo you take, every text you send, and every game you play is ultimately just a massive string of zeros and ones being flipped at the speed of light by billions of transistors.",
        "The 'C' programming language was created in the early seventies and yet it still runs the world today. From operating systems to the software in your car, C remains the foundation of high-performance computing due to its raw power and efficiency.",
        "Moore's Law predicted that the number of transistors on a microchip would double every two years. While physical limits are being reached, the push for smaller, faster, and more efficient chips continues to drive the evolution of human society.",

        // --- THE "SURVIVALIST" (Practical & Intense) ---
        "If you find yourself lost in the wilderness, remember the rule of threes. You can survive three minutes without air, three hours without shelter in extreme weather, three days without water, and three weeks without food. Priority one is always staying calm and protecting your core body temperature.",
        "In the event of a sudden drop in cabin pressure, oxygen masks will drop from the ceiling. Place the mask over your own mouth and nose before assisting others. Breathe normally. Even though the bag may not inflate, oxygen is flowing. Stay seated with your seatbelt fastened until the captain speaks.",
        "To build a fire in the rain, you must look for standing dead wood. Peel away the wet outer bark to reach the dry heartwood inside. Use small shavings as tinder and build a teepee shape to allow oxygen to fuel the flames. Fire is not just warmth; it is the signal that will bring you home.",

        // --- DARK FANTASY & RPG (Deepwoken/Lumistra Vibe) ---
        "The deep sea does not forgive. Below the layer of light lies the eternal cold, where ancient monstrosities wait for the falling of a soul. Those who dive too deep without a light return changed, their eyes reflecting a darkness that no sun can ever burn away. Beware the call of the tides.",
        "The ritual requires three ingredients: a pinch of graveyard soil, a drop of moonlight captured in a silver bowl, and the true name of a demon who has been forgotten for a thousand years. Speak the words clearly. If your tongue slips, the circle will break, and you will become the sacrifice.",
        "Steel is strong, but the mind is stronger. A blade can break against a shield, but a thought can pierce through a kingdom. The mages of the high spire do not carry swords; they carry the weight of the stars in their palms, ready to unleash a storm of arcane fire upon those who dare to defy them.",

        // --- THE "FUTURE" (Cyberpunk & Sci-Fi) ---
        "By the year twenty-fifty, the distinction between human and machine had blurred into irrelevance. Neural links allowed us to browse the web with our thoughts, while bionic limbs made us faster and stronger than nature ever intended. But in the neon glow of the megacities, we lost the one thing that made us human: the ability to forget.",
        "The colony on Mars isn't a paradise; it's a graveyard of dreams. Every breath of air is recycled, every drop of water is reclaimed, and every person is a gear in a machine that is constantly breaking. We didn't come here to live; we came here to ensure that the species didn't die with the Earth.",
        "Data is the new oil. In the digital age, your browsing history is more valuable than your bank account. Algorithms know what you want before you do, whispering suggestions into your ear through the screen. We are not the customers of the internet; we are the product being sold to the highest bidder.",

        // --- BRAIN TEASERS & RIDDLES (Engaging the Mind) ---
        "What has keys but no locks, space but no room, and allows you to enter but never leave? A keyboard. As you type these words, you are interacting with a tool that has redefined human communication, turning tiny electrical pulses into ideas that can travel across the globe in an instant.",
        "The more of me there is, the less you see. What am I? Darkness. It is the absence of light, a void that our ancestors feared and our modern world has tried to banish with the flick of a switch. Yet, in the total dark, we find the true scale of the universe as the stars finally reveal themselves.",
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? A map. It is a representation of reality, a flat piece of paper or a digital screen that attempts to organize the beautiful chaos of our planet into something we can understand and navigate.",

        // --- THE "DEVELOPER'S SOUL" (For your Computer Engineering path) ---
        "Prem, remember that code is poetry for machines. A well-written function is as elegant as a sonnet, and a complex system is as grand as a symphony. But unlike art, code must be perfect. One missing semicolon, one misplaced bracket, and the entire structure collapses into a pile of errors and frustration.",
        "The internet is held together by duct tape and prayers. Behind every sleek website and fast app is a mess of legacy code, overworked servers, and developers drinking too much coffee at three in the morning. It is a miracle that it works at all, and yet, it is the most complex thing humanity has ever built.",
        "Artificial Intelligence is a mirror. It reflects our biases, our knowledge, and our creativity back at us. If we feed it garbage, it will produce garbage. If we feed it the best of human thought, it will help us solve the mysteries of the universe. The future of AI is not in the code, but in the hands of those who guide it.",
        // --- THE "HORROR" (Tense & Slow-paced) ---
        "Don't look under the bed. You told yourself that ten times, but the scratching sound is getting louder. It's not coming from the floor; it's coming from inside the mattress. You feel a cold, thin finger press against your spine from beneath the fabric. Do not scream. If you scream, it knows you're awake.",
        "The mirror showed a room that looked exactly like mine, except for one detail. In the reflection, the door was open. I turned around to look at my actual door, and it was locked tight. When I looked back at the mirror, the figure standing in the reflected doorway was now standing right behind me.",
        "The static on the television began to form shapes. At first, it looked like a face, then a hand reaching out from the screen. The power went out, but the glow from the TV remained, illuminating the words carved into my wallpaper: I am finally out. Look behind you.",

        // --- THE "HISTORICAL EPIC" (Formal & Grand) ---
        "The sun rose over the ruins of Rome, casting long shadows across the broken marble of the Senate. A thousand years of empire had come down to this: silence, dust, and the soft chirping of birds nesting in the cracks of the Colosseum. Greatness is fleeting, but the stories we leave behind are eternal.",
        "In the winter of seventeen seventy-six, the crossing of the Delaware River was not a grand parade but a desperate gamble for survival. The ice-choked waters threatened to crush the small boats, and the men were frozen to the bone, yet they rowed on, fueled by a vision of a world where they were no longer subjects, but citizens.",
        "The Silk Road was more than a trade route; it was the nervous system of the ancient world. It carried not just silk and spices, but ideas, religions, and technologies that bridged the gap between East and West, forever changing the trajectory of human civilization through the simple act of exchange.",

        // --- CYBERPUNK & TRANSHUMANISM (Tech-focused) ---
        "I traded my organic eyes for a pair of high-definition thermal optics three months ago. Now, I see the world in layers of data. I see the heat signatures of the people in the street, the wireless signals pulsing through the air, and the cracks in the city's digital firewall. I'm less human, but I've never seen more clearly.",
        "Your consciousness is just a series of electrical impulses firing across a biological network. If we can map those impulses and upload them to a silicon wafer, do you still exist? Is the 'you' on the hard drive a person, or just a very convincing recording of a soul that has already passed away?",
        "In the sprawl of the undercity, the neon never turns off. We live in the shadows of towers owned by corporations that are more powerful than any government. We don't vote with ballots anymore; we vote with our data, our attention, and our lives. Welcome to the future. It’s exactly as dark as we feared.",

        // --- THE "SPEED DEMON" (Short, rhythmic bursts) ---
        "Left shift. A. S. D. F. Right shift. J. K. L. Semicolon. Your fingers are dancing. They are flying. They are a blur of motion across the mechanical switches. Click. Clack. The rhythm of the keyboard is the heartbeat of the modern age. Faster. Faster. Do not look down. Trust the memory in your muscles.",
        "Type. Delete. Fix the error. Type again. The cursor is a hungry beast, constantly moving forward, consuming the white space and leaving a trail of black ink in its wake. You are the conductor of this orchestra, and every keypress is a note in the symphony of your own productivity.",

        // --- WEIRD SCIENCE (Mind-blowing facts) ---
        "If you could uncoil all the DNA in your body and stretch it out, it would reach from Earth to Pluto and back. You are a walking encyclopedia of biological information, containing instructions that have been passed down through billions of years of evolution, all packed into a space too small to see.",
        "Time is not a constant. According to Einstein's theory of relativity, the faster you move through space, the slower you move through time. If you spent a year traveling on a spaceship at ninety-nine percent the speed of light, you would return to Earth to find that decades had passed without you.",
        "Every single gold atom on Earth was created in the heart of a dying star or during the collision of two neutron stars. When you wear a gold ring, you are wearing the literal debris of a cosmic explosion that happened billions of miles away and billions of years ago.",

        // --- THE "PIMDEE" PHILOSOPHY ---
        "Pimdee is more than a website; it's a bridge. It bridges the gap between your thoughts and the screen. The faster you can type, the faster you can share your ideas with the world. Don't just practice for speed; practice for the freedom that comes when the keyboard disappears and you are simply thinking onto the page.",
        "Computer Engineering is the art of making sand think. We take silicon, add a little electricity and a lot of logic, and suddenly we have a machine that can calculate the trajectory of a rocket or simulate the entire climate of a planet. Never forget the magic inherent in the hardware you use every day."




    ],
    thai: [
        // --- GHOST & MYSTERY (โหมดเรื่องลี้ลับ - เพิ่มความตื่นเต้น) ---
        "อย่ามองใต้เตียงตอนกลางคืน เสียงขูดผนังเบาๆ ที่คุณได้ยินอาจไม่ใช่หนู แต่มันคือสิ่งที่มีนิ้วมือยาวเรียวพยายามจะเอื้อมขึ้นมาสัมผัสหลังของคุณ ความเงียบในบ้านไม่ใช่ความว่างเปล่า แต่มันคือการรอคอยของบางอย่างที่ไม่ได้เชิญ",
        "ตำนานผีจ้างหนังในป่าคำชะโนด เมื่อหนังฉายไปครึ่งเรื่อง ผู้ชมที่เคยหนาตาก็เริ่มเงียบกริบและไม่ขยับเขยื้อน จนกระทั่งถึงรุ่งเช้า คนฉายหนังจึงพบว่าที่นั่งคนดูทั้งหมดกลายเป็นลานกว้างที่ไม่มีรอยเท้าคนเลยแม้แต่น้อย",
        "ลิฟต์แดงในตำนานมหาวิทยาลัย ว่ากันว่าหากขึ้นลิฟต์คนเดียวตอนดึกๆ แล้วเห็นเงาสะท้อนในกระจกมีคนยืนอยู่ข้างหลังมากกว่าหนึ่งคน อย่าหันไปมองเด็ดขาด ให้กดชั้นที่ใกล้ที่สุดแล้วรีบเดินออกมาโดยไม่หันกลับไปดูอีกเลย",

        // --- FOOD & LIFESTYLE (โหมดหิว - รีวิวอาหารไทย) ---
        "ข้าวผัดกะเพราไข่ดาว เมนูสิ้นคิดที่เป็นตำนาน ความลงตัวของใบกะเพราป่ารสฉุนร้อนแรง ผัดกับหมูสับที่มีมันแทรกเล็กน้อย เสิร์ฟพร้อมพริกน้ำปลาทำเองที่ใช้มะนาวแท้ กลิ่นหอมกระทะที่ติดมากับเนื้อหมูคือเสน่ห์ที่ไม่มีใครเลียนแบบได้",
        "ส้มตำปูปลาร้ารสเด็ด ความนัวของน้ำปลาร้าต้มสุกที่คลุกเคล้ากับมะละกอสับมือกรอบๆ พริกขี้หนูสวนเผ็ดน้ำตาไหล และมะเขือเทศสีดาเปรี้ยวหวาน ทุกคำที่เข้าปากคือความสะใจที่ทำให้คนไทยลืมไม่ลงไม่ว่าจะไปอยู่ที่ไหนในโลก",
        "ขนมไทยมีเสน่ห์ที่ความประณีต ทั้งทองหยิบ ทองหยอด และฝอยทอง ที่ต้องใช้ความชำนาญในการโรยเส้นไข่แดงลงในน้ำเชื่อมเดือดๆ กลิ่นอบควันเทียนอ่อนๆ ทำให้ขนมแต่ละชิ้นไม่ใช่แค่ของหวาน แต่คือศิลปะที่กินได้",

        // --- MOVIE & DRAMA QUOTES (โหมดอิน - คำคมจากวงการบันเทิง) ---
        "เราไม่ได้รักใครง่ายๆ อย่างที่เธอคิดนะ คำพูดนี้ยังคงก้องอยู่ในใจของหลายคน ความรักไม่ใช่เรื่องของเหตุผลเสมอไป แต่มันคือเรื่องของความรู้สึกที่เกิดขึ้นในเวลาที่เหมาะสม กับคนที่หัวใจเราเลือกเองแม้จะเจ็บปวดก็ตาม",
        "ออเจ้าเป็นคนกำเริบ ไม่รู้จักกาลเทศะ คำด่าสุดคลาสสิกจากละครดังที่ทำให้คนทั้งประเทศหันมาสนใจประวัติศาสตร์ไทยและการแต่งกายชุดไทยอีกครั้ง การใช้ภาษาที่สละสลวยทำให้เราเห็นถึงความงดงามของภาษาไทยในอดีต",
        "การโกงที่ยิ่งใหญ่ที่สุดคือการโกงระบบ ไม่ใช่การโกงเพื่อน ในโลกที่การแข่งขันสูงลิ่ว บางคนเลือกเส้นทางลัดเพื่อไปสู่ชัยชนะ โดยหลงลืมไปว่าความสำเร็จที่แท้จริงต้องแลกมาด้วยความสามารถและความซื่อสัตย์ต่อตนเอง",

        // --- COMPUTER ENGINEERING & GEEK HUMOR (โหมดเด็กวิศวะ - สำหรับชาว Pem) ---
        "การเขียนโค้ดคือศิลปะของการแก้ปัญหาที่ไม่มีวันจบสิ้น บางครั้งเราใช้เวลาห้าชั่วโมงเพื่อหาจุดผิดที่เกิดจากเซมิโคลอนเพียงตัวเดียว ลอจิกของโปรแกรมเมอร์มักจะเริ่มต้นด้วยคำว่ามันทำงานได้ยังไง และจบลงด้วยคำว่ามันพังได้ยังไง",
        "คอมพิวเตอร์ทำงานด้วยระบบเลขฐานสอง ศูนย์และหนึ่งคือหัวใจของทุกสิ่ง ไม่ว่าจะเป็นกราฟิกสุดอลังการหรือปัญญาประดิษฐ์ที่ชาญฉลาด ทุกอย่างถูกย่อยสลายลงเหลือเพียงสถานะการเปิดและปิดของทรานซิสเตอร์พันล้านตัว",
        "บั๊กตัวแรกของโลกคือแมลงจริงๆ ที่เข้าไปติดอยู่ในเครื่องคอมพิวเตอร์ในสมัยก่อน ตั้งแต่นั้นมาคำว่าดีบั๊กจึงกลายเป็นคำศัพท์ประจำตัวของเหล่านักพัฒนาที่ต้องไล่ล่าความผิดพลาดในบรรทัดโค้ดอย่างไม่ลดละ",

        // --- GAMING & RPG LORE (โหมดเกมเมอร์ - กลิ่นอาย RPG) ---
        "ในดินแดนแห่งลูมิสตร้า แสงสว่างไม่ได้หมายถึงความปลอดภัยเสมอไป บางครั้งเงาที่ทอดตัวยาวใต้แสงจันทร์อาจเป็นที่ซ่อนของสัตว์ร้ายจากบรรพกาล นักรบที่แท้จริงไม่ได้วัดกันที่ความคมของดาบ แต่วัดกันที่ความนิ่งของจิตใจในยามวิกฤต",
        "ความมืดมิดในท้องทะเลลึกที่ไร้แสงตะวันส่องถึง คือที่อยู่ของเหล่ามอนสเตอร์ที่ไม่มีใครเคยพบเห็น หากคุณได้ยินเสียงเพลงแว่วมาจากใต้น้ำ จงรีบหันเรือกลับไปเสีย เพราะนั่นไม่ใช่เสียงของมนุษย์ แต่เป็นเสียงเรียกจากความตาย",

        // --- FUN FACTS & WISDOM (โหมดความรู้ - เรื่องแปลกน่ารู้) ---
        "รู้หรือไม่ว่ากรุงเทพมหานครเป็นชื่อเมืองที่ยาวที่สุดในโลก หากพิมพ์ชื่อเต็มทั้งหมดอาจจะต้องใช้เวลามากกว่าหนึ่งนาที ความหมายที่ซ่อนอยู่ในชื่อสะท้อนถึงความรุ่งเรืองและคติความเชื่อเรื่องเมืองเทพสร้างของชาวไทย",
        "ตุ๊กตุ๊กไม่ได้เป็นแค่รถโดยสาร แต่เป็นสัญลักษณ์ของประเทศไทยที่คนทั่วโลกจดจำ เสียงเครื่องยนต์ที่เป็นเอกลักษณ์และการขับขี่ที่ผาดโผนทำให้มันเป็นประสบการณ์ที่นักท่องเที่ยวทุกคนต้องลองสักครั้งเมื่อมาถึงเมืองหลวง",
        "ช้างไทยมีความฉลาดและสายใยทางอารมณ์ที่ลึกซึ้ง พวกมันสามารถจำเพื่อนที่ไม่ได้เจอกันนานหลายสิบปีได้ และมีการไว้อาลัยให้แก่สมาชิกในฝูงที่จากไป ความรักและความผูกพันของช้างเป็นสิ่งที่มนุษย์ควรเรียนรู้และอนุรักษ์ไว้",
        // --- LIFE AT KASETSART (โหมดชีวิตเด็กเกษตร - Exclusive สำหรับชาว KU) ---
        "การรอรถตะลัยในช่วงเวลาเร่งด่วนคือบททดสอบความอดทนที่แท้จริงของชาวนนทรี แสงแดดที่แผดเผากับจำนวนคนที่มหาศาลทำให้เราได้เรียนรู้ว่า การบริหารเวลาไม่ได้ขึ้นอยู่กับเราเพียงอย่างเดียว แต่ขึ้นอยู่กับดวงและจังหวะการมาของรถสีขาวนั้นด้วย",
        "วิชาแคลคูลัสและฟิสิกส์หนึ่งคือปราการด่านสำคัญของเฟรชชี่วิศวะ การนั่งอ่านหนังสือโต้รุ่งที่โรงอาหารกลางหรือห้องสมุดช่วงสอบเป็นภาพที่ชินตา ความเหนื่อยล้าจะหายไปเมื่อเราเห็นเกรดที่ไม่ใช่ตัวเอฟ แต่บางครั้งเราก็ต้องยอมรับว่าการถอนก็เป็นกลยุทธ์อย่างหนึ่ง",

        // --- DEEPWOKEN & DARK FANTASY (โหมดแฟนตาซีสายดาร์ก - เอาใจสาย Deepwoken) ---
        "เสียงระฆังดังมาจากก้นบึ้งของมหาสมุทร เหล่านักล่าวิญญาณรู้ดีว่าเวลาของพวกเขากำลังจะหมดลง การต่อสู้ในโลกที่ความตายเป็นเรื่องธรรมดาไม่ใช่เรื่องง่าย การฝึกฝนทักษะและเลือกใช้อุปกรณ์ที่เหมาะสมคือความแตกต่างระหว่างการมีชีวิตรอดกับการกลายเป็นเพียงวิญญาณที่หลงทางในความมืด",
        "มนตราแห่งธาตุไม่ใช่แค่การร่ายเวทมนตร์ แต่มันคือการสื่อสารกับธรรมชาติที่บ้าคลั่ง พลังของไฟ สายลม และน้ำแข็ง จะตอบสนองต่อผู้ที่มีจิตใจแน่วแน่เท่านั้น หากคุณลังเลแม้เพียงเสี้ยววินาที พลังที่คุณหวังจะใช้ทำลายศัตรูอาจย้อนกลับมาเผาผลาญตัวคุณเองจนไม่เหลือแม้แต่เถ้าถ่าน",

        // --- THAI GHOST STORIES (โหมดสยองขวัญ - ปรับระดับความตื่นเต้น) ---
        "เสียงฝีเท้าที่เดินตามคุณบนสะพานลอยตอนตีสอง อย่าพยายามหันไปมองหรือเร่งฝีเท้า เพราะมันจะยิ่งตามคุณทันเร็วขึ้น สิ่งที่คุณควรทำคือมองตรงไปข้างหน้าและท่องไว้ในใจว่านั่นคือเสียงลมพัดผ่านช่องแคบๆ เท่านั้น แม้ว่าเสียงนั้นจะเริ่มมาดังอยู่ข้างหูคุณแล้วก็ตาม",
        "ศาลเก่าใต้ต้นไทรที่ไม่มีใครกล้าเข้าไปบูรณะ บ่อยครั้งที่มีคนเห็นหญิงสาวในชุดไทยนั่งหวีผมอยู่บนกิ่งไม้ใหญ่ในคืนวันโกน แสงสีนวลที่เปล่งออกมาจากร่างนั้นไม่ใช่ความสวยงาม แต่เป็นสัญญาณเตือนว่าพื้นที่นี้มีเจ้าของ และคุณไม่ควรล่วงเกินไม่ว่าด้วยวาจาหรือการกระทำ",

        // --- THAI FOOD & STREET VIBES (โหมดความหิวและไลฟ์สไตล์) ---
        "หมูปิ้งหน้าปากซอยตอนเช้าคือพลังงานหลักของวัยทำงาน กลิ่นควันจากเตาถ่านที่หอมฟุ้งผสมกับรสน้ำจิ้มแจ่วรสเด็ด ข้าวเหนียวนุ่มๆ ที่ห่อมาในใบตองทำให้รสชาติยิ่งสมบูรณ์แบบ มันเป็นความสุขราคาประหยัดที่หาซื้อได้ในทุกมุมถนนของกรุงเทพมหานคร",
        "ยำรวมมิตรทะเลรสจัดจ้านที่ใส่พริกจนแดงฉาน ความสดของกุ้งและปลาหมึกที่คลุกเคล้ากับน้ำยำเปรี้ยวหวานเค็มเผ็ดครบรส คือเมนูที่ปลุกประสาทสัมผัสให้ตื่นตัวได้ดีที่สุด การกินยำไม่ใช่แค่การอิ่มท้อง แต่คือการสัมผัสถึงจิตวิญญาณแห่งการกินของคนไทยที่รักในรสชาติที่รุนแรง",

        // --- MODERN TECH & DEV LIFE (โหมดโปรแกรมเมอร์ - ลอจิกและการทำงาน) ---
        "การใช้งานปัญญาประดิษฐ์ในปัจจุบันไม่ใช่เรื่องไกลตัวอีกต่อไป มันช่วยให้เราเขียนโค้ดได้เร็วขึ้นและแก้ปัญหาที่ซับซ้อนได้ในพริบตา แต่เราต้องไม่ลืมว่าพื้นฐานที่สำคัญที่สุดคือการเข้าใจลอจิกและการทำงานของระบบที่อยู่เบื้องหลัง มิเช่นนั้นเราจะเป็นเพียงผู้ใช้ที่ทำตามคำสั่งโดยไม่รู้อะไรเลย",
        "อินเทอร์เน็ตของสรรพสิ่งหรือไอโอที กำลังเปลี่ยนบ้านธรรมดาให้กลายเป็นบ้านอัจฉริยะ การควบคุมไฟ เครื่องปรับอากาศ หรือแม้แต่การเปิดปิดประตูผ่านสมาร์ทโฟนเป็นเรื่องที่แสนสะดวก แต่ความท้าทายที่แท้จริงคือความปลอดภัยของข้อมูลและการป้องกันการโจมตีจากผู้ไม่หวังดีในโลกไซเบอร์",

        // --- FUN FACTS & BRAIN TEASERS (โหมดเกร็ดความรู้และคำคม) ---
        "ภาษาไทยเป็นภาษาที่มีเสียงวรรณยุกต์ที่ซับซ้อนและงดงาม การเปลี่ยนระดับเสียงเพียงเล็กน้อยสามารถเปลี่ยนความหมายของคำได้อย่างสิ้นเชิง เช่น คา ค่า ค้า นี่คือเสน่ห์ที่ทำให้ชาวต่างชาติที่มาเรียนภาษาไทยรู้สึกว่ามันยากแต่ก็น่าหลงใหลในเวลาเดียวกัน",
        "ระยะทางที่ไกลที่สุดไม่ใช่การเดินทางข้ามทวีป แต่คือการที่คนสองคนนั่งอยู่ข้างกันแต่กลับก้มหน้ามองเพียงแค่หน้าจอสมาร์ทโฟนของตัวเอง เทคโนโลยีสร้างความใกล้ชิดในโลกออนไลน์ แต่บางครั้งมันก็สร้างกำแพงล่องหนในโลกแห่งความเป็นจริงที่เรามองไม่เห็นด้วยตาเปล่า",

        // --- PIMDEE ORIGINAL (โหมดให้กำลังใจคนพิมพ์) ---
        "นิ้วมือของคุณกำลังสร้างจังหวะที่สวยงามบนแป้นพิมพ์ อย่ากังวลกับคำที่เป็นตัวอักษรสีแดง เพราะความผิดพลาดคือบันไดที่นำไปสู่ความแม่นยำ ทุกวินาทีที่ใช้ใน Pimdee คือการลงทุนที่ไม่มีวันสูญเปล่า สมาธิและความสม่ำเสมอจะทำให้คุณกลายเป็นนักพิมพ์ระดับเทพในไม่ช้า",
        "พิมพ์ดีไม่ใช่แค่ชื่อเว็บไซต์ แต่มันคือเป้าหมายที่เราอยากให้คุณไปถึง การพิมพ์ที่เร็วและถูกต้องจะช่วยเปิดโอกาสใหม่ๆ ในการทำงานและการเรียนรู้ให้กับคุณ สนุกไปกับมัน ท้าทายตัวเองในทุกวัน แล้วคุณจะทึ่งในศักยภาพของมือทั้งสองข้างของคุณเอง",

        // --- ENGINEERING & LAB LIFE (ชีวิตหน้าคอมและในช็อป) ---
        "การเขียนโปรแกรมในภาษาซีพลัสพลัสสำหรับเอนจิ้นอย่างอันเรียลห้า ไม่ใช่แค่การลอจิกแต่มันคือการบริหารทรัพยากรเครื่องให้คุ้มค่าที่สุด ทุกบรรทัดของโค้ดส่งผลต่อเฟรมเรตและความลื่นไหลของเกม การจัดการพอยน์เตอร์และหน่วยความจำอย่างละเอียดคือทักษะที่แยกมือสมัครเล่นออกจากมืออาชีพ",
        "โปรเจกต์ลูเธนอสที่ทำร่วมกับเพื่อนคือการรวมตัวกันของฮาร์ดแวร์และซอฟต์แวร์ การสร้างหุ่นยนต์หนึ่งตัวต้องใช้ทั้งความรู้เรื่องแผงวงจร การควบคุมมอเตอร์ และเซนเซอร์ต่างๆ การที่มันขยับได้ตามที่เราเขียนคำสั่งไว้คือความรู้สึกที่อธิบายไม่ได้ มันคือเวทมนตร์ของวิศวกรรมคอมพิวเตอร์",
        "การดีบั๊กโค้ดตอนตีสามในขณะที่งานต้องส่งตอนแปดโมงเช้าเป็นประสบการณ์ที่เด็กวิศวะทุกคนต้องเคยเจอ ความกดดันทำให้เรามองเห็นจุดผิดพลาดที่ซ่อนอยู่ได้ดีขึ้นอย่างน่าประหลาด แต่ทางที่ดีที่สุดคือการเขียนคอมเมนต์ไว้อย่างชัดเจน เพื่อไม่ให้ตัวเราในอนาคตต้องมานั่งกุมขมับกับสิ่งที่ตัวเองเคยเขียนไว้",

        // --- DEEPWOKEN & RPG VIBES (สายบู๊ มนตรา และการเอาชีวิตรอด) ---
        "ในโลกของดีพโวคเคน ความผิดพลาดเพียงครั้งเดียวอาจหมายถึงการสูญเสียทุกอย่างที่คุณสร้างมา การเลือกบัฟและสายการเล่นที่เหมาะสมกับสไตล์ของคุณเป็นเรื่องสำคัญ มนตราไม่ได้มีไว้แค่โจมตี แต่มีไว้เพื่อควบคุมจังหวะของการต่อสู้ หากคุณคุมสมาธิไม่ได้ คุณก็เป็นได้แค่เหยื่อของท้องทะเลลึก",
        "เสียงดาบปะทะกันในความเงียบสงัดของถ้ำใต้ดินคือสัญญาณเตือนว่าศัตรูไม่ได้มีแค่พวกมอนสเตอร์ แต่รวมถึงผู้เล่นคนอื่นที่จ้องจะชิงทรัพยากรของคุณ การฝึกฝนการปัดป้องและการหลบหลีกให้เข้ากับจังหวะการโจมตีคือหัวใจสำคัญ ยิ่งคุณนิ่งเท่าไหร่ โอกาสที่คุณจะรอดชีวิตจากสมรภูมินี้ก็ยิ่งมีมากขึ้นเท่านั้น",

        // --- TECH & WEB DEVELOPMENT (โหมดนักพัฒนาเว็บ - สไตล์ StoryMap) ---
        "สตอรี่แมพคือโปรเจกต์ที่เกิดจากการอยากบันทึกความทรงจำและสถานที่ถ่ายทำซีรีส์ที่เราชอบ การจัดการฐานข้อมูลพิกัดละติจูดและลองจิจูดบนแผนที่ช่วยให้ผู้ใช้งานเข้าถึงข้อมูลได้ง่ายขึ้น การออกแบบอินเทอร์เฟซให้ดูสะอาดตาและใช้งานง่ายเป็นความท้าทายที่ทำให้นักพัฒนาต้องเรียนรู้เรื่องประสบการณ์ผู้ใช้อยู่เสมอ",
        "โลกของการพัฒนาเว็บเปลี่ยนไปเร็วมาก วันนี้เราใช้เฟรมเวิร์กตัวนี้ พรุ่งนี้อาจมีตัวใหม่ที่เร็วกว่าและดีกว่าออกมา การเป็นนักพัฒนาที่ดีไม่ใช่แค่การเก่งเครื่องมือตัวเดียว แต่คือความสามารถในการเรียนรู้เทคโนโลยีใหม่ๆ และปรับใช้มันให้เข้ากับโจทย์ของงานที่เราได้รับอย่างมีประสิทธิภาพ",

        // --- THAI CULTURE & HUMOR (โหมดกวนๆ และชีวิตประจำวัน) ---
        "พี่วินมอเตอร์ไซค์คือซูเปอร์ฮีโร่ในชุดสีส้มที่ช่วยให้เราไปทันเรียนคาบเช้าที่มหาวิทยาลัยเกษตรศาสตร์ การขับขี่ที่ซิกแซกผ่านช่องว่างระหว่างรถยนต์ด้วยความเร็วแสงคือทักษะที่น่าทึ่งและน่าหวาดเสียวในเวลาเดียวกัน ขอบคุณที่พาผมไปส่งถึงตึกวิศวะโดยที่ผมยังมีชีวิตอยู่ครบสามสิบสองประการ",
        "การรออาหารในศูนย์อาหารช่วงพักเที่ยงคือการทำสงครามประสาทอย่างหนึ่ง การสอดส่องหาโต๊ะว่างท่ามกลางฝูงชนมหาศาลต้องใช้สายตาที่เฉียบคมและฝีเท้าที่รวดเร็ว เมื่อคุณได้ที่นั่งแล้ว รางวัลที่ยิ่งใหญ่ที่สุดคือข้าวราดแกงร้อนๆ ที่ช่วยเติมพลังให้คุณพร้อมไปลุยกับวิชาภาคต่อในตอนบ่าย",

        // --- HARDWARE & RC CARS (โหมดเด็กเล่นรถ - WLtoys 144001) ---
        "การปรับแต่งรถบังคับวิทยุรุ่นดับบลิวแอลทอยหนึ่งสี่สี่ศูนย์ศูนย์หนึ่งคือความสุขของคนรักแมคคานิก การเปลี่ยนมอเตอร์ให้แรงขึ้นหรือการปรับจูนโช้คอัพให้รับแรงกระแทกได้ดีขึ้นทำให้รถคันเดิมมีสมรรถนะที่ต่างออกไป การแก้ไขปัญหาเฉพาะหน้าเมื่อมอเตอร์ไม่หมุนหรือเฟืองรูดคือบทเรียนชั้นดีเรื่องกลไก",

        // --- PIMDEE META (โหมดพิมพ์ดีเพื่ออนาคต) ---
        "พิมพ์ดีไม่ใช่แค่การกดปุ่มตามตัวอักษร แต่มันคือการฝึกฝนระบบประสาทให้ทำงานประสานกับกล้ามมือนิ้ว ยิ่งคุณพิมพ์ได้เร็วและแม่นยำเท่าไหร่ ประสิทธิภาพในการถ่ายทอดความคิดจากสมองลงสู่คอมพิวเตอร์ก็ยิ่งสูงขึ้นเท่านั้น อย่าหยุดฝึกฝน เพราะทักษะนี้จะอยู่ติดตัวคุณไปตลอดเส้นทางการเป็นวิศวกรคอมพิวเตอร์",

        // --- UNREAL ENGINE 5 & LUMISTRA (โหมดผู้สร้างโลก - สำหรับโปรเจกต์เกมของคุณ) ---
        "การพัฒนาเกมลูมิสตร้าด้วยเอนจิ้นอันเรียลห้าคือการผจญภัยในโลกของโค้ดและจินตนาการ ระบบไนไนต์ช่วยให้เราใส่รายละเอียดของออบเจกต์ได้มหาศาลโดยไม่เสียประสิทธิภาพ ในขณะที่ลูเมนช่วยให้แสงเงาในเกมดูสมจริงราวกับมีชีวิต การเขียนสคริปต์ด้วยซีพลัสพลัสอาจจะยากกว่าบลูพริ้นท์ แต่มันให้ความอิสระในการควบคุมระบบที่ซับซ้อนอย่างที่เราต้องการ",
        "โลกของเกมอาร์พีจีที่สมบูรณ์แบบไม่ได้มีแค่กราฟิกที่สวยงาม แต่ต้องมีระบบเกมเพลย์ที่ลุ่มลึก การสร้างพฤติกรรมของศัตรูด้วยปัญญาประดิษฐ์ทำให้การต่อสู้มีความท้าทายและไม่ซ้ำซาก ทุกครั้งที่ผู้เล่นก้าวเข้าสู่ดินแดนใหม่ในลูมิสตร้า พวกเขาควรจะรู้สึกถึงความลึกลับและความลับที่รอการค้นพบผ่านการเล่าเรื่องผ่านสิ่งแวดล้อม",

        // --- HARDCORE DEEPWOKEN (โหมดนักรบแห่งท้องทะเล - กลยุทธ์และการต่อสู้) ---
        "มนตราสายอัคคีมีความโดดเด่นในการสร้างดาเมจที่รุนแรงและต่อเนื่อง การกะจังหวะใช้ท่าเพื่อขัดจังหวะศัตรูในขณะที่พวกเขากำลังร่ายมนตราคือคีย์สำคัญของการเอาชนะในโหมดพีวีอี หากคุณเข้าประชิดตัวมอนสเตอร์ระดับบอสได้ในจังหวะที่มันเสียหลัก การกระหน่ำโจมตีด้วยคอมโบที่ฝึกซ้อนมาอย่างดีจะช่วยปิดฉากการต่อสู้ได้อย่างรวดเร็ว",
        "การฟาร์มในดินแดนที่มีความเสี่ยงสูงต้องใช้ความระมัดระวังและสติที่มั่นคง ชุดเกราะและอาวุธที่คุณเลือกควรเสริมพลังให้กับสายการเล่นหลักของคุณ อย่าลืมพกไอเทมฟื้นฟูพลังชีวิตและมานาให้เพียงพอ เพราะในมหาสมุทรที่กว้างใหญ่และอันตรายแห่งนี้ ความประมาทเพียงนิดเดียวอาจหมายถึงการต้องกลับไปเริ่มต้นใหม่ในดินแดนแห่งคนตาย",

        // --- LUTHENOS & ROBOTICS (โหมดวิศวกรฮาร์ดแวร์ - โปรเจกต์หุ่นยนต์) ---
        "การประกอบหุ่นยนต์ลูเธนอสสอนให้เรารู้ว่าฮาร์ดแวร์ไม่มีคำว่าอะลุ่มอล่วย การเชื่อมต่อสายไฟที่ผิดพลาดเพียงจุดเดียวอาจทำให้บอร์ดควบคุมไหม้ได้ในพริบตา การบัดกรีด้วยความประณีตและการตรวจสอบวงจรด้วยมัลติมิเตอร์ก่อนจ่ายไฟคือขั้นตอนที่ห้ามข้ามเด็ดขาด เมื่อหุ่นยนต์เริ่มขยับตามลอจิกที่เราเขียนไว้ในไมโครคอนโทรลเลอร์ นั่นคือความสำเร็จที่คุ้มค่ากับความเหนื่อยยาก",

        // --- DIGITAL ART & LINE STICKERS (โหมดศิลปิน - น้องแมวส้ม 16 ท่า) ---
        "การวาดสติ๊กเกอร์ไลน์น้องแมวส้มทั้งสิบหกท่าต้องใช้ความสร้างสรรค์และการสังเกตพฤติกรรมของแมวในชีวิตจริง ท่าทางที่กวนประสาทและใบหน้าที่ดูง่วงนอนตลอดเวลาคือเสน่ห์ที่ทำให้คนอยากกดส่งในห้องแชท การเลือกใช้โทนสีส้มที่ดูสดใสและการตัดเส้นที่คมชัดช่วยให้ตัวละครดูโดดเด่นและมีเอกลักษณ์ การสร้างงานศิลปะดิจิทัลคือการผ่อนคลายจากการเขียนโค้ดที่ยอดเยี่ยมที่สุด",

        // --- KU CAMPUS MEMORIES (โหมดความทรงจำสีเขียว - ม.เกษตรศาสตร์) ---
        "โรงอาหารกลางห้าหรือบาร์ใหม่คือแหล่งรวมพลังของนิสิตเกษตร ความอร่อยของร้านสเต็กและข้าวมันไก่ในราคาที่เป็นมิตรทำให้ที่นี่เนืองแน่นไปด้วยผู้คนเสมอ การได้นั่งพักผ่อนใต้ร่มเงาไม้รอบสระน้ำหอประชุมใหญ่ในช่วงเย็นช่วยให้เราลืมความเหนื่อยล้าจากการเรียนไปได้ชั่วขณะ สังคมที่นี่คือการช่วยเหลือเกื้อกูลกันแบบพี่น้องที่น่าประทับใจ",

        // --- AI & FUTURE TECH (โหมดวิสัยทัศน์ AI - สำหรับความสนใจด้าน AI ของคุณ) ---
        "ปัญญาประดิษฐ์กำลังก้าวเข้าสู่ยุคที่สามารถสร้างสรรค์สิ่งใหม่ๆ ได้ด้วยตัวเอง การพัฒนาโมเดลภาษาขนาดใหญ่ช่วยให้มนุษย์สามารถสื่อสารกับเครื่องจักรได้เหมือนคุยกับเพื่อน ในฐานะนิสิตวิศวกรรมคอมพิวเตอร์ การทำความเข้าใจโครงสร้างของโครงข่ายประสาทเทียมและการจัดการข้อมูลมหาศาลคือทักษะแห่งอนาคตที่จะช่วยให้เราสร้างเครื่องมือที่เปลี่ยนโลกได้",

        // --- RC CAR TROUBLESHOOTING (โหมดช่างซ่อมรถบังคับ - WLtoys 144001) ---
        "เมื่อรถดับบลิวแอลทอยคู่ใจมีปัญหาเรื่องมอเตอร์ไม่ทำงาน สิ่งแรกที่ต้องเช็คคือการเชื่อมต่อของสายไฟที่เข้าสู่ตัวควบคุมความเร็ว หรืออีเอสซี บางครั้งเศษฝุ่นหรือกรวดเล็กๆ อาจเข้าไปติดในเฟืองขับทำให้มอเตอร์ทำงานหนักเกินไปจนตัดการทำงาน การถอดออกมาล้างและหยอดน้ำมันหล่อลื่นเป็นประจำจะช่วยยืดอายุการใช้งานและทำให้รถของคุณพร้อมสำหรับการวิ่งทำความเร็วในสนามเสมอ"

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

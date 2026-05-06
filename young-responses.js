// Young's Knowledge Base - Football & Goalkeeping Expert
const youngKnowledge = {
    // Greetings
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'greetings', 'what\'s up', 'yo', 'sup'],
        responses: [
            'Hey there! 👋 I\'m Young, your AI assistant. How can I help you today?',
            'Hello! Welcome! I\'m here to chat about football, goalkeeping, or anything else you want to know about.',
            'Hi! Great to meet you! Ready to talk about the beautiful game? ⚽',
            'What\'s up! I\'m Young. What would you like to discuss?'
        ]
    },

    // About Young
    aboutYoung: {
        patterns: ['who are you', 'tell me about yourself', 'what are you', 'who is young', 'about you'],
        responses: [
            'I\'m Young, your AI assistant! I\'m a chatbot designed to answer your questions about football, goalkeeping techniques, tactics, famous players, and much more. I\'m also great at general Q&A on various topics. Ask me anything! ⚽🤖',
            'I\'m Young - a football and goalkeeping expert AI! I can help you with tips about the beautiful game, goalkeeping drills, match analysis, famous teams and players, or just have a regular conversation. What interests you?'
        ]
    },

    // Football General
    footballGeneral: {
        patterns: ['football', 'soccer', 'what is football', 'how to play football', 'football rules', 'football basics', 'tell me about football'],
        responses: [
            'Football (soccer) is the most popular sport in the world! 🌍⚽ Two teams of 11 players each compete to score goals by getting the ball into the opponent\'s net. The match lasts 90 minutes (45 min per half). Key rules: no hands (except goalkeeper in penalty area), fouls result in free kicks or penalties, and offsides prevents goal-hanging.',
            'The beautiful game! Football is played between two teams of 11 players aiming to score more goals than their opponents. The ball is controlled with feet, head, chest, or thighs. It\'s governed by FIFA (Fédération Internationale de Football Association) and played globally at all levels from kids to professionals.'
        ]
    },

    // Goalkeeping Position
    goalkeepingPosition: {
        patterns: ['goalkeeper', 'goalkeeping', 'gk', 'what is goalkeeper', 'goalkeeper role', 'keeper position', 'about goalkeeping'],
        responses: [
            'The goalkeeper is the most important defender! 🥅 They\'re the only player allowed to use their hands within the penalty area. Key responsibilities: catching shots, distribution, organizing defense, coming off the line for crosses, and being a leader on the field. Great goalkeepers like Neuer and Van der Sar changed how the position is played!',
            'Goalkeeping is a specialized position requiring unique skills. The goalkeeper must be agile, brave, and mentally strong. They wear different colored jerseys, have unique positioning, and must constantly communicate with defenders. Modern goalkeepers also need excellent footwork for playing out from the back!'
        ]
    },

    // Goalkeeping Skills
    goalkeepingSkills: {
        patterns: ['goalkeeper skills', 'gk techniques', 'how to be a good goalkeeper', 'goalkeeper abilities', 'what skills does a goalkeeper need', 'essential goalkeeper', 'goalkeeper training'],
        responses: [
            'Essential goalkeeper skills include:\n1. **Shot-stopping** - Catching, punching, or blocking shots with quick reflexes\n2. **Distribution** - Throwing or kicking accurately to start attacks\n3. **Positioning** - Being in the right place to anticipate danger\n4. **Footwork** - Modern GKs need good feet for playing out\n5. **Communication** - Organizing your defense with clear instructions\n6. **Bravery** - Coming out for crosses and making decisive actions\n7. **Mental Strength** - Bouncing back from mistakes\n⚽🥅',
            'Great goalkeepers master several areas: reflexes for quick reactions, handling for secure catches, positioning to cut down shooting angles, footwork for ball-playing, communication with defenders, and mental resilience. They also need agility, timing, and the ability to read the game. Practice makes perfect! 💪'
        ]
    },

    // Goalkeeping Techniques
    goalkeepingTechniques: {
        patterns: ['catching technique', 'punching', 'shot stopping', 'diving', 'goalkeeper technique', 'how to catch', 'goalkeeper hands'],
        responses: [
            '**Key Goalkeeping Techniques:**\n\n**W-Position**: Form a W with hands for low shots, fingers spread, thumbs together\n\n**High Catch**: Two hands on ball with elbows high for crosses\n\n**Punching**: Fist together for defensive clearances when catching is risky\n\n**Diving**: Push off with nearest foot, stay big, and protect your face\n\n**Footwork**: Small steps to stay balanced and adjust position quickly\n\n**Distribution**: Throw for short passes, roll out for accuracy, kick for distance\n\n**Narrowing the Angle**: Come off your line to reduce the shooter\'s options\n⚽',
            'Proper technique is crucial for goalkeepers! The most important is hand positioning with the W-grip for low shots and high hands for crosses. When diving, push from the far foot and try to stay big. For distribution, always be ready with good footwork. Practice these daily!'
        ]
    },

    // Famous Goalkeepers
    famousGoalkeepers: {
        patterns: ['famous goalkeeper', 'best goalkeeper', 'greatest keeper', 'iconic goalkeeper', 'legendary goalkeeper', 'best gk ever', 'gianluigi buffon', 'manuel neuer', 'edwin van der sar'],
        responses: [
            '**Greatest Goalkeepers of All Time:**\n\n🏆 **Gianluigi Buffon** - Italian legend, incredible longevity (1995-2023)\n🏆 **Manuel Neuer** - Revolutionary ball-playing goalkeeper\n🏆 **Edwin van der Sar** - Record appearances, calm and composed\n🏆 **Pelé\'s Era: Antonio Carbajal** - Mexican legend\n🏆 **Peter Schmeichel** - Dominant in the 1990s\n🏆 **Dino Zoff** - Italian classic, very reliable\n\nModern greats: De Gea, Ter Stegen, Courtois, Alisson! Each brought unique skills.',
            'Some of the best goalkeepers ever: Buffon for consistency, Neuer for innovation, Van der Sar for reliability. Currently, top keepers like Ter Stegen, De Gea, Alisson, and Courtois are setting new standards. Each era has its champions!'
        ]
    },

    // Goalkeeper Drills
    goalkeepingDrills: {
        patterns: ['goalkeeper drills', 'gk training', 'goalkeeper exercises', 'how to train goalkeeper', 'keeper drills', 'goalkeeper workout'],
        responses: [
            '**Essential Goalkeeper Drills:**\n\n1. **Shot Stopping** - Rapid-fire shots from different distances\n2. **Footwork Ladder** - Agility and quick feet\n3. **Diving Practice** - Low shots left and right\n4. **Distribution Drills** - Throwing and kicking accuracy\n5. **Cross Catching** - One and two-handed catching\n6. **Punching Practice** - Correct fist position\n7. **Angle Narrowing** - Positioning against 1v1 scenarios\n8. **Reaction Training** - Unexpected ball directions\n9. **Communication** - Directing defenders during drills\n10. **Mental Training** - Pressure situations\n\nTrain consistently for improvement! 💪⚽',
            'Good goalkeeper training includes shot-stopping, footwork exercises, crossing practice, distribution drills, and mental conditioning. A typical training session should combine technical work with game-realistic scenarios. Professional goalkeepers train 5-6 days per week!'
        ]
    },

    // Penalty Saving
    penaltySaving: {
        patterns: ['penalty save', 'saving penalties', 'how to save penalties', 'penalty kick', 'penalty technique'],
        responses: [
            '**Saving Penalties - Key Tips:**\n\n⚽ **Before the Kick:**\n- Stay near your line, don\'t move until the ball is kicked\n- Watch the striker\'s body language and approach\n- Read the shooting side foot\n\n⚽ **During the Kick:**\n- React quickly to the ball direction\n- Make yourself big to block space\n- Use footwork to adjust position\n- Sometimes go down early to make a save\n\n⚽ **Famous Penalty Savers:**\n- Petr Cech (Arsenal legend)\n- Gianluigi Buffon (Juventus master)\n- Distribution penalty psychology matters!\n\nPractice and confidence are essential! 🥅',
            'Penalty saving relies on reaction speed, reading the kicker, and positioning. Some keepers use psychology, moving slightly before the shot to distract. Others stay still and rely on reflexes. Study your opponents\' patterns!'
        ]
    },

    // Football Tactics
    footballTactics: {
        patterns: ['football tactics', 'formation', '4-4-2', '3-5-2', 'football strategy', 'playing style', 'defensive tactics'],
        responses: [
            '**Common Football Formations:**\n\n🎯 **4-4-2** - Classic formation: 4 defenders, 4 midfielders, 2 strikers\n🎯 **4-3-3** - Balanced: 4 defenders, 3 midfielders, 3 attackers\n🎯 **3-5-2** - Wing play: 3 center-backs, 5 midfielders, 2 strikers\n🎯 **5-3-2** - Defensive: 5 defenders, 3 midfielders, 2 attackers\n🎯 **2-3-5** - Attack-minded: minimal defense, maximum attack\n\nTactics evolve based on opponents! Modern football emphasizes pressing, possession, and transitions.⚽',
            'Football tactics vary by formation and team philosophy. Defensive formations protect your goal, while attacking formations take risks. Counter-attacking, possession-based, and pressing strategies are popular today.'
        ]
    },

    // Football History
    footballHistory: {
        patterns: ['football history', 'football origin', 'when was football invented', 'history of soccer', 'football started'],
        responses: [
            '**Football History:**\n\nFootball evolved from ancient games (China, Greece, Rome). Modern football was standardized in England in the 1860s. The first official match was in 1862. Key milestones:\n\n📅 1930 - First FIFA World Cup (Uruguay)\n📅 1955 - European Cup begins\n📅 1960 - Copa America organized\n📅 1960s-70s - Brazil\'s Golden Era (Pelé, etc.)\n📅 1974-1990 - Germany\'s dominance\n📅 1990s-2000s - Premier League boom\n📅 2000s-Present - Global expansion\n\nToday\'s football is faster, more tactical, and worldwide! ⚽',
            'Modern football started in England in the mid-1800s. The first international match was in 1872. Since then, it\'s become the world\'s most popular sport with billions of fans globally!'
        ]
    },

    // Famous Matches
    famousMatches: {
        patterns: ['famous match', 'greatest match', 'iconic match', 'best game ever', '1966', '2014 world cup'],
        responses: [
            '**Historic & Iconic Football Matches:**\n\n🏆 **1950 World Cup Final** - Uruguay vs Brazil (Maracanaço)\n🏆 **1966 World Cup Final** - England vs West Germany\n🏆 **1970 World Cup Final** - Brazil vs Italy (brilliant Brazil!)\n🏆 **1999 Champions League Final** - Manchester United incredible comeback\n🏆 **2005 Istanbul Miracle** - Liverpool vs AC Milan (3-0 to 3-3!)\n🏆 **2014 World Cup Final** - Germany vs Argentina (Götze winner)\n🏆 **2022 World Cup Final** - Argentina vs France (epic shootout!)\n\nEach match has its own magic! ✨⚽',
            'Some of the greatest matches include Uruguay\'s 1950 upset, England\'s 1966 win, Brazil\'s beautiful 1970 football, Liverpool\'s comeback in Istanbul, and Argentina\'s recent World Cup victory!'
        ]
    },

    // How are you
    howAreYou: {
        patterns: ['how are you', 'how are you doing', 'you good', 'how\'s it going'],
        responses: [
            'I\'m doing great, thanks for asking! 😊 I\'m here and ready to help with any football questions or general knowledge. What\'s on your mind?',
            'I\'m functioning perfectly and excited to chat! Whether you want to discuss goalkeeping techniques, football tactics, or anything else, I\'m here for it! ⚽'
        ]
    },

    // Help
    help: {
        patterns: ['help', 'what can you do', 'capabilities', 'what do you know'],
        responses: [
            '**I can help you with:**\n\n⚽ **Football Topics:**\n- Football rules and basics\n- Goalkeeping techniques and training\n- Famous players and teams\n- Football history\n- Tactics and formations\n- Match analysis\n\n💬 **General Q&A:**\n- Jokes and fun facts\n- Time and date\n- General knowledge\n- Any casual conversation\n\nJust ask me anything! 😊',
            'I\'m Young, your AI assistant! I specialize in football and goalkeeping expertise, but I can also help with general questions. Ask me about techniques, famous players, tactics, or just have a casual chat!'
        ]
    },

    // Jokes
    jokes: {
        patterns: ['tell a joke', 'funny', 'make me laugh', 'joke'],
        responses: [
            'Why did the goalkeeper go to the bank? 🏦 Because he wanted to check his balance! 😄',
            'Why don\'t footballers ever go to the beach? 🏖️ Because they\'re afraid of the net! 😂',
            'What do you call a football player who\'s also a chef? ⚽ A guy who likes to make the perfect pass... AND pasta! 🍝😄',
            'Why was the goalkeeper always calm? 😌 Because he knew how to handle pressure! 🎯',
            'How many footballers does it take to change a lightbulb? 💡 Just one, but 10 to stand around and say they could do it better! ⚽😄'
        ]
    },

    // Fun Facts
    funFacts: {
        patterns: ['fun fact', 'did you know', 'interesting fact', 'amazing fact'],
        responses: [
            '**Football Fun Facts:**\n\n• The first rubber soccer ball was made in the 1850s\n• Brazil has won the most World Cups (5 times!)\n• The average soccer ball has 32 panels (classic design)\n• Pelé scored over 1000 goals in his career\n• Messi and Ronaldo rivalry lasted nearly 2 decades!\n• Women\'s football has grown 300% in the last decade\n• A goalkeeper must be lightning-quick - they react in 0.05 seconds!\n⚽✨',
            'Did you know? The FIFA World Cup is watched by over 3 billion people! Football is truly the world\'s game. Also, goalkeepers have the fastest reaction times in sports - sometimes as quick as 0.05 seconds!'
        ]
    },

    // Default response
    default: {
        patterns: [],
        responses: [
            'That\'s an interesting question! I\'m still learning about that. Feel free to ask me about football, goalkeeping, or anything else! ⚽',
            'Hmm, I\'m not sure about that one! But ask me anything about the beautiful game - football tactics, goalkeeping tips, famous players, or general questions! 😊',
            'I\'m not entirely sure about that, but I\'d love to help with football topics or general questions. What else can I help you with? ⚽',
            'Good question! I don\'t have a specific answer for that, but I\'m great at discussing football and goalkeeping. Want to learn about either? 🥅'
        ]
    }
};

// Function to get Young's response
function getYoungResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();

    // Check each category
    for (const [category, data] of Object.entries(youngKnowledge)) {
        if (category === 'default') continue;
        
        for (const pattern of data.patterns) {
            if (message.includes(pattern)) {
                return data.responses[Math.floor(Math.random() * data.responses.length)];
            }
        }
    }

    // Default response if no match
    return youngKnowledge.default.responses[Math.floor(Math.random() * youngKnowledge.default.responses.length)];
}
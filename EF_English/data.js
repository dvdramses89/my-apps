const topics = [
    {
        id: "hotel-checkin",
        title: "Hotel Check-In",
        category: "Travel & Hospitality",
        learning: {
            content: `<h2>Checking In at a Hotel</h2>
            <p><strong>Receptionist:</strong> Good afternoon! Welcome to the Grand Hotel. How can I help you?</p>
            <p><strong>Guest:</strong> I have a reservation under the name John Smith.</p>
            <p><strong>Receptionist:</strong> Let me check... Yes, Mr. Smith. A double room for three nights. May I see your passport and a credit card for incidentals?</p>
            <br>
            <h3>Key Vocabulary</h3>
            <ul>
                <li><strong>Reservation / Booking:</strong> An arrangement to have a room held for your use.</li>
                <li><strong>Incidentals:</strong> Minor additional expenses (mini-bar, room service).</li>
                <li><strong>Deposit:</strong> A sum of money kept in a bank account or given as a pledge.</li>
                <li><strong>Key card:</strong> A plastic card used to open a door in a hotel.</li>
            </ul>`
        },
        tips: {
            content: `<h3>Mnemonics and Check-In Tips</h3>
            <p><strong>R-I-D-K:</strong> Remember to prepare:</p>
            <ul>
                <li><strong>R</strong>eservation number</li>
                <li><strong>I</strong>D or Passport</li>
                <li><strong>D</strong>eposit / Credit Card</li>
                <li><strong>K</strong>eys</li>
            </ul>
            <h4>Mind Map Summary:</h4>
            <div class="mindmap-container">
            <pre class="mermaid">
            graph TD
                A[Hotel Check-In] --> B(Arrival)
                B --> C{Have Reservation?}
                C -->|Yes| D[Show ID/Passport]
                C -->|No| E[Ask for availability]
                D --> F[Give Credit Card]
                F --> G[Get Key Card]
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "I ____ a reservation under the name Smith.", options: ["have", "has", "am"], a: "have" },
                { q: "_____ I see your passport, please?", options: ["Must", "May", "Should"], a: "May" }
            ],
            vocabulary: [
                { q: "Expenses for mini-bar or phone calls are called _____.", options: ["Reservations", "Incidentals", "Deposits"], a: "Incidentals" }
            ]
        },
        flashcards: [
            { front: "Reservation", back: "An arrangement to secure accommodations in advance." },
            { front: "Incidentals", back: "Extra minor expenses like room service or minibar." },
            { front: "Key card", back: "A plastic card used to unlock your hotel room." }
        ],
        roleplay: {
            scenario: "You have arrived at the Grand Hotel. Guest A is checking in. Guest B is the receptionist.",
            roleA: "You are tired after a long flight. You booked a double room with a sea view.",
            roleB: "You are the receptionist. You need ID and a credit card. Unfortunately, there are no sea view rooms left on the lower floors."
        }
    },
    {
        id: "past-continuous",
        title: "Past Continuous",
        category: "Grammar",
        learning: {
            content: `<h2>Past Continuous Tense</h2>
            <p>The past continuous tense expresses action at a particular moment in the past. The action started before that moment but has not finished at that moment.</p>
            <h3>Structure</h3>
            <p><strong>Positive:</strong> Subject + was/were + verb(-ing)</p>
            <p><strong>Negative:</strong> Subject + was/were + not + verb(-ing)</p>
            <p><strong>Question:</strong> Was/Were + subject + verb(-ing)?</p>
            <br>
            <h3>Examples</h3>
            <ul>
                <li>I <strong>was reading</strong> a book at 8 PM last night.</li>
                <li>They <strong>were not sleeping</strong> when the alarm went off.</li>
                <li><strong>Were</strong> you <strong>watching</strong> TV when I called?</li>
            </ul>`
        },
        tips: {
            content: `<h3>Grammar Tips</h3>
            <p>Use the past continuous for <strong>interrupted actions</strong> in the past.</p>
            <p><em>Example:</em> I <strong>was taking</strong> a shower when the phone <strong>rang</strong>.</p>
            <h4>Mind Map Summary:</h4>
            <div class="mindmap-container">
            <pre class="mermaid">
            graph LR
                A[Past Continuous] --> B(Structure)
                A --> C(Usage)
                B --> D[was/were + v-ing]
                C --> E[Interrupted Actions]
                C --> F[Background info]
                C --> G[Parallel actions - while]
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "I _____ TV when she arrived.", options: ["was watching", "watched", "am watching"], a: "was watching" },
                { q: "What _____ you doing at 10 PM?", options: ["was", "were", "are"], a: "were" }
            ],
            vocabulary: []
        },
        flashcards: [
            { front: "Structure of Past Continuous", back: "Subject + was/were + verb(-ing)" },
            { front: "Keyword often used with Past Continuous", back: "While (e.g., While I was cooking...)" },
            { front: "Interrupted action example", back: "I was reading when the lights went out." }
        ],
        roleplay: {
            scenario: "An interrogation context.",
            roleA: "You are a detective asking a suspect about their whereabouts at 9 PM last night.",
            roleB: "You are the suspect. You were doing very mundane tasks at exactly 9 PM, but keep getting confused."
        }
    },
    {
        id: "making-suggestions",
        title: "Making Suggestions",
        category: "Communication",
        learning: {
            content: `<h2>How to Make Suggestions in English</h2>
            <p>Here are common structures for suggesting an activity or idea:</p>
            <ul>
                <li><strong>Let's + base verb:</strong> Let's go to the cinema.</li>
                <li><strong>How about / What about + V-ing:</strong> How about going to the cinema?</li>
                <li><strong>Why don't we + base verb:</strong> Why don't we go to the cinema?</li>
                <li><strong>Could / Should:</strong> We could go to the cinema.</li>
            </ul>`
        },
        tips: {
            content: `<h3>Response Tips</h3>
            <p><strong>Accepting:</strong></p>
            <ul>
                <li>That sounds great!</li>
                <li>I'd love to.</li>
                <li>Good idea.</li>
            </ul>
            <p><strong>Declining:</strong></p>
            <ul>
                <li>I'm not sure about that.</li>
                <li>I'd rather not.</li>
                <li>Maybe another time.</li>
            </ul>`
        },
        exercises: {
            grammar: [
                { q: "How about _____ pizza tonight?", options: ["order", "ordering", "to order"], a: "ordering" },
                { q: "Why don't we _____ to the beach?", options: ["going", "go", "are going"], a: "go" }
            ],
            vocabulary: []
        },
        flashcards: [
            { front: "How about...", back: "+ Verb(-ing). Example: How about playing tennis?" },
            { front: "Let's...", back: "+ Base Verb. Example: Let's study English." },
            { front: "Accepting a suggestion", back: "'That sounds great!', 'Let's do it!'" }
        ],
        roleplay: {
            scenario: "Friday evening plans.",
            roleA: "You want to do something active outdoors.",
            roleB: "You just want to stay inside, order food, and watch a movie. Try to reach a compromise."
        }
    }
];

// Provide function to get topics
function getTopics() {
    return topics;
}

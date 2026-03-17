const topics = [
    {
        id: "hotel-checkin-ii",
        title: "Hotel Check-In (II)",
        category: "Travel & Hospitality",
        learning: {
            content: `<h2>El Proceso de Check-In</h2>
            <p>Al llegar al hotel, el primer punto de contacto es el <b>front desk</b> o recepción. El recepcionista suele comenzar con un saludo formal como "Welcome to our hotel" seguido de la pregunta clave: "Do you have a reservation?". Si ya tienes una habitación reservada, deberás indicar el nombre asociado: "I have a reservation under the name [Your Name]".</p>
            <h3>Diálogo Típico</h3>
            <p><b>Receptionist:</b> Good afternoon. May I have your ID and credit card, please?<br>
            <b>Guest:</b> Sure, here is my passport and my credit card.<br>
            <b>Receptionist:</b> Thank you. Could you please fill out this registration form?<br>
            <b>Guest:</b> Of course. Is breakfast included?<br>
            <b>Receptionist:</b> Yes, breakfast is served from 7:00 a.m. to 10:00 a.m. Your room number is 501, on the fifth floor.</p>
            <ul>
                <li><b>Reservation:</b> Reserva hecha con antelación.</li>
                <li><b>Key card:</b> Tarjeta magnética que sirve como llave.</li>
                <li><b>ID / Passport:</b> Identificación necesaria para el registro.</li>
                <li><b>Voucher:</b> Comprobante de pago o reserva.</li>
            </ul>`
        },
        tips: {
            content: `<h3>Tips y Mnemotecnia</h3>
            <p>Para sonar más educado y profesional, utiliza el verbo modal <b>Could</b> al hacer peticiones: "Could I have a room with a view?". Para recordar la diferencia entre el ascensor en distintos países, recuerda: en el Reino Unido se usa <b>Lift</b> (porque te "levanta") y en EE. UU. <b>Elevator</b>.</p>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph TD;
                A[Arrival at Hotel] --> B[Front Desk/Reception];
                B --> C{Reservation?};
                C -- Yes --> D[Show ID & Credit Card];
                C -- No --> E[Ask for Availability];
                D --> F[Fill Registration Form];
                E --> F;
                F --> G[Receive Key Card];
                G --> H[Check Amenities];
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "Complete the request: 'Could you please ___ out this registration form?'", options: ["fill", "fills", "filling"], a: "fill" },
                { q: "The guest says: 'I have a reservation ___ the name Matt Davidson.'", options: ["at", "under", "by"], a: "under" }
            ],
            vocabulary: [
                { q: "The person who helps you at the reception desk is the ___.", options: ["Bellboy", "Receptionist", "Maid"], a: "Receptionist" }
            ]
        },
        flashcards: [
            { front: "Front desk", back: "El mostrador de recepción en un hotel" },
            { front: "Voucher", back: "Un recibo o comprobante que prueba que la reserva está pagada" },
            { front: "Amenities", back: "Servicios o comodidades del hotel como el Wi-Fi, gimnasio o piscina" },
            { front: "Key card", back: "Tarjeta que sirve como llave para la habitación y el gimnasio" }
        ],
        roleplay: {
            scenario: "A guest arrives at a busy hotel during a holiday weekend without a reservation.",
            roleA: "Receptionist: Inform the guest that the hotel is almost full. Ask for the number of nights and offer a room overlooking the gardens instead of the requested ocean view.",
            roleB: "Guest: You need a room for two nights. Ask if breakfast and Wi-Fi are included in the price."
        }
    },
    {
        id: "hotel-checkout-ii",
        title: "Hotel Check-Out (II) - Settle the Bill",
        category: "Travel & Hospitality",
        learning: {
            content: `<h2>El Proceso de Salida (Check-Out)</h2>
            <p>Al momento de dejar el hotel, el objetivo principal es repasar y pagar los costos de tu estadía. Frases clave para utilizar incluyen: "I would like to check out, please" y "Could I have an itemized bill?".</p>
            <h3>Conceptos a Revisar</h3>
            <ul>
                <li><b>Settle the bill:</b> Liquidar o pagar la factura final.</li>
                <li><b>Itemized bill:</b> Factura detallada con cada consumo por separado.</li>
                <li><b>Incidentals:</b> Gastos adicionales a la reserva original (ej. minibar o llamadas).</li>
                <li><b>Surcharge:</b> Recargos (por ejemplo, por check-out tardío).</li>
            </ul>
            <p>Si el empleado requiere saber sobre consumos recientes: "Did you take anything from the minibar last night?".</p>`
        },
        tips: {
            content: `<h3>Mnemotecnia y Consejos</h3>
            <p><b>Phrasal Verb Regla de Oro:</b> "Check out" es un verbo frasal separable. Si usas un pronombre para la persona, debe ir en el medio: "I can check <b>him</b> out" (Correcto) vs "I can check out him" (Incorrecto).</p>
            <p>Expresión idiomática: <b>"On the company's dime"</b> significa que tu empresa está pagando por todos tus gastos del hotel.</p>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph TD;
                A[Guest approaches Front Desk] --> B["I'd like to check out"];
                B --> C[Receptionist asks for Room/Keys];
                C --> D[Review Itemized Bill];
                D --> E{Did you use the Minibar?};
                E -- Yes --> F[Add Incidentals];
                E -- No --> G[Confirm Total];
                F --> G;
                G --> H[Settle the Bill / Pay];
                H --> I[Safe trip home!];
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "____ you take anything from the minibar last night?", options: ["Do", "Did", "Have"], a: "Did" },
                { q: "You are checking out of room 405, ____ ____?", options: ["aren't you", "don't you", "are you"], a: "aren't you" }
            ],
            vocabulary: [
                { q: "Your three-night ____ comes to $400. I can charge it to the card on file.", options: ["total", "receipt", "file"], a: "total" },
                { q: "If a guest wants to leave at 2:00 PM instead of 11:00 AM, they are requesting a:", options: ["Late check-in", "Late check-out", "Early departure"], a: "Late check-out" }
            ]
        },
        flashcards: [
            { front: "Minibar", back: "A small fridge in the guest room containing drinks and snacks charged to the final bill." },
            { front: "Incidentals", back: "Extra costs beyond the room rate, such as phone calls, room service, or laundry." },
            { front: "On the company's dime", back: "Idiom meaning the employer is paying for the expenses." },
            { front: "Safe trip home", back: "Polite farewell used by receptionists when a guest departs." }
        ],
        roleplay: {
            scenario: "A guest is at the front desk ready to depart. The receptionist processes the payment and handles additional charges from the minibar.",
            roleA: "Front Desk Clerk: Ask for the room keys, inquire about last night's minibar usage, and process the total bill.",
            roleB: "Departing Guest: You took two bottles of water from the minibar. Ask for a late check-out for next time."
        }
    },
    {
        id: "flight-talk-ii",
        title: "Taking about Flight (II)",
        category: "Air Travel",
        learning: {
            content: `<h2>Interacciones en el Aeropuerto y Vuelo</h2>
            <p>En el aeropuerto es vital dominar el uso de verbos modales de cortesía. El personal te dirá frases formales como: <b>"May I see your identification and boarding pass, please?"</b>. Y tú, como pasajero, puedes decir: <b>"Could I have a pair of headphones?"</b></p>
            <h3>Tiempos Verbales Comunes</h3>
            <ul>
                <li><i>Presente Continuo:</i> Para acciones en el momento. "We <b>are inviting</b> passengers to board." o "I <b>am looking</b> for the duty-free shop."</li>
                <li><i>Presente Simple:</i> Para horarios de vuelos reales. "The flight to Los Angeles <b>leaves</b> from Gate 15A."</li>
            </ul>
            <p>Preguntas frecuentes durante el proceso: "Are you checking any bags today?" o "Do I need to pick up my luggage in Chicago (stopover)?".</p>`
        },
        tips: {
            content: `<h3>Tips para Pasar Seguridad Sin Problemas</h3>
            <p>Recuerda la regla <b>BLX</b> para el Security Screening:</p>
            <ul>
                <li><b>B</b>in: Pon reloj, monedas y líquidos allí.</li>
                <li><b>L</b>iquids: Solo en el equipaje de mano si cumplen la regla de los 100ml.</li>
                <li><b>X</b>-Ray: Las computadoras "Laptops" van por separado.</li>
            </ul>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph LR;
                A[Arrive at Airport] --> B[Check-In Desk];
                B --> C[Checking Bags?];
                C -- Yes --> D[Luggage on Scale / Conveyor];
                C -- No --> E[Security Screening];
                D --> E;
                E --> F{Metal Detector / X-Ray};
                F --> G[Empty pockets into Bin];
                G --> H[Go to Gate];
                H --> I[Boarding Pass Check];
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "____ I see your identification and boarding pass, please?", options: ["May", "Do", "Am"], a: "May" },
                { q: "The flight to Los Angeles ____ from Gate 15A.", options: ["leaves", "is leaving", "leave"], a: "leaves" },
                { q: "We ____ now inviting passengers with small children to board.", options: ["are", "do", "will"], a: "are" }
            ],
            vocabulary: [
                { q: "Our flight is ____ by two hours due to a technical issue.", options: ["delayed", "cancelled", "boarding"], a: "delayed" },
                { q: "I have a ____ in Amsterdam before my final flight to Rome.", options: ["stopover", "gate change", "baggage claim"], a: "stopover" },
                { q: "The moving belt where you lay bags flat for security screening is a:", options: ["Scale", "Conveyor Belt", "Metal Detector"], a: "Conveyor Belt" }
            ]
        },
        flashcards: [
            { front: "Boarding Pass", back: "A document that shows your airline and flight number, required to enter the plane." },
            { front: "Checked Baggage", back: "Large suitcases handed over at the check-in desk to go in the cargo hold." },
            { front: "Flight Attendant", back: "Staff who work inside the airplane serving food and ensuring safety." },
            { front: "Stopover / Layover", back: "A short stay in a different city before reaching the final destination." }
        ],
        roleplay: {
            scenario: "Security Screening and Boarding.",
            roleA: "Airport Assistant / Officer: Ask the passenger to put their shoes and belt in the bin. Remind them that laptops must be placed separately.",
            roleB: "Passenger: Ask where the nearest duty-free shop is after security, and ask what gate your flight leaves from."
        }
    },
    {
        id: "holiday-season-ii",
        title: "Holiday Season: Wishes & Traditions (II)",
        category: "Culture & Social",
        learning: {
            content: `<h2>Holiday Traditions and Resolutions</h2>
            <p>New Year's resolutions are a quintessential part of the holiday experience where people pen down aspirations for the coming year. When discussing plans, you can use the structure <b>going to</b> for intentions: "I am going to exercise more".</p>
            <h3>Gift Exchanges</h3>
            <ul>
                <li><b>Secret Santa:</b> You shouldn't reveal your identity until the very end.</li>
                <li><b>White Elephant:</b> A game characterized by 'stealing' gifts, focusing on entertainment and humor rather than sincerity.</li>
            </ul>
            <h3>The Passive Voice in History</h3>
            <p>We often use the passive voice to talk about origins: "'Auld Lang Syne' <b>was written</b> down by Robert Burns in 1788." or "Boxing Day <b>was made</b> a Bank Holiday in 1871."</p>`
        },
        tips: {
            content: `<h3>Holiday Idioms & Slang in the UK</h3>
            <p>If you are in London, you are more likely to hear <b>"Happy Christmas"</b> instead of "Merry Christmas". A neutral greeting to be inclusive is <b>"Happy Holidays"</b>.</p>
            <p>Idioms: <i>"To feel stuffed"</i> means to be very full after eating a heavy meal. <i>"To ring in the new year"</i> means to celebrate the end of the year.</p>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph TD;
                A[Boxing Day] --> B(Hit the Sales);
                A --> C(Eat Leftovers);
                C --> D(Turkey Sandwiches);
                A --> E(Watch Sports);
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "In Secret Santa, you ________ reveal your identity until the very end.", options: ["shouldn't", "can", "mustn't"], a: "shouldn't" },
                { q: "My New Year's resolution is: I ________ try to learn a new language.", options: ["am going to", "will to", "going to"], a: "am going to" },
                { q: "Boxing Day ________ a Bank Holiday by the Victorians in 1871.", options: ["made", "was made", "is made"], a: "was made" }
            ],
            vocabulary: [
                { q: "In the UK, December 26th is a ________.", options: ["leftovers", "bank holiday", "sales"], a: "bank holiday" },
                { q: "The informal shortened form of 'presents' often used in North America is '________'.", options: ["Happy", "prezzies", "Happy Holidays"], a: "prezzies" },
                { q: "Someone who is very full after eating a heavy meal 'feels ________'.", options: ["stuffed", "holidayed", "boxed"], a: "stuffed" }
            ]
        },
        flashcards: [
            { front: "Auld Lang Syne", back: "A phrase from the Scots language meaning 'old times'. Traditionally sung on New Year's Eve." },
            { front: "Boxing Day", back: "Celebrated on December 26th, this UK bank holiday originated from the tradition of giving 'Christmas boxes'." },
            { front: "White Elephant", back: "A gift exchange game characterized by 'stealing' gifts, focusing on entertainment and humor." },
            { front: "Mince Pies", back: "A traditional British festive treat consisting of delicate pastry encasing a mixture of fruits and spices." }
        ],
        roleplay: {
            scenario: "Two colleagues, Sarah and Mark, are discussing their upcoming holiday plans and traditions in the office breakroom.",
            roleA: "Colleague 1: Talk about your New Year's resolutions and ask if the other person wants to join the Secret Santa.",
            roleB: "Colleague 2: Say you are going to eat a lot of leftovers and play a White Elephant game with your family."
        }
    },
    {
        id: "describing-relationships",
        title: "Describing Relationships",
        category: "Social & Personal",
        learning: {
            content: `<h2>Hablando de nuestras relaciones</h2>
            <p>Para describir nuestra relación con otras personas solemos utilizar <i>Phrasal Verbs</i> y adjetivos específicos.</p>
            <h3>Phrasal Verbs Clave</h3>
            <ul>
                <li><b>Get on / Get along:</b> Tener una buena y amistosa relación. Ej: "I usually <b>get on</b> well with my colleagues."</li>
                <li><b>Fall out:</b> Tener una discusión o pelea que arruina la relación.</li>
                <li><b>Make up:</b> Perdonarse y volver a ser amigos. Ej: "We often fall out, but we always <b>make up</b> quickly."</li>
            </ul>
            <p>Otros conceptos: <i>"To have a crush on someone"</i> significa sentirse atraído románticamente, mientras que <i>"To be at odds"</i> significa estar en desacuerdo.</p>`
        },
        tips: {
            content: `<h3>Idioms about People</h3>
            <p>Utiliza expresiones nativas (Idioms) para sonar más avanzado:</p>
            <ul>
                <li><i>"Two peas in a pod"</i>: Dos personas muy similares.</li>
                <li><i>"See eye to eye"</i>: Estar de acuerdo o tener la misma opinión.</li>
                <li><i>"A chip off the old block"</i>: Alguien muy similar en carácter a uno de sus padres.</li>
            </ul>
            <p>Adjetivos Útiles: <b>Close-knit</b> (una familia muy conectada y unida).</p>`
        },
        exercises: {
            grammar: [
                { q: "I usually ______ well with my colleagues, which makes work much more enjoyable.", options: ["fall out", "get on", "make up"], a: "get on" },
                { q: "I think my cousin might ______ a crush on our new neighbor.", options: ["be", "have", "do"], a: "have" },
                { q: "Is your sister still interested ______ that guy she met through a friend?", options: ["in", "on", "at"], a: "in" }
            ],
            vocabulary: [
                { q: "A family where everyone supports each other and stays connected is ______.", options: ["Dysfunctional", "Close-knit", "Distant"], a: "Close-knit" },
                { q: "He was devastated when he found out his partner was cheating ______ him.", options: ["to", "with", "on"], a: "on" },
                { q: "Two people who are very similar in appearance or behavior are 'Two ______ in a pod'.", options: ["beans", "apples", "peas"], a: "peas" }
            ]
        },
        flashcards: [
            { front: "To take after", back: "To have a similar appearance or personality to an older family member due to DNA." },
            { front: "Significant other", back: "A general term for a person you are in a serious romantic relationship with." },
            { front: "To see eye to eye", back: "To agree with someone or enjoy harmonious conversations together." },
            { front: "Sibling rivalry", back: "The feeling of competitiveness or frequent arguing that often exists between brothers and sisters." }
        ],
        roleplay: {
            scenario: "Two friends talking about their colleagues and family members.",
            roleA: "Friend 1: Tell your friend that you fell out with a coworker because you didn't see eye to eye on a project.",
            roleB: "Friend 2: Give advice and explain how you and your sibling used to have a strong sibling rivalry but then made up."
        }
    },
    {
        id: "describing-people",
        title: "Describing People",
        category: "Social & Personal",
        learning: {
            content: `<h2>Describiendo Físico y Personalidad</h2>
            <p>Al describir a personas, usamos <b>'to be'</b> para estatura, contextura y edad ("He <b>is</b> very tall and slim"), y usamos <b>'have / has'</b> para el cabello, ojos y rasgos ("He <b>has</b> a small mustache").</p>
            <h3>Orden de Adjetivos</h3>
            <p>Según la regla <i>OSASCOMP</i>, la opinión antecede a la edad y tamaño.</p>
            <p>En el caso del cabello el orden es estricto: <b>Longitud > Forma > Color</b>. Ej: "Long curly brown hair" (Nunca "curly brown long").</p>`
        },
        tips: {
            content: `<h3>Politeness (Cortesía) e Idioms</h3>
            <p>En inglés hay que ser cuidadosos y usar un lenguaje indirecto. En lugar de decir que alguien es 'fat' (gordo), es mucho más cortés decir que es <b>'overweight'</b>.</p>
            <p><b>Idiom Key:</b> A <i>"social butterfly"</i> is an extroverted person who loves to socialize.</p>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph LR;
                A[Describing a Person] --> B(Physical);
                A --> C(Personality);
                B --> D(To be: Tall, Overweight, Middle-aged);
                B --> E(To have: Blue eyes, Curly hair);
                C --> F(Ambitious);
                C --> G(Reliable);
                C --> H(Easy-going);
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "My new friend has _______ hair.", options: ["long curly brown", "brown long curly", "curly brown long"], a: "long curly brown" },
                { q: "My cousin (1) ____ very tall and slim. He (2) ____ a small mustache.", options: ["is / is", "has / is", "is / has"], a: "is / has" },
                { q: "Put the words in correct order: Frenchman / young / handsome", options: ["handsome young Frenchman", "young handsome Frenchman", "handsome Frenchman young"], a: "handsome young Frenchman" }
            ],
            vocabulary: [
                { q: "Someone you can trust to do what they are asked to do is ______.", options: ["Ambitious", "Reliable", "Easy-going"], a: "Reliable" },
                { q: "Instead of saying someone is 'fat', it is more polite to say they are _______.", options: ["Overweight", "Skinny", "Bony"], a: "Overweight" },
                { q: "Someone who is very active socially and loves meeting new people is a 'social _______'.", options: ["butterfly", "bee", "lion"], a: "butterfly" }
            ]
        },
        flashcards: [
            { front: "Chiselled features", back: "Attractive and clearly-defined facial features, often compared to a statue." },
            { front: "Middle-aged", back: "A person who is typically in their 40s or 50s; not young but not yet elderly." },
            { front: "Well-built", back: "Having a strong, muscular body; big because of muscle rather than fat." },
            { front: "Open-minded", back: "A person who is willing to listen to and consider new ideas." }
        ],
        roleplay: {
            scenario: "Describing a new person you have just met to your best friend.",
            roleA: "You: Describe the new person accurately using adjective order for their hair, and mention they have 'chiselled features'.",
            roleB: "Friend: Ask if this new person is easy-going or reliable. You are trying to figure out if you'll get along."
        }
    },
    {
        id: "upcoming-events",
        title: "Talking About Upcoming Events",
        category: "Communication",
        learning: {
            content: `<h2>Expresando Eventos y Planes Futuros</h2>
            <p>Usamos diferentes tiempos verbales dependiendo del grado de certeza o de si es un evento programado:</p>
            <ul>
                <li><b>Present Simple:</b> Para eventos de horario fijo o cronogramas (trenes, conciertos). Ej: "The rock concert <b>starts</b> at 8:00 PM tomorrow night."</li>
                <li><b>Present Continuous:</b> Para arreglos personales ya coordinados en el futuro cercano. Ej: "I <b>am meeting</b> my friends at 7:30 PM."</li>
                <li><b>Going to:</b> Para predicciones basadas en la evidencia presente. Ej: "Look at the long line! It <b>is going to be</b> a very crowded gig."</li>
            </ul>`
        },
        tips: {
            content: `<h3>Vocabulario de Entretenimiento</h3>
            <p>Al hablar de eventos, hay palabras clave que debes dominar:</p>
            <ul>
                <li><b>Gig:</b> Término moderno y casual para un concierto (usualmente pop o rock).</li>
                <li><b>Blockbuster:</b> Una película o show que es un éxito rotundo en taquilla.</li>
                <li><b>Gripping:</b> Sinónimo avanzado de emocionante o cautivador (capta tu atención).</li>
            </ul>
            <p>Verbos clave: You <b>book</b> tickets and artists <b>release</b> an album.</p>`
        },
        exercises: {
            grammar: [
                { q: "The rock concert ______ at 8:00 PM tomorrow night according to the ticket.", options: ["is starting", "starts", "will be starting"], a: "starts" },
                { q: "I ______ my friends at the venue entrance at 7:30 PM. (Acuerdo cerrado)", options: ["am meeting", "meet", "will be meet"], a: "am meeting" },
                { q: "Look at the long line! It ______ a very crowded gig.", options: ["will be", "is going to be", "is being"], a: "is going to be" }
            ],
            vocabulary: [
                { q: "A word for a performance or concert of modern music, such as rock or pop is a _________.", options: ["Gig", "Blockbuster", "Performance"], a: "Gig" },
                { q: "I need to ______ the tickets online before the band releases their album.", options: ["book", "read", "sell"], a: "book" },
                { q: "The documentary about the music festival was absolutely ______ (exciting/captivating).", options: ["predictable", "gripping", "boring"], a: "gripping" }
            ]
        },
        flashcards: [
            { front: "Gig", back: "A concert of modern music, typically rock or pop artists." },
            { front: "Present Simple (Future Use)", back: "Used for events that are part of a fixed timetable, regular schedule, or official program." },
            { front: "Present Continuous (Future Use)", back: "Used for future actions and events that are personal arrangements or fixed plans." },
            { front: "Blockbuster", back: "A movie or production that is a complete success and a major box office hit." }
        ],
        roleplay: {
            scenario: "Conversing about a future event or concert you both plan to go to.",
            roleA: "Friend 1: Ask what time the event starts using Present Simple, and say you are meeting another friend there.",
            roleB: "Friend 2: Look at the weather out the window and predict it's going to rain, reminding Friend 1 to bring an umbrella."
        }
    },
    {
        id: "introducing-employee",
        title: "Jobs & Companies: Introducing a New Employee",
        category: "Business & Work",
        learning: {
            content: `<h2>Presentando a Nuevos Empleados</h2>
            <p>Aprende cómo introducir formalmente a alguien al equipo.</p>
            <h3>Fórmulas de Presentación (Present Simple)</h3>
            <p>Usamos "this is" para introducir a alguien en el trabajo: "Jane, <b>this is</b> Tom. He <b>is</b> our new Sales Representative." Para referirse a algo perteneciente a él usamos su posesivo: "<b>His</b> name is Tom".</p>
            <h3>Contexto y Recorrido de la Oficina</h3>
            <ul>
                <li><i>Preposiciones de lugar:</i> "The meeting room is <b>on</b> the second floor, right <b>next to</b> the pantry."</li>
                <li><i>Simple Past para Antecedentes:</i> "Before joining us, Tom <b>worked</b> as a consultant in London."</li>
            </ul>`
        },
        tips: {
            content: `<h3>Business Etiquette y Collocations</h3>
            <p>Sentirse parte del equipo toma tiempo. Usamos el phrasal verb <b>"Settle in"</b> para esto: "We want to help Tom settle in as quickly as possible".</p>
            <p><b>Rank Protocol:</b> La regla de etiqueta es siempre presentar la persona de menor rango a la de mayor rango. Por ejemplo, siempre presentas el nuevo empleado al CEO (no al revés).</p>
            <p>Frase estrella de colaboración: <b>"I am looking forward to working with you"</b>.</p>`
        },
        exercises: {
            grammar: [
                { q: "Jane, this ___ Tom. He ___ our new Sales Representative.", options: ["is / is", "are / is", "is / are"], a: "is / is" },
                { q: "The meeting room is ___ the second floor, right ___ the pantry.", options: ["on / next to", "in / between", "at / across"], a: "on / next to" },
                { q: "Before joining us, Tom ___ as a consultant in London.", options: ["worked", "works", "working"], a: "worked" }
            ],
            vocabulary: [
                { q: "We want to help Tom ___ as quickly as possible.", options: ["settle in", "call off", "hand in"], a: "settle in" },
                { q: "I am ___ working with you on the new project.", options: ["looking forward to", "waiting for", "hoping for"], a: "looking forward to" },
                { q: "A small room in the office with food, drinks, or coffee is called the ___.", options: ["Colleague", "Pantry", "Meeting room"], a: "Pantry" }
            ]
        },
        flashcards: [
            { front: "Settle in", back: "To start feeling comfortable in a new place or job." },
            { front: "Looking forward to", back: "Feeling excited or eager about something that is going to happen." },
            { front: "Icebreaker", back: "A question or activity used to help people relax and understand each other better when they first meet." },
            { front: "Rank Protocol", back: "The rule of introducing a lower-ranking person to a higher-ranking person." }
        ],
        roleplay: {
            scenario: "You are a Manager presenting a new hire to the senior team and showing them the office facilities.",
            roleA: "Manager: Introduce the new employee, explain briefly what they did in the past, and point out where the pantry is.",
            roleB: "New Employee: Be polite, say you are looking forward to working with everyone, and ask a question about the meeting room schedule."
        }
    },
    {
        id: "describing-your-job",
        title: "Talking About and Describing Your Job",
        category: "Business & Work",
        learning: {
            content: `<h2>Describing Your Job</h2>
            <p>Usamos preposiciones específicas para hablar del trabajo:</p>
            <ul>
                <li><i>for</i>: "I work <b>for</b> a large multinational corporation."</li>
                <li><i>in</i>: "She works <b>in</b> the human resources department."</li>
                <li><i>with</i>: "He works <b>with</b> special-needs children."</li>
            </ul>
            <h3>Gerundios para Responsabilidades</h3>
            <p>Después de preposiciones como 'for' o 'of', usamos el verbo con -ing: "I'm responsible for <b>updating</b> the database", o "I'm in charge of <b>interviewing</b> candidates".</p>`
        },
        tips: {
            content: `<h3>Vocabulario Profesional</h3>
            <p>Adjetivos clave: <b>Rewarding</b> (gratificante), <b>Demanding</b> (exigente), <b>Repetitive</b> (repetitivo).</p>
            <p>Verbos de acción: You <i>manage</i> relationships, <i>handle</i> transactions, and <i>prepare</i> reports.</p>
            <p>Idioms: "To learn the ropes" (aprender cómo funciona algo cuando eres nuevo), "To go the extra mile" (hacer un esfuerzo adicional).</p>`
        },
        exercises: {
            grammar: [
                { q: "I'm responsible for ___ (update) the company's internal database.", options: ["update", "updating", "updated"], a: "updating" },
                { q: "I work ___ a large multinational corporation based in London.", options: ["for", "at", "in"], a: "for" },
                { q: "My manager ___ the entire production process.", options: ["oversee", "oversees", "overseeing"], a: "oversees" }
            ],
            vocabulary: [
                { q: "A job that is satisfying and makes you feel good is ___.", options: ["Rewarding", "Demanding", "Repetitive"], a: "Rewarding" },
                { q: "I ___ client relationships and coordinate advertising campaigns.", options: ["manage", "handle", "prepare"], a: "manage" },
                { q: "A person in charge of a company's money and accounts: ___.", options: ["Graphic Designer", "Accountant", "Receptionist"], a: "Accountant" }
            ]
        },
        flashcards: [
            { front: "To learn the ropes", back: "To learn how a particular job or task is done, especially when you are new." },
            { front: "Ballpark figure", back: "An approximate estimation or an educated guess within reasonable limits." },
            { front: "To go the extra mile", back: "To make an additional effort to achieve something beyond what is strictly required." },
            { front: "Climb the career ladder", back: "To advance your career to higher levels of salary, responsibility, or authority." }
        ],
        roleplay: {
            scenario: "Friends discussing their current professional roles.",
            roleA: "Friend 1: You are a project manager. Explain that your job is demanding but rewarding, and you oversee schedules.",
            roleB: "Friend 2: You are a marketing assistant. Mention that you are responsible for creating content and you often go the extra mile."
        }
    },
    {
        id: "weather-seasons-activities",
        title: "Weather & Seasons: Suggesting an Activity",
        category: "Social & Personal",
        learning: {
            content: `<h2>Sugiriendo Actividades según el Clima</h2>
            <p>¿Cómo proponer planes formales o informales basados en el clima?</p>
            <ul>
                <li><b>How about / What about + V-ing:</b> "It's sunny! <i>How about</i> <b>going</b> for a picnic?" (Usamos gerundio después de la preposición).</li>
                <li><b>Let's / Why don't we + Infinitivo:</b> "<i>Why don't we</i> <b>stay</b> in and watch a movie?" (Usamos el verbo en su forma base).</li>
            </ul>`
        },
        tips: {
            content: `<h3>Vocabulario y Expresiones del Clima</h3>
            <p>Usamos "Pleasant" para un clima agradable, y "Freezing" para excesivo frío.</p>
            <p><b>Idioms:</b> Si te sientes un poco enfermo dices "I'm feeling a bit <b>under the weather</b>". Para posponer un plan por mal clima usamos "To take a <b>rain check</b>". Si estás de acuerdo con un plan exclamas "I'm <b>up for it</b>".</p>`
        },
        exercises: {
            grammar: [
                { q: "It's a beautiful sunny day! ________ going for a picnic by the lake?", options: ["How about", "Let's", "Shall we"], a: "How about" },
                { q: "The forecast says it will be chilly. Why don't we ________ in and watch a movie?", options: ["stating", "stay", "to stay"], a: "stay" },
                { q: "Let's ________ to the beach!", options: ["go", "going", "goes"], a: "go" }
            ],
            vocabulary: [
                { q: "It's 35 degrees outside! It's too ________ to go for a run in the park.", options: ["pleasant", "hot", "freezing"], a: "hot" },
                { q: "I'm sorry, I can't go hiking today. I'm feeling a bit ________ (unwell).", options: ["under the weather", "raining cats and dogs", "cleared up"], a: "under the weather" },
                { q: "A good activity when it is Freezing or Snowy:", options: ["Go for a picnic", "Stay in and play cards", "Go to the beach"], a: "Stay in and play cards" }
            ]
        },
        flashcards: [
            { front: "Pleasant", back: "Enjoyable, nice, or giving a sense of comfort. Often used to describe sunny and cool weather." },
            { front: "To take a rain check", back: "An idiom meaning to postpone a plan or activity to a later date." },
            { front: "To clear up", back: "When the sky starts to become bright or the clouds disappear after a storm." },
            { front: "I'm up for it", back: "A colloquial expression used to say that you agree with a suggestion and want to do it." }
        ],
        roleplay: {
            scenario: "Colleagues planning an outdoor activity based on the weather.",
            roleA: "Colleague 1: Suggest going hiking since the weather is pleasant. Use 'How about'.",
            roleB: "Colleague 2: Reject politely saying you are 'under the weather' and suggest taking a 'rain check'."
        }
    },
    {
        id: "past-continuous-grammar",
        title: "Past Continuous",
        category: "Grammar",
        learning: {
            content: `<h2>Past Continuous: Acciones en Progreso</h2>
            <p>El Pasado Continuo se forma con: <b>was/were + verbo-ing</b>.</p>
            <p>Lo usamos para:</p>
            <ul>
                <li>Acciones en progreso en un momento específico del pasado: "What <b>were</b> you <b>doing</b> at 8 PM yesterday?"</li>
                <li>Acciones largas interrumpidas por una corta (Past Simple): "I <b>was watching</b> TV when the phone <b>rang</b>."</li>
                <li>Acciones paralelas simultáneas: "I <b>was cooking</b> while he <b>was sleeping</b>."</li>
            </ul>
            <p><i>Nota:</i> Verbos de estado (know, want, like) no se usan en continuo. Decimos "I knew" (nunca "I was knowing").</p>`
        },
        tips: {
            content: `<h3>When vs. While</h3>
            <p>Regla general para conectar ideas:</p>
            <ul>
                <li><b>When:</b> Generalmente introduce la acción corta en <i>Past Simple</i> que interrumpe. (When the phone rang).</li>
                <li><b>While:</b> Introduce la acción larga en <i>Past Continuous</i>. (While I was reading).</li>
            </ul>
            <p>Términos Policiales: <i>Alibi</i> (coartada, prueba de dónde estabas), <i>Suspect</i> (sospechoso).</p>`
        },
        exercises: {
            grammar: [
                { q: "What ____ you ____ (do) at 8 PM yesterday when the crime occurred?", options: ["were / doing", "was / doing", "did / do"], a: "were / doing" },
                { q: "I ____ (watch) TV when the phone ____ (ring).", options: ["was watching / rang", "watched / was ringing", "was watching / was ringing"], a: "was watching / rang" },
                { q: "Identify the mistake: 'At that moment, I was knowing that I was innocent.'", options: ["No error", "Change 'was knowing' to 'knew'", "Change 'was knowing' to 'am knowing'"], a: "Change 'was knowing' to 'knew'" }
            ],
            vocabulary: [
                { q: "Do you have an ____ to prove where you were last night?", options: ["alibi", "excuse", "evidence"], a: "alibi" },
                { q: "We are ____ (investigating) your whereabouts during the robbery.", options: ["investigating", "searching", "asking"], a: "investigating" },
                { q: "A person the police believe committed the crime is the:", options: ["Witness", "Suspect", "Officer"], a: "Suspect" }
            ]
        },
        flashcards: [
            { front: "Past Continuous Formula", back: "Subject + was/were + verb-ing (Ej: I was eating)." },
            { front: "When vs. While", back: "Generally, 'When' introduces Past Simple (interruption) and 'While' introduces Past Continuous (long action)." },
            { front: "Stative Verbs", back: "Verbs like like, want, know and believe are NOT usually used in Past Continuous. Use Past Simple instead." },
            { front: "Parallel Actions", back: "Use Past Continuous for two simultaneous actions (Ej: I was cooking while he was sleeping)." }
        ],
        roleplay: {
            scenario: "Un detective interrogando a un sospechoso sobre su coartada de ayer a las 8:00 PM.",
            roleA: "Detective: Ask what the suspect was doing at 8 PM yesterday and if they have an alibi.",
            roleB: "Suspect: Say you were having dinner with your family while it was raining outside."
        }
    },
    {
        id: "present-continuous-grammar",
        title: "Present Continuous",
        category: "Grammar",
        learning: {
            content: `<h2>Present Continuous</h2>
            <p>Usamos am/is/are + verbo terminado en -ing para:</p>
            <ul>
                <li><b>Acciones en el momento de hablar:</b> "Please be quiet. I <b>am trying</b> to work."</li>
                <li><b>Situaciones Temporales:</b> "I <b>am living</b> with friends until I find a place." (En contraste, el Presente Simple es para cosas permanentes: "I live in London").</li>
            </ul>
            <h3>Reglas de Ortografía (-ing)</h3>
            <p>Si termina en 'e' (write), se elimina la 'e' -> writing. Si termina en consonante-vocal-consonante (run), se duplica la última -> running. Si termina en 'ie' (lie), cambia a 'y' -> lying.</p>`
        },
        tips: {
            content: `<h3>Usos Avanzados</h3>
            <p>Podemos usar el Present Continuous para quejas o hábitos molestos usando <b>'always'</b>: "You are always losing your keys!".</p>
            <p>También se usa para <b>Planes Futuros / Arreglos Confirmados:</b> "I'm resitting my French exam on Tuesday."</p>
            <p>Para preguntar se invierte el orden: "<b>Are</b> the children <b>doing</b> their homework?".</p>`
        },
        exercises: {
            grammar: [
                { q: "Please be quiet. I _______ (try) to work.", options: ["try", "am trying", "trying"], a: "am trying" },
                { q: "Which sentence describes a temporary situation?", options: ["I live in London.", "I'm living with friends until I find a place.", "Water boils at 100 degrees."], a: "I'm living with friends until I find a place." },
                { q: "Change to a question: 'The children are doing their homework.'", options: ["Do the children are their homework?", "Are the children doing their homework?", "The children are doing their homework?"], a: "Are the children doing their homework?" }
            ],
            vocabulary: [
                { q: "Correct spelling for 'lie' in continuous form:", options: ["lieing", "lying", "lyeing"], a: "lying" },
                { q: "It is very noisy here. Some friends of mine _______ their own house next door.", options: ["are building", "build", "are buildinging"], a: "are building" },
                { q: "Which verb is NOT normally used in continuous form?", options: ["Work", "Wait", "Know"], a: "Know" }
            ]
        },
        flashcards: [
            { front: "Present Continuous Formation", back: "Present tense of 'be' (am/is/are) + present participle (-ing form)." },
            { front: "Actions at the moment", back: "Used to describe something taking place at the exact moment of speech. (e.g. The phone is ringing)." },
            { front: "Future Arrangements", back: "Used to talk about events planned for the future, often with a time indicator." },
            { front: "Always + -ing", back: "Expresses annoyance or emphasizes a habit: 'You're always losing your keys!'." }
        ],
        roleplay: {
            scenario: "Phone call describing current surroundings.",
            roleA: "Friend 1: Call and ask what the other person is doing right now.",
            roleB: "Friend 2: Describe that you are looking out the window while a construction team is building a house."
        }
    },
    {
        id: "irregular-verbs-grammar",
        title: "Irregular Verbs",
        category: "Grammar",
        learning: {
            content: `<h2>Dominando los Verbos Irregulares</h2>
            <p>Los verbos irregulares no siguen la regla de añadir "-ed" para el Pasado Simple o Participio. Hay que memorizarlos por patrones:</p>
            <ul>
                <li><i>Patrón i-a-u:</i> swim - swam - swum / sing - sang - sung</li>
                <li><i>Patrón ought/aught:</i> bring - brought / teach - taught</li>
            </ul>
            <h3>Estructura Narrativa</h3>
            <p>Al contar anécdotas, el Pasado Simple relata la secuencialidad: "We <b>found</b> an old map. We <b>read</b> it and <b>began</b> to look for treasure."</p>
            <p><i>Cuidado:</i> "Read" se escribe igual en presente y pasado, pero en pasado se pronuncia como el color rojo ("red").</p>`
        },
        tips: {
            content: `<h3>Categorización de Irregulares</h3>
            <p>Mnemotecnia visual: Agrupa los verbos que nunca cambian. Ej: <b>Cut - cut - cut</b>. Haz lo mismo con <b>Put</b> y <b>Set</b>.</p>
            <p>Los participios (Past Participle - 3ra columna) se usan con el verbo "Haber" (have/has/had) para tiempos perfectos: "By the time we arrived, the show had already <b>begun</b>."</p>`
        },
        exercises: {
            grammar: [
                { q: "Last summer, my friend and I ___ (go) to a hidden beach.", options: ["goed", "went", "gone"], a: "went" },
                { q: "By the time we arrived, the show had already ___.", options: ["began", "begun", "beginned"], a: "begun" },
                { q: "Identify the mistake: 'I buyed a new camera yesterday.'", options: ["Substitute 'buyed' with 'buy'", "Substitute 'buyed' with 'bought'", "Substitute 'yesterday' with 'today'"], a: "Substitute 'buyed' with 'bought'" }
            ],
            vocabulary: [
                { q: "Which verb changes completely in past form? (Not like cut/put)", options: ["Set", "Drink", "Put"], a: "Drink" },
                { q: "Past Simple of teach:", options: ["Teached", "Taught", "Tought"], a: "Taught" },
                { q: "Past Simple of swim:", options: ["Swam", "Swum", "Swimmed"], a: "Swam" }
            ]
        },
        flashcards: [
            { front: "go", back: "went / gone\nEx: I went to the store. I have gone there many times." },
            { front: "write", back: "wrote / written\nEx: She wrote a letter. She has written a book." },
            { front: "put", back: "put / put\nEx: He put the keys on the table yesterday." },
            { front: "take", back: "took / taken\nEx: They took the bus. They have taken the wrong path." }
        ],
        roleplay: {
            scenario: "Basic: telling a past anecdote full of events.",
            roleA: "Storyteller: Tell a story about a beach trip using 'went', 'found', and 'swam'.",
            roleB: "Listener: React to the story and ask questions like 'What did you find?' and 'Did you take photos?'"
        }
    },
    {
        id: "adjectives-ed-ing",
        title: "Adjectives (-ED vs -ING)",
        category: "Grammar",
        learning: {
            content: `<h2>Adjetivos terminados en -ED vs -ING</h2>
            <p>Es muy común confundir estos adjetivos, pero la regla general es muy simple:</p>
            <ul>
                <li><b>-ED (Para Sentimientos):</b> Usamos adjetivos con -ED para describir cómo alguien se siente. Ej: "I was so <b>bored</b> that I almost fell asleep."</li>
                <li><b>-ING (Para la Causa):</b> Usamos adjetivos con -ING para describir una situación, cosa o evento que causa ese sentimiento. Ej: "The plot was very <b>boring</b>."</li>
            </ul>
            <h3>Patrones Clave</h3>
            <p>La película es <i>boring</i>, por lo tanto tú estás <i>bored</i>. La caminata es <i>exhausting</i>, por lo tanto ellos están <i>exhausted</i>.</p>`
        },
        tips: {
            content: `<h3>Excepciones y Usos</h3>
            <p>Recuerda que también puedes usar -ING para describir la personalidad de alguien que causa un efecto: "He is an <b>interesting</b> person" (Es decir, causa interés en los demás). Pero "He is <b>interested</b> in art" (Es su sentimiento interno).</p>
            <div class='mindmap-container'>
            <pre class='mermaid'>
            graph LR;
                A[Adjectives] --> B(-ED);
                A --> C(-ING);
                B --> D(Describes Feelings);
                B --> E(Ex: Bored, Surprised, Tired);
                C --> F(Describes the Cause / Thing);
                C --> G(Ex: Boring, Surprising, Tiring);
            </pre>
            </div>`
        },
        exercises: {
            grammar: [
                { q: "I didn't like the film at all. I was so ____ that I almost fell asleep.", options: ["boring", "bored", "boredom"], a: "bored" },
                { q: "I agree. The plot was very ____ and didn't make much sense.", options: ["disappointed", "disappointing", "disappoints"], a: "disappointing" },
                { q: "It was ____ that so many people in the cinema liked it.", options: ["surprising", "surprised", "surprise"], a: "surprising" }
            ],
            vocabulary: [
                { q: "If the movie is 'exhausting', the friends felt ____.", options: ["exhausting", "tired", "tiring"], a: "tired" },
                { q: "I was ____ when I saw the ticket price for such a bad film!", options: ["shocked", "shocking", "shocks"], a: "shocked" },
                { q: "I am not ____ in seeing the sequel to that movie.", options: ["interesting", "interested", "interest"], a: "interested" }
            ]
        },
        flashcards: [
            { front: "Boring vs. Bored", back: "Use 'boring' to describe the thing (The movie is boring). Use 'bored' to describe the feeling (I am bored)." },
            { front: "Interesting vs. Interested", back: "Use 'interesting' for things (An interesting book). Use 'interested' for people's feelings (I'm interested in art)." },
            { front: "Tiring vs. Tired", back: "Use 'tiring' for situations (My job is tiring). Use 'tired' for how you feel (I get tired doing my job)." },
            { front: "Disappointing vs. Disappointed", back: "Use 'disappointing' for events (The movie). Use 'disappointed' for feelings (We felt disappointed)." }
        ],
        roleplay: {
            scenario: "Two friends talking about a boring movie and how they felt.",
            roleA: "Friend 1: Explain that you thought the movie was very boring and you felt tired watching it.",
            roleB: "Friend 2: Agree, and say you were surprised that other people looked interested in the film."
        }
    },
    {
        id: "comparative-adjectives",
        title: "Comparative Adjectives",
        category: "Grammar",
        learning: {
            content: `<h2>Adjetivos Comparativos</h2>
            <p>Aprende a comparar dos objetos, personas o lugares utilizando estructuras comparativas:</p>
            <ul>
                <li><b>Adjetivos Cortos:</b> Añadimos '-er' al final + than. Ej: "My city is <b>quieter than</b> London."</li>
                <li><b>Adjetivos Largos (2+ sílabas):</b> Usamos 'more' antes del adjetivo. Ej: "Living in a large city is <b>more expensive than</b> living in a village."</li>
                <li><b>As... As:</b> Para comparaciones de igualdad o desigualdad. Ej: "The traffic wasn't <b>as crowded as</b> usual today."</li>
            </ul>`
        },
        tips: {
            content: `<h3>Irregulares e Idioms Comparativos</h3>
            <p>Hay adjetivos clave que no siguen regla alguna y debes memorizar su forma comparativa:</p>
            <ul>
                <li><b>Good</b> cambia a <b>Better</b>. Ej: "The bus service is better here."</li>
                <li><b>Bad</b> cambia a <b>Worse</b>.</li>
                <li><b>Far</b> cambia a <b>Further</b> o <b>Farther</b>.</li>
            </ul>
            <p>Una expresión nativa de doble comparativo: <b>"The sooner, the better"</b> (Cuanto antes, mejor).</p>`
        },
        exercises: {
            grammar: [
                { q: "Living in a large city is often _______ (expensive) than living in a small village.", options: ["expensiver", "more expensive", "most expensive"], a: "more expensive" },
                { q: "The bus service in Madrid is _______ (good) than in my hometown.", options: ["gooder", "better", "more good"], a: "better" },
                { q: "The traffic in London wasn't _______ (crowded) usual today.", options: ["as crowded as", "more crowded as", "crowded than"], a: "as crowded as" }
            ],
            vocabulary: [
                { q: "I don't like noisy cities; I prefer somewhere _______.", options: ["quieter", "more crowded", "worse"], a: "quieter" },
                { q: "Is it _______ to drive or go by train in this city?", options: ["cheaper", "more patient", "further"], a: "cheaper" },
                { q: "The town centre was very _______, there were too many people.", options: ["crowded", "empty", "large"], a: "crowded" }
            ]
        },
        flashcards: [
            { front: "Comparative of 'bad'", back: "worse" },
            { front: "Comparative of 'far'", back: "further (or farther)" },
            { front: "Comparative of 'easy'", back: "easier (Ends in -y, changes to -i and adds -er)" },
            { front: "Structure: The sooner _______.", back: "the better." }
        ],
        roleplay: {
            scenario: "Comparando dos ciudades para vivir con un amigo.",
            roleA: "Friend 1: Say that City A is cheaper and quieter than City B.",
            roleB: "Friend 2: Argue that City B is better because the public transport is more modern and it isn't as boring as City A."
        }
    },
    {
        id: "first-zero-conditional",
        title: "First vs Zero Conditional",
        category: "Grammar",
        learning: {
            content: `<h2>Condicionales 0 y 1</h2>
            <p>Los condicionales conectan una condición (if) con un resultado. Diferenciar el Cero del Primero es vital para expresar verdades o planes futuros reales.</p>
            <h3>Zero Conditional (Hechos Generales)</h3>
            <p>Se usa para verdades universales, rutinas o leyes de la naturaleza. Estructura: <b>If + Present Simple, Present Simple</b>.</p>
            <p>Ej: "If you heat water to 100 degrees Celsius, it <b>boils</b>." o "If you don't water flowers, they <b>die</b>."</p>
            <h3>First Conditional (Planes Futuros Reales)</h3>
            <p>Se usa para posibles acciones futuras basadas en algo probable. Estructura: <b>If + Present Simple, WILL / WON'T + Verbo Base</b>.</p>
            <p>Ej: "If the weather is nice tomorrow, we <b>will go</b> to the beach."</p>`
        },
        tips: {
            content: `<h3>Cuidado con el Will en el If-Clause</h3>
            <p>Uno de los errores más comunes es poner "will" al lado del If. <b>Nunca pongas "will" en la condición misma.</b> "If it will rain..." es incorrecto. Siempre es "If it rains, we will stay home".</p>
            <p>Vocabulario del clima para dar contexto a los First Conditionals: <i>Forecast</i> (pronóstico), <i>Freezing</i> (helado), <i>Black clouds</i> (nubes grises de lluvia).</p>`
        },
        exercises: {
            grammar: [
                { q: "If you heat water to 100 degrees Celsius, it ______.", options: ["boils", "will boil", "is boiling"], a: "boils" },
                { q: "If the weather ______ nice tomorrow, we will go to the beach.", options: ["is", "will be", "was"], a: "is" },
                { q: "Nature's rule: If you don't water flowers, they ______.", options: ["die", "will die", "are dying"], a: "die" }
            ],
            vocabulary: [
                { q: "Look at those ______ clouds! I think it's going to rain.", options: ["black", "white", "clear"], a: "black" },
                { q: "I heard the weather ______ on the radio; it's going to get warmer.", options: ["forecast", "report", "news"], a: "forecast" },
                { q: "It's ______ today. I wish it weren't so cold; I hate winter weather.", options: ["freezing", "boiling", "sunny"], a: "freezing" }
            ]
        },
        flashcards: [
            { front: "Zero Conditional Usage", back: "Used for things that are always true or general truths. Structure: If + present simple, present simple." },
            { front: "First Conditional Usage", back: "Used for possible future actions or situations. Structure: If + present simple, will/won't + base form." },
            { front: "Example: Nature's Rule", back: "'If you heat ice, it melts.' (Zero Conditional)" },
            { front: "Example: Weather Plan", back: "'If it rains this evening, I won't go out.' (First Conditional)" }
        ],
        roleplay: {
            scenario: "Discutiendo reglas de la naturaleza y planes condicionados al clima.",
            roleA: "Person A: State a general fact (Zero conditional) about what happens to plants if they don't get light.",
            roleB: "Person B: Agree, and make a plan for tomorrow (First conditional): say that if it doesn't rain, you will plant new flowers in the garden."
        }
    },
    {
        id: "the-present-review",
        title: "The Present (Simple vs Continuous Review)",
        category: "Grammar",
        learning: {
            content: `<h2>El Presente: Hábitos vs. Excepciones</h2>
            <p>Entender la diferencia en el Presente cambiará completamente cómo relatas tu rutina diaria:</p>
            <ul>
                <li><b>Present Simple:</b> Sirve para describir situaciones permanentes, rutinas y hechos generales. Ej: "Mark <b>works</b> as a project manager." o "I usually <b>drink</b> coffee in the morning."</li>
                <li><b>Present Continuous:</b> Se usa para actividades temporales o desarrollándose alrededor del momento actual. Ej: "But this week he <b>is attending</b> a conference." o "Today I <b>am having</b> tea."</li>
            </ul>`
        },
        tips: {
            content: `<h3>Palabras Claves (Signal Words)</h3>
            <p>Usa detectores visuales para elegir el tiempo correcto:</p>
            <ul>
                <li><i>Para el Simple:</i> always, usually, often, sometimes, rarely, never.</li>
                <li><i>Para el Continuo:</i> now, at the moment, these days, currently.</li>
            </ul>
            <p><b>Regla de Oro:</b> Los "Stative Verbs" que describen sentimientos o pensamientos como <i>know, believe, like, understand</i> nunca van en continuo. Decimos "I understand it now" (NO "I am understanding it now").</p>`
        },
        exercises: {
            grammar: [
                { q: "I usually ________ (drink) coffee in the morning, but today I am having tea.", options: ["drink", "am drinking", "drinks"], a: "drink" },
                { q: "Mark works as a PM, but this week he ________ a conference in Vienna.", options: ["attends", "is attending", "attend"], a: "is attending" },
                { q: "My sister lives in London, but she ________ with us at the moment.", options: ["stays", "is staying", "staying"], a: "is staying" }
            ],
            vocabulary: [
                { q: "A sequence of actions regularly followed; a fixed program is a ________.", options: ["Routine", "Temporary", "Moment"], a: "Routine" },
                { q: "Lasting for only a limited period of time; not permanent means it is ________.", options: ["Routine", "Temporary", "Forever"], a: "Temporary" },
                { q: "An expression indicating an action happens right now: 'She is busy ________'.", options: ["Always", "At the moment", "Usually"], a: "At the moment" }
            ]
        },
        flashcards: [
            { front: "Present Simple vs. Present Continuous", back: "Present Simple = Permanent situations & habits. Present Continuous = Temporary situations & happening right now." },
            { front: "Signal Words: Present Simple", back: "Always, usually, often, sometimes, rarely, never, every day." },
            { front: "Signal Words: Present Continuous", back: "Now, at the moment, these days, nowadays, currently." },
            { front: "Stative Verbs Rule", back: "Verbs like know, believe, like, love, understand are rarely used in the continuous form (-ing)." }
        ],
        roleplay: {
            scenario: "Dos amigos hablando sobre sus rutinas diarias vs. algo inusual que están haciendo debido a circunstancias excepcionales.",
            roleA: "Friend 1: Say that you normally drive to work but this week you are taking the bus because your car is broken.",
            roleB: "Friend 2: Say that you usually eat salad for lunch, but today you are eating pizza because you are feeling very hungry."
        }
    },
    {
        id: "the-past-review",
        title: "The Past (Simple vs Continuous Review)",
        category: "Grammar",
        learning: {
            content: `<h2>Masterclass de Tiempos Pasados</h2>
            <p>Para contar buenas anécdotas, necesitas entrelazar acciones de fondo con acciones concretas.</p>
            <ul>
                <li><b>Past Continuous (Fondo/Acción Larga):</b> Construye el escenario. "While I <b>was sunbathing</b> on the beach..."</li>
                <li><b>Past Simple (Acción Central/Interrupción):</b> Describe qué pasó de repente. "...it suddenly <b>started</b> to rain."</li>
            </ul>
            <h3>Tensión Narrativa</h3>
            <p>Si la historia es una secuencia rápida de acciones seguidas, usamos sólo Past Simple: "We <b>arrived</b> at the airport, <b>bought</b> some snacks, and then we <b>went</b> to the gate."</p>`
        },
        tips: {
            content: `<h3>Errores Frecuentes de Hispanohablantes</h3>
            <p>¡Ten cuidado con el Spanglish!</p>
            <ul>
                <li><b>Accommodation:</b> Presta atención a la ortografía (Doble C, Doble M). No es "acomodation".</li>
                <li><b>Decir "Hacer una fiesta":</b> En inglés no usamos "do/make a party". Se dice <b>"Have a party"</b> o <b>"Throw a party"</b>.</li>
                <li><b>Preposiciones de Vacaciones:</b> Vamos de vacaciones "<b>on</b> a package holiday", (nunca "in").</li>
            </ul>`
        },
        exercises: {
            grammar: [
                { q: "While I ____ (sunbathe) on the beach, it suddenly started to rain.", options: ["am sunbathing", "was sunbathing", "sunbathed"], a: "was sunbathing" },
                { q: "The hotel was very comfortable when I ____.", options: ["arrived", "have arrived", "was arriving"], a: "arrived" },
                { q: "We ____ at the airport, bought some snacks, and then we went to the gate.", options: ["arrived", "were arriving", "have arrived"], a: "arrived" }
            ],
            vocabulary: [
                { q: "They like going abroad ____ package holidays.", options: ["in", "on", "at"], a: "on" },
                { q: "We decided to ____ a party at the beach house for my birthday.", options: ["do", "have", "make"], a: "have" },
                { q: "Correct the spelling: The _________ was very beautiful but expensive.", options: ["acomodation", "accommodation", "acommodation"], a: "accommodation" }
            ]
        },
        flashcards: [
            { front: "Forming Past Continuous", back: "Subject + was/were + present participle (-ing form). Used for actions in progress." },
            { front: "Past Simple in a story", back: "Used for completed actions or situations that follow each other quickly (The sequence of events)." },
            { front: "To have a party", back: "The correct collocation. We never say 'do a party' or 'make a party'." },
            { front: "Spelling checks", back: "Comfortable (Not 'confortable'), Accommodation (Double C, Double M)." }
        ],
        roleplay: {
            scenario: "Basic: Contando una anécdota pasada de unas vacaciones.",
            roleA: "Storyteller: Tell a story about how you were relaxing at the hotel pool when you suddenly saw a famous actor.",
            roleB: "Listener: Ask what the actor was doing and what happened next in the sequence of events."
        }
    },
    {
        id: "talking-about-home",
        title: "Talking about your Home",
        category: "Home & Living",
        learning: { content: "<h2>Talking about your Home</h2><p>Describir las habitaciones de una casa y el mobiliario básico utilizando adjetivos y preposiciones adecuadas.</p>" },
        tips: { content: "<h3>Prepositions for Home</h3><p>Remember that 'home' does not require a preposition con verbos de dirección como 'go'. Ej: 'I am going home'. Sin embargo, para indicar lugar usas 'at' (ej: 'I am at home').</p>" },
        exercises: {
            grammar: [
                { q: "I am so happy to finally be ____ home.", options: ["at", "to", "in"], a: "at" },
                { q: "____ a comfortable sofa and a TV in the living room.", options: ["There is", "There are", "It is"], a: "There is" },
                { q: "The living room has huge windows, so it is very ____.", options: ["light", "dark", "heavy"], a: "light" }
            ],
            vocabulary: [
                { q: "Where food is prepared and cooked.", options: ["Kitchen", "Bedroom", "Living room"], a: "Kitchen" },
                { q: "Which room does the 'Wardrobe' belong to?", options: ["Bedroom", "Kitchen", "Bathroom"], a: "Bedroom" },
                { q: "What is the UK equivalent for 'Apartment'?", options: ["Flat", "House", "Yard"], a: "Flat" }
            ]
        },
        flashcards: [
            { front: "Living Room", back: "La habitación principal para relajarse y recibir visitas." },
            { front: "Kitchen", back: "El lugar donde se prepara la comida." },
            { front: "Cosy / Cozy", back: "Adjetivo para describir un hogar cálido y acogedor." },
            { front: "Spacious", back: "Adjetivo que describe una casa que tiene mucho espacio." }
        ],
        roleplay: {
            scenario: "Estás describiendo las diferentes habitaciones de tu nueva casa a un amigo que ha venido de visita.",
            roleA: "Host: Describe the rooms using 'There is/are' and adjectives like 'light' or 'cosy'.",
            roleB: "Friend: Ask questions about the furniture and express admiration."
        }
    },
    {
        id: "hobbies-interests",
        title: "Hobbies and Interests",
        category: "Social & Personal",
        learning: { content: "<h2>Hobbies and Interests</h2><p>Aprende a hacer planes y describir tus pasatiempos usando los verbos correctos (play, do, go).</p>" },
        tips: { content: "<h3>Play, Do or Go?</h3><ul><li><b>Play:</b> for ball sports or competitive games (e.g. Play football).</li><li><b>Do:</b> for recreational activities or martial arts (e.g. Do yoga).</li><li><b>Go:</b> for activities that end in -ing (e.g. Go swimming).</li></ul>" },
        exercises: {
            grammar: [
                { q: "I usually ______ cycling in the countryside to relax.", options: ["play", "do", "go"], a: "go" },
                { q: "My friend and I want to ______ football at the park this Saturday.", options: ["play", "do", "go"], a: "play" },
                { q: "I ______ (play) cricket when I was a teenager, but I gave it up.", options: ["used to play", "would play", "play"], a: "used to play" }
            ],
            vocabulary: [
                { q: "What does 'Piece of cake' mean?", options: ["Something easy", "A dessert", "A difficult task"], a: "Something easy" },
                { q: "I decided to ______ painting last month to express my creativity.", options: ["take up", "give up", "keep up"], a: "take up" },
                { q: "If you want to practice painting, you need a canvas and an ______.", options: ["easel", "racket", "trail"], a: "easel" }
            ]
        },
        flashcards: [
            { front: "Paint the town red", back: "To go out with friends and have a fun-filled night out." },
            { front: "Shoot some hoops", back: "To have a game of basketball." },
            { front: "Chow down", back: "To eat, often at a fast-food joint." },
            { front: "Chillax", back: "A combination of 'chill' and 'relax'." }
        ],
        roleplay: {
            scenario: "Haciendo planes para el fin de semana según tus hobbies con un compañero.",
            roleA: "Person A: Suggest an activity using 'go' or 'play'.",
            roleB: "Person B: Accept or decline proposing an alternative hobby using 'used to' or 'take up'."
        }
    },
    {
        id: "calling-in-sick",
        title: "Calling in Sick for Work",
        category: "Business & Work",
        learning: { content: "<h2>Calling in Sick</h2><p>Learn how to professionally notify a manager of an absence due to illness using appropriate vocabulary.</p>" },
        tips: { content: "<h3>Professional Structure</h3><p>When calling in sick, follow this structure:<br>1. Professional Greeting<br>2. State the reason briefly<br>3. State the action (not coming in)<br>4. Provide a handover plan</p>" },
        exercises: {
            grammar: [
                { q: "I __________ (feel) unwell since yesterday evening.", options: ["have been feeling", "felt", "am feeling"], a: "have been feeling" },
                { q: "I've had a bad headache and sore throat _____ two days.", options: ["for", "since", "during"], a: "for" },
                { q: "I __________ (not / be able to) come to the office today.", options: ["won't be able to", "don't be able", "am not be able"], a: "won't be able to" }
            ],
            vocabulary: [
                { q: "I'm calling because I'm feeling a bit under the __________ today.", options: ["weather", "cloud", "rain"], a: "weather" },
                { q: "I need to __________ in sick this morning.", options: ["call", "phone", "tell"], a: "call" },
                { q: "Could you please ask Sarah to __________ for me while I'm out?", options: ["cover", "work", "do"], a: "cover" }
            ]
        },
        flashcards: [
            { front: "Under the weather", back: "An idiom used to describe feeling slightly ill." },
            { front: "To call in sick", back: "To report that you cannot work due to illness." },
            { front: "Cover for someone", back: "To handle the responsibilities of a colleague during their absence." },
            { front: "Urgent tasks", back: "High-priority work duties that must be completed promptly." }
        ],
        roleplay: {
            scenario: "Llamada telefónica a tu jefe para explicar que estás enfermo y no puedes ir a la oficina.",
            roleA: "Employee: Call in sick saying you feel under the weather and suggest a colleague covers you.",
            roleB: "Boss: Be understanding, ask if it's serious, and wish them a quick recovery."
        }
    },
    {
        id: "buying-electronics",
        title: "Buying Electronic Devices",
        category: "Shopping & Money",
        learning: { content: "<h2>Buying Electronics</h2><p>Vocabulary and expressions to make technical questions about devices, or asking for refunds and exchanges.</p>" },
        tips: { content: "<h3>Key Vocabulary</h3><p>Useful terms: <b>Receipt</b> (recibo), <b>Refund</b> (reembolso), <b>Exchange</b> (cambio), <b>Warranty</b> (garantía), <b>Faulty</b> (defectuoso).</p>" },
        exercises: {
            grammar: [
                { q: "The Optron X23 has a higher price, so it is ________ than the Optron X1.", options: ["more expensive", "expensiver", "most expensive"], a: "more expensive" },
                { q: "How ________ power does this battery model provide?", options: ["much", "many", "a lot"], a: "much" },
                { q: "The sales assistant told me this monitor was ________ on the market.", options: ["the best", "the better", "the goodest"], a: "the best" }
            ],
            vocabulary: [
                { q: "Money given back to you if you return something.", options: ["Refund", "Receipt", "Exchange"], a: "Refund" },
                { q: "I need a refund because the screen has a ________ pixel that stays black.", options: ["dead", "faulty", "wrong"], a: "dead" },
                { q: "Is there any ________ if I purchase both the tablet and the keyboard?", options: ["discount", "charge", "promotion"], a: "discount" }
            ]
        },
        flashcards: [
            { front: "Warranty", back: "A legal agreement stating that a product will operate defect-free for a specified time." },
            { front: "Faulty", back: "Term used for electronic items that do not work or have problems." },
            { front: "Battery Life", back: "The amount of time a device functions before it needs charging." },
            { front: "Customer Service", back: "Helping customers in a polite way." }
        ],
        roleplay: {
            scenario: "En la tienda haciendo preguntas técnicas sobre un nuevo dispositivo o intentado devolverlo.",
            roleA: "Customer: Ask for a refund for a faulty device mentioning it has a dead pixel.",
            roleB: "Clerk: Apologize and ask if they have the receipt and want an exchange or a refund."
        }
    },
    {
        id: "healthy-eating",
        title: "Healthy Eating",
        category: "Food & Restaurants",
        learning: { content: "<h2>Healthy Eating in Restaurants</h2><p>Adquiere el vocabulario necesario para pedir opciones saludables o preguntar por ingredientes en restaurantes.</p>" },
        tips: { content: "<h3>Cooking Methods</h3><p>Para opciones más sanas, busca palabras como <b>Steamed</b> (al vapor), <b>Grilled</b> (a la plancha) o <b>Baked</b> (horneado). Evita lo <b>Fried</b> o <b>Breaded</b> (empanado).</p>" },
        exercises: {
            grammar: [
                { q: "___ calories are in this grilled chicken dish?", options: ["How many", "How much", "What"], a: "How many" },
                { q: "If you want to eat healthily, you ___ order fried foods.", options: ["shouldn't", "should", "couldn't"], a: "shouldn't" },
                { q: "I usually ___ (eat) a balanced diet, but today I want a treat.", options: ["eat", "am eating", "eats"], a: "eat" }
            ],
            vocabulary: [
                { q: "Cooked directly over intense heat or fire.", options: ["Grilled", "Steamed", "Baked"], a: "Grilled" },
                { q: "Could I have the dressing on the ___, please?", options: ["side", "top", "plate"], a: "side" },
                { q: "Brown rice and oats are examples of ___.", options: ["whole grains", "junk food", "dairy"], a: "whole grains" }
            ]
        },
        flashcards: [
            { front: "Balanced diet", back: "Una dieta que contiene cantidades adecuadas de nutrientes." },
            { front: "Steamed", back: "Cocinado al vapor (ideal para vegetales)." },
            { front: "Nutrient", back: "Cualquier sustancia que puede ser metabolizada para dar energía." },
            { front: "Ingredient", back: "Uno de los elementos usados para preparar un plato." }
        ],
        roleplay: {
            scenario: "Pidiendo un menú saludable en un restaurante y preguntando sobre los ingredientes.",
            roleA: "Customer: Ask for a grilled chicken dish and request the dressing on the side.",
            roleB: "Waiter: Confirm the order and ask if you want steamed vegetables or fries."
        }
    },
    {
        id: "finding-apartment",
        title: "Finding an Apartment",
        category: "Home & Living",
        learning: { content: "<h2>Finding an Apartment</h2><p>Aprende a preguntar por las características de un piso de alquiler a un propietario, entender las condiciones del contrato y describir su coste usando números grandes y comparativas.</p>" },
        tips: { content: "<h3>Key Concepts to Check</h3><ul><li><b>Security Deposit:</b> La fianza o dinero pagado por adelantado por si hay daños.</li><li><b>Utilities:</b> Los gastos de agua (Water) y luz (Electricity). Pregunta siempre si están incluidos en el alquiler mensual.</li><li><b>Lease Term:</b> La duración del contrato, normalmente 6 o 12 meses.</li></ul>" },
        exercises: {
            grammar: [
                { q: "This apartment is _________ (expensive) than the one I saw yesterday.", options: ["more expensive", "expensiver", "most expensive"], a: "more expensive" },
                { q: "I want to find the _________ (good) deal in this neighborhood.", options: ["goodest", "better", "best"], a: "best" },
                { q: "Read out the rent: The monthly rent is $2,050.", options: ["Two thousand, fifty dollars", "Two thousand and five zero", "Twenty and fifty dollars"], a: "Two thousand, fifty dollars" }
            ],
            vocabulary: [
                { q: "The person who pays rent to live in the apartment.", options: ["Tenant", "Landlord", "Owner"], a: "Tenant" },
                { q: "Money paid upfront as protection for the landlord in case of damages.", options: ["Security deposit", "Utilities", "Lease term"], a: "Security deposit" },
                { q: "Which of the following are considered 'Utilities'?", options: ["Sofa and Bed", "Water and Electricity", "Balcony and Patio"], a: "Water and Electricity" }
            ]
        },
        flashcards: [
            { front: "Lease term", back: "The length of time specified in the rental agreement (e.g., 6 months or 1 year)." },
            { front: "Furnished", back: "An apartment that comes with furniture included, such as a bed and sofa." },
            { front: "Amenities", back: "Features that make a property more appealing, like a gym or pool." },
            { front: "Viewing", back: "A scheduled visit to see an apartment before deciding to rent it." }
        ],
        roleplay: {
            scenario: "Visiting an apartment and asking the landlord about its features.",
            roleA: "Potential Tenant: Ask what the monthly rent is, if it includes utilities, and if pets are allowed.",
            roleB: "Landlord: Answer the questions and mention the security deposit amount."
        }
    },
    {
        id: "locations-directions",
        title: "Locations & Directions",
        category: "Home & Living",
        learning: { content: "<h2>Locations & Directions</h2><p>Asking and giving directions from a starting point (like a train station) to a destination using formal and informal structures.</p>" },
        tips: { content: "<h3>Indirect vs Direct Questions</h3><p>Una pregunta directa puede sonar seca. Usa el <b>Formal Indirect Question:</b> 'Excuse me, do you know where the train station is?'. ¡OJO! En este caso el verbo 'To be' va AL FINAL, no en el medio.</p>" },
        exercises: {
            grammar: [
                { q: "Transform directly: Where is the train station?", options: ["Do you know where is the station?", "Do you know where the train station is?", "Tell me where is it"], a: "Do you know where the train station is?" },
                { q: "The pharmacy is ____ the bank (on the other side of the street).", options: ["next to", "opposite", "behind"], a: "opposite" },
                { q: "Order: turning / second / the / take / the / left / on", options: ["Take the second turning on the left", "On the left take second turning", "Take turning second left on"], a: "Take the second turning on the left" }
            ],
            vocabulary: [
                { q: "Keep moving forward without turning.", options: ["Go straight ahead", "Cross over", "Take the first part"], a: "Go straight ahead" },
                { q: "To travel from one side of a road to the other.", options: ["Go straight", "Cross over", "Turn left"], a: "Cross over" },
                { q: "Which phrase is a polite way to start a conversation to ask for help?", options: ["Tell me the way", "Excuse me, can you help me?", "Where is it?"], a: "Excuse me, can you help me?" }
            ]
        },
        flashcards: [
            { front: "Railway Station", back: "Estación de Tren." },
            { front: "Go along [Street]", back: "Seguir por [Nombre de la calle]." },
            { front: "On the corner of", back: "En la esquina de." },
            { front: "You can't miss it!", back: "¡No tiene pérdida! / No puedes perderte." }
        ],
        roleplay: {
            scenario: "Preguntando y dando indicaciones para llegar al centro de la ciudad.",
            roleA: "Tourist: Ask politely how to get to the city center from the train station.",
            roleB: "Local: Tell them to go straight ahead, take the second turning on the left, and that it's opposite the bank."
        }
    },
    {
        id: "returning-purchase",
        title: "Returning a purchase",
        category: "Shopping & Money",
        learning: { content: "<h2>Returning a Purchase</h2><p>Aprende cómo devolver de manera educada artículos que no funcionan o no te sientan bien en una tienda.</p>" },
        tips: { content: "<h3>Store Credit vs Refund</h3><ul><li><b>Refund:</b> Te devuelven el dinero exactamente como pagaste.</li><li><b>Exchange:</b> Cambias el artículo por otro (ej. por otra talla o color).</li><li><b>Store Credit:</b> Te dan un saldo o vale que SÓLO puedes gastar en esa tienda en el futuro.</li></ul>" },
        exercises: {
            grammar: [
                { q: "Polite Request: I _______ like to return these shoes, please.", options: ["would", "should", "will"], a: "would" },
                { q: "I'm sorry, but these shoes _______ fit me properly.", options: ["doesn't", "don't", "aren't"], a: "don't" },
                { q: "Clerk's question: _______ you have the receipt for this purchase?", options: ["Do", "Are", "Does"], a: "Do" }
            ],
            vocabulary: [
                { q: "I need a bigger size; these are too _______.", options: ["loose", "tight", "wide"], a: "tight" },
                { q: "To return money to a customer is a...", options: ["Refund", "Exchange", "Receipt"], a: "Refund" },
                { q: "You cannot get a refund without the _______ (proof of purchase).", options: ["exchange list", "receipt", "faulty paper"], a: "receipt" }
            ]
        },
        flashcards: [
            { front: "Exchange", back: "To give back an item and receive a different one (e.g., a different size)." },
            { front: "Store credit", back: "An amount of money credited to a customer that can only be spent in that specific store." },
            { front: "Receipt", back: "A document provided by a retailer as proof that a purchase was made." },
            { front: "Faulty", back: "A term describing an item that is defective or broken." }
        ],
        roleplay: {
            scenario: "Devolviendo unos zapatos porque están demasiado apretados.",
            roleA: "Customer: Explain that the shoes are too tight and request a refund.",
            roleB: "Clerk: Ask for the receipt and inform them that you can offer an exchange but no refunds."
        }
    },
    {
        id: "table-manners",
        title: "Table Manners & Utensils",
        category: "Food & Restaurants",
        learning: { content: "<h2>Table Manners & Utensils</h2><p>Vocabulario sobre cubiertos, cómo colocar la mesa y consejos sobre lo que 'Deberías' o 'No deberías' hacer en una cena formal.</p>" },
        tips: { content: "<h3>The BMW Rule & Dining Styles</h3><p><b>B-M-W Rule:</b> BREAD (left), MEAL (center), WATER (right).<br><br><b>American Style:</b> Cortas la carne y pasas el tenedor a tu mano derecha (zigzag).<br><b>Continental Style:</b> Mantienes el tenedor en la mano izquierda con los 'tines' hacia abajo durante toda la comida.</p>" },
        exercises: {
            grammar: [
                { q: "You _______ chew with your mouth open.", options: ["should", "shouldn't", "must"], a: "shouldn't" },
                { q: "The water glass should be placed _______ the tip of the knife.", options: ["above", "under", "behind"], a: "above" },
                { q: "Imperative of 'Putting elbows on the table': Keep your elbows ____ the table!", options: ["on", "off", "out"], a: "off" }
            ],
            vocabulary: [
                { q: "The sharp prongs of a fork are called...", options: ["blades", "handles", "tines"], a: "tines" },
                { q: "It is always placed on the left side of your plate for your bread.", options: ["Bread plate", "Palate cleanser", "Entrée"], a: "Bread plate" },
                { q: "The collective name for knives, forks, and spoons used for eating.", options: ["Cutlery / Flatware", "Tableware", "Utensils plus"], a: "Cutlery / Flatware" }
            ]
        },
        flashcards: [
            { front: "Cutlery / Flatware", back: "The collective name for knives, forks, and spoons used for eating." },
            { front: "Tines", back: "The sharp prongs of a fork." },
            { front: "Palate Cleanser", back: "A small dish (e.g. sorbet) served to reset your taste buds between courses." },
            { front: "Entrée", back: "The main course of a meal (in North American usage)." }
        ],
        roleplay: {
            scenario: "Corrigiendo graciosamente la forma de usar la servilleta en una cena formal.",
            roleA: "Foreign friend: Tuck the napkin into your collar.",
            roleB: "Protocol Expert: Kindly tell your friend that they shouldn't do that, and the napkin goes on their lap."
        }
    },
    {
        id: "life-milestones",
        title: "Milestones: Important Life Events",
        category: "Social & Personal",
        learning: { content: "<h2>Milestones: Important Life Events</h2><p>El vocabulario exacto y los tiempos pasados para felicitar a las personas por sus ascensos laborales, mudanzas, compromisos o nacimientos.</p>" },
        tips: { content: "<h3>Milestone Collocations</h3><p>Presta el 200% de atención a los verbos que acompañan a estos eventos importantes:</p><ul><li><b>Get Engaged / Get a Job</b></li><li><b>Take a Chance / Take an Opportunity</b></li><li><b>Make a Decision / Make a Move</b></li></ul>" },
        exercises: {
            grammar: [
                { q: "I was so ____ (excit...) to hear you got engaged!", options: ["excited", "exciting", "excite"], a: "excited" },
                { q: "I'm so happy you ____ (got) engaged last week!", options: ["get", "gotten", "got"], a: "got" },
                { q: "____ you move into the new house, please send me your address.", options: ["When", "Where", "While"], a: "When" }
            ],
            vocabulary: [
                { q: "To ____ means to formally agree to marry someone.", options: ["get engaged", "graduate", "retire"], a: "get engaged" },
                { q: "After years of hard work, he decided to ____ at age 65.", options: ["retire", "graduate", "adopt"], a: "retire" },
                { q: "You should ____ the chance to start a new life in that city.", options: ["take", "make", "get"], a: "take" }
            ]
        },
        flashcards: [
            { front: "Milestone", back: "An important life event marking a significant change or achievement." },
            { front: "Get engaged", back: "A life event where two people formally agree to get married." },
            { front: "Move away", back: "To change your residence to a different city or country." },
            { front: "Congratulations on your new home!", back: "Expression used when someone moves to a new house." }
        ],
        roleplay: {
            scenario: "Felicitando a alguien por su compromiso y mudanza.",
            roleA: "Friend 1: Break the news that you got engaged and are moving away to a new city.",
            roleB: "Friend 2: Express extreme excitement, say 'Congratulations' and ask when the big day is."
        }
    }
];

function getTopics() {
    return topics;
}

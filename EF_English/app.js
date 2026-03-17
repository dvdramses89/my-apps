document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Topics
    const topicSelect = document.getElementById('topic-select');
    const myTopics = getTopics();
    
    // Populate select
    myTopics.forEach((topic, index) => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.title;
        topicSelect.appendChild(option);
    });

    // 2. Navigation Logic
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Update active link
            document.querySelector('.nav-links a.active').classList.remove('active');
            e.currentTarget.classList.add('active');

            // Show target section
            const targetSection = e.currentTarget.getAttribute('data-section');
            sections.forEach(sec => {
                if(sec.id === 'sec-' + targetSection) {
                    sec.classList.add('active');
                } else {
                    sec.classList.remove('active');
                }
            });
            
            // Close mobile menu if open
            const sidebar = document.querySelector('.sidebar');
            if(window.innerWidth <= 900 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
            
            // Re-render data just to be safe if specific logic is needed
            // Also re-init mermaid if switching to tips
            if(targetSection === 'tips') {
                setTimeout(() => { mermaid.init(undefined, document.querySelectorAll('.mermaid')); }, 100);
            }
        });
    });

    // 3. Render Content Function
    function renderTopic(topicId) {
        const topic = myTopics.find(t => t.id === topicId);
        if(!topic) return;

        // Update titles
        document.querySelectorAll('.topic-title-display').forEach(el => el.textContent = topic.title);

        // Learning
        document.getElementById('learning-content').innerHTML = topic.learning.content || '<p>No content available.</p>';
        
        // Tips
        document.getElementById('tips-content').innerHTML = topic.tips.content || '<p>No content available.</p>';
        
        // Ejercicios
        const exContainer = document.getElementById('exercises-content');
        exContainer.innerHTML = ''; // clear
        
        if (topic.exercises.grammar && topic.exercises.grammar.length > 0) {
            let html = '<h3>Gramática</h3>';
            topic.exercises.grammar.forEach((ex, idx) => {
                html += `
                <div class="exercise-item" data-answer="${ex.a}">
                    <p>${idx+1}. ${ex.q}</p>
                    <div class="exercise-options">
                        ${ex.options.map((opt, oIdx) => `
                            <label>
                                <input type="radio" name="grammar-${idx}" value="${opt}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                </div>`;
            });
            exContainer.innerHTML += html;
        }

        document.getElementById('exercise-results').classList.add('hidden');

        // Flashcards
        const fcContainer = document.getElementById('flashcard-container');
        fcContainer.innerHTML = '';
        if(topic.flashcards && topic.flashcards.length > 0) {
            topic.flashcards.forEach(fc => {
                const card = document.createElement('div');
                card.className = 'flashcard';
                card.innerHTML = `
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <h2>${fc.front}</h2>
                        </div>
                        <div class="flashcard-back">
                            <p>${fc.back}</p>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    card.classList.toggle('flipped');
                });
                fcContainer.appendChild(card);
            });
        } else {
            fcContainer.innerHTML = '<p>No flashcards available for this topic.</p>';
        }

        // Roleplay
        if(topic.roleplay) {
            document.getElementById('rp-scenario').textContent = topic.roleplay.scenario;
            document.getElementById('rp-roleA').innerHTML = `<strong>Role:</strong> ${topic.roleplay.roleA}`;
            document.getElementById('rp-roleB').innerHTML = `<strong>Role:</strong> ${topic.roleplay.roleB}`;
        } else {
            document.getElementById('rp-scenario').textContent = "No scenario available.";
            document.getElementById('rp-roleA').textContent = "-";
            document.getElementById('rp-roleB').textContent = "-";
        }
        
        // Refresh Mermaid Diagram for the newly loaded topic
        try {
            mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        } catch(e) { console.error("Mermaid error:", e); }
    }

    // 4. Listen to Topic Change
    topicSelect.addEventListener('change', (e) => {
        renderTopic(e.target.value);
    });

    // 5. Initial Render
    if(myTopics.length > 0) {
        renderTopic(myTopics[0].id);
    }
    
    // 6. Check Answers Logic
    document.getElementById('btn-check-answers').addEventListener('click', () => {
        const items = document.querySelectorAll('.exercise-item');
        let correct = 0;
        let total = items.length;
        
        items.forEach((item, idx) => {
            const correctAnswer = item.getAttribute('data-answer');
            const selectedOpt = item.querySelector('input[type="radio"]:checked');
            
            // Clean styles
            item.style.borderLeft = '';
            
            if(selectedOpt && selectedOpt.value === correctAnswer) {
                correct++;
                item.style.borderLeft = '4px solid var(--success)';
                item.style.paddingLeft = '10px';
            } else {
                item.style.borderLeft = '4px solid #ef4444';
                item.style.paddingLeft = '10px';
            }
        });
        
        const resDiv = document.getElementById('exercise-results');
        resDiv.classList.remove('hidden');
        if(correct === total && total > 0) {
            resDiv.className = 'mt-2 result-msg result-success';
            resDiv.textContent = `¡Excelente! Has acertado ${correct}/${total}.`;
        } else {
            resDiv.className = 'mt-2 result-msg result-error';
            resDiv.textContent = `Has acertado ${correct}/${total}. Revisa los errores marcados en rojo.`;
        }
    });

    // 7. Actions (Print and Export PDF)
    document.getElementById('btn-print').addEventListener('click', () => {
        // Prepare DOM for printing - active section or all sections
        const currentSection = document.querySelector('.content-section.active');
        // temporarily show all sections if they want to print everything? 
        // Or just print current. Let's print current window.
        window.print();
    });

    document.getElementById('btn-export-pdf').addEventListener('click', () => {
        const element = document.getElementById('content-container');
        // Hide non-content UI if necessary, here we just target the content container
        const currentTopicName = topicSelect.options[topicSelect.selectedIndex].text;
        const opt = {
            margin:       10,
            filename:     `EF_English_${currentTopicName.replace(/\s+/g, '_')}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });
    
    // 8. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if(window.innerWidth <= 900) {
            if(!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Mermaid initialization
    mermaid.initialize({ startOnLoad: true, theme: 'default' });
});

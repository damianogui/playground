(function () {
    const SVG_PATHS = {
        timer: "M15 0C23.2617 0 30 6.73828 30 15C30 23.3203 23.2617 30 15 30C6.67969 30 0 23.3203 0 15C0 10.8984 1.64062 7.14844 4.39453 4.39453C4.74609 4.04297 5.33203 4.04297 5.68359 4.39453C6.03516 4.80469 6.03516 5.39062 5.68359 5.74219C3.33984 8.14453 1.875 11.4258 1.875 15C1.875 22.2656 7.73438 28.125 15 28.125C22.207 28.125 28.125 22.2656 28.125 15C28.125 8.08594 22.7344 2.40234 15.9375 1.93359V6.5625C15.9375 7.08984 15.4688 7.5 15 7.5C14.4727 7.5 14.0625 7.08984 14.0625 6.5625V0.9375C14.0625 0.46875 14.4727 0 15 0ZM10.0195 8.73047L15.6445 14.3555C15.9961 14.707 15.9961 15.3516 15.6445 15.7031C15.293 16.0547 14.6484 16.0547 14.2969 15.7031L8.67188 10.0781C8.32031 9.72656 8.32031 9.08203 8.67188 8.73047C9.02344 8.37891 9.66797 8.37891 10.0195 8.73047Z",
        splitTimer: "M6.5625 0.9375C6.5625 0.46875 6.97266 0 7.5 0H16.875C17.3438 0 17.8125 0.46875 17.8125 0.9375C17.8125 1.46484 17.3438 1.875 16.875 1.875H13.125V5.68359C15.9961 5.91797 18.6328 7.14844 20.5664 9.02344L22.7344 6.85547C23.0859 6.50391 23.7305 6.50391 24.082 6.85547C24.4336 7.20703 24.4336 7.79297 24.082 8.20312L21.8555 10.4297C23.4375 12.4805 24.375 15.0586 24.375 17.8125C24.375 24.5508 18.8672 30 12.1875 30C5.44922 30 0 24.5508 0 17.8125C0 11.4258 4.92188 6.15234 11.25 5.68359V1.875H7.5C6.97266 1.875 6.5625 1.46484 6.5625 0.9375ZM1.875 17.8125C1.875 21.5039 3.80859 24.9023 7.03125 26.7773C10.1953 28.5938 14.1211 28.5938 17.3438 26.7773C20.5078 24.9023 22.5 21.5039 22.5 17.8125C22.5 14.1797 20.5078 10.7812 17.3438 8.90625C14.1211 7.08984 10.1953 7.08984 7.03125 8.90625C3.80859 10.7812 1.875 14.1797 1.875 17.8125ZM13.125 12.1875V18.75C13.125 19.2773 12.6562 19.6875 12.1875 19.6875C11.6602 19.6875 11.25 19.2773 11.25 18.75V12.1875C11.25 11.7188 11.6602 11.25 12.1875 11.25C12.6562 11.25 13.125 11.7188 13.125 12.1875Z",
        quiz: "M7.5 1.875C4.39453 1.875 1.875 4.39453 1.875 7.5C1.875 8.02734 1.40625 8.4375 0.9375 8.4375C0.410156 8.4375 0 8.02734 0 7.5C0 3.39844 3.33984 0 7.5 0H9.375C13.4766 0 16.875 3.39844 16.875 7.5C16.875 9.60938 15.8789 11.543 14.2383 12.7734L10.6641 15.4688C9.84375 16.0547 9.375 17.0508 9.375 18.0469V18.75C9.375 19.2773 8.90625 19.6875 8.4375 19.6875C7.91016 19.6875 7.5 19.2773 7.5 18.75V18.0469C7.5 16.4648 8.26172 14.9414 9.55078 13.9453L13.125 11.25C14.2969 10.3711 15 9.02344 15 7.5C15 4.39453 12.4805 1.875 9.375 1.875H7.5ZM7.03125 24.375C7.03125 23.6133 7.61719 22.9688 8.4375 22.9688C9.19922 22.9688 9.84375 23.6133 9.84375 24.375C9.84375 25.1953 9.19922 25.7812 8.4375 25.7812C7.61719 25.7812 7.03125 25.1953 7.03125 24.375Z"
    };

    const TOOLS = [
        {
            id: 'timer',
            name: 'Timer',
            url: '../nopetimer/index.html',
            iconPath: SVG_PATHS.timer,
            viewBox: '0 0 30 30',
            width: '30px',
            height: '30px'
        },
        {
            id: 'split-timer',
            name: 'Split Timer',
            url: '../nopetimersplit/index.html',
            iconPath: SVG_PATHS.splitTimer,
            viewBox: '0 0 25 30',
            width: '24.375px',
            height: '30px'
        },
        {
            id: 'quiz',
            name: 'Quiz',
            url: '../nopequiz/index.html',
            iconPath: SVG_PATHS.quiz,
            viewBox: '0 0 17 26',
            width: '16.875px',
            height: '25.781px'
        }
    ];

    function createIcon(path, viewBox, width, height, isActive) {
        return `
            <svg class="block" preserveAspectRatio="none" viewBox="${viewBox}" style="width: ${width}; height: ${height};" fill="none">
                 <path d="${path}" fill="${isActive ? 'white' : 'var(--primary)'}" />
            </svg>
        `;
    }

    function initMenu() {
        const currentTool = document.currentScript.getAttribute('data-tool');

        const overlay = document.createElement('div');
        overlay.className = 'nope-menu-overlay';

        // Menu Trigger Button
        const triggerBtn = document.createElement('button');
        triggerBtn.className = 'nope-menu-trigger';
        triggerBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="nope-menu-icon">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
        `;

        // Menu Panel
        const panel = document.createElement('div');
        panel.className = 'nope-menu-panel';

        // Header
        const header = document.createElement('div');
        header.className = 'nope-menu-header';
        header.innerHTML = `
            <h2 class="nope-menu-title">Nope Tools</h2>
            <p class="nope-menu-subtitle">by nope.design</p>
        `;
        panel.appendChild(header);

        // Tools List
        TOOLS.forEach(tool => {
            const isActive = tool.id === currentTool;
            const link = document.createElement('a');
            link.href = tool.url;
            link.className = `nope-menu-item ${isActive ? 'active' : ''}`;

            link.innerHTML = `
                <div class="nope-menu-item-icon-container">
                    ${createIcon(tool.iconPath, tool.viewBox, tool.width, tool.height, isActive)}
                </div>
                <span class="nope-menu-label">${tool.name}</span>
            `;

            panel.appendChild(link);
        });

        overlay.appendChild(triggerBtn);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        // Toggle Logic
        let isOpen = false;
        triggerBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                panel.classList.add('open');
                triggerBtn.innerHTML = `
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="nope-menu-icon">
                        <path d="M18 6 6 18"></path>
                        <path d="M6 6 18 18"></path>
                    </svg>
                `;
            } else {
                panel.classList.remove('open');
                triggerBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="nope-menu-icon">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                `;
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (isOpen && !panel.contains(e.target) && !triggerBtn.contains(e.target)) {
                isOpen = false;
                panel.classList.remove('open');
                triggerBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="nope-menu-icon">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                `;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenu);
    } else {
        initMenu();
    }
})();

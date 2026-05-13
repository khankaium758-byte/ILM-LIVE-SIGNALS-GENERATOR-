@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Outfit", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --color-accent: #8b5cf6;
  --color-accent-hover: #7c3aed;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-bg-dark: #0b0e14;
}

:root {
    --bg-main: #0B0E14;
    --panel-bg: #11141A;
    --panel-border: #1E222B;
    --text-primary: #FFFFFF;
    --text-secondary: #8B92A5;
    --accent-blue: #4F46E5;
    --accent-purple: #9333EA;
    --accent-glow: rgba(79, 70, 229, 0.4);
    --success: #10B981;
    --danger: #EF4444;
    --warning: #F59E0B;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-sans);
}

body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
    overflow-x: hidden;
    position: relative;
}

/* Dynamic Background Orbs */
.background-orbs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: float 10s infinite ease-in-out alternate;
}

.orb-1 {
    width: 400px;
    height: 400px;
    background: var(--accent-blue);
    top: -100px;
    left: -100px;
}

.orb-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-purple);
    bottom: 10%;
    right: -50px;
    animation-delay: -5s;
}

.orb-3 {
    width: 250px;
    height: 250px;
    background: var(--success);
    top: 40%;
    left: 40%;
    opacity: 0.2;
    animation-duration: 15s;
}

@keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(50px, 50px) scale(1.1); }
}

/* Main Panel */
.main-panel {
    background-color: rgba(17, 20, 26, 0.6);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--panel-border);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

/* Custom Dropdown Additional Styles */
.custom-dropdown-container {
    position: relative;
    width: 100%;
}

.custom-dropdown-selected {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--panel-border);
    border-radius: 10px;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
}

.custom-dropdown-selected:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(139, 92, 246, 0.5);
}

.custom-dropdown-selected.active {
    border-color: #8b5cf6;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.custom-dropdown-selected.active i {
    transform: rotate(180deg);
}

.custom-dropdown-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #161A23;
    border: 1px solid var(--panel-border);
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    max-height: 250px;
    overflow-y: auto;
    z-index: 50;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
    pointer-events: none;
}

.custom-dropdown-options.show {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.custom-dropdown-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid rgba(255,255,255,0.02);
}

.custom-dropdown-option:last-child {
    border-bottom: none;
}

.custom-dropdown-option:hover {
    background-color: rgba(139, 92, 246, 0.15);
}

.custom-dropdown-option.selected {
    background-color: rgba(139, 92, 246, 0.2);
    border-left: 3px solid #8b5cf6;
}

.asset-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.flags {
    display: flex;
    align-items: center;
    position: relative;
    width: 38px;
    height: 22px;
}

.flags img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--panel-bg);
    position: absolute;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.flags img:first-child {
    left: 0;
    z-index: 1;
}

.flags img:last-child {
    left: 14px;
    z-index: 2;
}

/* Generate Button */
.generate-btn {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(30, 35, 50, 0.8) 0%, rgba(15, 18, 25, 0.9) 100%);
    border: 2px solid rgba(139, 92, 246, 0.8);
    box-shadow: 0 0 50px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.1);
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-primary);
    transition: transform 0.2s, box-shadow 0.2s;
    outline: none;
}

.generate-btn:hover {
    transform: scale(1.02);
    box-shadow: 0 0 70px rgba(139, 92, 246, 0.5), inset 0 0 40px rgba(139, 92, 246, 0.2);
}

.generate-btn:active {
    transform: scale(0.98);
}

.btn-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    z-index: 2;
}

.pulse-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal-content {
    background: #0D1117;
    border: 1px solid var(--panel-border);
    border-radius: 20px;
    width: 90%;
    max-width: 400px;
    padding: 2rem 1.5rem;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);
}

.success-check {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #8b5cf6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    color: #8b5cf6;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
}

.countdown-box {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--panel-border);
    border-radius: 10px;
    padding: 0.8rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
}

.direction-card {
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: inset 0 0 30px rgba(16, 185, 129, 0.05);
}

.direction-card.put {
    border-color: rgba(239, 68, 68, 0.3);
}

.direction-card.wait {
    border-color: rgba(245, 158, 11, 0.3);
}

.chart-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    z-index: 0;
    opacity: 0.15;
    background-image: 
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    animation: pan-chart 10s linear infinite;
    pointer-events: none;
}

@keyframes pan-chart {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100px); }
}

.dir-arrow-wrapper {
    width: 100px;
    height: 120px;
    margin: 0 auto;
    filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.6));
    animation: float-arrow 2s infinite ease-in-out;
}

@keyframes float-arrow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.stats-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    border: 1px solid var(--panel-border);
    border-radius: 12px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    flex: 1;
}

.stat-item:not(:last-child) {
    border-right: 1px solid var(--panel-border);
}

.got-it-btn {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    background: linear-gradient(135deg, #4F46E5, #9333EA);
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
}

/* Modal Loading View */
.modal-loading-view {
    position: relative;
    padding: 3rem 1rem;
    text-align: center;
    overflow: hidden;
    border-radius: 20px;
}

.radar-wrapper {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.radar-circle {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(139, 92, 246, 0.5);
    animation: radar-pulse 3s infinite cubic-bezier(0.25, 1, 0.5, 1);
}

.radar-outer {
    width: 100%;
    height: 100%;
    animation-delay: 1.5s;
}

.radar-inner {
    width: 70%;
    height: 70%;
}

.radar-core {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border: 2px solid #8b5cf6;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.4);
}

.orbit-path {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: rotate 3s linear infinite;
}

.orbit-dot {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #d8b4e2;
    border-radius: 50%;
    box-shadow: 0 0 10px #d8b4e2, 0 0 20px #8b5cf6;
}

@keyframes radar-pulse {
    0% { transform: scale(0.5); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.particles {
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    pointer-events: none;
    background-image: radial-gradient(1.5px 1.5px at 20px 30px, var(--color-accent), transparent);
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: drift 30s linear infinite;
    opacity: 0.1;
    z-index: 0;
}

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}

.gradient-text {
  @apply bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent;
}

.loading-title {
  @apply text-xl font-black text-white uppercase tracking-tighter mb-1;
}

.loading-subtitle {
  @apply text-[10px] font-bold text-slate-500 uppercase tracking-widest;
}

.strategy-toggle {
    background: rgba(0,0,0,0.3);
    border: 1px solid var(--panel-border);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
}

.strategy-toggle:hover {
    background: rgba(255, 255, 255, 0.05);
}

.strategy-toggle.active {
    background: rgba(139, 92, 246, 0.2);
    border-color: #8b5cf6;
    color: #fff;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
}

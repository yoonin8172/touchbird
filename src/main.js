ClickBattle.init("yoonin");


document.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// 더블탭 확대 방지
let lastTouchTime = 0;
document.addEventListener('touchend', function (e) {
    const now = Date.now();
    if (now - lastTouchTime <= 300) {
        e.preventDefault();
    }
    lastTouchTime = now;
}, { passive: false });

// 안전하게 DOM 로드 후 실행
(function registerHandlers() {
    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    onReady(() => {
        // index.html => "게임 설명"
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                window.location.href = 'explain.html';
            });
        }

        // explain.html => "시작하기"
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {


                ClickBattle.recordClick();
                window.location.href = 'stage1.html';
            });
        }
    });
})();

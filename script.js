/**
 * KakaoPay Event Page — Main Script
 *
 * 1. Parallax Background Coins
 *    배경 코인들이 스크롤 속도차로 깊이감을 연출.
 *    CSS top%로 위치 잡힌 코인에 translateY(scrollY * speed)를 더해
 *    속도를 낮춤 → 콘텐츠보다 천천히 스크롤 = 배경처럼 보임.
 *
 *    speed = 0  : 콘텐츠와 동일 (패럴렉스 없음)
 *    speed = 1  : 완전 고정 (position:fixed 동일)
 *    사용 범위   : 0.3 ~ 0.7
 */

(function () {
  'use strict';

  /* ───────────────────────────────
     설정값
  ─────────────────────────────── */
  // var PARALLAX_MAX_WIDTH = 1024; // 전 구간 패럴렉스 활성화

  /* ───────────────────────────────
     1. Parallax
  ─────────────────────────────── */
  var coins = document.querySelectorAll('.bg-coins .coin[data-speed]');
  var ticking = false;

  function updateParallax() {
    var scrollY = window.scrollY || window.pageYOffset;
    for (var i = 0; i < coins.length; i++) {
      var speed = parseFloat(coins[i].dataset.speed) || 0;
      /* ③ translate3d(0, Y, 0) → GPU 컴포지팅 레이어 분리, 레이아웃 재계산 방지 */
      coins[i].style.transform = 'translate3d(0,' + (scrollY * speed) + 'px,0)';
    }
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  function initParallax() {
    // 접근성: 움직임 최소화 선호 시 비활성화
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax(); // 초기 위치 즉시 적용
  }

  /* ───────────────────────────────
     2. Entrance Animations
  ─────────────────────────────── */
  function initEntranceAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var items = document.querySelectorAll('#sec02 .event-item');
    if (!items.length || !('IntersectionObserver' in window)) return;

    items.forEach(function (item, i) {
      item.classList.add('anim-item');
      item.style.transitionDelay = (i * 0.12) + 's';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (item) { observer.observe(item); });
  }

  /* ───────────────────────────────
     초기화
  ─────────────────────────────── */
  function init() {
    initParallax();
    initEntranceAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

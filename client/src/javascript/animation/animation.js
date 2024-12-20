import gsap from 'gsap';

gsap.from('.action-item', { x: 2000})
.to('.action-item', { x: 0, rotation: 360, duration: 4, stagger: true });
import React, { useEffect, useRef, useState } from 'react';

/**
 * Lightweight Falling Marigold Petals Canvas
 * Optimized for 60fps on mobile with 0 extra library dependencies.
 * Respects window.matchMedia('(prefers-reduced-motion: reduce)') and tab visibility.
 */
export const PetalsCanvas = () => {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Number of petals based on screen size (max 28 on desktop, 16 on mobile for silky smooth performance)
    const petalCount = window.innerWidth < 768 ? 16 : 28;

    // Marigold petal color palette
    const colors = [
      { fill: '#FFA000', shadow: 'rgba(230, 81, 0, 0.4)' },
      { fill: '#FFB300', shadow: 'rgba(255, 111, 0, 0.4)' },
      { fill: '#F57C00', shadow: 'rgba(216, 67, 21, 0.4)' },
      { fill: '#FF8F00', shadow: 'rgba(230, 81, 0, 0.4)' },
      { fill: '#E65100', shadow: 'rgba(191, 54, 12, 0.4)' },
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 9 + 8; // 8px to 17px
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 1.8;
        this.swing = Math.random() * Math.PI * 2;
        this.swingSpeed = Math.random() * 0.02 + 0.015;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.45 + 0.45; // 0.45 to 0.9
      }

      update() {
        this.y += this.speedY;
        this.swing += this.swingSpeed;
        this.x += Math.sin(this.swing) * 0.8 + this.speedX;
        this.rotation += this.rotSpeed;

        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        // Draw curved teardrop / marigold petal shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(
          this.size * 0.8,
          -this.size * 0.5,
          this.size * 0.8,
          this.size * 0.7,
          0,
          this.size
        );
        ctx.bezierCurveTo(
          -this.size * 0.8,
          this.size * 0.7,
          -this.size * 0.8,
          -this.size * 0.5,
          0,
          -this.size
        );
        ctx.closePath();

        ctx.fillStyle = this.color.fill;
        ctx.shadowColor = this.color.shadow;
        ctx.shadowBlur = 4;
        ctx.fill();

        // Delicate inner spine highlight
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.6);
        ctx.lineTo(0, this.size * 0.6);
        ctx.strokeStyle = 'rgba(255, 236, 179, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal());

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < petals.length; i++) {
          petals[i].update();
          petals[i].draw();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
};

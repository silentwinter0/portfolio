import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize canvas when window size changes
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let time = 0;

        // Render loop
        const render = () => {
            time += 0.007;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const waveCount = 40;

            for (let i = 0; i < waveCount; i++) {
                const ampModifier = i / waveCount;
                
                ctx.beginPath();
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = `rgba(25, 0, 250, ${0.8 - ampModifier / 2})`;

                const yOffset = (canvas.height * 0.2) + (i * 15);
                const amplitude = 50 * (1 - ampModifier);
                const frequency = 0.01;

                for (let x = 0; x <= canvas.width; x += 5) {
                    const wave1 = Math.sin(x * frequency + time + (i * 0.5)) * amplitude;
                    const wave2 = Math.sin(x * frequency * 2.5 + time) * (amplitude / 5 * 0.4);
                    const y = yOffset + wave1 + wave2;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        // Remove in case component vanishes
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000000',
            zIndex: -1,
            pointerEvents: 'none',
        }}
        />
    );
};

export default Hero;
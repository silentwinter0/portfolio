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
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;

            const centerY = canvas.height / 2;
            const amplitude = 100;
            const frequency = 0.01;

            for (let x = 0; x < canvas.width; x++) {
                const y = centerY + Math.sin(x * frequency + time) * amplitude;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

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
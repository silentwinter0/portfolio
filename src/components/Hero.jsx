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

        // Render loop
        const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Test ball
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
        ctx.fill();

        animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        // Remove div in case 
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
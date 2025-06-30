import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeBackground = ({ selectedOption = null }) => {
  const canvasRef = useRef();
  const sceneRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const geometries = [
      new THREE.SphereGeometry(0.3, 32, 32),
      new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8),
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.35),
    ];

    const colorPalette = selectedOption
      ? getColorsForOption(selectedOption)
      : [0xf3e8ff, 0xfdf2f8, 0xf0f9ff, 0xf7f1e8];

    const materials = colorPalette.map(
      (color) =>
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.25,
        })
    );

    const meshes = [];
    const numShapes = selectedOption ? 16 : 12;

    for (let i = 0; i < numShapes; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;
    sceneRef.current = { scene, camera, renderer, meshes };

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      meshes.forEach((mesh, i) => {
        const radius = 5 + i * 0.5;
        const speed = 0.0005 + i * 0.0001;

        mesh.position.x += Math.cos(time * speed + i) * 0.01;
        mesh.position.y += Math.sin(time * speed * 0.7 + i) * 0.008;
        mesh.position.z += Math.cos(time * speed * 0.5 + i) * 0.006;

        mesh.rotation.x += 0.002 + Math.sin(time + i) * 0.001;
        mesh.rotation.y += 0.0015 + Math.cos(time * 0.7 + i) * 0.0008;
        mesh.rotation.z += Math.sin(time * 0.3 + i) * 0.0005;

        const scaleBase = 1 + Math.sin(time * 0.5 + i * 0.5) * 0.1;
        const scalePulse = 1 + Math.cos(time * 2 + i) * 0.02;
        mesh.scale.setScalar(scaleBase * scalePulse);

        const opacity = 0.15 + Math.sin(time * 0.3 + i) * 0.1;
        mesh.material.opacity = Math.max(0.05, opacity);

        if (selectedOption) {
          const hue = (time * 0.1 + i * 0.2) % 1;
          const color = new THREE.Color();
          color.setHSL(hue, 0.3, 0.8);
          mesh.material.color = color;
        }
      });

      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    setTimeout(() => setIsLoaded(true), 100);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
    };
  }, [selectedOption]);

  const getColorsForOption = (option) => {
    const colorMaps = {
      grounding: [0xd4a574, 0xf7f1e8, 0xa1a1aa, 0xe7e5e4],
      softness: [0xfecaca, 0xfdf2f8, 0xf9a8d4, 0xfce7f3],
      energy: [0xfbbf24, 0xfff7ed, 0xf97316, 0xfed7aa],
      freedom: [0x93c5fd, 0xf0f9ff, 0xc4b5fd, 0xe0e7ff],
    };
    return colorMaps[option] || [0xf3e8ff, 0xfdf2f8, 0xf0f9ff, 0xf7f1e8];
  };

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-2000 ${
        isLoaded ? "opacity-40 md:opacity-60" : "opacity-0"
      }`}
      style={{
        background: "transparent",
        mixBlendMode: "normal",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ThreeBackground;

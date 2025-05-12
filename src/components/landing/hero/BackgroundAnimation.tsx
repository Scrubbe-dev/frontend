import { useEffect, useRef } from "react";
import * as THREE from "three";

// Single corner animation
function CornerAnimation({ width, height }: { width: number; height: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const currentContainer = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentContainer.appendChild(renderer.domElement);

    const nodes: THREE.Mesh[] = [];
    const connections: { line: THREE.Line; node1: number; node2: number }[] =
      [];
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
      const geometry = new THREE.SphereGeometry(0.2, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x60a5fa),
        transparent: true,
        opacity: 0.7,
      });
      const node = new THREE.Mesh(geometry, material);
      node.position.x = (Math.random() - 0.5) * 30;
      node.position.y = (Math.random() - 0.5) * 15;
      node.position.z = (Math.random() - 0.5) * 10 - 15;

      node.userData = {
        velocityX: (Math.random() - 0.5) * 0.04,
        velocityY: (Math.random() - 0.5) * 0.04,
        velocityZ: (Math.random() - 0.5) * 0.02,
      };

      nodes.push(node);
      scene.add(node);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.85) {
          const material = new THREE.LineBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.3,
          });
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, material);
          connections.push({ line, node1: i, node2: j });
          scene.add(line);
        }
      }
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      nodes.forEach((node) => {
        node.position.x += node.userData.velocityX;
        node.position.y += node.userData.velocityY;
        node.position.z += node.userData.velocityZ;

        if (Math.abs(node.position.x) > 15) node.userData.velocityX *= -1;
        if (Math.abs(node.position.y) > 8) node.userData.velocityY *= -1;
        if (Math.abs(node.position.z) > 10) node.userData.velocityZ *= -1;
      });

      connections.forEach((conn) => {
        const points = [nodes[conn.node1].position, nodes[conn.node2].position];
        conn.line.geometry.setFromPoints(points);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      currentContainer.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return <div ref={containerRef} className="w-full h-full" />;
}

// HERO section wrapper
export default function HeroSection() {
  // Adjusted positions with slight upward shift for each corner
  const corners = [
    { pos: "top-0 left-0", shift: "translate-y-2" },
    { pos: "top-0 right-0", shift: "translate-y-2" },
    { pos: "bottom-0 left-0", shift: "-translate-y-2 -translate-x-1/4" }, // more left
    { pos: "bottom-0 right-0", shift: "-translate-y-2 translate-x-1/4" }, // more right
  ];
  
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Background Corner Animations */}
      {corners.map(({ pos, shift }, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-1/2 h-1/2 pointer-events-none z-0 transform ${shift}`}
        >
          <CornerAnimation
            width={window.innerWidth / 2}
            height={window.innerHeight / 2}
          />
        </div>
      ))}

      {/* Foreground Hero Content */}
    {/*   <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Hero Section</h1>
        <p className="mt-4 text-lg text-center max-w-xl">
          This is a foreground section rendered above animated corners. The
          animations are isolated and scoped only to this section.
        </p>
      </div> */}
    </section>
  );
}

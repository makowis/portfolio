import type { FC } from 'react';
import styles from '../../../styles/network-background.module.css';

type Node = {
  x: number;
  y: number;
};

const VIEW_BOX_WIDTH = 1200;
const VIEW_BOX_HEIGHT = 800;
const EDGE_DISTANCE_THRESHOLD = 235;

const nodes: Node[] = [
  { x: 60, y: 78 },
  { x: 182, y: 158 },
  { x: 302, y: 56 },
  { x: 424, y: 182 },
  { x: 545, y: 92 },
  { x: 664, y: 204 },
  { x: 786, y: 68 },
  { x: 902, y: 172 },
  { x: 1024, y: 62 },
  { x: 1142, y: 188 },
  { x: 118, y: 322 },
  { x: 258, y: 402 },
  { x: 398, y: 330 },
  { x: 556, y: 418 },
  { x: 702, y: 352 },
  { x: 842, y: 432 },
  { x: 978, y: 344 },
  { x: 1124, y: 424 },
  { x: 82, y: 598 },
  { x: 224, y: 702 },
  { x: 362, y: 622 },
  { x: 502, y: 718 },
  { x: 642, y: 638 },
  { x: 784, y: 730 },
  { x: 922, y: 648 },
  { x: 1062, y: 722 },
  { x: 1176, y: 606 },
];

const edges: [number, number][] = nodes.flatMap((from, fromIndex) =>
  nodes
    .slice(fromIndex + 1)
    .map((to, offset): [number, number] => [fromIndex, fromIndex + 1 + offset])
    .filter(([, toIndex]) => {
      const to = nodes[toIndex];
      return Math.hypot(to.x - from.x, to.y - from.y) < EDGE_DISTANCE_THRESHOLD;
    }),
);

const NetworkBackground: FC = () => (
  <div className={styles.container} aria-hidden="true">
    <div className={styles.glow} />
    <svg
      className={styles.network}
      viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <defs>
        <linearGradient id="network-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-neon-violet)" />
          <stop offset="55%" stopColor="var(--color-neon-cyan)" />
          <stop offset="100%" stopColor="var(--color-neon-green)" />
        </linearGradient>
      </defs>
      <g stroke="url(#network-stroke)" strokeWidth="1">
        {edges.map(([fromIndex, toIndex]) => (
          <line
            key={`${fromIndex}-${toIndex}`}
            x1={nodes[fromIndex].x}
            y1={nodes[fromIndex].y}
            x2={nodes[toIndex].x}
            y2={nodes[toIndex].y}
          />
        ))}
      </g>
      <g fill="url(#network-stroke)">
        {nodes.map((node, index) => (
          <circle
            key={`${node.x}-${node.y}`}
            className={styles.node}
            cx={node.x}
            cy={node.y}
            r={2 + (index % 3)}
            style={{ animationDelay: `${(index % 7) * 0.45}s` }}
          />
        ))}
      </g>
    </svg>
  </div>
);

export default NetworkBackground;

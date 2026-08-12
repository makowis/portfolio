import type { FC } from 'react';
import styles from '../../../styles/network-background.module.css';

type Node = {
  x: number;
  y: number;
};

const VIEW_BOX_WIDTH = 1200;
const VIEW_BOX_HEIGHT = 800;
const NEIGHBOR_COUNT = 3;

// Irregular positions keep the mesh from reading as a repeating grid.
const nodes: Node[] = [
  { x: 42, y: 118 },
  { x: 168, y: 46 },
  { x: 214, y: 236 },
  { x: 96, y: 330 },
  { x: 312, y: 128 },
  { x: 388, y: 292 },
  { x: 268, y: 402 },
  { x: 148, y: 486 },
  { x: 36, y: 560 },
  { x: 92, y: 690 },
  { x: 236, y: 618 },
  { x: 348, y: 726 },
  { x: 430, y: 546 },
  { x: 512, y: 388 },
  { x: 466, y: 174 },
  { x: 574, y: 62 },
  { x: 662, y: 226 },
  { x: 604, y: 460 },
  { x: 528, y: 664 },
  { x: 640, y: 762 },
  { x: 742, y: 604 },
  { x: 806, y: 402 },
  { x: 728, y: 96 },
  { x: 862, y: 168 },
  { x: 946, y: 318 },
  { x: 884, y: 528 },
  { x: 812, y: 716 },
  { x: 964, y: 664 },
  { x: 1058, y: 486 },
  { x: 1096, y: 246 },
  { x: 1010, y: 76 },
  { x: 1158, y: 118 },
  { x: 1174, y: 372 },
  { x: 1128, y: 610 },
  { x: 1044, y: 758 },
  { x: 1180, y: 726 },
];

const toEdgeKey = (a: number, b: number): string =>
  a < b ? `${a}-${b}` : `${b}-${a}`;

// Connect each node to its nearest neighbours so the mesh stays irregular.
const edges: [number, number][] = Array.from(
  new Set(
    nodes.flatMap((from, fromIndex) =>
      nodes
        .map((to, toIndex) => ({
          toIndex,
          distance: Math.hypot(to.x - from.x, to.y - from.y),
        }))
        .filter(({ toIndex }) => toIndex !== fromIndex)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, NEIGHBOR_COUNT)
        .map(({ toIndex }) => toEdgeKey(fromIndex, toIndex)),
    ),
  ),
).map((key): [number, number] => {
  const [fromIndex, toIndex] = key.split('-').map(Number);
  return [fromIndex, toIndex];
});

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
            r={1.5 + (index % 3)}
            style={{ animationDelay: `${(index % 7) * 0.45}s` }}
          />
        ))}
      </g>
    </svg>
  </div>
);

export default NetworkBackground;

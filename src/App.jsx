import { motion } from 'framer-motion';
import { LiquidCoreScene } from './components/Body/LiquidCoreScene';
import { BrainPanel } from './components/Brain/BrainPanel';
import { AgentPanel } from './components/Agent/AgentPanel';

const spring = { type: 'spring', stiffness: 110, damping: 22, mass: 1.3 };

export function App() {
  return (
    <main className="app-shell">
      <div className="bg-gradient" />
      <section className="core-stage">
        <LiquidCoreScene status="idle" />
      </section>

      <motion.section
        className="hud-grid"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
      >
        <BrainPanel />
        <AgentPanel />
      </motion.section>
    </main>
  );
}

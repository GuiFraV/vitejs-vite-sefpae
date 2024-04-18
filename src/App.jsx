import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Stars from './components/Stars';
import Card from './components/Card';

function App() {
  return (
    <div className="h-screen">
      <Canvas
        style={{ height: '100%', display: 'block', backgroundColor: 'black' }}
      >
        <Stars />
        <Html center>
          <Card />
        </Html>
      </Canvas>
    </div>
  );
}

export default App;

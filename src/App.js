import './App.css';
import ClassCounterLifeCycle from './components/ClassCounterLifeCycle';
import ClassCounters from './components/ClassCounters';
import ClassIntervalCounter from './components/ClassIntervalCounter';
import ClassMousePositionUpdateOnlyOnce from './components/ClassMousePositionUpdateOnlyOnce';
import HookCounter from './components/HookCounter';
import HookCounterArray from './components/HookCounterArray';
import HookCounterComlex from './components/HookCounterComlex';
import HookCounterObject from './components/HookCounterObject';
import HookIntervalCounter from './components/HookIntervalCounter';
import HookMousePositionUseEffect from './components/HookMousePositionUseEffect';
import HookMouseUseEffectCleanup from './components/HookMouseUseEffectCleanup';
import HookUseEffect from './components/HookUseEffect';

function App() {
  return (
    <div className="App">
      <ClassCounters />
      <HookCounter />
      <HookCounterComlex />
      <HookCounterObject />
      <HookCounterArray />
      <ClassCounterLifeCycle />
      <HookUseEffect />
      <ClassMousePositionUpdateOnlyOnce />
      <HookMousePositionUseEffect />
      <HookMouseUseEffectCleanup />
      <ClassIntervalCounter />
      <HookIntervalCounter />
    </div>
  );
}

export default App;

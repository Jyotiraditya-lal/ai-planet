import ReactFlow, { addEdge, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import  useWorkflow  from './hooks/useWorkflow';
import InputNode from './components/InputNode/InputNode';
import LLMNode from './components/LLMNode/LLMNode';
import OutputNode from './components/OutputNode/OutputNode';

const nodeTypes = { input: InputNode, llm: LLMNode, output: OutputNode };

const WorkflowCanvas = () => {
  const { nodes, edges, addNode, addEdge } = useWorkflow();

  const onConnect = (params: { source: any; target: any; }) => {
    const sourceType = nodes.find((node: { id: any; }) => node.id === params.source)?.type;
    const targetType = nodes.find((node: { id: any; }) => node.id === params.target)?.type;

    if ((sourceType === 'input' && targetType === 'llm') ||
        (sourceType === 'llm' && targetType === 'output')) {
      addEdge(params);
    } else {
      alert('Invalid connection');
    }
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Controls />
    </ReactFlow>
  );
};

export default WorkflowCanvas;

import { callOpenAI } from './utils/api';
import useWorkflow  from './hooks/useWorkflow';

const runWorkflow = async () => {
  const { nodes } = useWorkflow();

  const inputNode = nodes.find((node: { type: string; }) => node.type === 'input');
  const llmNode = nodes.find((node: { type: string; }) => node.type === 'llm');
  const outputNode = nodes.find((node: { type: string; }) => node.type === 'output');

  if (!inputNode || !llmNode || !outputNode) {
    alert('Incomplete workflow');
    return;
  }

  const query = inputNode.data.query;
  const apiKey = llmNode.data.apiKey;
  const model = llmNode.data.model;

  try {
    const response = await callOpenAI(apiKey, model, query);

    outputNode.data.response = response;
  } catch (error:any) {
    alert('Error running workflow: ' + error.message);
  }
};

export default runWorkflow;

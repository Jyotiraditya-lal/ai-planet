export const callOpenAI = async (apiKey: any, model: any, prompt: any) => {
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          prompt,
          max_tokens: 100,
        }),
      });
  
      const data = await response.json();
      return data.choices[0].text;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw error;
    }
  };
  
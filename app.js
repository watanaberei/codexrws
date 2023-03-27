async function fetchChatGPTResponse(prompt) {
    const API_KEY = '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';
    const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    });
  
    const body = JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    });
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: body,
      });
  
      const data = await response.json();
      return data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      return `Error: ${error.message}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const runButton = document.getElementById('run');
    const output = document.getElementById('output');
  
    runButton.addEventListener('click', async () => {
      const prompt = input.value;
      const response = await fetchChatGPTResponse(prompt);
      output.textContent = response;
    });
  });
  
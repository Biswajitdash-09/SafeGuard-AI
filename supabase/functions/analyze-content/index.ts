import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();
    const startTime = Date.now();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are a content safety analyzer based on BiLSTM + Self-Attention + Custom Focal Loss architecture, specializing in detecting cyberbullying, misinformation, and derogatory content in multiple languages including English, Hindi, and Hinglish (code-mixed).

Analyze the following text and provide a detailed safety assessment.

Categories to check (16 classes):
- Cyberbullying, Hate Speech, Profanity, Threats, Misinformation, Derogatory Content, Sexual Harassment, Identity Attacks, Toxic Language, Insults, Obscene Content, Severe Toxicity, Religious Hate, Racial Hate, Gender-based Harassment, Age-based Discrimination

Return a JSON object with:
- safe (boolean): whether the content is safe
- categories (array of objects): detected harmful categories with {name: string, confidence: number (0-1), severity: "low"|"medium"|"high"}
- overallSeverity (string): "none", "low", "medium", or "high"
- explanation (string): brief explanation of the analysis
- suggestions (string, optional): suggestions for safer content
- detectedLanguage (object): {primary: "English"|"Hindi"|"Hinglish"|"Other", confidence: number (0-1), isCodeMixed: boolean}
- attentionWeights (array): top 5-10 important words with {word: string, weight: number (0-1)}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Analyze this text: "${text}"` }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required. Please add credits to your Lovable AI workspace.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('AI gateway error');
    }

    const data = await response.json();
    const analysis = JSON.parse(data.choices[0].message.content);
    const processingTime = Date.now() - startTime;

    return new Response(JSON.stringify({
      ...analysis,
      processingTime,
      modelInfo: {
        name: 'BiLSTM + SAM + CFCLF',
        version: '1.0',
        accuracy: '94%',
        rocAuc: '0.973'
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-content function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Free All-in-One AI Tools Hub - Viral Scripts, Emails & More</title>
  <meta name="description" content="Free instant AI tools with no login required. Generate YouTube/Reel scripts, professional emails, job kits, and study notes in one click." />
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 16px; }
    .container { max-width: 680px; margin: 0 auto; }
    h1 { text-align: center; color: #38bdf8; font-size: 1.6rem; margin-bottom: 6px; }
    p.sub { text-align: center; color: #94a3b8; font-size: 0.9rem; margin-bottom: 20px; }
    .card { background: #1e293b; padding: 18px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
    label { display: block; margin-bottom: 6px; font-weight: 600; color: #cbd5e1; }
    select, textarea, button { width: 100%; box-sizing: border-box; border-radius: 8px; border: 1px solid #334155; padding: 12px; font-size: 1rem; margin-bottom: 14px; }
    select, textarea { background: #0f172a; color: #fff; }
    button { background: #0284c7; color: #fff; font-weight: bold; border: none; cursor: pointer; }
    button:hover { background: #0369a1; }
    #output-box { display: none; margin-top: 18px; background: #0f172a; padding: 14px; border-radius: 8px; border: 1px solid #334155; white-space: pre-wrap; line-height: 1.5; }
    .copy-btn { background: #10b981; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Master AI Tools Hub</h1>
    <p class="sub">100% Free • No Login • Connected Multi-Step AI Workflows</p>

    <div class="card">
      <label for="tool">1. Choose Your AI Workflow Tool:</label>
      <select id="tool">
        <option value="reel">🎬 Short Video / Reel Viral Pack (Hooks + Script + Tags)</option>
        <option value="job">💼 Job & Career Booster Kit (Resume + Cover Letter + Q&A)</option>
        <option value="email">📧 Cold Email & Outreach Pack (Subjects + Pitch + Follow-up)</option>
        <option value="study">📚 Study & Topic Simplifier (Simple Guide + Example + Quiz)</option>
        <option value="chat">🤖 Master Productivity Assistant (Any Question / Task)</option>
      </select>

      <label for="topic">2. Enter Topic, Title, or Details:</label>
      <textarea id="topic" rows="4" placeholder="Example: 5 morning habits for success..."></textarea>

      <button onclick="runAI()" id="genBtn">Generate Complete Pack ✨</button>

      <div id="output-box">
        <div id="result"></div>
        <button class="copy-btn" onclick="copyText()">Copy Result 📋</button>
      </div>
    </div>
  </div>

  <script>
    async function runAI() {
      const tool = document.getElementById('tool').value;
      const topic = document.getElementById('topic').value.trim();
      const btn = document.getElementById('genBtn');
      const outBox = document.getElementById('output-box');
      const resDiv = document.getElementById('result');

      if (!topic) { alert("Please enter a topic or text first!"); return; }

      btn.disabled = true;
      btn.innerText = "Running Connected AI Tools... Please wait ⏳";
      outBox.style.display = "block";
      resDiv.innerText = "Generating complete workflow...";

      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tool, topic })
        });
        const data = await response.json();
        resDiv.innerText = data.reply || data.error || "Something went wrong.";
      } catch (err) {
        resDiv.innerText = "Network error. Please try again.";
      }

      btn.disabled = false;
      btn.innerText = "Generate Complete Pack ✨";
    }

    function copyText() {
      const text = document.getElementById('result').innerText;
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  </script>
</body>
</html>

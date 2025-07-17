// ===============================
// FAQ Toggle
// ===============================
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// ===============================
// Contact Us Form (Demo Simulation)
const sendBtn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');

sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        statusMsg.textContent = "Please fill all fields.";
        statusMsg.style.color = "red";
        return;
    }

    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "var(--brand-color)";

    setTimeout(() => {
        statusMsg.textContent = "✅ Message sent successfully!";
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }, 1500);
});

// ===============================
// Hamburger Menu
// ===============================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('show');
    }
});

// ===============================
// Cutting Edge Code Generator
// ===============================
const generateBtn = document.getElementById('generateBtn');
const liveTerminal = document.getElementById('liveTerminal');
const codeWrapper = document.getElementById('codeWrapper');
const codeTerminal = document.getElementById('codeTerminal');
const progressBar = document.getElementById('progress');
const copyBtn = document.getElementById('copyBtn');
const runTestsBtn = document.getElementById('runTestsBtn');
const runResults = document.getElementById('runResults');
const languageSelect = document.getElementById('languageSelect');
const optimizationSuggestions = document.getElementById('optimizationSuggestions');
const aiThinking = document.getElementById('aiThinking');

function typeWriter(text, element, delay = 40, callback) {
    let i = 0;
    element.innerHTML = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            element.scrollTop = element.scrollHeight;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

generateBtn.addEventListener('click', () => {
    const prompt = document.getElementById('promptInput').value.trim();
    const language = languageSelect.value;
    if (!prompt) {
        liveTerminal.innerHTML = "<span style='color:red'>Please enter a prompt.</span>";
        return;
    }

    liveTerminal.innerHTML = "";
    codeWrapper.style.display = "none";
    runResults.style.display = "none";
    codeTerminal.textContent = "";
    optimizationSuggestions.textContent = "";
    progressBar.style.width = "0%";
    aiThinking.style.display = "block"; // ✅ הצגת AI Thinking

    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 2;
            progressBar.style.width = progress + "%";
        }
    }, 80);

    typeWriter(`System: ✅ Analyzing prompt...\n`, liveTerminal, 35, () => {
        setTimeout(() => {
            typeWriter(liveTerminal.innerHTML + `System: 🔍 Selecting best practices for ${language.toUpperCase()}...\n`, liveTerminal, 35, () => {
                setTimeout(() => {
                    typeWriter(liveTerminal.innerHTML + `System: ⚙️ Generating optimized, clean test code...\n`, liveTerminal, 35, () => {
                        setTimeout(() => {
                            typeWriter(liveTerminal.innerHTML + `System: ✅ Code generation completed successfully.\n`, liveTerminal, 35, () => {
                                clearInterval(progressInterval);
                                progressBar.style.width = "100%";
                                generateSmartCode(language, prompt);
                                aiThinking.style.display = "none"; // ✅ הסתרת AI Thinking אחרי סיום
                            });
                        }, 800);
                    });
                }, 800);
            });
        }, 800);
    });
});

function generateSmartCode(language, prompt) {
    const testName = prompt.replace(/\s+/g, "_").toLowerCase();
    let code = "";
    let suggestions = [];

    switch (language) {
        case "python":
            code =
`import pytest
import requests

@pytest.mark.api
def test_${testName}():
    """
    Test Case: Validate ${prompt}
    Steps:
    1. Send POST request with valid data.
    2. Verify status code is 200.
    3. Check response contains expected keys.
    """
    response = requests.post("https://api.example.com/${testName}", json={"param": "value"})
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    json_data = response.json()
    assert "success" in json_data, "Missing 'success' key in response"`;
            suggestions = [
                "✅ Consider mocking external APIs to reduce dependencies.",
                "✅ Use fixtures to set up and tear down test data efficiently."
            ];
            break;

        case "java":
            code =
`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.net.http.*;

public class Test${testName.charAt(0).toUpperCase() + testName.slice(1)} {
    @Test
    public void test${testName}() throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(new java.net.URI("https://api.example.com/${testName}"))
            .POST(HttpRequest.BodyPublishers.ofString("{\\"param\\":\\"value\\"}"))
            .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        assertEquals(200, response.statusCode(), "Expected 200 OK");
        assertTrue(response.body().contains("success"), "Response should contain 'success'");
    }
}`;
            suggestions = [
                "✅ Reuse HttpClient instance for better performance.",
                "✅ Add parameterized tests for multiple input scenarios."
            ];
            break;

        case "javascript":
            code =
`const request = require('supertest');
describe("${prompt}", () => {
  it("should return success", async () => {
    const res = await request("https://api.example.com")
      .post("/${testName}")
      .send({ param: "value" });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success");
  });
});`;
            suggestions = [
                "✅ Use test data factories to avoid hardcoding values.",
                "✅ Run tests in parallel with Jest's --maxWorkers option."
            ];
            break;

        case "csharp":
            code =
`using NUnit.Framework;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

[TestFixture]
public class Test${testName.charAt(0).toUpperCase() + testName.slice(1)} {
    [Test]
    public async Task Test${testName}() {
        var client = new HttpClient();
        var response = await client.PostAsync("https://api.example.com/${testName}",
            new StringContent("{\\"param\\":\\"value\\"}", System.Text.Encoding.UTF8, "application/json"));
        Assert.AreEqual(200, (int)response.StatusCode, "Expected 200 OK");
        var json = JObject.Parse(await response.Content.ReadAsStringAsync());
        Assert.IsTrue(json.ContainsKey("success"), "Response should contain 'success'");
    }
}`;
            suggestions = [
                "✅ Dispose of HttpClient properly or reuse singleton for performance.",
                "✅ Use data-driven tests with TestCaseSource."
            ];
            break;
    }

    // ✅ עדכון ה-Highlight לשפה הנבחרת
    codeTerminal.className = "";
    codeTerminal.classList.add(`language-${language}`);

    // Typewriter effect + Highlight
    codeTerminal.textContent = "";
    codeWrapper.style.display = "block";
    let i = 0;
    const interval = setInterval(() => {
        if (i < code.length) {
            codeTerminal.textContent += code.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            hljs.highlightElement(codeTerminal);
            showOptimizationSuggestions(suggestions);
        }
    }, 8);
}

function showOptimizationSuggestions(suggestions) {
    optimizationSuggestions.innerHTML = "<strong>Optimization Suggestions:</strong><br>" +
        suggestions.map(s => `• ${s}`).join("<br>");
}

// Copy Button
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeTerminal.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
    });
});

// Run Tests Simulation
runTestsBtn.addEventListener('click', () => {
    runResults.style.display = "block";
    runResults.textContent = "Running tests...";
    runResults.style.color = "#f5f5f5";

    setTimeout(() => {
        const passed = Math.random() > 0.2;
        if (passed) {
            runResults.textContent = "✅ All tests passed successfully!";
            runResults.style.color = "lime";
        } else {
            runResults.textContent = "❌ Some tests failed. Check logs for details.";
            runResults.style.color = "red";
        }
    }, 1500);
});

// ===============================
// Features Animation (on load)
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
});

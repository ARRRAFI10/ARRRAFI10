"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTerminal } from "react-icons/fa";

export default function ExperienceTerminal() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [output, setOutput] = useState<string[]>([
    "$ Welcome to Arr Rafi's Experience Terminal",
    '$ Type "help" for available commands',
    "",
  ]);

  const commands = {
    help: `Available commands:
  ls              - List all experiences
  cat [id]        - View experience details
  skills          - Show technical skills
  achievements    - Display achievements
  clear           - Clear terminal
  whoami          - About me`,

    ls: `total ${experiences.length}
drwxr-xr-x  ${experiences.length} arrafi  staff  ${
      experiences.length * 4096
    }  Jan  7 2025  experiences/

${experiences
  .map(
    (exp, i) =>
      `${i + 1}. ${exp.role.padEnd(35)} ${exp.company.padEnd(30)} ${exp.period}`
  )
  .join("\n")}`,

    whoami: `Arr Rafi - Full-Stack Software Engineer
Location: Mirpur, Dhaka
Education: BSc in CSE, MIST (CGPA: 3.56/4.00)
Current: Assistant Programmer (Software Engineer), MIST ICT Directorate
Focus: Python/Django, PostgreSQL, React, Next.js, secure authentication, and payments`,

    achievements: `🏆 Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🥉 2nd Runner Up - Anatolian Rover Challenge 2022
🏅 5th Place - Anatolian Rover Challenge 2023
📝 3 IEEE papers (QPAIN 2025 and 2026)
💻 800+ competitive-programming problems solved
🎯 Codeforces: 330+ solved (Max: 1239) | CodeChef: Max 1455 | LeetCode: 440+ solved`,

    skills: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:  React, Next.js, Vite, TypeScript, Tailwind CSS
Backend:   Django, Django REST Framework, Django Channels, Celery, WebSockets
Languages: Python, TypeScript, JavaScript, SQL, C++, Java
Databases: PostgreSQL, Redis, MySQL
Infrastructure: Linux/Ubuntu, Nginx, Gunicorn, systemd, PgBouncer, Docker
Tools:     Git, GitHub Actions, pytest, Playwright, load testing
Working knowledge: FastAPI, Node.js, TensorFlow, PyTorch, scikit-learn`,
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = "";

    if (trimmedCmd === "clear") {
      setOutput(["$ Welcome to Arr Rafi's Experience Terminal", ""]);
      return;
    }

    if (trimmedCmd.startsWith("cat ")) {
      const id = trimmedCmd.split(" ")[1];
      const index = parseInt(id) - 1;
      if (index >= 0 && index < experiences.length) {
        const exp = experiences[index];
        response = `
╔════════════════════════════════════════════════════════════╗
║  ${exp.role}
║  ${exp.company}
╠════════════════════════════════════════════════════════════╣
║  Period: ${exp.period}
║  
║  ${exp.description}
║  
║  Key Achievements:
${exp.achievements.map((a) => `║  • ${a}`).join("\n")}
║  
║  Technologies: ${exp.technologies.join(", ")}
╚════════════════════════════════════════════════════════════╝`;
      } else {
        response = `Error: Experience ${id} not found. Use 'ls' to see available experiences.`;
      }
    } else if (commands[trimmedCmd as keyof typeof commands]) {
      response = commands[trimmedCmd as keyof typeof commands];
    } else if (trimmedCmd) {
      response = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    setOutput([...output, `$ ${cmd}`, response, ""]);
  };

  return (
    <section id="experience" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Terminal Window */}
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-[#3c3c3c]">
          {/* Terminal Header */}
          <div className="bg-[#323233] px-4 py-3 flex items-center justify-between border-b border-[#3c3c3c]">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
              </div>
              <span className="text-sm text-gray-400 ml-4 flex items-center space-x-2">
                <FaTerminal />
                <span>bash - arrafi@mist</span>
              </span>
            </div>
            <span className="text-xs text-gray-500 font-mono">
              ~/experience
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm min-h-[600px] max-h-[600px] overflow-y-auto bg-[#1e1e1e]">
            {output.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
                className={`${
                  line.startsWith("$") ? "text-green-400" : "text-gray-300"
                } whitespace-pre-wrap leading-6`}
              >
                {line}
              </motion.div>
            ))}

            {/* Input Line */}
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-green-400">$</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommand(currentCommand);
                    setCurrentCommand("");
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-gray-300"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="animate-pulse text-green-400">▊</span>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#007acc] px-4 py-2 flex items-center justify-between text-white text-xs">
            <span>BASH 5.1.16</span>
            <span>arrafi@mist:~/experience</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Quick Command Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["help", "ls", "whoami", "achievements", "skills", "clear"].map(
            (cmd) => (
              <motion.button
                key={cmd}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleCommand(cmd);
                  setCurrentCommand("");
                }}
                className="px-4 py-2 bg-[#0e639c] hover:bg-[#1177bb] text-white rounded text-sm font-mono transition-colors"
              >
                $ {cmd}
              </motion.button>
            )
          )}
        </div>

        {/* Helper Text */}
        <div className="mt-6 p-4 bg-[#252526] border border-[#3c3c3c] rounded-lg">
          <p className="text-gray-400 text-sm font-mono">
            💡 <span className="text-green-400">Tip:</span> Use commands like{" "}
            <code className="text-[#ce9178]">&quot;cat 1&quot;</code> or{" "}
            <code className="text-[#ce9178]">&quot;cat 2&quot;</code> to view detailed
            experience information
          </p>
        </div>
      </div>
    </section>
  );
}

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

    whoami: `Arr Rafi - Full-Stack Developer & AI/ML Enthusiast
Location: Mirpur, Dhaka
Education: BSc in CSE, MIST (CGPA: 3.56/4.00)
Current: Web Administrator at MIST
Interests: Robotics, Machine Learning, Web Development`,

    achievements: `🏆 Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🥉 2nd Runner Up - Anatolian Rover Challenge 2022
🏅 5th Place - Anatolian Rover Challenge 2023
📝 2 Research Papers Accepted (QPAIN 2025)
💻 330+ Problems Solved on Codeforces (Max: 1239)
🎯 50+ Problems Solved on CodeChef (Max: 1455)`,

    skills: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:  React, Next.js, HTML, CSS, JavaScript
Backend:   Django, Django REST Framework, PHP, Node.js
Languages: Python, Java, C++, JavaScript, PHP
Databases: MySQL, PostgreSQL
ML/AI:     TensorFlow, PyTorch, Computer Vision
Embedded:  Arduino, ESP32, IoT
Tools:     Git, Linux, Docker`,
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
            <code className="text-[#ce9178]">"cat 1"</code> or{" "}
            <code className="text-[#ce9178]">"cat 2"</code> to view detailed
            experience information
          </p>
        </div>
      </div>
    </section>
  );
}
